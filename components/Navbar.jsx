import {useEffect, useState} from 'react'
import Image from "next/image";
import Link from "next/link";
const logoFileName = '/'.concat(process.env.NEXT_PUBLIC_NAVBAR_LOGO);


const Navbar = () => {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isLoadImage, setIsLoadImage] = useState(false);
  const CTA_TEXT = process.env.NEXT_PUBLIC_NAVBAR_CTA_TEXT ?? "";
  const CTA_LINK = process.env.NEXT_PUBLIC_NAVBAR_CTA_LINK ?? "";

  useEffect(() => {

    if(logoFileName != "/undefined"){
      
      const image = document.createElement("IMG");
      image.classList.add("w-full","h-full");
      image.src = logoFileName;
      image.onload = () => {
        setHeight(image.height);
        setWidth(image.width);
        setIsLoadImage(true);
      }
      
    }

  }, []);

  return (

    <nav className="fixed z-40 pt-6 md:pt-8 lg:pt-12 w-full">

      {/* <div>
        <style jsx global>{`
          .heightNavBar{
            height: 100%;
          }
          @media(min-width: 1024px){
            .lg\:heightNavBar{
              height: ${height != 0 ? height + 258 : 600 }px;
          } 
          }
        `}
        </style>
      </div> */}

      <div className="flex item-center w-full max-w-[1440px] px-4 md:px-10 lg:px-20 mx-auto justify-between flex-wrap">

        <Link href="/" passHref>

          <a className="h-max max-h-[31px]">

      
            {

              isLoadImage && (

                <Image
                  src={logoFileName}
                  priority={true}
                  className=""
                  alt={logoFileName.replace("/","")}
                  width={width}
                  height={height}
                />  

              )

            }
            
          </a>

        </Link>

        <div className="flex text-[11px] text-center uppercase font-normal">

          <a href={CTA_LINK} className="transition hover:scale-105 cursor-pointer bg-primary text-xs font-normal buttonShape px-4 py-2.5 md:px-[60px] md:py-3 text-secondary uppercase">
            {CTA_TEXT}
          </a>

        </div>

      </div>

    </nav>

  );
};

export default Navbar;
