import { Link } from "react-router";
import styles from "./BlogPage.module.css";

import { useComposition } from "../../components/template/Home/components/BlogSection/useCopmosition";

function BlogPage() {
  const { blogData } = useComposition();

  return (
    <main className={styles.blogPage}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.badge}>وبلاگ شیلا</span>

          <h1>آخرین مطالب و اخبار شیلا</h1>

          <p>
            جدیدترین اخبار، رویدادها، کمپین‌ها و اتفاقات شیلا را اینجا دنبال
            کنید.
          </p>
        </header>

        {/* Blog Grid */}
        <section className={styles.grid}>
          {blogData.map((blog) => (
            <article className={styles.card} key={blog.id}>
              <Link to={`/blogs/${blog.id}`} className={styles.imageBox}>
                <img src={blog.image} alt={blog.title} />

                <span className={styles.readMore}>مشاهده مقاله</span>
              </Link>

              <div className={styles.cardContent}>
                <h2>{blog.title}</h2>

                <p>{blog.sub}</p>

                <Link to={`/blogs/${blog.id}`} className={styles.cardLink}>
                  ادامه مطلب
                  <span>←</span>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default BlogPage;
