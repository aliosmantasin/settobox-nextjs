import { NextRequest, NextResponse } from "next/server";
import {
  FacebookAdsApi,
  ServerEvent,
  UserData,
  EventRequest,
  CustomData,
} from "facebook-nodejs-business-sdk";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { eventName, eventId, userData, customData, eventUrl, fbp, fbc } = body;

    if (!eventName || !userData) {
      return NextResponse.json({ error: "Missing required event data" }, { status: 400 });
    }

    const { email, phone, firstName, lastName } = userData;

    // Meta'nın gerektirdiği Erişim Jetonu ve Pixel ID
    // Bu bilgileri .env.local dosyanızdan alacağız
    const accessToken = process.env.META_ACCESS_TOKEN;
    const pixelId = process.env.META_PIXEL_ID;

    if (!accessToken || !pixelId) {
      console.error("Meta Pixel ID or Access Token is not defined in environment variables.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // API'yi başlat
    FacebookAdsApi.init(accessToken);

    // Kullanıcı verilerini oluştur
    const formattedUserData = new UserData()
      .setEmails(email ? [email] : undefined)
      .setPhones(phone ? [phone] : undefined)
      .setFirstNames(firstName ? [firstName] : undefined)
      .setLastNames(lastName ? [lastName] : undefined)
      .setFbp(fbp)
      .setFbc(fbc)
      .setClientIpAddress(req.headers.get("x-forwarded-for"))
      .setClientUserAgent(req.headers.get("user-agent"));

    const { content_name, ...otherCustomProps } = customData;
    const formattedCustomData = new CustomData()
      .setContentName(content_name)
      .setCustomProperties(otherCustomProps);

    // Olay (event) verilerini oluştur
    const serverEvent = new ServerEvent()
      .setEventName(eventName)
      .setEventId(eventId)
      .setEventTime(Math.floor(Date.now() / 1000))
      .setUserData(formattedUserData)
      .setCustomData(formattedCustomData)
      .setEventSourceUrl(eventUrl || req.url)
      .setActionSource("website");

    const eventRequest = new EventRequest(accessToken, pixelId);
    eventRequest.setEvents([serverEvent]);

    await eventRequest.execute();

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    console.error("Meta CAPI Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: "Failed to send event to Meta", details: errorMessage }, { status: 500 });
  }
} 