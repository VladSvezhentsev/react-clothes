import { Link } from "react-router-dom";

function Info() {
   return (
      <div className="info">
         <div className="info__heading">
            <h2>We are at the marketplaces</h2>
         </div>
         <div className="info__brand">
            <img src="img/rozetka.webp" alt="rozetka" />
            <img src="img/zakupka.png" alt="allo" />
            <img src="img/epic.jpg" alt="epic" />
            <img src="img/prom.png" alt="prom" />
         </div>
         <div className="info__about">
            <div className="about__heading">
               <h2>About the store React Clothes</h2>
            </div>
            <div className="about__text">
               <p>
                  We are pleased to offer you inexpensive but quality goods from
                  detailed descriptions, characteristics and photographs. We we
                  will deliver your order for free to any corner world, provide
                  detailed advice on goods and help with the choice.
               </p>
            </div>
            <Link to="/contacts">
               <span>Read more</span>
            </Link>
         </div>
      </div>
   );
}

export default Info;
