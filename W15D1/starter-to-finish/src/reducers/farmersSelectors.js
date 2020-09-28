export const getAllFarmers = ({ farmers }) => (
  Object.values(farmers)
);

// export const getFilteredFarmers = ({ farmers, filter }) => {
//   const lowerCaseFilter = filter.toLowerCase();
//   return Object.values(farmers).filter(
//     (farmer) => farmer.name.toLowerCase().includes(lowerCaseFilter)
//   );
// };


export const selectFarmer = ({ farmers }, id) => {
  const nullFarmer = {
    id: null,
    name: '',
    paid: false
  };s
  return farmers[id] || nullFarmer;
};
