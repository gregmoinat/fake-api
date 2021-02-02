const server = require('./rest'); 
const { v4: uuidv4 } = require('uuid');

server.route('/api/temperatures')
    .get((req, res) => {
        const numberOfLowTemperature = Math.floor(Math.random() * 9) + 4;
        const numberOfHighTemperature = Math.floor(Math.random() * 2) + 1;
        
        let result = [];
        
        for (let i = 0; i < numberOfLowTemperature; i++) {
        
            const temperature = Math.floor(Math.random() * 99) + 1;
        
            result.push({
                "id": uuidv4().substring(0 , 8),
                "temperature": temperature
            });
        }
        
        for (let i = 0; i < numberOfHighTemperature; i++) {
        
            const temperature = Math.floor(Math.random() * 100) + 201;
        
            result.push({
                "id": uuidv4().substring(0 , 8),
                "temperature": temperature
            });
        }
        
        res.set("Content-Type", "application/json")
        
        // send 'Hello world' response
        res.send(JSON.stringify(result));
    });