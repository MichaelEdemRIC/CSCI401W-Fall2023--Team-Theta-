import { Entry } from '../App';

interface Props {
  items: Entry[] | null;
  className?: string;
}
function ProductTable({ items }: Props ) {
  return (
<div>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            </tr>
        </thead>
        <tbody>
          {items
            ? items.map((item:any) => {
              return <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
              </tr>
          })  
          : null}
        </tbody>
        </table>
    </div>
  )
}

export default ProductTable