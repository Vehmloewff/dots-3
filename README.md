# dots-3
Slim down a string with ...

## Usage
Install the package...
```
$ npm i dots-3 --save
```
...then...
```
const dots3 = require('dots-3'); // or import dots3 from 'dots-3'

dots3('The quick brown fox jumped over the lazy dog.', 9);
// -> The quic…

dots3('The quick brown fox jumped over the lazy dog.', 3000);
// -> The quick brown fox jumped over the lazy dog.

dots3('What? Is that a monkey for a pet?', 5);
// -> What? …