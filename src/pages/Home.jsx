import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, LoadingBlock, Info, Carousel, SortPopup } from "../components";
import { fetchClothes } from "../redux/actions/clothes";
import { setFilterBy, setSortBy } from "../redux/actions/filters";

const headings = ["For men", "For women"];

function Home() {
   const dispatch = useDispatch();
   const items = useSelector(({ clothes }) => clothes.items);
   const isLoaded = useSelector(({ clothes }) => clothes.isLoaded);
   const { sortBy, filterBy } = useSelector(({ filters }) => filters);
   const [searchValue, setSearchValue] = useState("");

   useEffect(() => {
      dispatch(fetchClothes(filterBy, sortBy));
   }, [filterBy, sortBy]);

   const onSelectFilter = (index) => dispatch(setFilterBy(index));

   const onSelectSortType = (type) => dispatch(setSortBy(type));

   const onChangeSearchInput = (e) => setSearchValue(e.target.value);

   const renderItems = () => {
      const filtredItems = items.filter((item) =>
         item.name.toLowerCase().includes(searchValue.toLowerCase())
      );

      return isLoaded
         ? filtredItems.map((obj) => <Card key={obj.id} obj={obj} />)
         : Array(10)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />);
   };

   return (
      <>
         <Carousel />
         <div className="content__filters">
            <div className="form">
               <form>
                  <input
                     onChange={onChangeSearchInput}
                     placeholder="Search..."
                  />
               </form>
            </div>
            <SortPopup
               sortBy={sortBy.type}
               onClickSortType={onSelectSortType}
            />
         </div>
         <div className="content__heading">
            {headings.map((name, index) => (
               <h2
                  key={name}
                  className={filterBy === index ? "title-active" : "title"}
                  onClick={() => onSelectFilter(index)}
               >
                  {name}
               </h2>
            ))}
         </div>
         <div className="content__cards">{renderItems()}</div>
         <Info />
      </>
   );
}

export default Home;
