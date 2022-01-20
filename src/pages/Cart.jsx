import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "../components/";
import {
   removeCartItem,
   minusCartItem,
   plusCartItem,
} from "../redux/actions/cart";

function Cart() {
   const dispatch = useDispatch();
   const { items, totalCount, totalPrice } = useSelector(({ cart }) => cart);
   const addedClothes = Object.keys(items).map((key) => items[key].items[0]);

   const onRemoveItem = (id) => dispatch(removeCartItem(id));

   const onPlusItem = (id) => dispatch(plusCartItem(id));

   const onMinusItem = (id) => dispatch(minusCartItem(id));

   return (
      <>
         <h2>Корзина</h2>
         {totalCount ? (
            <div className="cart-container">
               <div className="cart-block">
                  {addedClothes.map((item) => (
                     <CartItem
                        key={item.id}
                        item={item}
                        totalPrice={items[item.id].totalPrice}
                        totalCount={items[item.id].items.length}
                        onRemove={onRemoveItem}
                        onPlus={onPlusItem}
                        onMinus={onMinusItem}
                     />
                  ))}
               </div>
               <div className="cart__payment">
                  <div className="payment__products">
                     <div>Товари ({totalCount})</div>
                     <div>{totalPrice} ₴</div>
                  </div>
                  <div className="payment__total">
                     <div>Всього:</div>
                     <div>{totalPrice} ₴</div>
                  </div>
                  <div>
                     <Link to="/order">
                        <button className="btn-cart">
                           Оформити замовлення
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         ) : (
            <p>Ваша корзина порожня</p>
         )}
      </>
   );
}

export default Cart;
