import clsx from "clsx";
import { Link } from "react-router";

import styles from "./BranchDetails.module.css";
import type { BranchType } from "../../../types/branch-type";

type Props = {
  branch: BranchType;
};

function BranchDetails({ branch }: Props) {
  return (
    <main className={clsx(styles["branch-details"], "container")}>
      <Link className={styles.back} to="/branches">
        ← بازگشت به شعب
      </Link>

      <section className={styles.card}>
        <div className={styles["image-box"]}>
          <img src={branch.img} alt={branch.region} />
        </div>

        <div className={styles.content}>
          <span className={styles.label}>شعبه گلبرگ</span>

          <h1>{branch.region}</h1>

          <div className={styles.info}>
            <div>
              <span>آدرس</span>
              <p>{branch.address}</p>
            </div>

            <div>
              <span>شماره تماس</span>
              <a href={`tel:${branch.tell}`}>{branch.tell}</a>
            </div>
          </div>

          <div className={styles.actions}>
            <a className="action" href={`tel:${branch.tell}`}>
              تماس با شعبه
            </a>

            <Link className="action" to="/order">
              سفارش آنلاین
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BranchDetails;
