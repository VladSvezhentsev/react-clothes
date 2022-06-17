import { Link } from "react-router-dom";

function NavBar({ onClose }) {
   return (
      <div className="overlay">
         <nav className="navbar">
            <h1>
               Menu <i onClick={onClose} className="fas fa-times"></i>
            </h1>
            <ul>
               <li>
                  <Link onClick={onClose} to="/about">
                     About
                  </Link>
               </li>
               <li>
                  <Link onClick={onClose} to="/contacts">
                     Contacts
                  </Link>
               </li>
               <li>
                  <Link onClick={onClose} to="/delivery">
                     Delivery
                  </Link>
               </li>
               <li>
                  <Link onClick={onClose} to="/payment">
                     Payment
                  </Link>
               </li>
            </ul>
            <div className="contacts">
               <h3>Contacts</h3>
               <p>097-92-45-281</p>
               <p>Vinnytsia, Central st. 44</p>
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
