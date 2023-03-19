// деструктуризация объектов
const userProfile = {
  name: "Yauhen Klimovich",
  commentsQty: 23,
  hasSignedAgreement: false,
};

const { name, commentsQty } = userProfile;
const { hasSignedAgreement } = userProfile;

console.log(name);
console.log(hasSignedAgreement);

// деструктуризация массивов

const fruits = ["Apple", "Banana"];
const [fruitOne, fruitTwo] = fruits;

console.log(fruitOne);
console.log(fruitTwo);

// Деструктуризация в функциях
const userProfileNew = {
  name: "Yauhen",
  commentsQty: 23,
  hasSignedAgreement: false,
};
const userInfo = ({ name, commentsQty }) => {
  if (!commentsQty) {
    return `User ${name} has no comments`;
  }
  return `User ${name} has ${commentsQty} comments`;
};
console.log(userInfo(userProfileNew));
