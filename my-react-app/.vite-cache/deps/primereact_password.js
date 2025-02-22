"use client";
import {
  InputText
} from "./chunk-HAAQXJ36.js";
import {
  CSSTransition,
  OverlayService
} from "./chunk-QCJJBEQR.js";
import {
  IconBase
} from "./chunk-G5JCRIWU.js";
import {
  Portal
} from "./chunk-6RJICXQ7.js";
import {
  ComponentBase,
  ESC_KEY_HANDLING_PRIORITIES,
  useDisplayOrder,
  useGlobalOnEscapeKey,
  useHandleStyle,
  useMergeProps,
  useMountEffect,
  useOverlayListener,
  useUnmountEffect,
  useUpdateEffect
} from "./chunk-VNSUI45F.js";
import {
  DomHandler,
  IconUtils,
  ObjectUtils,
  PrimeReact,
  PrimeReactContext,
  ZIndexUtils,
  ariaLabel,
  classNames,
  localeOption
} from "./chunk-CMLEQ4RC.js";
import "./chunk-KHFJTIKL.js";
import "./chunk-SSLM52RX.js";
import "./chunk-BYWRWTV4.js";
import "./chunk-ANLTY6XV.js";
import {
  require_react
} from "./chunk-4LDP7TDJ.js";
import "./chunk-CDGJA232.js";
import {
  __toESM
} from "./chunk-USJHI7ER.js";

// node_modules/primereact/password/password.esm.js
var React3 = __toESM(require_react());
var import_react = __toESM(require_react());

// node_modules/primereact/icons/eye/index.esm.js
var React = __toESM(require_react());
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var EyeIcon = React.memo(React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React.createElement("svg", _extends({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",
    fill: "currentColor"
  }));
}));
EyeIcon.displayName = "EyeIcon";

// node_modules/primereact/icons/eyeslash/index.esm.js
var React2 = __toESM(require_react());
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var EyeSlashIcon = React2.memo(React2.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React2.createElement("svg", _extends2({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React2.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",
    fill: "currentColor"
  }));
}));
EyeSlashIcon.displayName = "EyeSlashIcon";

// node_modules/primereact/password/password.esm.js
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toPrimitive(input2, hint) {
  if (_typeof(input2) !== "object" || input2 === null)
    return input2;
  var prim = input2[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input2, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input2);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var classes$2 = {
  root: function root(_ref) {
    var props = _ref.props;
    return classNames("p-icon-field", {
      "p-icon-field-right": props.iconPosition === "right",
      "p-icon-field-left": props.iconPosition === "left"
    });
  }
};
var IconFieldBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "IconField",
    __parentMetadata: null,
    children: void 0,
    className: null,
    iconPosition: "right"
  },
  css: {
    classes: classes$2
  }
});
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var IconField = import_react.default.memo(import_react.default.forwardRef(function(inProps, ref) {
  var elementRef = (0, import_react.useRef)(ref);
  var mergeProps = useMergeProps();
  var context = (0, import_react.useContext)(PrimeReactContext);
  var props = IconFieldBase.getProps(inProps, context);
  var _IconFieldBase$setMet = IconFieldBase.setMetaData(_objectSpread$2(_objectSpread$2({
    props
  }, props.__parentMetadata), {}, {
    context: {
      iconPosition: props.iconPosition
    }
  })), ptm = _IconFieldBase$setMet.ptm, cx = _IconFieldBase$setMet.cx;
  var rootProps = mergeProps({
    className: classNames(props.className, cx("root", {
      iconPosition: props.iconPosition
    }))
  }, IconFieldBase.getOtherProps(props), ptm("root"));
  return import_react.default.createElement("div", _extends3({}, rootProps, {
    ref: elementRef
  }), import_react.Children.map(props.children, function(child, index) {
    return (0, import_react.cloneElement)(child, {
      iconPosition: props.iconPosition
    });
  }));
}));
IconField.displayName = "IconField";
var classes$1 = {
  root: "p-input-icon"
};
var InputIconBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "InputIcon",
    __parentMetadata: null,
    className: null,
    iconPosition: null
  },
  css: {
    classes: classes$1
  }
});
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var InputIcon = import_react.default.memo(import_react.default.forwardRef(function(inProps, ref) {
  var elementRef = (0, import_react.useRef)(ref);
  var mergeProps = useMergeProps();
  var context = (0, import_react.useContext)(PrimeReactContext);
  var props = InputIconBase.getProps(inProps, context);
  var _InputIconBase$setMet = InputIconBase.setMetaData(_objectSpread$1(_objectSpread$1({
    props
  }, props.__parentMetadata), {}, {
    context: {
      iconPosition: props.iconPosition
    }
  })), ptm = _InputIconBase$setMet.ptm, cx = _InputIconBase$setMet.cx;
  var rootProps = mergeProps({
    className: classNames(props.className, cx("root"))
  }, InputIconBase.getOtherProps(props), ptm("root"));
  return import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement("span", _extends3({}, rootProps, {
    ref: elementRef
  }), props.children));
}));
InputIcon.displayName = "InputIcon";
var classes = {
  root: function root2(_ref) {
    var props = _ref.props, isFilled = _ref.isFilled, focusedState = _ref.focusedState;
    return classNames("p-password p-component p-inputwrapper", {
      "p-inputwrapper-filled": isFilled,
      "p-inputwrapper-focus": focusedState,
      "p-input-icon-right": props.toggleMask
    });
  },
  input: function input(_ref2) {
    var props = _ref2.props;
    return classNames("p-password-input", props.inputClassName);
  },
  panel: function panel(_ref3) {
    var props = _ref3.props, context = _ref3.context;
    return classNames("p-password-panel p-component", props.panelClassName, {
      "p-input-filled": context && context.inputStyle === "filled" || PrimeReact.inputStyle === "filled",
      "p-ripple-disabled": context && context.ripple === false || PrimeReact.ripple === false
    });
  },
  meter: "p-password-meter",
  meterLabel: function meterLabel(_ref4) {
    var strength = _ref4.strength;
    return classNames("p-password-strength", strength);
  },
  info: function info(_ref5) {
    var strength = _ref5.strength;
    return classNames("p-password-info", strength);
  },
  showIcon: "p-password-show-icon",
  hideIcon: "p-password-hide-icon",
  transition: "p-connected-overlay"
};
var styles = "\n@layer primereact {\n    .p-password {\n        position: relative;\n        display: inline-flex;\n    }\n    \n    .p-password-panel {\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n    \n    .p-password .p-password-panel {\n        min-width: 100%;\n    }\n    \n    .p-password-meter {\n        height: 10px;\n    }\n    \n    .p-password-strength {\n        height: 100%;\n        width: 0%;\n        transition: width 1s ease-in-out;\n    }\n    \n    .p-fluid .p-password {\n        display: flex;\n    }\n    \n    .p-password-input::-ms-reveal,\n    .p-password-input::-ms-clear {\n        display: none;\n    }\n\n    .p-password .p-password-show-icon,\n    .p-password .p-password-hide-icon {\n        line-height: 1.5;\n        cursor: pointer;\n    }\n}\n";
var PasswordBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Password",
    id: null,
    inputId: null,
    inputRef: null,
    promptLabel: null,
    weakLabel: null,
    mediumLabel: null,
    strongLabel: null,
    mediumRegex: "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",
    strongRegex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
    feedback: true,
    toggleMask: false,
    appendTo: null,
    header: null,
    content: null,
    footer: null,
    showIcon: null,
    hideIcon: null,
    icon: null,
    tooltip: null,
    tooltipOptions: null,
    style: null,
    className: null,
    inputStyle: null,
    inputClassName: null,
    invalid: false,
    variant: null,
    panelStyle: null,
    panelClassName: null,
    transitionOptions: null,
    tabIndex: null,
    value: void 0,
    onInput: null,
    onShow: null,
    onHide: null,
    children: void 0
  },
  css: {
    classes,
    styles
  }
});
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Password = React3.memo(React3.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React3.useContext(PrimeReactContext);
  var props = PasswordBase.getProps(inProps, context);
  var promptLabel = props.promptLabel || localeOption("passwordPrompt");
  var weakLabel = props.weakLabel || localeOption("weak");
  var mediumLabel = props.mediumLabel || localeOption("medium");
  var strongLabel = props.strongLabel || localeOption("strong");
  var _React$useState = React3.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), overlayVisibleState = _React$useState2[0], setOverlayVisibleState = _React$useState2[1];
  var _React$useState3 = React3.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), meterState = _React$useState4[0], setMeterState = _React$useState4[1];
  var _React$useState5 = React3.useState(promptLabel), _React$useState6 = _slicedToArray(_React$useState5, 2), infoTextState = _React$useState6[0], setInfoTextState = _React$useState6[1];
  var _React$useState7 = React3.useState(false), _React$useState8 = _slicedToArray(_React$useState7, 2), focusedState = _React$useState8[0], setFocusedState = _React$useState8[1];
  var _React$useState9 = React3.useState(false), _React$useState10 = _slicedToArray(_React$useState9, 2), unmaskedState = _React$useState10[0], setUnmaskedState = _React$useState10[1];
  var elementRef = React3.useRef(null);
  var overlayRef = React3.useRef(null);
  var inputRef = React3.useRef(props.inputRef);
  var mediumCheckRegExp = React3.useRef(new RegExp(props.mediumRegex));
  var strongCheckRegExp = React3.useRef(new RegExp(props.strongRegex));
  var type = unmaskedState ? "text" : "password";
  var metaData = {
    props,
    state: {
      overlayVisible: overlayVisibleState,
      meter: meterState,
      infoText: infoTextState,
      focused: focusedState,
      unmasked: unmaskedState
    }
  };
  var _PasswordBase$setMeta = PasswordBase.setMetaData(metaData), ptm = _PasswordBase$setMeta.ptm, cx = _PasswordBase$setMeta.cx, isUnstyled = _PasswordBase$setMeta.isUnstyled;
  useHandleStyle(PasswordBase.css.styles, isUnstyled, {
    name: "password"
  });
  var passwordDisplayOrder = useDisplayOrder("password", overlayVisibleState);
  useGlobalOnEscapeKey({
    callback: function callback() {
      hide();
    },
    when: overlayVisibleState && props.feedback && passwordDisplayOrder,
    priority: [ESC_KEY_HANDLING_PRIORITIES.PASSWORD, passwordDisplayOrder]
  });
  var _useOverlayListener = useOverlayListener({
    target: elementRef,
    overlay: overlayRef,
    listener: function listener(event, _ref) {
      var valid = _ref.valid;
      valid && hide();
    },
    when: overlayVisibleState
  }), _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2), bindOverlayListener = _useOverlayListener2[0], unbindOverlayListener = _useOverlayListener2[1];
  var currentValue = inputRef.current && inputRef.current.value;
  var isFilled = React3.useMemo(function() {
    return ObjectUtils.isNotEmpty(props.value) || ObjectUtils.isNotEmpty(props.defaultValue) || ObjectUtils.isNotEmpty(currentValue);
  }, [props.value, props.defaultValue, currentValue]);
  var updateLabels = function updateLabels2() {
    if (meterState) {
      var label = null;
      switch (meterState.strength) {
        case "weak":
          label = weakLabel;
          break;
        case "medium":
          label = mediumLabel;
          break;
        case "strong":
          label = strongLabel;
          break;
      }
      if (label && infoTextState !== label) {
        setInfoTextState(label);
      }
    } else if (infoTextState !== promptLabel) {
      setInfoTextState(promptLabel);
    }
  };
  var updateFeedback = function updateFeedback2(value) {
    if (!props.feedback) {
      return false;
    }
    var label = null;
    var meter = null;
    switch (testStrength(value)) {
      case 1:
        label = weakLabel;
        meter = {
          strength: "weak",
          width: "33.33%"
        };
        break;
      case 2:
        label = mediumLabel;
        meter = {
          strength: "medium",
          width: "66.66%"
        };
        break;
      case 3:
        label = strongLabel;
        meter = {
          strength: "strong",
          width: "100%"
        };
        break;
      default:
        label = promptLabel;
        meter = null;
        break;
    }
    setMeterState(meter);
    setInfoTextState(label);
    return true;
  };
  var onPanelClick = function onPanelClick2(event) {
    if (props.feedback) {
      OverlayService.emit("overlay-click", {
        originalEvent: event,
        target: elementRef.current
      });
    }
  };
  var toggleMask = function toggleMask2() {
    setUnmaskedState(function(prevUnmasked) {
      return !prevUnmasked;
    });
  };
  var show = function show2() {
    updateLabels();
    setOverlayVisibleState(true);
  };
  var hide = function hide2() {
    setOverlayVisibleState(false);
  };
  var alignOverlay = function alignOverlay2() {
    if (inputRef.current) {
      DomHandler.alignOverlay(overlayRef.current, inputRef.current.parentElement, props.appendTo || context && context.appendTo || PrimeReact.appendTo);
    }
  };
  var onOverlayEnter = function onOverlayEnter2() {
    ZIndexUtils.set("overlay", overlayRef.current, context && context.autoZIndex || PrimeReact.autoZIndex, context && context.zIndex.overlay || PrimeReact.zIndex.overlay);
    DomHandler.addStyles(overlayRef.current, {
      position: "absolute",
      top: "0",
      left: "0"
    });
    alignOverlay();
  };
  var onOverlayEntered = function onOverlayEntered2() {
    bindOverlayListener();
    props.onShow && props.onShow();
  };
  var onOverlayExit = function onOverlayExit2() {
    unbindOverlayListener();
  };
  var onOverlayExited = function onOverlayExited2() {
    ZIndexUtils.clear(overlayRef.current);
    props.onHide && props.onHide();
  };
  var onFocus = function onFocus2(event) {
    setFocusedState(true);
    if (props.feedback) {
      show();
    }
    props.onFocus && props.onFocus(event);
  };
  var onBlur = function onBlur2(event) {
    setFocusedState(false);
    if (props.feedback) {
      hide();
    }
    props.onBlur && props.onBlur(event);
  };
  var onKeyup = function onKeyup2(e) {
    var keyCode = e.code;
    if (props.feedback) {
      if (!!keyCode && keyCode !== "Escape" && !overlayVisibleState) {
        show();
      }
    }
    props.onKeyUp && props.onKeyUp(e);
  };
  var onInput = function onInput2(event, validatePattern) {
    if (props.onInput) {
      props.onInput(event, validatePattern);
    }
    if (!props.onChange) {
      ObjectUtils.isNotEmpty(event.target.value) ? DomHandler.addClass(elementRef.current, "p-inputwrapper-filled") : DomHandler.removeClass(elementRef.current, "p-inputwrapper-filled");
    }
  };
  var testStrength = function testStrength2(str) {
    if (!str || str.length === 0) {
      return 0;
    }
    if (strongCheckRegExp.current.test(str)) {
      return 3;
    } else if (mediumCheckRegExp.current.test(str)) {
      return 2;
    } else if (str.length > 0) {
      return 1;
    }
    return 0;
  };
  React3.useImperativeHandle(ref, function() {
    return {
      props,
      toggleMask,
      focus: function focus() {
        return DomHandler.focus(inputRef.current);
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getOverlay: function getOverlay() {
        return overlayRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      }
    };
  });
  React3.useEffect(function() {
    ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  React3.useEffect(function() {
    mediumCheckRegExp.current = new RegExp(props.mediumRegex);
  }, [props.mediumRegex]);
  React3.useEffect(function() {
    strongCheckRegExp.current = new RegExp(props.strongRegex);
  }, [props.strongRegex]);
  React3.useEffect(function() {
    if (!isFilled && DomHandler.hasClass(elementRef.current, "p-inputwrapper-filled")) {
      DomHandler.removeClass(elementRef.current, "p-inputwrapper-filled");
    }
  }, [isFilled]);
  useUpdateEffect(function() {
    updateFeedback(props.value);
  }, [props.value]);
  useMountEffect(function() {
    alignOverlay();
  });
  useUnmountEffect(function() {
    ZIndexUtils.clear(overlayRef.current);
  });
  var onToggleMaskKeyDown = function onToggleMaskKeyDown2(event) {
    if (event.key === "Enter" || event.code === "Space") {
      toggleMask();
      event.preventDefault();
    }
  };
  var createIcon = function createIcon2() {
    if (!props.toggleMask) {
      return null;
    }
    var icon2;
    var hideIconProps = mergeProps({
      role: "switch",
      tabIndex: props.tabIndex || "0",
      className: cx("hideIcon"),
      onClick: toggleMask,
      onKeyDown: onToggleMaskKeyDown,
      "aria-label": ariaLabel("passwordHide") || "Hide Password",
      "aria-checked": "false"
    }, ptm("hideIcon"));
    var showIconProps = mergeProps({
      role: "switch",
      tabIndex: props.tabIndex || "0",
      className: cx("showIcon"),
      onClick: toggleMask,
      onKeyDown: onToggleMaskKeyDown,
      "aria-label": ariaLabel("passwordShow") || "Show Password",
      "aria-checked": "true"
    }, ptm("showIcon"));
    if (unmaskedState) {
      icon2 = props.hideIcon || React3.createElement(EyeSlashIcon, hideIconProps);
    } else {
      icon2 = props.showIcon || React3.createElement(EyeIcon, showIconProps);
    }
    var eyeIcon = IconUtils.getJSXIcon(icon2, unmaskedState ? _objectSpread({}, hideIconProps) : _objectSpread({}, showIconProps), {
      props
    });
    var content = eyeIcon;
    if (props.icon) {
      var defaultIconOptions = {
        onClick: toggleMask,
        className,
        element: content,
        props
      };
      content = ObjectUtils.getJSXElement(props.icon, defaultIconOptions);
    }
    return content;
  };
  var createPanel = function createPanel2() {
    var _ref2 = meterState || {
      strength: "",
      width: "0%"
    }, strength = _ref2.strength, width = _ref2.width;
    var header = ObjectUtils.getJSXElement(props.header, props);
    var footer = ObjectUtils.getJSXElement(props.footer, props);
    var panelProps = mergeProps({
      className: cx("panel", {
        context
      }),
      style: props.panelStyle,
      onClick: onPanelClick
    }, ptm("panel"));
    var meterProps = mergeProps({
      className: cx("meter")
    }, ptm("meter"));
    var meterLabelProps = mergeProps({
      className: cx("meterLabel", {
        strength
      }),
      style: {
        width
      }
    }, ptm("meterLabel"));
    var infoProps = mergeProps({
      className: cx("info", {
        strength
      })
    }, ptm("info"));
    var content = props.content ? ObjectUtils.getJSXElement(props.content, props) : React3.createElement(React3.Fragment, null, React3.createElement("div", meterProps, React3.createElement("div", meterLabelProps)), React3.createElement("div", infoProps, infoTextState));
    var transitionProps = mergeProps({
      classNames: cx("transition"),
      "in": overlayVisibleState,
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter: onOverlayEnter,
      onEntered: onOverlayEntered,
      onExit: onOverlayExit,
      onExited: onOverlayExited
    }, ptm("transition"));
    var panel3 = React3.createElement(CSSTransition, _extends3({
      nodeRef: overlayRef
    }, transitionProps), React3.createElement("div", _extends3({
      ref: overlayRef
    }, panelProps), header, content, footer));
    return React3.createElement(Portal, {
      element: panel3,
      appendTo: props.appendTo
    });
  };
  var className = classNames("p-password p-component p-inputwrapper", {
    "p-inputwrapper-filled": isFilled,
    "p-inputwrapper-focus": focusedState,
    "p-input-icon-right": props.toggleMask
  }, props.className);
  var inputProps = PasswordBase.getOtherProps(props);
  var icon = createIcon();
  var panel2 = createPanel();
  var rootProps = mergeProps({
    ref: elementRef,
    id: props.id,
    className: classNames(props.className, cx("root", {
      isFilled,
      focusedState
    })),
    style: props.style
  }, ptm("root"));
  var inputTextProps = mergeProps(_objectSpread(_objectSpread({
    ref: inputRef,
    id: props.inputId
  }, inputProps), {}, {
    className: classNames(props.inputClassName, cx("input")),
    onBlur,
    onFocus,
    onInput,
    onKeyUp: onKeyup,
    invalid: props.invalid,
    variant: props.variant,
    style: props.inputStyle,
    unstyled: props.unstyled,
    tabIndex: props.tabIndex || "0",
    tooltip: props.tooltip,
    tooltipOptions: props.tooltipOptions,
    type,
    value: props.value,
    __parentMetadata: {
      parent: metaData
    }
  }), ptm("input"));
  var input2 = React3.createElement(InputText, inputTextProps);
  if (icon) {
    input2 = React3.createElement(IconField, {
      className: cx("iconField"),
      pt: ptm("iconField"),
      __parentMetadata: {
        parent: metaData
      }
    }, input2, React3.createElement(InputIcon, {
      className: cx("inputIcon"),
      pt: ptm("inputIcon"),
      __parentMetadata: {
        parent: metaData
      }
    }, icon));
  }
  return React3.createElement("div", rootProps, input2, panel2);
}));
Password.displayName = "Password";
export {
  Password
};
//# sourceMappingURL=primereact_password.js.map
