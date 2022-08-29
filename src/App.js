import './App.css';
import React, { useState ,useEffect} from 'react';
import ListCustomer from './components/ListCustomer';
import Header from './components/Header';
import Card from './components/Card';
import AddProduct from './components/AddProduct';
function App() {
  const [listProduct,setListProduct]=useState([{
    title: 'Apple',
    url:'https://www.hnmac.vn/media/cache/data/san-pham/mac-pro/mac-pro-m2-2022/mbp-spacegray-select-202206-350x265.jpeg',
    name: 'MacBook Pro M2 13 inch 2022 512GB'

  }])
  
  let callBackProduct=(data)=>{
    setListProduct([...data])
    console.log(data)
  }
  
  return (
    <div className="App">
      <Header />
      <ListCustomer />
      <div className="container">
      <AddProduct handleProduct={callBackProduct} listProduct={listProduct}></AddProduct>
      
      <div className="flex">
          {
            listProduct.map((el,index)=>{
              return (
                <div key={index} className="col-sm">
                  <Card  title={el.title} url={el.url} name={el.name}>
                    Buy Now
                  </Card>
                </div>
              )
      
          })
          }
        </div>
      </div>
    </div>
  );
}
export default App;
