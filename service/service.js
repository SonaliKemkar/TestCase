const { days, holidays } = require('../config/days')
const model = require('../config/dbconfig')
var calculatenext = module.exports.calculatenextweekday = async (date) => {

    var date = new Date(date)

    date.setUTCDate(date.getUTCDate() + 1);
    var day = days[date.getDay()]

    var holiday = holidays[date.toISOString().slice(0, 10)]

    
    if (day !== "saturday" && day !== "sunday" && holiday == undefined) {
        var date = new Date(date)

        date = date.toISOString()
        return await model.Log.create({ "correlation_id": date, "date": date }).then((response) => {
            if (response != null) {
                return date
            }
        }).catch((error) => {
            console.log("error", error)
        })


    }

    else {

        return calculatenext(date)
    }





}


