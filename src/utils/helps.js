const dunk1 = "image/dunk1.png";
const dunk2 = "image/dunk2.png";
const dunk3 = "image/dunk3.png";

export const heroImageList = [
  {id:1,name:"hero-dunk1",image:dunk1},
  {id:2,name:"hero-dunk2",image:dunk2},
  {id:3,name:"hero-dunk3",image:dunk3},
]

export const getUniqueName = (data, name) => {
  let category = data.map((item) => item[name]);
  if (name === "colors") {
    category = category.flat();
  }
  return ["all", ...new Set(category)];
};

export const priceList = [
  { id: 1, text: "모든 제품", value: 0 },
  { id: 2, text: "20만원 이하", value: 200000 },
  { id: 3, text: "100만원 이하", value: 1000000 },
  { id: 4, text: "300만원 이하", value: 3000000 },
];


export const styleLists = [
  {
    id: 1,
    name: "Daniel Adesina",
    image:
      "https://images.unsplash.com/photo-1550044679-244888e97e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Prince Akachi",
    image:
      "https://images.unsplash.com/photo-1542062700-9b61ccbc1696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    name: "Brandon Erlinger-Ford",
    image:
      "https://images.unsplash.com/photo-1553207660-950fd24795d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    name: "Clarisse Meyer",
    image:
      "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    name: "Keenan Constance",
    image:
      "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
];

export const sizeList = [
  "220",
  "225",
  "230",
  "235",
  "240",
  "245",
  "250",
  "255",
  "260",
  "265",
  "270",
  "275",
  "280",
  "285",
  "290",
  "295",
  "300",
];

export const exchangeCurrency = (num) => {
  return new Intl.NumberFormat("kr-KR", {
    style: "currency",
    currency: "KRW",
  }).format(num);
};


export const consoleAlert=()=>{
  console.log(
    "%c혹시 npm run start 실행 하셨나요?",
    "background-color: yellow ; color: black ; font-weight: bold ; " +
      "font-size: 20px ; font-style: italic ; "
  );
  console.log(
    "%cnetlify serverless functions 데이터를 못받아 옵니다!!!",
    "background-color: yellow ; color: black ; font-weight: bold ; " +
      "font-size: 20px ; font-style: italic ; "
  );
  console.log(
    "%c npm run netlify 를 이용해서 localhost:8888 을 이용해주세요 감사합니다",
    "background-color: yellow ; color: red ; font-weight: bold ; " +
      "font-size: 20px ; font-style: italic ; "
  );
}