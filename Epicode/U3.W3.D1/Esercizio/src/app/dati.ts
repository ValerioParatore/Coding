export interface Dati {
    products: Products[],
    total: number,
    skip: number,
    limit: number

}



export interface Products{
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentag: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[],
}
