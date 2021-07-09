const EasyGraphQLTester = require('easygraphql-tester');
var { buildSchema } = require('graphql');
const { getweekday } = require('../resolver/resolver')
weekdays = getweekday
var schema = buildSchema(`
  type Query {
    weekdays( date : String!): String
  }
`);
var resolver = {
    Query: {
        weekdays
    }
}
const tester = new EasyGraphQLTester(schema, resolver);

describe('should insert data in db', () => {

    it("Should pass with a valid date", async () => {
        const query = `query getSingleCourse($dates: String!){ weekdays(date:  $dates)}
         `;
        await tester.graphql(query, undefined, undefined, { 'dates': '2021-08-14T00:00:00.000Z' }).then((result) => {
            expect(result.data.weekdays).toEqual("2021-08-16T00:00:00.000Z");



        })
    });
});

