(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-common-client-server-internal'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-common-client-server-internal'.");
    }
    globalThis['kobweb-common-client-server-internal'] = factory(typeof globalThis['kobweb-common-client-server-internal'] === 'undefined' ? {} : globalThis['kobweb-common-client-server-internal'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var Enum = kotlin_kotlin.$_$.y8;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForClass = kotlin_kotlin.$_$.f6;
  var VOID = kotlin_kotlin.$_$.e;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var startsWith = kotlin_kotlin.$_$.m8;
  var endsWith = kotlin_kotlin.$_$.x7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.g6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var toString = kotlin_kotlin.$_$.z6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var joinToString = kotlin_kotlin.$_$.n3;
  var first = kotlin_kotlin.$_$.i3;
  var removeFirst = kotlin_kotlin.$_$.h4;
  var removeSurrounding = kotlin_kotlin.$_$.h8;
  var removePrefix = kotlin_kotlin.$_$.f8;
  var removeSuffix = kotlin_kotlin.$_$.g8;
  var endsWith_0 = kotlin_kotlin.$_$.y7;
  var startsWith_0 = kotlin_kotlin.$_$.l8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.o9;
  var charArrayOf = kotlin_kotlin.$_$.t5;
  var split = kotlin_kotlin.$_$.k8;
  var toMutableList = kotlin_kotlin.$_$.q4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ensureNotNull = kotlin_kotlin.$_$.m9;
  var mutableListOf = kotlin_kotlin.$_$.z3;
  var asSequence = kotlin_kotlin.$_$.v2;
  var mapNotNull = kotlin_kotlin.$_$.p7;
  var firstOrNull = kotlin_kotlin.$_$.m7;
  var last = kotlin_kotlin.$_$.s3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Match, 'Match', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Node, 'Node');
  initMetadataForClass(RootNode, 'RootNode', RootNode, Node);
  initMetadataForClass(ChildNode, 'ChildNode', VOID, Node);
  initMetadataForClass(StaticNode, 'StaticNode', VOID, ChildNode);
  initMetadataForClass(DynamicNode, 'DynamicNode', VOID, ChildNode);
  initMetadataForClass(ResolvedEntry, 'ResolvedEntry');
  initMetadataForClass(RouteTree, 'RouteTree', RouteTree);
  //endregion
  function RouteTree$Node$createChild$lambda(it) {
    return '"' + it.m2l_1 + '"';
  }
  var Match_SINGLE_instance;
  var Match_REST_instance;
  var Match_REST_OPTIONAL_instance;
  var Match_entriesInitialized;
  function Match_initEntries() {
    if (Match_entriesInitialized)
      return Unit_instance;
    Match_entriesInitialized = true;
    Match_SINGLE_instance = new Match('SINGLE', 0);
    Match_REST_instance = new Match('REST', 1);
    Match_REST_OPTIONAL_instance = new Match('REST_OPTIONAL', 2);
  }
  function Match(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
  }
  protoOf(Companion).s2l = function (parent, routePart, data) {
    if (startsWith(routePart, _Char___init__impl__6a9atx(123)) && endsWith(routePart, _Char___init__impl__6a9atx(125))) {
      return new DynamicNode(parent, routePart, data);
    }
    return null;
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Match_SINGLE_getInstance() {
    Match_initEntries();
    return Match_SINGLE_instance;
  }
  function Match_REST_getInstance() {
    Match_initEntries();
    return Match_REST_instance;
  }
  function Match_REST_OPTIONAL_getInstance() {
    Match_initEntries();
    return Match_REST_OPTIONAL_instance;
  }
  function Node(parent, sourceRoutePart, data) {
    parent = parent === VOID ? null : parent;
    this.l2l_1 = parent;
    this.m2l_1 = sourceRoutePart;
    this.n2l_1 = data;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o2l_1 = ArrayList_init_$Create$();
    this.p2l_1 = this.o2l_1;
    this.q2l_1 = this.m2l_1;
    this.r2l_1 = false;
  }
  protoOf(Node).s1w = function () {
    return this.q2l_1;
  };
  protoOf(Node).t2l = function () {
    return this.r2l_1;
  };
  protoOf(Node).v2l = function (routePart, data) {
    if (this.t2l()) {
      // Inline function 'kotlin.error' call
      var message = 'User attempted to register an invalid route. "' + this.m2l_1 + '" must be the last part of the route, but it was followed by "' + routePart + '".';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.run' call
    // Inline function 'com.varabyte.kobweb.navigation.Node.createChild.<anonymous>' call
    var tmp0 = this.o2l_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'com.varabyte.kobweb.navigation.Node.createChild.<anonymous>.<anonymous>' call
        if (element instanceof DynamicNode) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var existingDynamicNode = tmp$ret$1;
    if (!(existingDynamicNode == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'User attempted to register a new route when a dynamic route is already set up that will capture it. "' + routePart + '" is being registered but "' + existingDynamicNode.m2l_1 + '" already exists.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp0_elvis_lhs = Companion_instance.s2l(this, routePart, data);
    var node = tmp0_elvis_lhs == null ? new StaticNode(this, routePart, data) : tmp0_elvis_lhs;
    var tmp;
    if (node instanceof DynamicNode) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !this.o2l_1.q();
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'kotlin.error' call
      var message_1 = 'User attempted to register a dynamic route that conflicts with one or more routes already set up. "' + routePart + '" is being registered but [' + joinToString(this.o2l_1, VOID, VOID, VOID, VOID, VOID, RouteTree$Node$createChild$lambda) + '] route(s) already exist.';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    this.o2l_1.e(node);
    return node;
  };
  protoOf(Node).w2l = function (remainingRouteParts) {
    var tmp0_safe_receiver = this.u2l(remainingRouteParts);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.navigation.Node.resolve.<anonymous>' call
      tmp = new ResolvedEntry(this, tmp0_safe_receiver);
    }
    return tmp;
  };
  function RootNode() {
    Node.call(this, null, '', null);
  }
  protoOf(RootNode).u2l = function (remainingRouteParts) {
    // Inline function 'kotlin.check' call
    if (!(first(remainingRouteParts) === '')) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    removeFirst(remainingRouteParts);
    return '';
  };
  function ChildNode(parent, sourceRoutePart, data) {
    Node.call(this, parent, sourceRoutePart, data);
  }
  function StaticNode(parent, sourceRoutePart, data) {
    ChildNode.call(this, parent, sourceRoutePart, data);
  }
  protoOf(StaticNode).u2l = function (remainingRouteParts) {
    if (first(remainingRouteParts) === this.m2l_1) {
      return removeFirst(remainingRouteParts);
    }
    return null;
  };
  function DynamicNode(parent, sourceRoutePart, data) {
    ChildNode.call(this, parent, sourceRoutePart, data);
    var name = removeSurrounding(sourceRoutePart, '{', '}');
    var tmp = this;
    var tmp_0;
    if (startsWith_0(name, '...')) {
      name = removePrefix(name, '...');
      var tmp_1;
      if (endsWith_0(name, '?')) {
        name = removeSuffix(name, '?');
        tmp_1 = Match_REST_OPTIONAL_getInstance();
      } else {
        tmp_1 = Match_REST_getInstance();
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = Match_SINGLE_getInstance();
    }
    tmp.s2m_1 = tmp_0;
    this.t2m_1 = name;
    this.u2m_1 = this.t2m_1;
    this.v2m_1 = !this.s2m_1.equals(Match_SINGLE_getInstance());
  }
  protoOf(DynamicNode).s1w = function () {
    return this.u2m_1;
  };
  protoOf(DynamicNode).t2l = function () {
    return this.v2m_1;
  };
  protoOf(DynamicNode).u2l = function (remainingRouteParts) {
    switch (this.s2m_1.k2_1) {
      case 0:
        return removeFirst(remainingRouteParts);
      case 1:
      case 2:
        if (this.s2m_1.equals(Match_REST_OPTIONAL_getInstance()) || !(first(remainingRouteParts) === '')) {
          // Inline function 'kotlin.also' call
          var this_0 = joinToString(remainingRouteParts, '/');
          // Inline function 'com.varabyte.kobweb.navigation.DynamicNode.consume.<anonymous>' call
          remainingRouteParts.w1();
          return this_0;
        }

        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return null;
  };
  function ResolvedEntry(node, capturedRoutePart) {
    this.w2m_1 = node;
    this.x2m_1 = capturedRoutePart;
  }
  function resolveWithoutRedirects($this, route) {
    var routeParts = toMutableList(split(route, charArrayOf([_Char___init__impl__6a9atx(47)])));
    var currNode = $this.y2m_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(routeParts.p(0) === $this.y2m_1.m2l_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var resolved = mutableListOf([ensureNotNull($this.y2m_1.w2l(routeParts))]);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!routeParts.q()) {
        break $l$loop;
      }
      var tmp = asSequence(currNode.p2l_1);
      var tmp0_elvis_lhs = firstOrNull(mapNotNull(tmp, RouteTree$resolveWithoutRedirects$lambda(routeParts)));
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var resolvedEntry = tmp_0;
      currNode = resolvedEntry.w2m_1;
      resolved.e(resolvedEntry);
    }
    // Inline function 'kotlin.takeIf' call
    var tmp_1;
    // Inline function 'com.varabyte.kobweb.navigation.RouteTree.resolveWithoutRedirects.<anonymous>' call
    if (resolved.q() || !(last(resolved).w2m_1.n2l_1 == null)) {
      tmp_1 = resolved;
    } else {
      tmp_1 = null;
    }
    return tmp_1;
  }
  function resolveAllowingRedirects($this, route) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = route;
    var _iterator__ex2g4s = $this.z2m_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.resolveAllowingRedirects.<anonymous>' call
      var route_0 = accumulator;
      var tmp0_elvis_lhs = element.c2n(route_0);
      accumulator = tmp0_elvis_lhs == null ? route_0 : tmp0_elvis_lhs;
    }
    var redirectedRoute = accumulator;
    return resolveWithoutRedirects($this, redirectedRoute);
  }
  function checkRoute($this, route) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!$this.y2m_1.p2l_1.q()) {
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
      var message = "No routes were ever registered. This is unexpected and probably means no `@Page` was defined (or pages were defined in the wrong place where Kobweb couldn't discover them).";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!startsWith(route, _Char___init__impl__6a9atx(47))) {
      // Inline function 'com.varabyte.kobweb.navigation.RouteTree.checkRoute.<anonymous>' call
      var message_0 = 'When checking a route, it must begin with a slash. Got: "' + route + '"';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp0_elvis_lhs = resolveAllowingRedirects($this, route);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolvedNodes = tmp;
    return toRouteString(resolvedNodes);
  }
  function RouteTree$resolveWithoutRedirects$lambda($routeParts) {
    return function (child) {
      return child.w2l($routeParts);
    };
  }
  function RouteTree() {
    this.y2m_1 = new RootNode();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z2m_1 = ArrayList_init_$Create$();
  }
  protoOf(RouteTree).d2n = function (route, allowRedirects) {
    return allowRedirects ? resolveAllowingRedirects(this, route) : resolveWithoutRedirects(this, route);
  };
  protoOf(RouteTree).e2n = function (route) {
    return !(checkRoute(this, route) == null);
  };
  protoOf(RouteTree).f2n = function (route, data) {
    if (!(resolveWithoutRedirects(this, route) == null))
      return false;
    var routeParts = toMutableList(split(route, charArrayOf([_Char___init__impl__6a9atx(47)])));
    var currNode = this.y2m_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(routeParts.p(0) === this.y2m_1.m2l_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    ensureNotNull(this.y2m_1.w2l(routeParts));
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!routeParts.q()) {
        break $l$loop;
      }
      var tmp2 = currNode.p2l_1;
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp2.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'com.varabyte.kobweb.navigation.RouteTree.register.<anonymous>' call
          if (element.m2l_1 === first(routeParts)) {
            tmp$ret$3 = element;
            break $l$block;
          }
        }
        tmp$ret$3 = null;
      }
      var tmp0_safe_receiver = tmp$ret$3;
      var resolvedEntry = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w2l(routeParts);
      if (!(resolvedEntry == null)) {
        currNode = resolvedEntry.w2m_1;
      } else {
        var tmp = currNode;
        var tmp_0 = removeFirst(routeParts);
        // Inline function 'kotlin.takeIf' call
        var tmp_1;
        // Inline function 'com.varabyte.kobweb.navigation.RouteTree.register.<anonymous>' call
        if (routeParts.q()) {
          tmp_1 = data;
        } else {
          tmp_1 = null;
        }
        var tmp$ret$5 = tmp_1;
        currNode = tmp.v2l(tmp_0, tmp$ret$5);
      }
    }
    return true;
  };
  function toRouteString(_this__u8e3s4) {
    return joinToString(_this__u8e3s4, '/', VOID, VOID, VOID, VOID, toRouteString$lambda);
  }
  function toRouteString$lambda(it) {
    return it.x2m_1;
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DynamicNode;
  _.$_$.b = RouteTree;
  _.$_$.c = toRouteString;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-common-client-server-internal.js.map
