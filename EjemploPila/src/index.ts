const parser = require('./Grammar/Grammar');

const ast = parser.parse('global integer a,b,c');

/*
    global tipoDato listIds{
        
    };

    id, id, id;


*/