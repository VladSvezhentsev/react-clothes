import { Link } from "react-router-dom";

function Info() {
   return (
      <div className="info">
         <div className="info__heading">
            <h2>Ми на маркетплейсах</h2>
         </div>
         <div className="info__brand">
            <img src="img/rozetka.webp" alt="rozetka" />
            <img src="img/zakupka.png" alt="allo" />
            <img src="img/epic.jpg" alt="epic" />
            <img src="img/prom.png" alt="prom" />
         </div>
         <div className="info__about">
            <div className="about__heading">
               <h2>Про магазин React Clothes</h2>
            </div>
            <div className="about__text">
               <p>
                  Ми раді запропонувати вам недорогі, але якісні товари з
                  детальними описами, характеристиками та фотографіями. Ми
                  доставимо ваше замовлення безкоштовно в будь-який куточок
                  світу, здійснимо докладну консультацію щодо товарів та
                  допоможемо з вибором.
               </p>
            </div>
            <Link to="/contacts">
               <span>Детальніше</span>
            </Link>
         </div>
      </div>
   );
}

export default Info;
