(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './kobweb-frontend-browser-ext.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    globalThis['kobweb-frontend-compose-html-ext'] = factory(typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined' ? {} : globalThis['kobweb-frontend-compose-html-ext'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-html-core'], globalThis['kobweb-frontend-browser-ext'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.x6;
  var objectCreate = kotlin_kotlin.$_$.w6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var equals = kotlin_kotlin.$_$.y5;
  var hashCode = kotlin_kotlin.$_$.e6;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var initMetadataForClass = kotlin_kotlin.$_$.f6;
  var VOID = kotlin_kotlin.$_$.e;
  var initMetadataForCompanion = kotlin_kotlin.$_$.g6;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var joinToString = kotlin_kotlin.$_$.o3;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var toString = kotlin_kotlin.$_$.z6;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var copyToArray = kotlin_kotlin.$_$.b3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var lastOrNull = kotlin_kotlin.$_$.r3;
  var get_lastIndex = kotlin_kotlin.$_$.q3;
  var joinToString_0 = kotlin_kotlin.$_$.n3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.o9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var listOf = kotlin_kotlin.$_$.u3;
  var emptyList = kotlin_kotlin.$_$.d3;
  var addAll = kotlin_kotlin.$_$.s2;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var StyleSheet_init_$Create$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var CSSGroupingRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var listOfNotNull = kotlin_kotlin.$_$.t3;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var isNumber = kotlin_kotlin.$_$.p6;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var ensureNotNull = kotlin_kotlin.$_$.m9;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.b;
  var removeSuffix = kotlin_kotlin.$_$.g8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var charSequenceLength = kotlin_kotlin.$_$.v5;
  var charSequenceGet = kotlin_kotlin.$_$.u5;
  var isWhitespace = kotlin_kotlin.$_$.d8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var initMetadataForInterface = kotlin_kotlin.$_$.i6;
  var initMetadataForObject = kotlin_kotlin.$_$.k6;
  var toList = kotlin_kotlin.$_$.p4;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var isInterface = kotlin_kotlin.$_$.o6;
  var TagElement = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var to = kotlin_kotlin.$_$.u9;
  var lazy = kotlin_kotlin.$_$.n9;
  var charArrayOf = kotlin_kotlin.$_$.t5;
  var split = kotlin_kotlin.$_$.k8;
  var removeSurrounding = kotlin_kotlin.$_$.i8;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var KProperty1 = kotlin_kotlin.$_$.i7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c6;
  var Enum = kotlin_kotlin.$_$.y8;
  var toString_0 = kotlin_kotlin.$_$.s1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ComparableAttrsScope, 'ComparableAttrsScope', ComparableAttrsScope_init_$Create$, VOID, [AttrsScope]);
  initMetadataForClass(DummyAttrsScope, 'DummyAttrsScope', DummyAttrsScope, VOID, [AttrsScope]);
  initMetadataForClass(AlignItems, 'AlignItems');
  initMetadataForClass(AlignItemsPosition, 'AlignItemsPosition', VOID, AlignItems);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JustifyItems, 'JustifyItems');
  initMetadataForClass(JustifyItemsPosition, 'JustifyItemsPosition', VOID, JustifyItems);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JustifySelf, 'JustifySelf');
  initMetadataForClass(JustifySelfPosition, 'JustifySelfPosition', VOID, JustifySelf);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(BoxShadow, 'BoxShadow');
  initMetadataForClass(Repeatable, 'Repeatable', VOID, BoxShadow);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(BoxSizing, 'BoxSizing');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ColorScheme, 'ColorScheme');
  initMetadataForClass(ComparableStyleScope, 'ComparableStyleScope', ComparableStyleScope, VOID, [StyleScope]);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Cursor, 'Cursor');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(Appearance, 'Appearance');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(FontWeight, 'FontWeight');
  initMetadataForClass(GridTrackBuilderInRepeat, 'GridTrackBuilderInRepeat');
  initMetadataForClass(GridTrackBuilder, 'GridTrackBuilder', GridTrackBuilder, GridTrackBuilderInRepeat);
  initMetadataForClass(GridEntry, 'GridEntry');
  initMetadataForClass(TrackSize, 'TrackSize', VOID, GridEntry);
  initMetadataForClass(FitContent, 'FitContent', VOID, TrackSize);
  initMetadataForClass(MinMax, 'MinMax', VOID, TrackSize);
  initMetadataForClass(Flex, 'Flex', VOID, TrackSize);
  initMetadataForClass(Inflexible, 'Inflexible', VOID, TrackSize);
  initMetadataForClass(Keyword, 'Keyword', VOID, Inflexible);
  initMetadataForClass(Fixed, 'Fixed', VOID, Inflexible);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(Repeat, 'Repeat', VOID, GridEntry);
  initMetadataForClass(Track, 'Track', VOID, Repeat);
  initMetadataForClass(Auto, 'Auto', VOID, Repeat);
  initMetadataForClass(LineNames, 'LineNames', VOID, GridEntry);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(GridBuilderInAuto, 'GridBuilderInAuto');
  initMetadataForClass(GridBuilder, 'GridBuilder', GridBuilder, GridBuilderInAuto);
  initMetadataForClass(CSSLayerRuleDeclaration, 'CSSLayerRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(VerticalAlign, 'VerticalAlign');
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(ListStyleType, 'ListStyleType');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(ObjectFit, 'ObjectFit');
  initMetadataForClass(CSSOutline, 'CSSOutline');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(Overflow, 'Overflow');
  initMetadataForClass(StyleVariable, 'StyleVariable');
  initMetadataForClass(PropertyValue, 'PropertyValue', VOID, StyleVariable);
  initMetadataForClass(NumberValue, 'NumberValue', VOID, StyleVariable);
  initMetadataForClass(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider');
  initMetadataForClass(StyleVariableNumberProvider, 'StyleVariableNumberProvider');
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(UserSelect, 'UserSelect');
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(TextAlign, 'TextAlign');
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(WhiteSpace, 'WhiteSpace');
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(TextDecorationLine, 'TextDecorationLine');
  initMetadataForClass(Transition, 'Transition');
  initMetadataForClass(Repeatable_0, 'Repeatable', VOID, Transition);
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(TransitionProperty, 'TransitionProperty');
  initMetadataForClass(Name, 'Name', VOID, TransitionProperty);
  initMetadataForCompanion(Companion_19);
  function unaryMinus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(-1 * ' + toString(_this__u8e3s4) + ')';
  }
  initMetadataForInterface(CalcScope, 'CalcScope');
  initMetadataForObject(CalcScopeInstance, 'CalcScopeInstance', VOID, VOID, [CalcScope]);
  initMetadataForClass(ElementRefScope$RefCallback$Simple$invoke$$inlined$onDispose$1);
  initMetadataForClass(RefCallback, 'RefCallback');
  initMetadataForClass(Simple, 'Simple', VOID, RefCallback);
  initMetadataForClass(KeysToEffect, 'KeysToEffect');
  initMetadataForClass(Builder, 'Builder', Builder);
  initMetadataForClass(ElementRefScope, 'ElementRefScope');
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(GenericNamespacedElementBuilder, 'GenericNamespacedElementBuilder', VOID, VOID, [ElementBuilder]);
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(GenericElementBuilder, 'GenericElementBuilder', VOID, VOID, [ElementBuilder]);
  initMetadataForCompanion(Companion_22);
  initMetadataForClass(ViewBox, 'ViewBox');
  initMetadataForCompanion(Companion_23);
  initMetadataForClass(SVGElementAttrsScope, 'SVGElementAttrsScope', VOID, VOID, [AttrsScope]);
  function stroke(value) {
    return this.v2b('stroke', value.toString());
  }
  function strokeLineCap(value) {
    return this.v2b('stroke-linecap', value.toString());
  }
  function strokeMiterLimit(value) {
    return this.v2b('stroke-miterlimit', toString(value));
  }
  function strokeWidth(value) {
    return this.v2b('stroke-width', toString(value));
  }
  function fill(value) {
    return this.v2b('fill', value.toString());
  }
  initMetadataForInterface(PresentationAttrs, 'PresentationAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGGraphicalElementAttrsScope, 'SVGGraphicalElementAttrsScope', VOID, SVGElementAttrsScope, [SVGElementAttrsScope, PresentationAttrs]);
  initMetadataForClass(SVGContainerElementAttrsScope, 'SVGContainerElementAttrsScope', VOID, SVGGraphicalElementAttrsScope);
  function width_0(value) {
    this.v2b('width', toString(value));
  }
  initMetadataForInterface(LengthAttrs, 'LengthAttrs', VOID, VOID, [AttrsScope]);
  function viewBox(x, y, width, height) {
    this.v2b('viewBox', toString(x) + ' ' + toString(y) + ' ' + toString(width) + ' ' + toString(height));
  }
  initMetadataForInterface(ViewBoxAttrs, 'ViewBoxAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGSvgAttrsScope, 'SVGSvgAttrsScope', VOID, SVGContainerElementAttrsScope, [SVGContainerElementAttrsScope, AttrsScope, LengthAttrs, ViewBoxAttrs]);
  initMetadataForCompanion(Companion_24);
  initMetadataForClass(SVGPathAttrsScope, 'SVGPathAttrsScope', VOID, SVGGraphicalElementAttrsScope);
  initMetadataForClass(SVGStrokeLineCap, 'SVGStrokeLineCap', VOID, Enum);
  initMetadataForCompanion(Companion_25);
  function cx(value) {
    this.v2b('cx', toString(value));
  }
  function cy(value) {
    this.v2b('cy', toString(value));
  }
  initMetadataForInterface(CenterCoordinateAttrs, 'CenterCoordinateAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGCircleAttrsScope, 'SVGCircleAttrsScope', VOID, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, CenterCoordinateAttrs]);
  initMetadataForClass(SVGFillType, 'SVGFillType', VOID, Enum);
  initMetadataForClass(SVGStrokeType, 'SVGStrokeType', VOID, Enum);
  //endregion
  var com_varabyte_kobweb_compose_attributes_ComparableAttrsScope$stable;
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.d2g_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.e2g_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.f2g_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.g2g_1 = LinkedHashSet_init_$Create$();
    this.h2g_1 = null;
  }
  protoOf(ComparableAttrsScope).v2b = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.e2g_1.v4(attr, value);
    this.d2g_1.v2b(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).x2b = function (classes) {
    this.f2g_1.n(classes);
  };
  protoOf(ComparableAttrsScope).w2b = function (builder) {
    var tmp0_elvis_lhs = this.h2g_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.h2g_1 = style;
    this.d2g_1.w2b(builder);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.e2g_1, this.e2g_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.f2g_1, this.f2g_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.g2g_1, this.g2g_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.h2g_1, this.h2g_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.e2g_1);
    result = imul(31, result) + hashCode(this.f2g_1) | 0;
    result = imul(31, result) + hashCode(this.g2g_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.h2g_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).v2b = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).x2b = function (classes) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).w2b = function (builder) {
    return Unit_instance;
  };
  var com_varabyte_kobweb_compose_attributes_SyntheticEventListener$stable;
  var com_varabyte_kobweb_compose_attributes_TransitionEventListener$stable;
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.v2b('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.v2b('aria-disabled', value.toString());
  }
  var com_varabyte_kobweb_compose_css_AlignContent_AlignContentPosition$stable;
  var com_varabyte_kobweb_compose_css_AlignContent$stable;
  var com_varabyte_kobweb_compose_css_AlignItems_AlignItemsPosition$stable;
  var com_varabyte_kobweb_compose_css_AlignItems$stable;
  var com_varabyte_kobweb_compose_css_AlignSelf_AlignSelfPosition$stable;
  var com_varabyte_kobweb_compose_css_AlignSelf$stable;
  var com_varabyte_kobweb_compose_css_JustifyContent_JustifyContentPosition$stable;
  var com_varabyte_kobweb_compose_css_JustifyContent$stable;
  var com_varabyte_kobweb_compose_css_JustifyItems_JustifyItemsPosition$stable;
  var com_varabyte_kobweb_compose_css_JustifyItems$stable;
  var com_varabyte_kobweb_compose_css_JustifySelf_JustifySelfPosition$stable;
  var com_varabyte_kobweb_compose_css_JustifySelf$stable;
  function AlignItemsPosition(value) {
    AlignItems.call(this, value);
  }
  function Companion() {
  }
  protoOf(Companion).i2g = function () {
    return new AlignItemsPosition('center');
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function AlignItems(value) {
    this.j2g_1 = value;
  }
  protoOf(AlignItems).toString = function () {
    return this.j2g_1;
  };
  function alignItems(_this__u8e3s4, alignItems) {
    _this__u8e3s4.x2d('align-items', alignItems);
  }
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.x2d('justify-items', justifyItems);
  }
  function JustifyItemsPosition(value) {
    JustifyItems.call(this, value);
  }
  function Companion_0() {
  }
  protoOf(Companion_0).i2g = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion_0).k2g = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion_0).l2g = function () {
    return new JustifyItemsPosition('end');
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function JustifyItems(value) {
    this.m2g_1 = value;
  }
  protoOf(JustifyItems).toString = function () {
    return this.m2g_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.x2d('justify-self', justifySelf);
  }
  function JustifySelfPosition(value) {
    JustifySelf.call(this, value);
  }
  function Companion_1() {
  }
  protoOf(Companion_1).i2g = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_1).k2g = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_1).l2g = function () {
    return new JustifySelfPosition('end');
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function JustifySelf(value) {
    this.n2g_1 = value;
  }
  protoOf(JustifySelf).toString = function () {
    return this.n2g_1;
  };
  var com_varabyte_kobweb_compose_css_Animation_Repeatable$stable;
  var com_varabyte_kobweb_compose_css_Animation$stable;
  var com_varabyte_kobweb_compose_css_BackgroundAttachment$stable;
  var com_varabyte_kobweb_compose_css_BackgroundClip$stable;
  var com_varabyte_kobweb_compose_css_BackgroundColor$stable;
  var com_varabyte_kobweb_compose_css_BackgroundOrigin$stable;
  var com_varabyte_kobweb_compose_css_BackgroundPosition$stable;
  var com_varabyte_kobweb_compose_css_BackgroundRepeat_RepeatStyle$stable;
  var com_varabyte_kobweb_compose_css_BackgroundRepeat$stable;
  var com_varabyte_kobweb_compose_css_BackgroundSize$stable;
  var com_varabyte_kobweb_compose_css_Background_Repeatable$stable;
  var com_varabyte_kobweb_compose_css_Background$stable;
  var com_varabyte_kobweb_compose_css_BorderCollapse$stable;
  var com_varabyte_kobweb_compose_css_BorderImageNumericBuilder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageSlice_Builder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageSlice$stable;
  var com_varabyte_kobweb_compose_css_BorderImageWidth_Builder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageWidth$stable;
  var com_varabyte_kobweb_compose_css_BorderImageOutset_Builder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageOutset$stable;
  var com_varabyte_kobweb_compose_css_BorderImageRepeat_Repeatable$stable;
  var com_varabyte_kobweb_compose_css_BorderImageRepeat$stable;
  var com_varabyte_kobweb_compose_css_BorderImage$stable;
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderLeft(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderLeft_0(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.x2d('border-color', color);
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.s2d('border-style', lineStyle);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.x2d('border-width', width);
  }
  function borderTop(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderTop_0(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderBottom_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.x2d('border-bottom', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.x2d('border-left', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.x2d('border-top', this_0);
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$borderBottom) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.compose.css.borderBottom.<anonymous>.<anonymous>' call
        width($this$borderBottom, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.compose.css.borderBottom.<anonymous>.<anonymous>' call
        style($this$borderBottom, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.compose.css.borderBottom.<anonymous>.<anonymous>' call
        color($this$borderBottom, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$borderLeft) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.compose.css.borderLeft.<anonymous>.<anonymous>' call
        width($this$borderLeft, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.compose.css.borderLeft.<anonymous>.<anonymous>' call
        style($this$borderLeft, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.compose.css.borderLeft.<anonymous>.<anonymous>' call
        color($this$borderLeft, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$borderTop) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.compose.css.borderTop.<anonymous>.<anonymous>' call
        width($this$borderTop, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.compose.css.borderTop.<anonymous>.<anonymous>' call
        style($this$borderTop, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.compose.css.borderTop.<anonymous>.<anonymous>' call
        color($this$borderTop, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_css_BoxDecorationBreak$stable;
  var com_varabyte_kobweb_compose_css_BoxSizing$stable;
  var com_varabyte_kobweb_compose_css_BoxShadow_Repeatable$stable;
  var com_varabyte_kobweb_compose_css_BoxShadow$stable;
  function Repeatable(offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'com.varabyte.kobweb.compose.css.Repeatable.<init>.<anonymous>' call
    if (inset) {
      this_0.a8('inset');
      this_0.b8(_Char___init__impl__6a9atx(32));
    }
    this_0.z7(offsetX);
    this_0.b8(_Char___init__impl__6a9atx(32));
    this_0.z7(offsetY);
    if (!(blurRadius == null)) {
      this_0.b8(_Char___init__impl__6a9atx(32));
      this_0.z7(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.b8(_Char___init__impl__6a9atx(32));
        this_0.b8(_Char___init__impl__6a9atx(48));
      }
      this_0.b8(_Char___init__impl__6a9atx(32));
      this_0.z7(spreadRadius);
    }
    if (!(color == null)) {
      this_0.b8(_Char___init__impl__6a9atx(32));
      this_0.z7(color);
    }
    var tmp$ret$1 = this_0.toString();
    BoxShadow.call(this, tmp$ret$1);
  }
  function Companion_2() {
  }
  protoOf(Companion_2).o2g = function (offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    return new Repeatable(offsetX, offsetY, blurRadius, spreadRadius, color, inset);
  };
  protoOf(Companion_2).p2g = function (offsetX, offsetY, blurRadius, spreadRadius, color, inset, $super) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    return $super === VOID ? this.o2g(offsetX, offsetY, blurRadius, spreadRadius, color, inset) : $super.o2g.call(this, offsetX, offsetY, blurRadius, spreadRadius, color, inset);
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function BoxShadow(value) {
    this.q2g_1 = value;
  }
  protoOf(BoxShadow).toString = function () {
    return this.q2g_1;
  };
  function Companion_3() {
  }
  protoOf(Companion_3).r2g = function () {
    return new BoxSizing('content-box');
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function BoxSizing(value) {
    this.s2g_1 = value;
  }
  protoOf(BoxSizing).toString = function () {
    return this.s2g_1;
  };
  function boxShadow(_this__u8e3s4, boxShadows) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(boxShadows.length === 0)) {
      boxShadow_0(_this__u8e3s4, joinToString(boxShadows, VOID, VOID, VOID, VOID, VOID, BoxShadow$toString$ref()));
    }
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.s2d('box-shadow', value);
  }
  function BoxShadow$toString$ref() {
    var l = function (p0) {
      return p0.toString();
    };
    l.callableName = 'toString';
    return l;
  }
  var com_varabyte_kobweb_compose_css_Edge$stable;
  var com_varabyte_kobweb_compose_css_EdgeXOrCenter$stable;
  var com_varabyte_kobweb_compose_css_EdgeX$stable;
  var com_varabyte_kobweb_compose_css_CenterX$stable;
  var com_varabyte_kobweb_compose_css_EdgeXOffset$stable;
  var com_varabyte_kobweb_compose_css_EdgeYOrCenter$stable;
  var com_varabyte_kobweb_compose_css_EdgeY$stable;
  var com_varabyte_kobweb_compose_css_CenterY$stable;
  var com_varabyte_kobweb_compose_css_EdgeYOffset$stable;
  var com_varabyte_kobweb_compose_css_CSSPosition$stable;
  var com_varabyte_kobweb_compose_css_AccentColor$stable;
  var com_varabyte_kobweb_compose_css_ColorScheme$stable;
  var com_varabyte_kobweb_compose_css_CSSColor$stable;
  function Companion_4() {
  }
  protoOf(Companion_4).t2g = function () {
    return new ColorScheme('light');
  };
  protoOf(Companion_4).u2g = function () {
    return new ColorScheme('dark');
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function ColorScheme(value) {
    this.v2g_1 = value;
  }
  protoOf(ColorScheme).toString = function () {
    return this.v2g_1;
  };
  function colorScheme(_this__u8e3s4, colorScheme) {
    _this__u8e3s4.x2d('color-scheme', colorScheme);
  }
  var com_varabyte_kobweb_compose_css_ComparableStyleScope$stable;
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.w2g_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.x2g_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ComparableStyleScope).x2d = function (propertyName, value) {
    var tmp0 = this.w2g_1;
    // Inline function 'kotlin.collections.set' call
    var value_0 = toString(value);
    tmp0.v4(propertyName, value_0);
  };
  protoOf(ComparableStyleScope).z2d = function (variableName, value) {
    var tmp0 = this.x2g_1;
    // Inline function 'kotlin.collections.set' call
    var value_0 = toString(value);
    tmp0.v4(variableName, value_0);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.w2g_1, other.w2g_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.x2g_1, other.x2g_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.w2g_1);
    result = imul(31, result) + hashCode(this.x2g_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.w2g_1.q()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.x2g_1.q();
    }
    return tmp;
  }
  var com_varabyte_kobweb_compose_css_Cursor$stable;
  function Companion_5() {
  }
  protoOf(Companion_5).y2g = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_5).z2g = function () {
    return new Cursor('not-allowed');
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function Cursor(value) {
    this.a2h_1 = value;
  }
  protoOf(Cursor).toString = function () {
    return this.a2h_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.x2d('cursor', cursor);
  }
  var com_varabyte_kobweb_compose_css_Filter$stable;
  var com_varabyte_kobweb_compose_css_Appearance$stable;
  var com_varabyte_kobweb_compose_css_Content_Restricted$stable;
  var com_varabyte_kobweb_compose_css_Content_Unrestricted$stable;
  var com_varabyte_kobweb_compose_css_Content$stable;
  function Companion_6() {
  }
  protoOf(Companion_6).b2h = function () {
    return new Appearance('none');
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function Appearance(value) {
    this.c2h_1 = value;
  }
  protoOf(Appearance).toString = function () {
    return this.c2h_1;
  };
  function appearance(_this__u8e3s4, appearance) {
    _this__u8e3s4.x2d('appearance', appearance);
  }
  var com_varabyte_kobweb_compose_css_FlexBasis$stable;
  var com_varabyte_kobweb_compose_css_FontOpticalSizing$stable;
  var com_varabyte_kobweb_compose_css_FontStyle$stable;
  var com_varabyte_kobweb_compose_css_FontVariantAlternates_ListableValue$stable;
  var com_varabyte_kobweb_compose_css_FontVariantAlternates$stable;
  var com_varabyte_kobweb_compose_css_FontVariantCaps$stable;
  var com_varabyte_kobweb_compose_css_FontVariantEastAsian_ListableKeyword$stable;
  var com_varabyte_kobweb_compose_css_FontVariantEastAsian$stable;
  var com_varabyte_kobweb_compose_css_FontVariantEmoji$stable;
  var com_varabyte_kobweb_compose_css_FontVariantLigatures_ListableKeyword$stable;
  var com_varabyte_kobweb_compose_css_FontVariantLigatures$stable;
  var com_varabyte_kobweb_compose_css_FontVariantNumeric_ListableKeyword$stable;
  var com_varabyte_kobweb_compose_css_FontVariantNumeric$stable;
  var com_varabyte_kobweb_compose_css_FontVariantPosition$stable;
  var com_varabyte_kobweb_compose_css_FontVariationSettings_Axis$stable;
  var com_varabyte_kobweb_compose_css_FontVariationSettings_Axes$stable;
  var com_varabyte_kobweb_compose_css_FontVariationSettings$stable;
  var com_varabyte_kobweb_compose_css_FontWeight$stable;
  var com_varabyte_kobweb_compose_css_FontSize$stable;
  function Companion_7() {
  }
  protoOf(Companion_7).d2h = function () {
    return new FontWeight('500');
  };
  protoOf(Companion_7).e2h = function () {
    return new FontWeight('600');
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function FontWeight(value) {
    this.f2h_1 = value;
  }
  protoOf(FontWeight).toString = function () {
    return this.f2h_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.x2d('font-weight', weight);
  }
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_FitContent$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_MinMax$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Flex$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Inflexible$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Keyword$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Fixed$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat_Track$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat_Auto$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_LineNames$stable;
  var com_varabyte_kobweb_compose_css_GridEntry$stable;
  var com_varabyte_kobweb_compose_css_GridTrackBuilderInRepeat$stable;
  var com_varabyte_kobweb_compose_css_GridTrackBuilder$stable;
  var com_varabyte_kobweb_compose_css_GridAuto$stable;
  var com_varabyte_kobweb_compose_css_GridTemplate_Subgrid_Builder$stable;
  var com_varabyte_kobweb_compose_css_GridTemplate_Subgrid$stable;
  var com_varabyte_kobweb_compose_css_GridTemplate$stable;
  var com_varabyte_kobweb_compose_css_GridBuilderInAuto$stable;
  var com_varabyte_kobweb_compose_css_GridBuilder$stable;
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
  }
  protoOf(GridTrackBuilder).h2h = function (count, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this_0.i2h_1;
    var repeatTracks = copyToArray(this_1);
    this.i2h_1.e(Companion_instance_10.j2h(count, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.i2h_1 = ArrayList_init_$Create$();
  }
  protoOf(GridTrackBuilderInRepeat).k2h = function (track) {
    this.i2h_1.e(track);
  };
  protoOf(GridTrackBuilderInRepeat).l2h = function (value) {
    return this.k2h(Companion_instance_9.o2h(value));
  };
  protoOf(GridTrackBuilderInRepeat).m2h = function (min, max) {
    return this.k2h(Companion_instance_9.p2h(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).n2h = function (min, max) {
    return this.m2h(Companion_instance_9.q2h(min), Companion_instance_9.o2h(max));
  };
  function FitContent() {
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min.toString() + ', ' + max.toString() + ')');
    this.s2h_1 = min;
    this.t2h_1 = max;
  }
  function Flex(value) {
    TrackSize.call(this, toString(value));
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
  }
  function Keyword() {
  }
  function Fixed(value) {
    Inflexible.call(this, toString(value));
  }
  function Companion_8() {
  }
  protoOf(Companion_8).q2h = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_8).o2h = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_8).p2h = function (min, max) {
    return new MinMax(min, max);
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
  }
  function Auto() {
  }
  function TrackSize(value) {
    GridEntry.call(this, value);
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString(entries) + ')');
    this.v2h_1 = entries;
  }
  function LineNames(names) {
    GridEntry.call(this, joinToString(names, ' ', '[', ']'));
    this.x2h_1 = names;
  }
  function Companion_9() {
  }
  protoOf(Companion_9).j2h = function (count, entries) {
    return new Track(count, entries.slice());
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function GridEntry(value) {
    this.y2h_1 = value;
  }
  protoOf(GridEntry).toString = function () {
    return this.y2h_1;
  };
  function toTrackListString(_this__u8e3s4) {
    validate(_this__u8e3s4);
    // Inline function 'kotlin.collections.mutableListOf' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.toTrackListString.<anonymous>' call
      var acc = accumulator;
      var prev = lastOrNull(acc);
      var tmp;
      if (prev instanceof LineNames) {
        tmp = element instanceof LineNames;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp_0 = get_lastIndex(acc);
        var tmp0 = prev.x2h_1;
        // Inline function 'kotlin.collections.plus' call
        var elements = element.x2h_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = tmp0.concat(elements);
        acc.x1(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.e(element);
      }
      accumulator = acc;
    }
    var tmp$ret$4 = accumulator;
    return joinToString_0(tmp$ret$4, ' ');
  }
  function validate(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var tmp;
      if (element instanceof LineNames) {
        tmp = emptyList();
      } else {
        if (element instanceof TrackSize) {
          tmp = listOf(element);
        } else {
          if (element instanceof Repeat) {
            // Inline function 'kotlin.collections.filterIsInstance' call
            var tmp0 = element.v2h_1;
            // Inline function 'kotlin.collections.filterIsInstanceTo' call
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = tmp0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = tmp0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.e(element_0);
              }
            }
            // Inline function 'kotlin.collections.ifEmpty' call
            var tmp_0;
            if (destination_0.q()) {
              var message = 'repeat() must contain at least one track size';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = destination_0;
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var list = tmp;
      addAll(destination, list);
    }
    var trackSizes = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.check' call
    if (!!trackSizes.q()) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_0 = 'You must specify at least one track size';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var inductionVariable_1 = 0;
    var last_1 = _this__u8e3s4.length;
    while (inductionVariable_1 < last_1) {
      var element_1 = _this__u8e3s4[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (element_1 instanceof Auto) {
        count = count + 1 | 0;
      }
    }
    var autoRepeatCount = count;
    if (autoRepeatCount === 0)
      return Unit_instance;
    // Inline function 'kotlin.check' call
    if (!(autoRepeatCount === 1)) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_1 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = trackSizes.g();
    while (_iterator__ex2g4s.h()) {
      var element_2 = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (!(element_2 instanceof Fixed)) {
        if (element_2 instanceof Flex) {
          // Inline function 'kotlin.error' call
          var message_2 = 'Cannot use flex values with auto-repeat';
          throw IllegalStateException_init_$Create$(toString(message_2));
        } else {
          if (element_2 instanceof Keyword) {
            // Inline function 'kotlin.error' call
            var message_3 = 'Cannot use keywords with auto-repeat';
            throw IllegalStateException_init_$Create$(toString(message_3));
          } else {
            if (element_2 instanceof FitContent) {
              // Inline function 'kotlin.error' call
              var message_4 = 'Cannot use fit-content with auto-repeat';
              throw IllegalStateException_init_$Create$(toString(message_4));
            } else {
              if (element_2 instanceof MinMax) {
                var tmp_1;
                var tmp_2 = element_2.s2h_1;
                if (tmp_2 instanceof Fixed) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element_2.t2h_1;
                  tmp_1 = tmp_3 instanceof Fixed;
                }
                // Inline function 'kotlin.check' call
                if (!tmp_1) {
                  // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
                  var message_5 = 'Cannot use minmax with auto-repeat unless at least one of the values is a fixed value (a length or percentage)';
                  throw IllegalStateException_init_$Create$(toString(message_5));
                }
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
  }
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    gridTemplateColumns(_this__u8e3s4, toTrackListString_0(this_0.i2h_1));
  }
  function toTrackListString_0(_this__u8e3s4) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(_this__u8e3s4);
    return toTrackListString(tmp$ret$0);
  }
  function grid(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    block(this_0);
    this_0.c2i(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
  }
  function GridBuilderInAuto() {
    this.z2h_1 = null;
    this.a2i_1 = null;
    this.b2i_1 = null;
  }
  protoOf(GridBuilderInAuto).d2i = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    tmp.z2h_1 = this_0.i2h_1;
  };
  protoOf(GridBuilderInAuto).e2i = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    tmp.a2i_1 = this_0.i2h_1;
  };
  protoOf(GridBuilderInAuto).c2i = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.z2h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      gridTemplateColumns(scope, toTrackListString_0(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.a2i_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      gridTemplateRows(scope, toTrackListString_0(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.b2i_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.z2h_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>.<anonymous>' call
        gridAutoColumns(scope, toTrackListString_0(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.a2i_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>.<anonymous>' call
        gridAutoRows(scope, toTrackListString_0(tmp1_safe_receiver_0));
        tmp = Unit_instance;
      }
    }
  };
  var com_varabyte_kobweb_compose_css_CaretColor$stable;
  var com_varabyte_kobweb_compose_css_TouchAction_PanHorizontal$stable;
  var com_varabyte_kobweb_compose_css_TouchAction_PanVertical$stable;
  var com_varabyte_kobweb_compose_css_TouchAction_PanGroup$stable;
  var com_varabyte_kobweb_compose_css_TouchAction_PanHoriz$stable;
  var com_varabyte_kobweb_compose_css_TouchAction_PanVert$stable;
  var com_varabyte_kobweb_compose_css_TouchAction$stable;
  var com_varabyte_kobweb_compose_css_CSSLayerRuleDeclaration$stable;
  function layer(_this__u8e3s4, name, rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    var rules = this_0.p2e();
    _this__u8e3s4.e2d(new CSSLayerRuleDeclaration(name, rules));
  }
  function CSSLayerRuleDeclaration(name, rules) {
    this.f2i_1 = name;
    this.g2i_1 = rules;
  }
  protoOf(CSSLayerRuleDeclaration).i2d = function () {
    return this.g2i_1;
  };
  protoOf(CSSLayerRuleDeclaration).u2c = function () {
    return '@layer ' + this.f2i_1;
  };
  protoOf(CSSLayerRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSLayerRuleDeclaration) {
      tmp = (this.f2i_1 === other.f2i_1 && equals(this.g2i_1, other.g2i_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  var com_varabyte_kobweb_compose_css_AspectRatio$stable;
  var com_varabyte_kobweb_compose_css_Clear$stable;
  var com_varabyte_kobweb_compose_css_LineHeight$stable;
  var com_varabyte_kobweb_compose_css_Resize$stable;
  var com_varabyte_kobweb_compose_css_VerticalAlign$stable;
  function Companion_10() {
  }
  protoOf(Companion_10).h2i = function () {
    return new VerticalAlign('middle');
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function VerticalAlign(value) {
    this.i2i_1 = value;
  }
  protoOf(VerticalAlign).toString = function () {
    return this.i2i_1;
  };
  function marginBlock(_this__u8e3s4, both) {
    _this__u8e3s4.x2d('margin-block', both);
  }
  function marginBlockEnd(_this__u8e3s4, value) {
    _this__u8e3s4.x2d('margin-block-end', value);
  }
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.x2d('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    _this__u8e3s4.s2d('padding-inline', toString(start) + ' ' + toString(end));
  }
  var com_varabyte_kobweb_compose_css_ListStyleType$stable;
  var com_varabyte_kobweb_compose_css_ListStylePosition$stable;
  function Companion_11() {
  }
  protoOf(Companion_11).b2h = function () {
    return new ListStyleType('none');
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function ListStyleType(value) {
    this.j2i_1 = value;
  }
  protoOf(ListStyleType).toString = function () {
    return this.j2i_1;
  };
  function listStyle(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.compose.css.listStyle.<anonymous>' call
      _this__u8e3s4.x2d('list-style-type', type);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.compose.css.listStyle.<anonymous>' call
      _this__u8e3s4.x2d('list-style-position', position);
    }
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.compose.css.listStyle.<anonymous>' call
      _this__u8e3s4.x2d('list-style-image', image);
    }
  }
  var com_varabyte_kobweb_compose_css_CSSMargin$stable;
  var com_varabyte_kobweb_compose_css_ObjectFit$stable;
  var com_varabyte_kobweb_compose_css_MixBlendMode$stable;
  function Companion_12() {
  }
  protoOf(Companion_12).k2i = function () {
    return new ObjectFit('scale-down');
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    return Companion_instance_13;
  }
  function ObjectFit(value) {
    this.l2i_1 = value;
  }
  protoOf(ObjectFit).toString = function () {
    return this.l2i_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.x2d('object-fit', objectFit);
  }
  var com_varabyte_kobweb_compose_css_CSSOutline$stable;
  var com_varabyte_kobweb_compose_css_OutlineColor$stable;
  var com_varabyte_kobweb_compose_css_OutlineWidth$stable;
  function outline(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    outline_0(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline_0(_this__u8e3s4, outlineBuilder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSOutline();
    outlineBuilder(this_0);
    _this__u8e3s4.x2d('outline', this_0);
  }
  function CSSOutline() {
    this.m2i_1 = null;
    this.n2i_1 = null;
    this.o2i_1 = null;
  }
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.m2i_1, other.m2i_1) && equals(this.n2i_1, other.n2i_1) && equals(this.o2i_1, other.o2i_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.o2i_1, this.n2i_1, this.m2i_1]);
    return joinToString_0(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.m2i_1 = $width;
      $this$outline.n2i_1 = $style;
      $this$outline.o2i_1 = $color;
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_css_Overflow$stable;
  var com_varabyte_kobweb_compose_css_OverflowWrap$stable;
  function Companion_13() {
  }
  protoOf(Companion_13).p2i = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_13).q2i = function () {
    return new Overflow('auto');
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function Overflow(value) {
    this.r2i_1 = value;
  }
  protoOf(Overflow).toString = function () {
    return this.r2i_1;
  };
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.x2d('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.x2d('overflow', overflow);
  }
  var com_varabyte_kobweb_compose_css_PointerEvents$stable;
  var com_varabyte_kobweb_compose_css_Bottom$stable;
  var com_varabyte_kobweb_compose_css_Top$stable;
  var com_varabyte_kobweb_compose_css_Left$stable;
  var com_varabyte_kobweb_compose_css_Right$stable;
  var com_varabyte_kobweb_compose_css_CSSFloat$stable;
  var com_varabyte_kobweb_compose_css_OverscrollBehavior_SingleValue$stable;
  var com_varabyte_kobweb_compose_css_OverscrollBehavior_RepeatableValue$stable;
  var com_varabyte_kobweb_compose_css_OverscrollBehavior$stable;
  var com_varabyte_kobweb_compose_css_ScrollBehavior$stable;
  var com_varabyte_kobweb_compose_css_ScrollSnapType_Axis$stable;
  var com_varabyte_kobweb_compose_css_ScrollSnapType$stable;
  var com_varabyte_kobweb_compose_css_ScrollSnapAlign_Alignment$stable;
  var com_varabyte_kobweb_compose_css_ScrollSnapAlign$stable;
  var com_varabyte_kobweb_compose_css_ScrollSnapStop$stable;
  var com_varabyte_kobweb_compose_css_Width$stable;
  var com_varabyte_kobweb_compose_css_Height$stable;
  var com_varabyte_kobweb_compose_css_MaxWidth$stable;
  var com_varabyte_kobweb_compose_css_MaxHeight$stable;
  var com_varabyte_kobweb_compose_css_Isolation$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable_PropertyValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable_NumberValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable_StringValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable$stable;
  var com_varabyte_kobweb_compose_css_StyleVariablePropertyProvider$stable;
  var com_varabyte_kobweb_compose_css_StyleVariableNumberProvider$stable;
  var com_varabyte_kobweb_compose_css_StyleVariableStringProvider$stable;
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
  }
  protoOf(PropertyValue).u2i = function (fallback) {
    return this.x2i(fallback);
  };
  protoOf(PropertyValue).y2i = function (fallback) {
    return this.u2i((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
  };
  function NumberValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.<init>.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable.call(this, name, tmp, prefix);
  }
  protoOf(NumberValue).c2j = function (fallback) {
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.value.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.x2i(tmp);
  };
  protoOf(NumberValue).y2i = function (fallback) {
    return this.c2j((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.v2i_1 = defaultFallback;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.name.<anonymous>' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.w2i_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
  }
  protoOf(StyleVariable).z2i = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.y2i(fallback) : $super.y2i.call(this, fallback);
  };
  protoOf(StyleVariable).x2i = function (fallback) {
    var tmp1_safe_receiver = fallback == null ? this.v2i_1 : fallback;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.variableValue.<anonymous>' call
      tmp = ', ' + toString(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp;
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'var(--' + this.w2i_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.d2j_1 = defaultFallback;
    this.e2j_1 = prefix;
  }
  protoOf(StyleVariablePropertyProvider).f2j = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.d2j_1, this.e2j_1);
  };
  function StyleVariable_0(prefix) {
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(null, prefix);
  }
  function StyleVariable_1(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariable_2(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.g2j_1 = defaultFallback;
    this.h2j_1 = prefix;
  }
  protoOf(StyleVariableNumberProvider).f2j = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.g2j_1, this.h2j_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'com.varabyte.kobweb.compose.css.provideVariableName.<anonymous>' call
    if (!(groupObject == null)) {
      this_0.a8(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).na())), '-vars'), '-variables'));
      this_0.b8(_Char___init__impl__6a9atx(45));
    }
    this_0.a8(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.x2d('--' + variable.w2i_1, value);
  }
  var com_varabyte_kobweb_compose_css_CaptionSide$stable;
  var com_varabyte_kobweb_compose_css_TextAlign$stable;
  var com_varabyte_kobweb_compose_css_TextDecorationLine$stable;
  var com_varabyte_kobweb_compose_css_TextOverflow$stable;
  var com_varabyte_kobweb_compose_css_TextShadow$stable;
  var com_varabyte_kobweb_compose_css_CSSTextShadow$stable;
  var com_varabyte_kobweb_compose_css_TextTransform$stable;
  var com_varabyte_kobweb_compose_css_UserSelect$stable;
  var com_varabyte_kobweb_compose_css_WhiteSpace$stable;
  var com_varabyte_kobweb_compose_css_WordBreak$stable;
  var com_varabyte_kobweb_compose_css_WritingMode$stable;
  function Companion_14() {
  }
  protoOf(Companion_14).b2h = function () {
    return new UserSelect('none');
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  function UserSelect(value) {
    this.i2j_1 = value;
  }
  protoOf(UserSelect).toString = function () {
    return this.i2j_1;
  };
  function Companion_15() {
  }
  protoOf(Companion_15).k2g = function () {
    return new TextAlign('start');
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function TextAlign(value) {
    this.j2j_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return this.j2j_1;
  };
  function Companion_16() {
  }
  protoOf(Companion_16).k2j = function () {
    return new WhiteSpace('nowrap');
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    return Companion_instance_17;
  }
  function WhiteSpace(value) {
    this.l2j_1 = value;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.l2j_1;
  };
  function Companion_17() {
  }
  protoOf(Companion_17).m2j = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_17).b2h = function () {
    return new TextDecorationLine('none');
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    return Companion_instance_18;
  }
  function TextDecorationLine(value) {
    this.n2j_1 = value;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.n2j_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.x2d('user-select', userSelect);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.x2d('text-align', textAlign);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.x2d('white-space', whiteSpace);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.s2d('text-decoration-line', joinToString(textDecorationLines, ' '));
  }
  var com_varabyte_kobweb_compose_css_TransformBox$stable;
  var com_varabyte_kobweb_compose_css_TransformOrigin$stable;
  var com_varabyte_kobweb_compose_css_TransformStyle$stable;
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.x2d('translate', tx);
  }
  var com_varabyte_kobweb_compose_css_TransitionBehavior$stable;
  var com_varabyte_kobweb_compose_css_TransitionProperty_Name$stable;
  var com_varabyte_kobweb_compose_css_TransitionProperty$stable;
  var com_varabyte_kobweb_compose_css_TransitionDuration$stable;
  var com_varabyte_kobweb_compose_css_TransitionDelay$stable;
  var com_varabyte_kobweb_compose_css_Transition_Repeatable$stable;
  var com_varabyte_kobweb_compose_css_Transition$stable;
  function Repeatable_0(property, duration, timingFunction, delay, behavior) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'com.varabyte.kobweb.compose.css.Repeatable.<init>.<anonymous>' call
    this_0.e(property.toString());
    if (duration == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.compose.css.Repeatable.<init>.<anonymous>.<anonymous>' call
      this_0.e(toString(duration));
    }
    if (timingFunction == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.compose.css.Repeatable.<init>.<anonymous>.<anonymous>' call
      this_0.e(toString(timingFunction));
    }
    if (!(delay == null)) {
      if (duration == null) {
        this_0.e('0s');
      }
      this_0.e(toString(delay));
    }
    if (behavior == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.compose.css.Repeatable.<init>.<anonymous>.<anonymous>' call
      this_0.e(behavior.toString());
    }
    var tmp$ret$7 = this_0.d5();
    Transition.call(this, joinToString_0(tmp$ret$7, ' '));
  }
  function Companion_18() {
  }
  protoOf(Companion_18).o2j = function (property, duration, timingFunction, delay, behavior) {
    return new Repeatable_0(Companion_instance_20.p2j(property), duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_18).q2j = function (property, duration, timingFunction, delay, behavior, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    behavior = behavior === VOID ? null : behavior;
    return $super === VOID ? this.o2j(property, duration, timingFunction, delay, behavior) : $super.o2j.call(this, property, duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_18).r2j = function (properties, duration, timingFunction, delay, behavior) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var _iterator__ex2g4s = properties.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      var tmp$ret$0 = Companion_instance_19.o2j(item, duration, timingFunction, delay, behavior);
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination);
  };
  protoOf(Companion_18).s2j = function (properties, duration, timingFunction, delay, behavior, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    behavior = behavior === VOID ? null : behavior;
    return $super === VOID ? this.r2j(properties, duration, timingFunction, delay, behavior) : $super.r2j.call(this, properties, duration, timingFunction, delay, behavior);
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    return Companion_instance_19;
  }
  function Transition(value) {
    this.t2j_1 = value;
  }
  protoOf(Transition).toString = function () {
    return this.t2j_1;
  };
  function Name(value) {
    TransitionProperty.call(this, value);
  }
  function Companion_19() {
  }
  protoOf(Companion_19).p2j = function (customValue) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(customValue) > 0) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.none' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(customValue)) {
          var element = charSequenceGet(customValue, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
          if (isWhitespace(element)) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
      var message = 'Invalid transition property name. A property shouldn\'t contain any spaces, but got "' + customValue + '".';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new Name(customValue);
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    return Companion_instance_20;
  }
  function TransitionProperty(value) {
    this.u2j_1 = value;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.u2j_1;
  };
  function transition(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.s2d('transition', joinToString(transitions));
    }
  }
  var com_varabyte_kobweb_compose_css_Visibility$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSImage$stable;
  var com_varabyte_kobweb_compose_css_functions_CalcScope_CalcNum$stable;
  function calc(action) {
    // Inline function 'kotlin.with' call
    return action(CalcScopeInstance_instance);
  }
  function CalcScope() {
  }
  function CalcScopeInstance() {
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
    return CalcScopeInstance_instance;
  }
  var com_varabyte_kobweb_compose_css_functions_CSSFilter$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Simple$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Stop$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_StopRange$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Hint$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_Default$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_ByDirection$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_ByAngle$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Circle$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Ellipse$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Default$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_ByShape$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_ConicGradient_Default$stable;
  var com_varabyte_kobweb_compose_css_functions_ConicGradient_ByAngle$stable;
  var com_varabyte_kobweb_compose_css_functions_ConicGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSClamp$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSMin$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSMax$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSUrl$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Simple$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Disposable$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_KeysToEffect$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_Builder$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stable;
  function ElementRefScope$RefCallback$Simple$invoke$$inlined$onDispose$1() {
  }
  protoOf(ElementRefScope$RefCallback$Simple$invoke$$inlined$onDispose$1).qm = function () {
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
  };
  function Simple(handle) {
    RefCallback.call(this);
    this.w2j_1 = handle;
  }
  protoOf(Simple).x2j = function (scope, element) {
    this.w2j_1(element);
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new ElementRefScope$RefCallback$Simple$invoke$$inlined$onDispose$1();
  };
  protoOf(Simple).toString = function () {
    return 'Simple(handle=' + toString(this.w2j_1) + ')';
  };
  protoOf(Simple).hashCode = function () {
    return hashCode(this.w2j_1);
  };
  protoOf(Simple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Simple))
      return false;
    var tmp0_other_with_cast = other instanceof Simple ? other : THROW_CCE();
    if (!equals(this.w2j_1, tmp0_other_with_cast.w2j_1))
      return false;
    return true;
  };
  function RefCallback() {
  }
  function KeysToEffect(keys, refCallback) {
    this.y2j_1 = keys;
    this.z2j_1 = refCallback;
  }
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + toString(this.y2j_1) + ', refCallback=' + toString(this.z2j_1) + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.y2j_1);
    result = imul(result, 31) + hashCode(this.z2j_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.y2j_1, tmp0_other_with_cast.y2j_1))
      return false;
    if (!equals(this.z2j_1, tmp0_other_with_cast.z2j_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.a2k_1 = ArrayList_init_$Create$();
  }
  protoOf(Builder).b2k = function (keys, handle) {
    this.a2k_1.e(new KeysToEffect(toList(keys), new Simple(handle)));
  };
  protoOf(Builder).c2k = function (other) {
    if (!(other == null)) {
      this.a2k_1.n(other.d2k_1);
    }
  };
  protoOf(Builder).e2k = function () {
    return new ElementRefScope(this.a2k_1);
  };
  function ElementRefScope(keyedCallbacks) {
    this.d2k_1 = keyedCallbacks;
  }
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + toString(this.d2k_1) + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.d2k_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.d2k_1, tmp0_other_with_cast.d2k_1))
      return false;
    return true;
  };
  function registerRefScope(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.d1e(1057476357);
    $composer_0.d1e(1538437067);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (false || it === Companion_getInstance().v18_1) {
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      var value = registerRefScope$lambda;
      $composer_0.w1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.f1e();
    registerRefScope_0(_this__u8e3s4, scope, tmp0_group, $composer_0, 384 | 14 & $changed | 112 & $changed);
    $composer_0.f1e();
  }
  function refScope(init) {
    // Inline function 'kotlin.run' call
    // Inline function 'com.varabyte.kobweb.compose.dom.refScope.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder();
    init(this_0);
    return this_0.e2k();
  }
  function registerRefScope_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.d1e(1100234072);
    if (scope == null) {
      $composer_0.f1e();
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = scope.d2k_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.y2j_1;
      var tmp = copyToArray(this_0).slice();
      $composer_0.d1e(-980457509);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.a1f(element) | (($changed & 896 ^ 384) > 256 && $composer_0.n15(transform) || ($changed & 384) === 256)) | $composer_0.a1f(_this__u8e3s4));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l1f();
      var tmp_0;
      if (invalid || it === Companion_getInstance().v18_1) {
        // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope.<anonymous>.<anonymous>' call
        var value = registerRefScope$lambda_0(element, transform, _this__u8e3s4);
        $composer_0.w1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.f1e();
      DisposableEffect(tmp, tmp0_group, $composer_0, 0);
    }
    $composer_0.f1e();
  }
  function registerRefScope$lambda(it) {
    return it;
  }
  function registerRefScope$lambda_0($keyedCallback, $transform, $this_registerRefScope) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.z2j_1.x2j($this$DisposableEffect, $transform($this_registerRefScope.x2f($this$DisposableEffect)));
    };
  }
  var com_varabyte_kobweb_compose_dom_GenericElementBuilder$stable;
  var com_varabyte_kobweb_compose_dom_GenericNamespacedElementBuilder$stable;
  function GenericTag(name, namespace, attrs, content, $composer, $changed, $default) {
    var namespace_0 = {_v: namespace};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(1162580906);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.n15(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.n15(namespace_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.a1f(attrs_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.a1f(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.w1d()) {
      if (!(($default & 2) === 0)) {
        namespace_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = null;
      }
      var tmp0_safe_receiver = namespace_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>' call
        tmp = Companion_getInstance_21().g2k(tmp0_safe_receiver, name);
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_22().i2k(name) : tmp1_elvis_lhs;
      TagElement(isInterface(tmp_0, ElementBuilder) ? tmp_0 : THROW_CCE(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty >> 3 | 896 & $dirty >> 3);
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver_0 = $composer_0.e1g();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.r1l(GenericTag$lambda(name, namespace_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Companion_20() {
    Companion_instance_21 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.f2k_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_20).g2k = function (namespace, qualifiedName) {
    var tmp0 = this.f2k_1;
    // Inline function 'kotlin.collections.getOrPut' call
    var key = to(namespace, qualifiedName);
    var value = tmp0.f2(key);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericNamespacedElementBuilder(namespace, qualifiedName);
      tmp0.v4(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_20();
    return Companion_instance_21;
  }
  function _get_element__z0t21h($this) {
    var tmp0 = $this.l2k_1;
    // Inline function 'kotlin.getValue' call
    element$factory();
    return tmp0.c2();
  }
  function GenericNamespacedElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElementNS(this$0.j2k_1, this$0.k2k_1);
    };
  }
  function GenericNamespacedElementBuilder(namespace, qualifiedName) {
    Companion_getInstance_21();
    this.j2k_1 = namespace;
    this.k2k_1 = qualifiedName;
    var tmp = this;
    tmp.l2k_1 = lazy(GenericNamespacedElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericNamespacedElementBuilder).c1u = function () {
    var tmp = _get_element__z0t21h(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Companion_21() {
    Companion_instance_22 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.h2k_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_21).i2k = function (name) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.h2k_1;
    var value = this_0.f2(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericElementBuilder(name);
      this_0.v4(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_21();
    return Companion_instance_22;
  }
  function _get_element__z0t21h_0($this) {
    var tmp0 = $this.n2k_1;
    // Inline function 'kotlin.getValue' call
    element$factory_0();
    return tmp0.c2();
  }
  function GenericElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.m2k_1);
    };
  }
  function GenericElementBuilder(name) {
    Companion_getInstance_22();
    this.m2k_1 = name;
    var tmp = this;
    tmp.n2k_1 = lazy(GenericElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericElementBuilder).c1u = function () {
    var tmp = _get_element__z0t21h_0(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function GenericTag_0(name, attrsStr, content, $composer, $changed, $default) {
    var attrsStr_0 = {_v: attrsStr};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(-1150610595);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.n15(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.n15(attrsStr_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.a1f(content_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.w1d()) {
      if (!(($default & 2) === 0)) {
        attrsStr_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      var tmp0_safe_receiver = attrsStr_0._v;
      $composer_0.d1e(1965645561);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>' call
        $composer_0.d1e(1657175204);
        var tmp0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($dirty & 112) === 32;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = tmp0.l1f();
        var tmp_0;
        if (invalid || it === Companion_getInstance().v18_1) {
          // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>.<anonymous>' call
          var value = GenericTag$lambda_0(attrsStr_0);
          tmp0.w1f(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.f1e();
        tmp = tmp0_group;
      }
      var tmp1_group = tmp;
      $composer_0.f1e();
      var attrs = tmp1_group;
      GenericTag(name, null, attrs, content_0._v, $composer_0, 48 | 14 & $dirty | 7168 & $dirty << 3, 0);
    } else {
      $composer_0.m18();
    }
    var tmp2_safe_receiver = $composer_0.e1g();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.r1l(GenericTag$lambda_1(name, attrsStr_0, content_0, $changed, $default));
    }
  }
  function GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this_let, attrAssignment) {
    var parts = split(attrAssignment, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
    var attr = parts.p(0);
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (0 <= 1 ? 1 < parts.j() : false) {
      tmp = parts.p(1);
    } else {
      // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>$<anonymous>$<anonymous>$parseAttrAssignment.<anonymous>' call
      tmp = '';
    }
    var value = tmp;
    $this_let.v2b(attr, removeSurrounding(value, '"'));
  }
  function GenericTag$lambda($name, $namespace, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag($name, $namespace._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function GenericTag$lambda_0($attrsStr) {
    return function ($this$let) {
      var sb = StringBuilder_init_$Create$();
      var insideQuotes = false;
      var indexedObject = $attrsStr._v;
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(indexedObject)) {
        var c = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (c === _Char___init__impl__6a9atx(34)) {
          insideQuotes = !insideQuotes;
          sb.b8(c);
        } else if (c === _Char___init__impl__6a9atx(32)) {
          if (insideQuotes) {
            sb.b8(c);
          } else {
            GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this$let, sb.toString());
            sb.sb();
          }
        } else
          sb.b8(c);
      }
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(sb) > 0) {
        // Inline function 'kotlin.check' call
        if (!!insideQuotes) {
          // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var message = 'Got invalid attributes with unclosed string: ' + $attrsStr._v;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        GenericTag$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_r3pqj($this$let, sb.toString());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GenericTag$lambda_1($name, $attrsStr, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag_0($name, $attrsStr._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function element$factory() {
    return getPropertyCallableRef('element', 1, KProperty1, function (receiver) {
      return _get_element__z0t21h(receiver);
    }, null);
  }
  function element$factory_0() {
    return getPropertyCallableRef('element', 1, KProperty1, function (receiver) {
      return _get_element__z0t21h_0(receiver);
    }, null);
  }
  var com_varabyte_kobweb_compose_dom_svg_SVGTransformScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_ViewBox$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGraphicalElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGContainerElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGSvgAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGDefsAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGLinearGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGRadialGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGStopAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPatternAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGSymbolAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGUseAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGCircleAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGEllipseAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGroupAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGImageAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGLineAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPathDataScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPathAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPolygonAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPolylineAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGRectAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGTextAttrsScope$stable;
  function Companion_22() {
  }
  protoOf(Companion_22).o2k = function (width, height) {
    return new ViewBox(0, 0, width, height);
  };
  protoOf(Companion_22).p2k = function (width, height, $super) {
    height = height === VOID ? width : height;
    return $super === VOID ? this.o2k(width, height) : $super.o2k.call(this, width, height);
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    return Companion_instance_23;
  }
  function ViewBox(x, y, width, height) {
    this.q2k_1 = x;
    this.r2k_1 = y;
    this.s2k_1 = width;
    this.t2k_1 = height;
  }
  function SVGSvgAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      if (!($attrs == null))
        $attrs(new SVGSvgAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_23() {
  }
  protoOf(Companion_23).u2k = function (attrs) {
    return SVGSvgAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    return Companion_instance_24;
  }
  function SVGSvgAttrsScope(attrs) {
    SVGContainerElementAttrsScope.call(this, attrs);
  }
  function Path(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(275418487);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.a1f(attrs) ? 32 : 16);
    if (!(($dirty & 17) === 16) || !$composer_0.w1d()) {
      var tmp = Companion_instance_25.b2l(attrs);
      GenericTag('path', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(Path$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPathAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      $attrs(new SVGPathAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_24() {
  }
  protoOf(Companion_24).b2l = function (attrs) {
    return SVGPathAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    return Companion_instance_25;
  }
  function SVGPathAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGPathAttrsScope).d2l = function (value) {
    this.v2b('d', value);
  };
  var SVGStrokeLineCap_Butt_instance;
  var SVGStrokeLineCap_Round_instance;
  var SVGStrokeLineCap_Square_instance;
  var SVGStrokeLineCap_entriesInitialized;
  function SVGStrokeLineCap_initEntries() {
    if (SVGStrokeLineCap_entriesInitialized)
      return Unit_instance;
    SVGStrokeLineCap_entriesInitialized = true;
    SVGStrokeLineCap_Butt_instance = new SVGStrokeLineCap('Butt', 0);
    SVGStrokeLineCap_Round_instance = new SVGStrokeLineCap('Round', 1);
    SVGStrokeLineCap_Square_instance = new SVGStrokeLineCap('Square', 2);
  }
  function SVGStrokeLineCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineCap).toString = function () {
    return toSvgValue(this);
  };
  function Circle(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(-2079059220);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.a1f(attrs) ? 32 : 16);
    if (!(($dirty & 17) === 16) || !$composer_0.w1d()) {
      var tmp = Companion_instance_26.f2l(attrs);
      GenericTag('circle', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(Circle$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGCircleAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      $attrs(new SVGCircleAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_25() {
  }
  protoOf(Companion_25).f2l = function (attrs) {
    return SVGCircleAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_26;
  function Companion_getInstance_26() {
    return Companion_instance_26;
  }
  function SVGCircleAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGCircleAttrsScope).h2l = function (value) {
    this.v2b('r', toString(value));
  };
  function Svg(attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(-1507789010);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a1f(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.a1f(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.w1d()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      GenericTag('svg', 'http://www.w3.org/2000/svg', Companion_instance_24.u2k(attrs_0._v), content, $composer_0, 54 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(Svg$lambda(attrs_0, content, $changed, $default));
    }
  }
  var SVGFillType_None_instance;
  var SVGFillType_CurrentColor_instance;
  var SVGFillType_entriesInitialized;
  function SVGFillType_initEntries() {
    if (SVGFillType_entriesInitialized)
      return Unit_instance;
    SVGFillType_entriesInitialized = true;
    SVGFillType_None_instance = new SVGFillType('None', 0);
    SVGFillType_CurrentColor_instance = new SVGFillType('CurrentColor', 1);
  }
  function SVGFillType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillType).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeType_None_instance;
  var SVGStrokeType_CurrentColor_instance;
  var SVGStrokeType_entriesInitialized;
  function SVGStrokeType_initEntries() {
    if (SVGStrokeType_entriesInitialized)
      return Unit_instance;
    SVGStrokeType_entriesInitialized = true;
    SVGStrokeType_None_instance = new SVGStrokeType('None', 0);
    SVGStrokeType_CurrentColor_instance = new SVGStrokeType('CurrentColor', 1);
  }
  function SVGStrokeType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeType).toString = function () {
    return toSvgValue(this);
  };
  function SVGContainerElementAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  function LengthAttrs() {
  }
  function ViewBoxAttrs() {
  }
  function SVGGraphicalElementAttrsScope(attrs) {
    SVGElementAttrsScope.call(this, attrs);
  }
  function toSvgValue(_this__u8e3s4) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var this_0 = _this__u8e3s4.j2_1;
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      // Inline function 'com.varabyte.kobweb.compose.dom.svg.toSvgValue.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      var this_1 = charSequenceGet(this_0, 0);
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4 = toString_0(this_1).toLowerCase();
      var tmp_0 = toString(tmp$ret$4);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + this_0.substring(1);
    } else {
      tmp = this_0;
    }
    return tmp;
  }
  function CenterCoordinateAttrs() {
  }
  function SVGElementAttrsScope(attrs) {
    this.v2k_1 = attrs;
  }
  protoOf(SVGElementAttrsScope).v2b = function (attr, value) {
    return this.v2k_1.v2b(attr, value);
  };
  protoOf(SVGElementAttrsScope).y2b = function (classes) {
    this.v2k_1.y2b(classes);
  };
  protoOf(SVGElementAttrsScope).x2b = function (classes) {
    this.v2k_1.x2b(classes);
  };
  protoOf(SVGElementAttrsScope).w2b = function (builder) {
    this.v2k_1.w2b(builder);
  };
  protoOf(SVGElementAttrsScope).z2b = function (value) {
    return this.v2k_1.z2b(value);
  };
  function PresentationAttrs() {
  }
  function Path$lambda($this_Path, $attrs, $$changed) {
    return function ($composer, $force) {
      Path($this_Path, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Circle$lambda($this_Circle, $attrs, $$changed) {
    return function ($composer, $force) {
      Circle($this_Circle, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Svg$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Svg($attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SVGStrokeLineCap_Round_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Round_instance;
  }
  function SVGFillType_None_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_None_instance;
  }
  function SVGFillType_CurrentColor_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_CurrentColor_instance;
  }
  function SVGStrokeType_None_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_None_instance;
  }
  function SVGStrokeType_CurrentColor_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_CurrentColor_instance;
  }
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEBlendElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEBlendAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFECompositeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFECompositeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFloodElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFloodAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEImageElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEImageAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncAElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncRElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncGElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncBElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETileElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETileAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceAttrsScope$stable;
  var com_varabyte_kobweb_compose_events_SyntheticEvent$stable;
  var com_varabyte_kobweb_compose_events_SyntheticTransitionEvent$stable;
  //region block: post-declaration
  protoOf(ComparableAttrsScope).y2b = classes;
  protoOf(ComparableAttrsScope).z2b = tabIndex;
  protoOf(DummyAttrsScope).y2b = classes;
  protoOf(DummyAttrsScope).z2b = tabIndex;
  protoOf(ComparableStyleScope).s2d = property;
  protoOf(ComparableStyleScope).t2d = property_0;
  protoOf(ComparableStyleScope).y2d = variable;
  protoOf(CalcScopeInstance).v2j = unaryMinus;
  protoOf(SVGGraphicalElementAttrsScope).w2k = stroke;
  protoOf(SVGGraphicalElementAttrsScope).e2l = strokeLineCap;
  protoOf(SVGGraphicalElementAttrsScope).i2l = strokeMiterLimit;
  protoOf(SVGGraphicalElementAttrsScope).x2k = strokeWidth;
  protoOf(SVGGraphicalElementAttrsScope).y2k = fill;
  protoOf(SVGSvgAttrsScope).z2k = width_0;
  protoOf(SVGSvgAttrsScope).a2l = viewBox;
  protoOf(SVGCircleAttrsScope).j2l = cx;
  protoOf(SVGCircleAttrsScope).k2l = cy;
  //endregion
  //region block: init
  com_varabyte_kobweb_compose_attributes_ComparableAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_attributes_SyntheticEventListener$stable = 0;
  com_varabyte_kobweb_compose_attributes_TransitionEventListener$stable = 0;
  com_varabyte_kobweb_compose_css_AlignContent_AlignContentPosition$stable = 0;
  com_varabyte_kobweb_compose_css_AlignContent$stable = 0;
  com_varabyte_kobweb_compose_css_AlignItems_AlignItemsPosition$stable = 0;
  com_varabyte_kobweb_compose_css_AlignItems$stable = 0;
  com_varabyte_kobweb_compose_css_AlignSelf_AlignSelfPosition$stable = 0;
  com_varabyte_kobweb_compose_css_AlignSelf$stable = 0;
  com_varabyte_kobweb_compose_css_JustifyContent_JustifyContentPosition$stable = 0;
  com_varabyte_kobweb_compose_css_JustifyContent$stable = 0;
  com_varabyte_kobweb_compose_css_JustifyItems_JustifyItemsPosition$stable = 0;
  com_varabyte_kobweb_compose_css_JustifyItems$stable = 0;
  com_varabyte_kobweb_compose_css_JustifySelf_JustifySelfPosition$stable = 0;
  com_varabyte_kobweb_compose_css_JustifySelf$stable = 0;
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  com_varabyte_kobweb_compose_css_Animation_Repeatable$stable = 0;
  com_varabyte_kobweb_compose_css_Animation$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundAttachment$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundClip$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundColor$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundOrigin$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundPosition$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundRepeat_RepeatStyle$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundRepeat$stable = 0;
  com_varabyte_kobweb_compose_css_BackgroundSize$stable = 0;
  com_varabyte_kobweb_compose_css_Background_Repeatable$stable = 0;
  com_varabyte_kobweb_compose_css_Background$stable = 0;
  com_varabyte_kobweb_compose_css_BorderCollapse$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageNumericBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageSlice_Builder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageSlice$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageWidth_Builder$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageWidth$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageOutset_Builder$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageOutset$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageRepeat_Repeatable$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImageRepeat$stable = 0;
  com_varabyte_kobweb_compose_css_BorderImage$stable = 0;
  com_varabyte_kobweb_compose_css_BoxDecorationBreak$stable = 0;
  com_varabyte_kobweb_compose_css_BoxSizing$stable = 0;
  com_varabyte_kobweb_compose_css_BoxShadow_Repeatable$stable = 0;
  com_varabyte_kobweb_compose_css_BoxShadow$stable = 0;
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  com_varabyte_kobweb_compose_css_Edge$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeXOrCenter$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeX$stable = 0;
  com_varabyte_kobweb_compose_css_CenterX$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeXOffset$stable = 8;
  com_varabyte_kobweb_compose_css_EdgeYOrCenter$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeY$stable = 0;
  com_varabyte_kobweb_compose_css_CenterY$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeYOffset$stable = 8;
  com_varabyte_kobweb_compose_css_CSSPosition$stable = 0;
  com_varabyte_kobweb_compose_css_AccentColor$stable = 0;
  com_varabyte_kobweb_compose_css_ColorScheme$stable = 0;
  com_varabyte_kobweb_compose_css_CSSColor$stable = 0;
  Companion_instance_5 = new Companion_4();
  com_varabyte_kobweb_compose_css_ComparableStyleScope$stable = 0;
  com_varabyte_kobweb_compose_css_Cursor$stable = 0;
  Companion_instance_6 = new Companion_5();
  com_varabyte_kobweb_compose_css_Filter$stable = 0;
  com_varabyte_kobweb_compose_css_Appearance$stable = 0;
  com_varabyte_kobweb_compose_css_Content_Restricted$stable = 0;
  com_varabyte_kobweb_compose_css_Content_Unrestricted$stable = 0;
  com_varabyte_kobweb_compose_css_Content$stable = 0;
  Companion_instance_7 = new Companion_6();
  com_varabyte_kobweb_compose_css_FlexBasis$stable = 0;
  com_varabyte_kobweb_compose_css_FontOpticalSizing$stable = 0;
  com_varabyte_kobweb_compose_css_FontStyle$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantAlternates_ListableValue$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantAlternates$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantCaps$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantEastAsian_ListableKeyword$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantEastAsian$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantEmoji$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantLigatures_ListableKeyword$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantLigatures$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantNumeric_ListableKeyword$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantNumeric$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariantPosition$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariationSettings_Axis$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariationSettings_Axes$stable = 0;
  com_varabyte_kobweb_compose_css_FontVariationSettings$stable = 0;
  com_varabyte_kobweb_compose_css_FontWeight$stable = 0;
  com_varabyte_kobweb_compose_css_FontSize$stable = 0;
  Companion_instance_8 = new Companion_7();
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_FitContent$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_MinMax$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Flex$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Inflexible$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Keyword$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Fixed$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat_Track$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat_Auto$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry_LineNames$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry$stable = 0;
  com_varabyte_kobweb_compose_css_GridTrackBuilderInRepeat$stable = 8;
  com_varabyte_kobweb_compose_css_GridTrackBuilder$stable = 0;
  com_varabyte_kobweb_compose_css_GridAuto$stable = 0;
  com_varabyte_kobweb_compose_css_GridTemplate_Subgrid_Builder$stable = 8;
  com_varabyte_kobweb_compose_css_GridTemplate_Subgrid$stable = 0;
  com_varabyte_kobweb_compose_css_GridTemplate$stable = 0;
  com_varabyte_kobweb_compose_css_GridBuilderInAuto$stable = 8;
  com_varabyte_kobweb_compose_css_GridBuilder$stable = 0;
  Companion_instance_9 = new Companion_8();
  Companion_instance_10 = new Companion_9();
  com_varabyte_kobweb_compose_css_CaretColor$stable = 0;
  com_varabyte_kobweb_compose_css_TouchAction_PanHorizontal$stable = 0;
  com_varabyte_kobweb_compose_css_TouchAction_PanVertical$stable = 0;
  com_varabyte_kobweb_compose_css_TouchAction_PanGroup$stable = 0;
  com_varabyte_kobweb_compose_css_TouchAction_PanHoriz$stable = 0;
  com_varabyte_kobweb_compose_css_TouchAction_PanVert$stable = 0;
  com_varabyte_kobweb_compose_css_TouchAction$stable = 0;
  com_varabyte_kobweb_compose_css_CSSLayerRuleDeclaration$stable = 8;
  com_varabyte_kobweb_compose_css_AspectRatio$stable = 0;
  com_varabyte_kobweb_compose_css_Clear$stable = 0;
  com_varabyte_kobweb_compose_css_LineHeight$stable = 0;
  com_varabyte_kobweb_compose_css_Resize$stable = 0;
  com_varabyte_kobweb_compose_css_VerticalAlign$stable = 0;
  Companion_instance_11 = new Companion_10();
  com_varabyte_kobweb_compose_css_ListStyleType$stable = 0;
  com_varabyte_kobweb_compose_css_ListStylePosition$stable = 0;
  Companion_instance_12 = new Companion_11();
  com_varabyte_kobweb_compose_css_CSSMargin$stable = 8;
  com_varabyte_kobweb_compose_css_ObjectFit$stable = 0;
  com_varabyte_kobweb_compose_css_MixBlendMode$stable = 0;
  Companion_instance_13 = new Companion_12();
  com_varabyte_kobweb_compose_css_CSSOutline$stable = 8;
  com_varabyte_kobweb_compose_css_OutlineColor$stable = 0;
  com_varabyte_kobweb_compose_css_OutlineWidth$stable = 0;
  com_varabyte_kobweb_compose_css_Overflow$stable = 0;
  com_varabyte_kobweb_compose_css_OverflowWrap$stable = 0;
  Companion_instance_14 = new Companion_13();
  com_varabyte_kobweb_compose_css_PointerEvents$stable = 0;
  com_varabyte_kobweb_compose_css_Bottom$stable = 0;
  com_varabyte_kobweb_compose_css_Top$stable = 0;
  com_varabyte_kobweb_compose_css_Left$stable = 0;
  com_varabyte_kobweb_compose_css_Right$stable = 0;
  com_varabyte_kobweb_compose_css_CSSFloat$stable = 0;
  com_varabyte_kobweb_compose_css_OverscrollBehavior_SingleValue$stable = 0;
  com_varabyte_kobweb_compose_css_OverscrollBehavior_RepeatableValue$stable = 0;
  com_varabyte_kobweb_compose_css_OverscrollBehavior$stable = 0;
  com_varabyte_kobweb_compose_css_ScrollBehavior$stable = 0;
  com_varabyte_kobweb_compose_css_ScrollSnapType_Axis$stable = 0;
  com_varabyte_kobweb_compose_css_ScrollSnapType$stable = 0;
  com_varabyte_kobweb_compose_css_ScrollSnapAlign_Alignment$stable = 0;
  com_varabyte_kobweb_compose_css_ScrollSnapAlign$stable = 0;
  com_varabyte_kobweb_compose_css_ScrollSnapStop$stable = 0;
  com_varabyte_kobweb_compose_css_Width$stable = 0;
  com_varabyte_kobweb_compose_css_Height$stable = 0;
  com_varabyte_kobweb_compose_css_MaxWidth$stable = 0;
  com_varabyte_kobweb_compose_css_MaxHeight$stable = 0;
  com_varabyte_kobweb_compose_css_Isolation$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariable_PropertyValue$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariable_NumberValue$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariable_StringValue$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariable$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariablePropertyProvider$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariableNumberProvider$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariableStringProvider$stable = 0;
  com_varabyte_kobweb_compose_css_CaptionSide$stable = 0;
  com_varabyte_kobweb_compose_css_TextAlign$stable = 0;
  com_varabyte_kobweb_compose_css_TextDecorationLine$stable = 0;
  com_varabyte_kobweb_compose_css_TextOverflow$stable = 0;
  com_varabyte_kobweb_compose_css_TextShadow$stable = 0;
  com_varabyte_kobweb_compose_css_CSSTextShadow$stable = 8;
  com_varabyte_kobweb_compose_css_TextTransform$stable = 0;
  com_varabyte_kobweb_compose_css_UserSelect$stable = 0;
  com_varabyte_kobweb_compose_css_WhiteSpace$stable = 0;
  com_varabyte_kobweb_compose_css_WordBreak$stable = 0;
  com_varabyte_kobweb_compose_css_WritingMode$stable = 0;
  Companion_instance_15 = new Companion_14();
  Companion_instance_16 = new Companion_15();
  Companion_instance_17 = new Companion_16();
  Companion_instance_18 = new Companion_17();
  com_varabyte_kobweb_compose_css_TransformBox$stable = 0;
  com_varabyte_kobweb_compose_css_TransformOrigin$stable = 0;
  com_varabyte_kobweb_compose_css_TransformStyle$stable = 0;
  com_varabyte_kobweb_compose_css_TransitionBehavior$stable = 0;
  com_varabyte_kobweb_compose_css_TransitionProperty_Name$stable = 0;
  com_varabyte_kobweb_compose_css_TransitionProperty$stable = 0;
  com_varabyte_kobweb_compose_css_TransitionDuration$stable = 0;
  com_varabyte_kobweb_compose_css_TransitionDelay$stable = 0;
  com_varabyte_kobweb_compose_css_Transition_Repeatable$stable = 0;
  com_varabyte_kobweb_compose_css_Transition$stable = 0;
  Companion_instance_19 = new Companion_18();
  Companion_instance_20 = new Companion_19();
  com_varabyte_kobweb_compose_css_Visibility$stable = 0;
  com_varabyte_kobweb_compose_css_functions_CSSImage$stable = 0;
  com_varabyte_kobweb_compose_css_functions_CalcScope_CalcNum$stable = 0;
  CalcScopeInstance_instance = new CalcScopeInstance();
  com_varabyte_kobweb_compose_css_functions_CSSFilter$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Simple$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Stop$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_StopRange$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Hint$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_Default$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_ByDirection$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_ByAngle$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Circle$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Ellipse$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Default$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_ByShape$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_ConicGradient_Default$stable = 0;
  com_varabyte_kobweb_compose_css_functions_ConicGradient_ByAngle$stable = 0;
  com_varabyte_kobweb_compose_css_functions_ConicGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_CSSClamp$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSMin$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSMax$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSUrl$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Simple$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Disposable$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_KeysToEffect$stable = 8;
  com_varabyte_kobweb_compose_dom_ElementRefScope_Builder$stable = 8;
  com_varabyte_kobweb_compose_dom_ElementRefScope$stable = 8;
  com_varabyte_kobweb_compose_dom_GenericElementBuilder$stable = 8;
  com_varabyte_kobweb_compose_dom_GenericNamespacedElementBuilder$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGTransformScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGElementAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_ViewBox$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGGraphicalElementAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGContainerElementAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGSvgAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGDefsAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGGradientAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGLinearGradientAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGRadialGradientAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGStopAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGPatternAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGSymbolAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGUseAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGCircleAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGEllipseAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGGroupAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGImageAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGLineAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGPathDataScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPathAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGPolygonAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGPolylineAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGRectAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGTextAttrsScope$stable = 0;
  Companion_instance_23 = new Companion_22();
  Companion_instance_24 = new Companion_23();
  Companion_instance_25 = new Companion_24();
  Companion_instance_26 = new Companion_25();
  com_varabyte_kobweb_compose_dom_svg_SVGFilterElementAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFilterElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFilterAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEBlendElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEBlendAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFECompositeElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFECompositeAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFloodElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFloodAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEImageElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEImageAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncAElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncRElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncGElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncBElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFETileElement$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFETileAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceAttrsScope$stable = 0;
  com_varabyte_kobweb_compose_events_SyntheticEvent$stable = 8;
  com_varabyte_kobweb_compose_events_SyntheticTransitionEvent$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = calc;
  _.$_$.b = ComparableStyleScope;
  _.$_$.c = NumberValue;
  _.$_$.d = StyleVariable_3;
  _.$_$.e = StyleVariable_2;
  _.$_$.f = StyleVariable_0;
  _.$_$.g = StyleVariable_1;
  _.$_$.h = alignItems;
  _.$_$.i = appearance;
  _.$_$.j = ariaDisabled;
  _.$_$.k = ariaHidden;
  _.$_$.l = borderBottom;
  _.$_$.m = borderColor;
  _.$_$.n = borderLeft;
  _.$_$.o = borderStyle;
  _.$_$.p = borderTop;
  _.$_$.q = borderWidth;
  _.$_$.r = boxShadow;
  _.$_$.s = boxSizing_0;
  _.$_$.t = colorScheme;
  _.$_$.u = cursor;
  _.$_$.v = fontWeight;
  _.$_$.w = gridTemplateColumns_0;
  _.$_$.x = grid;
  _.$_$.y = isNotEmpty;
  _.$_$.z = justifyItems;
  _.$_$.a1 = justifySelf;
  _.$_$.b1 = layer;
  _.$_$.c1 = listStyle;
  _.$_$.d1 = marginBlockEnd;
  _.$_$.e1 = marginBlock;
  _.$_$.f1 = objectFit;
  _.$_$.g1 = outline;
  _.$_$.h1 = overflowY;
  _.$_$.i1 = overflow;
  _.$_$.j1 = paddingInline;
  _.$_$.k1 = setVariable;
  _.$_$.l1 = textAlign;
  _.$_$.m1 = textDecorationLine;
  _.$_$.n1 = transition;
  _.$_$.o1 = translateX;
  _.$_$.p1 = userSelect;
  _.$_$.q1 = verticalAlign;
  _.$_$.r1 = whiteSpace;
  _.$_$.s1 = Circle;
  _.$_$.t1 = Path;
  _.$_$.u1 = Svg;
  _.$_$.v1 = GenericTag_0;
  _.$_$.w1 = refScope;
  _.$_$.x1 = registerRefScope_0;
  _.$_$.y1 = registerRefScope;
  _.$_$.z1 = SVGFillType_CurrentColor_getInstance;
  _.$_$.a2 = SVGFillType_None_getInstance;
  _.$_$.b2 = SVGStrokeLineCap_Round_getInstance;
  _.$_$.c2 = SVGStrokeType_CurrentColor_getInstance;
  _.$_$.d2 = SVGStrokeType_None_getInstance;
  _.$_$.e2 = ComparableAttrsScope_init_$Create$;
  _.$_$.f2 = Companion_instance_0;
  _.$_$.g2 = Companion_instance_7;
  _.$_$.h2 = Companion_instance_3;
  _.$_$.i2 = Companion_instance_4;
  _.$_$.j2 = Companion_instance_5;
  _.$_$.k2 = Companion_instance_6;
  _.$_$.l2 = Companion_instance_8;
  _.$_$.m2 = Companion_instance_1;
  _.$_$.n2 = Companion_instance_2;
  _.$_$.o2 = Companion_instance_12;
  _.$_$.p2 = Companion_instance_13;
  _.$_$.q2 = Companion_instance_14;
  _.$_$.r2 = Companion_instance_16;
  _.$_$.s2 = Companion_instance_18;
  _.$_$.t2 = Companion_instance_19;
  _.$_$.u2 = Companion_instance_15;
  _.$_$.v2 = Companion_instance_11;
  _.$_$.w2 = Companion_instance_17;
  _.$_$.x2 = Companion_instance_23;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
