import React,{useState, useEffect, useCallback} from 'react'
import Image from "next/image";
import Link from "next/link";
import {
  intervalToDuration
} from "date-fns";


function CustomProductViewer({ product }) {

  const [saleType, setSaleType] = useState("");
  const [productInfo,setProductInfo] = useState(product)
  const [countDown, setCountDown] = useState("");
  const [inventory, setInventory] = useState("");
  const [saleTypeStatus, setSaleTypeStatus] = useState("normal");

  const handleCountDown =  function (salesEndAt,interval){

    const lastDate = new Date(salesEndAt).getTime();
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

    const liveAt = new Date(productInfo.liveAt).getTime();

    if([years,months,days,hours,minutes,seconds].every(element => element <= 0)){

      setSaleTypeStatus("reload");
      setCountDown("Checking status ...")
      interval.clearInterval();
      
      return;
    } 

    if(currentDate > liveAt && productInfo.auctions[0].info.bids.length>0){
      setSaleTypeStatus("liveAt");
    }

    return countDown;

  };


  const countDownFunction = useCallback( handleCountDown,[productInfo]);

  function getActualBid(array){

    let timeArray = [];
    array.forEach( bid => {
      const date = new Date(bid.createdAt).getTime();
      timeArray = [...timeArray, date];
    });
  
    const lastBid = Math.max(...timeArray);
  
    const lastPrice = array.filter(child => {
  
      const childUNIX = new Date(child.createdAt).getTime();
      return childUNIX == lastBid;
  
    } );
    return lastPrice[0].amount;
  
  }

  useEffect( () => {

    const saleTypes = {

      LIMITED_EDITION : "Limited edition",
      AUCTION : "Auction",
      OFF_CHAIN_AUCTION : "Auction",
      OPEN_CHAIN_AUCTION : "Auction"
  
    }

    setSaleType(saleTypes[productInfo.saleType]);

    let interval;

    if(saleTypes[productInfo.saleType] == "Auction"){

      if(productInfo.auctions[0].info.ended === false){

        interval = setInterval(() => {
          setCountDown(countDownFunction(productInfo.salesEndAt,interval) )
        }, 1000);

      }else{
        setCountDown("Closed")
      }
      
    }

    if(saleTypes[productInfo.saleType] == "Limited edition"){

      if(productInfo.totalSold === productInfo.totalAvailable){
        setInventory("Sold Out");
      }else{
        setInventory(`${productInfo.totalAvailable - productInfo.totalSold } of ${productInfo.totalAvailable} left`); 
      }

    }

    return () => clearInterval(interval); // Always clear intervals and events in useeffect to evit event propagation

  }, [productInfo,countDownFunction]);

  return (

    <div className='w-full flex flex-col items-start'>

      <Link href={productInfo?.purchaseLink} passHref>
        
        <a>

          <div className='relative min-h-[312px] max-h-[312px] w-full block max-w-full transition-transform duration-200 ease-[ease-in-out] hover:scale-105'>

            {
              productInfo?.tokenMetadata?.animation_url != undefined ? (

                <video loop muted playsInline autoPlay  className='object-cover h-full min-h-[312px] min-w-full  max-h-[312px] object-center w-full rounded-xl' >

                  <source src={productInfo.tokenMetadata.animation_url} />
                  <source src={productInfo.tokenMetadata.image} />
                  <p>Your browser Dont support videos</p>
                  
                </video>

              ) :

              (

                <Image
                  className='object-cover h-full min-h-[312px] max-h-[312px] object-center w-full rounded-xl'
                  src={productInfo?.tokenMetadata?.image}
                  alt={productInfo?.tokenMetadata?.title}
                  width={312}
                  height={312}
                />

              )

            }

          </div>

        </a>

      </Link>

      <section className='w-full flex flex-col items-start'>

        <div className={`flex w-full justify-between  border-black  text-black ${saleTypeStatus == "liveAt"? "text-[#ff3567] border-[#ff3567]" : ""}  ${saleTypeStatus == "closeUp" ? "bg-[#ff3567] border-[#ff3567] text-white" : ""} rounded-lg my-5 border-2 px-2 space-x-2`}>

          <p className='flex items-center'>

            {
              saleType != "Auction" || saleTypeStatus == "normal"  ? (

                <>
                  {saleType}
                </>

              ) : saleTypeStatus == "liveAt" ? (

                <>

                  Live auction

                  <span className='ml-2 h-2.5 w-2.5 rounded-full bg-[#ff3567] animate-pulse transition-all block'>
                  </span>

                </>

              ) : saleTypeStatus == "closeUp" ? (
                <>
                  Live auction
                </>
              ) : null
                
            }
            
          </p>

          <p>
            {
              saleType === "Auction" ? (

                <>
                  {countDown}
                </>
                
              ): (
                <>
                  {inventory}
                </>
              )
            }
          </p>

        </div>

        <div className='w-full flex flex-col space-y-5 items-start'>

          <h2 className="text-xl leading-[1.15] font-bold ">
            <Link href={productInfo?.purchaseLink}>
              {productInfo?.tokenMetadata?.name}
            </Link>
          </h2>

          <h3>
            <Link passHref href={`https://www.bitski.com/${productInfo?.username}`}>

              <a className='flex items-center space-x-2'>

                <Image
                  className='rounded-full object-cover '
                  src={`https://www.bitski.com/${productInfo?.username}/image`}
                  alt={""}
                  width={20}
                  height={20}
                />

                <p className='text-[#93979F] '>&#64;{productInfo?.username}</p>

              </a>

            </Link>
          </h3>

          <p className='font-bold text-[1.125rem]'>

            {
              saleType !== "Auction" ? (
                <>
                  ${productInfo?.prices[0]?.price}
                </>
              ) : saleTypeStatus == "normal" && (countDown != "Closed" || productInfo.auctions[0].info.bids.length == 0) ? (
                <>
                  ${productInfo.auctions[0].info.minBid}
                </>
              ) : (
                <>
                  ${getActualBid(productInfo.auctions[0].info.bids)}

                  { countDown != "Closed" ? (

                    <span className="text-sm ml-2 text-[#93979f]">
                     Current bid
                    </span>

                  ): ""}
                  
                </>
                
              )
              
            }

          </p>

        </div>

      </section>

    </div>

  )
}

export default CustomProductViewer