import { useSelector } from "react-redux";
import { Card } from "../components/";

function Favorites() {
   const { items } = useSelector(({ favorites }) => favorites);

   return (
      <div>
         <h2>My bookmarks</h2>
         {items.length ? (
            <div className="content__cards">
               {items.map((obj) => (
                  <Card key={obj.id} obj={obj} />
               ))}
            </div>
         ) : (
            <p>Your bookmark list is empty</p>
         )}
      </div>
   );
}

export default Favorites;
