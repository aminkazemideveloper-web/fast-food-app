import Order from "../../components/template/Order/Order";
import { useCategoriesProducts } from "../../services/hooks/products/useCategoriesProducts";
import { useGetProducts } from "../../services/hooks/products/useGetProducts";
import styles from "./OrderPage.module.css";

function OrderPage() {
  const { data: products, isPending } = useGetProducts();
  const { data: categories } = useCategoriesProducts();

  console.log("products", products);

  if (isPending) return <div>loading</div>;

  return (
    <div className={styles.order}>
      <Order products={products!} categories={categories!} />
    </div>
  );
}

export default OrderPage;
