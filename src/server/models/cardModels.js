const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myURI = 'mongodb+srv://jasonymongo:Jason123$@cluster0.v0s3q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(myURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'higher-desire'
}).then(() => console.log('connected to MongoDB'))
  .catch(err => console.log(err));

const URI = process.env.MONGO_URI || myURI;


const cardSchema = new Schema({
  companyName: { type: String, required: true },
  POC: { type: Number, required: true }, //date or num?
  lastCommunicated: { type: Number, required: true },
  notesRef: { type: String, required: true },
  lastEdited: { type: Number, required: true }, //date? or num
  techStack: { type: String, required: true },
  selfFeedback: { type: String, required: true },
  created_at: {type: Date, expires: 300, default: Date.now },
 
});

const cards = mongoose.model('card', cardSchema);
module.exports = cards; 










// const { Pool } = require('pg');

// const PG_URI =
//   'postgres://xenxbyfb:wswO23sgcLr13K7yJfjR-zGIafbA9UWn@kashin.db.elephantsql.com/xenxbyfb';
  


// const pool = new Pool({
//   connectionString: PG_URI
// });






// module.exports = {
//   query: (text, params, callback) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback);
//   }
// };