(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-common-kobweb-serialization'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-common-kobweb-serialization'.");
    }
    globalThis['kobweb-common-kobweb-serialization'] = factory(typeof globalThis['kobweb-common-kobweb-serialization'] === 'undefined' ? {} : globalThis['kobweb-common-kobweb-serialization'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.fc;
  var initMetadataForInterface = kotlin_kotlin.$_$.fb;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(IOSerializer, 'IOSerializer');
  //endregion
  function IOSerializer() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = IOSerializer;
  //endregion
  return _;
}));
