import clsx from "clsx";
import styles from "./BlogSection.module.css";
import { useComposition } from "./useCopmosition";
import BlogCard from "../../../../ui/cards/BlogCard/BlogCard";

function BlogSection() {
  const { blogData } = useComposition();
  return (
    <div className={clsx(styles.blog, "container")}>
      <div className={clsx(styles.wrapper)}>
        {blogData.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
