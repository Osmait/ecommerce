

export class ProductDto {
  name: string
  description: string
  price: number
  stock: number
  categoryId: string

}

export class FilterProductsDto {
  limit: number;
  offset: number;
  minPrice: number;
  maxPrice: number;
}
