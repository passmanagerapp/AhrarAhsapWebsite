(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    globalThis['kobweb-frontend-silk-widgets'] = factory(typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-silk-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForObject = kotlin_kotlin.$_$.k6;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var listOf = kotlin_kotlin.$_$.v3;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var VOID = kotlin_kotlin.$_$.e;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var KProperty1 = kotlin_kotlin.$_$.i7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c6;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var CssStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var objectCreate = kotlin_kotlin.$_$.w6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.g6;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var Base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var initMetadataForClass = kotlin_kotlin.$_$.f6;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var marginBlock = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var Companion_instance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var alignItems = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var descendants = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var marginBlock_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var Base_init_$Init$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w2;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var boxShadow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var Companion_instance_13 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var Companion_instance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var Companion_instance_15 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var Companion_instance_16 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Circle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s1;
  var SVGStrokeLineCap_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.o9;
  var SVGStrokeType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var SVGFillType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var SVGFillType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z1;
  var SVGStrokeType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w2;
  var mapCapacity = kotlin_kotlin.$_$.w3;
  var coerceAtLeast = kotlin_kotlin.$_$.a7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var TopStart_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w1;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.f7;
  var THROW_ISE = kotlin_kotlin.$_$.g9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.a6;
  var CoroutineImpl = kotlin_kotlin.$_$.k5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.o6;
  var initMetadataForLambda = kotlin_kotlin.$_$.j6;
  var Companion_instance_17 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var toString = kotlin_kotlin.$_$.z6;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var get_name = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var Companion_instance_18 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var colorScheme = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var KProperty0 = kotlin_kotlin.$_$.h7;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var KMutableProperty1 = kotlin_kotlin.$_$.g7;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(TabVars, 'TabVars');
  initMetadataForObject(CalloutVars, 'CalloutVars');
  initMetadataForCompanion(Companion);
  initMetadataForClass(CalloutType, 'CalloutType', VOID, Base);
  initMetadataForObject(ComposableSingletons$CalloutKt, 'ComposableSingletons$CalloutKt');
  initMetadataForObject(ButtonVars, 'ButtonVars');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ButtonSize, 'ButtonSize', VOID, Base);
  initMetadataForObject(CheckboxVars, 'CheckboxVars');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CheckboxSize, 'CheckboxSize', VOID, Base);
  initMetadataForObject(InputVars, 'InputVars');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(InputSize, 'InputSize', VOID, Base);
  initMetadataForObject(SwitchVars, 'SwitchVars');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SwitchSize, 'SwitchSize', VOID, Base);
  initMetadataForObject(ComposableSingletons$ExclaimIconKt, 'ComposableSingletons$ExclaimIconKt');
  initMetadataForObject(ComposableSingletons$InfoIconKt, 'ComposableSingletons$InfoIconKt');
  initMetadataForObject(ComposableSingletons$LightbulbIconKt, 'ComposableSingletons$LightbulbIconKt');
  initMetadataForObject(ComposableSingletons$QuestionIconKt, 'ComposableSingletons$QuestionIconKt');
  initMetadataForObject(ComposableSingletons$QuoteIconKt, 'ComposableSingletons$QuoteIconKt');
  initMetadataForObject(ComposableSingletons$StopIconKt, 'ComposableSingletons$StopIconKt');
  initMetadataForObject(ComposableSingletons$WarningIconKt, 'ComposableSingletons$WarningIconKt');
  initMetadataForClass(Fill, 'Fill', Fill);
  initMetadataForClass(Stroke, 'Stroke', Stroke);
  initMetadataForObject(DividerVars, 'DividerVars');
  initMetadataForObject(SurfaceVars, 'SurfaceVars');
  initMetadataForLambda(Surface$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(OverlayVars, 'OverlayVars');
  initMetadataForObject(PopupVars, 'PopupVars');
  initMetadataForObject(TooltipVars, 'TooltipVars');
  initMetadataForObject(TransitionDurationVars, 'TransitionDurationVars');
  initMetadataForObject(FontSizeVars, 'FontSizeVars');
  initMetadataForObject(BorderRadiusVars, 'BorderRadiusVars');
  initMetadataForClass(MutableButton, 'MutableButton', VOID, ColorGroup);
  initMetadataForClass(MutableCallout, 'MutableCallout', VOID, ColorGroup);
  initMetadataForClass(MutableCheckbox, 'MutableCheckbox', VOID, ColorGroup);
  initMetadataForClass(MutableInput, 'MutableInput', VOID, ColorGroup);
  initMetadataForClass(MutableSwitch, 'MutableSwitch', VOID, ColorGroup);
  initMetadataForClass(MutableTab, 'MutableTab', VOID, ColorGroup);
  initMetadataForClass(MutableTooltip, 'MutableTooltip', VOID, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle;
  }
  var TabsStyle;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle;
  }
  var TabsTabRowStyle;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle;
  }
  var TabsTabStyle;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle;
  }
  var TabsPanelStyle;
  var com_varabyte_kobweb_silk_components_disclosure_TabVars$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_PanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable;
  function TabVars() {
    TabVars_instance = this;
    this.p30_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().z2i();
    tmp.q30_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.r30_1 = StyleVariable('silk');
    this.s30_1 = StyleVariable('silk');
    this.t30_1 = StyleVariable('silk');
    this.u30_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.v30_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().f31().z2i();
    tmp_1.w30_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(TabVars).g31 = function () {
    return this.p30_1.f2j(this, Color$factory());
  };
  protoOf(TabVars).h31 = function () {
    return this.q30_1.f2j(this, BorderColor$factory());
  };
  protoOf(TabVars).i31 = function () {
    return this.r30_1.f2j(this, BackgroundColor$factory());
  };
  protoOf(TabVars).j31 = function () {
    return this.s30_1.f2j(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).k31 = function () {
    return this.t30_1.f2j(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).l31 = function () {
    return this.u30_1.f2j(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).m31 = function () {
    return this.v30_1.f2j(this, BorderThickness$factory());
  };
  protoOf(TabVars).n31 = function () {
    return this.w30_1.f2j(this, ColorTransitionDuration$factory());
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$lambda($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_instance;
  }
  function TabsTabRowStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_instance);
    var tmp_0 = TabVars_getInstance().m31().z2i();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().h31().z2i());
  }
  function TabsTabStyle$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.d1e(2044107546);
    var tmp0 = tabIndex(Companion_instance, 0);
    $composer_0.f1e();
    return tmp0;
  }
  function TabsTabStyle$lambda_0($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$CssStyle.a2w(TabsTabStyle$lambda$lambda);
    var tmp = get_ariaDisabled($this$CssStyle);
    tmp.f2v(TabsTabStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle).o2v(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.f2v(TabsTabStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).o2v(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.f2v(TabsTabStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.y2g()), Companion_instance_2.s2j(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().n31().z2i())), TabVars_getInstance().i31().z2i()), TabVars_getInstance().g31().z2i()), Companion_instance_3.b2h()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().m31().z2i();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().h31().z2i());
  }
  function TabsTabStyle$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.v2j(TabVars_getInstance().m31().z2i());
  }
  function TabsTabStyle$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().j31().z2i()), Companion_instance_1.z2g());
  }
  function TabsTabStyle$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().k31().z2i());
  }
  function TabsTabStyle$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().l31().z2i());
  }
  function TabsPanelStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$lambda$lambda);
  }
  function TabsPanelStyle$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.h2s(Companion_instance_4.q2i());
    return Unit_instance;
  }
  function Color$factory() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.g31();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.h31();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.i31();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.j31();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.k31();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.l31();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.m31();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.n31();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle = CssStyle(VOID, TabsStyle$lambda);
      var tmp = Companion_instance_5;
      TabsTabRowStyle = base(tmp, VOID, TabsTabRowStyle$lambda);
      var tmp_0 = TabsTabStyle$lambda;
      TabsTabStyle = CssStyle_0(tmp_0, TabsTabStyle$lambda_0);
      var tmp_1 = Companion_instance_5;
      TabsPanelStyle = base(tmp_1, VOID, TabsPanelStyle$lambda);
      com_varabyte_kobweb_silk_components_disclosure_TabVars$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_PanelData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable = 8;
    }
  }
  function get_CalloutStyle() {
    _init_properties_Callout_kt__ksu682();
    return CalloutStyle;
  }
  var CalloutStyle;
  function get_LeftBorderedCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return LeftBorderedCalloutVariant;
  }
  var LeftBorderedCalloutVariant;
  function get_LeftBorderedFilledCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return LeftBorderedFilledCalloutVariant;
  }
  var LeftBorderedFilledCalloutVariant;
  function get_OutlinedCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return OutlinedCalloutVariant;
  }
  var OutlinedCalloutVariant;
  function get_MatchingLinkCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return MatchingLinkCalloutVariant;
  }
  var MatchingLinkCalloutVariant;
  var com_varabyte_kobweb_silk_components_display_CalloutVars$stable;
  var com_varabyte_kobweb_silk_components_display_CalloutType$stable;
  var com_varabyte_kobweb_silk_components_display_CalloutDefaults$stable;
  function CalloutVars() {
    CalloutVars_instance = this;
    this.o31_1 = StyleVariable('silk');
    this.p31_1 = StyleVariable('silk');
    this.q31_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.5);
    tmp.r31_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
  }
  protoOf(CalloutVars).g31 = function () {
    return this.o31_1.f2j(this, Color$factory_0());
  };
  protoOf(CalloutVars).i31 = function () {
    return this.p31_1.f2j(this, BackgroundColor$factory_0());
  };
  protoOf(CalloutVars).s31 = function () {
    return this.q31_1.f2j(this, TitleFontSize$factory());
  };
  protoOf(CalloutVars).t31 = function () {
    return this.r31_1.f2j(this, TitleGap$factory());
  };
  var CalloutVars_instance;
  function CalloutVars_getInstance() {
    if (CalloutVars_instance == null)
      new CalloutVars();
    return CalloutVars_instance;
  }
  function markdownParagraphHack(_this__u8e3s4) {
    _init_properties_Callout_kt__ksu682();
    _this__u8e3s4.o2u(' >.callout-body>p:last-child', markdownParagraphHack$lambda);
  }
  function CalloutType$Companion$CAUTION$lambda(it) {
    return get_callout_0(toPalette(it)).u31();
  }
  function CalloutType$Companion$IMPORTANT$lambda(it) {
    return get_callout_0(toPalette(it)).v31();
  }
  function CalloutType$Companion$NOTE$lambda(it) {
    return get_callout_0(toPalette(it)).w31();
  }
  function CalloutType$Companion$QUESTION$lambda(it) {
    return get_callout_0(toPalette(it)).x31();
  }
  function CalloutType$Companion$QUOTE$lambda(it) {
    return get_callout_0(toPalette(it)).y31();
  }
  function CalloutType$Companion$TIP$lambda(it) {
    return get_callout_0(toPalette(it)).z31();
  }
  function CalloutType$Companion$WARNING$lambda(it) {
    return get_callout_0(toPalette(it)).a32();
  }
  function CalloutType_init_$Init$(icon, label, provideColor, $this) {
    var tmp = CalloutType$_init_$lambda_4upqpt_0(provideColor);
    CalloutType.call($this, icon, label, tmp, CalloutType$_init_$lambda_4upqpt_1(provideColor));
    return $this;
  }
  function CalloutType_init_$Create$(icon, label, provideColor) {
    return CalloutType_init_$Init$(icon, label, provideColor, objectCreate(protoOf(CalloutType)));
  }
  function Companion() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = ComposableSingletons$CalloutKt_getInstance().b32_1;
    tmp.i32_1 = CalloutType_init_$Create$(tmp_0, 'Caution', CalloutType$Companion$CAUTION$lambda);
    var tmp_1 = this;
    var tmp_2 = ComposableSingletons$CalloutKt_getInstance().c32_1;
    tmp_1.j32_1 = CalloutType_init_$Create$(tmp_2, 'Important', CalloutType$Companion$IMPORTANT$lambda);
    var tmp_3 = this;
    var tmp_4 = ComposableSingletons$CalloutKt_getInstance().d32_1;
    tmp_3.k32_1 = CalloutType_init_$Create$(tmp_4, 'Note', CalloutType$Companion$NOTE$lambda);
    var tmp_5 = this;
    var tmp_6 = ComposableSingletons$CalloutKt_getInstance().e32_1;
    tmp_5.l32_1 = CalloutType_init_$Create$(tmp_6, 'Question', CalloutType$Companion$QUESTION$lambda);
    var tmp_7 = this;
    var tmp_8 = ComposableSingletons$CalloutKt_getInstance().f32_1;
    tmp_7.m32_1 = CalloutType_init_$Create$(tmp_8, 'Quote', CalloutType$Companion$QUOTE$lambda);
    var tmp_9 = this;
    var tmp_10 = ComposableSingletons$CalloutKt_getInstance().g32_1;
    tmp_9.n32_1 = CalloutType_init_$Create$(tmp_10, 'Tip', CalloutType$Companion$TIP$lambda);
    var tmp_11 = this;
    var tmp_12 = ComposableSingletons$CalloutKt_getInstance().h32_1;
    tmp_11.o32_1 = CalloutType_init_$Create$(tmp_12, 'Warning', CalloutType$Companion$WARNING$lambda);
  }
  var Companion_instance_19;
  function Companion_getInstance_0() {
    if (Companion_instance_19 == null)
      new Companion();
    return Companion_instance_19;
  }
  function CalloutType$_init_$lambda_4upqpt($provideColor, $provideBackgroundColor) {
    return function (_this__u8e3s4) {
      return setVariable(setVariable(Companion_instance, CalloutVars_getInstance().g31(), $provideColor(_this__u8e3s4.u2w_1)), CalloutVars_getInstance().i31(), $provideBackgroundColor(_this__u8e3s4.u2w_1));
    };
  }
  function CalloutType$_init_$lambda_4upqpt_0($provideColor) {
    return function (it) {
      return $provideColor(it);
    };
  }
  function CalloutType$_init_$lambda_4upqpt_1($provideColor) {
    return function (it) {
      return $provideColor(it).c2r().b2r(VOID, VOID, VOID, it.k2y() ? 0.15 : 0.2);
    };
  }
  function CalloutType(icon, label, provideColor, provideBackgroundColor) {
    Companion_getInstance_0();
    Base.call(this, CalloutType$_init_$lambda_4upqpt(provideColor, provideBackgroundColor));
    this.r32_1 = icon;
    this.s32_1 = label;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_1$lambda_vor60q($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
      StopIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.m18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_2$lambda_2v4oyj($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
      ExclaimIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.m18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_3$lambda_pyhs3o($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
      InfoIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.m18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_4$lambda_g8zst9($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
      QuestionIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.m18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_5$lambda_ckmo8y($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
      QuoteIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.m18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_6$lambda_tmuwnz($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
      LightbulbIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.m18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_7$lambda_t8fls($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
      WarningIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.m18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CalloutKt() {
    ComposableSingletons$CalloutKt_instance = this;
    var tmp = this;
    tmp.b32_1 = ComposableLambda$invoke$ref(composableLambdaInstance(1105541261, false, ComposableSingletons$CalloutKt$lambda_1$lambda_vor60q));
    var tmp_0 = this;
    tmp_0.c32_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-700737724, false, ComposableSingletons$CalloutKt$lambda_2$lambda_2v4oyj));
    var tmp_1 = this;
    tmp_1.d32_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1510536654, false, ComposableSingletons$CalloutKt$lambda_3$lambda_pyhs3o));
    var tmp_2 = this;
    tmp_2.e32_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-2086387290, false, ComposableSingletons$CalloutKt$lambda_4$lambda_g8zst9));
    var tmp_3 = this;
    tmp_3.f32_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(1974337438, false, ComposableSingletons$CalloutKt$lambda_5$lambda_ckmo8y));
    var tmp_4 = this;
    tmp_4.g32_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-613517763, false, ComposableSingletons$CalloutKt$lambda_6$lambda_tmuwnz));
    var tmp_5 = this;
    tmp_5.h32_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(2087814270, false, ComposableSingletons$CalloutKt$lambda_7$lambda_t8fls));
  }
  var ComposableSingletons$CalloutKt_instance;
  function ComposableSingletons$CalloutKt_getInstance() {
    if (ComposableSingletons$CalloutKt_instance == null)
      new ComposableSingletons$CalloutKt();
    return ComposableSingletons$CalloutKt_instance;
  }
  function CalloutStyle$lambda($this$CssStyle) {
    _init_properties_Callout_kt__ksu682();
    $this$CssStyle.a2w(CalloutStyle$lambda$lambda);
    $this$CssStyle.o2u(' >.callout-title', CalloutStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function CalloutStyle$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return marginBlock(textAlign(Companion_instance, Companion_instance_6.k2g()), get_em(1));
  }
  function CalloutStyle$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return gap(fontSize(fontWeight(alignItems(display(tmp, 'flex'), Companion_instance_8.i2g()), Companion_instance_9.d2h()), CalloutVars_getInstance().s31().z2i()), CalloutVars_getInstance().t31().z2i());
  }
  function LeftBorderedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.a2w(LeftBorderedCalloutVariant$lambda$lambda);
    $this$addVariant.o2u(' >.callout-title', LeftBorderedCalloutVariant$lambda$lambda_0);
    markdownParagraphHack($this$addVariant);
    return Unit_instance;
  }
  function LeftBorderedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding_0(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().g31().z2i()), get_cssRem(0.5), get_cssRem(1));
  }
  function LeftBorderedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().g31().z2i());
    return margin_0(tmp, LeftBorderedCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.j2s(get_cssRem(1));
    return Unit_instance;
  }
  function LeftBorderedFilledCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.a2w(LeftBorderedFilledCalloutVariant$lambda$lambda);
    $this$addVariant.o2u(' >.callout-title', LeftBorderedFilledCalloutVariant$lambda$lambda_0);
    markdownParagraphHack($this$addVariant);
    return Unit_instance;
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(padding(borderRadius(backgroundColor(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().g31().z2i()), CalloutVars_getInstance().i31().z2i()), get_px(4)), get_cssRem(0.8)), [Companion_instance_10.p2g(get_px(0), get_px(1), get_px(2), VOID, Colors_instance.h2r().b2r(VOID, VOID, VOID, 0.12)), Companion_instance_10.p2g(get_px(0), get_px(3), get_px(10), VOID, Colors_instance.h2r().b2r(VOID, VOID, VOID, 0.08))]);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().g31().z2i());
    return margin_0(tmp, LeftBorderedFilledCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.j2s(get_cssRem(0.25));
    return Unit_instance;
  }
  function OutlinedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.a2w(OutlinedCalloutVariant$lambda$lambda);
    $this$addVariant.o2u(' >.callout-title', OutlinedCalloutVariant$lambda$lambda_0);
    $this$addVariant.o2u(' .callout-icon', OutlinedCalloutVariant$lambda$lambda_1);
    $this$addVariant.o2u(' >.callout-body', OutlinedCalloutVariant$lambda$lambda_2);
    markdownParagraphHack($this$addVariant);
    return Unit_instance;
  }
  function OutlinedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderRadius(border(tmp, tmp_0, 'solid', CalloutVars_getInstance().g31().z2i()), get_cssRem(0.2));
  }
  function OutlinedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(backgroundColor(Companion_instance, CalloutVars_getInstance().i31().z2i()), get_cssRem(0.5), get_cssRem(0.75));
  }
  function OutlinedCalloutVariant$lambda$lambda_1() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_instance, CalloutVars_getInstance().g31().z2i());
  }
  function OutlinedCalloutVariant$lambda$lambda_2() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(Companion_instance, get_cssRem(0.5), get_cssRem(0.75));
  }
  function MatchingLinkCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    descendants($this$addVariant, [':any-link'], MatchingLinkCalloutVariant$lambda$lambda);
    return Unit_instance;
  }
  function MatchingLinkCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_instance, CalloutVars_getInstance().g31().z2i());
  }
  function markdownParagraphHack$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    return marginBlock_0(tmp, markdownParagraphHack$lambda$lambda);
  }
  function markdownParagraphHack$lambda$lambda($this$marginBlock) {
    _init_properties_Callout_kt__ksu682();
    $this$marginBlock.l2s(get_px(0));
    return Unit_instance;
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.g31();
    }, null);
  }
  function BackgroundColor$factory_0() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.i31();
    }, null);
  }
  function TitleFontSize$factory() {
    return getPropertyCallableRef('TitleFontSize', 1, KProperty1, function (receiver) {
      return receiver.s31();
    }, null);
  }
  function TitleGap$factory() {
    return getPropertyCallableRef('TitleGap', 1, KProperty1, function (receiver) {
      return receiver.t31();
    }, null);
  }
  var properties_initialized_Callout_kt_nor0bk;
  function _init_properties_Callout_kt__ksu682() {
    if (!properties_initialized_Callout_kt_nor0bk) {
      properties_initialized_Callout_kt_nor0bk = true;
      CalloutStyle = CssStyle(VOID, CalloutStyle$lambda);
      var tmp = get_CalloutStyle();
      LeftBorderedCalloutVariant = addVariant(tmp, VOID, LeftBorderedCalloutVariant$lambda);
      var tmp_0 = get_CalloutStyle();
      LeftBorderedFilledCalloutVariant = addVariant(tmp_0, VOID, LeftBorderedFilledCalloutVariant$lambda);
      var tmp_1 = get_CalloutStyle();
      OutlinedCalloutVariant = addVariant(tmp_1, VOID, OutlinedCalloutVariant$lambda);
      var tmp_2 = get_CalloutStyle();
      MatchingLinkCalloutVariant = addVariant(tmp_2, VOID, MatchingLinkCalloutVariant$lambda);
      com_varabyte_kobweb_silk_components_display_CalloutVars$stable = 8;
      com_varabyte_kobweb_silk_components_display_CalloutType$stable = 0;
      com_varabyte_kobweb_silk_components_display_CalloutDefaults$stable = 0;
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle;
  }
  var ButtonStyle;
  var com_varabyte_kobweb_silk_components_forms_ButtonVars$stable;
  var com_varabyte_kobweb_silk_components_forms_ButtonSize$stable;
  function ButtonVars() {
    ButtonVars_instance = this;
    this.t32_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().z2i();
    tmp.u32_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.v32_1 = StyleVariable('silk');
    this.w32_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().z2i();
    tmp_0.x32_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().f31().z2i();
    tmp_1.y32_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.z32_1 = StyleVariable('silk');
    this.a33_1 = StyleVariable('silk');
    this.b33_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).c33 = function () {
    return this.t32_1.f2j(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).d33 = function () {
    return this.u32_1.f2j(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).e33 = function () {
    return this.v32_1.f2j(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).f33 = function () {
    return this.w32_1.f2j(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).g31 = function () {
    return this.x32_1.f2j(this, Color$factory_1());
  };
  protoOf(ButtonVars).n31 = function () {
    return this.y32_1.f2j(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).g33 = function () {
    return this.z32_1.f2j(this, FontSize$factory());
  };
  protoOf(ButtonVars).h33 = function () {
    return this.a33_1.f2j(this, Height$factory());
  };
  protoOf(ButtonVars).i33 = function () {
    return this.b33_1.f2j(this, PaddingHorizontal$factory());
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function Companion_0() {
    Companion_instance_20 = this;
    this.j33_1 = new ButtonSize(FontSizeVars_getInstance().r33().z2i(), get_cssRem(1.5), get_cssRem(0.5));
    this.k33_1 = new ButtonSize(FontSizeVars_getInstance().s33().z2i(), get_cssRem(2), get_cssRem(0.75));
    this.l33_1 = new ButtonSize(FontSizeVars_getInstance().t33().z2i(), get_cssRem(2.5), get_cssRem(1));
    this.m33_1 = new ButtonSize(FontSizeVars_getInstance().u33().z2i(), get_cssRem(3), get_cssRem(1.5));
  }
  var Companion_instance_20;
  function Companion_getInstance_1() {
    if (Companion_instance_20 == null)
      new Companion_0();
    return Companion_instance_20;
  }
  function ButtonSize(fontSize, height, horizontalPadding) {
    Companion_getInstance_1();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().g33(), fontSize), ButtonVars_getInstance().h33(), height), ButtonVars_getInstance().i33(), horizontalPadding), VOID, this);
  }
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_Button_kt__2845m6();
    $this$CssStyle.a2w(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).o2v(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.f2v(ButtonStyle$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$CssStyle).o2v(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.f2v(ButtonStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).o2v(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.f2v(ButtonStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().g31().z2i()), ButtonVars_getInstance().c33().z2i()), 1.2), ButtonVars_getInstance().h33().z2i()), ButtonVars_getInstance().h33().z2i()), ButtonVars_getInstance().g33().z2i()), Companion_instance_9.e2h()), Companion_instance_11.k2j()), VOID, ButtonVars_getInstance().i33().z2i()), Companion_instance_12.h2i()), get_cssRem(0.375));
    return transition_0(userSelect(border_0(tmp, ButtonStyle$lambda$lambda$lambda), Companion_instance_3.b2h()), [Companion_instance_2.q2j('background-color', ButtonVars_getInstance().n31().z2i())]);
  }
  function ButtonStyle$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.f2s(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().e33().z2i()), Companion_instance_1.y2g());
  }
  function ButtonStyle$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(outline(tmp, tmp_0, 'solid', Colors_instance.f2r()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().d33().z2i());
  }
  function ButtonStyle$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().f33().z2i());
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.c33();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.d33();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.e33();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.f33();
    }, null);
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.g31();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.n31();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.g33();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.h33();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.i33();
    }, null);
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle = CssStyle(VOID, ButtonStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_ButtonVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_ButtonSize$stable = 0;
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle;
  }
  var CheckboxStyle;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim;
  }
  var CheckboxEnabledAnim;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle;
  }
  var CheckboxIconContainerStyle;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant;
  }
  var UncheckedCheckboxIconContainerVariant;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant;
  }
  var CheckedCheckboxIconContainerVariant;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle;
  }
  var CheckboxIconStyle;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant;
  }
  var CheckboxInputVariant;
  var com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable;
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().z2i();
    tmp.v33_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.w33_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.x33_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.y33_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.z33_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.a34_1 = StyleVariable('silk');
    this.b34_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().z2i();
    tmp_3.c34_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.d34_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.e34_1 = StyleVariable('silk');
    this.f34_1 = StyleVariable('silk');
    this.g34_1 = StyleVariable('silk');
    this.h34_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().j34().z2i();
    tmp_5.i34_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(CheckboxVars).h31 = function () {
    return this.v33_1.f2j(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).k34 = function () {
    return this.w33_1.f2j(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).l34 = function () {
    return this.x33_1.f2j(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).m34 = function () {
    return this.y33_1.f2j(this, Size$factory());
  };
  protoOf(CheckboxVars).n34 = function () {
    return this.z33_1.f2j(this, Spacing$factory());
  };
  protoOf(CheckboxVars).g33 = function () {
    return this.a34_1.f2j(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).o34 = function () {
    return this.b34_1.f2j(this, IconSize$factory());
  };
  protoOf(CheckboxVars).p34 = function () {
    return this.c34_1.f2j(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).q34 = function () {
    return this.d34_1.f2j(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).r34 = function () {
    return this.e34_1.f2j(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).s34 = function () {
    return this.f34_1.f2j(this, IconColor$factory());
  };
  protoOf(CheckboxVars).t34 = function () {
    return this.g34_1.f2j(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).u34 = function () {
    return this.h34_1.f2j(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).v34 = function () {
    return this.i34_1.f2j(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function Companion_1() {
    Companion_instance_21 = this;
    this.w34_1 = new CheckboxSize(get_cssRem(0.875), get_cssRem(0.45), FontSizeVars_getInstance().s33().z2i());
    this.x34_1 = new CheckboxSize(get_cssRem(1), get_cssRem(0.625), FontSizeVars_getInstance().t33().z2i());
    this.y34_1 = new CheckboxSize(get_cssRem(1.25), get_cssRem(0.8), FontSizeVars_getInstance().u33().z2i());
  }
  var Companion_instance_21;
  function Companion_getInstance_2() {
    if (Companion_instance_21 == null)
      new Companion_1();
    return Companion_instance_21;
  }
  function CheckboxSize(boxSize, iconSize, fontSize) {
    Companion_getInstance_2();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, CheckboxVars_getInstance().m34(), boxSize), CheckboxVars_getInstance().o34(), iconSize), CheckboxVars_getInstance().g33(), fontSize), VOID, this);
  }
  function CheckboxStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.a2w(CheckboxStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().n34().z2i()), Companion_instance_3.b2h()), CheckboxVars_getInstance().g33().z2i()), Companion_instance_1.y2g());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.i2x(CheckboxEnabledAnim$lambda$lambda);
    $this$Keyframes.j2x(CheckboxEnabledAnim$lambda$lambda_0);
    return Unit_instance;
  }
  function CheckboxEnabledAnim$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 0);
  }
  function CheckboxEnabledAnim$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 1);
  }
  function CheckboxIconContainerStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.a2w(CheckboxIconContainerStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().o34().z2i()), CheckboxVars_getInstance().m34().z2i());
    var tmp_0 = CheckboxVars_getInstance().l34().z2i();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(borderRadius(border(tmp, tmp_0, 'solid', CheckboxVars_getInstance().h31().z2i()), CheckboxVars_getInstance().k34().z2i()), Companion_instance_2.s2j(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().v34().z2i()));
  }
  function UncheckedCheckboxIconContainerVariant$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().r34().z2i());
  }
  function CheckedCheckboxIconContainerVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.a2w(CheckedCheckboxIconContainerVariant$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().t34().z2i());
    return border_0(tmp, CheckedCheckboxIconContainerVariant$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.d2s(CheckboxVars_getInstance().t34().z2i());
    return Unit_instance;
  }
  function CheckboxIconStyle$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().m34().z2i()), CheckboxVars_getInstance().s34().z2i());
  }
  function CheckboxInputVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.a2w(CheckboxInputVariant$lambda$lambda);
    $this$addVariant.o2u(':focus-visible + *', CheckboxInputVariant$lambda$lambda_0);
    $this$addVariant.o2u(':not([aria-disabled]):hover + *', CheckboxInputVariant$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow_0(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().q34().z2i(), CheckboxVars_getInstance().p34().z2i());
  }
  function CheckboxInputVariant$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().t34(), CheckboxVars_getInstance().u34().z2i());
  }
  function BorderColor$factory_0() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.h31();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.k34();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.l34();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.m34();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.n34();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.g33();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.o34();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.p34();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.q34();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.r34();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.s34();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.t34();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.u34();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.v34();
    }, null);
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp = rowClasses(Companion_instance, VOID, CenterVertically_instance);
      CheckboxStyle = CssStyle(tmp, CheckboxStyle$lambda);
      CheckboxEnabledAnim = new Keyframes(CheckboxEnabledAnim$lambda);
      CheckboxIconContainerStyle = CssStyle(VOID, CheckboxIconContainerStyle$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant = addVariantBase(tmp_0, VOID, UncheckedCheckboxIconContainerVariant$lambda);
      var tmp_1 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant = addVariant(tmp_1, VOID, CheckedCheckboxIconContainerVariant$lambda);
      var tmp_2 = Companion_instance_5;
      CheckboxIconStyle = base(tmp_2, VOID, CheckboxIconStyle$lambda);
      var tmp_3 = get_InputStyle();
      CheckboxInputVariant = addVariant(tmp_3, VOID, CheckboxInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable = 0;
      com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable = 0;
      com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable = 0;
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle;
  }
  var InputGroupStyle;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle;
  }
  var InputStyle;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant;
  }
  var OutlinedInputVariant;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant;
  }
  var FilledInputVariant;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant;
  }
  var FlushedInputVariant;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant;
  }
  var UnstyledInputVariant;
  var com_varabyte_kobweb_silk_components_forms_InputDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_InputVars$stable;
  var com_varabyte_kobweb_silk_components_forms_InputParams$stable;
  var com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable;
  var com_varabyte_kobweb_silk_components_forms_InputSize$stable;
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().z2i();
    tmp.z34_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.a35_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().z2i();
    tmp_0.b35_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.c35_1 = StyleVariable('silk');
    this.d35_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().f31().z2i();
    tmp_1.e35_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.f35_1 = StyleVariable('silk');
    this.g35_1 = StyleVariable('silk');
    this.h35_1 = StyleVariable('silk');
    this.i35_1 = StyleVariable('silk');
    this.j35_1 = StyleVariable('silk');
    this.k35_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().z2i();
    tmp_2.l35_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().z2i();
    tmp_3.m35_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.n35_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.o35_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(InputVars).h31 = function () {
    return this.z34_1.f2j(this, BorderColor$factory_1());
  };
  protoOf(InputVars).k34 = function () {
    return this.a35_1.f2j(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).p35 = function () {
    return this.b35_1.f2j(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).q35 = function () {
    return this.c35_1.f2j(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).r35 = function () {
    return this.d35_1.f2j(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).n31 = function () {
    return this.e35_1.f2j(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).s35 = function () {
    return this.f35_1.f2j(this, FilledColor$factory());
  };
  protoOf(InputVars).t35 = function () {
    return this.g35_1.f2j(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).u35 = function () {
    return this.h35_1.f2j(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).g33 = function () {
    return this.i35_1.f2j(this, FontSize$factory_1());
  };
  protoOf(InputVars).h33 = function () {
    return this.j35_1.f2j(this, Height$factory_0());
  };
  protoOf(InputVars).v35 = function () {
    return this.k35_1.f2j(this, Padding$factory());
  };
  protoOf(InputVars).w35 = function () {
    return this.l35_1.f2j(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).x35 = function () {
    return this.m35_1.f2j(this, PlaceholderColor$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().v35().z2i();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Companion_2() {
    Companion_instance_22 = this;
    this.y35_1 = new InputSize(FontSizeVars_getInstance().r33().z2i(), get_cssRem(1.25), get_cssRem(0.375), BorderRadiusVars_getInstance().r33().z2i());
    this.z35_1 = new InputSize(FontSizeVars_getInstance().s33().z2i(), get_cssRem(1.75), get_cssRem(0.5), BorderRadiusVars_getInstance().s33().z2i());
    this.a36_1 = new InputSize(FontSizeVars_getInstance().t33().z2i(), get_cssRem(2.25), get_cssRem(0.625), BorderRadiusVars_getInstance().t33().z2i());
    this.b36_1 = new InputSize(FontSizeVars_getInstance().u33().z2i(), get_cssRem(2.5), get_cssRem(0.75), BorderRadiusVars_getInstance().t33().z2i());
  }
  var Companion_instance_22;
  function Companion_getInstance_3() {
    if (Companion_instance_22 == null)
      new Companion_2();
    return Companion_instance_22;
  }
  function InputSize(fontSize, height, padding, borderRadius) {
    Companion_getInstance_3();
    Base_init_$Init$(setVariable(setVariable(setVariable(setVariable(Companion_instance, InputVars_getInstance().g33(), fontSize), InputVars_getInstance().h33(), height), InputVars_getInstance().v35(), padding), InputVars_getInstance().k34(), borderRadius), VOID, this);
  }
  function InputGroupStyle$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.f2r());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border(tmp_1, tmp_2, 'solid', Colors_instance.f2r()), InputVars_getInstance().k34().z2i()), InputVars_getInstance().g33().z2i());
  }
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$CssStyle.a2w(InputStyle$lambda$lambda);
    var tmp = get_placeholder($this$CssStyle);
    tmp.f2v(InputStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_instance, Companion_instance_14.b2h()), get_ColorVar().z2i()), InputVars_getInstance().h33().z2i()), InputVars_getInstance().g33().z2i()), Colors_instance.f2r());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.f2r());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp_1, tmp_2, 'solid', Colors_instance.f2r()), Companion_instance_2.s2j(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().n31().z2i()));
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().w35().z2i()), InputVars_getInstance().x35().z2i());
  }
  function OutlinedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.a2w(OutlinedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.f2v(OutlinedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).o2v(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.f2v(OutlinedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).o2v(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.f2v(OutlinedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(border(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().k34().z2i());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', InputVars_getInstance().h31().z2i());
  }
  function OutlinedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().r35().z2i());
  }
  function OutlinedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border_0(tmp, OutlinedInputVariant$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.d2s(InputVars_getInstance().q35().z2i());
    return Unit_instance;
  }
  function OutlinedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().p35().z2i());
  }
  function FilledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.a2w(FilledInputVariant$lambda$lambda);
    var tmp = get_hover($this$addVariant).o2v(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp.f2v(FilledInputVariant$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    tmp_0.f2v(FilledInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).o2v(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.f2v(FilledInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FilledInputVariant$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().s35().z2i()), InputVars_getInstance().k34().z2i());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Colors_instance.f2r());
  }
  function FilledInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().t35().z2i());
  }
  function FilledInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().r35().z2i());
  }
  function FilledInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().u35().z2i()), InputVars_getInstance().p35().z2i());
  }
  function FilledInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.d2s($color);
      return Unit_instance;
    };
  }
  function FlushedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.a2w(FlushedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.f2v(FlushedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).o2v(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.f2v(FlushedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).o2v(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.f2v(FlushedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FlushedInputVariant$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().h31().z2i());
  }
  function FlushedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().r35().z2i());
  }
  function FlushedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border_0(tmp, FlushedInputVariant$lambda$lambda$lambda);
  }
  function FlushedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.d2s(InputVars_getInstance().q35().z2i());
    return Unit_instance;
  }
  function FlushedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().p35().z2i());
  }
  function FlushedInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.d2s($color);
      return Unit_instance;
    };
  }
  function UnstyledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function BorderColor$factory_1() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.h31();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.k34();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.p35();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.q35();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.r35();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.n31();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.s35();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.t35();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.u35();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.g33();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.h33();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.v35();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.w35();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.x35();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_1(size(border(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_4.p2i()), Companion_instance_11.k2j());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_instance_5;
      InputGroupStyle = base(tmp_0, VOID, InputGroupStyle$lambda);
      InputStyle = CssStyle(VOID, InputStyle$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant = addVariant(tmp_1, VOID, OutlinedInputVariant$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant = addVariant(tmp_2, VOID, FilledInputVariant$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant = addVariant(tmp_3, VOID, FlushedInputVariant$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant = addVariant(tmp_4, VOID, UnstyledInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_InputDefaults$stable = 0;
      com_varabyte_kobweb_silk_components_forms_InputVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputParams$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputSize$stable = 0;
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle;
  }
  var SwitchStyle;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle;
  }
  var SwitchTrackStyle;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant;
  }
  var SwitchInputVariant;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle;
  }
  var SwitchThumbStyle;
  var com_varabyte_kobweb_silk_components_forms_SwitchVars$stable;
  var com_varabyte_kobweb_silk_components_forms_SwitchSize$stable;
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.g36_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.h36_1 = StyleVariable('silk');
    this.i36_1 = StyleVariable('silk');
    this.j36_1 = StyleVariable('silk');
    this.k36_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().z2i();
    tmp_0.l36_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.m36_1 = StyleVariable('silk');
    this.n36_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().p36().z2i();
    tmp_1.o36_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(SwitchVars).k34 = function () {
    return this.g36_1.f2j(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).q36 = function () {
    return this.h36_1.f2j(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).r36 = function () {
    return this.i36_1.f2j(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).s36 = function () {
    return this.j36_1.f2j(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).t36 = function () {
    return this.k36_1.f2j(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).u36 = function () {
    return this.l36_1.f2j(this, FocusColor$factory());
  };
  protoOf(SwitchVars).v36 = function () {
    return this.m36_1.f2j(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).w36 = function () {
    return this.n36_1.f2j(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).v34 = function () {
    return this.o36_1.f2j(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function Companion_3() {
    Companion_instance_23 = this;
    this.x36_1 = new SwitchSize(get_cssRem(1.375), get_cssRem(0.75));
    this.y36_1 = new SwitchSize(get_cssRem(1.875), get_cssRem(1));
    this.z36_1 = new SwitchSize(get_cssRem(2.875), get_cssRem(1.5));
  }
  var Companion_instance_23;
  function Companion_getInstance_4() {
    if (Companion_instance_23 == null)
      new Companion_3();
    return Companion_instance_23;
  }
  function SwitchSize(width, height, padding) {
    Companion_getInstance_4();
    padding = padding === VOID ? get_cssRem(0.188) : padding;
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, SwitchVars_getInstance().q36(), width), SwitchVars_getInstance().r36(), height), SwitchVars_getInstance().s36(), padding), VOID, this);
  }
  function SwitchStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$lambda($this$CssStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$CssStyle.a2w(SwitchTrackStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).o2v(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.f2v(SwitchTrackStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition_0(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_instance, SwitchVars_getInstance().q36().z2i()), SwitchVars_getInstance().q36().z2i()), SwitchVars_getInstance().r36().z2i()), SwitchVars_getInstance().r36().z2i()), SwitchVars_getInstance().s36().z2i()), SwitchVars_getInstance().k34().z2i()), SwitchVars_getInstance().t36().z2i()), [Companion_instance_2.q2j('background-color', SwitchVars_getInstance().v34().z2i())]), Companion_instance_15.r2g());
  }
  function SwitchTrackStyle$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.y2g());
  }
  function SwitchInputVariant$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.a2w(SwitchInputVariant$lambda$lambda);
    $this$addVariant.o2u(':focus-visible + *', SwitchInputVariant$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow_0(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().u36().z2i());
  }
  function SwitchThumbStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition_0(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().r36().z2i()), SwitchVars_getInstance().k34().z2i()), SwitchVars_getInstance().w36().z2i()), SwitchVars_getInstance().v36().z2i()), [Companion_instance_2.q2j('translate', SwitchVars_getInstance().v34().z2i())]);
  }
  function BorderRadius$factory_1() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.k34();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.q36();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.r36();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.s36();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.t36();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.u36();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.v36();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.w36();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.v34();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_instance_5;
      SwitchStyle = base(tmp, VOID, SwitchStyle$lambda);
      var tmp_0 = ariaHidden(tabIndex(Companion_instance, -1));
      SwitchTrackStyle = CssStyle(tmp_0, SwitchTrackStyle$lambda);
      var tmp_1 = get_InputStyle();
      SwitchInputVariant = addVariant(tmp_1, VOID, SwitchInputVariant$lambda);
      var tmp_2 = Companion_instance_5;
      SwitchThumbStyle = base(tmp_2, VOID, SwitchThumbStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_SwitchVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_SwitchSize$stable = 0;
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle;
  }
  var CanvasStyle;
  var com_varabyte_kobweb_silk_components_graphics_RenderScope$stable;
  var com_varabyte_kobweb_silk_components_graphics_CanvasRepainter$stable;
  function CanvasStyle$lambda($this$CssStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_instance;
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle = CssStyle(VOID, CanvasStyle$lambda);
      com_varabyte_kobweb_silk_components_graphics_RenderScope$stable = 0;
      com_varabyte_kobweb_silk_components_graphics_CanvasRepainter$stable = 8;
    }
  }
  function ExclaimIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(1482883947);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a1f(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.w1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.p2k(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$ExclaimIconKt_getInstance().a37_1, $composer_0, 24576, 2);
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(ExclaimIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$ExclaimIconKt$lambda_1$lambda_dh78d4($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.d1e(-16435893);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (false || it === Companion_getInstance().v18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$ExclaimIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$ExclaimIconKt$lambda_1$lambda$lambda_mq5g43;
      $composer_0.w1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.f1e();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$ExclaimIconKt$lambda_1$lambda$lambda_mq5g43($this$Path) {
    $this$Path.d2l('M 0 1.75 C 0 0.784 0.784 0 1.75 0 h 12.5 C 15.216 0 16 0.784 16 1.75 v 9.5 A 1.75 1.75 0 0 1 14.25 13 H 8.06 l -2.573 2.573 A 1.458 1.458 0 0 1 3 14.543 V 13 H 1.75 A 1.75 1.75 0 0 1 0 11.25 Z m 1.75 -0.25 a 0.25 0.25 0 0 0 -0.25 0.25 v 9.5 c 0 0.138 0.112 0.25 0.25 0.25 h 2 a 0.75 0.75 0 0 1 0.75 0.75 v 2.19 l 2.72 -2.72 a 0.749 0.749 0 0 1 0.53 -0.22 h 6.5 a 0.25 0.25 0 0 0 0.25 -0.25 v -9.5 a 0.25 0.25 0 0 0 -0.25 -0.25 Z m 7 2.25 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 9 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_instance;
  }
  function ComposableSingletons$ExclaimIconKt() {
    ComposableSingletons$ExclaimIconKt_instance = this;
    var tmp = this;
    tmp.a37_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-675482057, false, ComposableSingletons$ExclaimIconKt$lambda_1$lambda_dh78d4));
  }
  var ComposableSingletons$ExclaimIconKt_instance;
  function ComposableSingletons$ExclaimIconKt_getInstance() {
    if (ComposableSingletons$ExclaimIconKt_instance == null)
      new ComposableSingletons$ExclaimIconKt();
    return ComposableSingletons$ExclaimIconKt_instance;
  }
  function ExclaimIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ExclaimIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function InfoIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(197779673);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a1f(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.w1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.p2k(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$InfoIconKt_getInstance().b37_1, $composer_0, 24576, 2);
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(InfoIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$InfoIconKt$lambda_1$lambda_7lqjxh($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.d1e(657486137);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (false || it === Companion_getInstance().v18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$InfoIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$InfoIconKt$lambda_1$lambda$lambda_59q3v4;
      $composer_0.w1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.f1e();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$InfoIconKt$lambda_1$lambda$lambda_59q3v4($this$Path) {
    $this$Path.d2l('M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z');
    return Unit_instance;
  }
  function ComposableSingletons$InfoIconKt() {
    ComposableSingletons$InfoIconKt_instance = this;
    var tmp = this;
    tmp.b37_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-954934107, false, ComposableSingletons$InfoIconKt$lambda_1$lambda_7lqjxh));
  }
  var ComposableSingletons$InfoIconKt_instance;
  function ComposableSingletons$InfoIconKt_getInstance() {
    if (ComposableSingletons$InfoIconKt_instance == null)
      new ComposableSingletons$InfoIconKt();
    return ComposableSingletons$InfoIconKt_instance;
  }
  function InfoIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      InfoIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function LightbulbIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(-1309236181);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a1f(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.w1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.p2k(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$LightbulbIconKt_getInstance().c37_1, $composer_0, 24576, 2);
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(LightbulbIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$LightbulbIconKt$lambda_1$lambda_abne2a($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.d1e(1126884965);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (false || it === Companion_getInstance().v18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$LightbulbIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$LightbulbIconKt$lambda_1$lambda$lambda_r2tn8j;
      $composer_0.w1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.f1e();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$LightbulbIconKt$lambda_1$lambda$lambda_r2tn8j($this$Path) {
    $this$Path.d2l('M 8 1.5 c -2.363 0 -4 1.69 -4 3.75 c 0 0.984 0.424 1.625 0.984 2.304 l 0.214 0.253 c 0.223 0.264 0.47 0.556 0.673 0.848 c 0.284 0.411 0.537 0.896 0.621 1.49 a 0.75 0.75 0 0 1 -1.484 0.211 c -0.04 -0.282 -0.163 -0.547 -0.37 -0.847 a 8.456 8.456 0 0 0 -0.542 -0.68 c -0.084 -0.1 -0.173 -0.205 -0.268 -0.32 C 3.201 7.75 2.5 6.766 2.5 5.25 C 2.5 2.31 4.863 0 8 0 s 5.5 2.31 5.5 5.25 c 0 1.516 -0.701 2.5 -1.328 3.259 c -0.095 0.115 -0.184 0.22 -0.268 0.319 c -0.207 0.245 -0.383 0.453 -0.541 0.681 c -0.208 0.3 -0.33 0.565 -0.37 0.847 a 0.751 0.751 0 0 1 -1.485 -0.212 c 0.084 -0.593 0.337 -1.078 0.621 -1.489 c 0.203 -0.292 0.45 -0.584 0.673 -0.848 c 0.075 -0.088 0.147 -0.173 0.213 -0.253 c 0.561 -0.679 0.985 -1.32 0.985 -2.304 c 0 -2.06 -1.637 -3.75 -4 -3.75 Z M 5.75 12 h 4.5 a 0.75 0.75 0 0 1 0 1.5 h -4.5 a 0.75 0.75 0 0 1 0 -1.5 Z M 6 15.25 a 0.75 0.75 0 0 1 0.75 -0.75 h 2.5 a 0.75 0.75 0 0 1 0 1.5 h -2.5 a 0.75 0.75 0 0 1 -0.75 -0.75 Z');
    return Unit_instance;
  }
  function ComposableSingletons$LightbulbIconKt() {
    ComposableSingletons$LightbulbIconKt_instance = this;
    var tmp = this;
    tmp.c37_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(977424631, false, ComposableSingletons$LightbulbIconKt$lambda_1$lambda_abne2a));
  }
  var ComposableSingletons$LightbulbIconKt_instance;
  function ComposableSingletons$LightbulbIconKt_getInstance() {
    if (ComposableSingletons$LightbulbIconKt_instance == null)
      new ComposableSingletons$LightbulbIconKt();
    return ComposableSingletons$LightbulbIconKt_instance;
  }
  function LightbulbIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      LightbulbIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function QuestionIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(-1830362903);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a1f(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.w1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      createIcon(null, null, new Stroke(2), toAttrs(modifier_0._v), ComposableSingletons$QuestionIconKt_getInstance().d37_1, $composer_0, 24576, 3);
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(QuestionIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda_if12nh($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.d1e(1001020366);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (false || it === Companion_getInstance().v18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuestionIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs;
      $composer_0.w1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.f1e();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    $composer_0.d1e(1001024951);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.l1f();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().v18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuestionIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_0;
      $composer_0.w1f(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.f1e();
    Path($this$createIcon, tmp1_group, $composer_0, 48 | 14 & $changed);
    $composer_0.d1e(1001029844);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.l1f();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().v18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuestionIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_1;
      $composer_0.w1f(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.f1e();
    Circle($this$createIcon, tmp2_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs($this$Path) {
    $this$Path.e2l(SVGStrokeLineCap_Round_getInstance());
    $this$Path.d2l('M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25');
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_0($this$Path) {
    $this$Path.e2l(SVGStrokeLineCap_Round_getInstance());
    $this$Path.d2l('M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0');
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_1($this$Circle) {
    $this$Circle.i2l(10);
    $this$Circle.j2l(12);
    $this$Circle.k2l(12);
    $this$Circle.h2l(11.25);
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt() {
    ComposableSingletons$QuestionIconKt_instance = this;
    var tmp = this;
    tmp.d37_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-1550888779, false, ComposableSingletons$QuestionIconKt$lambda_1$lambda_if12nh));
  }
  var ComposableSingletons$QuestionIconKt_instance;
  function ComposableSingletons$QuestionIconKt_getInstance() {
    if (ComposableSingletons$QuestionIconKt_instance == null)
      new ComposableSingletons$QuestionIconKt();
    return ComposableSingletons$QuestionIconKt_instance;
  }
  function QuestionIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuestionIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function QuoteIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(-1516926133);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a1f(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.w1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.p2k(300);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$QuoteIconKt_getInstance().e37_1, $composer_0, 24576, 2);
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(QuoteIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$QuoteIconKt$lambda_1$lambda_h2zdpn($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.d1e(359856060);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (false || it === Companion_getInstance().v18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuoteIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$QuoteIconKt$lambda_1$lambda$lambda_cdcof4;
      $composer_0.w1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.f1e();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$QuoteIconKt$lambda_1$lambda$lambda_cdcof4($this$Path) {
    $this$Path.d2l('m175.6 204.73 22.19 46.49C258.61 223.15 278 189.49 278 151.18V48.78H175.6v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55zm-153.6 0 22.19 46.49c60.83-28.07 80.21-61.73 80.21-100.04V48.78H22v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55z');
    return Unit_instance;
  }
  function ComposableSingletons$QuoteIconKt() {
    ComposableSingletons$QuoteIconKt_instance = this;
    var tmp = this;
    tmp.e37_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-1173306345, false, ComposableSingletons$QuoteIconKt$lambda_1$lambda_h2zdpn));
  }
  var ComposableSingletons$QuoteIconKt_instance;
  function ComposableSingletons$QuoteIconKt_getInstance() {
    if (ComposableSingletons$QuoteIconKt_instance == null)
      new ComposableSingletons$QuoteIconKt();
    return ComposableSingletons$QuoteIconKt_instance;
  }
  function QuoteIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuoteIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function StopIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(637478449);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a1f(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.w1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.p2k(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$StopIconKt_getInstance().f37_1, $composer_0, 24576, 2);
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(StopIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$StopIconKt$lambda_1$lambda_f41c6n($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.d1e(-6619268);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (false || it === Companion_getInstance().v18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$StopIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$StopIconKt$lambda_1$lambda$lambda_g94738;
      $composer_0.w1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.f1e();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$StopIconKt$lambda_1$lambda$lambda_g94738($this$Path) {
    $this$Path.d2l('M 4.47 0.22 A 0.749 0.749 0 0 1 5 0 h 6 c 0.199 0 0.389 0.079 0.53 0.22 l 4.25 4.25 c 0.141 0.14 0.22 0.331 0.22 0.53 v 6 a 0.749 0.749 0 0 1 -0.22 0.53 l -4.25 4.25 A 0.749 0.749 0 0 1 11 16 H 5 a 0.749 0.749 0 0 1 -0.53 -0.22 L 0.22 11.53 A 0.749 0.749 0 0 1 0 11 V 5 c 0 -0.199 0.079 -0.389 0.22 -0.53 Z m 0.84 1.28 L 1.5 5.31 v 5.38 l 3.81 3.81 h 5.38 l 3.81 -3.81 V 5.31 L 10.69 1.5 Z M 8 4 a 0.75 0.75 0 0 1 0.75 0.75 v 3.5 a 0.75 0.75 0 0 1 -1.5 0 v -3.5 A 0.75 0.75 0 0 1 8 4 Z m 0 8 a 1 1 0 1 1 0 -2 a 1 1 0 0 1 0 2 Z');
    return Unit_instance;
  }
  function ComposableSingletons$StopIconKt() {
    ComposableSingletons$StopIconKt_instance = this;
    var tmp = this;
    tmp.f37_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-515235331, false, ComposableSingletons$StopIconKt$lambda_1$lambda_f41c6n));
  }
  var ComposableSingletons$StopIconKt_instance;
  function ComposableSingletons$StopIconKt_getInstance() {
    if (ComposableSingletons$StopIconKt_instance == null)
      new ComposableSingletons$StopIconKt();
    return ComposableSingletons$StopIconKt_instance;
  }
  function StopIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      StopIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function WarningIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(1461404811);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a1f(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.w1d()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_16.p2k(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$WarningIconKt_getInstance().g37_1, $composer_0, 24576, 2);
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(WarningIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$WarningIconKt$lambda_1$lambda_abye4r($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.d1e(613140820);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (false || it === Companion_getInstance().v18_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$WarningIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$WarningIconKt$lambda_1$lambda$lambda_x4zgqo;
      $composer_0.w1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.f1e();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$WarningIconKt$lambda_1$lambda$lambda_x4zgqo($this$Path) {
    $this$Path.d2l('M 6.457 1.047 c 0.659 -1.234 2.427 -1.234 3.086 0 l 6.082 11.378 A 1.75 1.75 0 0 1 14.082 15 H 1.918 a 1.75 1.75 0 0 1 -1.543 -2.575 Z m 1.763 0.707 a 0.25 0.25 0 0 0 -0.44 0 L 1.698 13.132 a 0.25 0.25 0 0 0 0.22 0.368 h 12.164 a 0.25 0.25 0 0 0 0.22 -0.368 Z m 0.53 3.996 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 11 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_instance;
  }
  function ComposableSingletons$WarningIconKt() {
    ComposableSingletons$WarningIconKt_instance = this;
    var tmp = this;
    tmp.g37_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-696961193, false, ComposableSingletons$WarningIconKt$lambda_1$lambda_abye4r));
  }
  var ComposableSingletons$WarningIconKt_instance;
  function ComposableSingletons$WarningIconKt_getInstance() {
    if (ComposableSingletons$WarningIconKt_instance == null)
      new ComposableSingletons$WarningIconKt();
    return ComposableSingletons$WarningIconKt_instance;
  }
  function WarningIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      WarningIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable;
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable;
  function createIcon(viewBox, width, renderStyle, attrs, content, $composer, $changed, $default) {
    var viewBox_0 = {_v: viewBox};
    var width_0 = {_v: width};
    var renderStyle_0 = {_v: renderStyle};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(-1506534634);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && (($changed & 8) === 0 ? $composer_0.n15(viewBox_0._v) : $composer_0.a1f(viewBox_0._v)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.a1f(width_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && (($changed & 512) === 0 ? $composer_0.n15(renderStyle_0._v) : $composer_0.a1f(renderStyle_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.a1f(attrs_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.a1f(content) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.w1d()) {
      $composer_0.g1e();
      if (($changed & 1) === 0 || $composer_0.k1e()) {
        if (!(($default & 1) === 0)) {
          viewBox_0._v = Companion_instance_16.p2k(24);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          width_0._v = get_em(1);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          renderStyle_0._v = new Stroke();
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          attrs_0._v = null;
        }
      } else {
        $composer_0.m18();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.h1e();
      $composer_0.d1e(1471101172);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.a1f(width_0._v) | (($dirty & 14 ^ 6) > 4 && $composer_0.a1f(viewBox_0._v) || ($dirty & 6) === 4)) | (($dirty & 896 ^ 384) > 256 && $composer_0.a1f(renderStyle_0._v) || ($dirty & 384) === 256)) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.l1f();
      var tmp;
      if (invalid || it === Companion_getInstance().v18_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>' call
        var value = createIcon$lambda(width_0, viewBox_0, renderStyle_0, attrs_0);
        tmp0.w1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.f1e();
      Svg(tmp0_group, content, $composer_0, 112 & $dirty >> 9, 0);
    } else {
      $composer_0.m18();
    }
    var tmp1_safe_receiver = $composer_0.e1g();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.r1l(createIcon$lambda_0(viewBox_0, width_0, renderStyle_0, attrs_0, content, $changed, $default));
    }
  }
  function Fill() {
  }
  function Stroke(strokeWidth) {
    strokeWidth = strokeWidth === VOID ? null : strokeWidth;
    this.h37_1 = strokeWidth;
  }
  function createIcon$lambda($width, $viewBox, $renderStyle, $attrs) {
    return function ($this$Svg) {
      var tmp0_safe_receiver = $width._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
        $this$Svg.z2k(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $viewBox._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
        $this$Svg.a2l(tmp1_safe_receiver.q2k_1, tmp1_safe_receiver.r2k_1, tmp1_safe_receiver.s2k_1, tmp1_safe_receiver.t2k_1);
      }
      var tmp2_safe_receiver = $renderStyle._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
        var tmp;
        if (tmp2_safe_receiver instanceof Fill) {
          $this$Svg.y2k(SVGFillType_CurrentColor_getInstance());
          tmp = $this$Svg.w2k(SVGStrokeType_None_getInstance());
        } else {
          if (tmp2_safe_receiver instanceof Stroke) {
            $this$Svg.w2k(SVGStrokeType_CurrentColor_getInstance());
            $this$Svg.y2k(SVGFillType_None_getInstance());
            var tmp1_safe_receiver_0 = tmp2_safe_receiver.h37_1;
            var tmp_0;
            if (tmp1_safe_receiver_0 == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              tmp_0 = $this$Svg.x2k(tmp1_safe_receiver_0);
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var tmp3_safe_receiver = $attrs._v;
      if (tmp3_safe_receiver == null)
        null;
      else
        tmp3_safe_receiver($this$Svg);
      return Unit_instance;
    };
  }
  function createIcon$lambda_0($viewBox, $width, $renderStyle, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      createIcon($viewBox._v, $width._v, $renderStyle._v, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_HorizontalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return HorizontalDividerStyle;
  }
  var HorizontalDividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle;
  }
  var VerticalDividerStyle;
  var com_varabyte_kobweb_silk_components_layout_DividerVars$stable;
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().z2i();
    tmp.i37_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.j37_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(DividerVars).g31 = function () {
    return this.i37_1.f2j(this, Color$factory_2());
  };
  protoOf(DividerVars).k37 = function () {
    return this.j37_1.f2j(this, Length$factory());
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().g31().z2i()), DividerVars_getInstance().k37().z2i());
  }
  function VerticalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().g31().z2i()), DividerVars_getInstance().k37().z2i());
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.g31();
    }, null);
  }
  function Length$factory() {
    return getPropertyCallableRef('Length', 1, KProperty1, function (receiver) {
      return receiver.k37();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_instance_5;
      HorizontalDividerStyle = base(tmp, VOID, HorizontalDividerStyle$lambda);
      var tmp_0 = Companion_instance_5;
      VerticalDividerStyle = base(tmp_0, VOID, VerticalDividerStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_DividerVars$stable = 8;
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle;
  }
  var SimpleGridStyle;
  function SimpleGridStyle$lambda($this$CssStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$CssStyle.a2w(SimpleGridStyle$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = get_columnVariables().i2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.b2();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.c2();
      $this$CssStyle.t2w(breakpoint, SimpleGridStyle$lambda$lambda_0(variable));
    }
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.l2h(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.z2i();
      $this$gridTemplateColumns.h2h(tmp, SimpleGridStyle$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$lambda$lambda$lambda($variable));
    };
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var _iterator__ex2g4s = this_0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.j2_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.v4(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle = CssStyle(VOID, SimpleGridStyle$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle;
  }
  var SurfaceStyle;
  var com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable;
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().z2i();
    tmp.l37_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().z2i();
    tmp_0.m37_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(SurfaceVars).i31 = function () {
    return this.l37_1.f2j(this, BackgroundColor$factory_1());
  };
  protoOf(SurfaceVars).g31 = function () {
    return this.m37_1.f2j(this, Color$factory_3());
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function Surface(modifier, variant, colorModeOverride, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var colorModeOverride_0 = {_v: colorModeOverride};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(-2142125922);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a1f(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.n15(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.n15(colorModeOverride_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.a1f(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ((($changed & 32768) === 0 ? $composer_0.n15(ref_0._v) : $composer_0.a1f(ref_0._v)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.a1f(content) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.w1d()) {
      $composer_0.g1e();
      if (($changed & 1) === 0 || $composer_0.k1e()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          colorModeOverride_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = TopStart_instance;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.m18();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.h1e();
      $composer_0.d1e(-1737049201);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l1f();
      var tmp;
      if (false || it === Companion_getInstance().v18_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.w1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.f1e();
      var surfaceElement$delegate = tmp0_group;
      var tmp_1 = toModifier(get_SurfaceStyle(), [variant_0._v], $composer_0, 6).v2p(modifier_0._v);
      var tmp_2 = contentAlignment_0._v;
      $composer_0.d1e(-1737043383);
      var tmp2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 57344) === 16384 || (!(($dirty & 32768) === 0) && $composer_0.a1f(ref_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp2.l1f();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance().v18_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value_0 = Surface$lambda_1(ref_0, surfaceElement$delegate);
        tmp2.w1f(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.f1e();
      var tmp_5 = refScope(tmp1_group);
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1615126744, true, Surface$lambda_2(colorModeOverride_0, content, surfaceElement$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.n15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.l1f();
      var tmp_6;
      if (invalid_0 || it_1 === Companion_getInstance().v18_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_1.w1f(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_1, tmp_2, tmp_5, tmp0, $composer_0, 3072 | 112 & $dirty >> 6, 0);
    } else {
      $composer_0.m18();
    }
    var tmp2_safe_receiver = $composer_0.e1g();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.r1l(Surface$lambda_3(modifier_0, variant_0, colorModeOverride_0, contentAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.c2();
  }
  function Surface$lambda_0($surfaceElement$delegate, _set____db54di) {
    _init_properties_Surface_kt__8o7unv();
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $surfaceElement$delegate.ts(_set____db54di);
    return Unit_instance;
  }
  function SurfaceStyle$lambda($this$CssStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$CssStyle.a2w(SurfaceStyle$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().i31().z2i()), SurfaceVars_getInstance().g31().z2i());
  }
  function Surface$lambda$lambda($surfaceElement$delegate) {
    return function (it) {
      Surface$lambda_0($surfaceElement$delegate, it);
      return Unit_instance;
    };
  }
  function Surface$lambda_1($ref, $surfaceElement$delegate) {
    return function ($this$refScope) {
      $this$refScope.c2k($ref._v);
      $this$refScope.b2k([], Surface$lambda$lambda($surfaceElement$delegate));
      return Unit_instance;
    };
  }
  function Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation) {
    this.v37_1 = $surfaceElement;
    this.w37_1 = $currColorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$lambda$slambda).g1o = function ($this$LaunchedEffect, $completion) {
    var tmp = this.h1o($this$LaunchedEffect, $completion);
    tmp.v8_1 = Unit_instance;
    tmp.w8_1 = null;
    return tmp.b9();
  };
  protoOf(Surface$lambda$lambda$slambda).p9 = function (p1, $completion) {
    return this.g1o((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$lambda$slambda).b9 = function () {
    var suspendResult = this.v8_1;
    $sm: do
      try {
        var tmp = this.t8_1;
        if (tmp === 0) {
          this.u8_1 = 1;
          setSilkWidgetVariables(this.v37_1, this.w37_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.w8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$lambda$lambda$slambda).h1o = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$lambda$slambda(this.v37_1, this.w37_1, completion);
    i.x37_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$lambda$lambda$slambda_0($surfaceElement, $currColorMode, resultContinuation) {
    var i = new Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.g1o($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_0($surfaceElement, $content, $this_Box) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
        var currColorMode = Companion_instance_17.y2w($composer_0, 6);
        $composer_0.d1e(1829026742);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.a1f($surfaceElement) | $composer_0.n15(currColorMode));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.l1f();
        var tmp_0;
        if (invalid || it === Companion_getInstance().v18_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = Surface$lambda$lambda$slambda_0($surfaceElement, currColorMode, null);
          $composer_0.w1f(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.f1e();
        LaunchedEffect(currColorMode, tmp0_group, $composer_0, 0);
        tmp = $content($this_Box, $composer_0, 0);
      } else {
        $composer_0.m18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function Surface$lambda_2($colorModeOverride, $content, $surfaceElement$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.n15($this$Box) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.w1d()) {
        if (!($colorModeOverride._v == null)) {
          $composer_0.d1e(-708350689);
          var tmp0_safe_receiver = Surface$lambda($surfaceElement$delegate);
          var tmp_1;
          if (tmp0_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_2 = $colorModeOverride._v.l2y();
            // Inline function 'kotlin.run' call
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var dispatchReceiver = rememberComposableLambda(-346828591, true, Surface$lambda$lambda_0(tmp0_safe_receiver, $content, $this$Box), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_1 = $composer_0;
            sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid = $composer_1.n15(dispatchReceiver);
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it = $composer_1.l1f();
            var tmp_3;
            if (invalid || it === Companion_getInstance().v18_1) {
              // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = ComposableLambda$invoke$ref_13(dispatchReceiver);
              $composer_1.w1f(value);
              tmp_3 = value;
            } else {
              tmp_3 = it;
            }
            var tmp_4 = tmp_3;
            var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
            sourceInformationMarkerEnd($composer_1);
            CompositionLocalProvider(tmp_2, tmp0, $composer_0, 56);
            tmp_1 = Unit_instance;
          }
          $composer_0.f1e();
        } else {
          $composer_0.d1e(-707941055);
          $content($this$Box, $composer_0, 14 & $dirty);
          $composer_0.f1e();
        }
        tmp_0 = Unit_instance;
      } else {
        $composer_0.m18();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function Surface$lambda_3($modifier, $variant, $colorModeOverride, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface($modifier._v, $variant._v, $colorModeOverride._v, $contentAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.i31();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.g31();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle = CssStyle(VOID, SurfaceStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable;
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle;
  }
  var OverlayStyle;
  var com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable;
  function OverlayVars() {
    OverlayVars_instance = this;
    this.y37_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).i31 = function () {
    return this.y37_1.f2j(this, BackgroundColor$factory_2());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayStyle$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().i31().z2i());
  }
  function BackgroundColor$factory_2() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.i31();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_instance_5;
      OverlayStyle = base(tmp, VOID, OverlayStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable;
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle;
  }
  var PopupStyle;
  var com_varabyte_kobweb_silk_components_overlay_PopupVars$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupScope$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable;
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().p36().z2i();
    tmp.z37_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
  }
  protoOf(PopupVars).v34 = function () {
    return this.z37_1.f2j(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition_0(Companion_instance, [Companion_instance_2.q2j('opacity', PopupVars_getInstance().v34().z2i())]);
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.v34();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_instance_5;
      PopupStyle = base(tmp, VOID, PopupStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_PopupVars$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupScope$stable = 0;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable = 0;
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle;
  }
  var TooltipStyle;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle;
  }
  var TooltipArrowStyle;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant;
  }
  var TopLeftTooltipArrowVariant;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant;
  }
  var TopTooltipArrowVariant;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant;
  }
  var TopRightTooltipArrowVariant;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant;
  }
  var LeftTopTooltipArrowVariant;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant;
  }
  var LeftTooltipArrowVariant;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant;
  }
  var LeftBottomTooltipArrowVariant;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant;
  }
  var RightTopTooltipArrowVariant;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant;
  }
  var RightTooltipArrowVariant;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant;
  }
  var RightBottomTooltipArrowVariant;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant;
  }
  var BottomLeftTooltipArrowVariant;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant;
  }
  var BottomTooltipArrowVariant;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant;
  }
  var BottomRightTooltipArrowVariant;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  var com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable;
  function TooltipVars() {
    TooltipVars_instance = this;
    this.a38_1 = StyleVariable('silk');
    this.b38_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).i31 = function () {
    return this.a38_1.f2j(this, BackgroundColor$factory_3());
  };
  protoOf(TooltipVars).g31 = function () {
    return this.b38_1.f2j(this, Color$factory_4());
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleUp$lambda(color));
  }
  function TooltipStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().i31().z2i()), TooltipVars_getInstance().g31().z2i()), get_px(6));
  }
  function TooltipArrowStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border_0(tmp_0, TooltipArrowStyle$lambda$lambda);
  }
  function TooltipArrowStyle$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.f2s(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.e2s('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_2(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().i31().z2i());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_2(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().i31().z2i());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_2(Companion_instance, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().i31().z2i());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().i31().z2i());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().i31().z2i());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_2(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().i31().z2i());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().i31().z2i());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().i31().z2i());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_2(Companion_instance, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().i31().z2i());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().i31().z2i());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().i31().z2i());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_2(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().i31().z2i());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.s2d('border-color', 'transparent transparent ' + toString($color) + ' transparent');
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.s2d('border-color', 'transparent ' + toString($color) + ' transparent transparent');
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.s2d('border-color', 'transparent transparent transparent ' + toString($color));
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.s2d('border-color', toString($color) + ' transparent transparent transparent');
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_3() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.i31();
    }, null);
  }
  function Color$factory_4() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.g31();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_instance_5;
      TooltipStyle = base(tmp, VOID, TooltipStyle$lambda);
      var tmp_0 = Companion_instance_5;
      TooltipArrowStyle = base(tmp_0, VOID, TooltipArrowStyle$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$lambda);
      var tmp_13 = Companion_instance_5;
      TooltipTextContainerStyle = base(tmp_13, VOID, TooltipTextContainerStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable = 8;
    }
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle;
  }
  var SilkColorsStyle;
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.a2t_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.a2t_1.r2t_1;
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = Blue_getInstance().b2z_1.c2r().b2r(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().l2z_1;
    // Inline function 'kotlin.run' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>.<anonymous>' call
    var color = Colors_instance.h2r();
    set_background(this_0.q2z_1, Colors_instance.a2s());
    set_color(this_0.q2z_1, color);
    set_border(this_0.q2z_1, color.b2r(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.q2z_1, focusOutline);
    set_overlay(this_0.q2z_1, color.b2r(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.q2z_1, placeholder);
    var buttonBase = Colors_instance.a2s().y2q(0.2);
    get_button_0(this_0.q2z_1).i38(buttonBase, buttonBase.y2q(0.2), Colors_instance.j2r(), buttonBase.y2q(0.4));
    get_callout(this_0.q2z_1).s38(Colors_instance.k2r(), Colors_instance.o2r(), Colors_instance.q2r(), Colors_instance.y2r(), Colors_instance.r2r(), Colors_instance.u2r(), Colors_instance.n2r());
    get_checkbox_0(this_0.q2z_1).y38(Blue_getInstance().b2z_1, Blue_getInstance().c2z_1, Colors_instance.a2s());
    var inputFilled = Gray_getInstance().i2z_1;
    var tmp0_$this = get_input_0(this_0.q2z_1);
    var tmp1_filledFocus = Colors_instance.f2r();
    var tmp2_hoveredBorder = Gray_getInstance().l2z_1;
    var tmp3_invalidBorder = Red_getInstance().v2y_1;
    var tmp4_filledHover = inputFilled.y2q(0.1);
    tmp0_$this.g39(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = get_switch_0(this_0.q2z_1);
    var tmp6_thumb = Colors_instance.a2s();
    var tmp7_backgroundOn = Colors_instance.q2r();
    var tmp8_backgroundOff = Colors_instance.s2r();
    tmp5_$this.y38(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    get_tab_0(this_0.q2z_1).w39(Colors_instance.h2r(), Colors_instance.a2s(), Colors_instance.j2r(), VOID, VOID, Colors_instance.s2r(), Colors_instance.b2s(), Colors_instance.a2s());
    get_tooltip_0(this_0.q2z_1).b3a(get_color_0(this_0.q2z_1), get_background_0(this_0.q2z_1));
    // Inline function 'kotlin.run' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>.<anonymous>' call
    var color_0 = Colors_instance.a2s();
    set_background(this_0.r2z_1, Colors_instance.h2r());
    set_color(this_0.r2z_1, color_0);
    set_border(this_0.r2z_1, color_0.b2r(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.r2z_1, focusOutline);
    set_overlay(this_0.r2z_1, color_0.b2r(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.r2z_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.h2r(), 0.2);
    get_button_0(this_0.r2z_1).i38(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.t2r(), lightened(buttonBase_0, 0.4));
    get_callout(this_0.r2z_1).s38(Colors_instance.x2r(), get_callout(this_0.q2z_1).v31(), get_callout(this_0.q2z_1).w31(), Colors_instance.g2r(), get_callout(this_0.q2z_1).y31(), get_callout(this_0.q2z_1).z31(), Colors_instance.v2r());
    get_checkbox_0(this_0.r2z_1).y38(Blue_getInstance().y2y_1, Blue_getInstance().z2y_1, Colors_instance.h2r());
    var inputFilled_0 = Gray_getInstance().p2z_1;
    var tmp0_$this_0 = get_input_0(this_0.r2z_1);
    var tmp1_filledFocus_0 = Colors_instance.f2r();
    var tmp2_hoveredBorder_0 = Gray_getInstance().m2z_1;
    var tmp3_invalidBorder_0 = Red_getInstance().p2y_1;
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.g39(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = get_switch_0(this_0.r2z_1);
    var tmp6_thumb_0 = Colors_instance.a2s();
    var tmp7_backgroundOn_0 = Colors_instance.t2r();
    var tmp8_backgroundOff_0 = Colors_instance.m2r();
    tmp5_$this_0.y38(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    get_tab_0(this_0.r2z_1).w39(Colors_instance.a2s(), Colors_instance.h2r(), Colors_instance.t2r(), VOID, VOID, Colors_instance.p2r(), Colors_instance.m2r(), Colors_instance.h2r());
    get_tooltip_0(this_0.r2z_1).b3a(get_color_0(this_0.r2z_1), get_background_0(this_0.r2z_1));
    mutableTheme.b2y('silk-colors', get_SilkColorsStyle());
    mutableTheme.t2t('silk-input', get_InputStyle());
    mutableTheme.h2y('-outlined', get_OutlinedInputVariant());
    mutableTheme.h2y('-filled', get_FilledInputVariant());
    mutableTheme.h2y('-flushed', get_FlushedInputVariant());
    mutableTheme.h2y('-unstyled', get_UnstyledInputVariant());
    mutableTheme.t2t('silk-input-group', get_InputGroupStyle());
    mutableTheme.b2y('silk-disabled', get_DisabledStyle());
    mutableTheme.b2y('silk-smooth-color', get_SmoothColorStyle());
    mutableTheme.t2t('silk-button', get_ButtonStyle());
    mutableTheme.t2t('silk-canvas', get_CanvasStyle());
    mutableTheme.t2t('silk-callout', get_CalloutStyle());
    mutableTheme.h2y('-left-bordered', get_LeftBorderedCalloutVariant());
    mutableTheme.h2y('-left-bordered-filled', get_LeftBorderedFilledCalloutVariant());
    mutableTheme.h2y('-outlined', get_OutlinedCalloutVariant());
    mutableTheme.h2y('-matching-link', get_MatchingLinkCalloutVariant());
    mutableTheme.t2t('silk-checkbox', get_CheckboxStyle());
    mutableTheme.h2y('-checkbox', get_CheckboxInputVariant());
    mutableTheme.t2t('silk-checkbox-icon-container', get_CheckboxIconContainerStyle());
    mutableTheme.t2t('silk-checkbox-icon', get_CheckboxIconStyle());
    mutableTheme.h2y('-checked', get_CheckedCheckboxIconContainerVariant());
    mutableTheme.h2y('-unchecked', get_UncheckedCheckboxIconContainerVariant());
    mutableTheme.t2t('silk-overlay', get_OverlayStyle());
    mutableTheme.t2t('silk-popup', get_PopupStyle());
    mutableTheme.t2t('silk-simple-grid', get_SimpleGridStyle());
    mutableTheme.t2t('silk-surface', get_SurfaceStyle());
    mutableTheme.t2t('silk-horizontal-divider', get_HorizontalDividerStyle());
    mutableTheme.t2t('silk-vertical-divider', get_VerticalDividerStyle());
    mutableTheme.t2t('silk-switch', get_SwitchStyle());
    mutableTheme.t2t('silk-switch-track', get_SwitchTrackStyle());
    mutableTheme.t2t('silk-switch-thumb', get_SwitchThumbStyle());
    mutableTheme.h2y('-switch', get_SwitchInputVariant());
    mutableTheme.t2t('silk-tabs', get_TabsStyle());
    mutableTheme.t2t('silk-tabs-tab-row', get_TabsTabRowStyle());
    mutableTheme.t2t('silk-tabs-tab', get_TabsTabStyle());
    mutableTheme.t2t('silk-tabs-panel', get_TabsPanelStyle());
    mutableTheme.t2t('silk-tooltip-arrow', get_TooltipArrowStyle());
    mutableTheme.h2y('-top-left', get_TopLeftTooltipArrowVariant());
    mutableTheme.h2y('-top', get_TopTooltipArrowVariant());
    mutableTheme.h2y('-top-right', get_TopRightTooltipArrowVariant());
    mutableTheme.h2y('-left-top', get_LeftTopTooltipArrowVariant());
    mutableTheme.h2y('-left', get_LeftTooltipArrowVariant());
    mutableTheme.h2y('-left-bottom', get_LeftBottomTooltipArrowVariant());
    mutableTheme.h2y('-right-top', get_RightTopTooltipArrowVariant());
    mutableTheme.h2y('-right', get_RightTooltipArrowVariant());
    mutableTheme.h2y('-right-bottom', get_RightBottomTooltipArrowVariant());
    mutableTheme.h2y('-bottom-left', get_BottomLeftTooltipArrowVariant());
    mutableTheme.h2y('-bottom', get_BottomTooltipArrowVariant());
    mutableTheme.h2y('-bottom-right', get_BottomRightTooltipArrowVariant());
    mutableTheme.t2t('silk-tooltip', get_TooltipStyle());
    mutableTheme.t2t('silk-tooltip-text', get_TooltipTextContainerStyle());
    mutableTheme.i2y('silk-checkbox-enabled', get_CheckboxEnabledAnim());
    mutableTheme.z2x('silk-button-size_xs', Companion_getInstance_1().j33_1);
    mutableTheme.z2x('silk-button-size_sm', Companion_getInstance_1().k33_1);
    mutableTheme.z2x('silk-button-size_md', Companion_getInstance_1().l33_1);
    mutableTheme.z2x('silk-button-size_lg', Companion_getInstance_1().m33_1);
    mutableTheme.z2x('silk-checkbox-size_sm', Companion_getInstance_2().w34_1);
    mutableTheme.z2x('silk-checkbox-size_md', Companion_getInstance_2().x34_1);
    mutableTheme.z2x('silk-checkbox-size_lg', Companion_getInstance_2().y34_1);
    mutableTheme.z2x('silk-input-size_xs', Companion_getInstance_3().y35_1);
    mutableTheme.z2x('silk-input-size_sm', Companion_getInstance_3().z35_1);
    mutableTheme.z2x('silk-input-size_md', Companion_getInstance_3().a36_1);
    mutableTheme.z2x('silk-input-size_lg', Companion_getInstance_3().b36_1);
    mutableTheme.z2x('silk-switch-size_sm', Companion_getInstance_4().x36_1);
    mutableTheme.z2x('silk-switch-size_md', Companion_getInstance_4().y36_1);
    mutableTheme.z2x('silk-switch-size_lg', Companion_getInstance_4().z36_1);
    mutableTheme.z2x('silk-callout-type_caution', Companion_getInstance_0().i32_1);
    mutableTheme.z2x('silk-callout-type_important', Companion_getInstance_0().j32_1);
    mutableTheme.z2x('silk-callout-type_note', Companion_getInstance_0().k32_1);
    mutableTheme.z2x('silk-callout-type_question', Companion_getInstance_0().l32_1);
    mutableTheme.z2x('silk-callout-type_quote', Companion_getInstance_0().m32_1);
    mutableTheme.z2x('silk-callout-type_tip', Companion_getInstance_0().n32_1);
    mutableTheme.z2x('silk-callout-type_warning', Companion_getInstance_0().o32_1);
  }
  function setSilkWidgetVariables(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    // Inline function 'kotlin.let' call
    // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
    var silkColorsStyleName = get_name(get_SilkColorsStyle());
    removeClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode.b2x())]);
    addClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode)]);
  }
  function SilkWidgetVariables($composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(1751129124);
    if (!($changed === 0) || !$composer_0.w1d()) {
      $composer_0.d1e(743484619);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l1f();
      var tmp;
      if (false || it === Companion_getInstance().v18_1) {
        // Inline function 'com.varabyte.kobweb.silk.init.SilkWidgetVariables.<anonymous>' call
        var value = SilkWidgetVariables$lambda;
        this_0.w1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.f1e();
      SilkWidgetVariables_0(tmp0_group, $composer_0, 6);
    } else {
      $composer_0.m18();
    }
    var tmp1_safe_receiver = $composer_0.e1g();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.r1l(SilkWidgetVariables$lambda_0($changed));
    }
  }
  function SilkWidgetVariables_0(provideElement, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(1418237724);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a1f(provideElement) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.w1d()) {
      $composer_0.d1e(743478685);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l1f();
      var tmp;
      if (false || it === Companion_getInstance().v18_1) {
        // Inline function 'com.varabyte.kobweb.silk.init.SilkWidgetVariables.<anonymous>' call
        var value = provideElement();
        this_0.w1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.f1e();
      var rootElement = tmp0_group;
      SilkWidgetVariables_1(rootElement, $composer_0, 0);
    } else {
      $composer_0.m18();
    }
    var tmp1_safe_receiver = $composer_0.e1g();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.r1l(SilkWidgetVariables$lambda_1(provideElement, $changed));
    }
  }
  function SilkWidgetVariables_1(element, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(145799267);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a1f(element) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.w1d()) {
      setSilkWidgetVariables(element, Companion_instance_17.y2w($composer_0, 6));
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(SilkWidgetVariables$lambda_2(element, $changed));
    }
  }
  function SilkColorsStyle$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.u2w_1);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(colorScheme(Companion_instance, $this$base.u2w_1.k2y() ? Companion_instance_18.t2g() : Companion_instance_18.u2g()), get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().c33(), get_button(palette).c3a()), ButtonVars_getInstance().e33(), get_button(palette).w2e()), ButtonVars_getInstance().f33(), get_button(palette).d3a()), CheckboxVars_getInstance().t34(), get_checkbox(palette).e3a()), CheckboxVars_getInstance().u34(), get_checkbox(palette).w2e()), CheckboxVars_getInstance().s34(), get_checkbox(palette).f3a()), InputVars_getInstance().q35(), get_input(palette).g3a()), InputVars_getInstance().r35(), get_input(palette).h3a()), InputVars_getInstance().s35(), get_input(palette).i3a()), InputVars_getInstance().t35(), get_input(palette).j3a()), InputVars_getInstance().u35(), get_input(palette).k3a()), OverlayVars_getInstance().i31(), get_overlay(palette)), SwitchVars_getInstance().w36(), get_switch(palette).l3a()), TabVars_getInstance().g31(), get_tab(palette).f3a()), TabVars_getInstance().i31(), get_tab(palette).e3a()), TabVars_getInstance().j31(), get_tab(palette).m3a()), TabVars_getInstance().k31(), get_tab(palette).w2e()), TabVars_getInstance().l31(), get_tab(palette).d3a()), TooltipVars_getInstance().i31(), get_tooltip(palette).e3a()), TooltipVars_getInstance().g31(), get_tooltip(palette).f3a());
  }
  function SilkWidgetVariables$lambda() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var tmp = document.documentElement;
    return tmp instanceof HTMLElement ? tmp : THROW_CCE();
  }
  function SilkWidgetVariables$lambda_0($$changed) {
    return function ($composer, $force) {
      SilkWidgetVariables($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SilkWidgetVariables$lambda_1($provideElement, $$changed) {
    return function ($composer, $force) {
      SilkWidgetVariables_0($provideElement, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SilkWidgetVariables$lambda_2($element, $$changed) {
    return function ($composer, $force) {
      SilkWidgetVariables_1($element, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_instance_5;
      SilkColorsStyle = base_0(tmp, VOID, SilkColorsStyle$lambda);
    }
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle;
  }
  var DisabledStyle;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorTransitionDurationVar$delegate.f2j(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle;
  }
  var SmoothColorStyle;
  function DisabledStyle$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.d1e(812442038);
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    $composer_0.f1e();
    return tmp0;
  }
  function DisabledStyle$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.z2g());
  }
  function SmoothColorStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition_0(Companion_instance, [Companion_instance_2.q2j('background-color', get_SmoothColorTransitionDurationVar().z2i())]);
  }
  function SmoothColorTransitionDurationVar$factory() {
    return getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, KProperty0, function () {
      return get_SmoothColorTransitionDurationVar();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_instance_5;
      var tmp_0 = DisabledStyle$lambda;
      DisabledStyle = base_1(tmp, tmp_0, DisabledStyle$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().f31().z2i();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_5;
      SmoothColorStyle = base_0(tmp_1, VOID, SmoothColorStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable;
  var com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable;
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.x30_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.y30_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.z30_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.a31_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.b31_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.c31_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.d31_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.e31_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
  }
  protoOf(TransitionDurationVars).j34 = function () {
    return this.z30_1.f2j(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).p36 = function () {
    return this.a31_1.f2j(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).f31 = function () {
    return this.b31_1.f2j(this, Normal$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.j34();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.p36();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.f31();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.f2j(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.f2j(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.f2j(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.f2j(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.f2j(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.f2j(null, PlaceholderColorVar$factory());
  }
  var PlaceholderColorVar$delegate;
  function BackgroundColorVar$factory() {
    return getPropertyCallableRef('BackgroundColorVar', 0, KProperty0, function () {
      return get_BackgroundColorVar();
    }, null);
  }
  function ColorVar$factory() {
    return getPropertyCallableRef('ColorVar', 0, KProperty0, function () {
      return get_ColorVar();
    }, null);
  }
  function BorderColorVar$factory() {
    return getPropertyCallableRef('BorderColorVar', 0, KProperty0, function () {
      return get_BorderColorVar();
    }, null);
  }
  function FocusOutlineColorVar$factory() {
    return getPropertyCallableRef('FocusOutlineColorVar', 0, KProperty0, function () {
      return get_FocusOutlineColorVar();
    }, null);
  }
  function PlaceholderOpacityVar$factory() {
    return getPropertyCallableRef('PlaceholderOpacityVar', 0, KProperty0, function () {
      return get_PlaceholderOpacityVar();
    }, null);
  }
  function PlaceholderColorVar$factory() {
    return getPropertyCallableRef('PlaceholderColorVar', 0, KProperty0, function () {
      return get_PlaceholderColorVar();
    }, null);
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable('silk');
      ColorVar$delegate = StyleVariable('silk');
      BorderColorVar$delegate = StyleVariable('silk');
      FocusOutlineColorVar$delegate = StyleVariable('silk');
      PlaceholderOpacityVar$delegate = StyleVariable_2(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable('silk');
    }
  }
  var com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable;
  var com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable;
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.75);
    tmp.n33_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.o33_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.p33_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.q33_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(FontSizeVars).r33 = function () {
    return this.n33_1.f2j(this, XS$factory());
  };
  protoOf(FontSizeVars).s33 = function () {
    return this.o33_1.f2j(this, SM$factory());
  };
  protoOf(FontSizeVars).t33 = function () {
    return this.p33_1.f2j(this, MD$factory());
  };
  protoOf(FontSizeVars).u33 = function () {
    return this.q33_1.f2j(this, LG$factory());
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function BorderRadiusVars() {
    BorderRadiusVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.125);
    tmp.c36_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.25);
    tmp_0.d36_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.375);
    tmp_1.e36_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.f36_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(BorderRadiusVars).r33 = function () {
    return this.c36_1.f2j(this, XS$factory_0());
  };
  protoOf(BorderRadiusVars).s33 = function () {
    return this.d36_1.f2j(this, SM$factory_0());
  };
  protoOf(BorderRadiusVars).t33 = function () {
    return this.e36_1.f2j(this, MD$factory_0());
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  function XS$factory() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.r33();
    }, null);
  }
  function SM$factory() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.s33();
    }, null);
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.t33();
    }, null);
  }
  function LG$factory() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.u33();
    }, null);
  }
  function XS$factory_0() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.r33();
    }, null);
  }
  function SM$factory_0() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.s33();
    }, null);
  }
  function MD$factory_0() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.t33();
    }, null);
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCallout$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable;
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.e38_1 = this.d30();
    this.f38_1 = this.d30();
    this.g38_1 = this.d30();
    this.h38_1 = this.d30();
  }
  protoOf(MutableButton).n3a = function (_set____db54di) {
    return this.e38_1.a30(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).c3a = function () {
    return this.e38_1.f2j(this, default$factory_0());
  };
  protoOf(MutableButton).o3a = function (_set____db54di) {
    return this.f38_1.a30(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).w2e = function () {
    return this.f38_1.f2j(this, hover$factory_0());
  };
  protoOf(MutableButton).p3a = function (_set____db54di) {
    return this.g38_1.a30(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).q3a = function () {
    return this.g38_1.f2j(this, focus$factory_0());
  };
  protoOf(MutableButton).r3a = function (_set____db54di) {
    return this.h38_1.a30(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).d3a = function () {
    return this.h38_1.f2j(this, pressed$factory_0());
  };
  protoOf(MutableButton).i38 = function (default_0, hover, focus, pressed) {
    this.n3a(default_0);
    this.o3a(hover);
    this.p3a(focus);
    this.r3a(pressed);
  };
  function MutableCallout(palette) {
    ColorGroup.call(this, palette, 'callout');
    this.l38_1 = this.d30();
    this.m38_1 = this.d30();
    this.n38_1 = this.d30();
    this.o38_1 = this.d30();
    this.p38_1 = this.d30();
    this.q38_1 = this.d30();
    this.r38_1 = this.d30();
  }
  protoOf(MutableCallout).s3a = function (_set____db54di) {
    return this.l38_1.a30(this, caution$factory(), _set____db54di);
  };
  protoOf(MutableCallout).u31 = function () {
    return this.l38_1.f2j(this, caution$factory_0());
  };
  protoOf(MutableCallout).t3a = function (_set____db54di) {
    return this.m38_1.a30(this, important$factory(), _set____db54di);
  };
  protoOf(MutableCallout).v31 = function () {
    return this.m38_1.f2j(this, important$factory_0());
  };
  protoOf(MutableCallout).u3a = function (_set____db54di) {
    return this.n38_1.a30(this, note$factory(), _set____db54di);
  };
  protoOf(MutableCallout).w31 = function () {
    return this.n38_1.f2j(this, note$factory_0());
  };
  protoOf(MutableCallout).v3a = function (_set____db54di) {
    return this.o38_1.a30(this, question$factory(), _set____db54di);
  };
  protoOf(MutableCallout).x31 = function () {
    return this.o38_1.f2j(this, question$factory_0());
  };
  protoOf(MutableCallout).w3a = function (_set____db54di) {
    return this.p38_1.a30(this, quote$factory(), _set____db54di);
  };
  protoOf(MutableCallout).y31 = function () {
    return this.p38_1.f2j(this, quote$factory_0());
  };
  protoOf(MutableCallout).x3a = function (_set____db54di) {
    return this.q38_1.a30(this, tip$factory(), _set____db54di);
  };
  protoOf(MutableCallout).z31 = function () {
    return this.q38_1.f2j(this, tip$factory_0());
  };
  protoOf(MutableCallout).y3a = function (_set____db54di) {
    return this.r38_1.a30(this, warning$factory(), _set____db54di);
  };
  protoOf(MutableCallout).a32 = function () {
    return this.r38_1.f2j(this, warning$factory_0());
  };
  protoOf(MutableCallout).s38 = function (caution, important, note, question, quote, tip, warning) {
    this.s3a(caution);
    this.t3a(important);
    this.u3a(note);
    this.v3a(question);
    this.w3a(quote);
    this.x3a(tip);
    this.y3a(warning);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.v38_1 = this.d30();
    this.w38_1 = this.d30();
    this.x38_1 = this.d30();
  }
  protoOf(MutableCheckbox).z3a = function (_set____db54di) {
    return this.v38_1.a30(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).e3a = function () {
    return this.v38_1.f2j(this, background$factory_0());
  };
  protoOf(MutableCheckbox).o3a = function (_set____db54di) {
    return this.w38_1.a30(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).w2e = function () {
    return this.w38_1.f2j(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).a3b = function (_set____db54di) {
    return this.x38_1.a30(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).f3a = function () {
    return this.x38_1.f2j(this, color$factory_0());
  };
  protoOf(MutableCheckbox).y38 = function (background, hover, color) {
    this.z3a(background);
    this.o3a(hover);
    this.a3b(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.b39_1 = this.d30();
    this.c39_1 = this.d30();
    this.d39_1 = this.d30();
    this.e39_1 = this.d30();
    this.f39_1 = this.d30();
  }
  protoOf(MutableInput).b3b = function (_set____db54di) {
    return this.b39_1.a30(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).g3a = function () {
    return this.b39_1.f2j(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).c3b = function (_set____db54di) {
    return this.c39_1.a30(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).h3a = function () {
    return this.c39_1.f2j(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).d3b = function (_set____db54di) {
    return this.d39_1.a30(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).i3a = function () {
    return this.d39_1.f2j(this, filled$factory_0());
  };
  protoOf(MutableInput).e3b = function (_set____db54di) {
    return this.e39_1.a30(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).j3a = function () {
    return this.e39_1.f2j(this, filledHover$factory_0());
  };
  protoOf(MutableInput).f3b = function (_set____db54di) {
    return this.f39_1.a30(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).k3a = function () {
    return this.f39_1.f2j(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).g39 = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.b3b(hoveredBorder);
    this.c3b(invalidBorder);
    this.d3b(filled);
    this.e3b(filledHover);
    this.f3b(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.j39_1 = this.d30();
    this.k39_1 = this.d30();
    this.l39_1 = this.d30();
  }
  protoOf(MutableSwitch).g3b = function (_set____db54di) {
    return this.j39_1.a30(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).h3b = function () {
    return this.j39_1.f2j(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).i3b = function (_set____db54di) {
    return this.k39_1.a30(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).j3b = function () {
    return this.k39_1.f2j(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).k3b = function (_set____db54di) {
    return this.l39_1.a30(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).l3a = function () {
    return this.l39_1.f2j(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).y38 = function (backgroundOn, backgroundOff, thumb) {
    this.g3b(backgroundOn);
    this.i3b(backgroundOff);
    this.k3b(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.o39_1 = this.d30();
    this.p39_1 = this.d30();
    this.q39_1 = this.d30();
    this.r39_1 = this.d30();
    this.s39_1 = this.d30();
    this.t39_1 = this.d30();
    this.u39_1 = this.d30();
    this.v39_1 = this.d30();
  }
  protoOf(MutableTab).a3b = function (_set____db54di) {
    return this.o39_1.a30(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).f3a = function () {
    return this.o39_1.f2j(this, color$factory_2());
  };
  protoOf(MutableTab).z3a = function (_set____db54di) {
    return this.p39_1.a30(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).e3a = function () {
    return this.p39_1.f2j(this, background$factory_2());
  };
  protoOf(MutableTab).l3b = function (_set____db54di) {
    return this.q39_1.a30(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).m3b = function () {
    return this.q39_1.f2j(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).n3b = function (_set____db54di) {
    return this.r39_1.a30(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).o3b = function () {
    return this.r39_1.f2j(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).p3b = function (_set____db54di) {
    return this.s39_1.a30(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).q3b = function () {
    return this.s39_1.f2j(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).o3a = function (_set____db54di) {
    return this.t39_1.a30(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).w2e = function () {
    return this.t39_1.f2j(this, hover$factory_4());
  };
  protoOf(MutableTab).r3a = function (_set____db54di) {
    return this.u39_1.a30(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).d3a = function () {
    return this.u39_1.f2j(this, pressed$factory_2());
  };
  protoOf(MutableTab).r3b = function (_set____db54di) {
    return this.v39_1.a30(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).m3a = function () {
    return this.v39_1.f2j(this, disabled$factory_0());
  };
  protoOf(MutableTab).s3b = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.a3b(color);
    this.z3a(background);
    this.l3b(selectedColor);
    this.n3b(selectedBackground);
    this.p3b(selectedBorder);
    this.o3a(hover);
    this.r3a(pressed);
    this.r3b(disabled);
  };
  protoOf(MutableTab).w39 = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.s3b(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.s3b.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.z39_1 = this.d30();
    this.a3a_1 = this.d30();
  }
  protoOf(MutableTooltip).z3a = function (_set____db54di) {
    return this.z39_1.a30(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).e3a = function () {
    return this.z39_1.f2j(this, background$factory_4());
  };
  protoOf(MutableTooltip).a3b = function (_set____db54di) {
    return this.a3a_1.a30(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).f3a = function () {
    return this.a3a_1.f2j(this, color$factory_4());
  };
  protoOf(MutableTooltip).b3a = function (background, color) {
    this.z3a(background);
    this.a3b(color);
  };
  function get_tooltip(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tooltip_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tab_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_switch(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_switch_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w2z('overlay');
  }
  function get_input(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_input_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_checkbox_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_button(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_button_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_placeholder_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w2z('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w2z('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w2z('border');
  }
  function get_color(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w2z('color');
  }
  function get_background(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w2z('background');
  }
  function get_tooltip_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_tab_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTab(_this__u8e3s4);
  }
  function get_switch_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_input_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableInput(_this__u8e3s4);
  }
  function get_checkbox_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_button_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableButton(_this__u8e3s4);
  }
  function set_background(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e30('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w2z('background');
  }
  function set_color(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e30('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w2z('color');
  }
  function set_border(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e30('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e30('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e30('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e30('placeholder', value);
  }
  function get_callout(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCallout(_this__u8e3s4);
  }
  function get_callout_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_callout(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.c3a();
    }, function (receiver, value) {
      return receiver.n3a(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.c3a();
    }, function (receiver, value) {
      return receiver.n3a(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.w2e();
    }, function (receiver, value) {
      return receiver.o3a(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.w2e();
    }, function (receiver, value) {
      return receiver.o3a(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.q3a();
    }, function (receiver, value) {
      return receiver.p3a(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.q3a();
    }, function (receiver, value) {
      return receiver.p3a(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.d3a();
    }, function (receiver, value) {
      return receiver.r3a(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.d3a();
    }, function (receiver, value) {
      return receiver.r3a(value);
    });
  }
  function caution$factory() {
    return getPropertyCallableRef('caution', 1, KMutableProperty1, function (receiver) {
      return receiver.u31();
    }, function (receiver, value) {
      return receiver.s3a(value);
    });
  }
  function caution$factory_0() {
    return getPropertyCallableRef('caution', 1, KMutableProperty1, function (receiver) {
      return receiver.u31();
    }, function (receiver, value) {
      return receiver.s3a(value);
    });
  }
  function important$factory() {
    return getPropertyCallableRef('important', 1, KMutableProperty1, function (receiver) {
      return receiver.v31();
    }, function (receiver, value) {
      return receiver.t3a(value);
    });
  }
  function important$factory_0() {
    return getPropertyCallableRef('important', 1, KMutableProperty1, function (receiver) {
      return receiver.v31();
    }, function (receiver, value) {
      return receiver.t3a(value);
    });
  }
  function note$factory() {
    return getPropertyCallableRef('note', 1, KMutableProperty1, function (receiver) {
      return receiver.w31();
    }, function (receiver, value) {
      return receiver.u3a(value);
    });
  }
  function note$factory_0() {
    return getPropertyCallableRef('note', 1, KMutableProperty1, function (receiver) {
      return receiver.w31();
    }, function (receiver, value) {
      return receiver.u3a(value);
    });
  }
  function question$factory() {
    return getPropertyCallableRef('question', 1, KMutableProperty1, function (receiver) {
      return receiver.x31();
    }, function (receiver, value) {
      return receiver.v3a(value);
    });
  }
  function question$factory_0() {
    return getPropertyCallableRef('question', 1, KMutableProperty1, function (receiver) {
      return receiver.x31();
    }, function (receiver, value) {
      return receiver.v3a(value);
    });
  }
  function quote$factory() {
    return getPropertyCallableRef('quote', 1, KMutableProperty1, function (receiver) {
      return receiver.y31();
    }, function (receiver, value) {
      return receiver.w3a(value);
    });
  }
  function quote$factory_0() {
    return getPropertyCallableRef('quote', 1, KMutableProperty1, function (receiver) {
      return receiver.y31();
    }, function (receiver, value) {
      return receiver.w3a(value);
    });
  }
  function tip$factory() {
    return getPropertyCallableRef('tip', 1, KMutableProperty1, function (receiver) {
      return receiver.z31();
    }, function (receiver, value) {
      return receiver.x3a(value);
    });
  }
  function tip$factory_0() {
    return getPropertyCallableRef('tip', 1, KMutableProperty1, function (receiver) {
      return receiver.z31();
    }, function (receiver, value) {
      return receiver.x3a(value);
    });
  }
  function warning$factory() {
    return getPropertyCallableRef('warning', 1, KMutableProperty1, function (receiver) {
      return receiver.a32();
    }, function (receiver, value) {
      return receiver.y3a(value);
    });
  }
  function warning$factory_0() {
    return getPropertyCallableRef('warning', 1, KMutableProperty1, function (receiver) {
      return receiver.a32();
    }, function (receiver, value) {
      return receiver.y3a(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.e3a();
    }, function (receiver, value) {
      return receiver.z3a(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.e3a();
    }, function (receiver, value) {
      return receiver.z3a(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.w2e();
    }, function (receiver, value) {
      return receiver.o3a(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.w2e();
    }, function (receiver, value) {
      return receiver.o3a(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.f3a();
    }, function (receiver, value) {
      return receiver.a3b(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.f3a();
    }, function (receiver, value) {
      return receiver.a3b(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.g3a();
    }, function (receiver, value) {
      return receiver.b3b(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.g3a();
    }, function (receiver, value) {
      return receiver.b3b(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.h3a();
    }, function (receiver, value) {
      return receiver.c3b(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.h3a();
    }, function (receiver, value) {
      return receiver.c3b(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.i3a();
    }, function (receiver, value) {
      return receiver.d3b(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.i3a();
    }, function (receiver, value) {
      return receiver.d3b(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.j3a();
    }, function (receiver, value) {
      return receiver.e3b(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.j3a();
    }, function (receiver, value) {
      return receiver.e3b(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.k3a();
    }, function (receiver, value) {
      return receiver.f3b(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.k3a();
    }, function (receiver, value) {
      return receiver.f3b(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.h3b();
    }, function (receiver, value) {
      return receiver.g3b(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.h3b();
    }, function (receiver, value) {
      return receiver.g3b(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.j3b();
    }, function (receiver, value) {
      return receiver.i3b(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.j3b();
    }, function (receiver, value) {
      return receiver.i3b(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.l3a();
    }, function (receiver, value) {
      return receiver.k3b(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.l3a();
    }, function (receiver, value) {
      return receiver.k3b(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.f3a();
    }, function (receiver, value) {
      return receiver.a3b(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.f3a();
    }, function (receiver, value) {
      return receiver.a3b(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.e3a();
    }, function (receiver, value) {
      return receiver.z3a(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.e3a();
    }, function (receiver, value) {
      return receiver.z3a(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.m3b();
    }, function (receiver, value) {
      return receiver.l3b(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.m3b();
    }, function (receiver, value) {
      return receiver.l3b(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.o3b();
    }, function (receiver, value) {
      return receiver.n3b(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.o3b();
    }, function (receiver, value) {
      return receiver.n3b(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.q3b();
    }, function (receiver, value) {
      return receiver.p3b(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.q3b();
    }, function (receiver, value) {
      return receiver.p3b(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.w2e();
    }, function (receiver, value) {
      return receiver.o3a(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.w2e();
    }, function (receiver, value) {
      return receiver.o3a(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.d3a();
    }, function (receiver, value) {
      return receiver.r3a(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.d3a();
    }, function (receiver, value) {
      return receiver.r3a(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.m3a();
    }, function (receiver, value) {
      return receiver.r3b(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.m3a();
    }, function (receiver, value) {
      return receiver.r3b(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.e3a();
    }, function (receiver, value) {
      return receiver.z3a(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.e3a();
    }, function (receiver, value) {
      return receiver.z3a(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.f3a();
    }, function (receiver, value) {
      return receiver.a3b(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.f3a();
    }, function (receiver, value) {
      return receiver.a3b(value);
    });
  }
  var properties_initialized_SilkWidgetColorGroups_kt_1mdo2;
  function _init_properties_SilkWidgetColorGroups_kt__mh2tbg() {
    if (!properties_initialized_SilkWidgetColorGroups_kt_1mdo2) {
      properties_initialized_SilkWidgetColorGroups_kt_1mdo2 = true;
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCallout$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable = 0;
    }
  }
  //region block: init
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable = 0;
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable = 8;
  com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable = 8;
  com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Surface;
  _.$_$.b = get_SilkColorsStyle;
  _.$_$.c = SilkWidgetVariables;
  _.$_$.d = initSilkWidgets;
  _.$_$.e = get_SmoothColorStyle;
  _.$_$.f = get_BorderColorVar;
  _.$_$.g = get_ColorVar;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
