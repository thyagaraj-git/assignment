db.movies.find()
{ _id: ObjectId("617fb5114516e255e9344c2e"),
  title: 'Fight club',
  writer: 'huck Palaniuko',
  actors: [ 'Brad Pitt', 'Edward Norton' ],
  year: '1999' }
{ _id: ObjectId("617fb65e4516e255e9344c30"),
  tilte: 'Pulp Fiction',
  writer: 'Quantin Tarantino',
  year: 1994,
  actors: [ 'John Travolta', 'uma Thurman' ] }
{ _id: ObjectId("617fb7854516e255e9344c31"),
  tilte: 'Inglorious Basterds',
  writer: 'Quentin Tarantino',
  year: 2009,
  actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ] }
{ _id: ObjectId("617fb83c4516e255e9344c32"),
  title: 'The Hobbit An Unexpected Journey',
  writer: 'J.R.R.Tolken',
  year: 2012,
  franchise: 'The Hobbit' }
{ _id: ObjectId("617fb8e64516e255e9344c33"),
  title: 'The Desolation of Smaug',
  writer: 'J.R.R.tolken',
  year: 2013,
  franchise: 'The Hobbit' }
{ _id: ObjectId("617fbbae4516e255e9344c35"),
  title: 'The Hobbit:The Battle of the Five Armies',
  writer: 'J.R.R.Tolkein',
  year: 2012,
  franchise: 'The Hobbit',
  synopsis: 'Bilbo and Company are forced to engage in war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.' }
{ _id: ObjectId("617fbcf24516e255e9344c36"),
  title: 'Pee Wee Herman\'s Big Adventure' }
{ _id: ObjectId("617fbd3f4516e255e9344c37"), title: 'Avatar' }


db.movies.aggregate({$match: {writer:"Quentin Tarantino"}})
{ _id: ObjectId("617fb7854516e255e9344c31"),
  tilte: 'Inglorious Basterds',
  writer: 'Quentin Tarantino',
  year: 2009,
  actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ] }


db.movies.aggregate({$match: {actors:"Brad Pitt"}})
{ _id: ObjectId("617fb5114516e255e9344c2e"),
  title: 'Fight club',
  writer: 'huck Palaniuko',
  actors: [ 'Brad Pitt', 'Edward Norton' ],
  year: '1999' }
{ _id: ObjectId("617fb7854516e255e9344c31"),
  tilte: 'Inglorious Basterds',
  writer: 'Quentin Tarantino',
  year: 2009,
  actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ] }


db.movies.aggregate({$match:{franchise:"The Hobbit"}})
{ _id: ObjectId("617fb83c4516e255e9344c32"),
  title: 'The Hobbit An Unexpected Journey',
  writer: 'J.R.R.Tolken',
  year: 2012,
  franchise: 'The Hobbit' }
{ _id: ObjectId("617fb8e64516e255e9344c33"),
  title: 'The Desolation of Smaug',
  writer: 'J.R.R.tolken',
  year: 2013,
  franchise: 'The Hobbit' }
{ _id: ObjectId("617fbbae4516e255e9344c35"),
  title: 'The Hobbit:The Battle of the Five Armies',
  writer: 'J.R.R.Tolkein',
  year: 2012,
  franchise: 'The Hobbit',
  synopsis: 'Bilbo and Company are forced to engage in war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.' }


  db.movies.aggregate({$match:{year:{$lt:2000}}})
{ _id: ObjectId("617fb65e4516e255e9344c30"),
  tilte: 'Pulp Fiction',
  writer: 'Quantin Tarantino',
  year: 1994,
  actors: [ 'John Travolta', 'uma Thurman' ] }
  

  db.movies.find({$and:[{year:{$gt:1900}},{year:{$lt:2000}}]})
{ _id: ObjectId("617fb5114516e255e9344c2e"),
  title: 'Fight club',
  writer: 'huck Palaniuko',
  actors: [ 'Brad Pitt', 'Edward Norton' ],
  year: 1999 }
{ _id: ObjectId("617fb65e4516e255e9344c30"),
  tilte: 'Pulp Fiction',
  writer: 'Quantin Tarantino',
  year: 1994,
  actors: [ 'John Travolta', 'uma Thurman' ] }

db.movies.find({$or:[{year:{$lt:2000}},{year:{$gt:2010}}]})
{ _id: ObjectId("617fb5114516e255e9344c2e"),
  title: 'Fight club',
  writer: 'huck Palaniuko',
  actors: [ 'Brad Pitt', 'Edward Norton' ],
  year: 1999 }
{ _id: ObjectId("617fb65e4516e255e9344c30"),
  tilte: 'Pulp Fiction',
  writer: 'Quantin Tarantino',
  year: 1994,
  actors: [ 'John Travolta', 'uma Thurman' ] }
{ _id: ObjectId("617fb83c4516e255e9344c32"),
  title: 'The Hobbit An Unexpected Journey',
  writer: 'J.R.R.Tolken',
  year: 2012,
  franchise: 'The Hobbit' }
{ _id: ObjectId("617fb8e64516e255e9344c33"),
  title: 'The Desolation of Smaug',
  writer: 'J.R.R.tolken',
  year: 2013,
  franchise: 'The Hobbit' }
{ _id: ObjectId("617fbbae4516e255e9344c35"),
  title: 'The Hobbit:The Battle of the Five Armies',
  writer: 'J.R.R.Tolkein',
  year: 2012,
  franchise: 'The Hobbit',
  synopsis: 'Bilbo and Company are forced to engage in war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.' }
db.movies.update({title:"Pulp Fiction"},{$push:{actors:"Samuel L.Jackson"}})

text search query

db.movies.createIndex({synopsis:"text"})
'synopsis_text'

db.movies.find({$text:{$search:"Bilbo"}})
{ _id: ObjectId("617fb8e64516e255e9344c33"),
  title: 'The Desolation of Smaug',
  writer: 'J.R.R.tolken',
  year: 2013,
  franchise: 'The Hobbit',
  synopsis: 'The dwarves,along with Bilbo Baggins and gandalf the Grey,continue their quest to reclaim Erebor,their homeland,from Smaug.Bilbo Baggins is in possession of mysterious and magical ring.' }
{ _id: ObjectId("617fbbae4516e255e9344c35"),
  title: 'The Hobbit:The Battle of the Five Armies',
  writer: 'J.R.R.Tolkein',
  year: 2012,
  franchise: 'The Hobbit',
  synopsis: 'Bilbo and Company are forced to engage in war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.' }
{ _id: ObjectId("617fb83c4516e255e9344c32"),
  title: 'The Hobbit:An Unexpected Journey',
  writer: 'J.R.R.Tolken',
  year: 2012,
  franchise: 'The Hobbit',
  synopsis: 'A relucant hobbit,Bilbo Baggins,sets out to the lonely Mountain with a spirited group of dwarves to reclaim their mountain home and the gold within it-from the dragon smaug' }

db.movies.find({$text:{$search:"gandalf"}})
{ _id: ObjectId("617fb8e64516e255e9344c33"),
  title: 'The Desolation of Smaug',
  writer: 'J.R.R.tolken',
  year: 2013,
  franchise: 'The Hobbit',
  synopsis: 'The dwarves,along with Bilbo Baggins and gandalf the Grey,continue their quest to reclaim Erebor,their homeland,from Smaug.Bilbo Baggins is in possession of mysterious and magical ring.' }

db.movies.find({$text:{$search:"Bilbo-gandalf"}})
{ _id: ObjectId("617fb8e64516e255e9344c33"),
  title: 'The Desolation of Smaug',
  writer: 'J.R.R.tolken',
  year: 2013,
  franchise: 'The Hobbit',
  synopsis: 'The dwarves,along with Bilbo Baggins and gandalf the Grey,continue their quest to reclaim Erebor,their homeland,from Smaug.Bilbo Baggins is in possession of mysterious and magical ring.' }
{ _id: ObjectId("617fbbae4516e255e9344c35"),
  title: 'The Hobbit:The Battle of the Five Armies',
  writer: 'J.R.R.Tolkein',
  year: 2012,
  franchise: 'The Hobbit',
  synopsis: 'Bilbo and Company are forced to engage in war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.' }
{ _id: ObjectId("617fb83c4516e255e9344c32"),
  title: 'The Hobbit:An Unexpected Journey',
  writer: 'J.R.R.Tolken',
  year: 2012,
  franchise: 'The Hobbit',
  synopsis: 'A relucant hobbit,Bilbo Baggins,sets out to the lonely Mountain with a spirited group of dwarves to reclaim their mountain home and the gold within it-from the dragon smaug' }

db.movies.find({$text:{$search:"dwarves hobbit"}})
{ _id: ObjectId("617fb83c4516e255e9344c32"),
  title: 'The Hobbit:An Unexpected Journey',
  writer: 'J.R.R.Tolken',
  year: 2012,
  franchise: 'The Hobbit',
  synopsis: 'A relucant hobbit,Bilbo Baggins,sets out to the lonely Mountain with a spirited group of dwarves to reclaim their mountain home and the gold within it-from the dragon smaug' }
{ _id: ObjectId("617fb8e64516e255e9344c33"),
  title: 'The Desolation of Smaug',
  writer: 'J.R.R.tolken',
  year: 2013,
  franchise: 'The Hobbit',
  synopsis: 'The dwarves,along with Bilbo Baggins and gandalf the Grey,continue their quest to reclaim Erebor,their homeland,from Smaug.Bilbo Baggins is in possession of mysterious and magical ring.' }
  
db.movies.find({$text:{$search:"gold dragon"}})
{ _id: ObjectId("617fb83c4516e255e9344c32"),
  title: 'The Hobbit:An Unexpected Journey',
  writer: 'J.R.R.Tolken',
  year: 2012,
  franchise: 'The Hobbit',
  synopsis: 'A relucant hobbit,Bilbo Baggins,sets out to the lonely Mountain with a spirited group of dwarves to reclaim their mountain home and the gold within it-from the dragon smaug' }

  Delete Documents
  
  db.movies.remove({title:"Pee Wee Herman's Big Adventure"})
'DeprecationWarning: Collection.remove() is deprecated. Use deleteOne, deleteMany, findOneAndDelete, or bulkWrite.'
{ acknowledged: true, deletedCount: 1 }
db.movies.remove({title:"Avatar"})
{ acknowledged: true, deletedCount: 1 }