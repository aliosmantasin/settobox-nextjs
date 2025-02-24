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
        serviceName: "Dijital Dönüşüm Kutusu",
        expilation: "Meta, Google ve Web Site",
        link: "/dijital-pazarlama-donusum-kutusu",
    },

];

export function DijitalConversionComponent() {
    return (
       <div className=" flex w-full m-auto">
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
                <TableCaption className="text-center sm:text-start">
                    Meta, Google ve Web Site hizmetlerin tümüyle ve birbiriyle entegre bir şekilde yönettiğimiz Dijital Dönüşüm Kutusu hizmeti küçük ve orta büyüklükteki firmalar için geliştirilmiştir. Linke tıklayarak ilgili sayfada daha fazla bilgi edinebilirsiniz.
                </TableCaption>
            </Table>
            </div>
    );
}
