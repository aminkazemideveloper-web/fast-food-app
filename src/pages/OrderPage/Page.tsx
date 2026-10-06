import { useEffect } from "react";
import Order from "../../components/template/Order/Order";
import { useCategoriesProducts } from "../../services/hooks/products/useCategoriesProducts";
import { useGetProducts } from "../../services/hooks/products/useGetProducts";
import styles from "./OrderPage.module.css";
import ErrorPage from "../Error/Page";
import OrdersSkeleton from "../../components/skeletons/OrdersSkeleton/OrdersSkeleton";

function OrderPage() {
  const { data: products, status: statusProduct } = useGetProducts();
  const { data: categories, status, isPending } = useCategoriesProducts();

  useEffect(() => {
    document.title = "سفارشات";
  }, []);

  if (statusProduct === "pending" && status === "pending")
    return <OrdersSkeleton />;
  if (statusProduct === "error" && status === "error") return <ErrorPage />;

  return (
    <div className={styles.order}>
      <Order
        products={products!}
        categories={categories!}
        loading={isPending}
      />
    </div>
  );
}

export default OrderPage;
