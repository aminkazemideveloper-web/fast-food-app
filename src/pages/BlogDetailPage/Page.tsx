import { Link, useParams } from "react-router";
import BlogDetails from "../../components/template/BlogDetails/BlogDetails";
import { useComposition } from "../../components/template/Home/components/BlogSection/useCopmosition";
import clsx from "clsx";

import styles from "./BlogDetailPage.module.css";
import NotFountPage from "../NotFound/Page";

const BlogDetailsPage = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const { blogData } = useComposition();

  const blog = blogData.find((item) => item.id === blogId);

  if (!blog) {
    return (
      <div className={styles.notFound} dir="rtl">
        <div className={styles.notFoundContent}>
          <NotFountPage />

          <Link to="/blogs" className={clsx(styles.backLink, "action")}>
            بازگشت به وبلاگ
          </Link>
        </div>
      </div>
    );
  }

  const title = `وبلاگ ${blog.title}`.slice(0, 35);

  return (
    <>
      <title>{title}</title>
      <BlogDetails blog={blog} />
    </>
  );
};

export default BlogDetailsPage;
