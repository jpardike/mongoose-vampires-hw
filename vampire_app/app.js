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

// have a title property
// db.find({title: { $exists: true }}, (err, foundVampires) => {
//   if (err) return console.log(err);

//   console.log(foundVampires);
//   process.exit();
// });

// Does not have a victims property
// db.find({victims: { $exists: false }}, (err, foundVampires) => {
//   if (err) return console.log(err);

//   console.log(foundVampires);
//   process.exit();
// });

// Has title and no victims
// db.find({title: { $exists: true }, victims: { $exists: false }}, (err, foundVampires) => {
//   if (err) return console.log(err);

//   console.log(foundVampires);
//   process.exit();
// });

// has victims and victims are greater than 1000
// db.find({victims: { $exists: true }, victims: { $gt: 1000 }}, (err, foundVampires) => {
//   if (err) return console.log(err);

//   console.log(foundVampires);
//   process.exit();
// });

/////////////////////////////////////////////////
// ### Select with OR

// are from New York, New York, US or New Orleans, Louisiana, US
// db.find({ $or: [{ location: 'New York, New York, US' }, { location: 'New Orleans, Louisiana, US' }]})
// .exec((err, foundVampires) => {
//   if (err) return console.log(err);
  
//     console.log(foundVampires);
//     process.exit();
// });

// love brooding or being tragic
// db.find({ $or: [{ loves: 'brooding'}, {loves: 'being tragic'}]})
// .exec((err, foundVampires) => {
//   if (err) return console.log(err);
  
//     console.log(foundVampires);
//     process.exit();
// });

// have more than 1000 victims or love marshmallows
// db.find({ $or: [{ victims: { $gt: 1000 }}, {loves: 'marshmallows'}]})
// .exec((err, foundVampires) => {
//   if (err) return console.log(err);
  
//     console.log(foundVampires);
//     process.exit();
// });

// have red hair or green eyes
// db.find({ $or: [{ hair_color: 'red' }, { eye_color: 'green' }]})
// .exec((err, foundVampires) => {
//   if (err) return console.log(err);
  
//     console.log(foundVampires);
//     process.exit();
// });

/////////////////////////////////////////////////
//### Select objects that match one of several values

// love either frilly shirtsleeves or frilly collars
// db.find({ $or: [{ loves: 'frilly shirtsleeves' }, { loves: 'frilly collars' }]})
// .exec((err, foundVampires) => {
//   if (err) return console.log(err);
  
//     console.log(foundVampires);
//     process.exit();
// });

// love brooding
// db.find({ loves: 'brooding' })
// .exec((err, foundVampires) => {
//   if (err) return console.log(err);
  
//     console.log(foundVampires);
//     process.exit();
// });

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// db.find({ $or: [{ loves: 'appearing innocent' }, { loves: 'trickery' }, { loves: 'lurking in rotting mansions' }, { loves: 'R&B music' }]})
// .exec((err, foundVampires) => {
//   if (err) return console.log(err);
  
//     console.log(foundVampires);
//     process.exit();
// });

// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
// db.find({loves: 'fancy cloaks', loves: {$nin: ['top hats', 'virgin blood']}})
// .exec((err, foundVampires) => {
//   if (err) return console.log(err);
  
//     console.log(foundVampires);
//     process.exit();
// });


/////////////////////////////////////////////////
//### Negative Selection

// love ribbons but do not have brown eyes
// db.find({loves: 'ribbons', eye_color: {$nin: ['brown']}})
// .exec((err, foundVampires) => {
//     if (err) return console.log(err);
    
//       console.log(foundVampires);
//       process.exit();
//   });

// are not from Rome
// db.find({location: {$nin: ['Rome, Italy']}})
// .exec((err, foundVampires) => {
//   if (err) return console.log(err);
    
//       console.log(foundVampires);
//       process.exit();
// });

// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// db.find({loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}})
// .exec((err, foundVampires) => {
//   if (err) return console.log(err);
    
//       console.log(foundVampires);
//       process.exit();
// });

// have not killed more than 200 people
// db.find({victims: {$lt: 200}})
// .exec((err, foundVampires) => {
//   if (err) return console.log(err);
    
//       console.log(foundVampires);
//       process.exit();
// });

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
