import {useEffect, useState} from 'react'
import Image from "next/image";
import Link from "next/link";
const logoFileName = '/'.concat(process.env.NEXT_PUBLIC_NAVBAR_LOGO);


const Navbar = () => {

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [isLoadImage, setIsLoadImage] = useState(false);

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

    <nav className="absolute z-40 pt-[36px] w-full">

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

      <div className="flex w-full max-w-[1440px] px-5 md:px-20 mx-auto justify-between flex-wrap">

        <Link href="/" passHref>

          <a className="h-max max-h-[31px]">

      
            {

              isLoadImage && (

                <Image
                  src={logoFileName}
                  priority={true}
                  className="logo"
                  alt={logoFileName.replace("/","")}
                  width={width}
                  height={height}
                />  

              )

            }
            
          </a>

        </Link>

        <div className="flex items-center space-x-6 text-[11px] text-center uppercase font-normal">

          <a href={process.env.NEXT_PUBLIC_NAVBAR_COLLECTION_LINK} className="text-primary">
            Collection
          </a>

          <a href={process.env.NEXT_PUBLIC_NAVBAR_WALLET_LINK} className="bg-primary buttonShape px-4 py-2.5 text-secondary">
            Link wallet
          </a>

        </div>

      </div>

    </nav>

  );
};

export default Navbar;
