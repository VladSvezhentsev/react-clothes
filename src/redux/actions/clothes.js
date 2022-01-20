import axios from "axios";

export const setLoaded = (payload) => ({
   type: "SET_LOADED",
   payload,
});

export const fetchClothes = (filterBy, sortBy) => (dispatch) => {
   dispatch(setLoaded(false));
   axios
      .get(
         `/clothes?gender=${filterBy}&_sort=${sortBy.type}&_order=${sortBy.order}`
      )
      .then(({ data }) => {
         dispatch(setClothes(data));
      });
};

export const setClothes = (items) => ({
   type: "SET_CLOTHES",
   payload: items,
});
