global.requirejs = require('requirejs');
global.expect = require('expect.js');

requirejs.config({
    paths: {
        'ypromise': '../../../promise'
    }
});

require('../unit/assets/amd-tests');
