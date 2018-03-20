'use strict';

module.exports = function() {
    let secretNum = Math.random() * 1000000;
    function secretNumber() {
       return secretNum;
    };
    return secretNumber;
};