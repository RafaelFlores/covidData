import data from '../../../components/map/data.json';


// Function to summ all deaths in the country
const Calculations = () => {
  const resultValues = {
    positive: 0,
    negative: 0,
    recovered: 0,
    deaths: 0,
  };
  data.forEach(usState => {
    resultValues.positive += usState.positive;
    resultValues.deaths += usState.death;
    resultValues.negative += usState.negative;
    resultValues.recovered += usState.recovered;
  });
  return resultValues;
}

export default Calculations;
