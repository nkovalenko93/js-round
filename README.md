# js-round
Library for correct rounding JS number

```
const {round, roundAsString} = require('js-round'); // import {round, roundAsString} from 'js-round';

const nubmer = round(123.456, 2);
assert number === 123.46;

const nubmer = roundAsString('123.456', 2);
assert number === '123.46';
```
