import styles from "../styles/marquee.module.scss";

const marqueeText = process.env.NEXT_PUBLIC_HERO_MARQUEE_TEXT;

let res = Array.from({ length: 10 }, (_, i) => (
  <span  key={i}>
    <span>
        {marqueeText}
    </span>
    <span className="text-outline px-4 ">
        {marqueeText}
    </span>
  </span>
));

const Marquee = () => {
  return (
    <>
      <div className="text-3xl">
        <div className="primary-color bg-primary h-[37px] md:h-[50px]">
          <div className={styles.marquee}>
            <div className={styles.track}>
              <div className={styles.content}>{res}</div>
            </div>
          </div>
        </div>
        <div className="secondary-color bg-secondary h-[37px] md:h-[50px]">
          <div className={styles.marquee}>
            <div className={styles.trackReverse}>
              <div className={styles.content}>{res} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
