import Order from "../../components/template/Order/Order";

import styles from "./OrderPage.module.css";

import ErrorPage from "../Error/Page";
import OrdersSkeleton from "../../components/skeletons/OrdersSkeleton/OrdersSkeleton";

import { useOrderPage } from "./useOrderPage";

function OrderPage() {
  const { categories, isError, isLoading, products } = useOrderPage();

  if (isLoading) {
    return <OrdersSkeleton />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div className={styles.order}>
      <title>سفارشات</title>
      <Order products={products} categories={categories} />
    </div>
  );
}

export default OrderPage;
