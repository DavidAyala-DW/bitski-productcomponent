import {useEffect, useState} from 'react'
import Image from "next/image";

import GridMobile from "../public/contact_grid_mobile.svg";
import GridIpad from "../public/contact_grid_ipad.svg";
import GridDesktop from "../public/contact_grid_desktop.svg";

import { arraySocialMedia } from '../helpers';

const footerImage = "/".concat(process.env.NEXT_PUBLIC_CONTACT_IMAGE);

function Contact() {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isLoadImage, setIsLoadImage] = useState(false);
  const [screenType, setScreenType] = useState("");

  useEffect(() => {

    if(footerImage != "/undefined"){
      
      const image = document.createElement("IMG");
      image.classList.add("w-full","h-full");
      image.src = footerImage;
      image.onload = () => {
        setHeight(image.height);
        setWidth(image.width);
        setIsLoadImage(true);
      }
      
    }

    if(typeof window !== "undefined"){

      function handleResizeEvent(){

        if(window.innerWidth < 768){
          setScreenType("mobile")
        }

        if(window.innerWidth >= 768 && window.innerWidth < 1080){
          setScreenType("ipad")
        }

        if(window.innerWidth >= 1080){
          setScreenType("desktop")
        }

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

    <section className='mt-20 lg:mt-0 pt-[88px] lg: md:px-10 lg:px-0 mb-40 md:mb-[120px] md:pb-[175px] max-w-[1440px] mx-auto w-full h-full lg:min-h-full relative overflow-hidden'>

      {
        screenType == "mobile" && (
          <GridMobile className="transform translate-x-[-100px] absolute inset-0 stroke-primary !w-full h-full" />
        )
      }

      {
        screenType == "ipad" && (
          <GridIpad className="absolute inset-0 stroke-primary !w-full h-full" />
        )
      }

      {
        screenType == "desktop" && (
          <GridDesktop className="absolute inset-0 stroke-primary !w-full h-full lg:max-h-[588px] lg:max-w-[722px] lg:static opacity-40 translate-x-[-317px]" />  
        )
      }

      <div className="lg:absolute px-4 lg:px-20 lg:inset-0 w-full max-w-max md:max-w-full mx-auto lg:max-w-[1440px] space-y-5 lg:space-y-0 md:justify-between lg:justify-start lg:space-x-[160px] h-full lg:max-h-[498px] my-auto z-10 flex flex-col md:flex-row items-start md:items-center">

        <style jsx>{`
            .maxWidthFooterImage{
              max-width: ${width}px;
            }
            @media(min-width: 1280px){
              .xl\:maxWidthFooterImage{
              max-width: ${width}px;
            } 
            }
          `}
        </style>

        <div className="h-max lg:my-auto w-full max-w-[450px] md:max-w-[342px] lg:max-w-[350px] xl:max-w-[572px] z-20">
          <div className="h-max w-full maxWidthFooterImage xl:maxWidthFooterImage">

            {

              isLoadImage && (

                <Image
                  src={footerImage}
                  priority={true}
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

        <div className="flex flex-col items-start w-full md:max-w-[365px]  lg:max-w-[500px] xl:max-w-[608px] z-20">

          <h2 className="text-standard mb-6 leading-[32px] text-[32px] lg:text-[52px] font-black lg:leading-[52px]">
            {process.env.NEXT_PUBLIC_CONTACT_TITLE}
          </h2>

          <p className="text-base leading-[25px] font-medium">
            {process.env.NEXT_PUBLIC_CONTACT_DESCRIPTION}
          </p>

          <a href={process.env.NEXT_PUBLIC_CONTACT_CTA_LINK} rel="noreferrer" target={"_blank"} className="transition hover:scale-105 cursor-pointer px-11 w-full md:w-max mt-10 py-3 bg-primary buttonShape text-secondary text-center uppercase font-medium text-[12px] leading-[14px]">
            {process.env.NEXT_PUBLIC_CONTACT_CTA_TEXT}
          </a>

          <div className="mt-[60px] md:mt-10 w-full flex justify-center md:justify-start items-center space-x-10">

            { arraySocialMedia.map( (child,index) => {

              const {Icon,URL} = child;
              
              if(URL != ""){
                
                return(

                  <a className="transition hover:scale-125 cursor-pointer block" rel="noreferrer" target={"_blank"} href={URL} key={index}>
                    <Icon className="fill-primary" />
                  </a>
                  
                )
              }

            })}

          </div>

        </div>

      </div>

    </section>

  )

}

export default Contact