const assert = require('assert');
const {round} = require('./index');

describe('Testing rounding is correct', function () {
    it('12345.65455466543 should be rounded to 12345.6546', () => {
        assert.equal(round(12345.65455466543, 4), 12345.6546);
    });


    it('9999.999 should be rounded to 10000.00', () => {
        assert.equal(round(9999.999, 2), 10000.00);
    });


    it('892.29448 should be rounded to 892.30', () => {
        assert.equal(round(892.29448, 2), 892.30);
    });


    it('71086.2344448 should be rounded to 71086.2345', () => {
        assert.equal(round(71086.2344448, 4), 71086.2345);
    });


    it('389926.12448 should be rounded to 389926.13', () => {
        assert.equal(round(389926.12448, 2), 389926.13);
    });


    it('5101053869.999999995 should be rounded to 5101053870.00', () => {
        assert.equal(round(5101053869.999999995, 2), 5101053870.00);
    });


    it('892.29448 should be rounded to 892.30', () => {
        assert.equal(round(892.29448, 2), 892.30);
    });


    it('892.9944448 should be rounded to 893.00', () => {
        assert.equal(round(892.9944448, 2), 893.00);
    });


    it('999.9944448 should be rounded to 1000.00', () => {
        assert.equal(round(999.9944448, 2), 1000.00);
    });


    it('999.9944448 should be rounded to 1000.00', () => {
        assert.equal(round(999.9944448, 2), 1000.00);
    });


    it('123.7644448 should be rounded to 124.00', () => {
        assert.equal(round(123.7644448, 0), 124.00);
    });


    it('123.7644448 should be rounded to 120.00', () => {
        assert.equal(round(123.7644448, -1), 120.00);
    });


    it('12345 should be rounded to 12345.00', () => {
        assert.equal(round(12345, 2), 12345.00);
    });


    it('12345 should be rounded to 12400.00', () => {
        assert.equal(round(12345, -2), 12400.00);
    });


    it('5101053869.999999995 should be rounded to 5101053870.00', () => {
        assert.equal(round(5101053869.999999995, 2), 5101053870.00);
    });
});
