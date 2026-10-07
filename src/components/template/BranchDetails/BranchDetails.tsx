import clsx from "clsx";
import { Link } from "react-router";

import styles from "./BranchDetails.module.css";
import type { BranchType } from "../../../types/branch-type";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

type Props = {
  branch: BranchType;
};

function BranchDetails({ branch }: Props) {
  const containerRef = useScrollAnimation({ status: "success" });
  return (
    <>
      <title>{`شعبه ${branch.region}`}</title>
      <main
        ref={containerRef}
        className={clsx(styles["branch-details"], "container")}
      >
        <div className={clsx(styles.breadcrumb, "animate", "slide-right")}>
          <Link to="/home">خانه</Link>
          <b>|</b>
          <Link to="/branches">شعبه ها</Link>

          <b>|</b>
          <p>{branch.region}</p>
        </div>

        <section className={styles.card}>
          <div className={styles["image-box"]}>
            <img src={branch.img} alt={branch.region} />
          </div>

          <div className={styles.content}>
            <span className={styles.label}>شعبه شیلا</span>

            <h1 className={clsx("animate", "fade-up")}>{branch.region}</h1>

            <div
              className={clsx(styles.info, "animate", "fade-up")}
              style={{ animationDelay: "0.4s" }}
            >
              <div
                className={clsx(styles.info, "animate", "fade-up")}
                style={{ animationDelay: "0.7s" }}
              >
                <span>آدرس</span>
                <p>{branch.address}</p>
              </div>

              <div
                className={clsx(styles.info, "animate", "fade-up")}
                style={{ animationDelay: "1s" }}
              >
                <span>شماره تماس</span>
                <a href={`tel:${branch.tell}`}>{branch.tell}</a>
              </div>
            </div>

            <div className={clsx(styles.actions, "animate", "fade-down")}>
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
    </>
  );
}

export default BranchDetails;
