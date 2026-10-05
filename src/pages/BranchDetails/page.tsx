import styles from "./BranchDetailsPage.module.css";
import BranchDetails from "../../components/template/BranchDetails/BranchDetails";
import { Link, useParams } from "react-router";
import { useGetBranch } from "../../services/hooks/branches/useGetBranch";
import clsx from "clsx";

function BranchDetailsPage() {
  const { branchId } = useParams();

  const { data: branch, isPending, isError } = useGetBranch(branchId ?? "");

  if (isPending) {
    return (
      <div className={clsx(styles["branch-details"], "container")}>
        <p>در حال دریافت اطلاعات شعبه...</p>
      </div>
    );
  }

  if (isError || !branch) {
    return (
      <div className={clsx(styles["branch-details"], "container")}>
        <p>اطلاعات شعبه پیدا نشد.</p>

        <Link className="action" to="/branches">
          بازگشت به شعب
        </Link>
      </div>
    );
  }

  return (
    <div>
      <BranchDetails branch={branch} />
    </div>
  );
}

export default BranchDetailsPage;
