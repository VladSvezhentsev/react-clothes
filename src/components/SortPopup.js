import { useEffect, useRef, useState } from "react";

const items = [
   { name: "популярності", type: "popular", order: "desc" },
   { name: "ціні", type: "price", order: "desc" },
   { name: "назві", type: "name", order: "asc" },
];

function SortPopup({ sortBy, onClickSortType }) {
   const [visiblePopup, setVisiblePopup] = useState(false);
   const sortRef = useRef();
   const activeLabel = items.find((obj) => obj.type === sortBy).name;

   const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup);

   const handleOutsideClick = (e) => {
      if (!e.path.includes(sortRef.current)) {
         setVisiblePopup(false);
      }
   };

   const onSelectItem = (index) => {
      onClickSortType(index);
      setVisiblePopup(false);
   };

   useEffect(() => {
      document.body.addEventListener("click", handleOutsideClick);
   }, []);

   return (
      <div ref={sortRef} className="sort">
         <div className="sort__label">
            <i className="fas fa-sort"></i>
            <b>Cортуваня по:</b>
            <span onClick={toggleVisiblePopup}>{activeLabel}</span>
         </div>
         {visiblePopup && (
            <div className="sort__popup">
               <ul>
                  {items.map((obj, index) => (
                     <li
                        className={sortBy === obj.type ? "active" : ""}
                        key={index}
                        onClick={() => onSelectItem(obj)}
                     >
                        {obj.name}
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
}

export default SortPopup;
