import Link from "next/link";
import Image from "next/image";

const gridTitle = process.env.NEXT_PUBLIC_GRID_TITLE;
const secondaryColor = process.env.NEXT_PUBLIC_SECONDARY_COLOR;

const Grid = ({ products }) => {
  return (
    <section id="grid" className="px-4 md:px-8">
      <h1 className="mt-8 mb-8 text-3xl text-center">{gridTitle}</h1>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <a href={item.purchaseLink} key={item.id}>
            <div
              LclassName="flex justify-center items-center mb-4"
              
            >
              <product-viewer
                title-color={secondaryColor}
                price-color="#fbfbfb"
                product-id={item.id}
                display-type="minimal"
                currency="USD"
              ></product-viewer>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Grid;
