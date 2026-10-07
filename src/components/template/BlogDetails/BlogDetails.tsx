import { Link } from "react-router";
import styles from "./BlogDetails.module.css";
import clsx from "clsx";
import type { BlogType } from "../../../types/blog-type";

type Props = {
  blog: BlogType;
};

const BlogDetails = ({ blog }: Props) => {
  return (
    <main className={styles.blogDetails} dir="rtl">
      <div className={clsx("container")}>
        <div className={styles.breadcrumb}>
          <Link to="/">خانه</Link>

          <span>/</span>

          <Link to="/blogs">وبلاگ</Link>

          <span>/</span>

          <span>{blog.title}</span>
        </div>

        <article className={styles.article}>
          <div className={styles.cover}>
            <img src={blog.image} alt={blog.title} />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{blog.title}</h1>

            <p className={styles.sub}>{blog.sub}</p>

            <div className={styles.divider} />

            <p className={styles.description}>{blog.desc}</p>

            {blog.price && (
              <section className={styles.prizes}>
                <h2 className={styles.sectionTitle}>{blog.price.heading}</h2>

                <div className={styles.prizesGrid}>
                  {blog.price.javayez.map((item) => (
                    <div key={item.id} className={styles.prizeCard}>
                      <span className={styles.position}>{item.magham}</span>

                      <h3>{item.title}</h3>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {blog.winners?.length > 0 && (
              <section className={styles.winners}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionLine} />

                  <h2 className={styles.sectionTitle}>برندگان کمپین</h2>
                </div>
              </section>
            )}
          </div>
        </article>

        <div className={styles.back}>
          <Link to="/blogs" className={clsx(styles.backButton, "action")}>
            بازگشت به مقالات
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BlogDetails;
