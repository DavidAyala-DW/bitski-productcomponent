import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

const gridTitle = process.env.NEXT_PUBLIC_GRID_TITLE;
const secondaryColor = process.env.NEXT_PUBLIC_SECONDARY_COLOR;

const Grid = ({ products}) => {

  const [activeFirstProducts,setActiveFirstProducts] = useState(false);
  const [productList, setProductList] = useState(products);
  const [productListActive, setProductListActive] = useState(true);
  const [activeFilter, setActiveFilter] = useState("");
  const [paged, setPaged] = useState(0);
  const [productsPerView,setProductPerView] = useState(12);
  const [totalProducts,setTotalProducts] = useState(100);
  const [loadMorePages,setLoadMorePages] = useState(true);
  const [spinnerActive, setSpinnerActive] = useState(false);

  const filters = [

    {text: "Featured", value: "EDITION"},
    {text: "All", value: "ALL"},
    {text: "Auctions", value: "AUCTION"},
    {text: "Limited Editions", value: "LIMITED_EDITION"},
    {text: "Open Editions", value: "OPEN_EDITION"},
    {text: "Sold",value: "SOLD"}
  
  ];

  async function productRequest(type="pagination"){

    const url = new URL(process.env.NEXT_PUBLIC_API_KEY);

    const obj = {
      limit: productsPerView,
      offset: type == "pagination" ? paged * productsPerView : 0
    };
    
    if(activeFilter != "ALL" && activeFilter != "SOLD" && activeFilter != ""){
      obj.saleType = activeFilter
    }

    if(activeFilter == "SOLD"){
      obj.sold = true;
    }

    for(let filter in obj){
      url.searchParams.append(filter,obj[filter]);
    }

    const request = await fetch(url);
    const response = await request.json();
    const {products} = response;
    return products;
  
  }

  async function getAllPosts(){

    const url = new URL(process.env.NEXT_PUBLIC_API_KEY);

    const obj = {
      limit: 100,
      offset: 0
    };

    if(activeFilter != "ALL" && activeFilter != "SOLD" && activeFilter != ""){
      obj.saleType = activeFilter
    }

    if(activeFilter == "SOLD"){
      obj.sold = true;
    }

    for(let filter in obj){
      url.searchParams.append(filter,obj[filter]);
    }

    const request = await fetch(url);
    const response = await request.json();
    const {products} = response;

    return products.length;

  }

  async function handleRequestAndPagination(type){

    const [products,totalPosts] = await Promise.all([productRequest(type),getAllPosts()]); 
    setProductList(products);
    
    setTotalProducts(totalPosts);

    setSpinnerActive(false);
    setProductListActive(true);
    if(products != 0){
      progressbar.style.width = `${products.length/totalPosts*100}%`
    }else{
      progressbar.style.width = "0%";
      setLoadMorePages(false);
    }
    

  }


  function handleClickFilter(e){ 
    e.preventDefault();
    setActiveFilter(e.target.id);
  }

  async function handleClickPagination(e){
    e.preventDefault();
    setPaged(++paged);
    setSpinnerActive(true);
    const moreProducts = await productRequest();

    setSpinnerActive(false);
    setProductList([...productList,...moreProducts]);
    const progressbar = document.getElementById("progressbar");
    progressbar.style.width = `${((productList.length+moreProducts.length)/totalProducts)*100}%`;
    if(totalProducts == (productList.length+moreProducts.length)){
      setLoadMorePages(false);
    }
    
  }

  useEffect(() => {
    setActiveFirstProducts(true);
  }, []);

  useEffect(() => {
  
    if(activeFilter!= ""){
      setSpinnerActive(true);
      setProductListActive(false);
      setPaged(0);
      setProductPerView(12);
      setTotalProducts(100);
      setLoadMorePages(true);
      handleRequestAndPagination("filter");
    }
    
  }, [activeFilter]);
  
  return (

    <section id="grid" className="px-5 md:px-20 max-w-[1440px] w-full">
      {/* <h1 className="mt-8 mb-8 text-3xl text-center">{gridTitle}</h1> */}

      <div className="flex flex-col space-y-5 max-w-[1440px] mx-auto w-full my-5">

        <h2>Filter Collection</h2>

        <div className="flex w-full justify-center">

          <div className="flex items-center w-full space-x-3">

            {
              activeFirstProducts && (

                filters.map((filter,index) => (

                  <div 
                    key={index}
                    className="p-5 min-w-[118px] cursor-pointer min-h-[118px] max-h-max max-w-max flex flex-col items-center justify-center bg-[#DBDBDB]"
                    onClick={handleClickFilter}
                    id={filter.value}
                  >
  
                    <p
                      className="text-black cursor-pointer text-xs font-medium"
                      onClick={handleClickFilter}
                      id={filter.value}
                    >
                      {filter.text}
                    </p>
  
                  </div>
  
                ))

              )

            }

          </div>

        </div>

      </div>
      
      {
        productListActive && (
          <div className="container w-full grid grid-cols-2 md:grid-cols-3 gap-8">

            {

              productList.map((item) => (

                <a href={item.purchaseLink} key={item.id}>
                  <div
                    className="flex justify-center items-center mb-4"
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
              ))

            }

          </div>
        )
      }

      {

        (spinnerActive) && (

          <div className="sk-cube-grid mx-auto my-5">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>

        )

      }

      {
        productListActive && (
          <div className="flex flex-col space-y-5 items-center max-w-[151px] mx-auto my-5 w-full">

            <div className="flex flex-col items-start w-full space-y-1">
    
              <p className="text-[10px] font-normal text-center text-black">
                {`SHOWIMG ${productList.length} OF ${totalProducts} PRODUCTS`}
              </p>
    
              <div className="h-1 w-full bg-gray-300">
                <div id="progressbar" className="h-1 w-[12%] bg-gray-600"></div>
              </div>
    
            </div>
    
            {
              loadMorePages && (
    
                <button
                className="bg-gray-300 text-black px-4 py-2 text-center"
                onClick={handleClickPagination}
                >
                  LOAD MORE
                </button>
    
              )
            }
    
          </div>

        )
      }

    </section>
  );
};

export default Grid;

