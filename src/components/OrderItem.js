function OrderItem({ item, totalCount }) {
   return (
      <div className="order__item">
         <div className="item__info">
            <img src={item.imageUrl} alt="item" />
            <span>
               {item.name} ({item.size})
            </span>
         </div>
         <div className="item__price">
            <span>
               {totalCount} x <b>{item.price} $</b>
            </span>
         </div>
      </div>
   );
}

export default OrderItem;
