import { useState } from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "../components/";

function Order() {
   const validName = new RegExp("^[?!,.а-яА-ЯёЁ]+$\\w{3}");
   const validAddres = new RegExp("^[?!,.а-яА-ЯёЁ]+$\\w{3}");
   const validNumber = new RegExp(".?(\\d{3}).*(\\d{3}).*(\\d{4})");
   const [name, setName] = useState("");
   const [address, setAddress] = useState("");
   const [number, setNumber] = useState("");
   const [nameErr, setNameErr] = useState(false);
   const [addressErr, setAddressErr] = useState(false);
   const [numberErr, setNumberErr] = useState(false);

   const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);
   const addedClothes = Object.keys(items).map((key) => items[key].items[0]);
   const [deliveryPrice, setDeliveryPrice] = useState(0);

   const handleRadioChange = (e) => setDeliveryPrice(e.target.value);

   const handleNewOrder = () => {
      if (!validName.test(name)) {
         setNameErr(true);
      }
      if (!validAddres.test(address)) {
         setAddressErr(true);
      }
      if (!validNumber.test(number)) {
         setNumberErr(true);
      } else {
         alert("Ваше замовлення прийнято");
      }
   };

   return (
      <>
         {totalCount ? (
            <div className="order-container">
               <div className="order__info">
                  <h1>Оформлення замовлення</h1>
                  <div className="contacts-block">
                     <h2>Контактні дані</h2>
                     <div className="contacts__name">
                        <span>Контактна особа</span>
                        <input
                           type="text"
                           onChange={(e) => setName(e.target.value)}
                           autoFocus
                        />
                        {nameErr && <p className="error">Введіть ваше ім'я</p>}
                     </div>
                     <div className="contacts__tel">
                        <span>Контактний телефон</span>
                        <input
                           type="tel"
                           onChange={(e) => setNumber(e.target.value)}
                        />
                        {numberErr && (
                           <p className="error">Введіть правильний номер</p>
                        )}
                     </div>
                     <div className="contacts__email">
                        <span className="none">Email</span>
                        <input type="email" />
                     </div>
                  </div>
                  <div className="contacts__delivery">
                     <h2>Доставка</h2>
                     <div className="delivery__place">
                        <span>Населений пункт</span>
                        <input
                           type="text"
                           onChange={(e) => setAddress(e.target.value)}
                        />
                        {addressErr && (
                           <p className="error">Введіть ваш населений пункт</p>
                        )}
                     </div>
                     <div className="delivery__variants">
                        <div className="variant">
                           <div className="label">
                              <input
                                 type="radio"
                                 name="delivery"
                                 value="0"
                                 id="deliveryChoice1"
                                 defaultChecked
                                 onChange={handleRadioChange}
                              />
                              <label htmlFor="deliveryChoice1">
                                 <div>
                                    <p>Самовивіз</p>
                                    <span>На пункті видачі</span>
                                 </div>
                              </label>
                           </div>
                           <div className="price">
                              <b>+ 0 ₴</b>
                           </div>
                        </div>
                        <div className="variant">
                           <div className="label">
                              <input
                                 type="radio"
                                 name="delivery"
                                 value="50"
                                 id="deliveryChoice2"
                                 onChange={handleRadioChange}
                              />
                              <label htmlFor="deliveryChoice2">
                                 <div>
                                    <p>Новою Поштою</p>
                                    <span>Із відділення Нової Пошти</span>
                                 </div>
                              </label>
                           </div>
                           <div className="price">
                              <b>+ 50 ₴</b>
                           </div>
                        </div>
                        <div className="variant">
                           <div className="label">
                              <input
                                 type="radio"
                                 name="delivery"
                                 value="100"
                                 id="deliveryChoice3"
                                 onChange={handleRadioChange}
                              />
                              <label htmlFor="deliveryChoice3">
                                 <div>
                                    <p>Кур'єром</p>
                                    <span>Доставка кур'єром</span>
                                 </div>
                              </label>
                           </div>
                           <div className="price">
                              <b>+ 100 ₴</b>
                           </div>
                        </div>
                     </div>
                     <div className="textarea-block">
                        <div className="textarea">
                           <span>Коментар до замовлення</span>
                           <textarea rows="5"></textarea>
                        </div>
                     </div>
                  </div>
                  <div className="order__payment">
                     <h2>Спосіб оплати</h2>
                     <div className="payment__label">
                        <div className="label">
                           <input
                              type="radio"
                              name="payment"
                              value="cash"
                              id="paymentChoice1"
                              defaultChecked
                           />
                           <label htmlFor="paymentChoice1">
                              <p>Готівкою</p>
                           </label>
                        </div>
                        <div className="label">
                           <input
                              type="radio"
                              name="payment"
                              value="card"
                              id="paymentChoice2"
                           />
                           <label htmlFor="paymentChoice2">
                              <p>Карткою</p>
                           </label>
                        </div>
                     </div>
                     <button onClick={handleNewOrder}>
                        Підтвердити замовлення
                     </button>
                  </div>
               </div>
               <div className="order__items">
                  {addedClothes.map((item) => (
                     <OrderItem
                        key={item.id}
                        item={item}
                        totalCount={items[item.id].items.length}
                     />
                  ))}
                  <div className="items__total">
                     <div className="subtotal">
                        <div>
                           <span>Сума по товарам</span>
                           <b>{totalPrice} ₴</b>
                        </div>
                        <div>
                           <span>Вартість доставки</span>
                           <b>{deliveryPrice} ₴</b>
                        </div>
                     </div>
                     <div className="total">
                        <p>Всього</p>
                        <b>{totalPrice + Number(deliveryPrice)} ₴</b>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <p>Ви ще не зробили замовлення</p>
         )}
      </>
   );
}

export default Order;
