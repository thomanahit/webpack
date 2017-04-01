'use strict';

const exp = require('express');
const app = exp();

app.use(exp.static('public'));
app.listen(5555);
