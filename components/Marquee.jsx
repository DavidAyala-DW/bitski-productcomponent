import {useEffect, useState} from "react";

const marqueeTextTop = process.env.NEXT_PUBLIC_HERO_MARQUEE_TEXT_TOP;
const marqueeTextBottom = process.env.NEXT_PUBLIC_HERO_MARQUEE_TEXT_BOTTOM;

let res1 = Array.from({ length: 20 }, (_, i) => (
  <span className="h-[50px] uppercase"  key={i}>
    <span className="h-[50px]">
        {marqueeTextTop}
    </span>
  </span>
));

let res2 = Array.from({ length: 20 }, (_, i) => (
  <span className="h-[50px] uppercase"  key={i}>
    <span className="h-[50px]">
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

      <div className="text-[50px] max-w-[2500px] mx-auto flex flex-col">
        <div className="primary-color text-primary h-[50px] mb-1">
          <div className="relative w-screen max-w-full overflow-x-hidden font-black h-[50px]">
            <div className="absolute will-transform whitespace-nowrap h-[50px]">
              <div className="transition ease-linear scroll1 overflow-y-hidden space-x-2 h-[50px] leading-[1]">{res1}</div>
            </div>
          </div>

        </div>
        <div className="secondary-color -rotate-180 marqee2 h-[50px]">
          <div className="relative w-screen max-w-full overflow-x-hidden font-black flex justify-center h-[50px]">
            <div className="absolute will-transform whitespace-nowrap h-[50px]">
              <div className="transition ease-linear scroll2 space-x-2 overflow-y-hidden h-[50px] leading-[1]">{res2} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
