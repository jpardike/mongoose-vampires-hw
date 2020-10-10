// 1. Require Mongoose
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/vampires';
// 2. Require your Model
const db = require('./models/vampire')
// 3. Require your extra data source
const vampArr = require('./populateVampires');
// 4. Connect your database


mongoose.connect(connectionString, { 
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connected error ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// db.insertMany(vampArr, (err, newVampires) => {
//   if (err) return console.log(err);

//   console.log(newVampires);
//   process.exit();
// });

// ### Add some new vampire data

const vampire1 = {
  name: 'James V.',
  hair_color: 'green',
  eye_color: 'green',
  dob: new Date(2009, 2, 2, 9, 21),
  loves: ['salad', 'cheese'],
  location: 'North Pole',
  gender: 'm',
  victims: 90,
};
const vampire2 = {
  name: 'Cathy Clams',
  hair_color: 'red',
  eye_color: 'blue',
  dob: new Date(1942, 3, 5, 1, 02),
  loves: ['coral reefs', 'wool socks'],
  location: 'Baja California',
  gender: 'f',
  victims: 1,
};
const vampire3 = {
  name: 'Jorge LoneWolf',
  hair_color: 'Gray',
  eye_color: 'teal',
  dob: new Date(1616, 9, 13, 10, 32),
  loves: ['Champagne', 'leather shoes'],
  location: 'Atlantis',
  gender: 'm',
  victims: 32,
};
const vampire4 = {
  name: 'Ashley Smithers',
  hair_color: 'white',
  eye_color: 'black',
  dob: new Date(1332, 12, 24, 11, 01),
  loves: ['shadows', 'sand between her toes'],
  location: 'Amazon',
  gender: 'f',
  victims: 7,
};

// db.create(vampire1, (err, newVampire) => {
//   if (err) return console.log(err);

//   console.log(newVampire);
//   process.exit();
// });

// db.create(vampire2, (err, newVampire) => {
//   if (err) return console.log(err);

//   console.log(newVampire);
//   process.exit();
// });

// db.create(vampire3, (err, newVampire) => {
//   if (err) return console.log(err);

//   console.log(newVampire);
//   process.exit();
// });

// db.create(vampire4, (err, newVampire) => {
//   if (err) return console.log(err);

//   console.log(newVampire);
//   process.exit();
// });

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// Find females
// db.find({ gender: 'f' }, (err, foundVampires) => {
//   if (err) return console.log(err);

//   console.log(foundVampires);
//   process.exit();
// });

// Find > 500 victims
// db.find({ victims: { $gt: 500 } }, (err, foundVampires) => {
//   if (err) return console.log(err);

//   console.log(foundVampires);
//   process.exit();
// });

// Find <= 150 victims
// db.find({ victims: { $lte: 150 } }, (err, foundVampires) => {
//   if (err) return console.log(err);

//   console.log(foundVampires);
//   process.exit();
// });

// have a victim count is not equal to 210234
// db.find({ victims: { $ne: 210234 } }, (err, foundVampires) => {
//   if (err) return console.log(err);

//   console.log(foundVampires);
//   process.exit();
// });

// have greater than 150 AND fewer than 500 victims
// db.find({ victims: { $gt: 150, $lt: 500 } }, (err, foundVampires) => {
//   if (err) return console.log(err);

//   console.log(foundVampires);
//   process.exit();
// });

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
