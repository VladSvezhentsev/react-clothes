function CartItem({ item, totalPrice, totalCount, onRemove, onPlus, onMinus }) {
   const handleRemoveClick = () => onRemove(item.id);

   const handlePlusClick = () => onPlus(item.id);

   const handleMinusClick = () => onMinus(item.id);

   return (
      <div className="cart__item">
         <div className="item">
            <div className="item__image">
               <img src={item.imageUrl} alt="item" />
            </div>
            <div className="item__info">
               <h3>{item.name}</h3>
               <span>({item.size})</span>
               <p>{item.price} ₴/шт</p>
            </div>
         </div>
         <div className="item__payment">
            <div className="payment__count">
               <button onClick={handleMinusClick}>-</button>
               <div>{totalCount}</div>
               <button onClick={handlePlusClick}>+</button>
            </div>
            <div className="payment__price">
               <h2>{totalPrice} ₴</h2>
               <i onClick={handleRemoveClick} className="far fa-trash-alt"></i>
            </div>
         </div>
      </div>
   );
}

export default CartItem;
