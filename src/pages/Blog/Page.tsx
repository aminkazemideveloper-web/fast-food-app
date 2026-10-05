import styles from "./BlogPage.module.css";

import { useComposition } from "../../components/template/Home/components/BlogSection/useCopmosition";
import { Link } from "react-router";

function BlogPage() {
  const { blogData } = useComposition();
  return (
    <div className={styles.blog}>
      {blogData.map((blog) => (
        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
      ))}
    </div>
  );
}

export default BlogPage;
