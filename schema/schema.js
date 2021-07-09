module.exports.schema = buildSchema(`
  type Query {
    weekdays( date : String!): String
  }
`);