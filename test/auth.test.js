 const { expect } = require('chai');
    const authController = require('../controller/auth.controller'); // Assuming my-module.js is in the root

    describe('myModule', () => {
      it('should return the correct sum', () => {
        expect((2+ 3)).to.equal(5);
      });

      it('should handle negative numbers correctly', () => {
        expect((-1+ 5)).to.equal(4);
      });
    });