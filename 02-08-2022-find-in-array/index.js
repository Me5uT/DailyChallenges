const cars = [
  "opel",
  "honda",
  "tofaş",
  "hundai",
  "toyota",
  "ferrari",
  "Alfa Romeo",
  "Audi",
  "Aston Martin",
  "Bentley",
  "BMW",
  "Bugatti",
  "Cadillac",
];

let query = "";
let searchList = [];

document.addEventListener("change", (event) => {
  query = event.target.value;
});

const dataListElement = document.getElementById("data-list");

// searching by query
const searchByQuery = () => {
  // search in array and push to searchList
  if (query != "") {
    // V1 searching by query with include
    searchList = cars.filter((car) =>
      car.toLowerCase().includes(query.toLowerCase())
    );

    // // V2 searching by query with forEach
    // cars.forEach((car) => {
    //   if (car.toLowerCase().includes(query.toLowerCase())) searchList.push(car);
    // });

    // // V3 searching by query starts with
    // searchList = cars.filter((car) =>
    //   car.toLowerCase().startsWith(query.toLowerCase())
    // );
  } else {
    searchList = [];
    console.log("list empty");
  }

  // clear data list
  while (dataListElement.hasChildNodes()) {
    document
      .getElementById("data-list")
      .removeChild(dataListElement.firstChild);
  }

  // add list element
  if (searchList.length > 0) {
    for (let index = 0; index < searchList.length; index++) {
      const listItem = document.createElement("li");
      listItem.innerHTML = searchList[index];
      dataListElement.appendChild(listItem);
    }
  }
};
