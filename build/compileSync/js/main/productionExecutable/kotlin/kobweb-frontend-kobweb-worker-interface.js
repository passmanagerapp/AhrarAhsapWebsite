(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-worker-interface'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-worker-interface'.");
    }
    globalThis['kobweb-frontend-kobweb-worker-interface'] = factory(typeof globalThis['kobweb-frontend-kobweb-worker-interface'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-worker-interface'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var emptyMap = kotlin_kotlin.$_$.e3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var ensureNotNull = kotlin_kotlin.$_$.m9;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.g6;
  var copyToArray = kotlin_kotlin.$_$.b3;
  var to = kotlin_kotlin.$_$.u9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var Pair = kotlin_kotlin.$_$.d9;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var json = kotlin_kotlin.$_$.q6;
  var initMetadataForClass = kotlin_kotlin.$_$.f6;
  var VOID = kotlin_kotlin.$_$.e;
  var initMetadataForInterface = kotlin_kotlin.$_$.i6;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Transferables, 'Transferables');
  initMetadataForClass(WorkerContext, 'WorkerContext');
  function postInput$default(input, transferables, $super) {
    transferables = transferables === VOID ? Companion_getInstance().th_1 : transferables;
    var tmp;
    if ($super === VOID) {
      this.ai(input, transferables);
      tmp = Unit_instance;
    } else {
      tmp = $super.ai.call(this, input, transferables);
    }
    return tmp;
  }
  initMetadataForInterface(Worker, 'Worker');
  //endregion
  function Companion() {
    Companion_instance = this;
    this.th_1 = new Transferables(emptyMap(), emptyMap());
  }
  protoOf(Companion).uh = function (json) {
    var tmp0_safe_receiver = json['_transferableKeys'];
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return this.th_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var transferableNames = tmp_0;
    var tmp2_safe_receiver = json['_extraKeys'];
    var tmp_1;
    if (tmp2_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_1;
    var tmp_2;
    if (tmp3_elvis_lhs == null) {
      return this.th_1;
    } else {
      tmp_2 = tmp3_elvis_lhs;
    }
    var extraNames = tmp_2;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var transferables = LinkedHashMap_init_$Create$();
    var inductionVariable = 0;
    var last = transferableNames.length;
    while (inductionVariable < last) {
      var name = transferableNames[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.set' call
      var value = ensureNotNull(json[name]);
      transferables.v4(name, value);
    }
    // Inline function 'kotlin.collections.mutableMapOf' call
    var extras = LinkedHashMap_init_$Create$();
    var inductionVariable_0 = 0;
    var last_0 = extraNames.length;
    while (inductionVariable_0 < last_0) {
      var name_0 = extraNames[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'kotlin.collections.set' call
      var value_0 = ensureNotNull(json[name_0]);
      extras.v4(name_0, value_0);
    }
    return new Transferables(transferables, extras);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Transferables(transferables, extras) {
    Companion_getInstance();
    this.vh_1 = transferables;
    this.wh_1 = extras;
  }
  protoOf(Transferables).xh = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.vh_1.g2();
    var tmp$ret$0 = copyToArray(this_0);
    var tmp = to('_transferableKeys', tmp$ret$0);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this.wh_1.g2();
    var tmp$ret$1 = copyToArray(this_1);
    var tmp_0 = [tmp, to('_extraKeys', tmp$ret$1)];
    // Inline function 'kotlin.collections.map' call
    var this_2 = this.vh_1.i2();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.worker.Transferables.toJson.<anonymous>' call
      // Inline function 'kotlin.collections.toPair' call
      var tmp$ret$3 = new Pair(item.b2(), item.c2());
      destination.e(tmp$ret$3);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp8 = copyToArray(destination);
    // Inline function 'kotlin.collections.map' call
    var this_3 = this.wh_1.i2();
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
    var _iterator__ex2g4s_0 = this_3.g();
    while (_iterator__ex2g4s_0.h()) {
      var item_0 = _iterator__ex2g4s_0.i();
      // Inline function 'com.varabyte.kobweb.worker.Transferables.toJson.<anonymous>' call
      // Inline function 'kotlin.collections.toPair' call
      var tmp$ret$8 = new Pair(item_0.b2(), item_0.c2());
      destination_0.e(tmp$ret$8);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.plus' call
    var elements = copyToArray(destination_0);
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$13 = tmp8.concat(elements);
    return json(arrayConcat([tmp_0, tmp$ret$13]));
  };
  protoOf(Transferables).yh = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.vh_1.h2();
    return copyToArray(this_0);
  };
  function WorkerContext(transferables) {
    this.zh_1 = transferables;
  }
  function Worker() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = WorkerContext;
  _.$_$.b = Worker;
  _.$_$.c = postInput$default;
  _.$_$.d = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-worker-interface.js.map
