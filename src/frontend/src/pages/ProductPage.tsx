// ProductPage.tsx
import { useParams } from 'react-router-dom';
import { Product } from '../components/Product';



export function ProductPage() {
  const { productId } = useParams();

  return (
    <div>
      <h1>{productId}</h1>
      {/* Render details of the selected product */}
      {/* You can also pass selectedProduct to other components as needed */}
    </div>
  );
}
