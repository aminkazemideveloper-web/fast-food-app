import { useEffect } from "react";
import Branch from "../../components/template/Branch/Branch";
import { useGetAllBranches } from "../../services/hooks/branches/useGetAllBranches";
import ErrorPage from "../Error/Page";
import styles from "./BranchPage.module.css";

function BranchPage() {
  useEffect(() => {
    document.title = "شعبه ها";
  }, []);

  const { data: branches, isPending, isLoading, isError } = useGetAllBranches();

  if (isPending) return <div>is pending ...</div>;

  if (isLoading) return <div>is loading ...</div>;

  if (isError) return <ErrorPage />;

  return (
    <div className={styles.branchs}>
      <Branch branches={branches} />
    </div>
  );
}

export default BranchPage;
