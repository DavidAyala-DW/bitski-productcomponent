import Image from "next/image";
import Marquee from "./Marquee";
import HeroGrid from "../public/hero_grid.svg";
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

// if (backgroundMobileFileName == "" || backgroundMobileFileName == undefined) {
//   backgroundMobileFileName = backgroundFileName;
// }

const Hero = () => {
  return (
    <>

      <section className="h-[681px] w-full bg-black">

        <div className="h-full mx-auto relative max-w-[1440px] overflow-hidden">

          <div className="absolute top-0 right-0 w-max h-max ml-auto">  

            {/* <Image
              className="fill-red-400"
              src={"/hero_grid.svg"}
              layout="fill"
              alt="/hero_grid"
            /> */}

            <HeroGrid className="stroke-primary w-full h-max opacity-30" />

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
