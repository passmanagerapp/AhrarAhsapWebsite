(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-compose-html-ext.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-kobweb-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-core.js'));
  else {
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    globalThis['kobweb-frontend-silk-widgets-kobweb'] = factory(typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['html-html-core'], globalThis['kobweb-frontend-silk-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kobweb-frontend-kobweb-core']);
  }
}(function (_, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_core) {
  'use strict';
  //region block: imports
  var get_BorderColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForObject = kotlin_kotlin.$_$.k6;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var listStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Companion_instance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var KProperty1 = kotlin_kotlin.$_$.i7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c6;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var VOID = kotlin_kotlin.$_$.e;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var Companion_instance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var Img = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var get_link = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var get_visited = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var get_SilkColorsStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var modifyStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var initMetadataForClass = kotlin_kotlin.$_$.f6;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var KMutableProperty1 = kotlin_kotlin.$_$.g7;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(TocVars, 'TocVars');
  initMetadataForObject(LinkVars, 'LinkVars');
  initMetadataForClass(MutableLink, 'MutableLink', VOID, ColorGroup);
  //endregion
  function get_TocStyle() {
    _init_properties_Toc_kt__9n5312();
    return TocStyle;
  }
  var TocStyle;
  function get_TocBorderedVariant() {
    _init_properties_Toc_kt__9n5312();
    return TocBorderedVariant;
  }
  var TocBorderedVariant;
  var com_varabyte_kobweb_silk_components_document_TocVars$stable;
  function TocVars() {
    TocVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().z2i();
    tmp.t3b_1 = StyleVariable(tmp0_defaultFallback, 'silk');
  }
  protoOf(TocVars).h31 = function () {
    return this.t3b_1.f2j(this, BorderColor$factory());
  };
  var TocVars_instance;
  function TocVars_getInstance() {
    if (TocVars_instance == null)
      new TocVars();
    return TocVars_instance;
  }
  function TocStyle$lambda($this$base) {
    _init_properties_Toc_kt__9n5312();
    return padding(textAlign(listStyle(Companion_instance, Companion_instance_0.b2h()), Companion_instance_1.k2g()), get_cssRem(0));
  }
  function TocBorderedVariant$lambda($this$addVariantBase) {
    _init_properties_Toc_kt__9n5312();
    var tmp = borderRadius(Companion_instance, get_px(5));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(border(tmp, tmp_0, 'solid', TocVars_getInstance().h31().z2i()), get_cssRem(1));
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.h31();
    }, null);
  }
  var properties_initialized_Toc_kt_t9o4p4;
  function _init_properties_Toc_kt__9n5312() {
    if (!properties_initialized_Toc_kt_t9o4p4) {
      properties_initialized_Toc_kt_t9o4p4 = true;
      var tmp = Companion_instance_3;
      TocStyle = base(tmp, VOID, TocStyle$lambda);
      var tmp_0 = get_TocStyle();
      TocBorderedVariant = addVariantBase(tmp_0, VOID, TocBorderedVariant$lambda);
      com_varabyte_kobweb_silk_components_document_TocVars$stable = 8;
    }
  }
  function get_ImageStyle() {
    _init_properties_Image_kt__h9v8mh();
    return ImageStyle;
  }
  var ImageStyle;
  function get_FitWidthImageVariant() {
    _init_properties_Image_kt__h9v8mh();
    return FitWidthImageVariant;
  }
  var FitWidthImageVariant;
  function Image(src, modifier, variant, width, height, alt, ref, $composer, $changed, $default) {
    _init_properties_Image_kt__h9v8mh();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var alt_0 = {_v: alt};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(355628426);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.n15(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.a1f(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.n15(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.n15(width_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.n15(height_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.n15(alt_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ((($changed & 2097152) === 0 ? $composer_0.n15(ref_0._v) : $composer_0.a1f(ref_0._v)) ? 1048576 : 524288);
    if (!(($dirty & 599187) === 599186) || !$composer_0.w1d()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        width_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        height_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 64) === 0)) {
        ref_0._v = null;
      }
      $composer_0.d1e(-9351080);
      if (!(ref_0._v == null)) {
        var tmp = Companion_instance;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = toAttrs(display(tmp, 'none'));
        // Inline function 'kotlin.run' call
        // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1877997712, true, Image$lambda(ref_0), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.n15(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.l1f();
        var tmp_1;
        if (invalid || it === Companion_getInstance().v18_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.w1f(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_0, tmp0, $composer_0, 48, 0);
      }
      $composer_0.f1e();
      var tmp_3 = Companion_instance_5.s2o(src);
      var tmp_4 = alt_0._v;
      var tmp_5 = toModifier(get_ImageStyle(), [variant_0._v], $composer_0, 6).v2p(modifier_0._v);
      $composer_0.d1e(-9342576);
      var tmp1 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(($dirty & 7168) === 2048 | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp1.l1f();
      var tmp_6;
      if (invalid_0 || it_0 === Companion_getInstance().v18_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>' call
        var value_0 = Image$lambda_0(width_0, height_0);
        tmp1.w1f(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = it_0;
      }
      var tmp_7 = tmp_6;
      var tmp0_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.f1e();
      Img(tmp_3, tmp_4, toAttrs(tmp_5, tmp0_group), $composer_0, 112 & $dirty >> 12, 0);
    } else {
      $composer_0.m18();
    }
    var tmp1_safe_receiver = $composer_0.e1g();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.r1l(Image$lambda_1(src, modifier_0, variant_0, width_0, height_0, alt_0, ref_0, $changed, $default));
    }
  }
  function ImageStyle$lambda($this$CssStyle) {
    _init_properties_Image_kt__h9v8mh();
    return Unit_instance;
  }
  function FitWidthImageVariant$lambda($this$addVariantBase) {
    _init_properties_Image_kt__h9v8mh();
    return objectFit(width(Companion_instance, get_percent(100)), Companion_instance_6.k2i());
  }
  function Image$lambda$lambda(it) {
    _init_properties_Image_kt__h9v8mh();
    var tmp = it.nextSibling;
    return tmp instanceof HTMLImageElement ? tmp : THROW_CCE();
  }
  function Image$lambda($ref) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = $ref._v;
      $composer_0.d1e(-335144939);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.l1f();
      var tmp_0;
      if (false || it === Companion_getInstance().v18_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>.<anonymous>.<anonymous>' call
        var value = Image$lambda$lambda;
        $composer_0.w1f(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.f1e();
      registerRefScope($this$Div, tmp, tmp0_group, $composer_0, 384 | 14 & $changed);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function Image$lambda_0($width, $height) {
    return function ($this$toAttrs) {
      var tmp;
      if (!($width._v == null)) {
        $this$toAttrs.v2b('width', $width._v.toString());
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($height._v == null)) {
        $this$toAttrs.v2b('height', $height._v.toString());
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Image$lambda_1($src, $modifier, $variant, $width, $height, $alt, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Image($src, $modifier._v, $variant._v, $width._v, $height._v, $alt._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Image_kt_7kjzpx;
  function _init_properties_Image_kt__h9v8mh() {
    if (!properties_initialized_Image_kt_7kjzpx) {
      properties_initialized_Image_kt_7kjzpx = true;
      ImageStyle = CssStyle(VOID, ImageStyle$lambda);
      var tmp = get_ImageStyle();
      FitWidthImageVariant = addVariantBase(tmp, VOID, FitWidthImageVariant$lambda);
    }
  }
  function get_LinkStyle() {
    _init_properties_Link_kt__dm1ox2();
    return LinkStyle;
  }
  var LinkStyle;
  function get_UndecoratedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UndecoratedLinkVariant;
  }
  var UndecoratedLinkVariant;
  function get_UncoloredLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UncoloredLinkVariant;
  }
  var UncoloredLinkVariant;
  function get_AlwaysUnderlinedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return AlwaysUnderlinedLinkVariant;
  }
  var AlwaysUnderlinedLinkVariant;
  var com_varabyte_kobweb_silk_components_navigation_LinkVars$stable;
  function LinkVars() {
    LinkVars_instance = this;
    this.u3b_1 = StyleVariable_0('silk');
    this.v3b_1 = StyleVariable_0('silk');
  }
  protoOf(LinkVars).w3b = function () {
    return this.u3b_1.f2j(this, DefaultColor$factory());
  };
  protoOf(LinkVars).x3b = function () {
    return this.v3b_1.f2j(this, VisitedColor$factory());
  };
  var LinkVars_instance;
  function LinkVars_getInstance() {
    if (LinkVars_instance == null)
      new LinkVars();
    return LinkVars_instance;
  }
  function LinkStyle$lambda($this$CssStyle) {
    _init_properties_Link_kt__dm1ox2();
    $this$CssStyle.a2w(LinkStyle$lambda$lambda);
    var tmp = get_link($this$CssStyle);
    tmp.f2v(LinkStyle$lambda$lambda_0);
    var tmp_0 = get_visited($this$CssStyle);
    tmp_0.f2v(LinkStyle$lambda$lambda_1);
    var tmp_1 = get_hover($this$CssStyle);
    tmp_1.f2v(LinkStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function LinkStyle$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.b2h());
  }
  function LinkStyle$lambda$lambda_0() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_instance, LinkVars_getInstance().w3b().z2i());
  }
  function LinkStyle$lambda$lambda_1() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_instance, LinkVars_getInstance().x3b().z2i());
  }
  function LinkStyle$lambda$lambda_2() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.m2j());
  }
  function UndecoratedLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_hover($this$addVariant);
    tmp.f2v(UndecoratedLinkVariant$lambda$lambda);
    return Unit_instance;
  }
  function UndecoratedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.b2h());
  }
  function UncoloredLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var colorModifier = color(Companion_instance, get_ColorVar().z2i());
    var tmp = get_link($this$addVariant);
    tmp.f2v(UncoloredLinkVariant$lambda$lambda(colorModifier));
    var tmp_0 = get_visited($this$addVariant);
    tmp_0.f2v(UncoloredLinkVariant$lambda$lambda_0(colorModifier));
    return Unit_instance;
  }
  function UncoloredLinkVariant$lambda$lambda($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function UncoloredLinkVariant$lambda$lambda_0($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function AlwaysUnderlinedLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    $this$addVariant.a2w(AlwaysUnderlinedLinkVariant$lambda$lambda);
    return Unit_instance;
  }
  function AlwaysUnderlinedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.m2j());
  }
  function DefaultColor$factory() {
    return getPropertyCallableRef('DefaultColor', 1, KProperty1, function (receiver) {
      return receiver.w3b();
    }, null);
  }
  function VisitedColor$factory() {
    return getPropertyCallableRef('VisitedColor', 1, KProperty1, function (receiver) {
      return receiver.x3b();
    }, null);
  }
  var properties_initialized_Link_kt_5x6v44;
  function _init_properties_Link_kt__dm1ox2() {
    if (!properties_initialized_Link_kt_5x6v44) {
      properties_initialized_Link_kt_5x6v44 = true;
      LinkStyle = CssStyle(VOID, LinkStyle$lambda);
      var tmp = get_LinkStyle();
      UndecoratedLinkVariant = addVariant(tmp, VOID, UndecoratedLinkVariant$lambda);
      var tmp_0 = get_LinkStyle();
      UncoloredLinkVariant = addVariant(tmp_0, VOID, UncoloredLinkVariant$lambda);
      var tmp_1 = get_LinkStyle();
      AlwaysUnderlinedLinkVariant = addVariant(tmp_1, VOID, AlwaysUnderlinedLinkVariant$lambda);
      com_varabyte_kobweb_silk_components_navigation_LinkVars$stable = 8;
    }
  }
  function initSilkWidgetsKobweb(ctx) {
    var mutableTheme = ctx.a2t_1;
    // Inline function 'kotlin.apply' call
    var this_0 = mutableTheme.r2t_1;
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.q2z_1;
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>.<anonymous>' call
    get_link_0(this_1).b3a(Colors_instance.i2r(), Colors_instance.w2r());
    // Inline function 'kotlin.apply' call
    var this_2 = this_0.r2z_1;
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>.<anonymous>' call
    get_link_0(this_2).b3a(Colors_instance.l2r(), Colors_instance.z2r());
    var tmp = get_SilkColorsStyle();
    modifyStyleBase(mutableTheme, tmp, VOID, initSilkWidgetsKobweb$lambda);
    mutableTheme.t2t('silk-image', get_ImageStyle());
    mutableTheme.h2y('-fit-width', get_FitWidthImageVariant());
    mutableTheme.t2t('silk-link', get_LinkStyle());
    mutableTheme.h2y('-uncolored', get_UncoloredLinkVariant());
    mutableTheme.h2y('-undecorated', get_UndecoratedLinkVariant());
    mutableTheme.h2y('-always-underlined', get_AlwaysUnderlinedLinkVariant());
    mutableTheme.t2t('silk-toc', get_TocStyle());
    mutableTheme.h2y('-bordered', get_TocBorderedVariant());
  }
  function initSilkWidgetsKobweb$lambda($this$modifyStyleBase) {
    var palette = toPalette($this$modifyStyleBase.u2w_1);
    return setVariable(setVariable(Companion_instance, LinkVars_getInstance().w3b(), get_link_1(palette).c3a()), LinkVars_getInstance().x3b(), get_link_1(palette).c3c());
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups_MutableLink$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups$stable;
  function MutableLink(palette) {
    ColorGroup.call(this, palette, 'link');
    this.a3c_1 = this.d30();
    this.b3c_1 = this.d30();
  }
  protoOf(MutableLink).n3a = function (_set____db54di) {
    return this.a3c_1.a30(this, default$factory(), _set____db54di);
  };
  protoOf(MutableLink).c3a = function () {
    return this.a3c_1.f2j(this, default$factory_0());
  };
  protoOf(MutableLink).d3c = function (_set____db54di) {
    return this.b3c_1.a30(this, visited$factory(), _set____db54di);
  };
  protoOf(MutableLink).c3c = function () {
    return this.b3c_1.f2j(this, visited$factory_0());
  };
  protoOf(MutableLink).b3a = function (default_0, visited) {
    this.n3a(default_0);
    this.d3c(visited);
  };
  function get_link_0(_this__u8e3s4) {
    _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2();
    return new MutableLink(_this__u8e3s4);
  }
  function get_link_1(_this__u8e3s4) {
    _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2();
    return get_link_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
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
  function visited$factory() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.c3c();
    }, function (receiver, value) {
      return receiver.d3c(value);
    });
  }
  function visited$factory_0() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.c3c();
    }, function (receiver, value) {
      return receiver.d3c(value);
    });
  }
  var properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0;
  function _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2() {
    if (!properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0) {
      properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0 = true;
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups_MutableLink$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups$stable = 0;
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Image;
  _.$_$.b = initSilkWidgetsKobweb;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets-kobweb.js.map
