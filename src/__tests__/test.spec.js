'use strict';

var React = require('react/addons');

jest.dontMock('../test.jsx');
var Test = require('../test.jsx');

describe('test 1', function () {

  it('should be able to run 1 test', function () {
    expect(true).toBe(true);
  });

  it('should be able to instanciate one component', function () {
    var instance = React.addons.TestUtils.renderIntoDocument(<Test />);

    expect(instance).toBeDefined();
  });
});
