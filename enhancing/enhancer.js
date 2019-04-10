module.exports = {
  succeed,
  fail,
  repair,
  get
};

function repair(item) {
  return {
    ...item,
    durability: 100
  };
}

function succeed(item) {
  return {
    ...item,
    enhancement: item.enhancement === 20 ? 20 : item.enhancement + 1
  };
}

function fail(item) {
  return {
    ...item,
    enhancement:
      item.enhancement > 16
        ? item.enhancement - 1
        : item.enhancement >= 15
        ? item.durability - 10
        : item.durability - 5
  };
}

function get(item) {
  return {
    ...item,
    name:
      item.enhancement > 0 ? `[+${item.enhancement}] ${item.name}` : item.name
  };
}
