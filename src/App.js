import { BrowserRouter , Routes , Route } from "react-router-dom";
import Header from "./component/Header";
import ProductListing from "./component/ProductListing";
import ProductDetail from "./component/ProductDetail";


function App() {
  return (
    <BrowserRouter>
     <Header/>
     <Routes>
       <Route path="/" element={<ProductListing/>}/>
       <Route path="/product/:productId" element={<ProductDetail/>}/>
     </Routes>
    </BrowserRouter>

  );
}

export default App;
