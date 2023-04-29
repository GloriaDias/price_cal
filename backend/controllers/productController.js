const db = require("../models/db");
const category = db.Category;
const topic = db.Topic;
const pricingConfig = db.PricingConfig;

exports.getCategories = async (req, res) => {
    try {
        const categories = await category.findAll();
        res.json(categories);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
}

exports.getLesson = async (req, res) => {
  try {
    // console.log(req.query);
    const id = req.query.lessonid;;
    const lesson = await topic.findOne({ where: { topic_id: id } });
    res.send(lesson);
    if (!lesson) {
      throw new Error('Lesson not found');
    }
    return lesson;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
exports.getPrice = async (req, res) => {
  try {
    // console.log(req.query);
    const data = req.query;
    const price = await pricingConfig.findOne({ where: { NbOfProf: data.noOfTeacher,NbOfStudents: data.noOfStudent,NbOfHrs: data.noOfHours} });
    res.send(price);
    if (!price) {
      throw new Error('Price not found');
    }
    return price;
  } catch (err) {
    console.error(err);
    throw err;
  }
}