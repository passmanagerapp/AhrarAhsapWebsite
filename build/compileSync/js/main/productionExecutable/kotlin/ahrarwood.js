(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-kobweb-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './worker-ac55.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-kobweb-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./worker-ac55.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'org.akilincarslan.ahrarwood:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'org.akilincarslan.ahrarwood:site'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'org.akilincarslan.ahrarwood:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'org.akilincarslan.ahrarwood:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'org.akilincarslan.ahrarwood:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'org.akilincarslan.ahrarwood:site'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'org.akilincarslan.ahrarwood:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'org.akilincarslan.ahrarwood:site'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'org.akilincarslan.ahrarwood:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'org.akilincarslan.ahrarwood:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'org.akilincarslan.ahrarwood:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'org.akilincarslan.ahrarwood:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'org.akilincarslan.ahrarwood:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'org.akilincarslan.ahrarwood:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'org.akilincarslan.ahrarwood:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'org.akilincarslan.ahrarwood:site'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'org.akilincarslan.ahrarwood:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'org.akilincarslan.ahrarwood:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'org.akilincarslan.ahrarwood:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'org.akilincarslan.ahrarwood:site'.");
    }
    if (typeof globalThis['worker-ac55'] === 'undefined') {
      throw new Error("Error loading module 'org.akilincarslan.ahrarwood:site'. Its dependency 'worker-ac55' was not found. Please, check whether 'worker-ac55' is loaded prior to 'org.akilincarslan.ahrarwood:site'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'org.akilincarslan.ahrarwood:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'org.akilincarslan.ahrarwood:site'.");
    }
    globalThis['org.akilincarslan.ahrarwood:site'] = factory(typeof globalThis['org.akilincarslan.ahrarwood:site'] === 'undefined' ? {} : globalThis['org.akilincarslan.ahrarwood:site'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-silk-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime'], globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-frontend-kobweb-silk'], globalThis['html-html-core'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['worker-ac55'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_akilincarslan_ahrarwood_worker_worker, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var AppGlobals_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var to = kotlin_kotlin.$_$.u9;
  var mapOf = kotlin_kotlin.$_$.x3;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.c;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var removePrefix = kotlin_kotlin.$_$.f8;
  var remove = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var ensureNotNull = kotlin_kotlin.$_$.m9;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var DeferringHost = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.k6;
  var removeSuffix = kotlin_kotlin.$_$.g8;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var rememberWorker = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var Center_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var CenterHorizontally_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var EchoWorker = kotlin_org_akilincarslan_ahrarwood_worker_worker.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.k5;
  var protoOf = kotlin_kotlin.$_$.x6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.o6;
  var initMetadataForLambda = kotlin_kotlin.$_$.j6;
  var VOID = kotlin_kotlin.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForObject(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt');
  initMetadataForLambda(HomePage$slambda, CoroutineImpl, VOID, [1]);
  //endregion
  function main() {
    AppGlobals_instance.m2n(mapOf(to('title', 'AhrarWood')));
    Companion_instance.n2o('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.l2p(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.n2p(remove(Companion_instance, removePrefix(window.location.href, window.origin)), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable('root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
      HomePage($composer_0, 0);
    } else {
      $composer_0.m18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a1f(it) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.w1d()) {
      // Inline function 'kotlin.run' call
      // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-440954647, true, ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75(it), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.n15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.l1f();
      var tmp;
      if (invalid || it_0 === Companion_getInstance().v18_1) {
        // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.w1f(value);
        tmp = value;
      } else {
        tmp = it_0;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      DeferringHost(tmp0, $composer_0, 6);
    } else {
      $composer_0.m18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
        tmp = $it($composer_0, 0);
      } else {
        $composer_0.m18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.e3c_1 = ComposableLambda$invoke$ref(composableLambdaInstance(188215112, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.f3c_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(854823496, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda(ctx) {
    ctx.j2o_1.k2p('/', ComposableSingletons$MainKt_getInstance().e3c_1);
    return Unit_instance;
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.o2p(removeSuffix(removeSuffix($this$addRouteInterceptor.e2p_1, '.html'), '.htm'));
    return Unit_instance;
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
        $router.h2p(ComposableSingletons$MainKt_getInstance().f3c_1, $composer_0, 6, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.m18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.run' call
      // Inline function 'main.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1190994075, true, main$lambda$lambda($router), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.n15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.l1f();
      var tmp;
      if (invalid || it === Companion_getInstance().v18_1) {
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.w1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AppEntry(tmp0, $composer_0, 6);
      return Unit_instance;
    };
  }
  function mainWrapper() {
    main();
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(617598960);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a1f(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.w1d()) {
      // Inline function 'kotlin.run' call
      // Inline function 'org.akilincarslan.ahrarwood.AppEntry.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-488335761, true, AppEntry$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.n15(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.l1f();
      var tmp;
      if (invalid || it === Companion_getInstance().v18_1) {
        // Inline function 'org.akilincarslan.ahrarwood.AppEntry.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.w1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SilkApp(tmp0, $composer_0, 6);
    } else {
      $composer_0.m18();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(AppEntry$lambda_0(content, $changed));
    }
  }
  function AppEntry$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.w1d()) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.m18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
        var tmp_0 = minHeight(toModifier(get_SmoothColorStyle(), $composer_0, 0), get_vh(100));
        // Inline function 'kotlin.run' call
        // Inline function 'org.akilincarslan.ahrarwood.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1774343147, true, AppEntry$lambda$lambda($content), $composer_0, 54);
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
          // Inline function 'org.akilincarslan.ahrarwood.AppEntry.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.w1f(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Surface(tmp_0, null, null, null, null, tmp0, $composer_0, 196608, 30);
        tmp = Unit_instance;
      } else {
        $composer_0.m18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(939196071);
    if (!($changed === 0) || !$composer_0.w1d()) {
      $composer_0.d1e(-71257144);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.l1f();
      var tmp;
      if (false || it === Companion_getInstance().v18_1) {
        // Inline function 'org.akilincarslan.ahrarwood.pages.HomePage.<anonymous>' call
        var value = HomePage$lambda;
        this_0.w1f(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.f1e();
      var worker = rememberWorker(tmp0_group, $composer_0, 6);
      $composer_0.d1e(-71254433);
      var tmp2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.a1f(worker);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp2.l1f();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().v18_1) {
        // Inline function 'org.akilincarslan.ahrarwood.pages.HomePage.<anonymous>' call
        var value_0 = HomePage$slambda_0(worker, null);
        tmp2.w1f(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.f1e();
      LaunchedEffect(Unit_instance, tmp1_group, $composer_0, 6);
      var tmp_3 = fillMaxSize(Companion_instance_0);
      var tmp_4 = Center_instance;
      Box(tmp_3, tmp_4, null, ComposableSingletons$IndexKt_getInstance().h3c_1, $composer_0, 3072, 4);
    } else {
      $composer_0.m18();
    }
    var tmp2_safe_receiver = $composer_0.e1g();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.r1l(HomePage$lambda_0($changed));
    }
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.w1d()) {
      Image('/icon.jpg', null, null, 240, 240, 'ahrarWood', null, $composer_0, 224262, 70);
      Text('Welcome to AhrarWood', $composer_0, 6);
    } else {
      $composer_0.m18();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.f2a(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.w1d()) {
      var tmp = Center_instance_0;
      var tmp_0 = CenterHorizontally_instance;
      Column(null, tmp, tmp_0, null, ComposableSingletons$IndexKt_getInstance().g3c_1, $composer_0, 24576, 9);
    } else {
      $composer_0.m18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.g3c_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(1219563594, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
    var tmp_0 = this;
    tmp_0.h3c_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(173261665, false, ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f));
  }
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$lambda() {
    return new EchoWorker(HomePage$lambda$lambda);
  }
  function HomePage$lambda$lambda($this$EchoWorker, output) {
    console.log('Echoed: ' + output);
    return Unit_instance;
  }
  function HomePage$slambda($worker, resultContinuation) {
    this.q3c_1 = $worker;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HomePage$slambda).g1o = function ($this$LaunchedEffect, $completion) {
    var tmp = this.h1o($this$LaunchedEffect, $completion);
    tmp.v8_1 = Unit_instance;
    tmp.w8_1 = null;
    return tmp.b9();
  };
  protoOf(HomePage$slambda).p9 = function (p1, $completion) {
    return this.g1o((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HomePage$slambda).b9 = function () {
    var suspendResult = this.v8_1;
    $sm: do
      try {
        var tmp = this.t8_1;
        if (tmp === 0) {
          this.u8_1 = 1;
          this.q3c_1.bi('Hello, worker!');
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
  protoOf(HomePage$slambda).h1o = function ($this$LaunchedEffect, completion) {
    var i = new HomePage$slambda(this.q3c_1, completion);
    i.r3c_1 = $this$LaunchedEffect;
    return i;
  };
  function HomePage$slambda_0($worker, resultContinuation) {
    var i = new HomePage$slambda($worker, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.g1o($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HomePage$lambda_0($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  mainWrapper();
  return _;
}));

//# sourceMappingURL=ahrarwood.js.map
