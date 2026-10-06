
import styles from "./BlogPage.module.css";

import { useComposition } from "../../components/template/Home/components/BlogSection/useCopmosition";
import Blog from "../../components/template/Blog/Blog";

function BlogPage() {
  const { blogData } = useComposition();

  return (
    <main className={styles.blogPage}>
      <Blog blogs={blogData} />
    </main>
  );
}

export default BlogPage;
