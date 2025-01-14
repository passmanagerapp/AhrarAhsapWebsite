(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    globalThis['compose-multiplatform-core-compose-runtime-runtime'] = factory(typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_collection_internal_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.x6;
  var initMetadataForInterface = kotlin_kotlin.$_$.i6;
  var Unit_instance = kotlin_kotlin.$_$.c2;
  var initMetadataForClass = kotlin_kotlin.$_$.f6;
  var VOID = kotlin_kotlin.$_$.e;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.f9;
  var Companion_instance = kotlin_kotlin.$_$.b2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.t1;
  var createFailure = kotlin_kotlin.$_$.l9;
  var intercepted = kotlin_kotlin.$_$.x4;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get = kotlin_kotlin.$_$.g5;
  var fold = kotlin_kotlin.$_$.f5;
  var minusKey = kotlin_kotlin.$_$.h5;
  var plus = kotlin_kotlin.$_$.j5;
  var toString = kotlin_kotlin.$_$.z6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var isInterface = kotlin_kotlin.$_$.o6;
  var equals = kotlin_kotlin.$_$.y5;
  var hashCode = kotlin_kotlin.$_$.e6;
  var rotateLeft = kotlin_kotlin.$_$.q9;
  var Enum = kotlin_kotlin.$_$.y8;
  var rotateRight = kotlin_kotlin.$_$.r9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var fill = kotlin_kotlin.$_$.f3;
  var MutableIntIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a;
  var emptyList = kotlin_kotlin.$_$.d3;
  var Long = kotlin_kotlin.$_$.c9;
  var sortWith = kotlin_kotlin.$_$.k4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var to = kotlin_kotlin.$_$.u9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.g6;
  var IllegalStateException = kotlin_kotlin.$_$.b9;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.d1;
  var captureStack = kotlin_kotlin.$_$.s5;
  var defineProp = kotlin_kotlin.$_$.x5;
  var MutableIntObjectMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.c;
  var lazy = kotlin_kotlin.$_$.n9;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.k;
  var MutableScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.h;
  var mutableListOf = kotlin_kotlin.$_$.z3;
  var KtMutableList = kotlin_kotlin.$_$.o2;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.g;
  var compareTo = kotlin_kotlin.$_$.w5;
  var FunctionAdapter = kotlin_kotlin.$_$.o5;
  var Comparator = kotlin_kotlin.$_$.x8;
  var KProperty1 = kotlin_kotlin.$_$.i7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c6;
  var MutableIntList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.b;
  var isArray = kotlin_kotlin.$_$.m6;
  var KtSet = kotlin_kotlin.$_$.q2;
  var mutableScatterSetOf_0 = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.l;
  var KtMap = kotlin_kotlin.$_$.m2;
  var Exception = kotlin_kotlin.$_$.a9;
  var plus_0 = kotlin_kotlin.$_$.b4;
  var initMetadataForObject = kotlin_kotlin.$_$.k6;
  var fillArrayVal = kotlin_kotlin.$_$.z5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var toString_0 = kotlin_kotlin.$_$.t9;
  var Element = kotlin_kotlin.$_$.i5;
  var getStringHashCode = kotlin_kotlin.$_$.d6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var MutableObjectIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.e;
  var ScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.i;
  var fill_0 = kotlin_kotlin.$_$.h3;
  var CoroutineImpl = kotlin_kotlin.$_$.k5;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v4;
  var initMetadataForLambda = kotlin_kotlin.$_$.j6;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var addAll = kotlin_kotlin.$_$.s2;
  var toList = kotlin_kotlin.$_$.o4;
  var flatten = kotlin_kotlin.$_$.j3;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.u;
  var CancellationException = kotlin_kotlin.$_$.u4;
  var addSuppressed = kotlin_kotlin.$_$.i9;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var returnIfSuspended = kotlin_kotlin.$_$.g;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.h6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var removeFirst = kotlin_kotlin.$_$.h4;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var arrayCopy = kotlin_kotlin.$_$.t2;
  var MutableObjectList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.f;
  var anyToString = kotlin_kotlin.$_$.q5;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.y;
  var MutableIntSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.d;
  var first = kotlin_kotlin.$_$.i3;
  var last = kotlin_kotlin.$_$.s3;
  var copyOf = kotlin_kotlin.$_$.a3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var plus_1 = kotlin_kotlin.$_$.f4;
  var coerceAtMost = kotlin_kotlin.$_$.b7;
  var coerceAtLeast = kotlin_kotlin.$_$.a7;
  var copyOf_0 = kotlin_kotlin.$_$.z2;
  var ensureNotNull = kotlin_kotlin.$_$.m9;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var RandomAccess = kotlin_kotlin.$_$.p2;
  var SequenceScope = kotlin_kotlin.$_$.j7;
  var numberRangeToNumber = kotlin_kotlin.$_$.t6;
  var until = kotlin_kotlin.$_$.e7;
  var iterator = kotlin_kotlin.$_$.o7;
  var Collection = kotlin_kotlin.$_$.j2;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.j;
  var mutableSetOf = kotlin_kotlin.$_$.a4;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var AbstractList = kotlin_kotlin.$_$.e2;
  var KtList = kotlin_kotlin.$_$.k2;
  var arrayIterator = kotlin_kotlin.$_$.r5;
  var AbstractMutableList = kotlin_kotlin.$_$.g2;
  var MutableIterable = kotlin_kotlin.$_$.n2;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var copyOfRange = kotlin_kotlin.$_$.y2;
  var indexOf = kotlin_kotlin.$_$.m3;
  var AbstractMap = kotlin_kotlin.$_$.f2;
  var Entry = kotlin_kotlin.$_$.l2;
  var AbstractSet = kotlin_kotlin.$_$.h2;
  var AbstractCollection = kotlin_kotlin.$_$.d2;
  var objectCreate = kotlin_kotlin.$_$.w6;
  var step = kotlin_kotlin.$_$.d7;
  var countOneBits = kotlin_kotlin.$_$.j9;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var toString_1 = kotlin_kotlin.$_$.q8;
  var longArray = kotlin_kotlin.$_$.s6;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var Char = kotlin_kotlin.$_$.w8;
  var isCharSequence = kotlin_kotlin.$_$.n6;
  var minus = kotlin_kotlin.$_$.y3;
  var contains = kotlin_kotlin.$_$.x2;
  var plus_2 = kotlin_kotlin.$_$.e4;
  var primitiveArrayConcat = kotlin_kotlin.$_$.d;
  var singleOrNull = kotlin_kotlin.$_$.j4;
  var intArrayIterator = kotlin_kotlin.$_$.l6;
  var toIntArray = kotlin_kotlin.$_$.n4;
  var sequence = kotlin_kotlin.$_$.r7;
  var countTrailingZeroBits = kotlin_kotlin.$_$.k9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var println = kotlin_kotlin.$_$.n5;
  var printStackTrace = kotlin_kotlin.$_$.p9;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.u8;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.q1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.v;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.r;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  initMetadataForInterface(Applier, 'Applier');
  initMetadataForClass(OffsetApplier, 'OffsetApplier', VOID, VOID, [Applier]);
  initMetadataForClass(AbstractApplier, 'AbstractApplier', VOID, VOID, [Applier]);
  initMetadataForClass(FrameAwaiter, 'FrameAwaiter');
  function get_key() {
    return Key_instance_0;
  }
  initMetadataForInterface(MonotonicFrameClock, 'MonotonicFrameClock', VOID, VOID, [Element], [1]);
  initMetadataForClass(BroadcastFrameClock, 'BroadcastFrameClock', BroadcastFrameClock, VOID, [MonotonicFrameClock], [1]);
  initMetadataForInterface(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback');
  initMetadataForClass(Invalidation, 'Invalidation');
  initMetadataForInterface(RememberObserver, 'RememberObserver');
  initMetadataForInterface(ReusableRememberObserver, 'ReusableRememberObserver', VOID, VOID, [RememberObserver]);
  initMetadataForClass(CompositionContextHolder, 'CompositionContextHolder', VOID, VOID, [ReusableRememberObserver]);
  initMetadataForClass(ComposerImpl$derivedStateObserver$1);
  function changed(value) {
    return this.b1f(value);
  }
  function changedInstance(value) {
    return this.n15(value);
  }
  initMetadataForInterface(Composer, 'Composer');
  initMetadataForClass(ComposerImpl, 'ComposerImpl', VOID, VOID, [Composer]);
  initMetadataForClass(Composer$Companion$Empty$1);
  initMetadataForCompanion(Companion);
  initMetadataForClass(InvalidationResult, 'InvalidationResult', VOID, Enum);
  initMetadataForClass(MovableContentStateReference, 'MovableContentStateReference');
  initMetadataForClass(MovableContentState, 'MovableContentState');
  initMetadataForClass(MovableContent, 'MovableContent');
  initMetadataForClass(ComposeRuntimeError, 'ComposeRuntimeError', VOID, IllegalStateException);
  initMetadataForClass(ProvidedValue, 'ProvidedValue');
  initMetadataForClass(RememberObserverHolder, 'RememberObserverHolder');
  initMetadataForClass(Pending, 'Pending');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(GroupInfo, 'GroupInfo');
  initMetadataForClass(MutableScatterMultiMap, 'MutableScatterMultiMap');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(RememberEventDispatcher, 'RememberEventDispatcher');
  initMetadataForInterface(RecomposeScopeOwner, 'RecomposeScopeOwner');
  initMetadataForClass(CompositionImpl, 'CompositionImpl', VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(CompositionObserverHolder, 'CompositionObserverHolder', CompositionObserverHolder);
  initMetadataForObject(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt');
  initMetadataForObject(ScopeInvalidated, 'ScopeInvalidated');
  initMetadataForClass(CompositionImplServiceKey$1);
  initMetadataForClass(CompositionContext, 'CompositionContext');
  initMetadataForClass(CompositionLocal, 'CompositionLocal');
  initMetadataForClass(ProvidableCompositionLocal, 'ProvidableCompositionLocal', VOID, CompositionLocal);
  initMetadataForClass(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', VOID, ProvidableCompositionLocal);
  initMetadataForClass(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', VOID, ProvidableCompositionLocal);
  initMetadataForInterface(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', VOID, VOID, [KtMap]);
  initMetadataForInterface(DerivedState, 'DerivedState');
  initMetadataForClass(DisposableEffectScope, 'DisposableEffectScope', DisposableEffectScope);
  initMetadataForClass(LaunchedEffectImpl, 'LaunchedEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(LeftCompositionCancellationException, 'LeftCompositionCancellationException', LeftCompositionCancellationException, PlatformOptimizedCancellationException);
  initMetadataForClass(DisposableEffectImpl, 'DisposableEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(JoinedKey, 'JoinedKey');
  initMetadataForObject(Key, 'Key');
  initMetadataForClass(OpaqueKey, 'OpaqueKey');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(RecomposeScopeImpl, 'RecomposeScopeImpl');
  initMetadataForLambda(Recomposer$recompositionRunner$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(State, 'State', VOID, Enum);
  initMetadataForClass(RecomposerInfoImpl, 'RecomposerInfoImpl');
  initMetadataForClass(RecomposerErrorState, 'RecomposerErrorState');
  initMetadataForCompanion(Companion_2);
  initMetadataForLambda(Recomposer$runRecomposeAndApplyChanges$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(Recomposer$recompositionRunner$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($awaitWorkAvailableCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(Recomposer, 'Recomposer', VOID, CompositionContext, VOID, [0, 1, 2]);
  initMetadataForClass(SlotTable, 'SlotTable', SlotTable);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SlotWriter, 'SlotWriter');
  initMetadataForClass(Anchor, 'Anchor');
  initMetadataForClass(GroupSourceInformation, 'GroupSourceInformation');
  initMetadataForClass(SlotReader, 'SlotReader');
  initMetadataForClass(GroupIterator, 'GroupIterator');
  initMetadataForClass(SlotTableGroup, 'SlotTableGroup');
  initMetadataForClass(PrioritySet, 'PrioritySet', PrioritySet);
  initMetadataForClass(KeyInfo, 'KeyInfo');
  initMetadataForClass(SourceInformationGroupIterator, 'SourceInformationGroupIterator');
  initMetadataForClass(SourceInformationGroupPath, 'SourceInformationGroupPath');
  initMetadataForClass(AnchoredGroupPath, 'AnchoredGroupPath', VOID, SourceInformationGroupPath);
  initMetadataForClass(SourceInformationSlotTableGroup, 'SourceInformationSlotTableGroup');
  initMetadataForClass(RelativeGroupPath, 'RelativeGroupPath', VOID, SourceInformationGroupPath);
  function merge(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(SnapshotMutationPolicy, 'SnapshotMutationPolicy');
  initMetadataForObject(StructuralEqualityPolicy, 'StructuralEqualityPolicy', VOID, VOID, [SnapshotMutationPolicy]);
  initMetadataForClass(StateRecord, 'StateRecord');
  initMetadataForClass(StateStateRecord, 'StateStateRecord', VOID, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(StateObject, 'StateObject');
  initMetadataForClass(StateObjectImpl, 'StateObjectImpl', VOID, VOID, [StateObject]);
  initMetadataForClass(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', VOID, StateObjectImpl);
  initMetadataForClass(SnapshotThreadLocal, 'SnapshotThreadLocal', SnapshotThreadLocal);
  initMetadataForClass(IntStack, 'IntStack', IntStack);
  initMetadataForClass(Stack, 'Stack', Stack);
  initMetadataForInterface(ValueHolder, 'ValueHolder');
  initMetadataForClass(LazyValueHolder, 'LazyValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(DynamicValueHolder, 'DynamicValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(StaticValueHolder, 'StaticValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(ComputedValueHolder, 'ComputedValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(OperationsDebugStringFormattable, 'OperationsDebugStringFormattable');
  initMetadataForClass(ChangeList, 'ChangeList', ChangeList, OperationsDebugStringFormattable);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ComposerChangeListWriter, 'ComposerChangeListWriter');
  initMetadataForClass(FixupList, 'FixupList', FixupList, OperationsDebugStringFormattable);
  initMetadataForClass(Operation, 'Operation');
  initMetadataForObject(Ups, 'Ups', VOID, Operation);
  initMetadataForObject(Downs, 'Downs', VOID, Operation);
  initMetadataForObject(AdvanceSlotsBy, 'AdvanceSlotsBy', VOID, Operation);
  initMetadataForObject(Remember, 'Remember', VOID, Operation);
  initMetadataForObject(AppendValue, 'AppendValue', VOID, Operation);
  initMetadataForObject(TrimParentValues, 'TrimParentValues', VOID, Operation);
  initMetadataForObject(UpdateValue, 'UpdateValue', VOID, Operation);
  initMetadataForObject(UpdateAnchoredValue, 'UpdateAnchoredValue', VOID, Operation);
  initMetadataForObject(UpdateAuxData, 'UpdateAuxData', VOID, Operation);
  initMetadataForObject(EnsureRootGroupStarted, 'EnsureRootGroupStarted', VOID, Operation);
  initMetadataForObject(EnsureGroupStarted, 'EnsureGroupStarted', VOID, Operation);
  initMetadataForObject(RemoveCurrentGroup, 'RemoveCurrentGroup', VOID, Operation);
  initMetadataForObject(MoveCurrentGroup, 'MoveCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCurrentGroup, 'EndCurrentGroup', VOID, Operation);
  initMetadataForObject(SkipToEndOfCurrentGroup, 'SkipToEndOfCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCompositionScope, 'EndCompositionScope', VOID, Operation);
  initMetadataForObject(UseCurrentNode, 'UseCurrentNode', VOID, Operation);
  initMetadataForObject(UpdateNode, 'UpdateNode', VOID, Operation);
  initMetadataForObject(RemoveNode, 'RemoveNode', VOID, Operation);
  initMetadataForObject(MoveNode, 'MoveNode', VOID, Operation);
  initMetadataForObject(InsertSlots, 'InsertSlots', VOID, Operation);
  initMetadataForObject(InsertSlotsWithFixups, 'InsertSlotsWithFixups', VOID, Operation);
  initMetadataForObject(InsertNodeFixup, 'InsertNodeFixup', VOID, Operation);
  initMetadataForObject(PostInsertNodeFixup, 'PostInsertNodeFixup', VOID, Operation);
  initMetadataForObject(ResetSlots, 'ResetSlots', VOID, Operation);
  initMetadataForObject(DetermineMovableContentNodeIndex, 'DetermineMovableContentNodeIndex', VOID, Operation);
  initMetadataForObject(CopyNodesToNewAnchorLocation, 'CopyNodesToNewAnchorLocation', VOID, Operation);
  initMetadataForObject(CopySlotTableToAnchorLocation, 'CopySlotTableToAnchorLocation', VOID, Operation);
  initMetadataForObject(EndMovableContentPlacement, 'EndMovableContentPlacement', VOID, Operation);
  initMetadataForObject(ReleaseMovableGroupAtCurrent, 'ReleaseMovableGroupAtCurrent', VOID, Operation);
  initMetadataForObject(ApplyChangeList, 'ApplyChangeList', VOID, Operation);
  initMetadataForClass(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(OpIterator, 'OpIterator');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Operations, 'Operations', Operations, OperationsDebugStringFormattable);
  initMetadataForClass(MutableVector, 'MutableVector', VOID, VOID, [RandomAccess]);
  initMetadataForLambda(ScatterSetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ScatterSetWrapper, 'ScatterSetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(ScopeMap, 'ScopeMap', ScopeMap);
  initMetadataForClass(AbstractListIterator, 'AbstractListIterator');
  initMetadataForClass(SingleElementListIterator, 'SingleElementListIterator', VOID, AbstractListIterator);
  initMetadataForClass(AbstractPersistentList, 'AbstractPersistentList', VOID, AbstractList, [KtList, Collection, AbstractList]);
  initMetadataForClass(BufferIterator, 'BufferIterator', VOID, AbstractListIterator);
  initMetadataForClass(PersistentVector, 'PersistentVector', VOID, AbstractPersistentList, [KtList, Collection, AbstractPersistentList]);
  initMetadataForClass(PersistentVectorBuilder, 'PersistentVectorBuilder', VOID, AbstractMutableList, [AbstractMutableList, KtMutableList, Collection, MutableIterable]);
  initMetadataForClass(PersistentVectorIterator, 'PersistentVectorIterator', VOID, AbstractListIterator);
  initMetadataForClass(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', VOID, AbstractListIterator);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(SmallPersistentVector, 'SmallPersistentVector', VOID, AbstractPersistentList, [KtList, Collection, AbstractPersistentList]);
  initMetadataForClass(TrieIterator, 'TrieIterator', VOID, AbstractListIterator);
  initMetadataForClass(ObjectRef, 'ObjectRef');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(PersistentHashMap, 'PersistentHashMap', VOID, AbstractMap, [AbstractMap, KtMap]);
  initMetadataForClass(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator');
  initMetadataForClass(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(TrieNodeBaseIterator, 'TrieNodeBaseIterator');
  initMetadataForClass(TrieNodeKeysIterator, 'TrieNodeKeysIterator', TrieNodeKeysIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeValuesIterator, 'TrieNodeValuesIterator', TrieNodeValuesIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', TrieNodeEntriesIterator, TrieNodeBaseIterator);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(PersistentHashMapKeys, 'PersistentHashMapKeys', VOID, AbstractSet, [KtSet, Collection, AbstractSet]);
  initMetadataForClass(PersistentHashMapValues, 'PersistentHashMapValues', VOID, AbstractCollection, [Collection, AbstractCollection]);
  initMetadataForClass(PersistentHashMapEntries, 'PersistentHashMapEntries', VOID, AbstractSet, [KtSet, Collection, AbstractSet]);
  initMetadataForClass(ModificationResult, 'ModificationResult');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(TrieNode, 'TrieNode');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(PersistentOrderedSet, 'PersistentOrderedSet', VOID, AbstractSet, [AbstractSet, KtSet, Collection]);
  initMetadataForClass(Links, 'Links', Links_init_$Create$);
  initMetadataForClass(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator');
  initMetadataForObject(EndOfChain, 'EndOfChain');
  initMetadataForObject(ListImplementation, 'ListImplementation');
  initMetadataForClass(MutabilityOwnership, 'MutabilityOwnership', MutabilityOwnership);
  initMetadataForClass(IntRef, 'IntRef', IntRef);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', VOID, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  initMetadataForClass(ThreadMap, 'ThreadMap');
  initMetadataForInterface(ObserverHandle, 'ObserverHandle');
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', VOID, VOID, [ObserverHandle, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', VOID, VOID, [ObserverHandle, FunctionAdapter]);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(Snapshot, 'Snapshot');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(MutableSnapshot, 'MutableSnapshot', VOID, Snapshot);
  initMetadataForClass(SnapshotApplyResult, 'SnapshotApplyResult');
  initMetadataForObject(Success, 'Success', VOID, SnapshotApplyResult);
  initMetadataForClass(Failure, 'Failure', VOID, SnapshotApplyResult);
  initMetadataForClass(GlobalSnapshot, 'GlobalSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(NestedMutableSnapshot, 'NestedMutableSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', SnapshotDoubleIndexHeap);
  initMetadataForCompanion(Companion_13);
  initMetadataForLambda(SnapshotIdSet$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SnapshotIdSet, 'SnapshotIdSet');
  initMetadataForClass(StateListStateRecord, 'StateListStateRecord', VOID, StateRecord);
  initMetadataForClass(SnapshotStateList, 'SnapshotStateList', SnapshotStateList, VOID, [StateObject, KtMutableList, RandomAccess]);
  initMetadataForClass(StateListIterator, 'StateListIterator');
  initMetadataForClass(SnapshotWeakSet, 'SnapshotWeakSet', SnapshotWeakSet);
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(AtomicInt, 'AtomicInt');
  initMetadataForClass(ComposableLambdaImpl, 'ComposableLambdaImpl');
  initMetadataForClass(MonotonicClockImpl, 'MonotonicClockImpl', MonotonicClockImpl, VOID, [MonotonicFrameClock], [1]);
  initMetadataForObject(Trace, 'Trace');
  initMetadataForClass(IntMap, 'IntMap', IntMap);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.s11_1 = applier;
    this.t11_1 = offset;
    this.u11_1 = 0;
  }
  protoOf(OffsetApplier).j11 = function () {
    return this.s11_1.j11();
  };
  protoOf(OffsetApplier).m11 = function (node) {
    this.u11_1 = this.u11_1 + 1 | 0;
    this.s11_1.m11(node);
  };
  protoOf(OffsetApplier).n11 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.u11_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var tmp$ret$0 = 'OffsetApplier up called with no corresponding down';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.u11_1 = this.u11_1 - 1 | 0;
    this.s11_1.n11();
  };
  protoOf(OffsetApplier).o11 = function (index, instance) {
    this.s11_1.o11(index + (this.u11_1 === 0 ? this.t11_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).p11 = function (index, instance) {
    this.s11_1.p11(index + (this.u11_1 === 0 ? this.t11_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).q11 = function (index, count) {
    this.s11_1.q11(index + (this.u11_1 === 0 ? this.t11_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).r11 = function (from, to, count) {
    var effectiveOffset = this.u11_1 === 0 ? this.t11_1 : 0;
    this.s11_1.r11(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.v11_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.w11_1 = ArrayList_init_$Create$();
    this.x11_1 = this.v11_1;
  }
  protoOf(AbstractApplier).y11 = function (_set____db54di) {
    this.x11_1 = _set____db54di;
  };
  protoOf(AbstractApplier).j11 = function () {
    return this.x11_1;
  };
  protoOf(AbstractApplier).z11 = function (node) {
    this.w11_1.e(this.j11());
    this.y11(node);
  };
  protoOf(AbstractApplier).m11 = function (node) {
    return this.z11((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).n11 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.w11_1.q()) {
      // Inline function 'androidx.compose.runtime.AbstractApplier.up.<anonymous>' call
      var tmp$ret$1 = 'empty stack';
      throwIllegalStateException(tmp$ret$1);
    }
    this.y11(this.w11_1.z1(this.w11_1.j() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.a12_1 = onFrame;
    this.b12_1 = continuation;
  }
  protoOf(FrameAwaiter).c12 = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      // Inline function 'kotlin.Companion.success' call
      var value = this.a12_1(timeNanos);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$3 = tmp;
    this.b12_1.e9(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.e12_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>' call
    if (!($this.f12_1 == null))
      return Unit_instance;
    $this.f12_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.g12_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.b12_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.e9(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.g12_1.w1();
    $this.i12_1.k12(0);
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.e12_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>.<anonymous>' call
      this$0.g12_1.t1($awaiter);
      if (this$0.g12_1.q()) {
        this$0.i12_1.k12(0);
      }
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.d12_1 = onNewAwaiters;
    this.e12_1 = new Object();
    this.f12_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g12_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.h12_1 = ArrayList_init_$Create$();
    this.i12_1 = new AtomicInt(0);
  }
  protoOf(BroadcastFrameClock).l12 = function () {
    return !(this.i12_1.co() === 0);
  };
  protoOf(BroadcastFrameClock).m12 = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.e12_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.sendFrame.<anonymous>' call
    var toResume = this.g12_1;
    this.g12_1 = this.h12_1;
    this.h12_1 = toResume;
    this.i12_1.k12(0);
    var inductionVariable = 0;
    var last = toResume.j();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.p(i).c12(timeNanos);
      }
       while (inductionVariable < last);
    toResume.w1();
  };
  protoOf(BroadcastFrameClock).n12 = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.pm();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.e12_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.f12_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.e9(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.g12_1.q();
      this.g12_1.e(awaiter);
      if (!hadAwaiters) {
        this.i12_1.k12(1);
      }
      var hasNewAwaiters = !hadAwaiters;
      cancellable.hl(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters && !(this.d12_1 == null)) {
        try {
          this.d12_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.tk();
  };
  function invalidApplier() {
    var message = 'Invalid applier';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  var providerValues;
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function get_InvalidationLocationAscending() {
    _init_properties_Composer_kt__bmp4g0();
    return InvalidationLocationAscending;
  }
  var InvalidationLocationAscending;
  function Invalidation(scope, location, instances) {
    this.r12_1 = scope;
    this.s12_1 = location;
    this.t12_1 = instances;
  }
  protoOf(Invalidation).u12 = function () {
    return this.r12_1.d13(this.t12_1);
  };
  function startRoot($this) {
    $this.p13_1 = 0;
    $this.l14_1 = $this.g13_1.h15();
    startGroup($this, 100);
    $this.f13_1.i15();
    $this.y13_1 = $this.f13_1.j15();
    $this.b14_1.m15(asInt($this.a14_1));
    $this.a14_1 = $this.n15($this.y13_1);
    $this.p14_1 = null;
    if (!$this.t13_1) {
      $this.t13_1 = $this.f13_1.o15();
    }
    if (!$this.g14_1) {
      $this.g14_1 = $this.f13_1.p15();
    }
    var tmp0_safe_receiver = read($this.y13_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.startRoot.<anonymous>' call
      tmp0_safe_receiver.e($this.g13_1);
      $this.f13_1.q15(tmp0_safe_receiver);
    }
    startGroup($this, $this.f13_1.r15());
  }
  function endRoot($this) {
    endGroup($this);
    $this.f13_1.s15();
    endGroup($this);
    $this.r14_1.f16();
    finalizeCompose($this);
    $this.l14_1.v16();
    $this.u13_1 = false;
    $this.a14_1 = asBool($this.b14_1.w16());
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.l13_1.w1();
    $this.q13_1.w1();
    $this.x13_1.w1();
    $this.b14_1.w1();
    $this.z13_1 = null;
    $this.t14_1.w1();
    $this.v14_1 = 0;
    $this.e14_1 = 0;
    $this.v13_1 = false;
    $this.u14_1 = false;
    $this.c14_1 = false;
    $this.j14_1 = false;
    $this.u13_1 = false;
    $this.d14_1 = -1;
    if (!$this.l14_1.m16_1) {
      $this.l14_1.v16();
    }
    if (!$this.n14_1.w17_1) {
      forceFreshInsertTable($this);
    }
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_0().y17_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_0().y17_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.o13_1 = $this.o13_1 + $this.l14_1.b18() | 0;
  }
  function updateSlot($this, value) {
    $this.c18();
    $this.d18(value);
  }
  function rememberObserverAnchor($this) {
    var tmp;
    if ($this.u14_1) {
      var tmp_0;
      if (get_isAfterFirstChild($this.n14_1)) {
        var group = $this.n14_1.t17_1 - 1 | 0;
        var parent = $this.n14_1.e18(group);
        while (!(parent === $this.n14_1.v17_1) && parent >= 0) {
          group = parent;
          parent = $this.n14_1.e18(group);
        }
        tmp_0 = $this.n14_1.f18(group);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (get_isAfterFirstChild_0($this.l14_1)) {
        var group_0 = $this.l14_1.n16_1 - 1 | 0;
        var parent_0 = $this.l14_1.e18(group_0);
        while (!(parent_0 === $this.l14_1.p16_1) && parent_0 >= 0) {
          group_0 = parent_0;
          parent_0 = $this.l14_1.e18(group_0);
        }
        tmp_1 = $this.l14_1.f18(group_0);
      } else {
        tmp_1 = null;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.p14_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.l14_1.p16_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.u14_1 && $this.o14_1) {
      var current = $this.n14_1.v17_1;
      while (current > 0) {
        if ($this.n14_1.h18(current) === 202 && equals($this.n14_1.i18(current), get_compositionLocalMap())) {
          var tmp = $this.n14_1.g18(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.p14_1 = providers;
          return providers;
        }
        current = $this.n14_1.e18(current);
      }
    }
    if ($this.l14_1.j() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.l14_1.h18(current_0) === 202 && equals($this.l14_1.i18(current_0), get_compositionLocalMap())) {
          var tmp0_safe_receiver = $this.z13_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p(current_0);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            var tmp_1 = $this.l14_1.g18(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.p14_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.l14_1.e18(current_0);
      }
    }
    $this.p14_1 = $this.y13_1;
    return $this.y13_1;
  }
  function recordProviderUpdate($this, providers) {
    var tmp0_elvis_lhs = $this.z13_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordProviderUpdate.<anonymous>' call
      var newProviderUpdates = new IntMap();
      $this.z13_1 = newProviderUpdates;
      tmp = newProviderUpdates;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var providerUpdates = tmp;
    providerUpdates.k18($this.l14_1.n16_1, providers);
  }
  function ensureWriter($this) {
    if ($this.n14_1.w17_1) {
      $this.n14_1 = $this.m14_1.l18();
      $this.n14_1.m18();
      $this.o14_1 = false;
      $this.p14_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.n14_1.w17_1);
    forceFreshInsertTable($this);
  }
  function forceFreshInsertTable($this) {
    var tmp = $this;
    // Inline function 'kotlin.apply' call
    var this_0 = new SlotTable();
    // Inline function 'androidx.compose.runtime.ComposerImpl.forceFreshInsertTable.<anonymous>' call
    if ($this.g14_1) {
      this_0.n18();
    }
    if ($this.f13_1.p18()) {
      this_0.o18();
    }
    tmp.m14_1 = this_0;
    var tmp_0 = $this;
    // Inline function 'kotlin.also' call
    var this_1 = $this.m14_1.l18();
    // Inline function 'androidx.compose.runtime.ComposerImpl.forceFreshInsertTable.<anonymous>' call
    this_1.q18(true);
    tmp_0.n14_1 = this_1;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.l14_1.u18();
    } else {
      if (!(data == null) && !($this.l14_1.s18() === data)) {
        $this.r14_1.r18(data);
      }
      $this.l14_1.t18();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
    var rGroupIndex = $this.p13_1;
    if (objectKey == null)
      if (!(data == null) && key === 207 && !equals(data, Companion_getInstance().v18_1)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash = hashCode(data);
        var tmp = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = $this.v14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_1 = rotateLeft(this_0, 3) ^ keyHash;
        tmp.v14_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var tmp_0 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_2 = $this.v14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_3 = rotateLeft(this_2, 3) ^ key;
        tmp_0.v14_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
      }
     else {
      if (objectKey instanceof Enum) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_0 = objectKey.k2_1;
        var tmp_1 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_4 = $this.v14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
        tmp_1.v14_1 = rotateLeft(this_5, 3) ^ 0;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_1 = hashCode(objectKey);
        var tmp_2 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_6 = $this.v14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
        tmp_2.v14_1 = rotateLeft(this_7, 3) ^ 0;
      }
    }
    if (objectKey == null) {
      $this.p13_1 = $this.p13_1 + 1 | 0;
    }
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().y17_1));
    if ($this.u14_1) {
      $this.l14_1.w18();
      var startIndex = $this.n14_1.t17_1;
      if (isNode) {
        $this.n14_1.z18(key, Companion_getInstance().v18_1);
      } else if (!(data == null)) {
        var tmp_3 = $this.n14_1;
        tmp_3.y18(key, objectKey == null ? Companion_getInstance().v18_1 : objectKey, data);
      } else {
        var tmp_4 = $this.n14_1;
        tmp_4.x18(key, objectKey == null ? Companion_getInstance().v18_1 : objectKey);
      }
      var tmp4_safe_receiver = $this.m13_1;
      if (tmp4_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp4_safe_receiver.g19(insertKeyInfo, $this.n13_1 - tmp4_safe_receiver.b19_1 | 0);
        tmp4_safe_receiver.h19(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_5;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().z17_1))) {
      tmp_5 = $this.c14_1;
    } else {
      tmp_5 = false;
    }
    var forceReplace = tmp_5;
    if ($this.m13_1 == null) {
      var slotKey = $this.l14_1.i19();
      if (!forceReplace && slotKey === key && equals(objectKey, $this.l14_1.k19())) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.m13_1 = new Pending($this.l14_1.j19(), $this.n13_1);
      }
    }
    var pending = $this.m13_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.l19(key, objectKey);
      if (!forceReplace && !(keyInfo == null)) {
        pending.h19(keyInfo);
        var location = keyInfo.p19_1;
        $this.n13_1 = pending.s19(keyInfo) + pending.b19_1 | 0;
        var relativePosition = pending.t19(keyInfo);
        var currentRelativePosition = relativePosition - pending.c19_1 | 0;
        pending.u19(relativePosition, pending.c19_1);
        $this.r14_1.v19(location);
        $this.l14_1.w19(location);
        if (currentRelativePosition > 0) {
          $this.r14_1.x19(currentRelativePosition);
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.l14_1.w18();
        $this.u14_1 = true;
        $this.p14_1 = null;
        ensureWriter($this);
        $this.n14_1.m19();
        var startIndex_0 = $this.n14_1.t17_1;
        if (isNode) {
          $this.n14_1.z18(key, Companion_getInstance().v18_1);
        } else if (!(data == null)) {
          var tmp_6 = $this.n14_1;
          tmp_6.y18(key, objectKey == null ? Companion_getInstance().v18_1 : objectKey, data);
        } else {
          var tmp_7 = $this.n14_1;
          tmp_7.x18(key, objectKey == null ? Companion_getInstance().v18_1 : objectKey);
        }
        $this.s14_1 = $this.n14_1.f18(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.g19(insertKeyInfo_0, $this.n13_1 - pending.b19_1 | 0);
        pending.h19(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$12 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$12, isNode ? 0 : $this.n13_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.l13_1.y19($this.m13_1);
    $this.m13_1 = newPending;
    $this.q13_1.m15($this.o13_1);
    $this.q13_1.m15($this.p13_1);
    $this.q13_1.m15($this.n13_1);
    if (isNode)
      $this.n13_1 = 0;
    $this.o13_1 = 0;
    $this.p13_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.l13_1.w16();
    if (!(previousPending == null) && !inserting) {
      previousPending.c19_1 = previousPending.c19_1 + 1 | 0;
    }
    $this.m13_1 = previousPending;
    $this.n13_1 = $this.q13_1.w16() + expectedNodeCount | 0;
    $this.p13_1 = $this.q13_1.w16();
    $this.o13_1 = $this.q13_1.w16() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    var rGroupIndex = $this.q13_1.z19() - 1 | 0;
    if ($this.u14_1) {
      var parent = $this.n14_1.v17_1;
      var tmp1 = $this.n14_1.h18(parent);
      var tmp3 = $this.n14_1.i18(parent);
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      var data = $this.n14_1.g18(parent);
      if (tmp3 == null)
        if (!(data == null) && tmp1 === 207 && !equals(data, Companion_getInstance().v18_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey = hashCode(data);
          var tmp = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_0 = $this.v14_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_1 = rotateRight(this_0, 3) ^ groupKey;
          tmp.v14_1 = rotateRight(this_1, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_0 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_2 = $this.v14_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_3 = rotateRight(this_2, 3) ^ tmp1;
          tmp_0.v14_1 = rotateRight(this_3, 3);
        }
       else {
        if (tmp3 instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_0 = tmp3.k2_1;
          var tmp_1 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_4 = $this.v14_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_5 = rotateRight(this_4, 3) ^ groupKey_0;
          tmp_1.v14_1 = rotateRight(this_5, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_1 = hashCode(tmp3);
          var tmp_2 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_6 = $this.v14_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_7 = rotateRight(this_6, 3) ^ groupKey_1;
          tmp_2.v14_1 = rotateRight(this_7, 3);
        }
      }
    } else {
      var parent_0 = $this.l14_1.p16_1;
      var tmp6 = $this.l14_1.h18(parent_0);
      var tmp8 = $this.l14_1.i18(parent_0);
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      var data_0 = $this.l14_1.g18(parent_0);
      if (tmp8 == null)
        if (!(data_0 == null) && tmp6 === 207 && !equals(data_0, Companion_getInstance().v18_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_2 = hashCode(data_0);
          var tmp_3 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_8 = $this.v14_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_9 = rotateRight(this_8, 3) ^ groupKey_2;
          tmp_3.v14_1 = rotateRight(this_9, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_4 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_10 = $this.v14_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_11 = rotateRight(this_10, 3) ^ tmp6;
          tmp_4.v14_1 = rotateRight(this_11, 3);
        }
       else {
        if (tmp8 instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_3 = tmp8.k2_1;
          var tmp_5 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_12 = $this.v14_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_13 = rotateRight(this_12, 3) ^ groupKey_3;
          tmp_5.v14_1 = rotateRight(this_13, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_4 = hashCode(tmp8);
          var tmp_6 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_14 = $this.v14_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_15 = rotateRight(this_14, 3) ^ groupKey_4;
          tmp_6.v14_1 = rotateRight(this_15, 3);
        }
      }
    }
    var expectedNodeCount = $this.o13_1;
    var pending = $this.m13_1;
    if (!(pending == null) && pending.a19_1.j() > 0) {
      var previous = pending.a19_1;
      var current = pending.a1a();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.j();
      var previousIndex = 0;
      var previousEnd = previous.j();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.p(previousIndex);
        if (!usedKeys.o(previousInfo)) {
          var deleteOffset = pending.s19(previousInfo);
          $this.r14_1.b1a(deleteOffset + pending.b19_1 | 0, previousInfo.q19_1);
          pending.c1a(previousInfo.p19_1, 0);
          $this.r14_1.v19(previousInfo.p19_1);
          $this.l14_1.w19(previousInfo.p19_1);
          recordDelete($this);
          $this.l14_1.b18();
          removeRange($this.w13_1, previousInfo.p19_1, previousInfo.p19_1 + $this.l14_1.d1a(previousInfo.p19_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.o(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.p(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.s19(currentInfo);
            placedKeys.e(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.e1a(currentInfo);
              $this.r14_1.f1a(nodePosition + pending.b19_1 | 0, nodeOffset + pending.b19_1 | 0, updatedCount);
              pending.g1a(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.e1a(currentInfo) | 0;
        }
      }
      $this.r14_1.h1a();
      if (previous.j() > 0) {
        $this.r14_1.v19($this.l14_1.i1a());
        $this.l14_1.m18();
      }
    }
    var removeIndex = $this.n13_1;
    while (!$this.l14_1.j1a()) {
      var startSlot = $this.l14_1.n16_1;
      recordDelete($this);
      var nodesToRemove = $this.l14_1.b18();
      $this.r14_1.b1a(removeIndex, nodesToRemove);
      removeRange($this.w13_1, startSlot, $this.l14_1.n16_1);
    }
    var inserting = $this.u14_1;
    if (inserting) {
      if (isNode) {
        $this.t14_1.p1a();
        expectedNodeCount = 1;
      }
      $this.l14_1.q1a();
      var parentGroup = $this.n14_1.v17_1;
      $this.n14_1.r1a();
      if (!$this.l14_1.u1a()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.n14_1.s1a();
        $this.n14_1.q18(true);
        recordInsert($this, $this.s14_1);
        $this.u14_1 = false;
        if (!$this.g13_1.t1a()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        $this.r14_1.k1a();
      }
      var remainingSlots = $this.l14_1.l1a();
      if (remainingSlots > 0) {
        $this.r14_1.m1a(remainingSlots);
      }
      $this.r14_1.n1a();
      var parentGroup_0 = $this.l14_1.p16_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.l14_1.o1a();
      $this.r14_1.h1a();
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.j14_1;
    $this.j14_1 = true;
    var recomposed = false;
    var parent = $this.l14_1.p16_1;
    var end = parent + $this.l14_1.d1a(parent) | 0;
    var recomposeIndex = $this.n13_1;
    var recomposeCompoundKey = $this.v14_1;
    var oldGroupNodeCount = $this.o13_1;
    var oldRGroupIndex = $this.p13_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.w13_1, $this.l14_1.n16_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.s12_1;
      removeLocation($this.w13_1, location);
      if (firstInRange_0.u12()) {
        recomposed = true;
        $this.l14_1.w19(location);
        var newGroup = $this.l14_1.n16_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.n13_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.p13_1 = rGroupIndexOf($this, newGroup);
        var newParent = $this.l14_1.e18(newGroup);
        $this.v14_1 = compoundKeyOf($this, newParent, rGroupIndexOf($this, newParent), parent, recomposeCompoundKey);
        $this.p14_1 = null;
        firstInRange_0.r12_1.w1a($this);
        $this.p14_1 = null;
        $this.l14_1.x1a(parent);
      } else {
        $this.i14_1.y19(firstInRange_0.r12_1);
        firstInRange_0.r12_1.v1a();
        $this.i14_1.w16();
      }
      firstInRange_0 = firstInRange($this.w13_1, $this.l14_1.n16_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.l14_1.m18();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.n13_1 = recomposeIndex + parentGroupNodes | 0;
      $this.o13_1 = oldGroupNodeCount + parentGroupNodes | 0;
      $this.p13_1 = oldRGroupIndex;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.v14_1 = recomposeCompoundKey;
    $this.j14_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.l13_1.j() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.l13_1.y1a(pendingIndex);
            if (!(pending == null) && pending.c1a(current, newCurrentNodes)) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.l14_1.p16_1;
        } else {
          if ($this.l14_1.z1a(current))
            break $l$loop_0;
          current = $this.l14_1.e18(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.l14_1.e18(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.l14_1.z1a(anchorGroup)) {
      anchorGroup = $this.l14_1.e18(anchorGroup);
    }
    var index = $this.l14_1.z1a(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.l14_1.a1b(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.l14_1.d1a(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + ($this.l14_1.z1a(current) ? 1 : updatedNodeCount($this, current)) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function rGroupIndexOf($this, group) {
    var result = 0;
    var parent = $this.l14_1.e18(group);
    var child = parent + 1 | 0;
    while (child < group) {
      if (!$this.l14_1.b1b(child)) {
        result = result + 1 | 0;
      }
      child = child + $this.l14_1.d1a(child) | 0;
    }
    return result;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.s13_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.nv(group) ? tmp0_safe_receiver.p(group) : 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.r13_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.l14_1.a1b(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.s13_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = new MutableIntIntMap();
          $this.s13_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        virtualCounts.mv(group, count);
      } else {
        var tmp1_elvis_lhs = $this.r13_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.l14_1.j());
          fill(newCounts_0, -1);
          $this.r13_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.r13_1 = null;
    $this.s13_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.l14_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 && !(current === nearestCommonRoot)) {
      if (reader.z1a(current)) {
        $this.r14_1.k1a();
      }
      current = reader.e18(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 && !(group === nearestCommonRoot)) {
      doRecordDownsFor($this, $this.l14_1.e18(group), nearestCommonRoot);
      if ($this.l14_1.z1a(group)) {
        $this.r14_1.c1b(nodeAt($this.l14_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, rGroupIndex, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.l14_1, $this, group);
      var tmp_0;
      if (groupKey === 126665345) {
        tmp_0 = groupKey;
      } else {
        var parent = $this.l14_1.e18(group);
        var parentKey = parent === recomposeGroup ? recomposeKey : compoundKeyOf($this, parent, rGroupIndexOf($this, parent), recomposeGroup, recomposeKey);
        var effectiveRGroupIndex = $this.l14_1.b1b(group) ? 0 : rGroupIndex;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = rotateLeft(parentKey, 3) ^ groupKey;
        tmp_0 = rotateLeft(this_0, 3) ^ effectiveRGroupIndex;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.b1b(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.i18(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.k2_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = 126665345;
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var it = _this__u8e3s4.h18(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.g18(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance().v18_1) ? it : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? it : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = it;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.o13_1 = $this.l14_1.d1b();
    $this.l14_1.m18();
  }
  function addRecomposeScope($this) {
    if ($this.u14_1) {
      var tmp = $this.k13_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.i14_1.y19(scope);
      $this.d18(scope);
      scope.h1b($this.f14_1);
    } else {
      var invalidation = removeLocation($this.w13_1, $this.l14_1.p16_1);
      var slot = $this.l14_1.i();
      var tmp_0;
      if (equals(slot, Companion_getInstance().v18_1)) {
        var tmp_1 = $this.k13_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.d18(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      var tmp_2;
      if (!(invalidation == null)) {
        tmp_2 = true;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = scope_0.e1b();
        // Inline function 'androidx.compose.runtime.ComposerImpl.addRecomposeScope.<anonymous>' call
        if (this_0) {
          scope_0.f1b(false);
        }
        tmp_2 = this_0;
      }
      scope_0.g1b(tmp_2);
      $this.i14_1.y19(scope_0);
      scope_0.h1b($this.f14_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.i1b(126665345, content);
    updateSlot($this, parameter);
    var savedCompoundKeyHash = $this.v14_1;
    try {
      $this.v14_1 = 126665345;
      if ($this.u14_1) {
        $this.n14_1.j1b();
      }
      var providersChanged = $this.u14_1 ? false : !equals($this.l14_1.s18(), locals);
      if (providersChanged) {
        recordProviderUpdate($this, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_0().y17_1, locals);
      $this.p14_1 = null;
      if ($this.u14_1 && !force) {
        $this.o14_1 = true;
        var anchor = $this.n14_1.f18($this.n14_1.e18($this.n14_1.v17_1));
        var reference = new MovableContentStateReference(content, parameter, $this.k13_1, $this.m14_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.f13_1.k1b(reference);
      } else {
        var savedProvidersInvalid = $this.a14_1;
        $this.a14_1 = providersChanged;
        invokeComposable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.a14_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.p14_1 = null;
      $this.v14_1 = savedCompoundKeyHash;
      $this.l1b();
    }
  }
  function insertMovableContentGuarded($this, references) {
    var tmp0 = $this.r14_1;
    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
    var newChangeList = $this.j13_1;
    var previousChangeList = tmp0.u15_1;
    try {
      tmp0.u15_1 = newChangeList;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>' call
      $this.r14_1.m1b();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.p(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
          var to = item.la();
          var from = item.ma();
          var anchor = to.r1b_1;
          var location = to.q1b_1.u1b(anchor);
          var effectiveNodeIndex = new IntRef();
          $this.r14_1.v1b(effectiveNodeIndex, anchor);
          if (from == null) {
            var toSlotTable = to.q1b_1;
            if (equals(toSlotTable, $this.m14_1)) {
              createFreshInsertTable($this);
            }
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader = to.q1b_1.h15();
            var tmp;
            try {
              reader.w19(location);
              $this.r14_1.a1c(location);
              var offsetChanges = new ChangeList();
              recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda($this, offsetChanges, reader, to));
              $this.r14_1.b1c(offsetChanges, effectiveNodeIndex);
              tmp = Unit_instance;
            }finally {
              reader.v16();
            }
          } else {
            var resolvedState = $this.f13_1.w1b(from);
            var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.x1b_1;
            var fromTable = tmp1_elvis_lhs == null ? from.q1b_1 : tmp1_elvis_lhs;
            var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.x1b_1;
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.f18(0);
            var fromAnchor = tmp4_elvis_lhs == null ? from.r1b_1 : tmp4_elvis_lhs;
            var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!nodesToInsert.q()) {
              $this.r14_1.y1b(nodesToInsert, effectiveNodeIndex);
              if (equals(to.q1b_1, $this.g13_1)) {
                var group = $this.g13_1.u1b(anchor);
                updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.j() | 0);
              }
            }
            $this.r14_1.z1b(resolvedState, $this.f13_1, from, to);
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader_0 = fromTable.h15();
            var tmp_0;
            try {
              $l$block: {
                // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                var savedReader = $this.l14_1;
                var savedCountOverrides = $this.r13_1;
                var savedProviderUpdates = $this.z13_1;
                $this.r13_1 = null;
                $this.z13_1 = null;
                try {
                  $this.l14_1 = reader_0;
                  // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var newLocation = fromTable.u1b(fromAnchor);
                  reader_0.w19(newLocation);
                  $this.r14_1.a1c(newLocation);
                  var offsetChanges_0 = new ChangeList();
                  // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
                  var this_0 = $this.r14_1;
                  var previousChangeList_0 = this_0.u15_1;
                  try {
                    this_0.u15_1 = offsetChanges_0;
                    // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
                    var this_1 = $this.r14_1;
                    var previousImplicitRootStart = this_1.x15_1;
                    try {
                      this_1.x15_1 = false;
                      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = reader_0.n16_1;
                      var tmp_2 = from.s1b_1;
                      recomposeMovableContent($this, from.p1b_1, to.p1b_1, tmp_1, tmp_2, ComposerImpl$insertMovableContentGuarded$lambda_0($this, to));
                    }finally {
                      this_1.x15_1 = previousImplicitRootStart;
                    }
                  }finally {
                    this_0.u15_1 = previousChangeList_0;
                  }
                  $this.r14_1.b1c(offsetChanges_0, effectiveNodeIndex);
                  break $l$block;
                }finally {
                  $this.l14_1 = savedReader;
                  $this.r13_1 = savedCountOverrides;
                  $this.z13_1 = savedProviderUpdates;
                }
              }
              tmp_0 = Unit_instance;
            }finally {
              reader_0.v16();
            }
          }
          $this.r14_1.c1c();
        }
         while (inductionVariable <= last);
      $this.r14_1.d1c();
      $this.r14_1.a1c(0);
    }finally {
      tmp0.u15_1 = previousChangeList;
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedIsComposing = $this.j14_1;
    var savedNodeIndex = $this.n13_1;
    try {
      $this.j14_1 = true;
      $this.n13_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.p(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.la();
          var instances = item.ma();
          if (!(instances == null)) {
            $this.e1c(scope, instances);
          } else {
            $this.e1c(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (from == null) {
        tmp = null;
      } else {
        tmp = from.f1c(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.j14_1 = savedIsComposing;
      $this.n13_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function doCompose($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.j14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>' call
      var tmp$ret$0 = 'Reentrant composition is not supported';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp1 = 'Compose:recompose';
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.trace' call
      var token = Trace_instance.g1c(tmp1);
      try {
        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>' call
        $this.f14_1 = currentSnapshot().l1c();
        $this.z13_1 = null;
        // Inline function 'androidx.collection.ScatterMap.forEach' call
        var this_0 = invalidationsRequested.m1c_1;
        var k = this_0.tx_1;
        var v = this_0.ux_1;
        $l$block_0: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m = this_0.sx_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                      var tmp = k[index];
                      var tmp1_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      var tmp_0 = v[index];
                      var tmp2 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                      $l$block: {
                        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
                        if (!(tmp1_0 instanceof RecomposeScopeImpl))
                          THROW_CCE();
                        var tmp0_safe_receiver = tmp1_0.x12_1;
                        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1c_1;
                        var tmp_1;
                        if (tmp1_elvis_lhs == null) {
                          break $l$block;
                        } else {
                          tmp_1 = tmp1_elvis_lhs;
                        }
                        var location = tmp_1;
                        // Inline function 'kotlin.takeUnless' call
                        var tmp_2;
                        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>.<anonymous>' call
                        if (!(tmp2 === ScopeInvalidated_instance)) {
                          tmp_2 = tmp2;
                        } else {
                          tmp_2 = null;
                        }
                        var tmp$ret$5 = tmp_2;
                        $this.w13_1.e(new Invalidation(tmp1_0, location, tmp$ret$5));
                      }
                    }
                    slot = slot.y2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block_0;
                }
              }
            }
             while (!(i === lastIndex));
        }
        sortWith($this.w13_1, get_InvalidationLocationAscending());
        $this.n13_1 = 0;
        var complete = false;
        $this.j14_1 = true;
        try {
          startRoot($this);
          var savedContent = $this.c18();
          if (!(savedContent === content) && !(content == null)) {
            $this.d18((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.h14_1;
          var observers = derivedStateObservers_0();
          try {
            observers.r1c(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, content);
              endGroup($this);
            } else if (($this.u13_1 || $this.a14_1) && !(savedContent == null) && !equals(savedContent, Companion_getInstance().v18_1)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.s1c();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$7 = observers.q1c_1 - 1 | 0;
            observers.z1(tmp$ret$7);
          }
          endRoot($this);
          complete = true;
        }finally {
          $this.j14_1 = false;
          $this.w13_1.w1();
          if (!complete) {
            abortRoot($this);
          }
          createFreshInsertTable($this);
        }
        break $l$block_1;
      }finally {
        Trace_instance.t1c(token);
      }
    }
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.u1c(_this__u8e3s4.p16_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.u1c(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!$this.v13_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $this.v13_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.v13_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected';
      composeImmediateRuntimeError(tmp$ret$0);
    }
  }
  function recordInsert($this, anchor) {
    if ($this.t14_1.q()) {
      $this.r14_1.w1c(anchor, $this.m14_1);
    } else {
      $this.r14_1.v1c(anchor, $this.m14_1, $this.t14_1);
      $this.t14_1 = new FixupList();
    }
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.l14_1.n16_1);
    $this.r14_1.x1c();
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    $this.r14_1.h1a();
  }
  function reportAllMovableContent($this) {
    if ($this.g13_1.z1c()) {
      var changes = new ChangeList();
      $this.q14_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.g13_1.h15();
      var tmp;
      try {
        $this.l14_1 = reader;
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
        var this_0 = $this.r14_1;
        var previousChangeList = this_0.u15_1;
        try {
          this_0.u15_1 = changes;
          // Inline function 'androidx.compose.runtime.ComposerImpl.reportAllMovableContent.<anonymous>.<anonymous>' call
          reportFreeMovableContent($this, 0);
          $this.r14_1.y1c();
        }finally {
          this_0.u15_1 = previousChangeList;
        }
        tmp = Unit_instance;
      }finally {
        reader.v16();
      }
    }
  }
  function finalizeCompose($this) {
    $this.r14_1.a1d();
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!$this.l13_1.q()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var tmp$ret$0 = 'Start/end imbalance';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.m13_1 = null;
    $this.n13_1 = 0;
    $this.o13_1 = 0;
    $this.v14_1 = 0;
    $this.v13_1 = false;
    $this.r14_1.b1d();
    $this.i14_1.w1();
    clearUpdatedNodeCounts($this);
  }
  function CompositionContextHolder() {
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var reader = this$0.l14_1;
    var tmp;
    if (reader.s1d(group)) {
      var key = reader.h18(group);
      var objectKey = reader.i18(group);
      var tmp_0;
      var tmp_1;
      if (key === 126665345) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = reader.d1d(group, 0);
        var anchor = reader.f18(group);
        var end = group + reader.d1a(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.w13_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.j());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.p(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            var element = to(item.r12_1, item.t12_1);
            target.e(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.k13_1, this$0.g13_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.f13_1.o1d(reference);
        this$0.r14_1.p1d();
        this$0.r14_1.q1d(this$0.k13_1, this$0.f13_1, reference);
        var tmp_2;
        if (needsNodeDelete) {
          this$0.r14_1.r1d(nodeIndex, group);
          tmp_2 = 0;
        } else {
          tmp_2 = reader.a1b(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 && equals(objectKey, get_reference())) {
          var tmp_3 = reader.d1d(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.e1d_1;
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s = compositionContext.k1d_1.g();
            while (_iterator__ex2g4s.h()) {
              var element_0 = _iterator__ex2g4s.i();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.f13_1.n1d(element_0.k13_1);
            }
          }
          tmp_0 = reader.a1b(group);
        } else {
          if (reader.z1a(group)) {
            tmp_0 = 1;
          } else {
            tmp_0 = reader.a1b(group);
          }
        }
      }
      tmp = tmp_0;
    } else if (reader.c1d(group)) {
      var size = reader.d1a(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = reader.z1a(current);
        if (isNode) {
          this$0.r14_1.h1a();
          this$0.r14_1.c1b(reader.u1c(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode || needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          this$0.r14_1.h1a();
          this$0.r14_1.k1a();
        }
        current = current + reader.d1a(current) | 0;
      }
      tmp = reader.z1a(group) ? 1 : runningNodeCount;
    } else if (reader.z1a(group)) {
      tmp = 1;
    } else {
      tmp = reader.a1b(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.t1d_1 = this$0;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C3293@126183L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:3293)');
        }
        $content.v1d_1($parameter, $composer_0, 0);
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
  function ComposerImpl$insertMovableContentGuarded$lambda(this$0, $offsetChanges, $reader, $to) {
    return function () {
      var tmp0 = this$0.r14_1;
      var newChangeList = $offsetChanges;
      var previousChangeList = tmp0.u15_1;
      var tmp;
      try {
        tmp0.u15_1 = newChangeList;
        var tmp0_0 = this$0;
        var tmp1 = $reader;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
          var savedReader = tmp0_0.l14_1;
          var savedCountOverrides = tmp0_0.r13_1;
          var savedProviderUpdates = tmp0_0.z13_1;
          tmp0_0.r13_1 = null;
          tmp0_0.z13_1 = null;
          try {
            tmp0_0.l14_1 = tmp1;
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
            var this_0 = this$0.r14_1;
            var previousImplicitRootStart = this_0.x15_1;
            try {
              this_0.x15_1 = false;
              // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              invokeMovableContentLambda(this$0, $to.n1b_1, $to.t1b_1, $to.o1b_1, true);
            }finally {
              this_0.x15_1 = previousImplicitRootStart;
            }
            break $l$block;
          }finally {
            tmp0_0.l14_1 = savedReader;
            tmp0_0.r13_1 = savedCountOverrides;
            tmp0_0.z13_1 = savedProviderUpdates;
          }
        }
        tmp = Unit_instance;
      }finally {
        tmp0.u15_1 = previousChangeList;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.n1b_1, $to.t1b_1, $to.o1b_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.e13_1 = applier;
    this.f13_1 = parentContext;
    this.g13_1 = slotTable;
    this.h13_1 = abandonSet;
    this.i13_1 = changes;
    this.j13_1 = lateChanges;
    this.k13_1 = composition;
    this.l13_1 = new Stack();
    this.m13_1 = null;
    this.n13_1 = 0;
    this.o13_1 = 0;
    this.p13_1 = 0;
    this.q13_1 = new IntStack();
    this.r13_1 = null;
    this.s13_1 = null;
    this.t13_1 = false;
    this.u13_1 = false;
    this.v13_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.w13_1 = ArrayList_init_$Create$();
    this.x13_1 = new IntStack();
    this.y13_1 = persistentCompositionLocalHashMapOf();
    this.z13_1 = null;
    this.a14_1 = false;
    this.b14_1 = new IntStack();
    this.c14_1 = false;
    this.d14_1 = -1;
    this.e14_1 = 0;
    this.f14_1 = 0;
    this.g14_1 = this.f13_1.p15() || this.f13_1.p18();
    var tmp_0 = this;
    tmp_0.h14_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.i14_1 = new Stack();
    this.j14_1 = false;
    this.k14_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.g13_1.h15();
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.v16();
    tmp_1.l14_1 = this_0;
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new SlotTable();
    // Inline function 'androidx.compose.runtime.ComposerImpl.insertTable.<anonymous>' call
    if (this.f13_1.p15()) {
      this_1.n18();
    }
    if (this.f13_1.p18()) {
      this_1.o18();
    }
    tmp_2.m14_1 = this_1;
    var tmp_3 = this;
    // Inline function 'kotlin.also' call
    var this_2 = this.m14_1.l18();
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_2.q18(true);
    tmp_3.n14_1 = this_2;
    this.o14_1 = false;
    this.p14_1 = null;
    this.q14_1 = null;
    this.r14_1 = new ComposerChangeListWriter(this, this.i13_1);
    var tmp_4 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.m14_1.h15();
    var tmp_5;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_5 = reader.f18(0);
    }finally {
      reader.v16();
    }
    tmp_4.s14_1 = tmp_5;
    this.t14_1 = new FixupList();
    this.u14_1 = false;
    this.v14_1 = 0;
  }
  protoOf(ComposerImpl).x1d = function () {
    return this.e13_1;
  };
  protoOf(ComposerImpl).y1d = function () {
    return this.e14_1 > 0;
  };
  protoOf(ComposerImpl).z1d = function () {
    return this.f13_1.a1e();
  };
  protoOf(ComposerImpl).b1e = function (key) {
    return start(this, key, null, Companion_getInstance_0().y17_1, null);
  };
  protoOf(ComposerImpl).c1e = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).d1e = function (key) {
    var pending = this.m13_1;
    if (!(pending == null)) {
      start(this, key, null, Companion_getInstance_0().y17_1, null);
      return Unit_instance;
    }
    validateNodeNotExpected(this);
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
    var rGroupIndex = this.p13_1;
    if (null == null)
      if (!(null == null) && key === 207 && !equals(null, Companion_getInstance().v18_1)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash = hashCode(null);
        var tmp = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = this.v14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_1 = rotateLeft(this_0, 3) ^ keyHash;
        tmp.v14_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var tmp_0 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_2 = this.v14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_3 = rotateLeft(this_2, 3) ^ key;
        tmp_0.v14_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
      }
     else {
      if (null instanceof Enum) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_0 = null.k2_1;
        var tmp_1 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_4 = this.v14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
        tmp_1.v14_1 = rotateLeft(this_5, 3) ^ 0;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_1 = hashCode(null);
        var tmp_2 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_6 = this.v14_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
        tmp_2.v14_1 = rotateLeft(this_7, 3) ^ 0;
      }
    }
    this.p13_1 = this.p13_1 + 1 | 0;
    var reader = this.l14_1;
    if (this.u14_1) {
      reader.w18();
      this.n14_1.x18(key, Companion_getInstance().v18_1);
      enterGroup(this, false, null);
      return Unit_instance;
    }
    var slotKey = reader.i19();
    if (slotKey === key && !reader.e1e()) {
      reader.t18();
      enterGroup(this, false, null);
      return Unit_instance;
    }
    if (!reader.j1a()) {
      var removeIndex = this.n13_1;
      var startSlot = reader.n16_1;
      recordDelete(this);
      var nodesToRemove = reader.b18();
      this.r14_1.b1a(removeIndex, nodesToRemove);
      removeRange(this.w13_1, startSlot, reader.n16_1);
    }
    reader.w18();
    this.u14_1 = true;
    this.p14_1 = null;
    ensureWriter(this);
    var writer = this.n14_1;
    writer.m19();
    var startIndex = writer.t17_1;
    writer.x18(key, Companion_getInstance().v18_1);
    this.s14_1 = writer.f18(startIndex);
    enterGroup(this, false, null);
  };
  protoOf(ComposerImpl).f1e = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).g1e = function () {
    return start(this, -127, null, Companion_getInstance_0().y17_1, null);
  };
  protoOf(ComposerImpl).h1e = function () {
    endGroup(this);
    var scope = this.i1e();
    if (!(scope == null) && scope.a1a()) {
      scope.j1e(true);
    }
  };
  protoOf(ComposerImpl).k1e = function () {
    var tmp;
    if (!this.w1d() || this.a14_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.i1e();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k1e()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).i1b = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_0().y17_1, null);
  };
  protoOf(ComposerImpl).l1b = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).l1e = function () {
    this.z13_1 = null;
  };
  protoOf(ComposerImpl).m1e = function () {
    return this.u14_1;
  };
  protoOf(ComposerImpl).w1d = function () {
    var tmp;
    var tmp_0;
    if (!this.u14_1 && !this.c14_1 && !this.a14_1) {
      var tmp0_safe_receiver = this.i1e();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1e()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.u13_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).u18 = function () {
    start(this, 125, null, Companion_getInstance_0().z17_1, null);
    this.v13_1 = true;
  };
  protoOf(ComposerImpl).o1e = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.u14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var tmp$ret$0 = 'createNode() can only be called when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var insertIndex = this.q13_1.p1e();
    var groupAnchor = this.n14_1.f18(this.n14_1.v17_1);
    this.o13_1 = this.o13_1 + 1 | 0;
    this.t14_1.q1e(factory, insertIndex, groupAnchor);
  };
  protoOf(ComposerImpl).r1e = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.u14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var tmp$ret$0 = 'useNode() called while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var node = _get_node__db0vwp(this.l14_1, this);
    this.r14_1.c1b(node);
    var tmp;
    if (this.c14_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.r14_1.s1e(node);
    }
  };
  protoOf(ComposerImpl).t1e = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).u1e = function (value, block) {
    if (this.u14_1) {
      this.t14_1.w1e(value, block);
    } else {
      this.r14_1.v1e(value, block);
    }
  };
  protoOf(ComposerImpl).c18 = function () {
    var tmp;
    if (this.u14_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().v18_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.l14_1.i();
      var tmp_0;
      var tmp_1;
      if (this.c14_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().v18_1;
      } else {
        tmp_0 = it;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).x1e = function () {
    var tmp;
    if (this.u14_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().v18_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlotForCache.<anonymous>' call
      var it = this.l14_1.i();
      var tmp_0;
      var tmp_1;
      if (this.c14_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().v18_1;
      } else {
        if (it instanceof RememberObserverHolder) {
          tmp_0 = it.y1e_1;
        } else {
          tmp_0 = it;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).n15 = function (value) {
    var tmp;
    if (!equals(this.c18(), value)) {
      this.d18(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).a1f = function (value) {
    var tmp;
    if (!(this.c18() === value)) {
      this.d18(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).b1f = function (value) {
    var next = this.c18();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.d18(value);
    return true;
  };
  protoOf(ComposerImpl).d18 = function (value) {
    if (this.u14_1) {
      this.n14_1.h1f(value);
    } else {
      if (this.l14_1.u16_1) {
        var groupSlotIndex = this.l14_1.d1f() - 1 | 0;
        if (this.r14_1.g1f()) {
          this.r14_1.f1f(value, this.l14_1.f18(this.l14_1.p16_1), groupSlotIndex);
        } else {
          this.r14_1.e1f(value, groupSlotIndex);
        }
      } else {
        this.r14_1.c1f(this.l14_1.f18(this.l14_1.p16_1), value);
      }
    }
  };
  protoOf(ComposerImpl).i1f = function (value) {
    var tmp;
    if (!(value == null) ? isInterface(value, RememberObserver) : false) {
      if (this.u14_1) {
        this.r14_1.j1f(value);
      }
      this.h13_1.e(value);
      tmp = new RememberObserverHolder(value, rememberObserverAnchor(this));
    } else {
      tmp = value;
    }
    var toStore = tmp;
    this.d18(toStore);
  };
  protoOf(ComposerImpl).k1f = function (value) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.startProvider.<anonymous>' call
    var it = this.l1f();
    var tmp;
    if (equals(it, Companion_getInstance().v18_1)) {
      tmp = null;
    } else {
      tmp = (!(it == null) ? isInterface(it, ValueHolder) : false) ? it : THROW_CCE();
    }
    var oldState = tmp;
    var tmp_0 = value.m1f_1;
    var local = tmp_0 instanceof CompositionLocal ? tmp_0 : THROW_CCE();
    var state = local.v1f(value instanceof ProvidedValue ? value : THROW_CCE(), oldState);
    var change = !equals(state, oldState);
    if (change) {
      this.w1f(state);
    }
    var providers;
    var invalid;
    if (this.u14_1) {
      var tmp_1;
      if (value.t1f_1 || !contains_0(parentScope, local)) {
        tmp_1 = parentScope.x1f(local, state);
      } else {
        tmp_1 = parentScope;
      }
      providers = tmp_1;
      invalid = false;
      this.o14_1 = true;
    } else {
      var tmp_2 = this.l14_1.g18(this.l14_1.n16_1);
      var oldScope = (!(tmp_2 == null) ? isInterface(tmp_2, PersistentCompositionLocalMap) : false) ? tmp_2 : THROW_CCE();
      providers = (!this.w1d() || change) && (value.t1f_1 || !contains_0(parentScope, local)) ? parentScope.x1f(local, state) : oldScope;
      invalid = this.c14_1 || !(oldScope === providers);
    }
    if (invalid && !this.u14_1) {
      recordProviderUpdate(this, providers);
    }
    this.b14_1.m15(asInt(this.a14_1));
    this.a14_1 = invalid;
    this.p14_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_0().y17_1, providers);
  };
  protoOf(ComposerImpl).y1f = function () {
    endGroup(this);
    endGroup(this);
    this.a14_1 = asBool(this.b14_1.w16());
    this.p14_1 = null;
  };
  protoOf(ComposerImpl).z1f = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).i1e = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.i14_1;
    return this.e14_1 === 0 && it.pz() ? it.p1e() : null;
  };
  protoOf(ComposerImpl).e1c = function (scope, instance) {
    var tmp0_elvis_lhs = scope.x12_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.l14_1.g16_1;
    var location = anchor.a1g(slotTable);
    if (this.j14_1 && location >= this.l14_1.n16_1) {
      insertIfMissing(this.w13_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).s1c = function () {
    if (this.w13_1.q()) {
      skipGroup(this);
    } else {
      var reader = this.l14_1;
      var key = reader.i19();
      var dataKey = reader.k19();
      var aux = reader.s18();
      var rGroupIndex = this.p13_1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
      if (dataKey == null)
        if (!(aux == null) && key === 207 && !equals(aux, Companion_getInstance().v18_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash = hashCode(aux);
          var tmp = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_0 = this.v14_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_1 = rotateLeft(this_0, 3) ^ keyHash;
          tmp.v14_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var tmp_0 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_2 = this.v14_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_3 = rotateLeft(this_2, 3) ^ key;
          tmp_0.v14_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash_0 = dataKey.k2_1;
          var tmp_1 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_4 = this.v14_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
          tmp_1.v14_1 = rotateLeft(this_5, 3) ^ 0;
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash_1 = hashCode(dataKey);
          var tmp_2 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_6 = this.v14_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
          tmp_2.v14_1 = rotateLeft(this_7, 3) ^ 0;
        }
      }
      startReaderGroup(this, reader.b1g(), null);
      recomposeToGroupEnd(this);
      reader.o1a();
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      if (dataKey == null)
        if (!(aux == null) && key === 207 && !equals(aux, Companion_getInstance().v18_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey = hashCode(aux);
          var tmp_3 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_8 = this.v14_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_9 = rotateRight(this_8, 3) ^ groupKey;
          tmp_3.v14_1 = rotateRight(this_9, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_4 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_10 = this.v14_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_11 = rotateRight(this_10, 3) ^ key;
          tmp_4.v14_1 = rotateRight(this_11, 3);
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_0 = dataKey.k2_1;
          var tmp_5 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_12 = this.v14_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_13 = rotateRight(this_12, 3) ^ groupKey_0;
          tmp_5.v14_1 = rotateRight(this_13, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_1 = hashCode(dataKey);
          var tmp_6 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_14 = this.v14_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_15 = rotateRight(this_14, 3) ^ groupKey_1;
          tmp_6.v14_1 = rotateRight(this_15, 3);
        }
      }
    }
  };
  protoOf(ComposerImpl).m18 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.o13_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var tmp$ret$0 = 'No nodes can be emitted before calling skipAndEndGroup';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp0_safe_receiver = this.i1e();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c1g();
    }
    if (this.w13_1.q()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).d1g = function (key) {
    this.d1e(key);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).e1g = function () {
    var scope = this.i14_1.pz() ? this.i14_1.w16() : null;
    if (scope != null) {
      scope.g1b(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.f1g(this.f14_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.endRestartGroup.<anonymous>' call
      this.r14_1.g1g(tmp2_safe_receiver, this.k13_1);
    }
    var tmp;
    if (!(scope == null) && !scope.i1g() && (scope.a1a() || this.t13_1)) {
      if (scope.x12_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.u14_1) {
          tmp_1 = this.n14_1.f18(this.n14_1.v17_1);
        } else {
          tmp_1 = this.l14_1.f18(this.l14_1.p16_1);
        }
        tmp_0.x12_1 = tmp_1;
      }
      scope.h1g(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).j1g = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).k1g = function (sourceInformation) {
    if (this.u14_1 && this.g14_1) {
      this.n14_1.l1g(sourceInformation);
    }
  };
  protoOf(ComposerImpl).m1g = function (key, sourceInformation) {
    if (this.u14_1 && this.g14_1) {
      this.n14_1.n1g(key, sourceInformation);
    }
  };
  protoOf(ComposerImpl).o1g = function () {
    if (this.u14_1 && this.g14_1) {
      this.n14_1.p1g();
    }
  };
  protoOf(ComposerImpl).q1g = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.i13_1.q()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent.<anonymous>' call
      var tmp$ret$0 = 'Expected applyChanges() to have been called';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    doCompose(this, invalidationsRequested, content);
  };
  protoOf(ComposerImpl).s1g = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.j14_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var tmp$ret$0 = 'Preparing a composition while composing is not supported';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.j14_1 = true;
    try {
      block();
    }finally {
      this.j14_1 = false;
    }
  };
  protoOf(ComposerImpl).t1g = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.i13_1.q()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var tmp$ret$0 = 'Expected applyChanges() to have been called';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.j() > 0) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.w13_1.q();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.u13_1;
    }
    if (tmp) {
      doCompose(this, invalidationsRequested, null);
      return this.i13_1.pz();
    }
    return false;
  };
  protoOf(ComposerImpl).u1g = function () {
    return this.i1e();
  };
  protoOf(ComposerImpl).l1f = function () {
    return this.x1e();
  };
  protoOf(ComposerImpl).w1f = function (value) {
    return this.i1f(value);
  };
  protoOf(ComposerImpl).v1g = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.w1g(true);
    }
  };
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.v18_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_instance;
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'androidx.compose.runtime.SlotWriter.forAllData' call
    var group = _this__u8e3s4.t17_1;
    var address = access$groupIndexToAddress(_this__u8e3s4, group);
    var start = access$dataIndex(_this__u8e3s4, access$_get_groups__7d4n3r(_this__u8e3s4), address);
    var end = access$dataIndex(_this__u8e3s4, access$_get_groups__7d4n3r(_this__u8e3s4), access$groupIndexToAddress(_this__u8e3s4, _this__u8e3s4.t17_1 + _this__u8e3s4.d1a(_this__u8e3s4.t17_1) | 0));
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.removeCurrentGroup.<anonymous>' call
        var slot_0 = access$_get_slots__7x4q9w(_this__u8e3s4)[access$dataIndexToDataAddress(_this__u8e3s4, slot)];
        if (!(slot_0 == null) ? isInterface(slot_0, ComposeNodeLifecycleCallback) : false) {
          var endRelativeOrder = _this__u8e3s4.x1g() - slot | 0;
          rememberManager.y1g(slot_0, endRelativeOrder, -1, -1);
        }
        if (slot_0 instanceof RememberObserverHolder) {
          var endRelativeSlotIndex = _this__u8e3s4.x1g() - slot | 0;
          // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
          var anchor = slot_0.z1e_1;
          var priority = -1;
          var endRelativeAfter = -1;
          if (!(anchor == null) && anchor.a1h()) {
            priority = _this__u8e3s4.u1b(anchor);
            endRelativeAfter = _this__u8e3s4.x1g() - _this__u8e3s4.z1g(priority) | 0;
          }
          var tmp2 = priority;
          // Inline function 'androidx.compose.runtime.removeCurrentGroup.<anonymous>.<anonymous>' call
          var endRelativeAfter_0 = endRelativeAfter;
          rememberManager.b1h(slot_0.y1e_1, endRelativeSlotIndex, tmp2, endRelativeAfter_0);
        }
        if (slot_0 instanceof RecomposeScopeImpl) {
          slot_0.c1h();
        }
      }
       while (inductionVariable < end);
    _this__u8e3s4.d1h();
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.n1b_1 = content;
    this.o1b_1 = parameter;
    this.p1b_1 = composition;
    this.q1b_1 = slotTable;
    this.r1b_1 = anchor;
    this.s1b_1 = invalidations;
    this.t1b_1 = locals;
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var tmp$ret$0 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$0);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function MovableContentState(slotTable) {
    this.x1b_1 = slotTable;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.k1g(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) && it.e1h();
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f1h(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g1h();
    }
  }
  function MovableContent() {
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.h1h_1 = message;
  }
  protoOf(ComposeRuntimeError).n9 = function () {
    return this.h1h_1;
  };
  function ProvidedValue(compositionLocal, value, explicitNull, mutationPolicy, state, compute, isDynamic) {
    this.m1f_1 = compositionLocal;
    this.n1f_1 = explicitNull;
    this.o1f_1 = mutationPolicy;
    this.p1f_1 = state;
    this.q1f_1 = compute;
    this.r1f_1 = isDynamic;
    this.s1f_1 = value;
    this.t1f_1 = true;
  }
  protoOf(ProvidedValue).c2 = function () {
    var tmp = this.s1f_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ProvidedValue).i1h = function () {
    var tmp;
    if (this.n1f_1) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else if (!(this.p1f_1 == null)) {
      tmp = this.p1f_1.c2();
    } else if (!(this.s1f_1 == null)) {
      tmp = this.s1f_1;
    } else {
      composeRuntimeError('Unexpected form of a provided value');
    }
    return tmp;
  };
  protoOf(ProvidedValue).j1h = function () {
    return (this.n1f_1 || !(this.c2() == null)) && !this.r1f_1;
  };
  function RememberObserverHolder(wrapped, after) {
    this.y1e_1 = wrapped;
    this.z1e_1 = after;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableScatterMultiMap(multiMap(this$0.a19_1.j()));
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var it = this_0.k1h_1;
      var inductionVariable = 0;
      var last = this$0.a19_1.j();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.a19_1.p(index);
          MutableScatterMultiMap__put_impl_1qpnrt(it, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      var tmp$ret$0 = this_0.k1h_1;
      return new MutableScatterMultiMap(tmp$ret$0);
    };
  }
  function Pending(keyInfos, startIndex) {
    this.a19_1 = keyInfos;
    this.b19_1 = startIndex;
    this.c19_1 = 0;
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.b19_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var tmp$ret$0 = 'Invalid start index';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.d19_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    var result = new MutableIntObjectMap();
    var inductionVariable = 0;
    var last = this.a19_1.j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.a19_1.p(index);
        result.jw(keyInfo.p19_1, new GroupInfo(index, runningNodeIndex, keyInfo.q19_1));
        runningNodeIndex = runningNodeIndex + keyInfo.q19_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.e19_1 = result;
    var tmp_1 = this;
    tmp_1.f19_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).l1h = function () {
    var tmp0 = this.f19_1;
    // Inline function 'kotlin.getValue' call
    keyMap$factory();
    return tmp0.c2().k1h_1;
  };
  protoOf(Pending).l19 = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return MutableScatterMultiMap__pop_impl_h6qh61(this.l1h(), joinedKey);
  };
  protoOf(Pending).h19 = function (keyInfo) {
    return this.d19_1.e(keyInfo);
  };
  protoOf(Pending).a1a = function () {
    return this.d19_1;
  };
  protoOf(Pending).u19 = function (from, to) {
    if (from > to) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_0 = this.e19_1;
      var v = this_0.aw_1;
      $l$block: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m = this_0.yv_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    var tmp = v[index];
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
                    var group = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var position = group.m1h_1;
                    if (position === from)
                      group.m1h_1 = to;
                    else if (to <= position ? position < from : false)
                      group.m1h_1 = position + 1 | 0;
                  }
                  slot = slot.y2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    } else if (to > from) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_2 = this.e19_1;
      var v_0 = this_2.aw_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m_0 = this_2.yv_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.a3(this_3.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    var tmp_0 = v_0[index_0];
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
                    var group_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var position_0 = group_0.m1h_1;
                    if (position_0 === from)
                      group_0.m1h_1 = to;
                    else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
                      group_0.m1h_1 = position_0 - 1 | 0;
                  }
                  slot_0 = slot_0.y2(8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
  };
  protoOf(Pending).g1a = function (from, to, count) {
    if (from > to) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_0 = this.e19_1;
      var v = this_0.aw_1;
      $l$block: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m = this_0.yv_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    var tmp = v[index];
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
                    var group = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var position = group.n1h_1;
                    if (from <= position ? position < (from + count | 0) : false)
                      group.n1h_1 = to + (position - from | 0) | 0;
                    else if (to <= position ? position < from : false)
                      group.n1h_1 = position + count | 0;
                  }
                  slot = slot.y2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    } else if (to > from) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_2 = this.e19_1;
      var v_0 = this_2.aw_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m_0 = this_2.yv_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.a3(this_3.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    var tmp_0 = v_0[index_0];
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
                    var group_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var position_0 = group_0.n1h_1;
                    if (from <= position_0 ? position_0 < (from + count | 0) : false)
                      group_0.n1h_1 = to + (position_0 - from | 0) | 0;
                    else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
                      group_0.n1h_1 = position_0 - count | 0;
                  }
                  slot_0 = slot_0.y2(8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
  };
  protoOf(Pending).g19 = function (keyInfo, insertIndex) {
    this.e19_1.jw(keyInfo.p19_1, new GroupInfo(-1, insertIndex, 0));
  };
  protoOf(Pending).c1a = function (group, newCount) {
    var groupInfo = this.e19_1.p(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.n1h_1;
      var difference = newCount - groupInfo.o1h_1 | 0;
      groupInfo.o1h_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
        var this_0 = this.e19_1;
        var v = this_0.aw_1;
        $l$block: {
          // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
          var m = this_0.yv_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index_0 = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                      var tmp = v[index_0];
                      // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
                      var childGroupInfo = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (childGroupInfo.n1h_1 >= index && !equals(childGroupInfo, groupInfo)) {
                        var newIndex = childGroupInfo.n1h_1 + difference | 0;
                        if (newIndex >= 0)
                          childGroupInfo.n1h_1 = newIndex;
                      }
                    }
                    slot = slot.y2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).t19 = function (keyInfo) {
    var tmp0_safe_receiver = this.e19_1.p(keyInfo.p19_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1h_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).s19 = function (keyInfo) {
    var tmp0_safe_receiver = this.e19_1.p(keyInfo.p19_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1h_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).e1a = function (keyInfo) {
    var tmp0_safe_receiver = this.e19_1.p(keyInfo.p19_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o1h_1;
    return tmp1_elvis_lhs == null ? keyInfo.q19_1 : tmp1_elvis_lhs;
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.y17_1 = _GroupKind___init__impl__iwqg06(0);
    this.z17_1 = _GroupKind___init__impl__iwqg06(1);
    this.a18_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.j()) {
      var validation = _this__u8e3s4.p(index);
      if (validation.s12_1 < end) {
        _this__u8e3s4.z1(index);
      } else
        break $l$loop;
    }
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function ReusableRememberObserver() {
  }
  function get_isAfterFirstChild(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.t17_1 > (_this__u8e3s4.v17_1 + 1 | 0);
  }
  function get_isAfterFirstChild_0(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.n16_1 > (_this__u8e3s4.p16_1 + 1 | 0);
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.j()) {
      var firstInvalidation = _this__u8e3s4.p(index);
      if (firstInvalidation.s12_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.z1(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common || b === common)
      return common;
    if (_this__u8e3s4.e18(a) === b)
      return b;
    if (_this__u8e3s4.e18(b) === a)
      return a;
    if (_this__u8e3s4.e18(a) === _this__u8e3s4.e18(b))
      return _this__u8e3s4.e18(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var times = aDistance - bDistance | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.e18(currentA);
      }
       while (inductionVariable < times);
    // Inline function 'kotlin.repeat' call
    var times_0 = bDistance - aDistance | 0;
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.e18(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.e18(currentA);
      currentB = _this__u8e3s4.e18(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
      if (!(instance == null) ? isInterface(instance, DerivedState) : false) {
        tmp_0 = instance;
      } else {
        tmp_0 = null;
      }
      var tmp$ret$1 = tmp_0;
      _this__u8e3s4.y1(tmp, new Invalidation(scope, location, tmp$ret$1));
    } else {
      var invalidation = _this__u8e3s4.p(index);
      if (!(instance == null) ? isInterface(instance, DerivedState) : false) {
        var oldInstance = invalidation.t12_1;
        if (oldInstance == null)
          invalidation.t12_1 = instance;
        else {
          if (oldInstance instanceof MutableScatterSet) {
            if (!(oldInstance instanceof MutableScatterSet))
              THROW_CCE();
            oldInstance.e(instance);
          } else {
            invalidation.t12_1 = mutableScatterSetOf(oldInstance, instance);
          }
        }
      } else {
        invalidation.t12_1 = null;
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = _this__u8e3s4.h15();
    var tmp;
    try {
      var index = _this__u8e3s4.u1b(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.v16();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.j()) {
      var invalidation = _this__u8e3s4.p(index);
      if (invalidation.s12_1 < end) {
        result.e(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function composeImmediateRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.m1h_1 = slotIndex;
    this.n1h_1 = nodeIndex;
    this.o1h_1 = nodeCount;
  }
  function _MutableScatterMultiMap___init__impl__s8ohqe(map) {
    return map;
  }
  function _MutableScatterMultiMap___get_map__impl__38gkgh($this) {
    return $this;
  }
  function MutableScatterMultiMap__put_impl_1qpnrt($this, key, value) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = _MutableScatterMultiMap___get_map__impl__38gkgh($this);
    var index = this_0.ey(key);
    var inserting = index < 0;
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.ux_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    // Inline function 'androidx.compose.runtime.MutableScatterMultiMap.put.<anonymous>' call
    var previous = tmp;
    var tmp_1;
    if (previous == null) {
      tmp_1 = value;
    } else {
      if (!(previous == null) ? isInterface(previous, KtMutableList) : false) {
        var list = (!(previous == null) ? isInterface(previous, KtMutableList) : false) ? previous : THROW_CCE();
        list.e(value);
        tmp_1 = list;
      } else {
        tmp_1 = mutableListOf([previous, value]);
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.tx_1[insertionIndex] = key;
      this_0.ux_1[insertionIndex] = computedValue;
    } else {
      this_0.ux_1[index] = computedValue;
    }
  }
  function MutableScatterMultiMap__pop_impl_h6qh61($this, key) {
    var tmp0_safe_receiver = _MutableScatterMultiMap___get_map__impl__38gkgh($this).f2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.MutableScatterMultiMap.pop.<anonymous>' call
      var tmp_0;
      if (isInterface(tmp0_safe_receiver, KtMutableList)) {
        var list = isInterface(tmp0_safe_receiver, KtMutableList) ? tmp0_safe_receiver : THROW_CCE();
        var result = list.z1(0);
        if (list.q()) {
          _MutableScatterMultiMap___get_map__impl__38gkgh($this).w4(key);
        }
        tmp_0 = result;
      } else {
        _MutableScatterMultiMap___get_map__impl__38gkgh($this).w4(key);
        tmp_0 = tmp0_safe_receiver;
      }
      var tmp_1 = tmp_0;
      tmp = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
    }
    return tmp;
  }
  function MutableScatterMultiMap__toString_impl_ksvnwa($this) {
    return 'MutableScatterMultiMap(map=' + $this.toString() + ')';
  }
  function MutableScatterMultiMap__hashCode_impl_sh2h9z($this) {
    return $this.hashCode();
  }
  function MutableScatterMultiMap__equals_impl_j6710t($this, other) {
    if (!(other instanceof MutableScatterMultiMap))
      return false;
    var tmp0_other_with_cast = other instanceof MutableScatterMultiMap ? other.k1h_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function MutableScatterMultiMap(map) {
    this.k1h_1 = map;
  }
  protoOf(MutableScatterMultiMap).toString = function () {
    return MutableScatterMultiMap__toString_impl_ksvnwa(this.k1h_1);
  };
  protoOf(MutableScatterMultiMap).hashCode = function () {
    return MutableScatterMultiMap__hashCode_impl_sh2h9z(this.k1h_1);
  };
  protoOf(MutableScatterMultiMap).equals = function (other) {
    return MutableScatterMultiMap__equals_impl_j6710t(this.k1h_1, other);
  };
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.o19_1 == null) ? new JoinedKey(_this__u8e3s4.n19_1, _this__u8e3s4.o19_1) : _this__u8e3s4.n19_1;
  }
  function multiMap(initialCapacity) {
    _init_properties_Composer_kt__bmp4g0();
    return _MutableScatterMultiMap___init__impl__s8ohqe(new MutableScatterMap(initialCapacity));
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    var it = findLocation(_this__u8e3s4, location);
    return it < 0 ? -(it + 1 | 0) | 0 : it;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.j() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.p(mid);
      var cmp = compareTo(midVal.s12_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 && !(current === root)) {
      current = _this__u8e3s4.e18(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.m1g(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.o1g();
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this);
    if ($this$with.m1e() || !equals($this$with.l1f(), value)) {
      $this$with.w1f(value);
      _Updater___get_composer__impl__9ty7av($this).u1e(value, block);
    }
    return Unit_instance;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.p1h_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).q1h = function (a, b) {
    return this.p1h_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.q1h(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).f3 = function () {
    return this.p1h_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.f3(), other.f3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.f3());
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.z1a(group)) {
      result.e($reader.u1c(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.d1a(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.d1a(current) | 0;
      }
    }
  }
  function InvalidationLocationAscending$lambda(i1, i2) {
    _init_properties_Composer_kt__bmp4g0();
    return compareTo(i1.s12_1, i2.s12_1);
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return new MutableScatterMultiMap(receiver.l1h());
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
      var tmp = InvalidationLocationAscending$lambda;
      InvalidationLocationAscending = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  var CompositionImplServiceKey;
  function recordLeaving($this, instance, endRelativeOrder, priority, endRelativeAfter) {
    processPendingLeaving($this, endRelativeOrder);
    if (0 <= endRelativeAfter ? endRelativeAfter < endRelativeOrder : false) {
      $this.w1h_1.e(instance);
      $this.x1h_1.vv(priority);
      $this.y1h_1.vv(endRelativeAfter);
    } else {
      $this.t1h_1.e(instance);
    }
  }
  function processPendingLeaving($this, endRelativeOrder) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.w1h_1.q()) {
      var index = 0;
      var toAdd = null;
      var toAddAfter = null;
      var toAddPriority = null;
      while (index < $this.y1h_1.j()) {
        if (endRelativeOrder <= $this.y1h_1.p(index)) {
          var instance = $this.w1h_1.z1(index);
          var endRelativeAfter = $this.y1h_1.z1(index);
          var priority = $this.x1h_1.z1(index);
          if (toAdd == null) {
            toAdd = mutableListOf([instance]);
            // Inline function 'kotlin.also' call
            var this_0 = new MutableIntList();
            // Inline function 'androidx.compose.runtime.RememberEventDispatcher.processPendingLeaving.<anonymous>' call
            this_0.vv(endRelativeAfter);
            toAddAfter = this_0;
            // Inline function 'kotlin.also' call
            var this_1 = new MutableIntList();
            // Inline function 'androidx.compose.runtime.RememberEventDispatcher.processPendingLeaving.<anonymous>' call
            this_1.vv(priority);
            toAddPriority = this_1;
          } else {
            if (!(toAddPriority instanceof MutableIntList))
              THROW_CCE();
            if (!(toAddAfter instanceof MutableIntList))
              THROW_CCE();
            toAdd.e(instance);
            toAddAfter.vv(endRelativeAfter);
            toAddPriority.vv(priority);
          }
        } else {
          index = index + 1 | 0;
        }
      }
      if (!(toAdd == null)) {
        if (!(toAddPriority instanceof MutableIntList))
          THROW_CCE();
        if (!(toAddAfter instanceof MutableIntList))
          THROW_CCE();
        var inductionVariable = 0;
        var last = toAdd.j() - 1 | 0;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var inductionVariable_0 = i + 1 | 0;
            var last_0 = toAdd.j();
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var iAfter = toAddAfter.p(i);
                var jAfter = toAddAfter.p(j);
                if (iAfter < jAfter || (jAfter === iAfter && toAddPriority.p(i) < toAddPriority.p(j))) {
                  swap(toAdd, i, j);
                  swap_0(toAddPriority, i, j);
                  swap_0(toAddAfter, i, j);
                }
              }
               while (inductionVariable_0 < last_0);
          }
           while (inductionVariable < last);
        $this.t1h_1.n(toAdd);
      }
    }
  }
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.r1i_1.y1d();
  }
  function composeInitial($this, content) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.u1i_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.composeInitial.<anonymous>' call
      var tmp$ret$0 = 'The composition is disposed';
      throwIllegalStateException(tmp$ret$0);
    }
    $this.v1i_1 = content;
    $this.z1h_1.w1i($this, $this.v1i_1);
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.b1i_1.y1i(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.b1i_1));
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.b1i_1.y1i(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.b1i_1));
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked($this, value, forgetConditionalScopes) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.f1i_1.m1c_1.f2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.lz_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.kz_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      var tmp = k[index];
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (!$this.l1i_1.a1j(value, scope) && !scope.b1j(value).equals(InvalidationResult_IGNORED_getInstance())) {
                        if (scope.z1i() && !forgetConditionalScopes) {
                          $this.h1i_1.e(scope);
                        } else {
                          $this.g1i_1.e(scope);
                        }
                      }
                    }
                    slot = slot.y2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (!$this.l1i_1.a1j(value, scope_0) && !scope_0.b1j(value).equals(InvalidationResult_IGNORED_getInstance())) {
          if (scope_0.z1i() && !forgetConditionalScopes) {
            $this.h1i_1.e(scope_0);
          } else {
            $this.g1i_1.e(scope_0);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    var tmp;
    if (values instanceof ScatterSetWrapper) {
      var this_0 = values.c1j_1;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.lz_1;
      var tmp$ret$5;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.kz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp_0 = k[index];
                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                    var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (value instanceof RecomposeScopeImpl) {
                      value.b1j(null);
                    } else {
                      addPendingInvalidationsLocked($this, value, forgetConditionalScopes);
                      // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
                      var value_0 = $this.i1i_1.m1c_1.f2(value);
                      if (value_0 != null) {
                        if (value_0 instanceof MutableScatterSet) {
                          // Inline function 'androidx.collection.ScatterSet.forEach' call
                          var this_2 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
                          // Inline function 'kotlin.contracts.contract' call
                          var k_0 = this_2.lz_1;
                          $l$block: {
                            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                            // Inline function 'kotlin.contracts.contract' call
                            var m_0 = this_2.kz_1;
                            var lastIndex_0 = m_0.length - 2 | 0;
                            var inductionVariable_1 = 0;
                            if (inductionVariable_1 <= lastIndex_0)
                              do {
                                var i_0 = inductionVariable_1;
                                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                var slot_0 = m_0[i_0];
                                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                var this_3 = slot_0;
                                if (!this_3.a3(this_3.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                  var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                  var inductionVariable_2 = 0;
                                  if (inductionVariable_2 < bitCount_0)
                                    do {
                                      var j_0 = inductionVariable_2;
                                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                      // Inline function 'androidx.collection.isFull' call
                                      if (slot_0.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                        var index_0 = (i_0 << 3) + j_0 | 0;
                                        // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                                        var tmp_1 = k_0[index_0];
                                        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                                        var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                                        addPendingInvalidationsLocked($this, it, forgetConditionalScopes);
                                      }
                                      slot_0 = slot_0.y2(8);
                                    }
                                     while (inductionVariable_2 < bitCount_0);
                                  if (!(bitCount_0 === 8)) {
                                    break $l$block;
                                  }
                                }
                              }
                               while (!(i_0 === lastIndex_0));
                          }
                        } else {
                          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                          var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
                          addPendingInvalidationsLocked($this, it_0, forgetConditionalScopes);
                        }
                      }
                    }
                  }
                  slot = slot.y2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                tmp$ret$5 = Unit_instance;
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = tmp$ret$5;
    } else {
      var _iterator__ex2g4s = values.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.b1j(null);
        } else {
          addPendingInvalidationsLocked($this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
          var value_1 = $this.i1i_1.m1c_1.f2(element);
          if (value_1 != null) {
            if (value_1 instanceof MutableScatterSet) {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_4 = value_1 instanceof MutableScatterSet ? value_1 : THROW_CCE();
              // Inline function 'kotlin.contracts.contract' call
              var k_1 = this_4.lz_1;
              $l$block_1: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_1 = this_4.kz_1;
                var lastIndex_1 = m_1.length - 2 | 0;
                var inductionVariable_3 = 0;
                if (inductionVariable_3 <= lastIndex_1)
                  do {
                    var i_1 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var slot_1 = m_1[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_5 = slot_1;
                    if (!this_5.a3(this_5.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_4 = 0;
                      if (inductionVariable_4 < bitCount_1)
                        do {
                          var j_1 = inductionVariable_4;
                          inductionVariable_4 = inductionVariable_4 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_1.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                            var index_1 = (i_1 << 3) + j_1 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            var tmp_2 = k_1[index_1];
                            // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                            var it_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                            addPendingInvalidationsLocked($this, it_1, forgetConditionalScopes);
                          }
                          slot_1 = slot_1.y2(8);
                        }
                         while (inductionVariable_4 < bitCount_1);
                      if (!(bitCount_1 === 8)) {
                        break $l$block_1;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex_1));
              }
            } else {
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
              var it_2 = !(value_1 == null) ? value_1 : THROW_CCE();
              addPendingInvalidationsLocked($this, it_2, forgetConditionalScopes);
            }
          }
        }
      }
      tmp = Unit_instance;
    }
    var conditionallyInvalidatedScopes = $this.h1i_1;
    var invalidatedScopes = $this.g1i_1;
    if (forgetConditionalScopes && conditionallyInvalidatedScopes.pz()) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_6 = $this.f1i_1.m1c_1;
      $l$block_3: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_2 = this_6.sx_1;
        var lastIndex_2 = m_2.length - 2 | 0;
        var inductionVariable_5 = 0;
        if (inductionVariable_5 <= lastIndex_2)
          do {
            var i_2 = inductionVariable_5;
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            var slot_2 = m_2[i_2];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_7 = slot_2;
            if (!this_7.a3(this_7.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_2 = 8 - (~(i_2 - lastIndex_2 | 0) >>> 31 | 0) | 0;
              var inductionVariable_6 = 0;
              if (inductionVariable_6 < bitCount_2)
                do {
                  var j_2 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_2.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_2 = (i_2 << 3) + j_2 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    var tmp_3 = this_6.tx_1[index_2];
                    (tmp_3 == null ? true : !(tmp_3 == null)) || THROW_CCE();
                    var tmp_4 = this_6.ux_1[index_2];
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var value_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
                    var tmp_5;
                    if (value_2 instanceof MutableScatterSet) {
                      var set = value_2 instanceof MutableScatterSet ? value_2 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements = set.lz_1;
                      $l$block_2: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_3 = set.kz_1;
                        var lastIndex_3 = m_3.length - 2 | 0;
                        var inductionVariable_7 = 0;
                        if (inductionVariable_7 <= lastIndex_3)
                          do {
                            var i_3 = inductionVariable_7;
                            inductionVariable_7 = inductionVariable_7 + 1 | 0;
                            var slot_3 = m_3[i_3];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_8 = slot_3;
                            if (!this_8.a3(this_8.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_3 = 8 - (~(i_3 - lastIndex_3 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_8 = 0;
                              if (inductionVariable_8 < bitCount_3)
                                do {
                                  var j_3 = inductionVariable_8;
                                  inductionVariable_8 = inductionVariable_8 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_3.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                    var index_3 = (i_3 << 3) + j_3 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    var tmp_6 = elements[index_3];
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var scope = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
                                    if (conditionallyInvalidatedScopes.o(scope) || invalidatedScopes.o(scope)) {
                                      set.z10(index_3);
                                    }
                                  }
                                  slot_3 = slot_3.y2(8);
                                }
                                 while (inductionVariable_8 < bitCount_3);
                              if (!(bitCount_3 === 8)) {
                                break $l$block_2;
                              }
                            }
                          }
                           while (!(i_3 === lastIndex_3));
                      }
                      tmp_5 = set.q();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_0 = !(value_2 == null) ? value_2 : THROW_CCE();
                      tmp_5 = conditionallyInvalidatedScopes.o(scope_0) || invalidatedScopes.o(scope_0);
                    }
                    if (tmp_5) {
                      this_6.lw(index_2);
                    }
                  }
                  slot_2 = slot_2.y2(8);
                }
                 while (inductionVariable_6 < bitCount_2);
              if (!(bitCount_2 === 8)) {
                break $l$block_3;
              }
            }
          }
           while (!(i_2 === lastIndex_2));
      }
      conditionallyInvalidatedScopes.w1();
      cleanUpDerivedStateObservations($this);
    } else if (invalidatedScopes.pz()) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_9 = $this.f1i_1.m1c_1;
      $l$block_5: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_4 = this_9.sx_1;
        var lastIndex_4 = m_4.length - 2 | 0;
        var inductionVariable_9 = 0;
        if (inductionVariable_9 <= lastIndex_4)
          do {
            var i_4 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            var slot_4 = m_4[i_4];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_10 = slot_4;
            if (!this_10.a3(this_10.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_4 = 8 - (~(i_4 - lastIndex_4 | 0) >>> 31 | 0) | 0;
              var inductionVariable_10 = 0;
              if (inductionVariable_10 < bitCount_4)
                do {
                  var j_4 = inductionVariable_10;
                  inductionVariable_10 = inductionVariable_10 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_4.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_4 = (i_4 << 3) + j_4 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    var tmp_7 = this_9.tx_1[index_4];
                    (tmp_7 == null ? true : !(tmp_7 == null)) || THROW_CCE();
                    var tmp_8 = this_9.ux_1[index_4];
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var value_3 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
                    var tmp_9;
                    if (value_3 instanceof MutableScatterSet) {
                      var set_0 = value_3 instanceof MutableScatterSet ? value_3 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements_0 = set_0.lz_1;
                      $l$block_4: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_5 = set_0.kz_1;
                        var lastIndex_5 = m_5.length - 2 | 0;
                        var inductionVariable_11 = 0;
                        if (inductionVariable_11 <= lastIndex_5)
                          do {
                            var i_5 = inductionVariable_11;
                            inductionVariable_11 = inductionVariable_11 + 1 | 0;
                            var slot_5 = m_5[i_5];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_11 = slot_5;
                            if (!this_11.a3(this_11.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_5 = 8 - (~(i_5 - lastIndex_5 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_12 = 0;
                              if (inductionVariable_12 < bitCount_5)
                                do {
                                  var j_5 = inductionVariable_12;
                                  inductionVariable_12 = inductionVariable_12 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_5.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                    var index_5 = (i_5 << 3) + j_5 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    var tmp_10 = elements_0[index_5];
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var scope_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
                                    if (invalidatedScopes.o(scope_1)) {
                                      set_0.z10(index_5);
                                    }
                                  }
                                  slot_5 = slot_5.y2(8);
                                }
                                 while (inductionVariable_12 < bitCount_5);
                              if (!(bitCount_5 === 8)) {
                                break $l$block_4;
                              }
                            }
                          }
                           while (!(i_5 === lastIndex_5));
                      }
                      tmp_9 = set_0.q();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_2 = !(value_3 == null) ? value_3 : THROW_CCE();
                      tmp_9 = invalidatedScopes.o(scope_2);
                    }
                    if (tmp_9) {
                      this_9.lw(index_4);
                    }
                  }
                  slot_4 = slot_4.y2(8);
                }
                 while (inductionVariable_10 < bitCount_4);
              if (!(bitCount_4 === 8)) {
                break $l$block_5;
              }
            }
          }
           while (!(i_4 === lastIndex_4));
      }
      cleanUpDerivedStateObservations($this);
      invalidatedScopes.w1();
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = $this.i1i_1.m1c_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.sx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  var tmp = this_0.tx_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.ux_1[index];
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.lz_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.kz_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.a3(this_2.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                                  var derivedState = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                                  if (!$this.f1i_1.d1j(derivedState)) {
                                    set.z10(index_0);
                                  }
                                }
                                slot_0 = slot_0.y2(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.q();
                  } else {
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    var derivedState_0 = !(value == null) ? value : THROW_CCE();
                    tmp_1 = !$this.f1i_1.d1j(derivedState_0);
                  }
                  if (tmp_1) {
                    this_0.lw(index);
                  }
                }
                slot = slot.y2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
    if ($this.h1i_1.pz()) {
      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
      var this_3 = $this.h1i_1;
      var elements_0 = this_3.lz_1;
      $l$block_1: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m_1 = this_3.kz_1;
        var lastIndex_1 = m_1.length - 2 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 <= lastIndex_1)
          do {
            var i_1 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var slot_1 = m_1[i_1];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_4 = slot_1;
            if (!this_4.a3(this_4.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
              var inductionVariable_4 = 0;
              if (inductionVariable_4 < bitCount_1)
                do {
                  var j_1 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_1.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_1 = (i_1 << 3) + j_1 | 0;
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                    var tmp_3 = elements_0[index_1];
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).z1i()) {
                      this_3.z10(index_1);
                    }
                  }
                  slot_1 = slot_1.y2(8);
                }
                 while (inductionVariable_4 < bitCount_1);
              if (!(bitCount_1 === 8)) {
                break $l$block_1;
              }
            }
          }
           while (!(i_1 === lastIndex_1));
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.f1i_1.m1c_1.f2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.lz_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.kz_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      var tmp = k[index];
                      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (scope.b1j(value).equals(InvalidationResult_IMMINENT_getInstance())) {
                        $this.l1i_1.e1j(value, scope);
                      }
                    }
                    slot = slot.y2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (scope_0.b1j(value).equals(InvalidationResult_IMMINENT_getInstance())) {
          $this.l1i_1.e1j(value, scope_0);
        }
      }
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.d1i_1);
    try {
      if (changes.q())
        return Unit_instance;
      var tmp0 = 'Compose:applyChanges';
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_instance.g1c(tmp0);
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>' call
          $this.a1i_1.k11();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.e1i_1.l18();
          var normalClose = false;
          var tmp;
          try {
            changes.f1j($this.a1i_1, writer, manager);
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
            normalClose = true;
            tmp = Unit_instance;
          }finally {
            writer.q18(normalClose);
          }
          $this.a1i_1.l11();
          break $l$block;
        }finally {
          Trace_instance.t1c(token);
        }
      }
      manager.g1j();
      manager.h1j();
      if ($this.n1i_1) {
        var tmp1 = 'Compose:unobserve';
        $l$block_2: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token_0 = Trace_instance.g1c(tmp1);
          try {
            // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>' call
            $this.n1i_1 = false;
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
            // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
            var this_0 = $this.f1i_1.m1c_1;
            $l$block_1: {
              // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
              var m = this_0.sx_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                          var tmp_0 = this_0.tx_1[index];
                          (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
                          var tmp_1 = this_0.ux_1[index];
                          // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                          var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (value instanceof MutableScatterSet) {
                            var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                            // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                            var elements = set.lz_1;
                            $l$block_0: {
                              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                              // Inline function 'kotlin.contracts.contract' call
                              var m_0 = set.kz_1;
                              var lastIndex_0 = m_0.length - 2 | 0;
                              var inductionVariable_1 = 0;
                              if (inductionVariable_1 <= lastIndex_0)
                                do {
                                  var i_0 = inductionVariable_1;
                                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                  var slot_0 = m_0[i_0];
                                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                  var this_2 = slot_0;
                                  if (!this_2.a3(this_2.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                    var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                    var inductionVariable_2 = 0;
                                    if (inductionVariable_2 < bitCount_0)
                                      do {
                                        var j_0 = inductionVariable_2;
                                        inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                        // Inline function 'androidx.collection.isFull' call
                                        if (slot_0.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                                          var index_0 = (i_0 << 3) + j_0 | 0;
                                          // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                          var tmp_3 = elements[index_0];
                                          // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                                          if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).a1h()) {
                                            set.z10(index_0);
                                          }
                                        }
                                        slot_0 = slot_0.y2(8);
                                      }
                                       while (inductionVariable_2 < bitCount_0);
                                    if (!(bitCount_0 === 8)) {
                                      break $l$block_0;
                                    }
                                  }
                                }
                                 while (!(i_0 === lastIndex_0));
                            }
                            tmp_2 = set.q();
                          } else {
                            // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                            tmp_2 = !(!(value == null) ? value : THROW_CCE()).a1h();
                          }
                          if (tmp_2) {
                            this_0.lw(index);
                          }
                        }
                        slot = slot.y2(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_1;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            cleanUpDerivedStateObservations($this);
            break $l$block_2;
          }finally {
            Trace_instance.t1c(token_0);
          }
        }
      }
    }finally {
      if ($this.k1i_1.q()) {
        manager.i1j();
      }
    }
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.j1j() && $this.r1i_1.e1c(scope, instance);
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.c1i_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.o1i_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.e1i_1.k1j($this.p1i_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      var observer_0 = observer($this);
      if (instance == null) {
        $this.m1i_1.l1j(scope, ScopeInvalidated_instance);
      } else {
        var tmp_1;
        if (observer_0 == null) {
          tmp_1 = !(!(instance == null) ? isInterface(instance, DerivedState) : false);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          $this.m1i_1.l1j(scope, ScopeInvalidated_instance);
        } else {
          var tmp2 = $this.m1i_1;
          var tmp$ret$5;
          $l$block_1: {
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf' call
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
            var value = tmp2.m1c_1.f2(scope);
            if (value != null) {
              if (value instanceof MutableScatterSet) {
                // Inline function 'androidx.collection.ScatterSet.forEach' call
                var this_0 = value instanceof MutableScatterSet ? value : THROW_CCE();
                // Inline function 'kotlin.contracts.contract' call
                var k = this_0.lz_1;
                $l$block_0: {
                  // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                  // Inline function 'kotlin.contracts.contract' call
                  var m = this_0.kz_1;
                  var lastIndex = m.length - 2 | 0;
                  var inductionVariable = 0;
                  if (inductionVariable <= lastIndex)
                    do {
                      var i = inductionVariable;
                      inductionVariable = inductionVariable + 1 | 0;
                      var slot = m[i];
                      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                      var this_1 = slot;
                      if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                        var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                        var inductionVariable_0 = 0;
                        if (inductionVariable_0 < bitCount)
                          do {
                            var j = inductionVariable_0;
                            inductionVariable_0 = inductionVariable_0 + 1 | 0;
                            // Inline function 'androidx.collection.isFull' call
                            if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                              var index = (i << 3) + j | 0;
                              // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                              var tmp_2 = k[index];
                              // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf.<anonymous>' call
                              // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
                              if (((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()) === ScopeInvalidated_instance) {
                                tmp$ret$5 = true;
                                break $l$block_1;
                              }
                            }
                            slot = slot.y2(8);
                          }
                           while (inductionVariable_0 < bitCount);
                        if (!(bitCount === 8)) {
                          break $l$block_0;
                        }
                      }
                    }
                     while (!(i === lastIndex));
                }
              } else {
                // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
                if ((!(value == null) ? value : THROW_CCE()) === ScopeInvalidated_instance) {
                  tmp$ret$5 = true;
                  break $l$block_1;
                }
              }
            }
            tmp$ret$5 = false;
          }
          if (!tmp$ret$5) {
            $this.m1i_1.e1j(scope, instance);
          }
        }
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.z1h_1.m1j($this);
    return $this.j1j() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.m1i_1;
    $this.m1i_1 = new ScopeMap();
    return invalidations;
  }
  function observer($this) {
    var holder = $this.q1i_1;
    var tmp;
    if (holder.p1j_1) {
      tmp = holder.o1j_1;
    } else {
      var parentHolder = $this.z1h_1.n1j();
      var parentObserver = parentHolder == null ? null : parentHolder.o1j_1;
      if (!equals(parentObserver, holder.o1j_1)) {
        holder.o1j_1 = parentObserver;
      }
      tmp = parentObserver;
    }
    return tmp;
  }
  function RememberEventDispatcher(abandoning) {
    this.r1h_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.s1h_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.t1h_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.u1h_1 = ArrayList_init_$Create$();
    this.v1h_1 = null;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.w1h_1 = ArrayList_init_$Create$();
    this.x1h_1 = new MutableIntList();
    this.y1h_1 = new MutableIntList();
  }
  protoOf(RememberEventDispatcher).q1j = function (instance) {
    this.s1h_1.e(instance);
  };
  protoOf(RememberEventDispatcher).b1h = function (instance, endRelativeOrder, priority, endRelativeAfter) {
    recordLeaving(this, instance, endRelativeOrder, priority, endRelativeAfter);
  };
  protoOf(RememberEventDispatcher).y1g = function (instance, endRelativeOrder, priority, endRelativeAfter) {
    var tmp0_elvis_lhs = this.v1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf_0();
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.v1h_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var releasing = tmp;
    releasing.e11(instance);
    recordLeaving(this, instance, endRelativeOrder, priority, endRelativeAfter);
  };
  protoOf(RememberEventDispatcher).g1j = function () {
    processPendingLeaving(this, -2147483648);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.t1h_1.q()) {
      var tmp1 = 'Compose:onForgotten';
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_instance.g1c(tmp1);
        try {
          // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>' call
          var releasing = this.v1h_1;
          var inductionVariable = this.t1h_1.j() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.t1h_1.p(i);
              if (isInterface(instance, RememberObserver)) {
                this.r1h_1.t1(instance);
                instance.r1j();
              }
              if (isInterface(instance, ComposeNodeLifecycleCallback)) {
                if (!(releasing == null) && releasing.o(instance)) {
                  instance.q12();
                } else {
                  instance.p12();
                }
              }
            }
             while (0 <= inductionVariable);
          break $l$block;
        }finally {
          Trace_instance.t1c(token);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.s1h_1.q()) {
      var tmp3 = 'Compose:onRemembered';
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_instance.g1c(tmp3);
        try {
          // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>' call
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.s1h_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = this_0.j() - 1 | 0;
          if (inductionVariable_0 <= last)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = this_0.p(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.r1h_1.t1(item);
              item.s1j();
            }
             while (inductionVariable_0 <= last);
          break $l$block_0;
        }finally {
          Trace_instance.t1c(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).h1j = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.u1h_1.q()) {
      var tmp1 = 'Compose:sideeffects';
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_instance.g1c(tmp1);
        try {
          // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>' call
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.u1h_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.j() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.p(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.u1h_1.w1();
          break $l$block;
        }finally {
          Trace_instance.t1c(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).i1j = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.r1h_1.q()) {
      var tmp1 = 'Compose:abandons';
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_instance.g1c(tmp1);
        try {
          // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchAbandons.<anonymous>' call
          var iterator = this.r1h_1.g();
          while (iterator.h()) {
            var instance = iterator.i();
            iterator.u3();
            instance.t1j();
          }
          break $l$block;
        }finally {
          Trace_instance.t1c(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.z1h_1 = parent;
    this.a1i_1 = applier;
    this.b1i_1 = new AtomicReference(null);
    this.c1i_1 = new Object();
    this.d1i_1 = (new MutableScatterSet()).i11();
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SlotTable();
    // Inline function 'androidx.compose.runtime.CompositionImpl.slotTable.<anonymous>' call
    if (this.z1h_1.p18()) {
      this_0.o18();
    }
    if (this.z1h_1.p15()) {
      this_0.n18();
    }
    tmp.e1i_1 = this_0;
    this.f1i_1 = new ScopeMap();
    this.g1i_1 = new MutableScatterSet();
    this.h1i_1 = new MutableScatterSet();
    this.i1i_1 = new ScopeMap();
    this.j1i_1 = new ChangeList();
    this.k1i_1 = new ChangeList();
    this.l1i_1 = new ScopeMap();
    this.m1i_1 = new ScopeMap();
    this.n1i_1 = false;
    this.o1i_1 = null;
    this.p1i_1 = 0;
    this.q1i_1 = new CompositionObserverHolder();
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_1 = new ComposerImpl(this.a1i_1, this.z1h_1, this.e1i_1, this.d1i_1, this.j1i_1, this.k1i_1, this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.z1h_1.u1j(this_1);
    tmp_0.r1i_1 = this_1;
    this.s1i_1 = recomposeContext;
    var tmp_1 = this;
    var tmp_2 = this.z1h_1;
    tmp_1.t1i_1 = tmp_2 instanceof Recomposer;
    this.u1i_1 = false;
    this.v1i_1 = ComposableSingletons$CompositionKt_getInstance().v1j_1;
  }
  protoOf(CompositionImpl).j1j = function () {
    return this.r1i_1.j14_1;
  };
  protoOf(CompositionImpl).x1j = function () {
    return this.u1i_1;
  };
  protoOf(CompositionImpl).y1j = function (content) {
    composeInitial(this, content);
  };
  protoOf(CompositionImpl).z1j = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        this.c1i_1;
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>' call
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (!(observer_0 == null)) {
            var tmp_2 = invalidations.a1k();
            observer_0.b1k(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          this.r1i_1.q1g(invalidations, content);
          var tmp_3;
          if (observer_0 == null) {
            tmp_3 = null;
          } else {
            observer_0.c1k(this);
            tmp_3 = Unit_instance;
          }
          tmp_1 = tmp_3;
        } catch ($p) {
          var tmp_4;
          if ($p instanceof Exception) {
            var e = $p;
            this.m1i_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_5;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_5 = !this.d1i_1.q();
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
          (new RememberEventDispatcher(this.d1i_1)).i1j();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_6;
      if ($p instanceof Exception) {
        var e_0 = $p;
        this.d1k();
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).e1k = function (values) {
    $l$loop: while (true) {
      var old = this.b1i_1.co();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, KtSet) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_0((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var message = 'corrupt pendingModifications: ' + toString(this.b1i_1);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.b1i_1.f1k(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          this.c1i_1;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recordModificationsOf.<anonymous>' call
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).g1k = function (values) {
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    var tmp;
    if (values instanceof ScatterSetWrapper) {
      var this_0 = values.c1j_1;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.lz_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.kz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp_0 = k[index];
                    // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
                    var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (this.f1i_1.d1j(value) || this.i1i_1.d1j(value))
                      return true;
                  }
                  slot = slot.y2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                tmp$ret$2 = Unit_instance;
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = tmp$ret$2;
    } else {
      var _iterator__ex2g4s = values.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
        if (this.f1i_1.d1j(element) || this.i1i_1.d1j(element))
          return true;
      }
      tmp = Unit_instance;
    }
    return false;
  };
  protoOf(CompositionImpl).h1k = function (block) {
    return this.r1i_1.s1g(block);
  };
  protoOf(CompositionImpl).i1k = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.r1i_1.i1e();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recordReadOf.<anonymous>' call
        tmp0_safe_receiver.w1g(true);
        var alreadyRead = tmp0_safe_receiver.j1k(value);
        if (!alreadyRead) {
          if (value instanceof StateObjectImpl) {
            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
            var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
            value.l1k(tmp$ret$0);
          }
          this.f1i_1.e1j(value, tmp0_safe_receiver);
          if (isInterface(value, DerivedState)) {
            var record = value.m1k();
            this.i1i_1.n1k(value);
            // Inline function 'androidx.collection.ObjectIntMap.forEachKey' call
            var this_0 = record.o1k();
            var k = this_0.yw_1;
            $l$block: {
              // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
              var m = this_0.xw_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ObjectIntMap.forEachKey.<anonymous>' call
                          var tmp = k[index];
                          // Inline function 'androidx.compose.runtime.CompositionImpl.recordReadOf.<anonymous>.<anonymous>' call
                          var dependency = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                          if (dependency instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$3 = _ReaderKind___init__impl__jqeebu(1);
                            dependency.l1k(tmp$ret$3);
                          }
                          this.i1i_1.e1j(dependency, value);
                        }
                        slot = slot.y2(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp0_safe_receiver.q1k(value, record.p1k());
          }
        }
      }
    }
  };
  protoOf(CompositionImpl).r1k = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.c1i_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>' call
    invalidateScopeOfLocked(this, value);
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = this.i1i_1.m1c_1.f2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.lz_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.kz_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      var tmp = k[index];
                      // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
                      var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      invalidateScopeOfLocked(this, it);
                    }
                    slot = slot.y2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
        var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        invalidateScopeOfLocked(this, it_0);
      }
    }
    return Unit_instance;
  };
  protoOf(CompositionImpl).s1k = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.c1i_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (observer_0 == null)
            null;
          else {
            var tmp_2 = invalidations.a1k();
            observer_0.b1k(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          // Inline function 'kotlin.also' call
          var this_0 = this.r1i_1.t1g(invalidations);
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          if (observer_0 == null)
            null;
          else {
            observer_0.c1k(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Exception) {
            var e = $p;
            this.m1i_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_4;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_4 = !this.d1i_1.q();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          (new RememberEventDispatcher(this.d1i_1)).i1j();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof Exception) {
        var e_0 = $p;
        this.d1k();
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).t1k = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.p(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.ja_1.p1b_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        this.r1i_1.j1g(references);
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.d1i_1.q();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.d1i_1)).i1j();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.d1k();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).u1k = function (state) {
    var manager = new RememberEventDispatcher(this.d1i_1);
    var slotTable = state.x1b_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.l18();
    var normalClose = false;
    var tmp;
    try {
      removeCurrentGroup(writer, manager);
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = Unit_instance;
    }finally {
      writer.q18(normalClose);
    }
    manager.g1j();
  };
  protoOf(CompositionImpl).v1k = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.c1i_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChanges.<anonymous>' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        applyChangesInLocked(this, this.j1i_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.d1i_1.q();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.d1i_1)).i1j();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.d1k();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).w1k = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.c1i_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.applyLateChanges.<anonymous>' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        if (this.k1i_1.pz()) {
          applyChangesInLocked(this, this.k1i_1);
        }
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.d1i_1.q();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.d1i_1)).i1j();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.d1k();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).x1k = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.c1i_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.changesApplied.<anonymous>' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        this.r1i_1.l1e();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.d1i_1.q()) {
          (new RememberEventDispatcher(this.d1i_1)).i1j();
        }
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.d1i_1.q();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.d1i_1)).i1j();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.d1k();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).d1k = function () {
    this.b1i_1.y1k(null);
    this.j1i_1.w1();
    this.k1i_1.w1();
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.d1i_1.q()) {
      (new RememberEventDispatcher(this.d1i_1)).i1j();
    }
  };
  protoOf(CompositionImpl).z1k = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.c1i_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.e1i_1.y14_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.a1l();
      }
    }
  };
  protoOf(CompositionImpl).f1c = function (to, groupIndex, block) {
    var tmp;
    if (!(to == null) && !equals(to, this) && groupIndex >= 0) {
      var tmp_0 = this;
      tmp_0.o1i_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.p1i_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.o1i_1 = null;
        this.p1i_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).b1l = function (scope, instance) {
    if (scope.c1l()) {
      scope.h1g(true);
    }
    var anchor = scope.x12_1;
    if (anchor == null || !anchor.a1h())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.e1i_1.d1l(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.c1i_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.o1i_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.e1l())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).f1l = function (scope) {
    this.n1i_1 = true;
  };
  protoOf(CompositionImpl).g1l = function (instance, scope) {
    this.f1i_1.a1j(instance, scope);
  };
  protoOf(CompositionImpl).h1l = function (state) {
    if (!this.f1i_1.d1j(state)) {
      this.i1i_1.n1k(state);
    }
  };
  function CompositionObserverHolder(observer, root) {
    observer = observer === VOID ? null : observer;
    root = root === VOID ? false : root;
    this.o1j_1 = observer;
    this.p1j_1 = root;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.u1d(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:623)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
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
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 3) === 2) || !$composer_0.w1d()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:757)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.m18();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.v1j_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.w1j_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function ScopeInvalidated() {
  }
  var ScopeInvalidated_instance;
  function ScopeInvalidated_getInstance() {
    return ScopeInvalidated_instance;
  }
  function swap(_this__u8e3s4, a, b) {
    _init_properties_Composition_kt__t5pjw8();
    var item = _this__u8e3s4.p(a);
    _this__u8e3s4.x1(a, _this__u8e3s4.p(b));
    _this__u8e3s4.x1(b, item);
  }
  function swap_0(_this__u8e3s4, a, b) {
    _init_properties_Composition_kt__t5pjw8();
    var item = _this__u8e3s4.p(a);
    _this__u8e3s4.xv(a, _this__u8e3s4.p(b));
    _this__u8e3s4.xv(b, item);
  }
  function ControlledComposition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  function CompositionImplServiceKey$1() {
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
      CompositionImplServiceKey = new CompositionImplServiceKey$1();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
  }
  protoOf(CompositionContext).n1j = function () {
    return null;
  };
  protoOf(CompositionContext).q15 = function (table) {
  };
  protoOf(CompositionContext).u1j = function (composer) {
  };
  protoOf(CompositionContext).j15 = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).i15 = function () {
  };
  protoOf(CompositionContext).s15 = function () {
  };
  protoOf(CompositionContext).w1b = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.u1f_1 = new LazyValueHolder(defaultFactory);
  }
  protoOf(CompositionLocal).j1l = function () {
    return this.u1f_1;
  };
  function valueHolderOf($this, value) {
    var tmp;
    if (value.r1f_1) {
      var tmp1_elvis_lhs = value.p1f_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp_1 = value.c2();
        var tmp0_elvis_lhs = value.o1f_1;
        tmp_0 = mutableStateOf(tmp_1, tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs);
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = new DynamicValueHolder(tmp_0);
    } else if (!(value.q1f_1 == null)) {
      tmp = new ComputedValueHolder(value.q1f_1);
    } else if (!(value.p1f_1 == null)) {
      tmp = new DynamicValueHolder(value.p1f_1);
    } else {
      tmp = new StaticValueHolder(value.i1h());
    }
    return tmp;
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
  }
  protoOf(ProvidableCompositionLocal).m1l = function (value) {
    return this.l1l(value);
  };
  protoOf(ProvidableCompositionLocal).v1f = function (value, previous) {
    var tmp;
    if (previous instanceof DynamicValueHolder) {
      var tmp_0;
      if (value.r1f_1) {
        previous.p1l_1.ts(value.i1h());
        tmp_0 = previous;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } else {
      if (previous instanceof StaticValueHolder) {
        tmp = value.j1h() && equals(value.i1h(), previous.o1l_1) ? previous : null;
      } else {
        if (previous instanceof ComputedValueHolder) {
          tmp = value.q1f_1 === previous.n1l_1 ? previous : null;
        } else {
          tmp = null;
        }
      }
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? valueHolderOf(this, value) : tmp1_elvis_lhs;
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).l1l = function (value) {
    return new ProvidedValue(this, value, value === null, null, null, null, false);
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider(value, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.d1g(-1350970552);
    sourceInformation($composer_0, 'C(CompositionLocalProvider)P(1)400@17486L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1350970552, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider (CompositionLocal.kt:398)');
    }
    $composer_0.k1f(value);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.y1f();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(CompositionLocalProvider$lambda(value, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.t1l_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).l1l = function (value) {
    return new ProvidedValue(this, value, value === null, this.t1l_1, null, null, true);
  };
  function CompositionLocalProvider$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function read(_this__u8e3s4, key) {
    // Inline function 'kotlin.collections.getOrElse' call
    var key_0 = key instanceof CompositionLocal ? key : THROW_CCE();
    var tmp0_elvis_lhs = _this__u8e3s4.f2(key_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.read.<anonymous>' call
      tmp = key.j1l();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp_0 = tmp.u1l(_this__u8e3s4);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.d2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().co();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(0), null);
      // Inline function 'kotlin.also' call
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().y1l(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
  }
  function LaunchedEffect(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1179185413, 'C(LaunchedEffect)P(1)338@14267L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1179185413, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:336)');
    }
    var applyContext = $composer_0.z1d();
    sourceInformationMarkerStart($composer_0, 2064962644, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.n15(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (invalid || it === Companion_getInstance().v18_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_0.w1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.z1l_1 = task;
    this.a1m_1 = CoroutineScope(parentCoroutineContext);
    this.b1m_1 = null;
  }
  protoOf(LaunchedEffectImpl).s1j = function () {
    var tmp0_safe_receiver = this.b1m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.b1m_1 = launch(this.a1m_1, VOID, VOID, this.z1l_1);
  };
  protoOf(LaunchedEffectImpl).r1j = function () {
    var tmp0_safe_receiver = this.b1m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.bk(new LeftCompositionCancellationException());
    }
    this.b1m_1 = null;
  };
  protoOf(LaunchedEffectImpl).t1j = function () {
    var tmp0_safe_receiver = this.b1m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.bk(new LeftCompositionCancellationException());
    }
    this.b1m_1 = null;
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function DisposableEffect(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1371986847, 'C(DisposableEffect)P(1)155@6197L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1371986847, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:154)');
    }
    sourceInformationMarkerStart($composer_0, 1176203671, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.n15(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (invalid || it === Companion_getInstance().v18_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.w1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function DisposableEffectImpl(effect) {
    this.c1m_1 = effect;
    this.d1m_1 = null;
  }
  protoOf(DisposableEffectImpl).s1j = function () {
    this.d1m_1 = this.c1m_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).r1j = function () {
    var tmp0_safe_receiver = this.d1m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.qm();
    }
    this.d1m_1 = null;
  };
  protoOf(DisposableEffectImpl).t1j = function () {
  };
  function DisposableEffect_0(keys, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1307627122, 'C(DisposableEffect)P(1)276@11903L48:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1307627122, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:275)');
    }
    // Inline function 'androidx.compose.runtime.remember' call
    var keys_0 = keys.slice();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, -568225417, 'CC(remember)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = keys_0.length;
    while (inductionVariable < last) {
      var key = keys_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.n15(key));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = invalid;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.l1f();
    var tmp;
    if (invalid_0 || it === Companion_getInstance().v18_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.w1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function DisposableEffect_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1429097729, 'C(DisposableEffect)P(1,2)195@8083L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1429097729, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:194)');
    }
    sourceInformationMarkerStart($composer_0, 1176264029, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.n15(key1) | $composer_0.n15(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (invalid || it === Companion_getInstance().v18_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.w1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.k2_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.e1m_1 = left;
    this.f1m_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.e1m_1), 31) + hashCodeOf(this, this.f1m_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.e1m_1) + ', right=' + toString_0(this.f1m_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.e1m_1, tmp0_other_with_cast.e1m_1))
      return false;
    if (!equals(this.f1m_1, tmp0_other_with_cast.f1m_1))
      return false;
    return true;
  };
  function Key() {
  }
  var Key_instance_0;
  function Key_getInstance() {
    return Key_instance_0;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.g9(Key_instance_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function OpaqueKey(key) {
    this.g1m_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.g1m_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.g1m_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.g1m_1 === tmp0_other_with_cast.g1m_1))
      return false;
    return true;
  };
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  var callbackLock;
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.v12_1 = $this.v12_1 | 32;
    } else {
      $this.v12_1 = $this.v12_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.v12_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.v12_1 = $this.v12_1 | 16;
    } else {
      $this.v12_1 = $this.v12_1 & -17;
    }
  }
  function checkDerivedStateChanged(_this__u8e3s4, $this, dependencies) {
    if (!isInterface(_this__u8e3s4, DerivedState))
      THROW_CCE();
    var tmp0_elvis_lhs = _this__u8e3s4.v1l();
    var policy = tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs;
    return !policy.h1m(_this__u8e3s4.m1k().p1k(), dependencies.f2(_this__u8e3s4));
  }
  function Companion_1() {
  }
  protoOf(Companion_1).i1m = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.q()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.p(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.j1m(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.k1m(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).l1m = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.q()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.p(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.d1l(item)) {
              var tmp_1 = slots.m1m(slots.u1b(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.a13_1 === $token && $instances.equals(this$0.b13_1)) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var this_0 = $instances;
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
          var m = this_0.xw_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.MutableObjectIntMap.removeIf.<anonymous>' call
                      var tmp_1 = this_0.yw_1[index];
                      var tmp1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
                      var shouldRemove = !(this_0.zw_1[index] === $token);
                      if (shouldRemove) {
                        composition.g1l(tmp1, this$0);
                        if (isInterface(tmp1, DerivedState)) {
                          composition.h1l(tmp1);
                          var tmp0_safe_receiver = this$0.c13_1;
                          if (tmp0_safe_receiver == null)
                            null;
                          else
                            tmp0_safe_receiver.w4(tmp1);
                        }
                      }
                      if (shouldRemove) {
                        this_0.jx(index);
                      }
                    }
                    slot = slot.y2(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  tmp$ret$3 = Unit_instance;
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        tmp = tmp$ret$3;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.v12_1 = 0;
    this.w12_1 = owner;
    this.x12_1 = null;
    this.y12_1 = null;
    this.z12_1 = null;
    this.a13_1 = 0;
    this.b13_1 = null;
    this.c13_1 = null;
  }
  protoOf(RecomposeScopeImpl).a1h = function () {
    var tmp;
    if (!(this.w12_1 == null)) {
      var tmp0_safe_receiver = this.x12_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1h();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).e1l = function () {
    return !(this.y12_1 == null);
  };
  protoOf(RecomposeScopeImpl).w1g = function (value) {
    if (value) {
      this.v12_1 = this.v12_1 | 1;
    } else {
      this.v12_1 = this.v12_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).a1a = function () {
    return !((this.v12_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).j1e = function (value) {
    if (value) {
      this.v12_1 = this.v12_1 | 2;
    } else {
      this.v12_1 = this.v12_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).c1l = function () {
    return !((this.v12_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).h1g = function (value) {
    if (value) {
      this.v12_1 = this.v12_1 | 4;
    } else {
      this.v12_1 = this.v12_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).k1e = function () {
    return !((this.v12_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).g1b = function (value) {
    if (value) {
      this.v12_1 = this.v12_1 | 8;
    } else {
      this.v12_1 = this.v12_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).n1e = function () {
    return !((this.v12_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).w1a = function (composer) {
    var block = this.y12_1;
    var observer = this.z12_1;
    if (!(observer == null) && !(block == null)) {
      observer.n1m(this);
      try {
        block(composer, 1);
      }finally {
        observer.o1m(this);
      }
      return Unit_instance;
    }
    if ((block == null ? null : block(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).b1j = function (value) {
    var tmp0_safe_receiver = this.w12_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b1l(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).c1h = function () {
    var tmp0_safe_receiver = this.w12_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f1l(this);
    }
    this.w12_1 = null;
    this.b13_1 = null;
    this.c13_1 = null;
    var tmp1_safe_receiver = this.z12_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.p1m(this);
    }
  };
  protoOf(RecomposeScopeImpl).k1m = function (owner) {
    this.w12_1 = owner;
  };
  protoOf(RecomposeScopeImpl).a1l = function () {
    var tmp0_safe_receiver = this.w12_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.b1l(this, null);
  };
  protoOf(RecomposeScopeImpl).r1l = function (block) {
    this.y12_1 = block;
  };
  protoOf(RecomposeScopeImpl).f1b = function (value) {
    if (value) {
      this.v12_1 = this.v12_1 | 64;
    } else {
      this.v12_1 = this.v12_1 & -65;
    }
  };
  protoOf(RecomposeScopeImpl).e1b = function () {
    return !((this.v12_1 & 64) === 0);
  };
  protoOf(RecomposeScopeImpl).i1g = function () {
    return !((this.v12_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).h1b = function (token) {
    this.a13_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).c1g = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).j1k = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.b13_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableObjectIntMap();
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.b13_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedInstances = tmp;
    var token = trackedInstances.ix(instance, this.a13_1, -1);
    if (token === this.a13_1) {
      return true;
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).q1k = function (instance, value) {
    var tmp0_elvis_lhs = this.c13_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableScatterMap();
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordDerivedStateValue.<anonymous>' call
      this.c13_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    trackedDependencies.dy(instance, value);
  };
  protoOf(RecomposeScopeImpl).z1i = function () {
    return !(this.c13_1 == null);
  };
  protoOf(RecomposeScopeImpl).d13 = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.c13_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (isInterface(instances, DerivedState)) {
      tmp_0 = checkDerivedStateChanged(instances, this, trackedDependencies);
    } else {
      if (instances instanceof ScatterSet) {
        var tmp_1;
        if (instances.pz()) {
          var tmp$ret$3;
          $l$block: {
            // Inline function 'androidx.collection.ScatterSet.any' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.collection.ScatterSet.forEach' call
            // Inline function 'kotlin.contracts.contract' call
            var k = instances.lz_1;
            $l$block_0: {
              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
              // Inline function 'kotlin.contracts.contract' call
              var m = instances.kz_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_0 = slot;
                  if (!this_0.a3(this_0.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                          var tmp_2 = k[index];
                          // Inline function 'androidx.collection.ScatterSet.any.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
                          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                          var tmp_3;
                          if (!(!(it == null) ? isInterface(it, DerivedState) : false)) {
                            tmp_3 = true;
                          } else {
                            tmp_3 = checkDerivedStateChanged(it, this, trackedDependencies);
                          }
                          if (tmp_3) {
                            tmp$ret$3 = true;
                            break $l$block;
                          }
                        }
                        slot = slot.y2(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_0;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp$ret$3 = false;
          }
          tmp_1 = tmp$ret$3;
        } else {
          tmp_1 = false;
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = true;
      }
    }
    return tmp_0;
  };
  protoOf(RecomposeScopeImpl).v1a = function () {
    var tmp0_safe_receiver = this.w12_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.b13_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>' call
        _set_rereading__pnqtpo(this, true);
        try {
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver_0.yw_1;
          var v = tmp0_safe_receiver_0.zw_1;
          $l$block: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver_0.xw_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.a3(this_0.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        var tmp_0 = k[index];
                        var tmp1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
                        v[index];
                        tmp0_safe_receiver.i1k(tmp1);
                      }
                      slot = slot.y2(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block;
                  }
                }
              }
               while (!(i === lastIndex));
          }
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_instance;
      }
    }
  };
  protoOf(RecomposeScopeImpl).f1g = function (token) {
    var tmp0_safe_receiver = this.b13_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.i1g()) {
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.any' call
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver.yw_1;
          var v = tmp0_safe_receiver.zw_1;
          $l$block_0: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver.xw_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.a3(this_0.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        var tmp_2 = k[index];
                        (tmp_2 == null ? true : !(tmp_2 == null)) || THROW_CCE();
                        // Inline function 'androidx.collection.ObjectIntMap.any.<anonymous>' call
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
                        if (!(v[index] === token)) {
                          tmp$ret$3 = true;
                          break $l$block;
                        }
                      }
                      slot = slot.y2(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp$ret$3 = false;
        }
        tmp_1 = tmp$ret$3;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    _init_properties_RecomposeScopeImpl_kt__t15emj();
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var properties_initialized_RecomposeScopeImpl_kt_pxgdx3;
  function _init_properties_RecomposeScopeImpl_kt__t15emj() {
    if (!properties_initialized_RecomposeScopeImpl_kt_pxgdx3) {
      properties_initialized_RecomposeScopeImpl_kt_pxgdx3 = true;
      callbackLock = new Object();
    }
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.q1m_1.c2();
      var new_0 = old.e(info);
      if (old === new_0 || $this.q1m_1.us(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.q1m_1.c2();
      var new_0 = old.t1(info);
      if (old === new_0 || $this.q1m_1.us(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(this$0, toRecompose, toInsert, toApply, toLateApply, toComplete, modifiedValues, alreadyComposed) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>' call
    toRecompose.w1();
    toInsert.w1();
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = toApply.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = toApply.p(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
        item.d1k();
        recordFailedCompositionLocked(this$0, item);
      }
       while (inductionVariable <= last);
    toApply.w1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = toLateApply.lz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = toLateApply.kz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= lastIndex)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.a3(this_0.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < bitCount)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index_0 = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp = k[index_0];
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  it.d1k();
                  recordFailedCompositionLocked(this$0, it);
                }
                slot = slot.y2(8);
              }
               while (inductionVariable_1 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    toLateApply.w1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k_0 = toComplete.lz_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_0 = toComplete.kz_1;
      var lastIndex_0 = m_0.length - 2 | 0;
      var inductionVariable_2 = 0;
      if (inductionVariable_2 <= lastIndex_0)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var slot_0 = m_0[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot_0;
          if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
            var inductionVariable_3 = 0;
            if (inductionVariable_3 < bitCount_0)
              do {
                var j_0 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_0.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index_1 = (i_0 << 3) + j_0 | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp_0 = k_0[index_1];
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).x1k();
                }
                slot_0 = slot_0.y2(8);
              }
               while (inductionVariable_3 < bitCount_0);
            if (!(bitCount_0 === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i_0 === lastIndex_0));
    }
    toComplete.w1();
    modifiedValues.w1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k_1 = alreadyComposed.lz_1;
    $l$block_1: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_1 = alreadyComposed.kz_1;
      var lastIndex_1 = m_1.length - 2 | 0;
      var inductionVariable_4 = 0;
      if (inductionVariable_4 <= lastIndex_1)
        do {
          var i_1 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var slot_1 = m_1[i_1];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_2 = slot_1;
          if (!this_2.a3(this_2.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
            var inductionVariable_5 = 0;
            if (inductionVariable_5 < bitCount_1)
              do {
                var j_1 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_1.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index_2 = (i_1 << 3) + j_1 | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp_1 = k_1[index_2];
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var it_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                  it_0.d1k();
                  recordFailedCompositionLocked(this$0, it_0);
                }
                slot_1 = slot_1.y2(8);
              }
               while (inductionVariable_5 < bitCount_1);
            if (!(bitCount_1 === 8)) {
              break $l$block_1;
            }
          }
        }
         while (!(i_1 === lastIndex_1));
    }
    alreadyComposed.w1();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.w1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.c1n_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.e(item);
      }
       while (inductionVariable <= last);
    this$0.c1n_1.w1();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $modifiedValues, $alreadyComposed, $toInsert, $toApply, $modifiedValuesSet, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        var tmp0 = 'Recomposer:animation';
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token = Trace_instance.g1c(tmp0);
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>' call
            this$0.t1m_1.m12(frameTime);
            Companion_instance_12.r1n();
            break $l$block;
          }finally {
            Trace_instance.t1c(token);
          }
        }
        tmp = Unit_instance;
      }
      var tmp1 = 'Recomposer:recompose';
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_instance.g1c(tmp1);
        try {
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>' call
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          this$0.u1m_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
          var this_0 = this$0.a1n_1;
          // Inline function 'kotlin.contracts.contract' call
          var size = this_0.q1c_1;
          if (size > 0) {
            var i = 0;
            var tmp_0 = this_0.o1c_1;
            var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
            do {
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var it = content[i];
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.e(it);
              i = i + 1 | 0;
            }
             while (i < size);
          }
          this$0.a1n_1.w1();
          $modifiedValues.w1();
          $alreadyComposed.w1();
          $l$loop: while (true) {
            var tmp_1;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.q()) {
              tmp_1 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_1 = !$toInsert.q();
            }
            if (!tmp_1) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable = 0;
              var last = this_1.j() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_1.p(index);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp0_safe_receiver = performRecompose(this$0, item, $modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toApply.e(tmp0_safe_receiver);
                  }
                  $alreadyComposed.e(item);
                }
                 while (inductionVariable <= last);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.w1();
            }
            if ($modifiedValues.pz() || this$0.a1n_1.pz()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              this$0.u1m_1;
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_2 = _get_knownCompositions__y8veaj(this$0);
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_2.j() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_2.p(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!$alreadyComposed.o(item_0) && item_0.g1k($modifiedValuesSet)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.e(item_0);
                  }
                }
                 while (inductionVariable_0 <= last_0);
              // Inline function 'androidx.compose.runtime.collection.MutableVector.removeIf' call
              var this_3 = this$0.a1n_1;
              var gap = 0;
              var size_0 = this_3.q1c_1;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < size_0)
                $l$loop_0: do {
                  var i_0 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var tmp_2 = this_3.o1c_1[i_0];
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var value = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                  var tmp_3;
                  if (!$alreadyComposed.o(value) && !$toRecompose.o(value)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.e(value);
                    tmp_3 = true;
                  } else {
                    tmp_3 = false;
                  }
                  if (tmp_3) {
                    gap = gap + 1 | 0;
                    continue $l$loop_0;
                  }
                  if (gap > 0) {
                    this_3.o1c_1[i_0 - gap | 0] = this_3.o1c_1[i_0];
                  }
                }
                 while (inductionVariable_1 < size_0);
              fill_0(this_3.o1c_1, null, size_0 - gap | 0, size_0);
              this_3.s1n(size_0 - gap | 0);
            }
            if ($toRecompose.q()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_1: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.q()) {
                    break $l$loop_1;
                  }
                  $toLateApply.f11(performInsertValues(this$0, $toInsert, $modifiedValues));
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                  return Unit_instance;
                } else {
                  throw $p;
                }
              }
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toApply.q()) {
            var tmp0_this = this$0;
            tmp0_this.s1m_1 = tmp0_this.s1m_1.u2();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_1 = this_4.j() - 1 | 0;
              if (inductionVariable_2 <= last_1)
                do {
                  var index_1 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_1 = this_4.p(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.e(item_1);
                }
                 while (inductionVariable_2 <= last_1);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_2 = this_5.j() - 1 | 0;
              if (inductionVariable_3 <= last_2)
                do {
                  var index_2 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_2 = this_5.p(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_2.v1k();
                }
                 while (inductionVariable_3 <= last_2);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.w1();
            }
          }
          if ($toLateApply.pz()) {
            try {
              $toComplete.h11($toLateApply);
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_6 = $toLateApply;
              // Inline function 'kotlin.contracts.contract' call
              var k = this_6.lz_1;
              $l$block_0: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m = this_6.kz_1;
                var lastIndex = m.length - 2 | 0;
                var inductionVariable_4 = 0;
                if (inductionVariable_4 <= lastIndex)
                  do {
                    var i_1 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var slot = m[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_7 = slot;
                    if (!this_7.a3(this_7.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount = 8 - (~(i_1 - lastIndex | 0) >>> 31 | 0) | 0;
                      var inductionVariable_5 = 0;
                      if (inductionVariable_5 < bitCount)
                        do {
                          var j = inductionVariable_5;
                          inductionVariable_5 = inductionVariable_5 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                            var index_3 = (i_1 << 3) + j | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            var tmp_4 = k[index_3];
                            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                            ((tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE()).w1k();
                          }
                          slot = slot.y2(8);
                        }
                         while (inductionVariable_5 < bitCount);
                      if (!(bitCount === 8)) {
                        break $l$block_0;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex));
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.w1();
            }
          }
          if ($toComplete.pz()) {
            try {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_8 = $toComplete;
              // Inline function 'kotlin.contracts.contract' call
              var k_0 = this_8.lz_1;
              $l$block_1: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_0 = this_8.kz_1;
                var lastIndex_0 = m_0.length - 2 | 0;
                var inductionVariable_6 = 0;
                if (inductionVariable_6 <= lastIndex_0)
                  do {
                    var i_2 = inductionVariable_6;
                    inductionVariable_6 = inductionVariable_6 + 1 | 0;
                    var slot_0 = m_0[i_2];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_9 = slot_0;
                    if (!this_9.a3(this_9.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_0 = 8 - (~(i_2 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_7 = 0;
                      if (inductionVariable_7 < bitCount_0)
                        do {
                          var j_0 = inductionVariable_7;
                          inductionVariable_7 = inductionVariable_7 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_0.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                            var index_4 = (i_2 << 3) + j_0 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            var tmp_5 = k_0[index_4];
                            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                            ((tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE()).x1k();
                          }
                          slot_0 = slot_0.y2(8);
                        }
                         while (inductionVariable_7 < bitCount_0);
                      if (!(bitCount_0 === 8)) {
                        break $l$block_1;
                      }
                    }
                  }
                   while (!(i_2 === lastIndex_0));
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.w1();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          this$0.u1m_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_12.t1n();
          $alreadyComposed.w1();
          $modifiedValues.w1();
          this$0.g1n_1 = null;
          break $l$block_2;
        }finally {
          Trace_instance.t1c(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.u1m_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.m1n_1.c2().l2(State_Idle_getInstance()) >= 0) {
        var snapshotInvalidations = this$0.z1m_1;
        // Inline function 'androidx.compose.runtime.collection.fastForEach' call
        var tmp_0;
        if (changed instanceof ScatterSetWrapper) {
          var this_0 = changed.c1j_1;
          // Inline function 'kotlin.contracts.contract' call
          var k = this_0.lz_1;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
            // Inline function 'kotlin.contracts.contract' call
            var m = this_0.kz_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_1 = slot;
                if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                        var tmp_1 = k[index];
                        var tmp1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                        $l$block: {
                          // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                          var tmp_2;
                          if (tmp1 instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$2 = _ReaderKind___init__impl__jqeebu(1);
                            tmp_2 = !tmp1.u1n(tmp$ret$2);
                          } else {
                            tmp_2 = false;
                          }
                          if (tmp_2) {
                            break $l$block;
                          }
                          snapshotInvalidations.e(tmp1);
                        }
                      }
                      slot = slot.y2(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    tmp$ret$4 = Unit_instance;
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp_0 = tmp$ret$4;
        } else {
          var _iterator__ex2g4s = changed.g();
          while (_iterator__ex2g4s.h()) {
            var element = _iterator__ex2g4s.i();
            $l$block_1: {
              // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_3;
              if (element instanceof StateObjectImpl) {
                // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                var tmp$ret$5 = _ReaderKind___init__impl__jqeebu(1);
                tmp_3 = !element.u1n(tmp$ret$5);
              } else {
                tmp_3 = false;
              }
              if (tmp_3) {
                break $l$block_1;
              }
              snapshotInvalidations.e(element);
            }
          }
          tmp_0 = Unit_instance;
        }
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$10 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.e9(tmp$ret$10);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.d1o_1 = $block;
    this.e1o_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).g1o = function ($this$coroutineScope, $completion) {
    var tmp = this.h1o($this$coroutineScope, $completion);
    tmp.v8_1 = Unit_instance;
    tmp.w8_1 = null;
    return tmp.b9();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).p9 = function (p1, $completion) {
    return this.g1o((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).b9 = function () {
    var suspendResult = this.v8_1;
    $sm: do
      try {
        var tmp = this.t8_1;
        switch (tmp) {
          case 0:
            this.u8_1 = 2;
            this.t8_1 = 1;
            suspendResult = this.d1o_1(this.f1o_1, this.e1o_1, this);
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).h1o = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.d1o_1, this.e1o_1, completion);
    i.f1o_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.g1o($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_knownCompositions__y8veaj($this) {
    var tmp0_elvis_lhs = $this.y1m_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.runtime.Recomposer.<get-knownCompositions>.<anonymous>' call
      var compositions = $this.x1m_1;
      var newCache = compositions.q() ? emptyList() : ArrayList_init_$Create$_1(compositions);
      $this.y1m_1 = newCache;
      tmp = newCache;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.l1n_1 && $this.t1m_1.l12();
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.m1n_1.c2().l2(State_ShuttingDown_getInstance()) <= 0) {
      clearKnownCompositionsLocked($this);
      $this.z1m_1 = new MutableScatterSet();
      $this.a1n_1.w1();
      $this.b1n_1.w1();
      $this.c1n_1.w1();
      $this.f1n_1 = null;
      var tmp0_safe_receiver = $this.h1n_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.gl();
      $this.h1n_1 = null;
      $this.k1n_1 = null;
      return null;
    }
    var tmp;
    if (!($this.k1n_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.v1m_1 == null) {
        $this.z1m_1 = new MutableScatterSet();
        $this.a1n_1.w1();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        if ($this.a1n_1.pz() || $this.z1m_1.pz()) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.b1n_1.q();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.c1n_1.q();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.i1n_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.m1n_1.ts(newState);
    var tmp_4;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.h1n_1;
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.h1n_1 = null;
      tmp_4 = this_0;
    } else {
      tmp_4 = null;
    }
    return tmp_4;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.j1n_1) {
      tmp = true;
    } else {
      var tmp1 = $this.n1n_1.yq();
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var _iterator__ex2g4s = tmp1.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.wi()) {
            tmp$ret$3 = true;
            break $l$block;
          }
        }
        tmp$ret$3 = false;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.i1o_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.j1o_1 = recoverable;
    this.k1o_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.z1m_1.q())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = wrapIntoSet($this.z1m_1);
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.z1m_1 = new MutableScatterSet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = _get_knownCompositions__y8veaj($this);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.p(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.e1k(changes);
            if ($this.m1n_1.c2().l2(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.u1m_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
      $this.z1m_1 = new MutableScatterSet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        $this.u1m_1;
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        $this.z1m_1.c11(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'called outside of runRecomposeAndApplyChanges';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.w1m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    if ($this.m1n_1.c2().l2(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.v1m_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.v1m_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_2().r1m_1.co()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.u1m_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.b1n_1.w1();
      $this.a1n_1.w1();
      $this.z1m_1 = new MutableScatterSet();
      $this.c1n_1.w1();
      $this.d1n_1.w1();
      $this.e1n_1.w1();
      $this.k1n_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        recordFailedCompositionLocked($this, failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.u1m_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      var errorState = $this.k1n_1;
      if (errorState == null) {
        $this.k1n_1 = new RecomposerErrorState(false, e);
      } else {
        throw errorState.k1o_1;
      }
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function clearKnownCompositionsLocked($this) {
    $this.x1m_1.w1();
    $this.y1m_1 = emptyList();
  }
  function removeKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.minusAssign' call
    $this.x1m_1.t1(composition);
    $this.y1m_1 = null;
  }
  function addKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.plusAssign' call
    $this.x1m_1.e(composition);
    $this.y1m_1 = null;
  }
  function recordFailedCompositionLocked($this, composition) {
    var tmp0_elvis_lhs = $this.f1n_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'androidx.compose.runtime.Recomposer.recordFailedCompositionLocked.<anonymous>' call
      $this.f1n_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var failedCompositions = tmp;
    if (!failedCompositions.o(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      failedCompositions.e(composition);
    }
    removeKnownCompositionLocked($this, composition);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    return $this.z1m_1.pz() || $this.a1n_1.pz() || _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$1($this, $completion);
    tmp.v8_1 = Unit_instance;
    tmp.w8_1 = null;
    return tmp.b9();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.z8();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.t1m_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>' call
    var tmp0 = $this.c1n_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.p(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.p1b_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1)
      return Unit_instance;
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.q()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.j1j() || composition.x1j()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.g1n_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_12.u1o(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.v1o();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.pz()) === true) {
              composition.h1k(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.s1k();
            break $l$block;
          }finally {
            snapshot.w1o(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$(references.j());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.p(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.p1b_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.f2(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.v4(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.e(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.i2().g();
    while (tmp0_iterator.h()) {
      var tmp1_loop_parameter = tmp0_iterator.i();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.b2();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.c2();
      runtimeCheck(!composition.j1j());
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.u1o(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block_1: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.v1o();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              $this.u1m_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.j());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.j() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.p(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  var element = to(item_0, removeLastMultiValue($this.d1n_1, item_0.n1b_1));
                  target.e(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              var tmp_0;
              var tmp_1;
              var tmp$ret$12;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_1 = 0;
                var last_1 = pairs.j() - 1 | 0;
                if (inductionVariable_1 <= last_1)
                  do {
                    var index_1 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var item_1 = pairs.p(index_1);
                    // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    if (!(item_1.ka_1 == null)) {
                      tmp$ret$12 = false;
                      break $l$block;
                    }
                  }
                   while (inductionVariable_1 <= last_1);
                tmp$ret$12 = true;
              }
              if (tmp$ret$12) {
                tmp_1 = true;
              } else {
                var tmp$ret$14;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                  // Inline function 'kotlin.contracts.contract' call
                  var inductionVariable_2 = 0;
                  var last_2 = pairs.j() - 1 | 0;
                  if (inductionVariable_2 <= last_2)
                    do {
                      var index_2 = inductionVariable_2;
                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                      var item_2 = pairs.p(index_2);
                      // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                      if (!!(item_2.ka_1 == null)) {
                        tmp$ret$14 = false;
                        break $l$block_0;
                      }
                    }
                     while (inductionVariable_2 <= last_2);
                  tmp$ret$14 = true;
                }
                tmp_1 = tmp$ret$14;
              }
              if (tmp_1) {
                tmp_0 = pairs;
              } else {
                // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull' call
                // Inline function 'kotlin.contracts.contract' call
                var target_0 = ArrayList_init_$Create$_0(pairs.j());
                // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_3 = 0;
                var last_3 = pairs.j() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = pairs.p(index_3);
                    // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    var tmp0_safe_receiver = item_3.ka_1 == null ? item_3.ja_1 : null;
                    if (tmp0_safe_receiver == null)
                      null;
                    else {
                      // Inline function 'kotlin.let' call
                      // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull.<anonymous>.<anonymous>' call
                      // Inline function 'kotlin.collections.plusAssign' call
                      target_0.e(tmp0_safe_receiver);
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                var toReturn = target_0;
                // Inline function 'androidx.compose.runtime.synchronized' call
                $this.u1m_1;
                // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                // Inline function 'kotlin.collections.plusAssign' call
                var this_0 = $this.c1n_1;
                addAll(this_0, toReturn);
                // Inline function 'androidx.compose.runtime.snapshots.fastFilterIndexed' call
                // Inline function 'kotlin.contracts.contract' call
                var target_1 = ArrayList_init_$Create$_0(pairs.j());
                // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_4 = 0;
                var last_4 = pairs.j() - 1 | 0;
                if (inductionVariable_4 <= last_4)
                  do {
                    var index_4 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var item_4 = pairs.p(index_4);
                    // Inline function 'androidx.compose.runtime.snapshots.fastFilterIndexed.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    if (!(item_4.ka_1 == null)) {
                      // Inline function 'kotlin.collections.plusAssign' call
                      target_1.e(item_4);
                    }
                  }
                   while (inductionVariable_4 <= last_4);
                tmp_0 = target_1;
              }
              var toInsert = tmp_0;
              composition.t1k(toInsert);
              break $l$block_1;
            }finally {
              snapshot.w1o(previous);
            }
          }
          break $l$block_2;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.g2());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.d1n_1.q()) {
      var references = flatten($this.d1n_1.h2());
      $this.d1n_1.w1();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.j());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.p(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          var element = to(item, $this.e1n_1.f2(item));
          target.e(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.e1n_1.w1();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.p(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.la();
        var state = item_0.ma();
        if (!(state == null)) {
          reference.p1b_1.u1k(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.k1p();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.qm();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    return $this.a1n_1.pz() || _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.q1m_1 = MutableStateFlow(persistentSetOf());
    this.r1m_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.w1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.fillToInsert.<anonymous>' call
    var iterator = this$0.c1n_1.g();
    while (iterator.h()) {
      var value = iterator.i();
      if (equals(value.p1b_1, $composition)) {
        toInsert.e(value);
        iterator.u3();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.u1m_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.m1n_1.c2().l2(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.w1m_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.e9(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.u1m_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1;
        if (runnerJobCause == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          var tmp_2;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(runnerJobCause instanceof CancellationException)) {
            tmp_2 = runnerJobCause;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
        }
        tmp_0 = tmp0_safe_receiver;
      }
      tmp.w1m_1 = tmp_0;
      this$0.m1n_1.ts(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.u1m_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.v1m_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.m1n_1.ts(State_ShuttingDown_getInstance());
        if (!this$0.j1n_1) {
          runnerJob.bk(cancellation);
        } else if (!(this$0.h1n_1 == null)) {
          continuationToResume = this$0.h1n_1;
        }
        this$0.h1n_1 = null;
        tmp = runnerJob.wj(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.w1m_1 = cancellation;
        this$0.m1n_1.ts(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.e9(tmp$ret$2);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.t1p_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).e1q = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.f1q($this$recompositionRunner, parentFrameClock, $completion);
    tmp.v8_1 = Unit_instance;
    tmp.w8_1 = null;
    return tmp.b9();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).g1q = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.e1q(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).b9 = function () {
    var suspendResult = this.v8_1;
    $sm: do
      try {
        var tmp = this.t8_1;
        switch (tmp) {
          case 0:
            this.u8_1 = 6;
            var tmp_0 = this;
            tmp_0.w1p_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.x1p_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.y1p_1 = ArrayList_init_$Create$();
            this.z1p_1 = mutableScatterSetOf_0();
            this.a1q_1 = mutableScatterSetOf_0();
            this.b1q_1 = new MutableScatterSet();
            this.c1q_1 = wrapIntoSet(this.b1q_1);
            this.d1q_1 = mutableScatterSetOf_0();
            this.t8_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.t1p_1)) {
              this.t8_1 = 5;
              continue $sm;
            }

            this.t8_1 = 2;
            suspendResult = awaitWorkAvailable(this.t1p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.t1p_1)) {
              this.t8_1 = 1;
              continue $sm;
            } else {
              this.t8_1 = 3;
              continue $sm;
            }

          case 3:
            this.t8_1 = 4;
            suspendResult = this.v1p_1.n12(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.t1p_1, this.w1p_1, this.b1q_1, this.d1q_1, this.x1p_1, this.y1p_1, this.c1q_1, this.z1p_1, this.a1q_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.t1p_1);
            this.t8_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.w8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.u8_1 === 6) {
          throw e;
        } else {
          this.t8_1 = this.u8_1;
          this.w8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).f1q = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.t1p_1, completion);
    i.u1p_1 = $this$recompositionRunner;
    i.v1p_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.e1q($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.p1q_1 = this$0;
    this.q1q_1 = $block;
    this.r1q_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).g1o = function ($this$withContext, $completion) {
    var tmp = this.h1o($this$withContext, $completion);
    tmp.v8_1 = Unit_instance;
    tmp.w8_1 = null;
    return tmp.b9();
  };
  protoOf(Recomposer$recompositionRunner$slambda).p9 = function (p1, $completion) {
    return this.g1o((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).b9 = function () {
    var suspendResult = this.v8_1;
    $sm: do
      try {
        var tmp = this.t8_1;
        switch (tmp) {
          case 0:
            this.u8_1 = 5;
            this.t1q_1 = get_job(this.s1q_1.vi());
            registerRunnerJob(this.p1q_1, this.t1q_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_12;
            tmp_0.u1q_1 = tmp_1.w1q(Recomposer$recompositionRunner$slambda$lambda(this.p1q_1));
            addRunning(Companion_getInstance_2(), this.p1q_1.p1n_1);
            this.t8_1 = 1;
            continue $sm;
          case 1:
            this.u8_1 = 4;
            this.p1q_1.u1m_1;
            var this_0 = _get_knownCompositions__y8veaj(this.p1q_1);
            var inductionVariable = 0;
            var last = this_0.j() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.p(index);
                item.z1k();
              }
               while (inductionVariable <= last);
            this.t8_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.q1q_1, this.r1q_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.v1q_1 = suspendResult;
            this.u8_1 = 5;
            this.t8_1 = 3;
            continue $sm;
          case 3:
            this.u8_1 = 5;
            this.u1q_1.qm();
            this.p1q_1.u1m_1;
            if (this.p1q_1.v1m_1 === this.t1q_1) {
              this.p1q_1.v1m_1 = null;
            }

            deriveStateLocked(this.p1q_1);
            removeRunning(Companion_getInstance_2(), this.p1q_1.p1n_1);
            return Unit_instance;
          case 4:
            this.u8_1 = 5;
            var t = this.w8_1;
            this.u1q_1.qm();
            this.p1q_1.u1m_1;
            if (this.p1q_1.v1m_1 === this.t1q_1) {
              this.p1q_1.v1m_1 = null;
            }

            deriveStateLocked(this.p1q_1);
            removeRunning(Companion_getInstance_2(), this.p1q_1.p1n_1);
            throw t;
          case 5:
            throw this.w8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.u8_1 === 5) {
          throw e;
        } else {
          this.t8_1 = this.u8_1;
          this.w8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).h1o = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.p1q_1, this.q1q_1, this.r1q_1, completion);
    i.s1q_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.g1o($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.lz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.kz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp = k[index];
                    // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
                    var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    $composition.r1k(it);
                  }
                  slot = slot.y2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.i1k(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.r1k(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.e(value);
      return Unit_instance;
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1o_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$1).b9 = function () {
    var suspendResult = this.v8_1;
    $sm: do
      try {
        var tmp = this.t8_1;
        switch (tmp) {
          case 0:
            this.u8_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.t1o_1)) {
              this.t8_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.pm();
              this.t1o_1.u1m_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.t1o_1)) {
                tmp_0 = cancellable;
              } else {
                this.t1o_1.h1n_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.e9(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.tk(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.t8_1 = 2;
              continue $sm;
            }

          case 1:
            this.t8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.w8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.u8_1 === 3) {
          throw e;
        } else {
          this.t8_1 = this.u8_1;
          this.w8_1 = e;
        }
      }
     while (true);
  };
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_2();
    CompositionContext.call(this);
    this.s1m_1 = new Long(0, 0);
    var tmp = this;
    tmp.t1m_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.u1m_1 = new Object();
    this.v1m_1 = null;
    this.w1m_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.x1m_1 = ArrayList_init_$Create$();
    this.y1m_1 = null;
    this.z1m_1 = new MutableScatterSet();
    var tmp_1 = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1 = fillArrayVal(Array(16), null);
    tmp_1.a1n_1 = new MutableVector(tmp$ret$1, 0);
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.b1n_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.c1n_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.d1n_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.e1n_1 = LinkedHashMap_init_$Create$();
    this.f1n_1 = null;
    this.g1n_1 = null;
    this.h1n_1 = null;
    this.i1n_1 = 0;
    this.j1n_1 = false;
    this.k1n_1 = null;
    this.l1n_1 = false;
    this.m1n_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.g9(Key_instance));
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.wj(Recomposer$effectJob$lambda(this));
    tmp_6.n1n_1 = this_0;
    this.o1n_1 = effectCoroutineContext.ig(this.t1m_1).ig(this.n1n_1);
    this.p1n_1 = new RecomposerInfoImpl(this);
  }
  protoOf(Recomposer).a1e = function () {
    return this.o1n_1;
  };
  protoOf(Recomposer).x1q = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).w1i = function (composition, content) {
    var composerWasComposing = composition.j1j();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.u1o(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.v1o();
            try {
              composition.z1j(content);
              break $l$block;
            }finally {
              snapshot.w1o(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.t1n();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.composeInitial.<anonymous>' call
    if (this.m1n_1.c2().l2(State_ShuttingDown_getInstance()) > 0) {
      if (!_get_knownCompositions__y8veaj(this).o(composition)) {
        addKnownCompositionLocked(this, composition);
      }
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    try {
      composition.v1k();
      composition.w1k();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.t1n();
    }
  };
  protoOf(Recomposer).r15 = function () {
    return 1000;
  };
  protoOf(Recomposer).p18 = function () {
    return Companion_getInstance_2().r1m_1.co();
  };
  protoOf(Recomposer).o15 = function () {
    return false;
  };
  protoOf(Recomposer).p15 = function () {
    return false;
  };
  protoOf(Recomposer).q15 = function (table) {
  };
  protoOf(Recomposer).m1j = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.a1n_1.je(composition)) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.plusAssign' call
      this.a1n_1.r1c(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.e9(tmp$ret$2);
    }
  };
  protoOf(Recomposer).k1b = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.c1n_1.e(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.e9(tmp$ret$2);
    }
  };
  protoOf(Recomposer).o1d = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.d1n_1, reference.n1b_1, reference);
  };
  protoOf(Recomposer).i1l = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateReleased.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    this.e1n_1.v4(reference, data);
  };
  protoOf(Recomposer).n1d = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.g1n_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableSetOf' call
      // Inline function 'kotlin.also' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.g1n_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.e(composition);
  };
  protoOf(Recomposer).w1b = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.u1m_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.e1n_1.w4(reference);
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.f2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = removeFirst(tmp0_safe_receiver);
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.q()) {
        _this__u8e3s4.w4(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.f2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.v4(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.e(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function tryAnchor($this, index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.c15_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.tryAnchor.<anonymous>' call
      var tmp$ret$0 = 'use active SlotWriter to crate an anchor for location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    return (0 <= index ? index < $this.x14_1 : false) ? find($this.e15_1, index, $this.x14_1) : null;
  }
  function SlotTable() {
    this.w14_1 = new Int32Array(0);
    this.x14_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.y14_1 = tmp_1;
    this.z14_1 = 0;
    this.a15_1 = 0;
    this.b15_1 = new Object();
    this.c15_1 = false;
    this.d15_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.e15_1 = ArrayList_init_$Create$();
    this.f15_1 = null;
    this.g15_1 = null;
  }
  protoOf(SlotTable).t1a = function () {
    return this.x14_1 === 0;
  };
  protoOf(SlotTable).h15 = function () {
    if (this.c15_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.a15_1 = this.a15_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).l18 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.c15_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var tmp$ret$0 = 'Cannot start a writer when another writer is pending';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.a15_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var tmp$ret$1 = 'Cannot start a writer when a reader is pending';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    this.c15_1 = true;
    this.d15_1 = this.d15_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).f18 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.c15_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var tmp$ret$0 = 'use active SlotWriter to create an anchor location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.x14_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var tmp$ret$1 = 'Parameter index is out of range';
      throwIllegalArgumentException(tmp$ret$1);
    }
    var tmp0 = this.e15_1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var effectiveSize = this.x14_1;
    var location = search(tmp0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      tmp0.y1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0.p(location);
    }
    return tmp;
  };
  protoOf(SlotTable).u1b = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.c15_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var tmp$ret$0 = 'Use active SlotWriter to determine anchor location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.a1h()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var tmp$ret$1 = 'Anchor refers to a group that was removed';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return anchor.n1c_1;
  };
  protoOf(SlotTable).d1l = function (anchor) {
    var tmp;
    if (anchor.a1h()) {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search(this.e15_1, anchor.n1c_1, this.x14_1);
      tmp = (it >= 0 && equals(this.e15_1.p(it), anchor));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).k1j = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.c15_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var tmp$ret$0 = 'Writer is active';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= groupIndex ? groupIndex < this.x14_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var tmp$ret$1 = 'Invalid group index';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    var tmp;
    if (this.d1l(anchor)) {
      var containsUpper = groupIndex + groupSize(this.w14_1, groupIndex) | 0;
      var containsArg = anchor.n1c_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).y1q = function (reader, sourceInformationMap) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(reader.g16_1 === this && this.a15_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var tmp$ret$0 = 'Unexpected reader close()';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.a15_1 = this.a15_1 - 1 | 0;
    if (!(sourceInformationMap == null)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.b15_1;
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var thisMap = this.f15_1;
      if (!(thisMap == null)) {
        thisMap.m5(sourceInformationMap);
      } else {
        this.f15_1 = sourceInformationMap;
      }
    }
  };
  protoOf(SlotTable).z1q = function (writer, groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.a17_1 === this && this.c15_1)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var tmp$ret$0 = 'Unexpected writer close()';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.c15_1 = false;
    this.a1r(groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap);
  };
  protoOf(SlotTable).a1r = function (groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap) {
    this.w14_1 = groups;
    this.x14_1 = groupsSize;
    this.y14_1 = slots;
    this.z14_1 = slotsSize;
    this.e15_1 = anchors;
    this.f15_1 = sourceInformationMap;
    this.g15_1 = calledByMap;
  };
  protoOf(SlotTable).z1c = function () {
    return this.x14_1 > 0 && containsMark(this.w14_1, 0);
  };
  protoOf(SlotTable).b1r = function (group) {
    var tmp0_safe_receiver = this.f15_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = tryAnchor(this, group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.f2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SlotTable).o18 = function () {
    this.g15_1 = new MutableIntObjectMap();
  };
  protoOf(SlotTable).n18 = function () {
    this.f15_1 = HashMap_init_$Create$_0();
  };
  protoOf(SlotTable).m1m = function (group, slotIndex) {
    var start = slotAnchor(this.w14_1, group);
    var end = (group + 1 | 0) < this.x14_1 ? dataAnchor(this.w14_1, group + 1 | 0) : this.y14_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.y14_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance().v18_1;
    }
    return tmp;
  };
  protoOf(SlotTable).g = function () {
    return new GroupIterator(this, 0, this.x14_1);
  };
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.d1a(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.t17_1);
    if (fromWriter.g17_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.k17_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.b17_1;
    var currentGroup = toWriter.t17_1;
    var tmp0 = fromWriter.b17_1;
    var tmp2 = imul(currentGroup, 5);
    var tmp3 = imul(fromIndex, 5);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, tmp2, tmp3, endIndex);
    var slots = toWriter.c17_1;
    var currentSlot = toWriter.i17_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.c17_1;
    arrayCopy(this_0, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.v17_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.m17_1;
    var slotsGapLen = toWriter.l17_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.k17_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.m17_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.d17_1, fromIndex, fromWriter.c1r());
    var endAnchors = locationOf(fromWriter.d17_1, sourceGroupsEnd, fromWriter.c1r());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.d17_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.p(anchorIndex);
          sourceAnchor.n1c_1 = sourceAnchor.n1c_1 + anchorDelta | 0;
          anchors.e(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.d17_1, toWriter.t17_1, toWriter.c1r());
      toWriter.d17_1.u1(insertLocation, anchors);
      sourceAnchors.a2(startAnchors, endAnchors).w1();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors_0.q()) {
      var sourceSourceInformationMap = fromWriter.e17_1;
      var destinationSourceInformation = toWriter.e17_1;
      if (!(sourceSourceInformationMap == null) && !(destinationSourceInformation == null)) {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last = anchors_0.j() - 1 | 0;
        if (inductionVariable_1 <= last)
          do {
            var index = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item = anchors_0.p(index);
            // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
            var information = sourceSourceInformationMap.f2(item);
            if (!(information == null)) {
              sourceSourceInformationMap.w4(item);
              // Inline function 'kotlin.collections.set' call
              destinationSourceInformation.v4(item, information);
            }
          }
           while (inductionVariable_1 <= last);
      }
    }
    var toWriterParent = toWriter.v17_1;
    var tmp4_safe_receiver = sourceInformationOf(toWriter, parent);
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var predecessor = -1;
      var child = toWriterParent + 1 | 0;
      var endGroup = toWriter.t17_1;
      while (child < endGroup) {
        predecessor = child;
        child = child + groupSize(toWriter.b17_1, child) | 0;
      }
      tmp4_safe_receiver.j1r(toWriter, predecessor, endGroup);
    }
    var parentGroup = fromWriter.e18(fromIndex);
    var tmp_1;
    if (!removeSourceGroup) {
      tmp_1 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.t18();
        fromWriter.k1r(parentGroup - fromWriter.t17_1 | 0);
        fromWriter.t18();
      }
      fromWriter.k1r(fromIndex - fromWriter.t17_1 | 0);
      var anchorsRemoved = fromWriter.d1h();
      if (needsStartGroups) {
        fromWriter.m18();
        fromWriter.r1a();
        fromWriter.m18();
        fromWriter.r1a();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var tmp$ret$14 = 'Unexpectedly removed anchors';
      composeImmediateRuntimeError(tmp$ret$14);
    }
    toWriter.o17_1 = toWriter.o17_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.t17_1 = currentGroup + groupsToMove | 0;
      toWriter.i17_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function rawUpdate($this, value) {
    var result = $this.l1r();
    $this.m1r(value);
    return result;
  }
  function groupSourceInformationFor($this, parent, sourceInformation) {
    var tmp0_safe_receiver = $this.e17_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.getOrPut' call
      var key = $this.f18(parent);
      var value = tmp0_safe_receiver.f2(key);
      var tmp_0;
      if (value == null) {
        // Inline function 'androidx.compose.runtime.SlotWriter.groupSourceInformationFor.<anonymous>' call
        var result = new GroupSourceInformation(0, sourceInformation, 0);
        if (sourceInformation == null) {
          var child = parent + 1 | 0;
          var end = $this.t17_1;
          while (child < end) {
            result.n1r($this, child);
            child = child + groupSize($this.b17_1, child) | 0;
          }
        }
        var answer = result;
        tmp0_safe_receiver.v4(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function _get_currentGroupSlotIndex__p1glxf($this) {
    var tmp = $this.i17_1 - $this.o1r($this.v17_1) | 0;
    var tmp0_safe_receiver = $this.s17_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p($this.v17_1);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j();
    return tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var previousParent = $this.v17_1;
    var inserting = $this.n17_1 > 0;
    $this.r17_1.m15($this.o17_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      var current = $this.t17_1;
      var newCurrentSlot = dataIndex_0($this.b17_1, $this, groupIndexToAddress($this, current));
      insertGroups($this, 1);
      $this.i17_1 = newCurrentSlot;
      $this.j17_1 = newCurrentSlot;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance().v18_1);
      var hasAux = !isNode && !(aux === Companion_getInstance().v18_1);
      var tmp0_gapLen = $this.l17_1;
      var tmp1_gapStart = $this.k17_1;
      var tmp2_capacity = $this.c17_1.length;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var anchor = dataIndexToDataAnchor($this, newCurrentSlot, tmp1_gapStart, tmp0_gapLen, tmp2_capacity);
      var tmp_1;
      if (anchor >= 0 && $this.m17_1 < current) {
        var slotsSize = $this.c17_1.length - $this.l17_1 | 0;
        tmp_1 = -((slotsSize - anchor | 0) + 1 | 0) | 0;
      } else {
        tmp_1 = anchor;
      }
      var dataAnchor = tmp_1;
      initGroup($this.b17_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.v17_1, dataAnchor);
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.c17_1;
        var currentSlot = $this.i17_1;
        if (isNode) {
          var tmp3 = currentSlot;
          currentSlot = tmp3 + 1 | 0;
          slots[tmp3] = aux;
        }
        if (hasObjectKey) {
          var tmp4 = currentSlot;
          currentSlot = tmp4 + 1 | 0;
          slots[tmp4] = objectKey;
        }
        if (hasAux) {
          var tmp5 = currentSlot;
          currentSlot = tmp5 + 1 | 0;
          slots[tmp5] = aux;
        }
        $this.i17_1 = currentSlot;
      }
      $this.o17_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.v17_1 = current;
      $this.t17_1 = newCurrent;
      if (previousParent >= 0) {
        var tmp6_safe_receiver = sourceInformationOf($this, previousParent);
        if (tmp6_safe_receiver == null)
          null;
        else {
          tmp6_safe_receiver.n1r($this, current);
        }
      }
      tmp_0 = newCurrent;
    } else {
      $this.p17_1.m15(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.t17_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance().v18_1)) {
        if (isNode) {
          $this.q1r(aux);
        } else {
          $this.p1r(aux);
        }
      }
      $this.i17_1 = slotIndex($this.b17_1, $this, currentGroupAddress);
      $this.j17_1 = dataIndex_0($this.b17_1, $this, groupIndexToAddress($this, $this.t17_1 + 1 | 0));
      $this.o17_1 = nodeCount($this.b17_1, currentGroupAddress);
      $this.v17_1 = currentGroup;
      $this.t17_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.b17_1, currentGroupAddress) | 0;
    }
    tmp.u17_1 = tmp_0;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    return group >= 0 && containsMark($this.b17_1, groupIndexToAddress($this, group));
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 && containsAnyMark($this.b17_1, groupIndexToAddress($this, group));
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.x17_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.recalculateMarks.<anonymous>' call
      while (tmp0_safe_receiver.pz()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.s1r(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.x17_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.x17_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.t1r(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.b17_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.b17_1, groupAddress, containsAnyMarks);
      var parent = $this.e18(group);
      if (parent >= 0) {
        set.t1r(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.d1a(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.b17_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.d1a(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.q17_1.m15((_get_capacity__a9k9f3($this) - $this.h17_1 | 0) - $this.u17_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.h17_1 | 0) - $this.q17_1.w16() | 0;
    $this.u17_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.g17_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.b17_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.b17_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.h17_1;
    var gapStart = $this.g17_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.d17_1.q()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.b17_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, destinationOffset, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          var tmp9 = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, tmp9, endIndex);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.b17_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.b17_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.g17_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.l17_1;
    var gapStart = $this.k17_1;
    var slotsGapOwner = $this.m17_1;
    if (!(gapStart === index)) {
      var slots = $this.c17_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = index + gapLen | 0;
        arrayCopy(slots, slots, destinationOffset, index, gapStart);
      } else {
        var tmp8 = gapStart + gapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, tmp8, endIndex);
      }
    }
    var tmp10 = group + 1 | 0;
    // Inline function 'kotlin.math.min' call
    var b = $this.c1r();
    var newSlotsGapOwner = Math.min(tmp10, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.c17_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.g17_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.b17_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var tmp$ret$3 = 'Unexpected anchor value, expected a positive anchor';
            composeImmediateRuntimeError(tmp$ret$3);
          }
          updateDataAnchor($this.b17_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.h17_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.b17_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var tmp$ret$4 = 'Unexpected anchor value, expected a negative anchor';
            composeImmediateRuntimeError(tmp$ret$4);
          }
          updateDataAnchor($this.b17_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.g17_1)
            updateAddress_0 = updateAddress_0 + $this.h17_1 | 0;
        }
      }
      $this.m17_1 = newSlotsGapOwner;
    }
    $this.k17_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.k17_1;
    var slotsGapEnd = slotsGapStart + $this.l17_1 | 0;
    fill_0($this.c17_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.t17_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.g17_1;
      var gapLen = $this.h17_1;
      var oldCapacity = $this.b17_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.b17_1;
        var tmp0 = imul(oldCapacity, 2);
        // Inline function 'kotlin.math.max' call
        var b = oldSize + size | 0;
        // Inline function 'kotlin.math.max' call
        var a = Math.max(tmp0, b);
        var newCapacity = Math.max(a, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, endIndex);
        var tmp11 = imul(newGapEndAddress, 5);
        var tmp12 = imul(oldGapEndAddress, 5);
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex_0 = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, tmp11, tmp12, endIndex_0);
        $this.b17_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.u17_1;
      if (currentEnd >= gapStart)
        $this.u17_1 = currentEnd + size | 0;
      $this.g17_1 = gapStart + size | 0;
      $this.h17_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.m17_1 < gapStart ? 0 : $this.k17_1, $this.l17_1, $this.c17_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.b17_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.m17_1;
      if (slotsGapOwner >= gapStart) {
        $this.m17_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.i17_1, group);
      var gapStart = $this.k17_1;
      var gapLen = $this.l17_1;
      if (gapLen < size) {
        var slots = $this.c17_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        var tmp0 = imul(oldCapacity, 2);
        // Inline function 'kotlin.math.max' call
        var b = oldSize + size | 0;
        // Inline function 'kotlin.math.max' call
        var a = Math.max(tmp0, b);
        var newCapacity = Math.max(a, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.c17_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.j17_1;
      if (currentDataEnd >= gapStart)
        $this.j17_1 = currentDataEnd + size | 0;
      $this.k17_1 = gapStart + size | 0;
      $this.l17_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.d17_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.q()) {
        anchorsRemoved = removeAnchors($this, start, len, $this.e17_1);
      }
      $this.g17_1 = start;
      var previousGapLen = $this.h17_1;
      var newGapLen = previousGapLen + len | 0;
      $this.h17_1 = newGapLen;
      var slotsGapOwner = $this.m17_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.m17_1 = Math.max(start, b);
      }
      if ($this.u17_1 >= $this.g17_1) {
        $this.u17_1 = $this.u17_1 - len | 0;
      }
      var parent = $this.v17_1;
      if (containsGroupMark($this, parent)) {
        updateContainsMark($this, parent);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function sourceInformationOf($this, group) {
    var tmp0_safe_receiver = $this.e17_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = $this.u1r(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.f2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.l17_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.k17_1 = start;
      $this.l17_1 = gapLen + len | 0;
      fill_0($this.c17_1, null, start, start + len | 0);
      var currentDataEnd = $this.j17_1;
      if (currentDataEnd >= start)
        $this.j17_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(address < $this.b17_1.length && isNode($this.b17_1, address))) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var tmp$ret$0 = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $this.c17_1[dataIndexToDataAddress($this, nodeIndex($this.b17_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.h17_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.d17_1, previousGapStart, size);
      $l$loop_0: while (index < $this.d17_1.j()) {
        var anchor = $this.d17_1.p(index);
        var location = anchor.n1c_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.n1c_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.d17_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.d17_1.j()) {
        var anchor_0 = $this.d17_1.p(index_0);
        var location_0 = anchor_0.n1c_1;
        if (location_0 >= 0) {
          anchor_0.n1c_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size, sourceInformationMap) {
    var gapLen = $this.h17_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.d17_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.d17_1.j() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.d17_1.p(index);
      var location = $this.u1b(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.n1c_1 = -2147483648;
          if (sourceInformationMap == null)
            null;
          else
            sourceInformationMap.w4(anchor);
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var this_0 = removeAnchorStart < removeAnchorEnd;
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (this_0) {
      $this.d17_1.a2(removeAnchorStart, removeAnchorEnd).w1();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.c1r();
    var index = locationOf($this.d17_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.d17_1.j()) {
        var anchor = $this.d17_1.p(index);
        var location = $this.u1b(anchor);
        if (location >= originalLocation && location < end) {
          removedAnchors.e(anchor);
          $this.d17_1.z1(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.p(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.u1b(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.g17_1) {
          item.n1c_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.n1c_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.d17_1, newAnchorIndex, groupsSize);
        $this.d17_1.y1(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.b17_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.g17_1 ? index : index + $this.h17_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.k17_1 ? dataIndex : dataIndex + $this.l17_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.b17_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.c17_1.length - $this.l17_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.l17_1, $this.c17_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.c17_1.length - $this.l17_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.l17_1, $this.c17_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.k17_1, $this.l17_1, $this.c17_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.c1r() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.c1r() + index | 0) - -2 | 0;
  }
  function access$_get_groups__7d4n3r($this) {
    return $this.b17_1;
  }
  function access$_get_slots__7x4q9w($this) {
    return $this.c17_1;
  }
  function access$groupIndexToAddress($this, index) {
    return groupIndexToAddress($this, index);
  }
  function access$dataIndexToDataAddress($this, dataIndex) {
    return dataIndexToDataAddress($this, dataIndex);
  }
  function access$dataIndex($this, $receiver, address) {
    return dataIndex_0($receiver, $this, address);
  }
  function SlotWriter(table) {
    this.a17_1 = table;
    this.b17_1 = this.a17_1.w14_1;
    this.c17_1 = this.a17_1.y14_1;
    this.d17_1 = this.a17_1.e15_1;
    this.e17_1 = this.a17_1.f15_1;
    this.f17_1 = this.a17_1.g15_1;
    this.g17_1 = this.a17_1.x14_1;
    this.h17_1 = (this.b17_1.length / 5 | 0) - this.a17_1.x14_1 | 0;
    this.i17_1 = 0;
    this.j17_1 = 0;
    this.k17_1 = this.a17_1.z14_1;
    this.l17_1 = this.c17_1.length - this.a17_1.z14_1 | 0;
    this.m17_1 = this.a17_1.x14_1;
    this.n17_1 = 0;
    this.o17_1 = 0;
    this.p17_1 = new IntStack();
    this.q17_1 = new IntStack();
    this.r17_1 = new IntStack();
    this.s17_1 = null;
    this.t17_1 = 0;
    this.u17_1 = this.a17_1.x14_1;
    this.v17_1 = -1;
    this.w17_1 = false;
    this.x17_1 = null;
  }
  protoOf(SlotWriter).x1g = function () {
    return this.c17_1.length - this.l17_1 | 0;
  };
  protoOf(SlotWriter).b1g = function () {
    return this.t17_1 < this.u17_1 && isNode(this.b17_1, groupIndexToAddress(this, this.t17_1));
  };
  protoOf(SlotWriter).v1r = function () {
    return !(this.e17_1 == null);
  };
  protoOf(SlotWriter).w1r = function () {
    return !(this.f17_1 == null);
  };
  protoOf(SlotWriter).z1a = function (index) {
    return isNode(this.b17_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).a1b = function (index) {
    return nodeCount(this.b17_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).h18 = function (index) {
    return key(this.b17_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).i18 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.b17_1, address) ? this.c17_1[objectKeyIndex(this.b17_1, address)] : null;
  };
  protoOf(SlotWriter).d1a = function (index) {
    return groupSize(this.b17_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).g18 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.b17_1, address) ? this.c17_1[auxIndex(this.b17_1, this, address)] : Companion_getInstance().v18_1;
  };
  protoOf(SlotWriter).x1r = function (index) {
    return index > this.v17_1 && index < this.u17_1 || (this.v17_1 === 0 && index === 0);
  };
  protoOf(SlotWriter).y1r = function (index) {
    return this.z1r(index, this.t17_1);
  };
  protoOf(SlotWriter).z1r = function (index, group) {
    var tmp;
    if (group === this.v17_1) {
      tmp = this.u17_1;
    } else if (group > this.p17_1.b1s(0)) {
      tmp = group + this.d1a(group) | 0;
    } else {
      var openIndex = this.p17_1.a1s(group);
      tmp = openIndex < 0 ? group + this.d1a(group) | 0 : (_get_capacity__a9k9f3(this) - this.h17_1 | 0) - this.q17_1.y1a(openIndex) | 0;
    }
    var end = tmp;
    return index > group && index < end;
  };
  protoOf(SlotWriter).u1c = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.b17_1, address) ? this.c17_1[dataIndexToDataAddress(this, nodeIndex(this.b17_1, this, address))] : null;
  };
  protoOf(SlotWriter).c1s = function (anchor) {
    return this.u1c(anchor.d1s(this));
  };
  protoOf(SlotWriter).e18 = function (index) {
    return parent(this.b17_1, this, index);
  };
  protoOf(SlotWriter).q18 = function (normalClose) {
    this.w17_1 = true;
    if (normalClose && this.p17_1.q()) {
      moveGroupGapTo(this, this.c1r());
      moveSlotGapTo(this, this.c17_1.length - this.l17_1 | 0, this.g17_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.a17_1.z1q(this, this.b17_1, this.g17_1, this.c17_1, this.k17_1, this.d17_1, this.e17_1, this.f17_1);
  };
  protoOf(SlotWriter).e1s = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.n17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var tmp$ret$0 = 'Cannot reset when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    recalculateMarks(this);
    this.t17_1 = 0;
    this.u17_1 = _get_capacity__a9k9f3(this) - this.h17_1 | 0;
    this.i17_1 = 0;
    this.j17_1 = 0;
    this.o17_1 = 0;
  };
  protoOf(SlotWriter).h1f = function (value) {
    if (this.n17_1 > 0 && !(this.i17_1 === this.k17_1)) {
      var tmp0_elvis_lhs = this.s17_1;
      // Inline function 'kotlin.also' call
      var this_0 = tmp0_elvis_lhs == null ? new MutableIntObjectMap() : tmp0_elvis_lhs;
      // Inline function 'androidx.compose.runtime.SlotWriter.update.<anonymous>' call
      this.s17_1 = this_0;
      // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut' call
      var key = this.v17_1;
      var tmp0_elvis_lhs_0 = this_0.p(key);
      var tmp;
      if (tmp0_elvis_lhs_0 == null) {
        // Inline function 'androidx.compose.runtime.SlotWriter.update.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_1 = new MutableObjectList();
        // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut.<anonymous>' call
        this_0.jw(key, this_1);
        tmp = this_1;
      } else {
        tmp = tmp0_elvis_lhs_0;
      }
      var deferred = tmp;
      deferred.e(value);
      return Companion_getInstance().v18_1;
    }
    return rawUpdate(this, value);
  };
  protoOf(SlotWriter).f1s = function (anchor, value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.n17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.appendSlot.<anonymous>' call
      var tmp$ret$0 = 'Can only append a slot if not current inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var previousCurrentSlot = this.i17_1;
    var previousCurrentSlotEnd = this.j17_1;
    var anchorIndex = this.u1b(anchor);
    var slotIndex = dataIndex_0(this.b17_1, this, groupIndexToAddress(this, anchorIndex + 1 | 0));
    this.i17_1 = slotIndex;
    this.j17_1 = slotIndex;
    insertSlots(this, 1, anchorIndex);
    if (previousCurrentSlot >= slotIndex) {
      previousCurrentSlot = previousCurrentSlot + 1 | 0;
      previousCurrentSlotEnd = previousCurrentSlotEnd + 1 | 0;
    }
    this.c17_1[slotIndex] = value;
    this.i17_1 = previousCurrentSlot;
    this.j17_1 = previousCurrentSlotEnd;
  };
  protoOf(SlotWriter).g1s = function (count) {
    runtimeCheck(count > 0);
    var parent = this.v17_1;
    var groupSlotStart = slotIndex(this.b17_1, this, groupIndexToAddress(this, parent));
    var groupSlotEnd = dataIndex_0(this.b17_1, this, groupIndexToAddress(this, parent + 1 | 0));
    var removeStart = groupSlotEnd - count | 0;
    runtimeCheck(removeStart >= groupSlotStart);
    removeSlots(this, removeStart, count, parent);
    var currentSlot = this.i17_1;
    if (currentSlot >= groupSlotStart) {
      this.i17_1 = currentSlot - count | 0;
    }
  };
  protoOf(SlotWriter).p1r = function (value) {
    var address = groupIndexToAddress(this, this.t17_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!hasAux(this.b17_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var tmp$ret$0 = 'Updating the data of a group that was not created with a data slot';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.c17_1[dataIndexToDataAddress(this, auxIndex(this.b17_1, this, address))] = value;
  };
  protoOf(SlotWriter).l1g = function (sourceInformation) {
    if (this.n17_1 > 0) {
      groupSourceInformationFor(this, this.v17_1, sourceInformation);
    }
  };
  protoOf(SlotWriter).n1g = function (key, value) {
    if (this.n17_1 > 0) {
      var tmp0_safe_receiver = this.f17_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        add_0(tmp0_safe_receiver, key, this.h18(this.v17_1));
      }
      var tmp1_safe_receiver = groupSourceInformationFor(this, this.v17_1, null);
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.h1s(key, value, _get_currentGroupSlotIndex__p1glxf(this));
      }
    }
  };
  protoOf(SlotWriter).p1g = function () {
    if (this.n17_1 > 0) {
      var tmp0_safe_receiver = groupSourceInformationFor(this, this.v17_1, null);
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.i1s(_get_currentGroupSlotIndex__p1glxf(this));
      }
    }
  };
  protoOf(SlotWriter).q1r = function (value) {
    return updateNodeOfGroup(this, this.t17_1, value);
  };
  protoOf(SlotWriter).j1s = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.d1s(this), value);
  };
  protoOf(SlotWriter).m1r = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.i17_1 <= this.j17_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var tmp$ret$0 = 'Writing to an invalid slot';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.c17_1[dataIndexToDataAddress(this, this.i17_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).k1s = function (index, value) {
    return this.l1s(this.t17_1, index, value);
  };
  protoOf(SlotWriter).m1s = function (group, index) {
    var address = groupIndexToAddress(this, group);
    var slotsStart = slotIndex(this.b17_1, this, address);
    var slotsEnd = dataIndex_0(this.b17_1, this, groupIndexToAddress(this, group + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(slotsIndex >= slotsStart && slotsIndex < slotsEnd)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.slotIndexOfGroupSlotIndex.<anonymous>' call
      var tmp$ret$0 = 'Write to an invalid slot index ' + index + ' for group ' + group;
      composeImmediateRuntimeError(tmp$ret$0);
    }
    return slotsIndex;
  };
  protoOf(SlotWriter).l1s = function (group, index, value) {
    var slotsIndex = this.m1s(group, index);
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.c17_1[slotAddress];
    this.c17_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).l1r = function () {
    if (this.n17_1 > 0) {
      insertSlots(this, 1, this.v17_1);
    }
    var tmp = this.c17_1;
    var tmp1 = this.i17_1;
    this.i17_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).j1m = function (anchor, index) {
    return this.n1s(this.u1b(anchor), index);
  };
  protoOf(SlotWriter).n1s = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.b17_1, this, address);
    var slotsEnd = dataIndex_0(this.b17_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance().v18_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.c17_1[slotAddress];
  };
  protoOf(SlotWriter).o1r = function (groupIndex) {
    return slotIndex(this.b17_1, this, groupIndexToAddress(this, groupIndex));
  };
  protoOf(SlotWriter).o1s = function (groupIndex) {
    return dataIndex_0(this.b17_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
  };
  protoOf(SlotWriter).z1g = function (groupIndex) {
    return dataIndex_0(this.b17_1, this, groupIndexToAddress(this, groupIndex + this.d1a(groupIndex) | 0));
  };
  protoOf(SlotWriter).k1r = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$0 = 'Cannot seek backwards';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.n17_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$1 = 'Cannot call seek() while inserting';
      throwIllegalStateException(tmp$ret$1);
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.t17_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= this.v17_1 && index <= this.u17_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$2 = 'Cannot seek outside the current group (' + this.v17_1 + '-' + this.u17_1 + ')';
      composeImmediateRuntimeError(tmp$ret$2);
    }
    this.t17_1 = index;
    var newSlot = dataIndex_0(this.b17_1, this, groupIndexToAddress(this, index));
    this.i17_1 = newSlot;
    this.j17_1 = newSlot;
  };
  protoOf(SlotWriter).m18 = function () {
    var newGroup = this.u17_1;
    this.t17_1 = newGroup;
    this.i17_1 = dataIndex_0(this.b17_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).m19 = function () {
    var tmp1 = this.n17_1;
    this.n17_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).s1a = function () {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.n17_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var tmp$ret$0 = 'Unbalanced begin/end insert';
      throwIllegalStateException(tmp$ret$0);
    }
    this.n17_1 = this.n17_1 - 1 | 0;
    if (this.n17_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.r17_1.j() === this.p17_1.j())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var tmp$ret$1 = 'startGroup/endGroup mismatch while inserting';
        composeImmediateRuntimeError(tmp$ret$1);
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).t18 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.n17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var tmp$ret$0 = 'Key must be supplied when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    startGroup_1(this, 0, Companion_getInstance().v18_1, false, Companion_getInstance().v18_1);
  };
  protoOf(SlotWriter).x18 = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance().v18_1);
  };
  protoOf(SlotWriter).z18 = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance().v18_1);
  };
  protoOf(SlotWriter).y18 = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).r1a = function () {
    var inserting = this.n17_1 > 0;
    var currentGroup = this.t17_1;
    var currentGroupEnd = this.u17_1;
    var groupIndex = this.v17_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.o17_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.b17_1, groupAddress);
    if (inserting) {
      var deferredSlotWrites = this.s17_1;
      var tmp1_safe_receiver = deferredSlotWrites == null ? null : deferredSlotWrites.p(groupIndex);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        // Inline function 'androidx.collection.ObjectList.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var content = tmp1_safe_receiver.lx_1;
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.mx_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp = content[i];
            // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>.<anonymous>' call
            var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
            rawUpdate(this, value);
          }
           while (inductionVariable < last);
        deferredSlotWrites.kw(groupIndex);
      }
      updateGroupSize(this.b17_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.b17_1, groupAddress, newNodes);
      this.o17_1 = this.r17_1.w16() + (isNode_0 ? 1 : newNodes) | 0;
      this.v17_1 = parent(this.b17_1, this, groupIndex);
      var nextAddress = this.v17_1 < 0 ? this.c1r() : groupIndexToAddress(this, this.v17_1 + 1 | 0);
      var newCurrentSlot = nextAddress < 0 ? 0 : dataIndex_0(this.b17_1, this, nextAddress);
      this.i17_1 = newCurrentSlot;
      this.j17_1 = newCurrentSlot;
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var tmp$ret$2 = 'Expected to be at the end of a group';
        composeImmediateRuntimeError(tmp$ret$2);
      }
      var oldGroupSize = groupSize(this.b17_1, groupAddress);
      var oldNodes = nodeCount(this.b17_1, groupAddress);
      updateGroupSize(this.b17_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.b17_1, groupAddress, newNodes);
      var newParent = this.p17_1.w16();
      restoreCurrentGroupEnd(this);
      this.v17_1 = newParent;
      var groupParent = parent(this.b17_1, this, groupIndex);
      this.o17_1 = this.r17_1.w16();
      if (groupParent === newParent) {
        this.o17_1 = this.o17_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) || !(nodesDelta === 0)) {
          var current = groupParent;
          while (!(current === 0) && !(current === newParent) && (!(nodesDelta === 0) || !(groupSizeDelta === 0))) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.b17_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.b17_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.b17_1, currentAddress, nodeCount(this.b17_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.b17_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.b17_1, this, current);
          }
        }
        this.o17_1 = this.o17_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).p1s = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.n17_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var tmp$ret$0 = 'Cannot call ensureStarted() while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var parent = this.v17_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(index >= parent && index < this.u17_1)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var tmp$ret$1 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeImmediateRuntimeError(tmp$ret$1);
      }
      var oldCurrent = this.t17_1;
      var oldCurrentSlot = this.i17_1;
      var oldCurrentSlotEnd = this.j17_1;
      this.t17_1 = index;
      this.t18();
      this.t17_1 = oldCurrent;
      this.i17_1 = oldCurrentSlot;
      this.j17_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).q1s = function (anchor) {
    return this.p1s(anchor.d1s(this));
  };
  protoOf(SlotWriter).b18 = function () {
    var groupAddress = groupIndexToAddress(this, this.t17_1);
    var newGroup = this.t17_1 + groupSize(this.b17_1, groupAddress) | 0;
    this.t17_1 = newGroup;
    this.i17_1 = dataIndex_0(this.b17_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.b17_1, groupAddress) ? 1 : nodeCount(this.b17_1, groupAddress);
  };
  protoOf(SlotWriter).d1h = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.n17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot remove group while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var oldGroup = this.t17_1;
    var oldSlot = this.i17_1;
    var dataStart = dataIndex_0(this.b17_1, this, groupIndexToAddress(this, oldGroup));
    var count = this.b18();
    var tmp0_safe_receiver = sourceInformationOf(this, this.v17_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp0_safe_receiver_0 = this.u1r(oldGroup);
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>.<anonymous>' call
        tmp = tmp0_safe_receiver.r1s(tmp0_safe_receiver_0);
      }
    }
    var tmp1_safe_receiver = this.x17_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      while (tmp1_safe_receiver.pz() && tmp1_safe_receiver.p1e() >= oldGroup) {
        tmp1_safe_receiver.s1r();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.t17_1 - oldGroup | 0);
    removeSlots(this, dataStart, this.i17_1 - dataStart | 0, oldGroup - 1 | 0);
    this.t17_1 = oldGroup;
    this.i17_1 = oldSlot;
    this.o17_1 = this.o17_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).s1s = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.n17_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot move a group while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$1 = 'Parameter offset is out of bounds';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    if (offset === 0)
      return Unit_instance;
    var current = this.t17_1;
    var parent = this.v17_1;
    var parentEnd = this.u17_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.b17_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var tmp$ret$2 = 'Parameter offset is out of bounds';
        composeImmediateRuntimeError(tmp$ret$2);
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.b17_1, groupIndexToAddress(this, groupToMove));
    var destinationSlot = dataIndex_0(this.b17_1, this, groupIndexToAddress(this, this.t17_1));
    var dataStart = dataIndex_0(this.b17_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.b17_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.t17_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.b17_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    var tmp7 = imul(currentAddress, 5);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, tmp7, moveLocationOffset, endIndex);
    if (moveDataLen > 0) {
      var slots = this.c17_1;
      var tmp13 = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, destinationSlot, tmp13, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - destinationSlot | 0;
    var slotsGapStart = this.k17_1;
    var slotsGapLen = this.l17_1;
    var slotsCapacity = this.c17_1.length;
    var slotsGapOwner = this.m17_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$10 = 'Unexpectedly removed anchors';
      composeImmediateRuntimeError(tmp$ret$10);
    }
    fixParentAnchorsFor(this, parent, this.u17_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).t1s = function (anchor, offset, writer) {
    runtimeCheck(writer.n17_1 > 0);
    runtimeCheck(this.n17_1 === 0);
    runtimeCheck(anchor.a1h());
    var location = this.u1b(anchor) + offset | 0;
    var currentGroup = this.t17_1;
    runtimeCheck(currentGroup <= location ? location < this.u17_1 : false);
    var parent = this.e18(location);
    var size = this.d1a(location);
    var nodes = this.z1a(location) ? 1 : this.a1b(location);
    var result = moveGroup$default(Companion_instance_4, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.b17_1, currentAddress, groupSize(this.b17_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.b17_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.b17_1, currentAddress, nodeCount(this.b17_1, currentAddress) - nodes | 0);
        }
      }
      current = this.e18(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.o17_1 >= nodes);
      this.o17_1 = this.o17_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).u1s = function (table, index, removeSourceGroup) {
    runtimeCheck(this.n17_1 > 0);
    if (index === 0 && this.t17_1 === 0 && this.a17_1.x14_1 === 0 && groupSize(table.w14_1, index) === table.x14_1) {
      var myGroups = this.b17_1;
      var mySlots = this.c17_1;
      var myAnchors = this.d17_1;
      var mySourceInformation = this.e17_1;
      var myCallInformation = this.f17_1;
      var groups = table.w14_1;
      var groupsSize = table.x14_1;
      var slots = table.y14_1;
      var slotsSize = table.z14_1;
      var sourceInformation = table.f15_1;
      var callInformation = table.g15_1;
      this.b17_1 = groups;
      this.c17_1 = slots;
      this.d17_1 = table.e15_1;
      this.g17_1 = groupsSize;
      this.h17_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.k17_1 = slotsSize;
      this.l17_1 = slots.length - slotsSize | 0;
      this.m17_1 = groupsSize;
      this.e17_1 = sourceInformation;
      this.f17_1 = callInformation;
      table.a1r(myGroups, 0, mySlots, 0, myAnchors, mySourceInformation, myCallInformation);
      return this.d17_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.l18();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = moveGroup(Companion_instance_4, writer, index, this, true, true, removeSourceGroup);
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = this_0;
    }finally {
      writer.q18(normalClose);
    }
    return tmp;
  };
  protoOf(SlotWriter).v1s = function (offset, table, index) {
    runtimeCheck(this.n17_1 <= 0 && this.d1a(this.t17_1 + offset | 0) === 1);
    var previousCurrentGroup = this.t17_1;
    var previousCurrentSlot = this.i17_1;
    var previousCurrentSlotEnd = this.j17_1;
    this.k1r(offset);
    this.t18();
    this.m19();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.l18();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = moveGroup$default(Companion_instance_4, writer, index, this, false, true);
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = this_0;
    }finally {
      writer.q18(normalClose);
    }
    var anchors = tmp;
    this.s1a();
    this.r1a();
    this.t17_1 = previousCurrentGroup;
    this.i17_1 = previousCurrentSlot;
    this.j17_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).f18 = function (index) {
    var tmp0 = this.d17_1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var effectiveSize = this.c1r();
    var location = search(tmp0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.g17_1 ? index : -(this.c1r() - index | 0) | 0);
      tmp0.y1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0.p(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).w1s = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.b17_1, groupAddress)) {
      updateMark(this.b17_1, groupAddress, true);
      if (!containsMark(this.b17_1, groupAddress)) {
        updateContainsMark(this, this.e18(group));
      }
    }
  };
  protoOf(SlotWriter).j1b = function (group, $super) {
    group = group === VOID ? this.v17_1 : group;
    var tmp;
    if ($super === VOID) {
      this.w1s(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.w1s.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).u1b = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.n1c_1;
    return it < 0 ? this.c1r() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.t17_1 + ' end=' + this.u17_1 + ' size = ' + this.c1r() + ' ' + ('gap=' + this.g17_1 + '-' + (this.g17_1 + this.h17_1 | 0) + ')');
  };
  protoOf(SlotWriter).u1r = function (group) {
    return (0 <= group ? group < this.c1r() : false) ? find(this.d17_1, group, this.c1r()) : null;
  };
  protoOf(SlotWriter).c1r = function () {
    return _get_capacity__a9k9f3(this) - this.h17_1 | 0;
  };
  function Anchor(loc) {
    this.n1c_1 = loc;
  }
  protoOf(Anchor).a1h = function () {
    return !(this.n1c_1 === -2147483648);
  };
  protoOf(Anchor).a1g = function (slots) {
    return slots.u1b(this);
  };
  protoOf(Anchor).d1s = function (writer) {
    return writer.u1b(this);
  };
  protoOf(Anchor).toString = function () {
    return anyToString(this) + '{ location = ' + this.n1c_1 + ' }';
  };
  function openInformation($this) {
    var tmp0_safe_receiver = $this.g1r_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.fastLastOrNull' call
        var index = tmp0_safe_receiver.j() - 1 | 0;
        while (index >= 0) {
          var value = tmp0_safe_receiver.p(index);
          // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>.<anonymous>' call
          var tmp_0;
          if (value instanceof GroupSourceInformation) {
            tmp_0 = !value.h1r_1;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$1 = value;
            break $l$block;
          }
          index = index - 1 | 0;
        }
        tmp$ret$1 = null;
      }
      tmp = tmp$ret$1;
    }
    var tmp_1 = tmp;
    var tmp1_safe_receiver = tmp_1 instanceof GroupSourceInformation ? tmp_1 : null;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : openInformation(tmp1_safe_receiver);
    return tmp2_elvis_lhs == null ? $this : tmp2_elvis_lhs;
  }
  function add($this, group) {
    var tmp0_elvis_lhs = $this.g1r_1;
    var groups = tmp0_elvis_lhs == null ? ArrayList_init_$Create$() : tmp0_elvis_lhs;
    $this.g1r_1 = groups;
    groups.e(group);
  }
  function hasAnchor($this, anchor) {
    var tmp0_safe_receiver = $this.g1r_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.p(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.hasAnchor.<anonymous>' call
            var tmp_0;
            if (equals(item, anchor)) {
              tmp_0 = true;
            } else {
              var tmp_1;
              if (item instanceof GroupSourceInformation) {
                tmp_1 = hasAnchor(item, anchor);
              } else {
                tmp_1 = false;
              }
              tmp_0 = tmp_1;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    return tmp === true;
  }
  function GroupSourceInformation(key, sourceInformation, dataStartOffset) {
    this.d1r_1 = key;
    this.e1r_1 = sourceInformation;
    this.f1r_1 = dataStartOffset;
    this.g1r_1 = null;
    this.h1r_1 = false;
    this.i1r_1 = 0;
  }
  protoOf(GroupSourceInformation).h1s = function (key, sourceInformation, dataOffset) {
    add(openInformation(this), new GroupSourceInformation(key, sourceInformation, dataOffset));
  };
  protoOf(GroupSourceInformation).i1s = function (dataOffset) {
    openInformation(this).x1s(dataOffset);
  };
  protoOf(GroupSourceInformation).n1r = function (writer, group) {
    add(openInformation(this), writer.f18(group));
  };
  protoOf(GroupSourceInformation).y1s = function (table, group) {
    add(openInformation(this), table.f18(group));
  };
  protoOf(GroupSourceInformation).j1r = function (writer, predecessor, group) {
    var tmp0_elvis_lhs = this.g1r_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
      this.g1r_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var groups = tmp;
    var tmp_0;
    if (predecessor >= 0) {
      var anchor = writer.u1r(predecessor);
      var tmp_1;
      if (!(anchor == null)) {
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.compose.runtime.fastIndexOf' call
          var index = 0;
          var size = groups.j();
          while (index < size) {
            var value = groups.p(index);
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
            var tmp_2;
            if (equals(value, anchor)) {
              tmp_2 = true;
            } else {
              var tmp_3;
              if (value instanceof GroupSourceInformation) {
                tmp_3 = hasAnchor(value, anchor);
              } else {
                tmp_3 = false;
              }
              tmp_2 = tmp_3;
            }
            if (tmp_2) {
              tmp$ret$2 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$2 = -1;
        }
        tmp_1 = tmp$ret$2;
      } else {
        tmp_1 = 0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = 0;
    }
    var index_0 = tmp_0;
    groups.y1(index_0, writer.f18(group));
  };
  protoOf(GroupSourceInformation).x1s = function (dataOffset) {
    this.h1r_1 = true;
    this.i1r_1 = dataOffset;
  };
  protoOf(GroupSourceInformation).r1s = function (anchor) {
    var groups = this.g1r_1;
    if (!(groups == null)) {
      var index = groups.j() - 1 | 0;
      while (index >= 0) {
        var item = groups.p(index);
        if (item instanceof Anchor) {
          if (equals(item, anchor)) {
            groups.z1(index);
          }
        } else {
          if (item instanceof GroupSourceInformation)
            if (!item.r1s(anchor)) {
              groups.z1(index);
            }
        }
        index = index - 1 | 0;
      }
      if (groups.q()) {
        this.g1r_1 = null;
        return false;
      }
      return true;
    }
    return true;
  };
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.j16_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().v18_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.j16_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().v18_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.j16_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.g16_1 = table;
    this.h16_1 = this.g16_1.w14_1;
    this.i16_1 = this.g16_1.x14_1;
    this.j16_1 = this.g16_1.y14_1;
    this.k16_1 = this.g16_1.z14_1;
    this.l16_1 = null;
    this.m16_1 = false;
    this.n16_1 = 0;
    this.o16_1 = this.i16_1;
    this.p16_1 = -1;
    this.q16_1 = new IntStack();
    this.r16_1 = 0;
    this.s16_1 = 0;
    this.t16_1 = 0;
    this.u16_1 = false;
  }
  protoOf(SlotReader).j = function () {
    return this.i16_1;
  };
  protoOf(SlotReader).e18 = function (index) {
    return parentAnchor(this.h16_1, index);
  };
  protoOf(SlotReader).b1g = function () {
    return isNode(this.h16_1, this.n16_1);
  };
  protoOf(SlotReader).z1a = function (index) {
    return isNode(this.h16_1, index);
  };
  protoOf(SlotReader).a1b = function (index) {
    return nodeCount(this.h16_1, index);
  };
  protoOf(SlotReader).u1c = function (index) {
    return isNode(this.h16_1, index) ? node(this.h16_1, this, index) : null;
  };
  protoOf(SlotReader).j1a = function () {
    return this.u1a() || this.n16_1 === this.o16_1;
  };
  protoOf(SlotReader).u1a = function () {
    return this.r16_1 > 0;
  };
  protoOf(SlotReader).z1s = function () {
    return groupSize(this.h16_1, this.n16_1);
  };
  protoOf(SlotReader).d1a = function (index) {
    return groupSize(this.h16_1, index);
  };
  protoOf(SlotReader).i1a = function () {
    return this.o16_1;
  };
  protoOf(SlotReader).i19 = function () {
    var tmp;
    if (this.n16_1 < this.o16_1) {
      tmp = key(this.h16_1, this.n16_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).h18 = function (index) {
    return key(this.h16_1, index);
  };
  protoOf(SlotReader).d1f = function () {
    return this.s16_1 - slotAnchor(this.h16_1, this.p16_1) | 0;
  };
  protoOf(SlotReader).b1b = function (index) {
    return hasObjectKey(this.h16_1, index);
  };
  protoOf(SlotReader).e1e = function () {
    return this.n16_1 < this.o16_1 && hasObjectKey(this.h16_1, this.n16_1);
  };
  protoOf(SlotReader).k19 = function () {
    return this.n16_1 < this.o16_1 ? objectKey(this.h16_1, this, this.n16_1) : null;
  };
  protoOf(SlotReader).i18 = function (index) {
    return objectKey(this.h16_1, this, index);
  };
  protoOf(SlotReader).s18 = function () {
    return this.n16_1 < this.o16_1 ? aux(this.h16_1, this, this.n16_1) : 0;
  };
  protoOf(SlotReader).g18 = function (index) {
    return aux(this.h16_1, this, index);
  };
  protoOf(SlotReader).s1d = function (index) {
    return hasMark(this.h16_1, index);
  };
  protoOf(SlotReader).c1d = function (index) {
    return containsMark(this.h16_1, index);
  };
  protoOf(SlotReader).d1b = function () {
    return this.p16_1 >= 0 ? nodeCount(this.h16_1, this.p16_1) : 0;
  };
  protoOf(SlotReader).l1a = function () {
    return this.t16_1 - this.s16_1 | 0;
  };
  protoOf(SlotReader).d1d = function (group, index) {
    var start = slotAnchor(this.h16_1, group);
    var next = group + 1 | 0;
    var end = next < this.i16_1 ? dataAnchor(this.h16_1, next) : this.k16_1;
    var address = start + index | 0;
    return address < end ? this.j16_1[address] : Companion_getInstance().v18_1;
  };
  protoOf(SlotReader).i = function () {
    if (this.r16_1 > 0 || this.s16_1 >= this.t16_1) {
      this.u16_1 = false;
      return Companion_getInstance().v18_1;
    }
    this.u16_1 = true;
    var tmp1 = this.s16_1;
    this.s16_1 = tmp1 + 1 | 0;
    return this.j16_1[tmp1];
  };
  protoOf(SlotReader).w18 = function () {
    this.r16_1 = this.r16_1 + 1 | 0;
  };
  protoOf(SlotReader).q1a = function () {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.r16_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var tmp$ret$0 = 'Unbalanced begin/end empty';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.r16_1 = this.r16_1 - 1 | 0;
  };
  protoOf(SlotReader).v16 = function () {
    this.m16_1 = true;
    this.g16_1.y1q(this, this.l16_1);
  };
  protoOf(SlotReader).t18 = function () {
    if (this.r16_1 <= 0) {
      var parent = this.p16_1;
      var currentGroup = this.n16_1;
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.h16_1, currentGroup) === parent)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var tmp$ret$0 = 'Invalid slot table detected';
        throwIllegalArgumentException(tmp$ret$0);
      }
      var tmp0_safe_receiver = this.l16_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f2(this.f18(parent));
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.y1s(this.g16_1, currentGroup);
      }
      var currentSlotStack = this.q16_1;
      var currentSlot = this.s16_1;
      var currentEndSlot = this.t16_1;
      if (currentSlot === 0 && currentEndSlot === 0) {
        currentSlotStack.m15(-1);
      } else {
        currentSlotStack.m15(currentSlot);
      }
      this.p16_1 = currentGroup;
      this.o16_1 = currentGroup + groupSize(this.h16_1, currentGroup) | 0;
      this.n16_1 = currentGroup + 1 | 0;
      this.s16_1 = slotAnchor(this.h16_1, currentGroup);
      this.t16_1 = currentGroup >= (this.i16_1 - 1 | 0) ? this.k16_1 : dataAnchor(this.h16_1, currentGroup + 1 | 0);
    }
  };
  protoOf(SlotReader).u18 = function () {
    if (this.r16_1 <= 0) {
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.h16_1, this.n16_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var tmp$ret$0 = 'Expected a node group';
        throwIllegalArgumentException(tmp$ret$0);
      }
      this.t18();
    }
  };
  protoOf(SlotReader).b18 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.r16_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot skip while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var count = isNode(this.h16_1, this.n16_1) ? 1 : nodeCount(this.h16_1, this.n16_1);
    this.n16_1 = this.n16_1 + groupSize(this.h16_1, this.n16_1) | 0;
    return count;
  };
  protoOf(SlotReader).m18 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.r16_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var tmp$ret$0 = 'Cannot skip the enclosing group while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.n16_1 = this.o16_1;
    this.s16_1 = 0;
    this.t16_1 = 0;
  };
  protoOf(SlotReader).w19 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.r16_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var tmp$ret$0 = 'Cannot reposition while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.n16_1 = index;
    var parent = index < this.i16_1 ? parentAnchor(this.h16_1, index) : -1;
    this.p16_1 = parent;
    if (parent < 0)
      this.o16_1 = this.i16_1;
    else
      this.o16_1 = parent + groupSize(this.h16_1, parent) | 0;
    this.s16_1 = 0;
    this.t16_1 = 0;
  };
  protoOf(SlotReader).x1a = function (index) {
    var newCurrentEnd = index + groupSize(this.h16_1, index) | 0;
    var current = this.n16_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(current >= index && current <= newCurrentEnd)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var tmp$ret$0 = 'Index ' + index + ' is not a parent of ' + current;
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.p16_1 = index;
    this.o16_1 = newCurrentEnd;
    this.s16_1 = 0;
    this.t16_1 = 0;
  };
  protoOf(SlotReader).o1a = function () {
    if (this.r16_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.n16_1 === this.o16_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var tmp$ret$0 = 'endGroup() not called at the end of a group';
        composeImmediateRuntimeError(tmp$ret$0);
      }
      var parent = parentAnchor(this.h16_1, this.p16_1);
      this.p16_1 = parent;
      this.o16_1 = parent < 0 ? this.i16_1 : parent + groupSize(this.h16_1, parent) | 0;
      var currentSlotStack = this.q16_1;
      var newCurrentSlot = currentSlotStack.w16();
      if (newCurrentSlot < 0) {
        this.s16_1 = 0;
        this.t16_1 = 0;
      } else {
        this.s16_1 = newCurrentSlot;
        this.t16_1 = parent >= (this.i16_1 - 1 | 0) ? this.k16_1 : dataAnchor(this.h16_1, parent + 1 | 0);
      }
    }
  };
  protoOf(SlotReader).j19 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.r16_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.n16_1;
    while (childIndex < this.o16_1) {
      var tmp = key(this.h16_1, childIndex);
      var tmp_0 = objectKey(this.h16_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.h16_1, childIndex) ? 1 : nodeCount(this.h16_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.e(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.h16_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.n16_1 + ', key=' + this.i19() + ', ' + ('parent=' + this.p16_1 + ', end=' + this.o16_1 + ')');
  };
  protoOf(SlotReader).f18 = function (index) {
    var tmp0 = this.g16_1.e15_1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var effectiveSize = this.i16_1;
    var location = search(tmp0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      tmp0.y1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0.p(location);
    }
    return tmp;
  };
  function find(_this__u8e3s4, index, effectiveSize) {
    var location = search(_this__u8e3s4, index, effectiveSize);
    return location >= 0 ? _this__u8e3s4.p(location) : null;
  }
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.j() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.p(mid).n1c_1;
      var midVal = it < 0 ? effectiveSize + it | 0 : it;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 28) | 0;
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 30) | 0;
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    var slot = imul(address, 5);
    return slot >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.a1t_1.d15_1 === $this.d1t_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.a1t_1 = table;
    this.b1t_1 = end;
    this.c1t_1 = start;
    this.d1t_1 = this.a1t_1.d15_1;
    if (this.a1t_1.c15_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).h = function () {
    return this.c1t_1 < this.b1t_1;
  };
  protoOf(GroupIterator).i = function () {
    validateRead(this);
    var group = this.c1t_1;
    this.c1t_1 = this.c1t_1 + groupSize(this.a1t_1.w14_1, group) | 0;
    return new SlotTableGroup(this.a1t_1, group, this.d1t_1);
  };
  function validateRead_0($this) {
    if (!($this.e1t_1.d15_1 === $this.g1t_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.d15_1 : version;
    this.e1t_1 = table;
    this.f1t_1 = group;
    this.g1t_1 = version;
  }
  protoOf(SlotTableGroup).g = function () {
    validateRead_0(this);
    var tmp0_safe_receiver = this.e1t_1.b1r(this.f1t_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTableGroup.iterator.<anonymous>' call
      tmp = new SourceInformationGroupIterator(this.e1t_1, this.f1t_1, tmp0_safe_receiver, new AnchoredGroupPath(this.f1t_1));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new GroupIterator(this.e1t_1, this.f1t_1 + 1 | 0, this.f1t_1 + groupSize(this.e1t_1.w14_1, this.f1t_1) | 0) : tmp1_elvis_lhs;
  };
  function add_0(_this__u8e3s4, key, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.p(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableIntSet();
      // Inline function 'androidx.compose.runtime.add.<anonymous>' call
      _this__u8e3s4.jw(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.vv(value);
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 && value < 67108863);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.r1r_1 = list;
  }
  protoOf(PrioritySet).t1r = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.r1r_1.q()) {
      tmp = this.r1r_1.p(0) === value || this.r1r_1.p(this.r1r_1.j() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.r1r_1.j();
    this.r1r_1.e(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.r1r_1.p(parent);
      if (value > parentValue) {
        this.r1r_1.x1(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.r1r_1.x1(index, value);
  };
  protoOf(PrioritySet).pz = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.r1r_1.q();
  };
  protoOf(PrioritySet).p1e = function () {
    return first(this.r1r_1);
  };
  protoOf(PrioritySet).s1r = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.r1r_1.j() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var tmp$ret$0 = 'Set is empty';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var value = this.r1r_1.p(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.r1r_1.q()) {
        tmp = this.r1r_1.p(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.r1r_1.x1(0, last(this.r1r_1));
      this.r1r_1.z1(this.r1r_1.j() - 1 | 0);
      var index = 0;
      var size = this.r1r_1.j();
      var max = this.r1r_1.j() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.r1r_1.p(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.r1r_1.p(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.r1r_1.p(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.r1r_1.x1(index, rightValue);
              this.r1r_1.x1(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.r1r_1.x1(index, leftValue);
          this.r1r_1.x1(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    var it = search(_this__u8e3s4, index, effectiveSize);
    return it >= 0 ? it : -(it + 1 | 0) | 0;
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.n19_1 = key;
    this.o19_1 = objectKey;
    this.p19_1 = location;
    this.q19_1 = nodes;
    this.r19_1 = index;
  }
  function SourceInformationGroupIterator(table, parent, group, path) {
    this.h1t_1 = table;
    this.i1t_1 = parent;
    this.j1t_1 = group;
    this.k1t_1 = path;
    this.l1t_1 = this.h1t_1.d15_1;
    this.m1t_1 = 0;
  }
  protoOf(SourceInformationGroupIterator).h = function () {
    var tmp0_safe_receiver = this.j1t_1.g1r_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SourceInformationGroupIterator.hasNext.<anonymous>' call
      tmp = this.m1t_1 < tmp0_safe_receiver.j();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(SourceInformationGroupIterator).i = function () {
    var tmp2_safe_receiver = this.j1t_1.g1r_1;
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp1 = this.m1t_1;
      this.m1t_1 = tmp1 + 1 | 0;
      tmp = tmp2_safe_receiver.p(tmp1);
    }
    var group = tmp;
    var tmp_0;
    if (group instanceof Anchor) {
      tmp_0 = new SlotTableGroup(this.h1t_1, group.n1c_1, this.l1t_1);
    } else {
      if (group instanceof GroupSourceInformation) {
        tmp_0 = new SourceInformationSlotTableGroup(this.h1t_1, this.i1t_1, group, new RelativeGroupPath(this.k1t_1, this.m1t_1 - 1 | 0));
      } else {
        composeRuntimeError('Unexpected group information structure');
      }
    }
    return tmp_0;
  };
  function AnchoredGroupPath(group) {
    SourceInformationGroupPath.call(this);
    this.n1t_1 = group;
  }
  function SourceInformationGroupPath() {
  }
  function SourceInformationSlotTableGroup(table, parent, sourceInformation, identityPath) {
    this.o1t_1 = table;
    this.p1t_1 = parent;
    this.q1t_1 = sourceInformation;
    this.r1t_1 = identityPath;
    this.s1t_1 = this.q1t_1.d1r_1;
    this.t1t_1 = this;
  }
  protoOf(SourceInformationSlotTableGroup).g = function () {
    return new SourceInformationGroupIterator(this.o1t_1, this.p1t_1, this.q1t_1, this.r1t_1);
  };
  function RelativeGroupPath(parent, index) {
    SourceInformationGroupPath.call(this);
    this.u1t_1 = parent;
    this.v1t_1 = index;
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).x1t = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).h1m = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.x1t(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.a1u_1 = myValue;
  }
  protoOf(StateStateRecord).b1u = function (value) {
    var tmp = this;
    tmp.a1u_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).a1u_1;
  };
  protoOf(StateStateRecord).c1u = function () {
    return new StateStateRecord(this.a1u_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    StateObjectImpl.call(this);
    this.e1u_1 = policy;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new StateStateRecord(value);
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.next.<anonymous>' call
    if (Companion_instance_12.i1u()) {
      var tmp_0 = this_0;
      // Inline function 'kotlin.also' call
      var this_1 = new StateStateRecord(value);
      // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.next.<anonymous>.<anonymous>' call
      this_1.g1u_1 = 1;
      tmp_0.h1u_1 = this_1;
    }
    tmp.f1u_1 = this_0;
  }
  protoOf(SnapshotMutableStateImpl).v1l = function () {
    return this.e1u_1;
  };
  protoOf(SnapshotMutableStateImpl).ts = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.f1u_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.<set-value>.<anonymous>' call
    var it = current(this_0);
    if (!this.v1l().h1m(it.a1u_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.f1u_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_12.j11();
      overwritableRecord(this_1, this, snapshot, it).a1u_1 = value;
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
    }
    return Unit_instance;
  };
  protoOf(SnapshotMutableStateImpl).c2 = function () {
    return readable_0(this.f1u_1, this).a1u_1;
  };
  protoOf(SnapshotMutableStateImpl).j1u = function () {
    return this.f1u_1;
  };
  protoOf(SnapshotMutableStateImpl).k1u = function (value) {
    var tmp = this;
    tmp.f1u_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).l1u = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.v1l().h1m(currentRecord.a1u_1, appliedRecord.a1u_1)) {
      tmp = current;
    } else {
      var merged = this.v1l().w1t(previousRecord.a1u_1, currentRecord.a1u_1, appliedRecord.a1u_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.c1u();
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).a1u_1 = merged;
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.f1u_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    var it = current(this_0);
    return 'MutableState(value=' + toString_0(it.a1u_1) + ')@' + hashCode(this);
  };
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function SnapshotThreadLocal() {
    this.w1l_1 = new AtomicReference(get_emptyThreadMap());
    this.x1l_1 = new Object();
  }
  protoOf(SnapshotThreadLocal).co = function () {
    var tmp = this.w1l_1.co().p1u(currentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).y1l = function (value) {
    var key = currentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.x1l_1;
    // Inline function 'androidx.compose.runtime.SnapshotThreadLocal.set.<anonymous>' call
    var current = this.w1l_1.co();
    if (current.q1u(key, value))
      return Unit_instance;
    this.w1l_1.y1k(current.r1u(key, value));
  };
  function IntStack() {
    this.k15_1 = new Int32Array(10);
    this.l15_1 = 0;
  }
  protoOf(IntStack).j = function () {
    return this.l15_1;
  };
  protoOf(IntStack).m15 = function (value) {
    if (this.l15_1 >= this.k15_1.length) {
      this.k15_1 = copyOf(this.k15_1, imul(this.k15_1.length, 2));
    }
    var tmp = this.k15_1;
    var tmp1 = this.l15_1;
    this.l15_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).w16 = function () {
    var tmp = this.k15_1;
    this.l15_1 = this.l15_1 - 1 | 0;
    return tmp[this.l15_1];
  };
  protoOf(IntStack).b1s = function (default_0) {
    return this.l15_1 > 0 ? this.p1e() : default_0;
  };
  protoOf(IntStack).p1e = function () {
    return this.k15_1[this.l15_1 - 1 | 0];
  };
  protoOf(IntStack).z19 = function () {
    return this.k15_1[this.l15_1 - 2 | 0];
  };
  protoOf(IntStack).y1a = function (index) {
    return this.k15_1[index];
  };
  protoOf(IntStack).q = function () {
    return this.l15_1 === 0;
  };
  protoOf(IntStack).w1 = function () {
    this.l15_1 = 0;
  };
  protoOf(IntStack).a1s = function (value) {
    var inductionVariable = 0;
    var last = this.l15_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.k15_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.x16_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).j = function () {
    return this.x16_1.j();
  };
  protoOf(Stack).y19 = function (value) {
    return this.x16_1.e(value);
  };
  protoOf(Stack).w16 = function () {
    return this.x16_1.z1(this.j() - 1 | 0);
  };
  protoOf(Stack).p1e = function () {
    return this.x16_1.p(this.j() - 1 | 0);
  };
  protoOf(Stack).y1a = function (index) {
    return this.x16_1.p(index);
  };
  protoOf(Stack).q = function () {
    return this.x16_1.q();
  };
  protoOf(Stack).pz = function () {
    return !this.q();
  };
  protoOf(Stack).w1 = function () {
    return this.x16_1.w1();
  };
  protoOf(Stack).e5 = function () {
    var tmp = 0;
    var tmp_0 = this.x16_1.j();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.x16_1.p(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function ValueHolder() {
  }
  function _get_current__qcrdxk($this) {
    var tmp0 = $this.s1u_1;
    // Inline function 'kotlin.getValue' call
    current$factory();
    return tmp0.c2();
  }
  function LazyValueHolder(valueProducer) {
    this.s1u_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).u1l = function (map) {
    return _get_current__qcrdxk(this);
  };
  function DynamicValueHolder(state) {
    this.p1l_1 = state;
  }
  protoOf(DynamicValueHolder).u1l = function (map) {
    return this.p1l_1.c2();
  };
  protoOf(DynamicValueHolder).toString = function () {
    return 'DynamicValueHolder(state=' + toString(this.p1l_1) + ')';
  };
  protoOf(DynamicValueHolder).hashCode = function () {
    return hashCode(this.p1l_1);
  };
  protoOf(DynamicValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DynamicValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof DynamicValueHolder ? other : THROW_CCE();
    if (!equals(this.p1l_1, tmp0_other_with_cast.p1l_1))
      return false;
    return true;
  };
  function StaticValueHolder(value) {
    this.o1l_1 = value;
  }
  protoOf(StaticValueHolder).u1l = function (map) {
    return this.o1l_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + toString_0(this.o1l_1) + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.o1l_1 == null ? 0 : hashCode(this.o1l_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.o1l_1, tmp0_other_with_cast.o1l_1))
      return false;
    return true;
  };
  function ComputedValueHolder(compute) {
    this.n1l_1 = compute;
  }
  protoOf(ComputedValueHolder).u1l = function (map) {
    return this.n1l_1(map);
  };
  protoOf(ComputedValueHolder).toString = function () {
    return 'ComputedValueHolder(compute=' + toString(this.n1l_1) + ')';
  };
  protoOf(ComputedValueHolder).hashCode = function () {
    return hashCode(this.n1l_1);
  };
  protoOf(ComputedValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedValueHolder ? other : THROW_CCE();
    if (!equals(this.n1l_1, tmp0_other_with_cast.n1l_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function ChangeList() {
    OperationsDebugStringFormattable.call(this);
    this.r1g_1 = new Operations();
  }
  protoOf(ChangeList).q = function () {
    return this.r1g_1.q();
  };
  protoOf(ChangeList).pz = function () {
    return this.r1g_1.pz();
  };
  protoOf(ChangeList).w1 = function () {
    this.r1g_1.w1();
  };
  protoOf(ChangeList).f1j = function (applier, slots, rememberManager) {
    return this.r1g_1.b1v(applier, slots, rememberManager);
  };
  protoOf(ChangeList).c1v = function (value) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = Remember_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemember.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    Remember_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).i1v = function (value, groupSlotIndex) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    UpdateValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    UpdateValue_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, groupSlotIndex);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).j1v = function (value, anchor, groupSlotIndex) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateAnchoredValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAnchoredValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, groupSlotIndex);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).k1v = function (anchor, value) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = AppendValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAppendValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    AppendValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
    AppendValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, value);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).l1v = function (count) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = TrimParentValues_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushTrimValues.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    TrimParentValues_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).m1v = function () {
    this.r1g_1.n1v(ResetSlots_getInstance());
  };
  protoOf(ChangeList).o1v = function (data) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateAuxData_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAuxData.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    UpdateAuxData_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, data);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).p1v = function () {
    this.r1g_1.n1v(EnsureRootGroupStarted_getInstance());
  };
  protoOf(ChangeList).q1v = function (anchor) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = EnsureGroupStarted_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEnsureGroupStarted.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    EnsureGroupStarted_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).r1v = function () {
    this.r1g_1.n1v(EndCurrentGroup_getInstance());
  };
  protoOf(ChangeList).s1v = function () {
    this.r1g_1.n1v(SkipToEndOfCurrentGroup_getInstance());
  };
  protoOf(ChangeList).t1v = function () {
    this.r1g_1.n1v(RemoveCurrentGroup_getInstance());
  };
  protoOf(ChangeList).u1v = function (anchor, from) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = InsertSlots_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    InsertSlots_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    InsertSlots_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).v1v = function (anchor, from, fixups) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = InsertSlotsWithFixups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, fixups);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).w1v = function (offset) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = MoveCurrentGroup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveCurrentGroup.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    MoveCurrentGroup_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, offset);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).x1v = function (action, composition) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = EndCompositionScope_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEndCompositionScope.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    EndCompositionScope_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, action);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    EndCompositionScope_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, composition);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).y1v = function (node) {
    if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
      this.r1g_1.n1v(UseCurrentNode_getInstance());
    }
  };
  protoOf(ChangeList).z1v = function (value, block) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).a1w = function (removeFrom, moveCount) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = RemoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    RemoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, removeFrom);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    RemoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, moveCount);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).b1w = function (to, from, count) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = MoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    MoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, to);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    MoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    MoveNode_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).c1w = function (distance) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = AdvanceSlotsBy_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAdvanceSlotsBy.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    AdvanceSlotsBy_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, distance);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).d1w = function (count) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = Ups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUps.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    Ups_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).e1w = function (nodes) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(nodes.length === 0)) {
      var tmp1 = this.r1g_1;
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var operation = Downs_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      tmp1.d1v(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDowns.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(tmp1);
      // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
      Downs_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, nodes);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(access$_get_pushedIntMask__wrtr8x(tmp1) === access$createExpectedArgMask(tmp1, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp1) === access$createExpectedArgMask(tmp1, operation.f1v_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.e1v_1;
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp1)) === 0)) {
              if (missingIntCount > 0) {
                this_0.a8(', ');
              }
              this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_0.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.f1v_1;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp1)) === 0)) {
              if (missingIntCount > 0) {
                this_1.a8(', ');
              }
              this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_1.toString();
        var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$7);
      }
    }
  };
  protoOf(ChangeList).f1w = function (effectiveNodeIndexOut, anchor) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = DetermineMovableContentNodeIndex_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDetermineMovableContentNodeIndex.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, effectiveNodeIndexOut);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).g1w = function (nodes, effectiveNodeIndex) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!nodes.q()) {
      var tmp1 = this.r1g_1;
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var operation = CopyNodesToNewAnchorLocation_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      tmp1.d1v(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopyNodesToNewAnchorLocation.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(tmp1);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, nodes);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, effectiveNodeIndex);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(access$_get_pushedIntMask__wrtr8x(tmp1) === access$createExpectedArgMask(tmp1, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp1) === access$createExpectedArgMask(tmp1, operation.f1v_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.e1v_1;
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp1)) === 0)) {
              if (missingIntCount > 0) {
                this_0.a8(', ');
              }
              this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_0.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.f1v_1;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp1)) === 0)) {
              if (missingIntCount > 0) {
                this_1.a8(', ');
              }
              this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_1.toString();
        var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$7);
      }
    }
  };
  protoOf(ChangeList).h1w = function (resolvedState, parentContext, from, to) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = CopySlotTableToAnchorLocation_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopySlotTableToAnchorLocation.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, resolvedState);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(3);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, to);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$3, from);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$8 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$8);
    }
  };
  protoOf(ChangeList).i1w = function (composition, parentContext, reference) {
    var tmp0 = this.r1g_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = ReleaseMovableGroupAtCurrent_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushReleaseMovableGroupAtCurrent.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, composition);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, reference);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).j1w = function () {
    this.r1g_1.n1v(EndMovableContentPlacement_getInstance());
  };
  protoOf(ChangeList).k1w = function (changeList, effectiveNodeIndex) {
    if (changeList.pz()) {
      var tmp0 = this.r1g_1;
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var operation = ApplyChangeList_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      tmp0.d1v(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushExecuteOperationsIn.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(tmp0);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
      ApplyChangeList_getInstance();
      var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, changeList);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      ApplyChangeList_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, effectiveNodeIndex);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.e1v_1;
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
              if (missingIntCount > 0) {
                this_0.a8(', ');
              }
              this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_0.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.f1v_1;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
              if (missingIntCount > 0) {
                this_1.a8(', ');
              }
              this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_1.toString();
        var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$6);
      }
    }
  };
  function _get_reader__fd8dw8($this) {
    return $this.t15_1.l14_1;
  }
  function pushApplierOperationPreamble($this) {
    pushPendingUpsAndDowns($this);
  }
  function pushSlotEditingOperationPreamble($this) {
    realizeOperationLocation$default($this);
    $this.p1d();
  }
  function pushSlotTableOperationPreamble($this, useParentSlot) {
    realizeOperationLocation($this, useParentSlot);
  }
  function pushSlotTableOperationPreamble$default($this, useParentSlot, $super) {
    useParentSlot = useParentSlot === VOID ? false : useParentSlot;
    return pushSlotTableOperationPreamble($this, useParentSlot);
  }
  function ensureRootStarted($this) {
    if (!$this.v15_1 && $this.x15_1) {
      pushSlotTableOperationPreamble$default($this);
      $this.u15_1.p1v();
      $this.v15_1 = true;
    }
  }
  function ensureGroupStarted($this, anchor) {
    pushSlotTableOperationPreamble$default($this);
    $this.u15_1.q1v(anchor);
    $this.v15_1 = true;
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? _get_reader__fd8dw8($this).p16_1 : _get_reader__fd8dw8($this).n16_1;
    var distance = location - $this.y15_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.realizeOperationLocation.<anonymous>' call
      var tmp$ret$0 = 'Tried to seek backward';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (distance > 0) {
      $this.u15_1.c1w(distance);
      $this.y15_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function realizeNodeMovementOperations($this) {
    if ($this.e16_1 > 0) {
      if ($this.b16_1 >= 0) {
        realizeRemoveNode($this, $this.b16_1, $this.e16_1);
        $this.b16_1 = -1;
      } else {
        realizeMoveNode($this, $this.d16_1, $this.c16_1, $this.e16_1);
        $this.c16_1 = -1;
        $this.d16_1 = -1;
      }
      $this.e16_1 = 0;
    }
  }
  function realizeRemoveNode($this, removeFrom, moveCount) {
    pushApplierOperationPreamble($this);
    $this.u15_1.a1w(removeFrom, moveCount);
  }
  function realizeMoveNode($this, to, from, count) {
    pushApplierOperationPreamble($this);
    $this.u15_1.b1w(to, from, count);
  }
  function pushPendingUpsAndDowns($this) {
    if ($this.z15_1 > 0) {
      $this.u15_1.d1w($this.z15_1);
      $this.z15_1 = 0;
    }
    if ($this.a16_1.pz()) {
      $this.u15_1.e1w($this.a16_1.e5());
      $this.a16_1.w1();
    }
  }
  function Companion_4() {
    this.l1w_1 = -2;
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    return Companion_instance_5;
  }
  function ComposerChangeListWriter(composer, changeList) {
    this.t15_1 = composer;
    this.u15_1 = changeList;
    this.v15_1 = false;
    this.w15_1 = new IntStack();
    this.x15_1 = true;
    this.y15_1 = 0;
    this.z15_1 = 0;
    this.a16_1 = new Stack();
    this.b16_1 = -1;
    this.c16_1 = -1;
    this.d16_1 = -1;
    this.e16_1 = 0;
  }
  protoOf(ComposerChangeListWriter).v19 = function (location) {
    this.y15_1 = this.y15_1 + (location - _get_reader__fd8dw8(this).n16_1 | 0) | 0;
  };
  protoOf(ComposerChangeListWriter).a1c = function (location) {
    this.y15_1 = location;
  };
  protoOf(ComposerChangeListWriter).p1d = function () {
    if (_get_reader__fd8dw8(this).j() > 0) {
      var reader = _get_reader__fd8dw8(this);
      var location = reader.p16_1;
      if (!(this.w15_1.b1s(-2) === location)) {
        ensureRootStarted(this);
        if (location > 0) {
          var anchor = reader.f18(location);
          this.w15_1.m15(location);
          ensureGroupStarted(this, anchor);
        }
      }
    }
  };
  protoOf(ComposerChangeListWriter).g1f = function () {
    return (_get_reader__fd8dw8(this).p16_1 - this.y15_1 | 0) < 0;
  };
  protoOf(ComposerChangeListWriter).j1f = function (value) {
    this.u15_1.c1v(value);
  };
  protoOf(ComposerChangeListWriter).e1f = function (value, groupSlotIndex) {
    pushSlotTableOperationPreamble(this, true);
    this.u15_1.i1v(value, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).f1f = function (value, anchor, groupSlotIndex) {
    this.u15_1.j1v(value, anchor, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).c1f = function (anchor, value) {
    this.u15_1.k1v(anchor, value);
  };
  protoOf(ComposerChangeListWriter).m1a = function (count) {
    if (count > 0) {
      pushSlotEditingOperationPreamble(this);
      this.u15_1.l1v(count);
    }
  };
  protoOf(ComposerChangeListWriter).m1b = function () {
    this.u15_1.m1v();
  };
  protoOf(ComposerChangeListWriter).r18 = function (data) {
    pushSlotTableOperationPreamble$default(this);
    this.u15_1.o1v(data);
  };
  protoOf(ComposerChangeListWriter).f16 = function () {
    if (this.v15_1) {
      pushSlotTableOperationPreamble$default(this);
      pushSlotTableOperationPreamble$default(this);
      this.u15_1.r1v();
      this.v15_1 = false;
    }
  };
  protoOf(ComposerChangeListWriter).n1a = function () {
    var location = _get_reader__fd8dw8(this).p16_1;
    var currentStartedGroup = this.w15_1.b1s(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.endCurrentGroup.<anonymous>' call
      var tmp$ret$0 = 'Missed recording an endGroup';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (this.w15_1.b1s(-1) === location) {
      pushSlotTableOperationPreamble$default(this);
      this.w15_1.w16();
      this.u15_1.r1v();
    }
  };
  protoOf(ComposerChangeListWriter).c1c = function () {
    this.u15_1.s1v();
  };
  protoOf(ComposerChangeListWriter).x1c = function () {
    pushSlotEditingOperationPreamble(this);
    this.u15_1.t1v();
    this.y15_1 = this.y15_1 + _get_reader__fd8dw8(this).z1s() | 0;
  };
  protoOf(ComposerChangeListWriter).w1c = function (anchor, from) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    realizeNodeMovementOperations(this);
    this.u15_1.u1v(anchor, from);
  };
  protoOf(ComposerChangeListWriter).v1c = function (anchor, from, fixups) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    realizeNodeMovementOperations(this);
    this.u15_1.v1v(anchor, from, fixups);
  };
  protoOf(ComposerChangeListWriter).x19 = function (offset) {
    pushSlotEditingOperationPreamble(this);
    this.u15_1.w1v(offset);
  };
  protoOf(ComposerChangeListWriter).g1g = function (action, composition) {
    this.u15_1.x1v(action, composition);
  };
  protoOf(ComposerChangeListWriter).s1e = function (node) {
    pushApplierOperationPreamble(this);
    this.u15_1.y1v(node);
  };
  protoOf(ComposerChangeListWriter).v1e = function (value, block) {
    pushApplierOperationPreamble(this);
    this.u15_1.z1v(value, block);
  };
  protoOf(ComposerChangeListWriter).b1a = function (nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.removeNode.<anonymous>' call
        var tmp$ret$0 = 'Invalid remove index ' + nodeIndex;
        composeImmediateRuntimeError(tmp$ret$0);
      }
      if (this.b16_1 === nodeIndex) {
        this.e16_1 = this.e16_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.b16_1 = nodeIndex;
        this.e16_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).f1a = function (from, to, count) {
    if (count > 0) {
      if (this.e16_1 > 0 && this.c16_1 === (from - this.e16_1 | 0) && this.d16_1 === (to - this.e16_1 | 0)) {
        this.e16_1 = this.e16_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.c16_1 = from;
        this.d16_1 = to;
        this.e16_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).y1c = function () {
    pushPendingUpsAndDowns(this);
    if (this.v15_1) {
      this.c1c();
      this.f16();
    }
  };
  protoOf(ComposerChangeListWriter).h1a = function () {
    realizeNodeMovementOperations(this);
  };
  protoOf(ComposerChangeListWriter).r1d = function (nodeIndex, group) {
    this.h1a();
    pushPendingUpsAndDowns(this);
    var nodeCount = _get_reader__fd8dw8(this).z1a(group) ? 1 : _get_reader__fd8dw8(this).a1b(group);
    if (nodeCount > 0) {
      this.b1a(nodeIndex, nodeCount);
    }
  };
  protoOf(ComposerChangeListWriter).k1a = function () {
    realizeNodeMovementOperations(this);
    if (this.a16_1.pz()) {
      this.a16_1.w16();
    } else {
      this.z15_1 = this.z15_1 + 1 | 0;
    }
  };
  protoOf(ComposerChangeListWriter).c1b = function (node) {
    realizeNodeMovementOperations(this);
    this.a16_1.y19(node);
  };
  protoOf(ComposerChangeListWriter).v1b = function (effectiveNodeIndexOut, anchor) {
    pushPendingUpsAndDowns(this);
    this.u15_1.f1w(effectiveNodeIndexOut, anchor);
  };
  protoOf(ComposerChangeListWriter).y1b = function (nodes, effectiveNodeIndex) {
    this.u15_1.g1w(nodes, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).z1b = function (resolvedState, parentContext, from, to) {
    this.u15_1.h1w(resolvedState, parentContext, from, to);
  };
  protoOf(ComposerChangeListWriter).q1d = function (composition, parentContext, reference) {
    this.u15_1.i1w(composition, parentContext, reference);
  };
  protoOf(ComposerChangeListWriter).d1c = function () {
    this.u15_1.j1w();
    this.y15_1 = 0;
  };
  protoOf(ComposerChangeListWriter).b1c = function (other, effectiveNodeIndex) {
    this.u15_1.k1w(other, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).a1d = function () {
    pushPendingUpsAndDowns(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.w15_1.q()) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.finalizeComposition.<anonymous>' call
      var tmp$ret$0 = 'Missed recording an endGroup()';
      composeImmediateRuntimeError(tmp$ret$0);
    }
  };
  protoOf(ComposerChangeListWriter).b1d = function () {
    this.v15_1 = false;
    this.w15_1.w1();
    this.y15_1 = 0;
  };
  function FixupList() {
    OperationsDebugStringFormattable.call(this);
    this.y16_1 = new Operations();
    this.z16_1 = new Operations();
  }
  protoOf(FixupList).q = function () {
    return this.y16_1.q();
  };
  protoOf(FixupList).w1 = function () {
    this.z16_1.w1();
    this.y16_1.w1();
  };
  protoOf(FixupList).m1w = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.z16_1.q()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.executeAndFlushAllPendingFixups.<anonymous>' call
      var tmp$ret$0 = 'FixupList has pending fixup operations that were not realized. Were there mismatched insertNode() and endNodeInsert() calls?';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.y16_1.b1v(applier, slots, rememberManager);
  };
  protoOf(FixupList).q1e = function (factory, insertIndex, groupAnchor) {
    var tmp0 = this.y16_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = InsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    InsertNodeFixup_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, factory);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    InsertNodeFixup_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    InsertNodeFixup_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, groupAnchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
    var tmp3 = this.z16_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation_0 = PostInsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp3.d1v(operation_0);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push_0 = _WriteScope___init__impl__4xwato(tmp3);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$8 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push_0, tmp$ret$8, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$9 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push_0, tmp$ret$9, groupAnchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp3) === access$createExpectedArgMask(tmp3, operation_0.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp3) === access$createExpectedArgMask(tmp3, operation_0.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_1 = operation_0.e1v_1;
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < times_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_1 & access$_get_pushedIntMask__wrtr8x(tmp3)) === 0)) {
            if (missingIntCount_0 > 0) {
              this_2.a8(', ');
            }
            this_2.a8(operation_0.g1v(_IntParameter___init__impl__oy5xkp(index_1)));
            missingIntCount_0 = missingIntCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_1 < times_1);
      var missingInts_0 = this_2.toString();
      var missingObjectCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_3 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_2 = operation_0.f1v_1;
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < times_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_2 & access$_get_pushedObjectMask__8x586f(tmp3)) === 0)) {
            if (missingIntCount_0 > 0) {
              this_3.a8(', ');
            }
            this_3.a8(operation_0.h1v(_ObjectParameter___init__impl__iyg1ip(index_2)));
            missingObjectCount_0 = missingObjectCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_2 < times_2);
      var missingObjects_0 = this_3.toString();
      var tmp$ret$14 = 'Error while pushing ' + operation_0.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount_0 + ' int arguments (' + missingInts_0 + ') ') + ('and ' + missingObjectCount_0 + ' object arguments (' + missingObjects_0 + ').');
      throwIllegalStateException(tmp$ret$14);
    }
  };
  protoOf(FixupList).p1a = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.z16_1.pz()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.endNodeInsert.<anonymous>' call
      var tmp$ret$0 = 'Cannot end node insertion, there are no pending operations that can be realized.';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.z16_1.n1w(this.y16_1);
  };
  protoOf(FixupList).w1e = function (value, block) {
    var tmp0 = this.y16_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.d1v(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.updateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.e1v_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.f1v_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.e1v_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.a8(', ');
            }
            this_0.a8(operation.g1v(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.f1v_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.a8(', ');
            }
            this_1.a8(operation.h1v(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  function _IntParameter___init__impl__oy5xkp(offset) {
    return offset;
  }
  function _IntParameter___get_offset__impl__xsdcin($this) {
    return $this;
  }
  function _ObjectParameter___init__impl__iyg1ip(offset) {
    return offset;
  }
  function _ObjectParameter___get_offset__impl__x7fx93($this) {
    return $this;
  }
  function Ups() {
    Ups_instance = this;
    Operation.call(this, 1);
  }
  protoOf(Ups).g1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).g1v.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Ups).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.r1w(tmp$ret$0);
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Ups.execute.<anonymous>' call
        applier.n11();
      }
       while (inductionVariable < times);
  };
  var Ups_instance;
  function Ups_getInstance() {
    if (Ups_instance == null)
      new Ups();
    return Ups_instance;
  }
  function Downs() {
    Downs_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Downs).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'nodes';
    } else {
      tmp = protoOf(Operation).h1v.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Downs).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var nodes = _this__u8e3s4.v1w(tmp$ret$0);
    var inductionVariable = 0;
    var last = nodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        nodeApplier.m11(nodes[index]);
      }
       while (inductionVariable <= last);
  };
  var Downs_instance;
  function Downs_getInstance() {
    if (Downs_instance == null)
      new Downs();
    return Downs_instance;
  }
  function AdvanceSlotsBy() {
    AdvanceSlotsBy_instance = this;
    Operation.call(this, 1);
  }
  protoOf(AdvanceSlotsBy).g1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'distance';
    } else {
      tmp = protoOf(Operation).g1v.call(this, parameter);
    }
    return tmp;
  };
  protoOf(AdvanceSlotsBy).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.k1r(_this__u8e3s4.r1w(tmp$ret$0));
  };
  var AdvanceSlotsBy_instance;
  function AdvanceSlotsBy_getInstance() {
    if (AdvanceSlotsBy_instance == null)
      new AdvanceSlotsBy();
    return AdvanceSlotsBy_instance;
  }
  function Remember() {
    Remember_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Remember).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).h1v.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Remember).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    rememberManager.q1j(_this__u8e3s4.v1w(tmp$ret$0));
  };
  var Remember_instance;
  function Remember_getInstance() {
    if (Remember_instance == null)
      new Remember();
    return Remember_instance;
  }
  function AppendValue() {
    AppendValue_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(AppendValue).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'value';
      } else {
        tmp = protoOf(Operation).h1v.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(AppendValue).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.v1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var value = _this__u8e3s4.v1w(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.q1j(value.y1e_1);
    }
    slots.f1s(anchor, value);
  };
  var AppendValue_instance;
  function AppendValue_getInstance() {
    if (AppendValue_instance == null)
      new AppendValue();
    return AppendValue_instance;
  }
  function TrimParentValues() {
    TrimParentValues_instance = this;
    Operation.call(this, 1);
  }
  protoOf(TrimParentValues).g1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).g1v.call(this, parameter);
    }
    return tmp;
  };
  protoOf(TrimParentValues).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var count = _this__u8e3s4.r1w(tmp$ret$0);
    var slotsSize = slots.x1g();
    // Inline function 'androidx.compose.runtime.SlotWriter.forEachTailSlot' call
    var groupIndex = slots.v17_1;
    var slotsStart = slots.o1r(groupIndex);
    var slotsEnd = slots.o1s(groupIndex);
    // Inline function 'kotlin.math.max' call
    var b = slotsEnd - count | 0;
    var inductionVariable = Math.max(slotsStart, b);
    if (inductionVariable < slotsEnd)
      do {
        var slotIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.execute.<anonymous>' call
        var value = access$_get_slots__7x4q9w(slots)[access$dataIndexToDataAddress(slots, slotIndex)];
        if (value instanceof RememberObserverHolder) {
          var endRelativeOrder = slotsSize - slotIndex | 0;
          rememberManager.b1h(value.y1e_1, endRelativeOrder, -1, -1);
        } else {
          if (value instanceof RecomposeScopeImpl) {
            value.c1h();
          }
        }
      }
       while (inductionVariable < slotsEnd);
    slots.g1s(count);
  };
  var TrimParentValues_instance;
  function TrimParentValues_getInstance() {
    if (TrimParentValues_instance == null)
      new TrimParentValues();
    return TrimParentValues_instance;
  }
  function UpdateValue() {
    UpdateValue_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(UpdateValue).g1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).g1v.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).h1v.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.v1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.r1w(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.q1j(value.y1e_1);
    }
    var previous = slots.k1s(groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      var endRelativeOrder = slots.x1g() - slots.m1s(slots.t17_1, groupSlotIndex) | 0;
      rememberManager.b1h(previous.y1e_1, endRelativeOrder, -1, -1);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.c1h();
      }
    }
  };
  var UpdateValue_instance;
  function UpdateValue_getInstance() {
    if (UpdateValue_instance == null)
      new UpdateValue();
    return UpdateValue_instance;
  }
  function UpdateAnchoredValue() {
    UpdateAnchoredValue_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(UpdateAnchoredValue).g1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).g1v.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAnchoredValue).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
      UpdateAnchoredValue_getInstance();
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).h1v.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateAnchoredValue).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.v1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var anchor = _this__u8e3s4.v1w(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.r1w(tmp$ret$2);
    if (value instanceof RememberObserverHolder) {
      rememberManager.q1j(value.y1e_1);
    }
    var groupIndex = slots.u1b(anchor);
    var previous = slots.l1s(groupIndex, groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      var endRelativeSlotOrder = slots.x1g() - slots.m1s(groupIndex, groupSlotIndex) | 0;
      // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
      var anchor_0 = previous.z1e_1;
      var priority = -1;
      var endRelativeAfter = -1;
      if (!(anchor_0 == null) && anchor_0.a1h()) {
        priority = slots.u1b(anchor_0);
        endRelativeAfter = slots.x1g() - slots.z1g(priority) | 0;
      }
      var tmp5 = priority;
      // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.execute.<anonymous>' call
      var endRelativeAfter_0 = endRelativeAfter;
      rememberManager.b1h(previous.y1e_1, endRelativeSlotOrder, tmp5, endRelativeAfter_0);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.c1h();
      }
    }
  };
  var UpdateAnchoredValue_instance;
  function UpdateAnchoredValue_getInstance() {
    if (UpdateAnchoredValue_instance == null)
      new UpdateAnchoredValue();
    return UpdateAnchoredValue_instance;
  }
  function UpdateAuxData() {
    UpdateAuxData_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(UpdateAuxData).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'data';
    } else {
      tmp = protoOf(Operation).h1v.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAuxData).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.p1r(_this__u8e3s4.v1w(tmp$ret$0));
  };
  var UpdateAuxData_instance;
  function UpdateAuxData_getInstance() {
    if (UpdateAuxData_instance == null)
      new UpdateAuxData();
    return UpdateAuxData_instance;
  }
  function EnsureRootGroupStarted() {
    EnsureRootGroupStarted_instance = this;
    Operation.call(this);
  }
  protoOf(EnsureRootGroupStarted).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.p1s(0);
  };
  var EnsureRootGroupStarted_instance;
  function EnsureRootGroupStarted_getInstance() {
    if (EnsureRootGroupStarted_instance == null)
      new EnsureRootGroupStarted();
    return EnsureRootGroupStarted_instance;
  }
  function EnsureGroupStarted() {
    EnsureGroupStarted_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(EnsureGroupStarted).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      tmp = protoOf(Operation).h1v.call(this, parameter);
    }
    return tmp;
  };
  protoOf(EnsureGroupStarted).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.q1s(_this__u8e3s4.v1w(tmp$ret$0));
  };
  var EnsureGroupStarted_instance;
  function EnsureGroupStarted_getInstance() {
    if (EnsureGroupStarted_instance == null)
      new EnsureGroupStarted();
    return EnsureGroupStarted_instance;
  }
  function RemoveCurrentGroup() {
    RemoveCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(RemoveCurrentGroup).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    removeCurrentGroup(slots, rememberManager);
  };
  var RemoveCurrentGroup_instance;
  function RemoveCurrentGroup_getInstance() {
    if (RemoveCurrentGroup_instance == null)
      new RemoveCurrentGroup();
    return RemoveCurrentGroup_instance;
  }
  function MoveCurrentGroup() {
    MoveCurrentGroup_instance = this;
    Operation.call(this, 1);
  }
  protoOf(MoveCurrentGroup).g1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'offset';
    } else {
      tmp = protoOf(Operation).g1v.call(this, parameter);
    }
    return tmp;
  };
  protoOf(MoveCurrentGroup).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.s1s(_this__u8e3s4.r1w(tmp$ret$0));
  };
  var MoveCurrentGroup_instance;
  function MoveCurrentGroup_getInstance() {
    if (MoveCurrentGroup_instance == null)
      new MoveCurrentGroup();
    return MoveCurrentGroup_instance;
  }
  function EndCurrentGroup() {
    EndCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(EndCurrentGroup).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.r1a();
  };
  var EndCurrentGroup_instance;
  function EndCurrentGroup_getInstance() {
    if (EndCurrentGroup_instance == null)
      new EndCurrentGroup();
    return EndCurrentGroup_instance;
  }
  function SkipToEndOfCurrentGroup() {
    SkipToEndOfCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(SkipToEndOfCurrentGroup).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.m18();
  };
  var SkipToEndOfCurrentGroup_instance;
  function SkipToEndOfCurrentGroup_getInstance() {
    if (SkipToEndOfCurrentGroup_instance == null)
      new SkipToEndOfCurrentGroup();
    return SkipToEndOfCurrentGroup_instance;
  }
  function EndCompositionScope() {
    EndCompositionScope_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(EndCompositionScope).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'composition';
      } else {
        tmp = protoOf(Operation).h1v.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(EndCompositionScope).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var action = _this__u8e3s4.v1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var composition = _this__u8e3s4.v1w(tmp$ret$1);
    action(composition);
  };
  var EndCompositionScope_instance;
  function EndCompositionScope_getInstance() {
    if (EndCompositionScope_instance == null)
      new EndCompositionScope();
    return EndCompositionScope_instance;
  }
  function UseCurrentNode() {
    UseCurrentNode_instance = this;
    Operation.call(this);
  }
  protoOf(UseCurrentNode).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    var tmp = applier.j11();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).o12();
  };
  var UseCurrentNode_instance;
  function UseCurrentNode_getInstance() {
    if (UseCurrentNode_instance == null)
      new UseCurrentNode();
    return UseCurrentNode_instance;
  }
  function UpdateNode() {
    UpdateNode_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(UpdateNode).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'block';
      } else {
        tmp = protoOf(Operation).h1v.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateNode).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.v1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var block = _this__u8e3s4.v1w(tmp$ret$1);
    block(applier.j11(), value);
  };
  var UpdateNode_instance;
  function UpdateNode_getInstance() {
    if (UpdateNode_instance == null)
      new UpdateNode();
    return UpdateNode_instance;
  }
  function RemoveNode() {
    RemoveNode_instance = this;
    Operation.call(this, 2);
  }
  protoOf(RemoveNode).g1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'removeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'count';
      } else {
        tmp = protoOf(Operation).g1v.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(RemoveNode).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.r1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    applier.q11(tmp, _this__u8e3s4.r1w(tmp$ret$1));
  };
  var RemoveNode_instance;
  function RemoveNode_getInstance() {
    if (RemoveNode_instance == null)
      new RemoveNode();
    return RemoveNode_instance;
  }
  function MoveNode() {
    MoveNode_instance = this;
    Operation.call(this, 3);
  }
  protoOf(MoveNode).g1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'from';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'to';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
        if (parameter === _IntParameter___init__impl__oy5xkp(2)) {
          tmp = 'count';
        } else {
          tmp = protoOf(Operation).g1v.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(MoveNode).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.r1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    var tmp_0 = _this__u8e3s4.r1w(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    applier.r11(tmp, tmp_0, _this__u8e3s4.r1w(tmp$ret$2));
  };
  var MoveNode_instance;
  function MoveNode_getInstance() {
    if (MoveNode_instance == null)
      new MoveNode();
    return MoveNode_instance;
  }
  function InsertSlots() {
    InsertSlots_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(InsertSlots).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        tmp = protoOf(Operation).h1v.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertSlots).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.v1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.v1w(tmp$ret$1);
    slots.m19();
    slots.u1s(insertTable, anchor.a1g(insertTable), false);
    slots.s1a();
  };
  var InsertSlots_instance;
  function InsertSlots_getInstance() {
    if (InsertSlots_instance == null)
      new InsertSlots();
    return InsertSlots_instance;
  }
  function InsertSlotsWithFixups() {
    InsertSlotsWithFixups_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(InsertSlotsWithFixups).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'fixups';
        } else {
          tmp = protoOf(Operation).h1v.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(InsertSlotsWithFixups).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.v1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.v1w(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    var fixups = _this__u8e3s4.v1w(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = insertTable.l18();
    var normalClose = false;
    var tmp;
    try {
      fixups.m1w(applier, writer, rememberManager);
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = Unit_instance;
    }finally {
      writer.q18(normalClose);
    }
    slots.m19();
    slots.u1s(insertTable, anchor.a1g(insertTable), false);
    slots.s1a();
  };
  var InsertSlotsWithFixups_instance;
  function InsertSlotsWithFixups_getInstance() {
    if (InsertSlotsWithFixups_instance == null)
      new InsertSlotsWithFixups();
    return InsertSlotsWithFixups_instance;
  }
  function InsertNodeFixup() {
    InsertNodeFixup_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(InsertNodeFixup).g1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).g1v.call(this, parameter);
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'factory';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'groupAnchor';
      } else {
        tmp = protoOf(Operation).h1v.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var node = _this__u8e3s4.v1w(tmp$ret$0)();
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var groupAnchor = _this__u8e3s4.v1w(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.r1w(tmp$ret$2);
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    slots.j1s(groupAnchor, node);
    nodeApplier.o11(insertIndex, node);
    nodeApplier.m11(node);
  };
  var InsertNodeFixup_instance;
  function InsertNodeFixup_getInstance() {
    if (InsertNodeFixup_instance == null)
      new InsertNodeFixup();
    return InsertNodeFixup_instance;
  }
  function PostInsertNodeFixup() {
    PostInsertNodeFixup_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(PostInsertNodeFixup).g1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).g1v.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'groupAnchor';
    } else {
      tmp = protoOf(Operation).h1v.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var groupAnchor = _this__u8e3s4.v1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.r1w(tmp$ret$1);
    applier.n11();
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    var nodeToInsert = slots.c1s(groupAnchor);
    nodeApplier.p11(insertIndex, nodeToInsert);
  };
  var PostInsertNodeFixup_instance;
  function PostInsertNodeFixup_getInstance() {
    if (PostInsertNodeFixup_instance == null)
      new PostInsertNodeFixup();
    return PostInsertNodeFixup_instance;
  }
  function ResetSlots() {
    ResetSlots_instance = this;
    Operation.call(this);
  }
  protoOf(ResetSlots).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.e1s();
  };
  var ResetSlots_instance;
  function ResetSlots_getInstance() {
    if (ResetSlots_instance == null)
      new ResetSlots();
    return ResetSlots_instance;
  }
  function DetermineMovableContentNodeIndex() {
    DetermineMovableContentNodeIndex_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(DetermineMovableContentNodeIndex).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndexOut';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).h1v.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(DetermineMovableContentNodeIndex).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndexOut = _this__u8e3s4.v1w(tmp$ret$0);
    var tmp = effectiveNodeIndexOut;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.v1w(tmp$ret$1);
    tmp.s1y_1 = positionToInsert(slots, tmp_0, isInterface(applier, Applier) ? applier : THROW_CCE());
  };
  var DetermineMovableContentNodeIndex_instance;
  function DetermineMovableContentNodeIndex_getInstance() {
    if (DetermineMovableContentNodeIndex_instance == null)
      new DetermineMovableContentNodeIndex();
    return DetermineMovableContentNodeIndex_instance;
  }
  function CopyNodesToNewAnchorLocation() {
    CopyNodesToNewAnchorLocation_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(CopyNodesToNewAnchorLocation).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'nodes';
      } else {
        tmp = protoOf(Operation).h1v.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(CopyNodesToNewAnchorLocation).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndex = _this__u8e3s4.v1w(tmp$ret$0).s1y_1;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var nodesToInsert = _this__u8e3s4.v1w(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nodesToInsert.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nodesToInsert.p(index);
        // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.execute.<anonymous>' call
        if (!isInterface(applier, Applier))
          THROW_CCE();
        applier.p11(effectiveNodeIndex + index | 0, item);
        applier.o11(effectiveNodeIndex + index | 0, item);
      }
       while (inductionVariable <= last);
  };
  var CopyNodesToNewAnchorLocation_instance;
  function CopyNodesToNewAnchorLocation_getInstance() {
    if (CopyNodesToNewAnchorLocation_instance == null)
      new CopyNodesToNewAnchorLocation();
    return CopyNodesToNewAnchorLocation_instance;
  }
  function CopySlotTableToAnchorLocation() {
    CopySlotTableToAnchorLocation_instance = this;
    Operation.call(this, VOID, 4);
  }
  protoOf(CopySlotTableToAnchorLocation).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'resolvedState';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'resolvedCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'from';
        } else {
          // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
          if (parameter === _ObjectParameter___init__impl__iyg1ip(3)) {
            tmp = 'to';
          } else {
            tmp = protoOf(Operation).h1v.call(this, parameter);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(CopySlotTableToAnchorLocation).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(2);
    var from = _this__u8e3s4.v1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(3);
    var to = _this__u8e3s4.v1w(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    var parentCompositionContext = _this__u8e3s4.v1w(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp0_elvis_lhs = _this__u8e3s4.v1w(tmp$ret$3);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? parentCompositionContext.w1b(from) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      composeRuntimeError('Could not resolve state for movable content');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var resolvedState = tmp;
    var anchors = slots.v1s(1, resolvedState.x1b_1, 2);
    var tmp_0 = Companion_instance_2;
    var tmp_1 = to.p1b_1;
    tmp_0.i1m(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
  };
  var CopySlotTableToAnchorLocation_instance;
  function CopySlotTableToAnchorLocation_getInstance() {
    if (CopySlotTableToAnchorLocation_instance == null)
      new CopySlotTableToAnchorLocation();
    return CopySlotTableToAnchorLocation_instance;
  }
  function EndMovableContentPlacement() {
    EndMovableContentPlacement_instance = this;
    Operation.call(this);
  }
  protoOf(EndMovableContentPlacement).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    positionToParentOf(slots, isInterface(applier, Applier) ? applier : THROW_CCE(), 0);
    slots.r1a();
  };
  var EndMovableContentPlacement_instance;
  function EndMovableContentPlacement_getInstance() {
    if (EndMovableContentPlacement_instance == null)
      new EndMovableContentPlacement();
    return EndMovableContentPlacement_instance;
  }
  function ReleaseMovableGroupAtCurrent() {
    ReleaseMovableGroupAtCurrent_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(ReleaseMovableGroupAtCurrent).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'composition';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'parentCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'reference';
        } else {
          tmp = protoOf(Operation).h1v.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(ReleaseMovableGroupAtCurrent).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.v1w(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.v1w(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    releaseMovableGroupAtCurrent(tmp, tmp_0, _this__u8e3s4.v1w(tmp$ret$2), slots);
  };
  var ReleaseMovableGroupAtCurrent_instance;
  function ReleaseMovableGroupAtCurrent_getInstance() {
    if (ReleaseMovableGroupAtCurrent_instance == null)
      new ReleaseMovableGroupAtCurrent();
    return ReleaseMovableGroupAtCurrent_instance;
  }
  function ApplyChangeList() {
    ApplyChangeList_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(ApplyChangeList).h1v = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'changes';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'effectiveNodeIndex';
      } else {
        tmp = protoOf(Operation).h1v.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(ApplyChangeList).q1w = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp0_safe_receiver = _this__u8e3s4.v1w(tmp$ret$0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1y_1;
    var effectiveNodeIndex = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.v1w(tmp$ret$1);
    var tmp_0;
    if (effectiveNodeIndex > 0) {
      tmp_0 = new OffsetApplier(applier, effectiveNodeIndex);
    } else {
      tmp_0 = applier;
    }
    tmp.f1j(tmp_0, slots, rememberManager);
  };
  var ApplyChangeList_instance;
  function ApplyChangeList_getInstance() {
    if (ApplyChangeList_instance == null)
      new ApplyChangeList();
    return ApplyChangeList_instance;
  }
  function Operation(ints, objects) {
    ints = ints === VOID ? 0 : ints;
    objects = objects === VOID ? 0 : objects;
    this.e1v_1 = ints;
    this.f1v_1 = objects;
  }
  protoOf(Operation).s1w = function () {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = getKClassFromExpression(this).na();
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(Operation).g1v = function (parameter) {
    return 'IntParameter(' + _IntParameter___get_offset__impl__xsdcin(parameter) + ')';
  };
  protoOf(Operation).h1v = function (parameter) {
    return 'ObjectParameter(' + _ObjectParameter___get_offset__impl__x7fx93(parameter) + ')';
  };
  protoOf(Operation).toString = function () {
    return this.s1w();
  };
  function positionToInsert(slots, anchor, applier) {
    var destination = slots.u1b(anchor);
    runtimeCheck(slots.t17_1 < destination);
    positionToParentOf(slots, applier, destination);
    var nodeIndex = currentNodeIndex(slots);
    while (slots.t17_1 < destination) {
      if (slots.y1r(destination)) {
        if (slots.b1g()) {
          applier.m11(slots.u1c(slots.t17_1));
          nodeIndex = 0;
        }
        slots.t18();
      } else
        nodeIndex = nodeIndex + slots.b18() | 0;
    }
    runtimeCheck(slots.t17_1 === destination);
    return nodeIndex;
  }
  function positionToParentOf(slots, applier, index) {
    while (!slots.x1r(index)) {
      slots.m18();
      if (slots.z1a(slots.v17_1)) {
        applier.n11();
      }
      slots.r1a();
    }
  }
  function releaseMovableGroupAtCurrent(composition, parentContext, reference, slots) {
    var slotTable = new SlotTable();
    if (slots.v1r()) {
      slotTable.n18();
    }
    if (slots.w1r()) {
      slotTable.o18();
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.l18();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.changelist.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.m19();
      writer.x18(126665345, reference.n1b_1);
      writer.j1b();
      writer.h1f(reference.o1b_1);
      var anchors = slots.t1s(reference.r1b_1, 1, writer);
      writer.b18();
      writer.r1a();
      writer.s1a();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = anchors;
    }finally {
      writer.q18(normalClose);
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_2.l1m(slotTable, anchors_0)) {
      var movableContentRecomposeScopeOwner = new releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.l18();
      var normalClose_0 = false;
      var tmp_0;
      try {
        Companion_instance_2.i1m(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
        normalClose_0 = true;
        tmp_0 = Unit_instance;
      }finally {
        writer_0.q18(normalClose_0);
      }
    }
    parentContext.i1l(reference, state);
  }
  function currentNodeIndex(slots) {
    var original = slots.t17_1;
    var current = slots.v17_1;
    while (current >= 0 && !slots.z1a(current)) {
      current = slots.e18(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.z1r(original, current)) {
        if (slots.z1a(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.z1a(current) ? 1 : slots.a1b(current)) | 0;
        current = current + slots.d1a(current) | 0;
      }
    }
    return index;
  }
  function releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.d1z_1 = $composition;
    this.e1z_1 = $reference;
  }
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).b1l = function (scope, instance) {
    var tmp = this.d1z_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b1l(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.e1z_1;
      tmp2_this.s1b_1 = plus_1(tmp2_this.s1b_1, to(scope, instance));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).f1l = function (scope) {
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).i1k = function (value) {
  };
  function OperationsDebugStringFormattable() {
  }
  function _WriteScope___init__impl__4xwato(stack) {
    return stack;
  }
  function _get_stack__b8zp2v($this) {
    return $this;
  }
  function _WriteScope___get_operation__impl__krvgwa($this) {
    return peekOperation(_get_stack__b8zp2v($this));
  }
  function WriteScope__setInt_impl_yt2o8b($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt.<anonymous>' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _IntParameter___get_offset__impl__xsdcin(parameter);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.z1u_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).g1v(parameter);
      throwIllegalStateException(tmp$ret$0);
    }
    $this$with.z1u_1 = $this$with.z1u_1 | mask;
    $this$with.v1u_1[topIntIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function WriteScope__setObject_impl_rr41y9($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setObject.<anonymous>' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.a1v_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setObject.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).h1v(parameter);
      throwIllegalStateException(tmp$ret$0);
    }
    $this$with.a1v_1 = $this$with.a1v_1 | mask;
    $this$with.x1u_1[topObjectIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function determineNewSize($this, currentSize, requiredSize) {
    var resizeAmount = coerceAtMost(currentSize, 1024);
    return coerceAtLeast(currentSize + resizeAmount | 0, requiredSize);
  }
  function ensureIntArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.v1u_1.length;
    if (requiredSize > currentSize) {
      $this.v1u_1 = copyOf($this.v1u_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function ensureObjectArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.x1u_1.length;
    if (requiredSize > currentSize) {
      $this.x1u_1 = copyOf_0($this.x1u_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function createExpectedArgMask($this, paramCount) {
    return paramCount === 0 ? 0 : -1 >>> (32 - paramCount | 0) | 0;
  }
  function peekOperation($this) {
    return ensureNotNull($this.t1u_1[$this.u1u_1 - 1 | 0]);
  }
  function topIntIndexOf($this, parameter) {
    return ($this.w1u_1 - peekOperation($this).e1v_1 | 0) + _IntParameter___get_offset__impl__xsdcin(parameter) | 0;
  }
  function topObjectIndexOf($this, parameter) {
    return ($this.y1u_1 - peekOperation($this).f1v_1 | 0) + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0;
  }
  function OpIterator($outer) {
    this.i1z_1 = $outer;
    this.f1z_1 = 0;
    this.g1z_1 = 0;
    this.h1z_1 = 0;
  }
  protoOf(OpIterator).i = function () {
    if (this.f1z_1 >= this.i1z_1.u1u_1)
      return false;
    var op = this.j1z();
    this.g1z_1 = this.g1z_1 + op.e1v_1 | 0;
    this.h1z_1 = this.h1z_1 + op.f1v_1 | 0;
    this.f1z_1 = this.f1z_1 + 1 | 0;
    return this.f1z_1 < this.i1z_1.u1u_1;
  };
  protoOf(OpIterator).j1z = function () {
    return ensureNotNull(this.i1z_1.t1u_1[this.f1z_1]);
  };
  protoOf(OpIterator).r1w = function (parameter) {
    return this.i1z_1.v1u_1[this.g1z_1 + _IntParameter___get_offset__impl__xsdcin(parameter) | 0];
  };
  protoOf(OpIterator).v1w = function (parameter) {
    var tmp = this.i1z_1.x1u_1[this.h1z_1 + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function Companion_5() {
    this.k1z_1 = 1024;
    this.l1z_1 = 16;
  }
  var Companion_instance_6;
  function Companion_getInstance_5() {
    return Companion_instance_6;
  }
  function access$_get_pushedIntMask__wrtr8x($this) {
    return $this.z1u_1;
  }
  function access$_get_pushedObjectMask__8x586f($this) {
    return $this.a1v_1;
  }
  function access$createExpectedArgMask($this, paramCount) {
    return createExpectedArgMask($this, paramCount);
  }
  function Operations() {
    OperationsDebugStringFormattable.call(this);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.t1u_1 = fillArrayVal(Array(16), null);
    this.u1u_1 = 0;
    this.v1u_1 = new Int32Array(16);
    this.w1u_1 = 0;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.x1u_1 = fillArrayVal(Array(16), null);
    this.y1u_1 = 0;
    this.z1u_1 = 0;
    this.a1v_1 = 0;
  }
  protoOf(Operations).j = function () {
    return this.u1u_1;
  };
  protoOf(Operations).q = function () {
    return this.j() === 0;
  };
  protoOf(Operations).pz = function () {
    return !(this.j() === 0);
  };
  protoOf(Operations).w1 = function () {
    this.u1u_1 = 0;
    this.w1u_1 = 0;
    fill_0(this.x1u_1, null, 0, this.y1u_1);
    this.y1u_1 = 0;
  };
  protoOf(Operations).d1v = function (operation) {
    this.z1u_1 = 0;
    this.a1v_1 = 0;
    if (this.u1u_1 === this.t1u_1.length) {
      var resizeAmount = coerceAtMost(this.u1u_1, 1024);
      this.t1u_1 = copyOf_0(this.t1u_1, this.u1u_1 + resizeAmount | 0);
    }
    ensureIntArgsSizeAtLeast(this, this.w1u_1 + operation.e1v_1 | 0);
    ensureObjectArgsSizeAtLeast(this, this.y1u_1 + operation.f1v_1 | 0);
    var tmp = this.t1u_1;
    var tmp1 = this.u1u_1;
    this.u1u_1 = tmp1 + 1 | 0;
    tmp[tmp1] = operation;
    this.w1u_1 = this.w1u_1 + operation.e1v_1 | 0;
    this.y1u_1 = this.y1u_1 + operation.f1v_1 | 0;
  };
  protoOf(Operations).n1v = function (operation) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(operation.e1v_1 === 0 && operation.f1v_1 === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var tmp$ret$0 = 'Cannot push ' + operation.toString() + ' without arguments because it expects ' + ('' + operation.e1v_1 + ' ints and ' + operation.f1v_1 + ' objects.');
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.d1v(operation);
  };
  protoOf(Operations).n1w = function (other) {
    if (this.q()) {
      throw NoSuchElementException_init_$Create$('Cannot pop(), because the stack is empty.');
    }
    var tmp = this.t1u_1;
    this.u1u_1 = this.u1u_1 - 1 | 0;
    var op = ensureNotNull(tmp[this.u1u_1]);
    this.t1u_1[this.u1u_1] = null;
    other.d1v(op);
    var thisObjIdx = this.y1u_1;
    var otherObjIdx = other.y1u_1;
    // Inline function 'kotlin.repeat' call
    var times = op.f1v_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherObjIdx = otherObjIdx - 1 | 0;
        thisObjIdx = thisObjIdx - 1 | 0;
        other.x1u_1[otherObjIdx] = this.x1u_1[thisObjIdx];
        this.x1u_1[thisObjIdx] = null;
      }
       while (inductionVariable < times);
    var thisIntIdx = this.w1u_1;
    var otherIntIdx = other.w1u_1;
    // Inline function 'kotlin.repeat' call
    var times_0 = op.e1v_1;
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherIntIdx = otherIntIdx - 1 | 0;
        thisIntIdx = thisIntIdx - 1 | 0;
        other.v1u_1[otherIntIdx] = this.v1u_1[thisIntIdx];
        this.v1u_1[thisIntIdx] = 0;
      }
       while (inductionVariable_0 < times_0);
    this.y1u_1 = this.y1u_1 - op.f1v_1 | 0;
    this.w1u_1 = this.w1u_1 - op.e1v_1 | 0;
  };
  protoOf(Operations).b1v = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.drain' call
    // Inline function 'androidx.compose.runtime.changelist.Operations.forEach' call
    if (this.pz()) {
      var iterator = new OpIterator(this);
      do {
        // Inline function 'androidx.compose.runtime.changelist.Operations.executeAndFlushAllPendingOperations.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.executeAndFlushAllPendingOperations.<anonymous>.<anonymous>' call
        iterator.j1z().q1w(iterator, applier, slots, rememberManager);
      }
       while (iterator.i());
    }
    this.w1();
  };
  protoOf(Operations).toString = function () {
    return protoOf(OperationsDebugStringFormattable).toString.call(this);
  };
  function MutableVector(content, size) {
    this.o1c_1 = content;
    this.p1c_1 = null;
    this.q1c_1 = size;
  }
  protoOf(MutableVector).r1c = function (element) {
    this.wv(this.q1c_1 + 1 | 0);
    this.o1c_1[this.q1c_1] = element;
    this.q1c_1 = this.q1c_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).w1 = function () {
    var content = this.o1c_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var inductionVariable = this.q1c_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        content[i] = null;
      }
       while (0 <= inductionVariable);
    this.q1c_1 = 0;
  };
  protoOf(MutableVector).je = function (element) {
    var inductionVariable = 0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var last = this.q1c_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var index = i;
        var tmp = this.o1c_1[index];
        var tmp$ret$1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (equals(tmp$ret$1, element))
          return true;
      }
       while (!(i === last));
    return false;
  };
  protoOf(MutableVector).wv = function (capacity) {
    var oldContent = this.o1c_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.o1c_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).pz = function () {
    return !(this.q1c_1 === 0);
  };
  protoOf(MutableVector).z1 = function (index) {
    var content = this.o1c_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.q1c_1 - 1 | 0))) {
      var tmp4 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.q1c_1;
      arrayCopy(content, content, index, tmp4, endIndex);
    }
    this.q1c_1 = this.q1c_1 - 1 | 0;
    content[this.q1c_1] = null;
    return item;
  };
  protoOf(MutableVector).s1n = function (newSize) {
    this.q1c_1 = newSize;
  };
  function wrapIntoSet(_this__u8e3s4) {
    return new ScatterSetWrapper(_this__u8e3s4);
  }
  function ScatterSetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.u1z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScatterSetWrapper$iterator$slambda).p20 = function ($this$iterator, $completion) {
    var tmp = this.q20($this$iterator, $completion);
    tmp.v8_1 = Unit_instance;
    tmp.w8_1 = null;
    return tmp.b9();
  };
  protoOf(ScatterSetWrapper$iterator$slambda).p9 = function (p1, $completion) {
    return this.p20(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScatterSetWrapper$iterator$slambda).b9 = function () {
    var suspendResult = this.v8_1;
    $sm: do
      try {
        var tmp = this.t8_1;
        switch (tmp) {
          case 0:
            this.u8_1 = 11;
            var tmp_0 = this;
            tmp_0.w1z_1 = this.u1z_1.c1j_1;
            this.x1z_1 = this.w1z_1;
            this.y1z_1 = this.x1z_1.lz_1;
            var tmp_1 = this;
            tmp_1.z1z_1 = this.x1z_1;
            this.t8_1 = 1;
            continue $sm;
          case 1:
            this.b20_1 = this.z1z_1;
            this.c20_1 = this.b20_1.kz_1;
            this.d20_1 = this.c20_1.length - 2 | 0;
            this.e20_1 = numberRangeToNumber(0, this.d20_1).g();
            this.t8_1 = 2;
            continue $sm;
          case 2:
            if (!this.e20_1.h()) {
              this.t8_1 = 9;
              continue $sm;
            }

            this.f20_1 = this.e20_1.i();
            this.g20_1 = this.c20_1[this.f20_1];
            var this_0 = this.g20_1;
            if (!this_0.a3(this_0.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.h20_1 = 8 - (~(this.f20_1 - this.d20_1 | 0) >>> 31 | 0) | 0;
              this.i20_1 = until(0, this.h20_1).g();
              this.t8_1 = 3;
              continue $sm;
            } else {
              this.t8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.i20_1.h()) {
              this.t8_1 = 6;
              continue $sm;
            }

            this.j20_1 = this.i20_1.i();
            if (this.g20_1.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
              this.k20_1 = (this.f20_1 << 3) + this.j20_1 | 0;
              var tmp_2 = this;
              tmp_2.l20_1 = this.k20_1;
              this.m20_1 = this.l20_1;
              var tmp_3 = this;
              var tmp_4 = this.y1z_1[this.m20_1];
              tmp_3.n20_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              this.o20_1 = this.n20_1;
              this.t8_1 = 4;
              suspendResult = this.v1z_1.re(this.o20_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.t8_1 = 5;
              continue $sm;
            }

          case 4:
            this.t8_1 = 5;
            continue $sm;
          case 5:
            this.g20_1 = this.g20_1.y2(8);
            this.t8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.h20_1 === 8)) {
              this.a20_1 = Unit_instance;
              this.t8_1 = 10;
              continue $sm;
            } else {
              this.t8_1 = 7;
              continue $sm;
            }

          case 7:
            this.t8_1 = 8;
            continue $sm;
          case 8:
            this.t8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.t8_1 = 1;
              continue $sm;
            }

            this.t8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.w8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.u8_1 === 11) {
          throw e;
        } else {
          this.t8_1 = this.u8_1;
          this.w8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ScatterSetWrapper$iterator$slambda).q20 = function ($this$iterator, completion) {
    var i = new ScatterSetWrapper$iterator$slambda(this.u1z_1, completion);
    i.v1z_1 = $this$iterator;
    return i;
  };
  function ScatterSetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new ScatterSetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.p20($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ScatterSetWrapper(set) {
    this.c1j_1 = set;
  }
  protoOf(ScatterSetWrapper).j = function () {
    return this.c1j_1.j();
  };
  protoOf(ScatterSetWrapper).q = function () {
    return this.c1j_1.q();
  };
  protoOf(ScatterSetWrapper).g = function () {
    return iterator(ScatterSetWrapper$iterator$slambda_0(this, null));
  };
  protoOf(ScatterSetWrapper).r20 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = elements.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.compose.runtime.collection.ScatterSetWrapper.containsAll.<anonymous>' call
        if (!this.c1j_1.o(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(ScatterSetWrapper).s1 = function (elements) {
    return this.r20(elements);
  };
  protoOf(ScatterSetWrapper).je = function (element) {
    return this.c1j_1.o(element);
  };
  protoOf(ScatterSetWrapper).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.je((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ScopeMap() {
    this.m1c_1 = mutableScatterMapOf();
  }
  protoOf(ScopeMap).j = function () {
    return this.m1c_1.j();
  };
  protoOf(ScopeMap).e1j = function (key, scope) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = this.m1c_1;
    var index = this_0.ey(key);
    var inserting = index < 0;
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.ux_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.add.<anonymous>' call
    var value = tmp;
    var tmp_1;
    if (value == null) {
      tmp_1 = scope;
    } else {
      if (value instanceof MutableScatterSet) {
        (value instanceof MutableScatterSet ? value : THROW_CCE()).e(scope);
        tmp_1 = value;
      } else {
        var tmp_2;
        if (!(value === scope)) {
          var set = new MutableScatterSet();
          set.e(!(value == null) ? value : THROW_CCE());
          set.e(scope);
          tmp_2 = set;
        } else {
          tmp_2 = value;
        }
        tmp_1 = tmp_2;
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.tx_1[insertionIndex] = key;
      this_0.ux_1[insertionIndex] = computedValue;
    } else {
      this_0.ux_1[index] = computedValue;
    }
  };
  protoOf(ScopeMap).l1j = function (key, value) {
    this.m1c_1.dy(key, value);
  };
  protoOf(ScopeMap).d1j = function (element) {
    return this.m1c_1.d2(element);
  };
  protoOf(ScopeMap).a1j = function (key, scope) {
    var tmp0_elvis_lhs = this.m1c_1.f2(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp_0;
    if (value instanceof MutableScatterSet) {
      var set = value instanceof MutableScatterSet ? value : THROW_CCE();
      var removed = set.t1(scope);
      if (removed && set.q()) {
        this.m1c_1.w4(key);
      }
      return removed;
    } else {
      if (equals(value, scope)) {
        this.m1c_1.w4(key);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
    }
    return tmp_0;
  };
  protoOf(ScopeMap).n1k = function (scope) {
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = this.m1c_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.sx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  var tmp = this_0.tx_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.ux_1[index];
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    set.t1(scope);
                    tmp_1 = set.q();
                  } else {
                    tmp_1 = value === scope;
                  }
                  if (tmp_1) {
                    this_0.lw(index);
                  }
                }
                slot = slot.y2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  protoOf(ScopeMap).a1k = function () {
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$_0();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = this.m1c_1;
    var k = this_0.tx_1;
    var v = this_0.ux_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.sx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.a3(this_1.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.asMap.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp1_0 = !(tmp1 == null) ? tmp1 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    tmp_1 = set.rz();
                  } else {
                    tmp_1 = mutableSetOf([!(value == null) ? value : THROW_CCE()]);
                  }
                  // Inline function 'kotlin.collections.set' call
                  var value_0 = tmp_1;
                  result.v4(tmp1_0, value_0);
                }
                slot = slot.y2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  };
  function persistentSetOf() {
    return Companion_getInstance_9().t20();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function SingleElementListIterator(element, index) {
    AbstractListIterator.call(this, index, 1);
    this.w20_1 = element;
  }
  protoOf(SingleElementListIterator).i = function () {
    this.z20();
    this.x20_1 = this.x20_1 + 1 | 0;
    return this.w20_1;
  };
  protoOf(SingleElementListIterator).f4 = function () {
    this.a21();
    this.x20_1 = this.x20_1 - 1 | 0;
    return this.w20_1;
  };
  function AbstractListIterator(index, size) {
    this.x20_1 = index;
    this.y20_1 = size;
  }
  protoOf(AbstractListIterator).h = function () {
    return this.x20_1 < this.y20_1;
  };
  protoOf(AbstractListIterator).e4 = function () {
    return this.x20_1 > 0;
  };
  protoOf(AbstractListIterator).g4 = function () {
    return this.x20_1 - 1 | 0;
  };
  protoOf(AbstractListIterator).z20 = function () {
    if (!this.h())
      throw NoSuchElementException_init_$Create$_0();
  };
  protoOf(AbstractListIterator).a21 = function () {
    if (!this.e4())
      throw NoSuchElementException_init_$Create$_0();
  };
  function AbstractPersistentList$removeAll$lambda($elements) {
    return function (it) {
      return $elements.o(it);
    };
  }
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).n = function (elements) {
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.b21();
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    this_0.n(elements);
    return this_0.c21();
  };
  protoOf(AbstractPersistentList).t1 = function (element) {
    var index = this.r(element);
    if (!(index === -1)) {
      return this.z1(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).v1 = function (elements) {
    return this.d21(AbstractPersistentList$removeAll$lambda(elements));
  };
  protoOf(AbstractPersistentList).o = function (element) {
    return !(this.r(element) === -1);
  };
  protoOf(AbstractPersistentList).g = function () {
    return this.q1();
  };
  protoOf(AbstractPersistentList).q1 = function () {
    return this.r1(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.h21_1 = buffer;
  }
  protoOf(BufferIterator).i = function () {
    if (!this.h()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var tmp1 = this.x20_1;
    this.x20_1 = tmp1 + 1 | 0;
    return this.h21_1[tmp1];
  };
  protoOf(BufferIterator).f4 = function () {
    if (!this.e4()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.x20_1 = this.x20_1 - 1 | 0;
    return this.h21_1[this.x20_1];
  };
  function rootSize($this) {
    return rootSize_1($this.k21_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.k21_1 >> 5 > 1 << $this.l21_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.l21_1 + 5 | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.k21_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.l21_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.k21_1 + 1 | 0, $this.l21_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.k21_1 - 1 | 0, shift);
    var tmp1_elvis_lhs = root == null ? null : copyOf_0(root, 32);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp = fillArrayVal(Array(32), null);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === 5) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - 5 | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.k21_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.j21_1, 32);
    if (tailSize < 32) {
      var tmp0 = $this.j21_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = tailIndex + 1 | 0;
      arrayCopy(tmp0, newTail, destinationOffset, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.k21_1 + 1 | 0, $this.l21_1);
    }
    var lastElement = $this.j21_1[31];
    var tmp5 = $this.j21_1;
    var tmp7 = tailIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = tailSize - 1 | 0;
    arrayCopy(tmp5, newTail, tmp7, tailIndex, endIndex);
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        tmp = fillArrayVal(Array(32), null);
      } else {
        tmp = copyOf_0(root, 32);
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      arrayCopy(root, newRoot, destinationOffset, bufferIndex, 31);
      elementCarry.m21_1 = root[31];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, 32);
    var lowerLevelShift = shift - 5 | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    if (inductionVariable < 32)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.m21_1, elementCarry);
      }
       while (inductionVariable < 32);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.k21_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.j21_1, 32);
    if (index < (tailSize - 1 | 0)) {
      var tmp0 = $this.j21_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      arrayCopy(tmp0, newTail, index, startIndex, tailSize);
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === 33 ? copyOf_0(root, 32) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.m21_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - 5 | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === 5) {
      tailCarry.m21_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - 5 | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null && bufferIndex === 0) {
      return null;
    }
    var newRoot = copyOf_0(root, 32);
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        tmp = fillArrayVal(Array(32), null);
      } else {
        tmp = copyOf_0(root, 32);
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      arrayCopy(root, newRoot, bufferIndex, startIndex, 32);
      newRoot[31] = tailCarry.m21_1;
      tailCarry.m21_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = 31;
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, 32);
    var lowerLevelShift = shift - 5 | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.j21_1;
    }
    var buffer = $this.i21_1;
    var shift = $this.l21_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - 5 | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, 32);
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - 5 | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.i21_1 = root;
    this.j21_1 = tail;
    this.k21_1 = size;
    this.l21_1 = rootShift;
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.k21_1 > 32)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      var tmp$ret$0 = 'Trie-based persistent vector should have at least ' + ('33 elements, got ' + this.k21_1);
      throwIllegalArgumentException(tmp$ret$0);
    }
    assert((this.k21_1 - rootSize_1(this.k21_1) | 0) <= coerceAtMost(this.j21_1.length, 32));
  }
  protoOf(PersistentVector).j = function () {
    return this.k21_1;
  };
  protoOf(PersistentVector).e = function (element) {
    var tailSize = this.k21_1 - rootSize(this) | 0;
    if (tailSize < 32) {
      var newTail = copyOf_0(this.j21_1, 32);
      newTail[tailSize] = element;
      return new PersistentVector(this.i21_1, newTail, this.k21_1 + 1 | 0, this.l21_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.i21_1, this.j21_1, newTail_0);
  };
  protoOf(PersistentVector).e21 = function (index, element) {
    ListImplementation_instance.n21(index, this.k21_1);
    if (index === this.k21_1) {
      return this.e(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.i21_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.i21_1, this.l21_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.m21_1);
  };
  protoOf(PersistentVector).z1 = function (index) {
    ListImplementation_instance.o21(index, this.k21_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.i21_1, rootSize_0, this.l21_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.i21_1, this.l21_1, index, new ObjectRef(this.j21_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.l21_1, 0);
  };
  protoOf(PersistentVector).d21 = function (predicate) {
    // Inline function 'kotlin.also' call
    var this_0 = this.b21();
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.removeAll.<anonymous>' call
    this_0.y21(predicate);
    return this_0.c21();
  };
  protoOf(PersistentVector).b21 = function () {
    return new PersistentVectorBuilder(this, this.i21_1, this.j21_1, this.l21_1);
  };
  protoOf(PersistentVector).r1 = function (index) {
    ListImplementation_instance.n21(index, this.k21_1);
    var tmp = this.j21_1;
    return new PersistentVectorIterator(this.i21_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.k21_1, (this.l21_1 / 5 | 0) + 1 | 0);
  };
  protoOf(PersistentVector).p = function (index) {
    ListImplementation_instance.o21(index, this.k21_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & 31];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).x1 = function (index, element) {
    ListImplementation_instance.o21(index, this.k21_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.j21_1, 32);
      newTail[index & 31] = element;
      return new PersistentVector(this.i21_1, newTail, this.k21_1, this.l21_1);
    }
    var newRoot = setInRoot(this, this.i21_1, this.l21_1, index, element);
    return new PersistentVector(newRoot, this.j21_1, this.k21_1, this.l21_1);
  };
  function rootSize_0($this) {
    if ($this.x21_1 <= 32) {
      return 0;
    }
    return rootSize_1($this.x21_1);
  }
  function tailSize($this, size) {
    if (size <= 32) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.x21_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === 33 && buffer[32] === $this.u21_1;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    var tmp1 = mutableBuffer($this);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = coerceAtMost(buffer.length, 32);
    arrayCopy(buffer, tmp1, 0, 0, endIndex);
    return tmp1;
  }
  function makeMutableShiftingRight($this, buffer, distance) {
    if (isMutable($this, buffer)) {
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = 32 - distance | 0;
      arrayCopy(buffer, buffer, distance, 0, endIndex);
      return buffer;
    }
    var tmp6 = mutableBuffer($this);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = 32 - distance | 0;
    arrayCopy(buffer, tmp6, distance, 0, endIndex_0);
    return tmp6;
  }
  function mutableBufferWith($this, element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(33), null);
    buffer[0] = element;
    buffer[32] = $this.u21_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(33), null);
    buffer[32] = $this.u21_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.x21_1 >> 5 > 1 << $this.t21_1) {
      $this.v21_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.t21_1 + 5 | 0);
      $this.w21_1 = newTail;
      $this.t21_1 = $this.t21_1 + 5 | 0;
      $this.x21_1 = $this.x21_1 + 1 | 0;
      tmp = Unit_instance;
    } else if (root == null) {
      $this.v21_1 = filledTail;
      $this.w21_1 = newTail;
      $this.x21_1 = $this.x21_1 + 1 | 0;
      tmp = Unit_instance;
    } else {
      $this.v21_1 = pushTail_0($this, root, filledTail, $this.t21_1);
      $this.w21_1 = newTail;
      $this.x21_1 = $this.x21_1 + 1 | 0;
      tmp = Unit_instance;
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.x21_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 5) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - 5 | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < 32 && sourceIterator.h()) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.i();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> 5 < 1 << $this.t21_1 ? pushBuffers($this, root, rootSize, $this.t21_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.h()) {
      $this.t21_1 = $this.t21_1 + 5 | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.t21_1, $this.t21_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!buffersIterator.h()) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.pushBuffers.<anonymous>' call
      var tmp$ret$0 = 'invalid buffersIterator';
      throwIllegalArgumentException(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.pushBuffers.<anonymous>' call
      var tmp$ret$1 = 'negative shift';
      throwIllegalArgumentException(tmp$ret$1);
    }
    if (shift === 0) {
      return buffersIterator.i();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - 5 | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < 32) {
        tmp_1 = buffersIterator.h();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - 5 | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.w21_1);
    if (tailSize < 32) {
      var tmp0 = $this.w21_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = index + 1 | 0;
      arrayCopy(tmp0, mutableTail, destinationOffset, index, tailSize);
      mutableTail[index] = element;
      $this.v21_1 = root;
      $this.w21_1 = mutableTail;
      $this.x21_1 = $this.x21_1 + 1 | 0;
    } else {
      var lastElement = $this.w21_1[31];
      var tmp5 = $this.w21_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = index + 1 | 0;
      arrayCopy(tmp5, mutableTail, destinationOffset_0, index, 31);
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.m21_1 = root[31];
      var tmp1 = makeMutable($this, root);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      arrayCopy(root, tmp1, destinationOffset, bufferIndex, 31);
      var mutableRoot = tmp1;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - 5 | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    if (inductionVariable < 32)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.m21_1, elementCarry);
      }
       while (inductionVariable < 32);
    return mutableRoot_0;
  }
  function insertIntoRoot_1($this, elements, index, rightShift, buffers, nullBuffers, nextBuffer) {
    var tmp0 = $this.v21_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.insertIntoRoot.<anonymous>' call
        var message = 'root is null';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var startLeafIndex = index >> 5;
    var startLeaf = shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer);
    var lastLeafIndex = (rootSize_0($this) >> 5) - 1 | 0;
    var newNullBuffers = nullBuffers - (lastLeafIndex - startLeafIndex | 0) | 0;
    var newNextBuffer = newNullBuffers < nullBuffers ? ensureNotNull(buffers[newNullBuffers]) : nextBuffer;
    splitToBuffers($this, elements, index, startLeaf, 32, buffers, newNullBuffers, newNextBuffer);
  }
  function shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer) {
    var tmp0 = $this.v21_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.shiftLeafBuffers.<anonymous>' call
        var message = 'root is null';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var leafCount = rootSize_0($this) >> 5;
    var leafBufferIterator_0 = leafBufferIterator($this, leafCount);
    var bufferIndex = nullBuffers;
    var buffer = nextBuffer;
    while (!(leafBufferIterator_0.g4() === startLeafIndex)) {
      var currentBuffer = leafBufferIterator_0.f4();
      var tmp2 = buffer;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = 32 - rightShift | 0;
      arrayCopy(currentBuffer, tmp2, 0, startIndex, 32);
      buffer = makeMutableShiftingRight($this, currentBuffer, rightShift);
      bufferIndex = bufferIndex - 1 | 0;
      buffers[bufferIndex] = buffer;
    }
    return leafBufferIterator_0.f4();
  }
  function splitToBuffers($this, elements, index, startBuffer, startBufferSize, buffers, nullBuffers, nextBuffer) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(nullBuffers >= 1)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.splitToBuffers.<anonymous>' call
      var tmp$ret$0 = 'requires at least one nullBuffer';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var firstBuffer = makeMutable($this, startBuffer);
    buffers[0] = firstBuffer;
    var newNextBuffer = nextBuffer;
    var newNullBuffers = nullBuffers;
    var startBufferStartIndex = index & 31;
    var endBufferEndIndex = ((index + elements.j() | 0) - 1 | 0) & 31;
    var elementsToShift = startBufferSize - startBufferStartIndex | 0;
    if ((endBufferEndIndex + elementsToShift | 0) < 32) {
      var tmp2 = newNextBuffer;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = endBufferEndIndex + 1 | 0;
      arrayCopy(firstBuffer, tmp2, destinationOffset, startBufferStartIndex, startBufferSize);
    } else {
      var toCopyToLast = ((endBufferEndIndex + elementsToShift | 0) - 32 | 0) + 1 | 0;
      if (nullBuffers === 1) {
        newNextBuffer = firstBuffer;
      } else {
        newNextBuffer = mutableBuffer($this);
        newNullBuffers = newNullBuffers - 1 | 0;
        buffers[newNullBuffers] = newNextBuffer;
      }
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, nextBuffer, 0, startIndex, startBufferSize);
      var tmp12 = newNextBuffer;
      var tmp13 = endBufferEndIndex + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, tmp12, tmp13, startBufferStartIndex, endIndex);
    }
    var elementsIterator = elements.g();
    copyToBuffer($this, firstBuffer, startBufferStartIndex, elementsIterator);
    var inductionVariable = 1;
    var last = newNullBuffers;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buffers[i] = copyToBuffer($this, mutableBuffer($this), 0, elementsIterator);
      }
       while (inductionVariable < last);
    copyToBuffer($this, newNextBuffer, 0, elementsIterator);
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.w21_1;
    }
    var buffer = ensureNotNull($this.v21_1);
    var shift = $this.t21_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - 5 | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.x21_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.w21_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.w21_1[index];
      var tmp0 = $this.w21_1;
      var tmp1 = makeMutable($this, $this.w21_1);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      arrayCopy(tmp0, tmp1, index, startIndex, tailSize);
      var mutableTail = tmp1;
      mutableTail[tailSize - 1 | 0] = null;
      $this.v21_1 = root;
      $this.w21_1 = mutableTail;
      $this.x21_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.t21_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      var tmp1 = makeMutable($this, root);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      arrayCopy(root, tmp1, bufferIndex, startIndex, 32);
      var mutableRoot = tmp1;
      mutableRoot[31] = tailCarry.m21_1;
      tailCarry.m21_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = 31;
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - 5 | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.v21_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.w21_1 = tmp_0;
      $this.x21_1 = rootSize;
      $this.t21_1 = shift;
      return Unit_instance;
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.m21_1;
    tmp_1.w21_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.x21_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.v21_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.t21_1 = shift - 5 | 0;
    } else {
      $this.v21_1 = newRoot;
      $this.t21_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === 5) {
      tailCarry.m21_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - 5 | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null && bufferIndex === 0) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function removeAll($this, predicate) {
    var tailSize = tailSize_0($this);
    var bufferRef = new ObjectRef(null);
    if ($this.v21_1 == null) {
      return !(removeAllFromTail($this, predicate, tailSize, bufferRef) === tailSize);
    }
    var leafIterator = leafBufferIterator($this, 0);
    var bufferSize = 32;
    while (bufferSize === 32 && leafIterator.h()) {
      bufferSize = removeAll_0($this, predicate, leafIterator.i(), 32, bufferRef);
    }
    if (bufferSize === 32) {
      assert(!leafIterator.h());
      var newTailSize = removeAllFromTail($this, predicate, tailSize, bufferRef);
      if (newTailSize === 0) {
        pullLastBufferFromRoot_0($this, $this.v21_1, $this.x21_1, $this.t21_1);
      }
      return !(newTailSize === tailSize);
    }
    var unaffectedElementsCount = leafIterator.g4() << 5;
    // Inline function 'kotlin.collections.mutableListOf' call
    var buffers = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableListOf' call
    var recyclableBuffers = ArrayList_init_$Create$();
    while (leafIterator.h()) {
      var leaf = leafIterator.i();
      bufferSize = recyclableRemoveAll($this, predicate, leaf, 32, bufferSize, bufferRef, recyclableBuffers, buffers);
    }
    var newTailSize_0 = recyclableRemoveAll($this, predicate, $this.w21_1, tailSize, bufferSize, bufferRef, recyclableBuffers, buffers);
    var tmp = bufferRef.m21_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    fill_0(newTail, null, newTailSize_0, 32);
    var newRoot = buffers.q() ? ensureNotNull($this.v21_1) : pushBuffers($this, $this.v21_1, unaffectedElementsCount, $this.t21_1, buffers.g());
    var newRootSize = unaffectedElementsCount + (buffers.j() << 5) | 0;
    $this.v21_1 = retainFirst($this, newRoot, newRootSize);
    $this.w21_1 = newTail;
    $this.x21_1 = newRootSize + newTailSize_0 | 0;
    return true;
  }
  function retainFirst($this, root, size) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((size & 31) === 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.retainFirst.<anonymous>' call
      var tmp$ret$0 = 'invalid size';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (size === 0) {
      $this.t21_1 = 0;
      return null;
    }
    var lastIndex = size - 1 | 0;
    var newRoot = root;
    while (lastIndex >> $this.t21_1 === 0) {
      $this.t21_1 = $this.t21_1 - 5 | 0;
      var tmp = newRoot[0];
      newRoot = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    }
    return nullifyAfter($this, newRoot, lastIndex, $this.t21_1);
  }
  function nullifyAfter($this, root, index, shift) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.nullifyAfter.<anonymous>' call
      var tmp$ret$0 = 'shift should be positive';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (shift === 0) {
      return root;
    }
    var lastIndex = indexSegment(index, shift);
    var tmp = root[lastIndex];
    var newChild = nullifyAfter($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), index, shift - 5 | 0);
    var newRoot = root;
    if (lastIndex < 31 && !(newRoot[lastIndex + 1 | 0] == null)) {
      if (isMutable($this, newRoot)) {
        fill_0(newRoot, null, lastIndex + 1 | 0, 32);
      }
      var tmp1 = newRoot;
      var tmp2 = mutableBuffer($this);
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = lastIndex + 1 | 0;
      arrayCopy(tmp1, tmp2, 0, 0, endIndex);
      newRoot = tmp2;
    }
    if (!(newChild === newRoot[lastIndex])) {
      newRoot = makeMutable($this, newRoot);
      newRoot[lastIndex] = newChild;
    }
    return newRoot;
  }
  function removeAllFromTail($this, predicate, tailSize, bufferRef) {
    var newTailSize = removeAll_0($this, predicate, $this.w21_1, tailSize, bufferRef);
    if (newTailSize === tailSize) {
      assert(bufferRef.m21_1 === $this.w21_1);
      return tailSize;
    }
    var tmp = bufferRef.m21_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    fill_0(newTail, null, newTailSize, tailSize);
    $this.w21_1 = newTail;
    $this.x21_1 = $this.x21_1 - (tailSize - newTailSize | 0) | 0;
    return newTailSize;
  }
  function removeAll_0($this, predicate, buffer, bufferSize, bufferRef) {
    var newBuffer = buffer;
    var newBufferSize = bufferSize;
    var anyRemoved = false;
    var inductionVariable = 0;
    if (inductionVariable < bufferSize)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = buffer[index];
        var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (predicate(element)) {
          if (!anyRemoved) {
            newBuffer = makeMutable($this, buffer);
            newBufferSize = index;
            anyRemoved = true;
          }
        } else if (anyRemoved) {
          var tmp_0 = newBuffer;
          var tmp1 = newBufferSize;
          newBufferSize = tmp1 + 1 | 0;
          tmp_0[tmp1] = element;
        }
      }
       while (inductionVariable < bufferSize);
    bufferRef.m21_1 = newBuffer;
    return newBufferSize;
  }
  function recyclableRemoveAll($this, predicate, buffer, bufferSize, toBufferSize, bufferRef, recyclableBuffers, buffers) {
    if (isMutable($this, buffer)) {
      recyclableBuffers.e(buffer);
    }
    var tmp = bufferRef.m21_1;
    var toBuffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var newToBuffer = toBuffer;
    var newToBufferSize = toBufferSize;
    var inductionVariable = 0;
    if (inductionVariable < bufferSize)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_0 = buffer[index];
        var element = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        if (!predicate(element)) {
          if (newToBufferSize === 32) {
            var tmp_1;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!recyclableBuffers.q()) {
              tmp_1 = recyclableBuffers.z1(recyclableBuffers.j() - 1 | 0);
            } else {
              tmp_1 = mutableBuffer($this);
            }
            newToBuffer = tmp_1;
            newToBufferSize = 0;
          }
          var tmp_2 = newToBuffer;
          var tmp1 = newToBufferSize;
          newToBufferSize = tmp1 + 1 | 0;
          tmp_2[tmp1] = element;
        }
      }
       while (inductionVariable < bufferSize);
    bufferRef.m21_1 = newToBuffer;
    if (!(toBuffer === bufferRef.m21_1)) {
      buffers.e(toBuffer);
    }
    return newToBufferSize;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        $this.y3_1 = $this.y3_1 + 1 | 0;
      }
      oldElementCarry.m21_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - 5 | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function leafBufferIterator($this, index) {
    var tmp0 = $this.v21_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.leafBufferIterator.<anonymous>' call
        var message = 'Invalid root';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var root = tmp$ret$1;
    var leafCount = rootSize_0($this) >> 5;
    ListImplementation_instance.n21(index, leafCount);
    if ($this.t21_1 === 0) {
      return new SingleElementListIterator(root, index);
    }
    var trieHeight = $this.t21_1 / 5 | 0;
    return new TrieIterator(root, index, leafCount, trieHeight);
  }
  function PersistentVectorBuilder$removeAll$lambda($elements) {
    return function (it) {
      return $elements.o(it);
    };
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.q21_1 = vector;
    this.r21_1 = vectorRoot;
    this.s21_1 = vectorTail;
    this.t21_1 = rootShift;
    this.u21_1 = new MutabilityOwnership();
    this.v21_1 = this.r21_1;
    this.w21_1 = this.s21_1;
    this.x21_1 = this.q21_1.j();
  }
  protoOf(PersistentVectorBuilder).j = function () {
    return this.x21_1;
  };
  protoOf(PersistentVectorBuilder).z21 = function () {
    return this.y3_1;
  };
  protoOf(PersistentVectorBuilder).c21 = function () {
    var tmp = this;
    var tmp_0;
    if (this.v21_1 === this.r21_1 && this.w21_1 === this.s21_1) {
      tmp_0 = this.q21_1;
    } else {
      this.u21_1 = new MutabilityOwnership();
      this.r21_1 = this.v21_1;
      this.s21_1 = this.w21_1;
      var tmp_1;
      if (this.v21_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.w21_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.w21_1, this.x21_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.v21_1), this.w21_1, this.x21_1, this.t21_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.q21_1 = tmp_0;
    return this.q21_1;
  };
  protoOf(PersistentVectorBuilder).e = function (element) {
    this.y3_1 = this.y3_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < 32) {
      var mutableTail = makeMutable(this, this.w21_1);
      mutableTail[tailSize] = element;
      this.w21_1 = mutableTail;
      this.x21_1 = this.x21_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.v21_1, this.w21_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).n = function (elements) {
    if (elements.q()) {
      return false;
    }
    this.y3_1 = this.y3_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.g();
    if ((32 - tailSize | 0) >= elements.j()) {
      this.w21_1 = copyToBuffer(this, makeMutable(this, this.w21_1), tailSize, elementsIterator);
      this.x21_1 = this.x21_1 + elements.j() | 0;
    } else {
      var buffersSize = ((elements.j() + tailSize | 0) - 1 | 0) / 32 | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = fillArrayVal(Array(buffersSize), null);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.w21_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.v21_1;
      var tmp_1 = rootSize_0(this);
      tmp.v21_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.w21_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.x21_1 = this.x21_1 + elements.j() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).y1 = function (index, element) {
    ListImplementation_instance.n21(index, this.x21_1);
    if (index === this.x21_1) {
      this.e(element);
      return Unit_instance;
    }
    this.y3_1 = this.y3_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.v21_1, index - rootSize | 0, element);
      return Unit_instance;
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.v21_1), this.t21_1, index, element, elementCarry);
    var tmp = elementCarry.m21_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).u1 = function (index, elements) {
    ListImplementation_instance.n21(index, this.x21_1);
    if (index === this.x21_1) {
      return this.n(elements);
    }
    if (elements.q()) {
      return false;
    }
    this.y3_1 = this.y3_1 + 1 | 0;
    var unaffectedElementsCount = index >> 5 << 5;
    var buffersSize = (((this.x21_1 - unaffectedElementsCount | 0) + elements.j() | 0) - 1 | 0) / 32 | 0;
    if (buffersSize === 0) {
      assert(index >= rootSize_0(this));
      var startIndex = index & 31;
      var endIndex = ((index + elements.j() | 0) - 1 | 0) & 31;
      var tmp0 = this.w21_1;
      var tmp1 = makeMutable(this, this.w21_1);
      var tmp2 = endIndex + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex_0 = tailSize_0(this);
      arrayCopy(tmp0, tmp1, tmp2, startIndex, endIndex_0);
      var newTail = tmp1;
      copyToBuffer(this, newTail, startIndex, elements.g());
      this.w21_1 = newTail;
      this.x21_1 = this.x21_1 + elements.j() | 0;
      return true;
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var buffers = fillArrayVal(Array(buffersSize), null);
    var tailSize_1 = tailSize_0(this);
    var newTailSize = tailSize(this, this.x21_1 + elements.j() | 0);
    var newTail_0;
    if (index >= rootSize_0(this)) {
      newTail_0 = mutableBuffer(this);
      splitToBuffers(this, elements, index, this.w21_1, tailSize_1, buffers, buffersSize, newTail_0);
    } else if (newTailSize > tailSize_1) {
      var rightShift = newTailSize - tailSize_1 | 0;
      newTail_0 = makeMutableShiftingRight(this, this.w21_1, rightShift);
      insertIntoRoot_1(this, elements, index, rightShift, buffers, buffersSize, newTail_0);
    } else {
      var tmp6 = this.w21_1;
      var tmp7 = mutableBuffer(this);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex_0 = tailSize_1 - newTailSize | 0;
      arrayCopy(tmp6, tmp7, 0, startIndex_0, tailSize_1);
      newTail_0 = tmp7;
      var rightShift_0 = 32 - (tailSize_1 - newTailSize | 0) | 0;
      var lastBuffer = makeMutableShiftingRight(this, this.w21_1, rightShift_0);
      buffers[buffersSize - 1 | 0] = lastBuffer;
      insertIntoRoot_1(this, elements, index, rightShift_0, buffers, buffersSize - 1 | 0, lastBuffer);
    }
    var tmp = this;
    var tmp_0 = this.v21_1;
    tmp.v21_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, unaffectedElementsCount, isArray(buffers) ? buffers : THROW_CCE());
    this.w21_1 = newTail_0;
    this.x21_1 = this.x21_1 + elements.j() | 0;
    return true;
  };
  protoOf(PersistentVectorBuilder).p = function (index) {
    ListImplementation_instance.o21(index, this.x21_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & 31];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).z1 = function (index) {
    ListImplementation_instance.o21(index, this.x21_1);
    this.y3_1 = this.y3_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.v21_1, rootSize, this.t21_1, index - rootSize | 0);
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.w21_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.v21_1), this.t21_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.t21_1, 0);
    var tmp_0 = elementCarry.m21_1;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).v1 = function (elements) {
    return this.y21(PersistentVectorBuilder$removeAll$lambda(elements));
  };
  protoOf(PersistentVectorBuilder).y21 = function (predicate) {
    var anyRemoved = removeAll(this, predicate);
    if (anyRemoved) {
      this.y3_1 = this.y3_1 + 1 | 0;
    }
    return anyRemoved;
  };
  protoOf(PersistentVectorBuilder).x1 = function (index, element) {
    ListImplementation_instance.o21(index, this.x21_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.w21_1);
      if (!(mutableTail === this.w21_1)) {
        this.y3_1 = this.y3_1 + 1 | 0;
      }
      var tailIndex = index & 31;
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.w21_1 = mutableTail;
      return (oldElement == null ? true : !(oldElement == null)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.v21_1 = setInRoot_0(this, ensureNotNull(this.v21_1), this.t21_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.m21_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).g = function () {
    return this.q1();
  };
  protoOf(PersistentVectorBuilder).q1 = function () {
    return this.r1(0);
  };
  protoOf(PersistentVectorBuilder).r1 = function (index) {
    ListImplementation_instance.n21(index, this.x21_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.c22_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.d22_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).i = function () {
    this.z20();
    if (this.d22_1.h()) {
      this.x20_1 = this.x20_1 + 1 | 0;
      return this.d22_1.i();
    }
    var tmp3 = this.x20_1;
    this.x20_1 = tmp3 + 1 | 0;
    return this.c22_1[tmp3 - this.d22_1.y20_1 | 0];
  };
  protoOf(PersistentVectorIterator).f4 = function () {
    this.a21();
    if (this.x20_1 > this.d22_1.y20_1) {
      this.x20_1 = this.x20_1 - 1 | 0;
      return this.c22_1[this.x20_1 - this.d22_1.y20_1 | 0];
    }
    this.x20_1 = this.x20_1 - 1 | 0;
    return this.d22_1.f4();
  };
  function reset($this) {
    $this.y20_1 = $this.l22_1.x21_1;
    $this.m22_1 = $this.l22_1.z21();
    $this.o22_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.l22_1.v21_1;
    if (root == null) {
      $this.n22_1 = null;
      return Unit_instance;
    }
    var trieSize = rootSize_1($this.l22_1.x21_1);
    var trieIndex = coerceAtMost($this.x20_1, trieSize);
    var trieHeight = ($this.l22_1.t21_1 / 5 | 0) + 1 | 0;
    if ($this.n22_1 == null) {
      $this.n22_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.n22_1).p22(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.m22_1 === $this.l22_1.z21()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.o22_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.x21_1);
    this.l22_1 = builder;
    this.m22_1 = this.l22_1.z21();
    this.n22_1 = null;
    this.o22_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).f4 = function () {
    checkForComodification(this);
    this.a21();
    this.o22_1 = this.x20_1 - 1 | 0;
    var tmp1_elvis_lhs = this.n22_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.l22_1.w21_1;
      this.x20_1 = this.x20_1 - 1 | 0;
      var tmp_1 = tmp_0[this.x20_1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.x20_1 > trieIterator.y20_1) {
      var tmp_2 = this.l22_1.w21_1;
      this.x20_1 = this.x20_1 - 1 | 0;
      var tmp_3 = tmp_2[this.x20_1 - trieIterator.y20_1 | 0];
      return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    }
    this.x20_1 = this.x20_1 - 1 | 0;
    return trieIterator.f4();
  };
  protoOf(PersistentVectorMutableIterator).i = function () {
    checkForComodification(this);
    this.z20();
    this.o22_1 = this.x20_1;
    var tmp2_elvis_lhs = this.n22_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.l22_1.w21_1;
      var tmp1 = this.x20_1;
      this.x20_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.h()) {
      this.x20_1 = this.x20_1 + 1 | 0;
      return trieIterator.i();
    }
    var tmp_2 = this.l22_1.w21_1;
    var tmp6 = this.x20_1;
    this.x20_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.y20_1 | 0];
    return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).u3 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.l22_1.z1(this.o22_1);
    if (this.o22_1 < this.x20_1)
      this.x20_1 = this.o22_1;
    reset(this);
  };
  function bufferOfSize($this, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.q22_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_7;
  function Companion_getInstance_6() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_6();
    AbstractPersistentList.call(this);
    this.r22_1 = buffer;
    assert(this.r22_1.length <= 32);
  }
  protoOf(SmallPersistentVector).j = function () {
    return this.r22_1.length;
  };
  protoOf(SmallPersistentVector).e = function (element) {
    if (this.j() < 32) {
      var newBuffer = copyOf_0(this.r22_1, this.j() + 1 | 0);
      newBuffer[this.j()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.r22_1, tail, this.j() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).n = function (elements) {
    if ((this.j() + elements.j() | 0) <= 32) {
      var newBuffer = copyOf_0(this.r22_1, this.j() + elements.j() | 0);
      var index = this.j();
      var tmp0_iterator = elements.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.b21();
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    this_0.n(elements);
    return this_0.c21();
  };
  protoOf(SmallPersistentVector).d21 = function (predicate) {
    var newBuffer = this.r22_1;
    var newSize = this.j();
    var anyRemoved = false;
    var inductionVariable = 0;
    var last = this.j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.r22_1[index];
        var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (predicate(element)) {
          if (!anyRemoved) {
            // Inline function 'kotlin.collections.copyOf' call
            // Inline function 'kotlin.js.asDynamic' call
            newBuffer = this.r22_1.slice();
            newSize = index;
            anyRemoved = true;
          }
        } else if (anyRemoved) {
          var tmp_0 = newBuffer;
          var tmp1 = newSize;
          newSize = tmp1 + 1 | 0;
          tmp_0[tmp1] = element;
        }
      }
       while (inductionVariable < last);
    var tmp2_subject = newSize;
    return tmp2_subject === this.j() ? this : tmp2_subject === 0 ? Companion_getInstance_6().q22_1 : new SmallPersistentVector(copyOfRange(newBuffer, 0, newSize));
  };
  protoOf(SmallPersistentVector).e21 = function (index, element) {
    ListImplementation_instance.n21(index, this.j());
    if (index === this.j()) {
      return this.e(element);
    }
    if (this.j() < 32) {
      var newBuffer = bufferOfSize(this, this.j() + 1 | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.r22_1;
      arrayCopy(this_0, newBuffer, 0, 0, index);
      var tmp5 = this.r22_1;
      var tmp7 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.j();
      arrayCopy(tmp5, newBuffer, tmp7, index, endIndex);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var root = this.r22_1.slice();
    var tmp11 = this.r22_1;
    var tmp13 = index + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.j() - 1 | 0;
    arrayCopy(tmp11, root, tmp13, index, endIndex_0);
    root[index] = element;
    var tail = presizedBufferWith(this.r22_1[31]);
    return new PersistentVector(root, tail, this.j() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).z1 = function (index) {
    ListImplementation_instance.o21(index, this.j());
    if (this.j() === 1) {
      return Companion_getInstance_6().q22_1;
    }
    var newBuffer = copyOf_0(this.r22_1, this.j() - 1 | 0);
    var tmp0 = this.r22_1;
    var tmp3 = index + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.j();
    arrayCopy(tmp0, newBuffer, index, tmp3, endIndex);
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).b21 = function () {
    return new PersistentVectorBuilder(this, null, this.r22_1, 0);
  };
  protoOf(SmallPersistentVector).r = function (element) {
    return indexOf(this.r22_1, element);
  };
  protoOf(SmallPersistentVector).r1 = function (index) {
    ListImplementation_instance.n21(index, this.j());
    var tmp = this.r22_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.j());
  };
  protoOf(SmallPersistentVector).p = function (index) {
    ListImplementation_instance.o21(index, this.j());
    var tmp = this.r22_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).x1 = function (index, element) {
    ListImplementation_instance.o21(index, this.j());
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = this.r22_1.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.g22_1 - startLevel | 0, 5);
    var i = startLevel;
    while (i < $this.g22_1) {
      var tmp = $this.h22_1;
      var tmp_0 = i;
      var tmp_1 = $this.h22_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - 5 | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.x20_1, shift) === indexPredicate) {
      shift = shift + 5 | 0;
    }
    if (shift > 0) {
      var level = ($this.g22_1 - 1 | 0) - (shift / 5 | 0) | 0;
      fillPath($this, $this.x20_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.x20_1 & 31;
    var tmp = $this.h22_1[$this.g22_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.g22_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size_0 = this.g22_1;
    tmp.h22_1 = fillArrayVal(Array(size_0), null);
    this.i22_1 = index === size;
    this.h22_1[0] = root;
    fillPath(this, index - (this.i22_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).p22 = function (root, index, size, height) {
    this.x20_1 = index;
    this.y20_1 = size;
    this.g22_1 = height;
    if (this.h22_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.h22_1 = fillArrayVal(Array(height), null);
    }
    this.h22_1[0] = root;
    this.i22_1 = index === size;
    fillPath(this, index - (this.i22_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).i = function () {
    if (!this.h()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var result = elementAtCurrentIndex(this);
    this.x20_1 = this.x20_1 + 1 | 0;
    if (this.x20_1 === this.y20_1) {
      this.i22_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).f4 = function () {
    if (!this.e4()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.x20_1 = this.x20_1 - 1 | 0;
    if (this.i22_1) {
      this.i22_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, 31);
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance_6().q22_1;
  }
  function presizedBufferWith(element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(32), null);
    buffer[0] = element;
    return buffer;
  }
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.m21_1 = value;
  }
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.s22_1 = new PersistentHashMap(Companion_getInstance_8().t22_1, 0);
  }
  protoOf(Companion_7).u22 = function () {
    var tmp = this.s22_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_8;
  function Companion_getInstance_7() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_7();
    AbstractMap.call(this);
    this.x22_1 = node;
    this.y22_1 = size;
  }
  protoOf(PersistentHashMap).j = function () {
    return this.y22_1;
  };
  protoOf(PersistentHashMap).g2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).h2 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).i2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).d2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.x22_1.d23(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).f2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.x22_1.e23(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).v4 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.x22_1.f23(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.g23_1, this.j() + newNodeResult.h23_1 | 0);
  };
  protoOf(PersistentHashMap).w4 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.x22_1.i23(tmp$ret$0, key, 0);
    if (this.x22_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_7().u22();
    }
    return new PersistentHashMap(newNode, this.j() - 1 | 0);
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.j23_1[pathIndex].p23()) {
      return pathIndex;
    }
    if ($this.j23_1[pathIndex].t23()) {
      var node = $this.j23_1[pathIndex].q23();
      if (pathIndex === 6) {
        $this.j23_1[pathIndex + 1 | 0].s23(node.c23_1, node.c23_1.length);
      } else {
        $this.j23_1[pathIndex + 1 | 0].s23(node.c23_1, imul(2, node.r23()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.j23_1[$this.k23_1].p23()) {
      return Unit_instance;
    }
    var inductionVariable = $this.k23_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 && $this.j23_1[i].t23()) {
          $this.j23_1[i].u23();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.k23_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.j23_1[i - 1 | 0].u23();
        }
        $this.j23_1[i].s23(Companion_getInstance_8().t22_1.c23_1, 0);
      }
       while (0 <= inductionVariable);
    $this.l23_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.h())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.j23_1 = path;
    this.k23_1 = 0;
    this.l23_1 = true;
    this.j23_1[0].s23(node.c23_1, imul(2, node.r23()));
    this.k23_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).h = function () {
    return this.l23_1;
  };
  protoOf(PersistentHashMapBaseIterator).i = function () {
    checkHasNext(this);
    var result = this.j23_1[this.k23_1].i();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.m23_1 = Companion_getInstance_8().t22_1.c23_1;
    this.n23_1 = 0;
    this.o23_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).v23 = function (buffer, dataSize, index) {
    this.m23_1 = buffer;
    this.n23_1 = dataSize;
    this.o23_1 = index;
  };
  protoOf(TrieNodeBaseIterator).s23 = function (buffer, dataSize) {
    this.v23(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).p23 = function () {
    return this.o23_1 < this.n23_1;
  };
  protoOf(TrieNodeBaseIterator).t23 = function () {
    assert(this.o23_1 >= this.n23_1);
    return this.o23_1 < this.m23_1.length;
  };
  protoOf(TrieNodeBaseIterator).q23 = function () {
    assert(this.t23());
    var tmp = this.m23_1[this.o23_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).u23 = function () {
    assert(this.t23());
    this.o23_1 = this.o23_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).h = function () {
    return this.p23();
  };
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).i = function () {
    assert(this.p23());
    this.o23_1 = this.o23_1 + 2 | 0;
    var tmp = this.m23_1[this.o23_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).i = function () {
    assert(this.p23());
    this.o23_1 = this.o23_1 + 2 | 0;
    var tmp = this.m23_1[this.o23_1 - 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).i = function () {
    assert(this.p23());
    this.o23_1 = this.o23_1 + 2 | 0;
    var tmp = this.m23_1[this.o23_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.m23_1[this.o23_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.f24_1 = key;
    this.g24_1 = value;
  }
  protoOf(MapEntry).b2 = function () {
    return this.f24_1;
  };
  protoOf(MapEntry).c2 = function () {
    return this.g24_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.b2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.c2();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = (equals(tmp0_safe_receiver.b2(), this.b2()) && equals(tmp0_safe_receiver.c2(), this.c2()));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.b2()) + '=' + toString_0(this.c2());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.h24_1 = map;
  }
  protoOf(PersistentHashMapKeys).j = function () {
    return this.h24_1.j();
  };
  protoOf(PersistentHashMapKeys).l5 = function (element) {
    return this.h24_1.d2(element);
  };
  protoOf(PersistentHashMapKeys).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.l5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).g = function () {
    return new PersistentHashMapKeysIterator(this.h24_1.x22_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.i24_1 = map;
  }
  protoOf(PersistentHashMapValues).j = function () {
    return this.i24_1.j();
  };
  protoOf(PersistentHashMapValues).s5 = function (element) {
    return this.i24_1.e2(element);
  };
  protoOf(PersistentHashMapValues).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.s5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).g = function () {
    return new PersistentHashMapValuesIterator(this.i24_1.x22_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.j24_1 = map;
  }
  protoOf(PersistentHashMapEntries).j = function () {
    return this.j24_1.j();
  };
  protoOf(PersistentHashMapEntries).k24 = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.j24_1.f2(element.b2());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.c2());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.c2() == null && this.j24_1.d2(element.b2()) : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).o = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.k24((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).g = function () {
    return new PersistentHashMapEntriesIterator(this.j24_1.x22_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.g23_1 = node;
    this.h23_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.a23_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.c23_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.c23_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.l24(positionMask);
    var newBuffer = insertEntryAtIndex($this.c23_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.z22_1 | positionMask, $this.a23_1, newBuffer);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.c23_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.z22_1, $this.a23_1, newBuffer);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.c23_1;
    if (newNodeBuffer.length === 2 && newNode.a23_1 === 0) {
      if ($this.c23_1.length === 1) {
        newNode.z22_1 = $this.a23_1;
        return newNode;
      }
      var keyIndex = $this.l24(positionMask);
      var newBuffer = replaceNodeWithEntry($this.c23_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.z22_1 ^ positionMask, $this.a23_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.c23_1, $this.c23_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.z22_1, $this.a23_1, newBuffer_0);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.c23_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.c23_1, nodeIndex);
    return TrieNode_init_$Create$($this.z22_1, $this.a23_1 ^ positionMask, newBuffer);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.m24(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.c23_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.z22_1 ^ positionMask, $this.a23_1 | positionMask, newBuffer);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.c23_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.c23_1, keyIndex);
    return TrieNode_init_$Create$($this.z22_1 ^ positionMask, $this.a23_1, newBuffer);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.c23_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.c23_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.c23_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.c23_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.c23_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.c23_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.c23_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.c23_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.c23_1.length), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.t22_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_9;
  function Companion_getInstance_8() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_8();
    this.z22_1 = dataMap;
    this.a23_1 = nodeMap;
    this.b23_1 = ownedBy;
    this.c23_1 = buffer;
  }
  protoOf(TrieNode).r23 = function () {
    return countOneBits(this.z22_1);
  };
  protoOf(TrieNode).n24 = function (positionMask) {
    return !((this.z22_1 & positionMask) === 0);
  };
  protoOf(TrieNode).l24 = function (positionMask) {
    return imul(2, countOneBits(this.z22_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).m24 = function (positionMask) {
    return (this.c23_1.length - 1 | 0) - countOneBits(this.a23_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).o24 = function (nodeIndex) {
    var tmp = this.c23_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).d23 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.n24(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.l24(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.o24(this.m24(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.d23(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).e23 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.n24(keyPositionMask)) {
      var keyIndex = this.l24(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.o24(this.m24(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.e23(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).f23 = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.n24(keyPositionMask)) {
      var keyIndex = this.l24(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.m24(keyPositionMask);
      var targetNode = this.o24(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.f23(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var node = putResult.g23_1;
      tmp_2.g23_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).i23 = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.n24(keyPositionMask)) {
      var keyIndex = this.l24(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.m24(keyPositionMask);
      var targetNode = this.o24(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.i23(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    var tmp8 = keyIndex + 2 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp8, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    var tmp2 = nodeIndex + 2 | 0;
    var tmp3 = nodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, tmp2, tmp3, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    var tmp9 = nodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, tmp9, endIndex);
    return newBuffer;
  }
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    var tmp13 = newNodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp13, nodeIndex, endIndex);
    return newBuffer;
  }
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    var tmp9 = keyIndex + 2 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp9, endIndex);
    return newBuffer;
  }
  function Companion_9() {
    Companion_instance_10 = this;
    this.s20_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_7().u22());
  }
  protoOf(Companion_9).t20 = function () {
    return this.s20_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_9() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_9();
    AbstractSet.call(this);
    this.p24_1 = firstElement;
    this.q24_1 = lastElement;
    this.r24_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).j = function () {
    return this.r24_1.j();
  };
  protoOf(PersistentOrderedSet).o = function (element) {
    return this.r24_1.d2(element);
  };
  protoOf(PersistentOrderedSet).e = function (element) {
    if (this.r24_1.d2(element)) {
      return this;
    }
    if (this.q()) {
      var newMap = this.r24_1.v4(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.q24_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.r24_1.f2(lastElement));
    var newMap_0 = this.r24_1.v4(lastElement, lastLinks.u24(element)).v4(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.p24_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).t1 = function (element) {
    var tmp0_elvis_lhs = this.r24_1.f2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.r24_1.w4(element);
    if (links.v24()) {
      var tmp0 = newMap;
      // Inline function 'kotlin.collections.get' call
      var key = links.s24_1;
      var tmp$ret$0 = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).f2(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.s24_1;
      newMap = tmp_0.v4((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.u24(links.t24_1));
    }
    if (links.x24()) {
      var tmp2 = newMap;
      // Inline function 'kotlin.collections.get' call
      var key_0 = links.t24_1;
      var tmp$ret$1 = (isInterface(tmp2, KtMap) ? tmp2 : THROW_CCE()).f2(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.t24_1;
      newMap = tmp_2.v4((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.w24(links.s24_1));
    }
    var newFirstElement = !links.v24() ? links.t24_1 : this.p24_1;
    var newLastElement = !links.x24() ? links.s24_1 : this.q24_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).g = function () {
    return new PersistentOrderedSetIterator(this.p24_1, this.r24_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.s24_1 = previous;
    this.t24_1 = next;
  }
  protoOf(Links).u24 = function (newNext) {
    return new Links(this.s24_1, newNext);
  };
  protoOf(Links).w24 = function (newPrevious) {
    return new Links(newPrevious, this.t24_1);
  };
  protoOf(Links).x24 = function () {
    return !(this.t24_1 === EndOfChain_instance);
  };
  protoOf(Links).v24 = function () {
    return !(this.s24_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.h())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.y24_1 = nextElement;
    this.z24_1 = map;
    this.a25_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).h = function () {
    return this.a25_1 < this.z24_1.j();
  };
  protoOf(PersistentOrderedSetIterator).i = function () {
    checkHasNext_0(this);
    var tmp = this.y24_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.a25_1 = this.a25_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.z24_1.f2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + toString_0(result) + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.y24_1 = tmp_1.t24_1;
    return result;
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function ListImplementation() {
  }
  protoOf(ListImplementation).o21 = function (index, size) {
    if (index < 0 || index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).n21 = function (index, size) {
    if (index < 0 || index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  function assert(condition) {
  }
  function get_lambdaKey() {
    _init_properties_ComposableLambda_kt__wilkc();
    return lambdaKey;
  }
  var lambdaKey;
  function composableLambdaInstance(key, tracked, block) {
    _init_properties_ComposableLambda_kt__wilkc();
    return new ComposableLambdaImpl(key, tracked, block);
  }
  function replacableWith(_this__u8e3s4, other) {
    _init_properties_ComposableLambda_kt__wilkc();
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = !_this__u8e3s4.a1h() || equals(_this__u8e3s4, other) || equals(_this__u8e3s4.x12_1, other.x12_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function rememberComposableLambda(key, tracked, block, $composer, $changed) {
    _init_properties_ComposableLambda_kt__wilkc();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1573003438, 'C(rememberComposableLambda)P(1,2)*628@13280L54:ComposableLambda.kt#9drcc');
    if (isTraceInProgress()) {
      traceEventStart(-1573003438, $changed, -1, 'androidx.compose.runtime.internal.rememberComposableLambda (ComposableLambda.kt:628)');
    }
    sourceInformationMarkerStart($composer_0, 1920923313, 'CC(remember):ComposableLambda.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.l1f();
    var tmp;
    if (false || it === Companion_getInstance().v18_1) {
      // Inline function 'androidx.compose.runtime.internal.rememberComposableLambda.<anonymous>' call
      var value = new ComposableLambdaImpl(key, tracked, block);
      $composer_0.w1f(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.internal.rememberComposableLambda.<anonymous>' call
    tmp1_group.g25(block);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function composableLambda(composer, key, tracked, block) {
    _init_properties_ComposableLambda_kt__wilkc();
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp$ret$0 = rotateLeft(key, 1);
    composer.i1b(tmp$ret$0, get_lambdaKey());
    var slot = composer.l1f();
    var tmp;
    if (slot === Companion_getInstance().v18_1) {
      var value = new ComposableLambdaImpl(key, tracked, block);
      composer.w1f(value);
      tmp = value;
    } else {
      if (!(slot instanceof ComposableLambdaImpl))
        THROW_CCE();
      slot.g25(block);
      tmp = slot;
    }
    var result = tmp;
    composer.l1b();
    return result;
  }
  var properties_initialized_ComposableLambda_kt_u87f2i;
  function _init_properties_ComposableLambda_kt__wilkc() {
    if (!properties_initialized_ComposableLambda_kt_u87f2i) {
      properties_initialized_ComposableLambda_kt_u87f2i = true;
      lambdaKey = new Object();
    }
  }
  function IntRef(element) {
    element = element === VOID ? 0 : element;
    this.s1y_1 = element;
  }
  protoOf(IntRef).toString = function () {
    return 'IntRef(element = ' + this.s1y_1 + ')@' + toString_1(hashCode(this), 16);
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_8().t22_1;
    tmp.h25_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_11;
  function Companion_getInstance_10() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_10();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).i2 = function () {
    return protoOf(PersistentHashMap).i2.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).x1f = function (key, value) {
    var tmp0_elvis_lhs = this.x22_1.f23(hashCode(key), key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentCompositionLocalHashMap(newNodeResult.g23_1, this.j() + newNodeResult.h23_1 | 0);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_10().h25_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_jvm_kt__b3bhkj();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_0($this, key) {
    var high = $this.m1u_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.n1u_1[0].equals(key) ? 0 : $this.n1u_1[0].x(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.n1u_1[mid];
      var comparison = midVal.r2(key);
      if (comparison.x(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.x(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.m1u_1 = size;
    this.n1u_1 = keys;
    this.o1u_1 = values;
  }
  protoOf(ThreadMap).p1u = function (key) {
    var index = find_0(this, key);
    return index >= 0 ? this.o1u_1[index] : null;
  };
  protoOf(ThreadMap).q1u = function (key, value) {
    var index = find_0(this, key);
    if (index < 0)
      return false;
    this.o1u_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).r1u = function (key, value) {
    var size = this.m1u_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.o1u_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize && source < size) {
        var oldKey = this.n1u_1[source];
        var oldValue = this.o1u_1[source];
        if (oldKey.x(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.n1u_1[source];
          var oldValue_0 = this.o1u_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_jvm_kt_y907p1;
  function _init_properties_ThreadMap_jvm_kt__b3bhkj() {
    if (!properties_initialized_ThreadMap_jvm_kt_y907p1) {
      properties_initialized_ThreadMap_jvm_kt_y907p1 = true;
      var tmp = longArray(0);
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = HashSet_init_$Create$(_this__u8e3s4.j());
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.p(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.e(item);
      }
       while (inductionVariable <= last);
    return this_0;
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.f(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.j() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.p(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.f(separator);
        }
        if (limit < 0 || count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 && count > limit) {
      buffer.f(truncated);
    }
    buffer.f(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.f(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.f(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.b8(element.e1_1);
        } else {
          _this__u8e3s4.f(toString_0(element));
        }
      }
    }
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function set_applyObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    applyObservers = _set____db54di;
  }
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function set_globalWriteObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    globalWriteObservers = _set____db54di;
  }
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function StateObject() {
  }
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.m25_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).qm = function () {
    return this.m25_1();
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).f3 = function () {
    return this.m25_1;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ObserverHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.f3(), other.f3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).hashCode = function () {
    return hashCode(this.f3());
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.n25_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).qm = function () {
    return this.n25_1();
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).f3 = function () {
    return this.n25_1;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ObserverHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.f3(), other.f3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).hashCode = function () {
    return hashCode(this.f3());
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_applyObservers(minus(get_applyObservers(), $observer));
      return Unit_instance;
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_globalWriteObservers(minus(get_globalWriteObservers(), $observer));
      advanceGlobalSnapshot_0();
      return Unit_instance;
    };
  }
  function Companion_11() {
    this.q1n_1 = 1;
  }
  protoOf(Companion_11).j11 = function () {
    return currentSnapshot();
  };
  protoOf(Companion_11).i1u = function () {
    return !(get_threadSnapshot().co() == null);
  };
  protoOf(Companion_11).u1o = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o25(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_11).w1q = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    set_applyObservers(plus_1(get_applyObservers(), observer));
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_11).p25 = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    set_globalWriteObservers(plus_1(get_globalWriteObservers(), observer));
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_11).t1n = function () {
    return currentSnapshot().q25();
  };
  protoOf(Companion_11).r1n = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().co().r25();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pz()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_12;
  function Companion_getInstance_11() {
    return Companion_instance_12;
  }
  function access$_get_pinningTrackingHandle__7vwthz($this) {
    return $this.k1c_1;
  }
  function Snapshot(id, invalid) {
    this.h1c_1 = invalid;
    this.i1c_1 = id;
    this.j1c_1 = false;
    this.k1c_1 = !(id === 0) ? trackPinning(id, this.s25()) : -1;
  }
  protoOf(Snapshot).t25 = function (_set____db54di) {
    this.h1c_1 = _set____db54di;
  };
  protoOf(Snapshot).s25 = function () {
    return this.h1c_1;
  };
  protoOf(Snapshot).u25 = function (_set____db54di) {
    this.i1c_1 = _set____db54di;
  };
  protoOf(Snapshot).l1c = function () {
    return this.i1c_1;
  };
  protoOf(Snapshot).v25 = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).w25 = function () {
    return 0;
  };
  protoOf(Snapshot).qm = function () {
    this.j1c_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.y25();
  };
  protoOf(Snapshot).v1o = function () {
    var previous = get_threadSnapshot().co();
    get_threadSnapshot().y1l(this);
    return previous;
  };
  protoOf(Snapshot).w1o = function (snapshot) {
    get_threadSnapshot().y1l(snapshot);
  };
  protoOf(Snapshot).c26 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.d26();
    this.e26();
  };
  protoOf(Snapshot).d26 = function () {
    set_openSnapshots(get_openSnapshots().j26(this.l1c()));
  };
  protoOf(Snapshot).e26 = function () {
    this.y25();
  };
  protoOf(Snapshot).k26 = function () {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.j1c_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var tmp$ret$0 = 'Cannot use a disposed snapshot';
      throwIllegalArgumentException(tmp$ret$0);
    }
  };
  protoOf(Snapshot).y25 = function () {
    if (this.k1c_1 >= 0) {
      releasePinningLocked(this.k1c_1);
      this.k1c_1 = -1;
    }
  };
  protoOf(Snapshot).l26 = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.k1c_1;
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.k1c_1 = -1;
    return this_0;
  };
  function ObserverHandle() {
  }
  function validateNotApplied($this) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.j1p_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var tmp$ret$0 = 'Unsupported operation on a snapshot that has been applied';
      throwIllegalStateException(tmp$ret$0);
    }
  }
  function validateNotAppliedOrPinned($this) {
    var tmp;
    if (!$this.j1p_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = access$_get_pinningTrackingHandle__7vwthz($this) >= 0;
    }
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var tmp$ret$1 = 'Unsupported operation on a disposed or applied snapshot';
      throwIllegalStateException(tmp$ret$1);
    }
  }
  function abandon($this) {
    var modified = $this.r25();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.m26(null);
      var id = $this.l1c();
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = modified.lz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = modified.kz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.a3(this_0.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp = k[index];
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
                    var current = ((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()).j1u();
                    while (!(current == null)) {
                      if (current.g1u_1 === id || contains($this.g1p_1, current.g1u_1)) {
                        current.g1u_1 = 0;
                      }
                      current = current.h1u_1;
                    }
                  }
                  slot = slot.y2(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    $this.c26();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.h1p_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.h1p_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.n26_1 = new Int32Array(0);
  }
  var Companion_instance_13;
  function Companion_getInstance_12() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_12();
    Snapshot.call(this, id, invalid);
    this.b1p_1 = readObserver;
    this.c1p_1 = writeObserver;
    this.d1p_1 = 0;
    this.e1p_1 = null;
    this.f1p_1 = null;
    this.g1p_1 = Companion_getInstance_13().o26_1;
    this.h1p_1 = Companion_getInstance_12().n26_1;
    this.i1p_1 = 1;
    this.j1p_1 = false;
  }
  protoOf(MutableSnapshot).z25 = function () {
    return this.b1p_1;
  };
  protoOf(MutableSnapshot).a26 = function () {
    return this.c1p_1;
  };
  protoOf(MutableSnapshot).o25 = function (readObserver, writeObserver) {
    this.k26();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.p26(this.l1c());
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().q26(newId));
    var currentInvalid = this.s25();
    this.t25(currentInvalid.q26(newId));
    // Inline function 'kotlin.also' call
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.l1c() + 1 | 0, newId), mergedReadObserver(readObserver, this.z25()), mergedWriteObserver(writeObserver, this.a26()), this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.j1p_1 && !this.j1c_1) {
      var previousId = this.l1c();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      var tmp0_0 = access$_get_nextSnapshotId_$tSnapshotKt_vxgvey();
      access$_set_nextSnapshotId_$tSnapshotKt_xcaltq(tmp0_0 + 1 | 0);
      this.u25(tmp0_0);
      access$_set_openSnapshots_$tSnapshotKt_9lk9nh(access$_get_openSnapshots_$tSnapshotKt_7cpqp5().q26(this.l1c()));
      this.t25(addRange(this.s25(), previousId + 1 | 0, this.l1c()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).k1p = function () {
    var modified = this.r25();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().co(), this, get_openSnapshots().j26(get_currentGlobalSnapshot().co().l1c())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.j() === 0) {
      this.d26();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().co();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.r25();
      if (!(previousModified == null) && previousModified.pz()) {
        observers = get_applyObservers();
        globalModified = previousModified;
      }
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().co();
      var result = this.r26(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().j26(previousGlobalSnapshot_0.l1c()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.d26();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.r25();
      this.m26(null);
      previousGlobalSnapshot_0.m26(null);
      observers = get_applyObservers();
      globalModified = previousModified_0;
    }
    this.j1p_1 = true;
    if (!(globalModified == null)) {
      var nonNullGlobalModified = wrapIntoSet(ensureNotNull(globalModified));
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!nonNullGlobalModified.q()) {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        var this_0 = observers;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.p(index);
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
            item(nonNullGlobalModified, this);
          }
           while (inductionVariable <= last);
      }
    }
    if (!(modified == null) && modified.pz()) {
      var modifiedSet = wrapIntoSet(modified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_1.j() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_1.p(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modifiedSet, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.e26();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = tmp0_safe_receiver.lz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = tmp0_safe_receiver.kz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex)
          do {
            var i = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_2 = slot;
            if (!this_2.a3(this_2.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount)
                do {
                  var j = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_1 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp = k[index_1];
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
                    var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    processForUnusedRecordsLocked(it);
                  }
                  slot = slot.y2(8);
                }
                 while (inductionVariable_2 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k_0 = modified.lz_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m_0 = modified.kz_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.a3(this_3.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_4 = 0;
              if (inductionVariable_4 < bitCount_0)
                do {
                  var j_0 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_2 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp_0 = k_0[index_2];
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
                    var it_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    processForUnusedRecordsLocked(it_0);
                  }
                  slot_0 = slot_0.y2(8);
                }
                 while (inductionVariable_4 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
    var tmp2_safe_receiver = this.f1p_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_5 = 0;
      var last_1 = tmp2_safe_receiver.j() - 1 | 0;
      if (inductionVariable_5 <= last_1)
        do {
          var index_3 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var item_1 = tmp2_safe_receiver.p(index_3);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_5 <= last_1);
    }
    this.f1p_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).x25 = function () {
    return false;
  };
  protoOf(MutableSnapshot).qm = function () {
    if (!this.j1c_1) {
      protoOf(Snapshot).qm.call(this);
      this.s26(this);
    }
  };
  protoOf(MutableSnapshot).t26 = function (snapshot) {
    this.i1p_1 = this.i1p_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).s26 = function (snapshot) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.i1p_1 > 0)) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.nestedDeactivated.<anonymous>' call
      var tmp$ret$0 = 'no pending nested snapshots';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.i1p_1 = this.i1p_1 - 1 | 0;
    if (this.i1p_1 === 0) {
      if (!this.j1p_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).q25 = function () {
    if (this.j1p_1 || this.j1c_1)
      return Unit_instance;
    this.u26();
  };
  protoOf(MutableSnapshot).d26 = function () {
    set_openSnapshots(get_openSnapshots().j26(this.l1c()).v26(this.g1p_1));
  };
  protoOf(MutableSnapshot).e26 = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).e26.call(this);
  };
  protoOf(MutableSnapshot).r26 = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.s25().q26(this.l1c()).w26(this.g1p_1);
    var modified = ensureNotNull(this.r25());
    var statesToRemove = null;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = modified.lz_1;
    $l$block_2: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = modified.kz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.a3(this_0.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  $l$block_1: {
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
                    var first = tmp1.j1u();
                    var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
                    var tmp_0;
                    if (tmp0_elvis_lhs == null) {
                      break $l$block_1;
                    } else {
                      tmp_0 = tmp0_elvis_lhs;
                    }
                    var current = tmp_0;
                    var tmp1_elvis_lhs = readable(first, this.l1c(), start);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block_1;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var previous = tmp_1;
                    if (previous.g1u_1 === 1) {
                      break $l$block_1;
                    }
                    if (!equals(current, previous)) {
                      var tmp2_elvis_lhs = readable(first, this.l1c(), this.s25());
                      var tmp_2;
                      if (tmp2_elvis_lhs == null) {
                        readError();
                      } else {
                        tmp_2 = tmp2_elvis_lhs;
                      }
                      var applied = tmp_2;
                      var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.f2(current);
                      var tmp_3;
                      if (tmp4_elvis_lhs == null) {
                        // Inline function 'kotlin.run' call
                        // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                        tmp_3 = tmp1.l1u(previous, current, applied);
                      } else {
                        tmp_3 = tmp4_elvis_lhs;
                      }
                      var merged = tmp_3;
                      if (merged == null)
                        return new Failure(this);
                      else if (!equals(merged, applied))
                        if (equals(merged, current)) {
                          var tmp6_elvis_lhs = mergedRecords;
                          var tmp_4;
                          if (tmp6_elvis_lhs == null) {
                            // Inline function 'kotlin.collections.mutableListOf' call
                            // Inline function 'kotlin.also' call
                            var this_1 = ArrayList_init_$Create$();
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            mergedRecords = this_1;
                            tmp_4 = this_1;
                          } else {
                            tmp_4 = tmp6_elvis_lhs;
                          }
                          tmp_4.e(to(tmp1, current.c1u()));
                          var tmp7_elvis_lhs = statesToRemove;
                          var tmp_5;
                          if (tmp7_elvis_lhs == null) {
                            // Inline function 'kotlin.collections.mutableListOf' call
                            // Inline function 'kotlin.also' call
                            var this_2 = ArrayList_init_$Create$();
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            statesToRemove = this_2;
                            tmp_5 = this_2;
                          } else {
                            tmp_5 = tmp7_elvis_lhs;
                          }
                          tmp_5.e(tmp1);
                        } else {
                          var tmp8_elvis_lhs = mergedRecords;
                          var tmp_6;
                          if (tmp8_elvis_lhs == null) {
                            // Inline function 'kotlin.collections.mutableListOf' call
                            // Inline function 'kotlin.also' call
                            var this_3 = ArrayList_init_$Create$();
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            mergedRecords = this_3;
                            tmp_6 = this_3;
                          } else {
                            tmp_6 = tmp8_elvis_lhs;
                          }
                          tmp_6.e(!equals(merged, previous) ? to(tmp1, merged) : to(tmp1, previous.c1u()));
                        }
                    }
                  }
                }
                slot = slot.y2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_2;
            }
          }
        }
         while (!(i === lastIndex));
    }
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
      this.u26();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last = tmp0_safe_receiver.j() - 1 | 0;
      if (inductionVariable_1 <= last)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item = tmp0_safe_receiver.p(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state = item.la();
          var stateRecord = item.ma();
          stateRecord.g1u_1 = this.l1c();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          get_lock();
          stateRecord.h1u_1 = state.j1u();
          state.k1u(stateRecord);
        }
         while (inductionVariable_1 <= last);
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_0 = tmp1_safe_receiver.j() - 1 | 0;
      if (inductionVariable_2 <= last_0)
        do {
          var index_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_0 = tmp1_safe_receiver.p(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.t1(item_0);
        }
         while (inductionVariable_2 <= last_0);
      var mergedList = this.f1p_1;
      this.f1p_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).u26 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.p26(this.l1c());
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.j1p_1 && !this.j1c_1) {
      var previousId = this.l1c();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      var tmp0 = access$_get_nextSnapshotId_$tSnapshotKt_vxgvey();
      access$_set_nextSnapshotId_$tSnapshotKt_xcaltq(tmp0 + 1 | 0);
      this.u25(tmp0);
      access$_set_openSnapshots_$tSnapshotKt_9lk9nh(access$_get_openSnapshots_$tSnapshotKt_7cpqp5().q26(this.l1c()));
      this.t25(addRange(this.s25(), previousId + 1 | 0, this.l1c()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).p26 = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.g1p_1 = this.g1p_1.q26(id);
  };
  protoOf(MutableSnapshot).x26 = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      var tmp1 = this.h1p_1;
      // Inline function 'kotlin.intArrayOf' call
      // Inline function 'kotlin.collections.plus' call
      var elements = new Int32Array([id]);
      tmp.h1p_1 = primitiveArrayConcat([tmp1, elements]);
    }
  };
  protoOf(MutableSnapshot).y26 = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.h1p_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.h1p_1 = tmp_0;
  };
  protoOf(MutableSnapshot).z26 = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.g1p_1 = this.g1p_1.w26(snapshots);
  };
  protoOf(MutableSnapshot).b26 = function (state) {
    var tmp0_elvis_lhs = this.r25();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf_0();
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.m26(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.e(state);
  };
  protoOf(MutableSnapshot).v25 = function (_set____db54di) {
    this.d1p_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).w25 = function () {
    return this.d1p_1;
  };
  protoOf(MutableSnapshot).m26 = function (_set____db54di) {
    this.e1p_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).r25 = function () {
    return this.e1p_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.a27_1 = snapshot;
  }
  function SnapshotApplyResult() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.p(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new MutableSnapshot(tmp0, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
    var it = get_globalWriteObservers();
    var tmp0_elvis_lhs = singleOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = GlobalSnapshot$_init_$lambda_36kgl8(it);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp$ret$4 = tmp;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$4);
  }
  protoOf(GlobalSnapshot).o25 = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).q25 = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).o27 = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).s26 = function (snapshot) {
    return this.o27(snapshot);
  };
  protoOf(GlobalSnapshot).p27 = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).t26 = function (snapshot) {
    return this.p27(snapshot);
  };
  protoOf(GlobalSnapshot).k1p = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).qm = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.y25();
  };
  function StateRecord() {
    this.g1u_1 = currentSnapshot().l1c();
    this.h1u_1 = null;
  }
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.q27(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().vv(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().w27(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().co();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().co() : tmp0_elvis_lhs;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if (!(readObserver == null) && !(parentObserver_0 == null) && !(readObserver === parentObserver_0)) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if (!(writeObserver == null) && !(parentObserver == null) && !(writeObserver === parentObserver)) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().co();
    modified = previousGlobalSnapshot.r25();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().vv(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
      try {
        var observers = get_applyObservers();
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.p(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(wrapIntoSet(tmp0_safe_receiver), previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
      }finally {
        get_pendingApplyObserverCount().vv(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = tmp0_safe_receiver_0.lz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = tmp0_safe_receiver_0.kz_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= lastIndex)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.a3(this_0.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < bitCount)
                do {
                  var j = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp_1 = k[index_0];
                    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
                    var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                    processForUnusedRecordsLocked(it);
                  }
                  slot = slot.y2(8);
                }
                 while (inductionVariable_1 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp_0 = Unit_instance;
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function deactivate($this) {
    if (!$this.l28_1) {
      $this.l28_1 = true;
      $this.k28_1.s26($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.k28_1 = parent;
    this.l28_1 = false;
    this.k28_1.t26(this);
  }
  protoOf(NestedMutableSnapshot).qm = function () {
    if (!this.j1c_1) {
      protoOf(MutableSnapshot).qm.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).k1p = function () {
    if (this.k28_1.j1p_1 || this.k28_1.j1c_1)
      return new Failure(this);
    var modified = this.r25();
    var id = this.l1c();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.k28_1, this, this.k28_1.s25()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.j() === 0) {
      this.c26();
    } else {
      var result = this.r26(this.k28_1.l1c(), optimisticMerges_0, this.k28_1.s25());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.k28_1.r25();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.g11(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.k28_1.m26(modified);
        this.m26(null);
      }
    }
    if (this.k28_1.l1c() < id) {
      this.k28_1.u26();
    }
    this.k28_1.t25(this.k28_1.s25().j26(id).v26(this.g1p_1));
    this.k28_1.p26(id);
    this.k28_1.x26(this.l26());
    this.k28_1.z26(this.g1p_1);
    this.k28_1.y26(this.h1p_1);
    this.j1p_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.q26(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.r25();
    var id = currentSnapshot.l1c();
    if (modified == null)
      return null;
    var start = applyingSnapshot.s25().q26(applyingSnapshot.l1c()).w26(applyingSnapshot.g1p_1);
    var result = null;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = modified.lz_1;
    $l$block_1: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = modified.kz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.a3(this_0.w2().x2(7)).a3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.a3(new Long(255, 0)).x(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  $l$block_0: {
                    // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
                    var first = tmp1.j1u();
                    var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
                    var tmp_0;
                    if (tmp0_elvis_lhs == null) {
                      break $l$block_0;
                    } else {
                      tmp_0 = tmp0_elvis_lhs;
                    }
                    var current = tmp_0;
                    var tmp1_elvis_lhs = readable(first, id, start);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block_0;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var previous = tmp_1;
                    if (!equals(current, previous)) {
                      var tmp2_elvis_lhs = readable(first, applyingSnapshot.l1c(), applyingSnapshot.s25());
                      var tmp_2;
                      if (tmp2_elvis_lhs == null) {
                        readError();
                      } else {
                        tmp_2 = tmp2_elvis_lhs;
                      }
                      var applied = tmp_2;
                      var merged = tmp1.l1u(previous, current, applied);
                      if (!(merged == null)) {
                        var tmp3_elvis_lhs = result;
                        var tmp_3;
                        if (tmp3_elvis_lhs == null) {
                          // Inline function 'kotlin.collections.hashMapOf' call
                          // Inline function 'kotlin.also' call
                          var this_1 = HashMap_init_$Create$_0();
                          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                          result = this_1;
                          tmp_3 = this_1;
                        } else {
                          tmp_3 = tmp3_elvis_lhs;
                        }
                        // Inline function 'kotlin.collections.set' call
                        tmp_3.v4(current, merged);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                slot = slot.y2(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_1;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var openSnapshots = get_openSnapshots();
    if (!openSnapshots.p(snapshot.l1c())) {
      var tmp = snapshot.l1c();
      var tmp_0 = snapshot.j1c_1;
      var tmp0_safe_receiver = snapshot instanceof MutableSnapshot ? snapshot : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1p_1;
      var tmp_1 = toString(tmp1_elvis_lhs == null ? 'read-only' : tmp1_elvis_lhs);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.validateOpen.<anonymous>' call
      // Inline function 'kotlin.error' call
      var message = 'Snapshot is not open: id=' + tmp + ', disposed=' + tmp_0 + ', applied=' + tmp_1 + ', lowestPin=' + get_pinningTable().m28(-1);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().j26(previousGlobalSnapshot.l1c()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().j26(previousGlobalSnapshot.l1c()));
    get_currentGlobalSnapshot().y1k(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.qm();
    set_openSnapshots(get_openSnapshots().q26(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.n28_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.p28_1[i];
        var value = entry == null ? null : entry.co();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.p28_1[currentUsed] = entry;
            this_0.o28_1[currentUsed] = this_0.o28_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.p28_1[i_0] = null;
        this_0.o28_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.n28_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().r28(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.g1u_1 < current.g1u_1 ? current : candidate;
      }
      current = current.h1u_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.j1u();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().m28(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.g1u_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.g1u_1 < validRecord.g1u_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp0 = state.j1u();
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var current_0 = tmp0;
                var youngest = tmp0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.g1u_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.g1u_1 < current_0.g1u_1)
                    youngest = current_0;
                  current_0 = current_0.h1u_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.g1u_1 = 0;
            recordToOverwrite.b1u(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.h1u_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.g1u_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return !(candidateSnapshot === 0) && candidateSnapshot <= currentSnapshot && !invalid.p(candidateSnapshot);
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_12.j11();
    var tmp0_safe_receiver = snapshot.z25();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.l1c(), snapshot.s25());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_12.j11();
      var tmp_0 = state.j1u();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.l1c(), syncSnapshot.s25());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var snapshot = Companion_instance_12.j11();
    var tmp0_elvis_lhs = readable(r, snapshot.l1c(), snapshot.s25());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      var syncSnapshot = Companion_instance_12.j11();
      tmp = readable(r, syncSnapshot.l1c(), syncSnapshot.s25());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.v25(snapshot.w25() + 1 | 0);
    var tmp1_safe_receiver = snapshot.a26();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.x25()) {
      snapshot.b26(state);
    }
    var id = snapshot.l1c();
    if (candidate.g1u_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.g1u_1 = id;
    if (!(candidate.g1u_1 === 1)) {
      snapshot.b26(state);
    }
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.g1u_1 = 2147483647;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.c1u();
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.g1u_1 = 2147483647;
      this_0.h1u_1 = state.j1u();
      state.k1u(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.j1u();
    var validRecord = null;
    var reuseLimit = get_pinningTable().m28(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_13().o26_1;
    while (!(current == null)) {
      var currentId = current.g1u_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.g1u_1 < validRecord.g1u_1 ? current : validRecord;
        }
      }
      current = current.h1u_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.x25()) {
      snapshot.b26(state);
    }
    var id = snapshot.l1c();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.s25());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.g1u_1 === snapshot.l1c())
      return readData;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writableRecord.<anonymous>' call
    var tmp0_elvis_lhs_0 = readable(state.j1u(), id, snapshot.s25());
    var tmp_0;
    if (tmp0_elvis_lhs_0 == null) {
      readError();
    } else {
      tmp_0 = tmp0_elvis_lhs_0;
    }
    var newReadData = tmp_0;
    var tmp_1 = newReadData.g1u_1 === id ? newReadData : newWritableRecordLocked(newReadData, state, snapshot);
    var newData = tmp_1 instanceof StateRecord ? tmp_1 : THROW_CCE();
    if (!(readData.g1u_1 === 1)) {
      snapshot.b26(state);
    }
    return newData;
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.b1u(_this__u8e3s4);
    newData.g1u_1 = snapshot.l1c();
    return newData;
  }
  function access$_get_openSnapshots_$tSnapshotKt_7cpqp5() {
    return get_openSnapshots();
  }
  function access$_set_openSnapshots_$tSnapshotKt_9lk9nh(_set____db54di) {
    return set_openSnapshots(_set____db54di);
  }
  function access$_get_nextSnapshotId_$tSnapshotKt_vxgvey() {
    return get_nextSnapshotId();
  }
  function access$_set_nextSnapshotId_$tSnapshotKt_xcaltq(_set____db54di) {
    return set_nextSnapshotId(_set____db54di);
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_openSnapshots(get_openSnapshots().q26(result.l1c()));
      return result;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = new Object();
      openSnapshots = Companion_getInstance_13().o26_1;
      nextSnapshotId = 2;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      applyObservers = emptyList();
      globalWriteObservers = emptyList();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      // Inline function 'kotlin.also' call
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_13().o26_1);
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().q26(this_0.l1c()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().co();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.s27_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap_1($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.s27_1;
    var half = $this.r27_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.r27_1 && values[right] < values[left]) {
        if (values[right] < values[current]) {
          swap_1($this, right, current);
          current = right;
        } else
          return Unit_instance;
      } else if (values[left] < values[current]) {
        swap_1($this, left, current);
        current = left;
      } else
        return Unit_instance;
    }
  }
  function swap_1($this, a, b) {
    var values = $this.s27_1;
    var index = $this.t27_1;
    var handles = $this.u27_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.s27_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    var tmp0 = $this.s27_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = tmp0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    var tmp5 = $this.t27_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = tmp5.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp5;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.s27_1 = newValues;
    $this.t27_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.u27_1.length;
    if ($this.v27_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      var tmp0 = $this.u27_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = tmp0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.u27_1 = newHandles;
    }
    var handle = $this.v27_1;
    $this.v27_1 = $this.u27_1[$this.v27_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.u27_1[handle] = $this.v27_1;
    $this.v27_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.r27_1 = 0;
    this.s27_1 = new Int32Array(16);
    this.t27_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.u27_1 = tmp_1;
    this.v27_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).m28 = function (default_0) {
    return this.r27_1 > 0 ? this.s27_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).vv = function (value) {
    ensure(this, this.r27_1 + 1 | 0);
    var tmp1 = this.r27_1;
    this.r27_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.s27_1[i] = value;
    this.t27_1[i] = handle;
    this.u27_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).w27 = function (handle) {
    var i = this.u27_1[handle];
    swap_1(this, i, this.r27_1 - 1 | 0);
    this.r27_1 = this.r27_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_13() {
    Companion_instance_14 = this;
    this.o26_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_14;
  function Companion_getInstance_13() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function access$_get_upperSet__2kurhn($this) {
    return $this.f26_1;
  }
  function access$_get_lowerSet__9mjss6($this) {
    return $this.g26_1;
  }
  function access$_get_lowerBound__ou44uq($this) {
    return $this.h26_1;
  }
  function access$_get_belowBound__uc78e($this) {
    return $this.i26_1;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.a29_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).j29 = function ($this$sequence, $completion) {
    var tmp = this.k29($this$sequence, $completion);
    tmp.v8_1 = Unit_instance;
    tmp.w8_1 = null;
    return tmp.b9();
  };
  protoOf(SnapshotIdSet$iterator$slambda).p9 = function (p1, $completion) {
    return this.j29(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).b9 = function () {
    var suspendResult = this.v8_1;
    $sm: do
      try {
        var tmp = this.t8_1;
        switch (tmp) {
          case 0:
            this.u8_1 = 15;
            this.c29_1 = this.a29_1.i26_1;
            if (!(this.c29_1 == null)) {
              this.d29_1 = intArrayIterator(this.c29_1);
              this.t8_1 = 1;
              continue $sm;
            } else {
              this.t8_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.d29_1.h()) {
              this.t8_1 = 3;
              continue $sm;
            }

            this.e29_1 = this.d29_1.i();
            this.t8_1 = 2;
            suspendResult = this.b29_1.re(this.e29_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t8_1 = 1;
            continue $sm;
          case 3:
            this.t8_1 = 4;
            continue $sm;
          case 4:
            if (!this.a29_1.g26_1.equals(new Long(0, 0))) {
              this.f29_1 = until(0, 64).g();
              this.t8_1 = 5;
              continue $sm;
            } else {
              this.t8_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.f29_1.h()) {
              this.t8_1 = 8;
              continue $sm;
            }

            this.g29_1 = this.f29_1.i();
            if (!this.a29_1.g26_1.a3((new Long(1, 0)).x2(this.g29_1)).equals(new Long(0, 0))) {
              this.t8_1 = 6;
              suspendResult = this.b29_1.re(this.g29_1 + this.a29_1.h26_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.t8_1 = 7;
              continue $sm;
            }

          case 6:
            this.t8_1 = 7;
            continue $sm;
          case 7:
            this.t8_1 = 5;
            continue $sm;
          case 8:
            this.t8_1 = 9;
            continue $sm;
          case 9:
            if (!this.a29_1.f26_1.equals(new Long(0, 0))) {
              this.h29_1 = until(0, 64).g();
              this.t8_1 = 10;
              continue $sm;
            } else {
              this.t8_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.h29_1.h()) {
              this.t8_1 = 13;
              continue $sm;
            }

            this.i29_1 = this.h29_1.i();
            if (!this.a29_1.f26_1.a3((new Long(1, 0)).x2(this.i29_1)).equals(new Long(0, 0))) {
              this.t8_1 = 11;
              suspendResult = this.b29_1.re((this.i29_1 + 64 | 0) + this.a29_1.h26_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.t8_1 = 12;
              continue $sm;
            }

          case 11:
            this.t8_1 = 12;
            continue $sm;
          case 12:
            this.t8_1 = 10;
            continue $sm;
          case 13:
            this.t8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.w8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.u8_1 === 15) {
          throw e;
        } else {
          this.t8_1 = this.u8_1;
          this.w8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).k29 = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.a29_1, completion);
    i.b29_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.j29($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_13();
    this.f26_1 = upperSet;
    this.g26_1 = lowerSet;
    this.h26_1 = lowerBound;
    this.i26_1 = belowBound;
  }
  protoOf(SnapshotIdSet).p = function (bit) {
    var offset = bit - this.h26_1 | 0;
    if (offset >= 0 && offset < 64) {
      return !(new Long(1, 0)).x2(offset).a3(this.g26_1).equals(new Long(0, 0));
    } else if (offset >= 64 && offset < 128) {
      return !(new Long(1, 0)).x2(offset - 64 | 0).a3(this.f26_1).equals(new Long(0, 0));
    } else if (offset > 0) {
      return false;
    } else {
      var tmp0_safe_receiver = this.i26_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
        tmp = binarySearch(tmp0_safe_receiver, bit) >= 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    }
  };
  protoOf(SnapshotIdSet).q26 = function (bit) {
    var offset = bit - this.h26_1 | 0;
    if (offset >= 0 && offset < 64) {
      var mask = (new Long(1, 0)).x2(offset);
      if (this.g26_1.a3(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.f26_1, this.g26_1.b3(mask), this.h26_1, this.i26_1);
      }
    } else if (offset >= 64 && offset < 128) {
      var mask_0 = (new Long(1, 0)).x2(offset - 64 | 0);
      if (this.f26_1.a3(mask_0).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.f26_1.b3(mask_0), this.g26_1, this.h26_1, this.i26_1);
      }
    } else if (offset >= 128) {
      if (!this.p(bit)) {
        var newUpperSet = this.f26_1;
        var newLowerSet = this.g26_1;
        var newLowerBound = this.h26_1;
        var newBelowBound = null;
        var targetLowerBound = imul((bit + 1 | 0) / 64 | 0, 64);
        $l$loop: while (newLowerBound < targetLowerBound) {
          if (!newLowerSet.equals(new Long(0, 0))) {
            if (newBelowBound == null) {
              // Inline function 'kotlin.collections.mutableListOf' call
              // Inline function 'kotlin.apply' call
              var this_0 = ArrayList_init_$Create$();
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
              var tmp0_safe_receiver = this.i26_1;
              if (tmp0_safe_receiver == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>' call
                // Inline function 'kotlin.collections.forEach' call
                var inductionVariable = 0;
                var last = tmp0_safe_receiver.length;
                while (inductionVariable < last) {
                  var element = tmp0_safe_receiver[inductionVariable];
                  inductionVariable = inductionVariable + 1 | 0;
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                  this_0.e(element);
                }
              }
              newBelowBound = this_0;
            }
            // Inline function 'kotlin.repeat' call
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < 64)
              do {
                var index = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                if (!newLowerSet.a3((new Long(1, 0)).x2(index)).equals(new Long(0, 0))) {
                  newBelowBound.e(index + newLowerBound | 0);
                }
              }
               while (inductionVariable_0 < 64);
          }
          if (newUpperSet.equals(new Long(0, 0))) {
            newLowerBound = targetLowerBound;
            newLowerSet = new Long(0, 0);
            break $l$loop;
          }
          newLowerSet = newUpperSet;
          newUpperSet = new Long(0, 0);
          newLowerBound = newLowerBound + 64 | 0;
        }
        var tmp = newUpperSet;
        var tmp_0 = newLowerSet;
        var tmp_1 = newLowerBound;
        var tmp0_safe_receiver_0 = newBelowBound;
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
        return (new SnapshotIdSet(tmp, tmp_0, tmp_1, tmp1_elvis_lhs == null ? this.i26_1 : tmp1_elvis_lhs)).q26(bit);
      }
    } else {
      var tmp2_elvis_lhs = this.i26_1;
      var tmp_2;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.intArrayOf' call
        var tmp$ret$3 = new Int32Array([bit]);
        return new SnapshotIdSet(this.f26_1, this.g26_1, this.h26_1, tmp$ret$3);
      } else {
        tmp_2 = tmp2_elvis_lhs;
      }
      var array = tmp_2;
      var location = binarySearch(array, bit);
      if (location < 0) {
        var insertLocation = -(location + 1 | 0) | 0;
        var newSize = array.length + 1 | 0;
        var newBelowBound_0 = new Int32Array(newSize);
        // Inline function 'kotlin.collections.copyInto' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = array;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_3, newBelowBound_0, 0, 0, insertLocation);
        var tmp12 = insertLocation + 1 | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = newSize - 1 | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = array;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_4, newBelowBound_0, tmp12, insertLocation, endIndex);
        newBelowBound_0[insertLocation] = bit;
        return new SnapshotIdSet(this.f26_1, this.g26_1, this.h26_1, newBelowBound_0);
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).j26 = function (bit) {
    var offset = bit - this.h26_1 | 0;
    if (offset >= 0 && offset < 64) {
      var mask = (new Long(1, 0)).x2(offset);
      if (!this.g26_1.a3(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.f26_1, this.g26_1.a3(mask.w2()), this.h26_1, this.i26_1);
      }
    } else if (offset >= 64 && offset < 128) {
      var mask_0 = (new Long(1, 0)).x2(offset - 64 | 0);
      if (!this.f26_1.a3(mask_0).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.f26_1.a3(mask_0.w2()), this.g26_1, this.h26_1, this.i26_1);
      }
    } else if (offset < 0) {
      var array = this.i26_1;
      if (!(array == null)) {
        var location = binarySearch(array, bit);
        if (location >= 0) {
          var newSize = array.length - 1 | 0;
          if (newSize === 0) {
            return new SnapshotIdSet(this.f26_1, this.g26_1, this.h26_1, null);
          }
          var newBelowBound = new Int32Array(newSize);
          if (location > 0) {
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp, newBelowBound, 0, 0, location);
          }
          if (location < newSize) {
            var tmp8 = location + 1 | 0;
            // Inline function 'kotlin.collections.copyInto' call
            var endIndex = newSize + 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_0 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_0, newBelowBound, location, tmp8, endIndex);
          }
          return new SnapshotIdSet(this.f26_1, this.g26_1, this.h26_1, newBelowBound);
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).v26 = function (bits) {
    if (bits === Companion_getInstance_13().o26_1)
      return this;
    if (this === Companion_getInstance_13().o26_1)
      return Companion_getInstance_13().o26_1;
    var tmp;
    if (bits.h26_1 === this.h26_1 && bits.i26_1 === this.i26_1) {
      tmp = new SnapshotIdSet(this.f26_1.a3(bits.f26_1.w2()), this.g26_1.a3(bits.g26_1.w2()), this.h26_1, this.i26_1);
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
      var accumulator = this;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
      var belowBound = access$_get_belowBound__uc78e(bits);
      if (!(belowBound == null)) {
        var inductionVariable = 0;
        var last = belowBound.length;
        while (inductionVariable < last) {
          var element = belowBound[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
          accumulator = accumulator.j26(element);
        }
      }
      if (!access$_get_lowerSet__9mjss6(bits).equals(new Long(0, 0))) {
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 64)
          do {
            var index = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!access$_get_lowerSet__9mjss6(bits).a3((new Long(1, 0)).x2(index)).equals(new Long(0, 0))) {
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
              var element_0 = index + access$_get_lowerBound__ou44uq(bits) | 0;
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
              accumulator = accumulator.j26(element_0);
            }
          }
           while (inductionVariable_0 < 64);
      }
      if (!access$_get_upperSet__2kurhn(bits).equals(new Long(0, 0))) {
        var inductionVariable_1 = 0;
        if (inductionVariable_1 < 64)
          do {
            var index_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            if (!access$_get_upperSet__2kurhn(bits).a3((new Long(1, 0)).x2(index_0)).equals(new Long(0, 0))) {
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
              var element_1 = (index_0 + 64 | 0) + access$_get_lowerBound__ou44uq(bits) | 0;
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
              accumulator = accumulator.j26(element_1);
            }
          }
           while (inductionVariable_1 < 64);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).w26 = function (bits) {
    if (bits === Companion_getInstance_13().o26_1)
      return this;
    if (this === Companion_getInstance_13().o26_1)
      return bits;
    var tmp;
    if (bits.h26_1 === this.h26_1 && bits.i26_1 === this.i26_1) {
      tmp = new SnapshotIdSet(this.f26_1.b3(bits.f26_1), this.g26_1.b3(bits.g26_1), this.h26_1, this.i26_1);
    } else {
      var tmp_0;
      if (this.i26_1 == null) {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
        var accumulator = bits;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
        var belowBound = access$_get_belowBound__uc78e(this);
        if (!(belowBound == null)) {
          var inductionVariable = 0;
          var last = belowBound.length;
          while (inductionVariable < last) {
            var element = belowBound[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
            accumulator = accumulator.q26(element);
          }
        }
        if (!access$_get_lowerSet__9mjss6(this).equals(new Long(0, 0))) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < 64)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (!access$_get_lowerSet__9mjss6(this).a3((new Long(1, 0)).x2(index)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_0 = index + access$_get_lowerBound__ou44uq(this) | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator = accumulator.q26(element_0);
              }
            }
             while (inductionVariable_0 < 64);
        }
        if (!access$_get_upperSet__2kurhn(this).equals(new Long(0, 0))) {
          var inductionVariable_1 = 0;
          if (inductionVariable_1 < 64)
            do {
              var index_0 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              if (!access$_get_upperSet__2kurhn(this).a3((new Long(1, 0)).x2(index_0)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_1 = (index_0 + 64 | 0) + access$_get_lowerBound__ou44uq(this) | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator = accumulator.q26(element_1);
              }
            }
             while (inductionVariable_1 < 64);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
        var accumulator_0 = this;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
        var belowBound_0 = access$_get_belowBound__uc78e(bits);
        if (!(belowBound_0 == null)) {
          var inductionVariable_2 = 0;
          var last_0 = belowBound_0.length;
          while (inductionVariable_2 < last_0) {
            var element_2 = belowBound_0[inductionVariable_2];
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
            accumulator_0 = accumulator_0.q26(element_2);
          }
        }
        if (!access$_get_lowerSet__9mjss6(bits).equals(new Long(0, 0))) {
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < 64)
            do {
              var index_1 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              if (!access$_get_lowerSet__9mjss6(bits).a3((new Long(1, 0)).x2(index_1)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_3 = index_1 + access$_get_lowerBound__ou44uq(bits) | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator_0 = accumulator_0.q26(element_3);
              }
            }
             while (inductionVariable_3 < 64);
        }
        if (!access$_get_upperSet__2kurhn(bits).equals(new Long(0, 0))) {
          var inductionVariable_4 = 0;
          if (inductionVariable_4 < 64)
            do {
              var index_2 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              if (!access$_get_upperSet__2kurhn(bits).a3((new Long(1, 0)).x2(index_2)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_4 = (index_2 + 64 | 0) + access$_get_lowerBound__ou44uq(bits) | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator_0 = accumulator_0.q26(element_4);
              }
            }
             while (inductionVariable_4 < 64);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).g = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).g();
  };
  protoOf(SnapshotIdSet).q27 = function (default_0) {
    var belowBound = this.i26_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.g26_1.equals(new Long(0, 0)))
      return this.h26_1 + countTrailingZeroBits(this.g26_1) | 0;
    if (!this.f26_1.equals(new Long(0, 0)))
      return (this.h26_1 + 64 | 0) + countTrailingZeroBits(this.f26_1) | 0;
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var _iterator__ex2g4s = this.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.e(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(destination) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.n29_1 = list;
    this.o29_1 = 0;
    this.p29_1 = 0;
  }
  protoOf(StateListStateRecord).b1u = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_sync();
    // Inline function 'androidx.compose.runtime.snapshots.StateListStateRecord.assign.<anonymous>' call
    var tmp = this;
    tmp.n29_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).n29_1;
    this.o29_1 = value.o29_1;
    this.p29_1 = value.p29_1;
  };
  protoOf(StateListStateRecord).c1u = function () {
    return new StateListStateRecord(this.n29_1);
  };
  function mutateBoolean($this, block) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate' call
    var result;
    $l$loop: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = $this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.o29_1;
      oldList = current_0.n29_1;
      var builder = ensureNotNull(oldList).b21();
      result = block(builder);
      var newList = builder.c21();
      var tmp_0;
      if (equals(newList, oldList)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
        var tmp_1 = $this.q29_1;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var this_1 = tmp_1 instanceof StateListStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.j11();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_1, $this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_sync();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.o29_1 === currentModification) {
          $this$writable.n29_1 = newList;
          $this$writable.o29_1 = $this$writable.o29_1 + 1 | 0;
          $this$writable.p29_1 = $this$writable.p29_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        // Inline function 'kotlin.also' call
        var this_2 = tmp_2;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, $this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  }
  function SnapshotStateList$addAll$lambda($index, $elements) {
    return function (it) {
      return it.u1($index, $elements);
    };
  }
  function SnapshotStateList() {
    var tmp = this;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.firstStateRecord.<anonymous>' call
    var list = persistentListOf();
    // Inline function 'kotlin.also' call
    var this_0 = new StateListStateRecord(list);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.firstStateRecord.<anonymous>.<anonymous>' call
    if (Companion_instance_12.i1u()) {
      var tmp_0 = this_0;
      // Inline function 'kotlin.also' call
      var this_1 = new StateListStateRecord(list);
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.firstStateRecord.<anonymous>.<anonymous>.<anonymous>' call
      this_1.g1u_1 = 1;
      tmp_0.h1u_1 = this_1;
    }
    tmp.q29_1 = this_0;
  }
  protoOf(SnapshotStateList).j1u = function () {
    return this.q29_1;
  };
  protoOf(SnapshotStateList).k1u = function (value) {
    value.h1u_1 = this.q29_1;
    var tmp = this;
    tmp.q29_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).r29 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    var tmp = this.q29_1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-structure>.<anonymous>' call
    return current(this_0).p29_1;
  };
  protoOf(SnapshotStateList).s29 = function () {
    var tmp = this.q29_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).j = function () {
    return this.s29().n29_1.j();
  };
  protoOf(SnapshotStateList).je = function (element) {
    return this.s29().n29_1.o(element);
  };
  protoOf(SnapshotStateList).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.je((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).p = function (index) {
    return this.s29().n29_1.p(index);
  };
  protoOf(SnapshotStateList).t29 = function (element) {
    return this.s29().n29_1.r(element);
  };
  protoOf(SnapshotStateList).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.t29((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).q = function () {
    return this.s29().n29_1.q();
  };
  protoOf(SnapshotStateList).g = function () {
    return this.q1();
  };
  protoOf(SnapshotStateList).q1 = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).toString = function () {
    var tmp = this.q29_1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.toString.<anonymous>' call
    var it = current(this_0);
    return 'SnapshotStateList(value=' + toString(it.n29_1) + ')@' + hashCode(this);
  };
  protoOf(SnapshotStateList).r1c = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.o29_1;
      oldList = current_0.n29_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).e(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.j11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.o29_1 === currentModification) {
        $this$writable.n29_1 = newList;
        if (true) {
          $this$writable.p29_1 = $this$writable.p29_1 + 1 | 0;
        }
        $this$writable.o29_1 = $this$writable.o29_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).e = function (element) {
    return this.r1c((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).u29 = function (index, element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.o29_1;
      oldList = current_0.n29_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).e21(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.j11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.o29_1 === currentModification) {
        $this$writable.n29_1 = newList;
        if (true) {
          $this$writable.p29_1 = $this$writable.p29_1 + 1 | 0;
        }
        $this$writable.o29_1 = $this$writable.o29_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return Unit_instance;
  };
  protoOf(SnapshotStateList).y1 = function (index, element) {
    return this.u29(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).v29 = function (index, elements) {
    return mutateBoolean(this, SnapshotStateList$addAll$lambda(index, elements));
  };
  protoOf(SnapshotStateList).u1 = function (index, elements) {
    return this.v29(index, elements);
  };
  protoOf(SnapshotStateList).w29 = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.o29_1;
      oldList = current_0.n29_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var newList = ensureNotNull(oldList).n(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.j11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.o29_1 === currentModification) {
        $this$writable.n29_1 = newList;
        if (true) {
          $this$writable.p29_1 = $this$writable.p29_1 + 1 | 0;
        }
        $this$writable.o29_1 = $this$writable.o29_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).n = function (elements) {
    return this.w29(elements);
  };
  protoOf(SnapshotStateList).w1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    var tmp = this.q29_1;
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_instance_12.j11();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var $this$writable = writableRecord(this_0, this, snapshot);
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_sync();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    $this$writable.n29_1 = persistentListOf();
    $this$writable.o29_1 = $this$writable.o29_1 + 1 | 0;
    $this$writable.p29_1 = $this$writable.p29_1 + 1 | 0;
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
  };
  protoOf(SnapshotStateList).x29 = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.o29_1;
      oldList = current_0.n29_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var newList = ensureNotNull(oldList).t1(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.j11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.o29_1 === currentModification) {
        $this$writable.n29_1 = newList;
        if (true) {
          $this$writable.p29_1 = $this$writable.p29_1 + 1 | 0;
        }
        $this$writable.o29_1 = $this$writable.o29_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).t1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.x29((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).y29 = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.o29_1;
      oldList = current_0.n29_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAll.<anonymous>' call
      var newList = ensureNotNull(oldList).v1(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.j11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.o29_1 === currentModification) {
        $this$writable.n29_1 = newList;
        if (true) {
          $this$writable.p29_1 = $this$writable.p29_1 + 1 | 0;
        }
        $this$writable.o29_1 = $this$writable.o29_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).v1 = function (elements) {
    return this.y29(elements);
  };
  protoOf(SnapshotStateList).z1 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.p(index);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.o29_1;
      oldList = current_0.n29_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).z1(index);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.j11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.o29_1 === currentModification) {
        $this$writable.n29_1 = newList;
        if (true) {
          $this$writable.p29_1 = $this$writable.p29_1 + 1 | 0;
        }
        $this$writable.o29_1 = $this$writable.o29_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_3 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).z29 = function (index, element) {
    // Inline function 'kotlin.also' call
    var this_0 = this.p(index);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.o29_1;
      oldList = current_0.n29_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).x1(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.q29_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.j11();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.o29_1 === currentModification) {
        $this$writable.n29_1 = newList;
        if (false) {
          $this$writable.p29_1 = $this$writable.p29_1 + 1 | 0;
        }
        $this$writable.o29_1 = $this$writable.o29_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_3 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).x1 = function (index, element) {
    return this.z29(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function validateModification($this) {
    if (!($this.a2a_1.r29() === $this.d2a_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.a2a_1 = list;
    this.b2a_1 = offset - 1 | 0;
    this.c2a_1 = -1;
    this.d2a_1 = this.a2a_1.r29();
  }
  protoOf(StateListIterator).f4 = function () {
    validateModification(this);
    validateRange(this.b2a_1, this.a2a_1.j());
    this.c2a_1 = this.b2a_1;
    // Inline function 'kotlin.also' call
    var this_0 = this.a2a_1.p(this.b2a_1);
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    this.b2a_1 = this.b2a_1 - 1 | 0;
    return this_0;
  };
  protoOf(StateListIterator).g4 = function () {
    return this.b2a_1;
  };
  protoOf(StateListIterator).h = function () {
    return this.b2a_1 < (this.a2a_1.j() - 1 | 0);
  };
  protoOf(StateListIterator).i = function () {
    validateModification(this);
    var newIndex = this.b2a_1 + 1 | 0;
    this.c2a_1 = newIndex;
    validateRange(newIndex, this.a2a_1.j());
    // Inline function 'kotlin.also' call
    var this_0 = this.a2a_1.p(newIndex);
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.b2a_1 = newIndex;
    return this_0;
  };
  protoOf(StateListIterator).u3 = function () {
    validateModification(this);
    this.a2a_1.z1(this.b2a_1);
    this.b2a_1 = this.b2a_1 - 1 | 0;
    this.c2a_1 = -1;
    this.d2a_1 = this.a2a_1.r29();
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (!properties_initialized_SnapshotStateList_kt_lcuarf) {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync = new Object();
    }
  }
  var sync_0;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_0 = new Object();
    }
  }
  function find_1($this, value, hash) {
    var low = 0;
    var high = $this.n28_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.o28_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.p28_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.co();
        if (value === midVal)
          return mid;
        return findExactIndex($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.o28_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.p28_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.co();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.n28_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.o28_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.p28_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.co();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.n28_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.n28_1 = 0;
    this.o28_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.p28_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).r28 = function (value) {
    var index;
    var size = this.n28_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_1(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.p28_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      var tmp1 = this.p28_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(tmp1, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.p28_1;
      arrayCopy(this_0, newValues, 0, 0, insertIndex);
      var tmp11 = this.o28_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp11;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.o28_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.p28_1 = newValues;
      this.o28_1 = newHashes;
    } else {
      var tmp21 = this.p28_1;
      var tmp22 = this.p28_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(tmp21, tmp22, destinationOffset_1, insertIndex, size);
      var tmp26 = this.o28_1;
      var tmp27 = this.o28_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = tmp26;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, tmp27, destinationOffset_2, insertIndex, size);
    }
    this.p28_1[insertIndex] = new WeakReference(value);
    this.o28_1[insertIndex] = hash;
    this.n28_1 = this.n28_1 + 1 | 0;
    return true;
  };
  function StateObjectImpl() {
    this.k1k_1 = new AtomicInt(0);
  }
  protoOf(StateObjectImpl).l1k = function (reader) {
    do {
      var old = _ReaderKind___init__impl__jqeebu(this.k1k_1.co());
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
      var this_0 = old;
      if (!((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0))
        return Unit_instance;
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.withReadIn' call
      var this_1 = old;
      var new_0 = _ReaderKind___init__impl__jqeebu(_ReaderKind___get_mask__impl__gmhzqb(this_1) | _ReaderKind___get_mask__impl__gmhzqb(reader));
    }
     while (!this.k1k_1.e2a(_ReaderKind___get_mask__impl__gmhzqb(old), _ReaderKind___get_mask__impl__gmhzqb(new_0)));
  };
  protoOf(StateObjectImpl).u1n = function (reader) {
    // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
    var this_0 = _ReaderKind___init__impl__jqeebu(this.k1k_1.co());
    return !((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0);
  };
  function _ReaderKind___init__impl__jqeebu(mask) {
    mask = mask === VOID ? 0 : mask;
    return mask;
  }
  function _ReaderKind___get_mask__impl__gmhzqb($this) {
    return $this;
  }
  function Companion_14() {
  }
  var Companion_instance_15;
  function Companion_getInstance_14() {
    return Companion_instance_15;
  }
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function AtomicReference(value) {
    this.x1i_1 = value;
  }
  protoOf(AtomicReference).co = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.x1i_1;
  };
  protoOf(AtomicReference).y1k = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicReference.set.<set-delegate>' call
    this.x1i_1 = value;
  };
  protoOf(AtomicReference).y1i = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.x1i_1;
    // Inline function 'androidx.compose.runtime.AtomicReference.getAndSet.<set-delegate>' call
    this.x1i_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).f1k = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.x1i_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicReference.compareAndSet.<set-delegate>' call
        this.x1i_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function AtomicInt(value) {
    this.j12_1 = value;
  }
  protoOf(AtomicInt).co = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.j12_1;
  };
  protoOf(AtomicInt).k12 = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicInt.set.<set-delegate>' call
    this.j12_1 = value;
  };
  protoOf(AtomicInt).vv = function (amount) {
    // Inline function 'kotlinx.atomicfu.atomicfu_addAndGet' call
    // Inline function 'androidx.compose.runtime.AtomicInt.add.<set-delegate>' call
    this.j12_1 = this.j12_1 + amount | 0;
    return this.j12_1;
  };
  protoOf(AtomicInt).e2a = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.j12_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicInt.compareAndSet.<set-delegate>' call
        this.j12_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function trackWrite($this) {
    if ($this.c25_1) {
      var scope = $this.e25_1;
      if (!(scope == null)) {
        scope.a1l();
        $this.e25_1 = null;
      }
      var scopes = $this.f25_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.j();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.p(index);
            item.a1l();
          }
           while (inductionVariable < last);
        scopes.w1();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.c25_1) {
      var scope = composer.u1g();
      if (!(scope == null)) {
        composer.v1g(scope);
        var lastScope = $this.e25_1;
        if (replacableWith(lastScope, scope)) {
          $this.e25_1 = scope;
        } else {
          var lastScopes = $this.f25_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.f25_1 = newScopes;
            newScopes.e(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.j();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.p(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.x1(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.e(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.u1d(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.f2a($p1, nc, updateChangedFlags($changed) | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked, block) {
    this.b25_1 = key;
    this.c25_1 = tracked;
    this.d25_1 = block;
    this.e25_1 = null;
    this.f25_1 = null;
  }
  protoOf(ComposableLambdaImpl).g25 = function (block) {
    if (!equals(this.d25_1, block)) {
      var oldBlockNull = this.d25_1 == null;
      this.d25_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).u1d = function (c, changed) {
    var c_0 = c.d1g(this.b25_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.n15(this) ? differentBits(0) : sameBits(0));
    var tmp = this.d25_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).f2a = function (p1, c, changed) {
    var c_0 = c.d1g(this.b25_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.n15(this) ? differentBits(1) : sameBits(1));
    var tmp = this.d25_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.e1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1l(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  function get_DefaultMonotonicFrameClock() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  function currentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $continuation) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      this_0.e9(tmp$ret$0);
      return Unit_instance;
    };
  }
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).n12 = function (onFrame, $completion) {
    // Inline function 'kotlin.coroutines.suspendCoroutine.<anonymous>' call
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    // Inline function 'androidx.compose.runtime.MonotonicClockImpl.withFrameNanos.<anonymous>' call
    var tmp = window;
    tmp.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(onFrame, safe));
    return safe.l9();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
  }
  protoOf(Trace).g1c = function (name) {
    return null;
  };
  protoOf(Trace).t1c = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    return Trace_instance;
  }
  function invokeComposable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function IntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.j18_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).p = function (key) {
    return this.j18_1.f2(key);
  };
  protoOf(IntMap).k18 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.j18_1.v4(key, value);
  };
  function WeakReference(reference) {
    this.q28_1 = reference;
  }
  protoOf(WeakReference).co = function () {
    return this.q28_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).k11 = onBeginChanges;
  protoOf(OffsetApplier).l11 = onEndChanges;
  protoOf(AbstractApplier).k11 = onBeginChanges;
  protoOf(AbstractApplier).l11 = onEndChanges;
  protoOf(BroadcastFrameClock).b2 = get_key;
  protoOf(BroadcastFrameClock).g9 = get;
  protoOf(BroadcastFrameClock).hg = fold;
  protoOf(BroadcastFrameClock).gg = minusKey;
  protoOf(BroadcastFrameClock).ig = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.n9();
  });
  protoOf(StructuralEqualityPolicy).w1t = merge;
  protoOf(StateObjectImpl).l1u = mergeRecords;
  protoOf(SnapshotStateList).l1u = mergeRecords;
  protoOf(MonotonicClockImpl).b2 = get_key;
  protoOf(MonotonicClockImpl).g9 = get;
  protoOf(MonotonicClockImpl).hg = fold;
  protoOf(MonotonicClockImpl).gg = minusKey;
  protoOf(MonotonicClockImpl).ig = plus;
  //endregion
  //region block: init
  ScopeInvalidated_instance = new ScopeInvalidated();
  Key_instance_0 = new Key();
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  EndOfChain_instance = new EndOfChain();
  ListImplementation_instance = new ListImplementation();
  Companion_instance_12 = new Companion_11();
  Companion_instance_15 = new Companion_14();
  Trace_instance = new Trace();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = rememberComposableLambda;
  _.$_$.d = AbstractApplier;
  _.$_$.e = CompositionLocalProvider;
  _.$_$.f = ControlledComposition;
  _.$_$.g = get_DefaultMonotonicFrameClock;
  _.$_$.h = DisposableEffect_0;
  _.$_$.i = DisposableEffect_1;
  _.$_$.j = DisposableEffect;
  _.$_$.k = LaunchedEffect;
  _.$_$.l = Recomposer;
  _.$_$.m = compositionLocalOf;
  _.$_$.n = invalidApplier;
  _.$_$.o = isTraceInProgress;
  _.$_$.p = mutableStateListOf;
  _.$_$.q = mutableStateOf;
  _.$_$.r = sourceInformationMarkerEnd;
  _.$_$.s = sourceInformationMarkerStart;
  _.$_$.t = staticCompositionLocalOf;
  _.$_$.u = traceEventEnd;
  _.$_$.v = traceEventStart;
  _.$_$.w = updateChangedFlags;
  _.$_$.x = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.y = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.z = _Updater___init__impl__rbfxm8;
  _.$_$.a1 = Updater__set_impl_v7kwss;
  _.$_$.b1 = Companion_instance_12;
  _.$_$.c1 = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime.js.map
