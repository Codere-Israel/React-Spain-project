import { Table } from 'react-bootstrap';

export default function AddTable(props) {
  return (
    <Table
      style={{ textAlign: 'center', maxWidth: '25rem', margin: 0 }}
      striped
      bordered
      hover
      variant='dark'>
      <thead>
        <tr>
          {props.table.th.map((t, k) => (
            <th key={k}>{t}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.table.tr.map((td, i) => (
          <tr key={i}>
            {td.map((td, j) => (
              <td key={j}>{td}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
