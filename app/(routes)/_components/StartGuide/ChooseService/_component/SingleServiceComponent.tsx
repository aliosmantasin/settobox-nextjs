import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { MdAddLink } from "react-icons/md";

const Services = [
    {
        serviceName: "Meta",
        expilation: "Facebook - Instagram",
        link: "/instagram-sponsorlu-reklam",
    },
    {
        serviceName: "Google",
        expilation: "Google Ads - Google Haritalar",
        link: "/google-ads-reklam-yonetimi",
    },
    {
        serviceName: "Web Tasarım",
        expilation: "İhtiyaca Yönelik Web Tasarım",
        link: "/web-sitesi-yaptirma",
    },
];

export function SingleServiceComponent() {
    return (
        <div className="mt-5 flex justify-center">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-1/3 font-bold">Hizmet İsmi</TableHead>
                        <TableHead className="w-1/3">İçerik</TableHead>
                        <TableHead className="w-1/3 text-right">Link</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Services.map((service) => (
                        <TableRow key={service.serviceName}>
                            <TableCell className="font-medium">{service.serviceName}</TableCell>
                            <TableCell>{service.expilation}</TableCell>
                            <TableCell className="text-right">
                                <Link
                                    href={service.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline flex items-center justify-end gap-2"
                                >
                                   
                                    <MdAddLink className="text-xl text-gray-600 hover:text-blue-600 transition" />
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableCaption className="text-center sm:text-start">Tekil hizmetler olarak belirttiğimiz Meta - Google ve Web Site Tasarım hizmetlerini markalar ayrı ayrı olarak temin edebilmekteler.
                    Bu hizmetlerin fiyatlandırma ve nasıl yönetileceği ilgili linklerde detaylı bir şekilde ifade edilmiştir.
                </TableCaption>
            </Table>
        </div>
    );
}
