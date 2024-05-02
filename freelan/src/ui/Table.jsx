export default function Table({ children }) {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-x-auto px-10 max-h-10">
      {children}
    </table>
  );
}

function TableHeader({ children }) {
  return <thead>{children}</thead>;
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr className="table-tr">{children}</tr>;
}

function TableTd({ children }) {
  return <td className="table-td">{children}</td>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Td = TableTd;
