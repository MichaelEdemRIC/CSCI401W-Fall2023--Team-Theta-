import { Link } from 'react-router-dom';

interface BuyButtonProps {
    link: string;
  }
  
  export function BuyButton({ link }: BuyButtonProps) {
  return (
    <Link to={link}>
      <button type="button" className="btn btn-success">
        Buy
      </button>
    </Link>
  );
}