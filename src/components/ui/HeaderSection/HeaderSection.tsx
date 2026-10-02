import styles from "./HeaderSection.module.css";
type Props = {
  title: string;
};

function HeaderSection({ title }: Props) {
  return <h2 className={styles.title}>{title}</h2>;
}

export default HeaderSection;
