import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Header, Navbar } from "./components";
import {
   Home,
   Favorites,
   Cart,
   Delivery,
   Payment,
   Contacts,
   About,
   Item,
   Order,
} from "./pages";

function App() {
   const [menuOpened, setMenuOpened] = useState(false);

   return (
      <div className="wrapper">
         {menuOpened && <Navbar onClose={() => setMenuOpened(false)} />}
         <Header onClickMenu={() => setMenuOpened(true)} />
         <main className="content">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/item/:id" element={<Item />} />
               <Route path="/favorites" element={<Favorites />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/order" element={<Order />} />
               <Route path="/about" element={<About />} />
               <Route path="/contacts" element={<Contacts />} />
               <Route path="/delivery" element={<Delivery />} />
               <Route path="/payment" element={<Payment />} />
            </Routes>
         </main>
         <Footer />
      </div>
   );
}

export default App;
