import clsx from "clsx";
import styles from "./Branch.module.css";
import type { BranchType } from "../../../types/branch-type";
import BranchCard from "../../ui/cards/BranchCard/BranchCard";
import SearchInput from "../../shared/SearchInput/SearchInput";
import HeaderSection from "../../shared/HeaderSection/HeaderSection";

type Props = {
  branches: BranchType[];
  search: string;
  onSearch: (value: string) => void;
  loading: boolean;
};

function Branch({ branches, search, onSearch, loading }: Props) {
  return (
    <div className={clsx(styles.branches, "container")}>
      <div className={styles.toolbar}>
        <HeaderSection title="تمام شعبه های ما" sub="در تهران و استان البررز" />
        <SearchInput value={search} onSearch={onSearch} loading={loading} />
      </div>

      <div className={styles.wrapper}>
        {branches.map((branch) => (
          <BranchCard key={branch.branchId} branch={branch} />
        ))}
      </div>
    </div>
  );
}

export default Branch;
