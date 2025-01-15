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
  var toString = kotlin_kotlin.$_$.ic;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var emptyMap = kotlin_kotlin.$_$.a7;
  var protoOf = kotlin_kotlin.$_$.fc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var ensureNotNull = kotlin_kotlin.$_$.fg;
  var initMetadataForCompanion = kotlin_kotlin.$_$.db;
  var initMetadataForClass = kotlin_kotlin.$_$.cb;
  var copyToArray = kotlin_kotlin.$_$.w6;
  var to = kotlin_kotlin.$_$.qg;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.i6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var Pair = kotlin_kotlin.$_$.jf;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var json = kotlin_kotlin.$_$.xb;
  var VOID = kotlin_kotlin.$_$.f;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var initMetadataForInterface = kotlin_kotlin.$_$.fb;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Builder, 'Builder', Builder);
  initMetadataForClass(Transferables, 'Transferables');
  initMetadataForClass(WorkerContext, 'WorkerContext');
  function postInput$default(input, transferables, $super) {
    transferables = transferables === VOID ? Companion_getInstance().get_Empty_i9b85g_k$() : transferables;
    var tmp;
    if ($super === VOID) {
      this.postInput_ghty3x_k$(input, transferables);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.postInput_ghty3x_k$.call(this, input, transferables);
    }
    return tmp;
  }
  initMetadataForInterface(Worker, 'Worker');
  //endregion
  function _get_transferables__sq3g71($this) {
    return $this.transferables_1;
  }
  function _get_extras__g7hurs($this) {
    return $this.extras_1;
  }
  function _add($this, key, suffix, value) {
    if (!($this.transferables_1.put_4fpzoq_k$(suffixedKey(key, suffix), value) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'Transferable with key "' + key + '" was added twice';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return $this;
  }
  function _add_0($this, key, value) {
    return _add($this, key, '', value);
  }
  function _get_transferables__sq3g71_0($this) {
    return $this.transferables_1;
  }
  function _get_extras__g7hurs_0($this) {
    return $this.extras_1;
  }
  function Companion() {
    Companion_instance = this;
    this.Empty_1 = new Transferables(emptyMap(), emptyMap());
  }
  protoOf(Companion).get_Empty_i9b85g_k$ = function () {
    return this.Empty_1;
  };
  protoOf(Companion).invoke_tppr0d_k$ = function (init) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder();
    init(this_0);
    return this_0.build_1k0s4u_k$();
  };
  protoOf(Companion).fromJson_9k5biu_k$ = function (json) {
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
      return this.Empty_1;
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
      return this.Empty_1;
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
      transferables.put_4fpzoq_k$(name, value);
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
      extras.put_4fpzoq_k$(name_0, value_0);
    }
    return new Transferables(transferables, extras);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.transferables_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.extras_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Builder).add_86jayo_k$ = function (key, value) {
    return _add_0(this, key, value);
  };
  protoOf(Builder).add_mway9f_k$ = function (key, value) {
    return _add_0(this, key, value);
  };
  protoOf(Builder).add_jhz63g_k$ = function (key, value) {
    return _add_0(this, key, value);
  };
  protoOf(Builder).add_3kf2li_k$ = function (key, value) {
    return _add(this, key, 'Int8Array', value.buffer);
  };
  protoOf(Builder).add_spgbx7_k$ = function (key, value) {
    return _add(this, key, 'Uint8Array', value.buffer);
  };
  protoOf(Builder).add_l49igp_k$ = function (key, value) {
    return _add(this, key, 'Uint8ClampedArray', value.buffer);
  };
  protoOf(Builder).add_uriulh_k$ = function (key, value) {
    return _add(this, key, 'Int16Array', value.buffer);
  };
  protoOf(Builder).add_y74gxo_k$ = function (key, value) {
    return _add(this, key, 'Uint16Array', value.buffer);
  };
  protoOf(Builder).add_c4473f_k$ = function (key, value) {
    return _add(this, key, 'Int32Array', value.buffer);
  };
  protoOf(Builder).add_i6kxje_k$ = function (key, value) {
    return _add(this, key, 'Uint32Array', value.buffer);
  };
  protoOf(Builder).add_xjn7oi_k$ = function (key, value) {
    return _add(this, key, 'Float32Array', value.buffer);
  };
  protoOf(Builder).add_a7hg4h_k$ = function (key, value) {
    return _add(this, key, 'Float64Array', value.buffer);
  };
  protoOf(Builder).add_8zvck2_k$ = function (key, value) {
    _add(this, key, 'ImageData_buffer', value.data.buffer);
    var tmp0 = this.extras_1;
    var tmp1 = suffixedKey(key, 'ImageData_width');
    // Inline function 'kotlin.collections.set' call
    var value_0 = value.width;
    tmp0.put_4fpzoq_k$(tmp1, value_0);
    var tmp3 = this.extras_1;
    var tmp4 = suffixedKey(key, 'ImageData_height');
    // Inline function 'kotlin.collections.set' call
    var value_1 = value.height;
    tmp3.put_4fpzoq_k$(tmp4, value_1);
  };
  protoOf(Builder).build_1k0s4u_k$ = function () {
    return new Transferables(this.transferables_1, this.extras_1);
  };
  function get($this, key) {
    var tmp0_elvis_lhs = $this.transferables_1.get_wei43m_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transferable = tmp;
    return !(transferable == null) ? transferable : null;
  }
  function Transferables(transferables, extras) {
    Companion_getInstance();
    this.transferables_1 = transferables;
    this.extras_1 = extras;
  }
  protoOf(Transferables).getArrayBuffer_q3h5uf_k$ = function (key) {
    return get(this, key);
  };
  protoOf(Transferables).getMessagePort_yu6ki0_k$ = function (key) {
    return get(this, key);
  };
  protoOf(Transferables).getImageBitmap_ggn9ru_k$ = function (key) {
    return get(this, key);
  };
  protoOf(Transferables).getInt8Array_hw4gjk_k$ = function (key) {
    var tmp = get(this, suffixedKey(key, 'Int8Array'));
    var tmp0_safe_receiver = tmp instanceof ArrayBuffer ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.worker.Transferables.getInt8Array.<anonymous>' call
      tmp_0 = new Int8Array(tmp0_safe_receiver);
    }
    return tmp_0;
  };
  protoOf(Transferables).getUint8Array_qvyo6v_k$ = function (key) {
    var tmp = get(this, suffixedKey(key, 'Uint8Array'));
    var tmp0_safe_receiver = tmp instanceof ArrayBuffer ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.worker.Transferables.getUint8Array.<anonymous>' call
      tmp_0 = new Uint8Array(tmp0_safe_receiver);
    }
    return tmp_0;
  };
  protoOf(Transferables).getUint8ClampedArray_4j6atp_k$ = function (key) {
    var tmp = get(this, suffixedKey(key, 'Uint8ClampedArray'));
    var tmp0_safe_receiver = tmp instanceof ArrayBuffer ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.worker.Transferables.getUint8ClampedArray.<anonymous>' call
      tmp_0 = new Uint8ClampedArray(tmp0_safe_receiver);
    }
    return tmp_0;
  };
  protoOf(Transferables).getInt16Array_rnza9t_k$ = function (key) {
    var tmp = get(this, suffixedKey(key, 'Int16Array'));
    var tmp0_safe_receiver = tmp instanceof ArrayBuffer ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.worker.Transferables.getInt16Array.<anonymous>' call
      tmp_0 = new Int16Array(tmp0_safe_receiver);
    }
    return tmp_0;
  };
  protoOf(Transferables).getUint16Array_mejnfu_k$ = function (key) {
    var tmp = get(this, suffixedKey(key, 'Uint16Array'));
    var tmp0_safe_receiver = tmp instanceof ArrayBuffer ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.worker.Transferables.getUint16Array.<anonymous>' call
      tmp_0 = new Uint16Array(tmp0_safe_receiver);
    }
    return tmp_0;
  };
  protoOf(Transferables).getInt32Array_ktaiyv_k$ = function (key) {
    var tmp = get(this, suffixedKey(key, 'Int32Array'));
    var tmp0_safe_receiver = tmp instanceof ArrayBuffer ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.worker.Transferables.getInt32Array.<anonymous>' call
      tmp_0 = new Int32Array(tmp0_safe_receiver);
    }
    return tmp_0;
  };
  protoOf(Transferables).getUint32Array_fjuw4w_k$ = function (key) {
    var tmp = get(this, suffixedKey(key, 'Uint32Array'));
    var tmp0_safe_receiver = tmp instanceof ArrayBuffer ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.worker.Transferables.getUint32Array.<anonymous>' call
      tmp_0 = new Uint32Array(tmp0_safe_receiver);
    }
    return tmp_0;
  };
  protoOf(Transferables).getFloat32Array_vdjb52_k$ = function (key) {
    var tmp = get(this, suffixedKey(key, 'Float32Array'));
    var tmp0_safe_receiver = tmp instanceof ArrayBuffer ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.worker.Transferables.getFloat32Array.<anonymous>' call
      tmp_0 = new Float32Array(tmp0_safe_receiver);
    }
    return tmp_0;
  };
  protoOf(Transferables).getFloat64Array_ls3fk5_k$ = function (key) {
    var tmp = get(this, suffixedKey(key, 'Float64Array'));
    var tmp0_safe_receiver = tmp instanceof ArrayBuffer ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.worker.Transferables.getFloat64Array.<anonymous>' call
      tmp_0 = new Float64Array(tmp0_safe_receiver);
    }
    return tmp_0;
  };
  protoOf(Transferables).getImageData_6z0ppn_k$ = function (key) {
    var tmp0_elvis_lhs = get(this, suffixedKey(key, 'ImageData_buffer'));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    var tmp_0 = this.extras_1.get_wei43m_k$(suffixedKey(key, 'ImageData_width'));
    var tmp1_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var width = tmp_1;
    var tmp_2 = this.extras_1.get_wei43m_k$(suffixedKey(key, 'ImageData_height'));
    var tmp2_elvis_lhs = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      return null;
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var height = tmp_3;
    return new ImageData(new Uint8ClampedArray(buffer), width, height);
  };
  protoOf(Transferables).toJson_edh1bx_k$ = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.transferables_1.get_keys_wop4xp_k$();
    var tmp$ret$0 = copyToArray(this_0);
    var tmp = to('_transferableKeys', tmp$ret$0);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this.extras_1.get_keys_wop4xp_k$();
    var tmp$ret$1 = copyToArray(this_1);
    var tmp_0 = [tmp, to('_extraKeys', tmp$ret$1)];
    // Inline function 'kotlin.collections.map' call
    var this_2 = this.transferables_1.get_entries_p20ztl_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.worker.Transferables.toJson.<anonymous>' call
      // Inline function 'kotlin.collections.toPair' call
      var tmp$ret$3 = new Pair(item.get_key_18j28a_k$(), item.get_value_j01efc_k$());
      destination.add_utx5q5_k$(tmp$ret$3);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp8 = copyToArray(destination);
    // Inline function 'kotlin.collections.map' call
    var this_3 = this.extras_1.get_entries_p20ztl_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
    var _iterator__ex2g4s_0 = this_3.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var item_0 = _iterator__ex2g4s_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.worker.Transferables.toJson.<anonymous>' call
      // Inline function 'kotlin.collections.toPair' call
      var tmp$ret$8 = new Pair(item_0.get_key_18j28a_k$(), item_0.get_value_j01efc_k$());
      destination_0.add_utx5q5_k$(tmp$ret$8);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.plus' call
    var elements = copyToArray(destination_0);
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$13 = tmp8.concat(elements);
    return json(arrayConcat([tmp_0, tmp$ret$13]));
  };
  protoOf(Transferables).toValues_s9cf43_k$ = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.transferables_1.get_values_ksazhn_k$();
    return copyToArray(this_0);
  };
  function suffixedKey(key, suffix) {
    var tmp;
    if (suffix == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.worker.suffixedKey.<anonymous>' call
      tmp = '_' + suffix;
    }
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = tmp;
    return key + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
  }
  function WorkerContext(transferables) {
    this.transferables_1 = transferables;
  }
  protoOf(WorkerContext).get_transferables_yi0o2j_k$ = function () {
    return this.transferables_1;
  };
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
