import { Link } from "react-router";
import MingcuteArrowLeftFill from "../../../../../icons/MingcuteArrowLeftFill";
import styles from "./AboutSection.module.css";
import clsx from "clsx";
import useScrollAnimation from "../../../../../hooks/useScrollAnimation";

function AboutSection() {
  const containerRef = useScrollAnimation();
  return (
    <section ref={containerRef} className={styles.about}>
      <div
        className={clsx(styles.wrapper, "container", "animate", "slide-left")}
      >
        <div className={styles.top}>
          <span className={styles.eyebrow}>SHILA STORY</span>
          <span className={styles.number}>01</span>
        </div>

        <div className={styles.content}>
          <div
            className={clsx(styles.title, "animate", "fade-up")}
            style={{ transitionDelay: "0.1s" }}
          >
            <h2>
              چیزی بیشتر از
              <br />
              <span>یک طعم خوب</span>
            </h2>
          </div>

          <div
            className={clsx(styles.text, "animate", "slide-right")}
            style={{ transitionDelay: "0.2s" }}
          >
            <p
              className={clsx(styles.lead, "animate", "fade-down")}
              style={{ transitionDelay: "1s" }}
            >
              هر غذای خوب می‌تواند شروع یک خاطره خوب باشد.
            </p>

            <span>
              در شیلا، کیفیت مواد اولیه و توجه به جزئیات را کنار هم گذاشته‌ایم
              تا هر بار تجربه‌ای خوشمزه و متفاوت داشته باشید.
            </span>

            <Link to="/shopSotry" className={styles.link}>
              داستان شیلا
              <strong>
                <MingcuteArrowLeftFill />
              </strong>
            </Link>
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
