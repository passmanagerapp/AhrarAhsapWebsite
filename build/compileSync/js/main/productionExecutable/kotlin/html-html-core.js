(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-html-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    globalThis['html-html-core'] = factory(typeof globalThis['html-html-core'] === 'undefined' ? {} : globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var protoOf = kotlin_kotlin.$_$.x6;
  var asList = kotlin_kotlin.$_$.u2;
  var initMetadataForInterface = kotlin_kotlin.$_$.i6;
  var VOID = kotlin_kotlin.$_$.e;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var addAll = kotlin_kotlin.$_$.r2;
  var initMetadataForClass = kotlin_kotlin.$_$.f6;
  var charSequenceLength = kotlin_kotlin.$_$.v5;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var ensureNotNull = kotlin_kotlin.$_$.m9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.g6;
  var initMetadataForObject = kotlin_kotlin.$_$.k6;
  var toString = kotlin_kotlin.$_$.z6;
  var hashCode = kotlin_kotlin.$_$.e6;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var equals = kotlin_kotlin.$_$.y5;
  var getStringHashCode = kotlin_kotlin.$_$.d6;
  var toString_0 = kotlin_kotlin.$_$.t9;
  var numberToDouble = kotlin_kotlin.$_$.u6;
  var getNumberHashCode = kotlin_kotlin.$_$.b6;
  var defineProp = kotlin_kotlin.$_$.x5;
  var isInterface = kotlin_kotlin.$_$.o6;
  var Collection = kotlin_kotlin.$_$.j2;
  var objectCreate = kotlin_kotlin.$_$.w6;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var listOfNotNull = kotlin_kotlin.$_$.t3;
  var joinToString = kotlin_kotlin.$_$.n3;
  var joinToString_0 = kotlin_kotlin.$_$.o3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.d3;
  var copyToArray = kotlin_kotlin.$_$.b3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.s9;
  var lazy = kotlin_kotlin.$_$.n9;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var KProperty1 = kotlin_kotlin.$_$.i7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c6;
  //endregion
  //region block: pre-declaration
  function classes(classes) {
    return this.x2b(asList(classes));
  }
  function tabIndex(value) {
    return this.v2b('tabindex', value.toString());
  }
  initMetadataForInterface(AttrsScope, 'AttrsScope');
  initMetadataForClass(AttrsScopeBuilder, 'AttrsScopeBuilder', AttrsScopeBuilder, VOID, [AttrsScope]);
  initMetadataForClass(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', EventsListenerScopeBuilder);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(CSSKeyframe, 'CSSKeyframe');
  initMetadataForObject(From, 'From', VOID, CSSKeyframe);
  initMetadataForObject(To, 'To', VOID, CSSKeyframe);
  initMetadataForInterface(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration');
  initMetadataForClass(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', VOID, VOID, [CSSStyledRuleDeclaration]);
  initMetadataForClass(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration');
  initMetadataForClass(Raw, 'Raw');
  initMetadataForClass(MediaFeature, 'MediaFeature');
  initMetadataForInterface(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration');
  initMetadataForClass(CSSMediaRuleDeclaration, 'CSSMediaRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForClass(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', VOID, VOID, [CSSStyledRuleDeclaration]);
  function property(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.x2d(propertyName, value);
  }
  function property_0(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.x2d(propertyName, value);
  }
  function variable(variableName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.z2d(variableName, value);
  }
  initMetadataForInterface(StyleScope, 'StyleScope');
  initMetadataForInterface(StyleHolder, 'StyleHolder');
  initMetadataForClass(StyleScopeBuilder, 'StyleScopeBuilder', StyleScopeBuilder, VOID, [StyleScope, StyleHolder]);
  initMetadataForClass(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', CSSRuleBuilderImpl, StyleScopeBuilder, [StyleScope, StyleScopeBuilder]);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(CSSUnitValueTyped, 'CSSUnitValueTyped');
  initMetadataForClass(StylePropertyDeclaration, 'StylePropertyDeclaration');
  initMetadataForCompanion(Companion_7);
  function add(selector, style) {
    this.e2d(new CSSStyleRuleDeclaration(selector, style));
  }
  initMetadataForInterface(CSSRulesHolder, 'CSSRulesHolder');
  function returnUniversalSelector() {
    return get_Universal();
  }
  function returnHoverSelector() {
    return this.w2e();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  initMetadataForInterface(SelectorsScope, 'SelectorsScope');
  function invoke(_this__u8e3s4, cssRule) {
    this.t2e(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.t2e(new RawSelector(_this__u8e3s4), cssRule);
  }
  initMetadataForInterface(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', VOID, VOID, [CSSRulesHolder, SelectorsScope]);
  function style_0(selector, cssRule) {
    this.q2e(selector, buildCSSStyleRule(cssRule));
  }
  initMetadataForInterface(StyleSheetBuilder, 'StyleSheetBuilder', VOID, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  initMetadataForClass(StyleSheet, 'StyleSheet', StyleSheet_init_$Create$, VOID, [StyleSheetBuilder, CSSRulesHolder]);
  initMetadataForClass(CSSRulesHolderState, 'CSSRulesHolderState', CSSRulesHolderState, VOID, [CSSRulesHolder]);
  initMetadataForClass(CSSSelector, 'CSSSelector');
  initMetadataForClass(RawSelector, 'RawSelector', VOID, CSSSelector);
  initMetadataForClass(PseudoClassInternal, 'PseudoClassInternal', VOID, CSSSelector);
  initMetadataForClass(CSSBorder, 'CSSBorder', CSSBorder);
  initMetadataForClass(DomElementWrapper, 'DomElementWrapper', VOID, DomNodeWrapper);
  initMetadataForClass(ElementScopeBase, 'ElementScopeBase');
  initMetadataForClass(ElementScopeImpl, 'ElementScopeImpl', ElementScopeImpl, ElementScopeBase);
  initMetadataForInterface(ElementBuilder, 'ElementBuilder');
  initMetadataForClass(ElementBuilderImplementation, 'ElementBuilderImplementation', VOID, VOID, [ElementBuilder]);
  initMetadataForClass(Style$$inlined$run$1$1$1);
  //endregion
  var setInputValue;
  var setTextAreaDefaultValue;
  var setCheckedValue;
  function alt(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.v2b('alt', value);
  }
  function src(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.v2b('src', value);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_instance;
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  var properties_initialized_Attrs_kt_uypsku;
  function _init_properties_Attrs_kt__w5qjhs() {
    if (!properties_initialized_Attrs_kt_uypsku) {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function AttrsScope() {
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.a2c_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.b2c_1 = LinkedHashMap_init_$Create$();
    this.c2c_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.d2c_1 = ArrayList_init_$Create$();
    this.e2c_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.f2c_1 = ArrayList_init_$Create$();
    this.g2c_1 = 8;
  }
  protoOf(AttrsScopeBuilder).x2b = function (classes) {
    this.f2c_1.n(classes);
  };
  protoOf(AttrsScopeBuilder).y2b = function (classes) {
    addAll(this.f2c_1, classes);
  };
  protoOf(AttrsScopeBuilder).w2b = function (builder) {
    // Inline function 'kotlin.apply' call
    builder(this.c2c_1);
  };
  protoOf(AttrsScopeBuilder).v2b = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.b2c_1.v4(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).h2c = function () {
    return this.b2c_1;
  };
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.i2c_1 = ArrayList_init_$Create$();
    this.j2c_1 = 8;
  }
  protoOf(EventsListenerScopeBuilder).k2c = function () {
    return this.i2c_1;
  };
  function get_controlledInputsValuesWeakMap() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var tmp;
    if (element.type === 'radio') {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = element.name;
      tmp = charSequenceLength(this_0) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().d2(element.name)) {
        var tmp1 = get_controlledRadioGroups();
        var tmp2 = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        // Inline function 'kotlin.collections.set' call
        var value = LinkedHashSet_init_$Create$();
        tmp1.v4(tmp2, value);
      }
      ensureNotNull(get_controlledRadioGroups().f2(element.name)).e(element);
    }
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function _init_properties_InternalControlledInputUtils_kt__h0qaxa() {
    if (!properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      // Inline function 'kotlin.js.unsafeCast' call
      controlledInputsValuesWeakMap = new WeakMap();
      // Inline function 'kotlin.collections.mutableMapOf' call
      controlledRadioGroups = LinkedHashMap_init_$Create$();
    }
  }
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function From() {
    From_instance = this;
    CSSKeyframe.call(this);
    this.m2c_1 = 0;
  }
  protoOf(From).toString = function () {
    return 'from';
  };
  var From_instance;
  function From_getInstance() {
    if (From_instance == null)
      new From();
    return From_instance;
  }
  function To() {
    To_instance = this;
    CSSKeyframe.call(this);
    this.o2c_1 = 0;
  }
  protoOf(To).toString = function () {
    return 'to';
  };
  var To_instance;
  function To_getInstance() {
    if (To_instance == null)
      new To();
    return To_instance;
  }
  function CSSKeyframe() {
    this.p2c_1 = 0;
  }
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.q2c_1 = keyframe;
    this.r2c_1 = style;
    this.s2c_1 = 8;
  }
  protoOf(CSSKeyframeRuleDeclaration).t2c = function () {
    return this.r2c_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).u2c = function () {
    return this.q2c_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.q2c_1.toString() + ', style=' + toString(this.r2c_1) + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.q2c_1);
    result = imul(result, 31) + hashCode(this.r2c_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframeRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.q2c_1, tmp0_other_with_cast.q2c_1))
      return false;
    if (!equals(this.r2c_1, tmp0_other_with_cast.r2c_1))
      return false;
    return true;
  };
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.v2c_1 = name;
    this.w2c_1 = keys;
    this.x2c_1 = 8;
  }
  protoOf(CSSKeyframesRuleDeclaration).u2c = function () {
    return '@keyframes ' + this.v2c_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.v2c_1 + ', keys=' + toString(this.w2c_1) + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.v2c_1);
    result = imul(result, 31) + hashCode(this.w2c_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframesRuleDeclaration ? other : THROW_CCE();
    if (!(this.v2c_1 === tmp0_other_with_cast.v2c_1))
      return false;
    if (!equals(this.w2c_1, tmp0_other_with_cast.w2c_1))
      return false;
    return true;
  };
  function media(_this__u8e3s4, query, rulesBuild) {
    media_0(_this__u8e3s4, new Raw(query), rulesBuild);
  }
  function Raw(string) {
    this.y2c_1 = string;
    this.z2c_1 = 0;
  }
  protoOf(Raw).toString = function () {
    return this.y2c_1;
  };
  protoOf(Raw).hashCode = function () {
    return getStringHashCode(this.y2c_1);
  };
  protoOf(Raw).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Raw))
      return false;
    var tmp0_other_with_cast = other instanceof Raw ? other : THROW_CCE();
    if (!(this.y2c_1 === tmp0_other_with_cast.y2c_1))
      return false;
    return true;
  };
  function MediaFeature(name, value) {
    value = value === VOID ? null : value;
    this.a2d_1 = name;
    this.b2d_1 = value;
    this.c2d_1 = 8;
  }
  protoOf(MediaFeature).equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = (this.a2d_1 === other.a2d_1 && toString_0(this.b2d_1) === toString_0(other.b2d_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MediaFeature).toString = function () {
    var tmp;
    if (this.b2d_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.MediaFeature.toString.<anonymous>' call
      tmp = ': ' + toString_0(this.b2d_1) + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.a2d_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function media_0(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.d2d(rulesBuild);
    _this__u8e3s4.e2d(new CSSMediaRuleDeclaration(query, rules));
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.f2d_1 = query;
    this.g2d_1 = rules;
    this.h2d_1 = 0;
  }
  protoOf(CSSMediaRuleDeclaration).i2d = function () {
    return this.g2d_1;
  };
  protoOf(CSSMediaRuleDeclaration).u2c = function () {
    return '@media ' + toString(this.f2d_1);
  };
  protoOf(CSSMediaRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = (equals(this.g2d_1, other.g2d_1) && equals(this.f2d_1, other.f2d_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.j2d_1 = selector;
    this.k2d_1 = style;
    this.l2d_1 = 8;
  }
  protoOf(CSSStyleRuleDeclaration).t2c = function () {
    return this.k2d_1;
  };
  protoOf(CSSStyleRuleDeclaration).u2c = function () {
    return this.j2d_1.n2d();
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + toString(this.j2d_1) + ', style=' + toString(this.k2d_1) + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.j2d_1);
    result = imul(result, 31) + hashCode(this.k2d_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.j2d_1, tmp0_other_with_cast.j2d_1))
      return false;
    if (!equals(this.k2d_1, tmp0_other_with_cast.k2d_1))
      return false;
    return true;
  };
  function CSSStyledRuleDeclaration() {
  }
  function CSSGroupingRuleDeclaration() {
  }
  function buildCSSStyleRule(cssRule) {
    var builder = new CSSRuleBuilderImpl();
    cssRule(builder);
    return builder;
  }
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
    this.r2d_1 = 0;
  }
  function Companion_6() {
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'rem');
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function get_em(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.em' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'em');
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function get_fr(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.fr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'fr');
  }
  function get_ms(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.ms' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'ms');
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function CSSUnitValueTyped(value, unit) {
    this.c2e_1 = value;
    this.d2e_1 = unit;
    this.e2e_1 = 0;
  }
  protoOf(CSSUnitValueTyped).c2 = function () {
    return this.c2e_1;
  };
  protoOf(CSSUnitValueTyped).f2e = function () {
    return this.d2e_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.c2e_1 + toString(this.d2e_1);
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.c2e_1);
    result = imul(result, 31) + hashCode(this.d2e_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.c2e_1, tmp0_other_with_cast.c2e_1))
      return false;
    if (!equals(this.d2e_1, tmp0_other_with_cast.d2e_1))
      return false;
    return true;
  };
  function StyleScope() {
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u2d_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.v2d_1 = ArrayList_init_$Create$();
    this.w2d_1 = 0;
  }
  protoOf(StyleScopeBuilder).a2e = function () {
    return this.u2d_1;
  };
  protoOf(StyleScopeBuilder).b2e = function () {
    return this.v2d_1;
  };
  protoOf(StyleScopeBuilder).x2d = function (propertyName, value) {
    this.a2e().e(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).z2d = function (variableName, value) {
    this.b2e().e(new StylePropertyDeclaration(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = (nativeEquals(this.a2e(), other.a2e()) && nativeEquals(this.b2e(), other.b2e()));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration(name, value) {
    this.g2e_1 = name;
    this.h2e_1 = value;
    this.i2e_1 = 8;
  }
  protoOf(StylePropertyDeclaration).la = function () {
    return this.g2e_1;
  };
  protoOf(StylePropertyDeclaration).ma = function () {
    return this.h2e_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.g2e_1 + ', value=' + toString(this.h2e_1) + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.g2e_1);
    result = imul(result, 31) + hashCode(this.h2e_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.g2e_1 === tmp0_other_with_cast.g2e_1))
      return false;
    if (!equals(this.h2e_1, tmp0_other_with_cast.h2e_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.j() === properties.j()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = _this__u8e3s4.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.p(tmp0);
        if (!(element.g2e_1 === otherProp.g2e_1 && toString(element.h2e_1) === toString(otherProp.h2e_1))) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function StyleSheet_init_$Init$(rulesHolder, usePrefix, $this) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    usePrefix = usePrefix === VOID ? true : usePrefix;
    StyleSheet.call($this, usePrefix ? null : '', rulesHolder);
    return $this;
  }
  function StyleSheet_init_$Create$(rulesHolder, usePrefix) {
    return StyleSheet_init_$Init$(rulesHolder, usePrefix, objectCreate(protoOf(StyleSheet)));
  }
  function Companion_7() {
    this.j2e_1 = 0;
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function StyleSheet(customPrefix, rulesHolder) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    this.k2e_1 = rulesHolder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.l2e_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.m2e_1 = customPrefix == null ? '' + getKClassFromExpression(this).na() + '-' : customPrefix;
    this.n2e_1 = customPrefix == null;
    this.o2e_1 = 0;
  }
  protoOf(StyleSheet).p2e = function () {
    return this.k2e_1.p2e();
  };
  protoOf(StyleSheet).e2d = function (cssRule) {
    this.k2e_1.e2d(cssRule);
  };
  protoOf(StyleSheet).q2e = function (selector, style) {
    this.k2e_1.q2e(selector, style);
  };
  protoOf(StyleSheet).r2e = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    return this_0.p2e();
  };
  protoOf(StyleSheet).d2d = function (rulesBuild) {
    return this.r2e(rulesBuild);
  };
  protoOf(StyleSheet).t2e = function (selector, cssRule) {
    return this.s2e(selector, cssRule);
  };
  function CSSRulesHolderState() {
    this.x2e_1 = mutableStateListOf();
    this.y2e_1 = 0;
  }
  protoOf(CSSRulesHolderState).p2e = function () {
    return this.x2e_1;
  };
  protoOf(CSSRulesHolderState).e2d = function (cssRule) {
    this.x2e_1.r1c(cssRule);
  };
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.a2f_1 = selector;
  }
  protoOf(RawSelector).toString = function () {
    return this.a2f_1;
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.a2f_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.a2f_1 === tmp0_other_with_cast.a2f_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.c2f_1 = name;
  }
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = (this.c2f_1 === other.c2f_1 && this.d2f() == other.d2f());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).d2f = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.d2f();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.PseudoClassInternal.toString.<anonymous>' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.c2f_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function GenericStyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  function StyleSheetBuilder() {
  }
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('background-color', value);
  }
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.x2d('border-radius', r);
  }
  function border(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    border_0(_this__u8e3s4, border$lambda(width, style, color));
  }
  function border_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.x2d('border', this_0);
  }
  function CSSBorder() {
    this.e2f_1 = null;
    this.f2f_1 = null;
    this.g2f_1 = null;
    this.h2f_1 = 8;
  }
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.e2f_1, other.e2f_1) && equals(this.f2f_1, other.f2f_1) && equals(this.g2f_1, other.g2f_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.e2f_1, this.f2f_1, this.g2f_1]);
    return joinToString(values, ' ');
  };
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.e2f_1 = size;
  }
  function style_1(_this__u8e3s4, style) {
    _this__u8e3s4.f2f_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.g2f_1 = color;
  }
  function border$lambda($width, $style, $color) {
    return function ($this$border) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'org.jetbrains.compose.web.css.border.<anonymous>.<anonymous>' call
        width($this$border, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'org.jetbrains.compose.web.css.border.<anonymous>.<anonymous>' call
        style_1($this$border, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'org.jetbrains.compose.web.css.border.<anonymous>.<anonymous>' call
        color($this$border, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('width', value);
  }
  function minWidth(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('min-width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('height', value);
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('min-height', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.s2d('box-sizing', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('color', value);
  }
  function flexGrow(_this__u8e3s4, value) {
    _this__u8e3s4.t2d('flex-grow', value);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.s2d('align-items', alignItems);
  }
  function alignSelf(_this__u8e3s4, alignSelf) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.s2d('align-self', alignSelf);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.s2d('flex-direction', flexDirection);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.s2d('justify-content', justifyContent);
  }
  function gap(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('gap', value);
  }
  function gridTemplateColumns(_this__u8e3s4, value) {
    _this__u8e3s4.s2d('grid-template-columns', value);
  }
  function gridArea(_this__u8e3s4, rowStart, columnStart) {
    _this__u8e3s4.s2d('grid-area', rowStart + ' / ' + columnStart);
  }
  function columnGap(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('column-gap', value);
  }
  function rowGap(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('row-gap', value);
  }
  function gridTemplateRows(_this__u8e3s4, value) {
    _this__u8e3s4.s2d('grid-template-rows', value);
  }
  function gridAutoColumns(_this__u8e3s4, value) {
    _this__u8e3s4.s2d('grid-auto-columns', value);
  }
  function gridAutoRows(_this__u8e3s4, value) {
    _this__u8e3s4.s2d('grid-auto-rows', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.s2d('margin', joinToString_0(value, ' '));
  }
  function marginBottom(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('margin-bottom', value);
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.s2d('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.s2d('position', position);
  }
  function top(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('top', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('left', value);
  }
  function right(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('right', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('bottom', value);
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.t2d('opacity', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.s2d('display', displayStyle);
  }
  function lineHeight(_this__u8e3s4, value) {
    _this__u8e3s4.s2d('line-height', value);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('font-size', value);
  }
  function CSSSelector() {
    this.m2d_1 = 0;
  }
  protoOf(CSSSelector).n2d = function () {
    return toString(this);
  };
  function TagElement(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(-576127026);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n15(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.a1f(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.a1f(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.w1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-576127026, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement (Base.kt:110)');
      }
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -492369756, 'CC(remember):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.l1f();
      var tmp;
      if (false || it === Companion_getInstance().v18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
        var value = new ElementScopeImpl();
        $composer_1.w1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp0;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode' call
      var $composer_2 = $composer_0;
      $composer_2.u18();
      if ($composer_2.m1e()) {
        var tmp_1 = $composer_2;
        tmp_1.o1e(TagElement$lambda(elementBuilder, scope));
      } else {
        $composer_2.r1e();
      }
      var tmp3 = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $composer_3 = $composer_2;
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.e2c_1;
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne(tmp3).b1e(509942095);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>.<anonymous>' call
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne(tmp3));
      Updater__set_impl_v7kwss($this$update, attrsScope.f2c_1, DomElementWrapper$updateClasses$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.c2c_1, DomElementWrapper$updateStyleDeclarations$ref());
      var tmp_2 = attrsScope.h2c();
      Updater__set_impl_v7kwss($this$update, tmp_2, DomElementWrapper$updateAttrs$ref());
      var tmp_3 = attrsScope.a2c_1.k2c();
      Updater__set_impl_v7kwss($this$update, tmp_3, DomElementWrapper$updateEventListeners$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.d2c_1, DomElementWrapper$updateProperties$ref());
      _SkippableUpdater___get_composer__impl__6t7yne(tmp3).c1e();
      $composer_2.b1e(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $changed_0 = 8 & 64 >> 3 | 14 & 64 >> 3 | 112 & 64 >> 6;
      var $composer_4 = $composer_2;
      $composer_4.b1e(-914956529);
      content == null || content(scope, $composer_4, 14 & $changed_0 | 112 & $dirty >> 3);
      $composer_4.c1e();
      $composer_2.c1e();
      $composer_2.t1e();
      var tmp0_safe_receiver = refEffect;
      var tmp_4;
      if (tmp0_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
        DisposableEffect(null, TagElement$lambda_0(tmp0_safe_receiver, scope), $composer_0, 6);
        tmp_4 = Unit_instance;
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m18();
    }
    var tmp1_safe_receiver = $composer_0.e1g();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.r1l(TagElement$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.k2f_1 = node;
    this.l2f_1 = emptyList();
  }
  protoOf(DomElementWrapper).i2a = function () {
    return this.k2f_1;
  };
  protoOf(DomElementWrapper).m2f = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.l2f_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.k2f_1.removeEventListener(element.s1w(), element);
    }
    this.l2f_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.l2f_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.k2f_1.addEventListener(element_0.s1w(), element_0);
    }
  };
  protoOf(DomElementWrapper).n2f = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = applicators.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.la();
      var item = element.ma();
      applicator(this.k2f_1, item);
    }
  };
  protoOf(DomElementWrapper).o2f = function (styleApplier) {
    var tmp0_subject = this.k2f_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.k2f_1.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.k2f_1.style;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = styleApplier.a2e().g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.la();
        var value = element.ma();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = styleApplier.b2e().g();
      while (_iterator__ex2g4s_0.h()) {
        var element_0 = _iterator__ex2g4s_0.i();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.la();
        var value_0 = element_0.ma();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).p2f = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.k2f_1.getAttributeNames();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      switch (element) {
        case 'style':
        case 'class':
          break;
        default:
          this.k2f_1.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = attrs.i2().g();
    while (_iterator__ex2g4s.h()) {
      var element_0 = _iterator__ex2g4s.i();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.k2f_1.setAttribute(element_0.b2(), element_0.c2());
    }
  };
  protoOf(DomElementWrapper).q2f = function (classes) {
    this.k2f_1.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.q()) {
      var tmp = this.k2f_1.classList;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$lambda($elementBuilder, $scope) {
    return function () {
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var node = $elementBuilder.c1u();
      $scope.v2f(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.q2f(p1);
      return Unit_instance;
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.o2f(p1);
      return Unit_instance;
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.p2f(p1);
      return Unit_instance;
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.m2f(p1);
      return Unit_instance;
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.n2f(p1);
      return Unit_instance;
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$lambda_0($effect, $scope) {
    return function ($this$DisposableEffect) {
      return $effect($this$DisposableEffect, $scope.w2f());
    };
  }
  function TagElement$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
    this.u2f_1 = 8;
  }
  protoOf(ElementScopeImpl).v2f = function (_set____db54di) {
    this.t2f_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).w2f = function () {
    var tmp = this.t2f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).x2f = function (_this__u8e3s4) {
    return this.w2f();
  };
  function ElementScopeBase() {
    this.y2f_1 = 0;
    this.z2f_1 = 8;
  }
  var Address;
  var Article;
  var Aside;
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  var A;
  var Input;
  var Button;
  var H1;
  var H2;
  var H3;
  var H4;
  var H5;
  var H6;
  var P;
  var Em;
  var I;
  var B;
  var Small;
  var Sup;
  var Sub;
  var Blockquote;
  var Span;
  var Br;
  var Ul;
  var Ol;
  var Li;
  function get_Img() {
    _init_properties_Elements_kt__eyv5nt();
    return Img;
  }
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  var Section;
  var TextArea;
  var Nav;
  var Pre;
  var Code;
  var Main;
  var Footer;
  var Hr;
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function ElementBuilder() {
  }
  function _get_el__ndc0ck($this) {
    var tmp0 = $this.b2g_1;
    // Inline function 'kotlin.getValue' call
    el$factory();
    return tmp0.c2();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.a2g_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.a2g_1 = tagName;
    var tmp = this;
    tmp.b2g_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).c1u = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Div_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(1121267064);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.a1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.a1f(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.w1d()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1121267064, $dirty, -1, 'org.jetbrains.compose.web.dom.Div (Elements.kt:495)');
      }
      TagElement(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(Div$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Text_0(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(-1813500779);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n15(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.w1d()) {
      if (isTraceInProgress()) {
        traceEventStart(-1813500779, $dirty, -1, 'org.jetbrains.compose.web.dom.Text (Elements.kt:482)');
      }
      $composer_0.b1e(-1579100713);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l1f();
      var tmp;
      if (false || it === Companion_getInstance().v18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
        var value_0 = Text$lambda;
        this_0.w1f(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.c1e();
      // Inline function 'androidx.compose.runtime.ComposeNode' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1886828752, 'CC(ComposeNode):Composables.kt#9igjgp');
      var tmp_1 = $composer_1.x1d();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_1.u18();
      if ($composer_1.m1e()) {
        $composer_1.o1e(tmpCache);
      } else {
        $composer_1.r1e();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_1);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$lambda_0);
      $composer_1.t1e();
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(Text$lambda_1(value, $changed));
    }
  }
  function Img_0(src, alt, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var alt_0 = {_v: alt};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(140604733);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.n15(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n15(alt_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.a1f(attrs_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.w1d()) {
      if (!(($default & 2) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(140604733, $dirty, -1, 'org.jetbrains.compose.web.dom.Img (Elements.kt:646)');
      }
      var tmp = get_Img();
      $composer_0.b1e(-1579095656);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.n15(src) | $composer_0.n15(alt_0._v)) | $composer_0.a1f(attrs_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.l1f();
      var tmp_0;
      if (invalid || it === Companion_getInstance().v18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Img.<anonymous>' call
        var value = Img$lambda(src, alt_0, attrs_0);
        tmp0.w1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.c1e();
      TagElement(tmp, tmpCache, null, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(Img$lambda_0(src, alt_0, attrs_0, $changed, $default));
    }
  }
  function Style_0(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(244974285);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.a1f(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.n15(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.w1d()) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(244974285, $dirty, -1, 'org.jetbrains.compose.web.dom.Style (Elements.kt:1002)');
      }
      var tmp = get_Style();
      $composer_0.b1e(-1579087402);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.a1f(applyAttrs_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.l1f();
      var tmp_0;
      if (invalid || it === Companion_getInstance().v18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
        var value = Style$lambda(applyAttrs_0);
        tmp0.w1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.c1e();
      // Inline function 'kotlin.run' call
      // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 962227798, true, Style$lambda_0(cssRules));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.n15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l1f();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().v18_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.w1f(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      TagElement(tmp, tmpCache, tmp0_0, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(Style$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    _init_properties_Elements_kt__eyv5nt();
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.cssRules.length;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.dom.clearCSSRules.<anonymous>' call
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < times);
  }
  function Div$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Text$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$lambda_0($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.i2a();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_instance;
  }
  function Text$lambda_1($value, $$changed) {
    return function ($composer, $force) {
      Text_0($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Img$lambda($src, $alt, $attrs) {
    return function ($this$TagElement) {
      alt(src($this$TagElement, $src), $alt._v);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Img$lambda_0($src, $alt, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Img_0($src, $alt._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Style$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Style$$inlined$run$1$1$1($cssStylesheet) {
    this.c2g_1 = $cssStylesheet;
  }
  protoOf(Style$$inlined$run$1$1$1).qm = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.c2g_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.x2f($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      if (cssStylesheet == null)
        null;
      else {
        setCSSRules(cssStylesheet, $cssRules);
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Style$$inlined$run$1$1$1(cssStylesheet);
    };
  }
  function Style$lambda_0($cssRules) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.n15($this$TagElement) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) || !$composer_0.w1d()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $dirty, -1, 'org.jetbrains.compose.web.dom.Style.<anonymous> (Elements.kt:1011)');
        }
        var tmp_1 = $cssRules.j();
        DisposableEffect_0($cssRules, tmp_1, Style$lambda$lambda($this$TagElement, $cssRules), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.m18();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function Style$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style_0($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function el$factory() {
    return getPropertyCallableRef('el', 1, KProperty1, function (receiver) {
      return _get_el__ndc0ck(receiver);
    }, null);
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (!properties_initialized_Elements_kt_gtqiqv) {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Sup = new ElementBuilderImplementation('sup');
      Sub = new ElementBuilderImplementation('sub');
      Blockquote = new ElementBuilderImplementation('blockquote');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = cssRules.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.u2c() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.dom.addRule.<anonymous>' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cssStyleRule = cssRule;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = cssRuleDeclaration.t2c().a2e().g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.la();
        var value = element.ma();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = cssRuleDeclaration.t2c().b2e().g();
      while (_iterator__ex2g4s_0.h()) {
        var element_0 = _iterator__ex2g4s_0.i();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.la();
        var value_0 = element_0.ma();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_1 = cssRuleDeclaration.i2d().g();
        while (_iterator__ex2g4s_1.h()) {
          var element_1 = _iterator__ex2g4s_1.i();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_2 = cssRuleDeclaration.w2c_1.g();
          while (_iterator__ex2g4s_2.h()) {
            var element_2 = _iterator__ex2g4s_2.i();
            // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value) {
    style.setProperty(name, toString(value));
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.u2c() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.dom.addRule.<anonymous>' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.u2c() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.dom.addRule.<anonymous>' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).z2b = tabIndex;
  protoOf(StyleScopeBuilder).s2d = property;
  protoOf(StyleScopeBuilder).t2d = property_0;
  protoOf(StyleScopeBuilder).y2d = variable;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.c2();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.f2e();
  });
  protoOf(StyleSheet).s2e = style_0;
  protoOf(StyleSheet).u2e = style;
  protoOf(StyleSheet).v2e = invoke;
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).w2e = get_hover;
  protoOf(CSSRulesHolderState).q2e = add;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Companion_instance_6 = new Companion_6();
  Companion_instance_7 = new Companion_7();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = StyleSheet_init_$Init$;
  _.$_$.b = StyleSheet_init_$Create$;
  _.$_$.c = Companion_instance_2;
  _.$_$.d = Companion_instance_3;
  _.$_$.e = From_getInstance;
  _.$_$.f = To_getInstance;
  _.$_$.g = Companion_instance_0;
  _.$_$.h = Companion_instance_4;
  _.$_$.i = Companion_instance_5;
  _.$_$.j = Companion_instance;
  _.$_$.k = Companion_instance_1;
  _.$_$.l = classes;
  _.$_$.m = tabIndex;
  _.$_$.n = AttrsScope;
  _.$_$.o = CSSBorder;
  _.$_$.p = CSSGroupingRuleDeclaration;
  _.$_$.q = CSSKeyframeRuleDeclaration;
  _.$_$.r = CSSKeyframesRuleDeclaration;
  _.$_$.s = MediaFeature;
  _.$_$.t = Raw;
  _.$_$.u = CSSMediaRuleDeclaration;
  _.$_$.v = property;
  _.$_$.w = property_0;
  _.$_$.x = variable;
  _.$_$.y = StyleScopeBuilder;
  _.$_$.z = StyleScope;
  _.$_$.a1 = StyleSheet;
  _.$_$.b1 = alignItems;
  _.$_$.c1 = alignSelf;
  _.$_$.d1 = backgroundColor;
  _.$_$.e1 = borderRadius;
  _.$_$.f1 = border;
  _.$_$.g1 = bottom;
  _.$_$.h1 = boxSizing;
  _.$_$.i1 = color;
  _.$_$.j1 = color_0;
  _.$_$.k1 = columnGap;
  _.$_$.l1 = get_cssRem;
  _.$_$.m1 = display;
  _.$_$.n1 = get_em;
  _.$_$.o1 = flexDirection;
  _.$_$.p1 = flexGrow;
  _.$_$.q1 = fontSize;
  _.$_$.r1 = get_fr;
  _.$_$.s1 = gap;
  _.$_$.t1 = gridArea;
  _.$_$.u1 = gridAutoColumns;
  _.$_$.v1 = gridAutoRows;
  _.$_$.w1 = gridTemplateColumns;
  _.$_$.x1 = gridTemplateRows;
  _.$_$.y1 = height;
  _.$_$.z1 = justifyContent;
  _.$_$.a2 = left;
  _.$_$.b2 = lineHeight;
  _.$_$.c2 = marginBottom;
  _.$_$.d2 = margin;
  _.$_$.e2 = media;
  _.$_$.f2 = minHeight;
  _.$_$.g2 = minWidth;
  _.$_$.h2 = get_ms;
  _.$_$.i2 = opacity;
  _.$_$.j2 = padding;
  _.$_$.k2 = get_percent;
  _.$_$.l2 = position;
  _.$_$.m2 = get_px;
  _.$_$.n2 = right;
  _.$_$.o2 = rowGap;
  _.$_$.p2 = style_1;
  _.$_$.q2 = top;
  _.$_$.r2 = unaryMinus;
  _.$_$.s2 = get_vh;
  _.$_$.t2 = width_0;
  _.$_$.u2 = width;
  _.$_$.v2 = Div_0;
  _.$_$.w2 = ElementBuilder;
  _.$_$.x2 = Img_0;
  _.$_$.y2 = Style_0;
  _.$_$.z2 = TagElement;
  _.$_$.a3 = Text_0;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
