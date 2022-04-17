#!/usr/bin/nodejs
'use strict';

const $test  = new (require('nanoTest')).test({
    'progress_bar' : false,
    'debug_print' : 'short'
});

const $sleep = require('./index.js').sleep;


const _start_time = parseInt(Date.now());

$test.add(
    'sleep 3 sec',
    {
        'function': $sleep,
        'options' :[3]
    },
    '!error'
);
$test.add(
    'time check',
    {
        'function': function(){
             return Math.round(
                 ((Date.now())-_start_time)/1000
             );
        },
        'options' :[]
    },
    '===',
    3
);

$test.run();
