"use client";
import {
  TimesCircleIcon
} from "./chunk-6454XNYT.js";
import {
  InputText
} from "./chunk-HAAQXJ36.js";
import {
  CheckIcon,
  SearchIcon,
  TimesIcon
} from "./chunk-ULTYYNRU.js";
import {
  ChevronDownIcon,
  VirtualScroller
} from "./chunk-PJ327SSH.js";
import {
  CSSTransition,
  OverlayService
} from "./chunk-QCJJBEQR.js";
import {
  Ripple,
  SpinnerIcon
} from "./chunk-6Q6O7R6S.js";
import "./chunk-G5JCRIWU.js";
import {
  Portal,
  Tooltip
} from "./chunk-6RJICXQ7.js";
import {
  ComponentBase,
  useHandleStyle,
  useMergeProps,
  useMountEffect,
  useOverlayListener,
  useUnmountEffect,
  useUpdateEffect
} from "./chunk-VNSUI45F.js";
import {
  DomHandler,
  FilterService,
  IconUtils,
  ObjectUtils,
  PrimeReact,
  PrimeReactContext,
  UniqueComponentId,
  ZIndexUtils,
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

// node_modules/primereact/multiselect/multiselect.esm.js
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
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$1(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}
function _readOnlyError(name) {
  throw new TypeError('"' + name + '" is read-only');
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
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}
var classes$1 = {
  root: function root(_ref) {
    var props = _ref.props, context = _ref.context, focusedState = _ref.focusedState, overlayVisibleState = _ref.overlayVisibleState;
    return classNames("p-multiselect p-component p-inputwrapper", {
      "p-multiselect-chip": props.display === "chip",
      "p-disabled": props.disabled,
      "p-invalid": props.invalid,
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled",
      "p-multiselect-clearable": props.showClear && !props.disabled,
      "p-focus": focusedState,
      "p-inputwrapper-filled": ObjectUtils.isNotEmpty(props.value),
      "p-inputwrapper-focus": focusedState || overlayVisibleState
    });
  },
  label: function label(_ref2) {
    var props = _ref2.props, empty = _ref2.empty;
    return classNames("p-multiselect-label", {
      "p-placeholder": empty && props.placeholder,
      "p-multiselect-label-empty": empty && !props.placeholder && !props.selectedItemTemplate,
      "p-multiselect-items-label": !empty && props.display !== "chip" && props.value.length > props.maxSelectedLabels
    });
  },
  panel: function panel(_ref3) {
    var props = _ref3.panelProps, context = _ref3.context, allowOptionSelect = _ref3.allowOptionSelect;
    return classNames("p-multiselect-panel p-component", {
      "p-multiselect-inline": props.inline,
      "p-multiselect-flex": props.flex,
      "p-multiselect-limited": !allowOptionSelect,
      "p-input-filled": context && context.inputStyle === "filled" || PrimeReact.inputStyle === "filled",
      "p-ripple-disabled": context && context.ripple === false || PrimeReact.ripple === false
    });
  },
  list: function list(_ref4) {
    var virtualScrollerOptions = _ref4.virtualScrollerOptions;
    return virtualScrollerOptions ? "p-multiselect-items p-component" : "p-multiselect-items p-component";
  },
  labelContainer: "p-multiselect-label-container",
  triggerIcon: "p-multiselect-trigger-icon p-c",
  trigger: "p-multiselect-trigger",
  clearIcon: "p-multiselect-clear-icon",
  tokenLabel: "p-multiselect-token-label",
  token: "p-multiselect-token",
  removeTokenIcon: "p-multiselect-token-icon",
  wrapper: "p-multiselect-items-wrapper",
  emptyMessage: "p-multiselect-empty-message",
  itemGroup: "p-multiselect-item-group",
  closeButton: "p-multiselect-close p-link",
  header: "p-multiselect-header",
  closeIcon: "p-multiselect-close-icon",
  headerCheckboxContainer: "p-multiselect-select-all",
  headerCheckboxIcon: "p-multiselect-select-all p-checkbox-icon p-c",
  headerSelectAllLabel: "p-multiselect-select-all-label",
  filterContainer: "p-multiselect-filter-container",
  filterIcon: "p-multiselect-filter-icon",
  item: function item(_ref5) {
    var props = _ref5.itemProps;
    return classNames("p-multiselect-item", {
      "p-highlight": props.selected,
      "p-disabled": props.disabled,
      "p-focus": props.focusedOptionIndex === props.index
    });
  },
  checkboxContainer: "p-multiselect-checkbox",
  checkboxIcon: "p-checkbox-icon p-c",
  transition: "p-connected-overlay"
};
var styles = "\n@layer primereact {\n    .p-multiselect {\n        display: inline-flex;\n        user-select: none;\n        cursor: pointer;\n    }\n    \n    .p-multiselect-trigger {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        cursor: pointer;\n    }\n    \n    .p-multiselect-label-container {\n        overflow: hidden;\n        flex: 1 1 auto;\n        cursor: pointer;\n    }\n    \n    .p-multiselect-label  {\n        display: block;\n        white-space: nowrap;\n        cursor: pointer;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n    \n    .p-multiselect-label-empty {\n        overflow: hidden;\n        visibility: hidden;\n    }\n    \n    .p-multiselect-token {\n        cursor: default;\n        display: inline-flex;\n        align-items: center;\n        flex: 0 0 auto;\n    }\n    \n    .p-multiselect-token-icon {\n        cursor: pointer;\n    }\n    \n    .p-multiselect .p-multiselect-panel {\n        min-width: 100%;\n    }\n    \n    .p-multiselect-inline.p-multiselect-panel {\n        border: none;\n        position: initial;\n        background: none;\n        box-shadow: none;\n    }\n    \n    .p-multiselect-inline.p-multiselect-panel .p-multiselect-items {\n        padding: 0;\n    }\n    \n    .p-multiselect-flex.p-multiselect-panel .p-multiselect-items {\n        display: flex;\n        flex-wrap: wrap;\n    }\n    \n    .p-multiselect-items-wrapper {\n        overflow: auto;\n    }\n    \n    .p-multiselect-items {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n    }\n    \n    .p-multiselect-item {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        font-weight: normal;\n        white-space: nowrap;\n        position: relative;\n        overflow: hidden;\n        outline: none;\n    }\n    \n    .p-multiselect-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n    \n    .p-multiselect-select-all-label {\n        margin-left: 0.5rem;\n    }\n    \n    .p-multiselect-filter-container {\n        position: relative;\n        flex: 1 1 auto;\n    }\n    \n    .p-multiselect-filter-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -.5rem;\n    }\n    \n    .p-multiselect-filter-container .p-inputtext {\n        width: 100%;\n    }\n    \n    .p-multiselect-close {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        overflow: hidden;\n        position: relative;\n        margin-left: auto;\n    }\n    \n    .p-multiselect-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -.5rem;\n        right: 3rem;\n    }\n    \n    .p-fluid .p-multiselect {\n        display: flex;\n    }\n}\n";
var inlineStyles = {
  root: function root2(_ref6) {
    var props = _ref6.props;
    return props.showClear && !props.disabled && {
      position: "relative"
    };
  },
  itemGroup: function itemGroup(_ref7) {
    var scrollerOptions = _ref7.scrollerOptions;
    return {
      height: scrollerOptions.props ? scrollerOptions.props.itemSize : void 0
    };
  }
};
var MultiSelectBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "MultiSelect",
    appendTo: null,
    ariaLabelledBy: null,
    checkboxIcon: null,
    className: null,
    clearIcon: null,
    closeIcon: null,
    dataKey: null,
    disabled: false,
    display: "comma",
    dropdownIcon: null,
    emptyFilterMessage: null,
    emptyMessage: null,
    filter: false,
    filterBy: null,
    filterInputAutoFocus: true,
    filterLocale: void 0,
    selectOnFocus: false,
    focusOnHover: true,
    autoOptionFocus: false,
    filterMatchMode: "contains",
    filterPlaceholder: null,
    filterTemplate: null,
    fixedPlaceholder: false,
    flex: false,
    id: null,
    inline: false,
    inputId: null,
    inputRef: null,
    invalid: false,
    variant: null,
    itemCheckboxIcon: null,
    itemClassName: null,
    itemTemplate: null,
    loading: false,
    loadingIcon: null,
    maxSelectedLabels: null,
    name: null,
    onBlur: null,
    onChange: null,
    onClick: null,
    onFilter: null,
    onFocus: null,
    onHide: null,
    onRemove: null,
    onSelectAll: null,
    onShow: null,
    optionDisabled: null,
    optionGroupChildren: null,
    optionGroupLabel: null,
    optionGroupTemplate: null,
    optionLabel: null,
    optionValue: null,
    options: null,
    overlayVisible: false,
    panelClassName: null,
    panelFooterTemplate: null,
    panelHeaderTemplate: null,
    panelStyle: null,
    placeholder: null,
    removeIcon: null,
    resetFilterOnHide: false,
    scrollHeight: "200px",
    selectAll: false,
    selectAllLabel: null,
    selectedItemTemplate: null,
    selectedItemsLabel: "{0} items selected",
    selectionLimit: null,
    showClear: false,
    showSelectAll: true,
    style: null,
    tabIndex: 0,
    tooltip: null,
    tooltipOptions: null,
    transitionOptions: null,
    useOptionAsValue: false,
    value: null,
    virtualScrollerOptions: null,
    children: void 0
  },
  css: {
    classes: classes$1,
    styles,
    inlineStyles
  }
});
var classes = {
  box: "p-checkbox-box",
  input: "p-checkbox-input",
  icon: "p-checkbox-icon",
  root: function root3(_ref) {
    var props = _ref.props, checked = _ref.checked, context = _ref.context;
    return classNames("p-checkbox p-component", {
      "p-highlight": checked,
      "p-disabled": props.disabled,
      "p-invalid": props.invalid,
      "p-variant-filled": props.variant ? props.variant === "filled" : context && context.inputStyle === "filled"
    });
  }
};
var CheckboxBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Checkbox",
    autoFocus: false,
    checked: false,
    className: null,
    disabled: false,
    falseValue: false,
    icon: null,
    id: null,
    inputId: null,
    inputRef: null,
    invalid: false,
    variant: null,
    name: null,
    onChange: null,
    onContextMenu: null,
    onMouseDown: null,
    readOnly: false,
    required: false,
    style: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    trueValue: true,
    value: null,
    children: void 0
  },
  css: {
    classes
  }
});
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Checkbox = React.memo(React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = CheckboxBase.getProps(inProps, context);
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), focusedState = _React$useState2[0], setFocusedState = _React$useState2[1];
  var _CheckboxBase$setMeta = CheckboxBase.setMetaData({
    props,
    state: {
      focused: focusedState
    },
    context: {
      checked: props.checked === props.trueValue,
      disabled: props.disabled
    }
  }), ptm = _CheckboxBase$setMeta.ptm, cx = _CheckboxBase$setMeta.cx, isUnstyled = _CheckboxBase$setMeta.isUnstyled;
  useHandleStyle(CheckboxBase.css.styles, isUnstyled, {
    name: "checkbox"
  });
  var elementRef = React.useRef(null);
  var inputRef = React.useRef(props.inputRef);
  var isChecked = function isChecked2() {
    return props.checked === props.trueValue;
  };
  var _onChange = function onChange(event) {
    if (props.disabled || props.readonly) {
      return;
    }
    if (props.onChange) {
      var _props$onChange;
      var _checked = isChecked();
      var value = _checked ? props.falseValue : props.trueValue;
      var eventData = {
        originalEvent: event,
        value: props.value,
        checked: value,
        stopPropagation: function stopPropagation() {
          event === null || event === void 0 || event.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event === null || event === void 0 || event.preventDefault();
        },
        target: {
          type: "checkbox",
          name: props.name,
          id: props.id,
          value: props.value,
          checked: value
        }
      };
      props === null || props === void 0 || (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, eventData);
      if (event.defaultPrevented) {
        return;
      }
      DomHandler.focus(inputRef.current);
    }
  };
  var _onFocus = function onFocus() {
    var _props$onFocus;
    setFocusedState(true);
    props === null || props === void 0 || (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props);
  };
  var _onBlur = function onBlur() {
    var _props$onBlur;
    setFocusedState(false);
    props === null || props === void 0 || (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props);
  };
  React.useImperativeHandle(ref, function() {
    return {
      props,
      focus: function focus() {
        return DomHandler.focus(inputRef.current);
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      }
    };
  });
  React.useEffect(function() {
    ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  useUpdateEffect(function() {
    inputRef.current.checked = isChecked();
  }, [props.checked, props.trueValue]);
  useMountEffect(function() {
    if (props.autoFocus) {
      DomHandler.focus(inputRef.current, props.autoFocus);
    }
  });
  var checked = isChecked();
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = CheckboxBase.getOtherProps(props);
  var rootProps = mergeProps({
    id: props.id,
    className: classNames(props.className, cx("root", {
      checked,
      context
    })),
    style: props.style,
    "data-p-highlight": checked,
    "data-p-disabled": props.disabled,
    onContextMenu: props.onContextMenu,
    onMouseDown: props.onMouseDown
  }, otherProps, ptm("root"));
  var createInputElement = function createInputElement2() {
    var ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
    var inputProps = mergeProps(_objectSpread$4({
      id: props.inputId,
      type: "checkbox",
      className: cx("input"),
      name: props.name,
      tabIndex: props.tabIndex,
      onFocus: function onFocus(e) {
        return _onFocus();
      },
      onBlur: function onBlur(e) {
        return _onBlur();
      },
      onChange: function onChange(e) {
        return _onChange(e);
      },
      disabled: props.disabled,
      readOnly: props.readOnly,
      required: props.required,
      "aria-invalid": props.invalid,
      checked
    }, ariaProps), ptm("input"));
    return React.createElement("input", _extends({
      ref: inputRef
    }, inputProps));
  };
  var createBoxElement = function createBoxElement2() {
    var iconProps = mergeProps({
      className: cx("icon")
    }, ptm("icon"));
    var boxProps = mergeProps({
      className: cx("box", {
        checked
      }),
      "data-p-highlight": checked,
      "data-p-disabled": props.disabled
    }, ptm("box"));
    var icon = checked ? props.icon || React.createElement(CheckIcon, iconProps) : null;
    var checkboxIcon = IconUtils.getJSXIcon(icon, _objectSpread$4({}, iconProps), {
      props,
      checked
    });
    return React.createElement("div", boxProps, checkboxIcon);
  };
  return React.createElement(React.Fragment, null, React.createElement("div", _extends({
    ref: elementRef
  }, rootProps), createInputElement(), createBoxElement()), hasTooltip && React.createElement(Tooltip, _extends({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
Checkbox.displayName = "Checkbox";
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var MultiSelectHeader = React.memo(function(props) {
  var mergeProps = useMergeProps();
  var ptm = props.ptm, cx = props.cx, isUnstyled = props.isUnstyled;
  var filterOptions = {
    filter: function filter2(e) {
      return onFilter(e);
    },
    reset: function reset() {
      return props.resetFilter();
    }
  };
  var getPTOptions = function getPTOptions2(key, options) {
    return ptm(key, _objectSpread$3({
      hostName: props.hostName
    }, options));
  };
  var onFilter = function onFilter2(event) {
    if (props.onFilter) {
      props.onFilter({
        originalEvent: event,
        query: event.target.value
      });
    }
  };
  var onToggleAll = function onToggleAll2(event) {
    if (props.onSelectAll) {
      props.onSelectAll({
        originalEvent: event,
        checked: props.selectAll
      });
    } else {
      var value = props.isAllSelected() ? [] : props.visibleOptions.filter(function(option) {
        return props.isValidOption(option);
      }).map(function(option) {
        return props.getOptionValue(option);
      });
      props.updateModel(event, value, value);
    }
  };
  var createFilterElement = function createFilterElement2() {
    var filterIconProps = mergeProps({
      className: cx("filterIcon")
    }, getPTOptions("filterIcon"));
    var icon2 = props.filterIcon || React.createElement(SearchIcon, filterIconProps);
    var filterIcon = IconUtils.getJSXIcon(icon2, _objectSpread$3({}, filterIconProps), {
      props
    });
    if (props.filter) {
      var filterContainerProps = mergeProps({
        className: cx("filterContainer")
      }, getPTOptions("filterContainer"));
      var content = React.createElement("div", filterContainerProps, React.createElement(InputText, {
        ref: props.filterRef,
        type: "text",
        role: "searchbox",
        value: props.filterValue,
        onChange: onFilter,
        className: "p-multiselect-filter",
        placeholder: props.filterPlaceholder,
        pt: ptm("filterInput"),
        unstyled: props.unstyled,
        __parentMetadata: {
          parent: props.metaData
        }
      }), filterIcon);
      if (props.filterTemplate) {
        var defaultContentOptions = {
          className: filterContainerProps.className,
          element: content,
          filterOptions,
          onFilter,
          filterIconClassName: props.filterIconClassName,
          props
        };
        content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
      }
      return React.createElement(React.Fragment, null, content);
    }
    return null;
  };
  var filterElement = createFilterElement();
  var selectAllId = props.id ? props.id + "_selectall" : UniqueComponentId();
  var headerSelectAllLabelProps = mergeProps({
    htmlFor: selectAllId,
    className: cx("headerSelectAllLabel")
  }, getPTOptions("headerSelectAllLabel"));
  var headerCheckboxIconProps = mergeProps({
    className: cx("headerCheckboxIcon")
  }, getPTOptions("headerCheckbox.icon"));
  var headerCheckboxContainerProps = mergeProps({
    className: cx("headerCheckboxContainer")
  }, getPTOptions("headerCheckboxContainer"));
  var checkedIcon = props.itemCheckboxIcon || React.createElement(CheckIcon, headerCheckboxIconProps);
  var itemCheckboxIcon = IconUtils.getJSXIcon(checkedIcon, _objectSpread$3({}, headerCheckboxIconProps), {
    selected: props.selected
  });
  var checkboxElement = props.showSelectAll && React.createElement("div", headerCheckboxContainerProps, React.createElement(Checkbox, {
    id: selectAllId,
    checked: props.selectAll,
    onChange: onToggleAll,
    role: "checkbox",
    "aria-checked": props.selectAll,
    icon: itemCheckboxIcon,
    pt: ptm("headerCheckbox"),
    unstyled: isUnstyled()
  }), !props.filter && React.createElement("label", headerSelectAllLabelProps, props.selectAllLabel));
  var iconProps = mergeProps({
    className: cx("closeIcon"),
    "aria-hidden": true
  }, getPTOptions("closeIcon"));
  var icon = props.closeIcon || React.createElement(TimesIcon, iconProps);
  var closeIcon = IconUtils.getJSXIcon(icon, _objectSpread$3({}, iconProps), {
    props
  });
  var headerProps = mergeProps({
    className: cx("header")
  }, getPTOptions("header"));
  var closeButtonProps = mergeProps({
    type: "button",
    className: cx("closeButton"),
    "aria-label": localeOption("close"),
    onClick: props.onClose
  }, getPTOptions("closeButton"));
  var closeElement = React.createElement("button", closeButtonProps, closeIcon, React.createElement(Ripple, null));
  var element = React.createElement("div", headerProps, checkboxElement, filterElement, closeElement);
  if (props.template) {
    var defaultOptions = {
      className: "p-multiselect-header",
      checkboxElement,
      checked: props.selectAll,
      onChange: onToggleAll,
      filterElement,
      closeElement,
      closeElementClassName: "p-multiselect-close p-link",
      closeIconClassName: "p-multiselect-close-icon",
      onCloseClick: props.onClose,
      element,
      itemCheckboxIcon,
      props
    };
    return ObjectUtils.getJSXElement(props.template, defaultOptions);
  }
  return element;
});
MultiSelectHeader.displayName = "MultiSelectHeader";
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
var MultiSelectItem = React.memo(function(props) {
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), focusedState = _React$useState2[0], setFocusedState = _React$useState2[1];
  var checkboxRef = React.useRef(null);
  var mergeProps = useMergeProps();
  var ptm = props.ptm, cx = props.cx, isUnstyled = props.isUnstyled;
  var getPTOptions = function getPTOptions2(key) {
    return ptm(key, {
      hostName: props.hostName,
      context: {
        selected: props.selected,
        disabled: props.disabled,
        focused: focusedState,
        focusedIndex: props.focusedIndex,
        index: props.index
      }
    });
  };
  var onFocus = function onFocus2(event) {
    var _checkboxRef$current;
    setFocusedState(true);
    checkboxRef === null || checkboxRef === void 0 || (_checkboxRef$current = checkboxRef.current) === null || _checkboxRef$current === void 0 || _checkboxRef$current.getInput().focus();
  };
  var onBlur = function onBlur2(event) {
    setFocusedState(false);
  };
  var onClick = function onClick2(event) {
    if (props.onClick) {
      props.onClick(event, props.option);
    }
    event.preventDefault();
    event.stopPropagation();
  };
  var checkboxIconProps = mergeProps({
    className: cx("checkboxIcon")
  }, getPTOptions("checkbox.icon"));
  var icon = props.checkboxIcon || React.createElement(CheckIcon, checkboxIconProps);
  var checkboxIcon = props.selected ? IconUtils.getJSXIcon(icon, _objectSpread$2({}, checkboxIconProps), {
    selected: props.selected
  }) : null;
  var content = props.template ? ObjectUtils.getJSXElement(props.template, props.option) : props.label;
  var checkboxContainerProps = mergeProps({
    className: cx("checkboxContainer")
  }, getPTOptions("checkboxContainer"));
  var itemProps = mergeProps({
    className: classNames(props.className, props.option.className, cx("item", {
      itemProps: props
    })),
    style: props.style,
    onClick,
    onFocus,
    onBlur,
    onMouseMove: function onMouseMove(e) {
      return props === null || props === void 0 ? void 0 : props.onMouseMove(e, props.index);
    },
    role: "option",
    "aria-selected": props.selected,
    "data-p-highlight": props.selected,
    "data-p-disabled": props.disabled
  }, getPTOptions("item"));
  return React.createElement("li", _extends({}, itemProps, {
    key: props.index + "_multiselectitem"
  }), React.createElement("div", checkboxContainerProps, React.createElement(Checkbox, {
    ref: checkboxRef,
    checked: props.selected,
    icon: checkboxIcon,
    pt: ptm("checkbox"),
    unstyled: isUnstyled(),
    tabIndex: -1
  })), React.createElement("span", null, content), React.createElement(Ripple, null));
});
MultiSelectItem.displayName = "MultiSelectItem";
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
var MultiSelectPanel = React.memo(React.forwardRef(function(props, ref) {
  var virtualScrollerRef = React.useRef(null);
  var filterInputRef = React.useRef(null);
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var ptm = props.ptm, cx = props.cx, sx = props.sx, isUnstyled = props.isUnstyled;
  var getPTOptions = function getPTOptions2(key, options) {
    return ptm(key, _objectSpread$1({
      hostName: props.hostName
    }, options));
  };
  var onEnter = function onEnter2() {
    props.onEnter(function() {
      if (virtualScrollerRef.current) {
        var selectedIndex = props.getSelectedOptionIndex();
        if (selectedIndex !== -1) {
          setTimeout(function() {
            return virtualScrollerRef.current.scrollToIndex(selectedIndex);
          }, 0);
        }
      }
    });
  };
  var onEntered = function onEntered2() {
    props.onEntered(function() {
      if (props.filter && props.filterInputAutoFocus && filterInputRef.current) {
        DomHandler.focus(filterInputRef.current, false);
      }
    });
  };
  var onFilterInputChange = function onFilterInputChange2(event) {
    if (virtualScrollerRef.current) {
      virtualScrollerRef.current.scrollToIndex(0);
    }
    props.onFilterInputChange && props.onFilterInputChange(event);
  };
  var isEmptyFilter = function isEmptyFilter2() {
    return !(props.visibleOptions && props.visibleOptions.length) && props.hasFilter;
  };
  var createHeader = function createHeader2() {
    return React.createElement(MultiSelectHeader, {
      hostName: props.hostName,
      id: props.id,
      filter: props.filter,
      filterRef: filterInputRef,
      filterValue: props.filterValue,
      filterTemplate: props.filterTemplate,
      visibleOptions: props.visibleOptions,
      isValidOption: props.isValidOption,
      getOptionValue: props.getOptionValue,
      updateModel: props.updateModel,
      onFilter: onFilterInputChange,
      filterPlaceholder: props.filterPlaceholder,
      onClose: props.onCloseClick,
      showSelectAll: props.showSelectAll,
      selectAll: props.isAllSelected(),
      selectAllLabel: props.selectAllLabel,
      onSelectAll: props.onSelectAll,
      template: props.panelHeaderTemplate,
      resetFilter: props.resetFilter,
      closeIcon: props.closeIcon,
      filterIcon: props.filterIcon,
      itemCheckboxIcon: props.itemCheckboxIcon,
      ptm,
      cx,
      isUnstyled,
      metaData: props.metaData
    });
  };
  var createFooter = function createFooter2() {
    if (props.panelFooterTemplate) {
      var content = ObjectUtils.getJSXElement(props.panelFooterTemplate, props, props.onOverlayHide);
      return React.createElement("div", {
        className: "p-multiselect-footer"
      }, content);
    }
    return null;
  };
  var changeFocusedItemOnHover = function changeFocusedItemOnHover2(event, index) {
    if (props.focusOnHover) {
      var _props$changeFocusedO;
      props === null || props === void 0 || (_props$changeFocusedO = props.changeFocusedOptionIndex) === null || _props$changeFocusedO === void 0 || _props$changeFocusedO.call(props, event, index);
    }
  };
  var createGroupChildren = function createGroupChildren2(optionGroup, style) {
    var groupChildren = props.getOptionGroupChildren(optionGroup);
    return groupChildren.map(function(option, j) {
      var optionLabel = props.getOptionLabel(option);
      var optionKey = j + "_" + props.getOptionRenderKey(option);
      var disabled = props.isOptionDisabled(option);
      var selected = props.isSelected(option);
      return React.createElement(MultiSelectItem, {
        hostName: props.hostName,
        index: j,
        key: optionKey,
        focusedOptionIndex: props.focusedOptionIndex,
        label: optionLabel,
        option,
        style,
        template: props.itemTemplate,
        selected,
        onClick: props.onOptionSelect,
        onMouseMove: changeFocusedItemOnHover,
        disabled,
        className: props.itemClassName,
        checkboxIcon: props.checkboxIcon,
        isUnstyled,
        ptm,
        cx
      });
    });
  };
  var createEmptyFilter = function createEmptyFilter2() {
    var emptyFilterMessage = ObjectUtils.getJSXElement(props.emptyFilterMessage, props) || localeOption("emptyFilterMessage");
    var emptyMessageProps = mergeProps({
      className: cx("emptyMessage")
    }, getPTOptions("emptyMessage"));
    return React.createElement("li", _extends({}, emptyMessageProps, {
      key: "emptyFilterMessage"
    }), emptyFilterMessage);
  };
  var createEmptyContent = function createEmptyContent2() {
    var emptyMessage = ObjectUtils.getJSXElement(props.emptyMessage, props) || localeOption("emptyMessage");
    var emptyMessageProps = mergeProps({
      className: cx("emptyMessage")
    }, getPTOptions("emptyMessage"));
    return React.createElement("li", _extends({}, emptyMessageProps, {
      key: "emptyMessage"
    }), emptyMessage);
  };
  var createItem = function createItem2(option, index) {
    var scrollerOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var style = {
      height: scrollerOptions.props ? scrollerOptions.props.itemSize : void 0
    };
    if (props.optionGroupLabel) {
      var groupContent = props.optionGroupTemplate ? ObjectUtils.getJSXElement(props.optionGroupTemplate, option, index) : props.getOptionGroupLabel(option);
      var groupChildrenContent = createGroupChildren(option, style);
      var key = index + "_" + props.getOptionGroupRenderKey(option);
      var itemGroupProps = mergeProps({
        className: cx("itemGroup"),
        style: sx("itemGroup", {
          scrollerOptions
        })
      }, getPTOptions("itemGroup"));
      return React.createElement(React.Fragment, {
        key
      }, React.createElement("li", _extends({}, itemGroupProps, {
        key
      }), groupContent), groupChildrenContent);
    }
    var optionLabel = props.getOptionLabel(option);
    var optionKey = index + "_" + props.getOptionRenderKey(option);
    var disabled = props.isOptionDisabled(option);
    var selected = props.isSelected(option);
    return React.createElement(MultiSelectItem, {
      hostName: props.hostName,
      key: optionKey,
      focusedOptionIndex: props.focusedOptionIndex,
      label: optionLabel,
      option,
      style,
      index,
      template: props.itemTemplate,
      selected,
      onClick: props.onOptionSelect,
      onMouseMove: changeFocusedItemOnHover,
      disabled,
      className: props.itemClassName,
      checkboxIcon: props.checkboxIcon,
      isUnstyled,
      ptm,
      cx
    });
  };
  var createItems = function createItems2() {
    if (ObjectUtils.isNotEmpty(props.visibleOptions)) {
      return props.visibleOptions.map(createItem);
    }
    return props.hasFilter ? createEmptyFilter() : createEmptyContent();
  };
  var createContent = function createContent2() {
    if (props.virtualScrollerOptions) {
      var virtualScrollerProps = _objectSpread$1(_objectSpread$1({}, props.virtualScrollerOptions), {
        style: _objectSpread$1(_objectSpread$1({}, props.virtualScrollerOptions.style), {
          height: props.scrollHeight
        }),
        className: classNames("p-multiselect-items-wrapper", props.virtualScrollerOptions.className),
        items: props.visibleOptions,
        autoSize: true,
        onLazyLoad: function onLazyLoad(event) {
          return props.virtualScrollerOptions.onLazyLoad(_objectSpread$1(_objectSpread$1({}, event), {
            filter: props.filterValue
          }));
        },
        itemTemplate: function itemTemplate(item2, options) {
          return item2 && createItem(item2, options.index, options);
        },
        contentTemplate: function contentTemplate(options) {
          var content = isEmptyFilter() ? createEmptyFilter() : options.children;
          var listProps2 = mergeProps({
            ref: options.contentRef,
            style: options.style,
            className: classNames(options.className, cx("list", {
              virtualScrollerProps: props.virtualScrollerOptions
            })),
            role: "listbox",
            "aria-multiselectable": true
          }, getPTOptions("list"));
          return React.createElement("ul", listProps2, content);
        }
      });
      return React.createElement(VirtualScroller, _extends({
        ref: virtualScrollerRef
      }, virtualScrollerProps, {
        pt: ptm("virtualScroller"),
        __parentMetadata: {
          parent: props.metaData
        }
      }));
    }
    var items = createItems();
    var wrapperProps = mergeProps({
      className: cx("wrapper"),
      style: {
        maxHeight: props.scrollHeight
      }
    }, getPTOptions("wrapper"));
    var listProps = mergeProps({
      className: cx("list"),
      role: "listbox",
      "aria-multiselectable": true
    }, getPTOptions("list"));
    return React.createElement("div", wrapperProps, React.createElement("ul", listProps, items));
  };
  var createElement2 = function createElement3() {
    var allowOptionSelect = props.allowOptionSelect();
    var header = createHeader();
    var content = createContent();
    var footer = createFooter();
    var panelProps = mergeProps({
      className: classNames(props.panelClassName, cx("panel", {
        panelProps: props,
        context,
        allowOptionSelect
      })),
      style: props.panelStyle,
      onClick: props.onClick
    }, getPTOptions("panel"));
    if (props.inline) {
      return React.createElement("div", _extends({
        ref
      }, panelProps), content, footer);
    }
    var transitionProps = mergeProps({
      classNames: cx("transition"),
      "in": props["in"],
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      appear: true,
      unmountOnExit: true,
      onEnter,
      onEntered,
      onExit: props.onExit,
      onExited: props.onExited
    }, getPTOptions("transition"));
    var firstHiddenElementProps = mergeProps({
      ref: props.firstHiddenFocusableElementOnOverlay,
      role: "presentation",
      "aria-hidden": "true",
      className: "p-hidden-accessible p-hidden-focusable",
      tabIndex: "0",
      onFocus: props.onFirstHiddenFocus,
      "data-p-hidden-accessible": true,
      "data-p-hidden-focusable": true
    }, ptm("hiddenFirstFocusableEl"));
    var lastHiddenElementProps = mergeProps({
      ref: props.lastHiddenFocusableElementOnOverlay,
      role: "presentation",
      "aria-hidden": "true",
      className: "p-hidden-accessible p-hidden-focusable",
      tabIndex: "0",
      onFocus: props.onLastHiddenFocus,
      "data-p-hidden-accessible": true,
      "data-p-hidden-focusable": true
    }, ptm("hiddenLastFocusableEl"));
    return React.createElement(CSSTransition, _extends({
      nodeRef: ref
    }, transitionProps), React.createElement("div", _extends({
      ref
    }, panelProps), React.createElement("span", firstHiddenElementProps), header, content, footer, React.createElement("span", lastHiddenElementProps)));
  };
  var element = createElement2();
  if (props.inline) {
    return element;
  }
  return React.createElement(Portal, {
    element,
    appendTo: props.appendTo
  });
}));
MultiSelectPanel.displayName = "MultiSelectPanel";
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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it["return"] != null)
        it["return"]();
    } finally {
      if (didErr)
        throw err;
    }
  } };
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
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var MultiSelect = React.memo(React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = MultiSelectBase.getProps(inProps, context);
  var _React$useState = React.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), focusedOptionIndex = _React$useState2[0], setFocusedOptionIndex = _React$useState2[1];
  var _React$useState3 = React.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), clicked = _React$useState4[0], setClicked = _React$useState4[1];
  var _React$useState5 = React.useState(""), _React$useState6 = _slicedToArray(_React$useState5, 2), filterState = _React$useState6[0], setFilterState = _React$useState6[1];
  var _React$useState7 = React.useState(-1), _React$useState8 = _slicedToArray(_React$useState7, 2), startRangeIndex = _React$useState8[0], setStartRangeIndex = _React$useState8[1];
  var _React$useState9 = React.useState(false), _React$useState10 = _slicedToArray(_React$useState9, 2), focusedState = _React$useState10[0], setFocusedState = _React$useState10[1];
  var _React$useState11 = React.useState(props.inline), _React$useState12 = _slicedToArray(_React$useState11, 2), overlayVisibleState = _React$useState12[0], setOverlayVisibleState = _React$useState12[1];
  var elementRef = React.useRef(null);
  var searchValue = React.useRef(null);
  var searchTimeout = React.useRef(null);
  var firstHiddenFocusableElementOnOverlay = React.useRef(null);
  var lastHiddenFocusableElementOnOverlay = React.useRef(null);
  var inputRef = React.useRef(props.inputRef);
  var labelRef = React.useRef(null);
  var overlayRef = React.useRef(null);
  var hasFilter = filterState && filterState.trim().length > 0;
  var empty = ObjectUtils.isEmpty(props.value);
  var equalityKey = props.optionValue ? null : props.dataKey;
  var metaData = {
    props,
    state: {
      filterState,
      focused: focusedState,
      overlayVisible: overlayVisibleState
    }
  };
  var _MultiSelectBase$setM = MultiSelectBase.setMetaData(metaData), ptm = _MultiSelectBase$setM.ptm, cx = _MultiSelectBase$setM.cx, sx = _MultiSelectBase$setM.sx, isUnstyled = _MultiSelectBase$setM.isUnstyled;
  useHandleStyle(MultiSelectBase.css.styles, isUnstyled, {
    name: "multiselect"
  });
  var _useOverlayListener = useOverlayListener({
    target: elementRef,
    overlay: overlayRef,
    listener: function listener(event, _ref) {
      var type = _ref.type, valid = _ref.valid;
      if (valid) {
        if (type === "outside") {
          !isClearClicked(event) && !isSelectAllClicked(event) && hide();
        } else {
          hide();
        }
      }
    },
    when: overlayVisibleState
  }), _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2), bindOverlayListener = _useOverlayListener2[0], unbindOverlayListener = _useOverlayListener2[1];
  var onFirstHiddenFocus = function onFirstHiddenFocus2(event) {
    var focusableEl = event.relatedTarget === inputRef.current ? DomHandler.getFirstFocusableElement(overlayRef.current, ':not([data-p-hidden-focusable="true"])') : inputRef.current;
    DomHandler.focus(focusableEl);
  };
  var onLastHiddenFocus = function onLastHiddenFocus2(event) {
    var focusableEl = event.relatedTarget === inputRef.current ? DomHandler.getLastFocusableElement(overlayRef.current, ':not([data-p-hidden-focusable="true"])') : inputRef.current;
    DomHandler.focus(focusableEl);
  };
  var onPanelClick = function onPanelClick2(event) {
    OverlayService.emit("overlay-click", {
      originalEvent: event,
      target: elementRef.current
    });
  };
  var allowOptionSelect = function allowOptionSelect2() {
    return !props.selectionLimit || !props.value || props.value && props.value.length < props.selectionLimit;
  };
  var findNextSelectedOptionIndex = function findNextSelectedOptionIndex2(index) {
    var matchedOptionIndex = hasSelectedOption() && index < visibleOptions.length - 1 ? visibleOptions.slice(index + 1).findIndex(function(option) {
      return isValidSelectedOption(option);
    }) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
  };
  var findPrevSelectedOptionIndex = function findPrevSelectedOptionIndex2(index) {
    var matchedOptionIndex = hasSelectedOption() && index > 0 ? ObjectUtils.findLastIndex(visibleOptions.slice(0, index), function(option) {
      return isValidSelectedOption(option);
    }) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
  };
  var findNearestSelectedOptionIndex = function findNearestSelectedOptionIndex2(index) {
    var firstCheckUp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var matchedOptionIndex = -1;
    if (hasSelectedOption()) {
      if (firstCheckUp) {
        matchedOptionIndex = findPrevSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? findNextSelectedOptionIndex(index) : matchedOptionIndex;
      } else {
        matchedOptionIndex = findNextSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? findPrevSelectedOptionIndex(index) : matchedOptionIndex;
      }
    }
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  };
  var onOptionSelectRange = function onOptionSelectRange2(event) {
    var start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
    var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
    start === -1 && (start = findNearestSelectedOptionIndex(end, true));
    end === -1 && (end = findNearestSelectedOptionIndex(start));
    if (start !== -1 && end !== -1) {
      var rangeStart = Math.min(start, end);
      var rangeEnd = Math.max(start, end);
      var value = visibleOptions.slice(rangeStart, rangeEnd + 1).filter(function(option) {
        return isValidOption(option);
      }).map(function(option) {
        return getOptionValue(option);
      });
      updateModel(event, value, value);
    }
  };
  var onOptionSelect = function onOptionSelect2(event, option) {
    var index = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
    if (props.disabled || isOptionDisabled(option)) {
      return;
    }
    var selected = isSelected(option);
    var value = null;
    if (selected) {
      value = props.value.filter(function(val) {
        return !ObjectUtils.equals(val, getOptionValue(option), equalityKey);
      });
    } else {
      value = [].concat(_toConsumableArray(props.value || []), [getOptionValue(option)]);
    }
    updateModel(event, value, option);
    index !== -1 && setFocusedOptionIndex(index);
  };
  var onClick = function onClick2(event) {
    if (!props.inline && !props.disabled && !props.loading && !isPanelClicked(event) && !isClearClicked(event)) {
      overlayVisibleState ? hide() : show();
      DomHandler.focus(inputRef.current);
      event.preventDefault();
    }
    setClicked(true);
  };
  var onArrowDownKey = function onArrowDownKey2(event) {
    if (!overlayVisibleState) {
      show();
      props.editable && changeFocusedOptionIndex(event, findSelectedOptionIndex());
    } else {
      var optionIndex = focusedOptionIndex !== -1 ? findNextOptionIndex(focusedOptionIndex) : clicked ? findFirstOptionIndex() : findFirstFocusedOptionIndex();
      if (event.shiftKey) {
        onOptionSelectRange(event, startRangeIndex, optionIndex);
      }
      changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
  };
  var onArrowUpKey = function onArrowUpKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (event.altKey && !pressedInInputText) {
      if (focusedOptionIndex !== -1) {
        onOptionSelect(event, visibleOptions[focusedOptionIndex]);
      }
      overlayVisibleState && hide();
      event.preventDefault();
    } else {
      var optionIndex = focusedOptionIndex !== -1 ? findPrevOptionIndex(focusedOptionIndex) : clicked ? findLastOptionIndex() : findLastFocusedOptionIndex();
      changeFocusedOptionIndex(event, optionIndex);
      !overlayVisibleState && show();
      event.preventDefault();
    }
  };
  var onEnterKey = function onEnterKey2(event) {
    if (!overlayVisibleState) {
      setFocusedOptionIndex(-1);
      onArrowDownKey(event);
    } else if (focusedOptionIndex !== -1) {
      if (event.shiftKey) {
        onOptionSelectRange(event, focusedOptionIndex);
      } else {
        onOptionSelect(event, visibleOptions[focusedOptionIndex]);
      }
    }
    event.preventDefault();
  };
  var onHomeKey = function onHomeKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var currentTarget = event.currentTarget;
    if (pressedInInputText) {
      var len = currentTarget.value.length;
      currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
      setFocusedOptionIndex(-1);
    } else {
      var metaKey = event.metaKey || event.ctrlKey;
      var optionIndex = findFirstOptionIndex();
      if (event.shiftKey && metaKey) {
        onOptionSelectRange(event, optionIndex, startRangeIndex);
      }
      changeFocusedOptionIndex(event, optionIndex);
      !overlayVisibleState && show();
    }
    event.preventDefault();
  };
  var onEndKey = function onEndKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var currentTarget = event.currentTarget;
    if (pressedInInputText) {
      var len = currentTarget.value.length;
      currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
      _readOnlyError("focusedOptionIndex");
    } else {
      var metaKey = event.metaKey || event.ctrlKey;
      var optionIndex = findLastOptionIndex();
      if (event.shiftKey && metaKey) {
        onOptionSelectRange(event, startRangeIndex, optionIndex);
      }
      changeFocusedOptionIndex(event, optionIndex);
      !overlayVisibleState && show();
    }
    event.preventDefault();
  };
  var onPageUpKey = function onPageUpKey2(event) {
    event.preventDefault();
  };
  var onPageDownKey = function onPageDownKey2(event) {
    event.preventDefault();
  };
  var onTabKey = function onTabKey2(event) {
    var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!pressedInInputText) {
      if (overlayVisibleState && hasFocusableElements()) {
        DomHandler.focus(event.shiftKey ? lastHiddenFocusableElementOnOverlay.current : firstHiddenFocusableElementOnOverlay.current);
        event.preventDefault();
      } else {
        if (focusedOptionIndex !== -1) {
          onOptionSelect(event, visibleOptions[focusedOptionIndex]);
        }
        overlayVisibleState && hide(filter);
      }
    }
  };
  var onShiftKey = function onShiftKey2() {
    setStartRangeIndex(focusedOptionIndex);
  };
  var onKeyDown = function onKeyDown2(event) {
    var metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowUp":
        if (props.inline) {
          break;
        }
        onArrowUpKey(event);
        break;
      case "ArrowDown":
        if (props.inline) {
          break;
        }
        onArrowDownKey(event);
        break;
      case "Space":
      case "NumpadEnter":
      case "Enter":
        if (props.inline) {
          break;
        }
        onEnterKey(event);
        break;
      case "Home":
        if (props.inline) {
          break;
        }
        onHomeKey(event);
        event.preventDefault();
        break;
      case "End":
        if (props.inline) {
          break;
        }
        onEndKey(event);
        event.preventDefault();
        break;
      case "PageDown":
        onPageDownKey(event);
        break;
      case "PageUp":
        onPageUpKey(event);
        break;
      case "Escape":
        if (props.inline) {
          break;
        }
        hide();
        break;
      case "Tab":
        onTabKey(event);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        onShiftKey();
        break;
      default:
        if (event.key === "a" && metaKey) {
          var value = visibleOptions.filter(function(option) {
            return isValidOption(option);
          }).map(function(option) {
            return getOptionValue(option);
          });
          updateModel(event, value, value);
          event.preventDefault();
          break;
        }
        if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          !overlayVisibleState && show();
          searchOptions(event);
          event.preventDefault();
        }
        break;
    }
    setClicked(false);
  };
  var onSelectAll = function onSelectAll2(event) {
    if (props.onSelectAll) {
      props.onSelectAll(event);
    } else {
      var value = null;
      if (event.checked) {
        value = [];
        if (visibleOptions) {
          var selectedOptions = visibleOptions.filter(function(option) {
            return isOptionDisabled(option) && isSelected(option);
          });
          value = selectedOptions.map(function(option) {
            return getOptionValue(option);
          });
        }
      } else if (visibleOptions) {
        var options = visibleOptions.filter(function(option) {
          return !isOptionDisabled(option) || isSelected(option);
        });
        if (props.optionGroupLabel) {
          value = [];
          options.forEach(function(optionGroup) {
            return value = [].concat(_toConsumableArray(value), _toConsumableArray(getOptionGroupChildren(optionGroup).filter(function(option) {
              return !isOptionDisabled(option);
            }).map(function(option) {
              return getOptionValue(option);
            })));
          });
        } else {
          value = options.map(function(option) {
            return getOptionValue(option);
          });
        }
      }
      if (props.selectionLimit && value && value.length) {
        value = value.slice(0, props.selectionLimit);
      }
      updateModel(event.originalEvent, value, value);
    }
  };
  var updateModel = function updateModel2(event, value, selectedOption) {
    if (props.onChange) {
      props.onChange({
        originalEvent: event,
        value,
        selectedOption,
        stopPropagation: function stopPropagation() {
          event === null || event === void 0 || event.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event === null || event === void 0 || event.preventDefault();
        },
        target: {
          name: props.name,
          id: props.id,
          value
        }
      });
      DomHandler.focus(inputRef.current);
    }
  };
  var onFilterInputChange = function onFilterInputChange2(event) {
    var filter2 = event.query;
    setFilterState(filter2);
    if (props.onFilter) {
      props.onFilter({
        originalEvent: event,
        filter: filter2
      });
    }
  };
  var resetFilter = function resetFilter2() {
    setFilterState("");
    props.onFilter && props.onFilter({
      filter: ""
    });
  };
  var scrollInView = function scrollInView2(event) {
    if (!overlayVisibleState) {
      return;
    }
    var focusedItem;
    if (event) {
      focusedItem = event.currentTarget;
    } else {
      focusedItem = DomHandler.findSingle(overlayRef.current, 'li[data-p-highlight="true"]');
    }
    if (focusedItem && focusedItem.scrollIntoView) {
      focusedItem.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  };
  var show = function show2() {
    setOverlayVisibleState(true);
    setFocusedOptionIndex(focusedOptionIndex !== -1 ? focusedOptionIndex : props.autoOptionFocus ? findFirstFocusedOptionIndex() : findSelectedOptionIndex());
    DomHandler.focus(inputRef.current);
  };
  var hide = function hide2() {
    setFocusedOptionIndex(-1);
    setOverlayVisibleState(false);
    setClicked(false);
  };
  var onOverlayEnter = function onOverlayEnter2(callback) {
    ZIndexUtils.set("overlay", overlayRef.current, context && context.autoZIndex || PrimeReact.autoZIndex, context && context.zIndex.overlay || PrimeReact.zIndex.overlay);
    DomHandler.addStyles(overlayRef.current, {
      position: "absolute",
      top: "0",
      left: "0"
    });
    alignOverlay();
    scrollInView();
    callback && callback();
  };
  var onOverlayEntered = function onOverlayEntered2(callback) {
    callback && callback();
    bindOverlayListener();
    props.onShow && props.onShow();
  };
  var onOverlayExit = function onOverlayExit2() {
    unbindOverlayListener();
  };
  var onOverlayExited = function onOverlayExited2() {
    if (props.filter && props.resetFilterOnHide) {
      resetFilter();
    }
    ZIndexUtils.clear(overlayRef.current);
    props.onHide && props.onHide();
  };
  var alignOverlay = function alignOverlay2() {
    DomHandler.alignOverlay(overlayRef.current, labelRef.current.parentElement, props.appendTo || context && context.appendTo || PrimeReact.appendTo);
  };
  var isClearClicked = function isClearClicked2(event) {
    return DomHandler.getAttribute(event.target, "data-pc-section") === "clearicon";
  };
  var isSelectAllClicked = function isSelectAllClicked2(event) {
    return DomHandler.getAttribute(event.target, "data-pc-section") === "headercheckboxcontainer";
  };
  var isPanelClicked = function isPanelClicked2(event) {
    return overlayRef.current && overlayRef.current.contains(event.target);
  };
  var onCloseClick = function onCloseClick2(event) {
    hide();
    DomHandler.focus(inputRef.current);
    event.preventDefault();
    event.stopPropagation();
  };
  var getSelectedOptionIndex = function getSelectedOptionIndex2() {
    if (props.value != null && props.options) {
      if (props.optionGroupLabel) {
        var groupIndex = 0;
        var optionIndex = props.options.findIndex(function(optionGroup, i) {
          return (groupIndex = i) && findOptionIndexInList(props.value, getOptionGroupChildren(optionGroup)) !== -1;
        });
        return optionIndex !== -1 ? {
          group: groupIndex,
          option: optionIndex
        } : -1;
      }
      return findOptionIndexInList(props.value, props.options);
    }
    return -1;
  };
  var findOptionIndexInList = function findOptionIndexInList2(value, list2) {
    return list2.findIndex(function(item2) {
      return value.some(function(val) {
        return ObjectUtils.equals(val, getOptionValue(item2), equalityKey);
      });
    });
  };
  var isEquals = function isEquals2(value1, value2) {
    return ObjectUtils.equals(value1, value2, equalityKey);
  };
  var isSelected = function isSelected2(option) {
    if (props.value) {
      var optionValue = getOptionValue(option);
      var isUsed = isOptionValueUsed(option);
      return props.value.some(function(val) {
        return ObjectUtils.equals(isUsed ? val : getOptionValue(val), optionValue, equalityKey);
      });
    }
    return false;
  };
  var getLabelByValue = function getLabelByValue2(val) {
    var option;
    if (props.options) {
      if (props.optionGroupLabel) {
        var _iterator = _createForOfIteratorHelper(props.options), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var optionGroup = _step.value;
            option = findOptionByValue(val, getOptionGroupChildren(optionGroup));
            if (option) {
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        option = findOptionByValue(val, props.options);
        if (ObjectUtils.isEmpty(option)) {
          option = findOptionByValue(val, props.value);
        }
      }
    }
    return option ? getOptionLabel(option) : null;
  };
  var findOptionByValue = function findOptionByValue2(val, list2) {
    return list2.find(function(option) {
      return ObjectUtils.equals(getOptionValue(option), val, equalityKey);
    });
  };
  var onFocus = function onFocus2(event) {
    setFocusedState(true);
    props.onFocus && props.onFocus(event);
  };
  var onBlur = function onBlur2(event) {
    setFocusedState(false);
    props.onBlur && props.onBlur(event);
  };
  var isAllSelected = function isAllSelected2() {
    if (props.onSelectAll) {
      return props.selectAll;
    }
    if (ObjectUtils.isEmpty(visibleOptions)) {
      return false;
    }
    var options = visibleOptions.filter(function(option) {
      return !isOptionDisabled(option);
    });
    if (props.optionGroupLabel) {
      var areAllSelected = true;
      var _iterator2 = _createForOfIteratorHelper(options), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var optionGroup = _step2.value;
          var visibleOptionsGroupChildren = getOptionGroupChildren(optionGroup).filter(function(option) {
            return !isOptionDisabled(option);
          });
          if (visibleOptionsGroupChildren.some(function(option) {
            return !isSelected(option);
          }) === true) {
            areAllSelected = false;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return areAllSelected;
    }
    return !options.some(function(option) {
      return !isSelected(option);
    });
  };
  var getOptionLabel = function getOptionLabel2(option) {
    return props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : option && option.label !== void 0 ? option.label : option;
  };
  var getOptionValue = function getOptionValue2(option) {
    if (props.useOptionAsValue) {
      return option;
    }
    if (props.optionValue) {
      var data = ObjectUtils.resolveFieldData(option, props.optionValue);
      return data !== null ? data : option;
    }
    return option && option.value !== void 0 ? option.value : option;
  };
  var getOptionRenderKey = function getOptionRenderKey2(option) {
    return props.dataKey ? ObjectUtils.resolveFieldData(option, props.dataKey) : getOptionLabel(option);
  };
  var getOptionGroupRenderKey = function getOptionGroupRenderKey2(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
  };
  var getOptionGroupLabel = function getOptionGroupLabel2(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
  };
  var getOptionGroupChildren = function getOptionGroupChildren2(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren);
  };
  var isOptionDisabled = function isOptionDisabled2(option) {
    var _option$disabled;
    if (!allowOptionSelect() && !isSelected(option)) {
      return true;
    }
    var optionDisabled = props.optionDisabled;
    if (optionDisabled) {
      return ObjectUtils.isFunction(optionDisabled) ? optionDisabled(option) : ObjectUtils.resolveFieldData(option, optionDisabled);
    }
    return option && ((_option$disabled = option.disabled) !== null && _option$disabled !== void 0 ? _option$disabled : false);
  };
  var isOptionValueUsed = function isOptionValueUsed2(option) {
    return !props.useOptionAsValue && props.optionValue || option && option.value !== void 0;
  };
  var isOptionGroup = function isOptionGroup2(option) {
    return props.optionGroupLabel && option.optionGroup && option.group;
  };
  var hasSelectedOption = function hasSelectedOption2() {
    return ObjectUtils.isNotEmpty(props.value);
  };
  var hasFocusableElements = function hasFocusableElements2() {
    return DomHandler.getFocusableElements(overlayRef.current, ':not([data-p-hidden-focusable="true"])').length > 0;
  };
  var isOptionMatched = function isOptionMatched2(option) {
    var _getOptionLabel;
    return isValidOption(option) && ((_getOptionLabel = getOptionLabel(option)) === null || _getOptionLabel === void 0 ? void 0 : _getOptionLabel.toLocaleLowerCase(props.filterLocale).startsWith(searchValue.current.toLocaleLowerCase(props.filterLocale)));
  };
  var isValidOption = function isValidOption2(option) {
    return ObjectUtils.isNotEmpty(option) && !(isOptionDisabled(option) || isOptionGroup(option));
  };
  var isValidSelectedOption = function isValidSelectedOption2(option) {
    return isValidOption(option) && isSelected(option);
  };
  var findSelectedOptionIndex = function findSelectedOptionIndex2() {
    if (hasSelectedOption()) {
      var _loop = function _loop2() {
        var value = props.value[index];
        var matchedOptionIndex = visibleOptions.findIndex(function(option) {
          return isValidSelectedOption(option) && isEquals(value, getOptionValue(option));
        });
        if (matchedOptionIndex > -1) {
          return {
            v: matchedOptionIndex
          };
        }
      }, _ret;
      for (var index = props.value.length - 1; index >= 0; index--) {
        _ret = _loop();
        if (_ret)
          return _ret.v;
      }
    }
    return -1;
  };
  var findFirstFocusedOptionIndex = function findFirstFocusedOptionIndex2() {
    var selectedIndex = findSelectedOptionIndex();
    return selectedIndex < 0 ? findFirstOptionIndex() : selectedIndex;
  };
  var findLastFocusedOptionIndex = function findLastFocusedOptionIndex2() {
    var selectedIndex = findSelectedOptionIndex();
    return selectedIndex < 0 ? findLastOptionIndex() : selectedIndex;
  };
  var findFirstOptionIndex = function findFirstOptionIndex2() {
    return visibleOptions.findIndex(function(option) {
      return isValidOption(option);
    });
  };
  var findLastOptionIndex = function findLastOptionIndex2() {
    return ObjectUtils.findLastIndex(visibleOptions, function(option) {
      return isValidOption(option);
    });
  };
  var findNextOptionIndex = function findNextOptionIndex2(index) {
    var matchedOptionIndex = index < visibleOptions.length - 1 ? visibleOptions.slice(index + 1).findIndex(function(option) {
      return isValidOption(option);
    }) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  };
  var findPrevOptionIndex = function findPrevOptionIndex2(index) {
    var matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(visibleOptions.slice(0, index), function(option) {
      return isValidOption(option);
    }) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  };
  var searchOptions = function searchOptions2(event) {
    searchValue.current = (searchValue.current || "") + event.key;
    var optionIndex = -1;
    if (ObjectUtils.isNotEmpty(searchValue.current)) {
      if (focusedOptionIndex !== -1) {
        optionIndex = visibleOptions.slice(focusedOptionIndex).findIndex(function(option) {
          return isOptionMatched(option);
        });
        optionIndex = optionIndex === -1 ? visibleOptions.slice(0, focusedOptionIndex).findIndex(function(option) {
          return isOptionMatched(option);
        }) : optionIndex + focusedOptionIndex;
      } else {
        optionIndex = visibleOptions.findIndex(function(option) {
          return isOptionMatched(option);
        });
      }
      if (optionIndex === -1 && focusedOptionIndex === -1) {
        optionIndex = findFirstFocusedOptionIndex();
      }
      if (optionIndex !== -1) {
        changeFocusedOptionIndex(event, optionIndex);
      }
    }
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    searchTimeout.current = setTimeout(function() {
      searchValue.current = "";
      searchTimeout.current = null;
    }, 500);
  };
  var changeFocusedOptionIndex = function changeFocusedOptionIndex2(event, index) {
    if (focusedOptionIndex !== index) {
      setFocusedOptionIndex(index);
      scrollInView(event);
      if (props.selectOnFocus) {
        onOptionSelect(event, visibleOptions[index], false);
      }
    }
  };
  var removeChip = function removeChip2(event, item2) {
    event.stopPropagation();
    var value = props.value.filter(function(val) {
      return !ObjectUtils.equals(val, item2, equalityKey);
    });
    if (props.onRemove) {
      props.onRemove({
        originalEvent: event,
        value
      });
    }
    updateModel(event, value, item2);
  };
  var getSelectedItemsLabel = function getSelectedItemsLabel2() {
    var pattern = /{(.*?)}/;
    var selectedItemsLabel = props.selectedItemsLabel || localeOption("selectionMessage");
    if (pattern.test(selectedItemsLabel)) {
      return selectedItemsLabel.replace(selectedItemsLabel.match(pattern)[0], props.value.length + "");
    }
    return selectedItemsLabel;
  };
  var getLabel = function getLabel2() {
    var label3;
    if (!empty && !props.fixedPlaceholder) {
      if (ObjectUtils.isNotEmpty(props.maxSelectedLabels) && props.value.length > props.maxSelectedLabels) {
        return getSelectedItemsLabel();
      }
      if (ObjectUtils.isArray(props.value)) {
        return props.value.reduce(function(acc, value, index) {
          return acc + (index !== 0 ? ", " : "") + getLabelByValue(value);
        }, "");
      }
      return "";
    }
    return label3;
  };
  var getLabelContent = function getLabelContent2() {
    if (props.selectedItemTemplate) {
      if (!empty) {
        if (ObjectUtils.isNotEmpty(props.maxSelectedLabels) && props.value.length > props.maxSelectedLabels) {
          return getSelectedItemsLabel();
        }
        return props.value.map(function(val, index) {
          var item2 = ObjectUtils.getJSXElement(props.selectedItemTemplate, val);
          return React.createElement(React.Fragment, {
            key: index
          }, item2);
        });
      }
      return ObjectUtils.getJSXElement(props.selectedItemTemplate);
    }
    if (props.display === "chip" && !empty) {
      var value = props.value.slice(0, props.maxSelectedLabels || props.value.length);
      return value.map(function(val, i) {
        var context2 = {
          context: {
            value: val,
            index: i
          }
        };
        var label3 = getLabelByValue(val);
        var labelKey = label3 + "_" + i;
        var iconProps = mergeProps({
          className: cx("removeTokenIcon"),
          onClick: function onClick2(e) {
            return removeChip(e, val);
          }
        }, ptm("removeTokenIcon", context2));
        var icon = !props.disabled && (props.removeIcon ? IconUtils.getJSXIcon(props.removeIcon, _objectSpread({}, iconProps), {
          props
        }) : React.createElement(TimesCircleIcon, iconProps));
        var tokenProps = mergeProps({
          className: cx("token")
        }, ptm("token", context2));
        var tokenLabelProps = mergeProps({
          className: cx("tokenLabel")
        }, ptm("tokenLabel", context2));
        return React.createElement("div", _extends({}, tokenProps, {
          key: labelKey
        }), React.createElement("span", tokenLabelProps, label3), icon);
      });
    }
    return getLabel();
  };
  var getVisibleOptions = function getVisibleOptions2() {
    if (hasFilter) {
      var filterValue = filterState.trim().toLocaleLowerCase(props.filterLocale);
      var searchFields = props.filterBy ? props.filterBy.split(",") : [props.optionLabel || "label"];
      if (props.optionGroupLabel) {
        var filteredGroups = [];
        var _iterator3 = _createForOfIteratorHelper(props.options), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var optgroup = _step3.value;
            var filteredSubOptions = FilterService.filter(getOptionGroupChildren(optgroup), searchFields, filterValue, props.filterMatchMode, props.filterLocale);
            if (filteredSubOptions && filteredSubOptions.length) {
              filteredGroups.push(_objectSpread(_objectSpread({}, optgroup), _defineProperty({}, props.optionGroupChildren, filteredSubOptions)));
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return filteredGroups;
      }
      return FilterService.filter(props.options, searchFields, filterValue, props.filterMatchMode, props.filterLocale);
    }
    return props.options;
  };
  React.useImperativeHandle(ref, function() {
    return {
      props,
      show,
      hide,
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
  useMountEffect(function() {
    alignOverlay();
  });
  React.useEffect(function() {
    ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  React.useEffect(function() {
    if (props.overlayVisible === true) {
      show();
    } else if (props.overlayVisible === false) {
      hide();
    }
  }, [props.overlayVisible]);
  useUpdateEffect(function() {
    if (overlayVisibleState && filterState && hasFilter) {
      alignOverlay();
    }
  }, [overlayVisibleState, filterState, hasFilter]);
  useUnmountEffect(function() {
    ZIndexUtils.clear(overlayRef.current);
  });
  var createClearIcon = function createClearIcon2() {
    var clearIconProps = mergeProps({
      className: cx("clearIcon"),
      onClick: function onClick2(e) {
        return updateModel(e, [], []);
      }
    }, ptm("clearIcon"));
    var icon = props.clearIcon || React.createElement(TimesIcon, clearIconProps);
    var clearIcon2 = IconUtils.getJSXIcon(icon, _objectSpread({}, clearIconProps), {
      props
    });
    if (!empty && props.showClear && !props.disabled) {
      return clearIcon2;
    }
    return null;
  };
  var createLabel = function createLabel2() {
    var content = getLabelContent();
    var labelContainerProps = mergeProps({
      ref: labelRef,
      className: cx("labelContainer")
    }, ptm("labelContainer"));
    var labelProps = mergeProps({
      className: cx("label", {
        empty
      })
    }, ptm("label"));
    return React.createElement("div", labelContainerProps, React.createElement("div", labelProps, content || props.placeholder || props.emptyMessage || "empty"));
  };
  var getInputValue = function getInputValue2() {
    var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (Array.isArray(value)) {
      return value.map(function(val) {
        return getLabelByValue(val);
      }).join(", ");
    }
    return value;
  };
  var visibleOptions = getVisibleOptions();
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = MultiSelectBase.getOtherProps(props);
  var ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
  var triggerIconProps = mergeProps({
    className: cx("triggerIcon")
  }, ptm("triggerIcon"));
  var triggerProps = mergeProps({
    className: cx("trigger")
  }, ptm("trigger"));
  var loadingIcon = props.loadingIcon ? IconUtils.getJSXIcon(props.loadingIcon, _objectSpread({}, triggerIconProps), {
    props
  }) : React.createElement(SpinnerIcon, _extends({
    spin: true
  }, triggerIconProps));
  var dropdownIcon = props.dropdownIcon ? IconUtils.getJSXIcon(props.dropdownIcon, _objectSpread({}, triggerIconProps), {
    props
  }) : React.createElement(ChevronDownIcon, triggerIconProps);
  var triggerIcon = React.createElement("div", triggerProps, props.loading ? loadingIcon : dropdownIcon);
  var label2 = !props.inline && createLabel();
  var clearIcon = !props.inline && createClearIcon();
  var rootProps = mergeProps(_objectSpread(_objectSpread({
    ref: elementRef,
    id: props.id,
    style: _objectSpread(_objectSpread({}, props.style), sx("root")),
    className: classNames(props.className, cx("root", {
      focusedState,
      context,
      overlayVisibleState
    }))
  }, otherProps), {}, {
    onClick
  }), MultiSelectBase.getOtherProps(props), ptm("root"));
  var hiddenInputWrapperProps = mergeProps({
    className: "p-hidden-accessible",
    "data-p-hidden-accessible": true
  }, ptm("hiddenInputWrapper"));
  var inputProps = mergeProps(_objectSpread({
    ref: inputRef,
    id: props.inputId,
    name: props.name,
    type: "text",
    onFocus,
    onBlur,
    onKeyDown,
    role: "combobox",
    "aria-expanded": overlayVisibleState,
    disabled: props.disabled,
    tabIndex: !props.disabled ? props.tabIndex : -1,
    value: getInputValue(props.value)
  }, ariaProps), ptm("input"));
  return React.createElement(React.Fragment, null, React.createElement("div", rootProps, React.createElement("div", hiddenInputWrapperProps, React.createElement("input", _extends({}, inputProps, {
    readOnly: true
  }))), !props.inline && React.createElement(React.Fragment, null, label2, clearIcon, triggerIcon), React.createElement(MultiSelectPanel, _extends({
    hostName: "MultiSelect",
    ref: overlayRef,
    visibleOptions
  }, props, {
    onClick: onPanelClick,
    onOverlayHide: hide,
    filterValue: filterState,
    focusedOptionIndex,
    onFirstHiddenFocus,
    onLastHiddenFocus,
    firstHiddenFocusableElementOnOverlay,
    lastHiddenFocusableElementOnOverlay,
    setFocusedOptionIndex,
    hasFilter,
    isValidOption,
    getOptionValue,
    updateModel,
    onFilterInputChange,
    resetFilter,
    onCloseClick,
    onSelectAll,
    getOptionLabel,
    getOptionRenderKey,
    isOptionDisabled,
    getOptionGroupChildren,
    getOptionGroupLabel,
    getOptionGroupRenderKey,
    isSelected,
    getSelectedOptionIndex,
    isAllSelected,
    onOptionSelect,
    allowOptionSelect,
    "in": overlayVisibleState,
    onEnter: onOverlayEnter,
    onEntered: onOverlayEntered,
    onExit: onOverlayExit,
    onExited: onOverlayExited,
    ptm,
    cx,
    sx,
    isUnstyled,
    metaData,
    changeFocusedOptionIndex
  }))), hasTooltip && React.createElement(Tooltip, _extends({
    target: elementRef,
    content: props.tooltip,
    pt: ptm("tooltip")
  }, props.tooltipOptions)));
}));
MultiSelect.displayName = "MultiSelect";
export {
  MultiSelect
};
//# sourceMappingURL=primereact_multiselect.js.map
