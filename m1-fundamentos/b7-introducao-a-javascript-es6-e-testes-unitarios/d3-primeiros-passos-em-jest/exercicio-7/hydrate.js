const hydrate = (drink) => {
  const drinkArray = drink.replace(/\D/g, '').split('');
  let glassesOfWater = 0;

  drinkArray.forEach((drink) => (glassesOfWater += parseInt(drink)));

  if (glassesOfWater > 1) return `${glassesOfWater} copos de água`;
  return `${glassesOfWater} copo de água`;
};

hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');

module.exports = hydrate;
