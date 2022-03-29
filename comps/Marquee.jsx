import {useEffect, useState} from "react";
import styles from "../styles/marquee.module.scss";

const marqueeText = process.env.NEXT_PUBLIC_HERO_MARQUEE_TEXT;

let res = Array.from({ length: 20 }, (_, i) => (
  <span  key={i}>
    <span>
        {marqueeText}
    </span>
  </span>
));

const Marquee = () => {

  const [scroll, setScroll] = useState(typeof window !== "undefined" ? window.scrollY : 0);
  
  useEffect(() => {

    function  handleScrollEvent() {

      if(typeof window !== "undefined"){
        if(window.scrollY*0.5 <= 1300){
          setScroll(window.scrollY);
        }
      }

    }

    document.addEventListener("scroll",handleScrollEvent);

    return document.removeEventListener("scroll",handleScrollEvent,true);
    
  }, [] );

  return (
    <>

      <style jsx>
        {
          `
            .scroll1 {
              transform: translateX(-${scroll*0.5}px);
            }
            .scroll2 {
              transform: translateX(${scroll*0.5}px);
            }
          `
        }
      </style>

      <div className="text-2xl md:text-3xl max-w-[2500px] mx-auto">
        <div className="primary-color text-primary  h-[37px] md:h-[50px]">

          <div className={styles.marquee}>
            <div className={styles.track}>
              <div className={styles.content + ` transition ease-linear scroll1`}>{res}</div>
            </div>
          </div>

        </div>
        <div className="secondary-color marqee2 h-[37px] md:h-[50px]">
          <div className={styles.marquee + " flex justify-center"}>
            <div className={styles.trackReverse}>
              <div className={styles.content + ` transition ease-linear scroll2`}>{res} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
