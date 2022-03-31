import Head from "next/head";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import {useEffect} from "react";
import { assignColors } from "../helpers";
import Contact from "../components/Contact";

const Home = ({products}) => {

  useEffect(() => {
    assignColors();
  }, []);

  return (
    <>

      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <link rel="shortcut icon" href={`/${process.env.NEXT_PUBLIC_FAVICON}`} />
      </Head>
      
      <Hero />

      <Grid products={products}/>

      <Contact />
      
    </>
  );

};

export const getServerSideProps = async () => {

  const res = await fetch(process.env.NEXT_PUBLIC_API_KEY+"?all=true&limit=12&offset=0");
  const data = await res.json();

  return {
    props: {
      products: data.products
    },
  };
};


export default Home;
