import React from "react";
import { BrowserRouter } from "react-router-dom";
import marketingApp from "./components/marketingApp";
import Header from './components/Header';
// export default ()=>{
//     return <h1>Helllo from Container</h1>;
// }

export default ()=>{
 
    return (
     <BrowserRouter>
    <div>
        <Header />  
       <MarketingApp/>; 
    </div>
    </BrowserRouter>
    );
}