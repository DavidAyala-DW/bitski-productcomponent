import {useEffect, useState} from "react";
import styles from "../styles/marquee.module.scss";

const marqueeTextTop = process.env.NEXT_PUBLIC_HERO_MARQUEE_TEXT_TOP;
const marqueeTextBottom = process.env.NEXT_PUBLIC_HERO_MARQUEE_TEXT_BOTTOM;

let res1 = Array.from({ length: 20 }, (_, i) => (
  <span  key={i}>
    <span className="uppercase">
        {marqueeTextTop}
    </span>
  </span>
));

let res2 = Array.from({ length: 20 }, (_, i) => (
  <span  key={i}>
    <span className="uppercase">
        {marqueeTextBottom}
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

      <style jsx>{`

            .scroll1 {
              transform: translateX(-${scroll*0.5}px);
            }

            .scroll2 {
              transform: translateX(-${scroll*0.5}px);
            }

      `}</style>

      <div className="text-2xl md:text-3xl max-w-[2500px] mx-auto">
        <div className="primary-color text-primary h-[37px] md:h-[50px]">

          <div className={styles.marquee}>
            <div className={styles.track}>
              <div className="transition pt-px md:pt-2 ease-linear scroll1 space-x-2">{res1}</div>
            </div>
          </div>

        </div>
        <div className="secondary-color -rotate-180 marqee2 h-[37px] md:h-[50px]">
          <div className={styles.marquee + " flex justify-center"}>
            <div className={styles.trackReverse}>
              <div className="transition pt-px md:pt-2 ease-linear scroll2 space-x-2">{res2} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
