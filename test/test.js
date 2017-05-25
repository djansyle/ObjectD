const assert = require('assert');
const ObjectD = require('./../index');

describe('ObjectD', () => {
  describe('Given object contains non native type', () => {
    it('should throw an error', (cb) => {
      assert.throws(() => new ObjectD({ hello: { world: 'nothing' } }));
      cb();
    });
  });

  describe('Given object object is plain, key and value is native', () => {
    let obj = new ObjectD({ hello: 'world', message: 'content' });
    it('keyOf', (cb) => {
      assert.equal(obj.keyOf('world'), 'hello');
      assert.equal(obj.keyOf('content'), 'message');
      cb();
    });

    it('set: Object', (cb) => {
      obj.set({ name: 'djans' });
      assert(obj.name);
      assert.equal(obj.name, 'djans');
      assert.equal(obj.keyOf('djans'), 'name');
      cb();
    });

    it('set: native', (cb) => {
      obj.set({ username: 'djansyle' });
      assert(obj.username);
      assert.equal(obj.username, 'djansyle');
      assert.equal(obj.keyOf('djansyle'), 'username');
      cb();
    });
  })

});