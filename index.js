const assert = require('assert');
const isPlainObject = require('lodash.isplainobject');

function isNumber(val) {
  return typeof val === 'number';
}

function isString(val) {
  return typeof val === 'string';
}

function isNativeType(val) {
  return isNumber(val) || isString(val);
}

function isObject(val) {
  return typeof val === 'object';
}

function assertNative(val) {
  assert(isNativeType(val), 'Expecting a number or a string.');
}

module.exports = class ObjectD {
  constructor(ref) {
    assert(isPlainObject(ref), 'Expecting a plain object.');
    this.__reverse = {};
    this.set(ref);
  }

  keyOf(val) {
    assertNative(val);
    return this.__reverse[val];
  }

  set(key, val) {
    if (isObject(key) && isPlainObject(key)) {
      for(const keyRef in key) {
        if (key.hasOwnProperty(keyRef)) {
          const val = key[keyRef];
          assertNative(val);
          this[keyRef] = val;
          this.__reverse[val] = keyRef;
        }
      }
      return;
    }

    assertNative(val);
    assertNative(key);

    this[key] = val;
    this.__reverse[val] = key;
  }
};