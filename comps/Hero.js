import Image from "next/image";
import Marquee from "./Marquee";

const titleFirstLine = process.env.NEXT_PUBLIC_HERO_TITLE_FIRST_LINE;
const titleSecondLine = process.env.NEXT_PUBLIC_HERO_TITLE_SECOND_LINE;
const subtitle = process.env.NEXT_PUBLIC_HERO_SUBTITLE;
const description = process.env.NEXT_PUBLIC_HERO_DESCRIPTION;
const backgroundFileName =
  "/" + process.env.NEXT_PUBLIC_HERO_BACKGROUND_FILE_NAME;
let backgroundMobileFileName =
  "/" + process.env.NEXT_PUBLIC_HERO_BACKGROUND_MOBILE_FILE_NAME;
const foregroundFileName =
  "/" + process.env.NEXT_PUBLIC_HERO_FOREGROUND_FILE_NAME;
const productFileName = "/" + process.env.NEXT_PUBLIC_HERO_PRODUCT_FILE_NAME;

if (backgroundMobileFileName == "" || backgroundMobileFileName == undefined) {
  backgroundMobileFileName = backgroundFileName;
}

const heroHeight = 460;

if (typeof window !== "undefined") {
  // browser code
  setTimeout(() => {  
    document.querySelector('.hero-info').classList.add('opacity-2s');
    document.querySelector('.hero-product-image').classList.add('right-0-1s');
  }, 20);
}

const Hero = () => {
  return (
    <>
      <style jsx>{`
        .hero {
          background-image: url(${backgroundMobileFileName});
          background-repeat: no-repeat;
          background-size: 100% auto;
        }

        @media screen and (min-width: 768px) {
          .hero {
            background-image: url(${backgroundFileName});
          }
        }

      `}</style>
      
      <section className="hero flex justify-center md:h-[460px] overflow-hidden">
        <div className="main-element container mx-auto flex justify-center lg:justify-between top-0 mt-24 px-8 z-30 text-white relative">
          <div className="hero-info md:absolute">
            <h2 className="text-outline text-[40px] md:text-[50px] pt-8 md:pt-0 font-black leading-none">
              {titleFirstLine}
              <br />
              {titleSecondLine}
            </h2>
            <h3 className="text-[40px] md:text-[50px] font-black leading-none">{subtitle}</h3>
            <p className="text-white mt-4 text-lg">{description}</p>
            <div className="hero-cta-info flex flex-col md:flex-row items-start md:items-center my-4">
              <a href="#grid" className="w-full md:w-auto mt-1 mb-3">
                <button className="w-full primary-color px-7 py-3">
                  <span className="font-bold">Shop NFTs</span>
                </button>
              </a>
              <div className="hero-cta-info--info pl-0 md:pl-4 font-bold flex items-center">
                <span>Live drop in Progress</span>
                <div className="pl-4 pt-[9px] animate-pulse">
                  <Image src="/orbe.webp" width={20} height={20}  alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-product-image absolute -right-[50%] hidden lg:block mt-0">
            <Image
              className="mx-auto"
              src={productFileName}
              width={336}
              height={336}
              alt=""
            />
          </div>
        </div>
        <div className="main-image md:absolute flex justify-center md:h-[460px] w-0 md:w-full">
          <div className="container z-10 hidden md:block">
            <Image src={foregroundFileName} width={390} height={heroHeight}  alt=""/>
          </div>
        </div>
      </section>
      <section>
        <Marquee />
      </section>
    </>
  );
};

export default Hero;
