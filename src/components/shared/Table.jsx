import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const Table = ({ data, title, columns, isActions=true }) => {
  return (
    <div className="bg-white rounded-xl p-6  text-sm">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              {columns.map((column, index) => (
                <th key={index} className="text-left py-3 px-4 font-medium text-gray-700">
                  {column}
                </th>
              ))}
             { isActions && <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={`border-b border-gray-200 cursor-pointer hover:bg-gray-200 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex} className="py-2 pl-4 pr-2  text-gray-700">
                    {cell}
                  </td>
                ))}
               { isActions && 
               <td className="py-2 px-8">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreHorizontal size={16} className="text-gray-400" />
                  </button>
                </td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;