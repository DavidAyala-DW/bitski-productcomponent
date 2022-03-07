import Image from "next/image";

const logoFileName = '/' +process.env.NEXT_PUBLIC_HERO_LOGO_FILE_NAME;


const Navbar = () => {
  return (
    <nav className="absolute z-40 w-full">
      <div className="flex container mx-auto justify-center md:justify-end">
        <div className="logo mt-12">
        <Image
              src={logoFileName}
              width={257}
              height={35}
              alt={""}
            />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
