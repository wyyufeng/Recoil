import reactDom from 'react-dom';
import react from 'react';

function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf('[native code]') !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === 'function' ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== 'function') {
      throw new TypeError('Super expression must either be null or a function');
    }

    if (typeof _cache !== 'undefined') {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter))
    return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length)
            return {
              done: true,
            };
          return {
            done: false,
            value: o[i++],
          };
        },
        e: function (e) {
          throw e;
        },
        f: F,
      };
    }

    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }

  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 *
 * @format
 */

var gkx = require('../util/Recoil_gkx');

var nullthrows = require('../util/Recoil_nullthrows');

var recoverableViolation = require('../util/Recoil_recoverableViolation');

var Tracing = require('../util/Recoil_Tracing');

var _require = require('./Recoil_FunctionalCore'),
  getDownstreamNodes = _require.getDownstreamNodes,
  getNodeLoadable = _require.getNodeLoadable,
  setNodeValue = _require.setNodeValue;

var _require2 = require('./Recoil_Graph'),
  saveDependencyMapToStore = _require2.saveDependencyMapToStore;

var _require3 = require('./Recoil_Node'),
  getNodeMaybe = _require3.getNodeMaybe;

var _require4 = require('./Recoil_Node'),
  DefaultValue = _require4.DefaultValue,
  RecoilValueNotReady = _require4.RecoilValueNotReady;

var _require5 = require('./Recoil_RecoilValue'),
  AbstractRecoilValue = _require5.AbstractRecoilValue,
  RecoilState = _require5.RecoilState,
  RecoilValueReadOnly = _require5.RecoilValueReadOnly,
  isRecoilValue = _require5.isRecoilValue;

function getRecoilValueAsLoadable(store, _ref) {
  var _storeState$nextTree, _storeState$previousT;

  var key = _ref.key;
  var treeState =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : store.getState().currentTree;
  // Reading from an older tree can cause bugs because the dependencies that we
  // discover during the read are lost.
  var storeState = store.getState();

  if (
    !(
      treeState.version === storeState.currentTree.version ||
      treeState.version ===
        ((_storeState$nextTree = storeState.nextTree) === null ||
        _storeState$nextTree === void 0
          ? void 0
          : _storeState$nextTree.version) ||
      treeState.version ===
        ((_storeState$previousT = storeState.previousTree) === null ||
        _storeState$previousT === void 0
          ? void 0
          : _storeState$previousT.version)
    )
  ) {
    recoverableViolation('Tried to read from a discarded tree', 'recoil');
  }

  var _getNodeLoadable = getNodeLoadable(store, treeState, key),
    _getNodeLoadable2 = _slicedToArray(_getNodeLoadable, 2),
    dependencyMap = _getNodeLoadable2[0],
    loadable = _getNodeLoadable2[1];

  if (!gkx('recoil_async_selector_refactor')) {
    /**
     * In selector_NEW, we take care of updating state deps within the selector
     */
    saveDependencyMapToStore(dependencyMap, store, treeState.version);
  }

  return loadable;
}

function applyAtomValueWrites(atomValues, writes) {
  var result = atomValues.clone();
  writes.forEach(function (v, k) {
    if (v.state === 'hasValue' && v.contents instanceof DefaultValue) {
      result.delete(k);
    } else {
      result.set(k, v);
    }
  });
  return result;
}

function valueFromValueOrUpdater(store, state, _ref2, valueOrUpdater) {
  var key = _ref2.key;

  if (typeof valueOrUpdater === 'function') {
    // Updater form: pass in the current value. Throw if the current value
    // is unavailable (namely when updating an async selector that's
    // pending or errored):
    // NOTE: This will evaluate node, but not update state with node subscriptions!
    var current = getNodeLoadable(store, state, key)[1];

    if (current.state === 'loading') {
      throw new RecoilValueNotReady(key);
    } else if (current.state === 'hasError') {
      throw current.contents;
    } // T itself may be a function, so our refinement is not sufficient:

    return valueOrUpdater(current.contents); // flowlint-line unclear-type:off
  } else {
    return valueOrUpdater;
  }
}

function applyAction(store, state, action) {
  if (action.type === 'set') {
    var recoilValue = action.recoilValue,
      valueOrUpdater = action.valueOrUpdater;
    var newValue = valueFromValueOrUpdater(
      store,
      state,
      recoilValue,
      valueOrUpdater,
    );

    var _setNodeValue = setNodeValue(store, state, recoilValue.key, newValue),
      _setNodeValue2 = _slicedToArray(_setNodeValue, 2),
      depMap = _setNodeValue2[0],
      writes = _setNodeValue2[1];

    saveDependencyMapToStore(depMap, store, state.version);

    var _iterator = _createForOfIteratorHelper(writes.entries()),
      _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          loadable = _step$value[1];

        writeLoadableToTreeState(state, key, loadable);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (action.type === 'setLoadable') {
    var _key = action.recoilValue.key,
      _loadable = action.loadable;
    writeLoadableToTreeState(state, _key, _loadable);
  } else if (action.type === 'markModified') {
    var _key2 = action.recoilValue.key;
    state.dirtyAtoms.add(_key2);
  } else if (action.type === 'setUnvalidated') {
    var _node$invalidate;

    // Write value directly to state bypassing the Node interface as the node
    // definitions may not have been loaded yet when processing the initial snapshot.
    var _key3 = action.recoilValue.key,
      unvalidatedValue = action.unvalidatedValue;
    var node = getNodeMaybe(_key3);
    node === null || node === void 0
      ? void 0
      : (_node$invalidate = node.invalidate) === null ||
        _node$invalidate === void 0
      ? void 0
      : _node$invalidate.call(node, state);
    state.atomValues.delete(_key3);
    state.nonvalidatedAtoms.set(_key3, unvalidatedValue);
    state.dirtyAtoms.add(_key3);
  } else {
    recoverableViolation('Unknown action '.concat(action.type), 'recoil');
  }
}

function writeLoadableToTreeState(state, key, loadable) {
  if (
    loadable.state === 'hasValue' &&
    loadable.contents instanceof DefaultValue
  ) {
    state.atomValues.delete(key);
  } else {
    state.atomValues.set(key, loadable);
  }

  state.dirtyAtoms.add(key);
  state.nonvalidatedAtoms.delete(key);
}

function applyActionsToStore(store, actions) {
  store.replaceState(function (state) {
    var newState = copyTreeState(state);

    var _iterator2 = _createForOfIteratorHelper(actions),
      _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var action = _step2.value;
        applyAction(store, newState, action);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    invalidateDownstreams(store, newState);
    return newState;
  });
}

function queueOrPerformStateUpdate(store, action, key, message) {
  if (batchStack.length) {
    var actionsByStore = batchStack[batchStack.length - 1];
    var actions = actionsByStore.get(store);

    if (!actions) {
      actionsByStore.set(store, (actions = []));
    }

    actions.push(action);
  } else {
    Tracing.trace(message, key, function () {
      return applyActionsToStore(store, [action]);
    });
  }
}

var batchStack = [];

function batchStart() {
  var actionsByStore = new Map();
  batchStack.push(actionsByStore);
  return function () {
    var _iterator3 = _createForOfIteratorHelper(actionsByStore),
      _step3;

    try {
      var _loop = function _loop() {
        var _step3$value = _slicedToArray(_step3.value, 2),
          store = _step3$value[0],
          actions = _step3$value[1];

        Tracing.trace('Recoil batched updates', '-', function () {
          return applyActionsToStore(store, actions);
        });
      };

      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        _loop();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    var popped = batchStack.pop();

    if (popped !== actionsByStore) {
      recoverableViolation('Incorrect order of batch popping', 'recoil');
    }
  };
}

function copyTreeState(state) {
  return _objectSpread2(
    _objectSpread2({}, state),
    {},
    {
      atomValues: state.atomValues.clone(),
      nonvalidatedAtoms: state.nonvalidatedAtoms.clone(),
      dirtyAtoms: new Set(state.dirtyAtoms),
    },
  );
}

function invalidateDownstreams(store, state) {
  // Inform any nodes that were changed or downstream of changes so that they
  // can clear out any caches as needed due to the update:
  var downstreams = getDownstreamNodes(store, state, state.dirtyAtoms);

  var _iterator4 = _createForOfIteratorHelper(downstreams),
    _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var _getNodeMaybe, _getNodeMaybe$invalid;

      var key = _step4.value;
      (_getNodeMaybe = getNodeMaybe(key)) === null || _getNodeMaybe === void 0
        ? void 0
        : (_getNodeMaybe$invalid = _getNodeMaybe.invalidate) === null ||
          _getNodeMaybe$invalid === void 0
        ? void 0
        : _getNodeMaybe$invalid.call(_getNodeMaybe, state);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}

function setRecoilValue(store, recoilValue, valueOrUpdater) {
  queueOrPerformStateUpdate(
    store,
    {
      type: 'set',
      recoilValue: recoilValue,
      valueOrUpdater: valueOrUpdater,
    },
    recoilValue.key,
    'set Recoil value',
  );
}

function setRecoilValueLoadable(store, recoilValue, loadable) {
  if (loadable instanceof DefaultValue) {
    return setRecoilValue(store, recoilValue, loadable);
  }

  queueOrPerformStateUpdate(
    store,
    {
      type: 'setLoadable',
      recoilValue: recoilValue,
      loadable: loadable,
    },
    recoilValue.key,
    'set Recoil value',
  );
}

function markRecoilValueModified(store, recoilValue) {
  queueOrPerformStateUpdate(
    store,
    {
      type: 'markModified',
      recoilValue: recoilValue,
    },
    recoilValue.key,
    'mark RecoilValue modified',
  );
}

function setUnvalidatedRecoilValue(store, recoilValue, unvalidatedValue) {
  queueOrPerformStateUpdate(
    store,
    {
      type: 'setUnvalidated',
      recoilValue: recoilValue,
      unvalidatedValue: unvalidatedValue,
    },
    recoilValue.key,
    'set Recoil value',
  );
}

var subscriptionID = 0;

function subscribeToRecoilValue(store, _ref3, callback) {
  var key = _ref3.key;
  var componentDebugName =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var subID = subscriptionID++;
  var storeState = store.getState();

  if (!storeState.nodeToComponentSubscriptions.has(key)) {
    storeState.nodeToComponentSubscriptions.set(key, new Map());
  }

  nullthrows(storeState.nodeToComponentSubscriptions.get(key)).set(subID, [
    componentDebugName !== null && componentDebugName !== void 0
      ? componentDebugName
      : '<not captured>',
    callback,
  ]);
  return {
    release: function release() {
      var storeState = store.getState();
      var subs = storeState.nodeToComponentSubscriptions.get(key);

      if (subs === undefined || !subs.has(subID)) {
        recoverableViolation(
          'Subscription missing at release time for atom '.concat(
            key,
            '. This is a bug in Recoil.',
          ),
          'recoil',
        );
        return;
      }

      subs.delete(subID);

      if (subs.size === 0) {
        storeState.nodeToComponentSubscriptions.delete(key);
      }
    },
  };
}

module.exports = {
  RecoilValueReadOnly: RecoilValueReadOnly,
  AbstractRecoilValue: AbstractRecoilValue,
  RecoilState: RecoilState,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable,
  setRecoilValue: setRecoilValue,
  setRecoilValueLoadable: setRecoilValueLoadable,
  markRecoilValueModified: markRecoilValueModified,
  setUnvalidatedRecoilValue: setUnvalidatedRecoilValue,
  subscribeToRecoilValue: subscribeToRecoilValue,
  isRecoilValue: isRecoilValue,
  applyAtomValueWrites: applyAtomValueWrites,
  // TODO Remove export when deprecating initialStoreState_DEPRECATED in RecoilRoot
  batchStart: batchStart,
  invalidateDownstreams_FOR_TESTING: invalidateDownstreams,
};

var Recoil_RecoilValueInterface = /*#__PURE__*/ Object.freeze({
  __proto__: null,
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 *
 * @format
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 */
var unstable_batchedUpdates = reactDom.unstable_batchedUpdates;

var ReactBatchedUpdates = {
  unstable_batchedUpdates: unstable_batchedUpdates,
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 *
 * @format
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 */
// @fb-only: const {unstable_batchedUpdates} = require('ReactDOMComet');
var unstable_batchedUpdates$1 = ReactBatchedUpdates.unstable_batchedUpdates; // @oss-only

var Recoil_ReactBatchedUpdates = {
  unstable_batchedUpdates: unstable_batchedUpdates$1,
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 *
 * @format
 */
var batchStart$1 = Recoil_RecoilValueInterface.batchStart;

var unstable_batchedUpdates$2 =
  Recoil_ReactBatchedUpdates.unstable_batchedUpdates;

var batcher = unstable_batchedUpdates$2; // flowlint-next-line unclear-type:off

/**
 * Sets the provided batcher function as the batcher function used by Recoil.
 *
 * Set the batcher to a custom batcher for your renderer,
 * if you use a renderer other than React DOM or React Native.
 */
var setBatcher = function setBatcher(newBatcher) {
  batcher = newBatcher;
};
/**
 * Returns the current batcher function.
 */

var getBatcher = function getBatcher() {
  return batcher;
};
/**
 * Calls the current batcher function and passes the
 * provided callback function.
 */

var batchUpdates = function batchUpdates(callback) {
  batcher(function () {
    var batchEnd = function batchEnd() {
      return undefined;
    };

    try {
      batchEnd = batchStart$1();
      callback();
    } finally {
      batchEnd();
    }
  });
};

var Recoil_Batching = {
  getBatcher: getBatcher,
  setBatcher: setBatcher,
  batchUpdates: batchUpdates,
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 *
 * @format
 */

var expectationViolation = require('../util/Recoil_expectationViolation');

var mapIterable = require('../util/Recoil_mapIterable');

var nullthrows$1 = require('../util/Recoil_nullthrows');

var recoverableViolation$1 = require('../util/Recoil_recoverableViolation');

var RecoilValueClasses = require('./Recoil_RecoilValue');

var DefaultValue$1 = function DefaultValue() {
  _classCallCheck(this, DefaultValue);
};

var DEFAULT_VALUE = new DefaultValue$1();

var RecoilValueNotReady$1 = /*#__PURE__*/ (function (_Error) {
  _inherits(RecoilValueNotReady, _Error);

  var _super = _createSuper(RecoilValueNotReady);

  function RecoilValueNotReady(key) {
    _classCallCheck(this, RecoilValueNotReady);

    return _super.call(
      this,
      'Tried to set the value of Recoil selector '.concat(
        key,
        ' using an updater function, but it is an async selector in a pending or error state; this is not supported.',
      ),
    );
  }

  return RecoilValueNotReady;
})(/*#__PURE__*/ _wrapNativeSuper(Error));

// flowlint-next-line unclear-type:off
var nodes = new Map(); // flowlint-next-line unclear-type:off

var recoilValues = new Map();
/* eslint-disable no-redeclare */

function recoilValuesForKeys(keys) {
  return mapIterable(keys, function (key) {
    return nullthrows$1(recoilValues.get(key));
  });
}

function registerNode(node) {
  if (nodes.has(node.key)) {
    var message = 'Duplicate atom key "'.concat(
      node.key,
      '". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement.',
    ); // TODO Need to figure out if there is a standard/open-source equivalent to see if hot module replacement is happening:
    // prettier-ignore
    // @fb-only: if (__DEV__) {
    // @fb-only: const isAcceptingUpdate = require('__debug').isAcceptingUpdate;
    // prettier-ignore
    // @fb-only: if (typeof isAcceptingUpdate !== 'function' || !isAcceptingUpdate()) {
    // @fb-only: expectationViolation(message, 'recoil');
    // @fb-only: }
    // prettier-ignore
    // @fb-only: } else {
    // @fb-only: recoverableViolation(message, 'recoil');
    // @fb-only: }

    console.warn(message); // @oss-only
  }

  nodes.set(node.key, node);
  var recoilValue =
    node.set == null
      ? new RecoilValueClasses.RecoilValueReadOnly(node.key)
      : new RecoilValueClasses.RecoilState(node.key);
  recoilValues.set(node.key, recoilValue);
  return recoilValue;
}
/* eslint-enable no-redeclare */

var NodeMissingError = /*#__PURE__*/ (function (_Error2) {
  _inherits(NodeMissingError, _Error2);

  var _super2 = _createSuper(NodeMissingError);

  function NodeMissingError() {
    _classCallCheck(this, NodeMissingError);

    return _super2.apply(this, arguments);
  }

  return NodeMissingError;
})(/*#__PURE__*/ _wrapNativeSuper(Error)); // flowlint-next-line unclear-type:off

function getNode(key) {
  var node = nodes.get(key);

  if (node == null) {
    throw new NodeMissingError(
      'Missing definition for RecoilValue: "'.concat(key, '""'),
    );
  }

  return node;
} // flowlint-next-line unclear-type:off

function getNodeMaybe$1(key) {
  return nodes.get(key);
}

module.exports = {
  nodes: nodes,
  recoilValues: recoilValues,
  registerNode: registerNode,
  getNode: getNode,
  getNodeMaybe: getNodeMaybe$1,
  recoilValuesForKeys: recoilValuesForKeys,
  NodeMissingError: NodeMissingError,
  DefaultValue: DefaultValue$1,
  DEFAULT_VALUE: DEFAULT_VALUE,
  RecoilValueNotReady: RecoilValueNotReady$1,
};

var Recoil_Node = /*#__PURE__*/ Object.freeze({
  __proto__: null,
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 *
 * @format
 */

var React = require('react');

var _require$1 = require('react'),
  useContext = _require$1.useContext,
  useEffect = _require$1.useEffect,
  useMemo = _require$1.useMemo,
  useRef = _require$1.useRef,
  useState = _require$1.useState; // @fb-only: const RecoilusagelogEvent = require('RecoilusagelogEvent');
// @fb-only: const RecoilUsageLogFalcoEvent = require('RecoilUsageLogFalcoEvent');
// @fb-only: const URI = require('URI');

var Queue = require('../adt/Recoil_Queue');

var _require2$1 = require('../core/Recoil_State'),
  getNextTreeStateVersion = _require2$1.getNextTreeStateVersion,
  makeEmptyStoreState = _require2$1.makeEmptyStoreState;

var _require3$1 = require('../util/Recoil_CopyOnWrite'),
  mapByDeletingMultipleFromMap = _require3$1.mapByDeletingMultipleFromMap;

var expectationViolation$1 = require('../util/Recoil_expectationViolation');

var nullthrows$2 = require('../util/Recoil_nullthrows'); // @fb-only: const recoverableViolation = require('../util/Recoil_recoverableViolation');

var Tracing$1 = require('../util/Recoil_Tracing');

var unionSets = require('../util/Recoil_unionSets');

var _require4$1 = require('./Recoil_FunctionalCore'),
  cleanUpNode = _require4$1.cleanUpNode,
  getDownstreamNodes$1 = _require4$1.getDownstreamNodes,
  setNodeValue$1 = _require4$1.setNodeValue,
  setUnvalidatedAtomValue_DEPRECATED =
    _require4$1.setUnvalidatedAtomValue_DEPRECATED;

var _require5$1 = require('./Recoil_Graph'),
  graph = _require5$1.graph,
  saveDependencyMapToStore$1 = _require5$1.saveDependencyMapToStore;

var _require6 = require('./Recoil_Graph'),
  cloneGraph = _require6.cloneGraph;

var _require7 = require('./Recoil_RecoilValueInterface'),
  applyAtomValueWrites$1 = _require7.applyAtomValueWrites;

var _require8 = require('./Recoil_Snapshot'),
  freshSnapshot = _require8.freshSnapshot; // @fb-only: const gkx = require('gkx');

function notInAContext() {
  throw new Error(
    'This component must be used inside a <RecoilRoot> component.',
  );
}

var defaultStore = Object.freeze({
  getState: notInAContext,
  replaceState: notInAContext,
  getGraph: notInAContext,
  subscribeToTransactions: notInAContext,
  addTransactionMetadata: notInAContext,
});
var stateReplacerIsBeingExecuted = false;

function startNextTreeIfNeeded(storeState) {
  if (stateReplacerIsBeingExecuted) {
    throw new Error(
      'An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.',
    );
  }

  if (storeState.nextTree === null) {
    var version = storeState.currentTree.version;
    var nextVersion = getNextTreeStateVersion();
    storeState.nextTree = _objectSpread2(
      _objectSpread2({}, storeState.currentTree),
      {},
      {
        version: nextVersion,
        stateID: nextVersion,
        dirtyAtoms: new Set(),
        transactionMetadata: {},
      },
    );
    storeState.graphsByVersion.set(
      nextVersion,
      cloneGraph(nullthrows$2(storeState.graphsByVersion.get(version))),
    );
  }
}

var AppContext = React.createContext({
  current: defaultStore,
});

var useStoreRef = function useStoreRef() {
  return useContext(AppContext);
};

var MutableSourceContext = React.createContext(null); // TODO T2710559282599660

function useRecoilMutableSource() {
  var mutableSource = useContext(MutableSourceContext);

  if (mutableSource == null) {
    expectationViolation$1(
      'Attempted to use a Recoil hook outside of a <RecoilRoot>. ' +
        '<RecoilRoot> must be an ancestor of any component that uses ' +
        'Recoil hooks.',
    );
  }

  return mutableSource;
}

function sendEndOfBatchNotifications(store) {
  var storeState = store.getState();
  var treeState = storeState.currentTree; // Inform transaction subscribers of the transaction:

  var dirtyAtoms = treeState.dirtyAtoms;

  if (dirtyAtoms.size) {
    // Execute Node-specific subscribers before global subscribers
    var _iterator = _createForOfIteratorHelper(
        storeState.nodeTransactionSubscriptions,
      ),
      _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          subscriptions = _step$value[1];

        if (dirtyAtoms.has(key)) {
          var _iterator4 = _createForOfIteratorHelper(subscriptions),
            _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var _step4$value = _slicedToArray(_step4.value, 2),
                _ = _step4$value[0],
                subscription = _step4$value[1];

              subscription(store);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(
        storeState.transactionSubscriptions,
      ),
      _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _step2$value = _slicedToArray(_step2.value, 2),
          _2 = _step2$value[0],
          _subscription = _step2$value[1];

        _subscription(store);
      } // Components that are subscribed to the dirty atom:
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var dependentNodes = getDownstreamNodes$1(store, treeState, dirtyAtoms);

    var _iterator3 = _createForOfIteratorHelper(dependentNodes),
      _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var _key = _step3.value;
        var comps = storeState.nodeToComponentSubscriptions.get(_key);

        if (comps) {
          var _iterator5 = _createForOfIteratorHelper(comps),
            _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              var _step5$value = _slicedToArray(_step5.value, 2),
                _subID = _step5$value[0],
                _step5$value$ = _slicedToArray(_step5$value[1], 2),
                _debugName = _step5$value$[0],
                callback = _step5$value$[1];

              callback(treeState);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      } // Wake all suspended components so the right one(s) can try to re-render.
      // We need to wake up components not just when some asynchronous selector
      // resolved, but also when changing synchronous values because this may cause
      // a selector to change from asynchronous to synchronous, in which case there
      // would be no follow-up asynchronous resolution to wake us up.
      // TODO OPTIMIZATION Only wake up related downstream components
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    var nodeNames = '[available in dev build]';

    if (process.env.NODE_ENV !== 'production') {
      nodeNames = Array.from(dirtyAtoms).join(', ');
    }

    storeState.suspendedComponentResolvers.forEach(function (cb) {
      return Tracing$1.trace(
        'value became available, waking components',
        nodeNames,
        cb,
      );
    });
  } // Special behavior ONLY invoked by useInterface.
  // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.

  storeState.queuedComponentCallbacks_DEPRECATED.forEach(function (cb) {
    return cb(treeState);
  });
  storeState.queuedComponentCallbacks_DEPRECATED.splice(
    0,
    storeState.queuedComponentCallbacks_DEPRECATED.length,
  );
}
/*
 * The purpose of the Batcher is to observe when React batches end so that
 * Recoil state changes can be batched. Whenever Recoil state changes, we call
 * setState on the batcher. Then we wait for that change to be committed, which
 * signifies the end of the batch. That's when we respond to the Recoil change.
 */

function Batcher(props) {
  var storeRef = useStoreRef();

  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    _ = _useState2[0],
    setState = _useState2[1];

  props.setNotifyBatcherOfChange(function () {
    return setState({});
  });
  useEffect(function () {
    // enqueueExecution runs this function immediately; it is only used to
    // manipulate the order of useEffects during tests, since React seems to
    // call useEffect in an unpredictable order sometimes.
    Queue.enqueueExecution('Batcher', function () {
      var storeState = storeRef.current.getState();
      var nextTree = storeState.nextTree; // Ignore commits that are not because of Recoil transactions -- namely,
      // because something above RecoilRoot re-rendered:

      if (nextTree === null) {
        return;
      } // nextTree is now committed -- note that copying and reset occurs when
      // a transaction begins, in startNextTreeIfNeeded:

      storeState.previousTree = storeState.currentTree;
      storeState.currentTree = nextTree;
      storeState.nextTree = null;
      sendEndOfBatchNotifications(storeRef.current);
      var discardedVersion = nullthrows$2(storeState.previousTree).version;
      storeState.graphsByVersion.delete(discardedVersion);
      storeState.previousTree = null;
    });
  });
  return null;
}

if (process.env.NODE_ENV !== 'production') {
  if (typeof window !== 'undefined' && !window.$recoilDebugStates) {
    window.$recoilDebugStates = [];
  }
} // When removing this deprecated function, remove stateBySettingRecoilValue
// which will no longer be needed.

function initialStoreState_DEPRECATED(store, initializeState) {
  var initial = makeEmptyStoreState();
  initializeState({
    // $FlowFixMe[escaped-generic]
    set: function set(atom, value) {
      var state = initial.currentTree;

      var _setNodeValue = setNodeValue$1(store, state, atom.key, value),
        _setNodeValue2 = _slicedToArray(_setNodeValue, 2),
        depMap = _setNodeValue2[0],
        writes = _setNodeValue2[1];

      var writtenNodes = new Set(writes.keys());
      saveDependencyMapToStore$1(depMap, store, state.version);
      var nonvalidatedAtoms = state.nonvalidatedAtoms.clone();

      var _iterator6 = _createForOfIteratorHelper(writtenNodes),
        _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var n = _step6.value;
          nonvalidatedAtoms.delete(n);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      initial.currentTree = _objectSpread2(
        _objectSpread2({}, state),
        {},
        {
          dirtyAtoms: unionSets(state.dirtyAtoms, writtenNodes),
          atomValues: applyAtomValueWrites$1(state.atomValues, writes),
          // NB: PLEASE un-export applyAtomValueWrites when deleting this code
          nonvalidatedAtoms: nonvalidatedAtoms,
        },
      );
    },
    setUnvalidatedAtomValues: function setUnvalidatedAtomValues(atomValues) {
      // FIXME replace this with a mutative loop
      atomValues.forEach(function (v, k) {
        initial.currentTree = setUnvalidatedAtomValue_DEPRECATED(
          initial.currentTree,
          k,
          v,
        );
      });
    },
  });
  return initial;
}

function initialStoreState(initializeState) {
  var snapshot = freshSnapshot().map(initializeState);
  return snapshot.getStore_INTERNAL().getState();
}

var nextID = 0;

function RecoilRoot(_ref) {
  var _createMutableSource;

  var initializeState_DEPRECATED = _ref.initializeState_DEPRECATED,
    initializeState = _ref.initializeState,
    storeProp = _ref.store_INTERNAL,
    children = _ref.children;
  // prettier-ignore
  // @fb-only: useEffect(() => {
  // @fb-only: if (gkx('recoil_usage_logging')) {
  // @fb-only: try {
  // @fb-only: RecoilUsageLogFalcoEvent.log(() => ({
  // @fb-only: type: RecoilusagelogEvent.RECOIL_ROOT_MOUNTED,
  // @fb-only: path: URI.getRequestURI().getPath(),
  // @fb-only: }));
  // @fb-only: } catch {
  // @fb-only: recoverableViolation(
  // @fb-only: 'Error when logging Recoil Usage event',
  // @fb-only: 'recoil',
  // @fb-only: );
  // @fb-only: }
  // @fb-only: }
  // @fb-only: }, []);
  var storeState; // eslint-disable-line prefer-const

  var getGraph = function getGraph(version) {
    var graphs = storeState.current.graphsByVersion;

    if (graphs.has(version)) {
      return nullthrows$2(graphs.get(version));
    }

    var newGraph = graph();
    graphs.set(version, newGraph);
    return newGraph;
  };

  var subscribeToTransactions = function subscribeToTransactions(
    callback,
    key,
  ) {
    if (key == null) {
      // Global transaction subscriptions
      var _storeRef$current$get = storeRef.current.getState(),
        transactionSubscriptions =
          _storeRef$current$get.transactionSubscriptions;

      var id = nextID++;
      transactionSubscriptions.set(id, callback);
      return {
        release: function release() {
          transactionSubscriptions.delete(id);
        },
      };
    } else {
      // Node-specific transaction subscriptions:
      var _storeRef$current$get2 = storeRef.current.getState(),
        nodeTransactionSubscriptions =
          _storeRef$current$get2.nodeTransactionSubscriptions;

      if (!nodeTransactionSubscriptions.has(key)) {
        nodeTransactionSubscriptions.set(key, new Map());
      }

      var _id = nextID++;

      nullthrows$2(nodeTransactionSubscriptions.get(key)).set(_id, callback);
      return {
        release: function release() {
          var subs = nodeTransactionSubscriptions.get(key);

          if (subs) {
            subs.delete(_id);

            if (subs.size === 0) {
              nodeTransactionSubscriptions.delete(key);
            }
          }
        },
      };
    }
  };

  var addTransactionMetadata = function addTransactionMetadata(metadata) {
    startNextTreeIfNeeded(storeRef.current.getState());

    for (
      var _i = 0, _Object$keys = Object.keys(metadata);
      _i < _Object$keys.length;
      _i++
    ) {
      var k = _Object$keys[_i];
      nullthrows$2(storeRef.current.getState().nextTree).transactionMetadata[
        k
      ] = metadata[k];
    }
  };

  var replaceState = function replaceState(replacer) {
    var storeState = storeRef.current.getState();
    startNextTreeIfNeeded(storeState); // Use replacer to get the next state:

    var nextTree = nullthrows$2(storeState.nextTree);
    var replaced;

    try {
      stateReplacerIsBeingExecuted = true;
      replaced = replacer(nextTree);
    } finally {
      stateReplacerIsBeingExecuted = false;
    }

    if (replaced === nextTree) {
      return;
    }

    if (process.env.NODE_ENV !== 'production') {
      if (typeof window !== 'undefined') {
        window.$recoilDebugStates.push(replaced); // TODO this shouldn't happen here because it's not batched
      }
    } // Save changes to nextTree and schedule a React update:

    storeState.nextTree = replaced;
    nullthrows$2(notifyBatcherOfChange.current)();
  };

  var notifyBatcherOfChange = useRef(null);

  function setNotifyBatcherOfChange(x) {
    notifyBatcherOfChange.current = x;
  } // FIXME T2710559282599660

  var createMutableSource =
    (_createMutableSource = React.createMutableSource) !== null &&
    _createMutableSource !== void 0
      ? _createMutableSource // flowlint-line unclear-type:off
      : React.unstable_createMutableSource; // flowlint-line unclear-type:off

  var store =
    storeProp !== null && storeProp !== void 0
      ? storeProp
      : {
          getState: function getState() {
            return storeState.current;
          },
          replaceState: replaceState,
          getGraph: getGraph,
          subscribeToTransactions: subscribeToTransactions,
          addTransactionMetadata: addTransactionMetadata,
        };
  var storeRef = useRef(store);
  storeState = useRef(
    initializeState_DEPRECATED != null
      ? initialStoreState_DEPRECATED(store, initializeState_DEPRECATED)
      : initializeState != null
      ? initialStoreState(initializeState)
      : makeEmptyStoreState(),
  );
  var mutableSource = useMemo(
    function () {
      return createMutableSource
        ? createMutableSource(storeState, function () {
            return storeState.current.currentTree.version;
          })
        : null;
    },
    [createMutableSource, storeState],
  ); // Cleanup when the <RecoilRoot> is unmounted

  useEffect(function () {
    return function () {
      var _iterator7 = _createForOfIteratorHelper(
          storeRef.current.getState().knownAtoms,
        ),
        _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          var atomKey = _step7.value;
          cleanUpNode(storeRef.current, atomKey);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    };
  }, []);
  return /*#__PURE__*/ React.createElement(
    AppContext.Provider,
    {
      value: storeRef,
    },
    /*#__PURE__*/ React.createElement(
      MutableSourceContext.Provider,
      {
        value: mutableSource,
      },
      /*#__PURE__*/ React.createElement(Batcher, {
        setNotifyBatcherOfChange: setNotifyBatcherOfChange,
      }),
      children,
    ),
  );
}

module.exports = {
  useStoreRef: useStoreRef,
  useRecoilMutableSource: useRecoilMutableSource,
  RecoilRoot: RecoilRoot,
  sendEndOfBatchNotifications_FOR_TESTING: sendEndOfBatchNotifications,
};

var Recoil_RecoilRoot_react = /*#__PURE__*/ Object.freeze({
  __proto__: null,
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 *
 * @format
 */

// eslint-disable-next-line no-unused-vars
var AbstractRecoilValue$1 = function AbstractRecoilValue(newKey) {
  _classCallCheck(this, AbstractRecoilValue);

  _defineProperty(this, 'key', void 0);

  this.key = newKey;
};

var RecoilState$1 = /*#__PURE__*/ (function (_AbstractRecoilValue) {
  _inherits(RecoilState, _AbstractRecoilValue);

  var _super = _createSuper(RecoilState);

  function RecoilState() {
    _classCallCheck(this, RecoilState);

    return _super.apply(this, arguments);
  }

  return RecoilState;
})(AbstractRecoilValue$1);

var RecoilValueReadOnly$1 = /*#__PURE__*/ (function (_AbstractRecoilValue2) {
  _inherits(RecoilValueReadOnly, _AbstractRecoilValue2);

  var _super2 = _createSuper(RecoilValueReadOnly);

  function RecoilValueReadOnly() {
    _classCallCheck(this, RecoilValueReadOnly);

    return _super2.apply(this, arguments);
  }

  return RecoilValueReadOnly;
})(AbstractRecoilValue$1);

function isRecoilValue$1(x) {
  return x instanceof RecoilState$1 || x instanceof RecoilValueReadOnly$1;
}

module.exports = {
  AbstractRecoilValue: AbstractRecoilValue$1,
  RecoilState: RecoilState$1,
  RecoilValueReadOnly: RecoilValueReadOnly$1,
  isRecoilValue: isRecoilValue$1,
};

var Recoil_RecoilValue = /*#__PURE__*/ Object.freeze({
  __proto__: null,
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+obviz
 *
 * @format
 */

var concatIterables = require('../util/Recoil_concatIterables');

var filterIterable = require('../util/Recoil_filterIterable');

var nullthrows$3 = require('../util/Recoil_nullthrows');

var _require$2 = require('./Recoil_Batching'),
  batchUpdates$1 = _require$2.batchUpdates;

var _require2$2 = require('./Recoil_FunctionalCore'),
  getDownstreamNodes$2 = _require2$2.getDownstreamNodes,
  peekNodeInfo = _require2$2.peekNodeInfo;

var _require3$2 = require('./Recoil_Graph'),
  graph$1 = _require3$2.graph;

var _require4$2 = require('./Recoil_Node'),
  DEFAULT_VALUE$1 = _require4$2.DEFAULT_VALUE,
  recoilValues$1 = _require4$2.recoilValues,
  recoilValuesForKeys$1 = _require4$2.recoilValuesForKeys;

var _require5$2 = require('./Recoil_RecoilValueInterface'),
  AbstractRecoilValue$2 = _require5$2.AbstractRecoilValue,
  getRecoilValueAsLoadable$1 = _require5$2.getRecoilValueAsLoadable,
  setRecoilValue$1 = _require5$2.setRecoilValue,
  setUnvalidatedRecoilValue$1 = _require5$2.setUnvalidatedRecoilValue;

var _require6$1 = require('./Recoil_State'),
  getNextTreeStateVersion$1 = _require6$1.getNextTreeStateVersion,
  makeEmptyStoreState$1 = _require6$1.makeEmptyStoreState; // Opaque at this surface because it's part of the public API from here.

// A "Snapshot" is "read-only" and captures a specific set of values of atoms.
// However, the data-flow-graph and selector values may evolve as selector
// evaluation functions are executed and async selectors resolve.
var Snapshot = /*#__PURE__*/ (function () {
  function Snapshot(storeState) {
    var _this = this;

    _classCallCheck(this, Snapshot);

    _defineProperty(this, '_store', void 0);

    _defineProperty(this, 'getLoadable', function (recoilValue) {
      return (
        // $FlowFixMe[escaped-generic]
        getRecoilValueAsLoadable$1(_this._store, recoilValue)
      );
    });

    _defineProperty(this, 'getPromise', function (recoilValue) {
      return (
        // $FlowFixMe[escaped-generic]
        _this.getLoadable(recoilValue).toPromise()
      );
    });

    _defineProperty(this, 'getNodes_UNSTABLE', function (opt) {
      // TODO Deal with modified selectors
      if ((opt === null || opt === void 0 ? void 0 : opt.isModified) === true) {
        if (
          (opt === null || opt === void 0 ? void 0 : opt.isInitialized) ===
          false
        ) {
          return [];
        }

        var state = _this._store.getState().currentTree;

        return recoilValuesForKeys$1(state.dirtyAtoms);
      }

      var knownAtoms = _this._store.getState().knownAtoms;

      var knownSelectors = _this._store.getState().knownSelectors;

      return (opt === null || opt === void 0 ? void 0 : opt.isInitialized) ==
        null
        ? recoilValues$1.values()
        : opt.isInitialized === true
        ? recoilValuesForKeys$1(
            concatIterables([
              _this._store.getState().knownAtoms,
              _this._store.getState().knownSelectors,
            ]),
          )
        : filterIterable(recoilValues$1.values(), function (_ref) {
            var key = _ref.key;
            return !knownAtoms.has(key) && !knownSelectors.has(key);
          });
    });

    _defineProperty(this, 'getDeps_UNSTABLE', function (recoilValue) {
      _this.getLoadable(recoilValue); // Evaluate node to ensure deps are up-to-date

      var deps = _this._store
        .getGraph(_this._store.getState().currentTree.version)
        .nodeDeps.get(recoilValue.key);

      return recoilValuesForKeys$1(
        deps !== null && deps !== void 0 ? deps : [],
      );
    });

    _defineProperty(this, 'getSubscribers_UNSTABLE', function (_ref2) {
      var key = _ref2.key;

      var state = _this._store.getState().currentTree;

      var downstreamNodes = filterIterable(
        getDownstreamNodes$2(_this._store, state, new Set([key])),
        function (nodeKey) {
          return nodeKey !== key;
        },
      );
      return {
        nodes: recoilValuesForKeys$1(downstreamNodes),
      };
    });

    _defineProperty(this, 'getInfo_UNSTABLE', function (_ref3) {
      var key = _ref3.key;
      return peekNodeInfo(
        _this._store,
        _this._store.getState().currentTree,
        key,
      );
    });

    _defineProperty(this, 'map', function (mapper) {
      var mutableSnapshot = new MutableSnapshot(_this);
      mapper(mutableSnapshot); // if removing batchUpdates from `set` add it here

      return cloneSnapshot(mutableSnapshot.getStore_INTERNAL());
    });

    _defineProperty(
      this,
      'asyncMap',
      /*#__PURE__*/ (function () {
        var _ref4 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee(mapper) {
            var mutableSnapshot;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    mutableSnapshot = new MutableSnapshot(_this);
                    _context.next = 3;
                    return mapper(mutableSnapshot);

                  case 3:
                    return _context.abrupt(
                      'return',
                      cloneSnapshot(mutableSnapshot.getStore_INTERNAL()),
                    );

                  case 4:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          }),
        );

        return function (_x) {
          return _ref4.apply(this, arguments);
        };
      })(),
    );

    this._store = {
      getState: function getState() {
        return storeState;
      },
      replaceState: function replaceState(replacer) {
        storeState.currentTree = replacer(storeState.currentTree); // no batching so nextTree is never active
      },
      getGraph: function getGraph(version) {
        var graphs = storeState.graphsByVersion;

        if (graphs.has(version)) {
          return nullthrows$3(graphs.get(version));
        }

        var newGraph = graph$1();
        graphs.set(version, newGraph);
        return newGraph;
      },
      subscribeToTransactions: function subscribeToTransactions() {
        return {
          release: function release() {},
        };
      },
      addTransactionMetadata: function addTransactionMetadata() {
        throw new Error('Cannot subscribe to Snapshots');
      },
    };
  }

  _createClass(Snapshot, [
    {
      key: 'getStore_INTERNAL',
      value: function getStore_INTERNAL() {
        return this._store;
      },
    },
    {
      key: 'getID',
      value: function getID() {
        return this.getID_INTERNAL();
      },
    },
    {
      key: 'getID_INTERNAL',
      value: function getID_INTERNAL() {
        return this._store.getState().currentTree.stateID;
      },
    },
  ]);

  return Snapshot;
})();

function cloneStoreState(store, treeState) {
  var bumpVersion =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var storeState = store.getState();
  var version = bumpVersion ? getNextTreeStateVersion$1() : treeState.version;
  return {
    currentTree: bumpVersion
      ? {
          // TODO snapshots shouldn't really have versions because a new version number
          // is always assigned when the snapshot is gone to.
          version: version,
          stateID: version,
          transactionMetadata: _objectSpread2(
            {},
            treeState.transactionMetadata,
          ),
          dirtyAtoms: new Set(treeState.dirtyAtoms),
          atomValues: treeState.atomValues.clone(),
          nonvalidatedAtoms: treeState.nonvalidatedAtoms.clone(),
        }
      : treeState,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(storeState.knownAtoms),
    // FIXME here's a copy
    knownSelectors: new Set(storeState.knownSelectors),
    // FIXME here's a copy
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(version, store.getGraph(treeState.version)),
    versionsUsedByComponent: new Map(),
  };
} // Factory to build a fresh snapshot

function freshSnapshot$1(initializeState) {
  var snapshot = new Snapshot(makeEmptyStoreState$1());
  return initializeState != null ? snapshot.map(initializeState) : snapshot;
} // Factory to clone a snapahot state

function cloneSnapshot(store) {
  var version =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : 'current';
  var storeState = store.getState();
  var treeState =
    version === 'current'
      ? storeState.currentTree
      : nullthrows$3(storeState.previousTree);
  return new Snapshot(cloneStoreState(store, treeState));
}

var MutableSnapshot = /*#__PURE__*/ (function (_Snapshot) {
  _inherits(MutableSnapshot, _Snapshot);

  var _super = _createSuper(MutableSnapshot);

  function MutableSnapshot(snapshot) {
    var _this2;

    _classCallCheck(this, MutableSnapshot);

    _this2 = _super.call(
      this,
      cloneStoreState(
        snapshot.getStore_INTERNAL(),
        snapshot.getStore_INTERNAL().getState().currentTree,
        true,
      ),
    );

    _defineProperty(_assertThisInitialized(_this2), 'set', function (
      recoilState,
      newValueOrUpdater,
    ) {
      var store = _this2.getStore_INTERNAL(); // This batchUpdates ensures this `set` is applied immediately and you can
      // read the written value after calling `set`. I would like to remove this
      // behavior and only batch in `Snapshot.map`, but this would be a breaking
      // change potentially.

      batchUpdates$1(function () {
        setRecoilValue$1(store, recoilState, newValueOrUpdater);
      });
    });

    _defineProperty(_assertThisInitialized(_this2), 'reset', function (
      recoilState,
    ) {
      return (
        // See note at `set` about batched updates.
        batchUpdates$1(function () {
          return setRecoilValue$1(
            _this2.getStore_INTERNAL(),
            recoilState,
            DEFAULT_VALUE$1,
          );
        })
      );
    });

    _defineProperty(
      _assertThisInitialized(_this2),
      'setUnvalidatedAtomValues_DEPRECATED',
      function (values) {
        var store = _this2.getStore_INTERNAL();

        batchUpdates$1(function () {
          var _iterator = _createForOfIteratorHelper(values.entries()),
            _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var _step$value = _slicedToArray(_step.value, 2),
                k = _step$value[0],
                v = _step$value[1];

              setUnvalidatedRecoilValue$1(
                store,
                new AbstractRecoilValue$2(k),
                v,
              );
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
      },
    );

    return _this2;
  } // We want to allow the methods to be destructured and used as accessors
  // eslint-disable-next-line fb-www/extra-arrow-initializer

  return MutableSnapshot;
})(Snapshot);

module.exports = {
  Snapshot: Snapshot,
  MutableSnapshot: MutableSnapshot,
  freshSnapshot: freshSnapshot$1,
  cloneSnapshot: cloneSnapshot,
};

var Recoil_Snapshot = /*#__PURE__*/ Object.freeze({
  __proto__: null,
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 *
 * @format
 */

var _require$3 = require('react'),
  useCallback = _require$3.useCallback,
  useEffect$1 = _require$3.useEffect,
  useMemo$1 = _require$3.useMemo,
  useRef$1 = _require$3.useRef,
  useState$1 = _require$3.useState;

var _require2$3 = require('../core/Recoil_Batching'),
  batchUpdates$2 = _require2$3.batchUpdates;

var _require3$3 = require('../core/Recoil_Node'),
  DEFAULT_VALUE$2 = _require3$3.DEFAULT_VALUE,
  getNode$1 = _require3$3.getNode,
  nodes$1 = _require3$3.nodes;

var _require4$3 = require('../core/Recoil_RecoilRoot.react'),
  useRecoilMutableSource$1 = _require4$3.useRecoilMutableSource,
  useStoreRef$1 = _require4$3.useStoreRef;

var _require5$3 = require('../core/Recoil_RecoilValue'),
  isRecoilValue$2 = _require5$3.isRecoilValue;

var _require6$2 = require('../core/Recoil_RecoilValueInterface'),
  AbstractRecoilValue$3 = _require6$2.AbstractRecoilValue,
  getRecoilValueAsLoadable$2 = _require6$2.getRecoilValueAsLoadable,
  setRecoilValue$2 = _require6$2.setRecoilValue,
  setRecoilValueLoadable$1 = _require6$2.setRecoilValueLoadable,
  setUnvalidatedRecoilValue$2 = _require6$2.setUnvalidatedRecoilValue,
  subscribeToRecoilValue$1 = _require6$2.subscribeToRecoilValue;

var _require7$1 = require('../core/Recoil_Snapshot'),
  Snapshot$1 = _require7$1.Snapshot,
  cloneSnapshot$1 = _require7$1.cloneSnapshot;

var _require8$1 = require('../util/Recoil_CopyOnWrite'),
  setByAddingToSet = _require8$1.setByAddingToSet;

var differenceSets = require('../util/Recoil_differenceSets');

var expectationViolation$2 = require('../util/Recoil_expectationViolation');

var filterMap = require('../util/Recoil_filterMap');

var filterSet = require('../util/Recoil_filterSet');

var gkx$1 = require('../util/Recoil_gkx');

var invariant = require('../util/Recoil_invariant');

var mapMap = require('../util/Recoil_mapMap');

var mergeMaps = require('../util/Recoil_mergeMaps');

var _require9 = require('../util/Recoil_mutableSource'),
  mutableSourceExists = _require9.mutableSourceExists,
  useMutableSource = _require9.useMutableSource;

var nullthrows$4 = require('../util/Recoil_nullthrows');

var recoverableViolation$2 = require('../util/Recoil_recoverableViolation');

var Tracing$2 = require('../util/Recoil_Tracing');

var useComponentName = require('../util/Recoil_useComponentName');

function handleLoadable(loadable, atom, storeRef) {
  // We can't just throw the promise we are waiting on to Suspense.  If the
  // upstream dependencies change it may produce a state in which the component
  // can render, but it would still be suspended on a Promise that may never resolve.
  if (loadable.state === 'hasValue') {
    return loadable.contents;
  } else if (loadable.state === 'loading') {
    var promise = new Promise(function (resolve) {
      storeRef.current.getState().suspendedComponentResolvers.add(resolve);
    });
    throw promise;
  } else if (loadable.state === 'hasError') {
    throw loadable.contents;
  } else {
    throw new Error('Invalid value of loadable atom "'.concat(atom.key, '"'));
  }
}

function validateRecoilValue(recoilValue, hookName) {
  if (!isRecoilValue$2(recoilValue)) {
    throw new Error(
      'Invalid argument to '
        .concat(hookName, ': expected an atom or selector but got ')
        .concat(String(recoilValue)),
    );
  }
}

function useRecoilInterface_DEPRECATED() {
  var storeRef = useStoreRef$1();

  var _useState = useState$1([]),
    _useState2 = _slicedToArray(_useState, 2),
    _ = _useState2[0],
    forceUpdate = _useState2[1];

  var recoilValuesUsed = useRef$1(new Set());
  recoilValuesUsed.current = new Set(); // Track the RecoilValues used just during this render

  var previousSubscriptions = useRef$1(new Set());
  var subscriptions = useRef$1(new Map());
  var unsubscribeFrom = useCallback(
    function (key) {
      var sub = subscriptions.current.get(key);

      if (sub) {
        sub.release();
        subscriptions.current.delete(key);
      }
    },
    [subscriptions],
  );
  var componentName = useComponentName();
  useEffect$1(function () {
    var store = storeRef.current;

    function updateState(_state, key) {
      if (!subscriptions.current.has(key)) {
        return;
      }

      forceUpdate([]);
    }

    differenceSets(
      recoilValuesUsed.current,
      previousSubscriptions.current,
    ).forEach(function (key) {
      if (subscriptions.current.has(key)) {
        expectationViolation$2(
          'Double subscription to RecoilValue "'.concat(key, '"'),
        );
        return;
      }

      var sub = subscribeToRecoilValue$1(
        store,
        new AbstractRecoilValue$3(key),
        function (state) {
          Tracing$2.trace('RecoilValue subscription fired', key, function () {
            updateState(state, key);
          });
        },
        componentName,
      );
      subscriptions.current.set(key, sub);
      Tracing$2.trace('initial update on subscribing', key, function () {
        /**
         * Since we're subscribing in an effect we need to update to the latest
         * value of the atom since it may have changed since we rendered. We can
         * go ahead and do that now, unless we're in the middle of a batch --
         * in which case we should do it at the end of the batch, due to the
         * following edge case: Suppose an atom is updated in another useEffect
         * of this same component. Then the following sequence of events occur:
         * 1. Atom is updated and subs fired (but we may not be subscribed
         *    yet depending on order of effects, so we miss this) Updated value
         *    is now in nextTree, but not currentTree.
         * 2. This effect happens. We subscribe and update.
         * 3. From the update we re-render and read currentTree, with old value.
         * 4. Batcher's effect sets currentTree to nextTree.
         * In this sequence we miss the update. To avoid that, add the update
         * to queuedComponentCallback if a batch is in progress.
         */
        // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.
        var state = store.getState();

        if (state.nextTree) {
          store.getState().queuedComponentCallbacks_DEPRECATED.push(
            Tracing$2.wrap(function () {
              updateState(store.getState(), key);
            }),
          );
        } else {
          updateState(store.getState(), key);
        }
      });
    });
    differenceSets(
      previousSubscriptions.current,
      recoilValuesUsed.current,
    ).forEach(function (key) {
      unsubscribeFrom(key);
    });
    previousSubscriptions.current = recoilValuesUsed.current;
  });
  useEffect$1(
    function () {
      var subs = subscriptions.current;
      return function () {
        return subs.forEach(function (_, key) {
          return unsubscribeFrom(key);
        });
      };
    },
    [unsubscribeFrom],
  );
  return useMemo$1(
    function () {
      function useSetRecoilState(recoilState) {
        if (process.env.NODE_ENV !== 'production') {
          // $FlowFixMe[escaped-generic]
          validateRecoilValue(recoilState, 'useSetRecoilState');
        }

        return function (newValueOrUpdater) {
          setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
        };
      }

      function useResetRecoilState(recoilState) {
        if (process.env.NODE_ENV !== 'production') {
          // $FlowFixMe[escaped-generic]
          validateRecoilValue(recoilState, 'useResetRecoilState');
        }

        return function () {
          return setRecoilValue$2(
            storeRef.current,
            recoilState,
            DEFAULT_VALUE$2,
          );
        };
      }

      function useRecoilValueLoadable(recoilValue) {
        if (process.env.NODE_ENV !== 'production') {
          // $FlowFixMe[escaped-generic]
          validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
        }

        if (!recoilValuesUsed.current.has(recoilValue.key)) {
          recoilValuesUsed.current = setByAddingToSet(
            recoilValuesUsed.current,
            recoilValue.key,
          );
        } // TODO Restore optimization to memoize lookup

        return getRecoilValueAsLoadable$2(storeRef.current, recoilValue);
      }

      function useRecoilValue(recoilValue) {
        if (process.env.NODE_ENV !== 'production') {
          // $FlowFixMe[escaped-generic]
          validateRecoilValue(recoilValue, 'useRecoilValue');
        }

        var loadable = useRecoilValueLoadable(recoilValue); // $FlowFixMe[escaped-generic]

        return handleLoadable(loadable, recoilValue, storeRef);
      }

      function useRecoilState(recoilState) {
        if (process.env.NODE_ENV !== 'production') {
          // $FlowFixMe[escaped-generic]
          validateRecoilValue(recoilState, 'useRecoilState');
        }

        return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
      }

      function useRecoilStateLoadable(recoilState) {
        if (process.env.NODE_ENV !== 'production') {
          // $FlowFixMe[escaped-generic]
          validateRecoilValue(recoilState, 'useRecoilStateLoadable');
        }

        return [
          useRecoilValueLoadable(recoilState),
          useSetRecoilState(recoilState),
        ];
      }

      return {
        getRecoilValue: useRecoilValue,
        getRecoilValueLoadable: useRecoilValueLoadable,
        getRecoilState: useRecoilState,
        getRecoilStateLoadable: useRecoilStateLoadable,
        getSetRecoilState: useSetRecoilState,
        getResetRecoilState: useResetRecoilState,
      };
    },
    [recoilValuesUsed, storeRef],
  );
}

var recoilComponentGetRecoilValueCount_FOR_TESTING = {
  current: 0,
};

function useRecoilValueLoadable_MUTABLESOURCE(recoilValue) {
  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
  }

  var storeRef = useStoreRef$1();
  var getLoadable = useCallback(
    function () {
      var store = storeRef.current;
      var treeState = store.getState().currentTree;
      return getRecoilValueAsLoadable$2(store, recoilValue, treeState);
    },
    [storeRef, recoilValue],
  );
  var getLoadableWithTesting = useCallback(
    function () {
      if (process.env.NODE_ENV !== 'production') {
        recoilComponentGetRecoilValueCount_FOR_TESTING.current++;
      }

      return getLoadable();
    },
    [getLoadable],
  );
  var componentName = useComponentName();
  var subscribe = useCallback(
    function (_storeState, callback) {
      var store = storeRef.current;
      var subscription = subscribeToRecoilValue$1(
        store,
        recoilValue,
        function () {
          return Tracing$2.trace(
            'RecoilValue subscription fired',
            recoilValue.key,
            function () {
              if (!gkx$1('recoil_suppress_rerender_in_callback')) {
                return callback();
              } // Only re-render if the value has changed.
              // This will evaluate the atom/selector now as well as when the
              // component renders, but that may help with prefetching.

              var newLoadable = getLoadable();

              if (!prevLoadableRef.current.is(newLoadable)) {
                callback();
              }
            },
          );
        },
        componentName,
      );
      return subscription.release;
    },
    [storeRef, recoilValue, componentName, getLoadable],
  );
  var source = useRecoilMutableSource$1();
  var loadable = useMutableSource(source, getLoadableWithTesting, subscribe);
  var prevLoadableRef = useRef$1(loadable);
  useEffect$1(function () {
    prevLoadableRef.current = loadable;
  });
  return loadable;
}

function useRecoilValueLoadable_LEGACY(recoilValue) {
  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
  }

  var storeRef = useStoreRef$1();

  var _useState3 = useState$1([]),
    _useState4 = _slicedToArray(_useState3, 2),
    _ = _useState4[0],
    forceUpdate = _useState4[1];

  var componentName = useComponentName();
  useEffect$1(
    function () {
      var store = storeRef.current;
      var storeState = store.getState();
      var subscription = subscribeToRecoilValue$1(
        store,
        recoilValue,
        function (_state) {
          Tracing$2.trace(
            'RecoilValue subscription fired',
            recoilValue.key,
            function () {
              var _prevLoadableRef$curr;

              if (!gkx$1('recoil_suppress_rerender_in_callback')) {
                return forceUpdate([]);
              }

              var newLoadable = getRecoilValueAsLoadable$2(
                store,
                recoilValue,
                store.getState().currentTree,
              );

              if (
                !((_prevLoadableRef$curr = prevLoadableRef.current) === null ||
                _prevLoadableRef$curr === void 0
                  ? void 0
                  : _prevLoadableRef$curr.is(newLoadable))
              ) {
                forceUpdate(newLoadable);
              }
            },
          );
        },
        componentName,
      );
      Tracing$2.trace(
        'initial update on subscribing',
        recoilValue.key,
        function () {
          /**
           * Since we're subscribing in an effect we need to update to the latest
           * value of the atom since it may have changed since we rendered. We can
           * go ahead and do that now, unless we're in the middle of a batch --
           * in which case we should do it at the end of the batch, due to the
           * following edge case: Suppose an atom is updated in another useEffect
           * of this same component. Then the following sequence of events occur:
           * 1. Atom is updated and subs fired (but we may not be subscribed
           *    yet depending on order of effects, so we miss this) Updated value
           *    is now in nextTree, but not currentTree.
           * 2. This effect happens. We subscribe and update.
           * 3. From the update we re-render and read currentTree, with old value.
           * 4. Batcher's effect sets currentTree to nextTree.
           * In this sequence we miss the update. To avoid that, add the update
           * to queuedComponentCallback if a batch is in progress.
           */
          if (storeState.nextTree) {
            store.getState().queuedComponentCallbacks_DEPRECATED.push(
              Tracing$2.wrap(function () {
                prevLoadableRef.current = null;
                forceUpdate([]);
              }),
            );
          } else {
            forceUpdate([]);
          }
        },
      );
      return subscription.release;
    },
    [componentName, recoilValue, storeRef],
  );
  var loadable = getRecoilValueAsLoadable$2(storeRef.current, recoilValue);
  var prevLoadableRef = useRef$1(loadable);
  useEffect$1(function () {
    prevLoadableRef.current = loadable;
  });
  return loadable;
}
/**
  Like useRecoilValue(), but either returns the value if available or
  just undefined if not available for any reason, such as pending or error.
*/

function useRecoilValueLoadable(recoilValue) {
  if (mutableSourceExists()) {
    // eslint-disable-next-line fb-www/react-hooks
    return useRecoilValueLoadable_MUTABLESOURCE(recoilValue);
  } else {
    // eslint-disable-next-line fb-www/react-hooks
    return useRecoilValueLoadable_LEGACY(recoilValue);
  }
}
/**
  Returns the value represented by the RecoilValue.
  If the value is pending, it will throw a Promise to suspend the component,
  if the value is an error it will throw it for the nearest React error boundary.
  This will also subscribe the component for any updates in the value.
  */

function useRecoilValue(recoilValue) {
  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilValue, 'useRecoilValue');
  }

  var storeRef = useStoreRef$1();
  var loadable = useRecoilValueLoadable(recoilValue); // $FlowFixMe[escaped-generic]

  return handleLoadable(loadable, recoilValue, storeRef);
}
/**
  Returns a function that allows the value of a RecoilState to be updated, but does
  not subscribe the component to changes to that RecoilState.
*/

function useSetRecoilState(recoilState) {
  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useSetRecoilState');
  }

  var storeRef = useStoreRef$1();
  return useCallback(
    function (newValueOrUpdater) {
      setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
    },
    [storeRef, recoilState],
  );
}
/**
  Returns a function that will reset the value of a RecoilState to its default
*/

function useResetRecoilState(recoilState) {
  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useResetRecoilState');
  }

  var storeRef = useStoreRef$1();
  return useCallback(
    function () {
      setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
    },
    [storeRef, recoilState],
  );
}
/**
  Equivalent to useState(). Allows the value of the RecoilState to be read and written.
  Subsequent updates to the RecoilState will cause the component to re-render. If the
  RecoilState is pending, this will suspend the component and initiate the
  retrieval of the value. If evaluating the RecoilState resulted in an error, this will
  throw the error so that the nearest React error boundary can catch it.
*/

function useRecoilState(recoilState) {
  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useRecoilState');
  }

  return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
}
/**
  Like useRecoilState(), but does not cause Suspense or React error handling. Returns
  an object that indicates whether the RecoilState is available, pending, or
  unavailable due to an error.
*/

function useRecoilStateLoadable(recoilState) {
  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useRecoilStateLoadable');
  }

  return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
}

function useTransactionSubscription(callback) {
  var storeRef = useStoreRef$1();
  useEffect$1(
    function () {
      var sub = storeRef.current.subscribeToTransactions(callback);
      return sub.release;
    },
    [callback, storeRef],
  );
}

function externallyVisibleAtomValuesInState(state) {
  var atomValues = state.atomValues.toMap();
  var persistedAtomContentsValues = mapMap(
    filterMap(atomValues, function (v, k) {
      var node = getNode$1(k);
      var persistence = node.persistence_UNSTABLE;
      return (
        persistence != null &&
        persistence.type !== 'none' &&
        v.state === 'hasValue'
      );
    }),
    function (v) {
      return v.contents;
    },
  ); // Merge in nonvalidated atoms; we may not have defs for them but they will
  // all have persistence on or they wouldn't be there in the first place.

  return mergeMaps(
    state.nonvalidatedAtoms.toMap(),
    persistedAtomContentsValues,
  );
}

/**
  Calls the given callback after any atoms have been modified and the consequent
  component re-renders have been committed. This is intended for persisting
  the values of the atoms to storage. The stored values can then be restored
  using the useSetUnvalidatedAtomValues hook.

  The callback receives the following info:

  atomValues: The current value of every atom that is both persistable (persistence
              type not set to 'none') and whose value is available (not in an
              error or loading state).

  previousAtomValues: The value of every persistable and available atom before
               the transaction began.

  atomInfo: A map containing the persistence settings for each atom. Every key
            that exists in atomValues will also exist in atomInfo.

  modifiedAtoms: The set of atoms that were written to during the transaction.

  transactionMetadata: Arbitrary information that was added via the
          useSetUnvalidatedAtomValues hook. Useful for ignoring the useSetUnvalidatedAtomValues
          transaction, to avoid loops.
*/
function useTransactionObservation_DEPRECATED(callback) {
  useTransactionSubscription(
    useCallback(
      function (store) {
        var previousTree = store.getState().previousTree;
        var currentTree = store.getState().currentTree;

        if (!previousTree) {
          recoverableViolation$2(
            'Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil',
            'recoil',
          );
          previousTree = store.getState().currentTree; // attempt to trundle on
        }

        var atomValues = externallyVisibleAtomValuesInState(currentTree);
        var previousAtomValues = externallyVisibleAtomValuesInState(
          previousTree,
        );
        var atomInfo = mapMap(nodes$1, function (node) {
          var _node$persistence_UNS,
            _node$persistence_UNS2,
            _node$persistence_UNS3,
            _node$persistence_UNS4;

          return {
            persistence_UNSTABLE: {
              type:
                (_node$persistence_UNS =
                  (_node$persistence_UNS2 = node.persistence_UNSTABLE) ===
                    null || _node$persistence_UNS2 === void 0
                    ? void 0
                    : _node$persistence_UNS2.type) !== null &&
                _node$persistence_UNS !== void 0
                  ? _node$persistence_UNS
                  : 'none',
              backButton:
                (_node$persistence_UNS3 =
                  (_node$persistence_UNS4 = node.persistence_UNSTABLE) ===
                    null || _node$persistence_UNS4 === void 0
                    ? void 0
                    : _node$persistence_UNS4.backButton) !== null &&
                _node$persistence_UNS3 !== void 0
                  ? _node$persistence_UNS3
                  : false,
            },
          };
        }); // Filter on existance in atomValues so that externally-visible rules
        // are also applied to modified atoms (specifically exclude selectors):

        var modifiedAtoms = filterSet(currentTree.dirtyAtoms, function (k) {
          return atomValues.has(k) || previousAtomValues.has(k);
        });
        callback({
          atomValues: atomValues,
          previousAtomValues: previousAtomValues,
          atomInfo: atomInfo,
          modifiedAtoms: modifiedAtoms,
          transactionMetadata: _objectSpread2(
            {},
            currentTree.transactionMetadata,
          ),
        });
      },
      [callback],
    ),
  );
}

function useRecoilTransactionObserver(callback) {
  useTransactionSubscription(
    useCallback(
      function (store) {
        callback({
          snapshot: cloneSnapshot$1(store, 'current'),
          previousSnapshot: cloneSnapshot$1(store, 'previous'),
        });
      },
      [callback],
    ),
  );
} // Return a snapshot of the current state and subscribe to all state changes

function useRecoilSnapshot() {
  var storeRef = useStoreRef$1();

  var _useState5 = useState$1(function () {
      return cloneSnapshot$1(storeRef.current);
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    snapshot = _useState6[0],
    setSnapshot = _useState6[1];

  useTransactionSubscription(
    useCallback(function (store) {
      return setSnapshot(cloneSnapshot$1(store));
    }, []),
  );
  return snapshot;
}

function useGotoRecoilSnapshot() {
  var storeRef = useStoreRef$1();
  return useCallback(
    function (snapshot) {
      var _storeState$nextTree;

      var storeState = storeRef.current.getState();
      var prev =
        (_storeState$nextTree = storeState.nextTree) !== null &&
        _storeState$nextTree !== void 0
          ? _storeState$nextTree
          : storeState.currentTree;
      var next = snapshot.getStore_INTERNAL().getState().currentTree;
      batchUpdates$2(function () {
        var keysToUpdate = new Set();

        for (
          var _i = 0, _arr = [prev.atomValues.keys(), next.atomValues.keys()];
          _i < _arr.length;
          _i++
        ) {
          var keys = _arr[_i];

          var _iterator = _createForOfIteratorHelper(keys),
            _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var _prev$atomValues$get, _next$atomValues$get;

              var key = _step.value;

              if (
                ((_prev$atomValues$get = prev.atomValues.get(key)) === null ||
                _prev$atomValues$get === void 0
                  ? void 0
                  : _prev$atomValues$get.contents) !==
                  ((_next$atomValues$get = next.atomValues.get(key)) === null ||
                  _next$atomValues$get === void 0
                    ? void 0
                    : _next$atomValues$get.contents) &&
                getNode$1(key).shouldRestoreFromSnapshots
              ) {
                keysToUpdate.add(key);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        keysToUpdate.forEach(function (key) {
          setRecoilValueLoadable$1(
            storeRef.current,
            new AbstractRecoilValue$3(key),
            next.atomValues.has(key)
              ? nullthrows$4(next.atomValues.get(key))
              : DEFAULT_VALUE$2,
          );
        });
        storeRef.current.replaceState(function (state) {
          return _objectSpread2(
            _objectSpread2({}, state),
            {},
            {
              stateID: snapshot.getID_INTERNAL(),
            },
          );
        });
      });
    },
    [storeRef],
  );
}

function useSetUnvalidatedAtomValues() {
  var storeRef = useStoreRef$1();
  return function (values) {
    var transactionMetadata =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    batchUpdates$2(function () {
      storeRef.current.addTransactionMetadata(transactionMetadata);
      values.forEach(function (value, key) {
        return setUnvalidatedRecoilValue$2(
          storeRef.current,
          new AbstractRecoilValue$3(key),
          value,
        );
      });
    });
  };
}

var Sentinel = function Sentinel() {
  _classCallCheck(this, Sentinel);
};

var SENTINEL = new Sentinel();

function useRecoilCallback(fn, deps) {
  var storeRef = useStoreRef$1();
  var gotoSnapshot = useGotoRecoilSnapshot();
  return useCallback(
    function () {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      // Use currentTree for the snapshot to show the currently committed state
      var snapshot = cloneSnapshot$1(storeRef.current);

      function set(recoilState, newValueOrUpdater) {
        setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
      }

      function reset(recoilState) {
        setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
      }

      var ret = SENTINEL;
      batchUpdates$2(function () {
        // flowlint-next-line unclear-type:off
        ret = fn({
          set: set,
          reset: reset,
          snapshot: snapshot,
          gotoSnapshot: gotoSnapshot,
        }).apply(void 0, args);
      });
      !!(ret instanceof Sentinel)
        ? process.env.NODE_ENV !== 'production'
          ? invariant(false, 'batchUpdates should return immediately')
          : invariant(false)
        : void 0;
      return ret;
    },
    deps != null ? [].concat(_toConsumableArray(deps), [storeRef]) : undefined, // eslint-disable-line fb-www/react-hooks-deps
  );
}

module.exports = {
  recoilComponentGetRecoilValueCount_FOR_TESTING: recoilComponentGetRecoilValueCount_FOR_TESTING,
  useGotoRecoilSnapshot: useGotoRecoilSnapshot,
  useRecoilCallback: useRecoilCallback,
  useRecoilInterface: useRecoilInterface_DEPRECATED,
  useRecoilSnapshot: useRecoilSnapshot,
  useRecoilState: useRecoilState,
  useRecoilStateLoadable: useRecoilStateLoadable,
  useRecoilTransactionObserver: useRecoilTransactionObserver,
  useRecoilValue: useRecoilValue,
  useRecoilValueLoadable: useRecoilValueLoadable,
  useResetRecoilState: useResetRecoilState,
  useSetRecoilState: useSetRecoilState,
  useSetUnvalidatedAtomValues: useSetUnvalidatedAtomValues,
  useTransactionObservation_DEPRECATED: useTransactionObservation_DEPRECATED,
  useTransactionSubscription_DEPRECATED: useTransactionSubscription,
};

var Recoil_Hooks = /*#__PURE__*/ Object.freeze({
  __proto__: null,
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 *
 * @format
 */

var _require$4 = require('../util/Recoil_CopyOnWrite'),
  setByAddingToSet$1 = _require$4.setByAddingToSet;

var filterIterable$1 = require('../util/Recoil_filterIterable');

var mapIterable$1 = require('../util/Recoil_mapIterable');

var _require2$4 = require('./Recoil_Node'),
  getNode$2 = _require2$4.getNode,
  getNodeMaybe$2 = _require2$4.getNodeMaybe,
  recoilValuesForKeys$2 = _require2$4.recoilValuesForKeys; // flowlint-next-line unclear-type:off

var emptySet = Object.freeze(new Set());

var ReadOnlyRecoilValueError = /*#__PURE__*/ (function (_Error) {
  _inherits(ReadOnlyRecoilValueError, _Error);

  var _super = _createSuper(ReadOnlyRecoilValueError);

  function ReadOnlyRecoilValueError() {
    _classCallCheck(this, ReadOnlyRecoilValueError);

    return _super.apply(this, arguments);
  }

  return ReadOnlyRecoilValueError;
})(/*#__PURE__*/ _wrapNativeSuper(Error)); // Get the current value loadable of a node and update the state.
// Update dependencies and subscriptions for selectors.
// Update saved value validation for atoms.

function getNodeLoadable$1(store, state, key) {
  return getNode$2(key).get(store, state);
} // Peek at the current value loadable for a node without any evaluation or state change

function peekNodeLoadable(store, state, key) {
  return getNode$2(key).peek(store, state);
} // Write value directly to state bypassing the Node interface as the node
// definitions may not have been loaded yet when processing the initial snapshot.

function setUnvalidatedAtomValue_DEPRECATED$1(state, key, newValue) {
  var _node$invalidate;

  var node = getNodeMaybe$2(key);
  node === null || node === void 0
    ? void 0
    : (_node$invalidate = node.invalidate) === null ||
      _node$invalidate === void 0
    ? void 0
    : _node$invalidate.call(node, state);
  return _objectSpread2(
    _objectSpread2({}, state),
    {},
    {
      atomValues: state.atomValues.clone().delete(key),
      nonvalidatedAtoms: state.nonvalidatedAtoms.clone().set(key, newValue),
      dirtyAtoms: setByAddingToSet$1(state.dirtyAtoms, key),
    },
  );
} // Return the discovered dependencies and values to be written by setting
// a node value. (Multiple values may be written due to selectors getting to
// set upstreams; deps may be discovered because of reads in updater functions.)

function setNodeValue$2(store, state, key, newValue) {
  var node = getNode$2(key);

  if (node.set == null) {
    throw new ReadOnlyRecoilValueError(
      'Attempt to set read-only RecoilValue: '.concat(key),
    );
  }

  return node.set(store, state, newValue);
}

function cleanUpNode$1(store, key) {
  var node = getNode$2(key);
  node.cleanUp(store);
}

function peekNodeInfo$1(store, state, key) {
  var _graph$nodeDeps$get, _storeState$nodeToCom, _storeState$nodeToCom2;

  var storeState = store.getState();
  var graph = store.getGraph(state.version);
  var type = storeState.knownAtoms.has(key)
    ? 'atom'
    : storeState.knownSelectors.has(key)
    ? 'selector'
    : undefined;
  var downstreamNodes = filterIterable$1(
    getDownstreamNodes$3(store, state, new Set([key])),
    function (nodeKey) {
      return nodeKey !== key;
    },
  );
  return {
    loadable: peekNodeLoadable(store, state, key),
    isActive:
      storeState.knownAtoms.has(key) || storeState.knownSelectors.has(key),
    isSet: type === 'selector' ? false : state.atomValues.has(key),
    isModified: state.dirtyAtoms.has(key),
    type: type,
    deps: recoilValuesForKeys$2(
      (_graph$nodeDeps$get = graph.nodeDeps.get(key)) !== null &&
        _graph$nodeDeps$get !== void 0
        ? _graph$nodeDeps$get
        : [],
    ),
    subscribers: {
      nodes: recoilValuesForKeys$2(downstreamNodes),
      components: mapIterable$1(
        (_storeState$nodeToCom =
          (_storeState$nodeToCom2 = storeState.nodeToComponentSubscriptions.get(
            key,
          )) === null || _storeState$nodeToCom2 === void 0
            ? void 0
            : _storeState$nodeToCom2.values()) !== null &&
          _storeState$nodeToCom !== void 0
          ? _storeState$nodeToCom
          : [],
        function (_ref) {
          var _ref2 = _slicedToArray(_ref, 1),
            name = _ref2[0];

          return {
            name: name,
          };
        },
      ),
    },
  };
} // Find all of the recursively dependent nodes

function getDownstreamNodes$3(store, state, keys) {
  var visitedNodes = new Set();
  var visitingNodes = Array.from(keys);
  var graph = store.getGraph(state.version);

  for (var key = visitingNodes.pop(); key; key = visitingNodes.pop()) {
    var _graph$nodeToNodeSubs;

    visitedNodes.add(key);
    var subscribedNodes =
      (_graph$nodeToNodeSubs = graph.nodeToNodeSubscriptions.get(key)) !==
        null && _graph$nodeToNodeSubs !== void 0
        ? _graph$nodeToNodeSubs
        : emptySet;

    var _iterator = _createForOfIteratorHelper(subscribedNodes),
      _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var downstreamNode = _step.value;

        if (!visitedNodes.has(downstreamNode)) {
          visitingNodes.push(downstreamNode);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return visitedNodes;
}

module.exports = {
  getNodeLoadable: getNodeLoadable$1,
  peekNodeLoadable: peekNodeLoadable,
  setNodeValue: setNodeValue$2,
  cleanUpNode: cleanUpNode$1,
  setUnvalidatedAtomValue_DEPRECATED: setUnvalidatedAtomValue_DEPRECATED$1,
  peekNodeInfo: peekNodeInfo$1,
  getDownstreamNodes: getDownstreamNodes$3,
};

var Recoil_FunctionalCore = /*#__PURE__*/ Object.freeze({
  __proto__: null,
});

var peekNodeInfo$2 = Recoil_FunctionalCore.peekNodeInfo;

var useStoreRef$2 = Recoil_RecoilRoot_react.useStoreRef;

function useGetRecoilValueInfo() {
  var storeRef = useStoreRef$2();
  return function (_ref) {
    var key = _ref.key;
    return peekNodeInfo$2(
      storeRef.current,
      storeRef.current.getState().currentTree,
      key,
    );
  };
}

var Recoil_useGetRecoilValueInfo = useGetRecoilValueInfo;

var _require$5 = react,
  useMemo$2 = _require$5.useMemo;

var RecoilRoot$1 = Recoil_RecoilRoot_react.RecoilRoot,
  useStoreRef$3 = Recoil_RecoilRoot_react.useStoreRef;

function useRecoilBridgeAcrossReactRoots() {
  var store = useStoreRef$3().current;
  return useMemo$2(
    function () {
      function RecoilBridge(_ref) {
        var children = _ref.children;
        return /*#__PURE__*/ react.createElement(
          RecoilRoot$1,
          {
            store_INTERNAL: store,
          },
          children,
        );
      }

      return RecoilBridge;
    },
    [store],
  );
}

var Recoil_useRecoilBridgeAcrossReactRoots = useRecoilBridgeAcrossReactRoots;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Returns an atom, the basic unit of state in Recoil. An atom is a reference to
 * value that can be read, written, and subscribed to. It has a `key` that is
 * stable across time so that it can be persisted.
 *
 * There are two required options for creating an atom:
 *
 *    key. This is a string that uniquely identifies the atom. It should be
 *         stable across time so that persisted states remain valid.
 *
 *    default
 *          If `default` is provided, the atom is initialized to that value.
 *          Or, it may be set to another RecoilValue to use as a fallback.
 *          In that case, the value of the atom will be equal to that of the
 *          fallback, and will remain so until the first time the atom is written
 *          to, at which point it will stop tracking the fallback RecoilValue.
 *
 * The `persistence` option specifies that the atom should be saved to storage.
 * It is an object with two properties: `type` specifies where the atom should
 * be persisted; its only allowed value is "url"; `backButton` specifies whether
 * changes to the atom should result in pushes to the browser history stack; if
 * true, changing the atom and then hitting the Back button will cause the atom's
 * previous value to be restored. Applications are responsible for implementing
 * persistence by using the `useTransactionObservation` hook.
 *
 * Scoped atoms (DEPRECATED):
 * ===================================================================================
 *
 * The scopeRules_APPEND_ONLY_READ_THE_DOCS option causes the atom be be "scoped".
 * A scoped atom's value depends on other parts of the application state.
 * A separate value of the atom is stored for every value of the state that it
 * depends on. The dependencies may be changed without breaking existing URLs --
 * it uses whatever rule was current when the URL was written. Values written
 * under the newer rules are overlaid atop the previously-written values just for
 * those states in which the write occurred, with reads falling back to the older
 * values in other states, and eventually to the default or fallback.
 *
 * The scopedRules_APPEND_ONLY_READ_THE_DOCS parameter is a list of rules;
 * it should start with a single entry. This list must only be appended to:
 * existing entries must never be deleted or modified. Each rule is an atom
 * or selector whose value is some arbitrary key. A different value of the
 * scoped atom will be stored for each key. To change the scope rule, simply add
 * a new function to the list. Each rule is either an array of atoms of primitives,
 * or an atom of an array of primitives.
 *
 * Ordinary atoms may be upgraded to scoped atoms. To un-scope an atom, add a new
 * scope rule consisting of a constant.
 *
 * @emails oncall+recoil
 *
 * @format
 */

// @fb-only: const {scopedAtom} = require('Recoil_ScopedAtom');
var _require$6 = require('../adt/Recoil_Loadable'),
  loadableWithError = _require$6.loadableWithError,
  loadableWithPromise = _require$6.loadableWithPromise,
  loadableWithValue = _require$6.loadableWithValue;

var _require2$5 = require('../core/Recoil_Node'),
  DEFAULT_VALUE$3 = _require2$5.DEFAULT_VALUE,
  DefaultValue$2 = _require2$5.DefaultValue,
  registerNode$1 = _require2$5.registerNode;

var _require3$4 = require('../core/Recoil_RecoilValue'),
  isRecoilValue$3 = _require3$4.isRecoilValue;

var _require4$4 = require('../core/Recoil_RecoilValueInterface'),
  markRecoilValueModified$1 = _require4$4.markRecoilValueModified,
  setRecoilValue$3 = _require4$4.setRecoilValue,
  setRecoilValueLoadable$2 = _require4$4.setRecoilValueLoadable;

var deepFreezeValue = require('../util/Recoil_deepFreezeValue');

var expectationViolation$3 = require('../util/Recoil_expectationViolation');

var isPromise = require('../util/Recoil_isPromise');

var nullthrows$5 = require('../util/Recoil_nullthrows');

var recoverableViolation$3 = require('../util/Recoil_recoverableViolation');

var selector = require('./Recoil_selector');

function baseAtom(options) {
  var key = options.key,
      persistence = options.persistence_UNSTABLE;
  var defaultLoadable = isPromise(options.default) ? loadableWithPromise(options.default.then(function (value) {
    defaultLoadable = loadableWithValue(value); // TODO Temporary disable Flow due to pending selector_NEW refactor

    var promiseInfo = {
      __key: key,
      __value: value
    };
    return promiseInfo;
  }).catch(function (error) {
    defaultLoadable = loadableWithError(error);
    throw error;
  })) : loadableWithValue(options.default);
  var cachedAnswerForUnvalidatedValue = undefined; // Cleanup handlers for this atom
  // Rely on stable reference equality of the store to use it as a key per <RecoilRoot>

  var cleanupEffectsByStore = new Map();

  function wrapPendingPromise(store, promise) {
    var wrappedPromise = promise.then(function (value) {
      var _store$getState$nextT, _state$atomValues$get;

      var state = (_store$getState$nextT = store.getState().nextTree) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree;

      if (((_state$atomValues$get = state.atomValues.get(key)) === null || _state$atomValues$get === void 0 ? void 0 : _state$atomValues$get.contents) === wrappedPromise) {
        setRecoilValue$3(store, node, value);
      }

      return {
        __key: key,
        __value: value
      };
    }).catch(function (error) {
      var _store$getState$nextT2, _state$atomValues$get2;

      var state = (_store$getState$nextT2 = store.getState().nextTree) !== null && _store$getState$nextT2 !== void 0 ? _store$getState$nextT2 : store.getState().currentTree;

      if (((_state$atomValues$get2 = state.atomValues.get(key)) === null || _state$atomValues$get2 === void 0 ? void 0 : _state$atomValues$get2.contents) === wrappedPromise) {
        setRecoilValueLoadable$2(store, node, loadableWithError(error));
      }

      throw error;
    });
    return wrappedPromise;
  }

  function initAtom(store, initState, trigger) {
    if (store.getState().knownAtoms.has(key)) {
      return;
    }

    store.getState().knownAtoms.add(key); // Setup async defaults to notify subscribers when they resolve

    if (defaultLoadable.state === 'loading') {
      var notifyDefaultSubscribers = function notifyDefaultSubscribers() {
        var _store$getState$nextT3;

        var state = (_store$getState$nextT3 = store.getState().nextTree) !== null && _store$getState$nextT3 !== void 0 ? _store$getState$nextT3 : store.getState().currentTree;

        if (!state.atomValues.has(key)) {
          markRecoilValueModified$1(store, node);
        }
      };

      defaultLoadable.contents.then(notifyDefaultSubscribers).catch(notifyDefaultSubscribers);
    } // Run Atom Effects
    // This state is scoped by Store, since this is in the initAtom() closure


    var initValue = DEFAULT_VALUE$3;
    var pendingSetSelf = null;

    if (options.effects_UNSTABLE != null) {
      var _options$effects_UNST;

      var duringInit = true;

      var setSelf = function setSelf(effect) {
        return function (valueOrUpdater) {
          if (duringInit) {
            var currentValue = initValue instanceof DefaultValue$2 || isPromise(initValue) ? defaultLoadable.state === 'hasValue' ? defaultLoadable.contents : DEFAULT_VALUE$3 : initValue;
            initValue = typeof valueOrUpdater === 'function' ? // cast to any because we can't restrict T from being a function without losing support for opaque types
            valueOrUpdater(currentValue) // flowlint-line unclear-type:off
            : valueOrUpdater;
          } else {
            if (isPromise(valueOrUpdater)) {
              throw new Error('Setting atoms to async values is not implemented.');
            }

            if (typeof valueOrUpdater !== 'function') {
              pendingSetSelf = {
                effect: effect,
                value: valueOrUpdater
              };
            }

            setRecoilValue$3(store, node, typeof valueOrUpdater === 'function' ? function (currentValue) {
              var newValue = // cast to any because we can't restrict T from being a function without losing support for opaque types
              valueOrUpdater(currentValue); // flowlint-line unclear-type:off

              pendingSetSelf = {
                effect: effect,
                value: newValue
              };
              return newValue;
            } : valueOrUpdater);
          }
        };
      };

      var resetSelf = function resetSelf(effect) {
        return function () {
          return setSelf(effect)(DEFAULT_VALUE$3);
        };
      };

      var onSet = function onSet(effect) {
        return function (handler) {
          store.subscribeToTransactions(function (currentStore) {
            var _pendingSetSelf3;

            // eslint-disable-next-line prefer-const
            var _currentStore$getStat = currentStore.getState(),
                currentTree = _currentStore$getStat.currentTree,
                previousTree = _currentStore$getStat.previousTree;

            if (!previousTree) {
              recoverableViolation$3('Transaction subscribers notified without a next tree being present -- this is a bug in Recoil', 'recoil');
              previousTree = currentTree; // attempt to trundle on
            }

            var newLoadable = currentTree.atomValues.get(key);

            if (newLoadable == null || newLoadable.state === 'hasValue') {
              var _previousTree$atomVal, _pendingSetSelf, _pendingSetSelf2;

              var _newValue = newLoadable != null ? newLoadable.contents : DEFAULT_VALUE$3;

              var oldLoadable = (_previousTree$atomVal = previousTree.atomValues.get(key)) !== null && _previousTree$atomVal !== void 0 ? _previousTree$atomVal : defaultLoadable;

              var _oldValue = oldLoadable.state === 'hasValue' ? oldLoadable.contents : DEFAULT_VALUE$3; // TODO This isn't actually valid, use as a placeholder for now.
              // Ignore atom value changes that were set via setSelf() in the same effect.
              // We will still properly call the handler if there was a subsequent
              // set from something other than an atom effect which was batched
              // with the `setSelf()` call.  However, we may incorrectly ignore
              // the handler if the subsequent batched call happens to set the
              // atom to the exact same value as the `setSelf()`.   But, in that
              // case, it was kind of a noop, so the semantics are debatable..


              if (((_pendingSetSelf = pendingSetSelf) === null || _pendingSetSelf === void 0 ? void 0 : _pendingSetSelf.effect) !== effect || ((_pendingSetSelf2 = pendingSetSelf) === null || _pendingSetSelf2 === void 0 ? void 0 : _pendingSetSelf2.value) !== _newValue) {
                handler(_newValue, _oldValue);
              }
            }

            if (((_pendingSetSelf3 = pendingSetSelf) === null || _pendingSetSelf3 === void 0 ? void 0 : _pendingSetSelf3.effect) === effect) {
              pendingSetSelf = null;
            }
          }, key);
        };
      };

      var _iterator = _createForOfIteratorHelper((_options$effects_UNST = options.effects_UNSTABLE) !== null && _options$effects_UNST !== void 0 ? _options$effects_UNST : []),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var effect = _step.value;
          var cleanup = effect({
            node: node,
            trigger: trigger,
            setSelf: setSelf(effect),
            resetSelf: resetSelf(effect),
            onSet: onSet(effect)
          });

          if (cleanup != null) {
            cleanupEffectsByStore.set(store, cleanup);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      duringInit = false;
    } // Mutate initial state in place since we know there are no other subscribers
    // since we are the ones initializing on first use.


    if (!(initValue instanceof DefaultValue$2)) {
      var _store$getState$nextT4;

      var initLoadable = isPromise(initValue) ? loadableWithPromise(wrapPendingPromise(store, initValue)) : loadableWithValue(initValue);
      initState.atomValues.set(key, initLoadable); // If there is a pending transaction, then also mutate the next state tree.
      // This could happen if the atom was first initialized in an action that
      // also updated some other atom's state.

      (_store$getState$nextT4 = store.getState().nextTree) === null || _store$getState$nextT4 === void 0 ? void 0 : _store$getState$nextT4.atomValues.set(key, initLoadable);
    }
  }

  function myPeek(_store, state) {
    var _ref, _state$atomValues$get3, _cachedAnswerForUnval;

    return (_ref = (_state$atomValues$get3 = state.atomValues.get(key)) !== null && _state$atomValues$get3 !== void 0 ? _state$atomValues$get3 : (_cachedAnswerForUnval = cachedAnswerForUnvalidatedValue) === null || _cachedAnswerForUnval === void 0 ? void 0 : _cachedAnswerForUnval[1]) !== null && _ref !== void 0 ? _ref : defaultLoadable;
  }

  function myGet(store, state) {
    initAtom(store, state, 'get');

    if (state.atomValues.has(key)) {
      // Atom value is stored in state:
      return [new Map(), nullthrows$5(state.atomValues.get(key))];
    } else if (state.nonvalidatedAtoms.has(key)) {
      // Atom value is stored but needs validation before use.
      // We might have already validated it and have a cached validated value:
      if (cachedAnswerForUnvalidatedValue != null) {
        return cachedAnswerForUnvalidatedValue;
      }

      if (persistence == null) {
        expectationViolation$3("Tried to restore a persisted value for atom ".concat(key, " but it has no persistence settings."));
        return [new Map(), defaultLoadable];
      }

      var nonvalidatedValue = state.nonvalidatedAtoms.get(key);
      var validatorResult = persistence.validator(nonvalidatedValue, DEFAULT_VALUE$3);
      var validatedValueLoadable = validatorResult instanceof DefaultValue$2 ? defaultLoadable : loadableWithValue(validatorResult);
      cachedAnswerForUnvalidatedValue = [new Map(), validatedValueLoadable];
      return cachedAnswerForUnvalidatedValue;
    } else {
      return [new Map(), defaultLoadable];
    }
  }

  function myCleanup(store) {
    var _cleanupEffectsByStor;

    (_cleanupEffectsByStor = cleanupEffectsByStore.get(store)) === null || _cleanupEffectsByStor === void 0 ? void 0 : _cleanupEffectsByStor();
    cleanupEffectsByStore.delete(store);
  }

  function invalidate() {
    cachedAnswerForUnvalidatedValue = undefined;
  }

  function mySet(store, state, newValue) {
    initAtom(store, state, 'set'); // Bail out if we're being set to the existing value, or if we're being
    // reset but have no stored value (validated or unvalidated) to reset from:

    if (state.atomValues.has(key)) {
      var existing = nullthrows$5(state.atomValues.get(key));

      if (existing.state === 'hasValue' && newValue === existing.contents) {
        return [new Map(), new Map()];
      }
    } else if (!state.nonvalidatedAtoms.has(key) && newValue instanceof DefaultValue$2) {
      return [new Map(), new Map()];
    }

    if (process.env.NODE_ENV !== "production") {
      if (options.dangerouslyAllowMutability !== true) {
        deepFreezeValue(newValue);
      }
    }

    cachedAnswerForUnvalidatedValue = undefined; // can be released now if it was previously in use

    return [new Map(), new Map().set(key, loadableWithValue(newValue))];
  }

  var node = registerNode$1({
    key: key,
    peek: myPeek,
    get: myGet,
    set: mySet,
    cleanUp: myCleanup,
    invalidate: invalidate,
    dangerouslyAllowMutability: options.dangerouslyAllowMutability,
    persistence_UNSTABLE: options.persistence_UNSTABLE ? {
      type: options.persistence_UNSTABLE.type,
      backButton: options.persistence_UNSTABLE.backButton
    } : undefined,
    shouldRestoreFromSnapshots: true
  });
  return node;
} // prettier-ignore

function atom(options) {
  var optionsDefault = options.default,
    restOptions = _objectWithoutProperties(options, ['default']);

  if (
    isRecoilValue$3(optionsDefault) // Continue to use atomWithFallback for promise defaults for scoped atoms
    // for now, since scoped atoms don't support async defaults
    // @fb-only: || (isPromise(optionsDefault) && scopeRules_APPEND_ONLY_READ_THE_DOCS)
  ) {
    return atomWithFallback(
      _objectSpread2(
        _objectSpread2({}, restOptions),
        {},
        {
          default: optionsDefault, // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
        },
      ),
    ); // @fb-only: } else if (scopeRules_APPEND_ONLY_READ_THE_DOCS && !isPromise(optionsDefault)) {
    // @fb-only: return scopedAtom<T>({
    // @fb-only: ...restOptions,
    // @fb-only: default: optionsDefault,
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
    // @fb-only: });
  } else {
    return baseAtom(
      _objectSpread2(
        _objectSpread2({}, restOptions),
        {},
        {
          default: optionsDefault,
        },
      ),
    );
  }
}

function atomWithFallback(options) {
  var base = atom(
    _objectSpread2(
      _objectSpread2({}, options),
      {},
      {
        default: DEFAULT_VALUE$3,
        persistence_UNSTABLE:
          options.persistence_UNSTABLE === undefined
            ? undefined
            : _objectSpread2(
                _objectSpread2({}, options.persistence_UNSTABLE),
                {},
                {
                  validator: function validator(storedValue) {
                    return storedValue instanceof DefaultValue$2
                      ? storedValue
                      : nullthrows$5(options.persistence_UNSTABLE).validator(
                          storedValue,
                          DEFAULT_VALUE$3,
                        );
                  },
                },
              ),
        // TODO Hack for now.
        // flowlint-next-line unclear-type: off
        effects_UNSTABLE: options.effects_UNSTABLE,
      },
    ),
  );
  return selector({
    key: ''.concat(options.key, '__withFallback'),
    get: function get(_ref2) {
      var _get = _ref2.get;

      var baseValue = _get(base);

      return baseValue instanceof DefaultValue$2 ? options.default : baseValue;
    },
    set: function set(_ref3, newValue) {
      var _set = _ref3.set;
      return _set(base, newValue);
    },
    dangerouslyAllowMutability: options.dangerouslyAllowMutability,
  });
}

module.exports = atom;

var Recoil_atom = /*#__PURE__*/ Object.freeze({
  __proto__: null,
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 *
 * @format
 */

// @fb-only: const {parameterizedScopedAtomLegacy} = require('Recoil_ScopedAtom');
var cacheWithValueEquality = require('../caches/Recoil_cacheWithValueEquality');

var _require$7 = require('../core/Recoil_Node'),
  DEFAULT_VALUE$4 = _require$7.DEFAULT_VALUE,
  DefaultValue$3 = _require$7.DefaultValue;

var stableStringify = require('../util/Recoil_stableStringify');

var atom$1 = require('./Recoil_atom');

var selectorFamily = require('./Recoil_selectorFamily');
/*
A function which returns an atom based on the input parameter.

Each unique parameter returns a unique atom. E.g.,

  const f = atomFamily(...);
  f({a: 1}) => an atom
  f({a: 2}) => a different atom

This allows components to persist local, private state using atoms.  Each
instance of the component may have a different key, which it uses as the
parameter for a family of atoms; in this way, each component will have
its own atom not shared by other instances.  These state keys may be composed
into children's state keys as well.
*/

function atomFamily(options) {
  var atomCache = cacheWithValueEquality(); // An atom to represent any legacy atoms that we can upgrade to an atomFamily

  var legacyAtomOptions = {
    key: options.key,
    // Legacy atoms just used the plain key directly
    default: DEFAULT_VALUE$4,
    persistence_UNSTABLE: options.persistence_UNSTABLE,
  };
  var legacyAtom; // prettier-ignore
  // @fb-only: if (
  // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS
  // @fb-only: ) {
  // @fb-only: legacyAtom = parameterizedScopedAtomLegacy<T | DefaultValue, P>({
  // @fb-only: ...legacyAtomOptions,
  // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS:
  // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
  // @fb-only: });
  // @fb-only: } else {

  legacyAtom = atom$1(legacyAtomOptions); // @fb-only: }
  // Selector to calculate the default value based on any persisted legacy atoms
  // that were upgraded to a atomFamily

  var atomFamilyDefault = selectorFamily({
    key: ''.concat(options.key, '__atomFamily/Default'),
    get: function get(param) {
      return function (_ref) {
        var get = _ref.get;
        var legacyValue = get(
          typeof legacyAtom === 'function' ? legacyAtom(param) : legacyAtom,
        ); // Atom was upgraded from a non-parameterized atom

        if (!(legacyValue instanceof DefaultValue$3)) {
          return legacyValue;
        } // There's no legacy atom value, so use the user-specified default

        return typeof options.default === 'function' // The default was parameterized
          ? // Flow doesn't know that T isn't a function, so we need to case to any
            options.default(param) // flowlint-line unclear-type:off
          : // Default may be a static value, promise, or RecoilValue
            options.default;
      };
    },
    dangerouslyAllowMutability: options.dangerouslyAllowMutability,
  }); // Simple atomFamily implementation to cache individual atoms based
  // on the parameter value equality.

  return function (params) {
    var _stableStringify;

    var cachedAtom = atomCache.get(params);

    if (cachedAtom != null) {
      return cachedAtom;
    }

    var newAtom = atom$1(
      _objectSpread2(
        _objectSpread2({}, options),
        {},
        {
          key: ''
            .concat(options.key, '__')
            .concat(
              (_stableStringify = stableStringify(params)) !== null &&
                _stableStringify !== void 0
                ? _stableStringify
                : 'void',
            ),
          default: atomFamilyDefault(params),
          effects_UNSTABLE: typeof options.effects_UNSTABLE === 'function' ? options.effects_UNSTABLE(params) : options.effects_UNSTABLE // prettier-ignore
          // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS: mapScopeRules(
          // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
          // @fb-only: params,
          // @fb-only: ),
        },
      ),
    );
    atomCache = atomCache.set(params, newAtom);
    return newAtom;
  };
}

module.exports = atomFamily;

var Recoil_atomFamily = /*#__PURE__*/ Object.freeze({
  __proto__: null,
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Implements (a subset of) the interface of built-in Map but supports arrays as
 * keys. Two keys are equal if corresponding elements are equal according to the
 * equality semantics of built-in Map. Operations are at worst O(n*b) where n is
 * the array length and b is the complexity of the built-in operation.
 *
 * @emails oncall+recoil
 *
 * @format
 */
var LEAF = Symbol('ArrayKeyedMap');
var emptyMap = new Map();

var ArrayKeyedMap = /*#__PURE__*/ (function () {
  function ArrayKeyedMap(existing) {
    _classCallCheck(this, ArrayKeyedMap);

    _defineProperty(this, '_base', new Map());

    if (existing instanceof ArrayKeyedMap) {
      var _iterator = _createForOfIteratorHelper(existing.entries()),
        _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _step$value = _slicedToArray(_step.value, 2),
            k = _step$value[0],
            v = _step$value[1];

          this.set(k, v);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else if (existing) {
      var _iterator2 = _createForOfIteratorHelper(existing),
        _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            _k = _step2$value[0],
            _v = _step2$value[1];

          this.set(_k, _v);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    return this;
  }

  _createClass(ArrayKeyedMap, [
    {
      key: 'get',
      value: function get(key) {
        var ks = Array.isArray(key) ? key : [key];
        var map = this._base;
        ks.forEach(function (k) {
          var _map$get;

          map =
            (_map$get = map.get(k)) !== null && _map$get !== void 0
              ? _map$get
              : emptyMap;
        });
        return map === undefined ? undefined : map.get(LEAF);
      },
    },
    {
      key: 'set',
      value: function set(key, value) {
        var ks = Array.isArray(key) ? key : [key];
        var map = this._base;
        var next = map;
        ks.forEach(function (k) {
          next = map.get(k);

          if (!next) {
            next = new Map();
            map.set(k, next);
          }

          map = next;
        });
        next.set(LEAF, value);
        return this;
      },
    },
    {
      key: 'delete',
      value: function _delete(key) {
        var ks = Array.isArray(key) ? key : [key];
        var map = this._base;
        var next = map;
        ks.forEach(function (k) {
          next = map.get(k);

          if (!next) {
            next = new Map();
            map.set(k, next);
          }

          map = next;
        });
        next.delete(LEAF); // TODO We could cleanup empty maps

        return this;
      },
    },
    {
      key: 'entries',
      value: function entries() {
        var answer = [];

        function recurse(level, prefix) {
          level.forEach(function (v, k) {
            if (k === LEAF) {
              answer.push([prefix, v]);
            } else {
              recurse(v, prefix.concat(k));
            }
          });
        }

        recurse(this._base, []);
        return answer.values();
      },
    },
    {
      key: 'toBuiltInMap',
      value: function toBuiltInMap() {
        return new Map(this.entries());
      },
    },
  ]);

  return ArrayKeyedMap;
})();

module.exports = {
  ArrayKeyedMap: ArrayKeyedMap,
};

var Recoil_ArrayKeyedMap = /*#__PURE__*/ Object.freeze({
  __proto__: null,
});

var ArrayKeyedMap$1 = Recoil_ArrayKeyedMap.ArrayKeyedMap;

function cacheWithReferenceEquality() {
  return new ArrayKeyedMap$1();
}

var Recoil_cacheWithReferenceEquality = cacheWithReferenceEquality;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 *
 * @format
 */

var isPromise$1 = require('./Recoil_isPromise');

var TIME_WARNING_THRESHOLD_MS = 15;

function stringify(x, opt, key) {
  // A optimization to avoid the more expensive JSON.stringify() for simple strings
  // This may lose protection for u2028 and u2029, though.
  if (typeof x === 'string' && !x.includes('"') && !x.includes('\\')) {
    return '"'.concat(x, '"');
  } // Handle primitive types

  switch (_typeof(x)) {
    case 'undefined':
      return '';
    // JSON.stringify(undefined) returns undefined, but we always want to return a string

    case 'boolean':
      return x ? 'true' : 'false';

    case 'number':
    case 'symbol':
      // case 'bigint': // BigInt is not supported in www
      return String(x);

    case 'string':
      // Add surrounding quotes and escape internal quotes
      return JSON.stringify(x);

    case 'function':
      if (
        (opt === null || opt === void 0 ? void 0 : opt.allowFunctions) !== true
      ) {
        throw new Error('Attempt to serialize function in a Recoil cache key');
      }

      return '__FUNCTION('.concat(x.name, ')__');
  }

  if (x === null) {
    return 'null';
  } // Fallback case for unknown types

  if (_typeof(x) !== 'object') {
    var _JSON$stringify;

    return (_JSON$stringify = JSON.stringify(x)) !== null &&
      _JSON$stringify !== void 0
      ? _JSON$stringify
      : '';
  } // Deal with all promises as equivalent for now.

  if (isPromise$1(x)) {
    return '__PROMISE__';
  } // Arrays handle recursive stringification

  if (Array.isArray(x)) {
    return '['.concat(
      x.map(function (v, i) {
        return stringify(v, opt, i.toString());
      }),
      ']',
    );
  } // If an object defines a toJSON() method, then use that to override the
  // serialization.  This matches the behavior of JSON.stringify().
  // Pass the key for compatibility.
  // Immutable.js collections define this method to allow us to serialize them.

  if (typeof x.toJSON === 'function') {
    // flowlint-next-line unclear-type: off
    return stringify(x.toJSON(key), opt, key);
  } // For built-in Maps, sort the keys in a stable order instead of the
  // default insertion order.  Support non-string keys.

  if (x instanceof Map) {
    var obj = {};

    var _iterator = _createForOfIteratorHelper(x),
      _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _step$value = _slicedToArray(_step.value, 2),
          k = _step$value[0],
          v = _step$value[1];

        // Stringify will escape any nested quotes
        obj[typeof k === 'string' ? k : stringify(k, opt)] = v;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return stringify(obj, opt, key);
  } // For built-in Sets, sort the keys in a stable order instead of the
  // default insertion order.

  if (x instanceof Set) {
    return stringify(
      Array.from(x).sort(function (a, b) {
        return stringify(a, opt).localeCompare(stringify(b, opt));
      }),
      opt,
      key,
    );
  } // Anything else that is iterable serialize as an Array.

  if (x[Symbol.iterator] != null && typeof x[Symbol.iterator] === 'function') {
    // flowlint-next-line unclear-type: off
    return stringify(Array.from(x), opt, key);
  } // For all other Objects, sort the keys in a stable order.

  return '{'.concat(
    Object.keys(x)
      .filter(function (key) {
        return x[key] !== undefined;
      })
      .sort() // stringify the key to add quotes and escape any nested slashes or quotes.
      .map(function (key) {
        return ''
          .concat(stringify(key, opt), ':')
          .concat(stringify(x[key], opt, key));
      })
      .join(','),
    '}',
  );
} // Utility similar to JSON.stringify() except:
// * Serialize built-in Sets as an Array
// * Serialize built-in Maps as an Object.  Supports non-string keys.
// * Serialize other iterables as arrays
// * Sort the keys of Objects and Maps to have a stable order based on string conversion.
//    This overrides their default insertion order.
// * Still uses toJSON() of any object to override serialization
// * Support Symbols (though don't guarantee uniqueness)
// * We could support BigInt, but Flow doesn't seem to like it.
// See Recoil_stableStringify-test.js for examples

function stableStringify$1(x) {
  var opt =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          allowFunctions: false,
        };

  if (process.env.NODE_ENV !== 'production') {
    if (typeof window !== 'undefined') {
      var startTime = window.performance ? window.performance.now() : 0;
      var str = stringify(x, opt);
      var endTime = window.performance ? window.performance.now() : 0;

      if (endTime - startTime > TIME_WARNING_THRESHOLD_MS) {
        /* eslint-disable fb-www/no-console */
        console.groupCollapsed(
          'Recoil: Spent '.concat(
            endTime - startTime,
            'ms computing a cache key',
          ),
        );
        console.warn(x, str);
        console.groupEnd();
        /* eslint-enable fb-www/no-console */
      }

      return str;
    }
  }

  return stringify(x, opt);
}

module.exports = stableStringify$1;

var Recoil_stableStringify = /*#__PURE__*/ Object.freeze({
  __proto__: null,
});

// If we do profile and find the key equality check is expensive,
// we could always try to optimize..  Something that comes to mind is having
// each check assign an incrementing index to each reference that maps to the
// value equivalency.  Then, if an object already has an index, the comparison
// check/lookup would be trivial and the string serialization would only need
// to be done once per object instance.  Just a thought..
// Cache implementation to use value equality for keys instead of the default
// reference equality.  This allows different instances of dependency values to
// be used.  Normally this is not needed, as dependent atoms/selectors will
// themselves be cached and always return the same instance.  However, if
// different params or upstream values for those dependencies could produce
// equivalent values or they have a custom cache implementation, then this
// implementation may be needed.  The downside with this approach is that it
// takes longer to compute the value equivalence vs simple reference equality.

function cacheWithValueEquality$1() {
  var map = new Map();
  var cache = {
    get: function get(key) {
      return map.get(Recoil_stableStringify(key));
    },
    set: function set(key, value) {
      map.set(Recoil_stableStringify(key), value);
      return cache;
    },
    map: map, // For debugging
  };
  return cache;
}

var Recoil_cacheWithValueEquality = cacheWithValueEquality$1;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 *
 * @format
 */

var gks = new Map();

function Recoil_gkx(gk) {
  var _gks$get;

  return (_gks$get = gks.get(gk)) !== null && _gks$get !== void 0
    ? _gks$get
    : false;
}

Recoil_gkx.setPass = function (gk) {
  gks.set(gk, true);
};

Recoil_gkx.setFail = function (gk) {
  gks.set(gk, false);
};

var Recoil_gkx_1 = Recoil_gkx; // @oss-only

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Return an atom whose state cannot vary independently but is derived from that
 * of other atoms. Whenever its dependency atoms change, it will re-evaluate
 * a function and pass along the result to any components or further selectors:
 *
 *    const exampleSelector = selector({
 *      key: 'example',
 *      get: ({get}) => {
 *        const a = get(atomA);
 *        const b = get(atomB);
 *        return a + b;
 *      },
 *    });
 *
 * In this example, the value of exampleSelector will be the sum of atomA and atomB.
 * This sum will be updated whenever either atomA or atomB changes. The value
 * returned by the function will be deeply frozen.
 *
 * The function is only reevaluated if the dependencies change and the selector
 * has a component subscribed to it (either directly or indirectly via other
 * selectors). By default, function results are cached, so if the same values
 * of the dependencies are seen again, the cached value will be returned instead
 * of the function being reevaluated. The caching behavior can be overridden
 * by providing the `cacheImplementation` option; this can be used to discard
 * old values or to provide different equality semantics.
 *
 * If the provided function returns a Promise, it will cause the value of the
 * atom to become unavailable until the promise resolves. This means that any
 * components subscribed to the selector will suspend. If the promise is rejected,
 * any subscribed components will throw the rejecting error during rendering.
 *
 * You can provide the `set` option to allow writing to the selector. This
 * should be used sparingly; maintain a conceptual separation between independent
 * state and derived values. The `set` function receives a function to set
 * upstream RecoilValues which can accept a value or an updater function.
 * The updater function provides parameters with the old value of the RecoilValue
 * as well as a get() function to read other RecoilValues.
 *
 *   const multiplierSelector = selector({
 *     key: 'multiplier',
 *     get: ({get}) => get(atomA) * 100,
 *     set: ({set, reset, get}, newValue) => set(atomA, newValue / 100),
 *   });
 *
 * @emails oncall+recoil
 *
 * @format
 */

var _require$8 = require('../adt/Recoil_Loadable'),
  loadableWithError$1 = _require$8.loadableWithError,
  loadableWithPromise$1 = _require$8.loadableWithPromise,
  loadableWithValue$1 = _require$8.loadableWithValue;

var cacheMostRecent = require('../caches/Recoil_cacheMostRecent');

var cacheWithReferenceEquality$1 = require('../caches/Recoil_cacheWithReferenceEquality');

var cacheWithValueEquality$2 = require('../caches/Recoil_cacheWithValueEquality');

var nodeCacheMostRecent = require('../caches/Recoil_nodeCacheMostRecent');

var treeCacheReferenceEquality = require('../caches/Recoil_treeCacheReferenceEquality');

var treeCacheValueEquality = require('../caches/Recoil_treeCacheValueEquality');

var _require2$6 = require('../core/Recoil_FunctionalCore'),
  getNodeLoadable$2 = _require2$6.getNodeLoadable,
  peekNodeLoadable$1 = _require2$6.peekNodeLoadable,
  setNodeValue$3 = _require2$6.setNodeValue;

var _require3$5 = require('../core/Recoil_Graph'),
  saveDependencyMapToStore$2 = _require3$5.saveDependencyMapToStore;

var _require4$5 = require('../core/Recoil_Node'),
  DEFAULT_VALUE$5 = _require4$5.DEFAULT_VALUE,
  RecoilValueNotReady$2 = _require4$5.RecoilValueNotReady,
  registerNode$2 = _require4$5.registerNode;

var _require5$4 = require('../core/Recoil_RecoilValue'),
  isRecoilValue$4 = _require5$4.isRecoilValue;

var _require6$3 = require('../core/Recoil_RecoilValue'),
  AbstractRecoilValue$4 = _require6$3.AbstractRecoilValue;

var _require7$2 = require('../core/Recoil_RecoilValueInterface'),
  setRecoilValueLoadable$3 = _require7$2.setRecoilValueLoadable;

var deepFreezeValue$1 = require('../util/Recoil_deepFreezeValue');

var isPromise$2 = require('../util/Recoil_isPromise');

var nullthrows$6 = require('../util/Recoil_nullthrows');

var _require8$2 = require('../util/Recoil_PerformanceTimings'),
  startPerfBlock = _require8$2.startPerfBlock;

// flowlint-next-line unclear-type:off
var emptySet$1 = Object.freeze(new Set());
var dependencyStack = []; // for detecting circular dependencies.

var waitingStores = new Map();
/* eslint-disable no-redeclare */

var getNewExecutionId = (function () {
  var executionId = 0;
  return function () {
    return executionId++;
  };
})();

function getInitialExecutionInfo() {
  return {
    depValuesDiscoveredSoFarDuringAsyncWork: null,
    latestLoadable: null,
    latestExecutionId: null,
    stateVersion: null,
  };
}

function selector$1(options) {
  var key = options.key,
    get = options.get,
    cacheImplementation = options.cacheImplementation_UNSTABLE;
  var set = options.set != null ? options.set : undefined; // flow

  /**
   * HACK: doing this as a way to map given cache to corresponding tree cache
   */

  var cache =
    cacheImplementation === cacheWithReferenceEquality$1
      ? treeCacheReferenceEquality()
      : cacheImplementation === cacheWithValueEquality$2
      ? treeCacheValueEquality()
      : cacheImplementation === cacheMostRecent
      ? nodeCacheMostRecent()
      : treeCacheReferenceEquality();
  var executionInfoMap = new Map();

  function getExecutionInfo(store) {
    if (!executionInfoMap.has(store)) {
      executionInfoMap.set(store, getInitialExecutionInfo());
    }

    return nullthrows$6(executionInfoMap.get(store));
  }

  function initSelector(store) {
    store.getState().knownSelectors.add(key);
  }

  function notifyStoreWhenAsyncSettles(store, loadable, executionId) {
    if (loadable.state === 'loading') {
      var stores = waitingStores.get(executionId);

      if (stores == null) {
        waitingStores.set(executionId, (stores = new Set()));
      }

      stores.add(store);
    }
  }

  function notifyStoresOfSettledAsync(newLoadable, executionId) {
    var stores = waitingStores.get(executionId);

    if (stores !== undefined) {
      var _iterator = _createForOfIteratorHelper(stores),
        _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var store = _step.value;
          setRecoilValueLoadable$3(
            store,
            new AbstractRecoilValue$4(key),
            newLoadable,
          );
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      waitingStores.delete(executionId);
    }
  }

  function getCachedNodeLoadable(store, state, key) {
    if (state.atomValues.has(key)) {
      return [new Map(), nullthrows$6(state.atomValues.get(key))];
    }

    var _getNodeLoadable = getNodeLoadable$2(store, state, key),
      _getNodeLoadable2 = _slicedToArray(_getNodeLoadable, 2),
      loadable = _getNodeLoadable2[1];

    var isKeyPointingToSelector = store.getState().knownSelectors.has(key);

    if (loadable.state !== 'loading' && isKeyPointingToSelector) {
      state.atomValues.set(key, loadable);
    }

    return [new Map(), loadable];
  }
  /**
   * This function attaches a then() and a catch() to a promise that was
   * returned from a selector's get() (either explicitly or implicitly by
   * running a function that uses the "async" keyword). If a selector's get()
   * returns a promise, we have two possibilities:
   *
   * 1. The promise will resolve, in which case it will have completely finished
   *    executing without any remaining pending dependencies. No more retries
   *    are needed and we can proceed with updating the cache and notifying
   *    subscribers (if it is the latest execution, otherwise only the cache
   *    will be updated and subscriptions will not be fired). This is the case
   *    handled by the attached then() handler.
   *
   * 2. The promise will throw because it either has an error or it came across
   *    an async dependency that has not yet resolved, in which case we will
   *    call wrapDepdencyPromise(), whose responsibility is to handle dependency
   *    promises. This case is handled by the attached catch() handler.
   *
   * Both branches will eventually resolve to the final result of the selector
   * (or an error if a real error occurred).
   *
   * The execution will run to completion even if it is stale, and its value
   * will be cached. But stale executions will not update global state or update
   * executionInfo as that is the responsibility of the 'latest' execution.
   *
   * Note this function should not be passed a promise that was thrown--AKA a
   * dependency promise. Dependency promises should be passed to
   * wrapPendingDependencyPromise()).
   */

  function wrapPendingPromise(store, promise, state, depValues, executionId) {
    return promise
      .then(function (value) {
        var loadable = loadableWithValue$1(value);
        maybeFreezeValue(value);
        setCache(state, depValuesToDepRoute(depValues), loadable);
        setLoadableInStoreToNotifyDeps(store, loadable, executionId);
        return {
          __value: value,
          __key: key,
        };
      })
      .catch(function (errorOrPromise) {
        if (isLatestExecution(store, executionId)) {
          updateExecutionInfoDepValues(depValues, store, executionId);
        }

        if (isPromise$2(errorOrPromise)) {
          return wrapPendingDependencyPromise(
            store,
            errorOrPromise,
            state,
            depValues,
            executionId,
          );
        }

        var loadable = loadableWithError$1(errorOrPromise);
        maybeFreezeValue(errorOrPromise);
        setCache(state, depValuesToDepRoute(depValues), loadable);
        setLoadableInStoreToNotifyDeps(store, loadable, executionId);
        throw errorOrPromise;
      });
  }
  /**
   * This function attaches a then() and a catch() to a promise that was
   * thrown from a selector's get(). If a selector's get() throws a promise,
   * we have two possibilities:
   *
   * 1. The promise will resolve, meaning one of our selector's dependencies is
   *    now available and we should "retry" our get() by running it again. This
   *    is the case handled by the attached then() handler.
   *
   * 2. The promise will throw because something went wrong with the dependency
   *    promise (in other words a real error occurred). This case is handled by
   *    the attached catch() handler. If the dependency promise throws, it is
   *    _always_ a real error and not another dependency promise (any dependency
   *    promises would have been handled upstream).
   *
   * The then() branch will eventually resolve to the final result of the
   * selector (or an error if a real error occurs), and the catch() will always
   * resolve to an error because the dependency promise is a promise that was
   * wrapped upstream, meaning it will only resolve to its real value or to a
   * real error.
   *
   * The execution will run to completion even if it is stale, and its value
   * will be cached. But stale executions will not update global state or update
   * executionInfo as that is the responsibility of the 'latest' execution.
   *
   * Note this function should not be passed a promise that was returned from
   * get(). The intention is that this function is only passed promises that
   * were thrown due to a pending dependency. Promises returned by get() should
   * be passed to wrapPendingPromise() instead.
   */

  function wrapPendingDependencyPromise(
    store,
    promise,
    state,
    existingDeps,
    executionId,
  ) {
    return promise
      .then(function (resolvedDep) {
        var resolvedDepKey = resolvedDep.__key,
          depValue = resolvedDep.__value;

        if (resolvedDepKey != null) {
          /**
           * Note for async atoms, this means we are changing the atom's value
           * in the store for the given version. This should be alright because
           * the version of state is now stale and a new version will have
           * already been triggered by the atom being resolved (see this logic
           * in Recoil_atom.js)
           */
          state.atomValues.set(resolvedDepKey, loadableWithValue$1(depValue));
        }

        var _evaluateSelectorGett = evaluateSelectorGetter(
            store,
            state,
            executionId,
          ),
          _evaluateSelectorGett2 = _slicedToArray(_evaluateSelectorGett, 2),
          loadable = _evaluateSelectorGett2[0],
          depValues = _evaluateSelectorGett2[1];

        if (isLatestExecution(store, executionId)) {
          updateExecutionInfoDepValues(depValues, store, executionId);
        }

        maybeFreezeLoadableContents(loadable);

        if (loadable.state !== 'loading') {
          setCache(state, depValuesToDepRoute(depValues), loadable);
          setLoadableInStoreToNotifyDeps(store, loadable, executionId);
        }

        if (loadable.state === 'hasError') {
          throw loadable.contents;
        }

        if (loadable.state === 'hasValue') {
          return {
            __value: loadable.contents,
            __key: key,
          };
        }
        /**
         * Returning promise here without wrapping as the wrapepr logic was
         * already done when we called evaluateSelectorGetter() to get this
         * loadable
         */

        return loadable.contents;
      })
      .catch(function (error) {
        var loadable = loadableWithError$1(error);
        maybeFreezeValue(error);
        setCache(
          state,
          depValuesToDepRoute(existingDeps),
          loadableWithError$1(error),
        );
        setLoadableInStoreToNotifyDeps(store, loadable, executionId);
        throw error;
      });
  }

  function setLoadableInStoreToNotifyDeps(store, loadable, executionId) {
    if (isLatestExecution(store, executionId)) {
      setExecutionInfo(loadable, store);
      notifyStoresOfSettledAsync(loadable, executionId);
    }
  }

  function setDepsInStore(store, state, deps, executionId) {
    var _store$getState,
      _store$getState$curre,
      _store$getState2,
      _store$getState2$next;

    if (
      isLatestExecution(store, executionId) ||
      state.version ===
        ((_store$getState = store.getState()) === null ||
        _store$getState === void 0
          ? void 0
          : (_store$getState$curre = _store$getState.currentTree) === null ||
            _store$getState$curre === void 0
          ? void 0
          : _store$getState$curre.version) ||
      state.version ===
        ((_store$getState2 = store.getState()) === null ||
        _store$getState2 === void 0
          ? void 0
          : (_store$getState2$next = _store$getState2.nextTree) === null ||
            _store$getState2$next === void 0
          ? void 0
          : _store$getState2$next.version)
    ) {
      var _store$getState$nextT, _store$getState3, _store$getState3$next;

      saveDependencyMapToStore$2(
        new Map([[key, deps]]),
        store,
        (_store$getState$nextT =
          (_store$getState3 = store.getState()) === null ||
          _store$getState3 === void 0
            ? void 0
            : (_store$getState3$next = _store$getState3.nextTree) === null ||
              _store$getState3$next === void 0
            ? void 0
            : _store$getState3$next.version) !== null &&
          _store$getState$nextT !== void 0
          ? _store$getState$nextT
          : store.getState().currentTree.version,
      );
    }
  }

  function setNewDepInStore(store, state, deps, newDepKey, executionId) {
    deps.add(newDepKey);
    setDepsInStore(store, state, deps, executionId);
  }

  function evaluateSelectorGetter(store, state, executionId) {
    var endPerfBlock = startPerfBlock(key); // TODO T63965866: use execution ID here

    var result;
    var loadable;
    var depValues = new Map();
    /**
     * Starting a fresh set of deps that we'll be using to update state. We're
     * starting a new set versus adding it in existing state deps because
     * the version of state that we update deps for may be a more recent version
     * than the version the selector was called with. This is because the latest
     * execution will update the deps of the current/latest version of state (
     * this is safe to do because the fact that the selector is the latest
     * execution means the deps we discover below are our best guess at the
     * deps for the current/latest state in the store)
     */

    var deps = new Set();
    setDepsInStore(store, state, deps, executionId);

    function getRecoilValue(recoilValue) {
      var depKey = recoilValue.key;
      setNewDepInStore(store, state, deps, depKey, executionId);

      var _getCachedNodeLoadabl = getCachedNodeLoadable(store, state, depKey),
        _getCachedNodeLoadabl2 = _slicedToArray(_getCachedNodeLoadabl, 2),
        depLoadable = _getCachedNodeLoadabl2[1];

      depValues.set(depKey, depLoadable);

      if (depLoadable.state === 'hasValue') {
        return depLoadable.contents;
      }

      throw depLoadable.contents;
    }

    try {
      result = get({
        get: getRecoilValue,
      });
      result = isRecoilValue$4(result) ? getRecoilValue(result) : result;

      if (isPromise$2(result)) {
        result = wrapPendingPromise(
          store,
          result,
          state,
          depValues,
          executionId,
        ).finally(endPerfBlock);
      } else {
        endPerfBlock();
      }
    } catch (errorOrDepPromise) {
      result = errorOrDepPromise;

      if (isPromise$2(result)) {
        result = wrapPendingDependencyPromise(
          store,
          result,
          state,
          depValues,
          executionId,
        ).finally(endPerfBlock);
      } else {
        endPerfBlock();
      }
    }

    if (result instanceof Error) {
      loadable = loadableWithError$1(result);
    } else if (isPromise$2(result)) {
      loadable = loadableWithPromise$1(result);
    } else {
      loadable = loadableWithValue$1(result);
    }

    maybeFreezeLoadableContents(loadable);
    return [loadable, depValues];
  }

  function getValFromCacheAndUpdatedDownstreamDeps(store, state) {
    var _store$getGraph$nodeD;

    if (state.atomValues.has(key)) {
      return state.atomValues.get(key);
    }

    var deps = new Set(
      (_store$getGraph$nodeD = store
        .getGraph(state.version)
        .nodeDeps.get(key)) !== null && _store$getGraph$nodeD !== void 0
        ? _store$getGraph$nodeD
        : emptySet$1,
    );
    var executionInfo = getExecutionInfo(store);
    setDepsInStore(store, state, deps, executionInfo.latestExecutionId);
    var cachedVal = cache.get(
      function (nodeKey) {
        var _getCachedNodeLoadabl3 = getCachedNodeLoadable(
            store,
            state,
            nodeKey,
          ),
          _getCachedNodeLoadabl4 = _slicedToArray(_getCachedNodeLoadabl3, 2),
          loadable = _getCachedNodeLoadabl4[1];

        return loadable.contents;
      },
      {
        onCacheHit: function onCacheHit(nodeKey) {
          if (nodeKey !== key) {
            setNewDepInStore(
              store,
              state,
              deps,
              nodeKey,
              executionInfo.latestExecutionId,
            );
          }
        },
      },
    );
    return cachedVal;
  }
  /**
   * FIXME: dep keys should take into account the state of the loadable to
   * prevent the edge case where a loadable with an error and a loadable with
   * an error as a value are treated as the same thing incorrectly. For example
   * these two should be treated differently:
   *
   * selector({key: '', get: () => new Error('hi')});
   * selector({key: '', get () => {throw new Error('hi')}});
   *
   * With current implementation they are treated the same
   */

  function depValuesToDepRoute(depValues) {
    return Array.from(depValues.entries()).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        valLoadable = _ref2[1];

      return [key, valLoadable.contents];
    });
  }

  function getValFromRunningNewExecutionAndUpdatedDeps(store, state) {
    var newExecutionId = getNewExecutionId();

    var _evaluateSelectorGett3 = evaluateSelectorGetter(
        store,
        state,
        newExecutionId,
      ),
      _evaluateSelectorGett4 = _slicedToArray(_evaluateSelectorGett3, 2),
      loadable = _evaluateSelectorGett4[0],
      newDepValues = _evaluateSelectorGett4[1];

    setExecutionInfo(loadable, store, newDepValues, newExecutionId, state);
    maybeSetCacheWithLoadable(
      state,
      depValuesToDepRoute(newDepValues),
      loadable,
    );
    notifyStoreWhenAsyncSettles(store, loadable, newExecutionId);
    return loadable;
  }
  /**
   * Given a tree state, this function returns the "selector result", which is
   * defined as a size-2 tuple of [DependencyMap, Loadable<T>].
   *
   * The selector's get() function will only be re-evaluated if _both_ of the
   * following statements are true:
   *
   * 1. The current dep values from the given state produced a cache key that
   *    was not found in the cache.
   * 2. There is no currently running async execution OR there is an
   *    async execution that is running, but after comparing the dep values in
   *    the given state with the dep values that the execution has discovered so
   *    far we find that at least one dep value has changed, in which case we
   *    start a new execution (the previously running execution will continue to
   *    run to completion, but only the new execution will be deemed the
   *    'latest' execution, meaning it will be the only execution that will
   *    update global state when it is finished. Any non-latest executions will
   *    run to completion and update the selector cache but not global state).
   */

  function getSelectorValAndUpdatedDeps(store, state) {
    var cachedVal = getValFromCacheAndUpdatedDownstreamDeps(store, state);

    if (cachedVal != null) {
      setExecutionInfo(cachedVal, store);
      return cachedVal;
    }

    var inProgressExecutionInfo = getExecutionInfoOfInProgressExecution(
      store,
      state,
    ); // FIXME: this won't work with custom caching b/c it uses separate cache

    if (inProgressExecutionInfo) {
      var executionInfo = inProgressExecutionInfo;
      notifyStoreWhenAsyncSettles(
        store,
        nullthrows$6(executionInfo.latestLoadable),
        nullthrows$6(executionInfo.latestExecutionId),
      ); // FIXME: check after the fact to see if we made the right choice by waiting

      return nullthrows$6(executionInfo.latestLoadable);
    }

    return getValFromRunningNewExecutionAndUpdatedDeps(store, state);
  }
  /**
   * Searches execution info across all stores to see if there is an in-progress
   * execution whose dependency values match the values of the requesting store.
   */

  function getExecutionInfoOfInProgressExecution(store, state) {
    var _Array$from$find;

    var _ref3 =
        (_Array$from$find = Array.from(executionInfoMap.entries()).find(
          function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
              executionInfo = _ref6[1];

            return (
              executionInfo.latestLoadable != null &&
              executionInfo.latestExecutionId != null &&
              !haveAsyncDepsChanged(store, state)
            );
          },
        )) !== null && _Array$from$find !== void 0
          ? _Array$from$find
          : [],
      _ref4 = _slicedToArray(_ref3, 2),
      executionInfo = _ref4[1];

    return executionInfo;
  }

  var mapOfCheckedVersions = new Map();

  function haveAsyncDepsChanged(store, state) {
    var _executionInfo$depVal, _mapOfCheckedVersions;

    var executionInfo = getExecutionInfo(store);
    var oldDepValues =
      (_executionInfo$depVal =
        executionInfo.depValuesDiscoveredSoFarDuringAsyncWork) !== null &&
      _executionInfo$depVal !== void 0
        ? _executionInfo$depVal
        : new Map();
    var cachedDepValuesCheckedForThisVersion = Array(
      ((_mapOfCheckedVersions = mapOfCheckedVersions.get(state.version)) !==
        null && _mapOfCheckedVersions !== void 0
        ? _mapOfCheckedVersions
        : new Map()
      ).entries(),
    );
    var isCachedVersionSame =
      mapOfCheckedVersions.has(state.version) &&
      cachedDepValuesCheckedForThisVersion.length === oldDepValues.size &&
      cachedDepValuesCheckedForThisVersion.every(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
          nodeKey = _ref8[0],
          nodeVal = _ref8[1];

        return oldDepValues.get(nodeKey) === nodeVal;
      });

    if (
      oldDepValues == null ||
      state.version === executionInfo.stateVersion ||
      isCachedVersionSame
    ) {
      return false;
    }

    mapOfCheckedVersions.set(state.version, new Map(oldDepValues));
    return Array.from(oldDepValues).some(function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
        nodeKey = _ref10[0],
        oldVal = _ref10[1];

      var _getCachedNodeLoadabl5 = getCachedNodeLoadable(store, state, nodeKey),
        _getCachedNodeLoadabl6 = _slicedToArray(_getCachedNodeLoadabl5, 2),
        loadable = _getCachedNodeLoadabl6[1];

      return (
        loadable.contents !== oldVal.contents &&
        /**
         * FIXME: in the condition below we're making the assumption that a
         * dependency that goes from loading to having a value is always because
         * the dependency resolved to that value, so we don't count it as a dep
         * change as the normal retry loop will handle retrying in response to a
         * resolved async dep. This is an incorrect assumption for the edge case
         * where there is an async selector that is loading, and while it is
         * loading one of its dependencies changes, triggering a new execution,
         * and that new execution produces a value synchronously (we don't make
         * that assumption for asynchronous work b/c it's guaranteed that a
         * loadable that goes from 'loading' to 'loading' in a new loadable is
         * a dep change).
         */
        !(oldVal.state === 'loading' && loadable.state !== 'loading')
      );
    });
  }
  /**
   * This function will update the selector's execution info when the selector
   * has either finished running an execution or has started a new execution. If
   * the given loadable is in a 'loading' state, the intention is that a new
   * execution has started. Otherwise, the intention is that an execution has
   * just finished.
   */

  function setExecutionInfo(loadable, store, depValues, newExecutionId, state) {
    var executionInfo = getExecutionInfo(store);

    if (loadable.state === 'loading') {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
      executionInfo.latestExecutionId = newExecutionId;
      executionInfo.latestLoadable = loadable;
      executionInfo.stateVersion =
        state === null || state === void 0 ? void 0 : state.version;
    } else {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = null;
      executionInfo.latestExecutionId = null;
      executionInfo.latestLoadable = null;
      executionInfo.stateVersion = null;
    }
  }
  /**
   * Conditionally updates the cache with a given loadable.
   *
   * We only cache loadables that are not loading because our cache keys are
   * based on dep values, which are in an unfinished state for loadables that
   * have a 'loading' state (new deps may be discovered while the selector
   * runs its async code). We never want to cache partial dependencies b/c it
   * could lead to errors, such as prematurely returning the result based on a
   * partial list of deps-- we need the full list of deps to ensure that we
   * are returning the correct result from cache.
   */

  function maybeSetCacheWithLoadable(state, depRoute, loadable) {
    if (loadable.state !== 'loading') {
      setCache(state, depRoute, loadable);
    }
  }

  function updateExecutionInfoDepValues(depValues, store, executionId) {
    var executionInfo = getExecutionInfo(store);

    if (isLatestExecution(store, executionId)) {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
    }
  }

  function isLatestExecution(store, executionId) {
    var executionInfo = getExecutionInfo(store);
    return executionId === executionInfo.latestExecutionId;
  }

  function maybeFreezeLoadableContents(loadable) {
    if (loadable.state !== 'loading') {
      maybeFreezeValue(loadable.contents);
    }
  }

  function maybeFreezeValue(val) {
    if (process.env.NODE_ENV !== 'production') {
      if (Boolean(options.dangerouslyAllowMutability) === false) {
        deepFreezeValue$1(val);
      }
    }
  }

  function setCache(state, cacheRoute, loadable) {
    state.atomValues.set(key, loadable);
    cache.set(cacheRoute, loadable);
  }

  function detectCircularDependencies(fn) {
    if (dependencyStack.includes(key)) {
      var message = 'Recoil selector has circular dependencies: '.concat(
        dependencyStack.slice(dependencyStack.indexOf(key)).join(' \u2192 '),
      );
      return loadableWithError$1(new Error(message));
    }

    dependencyStack.push(key);

    try {
      return fn();
    } finally {
      dependencyStack.pop();
    }
  }

  function myPeek(store, state) {
    var cacheVal = cache.get(function (nodeKey) {
      var peek = peekNodeLoadable$1(store, state, nodeKey);
      return peek === null || peek === void 0 ? void 0 : peek.contents;
    });
    return cacheVal;
  }

  function myGet(store, state) {
    initSelector(store);
    return [
      new Map(),
      detectCircularDependencies(function () {
        return getSelectorValAndUpdatedDeps(store, state);
      }),
    ];
  }

  function invalidate(state) {
    state.atomValues.delete(key);
  }

  if (set != null) {
    var mySet = function mySet(store, state, newValue) {
      initSelector(store);
      var syncSelectorSetFinished = false;
      var dependencyMap = new Map();
      var writes = new Map();

      function getRecoilValue(_ref11) {
        var key = _ref11.key;

        if (syncSelectorSetFinished) {
          throw new Error(
            'Recoil: Async selector sets are not currently supported.',
          );
        }

        var _getCachedNodeLoadabl7 = getCachedNodeLoadable(store, state, key),
          _getCachedNodeLoadabl8 = _slicedToArray(_getCachedNodeLoadabl7, 2),
          loadable = _getCachedNodeLoadabl8[1];

        if (loadable.state === 'hasValue') {
          return loadable.contents;
        } else if (loadable.state === 'loading') {
          throw new RecoilValueNotReady$2(key);
        } else {
          throw loadable.contents;
        }
      }

      function setRecoilState(recoilState, valueOrUpdater) {
        if (syncSelectorSetFinished) {
          throw new Error(
            'Recoil: Async selector sets are not currently supported.',
          );
        }

        var newValue =
          typeof valueOrUpdater === 'function' // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
            ? // flowlint-next-line unclear-type:off
              valueOrUpdater(getRecoilValue(recoilState))
            : valueOrUpdater;

        var _setNodeValue = setNodeValue$3(
            store,
            state,
            recoilState.key,
            newValue,
          ),
          _setNodeValue2 = _slicedToArray(_setNodeValue, 2),
          upstreamWrites = _setNodeValue2[1];

        upstreamWrites.forEach(function (v, k) {
          return writes.set(k, v);
        });
      }

      function resetRecoilState(recoilState) {
        setRecoilState(recoilState, DEFAULT_VALUE$5);
      }

      var ret = set(
        {
          set: setRecoilState,
          get: getRecoilValue,
          reset: resetRecoilState,
        },
        newValue,
      ); // set should be a void method, but if the user makes it `async`, then it
      // will return a Promise, which we don't currently support.

      if (ret !== undefined) {
        throw isPromise$2(ret)
          ? new Error(
              'Recoil: Async selector sets are not currently supported.',
            )
          : new Error('Recoil: selector set should be a void function.');
      }

      syncSelectorSetFinished = true;
      return [dependencyMap, writes];
    };

    return registerNode$2({
      key: key,
      peek: myPeek,
      get: myGet,
      set: mySet,
      cleanUp: function cleanUp() {},
      invalidate: invalidate,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false,
    });
  } else {
    return registerNode$2({
      key: key,
      peek: myPeek,
      get: myGet,
      cleanUp: function cleanUp() {},
      invalidate: invalidate,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false,
    });
  }
}
/* eslint-enable no-redeclare */

module.exports = selector$1;

var Recoil_selector_NEW = /*#__PURE__*/ Object.freeze({
  __proto__: null,
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Return an atom whose state cannot vary independently but is derived from that
 * of other atoms. Whenever its dependency atoms change, it will re-evaluate
 * a function and pass along the result to any components or further selectors:
 *
 *    const exampleSelector = selector({
 *      key: 'example',
 *      get: ({get}) => {
 *        const a = get(atomA);
 *        const b = get(atomB);
 *        return a + b;
 *      },
 *    });
 *
 * In this example, the value of exampleSelector will be the sum of atomA and atomB.
 * This sum will be updated whenever either atomA or atomB changes. The value
 * returned by the function will be deeply frozen.
 *
 * The function is only reevaluated if the dependencies change and the selector
 * has a component subscribed to it (either directly or indirectly via other
 * selectors). By default, function results are cached, so if the same values
 * of the dependencies are seen again, the cached value will be returned instead
 * of the function being reevaluated. The caching behavior can be overridden
 * by providing the `cacheImplementation` option; this can be used to discard
 * old values or to provide different equality semantics.
 *
 * If the provided function returns a Promise, it will cause the value of the
 * atom to become unavailable until the promise resolves. This means that any
 * components subscribed to the selector will suspend. If the promise is rejected,
 * any subscribed components will throw the rejecting error during rendering.
 *
 * You can provide the `set` option to allow writing to the selector. This
 * should be used sparingly; maintain a conceptual separation between independent
 * state and derived values. The `set` function receives a function to set
 * upstream RecoilValues which can accept a value or an updater function.
 * The updater function provides parameters with the old value of the RecoilValue
 * as well as a get() function to read other RecoilValues.
 *
 *   const multiplierSelector = selector({
 *     key: 'multiplier',
 *     get: ({get}) => get(atomA) * 100,
 *     set: ({set, reset, get}, newValue) => set(atomA, newValue / 100),
 *   });
 *
 * @emails oncall+recoil
 *
 * @format
 */

var _require$9 = require('../adt/Recoil_Loadable'),
  loadableWithError$2 = _require$9.loadableWithError,
  loadableWithPromise$2 = _require$9.loadableWithPromise,
  loadableWithValue$2 = _require$9.loadableWithValue;

var cacheWithReferenceEquality$2 = require('../caches/Recoil_cacheWithReferenceEquality');

var _require2$7 = require('../core/Recoil_FunctionalCore'),
  getNodeLoadable$3 = _require2$7.getNodeLoadable,
  peekNodeLoadable$2 = _require2$7.peekNodeLoadable,
  setNodeValue$4 = _require2$7.setNodeValue;

var _require3$6 = require('../core/Recoil_Graph'),
  addToDependencyMap = _require3$6.addToDependencyMap,
  mergeDepsIntoDependencyMap = _require3$6.mergeDepsIntoDependencyMap,
  saveDependencyMapToStore$3 = _require3$6.saveDependencyMapToStore;

var _require4$6 = require('../core/Recoil_Node'),
  DEFAULT_VALUE$6 = _require4$6.DEFAULT_VALUE,
  RecoilValueNotReady$3 = _require4$6.RecoilValueNotReady,
  registerNode$3 = _require4$6.registerNode;

var _require5$5 = require('../core/Recoil_RecoilValue'),
  AbstractRecoilValue$5 = _require5$5.AbstractRecoilValue;

var _require6$4 = require('../core/Recoil_RecoilValueInterface'),
  getRecoilValueAsLoadable$3 = _require6$4.getRecoilValueAsLoadable,
  isRecoilValue$5 = _require6$4.isRecoilValue,
  setRecoilValueLoadable$4 = _require6$4.setRecoilValueLoadable;

var deepFreezeValue$2 = require('../util/Recoil_deepFreezeValue');

var isPromise$3 = require('../util/Recoil_isPromise');

var nullthrows$7 = require('../util/Recoil_nullthrows');

var _require7$3 = require('../util/Recoil_PerformanceTimings'),
  startPerfBlock$1 = _require7$3.startPerfBlock;

// flowlint-next-line unclear-type:off
var emptySet$2 = Object.freeze(new Set());

function cacheKeyFromDepValues(depValues) {
  var answer = [];

  var _iterator = _createForOfIteratorHelper(
      Array.from(depValues.keys()).sort(),
    ),
    _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var key = _step.value;
      var loadable = nullthrows$7(depValues.get(key));
      answer.push(key);
      answer.push(loadable.state);
      answer.push(loadable.contents);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return answer;
}

var dependencyStack$1 = []; // for detecting circular dependencies.

var waitingStores$1 = new Map();
/* eslint-disable no-redeclare */

function selector$2(options) {
  var key = options.key,
    get = options.get,
    cacheImplementation = options.cacheImplementation_UNSTABLE;
  var set = options.set != null ? options.set : undefined; // flow

  var cache =
    cacheImplementation !== null && cacheImplementation !== void 0
      ? cacheImplementation
      : cacheWithReferenceEquality$2();

  function initSelector(store) {
    store.getState().knownSelectors.add(key);
  }

  function letStoreBeNotifiedWhenAsyncSettles(store, loadable) {
    if (loadable.state === 'loading') {
      var stores = waitingStores$1.get(loadable);

      if (stores === undefined) {
        waitingStores$1.set(loadable, (stores = new Set()));
      }

      stores.add(store);
    }
  }

  function notifyStoresOfSettledAsync(originalLoadable, newLoadable) {
    var stores = waitingStores$1.get(originalLoadable);

    if (stores !== undefined) {
      var _iterator2 = _createForOfIteratorHelper(stores),
        _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var store = _step2.value;
          setRecoilValueLoadable$4(
            store,
            new AbstractRecoilValue$5(key),
            newLoadable,
          );
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      waitingStores$1.delete(originalLoadable);
    }
  }

  function putIntoCache(state, cacheKey, loadable) {
    if (loadable.state !== 'loading') {
      // Synchronous result
      if (process.env.NODE_ENV !== 'production') {
        if (!options.dangerouslyAllowMutability === true) {
          deepFreezeValue$2(loadable.contents);
        }
      }
    } else {
      // Asynchronous result
      // When the promise resolves, we need to replace the loading state in the
      // cache and fire any external subscriptions to re-render with the new value.
      loadable.contents
        .then(function (result) {
          if (process.env.NODE_ENV !== 'production') {
            if (!options.dangerouslyAllowMutability === true) {
              deepFreezeValue$2(result);
            }
          }

          var newLoadable = loadableWithValue$2(result); // If the value is now resolved, then update the cache with the new value

          cache = cache.set(cacheKey, newLoadable); // TODO Potential optimization: I think this is updating the cache
          // with a cacheKey of the dep when it wasn't ready yet.  We could also
          // theoretically put the result in the cache for a cacheKey with the
          // dep resolved.  If we had some way of figuring out what that cacheKey was..
          // Note that this optimization would change the user visible behavior slightly,
          // see the unit test "useRecoilState - selector catching promise 2".
          // If the user catches and handles pending async dependencies, then returns
          // a promise that resolves when they are available there is a question if
          // the result of that promise should be the value of the selector, or if
          // the selector should re-evaluate when the dependency is available.
          // If the promise returned and the pending dependency resolve at different
          // times, then the behaviour is better defined, as in the unit test,
          // "useRecoilState - selector catching promise and resolving asynchronously"
          // Fire subscriptions to re-render any subscribed components with the new value.
          // The store uses the CURRENT state, not the old state from which
          // this was called.  That state likely doesn't have the subscriptions saved yet.
          // Note that we have to set the value for this key, not just notify
          // components, so that there will be a new version for useMutableSource.

          notifyStoresOfSettledAsync(loadable, newLoadable);
          return result;
        })
        .catch(function (error) {
          // TODO Figure out why we are catching promises here versus evaluateSelectorFunction
          // OH, I see why.  Ok, work on this.
          if (isPromise$3(error)) {
            return error;
          }

          if (process.env.NODE_ENV !== 'production') {
            if (!options.dangerouslyAllowMutability === true) {
              deepFreezeValue$2(error);
            }
          } // The async value was rejected with an error.  Update the cache with
          // the error and fire subscriptions to re-render.

          var newLoadable = loadableWithError$2(error);
          cache = cache.set(cacheKey, newLoadable);
          notifyStoresOfSettledAsync(loadable, newLoadable);
          return error;
        });
    }

    cache = cache.set(cacheKey, loadable);

    if (loadable.state !== 'loading') {
      state.atomValues.set(key, loadable);
    }
  }

  function getFromCacheOrEvaluate(store, state) {
    var _store$getGraph$nodeD;

    var dependencyMap = new Map(); // First, get the current deps for this selector

    var currentDeps =
      (_store$getGraph$nodeD = store
        .getGraph(state.version)
        .nodeDeps.get(key)) !== null && _store$getGraph$nodeD !== void 0
        ? _store$getGraph$nodeD
        : emptySet$2;
    var depValues = new Map(
      Array.from(currentDeps)
        .sort()
        .map(function (depKey) {
          var _getNodeLoadable = getNodeLoadable$3(store, state, depKey),
            _getNodeLoadable2 = _slicedToArray(_getNodeLoadable, 2),
            deps = _getNodeLoadable2[0],
            loadable = _getNodeLoadable2[1];

          mergeDepsIntoDependencyMap(deps, dependencyMap);
          saveDependencyMapToStore$3(dependencyMap, store, state.version);
          return [depKey, loadable];
        }),
    ); // Always cache and evaluate a selector
    // It may provide a result even when not all deps are available.

    var cacheKey = cacheKeyFromDepValues(depValues);
    var cached = cache.get(cacheKey);

    if (cached != null) {
      letStoreBeNotifiedWhenAsyncSettles(store, cached);
      return [dependencyMap, cached];
    } // Cache miss, compute the value

    var _evaluateSelectorFunc = evaluateSelectorFunction(store, state),
      _evaluateSelectorFunc2 = _slicedToArray(_evaluateSelectorFunc, 3),
      deps = _evaluateSelectorFunc2[0],
      loadable = _evaluateSelectorFunc2[1],
      newDepValues = _evaluateSelectorFunc2[2];

    mergeDepsIntoDependencyMap(deps, dependencyMap);
    saveDependencyMapToStore$3(dependencyMap, store, state.version); // Save result in cache

    var newCacheKey = cacheKeyFromDepValues(newDepValues);
    letStoreBeNotifiedWhenAsyncSettles(store, loadable);
    putIntoCache(state, newCacheKey, loadable);
    return [dependencyMap, loadable];
  }

  function evaluateSelectorFunction(store, state) {
    var endPerfBlock = startPerfBlock$1(key);
    var depValues = new Map(); // key -> value for our deps

    var dependencyMap = new Map(); // node -> nodes, part of overall dep map.

    function getRecoilValue(_ref) {
      var depKey = _ref.key;
      addToDependencyMap(key, depKey, dependencyMap);

      var _getNodeLoadable3 = getNodeLoadable$3(store, state, depKey),
        _getNodeLoadable4 = _slicedToArray(_getNodeLoadable3, 2),
        deps = _getNodeLoadable4[0],
        loadable = _getNodeLoadable4[1];

      depValues.set(depKey, loadable);
      mergeDepsIntoDependencyMap(deps, dependencyMap);
      saveDependencyMapToStore$3(dependencyMap, store, state.version);

      if (loadable.state === 'hasValue') {
        return loadable.contents;
      } else {
        throw loadable.contents; // Promise or error
      }
    }

    try {
      // The big moment!
      var output = get({
        get: getRecoilValue,
      }); // TODO Allow user to also return Loadables for improved composability

      var result = isRecoilValue$5(output) ? getRecoilValue(output) : output;
      var loadable;

      if (!isPromise$3(result)) {
        // The selector returned a simple synchronous value, so let's use it!
        endPerfBlock();
        loadable = loadableWithValue$2(result);
      } else {
        // The user returned a promise for an asynchronous selector.  This will
        // resolve to the proper value of the selector when available.
        loadable = loadableWithPromise$2(result.finally(endPerfBlock));
      }

      return [dependencyMap, loadable, depValues];
    } catch (errorOrDepPromise) {
      // XXX why was this changed to not use isPromise?
      var isP = errorOrDepPromise.then !== undefined;

      var _loadable;

      if (!isP) {
        // There was a synchronous error in the evaluation
        endPerfBlock();
        _loadable = loadableWithError$2(errorOrDepPromise);
      } else {
        // If an asynchronous dependency was not ready, then return a promise that
        // will resolve when we finally do have a real value or error for the selector.
        _loadable = loadableWithPromise$2(
          errorOrDepPromise
            .then(function () {
              // Now that its deps are ready, re-evaluate the selector (and
              // record any newly-discovered dependencies in the Store):
              var loadable = getRecoilValueAsLoadable$3(
                store,
                new AbstractRecoilValue$5(key),
              );

              if (loadable.state === 'hasError') {
                throw loadable.contents;
              } // Either the re-try provided a value, which we will use, or it
              // got blocked again.  In that case this is a promise and we'll try again.

              return loadable.contents;
            })
            .finally(endPerfBlock),
        );
      }

      return [dependencyMap, _loadable, depValues];
    }
  }

  function detectCircularDependencies(fn) {
    if (dependencyStack$1.includes(key)) {
      var message = 'Recoil selector has circular dependencies: '.concat(
        dependencyStack$1
          .slice(dependencyStack$1.indexOf(key))
          .join(' \u2192 '),
      );
      return [new Map(), loadableWithError$2(new Error(message))];
    }

    dependencyStack$1.push(key);

    try {
      return fn();
    } finally {
      dependencyStack$1.pop();
    }
  }

  function myPeek(store, state) {
    var _store$getGraph$nodeD2;

    // First, get the current deps for this selector
    var currentDeps =
      (_store$getGraph$nodeD2 = store
        .getGraph(state.version)
        .nodeDeps.get(key)) !== null && _store$getGraph$nodeD2 !== void 0
        ? _store$getGraph$nodeD2
        : emptySet$2;
    var depValues = new Map(
      Array.from(currentDeps)
        .sort()
        .map(function (depKey) {
          return [depKey, peekNodeLoadable$2(store, state, depKey)];
        }),
    );
    var cacheDepValues = new Map();

    var _iterator3 = _createForOfIteratorHelper(depValues.entries()),
      _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var _step3$value = _slicedToArray(_step3.value, 2),
          depKey = _step3$value[0],
          depValue = _step3$value[1];

        if (depValue == null) {
          return undefined;
        }

        cacheDepValues.set(depKey, depValue);
      } // Always cache and evaluate a selector
      // It may provide a result even when not all deps are available.
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    var cacheKey = cacheKeyFromDepValues(cacheDepValues);
    return cache.get(cacheKey);
  }

  function invalidate(state) {
    state.atomValues.delete(key);
  }

  function myGet(store, state) {
    initSelector(store); // First-level cache: Have we already evaluated the selector since being
    // invalidated due to a dependency changing?

    var cached = state.atomValues.get(key);

    if (cached !== undefined) {
      return [new Map(), cached];
    } // Second-level cache based on looking up current dependencies in a map
    // and evaluating selector if missing.

    if (process.env.NODE_ENV !== 'production') {
      return detectCircularDependencies(function () {
        return getFromCacheOrEvaluate(store, state);
      });
    } else {
      return getFromCacheOrEvaluate(store, state);
    }
  }

  if (set != null) {
    var mySet = function mySet(store, state, newValue) {
      initSelector(store);
      var syncSelectorSetFinished = false;
      var dependencyMap = new Map();
      var writes = new Map();

      function getRecoilValue(_ref2) {
        var key = _ref2.key;

        if (syncSelectorSetFinished) {
          throw new Error(
            'Recoil: Async selector sets are not currently supported.',
          );
        }

        var _getNodeLoadable5 = getNodeLoadable$3(store, state, key),
          _getNodeLoadable6 = _slicedToArray(_getNodeLoadable5, 2),
          deps = _getNodeLoadable6[0],
          loadable = _getNodeLoadable6[1];

        mergeDepsIntoDependencyMap(deps, dependencyMap);

        if (loadable.state === 'hasValue') {
          return loadable.contents;
        } else if (loadable.state === 'loading') {
          throw new RecoilValueNotReady$3(key);
        } else {
          throw loadable.contents;
        }
      }

      function setRecoilState(recoilState, valueOrUpdater) {
        if (syncSelectorSetFinished) {
          throw new Error(
            'Recoil: Async selector sets are not currently supported.',
          );
        }

        var newValue =
          typeof valueOrUpdater === 'function' // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
            ? // flowlint-next-line unclear-type:off
              valueOrUpdater(getRecoilValue(recoilState))
            : valueOrUpdater;

        var _setNodeValue = setNodeValue$4(
            store,
            state,
            recoilState.key,
            newValue,
          ),
          _setNodeValue2 = _slicedToArray(_setNodeValue, 2),
          deps = _setNodeValue2[0],
          upstreamWrites = _setNodeValue2[1];

        mergeDepsIntoDependencyMap(deps, dependencyMap);
        upstreamWrites.forEach(function (v, k) {
          return writes.set(k, v);
        });
      }

      function resetRecoilState(recoilState) {
        setRecoilState(recoilState, DEFAULT_VALUE$6);
      }

      var ret = set(
        {
          set: setRecoilState,
          get: getRecoilValue,
          reset: resetRecoilState,
        },
        newValue,
      ); // set should be a void method, but if the user makes it `async`, then it
      // will return a Promise, which we don't currently support.

      if (ret !== undefined) {
        throw isPromise$3(ret)
          ? new Error(
              'Recoil: Async selector sets are not currently supported.',
            )
          : new Error('Recoil: selector set should be a void function.');
      }

      syncSelectorSetFinished = true;
      return [dependencyMap, writes];
    };

    return registerNode$3({
      key: key,
      peek: myPeek,
      get: myGet,
      set: mySet,
      invalidate: invalidate,
      cleanUp: function cleanUp() {},
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false,
    });
  } else {
    return registerNode$3({
      key: key,
      peek: myPeek,
      get: myGet,
      invalidate: invalidate,
      cleanUp: function cleanUp() {},
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false,
    });
  }
}
/* eslint-enable no-redeclare */

module.exports = selector$2;

var Recoil_selector_OLD = /*#__PURE__*/ Object.freeze({
  __proto__: null,
});

var selector$3 = Recoil_gkx_1('recoil_async_selector_refactor')
  ? Recoil_selector_NEW
  : Recoil_selector_OLD;
var Recoil_selector = selector$3;

// Keep in mind the parameter needs to be serializable as a cahche key
// using Recoil_stableStringify

// Add a unique index to each selector in case the cache implementation allows
// duplicate keys based on equivalent stringified parameters
var nextIndex = 0;
/* eslint-disable no-redeclare */

// Return a function that returns members of a family of selectors of the same type
// E.g.,
//
// const s = selectorFamily(...);
// s({a: 1}) => a selector
// s({a: 2}) => a different selector
//
// By default, the selectors are distinguished by distinct values of the
// parameter based on value equality, not reference equality.  This allows using
// object literals or other equivalent objects at callsites to not create
// duplicate cache entries.  This behavior may be overridden with the
// cacheImplementationForParams option.
function selectorFamily$1(options) {
  var _options$cacheImpleme, _options$cacheImpleme2;

  var selectorCache =
    (_options$cacheImpleme =
      (_options$cacheImpleme2 =
        options.cacheImplementationForParams_UNSTABLE) === null ||
      _options$cacheImpleme2 === void 0
        ? void 0
        : _options$cacheImpleme2.call(options)) !== null &&
    _options$cacheImpleme !== void 0
      ? _options$cacheImpleme
      : Recoil_cacheWithValueEquality();
  return function (params) {
    var _stableStringify, _options$cacheImpleme3;

    var cachedSelector = selectorCache.get(params);

    if (cachedSelector != null) {
      return cachedSelector;
    }

    var myKey = ''
      .concat(options.key, '__selectorFamily/')
      .concat(
        (_stableStringify = Recoil_stableStringify(params, {
          // It is possible to use functions in parameters if the user uses
          // a cache with reference equality thanks to the incrementing index.
          allowFunctions: true,
        })) !== null && _stableStringify !== void 0
          ? _stableStringify
          : 'void',
        '/',
      )
      .concat(nextIndex++); // Append index in case values serialize to the same key string

    var myGet = function myGet(callbacks) {
      return options.get(params)(callbacks);
    };

    var myCacheImplementation =
      (_options$cacheImpleme3 = options.cacheImplementation_UNSTABLE) ===
        null || _options$cacheImpleme3 === void 0
        ? void 0
        : _options$cacheImpleme3.call(options);
    var newSelector;

    if (options.set != null) {
      var set = options.set;

      var mySet = function mySet(callbacks, newValue) {
        return set(params)(callbacks, newValue);
      };

      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        set: mySet,
        cacheImplementation_UNSTABLE: myCacheImplementation,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      });
    } else {
      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        cacheImplementation_UNSTABLE: myCacheImplementation,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      });
    }

    selectorCache = selectorCache.set(params, newSelector);
    return newSelector;
  };
}
/* eslint-enable no-redeclare */

var Recoil_selectorFamily = selectorFamily$1;

// flowlint-next-line unclear-type:off

var constantSelector = Recoil_selectorFamily({
  key: '__constant',
  get: function get(constant) {
    return function () {
      return constant;
    };
  },
  cacheImplementationForParams_UNSTABLE: Recoil_cacheWithReferenceEquality,
}); // Function that returns a selector which always produces the
// same constant value.  It may be called multiple times with the
// same value, based on reference equality, and will provide the
// same selector.

function constSelector(constant) {
  return constantSelector(constant);
}

var Recoil_constSelector = constSelector;

// flowlint-next-line unclear-type:off

var throwingSelector = Recoil_selectorFamily({
  key: '__error',
  get: function get(message) {
    return function () {
      throw new Error(message);
    };
  },
  cacheImplementationForParams_UNSTABLE: Recoil_cacheWithReferenceEquality,
}); // Function that returns a selector which always throws an error
// with the provided message.

function errorSelector(message) {
  return throwingSelector(message);
}

var Recoil_errorSelector = errorSelector;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Wraps another recoil value and prevents writing to it.
 *
 * @emails oncall+recoil
 *
 * @format
 */

function readOnlySelector(atom) {
  // flowlint-next-line unclear-type: off
  return atom;
}

var Recoil_readOnlySelector = readOnlySelector;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 *
 * @format
 */

var _require$a = require('../adt/Recoil_Loadable'),
  loadableWithError$3 = _require$a.loadableWithError,
  loadableWithPromise$3 = _require$a.loadableWithPromise,
  loadableWithValue$3 = _require$a.loadableWithValue;

var gkx$2 = require('../util/Recoil_gkx');

var isPromise$4 = require('../util/Recoil_isPromise');

var selectorFamily$2 = require('./Recoil_selectorFamily'); /////////////////
//  TRUTH TABLE
/////////////////
// Dependencies        waitForNone         waitForAny        waitForAll
//  [loading, loading]  [Promise, Promise]  Promise           Promise
//  [value, loading]    [value, Promise]    [value, Promise]  Promise
//  [value, value]      [value, value]      [value, value]    [value, value]
//
//  [error, loading]    [Error, Promise]    Promise           Error
//  [error, error]      [Error, Error]      Error             Error
//  [value, error]      [value, Error]      [value, Error]    Error
// Issue parallel requests for all dependencies and return the current
// status if they have results, have some error, or are still pending.

function concurrentRequests(getRecoilValue, deps) {
  var results = Array(deps.length).fill(undefined);
  var exceptions = Array(deps.length).fill(undefined);

  var _iterator = _createForOfIteratorHelper(deps.entries()),
    _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _step$value = _slicedToArray(_step.value, 2),
        i = _step$value[0],
        dep = _step$value[1];

      try {
        results[i] = getRecoilValue(dep);
      } catch (e) {
        // exceptions can either be Promises of pending results or real errors
        exceptions[i] = e;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return [results, exceptions];
}

function isError(exp) {
  return exp != null && !isPromise$4(exp);
}

function unwrapDependencies(dependencies) {
  return Array.isArray(dependencies)
    ? dependencies
    : Object.getOwnPropertyNames(dependencies).map(function (key) {
        return dependencies[key];
      });
}

function getValueFromLoadablePromiseResult(result) {
  if (
    result != null &&
    _typeof(result) === 'object' &&
    result.hasOwnProperty('__value')
  ) {
    return result.__value;
  }

  return result;
}

function wrapResults(dependencies, results) {
  return Array.isArray(dependencies)
    ? results // Object.getOwnPropertyNames() has consistent key ordering with ES6
    : Object.getOwnPropertyNames(dependencies).reduce(function (out, key, idx) {
        return _objectSpread2(
          _objectSpread2({}, out),
          {},
          _defineProperty({}, key, results[idx]),
        );
      }, {});
}

function wrapLoadables(dependencies, results, exceptions) {
  var output = exceptions.map(function (exception, idx) {
    return exception == null
      ? loadableWithValue$3(results[idx])
      : isPromise$4(exception)
      ? loadableWithPromise$3(exception)
      : loadableWithError$3(exception);
  });
  return wrapResults(dependencies, output);
}

function combineAsyncResultsWithSyncResults(syncResults, asyncResults) {
  return asyncResults.map(function (result, idx) {
    return (
      /**
       * it's important we use === undefined as opposed to == null, because the
       * resolved value of the async promise could be `null`, in which case we
       * don't want to use syncResults[idx], which would be undefined. If async
       * promise resolves to `undefined`, that's ok because `syncResults[idx]`
       * will also be `undefined`. That's a little hacky, but it works.
       */
      result === undefined ? syncResults[idx] : result
    );
  });
} // Selector that requests all dependencies in parallel and immediately returns
// current results without waiting.

var waitForNone = selectorFamily$2({
  key: '__waitForNone',
  get: function get(dependencies) {
    return function (_ref) {
      var get = _ref.get;
      // Issue requests for all dependencies in parallel.
      var deps = unwrapDependencies(dependencies);

      var _concurrentRequests = concurrentRequests(get, deps),
        _concurrentRequests2 = _slicedToArray(_concurrentRequests, 2),
        results = _concurrentRequests2[0],
        exceptions = _concurrentRequests2[1]; // Always return the current status of the results; never block.

      return wrapLoadables(dependencies, results, exceptions);
    };
  },
}); // Selector that requests all dependencies in parallel and waits for at least
// one to be available before returning results.  It will only error if all
// dependencies have errors.

var waitForAny = selectorFamily$2({
  key: '__waitForAny',
  get: function get(dependencies) {
    return function (_ref2) {
      var get = _ref2.get;
      // Issue requests for all dependencies in parallel.
      // Exceptions can either be Promises of pending results or real errors
      var deps = unwrapDependencies(dependencies);

      var _concurrentRequests3 = concurrentRequests(get, deps),
        _concurrentRequests4 = _slicedToArray(_concurrentRequests3, 2),
        results = _concurrentRequests4[0],
        exceptions = _concurrentRequests4[1]; // If any results are available, return the current status

      if (
        exceptions.some(function (exp) {
          return exp == null;
        })
      ) {
        return wrapLoadables(dependencies, results, exceptions);
      } // Since we are waiting for any results, only throw an error if all
      // dependencies have an error.  Then, throw the first one.

      if (exceptions.every(isError)) {
        throw exceptions.find(isError);
      }

      if (gkx$2('recoil_async_selector_refactor')) {
        // Otherwise, return a promise that will resolve when the next result is
        // available, whichever one happens to be next.  But, if all pending
        // dependencies end up with errors, then reject the promise.
        return new Promise(function (resolve, reject) {
          var _iterator2 = _createForOfIteratorHelper(exceptions.entries()),
            _step2;

          try {
            var _loop = function _loop() {
              var _step2$value = _slicedToArray(_step2.value, 2),
                i = _step2$value[0],
                exp = _step2$value[1];

              if (isPromise$4(exp)) {
                exp
                  .then(function (result) {
                    results[i] = getValueFromLoadablePromiseResult(result);
                    exceptions[i] = null;
                    resolve(wrapLoadables(dependencies, results, exceptions));
                  })
                  .catch(function (error) {
                    exceptions[i] = error;

                    if (exceptions.every(isError)) {
                      reject(exceptions[0]);
                    }
                  });
              }
            };

            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              _loop();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        });
      } else {
        throw new Promise(function (resolve, reject) {
          var _iterator3 = _createForOfIteratorHelper(exceptions.entries()),
            _step3;

          try {
            var _loop2 = function _loop2() {
              var _step3$value = _slicedToArray(_step3.value, 2),
                i = _step3$value[0],
                exp = _step3$value[1];

              if (isPromise$4(exp)) {
                exp
                  .then(function (result) {
                    results[i] = result;
                    exceptions[i] = null;
                    resolve(wrapLoadables(dependencies, results, exceptions));
                  })
                  .catch(function (error) {
                    exceptions[i] = error;

                    if (exceptions.every(isError)) {
                      reject(exceptions[0]);
                    }
                  });
              }
            };

            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              _loop2();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        });
      }
    };
  },
}); // Selector that requests all dependencies in parallel and waits for all to be
// available before returning a value.  It will error if any dependencies error.

var waitForAll = selectorFamily$2({
  key: '__waitForAll',
  get: function get(dependencies) {
    return function (_ref3) {
      var get = _ref3.get;
      // Issue requests for all dependencies in parallel.
      // Exceptions can either be Promises of pending results or real errors
      var deps = unwrapDependencies(dependencies);

      var _concurrentRequests5 = concurrentRequests(get, deps),
        _concurrentRequests6 = _slicedToArray(_concurrentRequests5, 2),
        results = _concurrentRequests6[0],
        exceptions = _concurrentRequests6[1]; // If all results are available, return the results

      if (
        exceptions.every(function (exp) {
          return exp == null;
        })
      ) {
        return wrapResults(dependencies, results);
      } // If we have any errors, throw the first error

      var error = exceptions.find(isError);

      if (error != null) {
        throw error;
      }

      if (gkx$2('recoil_async_selector_refactor')) {
        // Otherwise, return a promise that will resolve when all results are available
        return Promise.all(exceptions).then(function (exceptionResults) {
          return wrapResults(
            dependencies,
            combineAsyncResultsWithSyncResults(results, exceptionResults).map(
              getValueFromLoadablePromiseResult,
            ),
          );
        });
      } else {
        throw Promise.all(exceptions).then(function (results) {
          return wrapResults(dependencies, results);
        });
      }
    };
  },
});
var noWait = selectorFamily$2({
  key: '__noWait',
  get: function get(dependency) {
    return function (_ref4) {
      var get = _ref4.get;

      try {
        return loadableWithValue$3(get(dependency));
      } catch (exception) {
        return isPromise$4(exception)
          ? loadableWithPromise$3(exception)
          : loadableWithError$3(exception);
      }
    };
  },
});
module.exports = {
  waitForNone: waitForNone,
  waitForAny: waitForAny,
  waitForAll: waitForAll,
  noWait: noWait,
};

var Recoil_WaitFor = /*#__PURE__*/ Object.freeze({
  __proto__: null,
});

var batchUpdates$3 = Recoil_Batching.batchUpdates,
  setBatcher$1 = Recoil_Batching.setBatcher;

var DefaultValue$4 = Recoil_Node.DefaultValue;

var RecoilRoot$2 = Recoil_RecoilRoot_react.RecoilRoot;

var isRecoilValue$6 = Recoil_RecoilValue.isRecoilValue;

var freshSnapshot$2 = Recoil_Snapshot.freshSnapshot;

var useGotoRecoilSnapshot$1 = Recoil_Hooks.useGotoRecoilSnapshot,
  useRecoilCallback$1 = Recoil_Hooks.useRecoilCallback,
  useRecoilSnapshot$1 = Recoil_Hooks.useRecoilSnapshot,
  useRecoilState$1 = Recoil_Hooks.useRecoilState,
  useRecoilStateLoadable$1 = Recoil_Hooks.useRecoilStateLoadable,
  useRecoilTransactionObserver$1 = Recoil_Hooks.useRecoilTransactionObserver,
  useRecoilValue$1 = Recoil_Hooks.useRecoilValue,
  useRecoilValueLoadable$1 = Recoil_Hooks.useRecoilValueLoadable,
  useResetRecoilState$1 = Recoil_Hooks.useResetRecoilState,
  useSetRecoilState$1 = Recoil_Hooks.useSetRecoilState,
  useSetUnvalidatedAtomValues$1 = Recoil_Hooks.useSetUnvalidatedAtomValues,
  useTransactionObservation_DEPRECATED$1 =
    Recoil_Hooks.useTransactionObservation_DEPRECATED;

var noWait$1 = Recoil_WaitFor.noWait,
  waitForAll$1 = Recoil_WaitFor.waitForAll,
  waitForAny$1 = Recoil_WaitFor.waitForAny,
  waitForNone$1 = Recoil_WaitFor.waitForNone;

var Recoil_index = {
  // Types
  DefaultValue: DefaultValue$4,
  // Components
  RecoilRoot: RecoilRoot$2,
  useRecoilBridgeAcrossReactRoots_UNSTABLE: Recoil_useRecoilBridgeAcrossReactRoots,
  // RecoilValues
  atom: Recoil_atom,
  selector: Recoil_selector,
  // Convenience RecoilValues
  atomFamily: Recoil_atomFamily,
  selectorFamily: Recoil_selectorFamily,
  constSelector: Recoil_constSelector,
  errorSelector: Recoil_errorSelector,
  readOnlySelector: Recoil_readOnlySelector,
  // Hooks that accept RecoilValues
  useRecoilValue: useRecoilValue$1,
  useRecoilValueLoadable: useRecoilValueLoadable$1,
  useRecoilState: useRecoilState$1,
  useRecoilStateLoadable: useRecoilStateLoadable$1,
  useSetRecoilState: useSetRecoilState$1,
  useResetRecoilState: useResetRecoilState$1,
  useGetRecoilValueInfo_UNSTABLE: Recoil_useGetRecoilValueInfo,
  // Hooks for asynchronous Recoil
  useRecoilCallback: useRecoilCallback$1,
  // Hooks for Snapshots
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$1,
  useRecoilSnapshot: useRecoilSnapshot$1,
  useRecoilTransactionObserver_UNSTABLE: useRecoilTransactionObserver$1,
  useTransactionObservation_UNSTABLE: useTransactionObservation_DEPRECATED$1,
  useSetUnvalidatedAtomValues_UNSTABLE: useSetUnvalidatedAtomValues$1,
  // Concurrency Helpers
  noWait: noWait$1,
  waitForNone: waitForNone$1,
  waitForAny: waitForAny$1,
  waitForAll: waitForAll$1,
  // Other functions
  isRecoilValue: isRecoilValue$6,
  // Batching
  batchUpdates: batchUpdates$3,
  setBatcher: setBatcher$1,
  // Snapshot Utils
  snapshot_UNSTABLE: freshSnapshot$2,
};

export default Recoil_index;
