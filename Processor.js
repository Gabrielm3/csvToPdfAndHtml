class Processor {
    static Process(data) {
        var Dt = data.split("\r\n");
        var rows = [];
        
        Dt.forEach(row => {
            var arr = row.split(",");
            rows.push(arr);
        })
        // console.log(rows);
    }
}

module.exports = Processor;