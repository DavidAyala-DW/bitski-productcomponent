import Image from "next/image";
import Bitski from "../public/bitski.svg";
const faqLink = process.env.NEXT_PUBLIC_FAQ_LINK;
const tcLink = process.env.NEXT_PUBLIC_TC_LINK;

const Footer = () => {
  return (
    // <footer className=" px-8 mt-4 primary-color">
    //   <div className="flex flex-col md:flex-row items-center justify-between container mx-auto py-8">
    //     <div className="order-2 md:order-1 mt-4 md:mt-0">
    //       <a href={faqLink}>FAQ</a>
    //     </div>
    //     <div className="flex order-1 md:order-2">
    //       <p className="mr-2">Powered by</p>
    //       <Image src="/bitski.svg" width={120} height={34} alt=""/>
    //     </div>
    //     <div className="order-3 mt-4 md:mt-0">
    //       <a href={tcLink}>T&C</a>
    //     </div>
    //   </div>
    // </footer>
    <footer className="max-w-[1440px] mx-auto mt-5 mb-10 px-5 md:px-20 flex w-full items-center space-x-5">

      <p className="text-standard uppercase text-[11px] font-medium">Powered By</p>

      <div>
        <Bitski className="logoBitski" />
      </div>


    </footer>
  );
};

export default Footer;
