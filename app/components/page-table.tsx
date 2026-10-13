type PageTableProps = {
  caption?: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  footnote?: string;
};

export function PageTable({ caption, headers, rows, footnote }: PageTableProps) {
  return (
    <div className="page-table-wrap">
      <table className="page-table">
        {caption ? <caption>{caption}</caption> : null}
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")}>
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {footnote ? <p className="page-table__note">{footnote}</p> : null}
    </div>
  );
}
