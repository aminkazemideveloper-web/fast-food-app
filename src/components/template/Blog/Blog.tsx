
import type { BlogType } from "../../../types/blog-type";
import styles from "./Blog.module.css";
import clsx from "clsx";
import BlogPageCard from "../../ui/cards/BlogPageCard/BlogPageCard";

type Props = {
  blogs: BlogType[];
};
function Blog({ blogs: blogData }: Props) {
  return (
    <div className={clsx(styles.blog, "container")}>
      {/* Header */}
      <header className={styles.header}>
        <span className={styles.badge}>وبلاگ شیلا</span>

        <h1>آخرین مطالب و اخبار شیلا</h1>

        <p>
          جدیدترین اخبار، رویدادها، کمپین‌ها و اتفاقات شیلا را اینجا دنبال کنید.
        </p>
      </header>

      {/* Blog Grid */}
      <section className={styles.grid}>
        {blogData.map((blog) => (
          <BlogPageCard blog={blog} />
        ))}
      </section>
    </div>
  );
}

export default Blog;
