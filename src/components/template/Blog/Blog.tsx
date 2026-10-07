import type { BlogType } from "../../../types/blog-type";
import styles from "./Blog.module.css";
import clsx from "clsx";
import BlogPageCard from "../../ui/cards/BlogPageCard/BlogPageCard";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

type Props = {
  blogs: BlogType[];
};
function Blog({ blogs: blogData }: Props) {
  const containerRef = useScrollAnimation({ status: "success" });
  return (
    <div ref={containerRef} className={clsx(styles.blog, "container")}>
      <header className={clsx(styles.header, "animate", "fade-down")}>
        <span className={styles.badge}>وبلاگ شیلا</span>

        <h1>آخرین مطالب و اخبار شیلا</h1>

        <p>
          جدیدترین اخبار، رویدادها، کمپین‌ها و اتفاقات شیلا را اینجا دنبال کنید.
        </p>
      </header>

      <section className={styles.grid}>
        {blogData.map((blog, index) => (
          <div
            key={blog.id}
            className={clsx("animate", "slide-right")}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <BlogPageCard blog={blog} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Blog;
