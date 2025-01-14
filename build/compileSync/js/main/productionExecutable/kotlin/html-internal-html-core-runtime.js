(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    globalThis['html-internal-html-core-runtime'] = factory(typeof globalThis['html-internal-html-core-runtime'] === 'undefined' ? {} : globalThis['html-internal-html-core-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.x6;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var ensureNotNull = kotlin_kotlin.$_$.m9;
  var initMetadataForClass = kotlin_kotlin.$_$.f6;
  var AbstractApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var VOID = kotlin_kotlin.$_$.e;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var Companion_instance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var CoroutineImpl = kotlin_kotlin.$_$.k5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.o6;
  var initMetadataForLambda = kotlin_kotlin.$_$.j6;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var initMetadataForObject = kotlin_kotlin.$_$.k6;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var get_DefaultMonotonicFrameClock = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Recomposer = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DomNodeWrapper, 'DomNodeWrapper');
  initMetadataForClass(DomApplier, 'DomApplier', VOID, AbstractApplier);
  initMetadataForLambda(GlobalSnapshotManager$schedule$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(GlobalSnapshotManager, 'GlobalSnapshotManager');
  initMetadataForClass(JsMicrotasksDispatcher, 'JsMicrotasksDispatcher', JsMicrotasksDispatcher, CoroutineDispatcher);
  initMetadataForLambda(renderComposable$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(renderComposable$scope$1);
  //endregion
  function DomNodeWrapper(node) {
    this.g2a_1 = node;
    this.h2a_1 = 0;
  }
  protoOf(DomNodeWrapper).i2a = function () {
    return this.g2a_1;
  };
  protoOf(DomNodeWrapper).j2a = function (index, nodeWrapper) {
    var length = this.i2a().childNodes.length;
    if (index < length) {
      var tmp = this.i2a();
      var tmp_0 = nodeWrapper.i2a();
      // Inline function 'org.w3c.dom.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this.i2a().childNodes[index];
      tmp.insertBefore(tmp_0, ensureNotNull(tmp$ret$1));
    } else {
      this.i2a().appendChild(nodeWrapper.i2a());
    }
  };
  protoOf(DomNodeWrapper).q11 = function (index, count) {
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.internal.runtime.DomNodeWrapper.remove.<anonymous>' call
        var tmp = this.i2a();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.i2a().childNodes[index];
        tmp.removeChild(ensureNotNull(tmp$ret$1));
      }
       while (inductionVariable < count);
  };
  protoOf(DomNodeWrapper).r11 = function (from, to, count) {
    if (from === to) {
      return Unit_instance;
    }
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromIndex = from > to ? from + i | 0 : from;
        var toIndex = from > to ? to + i | 0 : (to + count | 0) - 2 | 0;
        var tmp = this.i2a();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.i2a().childNodes[fromIndex];
        var child = tmp.removeChild(ensureNotNull(tmp$ret$1));
        var tmp_0 = this.i2a();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = this.i2a().childNodes[toIndex];
        tmp_0.insertBefore(child, ensureNotNull(tmp$ret$3));
      }
       while (inductionVariable < count);
  };
  function DomApplier(root) {
    AbstractApplier.call(this, root);
    this.n2a_1 = 0;
  }
  protoOf(DomApplier).o2a = function (index, instance) {
  };
  protoOf(DomApplier).o11 = function (index, instance) {
    return this.o2a(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).p2a = function (index, instance) {
    this.j11().j2a(index, instance);
  };
  protoOf(DomApplier).p11 = function (index, instance) {
    return this.p2a(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).q11 = function (index, count) {
    this.j11().q11(index, count);
  };
  protoOf(DomApplier).r11 = function (from, to, count) {
    this.j11().r11(from, to, count);
  };
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.v2a_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'org.jetbrains.compose.web.internal.runtime.GlobalSnapshotManager.synchronize.<anonymous>' call
      element();
    }
    $this.v2a_1.w1();
    $this.w2a_1 = false;
  }
  function schedule($this, block) {
    $this.v2a_1.e(block);
    if (!$this.w2a_1) {
      $this.w2a_1 = true;
      launch($this.t2a_1, VOID, VOID, GlobalSnapshotManager$schedule$slambda_0(null));
    }
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().r2a_1) {
      GlobalSnapshotManager_getInstance().r2a_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_instance;
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().r2a_1 = false;
    Companion_instance.r1n();
    return Unit_instance;
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GlobalSnapshotManager$schedule$slambda).g1o = function ($this$launch, $completion) {
    var tmp = this.h1o($this$launch, $completion);
    tmp.v8_1 = Unit_instance;
    tmp.w8_1 = null;
    return tmp.b9();
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).p9 = function (p1, $completion) {
    return this.g1o((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).b9 = function () {
    var suspendResult = this.v8_1;
    $sm: do
      try {
        var tmp = this.t8_1;
        if (tmp === 0) {
          this.u8_1 = 1;
          synchronize(GlobalSnapshotManager_getInstance());
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
  protoOf(GlobalSnapshotManager$schedule$slambda).h1o = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.g2b_1 = $this$launch;
    return i;
  };
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.g1o($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.q2a_1 = false;
    this.r2a_1 = false;
    this.s2a_1 = null;
    this.t2a_1 = CoroutineScope_0((new JsMicrotasksDispatcher()).ig(SupervisorJob()));
    var tmp = this;
    tmp.u2a_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.v2a_1 = ArrayList_init_$Create$();
    this.w2a_1 = false;
    this.x2a_1 = 8;
  }
  protoOf(GlobalSnapshotManager).h2b = function () {
    if (!this.q2a_1) {
      this.q2a_1 = true;
      this.s2a_1 = Companion_instance.p25(this.u2a_1);
    }
  };
  var GlobalSnapshotManager_instance;
  function GlobalSnapshotManager_getInstance() {
    if (GlobalSnapshotManager_instance == null)
      new GlobalSnapshotManager();
    return GlobalSnapshotManager_instance;
  }
  function JsMicrotasksDispatcher$dispatch$lambda($block) {
    return function (it) {
      $block.cn();
      return Unit_instance;
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
    this.j2b_1 = 0;
  }
  protoOf(JsMicrotasksDispatcher).ln = function (context, block) {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  function renderComposable(rootElementId, content) {
    return renderComposable_0(ensureNotNull(document.getElementById(rootElementId)), VOID, content);
  }
  function renderComposable_0(root, monotonicFrameClock, content) {
    monotonicFrameClock = monotonicFrameClock === VOID ? get_DefaultMonotonicFrameClock() : monotonicFrameClock;
    GlobalSnapshotManager_getInstance().h2b();
    var context = monotonicFrameClock.ig(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp, VOID, tmp_0, renderComposable$slambda_0(recomposer, null));
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$scope$1(root);
    composition.y1j(ComposableLambda$invoke$ref(composableLambdaInstance(-1520853124, true, renderComposable$lambda(content, scope))));
    return composition;
  }
  function renderComposable$slambda($recomposer, resultContinuation) {
    this.s2b_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderComposable$slambda).g1o = function ($this$launch, $completion) {
    var tmp = this.h1o($this$launch, $completion);
    tmp.v8_1 = Unit_instance;
    tmp.w8_1 = null;
    return tmp.b9();
  };
  protoOf(renderComposable$slambda).p9 = function (p1, $completion) {
    return this.g1o((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderComposable$slambda).b9 = function () {
    var suspendResult = this.v8_1;
    $sm: do
      try {
        var tmp = this.t8_1;
        switch (tmp) {
          case 0:
            this.u8_1 = 2;
            this.t8_1 = 1;
            suspendResult = this.s2b_1.x1q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.w8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.u8_1 === 2) {
          throw e;
        } else {
          this.t8_1 = this.u8_1;
          this.w8_1 = e;
        }
      }
     while (true);
  };
  protoOf(renderComposable$slambda).h1o = function ($this$launch, completion) {
    var i = new renderComposable$slambda(this.s2b_1, completion);
    i.t2b_1 = $this$launch;
    return i;
  };
  function renderComposable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.g1o($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$scope$1($root) {
    this.u2b_1 = $root;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function renderComposable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.w1d()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520853124, $changed, -1, 'org.jetbrains.compose.web.renderComposable.<anonymous> (renderComposable.kt:60)');
        }
        $content($scope, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.m18();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DomApplier;
  _.$_$.b = DomNodeWrapper;
  _.$_$.c = renderComposable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-internal-html-core-runtime.js.map
