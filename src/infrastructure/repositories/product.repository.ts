import { http } from "../http/http";
import { ProductDTO } from "../http/dto/ProductDTO";
import { Product } from "../../domain/models/Product";

export const productRepository = {
  getProducts: async () => {
    const products = await http.get<ProductDTO[]>(
      "http://localhost:3001/products"
    );
    return products.map(
      (productDTO): Product => ({
        id: productDTO.product_id,
        title: productDTO.title,
        price: Number(productDTO.price),
      })
    );
  },
};
