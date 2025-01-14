(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-worker'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-worker'.");
    }
    globalThis['kobweb-frontend-kobweb-worker'] = factory(typeof globalThis['kobweb-frontend-kobweb-worker'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-worker'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.x6;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var initMetadataForClass = kotlin_kotlin.$_$.f6;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(createPassThroughSerializer$1);
  //endregion
  function createPassThroughSerializer(_this__u8e3s4) {
    return new createPassThroughSerializer$1();
  }
  function createPassThroughSerializer$1() {
  }
  protoOf(createPassThroughSerializer$1).di = function (input) {
    return input;
  };
  protoOf(createPassThroughSerializer$1).ei = function (input) {
    return this.di((!(input == null) ? typeof input === 'string' : false) ? input : THROW_CCE());
  };
  protoOf(createPassThroughSerializer$1).fi = function (output) {
    return output;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = createPassThroughSerializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-worker.js.map
