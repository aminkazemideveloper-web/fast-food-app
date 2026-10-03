import styles from "./HeaderSection.module.css";
type Props = {
  title: string;
  sub?: string;
};

function HeaderSection({ title, sub = "" }: Props) {
  return (
    <section className={styles.wrapper}>
      <strong className={styles.title}>{title}</strong>
      <p className={styles.sub}>{sub}</p>
    </section>
  );
}

export default HeaderSection;
