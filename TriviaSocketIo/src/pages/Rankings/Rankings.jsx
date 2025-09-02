import React from 'react'

export default function Rankings() {
  return (
    <div className="overflow-x-auto">
      <table className=" table-auto border-collapse text-left">
        <thead className="bg-gray-300">
          <tr>
            <th className="py-2 px-4 border-b text-sm font-medium text-sky-800">#Posicion</th>
            <th className="py-2 px-4 border-b text-sm font-medium text-sky-800">NickName</th>
            <th className="py-2 px-4 border-b text-sm font-medium text-sky-800">Aciertos</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="py-2 px-4 border-b text-sm text-sky-800">1</td>
            <td className="py-2 px-4 border-b text-sm text-sky-800">Mark</td>
            <td className="py-2 px-4 border-b text-sm text-sky-800">10%</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-2 px-4 border-b text-sm text-sky-800">2</td>
            <td className="py-2 px-4 border-b text-sm text-sky-800">Jacob</td>
            <td className="py-2 px-4 border-b text-sm text-sky-800">25%</td>

          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-2 px-4 border-b text-sm text-sky-800">3</td>
            <td className="py-2 px-4 border-b text-sm  text-sky-800">Larry the Bird</td>
            <td className="py-2 px-4 border-b text-sm text-sky-800"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
