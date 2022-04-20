import {useEffect, useState, useRef} from 'react'
import Image from "next/image";
import Marquee from "./Marquee";

import HeroGridDesktop from "../public/HeroGridDesktop.svg";
import HeroGridIpad from "../public/HeroGridIpad.svg";
import HeroGridMobile from "../public/HeroGridMobile.svg";


const title = process.env.NEXT_PUBLIC_HERO_TITLE ?? "";
const description = process.env.NEXT_PUBLIC_HERO_DESCRIPTION ?? "";
const imageHero = "/".concat(process.env.NEXT_PUBLIC_HERO_IMAGE) ?? "";


const Hero = () => {

  const [height, setHeight] = useState(0); 
  const [maxHeight, setMaxHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isLoadImage, setIsLoadImage] = useState(false);
  const [screenType, setScreenType] = useState("");
  const ImageTagHero = useRef(null);

  console.log(maxHeight);


  useEffect(() => {

    if(imageHero != "/undefined"){
      
      const image = document.createElement("IMG");
      image.classList.add("w-full","h-full");
      image.src = imageHero;
      image.onload = () => {

        setHeight(image.height);
        setWidth(image.width);
        setIsLoadImage(true);

        const {current: {offsetHeight: maxHeightValue}} = ImageTagHero;
        setMaxHeight(maxHeightValue);
      }
      
    }

    if(typeof window !== "undefined"){

      function handleResizeEvent(){

        // if(ImageTagHero == null)  return;

        if(window.innerWidth < 768){
          setScreenType("mobile")
        }

        if(window.innerWidth >= 768 && window.innerWidth < 1080){
          setScreenType("ipad")
        }

        if(window.innerWidth >= 1080){
          setScreenType("desktop")
        }

        const {current: {offsetHeight: maxHeightValue}} = ImageTagHero;
        setMaxHeight(maxHeightValue);

      }

      if(window.innerWidth < 768){
        setScreenType("mobile")
      }

      if(window.innerWidth >= 768 && window.innerWidth < 1080){
        setScreenType("ipad")
      }

      if(window.innerWidth >= 1080){
        setScreenType("desktop")
      }
   
      window.addEventListener("resize", handleResizeEvent);
      return window.removeEventListener("resize",handleResizeEvent,true);

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
                height: ${(maxHeight + 308) ?? 600}px;
            } 
            }
          `}
        </style>
      </div>

      <section className={` heightHero ${maxHeight == 0 ? "lg:!h-[600px]" : "lg:heightHero"} pb-20 md:pb-[120px] lg:pb-[140px] w-full`}>

        <div className=" h-full mx-auto relative max-w-[1440px] overflow-hidden">

          <div className="absolute top-0 right-0 w-max h-max ml-auto">  

            {
              screenType == "mobile" && (
                <HeroGridMobile className="mobile stroke-primary w-full h-max"/>
              )
            }

            {
              screenType == "ipad" && (
                <HeroGridIpad className="ipad stroke-primary w-full h-max"/>
              )
            }

            {
              screenType == "desktop" && (
                <HeroGridDesktop className="desktop stroke-primary w-full h-max"/>
              )
            }
            

          </div>

          <div className="static lg:absolute lg:top-0 px-4 md:px-20 lg:right-0 w-full h-max ml-auto z-20" id="hero_content">

              <div className="pt-[136px] md:pt-[148px] lg:pt-[168px] w-full h-full flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center lg:items-center justify-between">

                <div className="flex flex-col space-y-6 max-w-[560px] lg:max-w-[487px] lg:pr-5">

                  <h1 className="z-20 font-extrabold md:font-black text-[52px] md:text-center lg:text-left leading-[52px] md:text-[64px] md:leading-[64px]">
                    {title}
                  </h1>

                  <p className="z-20 md:text-center lg:text-left text-base leading-[25.6px]">
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

                <div className='z-20 w-full md:max-w-[365px] lg:max-w-[630px]' ref={ImageTagHero}>

                  <div className="ml-auto maxWidthHeroImage xl:maxWidthHeroImage relative h-max w-full">

                    {

                      isLoadImage && (

                        <Image
                          src={imageHero}
                          priority={true}
                          className="w-full !min-h-0 !h-auto"
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

        </div>

      </section>

      <section> 
        <Marquee />
      </section>
    </>
  );
};

export default Hero;
