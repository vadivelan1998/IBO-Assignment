const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

//first question answer
console.log(getUniqueProductCount(listOfProducts));
function getUniqueProductCount(listOfProducts) {
  let obj = {};
  for (let i = 0; i < listOfProducts.length; i++) {
    if (obj[listOfProducts[i].productName] == undefined) {
      obj[listOfProducts[i].productName] = listOfProducts[i].quantity;
    } else {
      obj[listOfProducts[i].productName] =
        obj[listOfProducts[i].productName] + listOfProducts[i].quantity;
    }
  }
  return obj;
}

//second question answer
console.log(getUniquePrducts(listOfProducts));
function getUniquePrducts(listOfProducts) {
  let obj = {};
  var ans = [];
  for (let i = 0; i < listOfProducts.length; i++) {
    if (obj[listOfProducts[i].productName] == undefined) {
      obj[listOfProducts[i].productName] = listOfProducts[i];
    } else {
      obj[listOfProducts[i].productName].quantity =
        obj[listOfProducts[i].productName].quantity +
        listOfProducts[i].quantity;
    }
  }
  for (var key in obj) {
    ans.push(obj[key]);
  }
  return ans;
}
