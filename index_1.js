const basketItem = [
  {
    id: 49,
    name: "Шаурма с курицей",
    price: "180",
    img: "images/menu_item/shawarma/Курица.webp",
    amount: 1,
  },
  {
    id: 50,
    name: "Куриное бедро",
    price: "320",
    img: "images/menu_item/barbecue/Куриные бедра.webp",
    amount: 1,
  },
];

const x = basketItem.map(
  (obj) => `${obj.name}
Всего ${obj.amount} ед. - стоимость ${obj.price}р. за ед.
******************`
);

console.log(x);
