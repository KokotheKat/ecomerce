import { useSelector } from "react-redux";

import { useEffect } from "react";
// import {  useGetProductsQuery } from "../service/api";

export const HomePage = () => {
  const items = useSelector((state) => state.product);
  // const items = useSelector((state) => state.products.items);
  // const status = useSelector((state) => state.products.status);
  // console.log(status)
  // if (status === "loading") {
    // console.log(items)
    // return <div>cargando</div>;
    // }
    
    
    // const { data, error, isLoading } = useGetProductsQuery()
    
    
    useEffect(() => {
      
      console.log(items)
    // isLoading ? console.log('isLoading') : console.log(data)
  }, [])
  

  

  return (
    <div>
      {/* {items.map((item) => (
        <div key={item.id} >
          <h3>{item.name}</h3>
        </div>
      ))} */}
      sad
    </div>
  );
};
