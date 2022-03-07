import Head from "next/head";
import Link from "next/link";
import Hero from "../comps/Hero";
import Grid from "../comps/Grid";
import Image from 'next/image'
import Script from 'next/script'

import {differenceInMinutes, differenceInHours, differenceInSeconds} from "date-fns";
import { useEffect } from "react";

const Home = ({products}) => {

  useEffect(() => {

    setInterval(() => {

      // const lastDate = new Date("2022-03-04T23:00:00Z").getTime();
      // const currentDate = new Date();
      // const diffH = differenceInHours(lastDate,currentDate);
      // const diffM = differenceInMinutes(lastDate, currentDate);
      // const diffS = differenceInSeconds(lastDate,currentDate);

      // console.log(`${diffH>10 ? diffH : "0"+diffH }:${(diffM - diffH*60)>10 ? (diffM - diffH*60) : "0"+(diffM - diffH*60)  }: ${ (diffS - diffM*60) >10 ? (diffS - diffM*60) : "0" + (diffS - diffM*60) }`);

    },1000)

  }, []);

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

      <Grid products={products}/>

    </>
  );

};

export const getServerSideProps = async () => {

  const res = await fetch(process.env.NEXT_PUBLIC_API_KEY+"?limit=12&offset=0");
  const data = await res.json();

  return {
    props: {
      products: data.products
    },
  };
};


export default Home;
