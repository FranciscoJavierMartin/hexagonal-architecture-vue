<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      <button
        @click="
          () => {
            onSelectedProduct(product);
          }
        "
      >
        {{ product.title }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { productService } from "../domain/services/Product.service";
import { Product } from "../domain/models/Product";

type DataProps = {
  products: Product[];
};

export default defineComponent({
  name: "ProductList",
  props: {
    onSelectedProduct: {type: Function}
  },
  data(): DataProps {
    return { products: [] };
  },
  mounted() {
    productService.getProducts().then((response) => (this.products = response));
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
