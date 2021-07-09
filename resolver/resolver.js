var { calculatenextweekday } = require('../service/service')
module.exports.getweekday = async function (__, args, ctx) {
    var date = args.date;
    var newdate = await calculatenextweekday(date)
  
    return newdate
  
  }