import clsx from "clsx";
import styles from "./Branch.module.css";
import type { BranchType } from "../../../types/branch-type";
import BranchCard from "../../ui/cards/BranchCard/BranchCard";

type Props = {
  branches: BranchType[];
};

function Branch({ branches }: Props) {
  return (
    <div className={clsx(styles.branches, "container")}>
      <div className={styles.wrapper}>
        {branches.map((branch) => (
          <BranchCard key={branch.branchId} branch={branch} />
        ))}
      </div>
    </div>
  );
}

export default Branch;
