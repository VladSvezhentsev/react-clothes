import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header({ onClickMenu }) {
   const { totalCount } = useSelector(({ cart }) => cart);
   const { items } = useSelector(({ favorites }) => favorites);

   return (
      <header className="header">
         <div className="header__top">
            <div onClick={onClickMenu} className="menu">
               <i className="fas fa-bars"></i>
               <span>Menu</span>
            </div>
            <Link to="/">
               <div className="header__logo">
                  <img width={28} height={28} src="./img/logo.svg" alt="" />
                  <span>React Clothes</span>
               </div>
            </Link>
            <div className="header__shop">
               <Link to="/favorites">
                  <img src="../img/heart.svg" alt="fav" />
                  <span className="cart__favorites">{items.length}</span>
               </Link>
               <Link to="/cart">
                  <img src="../img/cart.svg" alt="cart" />

                  <span className="cart__count">{totalCount}</span>
               </Link>
            </div>
         </div>
      </header>
   );
}

export default Header;
