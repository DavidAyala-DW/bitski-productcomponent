import Head from "next/head";
import Link from "next/link";
import Hero from "../comps/Hero";
import Grid from "../comps/Grid";
import Image from 'next/image'
import Script from 'next/script'




export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_KEY);
  const data = await res.json();

  return {
    props: { products: data.products },
  };
};


const Home = ({ products }) => {
  return (
    <>
      <Head>
        <title>NFT Landings demo | Home</title>
        <meta name="keywords" content="ninjas" />
        
      <script async
      type="module" 
        src="https://cdn.bitskistatic.com/bitski-ui/latest/dist/bitski-ui/bitski-ui.esm.js"
      ></script>
      </Head>
      <Hero />

      <Grid products={products} />

    </>
  );
};

export default Home;
