/* const john =  'John';
const peter = 'Peter';
const sayHi = () => {
    console.log(`Hello ${name}`)
}

sayHi('Joonas');
sayHi(john);
sayHi(peter);
*/

// every file is module by default
// Modules - Encapsulated Code (only share minium)
const name = require('./name_3');
const sayHi = require('./utils_4');
const data = require('./alternative_syntax_5');
require('./mind-grenade_6')
console.log(data);

/* sayHi('Joonas');
sayHi(name.john);
sayHi(name.peter)
*/