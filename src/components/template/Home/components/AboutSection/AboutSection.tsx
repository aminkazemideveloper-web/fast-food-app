import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <span className={styles.eyebrow}>SHILA STORY</span>
          <span className={styles.number}>01</span>
        </div>

        <div className={styles.content}>
          <div className={styles.title}>
            <h2>
              چیزی بیشتر از
              <br />
              <span>یک طعم خوب</span>
            </h2>
          </div>

          <div className={styles.text}>
            <p className={styles.lead}>
              هر غذای خوب می‌تواند شروع یک خاطره خوب باشد.
            </p>

            <p>
              در شیلا، کیفیت مواد اولیه و توجه به جزئیات را کنار هم گذاشته‌ایم
              تا هر بار تجربه‌ای خوشمزه و متفاوت داشته باشید.
            </p>

            <a href="/about" className={styles.link}>
              داستان شیلا
              <strong>←</strong>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>
            <strong>۲۰+</strong>
            <span>سال تجربه</span>
          </div>

          <div>
            <strong>۱۰۰٪</strong>
            <span>کیفیت</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>عشق به غذا</span>
          </div>

          <div className={styles.slogan}>
            <span>GOOD FOOD.</span>
            <span>GOOD MOOD.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
