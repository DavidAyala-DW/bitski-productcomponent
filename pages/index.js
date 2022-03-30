import Head from "next/head";
import Hero from "../comps/Hero";
import Grid from "../comps/Grid";
import {useEffect} from "react";
import { assignColors } from "../helpers";
import Main from "../comps/Main";

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

      <Main />
      
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
