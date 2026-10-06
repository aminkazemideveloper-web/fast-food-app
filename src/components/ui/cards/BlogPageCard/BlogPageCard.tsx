import { Link } from "react-router";
import styles from "./BlogPageCard.module.css";
import type { BlogType } from "../../../../types/blog-type";
import MingcuteArrowLeftFill from "../../../../icons/MingcuteArrowLeftFill";

type Props = {
  blog: BlogType;
};

function BlogPageCard({ blog }: Props) {
  return (
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
          <span>
            <MingcuteArrowLeftFill />
          </span>
        </Link>
      </div>
    </article>
  );
}

export default BlogPageCard;
