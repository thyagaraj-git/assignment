db.users.find()
{ _id: ObjectId("6182c45a85f375312d0f19e2"),
  username: 'GoodGuyGreg',
  first_name: 'Good guy',
  last_name: 'Greg' }
{ _id: ObjectId("6182c4ce85f375312d0f19e3"),
  username: 'SumbagSteve',
  full_name: '',
  first: 'Skumbag',
  last: 'Steve' }
db.posts.find()
{ _id: ObjectId("6182c58085f375312d0f19e6"),
  username: 'GoodGuyGreg',
  title: 'Passes out at party',
  body: 'Wakes up early and cleans house' }
{ _id: ObjectId("6182c5f885f375312d0f19e7"),
  username: 'GooodGuyGreg',
  title: 'Steals your identity',
  body: 'Raises your credit score' }
{ _id: ObjectId("6182c65185f375312d0f19e8"),
  username: 'GoodGuyGreg',
  title: 'Reports a bug in your code',
  body: 'Sends you a Pull Request' }
{ _id: ObjectId("6182c6af85f375312d0f19e9"),
  username: 'ScumbagSteve',
  title: 'Borrows something',
  body: 'Sells it' }
{ _id: ObjectId("6182c70b85f375312d0f19ea"),
  username: 'ScumbagSteve',
  title: 'Borrows everything',
  body: 'The end' }
{ _id: ObjectId("6182c74d85f375312d0f19eb"),
  username: 'ScumbagSteve',
  title: 'Forks your repo on github',
  body: 'Sets to private' }

  db.posts.find({username:"GoodGuyGreg"})
{ _id: ObjectId("6182c58085f375312d0f19e6"),
  username: 'GoodGuyGreg',
  title: 'Passes out at party',
  body: 'Wakes up early and cleans house' }
{ _id: ObjectId("6182c5f885f375312d0f19e7"),
  username: 'GoodGuyGreg',
  title: 'Steals your identity',
  body: 'Raises your credit score' }
{ _id: ObjectId("6182c65185f375312d0f19e8"),
  username: 'GoodGuyGreg',
  title: 'Reports a bug in your code',
  body: 'Sends you a Pull Request' }
db.posts.find({username:"ScumbagSteve"})
{ _id: ObjectId("6182c6af85f375312d0f19e9"),
  username: 'ScumbagSteve',
  title: 'Borrows something',
  body: 'Sells it' }
{ _id: ObjectId("6182c70b85f375312d0f19ea"),
  username: 'ScumbagSteve',
  title: 'Borrows everything',
  body: 'The end' }
{ _id: ObjectId("6182c74d85f375312d0f19eb"),
  username: 'ScumbagSteve',
  title: 'Forks your repo on github',
  body: 'Sets to private' }
db.comments.find()
{ _id: ObjectId("6182c97785f375312d0f19f3"),
  username: 'GoodGuyGreg',
  comment: 'Hope you got a good deal',
  post: ObjectId("6182c6af85f375312d0f19e9") }
{ _id: ObjectId("6182ca8285f375312d0f19fa"),
  username: 'GoodGuyGreg',
  comment: 'What\'s mine is yours',
  post: ObjectId("6182c70b85f375312d0f19ea") }
{ _id: ObjectId("6182caf785f375312d0f1a01"),
  username: 'GoodGuyGreg',
  comment: 'Don\'t violate the licensing agreement!',
  post: ObjectId("6182c74d85f375312d0f19eb") }
{ _id: ObjectId("6182cc5f85f375312d0f1a08"),
  username: 'ScumbagSteve',
  comment: 'it still isn\'t clean',
  post: ObjectId("6182c58085f375312d0f19e6") }
{ _id: ObjectId("6182ccdb85f375312d0f1a0f"),
  username: 'ScumbagSteve',
  comment: 'Demand your PR cause i found a hack',
  post: ObjectId("6182c65185f375312d0f19e8") }
db.comments.find({username:"GoodGuyGreg"})
{ _id: ObjectId("6182c97785f375312d0f19f3"),
  username: 'GoodGuyGreg',
  comment: 'Hope you got a good deal',
  post: ObjectId("6182c6af85f375312d0f19e9") }
{ _id: ObjectId("6182ca8285f375312d0f19fa"),
  username: 'GoodGuyGreg',
  comment: 'What\'s mine is yours',
  post: ObjectId("6182c70b85f375312d0f19ea") }
{ _id: ObjectId("6182caf785f375312d0f1a01"),
  username: 'GoodGuyGreg',
  comment: 'Don\'t violate the licensing agreement!',
  post: ObjectId("6182c74d85f375312d0f19eb") }
db.comments.find({username:"ScumbagSteve"})
{ _id: ObjectId("6182cc5f85f375312d0f1a08"),
  username: 'ScumbagSteve',
  comment: 'it still isn\'t clean',
  post: ObjectId("6182c58085f375312d0f19e6") }
{ _id: ObjectId("6182ccdb85f375312d0f1a0f"),
  username: 'ScumbagSteve',
  comment: 'Demand your PR cause i found a hack',
  post: ObjectId("6182c65185f375312d0f19e8") }
db.posts.aggregate([{$match:{title:"Reports a bug in your code"},{$lookup:{from:'comments',localField:'_id',foriegnField:'post',as:'comments'}}])