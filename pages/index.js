import Head from "next/head";
import Link from "next/link";
import Hero from "../comps/Hero";
import Grid from "../comps/Grid";
import Image from 'next/image'
import Script from 'next/script'

import {
  differenceInMinutes, 
  differenceInHours, 
  differenceInSeconds,
  differenceInDays,
  differenceInMonths,
  formatDuration,
  intervalToDuration
  
} from "date-fns";

import { useEffect } from "react";

const Home = ({products}) => {

  useEffect(() => {

    setInterval(() => {

      const lastDate = new Date("2022-03-24T23:00:00Z").getTime();
      const currentDate = new Date();

      let duration = intervalToDuration({
        start: lastDate, 
        end: currentDate,
      })

      const {years,months,days,hours,minutes,seconds} = duration;
      let countDown = "";

      years>0 && (years>=10 ? countDown+= years+"yrs " : countDown+= 0+years+"yrs ");
      months>0 && (months>=10 ? countDown+= months+"mo " : countDown+= 0+months+"mo ");
      days>=10 ? countDown+= days+"d " : countDown+= 0+days+"d ";
      hours>=10 ? countDown+= hours+"h " : countDown+= 0+hours+"h ";
      minutes>=10 ? countDown+= minutes+"m " : countDown+= 0+minutes+"m ";
      seconds>=10 ? countDown+= seconds+"s " : countDown+= 0+seconds+"s ";

    },1000)

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
