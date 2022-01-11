const handleSumTotal = (cart) => {
  const reducer = (acc, currentValue) => acc + currentValue.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

export default handleSumTotal;
