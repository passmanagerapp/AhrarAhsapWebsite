(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    globalThis['kobweb-frontend-browser-ext'] = factory(typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined' ? {} : globalThis['kobweb-frontend-browser-ext'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var isBlank = kotlin_kotlin.$_$.a8;
  var toString = kotlin_kotlin.$_$.z6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var charSequenceLength = kotlin_kotlin.$_$.v5;
  var charSequenceGet = kotlin_kotlin.$_$.u5;
  var isUpperCase = kotlin_kotlin.$_$.c8;
  var Char = kotlin_kotlin.$_$.w8;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var get_lastIndex = kotlin_kotlin.$_$.e8;
  var isLowerCase = kotlin_kotlin.$_$.b8;
  var toString_0 = kotlin_kotlin.$_$.s1;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.g6;
  var VOID = kotlin_kotlin.$_$.e;
  var initMetadataForClass = kotlin_kotlin.$_$.f6;
  var Companion_getInstance = kotlin_kotlin.$_$.a2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.v8;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.p1;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(CancellableActionHandle, 'CancellableActionHandle');
  //endregion
  function titleCamelCaseToKebabCase(_this__u8e3s4) {
    return camelCaseToKebabCase(_this__u8e3s4);
  }
  function camelCaseToKebabCase(_this__u8e3s4) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(_this__u8e3s4)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var lastIsUpper = false;
    var str = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'com.varabyte.kobweb.browser.util.camelCaseToKebabCase.<anonymous>' call
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(str)) {
      var item = charSequenceGet(str, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'com.varabyte.kobweb.browser.util.camelCaseToKebabCase.<anonymous>.<anonymous>' call
      var isUpper = isUpperCase(item);
      var tmp;
      if (isUpper) {
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_0) > 0) {
          if (!lastIsUpper || (_unary__edvuaz < get_lastIndex(str) && isLowerCase(charSequenceGet(str, _unary__edvuaz + 1 | 0)))) {
            this_0.a8('-');
          }
        }
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = toString_0(item).toLowerCase();
      } else {
        tmp = new Char(item);
      }
      var cFinal = tmp;
      this_0.z7(cFinal);
      lastIsUpper = isUpper;
    }
    return this_0.toString();
  }
  function Companion() {
    Companion_instance = this;
    this.xu_1 = new CancellableActionHandle(0);
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CancellableActionHandle(id, isInterval) {
    Companion_getInstance_0();
    isInterval = isInterval === VOID ? false : isInterval;
    this.yu_1 = isInterval;
    this.zu_1 = id;
  }
  function invokeLater(_this__u8e3s4, block) {
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration(0, DurationUnit_MILLISECONDS_getInstance());
    return setTimeout(_this__u8e3s4, tmp$ret$0, block);
  }
  function setTimeout(_this__u8e3s4, timeout, block) {
    var id = _this__u8e3s4.setTimeout(block, _Duration___get_inWholeMilliseconds__impl__msfiry(timeout).d3());
    return new CancellableActionHandle(id);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = invokeLater;
  _.$_$.b = titleCamelCaseToKebabCase;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-browser-ext.js.map
