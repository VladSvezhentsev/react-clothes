import axios from "axios";

export const setLoaded = (payload) => ({
   type: "SET_LOADED",
   payload,
});

export const fetchClothes = (filterBy, sortBy) => (dispatch) => {
   dispatch(setLoaded(false));
   axios
      .get(
         `https://62ab5d36a62365888bdacf17.mockapi.io/items?gender=${filterBy}&sortBy=${sortBy.type}&order=${sortBy.order}`
      )
      .then(({ data }) => {
         dispatch(setClothes(data));
      });
};

export const setClothes = (items) => ({
   type: "SET_CLOTHES",
   payload: items,
});
