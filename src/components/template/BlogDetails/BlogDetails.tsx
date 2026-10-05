import { Link, useParams } from "react-router";
import styles from "./BlogDetails.module.css";
import { useComposition } from "../Home/components/BlogSection/useCopmosition";
import clsx from "clsx";

const BlogDetails = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const { blogData } = useComposition();

  const blog = blogData.find((item) => item.id === blogId);

  if (!blog) {
    return (
      <div className={styles.notFound} dir="rtl">
        <div className={styles.notFoundContent}>
          <h1>مقاله پیدا نشد</h1>

          <Link to="/blogs" className={clsx(styles.backLink, "action")}>
            بازگشت به وبلاگ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className={styles.blogDetails} dir="rtl">
      <div className={clsx("container")}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link to="/">خانه</Link>

          <span>/</span>

          <Link to="/blogs">وبلاگ</Link>

          <span>/</span>

          <span>{blog.title}</span>
        </div>

        {/* Article */}
        <article className={styles.article}>
          {/* Image */}
          <div className={styles.cover}>
            <img src={blog.image} alt={blog.title} />
          </div>

          {/* Content */}
          <div className={styles.content}>
            <h1 className={styles.title}>{blog.title}</h1>

            <p className={styles.sub}>{blog.sub}</p>

            <div className={styles.divider} />

            <p className={styles.description}>{blog.desc}</p>

            {/* Prizes */}
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

            {/* Winners */}
            {blog.winners?.length > 0 && (
              <section className={styles.winners}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionLine} />

                  <h2 className={styles.sectionTitle}>برندگان کمپین</h2>
                </div>

                {/* <div className={styles.winnersGrid}>
                  {blog.winners.map((winner) => (
                    <div key={winner.id} className={styles.winnerCard}>
                      <div className={styles.winnerImage}>
                        <img src={winner.img} alt={winner.name} />
                      </div>

                      <div className={styles.winnerInfo}>
                        <span>{winner.jayz}</span>

                        <h3>{winner.name}</h3>
                      </div>
                    </div>
                  ))}
                </div> */}
              </section>
            )}
          </div>
        </article>

        {/* Back */}
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
