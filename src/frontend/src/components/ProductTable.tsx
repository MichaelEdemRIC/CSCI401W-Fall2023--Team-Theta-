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
            <th scope="col">KEY</th>
            <th scope="col">NAME</th>
            <th scope="col">PRICE</th>
            <th scope="col">DATE ADDED</th>
            </tr>
        </thead>
        <tbody>
          {items
            ? items.map((item:any) => {
              return <tr key={item.pk}>
                  <td>{item.pk}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.dateAdded}</td>
              </tr>
          })  
          : null}
        </tbody>
        </table>
    </div>
  )
}

export default ProductTable