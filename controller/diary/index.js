const addExerciseById = require("./addExerciseById");
const deleteExerciseById = require("./deleteExerciseById");
// const getExercisesByDate = require("./getExercisesByDate");
const addProductInDiaryByDate = require("./addProductInDiaryByDate");
const delProductInDiaryByDate = require("./delProductInDiaryByDate");
const allProductsInDiaryByDate = require("./allDiaryByDate");

module.exports = {
  addProductInDiaryByDate,
  delProductInDiaryByDate,
  allProductsInDiaryByDate,
  addExerciseById,
  deleteExerciseById,
  // getExercisesByDate,
};
