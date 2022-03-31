import Image from "next/image";
import Link from "next/link";
const logoFileName = '/' +process.env.NEXT_PUBLIC_NAVBAR_LOGO;


const Navbar = () => {
  return (

    <nav className="absolute z-40 pt-[36px] w-full">

      <div className="flex w-full max-w-[1440px] px-5 md:px-20 mx-auto justify-between flex-wrap">

        <Link href="/" passHref>

          <a className="max-h-[47px]">

            <Image
              src={logoFileName}
              priority={true}
              className={"logo"}
              height={47}
              width={120}
              alt={`${process.env.NEXT_PUBLIC_HERO_LOGO_FILE_NAME}`}
            />
            
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
