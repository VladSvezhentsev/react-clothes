import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
   addClothesToFavorites,
   removeClothesFromFavorites,
} from "../redux/actions/favorites";

function Card({ obj }) {
   const dispatch = useDispatch();
   const { items } = useSelector(({ favorites }) => favorites);
   let storedItem = items.find((item) => item.id === obj.id);

   const onAddToFavorites = () => dispatch(addClothesToFavorites(obj));

   const onRemoveFromFavorites = () =>
      dispatch(removeClothesFromFavorites(obj.id));

   return (
      <div className="card">
         <div className="card__image">
            {storedItem ? (
               <img
                  onClick={onRemoveFromFavorites}
                  className="heart"
                  src="../img/liked.svg"
                  alt="fav"
               />
            ) : (
               <img
                  onClick={onAddToFavorites}
                  className="heart"
                  src="../img/unliked.svg"
                  alt="fav"
               />
            )}
            <Link to={`/item/${obj.id}`}>
               <img src={obj.imageUrl} alt="clothes" />
            </Link>
         </div>
         <span>{obj.name}</span>
         <div className="card__footer">
            <span>{obj.price} $</span>
            <Link to={`/item/${obj.id}`}>
               <img src="../img/cart.svg" alt="cart" />
            </Link>
         </div>
      </div>
   );
}

export default Card;
