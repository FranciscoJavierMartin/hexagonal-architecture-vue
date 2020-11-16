import * as uuid from "uuid";
import { Product, ProductId } from "../models/Product";
import { Basket } from "../models/Basket";

const hasProduct = (basket: Basket, product: Product) =>
  basket.items.some((item) => item.id === product.id);

const createBasket = (product: Product) => ({
  id: uuid.v4(),
  items: [product],
});

const increaseBasket = (basket: Basket, product: Product): Basket => ({
  ...basket,
  items: [...basket.items, product],
});

const addProductToBasket = (product: Product, basket?: Basket | null): Basket =>
  basket
    ? hasProduct(basket, product)
      ? basket
      : increaseBasket(basket, product)
    : createBasket(product);

export const basketService = {
  addProductToBasket,
};
