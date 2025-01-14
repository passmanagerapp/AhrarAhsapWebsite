(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-worker-interface.js', './kobweb-common-kobweb-serialization.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-worker-interface.js'), require('./kobweb-common-kobweb-serialization.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-worker'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-worker'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-worker-interface'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-worker'. Its dependency 'kobweb-frontend-kobweb-worker-interface' was not found. Please, check whether 'kobweb-frontend-kobweb-worker-interface' is loaded prior to 'kobweb-frontend-kobweb-worker'.");
    }
    if (typeof globalThis['kobweb-common-kobweb-serialization'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-worker'. Its dependency 'kobweb-common-kobweb-serialization' was not found. Please, check whether 'kobweb-common-kobweb-serialization' is loaded prior to 'kobweb-frontend-kobweb-worker'.");
    }
    globalThis['kobweb-frontend-kobweb-worker'] = factory(typeof globalThis['kobweb-frontend-kobweb-worker'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-worker'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-worker-interface'], globalThis['kobweb-common-kobweb-serialization']);
  }
}(function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_worker_interface, kotlin_com_varabyte_kobweb_kobweb_serialization) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.fc;
  var initMetadataForClass = kotlin_kotlin.$_$.cb;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_worker_interface.$_$.d;
  var VOID = kotlin_kotlin.$_$.f;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var initMetadataForInterface = kotlin_kotlin.$_$.fb;
  var THROW_CCE = kotlin_kotlin.$_$.kf;
  var IOSerializer = kotlin_com_varabyte_kobweb_kobweb_serialization.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(InputMessage, 'InputMessage');
  function invoke$default(output, transferables, $super) {
    transferables = transferables === VOID ? Companion_getInstance().get_Empty_i9b85g_k$() : transferables;
    var tmp;
    if ($super === VOID) {
      this.invoke_v59ckh_k$(output, transferables);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.invoke_v59ckh_k$.call(this, output, transferables);
    }
    return tmp;
  }
  initMetadataForInterface(OutputDispatcher, 'OutputDispatcher');
  initMetadataForInterface(WorkerFactory, 'WorkerFactory');
  initMetadataForClass(createPassThroughSerializer$1, VOID, VOID, VOID, [IOSerializer]);
  initMetadataForClass(WorkerStrategy, 'WorkerStrategy');
  initMetadataForClass(WorkerStrategyContext, 'WorkerStrategyContext');
  initMetadataForClass(WorkerStrategy$1, VOID, VOID, WorkerStrategy);
  //endregion
  function InputMessage(input, transferables) {
    this.input_1 = input;
    this.transferables_1 = transferables;
  }
  protoOf(InputMessage).get_input_it4gip_k$ = function () {
    return this.input_1;
  };
  protoOf(InputMessage).get_transferables_yi0o2j_k$ = function () {
    return this.transferables_1;
  };
  function OutputDispatcher() {
  }
  function WorkerFactory() {
  }
  function createPassThroughSerializer(_this__u8e3s4) {
    return new createPassThroughSerializer$1();
  }
  function createPassThroughSerializer$1() {
  }
  protoOf(createPassThroughSerializer$1).serializeInput_lefp80_k$ = function (input) {
    return input;
  };
  protoOf(createPassThroughSerializer$1).serializeInput_6cf2ds_k$ = function (input) {
    return this.serializeInput_lefp80_k$((!(input == null) ? typeof input === 'string' : false) ? input : THROW_CCE());
  };
  protoOf(createPassThroughSerializer$1).deserializeInput_aemosv_k$ = function (input) {
    return input;
  };
  protoOf(createPassThroughSerializer$1).serializeOutput_ql2qqh_k$ = function (output) {
    return output;
  };
  protoOf(createPassThroughSerializer$1).serializeOutput_ym61n7_k$ = function (output) {
    return this.serializeOutput_ql2qqh_k$((!(output == null) ? typeof output === 'string' : false) ? output : THROW_CCE());
  };
  protoOf(createPassThroughSerializer$1).deserializeOutput_u4geee_k$ = function (output) {
    return output;
  };
  function get__self() {
    _init_properties_WorkerStrategy_kt__g3thbl();
    return _self;
  }
  var _self;
  function WorkerStrategy() {
    this.self_1 = get__self();
  }
  protoOf(WorkerStrategy).get_self_wou8id_k$ = function () {
    return this.self_1;
  };
  function WorkerStrategy_0(handleInput) {
    _init_properties_WorkerStrategy_kt__g3thbl();
    return new WorkerStrategy$1(handleInput);
  }
  function WorkerStrategyContext(self_0, transferables) {
    this.self_1 = self_0;
    this.transferables_1 = transferables;
  }
  protoOf(WorkerStrategyContext).get_self_wou8id_k$ = function () {
    return this.self_1;
  };
  protoOf(WorkerStrategyContext).get_transferables_yi0o2j_k$ = function () {
    return this.transferables_1;
  };
  function WorkerStrategy$1($handleInput) {
    this.$handleInput_1 = $handleInput;
    WorkerStrategy.call(this);
  }
  protoOf(WorkerStrategy$1).onInput_qvyd0e_k$ = function (inputMessage) {
    return this.$handleInput_1(new WorkerStrategyContext(this.self_1, inputMessage.get_transferables_yi0o2j_k$()), inputMessage.get_input_it4gip_k$());
  };
  var properties_initialized_WorkerStrategy_kt_2au8y5;
  function _init_properties_WorkerStrategy_kt__g3thbl() {
    if (!properties_initialized_WorkerStrategy_kt_2au8y5) {
      properties_initialized_WorkerStrategy_kt_2au8y5 = true;
      _self = self;
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = WorkerFactory;
  _.$_$.b = WorkerStrategy_0;
  _.$_$.c = createPassThroughSerializer;
  //endregion
  return _;
}));
