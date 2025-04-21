"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from "next-intl";


interface AccordionDroneProps {
  teritory:string
}

const AccordionDrone: React.FC<AccordionDroneProps> = ({teritory }) => {

  const t = useTranslations("DronePage")
  const listed = t.raw(`${teritory}.accordionDrone.list`)
  // const listed2 = t.raw(`${teritory}.accordionDrone.list2`)


  return (
    <section className="py-10">
      <div className="container mx-auto max-w-screen-xl px-6 ">
        <span className="text-lg font-bold text-center mb-6">{t(`${teritory}.accordionDrone.span`)}</span>

        <div className="space-y-4">
          {/* Accordion Items */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger><h6>{t(`${teritory}.accordionDrone.subtitle`)}</h6></AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  {listed.map((item:string, index:number) =>(
                      <li key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger><h6>{t(`${teritory}.accordionDrone.subtitle2`)}</h6></AccordionTrigger>
              <AccordionContent>
             
              <ul className="list-disc pl-5 space-y-2">
                  <li>
                  {t(`${teritory}.accordionDrone.prices1`)}
                  </li>

          
              </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger><h6> {t(`${teritory}.accordionDrone.subtitle3`)}</h6></AccordionTrigger>
              <AccordionContent>
                <p>
                {t(`${teritory}.accordionDrone.description`)}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger><h6> {t(`${teritory}.accordionDrone.subtitle4`)}</h6></AccordionTrigger>
              <AccordionContent>
                <p>
                {t(`${teritory}.accordionDrone.description2`)}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger><h6> {t(`${teritory}.accordionDrone.subtitle5`)}</h6></AccordionTrigger>
              <AccordionContent>
                <p>
                {t(`${teritory}.accordionDrone.description3`)}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger><h6>{t(`${teritory}.accordionDrone.subtitle6`)}</h6></AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <p>
                    {t(`${teritory}.accordionDrone.description7`)}
                    </p>
                  </li>
                  <li>
                    <p>
                    {t(`${teritory}.accordionDrone.description8`)}
                    </p>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

        
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AccordionDrone;
