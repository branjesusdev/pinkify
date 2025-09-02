export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  categoryId: number;
  video?: string;
  description?: string;
  images: Array<string>;
  discount: number;
}