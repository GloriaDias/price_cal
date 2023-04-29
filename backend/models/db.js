const config = require("../config/db.config.js");
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,    
    // config.port,
    {
      host: config.HOST,
      dialect: config.dialect,
      // operatorsAliases: false,
      port: config.port,
      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
      }
    }
  );

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize; // connection string

db.Category = require("../models/Category.js")(sequelize, Sequelize);
db.Course = require("../models/Course.js")(sequelize, Sequelize);
db.Topic = require("../models/Topic.js")(sequelize, Sequelize);
db.Customer = require("../models/Customer.js")(sequelize, Sequelize);
db.Teacher = require("../models/Teacher.js")(sequelize, Sequelize);
db.CourseTeacher = require("../models/CourseTeacher.js")(sequelize, Sequelize);
db.PricingConfig = require("../models/PricingConfig.js")(sequelize, Sequelize);
db.Booking = require("../models/Booking.js")(sequelize, Sequelize);
db.ConstVariables = require("../models/ConstVariables.js")(sequelize, Sequelize);
const defaultValues = db.ConstVariables.build({TeacherHourlyRate: 40,
  ExtraEachStudent: 20,
  Administrative_fees: 15,
  Sales_tax: 14.975,
  RebateFor6: 10,
  RebateFor12: 15,})

// const defaultCategoryValues = db.Category.build()


db.ConstVariables.count()
.then(count => {
  if(count >= 1){
    console.log("data already exists ");
  } else {
    db.ConstVariables.create(defaultValues)
    .then(users => {
      console.log('New users created:');
    })
    .catch(err => {
      console.log('Error creating users:', err);
    });
  }
})
.catch(err => {
  console.error('Error getting user count:', err);
});

// Default Category into DB
db.Category.count()
.then(count => {
  if(count >= 7){
    console.log("Categories already exists ");
  } else {
    db.Category.bulkCreate([
      { 
        category_name:"pottery",
      },
      {
        category_name:"painting",
      },
      {
        category_name:"photography",
      },
      {
        category_name:"ceramics",
    
      },{
        category_name:"drawing",
      },
      {
        category_name:"textile",
      },{
        category_name:"jewellery",
      }])
    .then(category => {
      console.log('New Category created:');
    })
    .catch(err => {
      console.log('Error creating Category:', err);
    });
  }
})
.catch(err => {
  console.error('Error getting Category count:', err);
});


// Default Courses Values 
db.Course.count()
.then(count => {
  if(count >= 3){
    console.log("Course already exists ");
  } else {
    db.Course.bulkCreate([
      { 
        course_name:"Pottery Basics",
        category_id:3,
        studio_rent:230,
        minimum_participants:1,
        sales_tax:14.975,
        administrative_fee:15
      },
      {
        course_name:"Painting Arts",
        category_id:4,
        studio_rent:230,
        minimum_participants:1,        
        sales_tax:14.975,
        administrative_fee:15
      },
      {
        course_name:"Wildlife Photography",
        category_id:5,
        studio_rent:230,
        minimum_participants:1,        
        sales_tax:14.975,
        administrative_fee:15
      }])
    .then(course => {
      console.log('New Course created:');
    })
    .catch(err => {
      console.log('Error creating Course:', err);
    });
  }
})
.catch(err => {
  console.error('Error getting Course count:', err);
});



// DEFAULT TOPIC (LESSONS) VALUES 
db.Topic.count()
.then(count => {
  if(count >= 3){
    console.log("Topic already exists ");
  } else {
    db.Topic.bulkCreate([
      { 
        course_id : 1,
        topic_name:"Intro to Pottery",
        description:"Introduction to Pottery is a lesson that provides an overview of basic pottery techniques, such as wheel throwing, hand building, glazing, and firing. Students will learn how to use various pottery tools and equipment, and create functional and decorative objects using clay. This course is designed for beginners with little or no experience in pottery and is an excellent starting point for anyone interested in exploring this artistic medium.",        
        duration: 1.5
      },
      {
        course_id : 2,
        topic_name:"Intro to Painting",
        description:"Intro to Painting is a lesson that covers the fundamentals of painting, including color theory, composition, brushwork, and texture. Students will learn how to work with various painting mediums such as acrylic, oil, and watercolor, and will be encouraged to develop their personal style and artistic expression. This course is suitable for beginners as well as those with some painting experience who wish to refine their skills and learn new techniques.",
        duration: 6
      },
      {
        course_id : 3,
        topic_name:"Intro to Photography",
        description:" Intro to photography is a lesson that teaches the principles of photography with a focus on capturing images of animals in their natural habitat. Students will learn about camera settings, lighting, composition, and how to approach and photograph wildlife without disturbing their natural behavior. This course is designed for both beginners and intermediate photographers who are interested in wildlife photography.",
        duration: 12
      }])
    .then(course => {
      console.log('New Topic created:');
    })
    .catch(err => {
      console.log('Error creating Topic:', err);
    });
  }
})
.catch(err => {
  console.error('Error getting Topic count:', err);
});

// DEFAULT PricingConfig (LESSONS) VALUES 
db.PricingConfig.count()
.then(count => {
  if(count >= 24){
    console.log("Topic already exists ");
  } else {
    db.PricingConfig.bulkCreate([
      {
          "id": 1,
          "NbOfProf": 1,
          "NbOfStudents": 1,
          "NbOfHrs": 1.5,
          "ExtraForAdditionalStudents": 0,
          "SubTotal": 60,
          "AdminFee": 9,
          "Rebate": 0,
          "SubTotal2": 69,
          "SalesTax": 10.33,
          "Total": 79.33,
          "TotalRounded": 80,
          "PricePerHourPerStudent": 53.33,
          "PricePerStudent": 80,
          "Benefit": 9.67
      },
      {
          "id": 2,
          "NbOfProf": 2,
          "NbOfStudents": 1,
          "NbOfHrs": 1.5,
          "ExtraForAdditionalStudents": 0,
          "SubTotal": 120,
          "AdminFee": 18,
          "Rebate": 0,
          "SubTotal2": 138,
          "SalesTax": 20.67,
          "Total": 158.67,
          "TotalRounded": 160,
          "PricePerHourPerStudent": 106.67,
          "PricePerStudent": 160,
          "Benefit": 79.33
      },
      {
          "id": 3,
          "NbOfProf": 1,
          "NbOfStudents": 2,
          "NbOfHrs": 1.5,
          "ExtraForAdditionalStudents": 30,
          "SubTotal": 90,
          "AdminFee": 13.5,
          "Rebate": 0,
          "SubTotal2": 103.5,
          "SalesTax": 15.5,
          "Total": 119,
          "TotalRounded": 120,
          "PricePerHourPerStudent": 40,
          "PricePerStudent": 60,
          "Benefit": 44.5
      },
      {
          "id": 4,
          "NbOfProf": 2,
          "NbOfStudents": 2,
          "NbOfHrs": 1.5,
          "ExtraForAdditionalStudents": 30,
          "SubTotal": 150,
          "AdminFee": 22.5,
          "Rebate": 0,
          "SubTotal2": 172.5,
          "SalesTax": 25.83,
          "Total": 198.33,
          "TotalRounded": 200,
          "PricePerHourPerStudent": 66.67,
          "PricePerStudent": 100,
          "Benefit": 114.17
      },
      {
          "id": 5,
          "NbOfProf": 1,
          "NbOfStudents": 3,
          "NbOfHrs": 1.5,
          "ExtraForAdditionalStudents": 60,
          "SubTotal": 120,
          "AdminFee": 18,
          "Rebate": 0,
          "SubTotal2": 138,
          "SalesTax": 20.67,
          "Total": 158.67,
          "TotalRounded": 160,
          "PricePerHourPerStudent": 35.56,
          "PricePerStudent": 53.33,
          "Benefit": 79.33
      },
      {
          "id": 6,
          "NbOfProf": 2,
          "NbOfStudents": 3,
          "NbOfHrs": 1.5,
          "ExtraForAdditionalStudents": 60,
          "SubTotal": 180,
          "AdminFee": 27,
          "Rebate": 0,
          "SubTotal2": 207,
          "SalesTax": 31,
          "Total": 238,
          "TotalRounded": 240,
          "PricePerHourPerStudent": 53.33,
          "PricePerStudent": 80,
          "Benefit": 149
      },
      {
          "id": 7,
          "NbOfProf": 1,
          "NbOfStudents": 4,
          "NbOfHrs": 1.5,
          "ExtraForAdditionalStudents": 90,
          "SubTotal": 150,
          "AdminFee": 22.5,
          "Rebate": 0,
          "SubTotal2": 172.5,
          "SalesTax": 25.83,
          "Total": 198.33,
          "TotalRounded": 200,
          "PricePerHourPerStudent": 33.33,
          "PricePerStudent": 50,
          "Benefit": 114.17
      },
      {
          "id": 8,
          "NbOfProf": 2,
          "NbOfStudents": 4,
          "NbOfHrs": 1.5,
          "ExtraForAdditionalStudents": 90,
          "SubTotal": 210,
          "AdminFee": 31.5,
          "Rebate": 0,
          "SubTotal2": 241.5,
          "SalesTax": 36.16,
          "Total": 277.66,
          "TotalRounded": 280,
          "PricePerHourPerStudent": 46.67,
          "PricePerStudent": 70,
          "Benefit": 183.84
      },
      {
          "id": 9,
          "NbOfProf": 1,
          "NbOfStudents": 1,
          "NbOfHrs": 6,
          "ExtraForAdditionalStudents": 0,
          "SubTotal": 240,
          "AdminFee": 36,
          "Rebate": -24,
          "SubTotal2": 252,
          "SalesTax": 37.74,
          "Total": 289.74,
          "TotalRounded": 290,
          "PricePerHourPerStudent": 48.33,
          "PricePerStudent": 290,
          "Benefit": 12.26
      },
      {
          "id": 10,
          "NbOfProf": 2,
          "NbOfStudents": 1,
          "NbOfHrs": 6,
          "ExtraForAdditionalStudents": 0,
          "SubTotal": 480,
          "AdminFee": 72,
          "Rebate": -48,
          "SubTotal2": 504,
          "SalesTax": 75.47,
          "Total": 579.47,
          "TotalRounded": 580,
          "PricePerHourPerStudent": 96.67,
          "PricePerStudent": 580,
          "Benefit": 264.53
      },
      {
          "id": 11,
          "NbOfProf": 1,
          "NbOfStudents": 2,
          "NbOfHrs": 6,
          "ExtraForAdditionalStudents": 120,
          "SubTotal": 360,
          "AdminFee": 54,
          "Rebate": -36,
          "SubTotal2": 378,
          "SalesTax": 56.61,
          "Total": 434.61,
          "TotalRounded": 440,
          "PricePerHourPerStudent": 36.67,
          "PricePerStudent": 0,
          "Benefit": 143.39
      },
      {
          "id": 12,
          "NbOfProf": 2,
          "NbOfStudents": 2,
          "NbOfHrs": 6,
          "ExtraForAdditionalStudents": 120,
          "SubTotal": 600,
          "AdminFee": 90,
          "Rebate": -60,
          "SubTotal2": 630,
          "SalesTax": 94.34,
          "Total": 724.34,
          "TotalRounded": 730,
          "PricePerHourPerStudent": 60.83,
          "PricePerStudent": 365,
          "Benefit": 395.66
      },
      {
          "id": 13,
          "NbOfProf": 1,
          "NbOfStudents": 3,
          "NbOfHrs": 6,
          "ExtraForAdditionalStudents": 240,
          "SubTotal": 480,
          "AdminFee": 72,
          "Rebate": -48,
          "SubTotal2": 504,
          "SalesTax": 75.47,
          "Total": 579.47,
          "TotalRounded": 580,
          "PricePerHourPerStudent": 32.22,
          "PricePerStudent": 193.33,
          "Benefit": 264.53
      },
      {
          "id": 14,
          "NbOfProf": 2,
          "NbOfStudents": 3,
          "NbOfHrs": 6,
          "ExtraForAdditionalStudents": 240,
          "SubTotal": 720,
          "AdminFee": 108,
          "Rebate": -72,
          "SubTotal2": 756,
          "SalesTax": 113.21,
          "Total": 869.21,
          "TotalRounded": 870,
          "PricePerHourPerStudent": 48.33,
          "PricePerStudent": 290,
          "Benefit": 516.79
      },
      {
          "id": 15,
          "NbOfProf": 1,
          "NbOfStudents": 4,
          "NbOfHrs": 6,
          "ExtraForAdditionalStudents": 360,
          "SubTotal": 600,
          "AdminFee": 90,
          "Rebate": -60,
          "SubTotal2": 630,
          "SalesTax": 94.34,
          "Total": 724.34,
          "TotalRounded": 730,
          "PricePerHourPerStudent": 30.42,
          "PricePerStudent": 182.5,
          "Benefit": 395.66
      },
      {
          "id": 16,
          "NbOfProf": 2,
          "NbOfStudents": 4,
          "NbOfHrs": 6,
          "ExtraForAdditionalStudents": 360,
          "SubTotal": 840,
          "AdminFee": 126,
          "Rebate": -84,
          "SubTotal2": 882,
          "SalesTax": 132.08,
          "Total": 1014.08,
          "TotalRounded": 1020,
          "PricePerHourPerStudent": 42.5,
          "PricePerStudent": 255,
          "Benefit": 647.92
      },
      {
          "id": 17,
          "NbOfProf": 1,
          "NbOfStudents": 1,
          "NbOfHrs": 12,
          "ExtraForAdditionalStudents": 0,
          "SubTotal": 480,
          "AdminFee": 72,
          "Rebate": -72,
          "SubTotal2": 480,
          "SalesTax": 71.88,
          "Total": 551.88,
          "TotalRounded": 560,
          "PricePerHourPerStudent": 46.67,
          "PricePerStudent": 560,
          "Benefit": 8.12
      },
      {
          "id": 18,
          "NbOfProf": 2,
          "NbOfStudents": 1,
          "NbOfHrs": 12,
          "ExtraForAdditionalStudents": 0,
          "SubTotal": 960,
          "AdminFee": 144,
          "Rebate": -144,
          "SubTotal2": 960,
          "SalesTax": 143.76,
          "Total": 1103.76,
          "TotalRounded": 1110,
          "PricePerHourPerStudent": 92.5,
          "PricePerStudent": 1110,
          "Benefit": 486.24
      },
      {
          "id": 19,
          "NbOfProf": 1,
          "NbOfStudents": 2,
          "NbOfHrs": 12,
          "ExtraForAdditionalStudents": 240,
          "SubTotal": 720,
          "AdminFee": 108,
          "Rebate": -108,
          "SubTotal2": 720,
          "SalesTax": 107.82,
          "Total": 827.82,
          "TotalRounded": 830,
          "PricePerHourPerStudent": 34.58,
          "PricePerStudent": 415,
          "Benefit": 242.18
      },
      {
          "id": 20,
          "NbOfProf": 2,
          "NbOfStudents": 2,
          "NbOfHrs": 12,
          "ExtraForAdditionalStudents": 240,
          "SubTotal": 1200,
          "AdminFee": 180,
          "Rebate": -180,
          "SubTotal2": 1200,
          "SalesTax": 179.7,
          "Total": 1379.7,
          "TotalRounded": 1380,
          "PricePerHourPerStudent": 57.5,
          "PricePerStudent": 690,
          "Benefit": 720.3
      },
      {
          "id": 21,
          "NbOfProf": 1,
          "NbOfStudents": 3,
          "NbOfHrs": 12,
          "ExtraForAdditionalStudents": 480,
          "SubTotal": 960,
          "AdminFee": 144,
          "Rebate": -144,
          "SubTotal2": 960,
          "SalesTax": 143.76,
          "Total": 1103.76,
          "TotalRounded": 1110,
          "PricePerHourPerStudent": 30.83,
          "PricePerStudent": 370,
          "Benefit": 486.24
      },
      {
          "id": 22,
          "NbOfProf": 2,
          "NbOfStudents": 3,
          "NbOfHrs": 12,
          "ExtraForAdditionalStudents": 480,
          "SubTotal": 1440,
          "AdminFee": 216,
          "Rebate": -216,
          "SubTotal2": 1440,
          "SalesTax": 215.64,
          "Total": 1655.64,
          "TotalRounded": 1660,
          "PricePerHourPerStudent": 46.11,
          "PricePerStudent": 553.33,
          "Benefit": 964.36
      },
      {
          "id": 23,
          "NbOfProf": 1,
          "NbOfStudents": 4,
          "NbOfHrs": 12,
          "ExtraForAdditionalStudents": 720,
          "SubTotal": 1200,
          "AdminFee": 180,
          "Rebate": -180,
          "SubTotal2": 1200,
          "SalesTax": 179.7,
          "Total": 1379.7,
          "TotalRounded": 1380,
          "PricePerHourPerStudent": 28.75,
          "PricePerStudent": 345,
          "Benefit": 720.3
      },
      {
          "id": 24,
          "NbOfProf": 2,
          "NbOfStudents": 4,
          "NbOfHrs": 12,
          "ExtraForAdditionalStudents": 720,
          "SubTotal": 1680,
          "AdminFee": 252,
          "Rebate": -252,
          "SubTotal2": 1680,
          "SalesTax": 251.58,
          "Total": 1931.58,
          "TotalRounded": 1940,
          "PricePerHourPerStudent": 40.42,
          "PricePerStudent": 485,
          "Benefit": 1208.42
      }
  ])
    .then(course => {
      console.log('New PricingConfig created:');
    })
    .catch(err => {
      console.log('Error creating PricingConfig:', err);
    });
  }
})
.catch(err => {
  console.error('Error getting PricingConfig count:', err);
});


module.exports = db;
