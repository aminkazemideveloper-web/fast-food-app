import clsx from "clsx";
import MingcuteSearchLine from "../../../icons/MingcuteSearchLine";
import styles from "./SearchInput.module.css";
import { type ChangeEvent } from "react";
import Snipper from "../Snipper/Snipper";

type Props = {
  value: string;
  onSearch: (value: string) => void;
  loading: boolean;
};

function SearchInput({ onSearch, value, loading }: Props) {
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };
  return (
    <label className={styles["search-label"]}>
      <input
        value={value}
        onChange={handleChangeValue}
        className={styles["search-input"]}
        type="text"
        name="value"
        placeholder="جستجوی شعبه..."
      />
      <button className={clsx(styles["search-btn"], "action")}>
        {loading ? <Snipper /> : <MingcuteSearchLine />}
      </button>
    </label>
  );
}

export default SearchInput;
