module.exports = {

    generateDueDate: function (outdate, days) {
        if(!outdate) {
            let date = JSON.stringify(new Date)
            outdate = date.slice(1, date.length - 1)
        } 
        return new Date((new Date(outdate.slice(0, 4), outdate.slice(5, 7), outdate.slice(8, 10)).getTime()) + days * 86400000)
    },

    generateFine: function (outdate, indate, days) {
        if(!outdate) {
            let date = JSON.stringify(new Date)
            outdate = date.slice(1, date.length - 1)
        }
        let outdateInMS = new Date(outdate.slice(0, 4), outdate.slice(5, 7), outdate.slice(8, 10)).getTime()
        return ((new Date(indate.slice(0, 4), indate.slice(5, 7), indate.slice(8, 10)).getTime()) - outdateInMS - (days * 86400000)) / 86400
    }
}