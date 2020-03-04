const assert = require('assert');
const {round, roundAsString} = require('./index');

describe('Testing rounding is correct', function () {
    it('12345.65455466543 should be rounded to 12345.6546', () => {
        assert.equal(round(12345.65455466543, 4), 12345.6546);
    });


    it('9999.999 should be rounded to 10000.00', () => {
        assert.equal(round(9999.999, 2), 10000.00);
    });


    it('892.29448 should be rounded to 892.29', () => {
        assert.equal(round(892.29448, 2), 892.29);
    });


    it('892.29548 should be rounded to 892.30', () => {
        assert.equal(round(892.29548, 2), 892.30);
    });


    it('71086.2344448 should be rounded to 71086.2344', () => {
        assert.equal(round(71086.2344448, 4), 71086.2344);
    });


    it('71086.2344548 should be rounded to 71086.2345', () => {
        assert.equal(round(71086.2344548, 4), 71086.2345);
    });



    it('71086.2344548 should be rounded to 71086.2345', () => {
        assert.equal(roundAsString('71086.2344548', 4), '71086.2345');
    });


    it('389926.12448 should be rounded to 389926.12', () => {
        assert.equal(round(389926.12448, 2), 389926.12);
    });


    it('389926.12548 should be rounded to 389926.13', () => {
        assert.equal(round(389926.12548, 2), 389926.13);
    });


    it('5101053869.999999995 should be rounded to 5101053870.00', () => {
        assert.equal(round(5101053869.999999995, 2), 5101053870.00);
    });


    it('892.9944448 should be rounded to 892.99', () => {
        assert.equal(round(892.9944448, 2), 892.99);
    });


    it('892.9954448 should be rounded to 893.00', () => {
        assert.equal(round(892.9954448, 2), 893.00);
    });


    it('999.9944448 should be rounded to 999.99', () => {
        assert.equal(round(999.9944448, 2), 999.99);
    });


    it('999.9954448 should be rounded to 1000.00', () => {
        assert.equal(round(999.9954448, 2), 1000.00);
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


    it('12345 should be rounded to 12300.00', () => {
        assert.equal(round(12345, -2), 12300.00);
    });


    it('12355 should be rounded to 12400.00', () => {
        assert.equal(round(12355, -2), 12400.00);
    });


    it('5101053869.999999995 should be rounded to 5101053870.00', () => {
        assert.equal(round(5101053869.999999995, 2), 5101053870.00);
    });


    it('1.005 should be rounded to 1.01', () => {
        assert.equal(round(1.005, 2), 1.01);
    });


    it('1111.245 should be rounded to 1111.25', () => {
        assert.equal(round(1111.245, 2), 1111.25);
    });


    it('734.4648 should be rounded to 734.46', () => {
        assert.equal(round(734.4648, 2), 734.46);
    });


    it('734 should be rounded to 734.00', () => {
        assert.equal(round(734, 2), 734.00);
    });


    it('734 should be rounded to 734.0000', () => {
        assert.equal(round(734, 4), 734.0000);
    });


    it('123456 should be rounded to 120000', () => {
        assert.equal(round(123456, -4), 120000);
    });


    it('99999999999999999.993 should be rounded to 99999999999999999.99', () => {
        assert.equal(round('99999999999999999.993', 2), 99999999999999999.99);
    })


    it('12345678912345678910246.456 should be rounded to 12345678912345678910246.46', () => {
        assert.equal(roundAsString('12345678912345678910246.456', 2), '12345678912345678910246.46');
    });


    it('12345678912345678910246 should be rounded to 12345678912345678910246.00', () => {
        assert.equal(roundAsString('12345678912345678910246', 2), '12345678912345678910246.00');
    });


    it('-10345.567 should be rounded to -10345.57', () => {
        assert.equal(roundAsString(-10345.567, 2), -10345.57);
    });


    it('-10345.567 should be rounded to -10345.57', () => {
        assert.equal(roundAsString('-10345.567', 2), '-10345.57');
    });


    it('-10000 should be rounded to -10000', () => {
        assert.equal(roundAsString('-10000', 0), '-10000');
    });
});
