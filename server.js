var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var { calculatenextweekday } = require('./service/service')
const db = require("./config/dbconfig");
db.sequelize.sync({ alter: true });
var schema = buildSchema(`
  type Query {
    weekdays( date : String!): String
  }
`);


var getweekday = async function (args) {
  var date = args.date;

  var newdate = await calculatenextweekday(date)

  return newdate

}
var root = {
  weekdays: getweekday
};


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
module.exports = app;