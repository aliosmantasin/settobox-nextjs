import React from 'react'
import AllServicesMarketing from '../_components/AllServices/AllServicesMarketing'
import SingleServices from '../_components/AllServices/SingleServices'


const page = () => {
  return (
      <>
        <SingleServices/>
        <AllServicesMarketing />
      </>

 
  )
}

export default page

export async function generateStaticParams() {
    return [
      { locale: 'tr' },
    ]
  }



      {/* <div className='container flex flex-wrap justify-center mx-auto my-20 p-2'>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Hizmet Adı
                </th>
                <th scope="col" className="px-6 py-3">
                    Detaylandırma
                </th>
            
                <th scope="col" className="px-6 py-3">
                    Link
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Dijital Dönüşüm Kutusu
                </th>
                <td className="px-6 py-4">
                Tümüyle Online Varlık Yönetim Hizmeti
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
        
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Yerel/Mikro Dijital Pazarlama  
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Kurumsal Kimlik Tasarım
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>

            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Qr Code Hizmeti
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div> */}