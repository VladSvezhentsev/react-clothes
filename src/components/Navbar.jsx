import { Link } from "react-router-dom";

function NavBar({ onClose }) {
   return (
      <div className="overlay">
         <nav className="navbar">
            <h1>
               Меню <i onClick={onClose} className="fas fa-times"></i>
            </h1>
            <ul>
               <li>
                  <Link onClick={onClose} to="/about">
                     Про компанію
                  </Link>
               </li>
               <li>
                  <Link onClick={onClose} to="/contacts">
                     Контакти
                  </Link>
               </li>
               <li>
                  <Link onClick={onClose} to="/delivery">
                     Доставка
                  </Link>
               </li>
               <li>
                  <Link onClick={onClose} to="/payment">
                     Оплата
                  </Link>
               </li>
            </ul>
            <div className="contacts">
               <h3>Контакти</h3>
               <p>097-92-45-281</p>
               <p>м. Вінниця, вул. Центральна 44</p>
            </div>
            <div className="navbar__icons">
               <i className="fab fa-facebook"></i>
               <i className="fab fa-twitter"></i>
               <i className="fab fa-vk"></i>
               <i className="fab fa-youtube"></i>
               <i className="fab fa-instagram"></i>
               <i className="fab fa-telegram"></i>
            </div>
         </nav>
      </div>
   );
}

export default NavBar;
