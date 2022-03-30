import Image from "next/image";
import Marquee from "./Marquee";
import HeroGrid from "../public/hero_grid.svg";


const title = process.env.NEXT_PUBLIC_HERO_TITLE ?? "";
const description = process.env.NEXT_PUBLIC_HERO_DESCRIPTION ?? "";
const image = "/".concat(process.env.NEXT_PUBLIC_HERO_IMAGE) ?? "";

const Hero = () => {
  return (
    <>

      <section className="h-[681px] w-full">

        <div className="h-full mx-auto relative max-w-[1440px] overflow-hidden">

          <div className="absolute top-0 right-0 w-max h-max ml-auto">  

            <HeroGrid className="stroke-primary w-full h-max opacity-30" />

          </div>

          <div className="absolute top-0 px-5 md:px-20 right-0 w-full h-max ml-auto z-20 mb-5" id="hero_content">

              <div className="lg:pt-[108px] w-full h-full flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center lg:items-start justify-between">

                <div className="flex flex-col space-y-5 lg:space-y-9 mt-[124px] max-w-[610px]">

                  <h1 className="font-bold text-2xl lg:text-[40px] xl:text-[55px] lg:leading-[62.26px]">
                    {title}
                  </h1>

                  <p className="max-w-[536px]">
                    {description}
                  </p>

                </div>

                <div className="max-w-[320px] md:max-w-[360px] mx-auto lg:max-w-[530px] relative h-max w-full">

                  <Image
                    src={image}
                    priority={true}
                    className="w-full !min-h-0 !h-auto lg:!max-w-[530px]"
                    alt="hero_image.png"
                    width={530}
                    height={570}
                    layout={"responsive"}
                    objectFit="contain"
                  />

                </div>

              </div>

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
