import {useEffect, useState} from 'react'
import Image from "next/image";
import Grid from "../public/footer_grid.svg";
import { arraySocialMedia } from '../helpers';

const footerImage = "/".concat(process.env.NEXT_PUBLIC_CONTACT_IMAGE);

function Contact() {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isLoadImage, setIsLoadImage] = useState(false);

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

  }, []);

  return (

    <div className='my-20 max-w-[1440px] mx-auto w-full h-full lg:min-h-full relative overflow-hidden'>

      <Grid className="absolute inset-0 stroke-primary !w-full h-full lg:max-h-[588px] lg:max-w-[722px] lg:static opacity-40 translate-x-[-310px]" />  

      <div className="lg:absolute px-5 lg:px-20 xl:px-0 lg:inset-0 w-full max-w-max mx-auto lg:max-w-[1260px] space-y-5 lg:space-y-0 lg:justify-between h-full lg:max-h-[498px] my-auto z-10 flex flex-col lg:flex-row items-start lg:items-center">

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

        <div className="h-max lg:my-auto w-full max-w-[450px] lg:max-w-[350px] xl:max-w-[572px]">
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

        <div className="flex flex-col items-start w-full lg:w-max max-w-[550px] lg:max-w-[500px] xl:max-w-[608px]">

          <h2 className="text-standard mb-5 text-[32px] font-black leading-[41px]">
            {process.env.NEXT_PUBLIC_CONTACT_TITLE}
          </h2>

          <p className="text-lg leading-[27px] font-medium">
            {process.env.NEXT_PUBLIC_CONTACT_DESCRIPTION}
          </p>

          <a href={process.env.NEXT_PUBLIC_CONTACT_CTA_LINK} rel="noreferrer" target={"_blank"} className="px-5 mt-[34px] py-2.5 bg-primary buttonShape text-secondary text-center uppercase font-light text-[11px] leading-[14px]">
            {process.env.NEXT_PUBLIC_CONTACT_CTA_TEXT}
          </a>

          <div className="mt-[34px] w-full flex items-center space-x-9">

            { arraySocialMedia.map( (child,index) => {

              const {Icon,URL} = child;
              
              if(URL != ""){
                
                return(

                  <a className="block" rel="noreferrer" target={"_blank"} href={URL} key={index}>
                    <Icon className="fill-primary" />
                  </a>
                  
                )
              }

            })}

          </div>

        </div>

      </div>

    </div>

  )

}

export default Contact