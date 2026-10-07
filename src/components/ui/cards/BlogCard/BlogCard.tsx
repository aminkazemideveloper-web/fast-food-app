import { Link } from "react-router";
import type { BlogType } from "../../../../types/blog-type";
import TiTleSectionItem from "../../../shared/TiTleSectionItem/TiTleSectionItem";
import styles from "./BlogCard.module.css";

type Props = {
  blog: BlogType;
};

function BlogCard({ blog }: Props) {
  return (
    <div key={blog.id} className={styles.contain}>
      <TiTleSectionItem title={blog.title} sub={blog.sub} />

      <div className={styles.content}>
        <Link to={`/blogs/${blog.id}`} className={styles["img-box"]}>
          <img src={blog.image} alt="" />
        </Link>

        <div className={styles.written}>
          <span>{blog.desc}</span>
          <strong>{blog.price.heading}</strong>
          <ul className={styles.list}>
            {blog.price.javayez.map((item) => (
              <li key={item.id}>
                <span>{item.magham}</span>
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
