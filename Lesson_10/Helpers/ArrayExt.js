Array.prototype.distinct = function () {
  return Array.from(new Set(this));
};
