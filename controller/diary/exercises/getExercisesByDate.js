const { DiaryExercise } = require("../../../models");

const getExercisesByDate = async (req, res) => {
  const { _id: owner } = req.user;
  const { date: receivedDate } = req.body;

  let result = await DiaryExercise.findOne({
    ownerId: owner,
    date: receivedDate,
  });

  res.status(200).json({ data: result });
};
module.exports = { getExercisesByDate };
