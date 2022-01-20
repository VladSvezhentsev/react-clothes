import { useSelector } from "react-redux";
import { Card } from "../components/";

function Favorites() {
   const { items } = useSelector(({ favorites }) => favorites);

   return (
      <div>
         <h2>Мої закладки</h2>
         {items.length ? (
            <div className="content__cards">
               {items.map((obj) => (
                  <Card key={obj.id} obj={obj} />
               ))}
            </div>
         ) : (
            <p>Ваш список закладок порожній</p>
         )}
      </div>
   );
}

export default Favorites;
