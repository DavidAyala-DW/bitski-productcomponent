import Image from "next/image";
import {useEffect, useState} from 'react'
import Grid from "../public/footer_grid.svg";
import Twitter from "../public/twitter.svg";
import Instagram from "../public/instagram.svg";
import Discord from "../public/discord.svg";
import Tiktok from "../public/tiktok.svg";
import Telegram from "../public/telegram.svg";
import Reddit from "../public/reddit.svg";
const footerImage = "/" + process.env.NEXT_PUBLIC_FOOTER_IMAGE;

function Main() {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isLoadImage, setIsLoadImage] = useState(false);

  const arraySocialMedia = [

    {
      Icon: Twitter,
      URL: process.env.NEXT_PUBLIC_TWITTER_LINK
    },

    {
      Icon: Instagram,
      URL: process.env.NEXT_PUBLIC_INSTAGRAM_LINK
    },

    {
      Icon: Discord,
      URL: process.env.NEXT_PUBLIC_DISCORD_LINK
    },
    {
      Icon: Tiktok,
      URL: process.env.NEXT_PUBLIC_TIKTOK_LINK
    },
    {
      Icon: Telegram,
      URL: process.env.NEXT_PUBLIC_TELEGRAM_LINK
    },

    {
      Icon: Reddit,
      URL: process.env.NEXT_PUBLIC_REDDIT_LINK
    }

  ]

  useEffect(() => {

    const image = document.createElement("IMG");
    image.classList.add("w-full","h-full");
    image.src = footerImage;
    image.onload = () => {
      setHeight(image.height);
      setWidth(image.width);
      setIsLoadImage(true);
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

        <div className="h-max lg:my-auto w-full lg:max-w-[350px] xl:maxWidthFooterImage">
          <div className="h-max w-full maxWidthFooterImage">

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
            Your favorite athlete lives here
          </h2>

          <p className="text-lg leading-[27px] font-medium">
            Blue bottle williamsburg farm-to-table cillum flexitarian. Pour-over cliche heirloom occupy semiotics kale chips.
          </p>

          <p className="px-5 mt-[34px] py-2.5 bg-primary buttonShape text-secondary text-center uppercase font-light text-[11px] leading-[14px]">
            Visit PWRFWD
          </p>

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

            } ) }
          </div>

        </div>

      </div>

    </div>

  )

}

export default Main