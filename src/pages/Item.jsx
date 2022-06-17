import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Navigate, Link } from "react-router-dom";
import { addClothesToCart, minusCartItem } from "../redux/actions/cart";
import {
   addClothesToFavorites,
   removeClothesFromFavorites,
} from "../redux/actions/favorites";

function Item() {
   const availableSizes = ["S", "M", "L", "XL"];
   const [activeSize, setActiveSize] = useState(0);
   const dispatch = useDispatch();
   const [isInCartClicked, setIsInCartClicked] = useState(false);
   const items = useSelector(({ clothes }) => clothes.items);
   const cartItems = useSelector(({ cart }) => cart.items);
   const favoriteItems = useSelector(({ favorites }) => favorites.items);
   const { id } = useParams();
   const chosenItem = items.find((el) => el.id === Number(id));
   let storedItem = favoriteItems.find((item) => item.id === chosenItem.id);

   if (!chosenItem) return <Navigate to="/" />;

   const onSelectSize = (index) => setActiveSize(index);

   const onClickAddClothes = () => {
      const obj = {
         id: chosenItem.id,
         name: chosenItem.name,
         imageUrl: chosenItem.imageUrl,
         price: chosenItem.price,
         size: availableSizes[activeSize],
      };

      dispatch(addClothesToCart(obj));
   };

   const onClickInCart = () => {
      setIsInCartClicked(!isInCartClicked);
      onClickAddClothes();
   };

   const onMinusItem = () => dispatch(minusCartItem(chosenItem.id));

   const onAddToFavorites = () => dispatch(addClothesToFavorites(chosenItem));

   const onRemoveFromFavorites = () =>
      dispatch(removeClothesFromFavorites(chosenItem.id));

   return (
      <div className="item">
         <div className="item__image">
            <img src={chosenItem.imageUrl} alt="item" />
         </div>
         <div className="item__info">
            <div className="info__header">
               <h2>{chosenItem.name}</h2>
               <h1>{chosenItem.price} $</h1>
            </div>
            <div className="info__size">
               <span>Size</span>
               <div className="buttons">
                  {availableSizes.map((size, index) => (
                     <button
                        key={size}
                        onClick={() => onSelectSize(index)}
                        className={activeSize === index ? "active" : ""}
                     >
                        {size}
                     </button>
                  ))}
               </div>
            </div>
            <div className="info__action">
               {isInCartClicked ? (
                  <div className="buttons-cart">
                     <button onClick={onMinusItem}>-</button>
                     <Link to="/cart">
                        <button>
                           In cart{" "}
                           {cartItems[chosenItem.id] &&
                              cartItems[chosenItem.id].items.length}
                           <br />
                           Go
                        </button>
                     </Link>
                     <button onClick={onClickAddClothes}>+</button>
                  </div>
               ) : (
                  <button onClick={onClickInCart} className="btn-cart">
                     In cart
                  </button>
               )}
               <button className="btn-fav">
                  {storedItem ? (
                     <i
                        onClick={onRemoveFromFavorites}
                        className="fas fa-heart"
                     ></i>
                  ) : (
                     <i onClick={onAddToFavorites} className="far fa-heart"></i>
                  )}
               </button>
            </div>
            <div className="info__main">
               <div className="main__description">
                  <p>Description</p>
               </div>
               <div className="description">
                  <span>
                     Lorem ispansum dolor sit amet consectetur adipisicing elit.
                     Sit molestiae rerum voluptatibus autem culpa dicta a,
                     accusamus in recusandae natus!
                  </span>
               </div>
               <div className="main__feature">
                  <p>Features</p>
                  <div className="feature">
                     <div className="feature__country">
                        <span>Country:</span>
                        <span>{chosenItem.country}</span>
                     </div>
                     <div className="feature__material">
                        <span>Fabric:</span>
                        <span>{chosenItem.fabric}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Item;
