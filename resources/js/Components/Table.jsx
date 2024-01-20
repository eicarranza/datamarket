import React from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
// import { matchSorter } from 'match-sorter';

const Table = ({ data, primary, quote, action }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Symbol',
        accessor: 'symbol',
      },
      {
        Header: 'Company Name',
        accessor: 'name',
      },
      {
        Header: 'Market Cap',
        accessor: 'currency',
      },
      {
        Header: 'Stock Exchange',
        accessor: 'stockExchange',
      },
      {
        Header: '',
        accessor: 'quote',
        Cell: ({ row }) => (
          <a href={route(quote, row.original.symbol)} className="text-blue-500 underline">
            Quote
          </a>
        ),
      },
      {
        Header: '',
        accessor: 'profile',
        Cell: ({ row }) => (
          <a href={route(action, row.original.symbol)} className="text-blue-500 underline">
            Profile
          </a>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state: { globalFilter, pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }, // Initial page and page size
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div>
      <div className="relative overflow-x-auto border shadow-md sm:rounded-lg">
        <label className="mr-2">Search:</label>
        <input
          type="text"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <table {...getTableProps()} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-6 py-3">
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-6 py-4">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4">
        <span>
          Page{' '}
          <strong>
            {rows.length > 0 ? rows[0].index + 1 : 0} - {rows.length > 0 ? rows[rows.length - 1].index + 1 : 0}
          </strong>{' '}
          of <strong>{rows.length}</strong>
        </span>
        {' | '}
        <span>
          Go to page:{' '}
          <input
            type="number"
            defaultValue={0}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            className="w-16 p-1 border border-gray-300 rounded"
          />
        </span>{' '}
        <button onClick={() => nextPage()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
