const server = require('./rest');

server.route('/api/directions/')
    .get((req, res) => {
        const numberOfLowTemperature = Math.floor() + 4;
        const numberOfHighTemperature = Math.floor(Math.random() * 2) + 1;
        
        let result = {
            "duration" : Math.floor(Math.random() * 40) + 10 + " min"
        };
        
        res.set("Content-Type", "application/json")
        res.send(JSON.stringify(result));
    });
