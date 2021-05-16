import React from 'react';

const Table = ({ table }: { table: Array<Array<string>> }) => (
  <div className="flex flex-col pt-6 overflow-x-hidden overflow-y-hidden">
    <div className="-my-2 overflow-x-scroll sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block max-w-xs overflow-x-scroll min-w-full sm:px-6 lg:px-8">
        <div className="overflow-y-hidden overflow-x-scroll border border-gray-300 dark:border-gray-600">
          <table className="min-w-full overflow-x-scroll divide-y divide-gray-300 dark:divide-gray-600">
            <tbody>
              {table.map((row, rowIdx) => (
                <tr
                  key={`${row[0]}-${rowIdx}`}
                  className={
                    rowIdx % 2 === 0
                      ? 'bg-white dark:bg-gray-800'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }
                >
                  {row.map((cell, cellId) => (
                    <td
                      key={`${row[0]}-${rowIdx}-${cell}-${cellId}`}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-100"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default Table;
