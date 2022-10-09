//Path Module

const path = require('path');

//Print the directory of file separator
console.log(path.sep);

const filePath = path.join('/content','subfolder','test.js');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);