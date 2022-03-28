import Head from "next/head";
import Link from "next/link";
import Hero from "../comps/Hero";
import Grid from "../comps/Grid";
import Image from 'next/image'
import Script from 'next/script'
import {useEffect} from "react";
import { assignColors } from "../helpers";

const Home = ({products}) => {

  useEffect(() => {
    assignColors();
  }, []);

  return (
    <>

      <Head>

        <title>NFT Landings demo | Home</title>
        <meta name="keywords" content="ninjas" />
        
      </Head>
      <Hero />

      <Grid products={products}/>

    </>
  );

};

export const getServerSideProps = async () => {

  const res = await fetch(process.env.NEXT_PUBLIC_API_KEY+"?limit=12&offset=0&all=true");
  const data = await res.json();

  return {
    props: {
      products: data.products
    },
  };
};


export default Home;
