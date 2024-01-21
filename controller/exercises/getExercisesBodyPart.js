const { ExerciseBodyParts } = require("../../models");
const { HttpError } = require("../../utils");

const getExercisesBodyPart = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  let { query } = req.params;

  if (!req.params.query) {
    throw HttpError(400, "Query parameter is missing");
  }

  const validPage = parseInt(req.query.page) || 1;
  const validLimit = parseInt(req.query.limit) || 10;

  if (isNaN(validPage) || isNaN(validLimit)) {
    throw HttpError(400, "Page and limit must be numeric values");
  }

  if (validPage < 1 || validLimit < 1) {
    throw HttpError(400, "Page and limit must be greater than or equal to 1");
  }

  if (!query || typeof query !== "string") {
    throw HttpError(400, "Invalid query parameter");
  }

  const skip = (page - 1) * limit;

  const data = await ExerciseBodyParts.find({ bodyPart: `${query}` })
    .skip(skip)
    .limit(limit);

  const totalItems = await ExerciseBodyParts.countDocuments({
    bodyPart: query,
  });
  res.json({ data, totalItems });
};

module.exports = getExercisesBodyPart;
