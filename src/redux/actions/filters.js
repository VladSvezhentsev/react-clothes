export const setFilterBy = (index) => ({
   type: "SET_FILTER_BY",
   payload: index,
});

export const setSortBy = (name) => ({
   type: "SET_SORT_BY",
   payload: name,
});
