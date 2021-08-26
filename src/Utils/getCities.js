const response = await fetch("/city.list.json")
const cityList = await response.json();

export {cityList}
