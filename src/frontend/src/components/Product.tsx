export type Product = {
  amzCurrentPrice: string;
  amzMSRP: string;
  amzURL: string;
  dateAdded?: string;
  img: string;
  lowestPrice: string;
  name: string;
  id: number;
  walCurrentPrice: string;
  walMSRP: string;
  walURL: string;
};

export type ProductInput = {
  amzCurrentPrice: string;
  amzMSRP: string;
  amzURL: string;
  img: File | null;
  lowestPrice: string;
  name: string;
  walCurrentPrice: string;
  walMSRP: string;
  walURL: string;
}