export const getID = (function () {
  let id = 0;
  return function () {
    id++;
    return id;
  };
})();
