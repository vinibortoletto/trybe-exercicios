const products = ['Arroz', 'Feijão', 'Tomate'];
const prices = [20, 30, 40];

const updateProducts = (products, prices) => {
  return products.map((product, index) => ({ [product]: prices[index] }));
};

const newProducts = updateProducts(products, prices);
