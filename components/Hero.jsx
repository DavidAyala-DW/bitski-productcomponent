import {useEffect, useState} from 'react'
import Image from "next/image";
import Marquee from "./Marquee";
import HeroGrid from "../public/hero_grid.svg";


const title = process.env.NEXT_PUBLIC_HERO_TITLE ?? "";
const description = process.env.NEXT_PUBLIC_HERO_DESCRIPTION ?? "";
const imageHero = "/".concat(process.env.NEXT_PUBLIC_HERO_IMAGE) ?? "";

const Hero = () => {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isLoadImage, setIsLoadImage] = useState(false);

  useEffect(() => {

    if(imageHero != "/undefined"){
      
      const image = document.createElement("IMG");
      image.classList.add("w-full","h-full");
      image.src = imageHero;
      image.onload = () => {
        setHeight(image.height);
        setWidth(image.width);
        setIsLoadImage(true);
      }
      
    }

  }, []);

  return (
    <>

      <div>
        <style jsx global>{`
            .heightHero{
              height: 100%;
            }
            @media(min-width: 1024px){
              .lg\:heightHero{
                height: ${height != 0 ? height + 238 : 600 }px;
            } 
            }
          `}
        </style>
      </div>

      <section className="heightHero min-h-[600px] lg:heightHero pb-5 lg:pb-[130px] w-full">

        <div className=" h-full mx-auto relative max-w-[1440px] overflow-hidden">

          <div className="absolute top-0 right-0 w-max h-max ml-auto">  

            <HeroGrid className="stroke-primary w-full h-max opacity-30" />

          </div>

          <div className="static lg:absolute lg:top-0 px-5 md:px-20 lg:right-0 w-full h-max ml-auto z-20 mb-5" id="hero_content">

              <div className="lg:pt-[108px] w-full h-full flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center lg:items-start justify-between">

                <div className="flex flex-col space-y-5 lg:space-y-9 mt-[124px] max-w-[610px] lg:pr-5">

                  <h1 className="font-bold text-2xl lg:text-[40px] xl:text-[55px] lg:leading-[62.26px]">
                    {title}
                  </h1>

                  <p className="max-w-[536px]">
                    {description}
                  </p>

                </div>

                <style jsx>{`
                  .maxWidthHeroImage{
                    max-width: ${width}px;
                  }
                  @media(min-width: 1280px){
                    .xl\:maxWidthHeroImage{
                    max-width: ${width}px;
                  } 
                  }
                `}
                </style>

                <div className="maxWidthHeroImage xl:maxWidthHeroImage relative h-max w-full">

                  {

                    isLoadImage && (

                      <Image
                        src={imageHero}
                        priority={true}
                        className="w-full !min-h-0 !h-auto lg:!max-w-[600px]"
                        alt="hero_image.png"
                        width={width}
                        height={height}
                        layout="responsive"
                        objectFit="contain"
                      />  

                    )

                  }

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
