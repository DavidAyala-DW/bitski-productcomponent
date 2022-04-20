import Image from "next/image";
import Bitski from "../public/bitski.svg";
const faqLink = process.env.NEXT_PUBLIC_FAQ_LINK;
const tcLink = process.env.NEXT_PUBLIC_TC_LINK;

const Footer = () => {
  return (

    <footer className="max-w-[1440px] mx-auto mb-10 md:mb-[68px] px-4 md:px-20 flex w-full items-center space-x-5">

      <p className="text-standard tracking-[.36em] uppercase text-[11px] font-medium">Powered By</p>

      <div>
        <Bitski className="logoBitski" />
      </div>


    </footer>
  );
};

export default Footer;
