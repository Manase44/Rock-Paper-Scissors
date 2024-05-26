const randomNumberGenerator = () => {
  const num1 = Math.random();
  const num2 = Math.random();
  const num3 = Math.random();
  return Math.floor(num1 + num2 + num3);
};

for (let index = 0; index < 10; index++) {
  console.log(randomNumberGenerator())
  
}