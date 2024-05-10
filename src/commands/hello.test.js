const { hello } = require('./hello');

describe('hello function', () => {
  it('should console log "Hello"', async () => {
    console.log = jest.fn();
    await hello();
    expect(console.log).toHaveBeenCalledWith("Hello");
  });
});
