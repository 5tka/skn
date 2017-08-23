! function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: !1
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = !0, module.exports
    }
    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.p = "", __webpack_require__(0)
}([function(module, exports, __webpack_require__) {
    (function($) {
        "use strict";
        var likely = (__webpack_require__(2), __webpack_require__(3), __webpack_require__(4), __webpack_require__(5)),
            header = __webpack_require__(6),
            howWork = __webpack_require__(7),
            reviews = __webpack_require__(8),
            ctaStripe = __webpack_require__(9),
            projectSlider = __webpack_require__(10),
            projectDescr = __webpack_require__(11),
            serviceDescr = __webpack_require__(12),
            popup = __webpack_require__(13),
            allDescr = __webpack_require__(14),
            contacts = __webpack_require__(15),
            allMain = __webpack_require__(16);
        $(document).ready(function() {
            likely.initiate(), header.init(), howWork.init(), reviews.init(), ctaStripe.init(), projectSlider.init(), projectDescr.init(), serviceDescr.init(), popup.init(), allDescr.init(), allMain.init(), "contacts" == window.cpage && contacts.init()
        })
    }).call(exports, __webpack_require__(1))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
     * jQuery JavaScript Library v3.2.0
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2017-03-16T21:26Z
     */
    ! function(global, factory) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = global.document ? factory(global, !0) : function(w) {
            if (!w.document) throw new Error("jQuery requires a window with a document");
            return factory(w)
        } : factory(global)
    }("undefined" != typeof window ? window : this, function(window, noGlobal) {
        "use strict";

        function DOMEval(code, doc) {
            doc = doc || document;
            var script = doc.createElement("script");
            script.text = code, doc.head.appendChild(script).parentNode.removeChild(script)
        }

        function isArrayLike(obj) {
            var length = !!obj && "length" in obj && obj.length,
                type = jQuery.type(obj);
            return "function" !== type && !jQuery.isWindow(obj) && ("array" === type || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj)
        }

        function nodeName(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
        }

        function winnow(elements, qualifier, not) {
            return jQuery.isFunction(qualifier) ? jQuery.grep(elements, function(elem, i) {
                return !!qualifier.call(elem, i, elem) !== not
            }) : qualifier.nodeType ? jQuery.grep(elements, function(elem) {
                return elem === qualifier !== not
            }) : "string" != typeof qualifier ? jQuery.grep(elements, function(elem) {
                return indexOf.call(qualifier, elem) > -1 !== not
            }) : risSimple.test(qualifier) ? jQuery.filter(qualifier, elements, not) : (qualifier = jQuery.filter(qualifier, elements), jQuery.grep(elements, function(elem) {
                return indexOf.call(qualifier, elem) > -1 !== not && 1 === elem.nodeType
            }))
        }

        function sibling(cur, dir) {
            for (;
                (cur = cur[dir]) && 1 !== cur.nodeType;);
            return cur
        }

        function createOptions(options) {
            var object = {};
            return jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
                object[flag] = !0
            }), object
        }

        function Identity(v) {
            return v
        }

        function Thrower(ex) {
            throw ex
        }

        function adoptValue(value, resolve, reject, noValue) {
            var method;
            try {
                value && jQuery.isFunction(method = value.promise) ? method.call(value).done(resolve).fail(reject) : value && jQuery.isFunction(method = value.then) ? method.call(value, resolve, reject) : resolve.apply(void 0, [value].slice(noValue))
            } catch (value) {
                reject.apply(void 0, [value])
            }
        }

        function completed() {
            document.removeEventListener("DOMContentLoaded", completed), window.removeEventListener("load", completed), jQuery.ready()
        }

        function Data() {
            this.expando = jQuery.expando + Data.uid++
        }

        function getData(data) {
            return "true" === data || "false" !== data && ("null" === data ? null : data === +data + "" ? +data : rbrace.test(data) ? JSON.parse(data) : data)
        }

        function dataAttr(elem, key, data) {
            var name;
            if (void 0 === data && 1 === elem.nodeType)
                if (name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase(), data = elem.getAttribute(name), "string" == typeof data) {
                    try {
                        data = getData(data)
                    } catch (e) {}
                    dataUser.set(elem, key, data)
                } else data = void 0;
            return data
        }

        function adjustCSS(elem, prop, valueParts, tween) {
            var adjusted, scale = 1,
                maxIterations = 20,
                currentValue = tween ? function() {
                    return tween.cur()
                } : function() {
                    return jQuery.css(elem, prop, "")
                },
                initial = currentValue(),
                unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
                initialInUnit = (jQuery.cssNumber[prop] || "px" !== unit && +initial) && rcssNum.exec(jQuery.css(elem, prop));
            if (initialInUnit && initialInUnit[3] !== unit) {
                unit = unit || initialInUnit[3], valueParts = valueParts || [], initialInUnit = +initial || 1;
                do scale = scale || ".5", initialInUnit /= scale, jQuery.style(elem, prop, initialInUnit + unit); while (scale !== (scale = currentValue() / initial) && 1 !== scale && --maxIterations)
            }
            return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), adjusted
        }

        function getDefaultDisplay(elem) {
            var temp, doc = elem.ownerDocument,
                nodeName = elem.nodeName,
                display = defaultDisplayMap[nodeName];
            return display ? display : (temp = doc.body.appendChild(doc.createElement(nodeName)), display = jQuery.css(temp, "display"), temp.parentNode.removeChild(temp), "none" === display && (display = "block"), defaultDisplayMap[nodeName] = display, display)
        }

        function showHide(elements, show) {
            for (var display, elem, values = [], index = 0, length = elements.length; index < length; index++) elem = elements[index], elem.style && (display = elem.style.display, show ? ("none" === display && (values[index] = dataPriv.get(elem, "display") || null, values[index] || (elem.style.display = "")), "" === elem.style.display && isHiddenWithinTree(elem) && (values[index] = getDefaultDisplay(elem))) : "none" !== display && (values[index] = "none", dataPriv.set(elem, "display", display)));
            for (index = 0; index < length; index++) null != values[index] && (elements[index].style.display = values[index]);
            return elements
        }

        function getAll(context, tag) {
            var ret;
            return ret = "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : "undefined" != typeof context.querySelectorAll ? context.querySelectorAll(tag || "*") : [], void 0 === tag || tag && nodeName(context, tag) ? jQuery.merge([context], ret) : ret
        }

        function setGlobalEval(elems, refElements) {
            for (var i = 0, l = elems.length; i < l; i++) dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"))
        }

        function buildFragment(elems, context, scripts, selection, ignored) {
            for (var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length; i < l; i++)
                if (elem = elems[i], elem || 0 === elem)
                    if ("object" === jQuery.type(elem)) jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
                    else if (rhtml.test(elem)) {
                for (tmp = tmp || fragment.appendChild(context.createElement("div")), tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(), wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2], j = wrap[0]; j--;) tmp = tmp.lastChild;
                jQuery.merge(nodes, tmp.childNodes), tmp = fragment.firstChild, tmp.textContent = ""
            } else nodes.push(context.createTextNode(elem));
            for (fragment.textContent = "", i = 0; elem = nodes[i++];)
                if (selection && jQuery.inArray(elem, selection) > -1) ignored && ignored.push(elem);
                else if (contains = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(fragment.appendChild(elem), "script"), contains && setGlobalEval(tmp), scripts)
                for (j = 0; elem = tmp[j++];) rscriptType.test(elem.type || "") && scripts.push(elem);
            return fragment
        }

        function returnTrue() {
            return !0
        }

        function returnFalse() {
            return !1
        }

        function safeActiveElement() {
            try {
                return document.activeElement
            } catch (err) {}
        }

        function on(elem, types, selector, data, fn, one) {
            var origFn, type;
            if ("object" == typeof types) {
                "string" != typeof selector && (data = data || selector, selector = void 0);
                for (type in types) on(elem, type, selector, data, types[type], one);
                return elem
            }
            if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data, data = void 0) : (fn = data, data = selector, selector = void 0)), fn === !1) fn = returnFalse;
            else if (!fn) return elem;
            return 1 === one && (origFn = fn, fn = function(event) {
                return jQuery().off(event), origFn.apply(this, arguments)
            }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), elem.each(function() {
                jQuery.event.add(this, types, fn, data, selector)
            })
        }

        function manipulationTarget(elem, content) {
            return nodeName(elem, "table") && nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? jQuery(">tbody", elem)[0] || elem : elem
        }

        function disableScript(elem) {
            return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem
        }

        function restoreScript(elem) {
            var match = rscriptTypeMasked.exec(elem.type);
            return match ? elem.type = match[1] : elem.removeAttribute("type"), elem
        }

        function cloneCopyEvent(src, dest) {
            var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
            if (1 === dest.nodeType) {
                if (dataPriv.hasData(src) && (pdataOld = dataPriv.access(src), pdataCur = dataPriv.set(dest, pdataOld), events = pdataOld.events)) {
                    delete pdataCur.handle, pdataCur.events = {};
                    for (type in events)
                        for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i])
                }
                dataUser.hasData(src) && (udataOld = dataUser.access(src), udataCur = jQuery.extend({}, udataOld), dataUser.set(dest, udataCur))
            }
        }

        function fixInput(src, dest) {
            var nodeName = dest.nodeName.toLowerCase();
            "input" === nodeName && rcheckableType.test(src.type) ? dest.checked = src.checked : "input" !== nodeName && "textarea" !== nodeName || (dest.defaultValue = src.defaultValue)
        }

        function domManip(collection, args, callback, ignored) {
            args = concat.apply([], args);
            var fragment, first, scripts, hasScripts, node, doc, i = 0,
                l = collection.length,
                iNoClone = l - 1,
                value = args[0],
                isFunction = jQuery.isFunction(value);
            if (isFunction || l > 1 && "string" == typeof value && !support.checkClone && rchecked.test(value)) return collection.each(function(index) {
                var self = collection.eq(index);
                isFunction && (args[0] = value.call(this, index, self.html())), domManip(self, args, callback, ignored)
            });
            if (l && (fragment = buildFragment(args, collection[0].ownerDocument, !1, collection, ignored), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first || ignored)) {
                for (scripts = jQuery.map(getAll(fragment, "script"), disableScript), hasScripts = scripts.length; i < l; i++) node = fragment, i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), callback.call(collection[i], node, i);
                if (hasScripts)
                    for (doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript), i = 0; i < hasScripts; i++) node = scripts[i], rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node) && (node.src ? jQuery._evalUrl && jQuery._evalUrl(node.src) : DOMEval(node.textContent.replace(rcleanScript, ""), doc))
            }
            return collection
        }

        function remove(elem, selector, keepData) {
            for (var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0; null != (node = nodes[i]); i++) keepData || 1 !== node.nodeType || jQuery.cleanData(getAll(node)), node.parentNode && (keepData && jQuery.contains(node.ownerDocument, node) && setGlobalEval(getAll(node, "script")), node.parentNode.removeChild(node));
            return elem
        }

        function curCSS(elem, name, computed) {
            var width, minWidth, maxWidth, ret, style = elem.style;
            return computed = computed || getStyles(elem), computed && (ret = computed.getPropertyValue(name) || computed[name], "" !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), !support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width, minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth)), void 0 !== ret ? ret + "" : ret
        }

        function addGetHookIf(conditionFn, hookFn) {
            return {
                get: function() {
                    return conditionFn() ? void delete this.get : (this.get = hookFn).apply(this, arguments)
                }
            }
        }

        function vendorPropName(name) {
            if (name in emptyStyle) return name;
            for (var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length; i--;)
                if (name = cssPrefixes[i] + capName, name in emptyStyle) return name
        }

        function finalPropName(name) {
            var ret = jQuery.cssProps[name];
            return ret || (ret = jQuery.cssProps[name] = vendorPropName(name) || name), ret
        }

        function setPositiveNumber(elem, value, subtract) {
            var matches = rcssNum.exec(value);
            return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value
        }

        function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
            var i, val = 0;
            for (i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0; i < 4; i += 2) "margin" === extra && (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)), isBorderBox ? ("content" === extra && (val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), "margin" !== extra && (val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), "padding" !== extra && (val += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)));
            return val
        }

        function getWidthOrHeight(elem, name, extra) {
            var valueIsBorderBox, styles = getStyles(elem),
                val = curCSS(elem, name, styles),
                isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", !1, styles);
            return rnumnonpx.test(val) ? val : (valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]), val = parseFloat(val) || 0, val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px")
        }

        function Tween(elem, options, prop, end, easing) {
            return new Tween.prototype.init(elem, options, prop, end, easing)
        }

        function schedule() {
            inProgress && (document.hidden === !1 && window.requestAnimationFrame ? window.requestAnimationFrame(schedule) : window.setTimeout(schedule, jQuery.fx.interval), jQuery.fx.tick())
        }

        function createFxNow() {
            return window.setTimeout(function() {
                fxNow = void 0
            }), fxNow = jQuery.now()
        }

        function genFx(type, includeWidth) {
            var which, i = 0,
                attrs = {
                    height: type
                };
            for (includeWidth = includeWidth ? 1 : 0; i < 4; i += 2 - includeWidth) which = cssExpand[i], attrs["margin" + which] = attrs["padding" + which] = type;
            return includeWidth && (attrs.opacity = attrs.width = type), attrs
        }

        function createTween(value, prop, animation) {
            for (var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length; index < length; index++)
                if (tween = collection[index].call(animation, prop, value)) return tween
        }

        function defaultPrefilter(elem, props, opts) {
            var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props,
                anim = this,
                orig = {},
                style = elem.style,
                hidden = elem.nodeType && isHiddenWithinTree(elem),
                dataShow = dataPriv.get(elem, "fxshow");
            opts.queue || (hooks = jQuery._queueHooks(elem, "fx"), null == hooks.unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() {
                hooks.unqueued || oldfire()
            }), hooks.unqueued++, anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire()
                })
            }));
            for (prop in props)
                if (value = props[prop], rfxtypes.test(value)) {
                    if (delete props[prop], toggle = toggle || "toggle" === value, value === (hidden ? "hide" : "show")) {
                        if ("show" !== value || !dataShow || void 0 === dataShow[prop]) continue;
                        hidden = !0
                    }
                    orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
                }
            if (propTween = !jQuery.isEmptyObject(props), propTween || !jQuery.isEmptyObject(orig)) {
                isBox && 1 === elem.nodeType && (opts.overflow = [style.overflow, style.overflowX, style.overflowY], restoreDisplay = dataShow && dataShow.display, null == restoreDisplay && (restoreDisplay = dataPriv.get(elem, "display")), display = jQuery.css(elem, "display"), "none" === display && (restoreDisplay ? display = restoreDisplay : (showHide([elem], !0), restoreDisplay = elem.style.display || restoreDisplay, display = jQuery.css(elem, "display"), showHide([elem]))), ("inline" === display || "inline-block" === display && null != restoreDisplay) && "none" === jQuery.css(elem, "float") && (propTween || (anim.done(function() {
                    style.display = restoreDisplay
                }), null == restoreDisplay && (display = style.display, restoreDisplay = "none" === display ? "" : display)), style.display = "inline-block")), opts.overflow && (style.overflow = "hidden", anim.always(function() {
                    style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2]
                })), propTween = !1;
                for (prop in orig) propTween || (dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = dataPriv.access(elem, "fxshow", {
                    display: restoreDisplay
                }), toggle && (dataShow.hidden = !hidden), hidden && showHide([elem], !0), anim.done(function() {
                    hidden || showHide([elem]), dataPriv.remove(elem, "fxshow");
                    for (prop in orig) jQuery.style(elem, prop, orig[prop])
                })), propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim), prop in dataShow || (dataShow[prop] = propTween.start, hidden && (propTween.end = propTween.start, propTween.start = 0))
            }
        }

        function propFilter(props, specialEasing) {
            var index, name, easing, value, hooks;
            for (index in props)
                if (name = jQuery.camelCase(index), easing = specialEasing[name], value = props[index], Array.isArray(value) && (easing = value[1], value = props[index] = value[0]), index !== name && (props[name] = value, delete props[index]), hooks = jQuery.cssHooks[name], hooks && "expand" in hooks) {
                    value = hooks.expand(value), delete props[name];
                    for (index in value) index in props || (props[index] = value[index], specialEasing[index] = easing)
                } else specialEasing[name] = easing
        }

        function Animation(elem, properties, options) {
            var result, stopped, index = 0,
                length = Animation.prefilters.length,
                deferred = jQuery.Deferred().always(function() {
                    delete tick.elem
                }),
                tick = function() {
                    if (stopped) return !1;
                    for (var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length; index < length; index++) animation.tweens[index].run(percent);
                    return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (length || deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation]), !1)
                },
                animation = deferred.promise({
                    elem: elem,
                    props: jQuery.extend({}, properties),
                    opts: jQuery.extend(!0, {
                        specialEasing: {},
                        easing: jQuery.easing._default
                    }, options),
                    originalProperties: properties,
                    originalOptions: options,
                    startTime: fxNow || createFxNow(),
                    duration: options.duration,
                    tweens: [],
                    createTween: function(prop, end) {
                        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                        return animation.tweens.push(tween), tween
                    },
                    stop: function(gotoEnd) {
                        var index = 0,
                            length = gotoEnd ? animation.tweens.length : 0;
                        if (stopped) return this;
                        for (stopped = !0; index < length; index++) animation.tweens[index].run(1);
                        return gotoEnd ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, gotoEnd])) : deferred.rejectWith(elem, [animation, gotoEnd]), this
                    }
                }),
                props = animation.props;
            for (propFilter(props, animation.opts.specialEasing); index < length; index++)
                if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts)) return jQuery.isFunction(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result)), result;
            return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always), jQuery.fx.timer(jQuery.extend(tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            })), animation
        }

        function stripAndCollapse(value) {
            var tokens = value.match(rnothtmlwhite) || [];
            return tokens.join(" ")
        }

        function getClass(elem) {
            return elem.getAttribute && elem.getAttribute("class") || ""
        }

        function buildParams(prefix, obj, traditional, add) {
            var name;
            if (Array.isArray(obj)) jQuery.each(obj, function(i, v) {
                traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" == typeof v && null != v ? i : "") + "]", v, traditional, add)
            });
            else if (traditional || "object" !== jQuery.type(obj)) add(prefix, obj);
            else
                for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
        }

        function addToPrefiltersOrTransports(structure) {
            return function(dataTypeExpression, func) {
                "string" != typeof dataTypeExpression && (func = dataTypeExpression, dataTypeExpression = "*");
                var dataType, i = 0,
                    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                if (jQuery.isFunction(func))
                    for (; dataType = dataTypes[i++];) "+" === dataType[0] ? (dataType = dataType.slice(1) || "*", (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func)
            }
        }

        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            function inspect(dataType) {
                var selected;
                return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                    var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                    return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), !1)
                }), selected
            }
            var inspected = {},
                seekingTransport = structure === transports;
            return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
        }

        function ajaxExtend(target, src) {
            var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
            for (key in src) void 0 !== src[key] && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
            return deep && jQuery.extend(!0, target, deep), target
        }

        function ajaxHandleResponses(s, jqXHR, responses) {
            for (var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
                "*" === dataTypes[0];) dataTypes.shift(), void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
            if (ct)
                for (type in contents)
                    if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break
                    }
            if (dataTypes[0] in responses) finalDataType = dataTypes[0];
            else {
                for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                        finalDataType = type;
                        break
                    }
                    firstDataType || (firstDataType = type)
                }
                finalDataType = finalDataType || firstDataType
            }
            if (finalDataType) return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType]
        }

        function ajaxConvert(s, response, jqXHR, isSuccess) {
            var conv2, current, conv, tmp, prev, converters = {},
                dataTypes = s.dataTypes.slice();
            if (dataTypes[1])
                for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
            for (current = dataTypes.shift(); current;)
                if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = dataTypes.shift())
                    if ("*" === current) current = prev;
                    else if ("*" !== prev && prev !== current) {
                if (conv = converters[prev + " " + current] || converters["* " + current], !conv)
                    for (conv2 in converters)
                        if (tmp = conv2.split(" "), tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                            conv === !0 ? conv = converters[conv2] : converters[conv2] !== !0 && (current = tmp[0], dataTypes.unshift(tmp[1]));
                            break
                        }
                if (conv !== !0)
                    if (conv && s.throws) response = conv(response);
                    else try {
                        response = conv(response)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: conv ? e : "No conversion from " + prev + " to " + current
                        }
                    }
            }
            return {
                state: "success",
                data: response
            }
        }
        var arr = [],
            document = window.document,
            getProto = Object.getPrototypeOf,
            slice = arr.slice,
            concat = arr.concat,
            push = arr.push,
            indexOf = arr.indexOf,
            class2type = {},
            toString = class2type.toString,
            hasOwn = class2type.hasOwnProperty,
            fnToString = hasOwn.toString,
            ObjectFunctionString = fnToString.call(Object),
            support = {},
            version = "3.2.0",
            jQuery = function(selector, context) {
                return new jQuery.fn.init(selector, context)
            },
            rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            rmsPrefix = /^-ms-/,
            rdashAlpha = /-([a-z])/g,
            fcamelCase = function(all, letter) {
                return letter.toUpperCase()
            };
        jQuery.fn = jQuery.prototype = {
            jquery: version,
            constructor: jQuery,
            length: 0,
            toArray: function() {
                return slice.call(this)
            },
            get: function(num) {
                return null == num ? slice.call(this) : num < 0 ? this[num + this.length] : this[num]
            },
            pushStack: function(elems) {
                var ret = jQuery.merge(this.constructor(), elems);
                return ret.prevObject = this, ret
            },
            each: function(callback) {
                return jQuery.each(this, callback)
            },
            map: function(callback) {
                return this.pushStack(jQuery.map(this, function(elem, i) {
                    return callback.call(elem, i, elem)
                }))
            },
            slice: function() {
                return this.pushStack(slice.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(i) {
                var len = this.length,
                    j = +i + (i < 0 ? len : 0);
                return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: push,
            sort: arr.sort,
            splice: arr.splice
        }, jQuery.extend = jQuery.fn.extend = function() {
            var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = !1;
            for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, i++), "object" == typeof target || jQuery.isFunction(target) || (target = {}), i === length && (target = this, i--); i < length; i++)
                if (null != (options = arguments[i]))
                    for (name in options) src = target[name], copy = options[name], target !== copy && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, clone = src && Array.isArray(src) ? src : []) : clone = src && jQuery.isPlainObject(src) ? src : {}, target[name] = jQuery.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
            return target
        }, jQuery.extend({
            expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(msg) {
                throw new Error(msg)
            },
            noop: function() {},
            isFunction: function(obj) {
                return "function" === jQuery.type(obj)
            },
            isWindow: function(obj) {
                return null != obj && obj === obj.window
            },
            isNumeric: function(obj) {
                var type = jQuery.type(obj);
                return ("number" === type || "string" === type) && !isNaN(obj - parseFloat(obj))
            },
            isPlainObject: function(obj) {
                var proto, Ctor;
                return !(!obj || "[object Object]" !== toString.call(obj)) && (!(proto = getProto(obj)) || (Ctor = hasOwn.call(proto, "constructor") && proto.constructor, "function" == typeof Ctor && fnToString.call(Ctor) === ObjectFunctionString))
            },
            isEmptyObject: function(obj) {
                var name;
                for (name in obj) return !1;
                return !0
            },
            type: function(obj) {
                return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj
            },
            globalEval: function(code) {
                DOMEval(code)
            },
            camelCase: function(string) {
                return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
            },
            each: function(obj, callback) {
                var length, i = 0;
                if (isArrayLike(obj))
                    for (length = obj.length; i < length && callback.call(obj[i], i, obj[i]) !== !1; i++);
                else
                    for (i in obj)
                        if (callback.call(obj[i], i, obj[i]) === !1) break;
                return obj
            },
            trim: function(text) {
                return null == text ? "" : (text + "").replace(rtrim, "")
            },
            makeArray: function(arr, results) {
                var ret = results || [];
                return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr) : push.call(ret, arr)), ret
            },
            inArray: function(elem, arr, i) {
                return null == arr ? -1 : indexOf.call(arr, elem, i)
            },
            merge: function(first, second) {
                for (var len = +second.length, j = 0, i = first.length; j < len; j++) first[i++] = second[j];
                return first.length = i, first
            },
            grep: function(elems, callback, invert) {
                for (var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert; i < length; i++) callbackInverse = !callback(elems[i], i), callbackInverse !== callbackExpect && matches.push(elems[i]);
                return matches
            },
            map: function(elems, callback, arg) {
                var length, value, i = 0,
                    ret = [];
                if (isArrayLike(elems))
                    for (length = elems.length; i < length; i++) value = callback(elems[i], i, arg), null != value && ret.push(value);
                else
                    for (i in elems) value = callback(elems[i], i, arg), null != value && ret.push(value);
                return concat.apply([], ret)
            },
            guid: 1,
            proxy: function(fn, context) {
                var tmp, args, proxy;
                if ("string" == typeof context && (tmp = fn[context], context = fn, fn = tmp), jQuery.isFunction(fn)) return args = slice.call(arguments, 2), proxy = function() {
                    return fn.apply(context || this, args.concat(slice.call(arguments)))
                }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy
            },
            now: Date.now,
            support: support
        }), "function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]), jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase()
        });
        var Sizzle =
            /*!
             * Sizzle CSS Selector Engine v2.3.3
             * https://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2016-08-08
             */
            function(window) {
                function Sizzle(selector, context, results, seed) {
                    var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument,
                        nodeType = context ? context.nodeType : 9;
                    if (results = results || [], "string" != typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType) return results;
                    if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, documentIsHTML)) {
                        if (11 !== nodeType && (match = rquickExpr.exec(selector)))
                            if (m = match[1]) {
                                if (9 === nodeType) {
                                    if (!(elem = context.getElementById(m))) return results;
                                    if (elem.id === m) return results.push(elem), results
                                } else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), results
                            } else {
                                if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), results;
                                if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), results
                            }
                        if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                            if (1 !== nodeType) newContext = context, newSelector = selector;
                            else if ("object" !== context.nodeName.toLowerCase()) {
                                for ((nid = context.getAttribute("id")) ? nid = nid.replace(rcssescape, fcssescape) : context.setAttribute("id", nid = expando), groups = tokenize(selector), i = groups.length; i--;) groups[i] = "#" + nid + " " + toSelector(groups[i]);
                                newSelector = groups.join(","), newContext = rsibling.test(selector) && testContext(context.parentNode) || context
                            }
                            if (newSelector) try {
                                return push.apply(results, newContext.querySelectorAll(newSelector)), results
                            } catch (qsaError) {} finally {
                                nid === expando && context.removeAttribute("id")
                            }
                        }
                    }
                    return select(selector.replace(rtrim, "$1"), context, results, seed)
                }

                function createCache() {
                    function cache(key, value) {
                        return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], cache[key + " "] = value
                    }
                    var keys = [];
                    return cache
                }

                function markFunction(fn) {
                    return fn[expando] = !0, fn
                }

                function assert(fn) {
                    var el = document.createElement("fieldset");
                    try {
                        return !!fn(el)
                    } catch (e) {
                        return !1
                    } finally {
                        el.parentNode && el.parentNode.removeChild(el), el = null
                    }
                }

                function addHandle(attrs, handler) {
                    for (var arr = attrs.split("|"), i = arr.length; i--;) Expr.attrHandle[arr[i]] = handler
                }

                function siblingCheck(a, b) {
                    var cur = b && a,
                        diff = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                    if (diff) return diff;
                    if (cur)
                        for (; cur = cur.nextSibling;)
                            if (cur === b) return -1;
                    return a ? 1 : -1
                }

                function createInputPseudo(type) {
                    return function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return "input" === name && elem.type === type
                    }
                }

                function createButtonPseudo(type) {
                    return function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return ("input" === name || "button" === name) && elem.type === type
                    }
                }

                function createDisabledPseudo(disabled) {
                    return function(elem) {
                        return "form" in elem ? elem.parentNode && elem.disabled === !1 ? "label" in elem ? "label" in elem.parentNode ? elem.parentNode.disabled === disabled : elem.disabled === disabled : elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled : elem.disabled === disabled : "label" in elem && elem.disabled === disabled
                    }
                }

                function createPositionalPseudo(fn) {
                    return markFunction(function(argument) {
                        return argument = +argument, markFunction(function(seed, matches) {
                            for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--;) seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j]))
                        })
                    })
                }

                function testContext(context) {
                    return context && "undefined" != typeof context.getElementsByTagName && context
                }

                function setFilters() {}

                function toSelector(tokens) {
                    for (var i = 0, len = tokens.length, selector = ""; i < len; i++) selector += tokens[i].value;
                    return selector
                }

                function addCombinator(matcher, combinator, base) {
                    var dir = combinator.dir,
                        skip = combinator.next,
                        key = skip || dir,
                        checkNonElements = base && "parentNode" === key,
                        doneName = done++;
                    return combinator.first ? function(elem, context, xml) {
                        for (; elem = elem[dir];)
                            if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml);
                        return !1
                    } : function(elem, context, xml) {
                        var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                        if (xml) {
                            for (; elem = elem[dir];)
                                if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) return !0
                        } else
                            for (; elem = elem[dir];)
                                if (1 === elem.nodeType || checkNonElements)
                                    if (outerCache = elem[expando] || (elem[expando] = {}), uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), skip && skip === elem.nodeName.toLowerCase()) elem = elem[dir] || elem;
                                    else {
                                        if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2];
                                        if (uniqueCache[key] = newCache, newCache[2] = matcher(elem, context, xml)) return !0
                                    } return !1
                    }
                }

                function elementMatcher(matchers) {
                    return matchers.length > 1 ? function(elem, context, xml) {
                        for (var i = matchers.length; i--;)
                            if (!matchers[i](elem, context, xml)) return !1;
                        return !0
                    } : matchers[0]
                }

                function multipleContexts(selector, contexts, results) {
                    for (var i = 0, len = contexts.length; i < len; i++) Sizzle(selector, contexts[i], results);
                    return results
                }

                function condense(unmatched, map, filter, context, xml) {
                    for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; i < len; i++)(elem = unmatched[i]) && (filter && !filter(elem, context, xml) || (newUnmatched.push(elem), mapped && map.push(i)));
                    return newUnmatched
                }

                function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                    return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function(seed, results, context, xml) {
                        var temp, i, elem, preMap = [],
                            postMap = [],
                            preexisting = results.length,
                            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                            matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml),
                            matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                        if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter)
                            for (temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), i = temp.length; i--;)(elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
                        if (seed) {
                            if (postFinder || preFilter) {
                                if (postFinder) {
                                    for (temp = [], i = matcherOut.length; i--;)(elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                                    postFinder(null, matcherOut = [], temp, xml)
                                }
                                for (i = matcherOut.length; i--;)(elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1 && (seed[temp] = !(results[temp] = elem))
                            }
                        } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut)
                    })
                }

                function matcherFromTokens(tokens) {
                    for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                            return elem === checkContext
                        }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) {
                            return indexOf(checkContext, elem) > -1
                        }, implicitRelative, !0), matchers = [function(elem, context, xml) {
                            var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                            return checkContext = null, ret
                        }]; i < len; i++)
                        if (matcher = Expr.relative[tokens[i].type]) matchers = [addCombinator(elementMatcher(matchers), matcher)];
                        else {
                            if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), matcher[expando]) {
                                for (j = ++i; j < len && !Expr.relative[tokens[j].type]; j++);
                                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                    value: " " === tokens[i - 2].type ? "*" : ""
                                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens))
                            }
                            matchers.push(matcher)
                        }
                    return elementMatcher(matchers)
                }

                function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                    var bySet = setMatchers.length > 0,
                        byElement = elementMatchers.length > 0,
                        superMatcher = function(seed, context, xml, results, outermost) {
                            var elem, j, matcher, matchedCount = 0,
                                i = "0",
                                unmatched = seed && [],
                                setMatched = [],
                                contextBackup = outermostContext,
                                elems = seed || byElement && Expr.find.TAG("*", outermost),
                                dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1,
                                len = elems.length;
                            for (outermost && (outermostContext = context === document || context || outermost); i !== len && null != (elem = elems[i]); i++) {
                                if (byElement && elem) {
                                    for (j = 0, context || elem.ownerDocument === document || (setDocument(elem), xml = !documentIsHTML); matcher = elementMatchers[j++];)
                                        if (matcher(elem, context || document, xml)) {
                                            results.push(elem);
                                            break
                                        }
                                    outermost && (dirruns = dirrunsUnique)
                                }
                                bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem))
                            }
                            if (matchedCount += i, bySet && i !== matchedCount) {
                                for (j = 0; matcher = setMatchers[j++];) matcher(unmatched, setMatched, context, xml);
                                if (seed) {
                                    if (matchedCount > 0)
                                        for (; i--;) unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                                    setMatched = condense(setMatched)
                                }
                                push.apply(results, setMatched), outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle.uniqueSort(results)
                            }
                            return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched
                        };
                    return bySet ? markFunction(superMatcher) : superMatcher
                }
                var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date,
                    preferredDoc = window.document,
                    dirruns = 0,
                    done = 0,
                    classCache = createCache(),
                    tokenCache = createCache(),
                    compilerCache = createCache(),
                    sortOrder = function(a, b) {
                        return a === b && (hasDuplicate = !0), 0
                    },
                    hasOwn = {}.hasOwnProperty,
                    arr = [],
                    pop = arr.pop,
                    push_native = arr.push,
                    push = arr.push,
                    slice = arr.slice,
                    indexOf = function(list, elem) {
                        for (var i = 0, len = list.length; i < len; i++)
                            if (list[i] === elem) return i;
                        return -1
                    },
                    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    whitespace = "[\\x20\\t\\r\\n\\f]",
                    identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
                    pseudos = ":(" + identifier + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)",
                    rwhitespace = new RegExp(whitespace + "+", "g"),
                    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
                    rpseudo = new RegExp(pseudos),
                    ridentifier = new RegExp("^" + identifier + "$"),
                    matchExpr = {
                        ID: new RegExp("^#(" + identifier + ")"),
                        CLASS: new RegExp("^\\.(" + identifier + ")"),
                        TAG: new RegExp("^(" + identifier + "|[*])"),
                        ATTR: new RegExp("^" + attributes),
                        PSEUDO: new RegExp("^" + pseudos),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + booleans + ")$", "i"),
                        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                    },
                    rinputs = /^(?:input|select|textarea|button)$/i,
                    rheader = /^h\d$/i,
                    rnative = /^[^{]+\{\s*\[native \w/,
                    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    rsibling = /[+~]/,
                    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                    funescape = function(_, escaped, escapedWhitespace) {
                        var high = "0x" + escaped - 65536;
                        return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320)
                    },
                    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    fcssescape = function(ch, asCodePoint) {
                        return asCodePoint ? "\0" === ch ? "�" : ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " " : "\\" + ch
                    },
                    unloadHandler = function() {
                        setDocument()
                    },
                    disabledAncestor = addCombinator(function(elem) {
                        return elem.disabled === !0 && ("form" in elem || "label" in elem)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), arr[preferredDoc.childNodes.length].nodeType
                } catch (e) {
                    push = {
                        apply: arr.length ? function(target, els) {
                            push_native.apply(target, slice.call(els))
                        } : function(target, els) {
                            for (var j = target.length, i = 0; target[j++] = els[i++];);
                            target.length = j - 1
                        }
                    }
                }
                support = Sizzle.support = {}, isXML = Sizzle.isXML = function(elem) {
                    var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                    return !!documentElement && "HTML" !== documentElement.nodeName
                }, setDocument = Sizzle.setDocument = function(node) {
                    var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
                    return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, docElem = document.documentElement, documentIsHTML = !isXML(document), preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow && (subWindow.addEventListener ? subWindow.addEventListener("unload", unloadHandler, !1) : subWindow.attachEvent && subWindow.attachEvent("onunload", unloadHandler)), support.attributes = assert(function(el) {
                        return el.className = "i", !el.getAttribute("className")
                    }), support.getElementsByTagName = assert(function(el) {
                        return el.appendChild(document.createComment("")), !el.getElementsByTagName("*").length
                    }), support.getElementsByClassName = rnative.test(document.getElementsByClassName), support.getById = assert(function(el) {
                        return docElem.appendChild(el).id = expando, !document.getElementsByName || !document.getElementsByName(expando).length
                    }), support.getById ? (Expr.filter.ID = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            return elem.getAttribute("id") === attrId
                        }
                    }, Expr.find.ID = function(id, context) {
                        if ("undefined" != typeof context.getElementById && documentIsHTML) {
                            var elem = context.getElementById(id);
                            return elem ? [elem] : []
                        }
                    }) : (Expr.filter.ID = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            var node = "undefined" != typeof elem.getAttributeNode && elem.getAttributeNode("id");
                            return node && node.value === attrId
                        }
                    }, Expr.find.ID = function(id, context) {
                        if ("undefined" != typeof context.getElementById && documentIsHTML) {
                            var node, i, elems, elem = context.getElementById(id);
                            if (elem) {
                                if (node = elem.getAttributeNode("id"), node && node.value === id) return [elem];
                                for (elems = context.getElementsByName(id), i = 0; elem = elems[i++];)
                                    if (node = elem.getAttributeNode("id"), node && node.value === id) return [elem]
                            }
                            return []
                        }
                    }), Expr.find.TAG = support.getElementsByTagName ? function(tag, context) {
                        return "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag) : support.qsa ? context.querySelectorAll(tag) : void 0
                    } : function(tag, context) {
                        var elem, tmp = [],
                            i = 0,
                            results = context.getElementsByTagName(tag);
                        if ("*" === tag) {
                            for (; elem = results[i++];) 1 === elem.nodeType && tmp.push(elem);
                            return tmp
                        }
                        return results
                    }, Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
                        if ("undefined" != typeof context.getElementsByClassName && documentIsHTML) return context.getElementsByClassName(className)
                    }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(document.querySelectorAll)) && (assert(function(el) {
                        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>", el.querySelectorAll("[msallowcapture^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"), el.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), el.querySelectorAll("[id~=" + expando + "-]").length || rbuggyQSA.push("~="), el.querySelectorAll(":checked").length || rbuggyQSA.push(":checked"), el.querySelectorAll("a#" + expando + "+*").length || rbuggyQSA.push(".#.+[+~]")
                    }), assert(function(el) {
                        el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden"), el.appendChild(input).setAttribute("name", "D"), el.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="), 2 !== el.querySelectorAll(":enabled").length && rbuggyQSA.push(":enabled", ":disabled"), docElem.appendChild(el).disabled = !0, 2 !== el.querySelectorAll(":disabled").length && rbuggyQSA.push(":enabled", ":disabled"), el.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:")
                    })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(el) {
                        support.disconnectedMatch = matches.call(el, "*"), matches.call(el, "[s!='']:x"), rbuggyMatches.push("!=", pseudos)
                    }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), hasCompare = rnative.test(docElem.compareDocumentPosition), contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                        var adown = 9 === a.nodeType ? a.documentElement : a,
                            bup = b && b.parentNode;
                        return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)))
                    } : function(a, b) {
                        if (b)
                            for (; b = b.parentNode;)
                                if (b === a) return !0;
                        return !1
                    }, sortOrder = hasCompare ? function(a, b) {
                        if (a === b) return hasDuplicate = !0, 0;
                        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return compare ? compare : (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1)
                    } : function(a, b) {
                        if (a === b) return hasDuplicate = !0, 0;
                        var cur, i = 0,
                            aup = a.parentNode,
                            bup = b.parentNode,
                            ap = [a],
                            bp = [b];
                        if (!aup || !bup) return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                        if (aup === bup) return siblingCheck(a, b);
                        for (cur = a; cur = cur.parentNode;) ap.unshift(cur);
                        for (cur = b; cur = cur.parentNode;) bp.unshift(cur);
                        for (; ap[i] === bp[i];) i++;
                        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
                    }, document) : document
                }, Sizzle.matches = function(expr, elements) {
                    return Sizzle(expr, null, null, elements)
                }, Sizzle.matchesSelector = function(elem, expr) {
                    if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                        var ret = matches.call(elem, expr);
                        if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret
                    } catch (e) {}
                    return Sizzle(expr, document, null, [elem]).length > 0
                }, Sizzle.contains = function(context, elem) {
                    return (context.ownerDocument || context) !== document && setDocument(context), contains(context, elem)
                }, Sizzle.attr = function(elem, name) {
                    (elem.ownerDocument || elem) !== document && setDocument(elem);
                    var fn = Expr.attrHandle[name.toLowerCase()],
                        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                    return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
                }, Sizzle.escape = function(sel) {
                    return (sel + "").replace(rcssescape, fcssescape)
                }, Sizzle.error = function(msg) {
                    throw new Error("Syntax error, unrecognized expression: " + msg)
                }, Sizzle.uniqueSort = function(results) {
                    var elem, duplicates = [],
                        j = 0,
                        i = 0;
                    if (hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(sortOrder), hasDuplicate) {
                        for (; elem = results[i++];) elem === results[i] && (j = duplicates.push(i));
                        for (; j--;) results.splice(duplicates[j], 1)
                    }
                    return sortInput = null, results
                }, getText = Sizzle.getText = function(elem) {
                    var node, ret = "",
                        i = 0,
                        nodeType = elem.nodeType;
                    if (nodeType) {
                        if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                            if ("string" == typeof elem.textContent) return elem.textContent;
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem)
                        } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue
                    } else
                        for (; node = elem[i++];) ret += getText(node);
                    return ret
                }, Expr = Sizzle.selectors = {
                    cacheLength: 50,
                    createPseudo: markFunction,
                    match: matchExpr,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(match) {
                            return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape), "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4)
                        },
                        CHILD: function(match) {
                            return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match
                        },
                        PSEUDO: function(match) {
                            var excess, unquoted = !match[6] && match[2];
                            return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(nodeNameSelector) {
                            var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                            return "*" === nodeNameSelector ? function() {
                                return !0
                            } : function(elem) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                            }
                        },
                        CLASS: function(className) {
                            var pattern = classCache[className + " "];
                            return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                                return pattern.test("string" == typeof elem.className && elem.className || "undefined" != typeof elem.getAttribute && elem.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(name, operator, check) {
                            return function(elem) {
                                var result = Sizzle.attr(elem, name);
                                return null == result ? "!=" === operator : !operator || (result += "", "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && result.indexOf(check) > -1 : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : "|=" === operator && (result === check || result.slice(0, check.length + 1) === check + "-"))
                            }
                        },
                        CHILD: function(type, what, argument, first, last) {
                            var simple = "nth" !== type.slice(0, 3),
                                forward = "last" !== type.slice(-4),
                                ofType = "of-type" === what;
                            return 1 === first && 0 === last ? function(elem) {
                                return !!elem.parentNode
                            } : function(elem, context, xml) {
                                var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                                    parent = elem.parentNode,
                                    name = ofType && elem.nodeName.toLowerCase(),
                                    useCache = !xml && !ofType,
                                    diff = !1;
                                if (parent) {
                                    if (simple) {
                                        for (; dir;) {
                                            for (node = elem; node = node[dir];)
                                                if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return !1;
                                            start = dir = "only" === type && !start && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                                        for (node = parent, outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex && cache[2], node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();)
                                            if (1 === node.nodeType && ++diff && node === elem) {
                                                uniqueCache[type] = [dirruns, nodeIndex, diff];
                                                break
                                            }
                                    } else if (useCache && (node = elem, outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex), diff === !1)
                                        for (;
                                            (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || !++diff || (useCache && (outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), uniqueCache[type] = [dirruns, diff]), node !== elem)););
                                    return diff -= last, diff === first || diff % first === 0 && diff / first >= 0
                                }
                            }
                        },
                        PSEUDO: function(pseudo, argument) {
                            var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                            return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                for (var idx, matched = fn(seed, argument), i = matched.length; i--;) idx = indexOf(seed, matched[i]), seed[idx] = !(matches[idx] = matched[i])
                            }) : function(elem) {
                                return fn(elem, 0, args)
                            }) : fn
                        }
                    },
                    pseudos: {
                        not: markFunction(function(selector) {
                            var input = [],
                                results = [],
                                matcher = compile(selector.replace(rtrim, "$1"));
                            return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                                for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--;)(elem = unmatched[i]) && (seed[i] = !(matches[i] = elem))
                            }) : function(elem, context, xml) {
                                return input[0] = elem, matcher(input, null, xml, results), input[0] = null, !results.pop()
                            }
                        }),
                        has: markFunction(function(selector) {
                            return function(elem) {
                                return Sizzle(selector, elem).length > 0
                            }
                        }),
                        contains: markFunction(function(text) {
                            return text = text.replace(runescape, funescape),
                                function(elem) {
                                    return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
                                }
                        }),
                        lang: markFunction(function(lang) {
                            return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(runescape, funescape).toLowerCase(),
                                function(elem) {
                                    var elemLang;
                                    do
                                        if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return elemLang = elemLang.toLowerCase(), elemLang === lang || 0 === elemLang.indexOf(lang + "-"); while ((elem = elem.parentNode) && 1 === elem.nodeType);
                                    return !1
                                }
                        }),
                        target: function(elem) {
                            var hash = window.location && window.location.hash;
                            return hash && hash.slice(1) === elem.id
                        },
                        root: function(elem) {
                            return elem === docElem
                        },
                        focus: function(elem) {
                            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
                        },
                        enabled: createDisabledPseudo(!1),
                        disabled: createDisabledPseudo(!0),
                        checked: function(elem) {
                            var nodeName = elem.nodeName.toLowerCase();
                            return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected
                        },
                        selected: function(elem) {
                            return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === !0
                        },
                        empty: function(elem) {
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                                if (elem.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(elem) {
                            return !Expr.pseudos.empty(elem)
                        },
                        header: function(elem) {
                            return rheader.test(elem.nodeName)
                        },
                        input: function(elem) {
                            return rinputs.test(elem.nodeName)
                        },
                        button: function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return "input" === name && "button" === elem.type || "button" === name
                        },
                        text: function(elem) {
                            var attr;
                            return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase())
                        },
                        first: createPositionalPseudo(function() {
                            return [0]
                        }),
                        last: createPositionalPseudo(function(matchIndexes, length) {
                            return [length - 1]
                        }),
                        eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                            return [argument < 0 ? argument + length : argument]
                        }),
                        even: createPositionalPseudo(function(matchIndexes, length) {
                            for (var i = 0; i < length; i += 2) matchIndexes.push(i);
                            return matchIndexes
                        }),
                        odd: createPositionalPseudo(function(matchIndexes, length) {
                            for (var i = 1; i < length; i += 2) matchIndexes.push(i);
                            return matchIndexes
                        }),
                        lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                            for (var i = argument < 0 ? argument + length : argument; --i >= 0;) matchIndexes.push(i);
                            return matchIndexes
                        }),
                        gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                            for (var i = argument < 0 ? argument + length : argument; ++i < length;) matchIndexes.push(i);
                            return matchIndexes
                        })
                    }
                }, Expr.pseudos.nth = Expr.pseudos.eq;
                for (i in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) Expr.pseudos[i] = createInputPseudo(i);
                for (i in {
                        submit: !0,
                        reset: !0
                    }) Expr.pseudos[i] = createButtonPseudo(i);
                return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                    var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                    if (cached) return parseOnly ? 0 : cached.slice(0);
                    for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar;) {
                        matched && !(match = rcomma.exec(soFar)) || (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), tokens.push({
                            value: matched,
                            type: match[0].replace(rtrim, " ")
                        }), soFar = soFar.slice(matched.length));
                        for (type in Expr.filter) !(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)) || (matched = match.shift(), tokens.push({
                            value: matched,
                            type: type,
                            matches: match
                        }), soFar = soFar.slice(matched.length));
                        if (!matched) break
                    }
                    return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
                }, compile = Sizzle.compile = function(selector, match) {
                    var i, setMatchers = [],
                        elementMatchers = [],
                        cached = compilerCache[selector + " "];
                    if (!cached) {
                        for (match || (match = tokenize(selector)), i = match.length; i--;) cached = matcherFromTokens(match[i]), cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
                        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)), cached.selector = selector
                    }
                    return cached
                }, select = Sizzle.select = function(selector, context, results, seed) {
                    var i, tokens, token, type, find, compiled = "function" == typeof selector && selector,
                        match = !seed && tokenize(selector = compiled.selector || selector);
                    if (results = results || [], 1 === match.length) {
                        if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                            if (context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0], !context) return results;
                            compiled && (context = context.parentNode), selector = selector.slice(tokens.shift().value.length)
                        }
                        for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && (token = tokens[i], !Expr.relative[type = token.type]);)
                            if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                                if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens), !selector) return push.apply(results, seed), results;
                                break
                            }
                    }
                    return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context), results
                }, support.sortStable = expando.split("").sort(sortOrder).join("") === expando, support.detectDuplicates = !!hasDuplicate, setDocument(), support.sortDetached = assert(function(el) {
                    return 1 & el.compareDocumentPosition(document.createElement("fieldset"))
                }), assert(function(el) {
                    return el.innerHTML = "<a href='#'></a>", "#" === el.firstChild.getAttribute("href")
                }) || addHandle("type|href|height|width", function(elem, name, isXML) {
                    if (!isXML) return elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2)
                }), support.attributes && assert(function(el) {
                    return el.innerHTML = "<input/>", el.firstChild.setAttribute("value", ""), "" === el.firstChild.getAttribute("value")
                }) || addHandle("value", function(elem, name, isXML) {
                    if (!isXML && "input" === elem.nodeName.toLowerCase()) return elem.defaultValue
                }), assert(function(el) {
                    return null == el.getAttribute("disabled")
                }) || addHandle(booleans, function(elem, name, isXML) {
                    var val;
                    if (!isXML) return elem[name] === !0 ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
                }), Sizzle
            }(window);
        jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains, jQuery.escapeSelector = Sizzle.escape;
        var dir = function(elem, dir, until) {
                for (var matched = [], truncate = void 0 !== until;
                    (elem = elem[dir]) && 9 !== elem.nodeType;)
                    if (1 === elem.nodeType) {
                        if (truncate && jQuery(elem).is(until)) break;
                        matched.push(elem)
                    }
                return matched
            },
            siblings = function(n, elem) {
                for (var matched = []; n; n = n.nextSibling) 1 === n.nodeType && n !== elem && matched.push(n);
                return matched
            },
            rneedsContext = jQuery.expr.match.needsContext,
            rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            risSimple = /^.[^:#\[\.,]*$/;
        jQuery.filter = function(expr, elems, not) {
            var elem = elems[0];
            return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                return 1 === elem.nodeType
            }))
        }, jQuery.fn.extend({
            find: function(selector) {
                var i, ret, len = this.length,
                    self = this;
                if ("string" != typeof selector) return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; i < len; i++)
                        if (jQuery.contains(self[i], this)) return !0
                }));
                for (ret = this.pushStack([]), i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
                return len > 1 ? jQuery.uniqueSort(ret) : ret
            },
            filter: function(selector) {
                return this.pushStack(winnow(this, selector || [], !1))
            },
            not: function(selector) {
                return this.pushStack(winnow(this, selector || [], !0))
            },
            is: function(selector) {
                return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length
            }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            init = jQuery.fn.init = function(selector, context, root) {
                var match, elem;
                if (!selector) return this;
                if (root = root || rootjQuery, "string" == typeof selector) {
                    if (match = "<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3 ? [null, selector, null] : rquickExpr.exec(selector), !match || !match[1] && context) return !context || context.jquery ? (context || root).find(selector) : this.constructor(context).find(selector);
                    if (match[1]) {
                        if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context))
                            for (match in context) jQuery.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
                        return this
                    }
                    return elem = document.getElementById(match[2]), elem && (this[0] = elem, this.length = 1), this
                }
                return selector.nodeType ? (this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? void 0 !== root.ready ? root.ready(selector) : selector(jQuery) : jQuery.makeArray(selector, this)
            };
        init.prototype = jQuery.fn, rootjQuery = jQuery(document);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/,
            guaranteedUnique = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        jQuery.fn.extend({
            has: function(target) {
                var targets = jQuery(target, this),
                    l = targets.length;
                return this.filter(function() {
                    for (var i = 0; i < l; i++)
                        if (jQuery.contains(this, targets[i])) return !0
                })
            },
            closest: function(selectors, context) {
                var cur, i = 0,
                    l = this.length,
                    matched = [],
                    targets = "string" != typeof selectors && jQuery(selectors);
                if (!rneedsContext.test(selectors))
                    for (; i < l; i++)
                        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode)
                            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                                matched.push(cur);
                                break
                            }
                return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched)
            },
            index: function(elem) {
                return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(selector, context) {
                return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))))
            },
            addBack: function(selector) {
                return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector))
            }
        }), jQuery.each({
            parent: function(elem) {
                var parent = elem.parentNode;
                return parent && 11 !== parent.nodeType ? parent : null
            },
            parents: function(elem) {
                return dir(elem, "parentNode")
            },
            parentsUntil: function(elem, i, until) {
                return dir(elem, "parentNode", until)
            },
            next: function(elem) {
                return sibling(elem, "nextSibling")
            },
            prev: function(elem) {
                return sibling(elem, "previousSibling")
            },
            nextAll: function(elem) {
                return dir(elem, "nextSibling")
            },
            prevAll: function(elem) {
                return dir(elem, "previousSibling")
            },
            nextUntil: function(elem, i, until) {
                return dir(elem, "nextSibling", until)
            },
            prevUntil: function(elem, i, until) {
                return dir(elem, "previousSibling", until)
            },
            siblings: function(elem) {
                return siblings((elem.parentNode || {}).firstChild, elem)
            },
            children: function(elem) {
                return siblings(elem.firstChild)
            },
            contents: function(elem) {
                return nodeName(elem, "iframe") ? elem.contentDocument : (nodeName(elem, "template") && (elem = elem.content || elem), jQuery.merge([], elem.childNodes))
            }
        }, function(name, fn) {
            jQuery.fn[name] = function(until, selector) {
                var matched = jQuery.map(this, fn, until);
                return "Until" !== name.slice(-5) && (selector = until), selector && "string" == typeof selector && (matched = jQuery.filter(selector, matched)), this.length > 1 && (guaranteedUnique[name] || jQuery.uniqueSort(matched), rparentsprev.test(name) && matched.reverse()), this.pushStack(matched)
            }
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        jQuery.Callbacks = function(options) {
            options = "string" == typeof options ? createOptions(options) : jQuery.extend({}, options);
            var firing, memory, fired, locked, list = [],
                queue = [],
                firingIndex = -1,
                fire = function() {
                    for (locked = locked || options.once, fired = firing = !0; queue.length; firingIndex = -1)
                        for (memory = queue.shift(); ++firingIndex < list.length;) list[firingIndex].apply(memory[0], memory[1]) === !1 && options.stopOnFalse && (firingIndex = list.length, memory = !1);
                    options.memory || (memory = !1), firing = !1, locked && (list = memory ? [] : "")
                },
                self = {
                    add: function() {
                        return list && (memory && !firing && (firingIndex = list.length - 1, queue.push(memory)), function add(args) {
                            jQuery.each(args, function(_, arg) {
                                jQuery.isFunction(arg) ? options.unique && self.has(arg) || list.push(arg) : arg && arg.length && "string" !== jQuery.type(arg) && add(arg)
                            })
                        }(arguments), memory && !firing && fire()), this
                    },
                    remove: function() {
                        return jQuery.each(arguments, function(_, arg) {
                            for (var index;
                                (index = jQuery.inArray(arg, list, index)) > -1;) list.splice(index, 1), index <= firingIndex && firingIndex--
                        }), this
                    },
                    has: function(fn) {
                        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0
                    },
                    empty: function() {
                        return list && (list = []), this
                    },
                    disable: function() {
                        return locked = queue = [], list = memory = "", this
                    },
                    disabled: function() {
                        return !list
                    },
                    lock: function() {
                        return locked = queue = [], memory || firing || (list = memory = ""), this
                    },
                    locked: function() {
                        return !!locked
                    },
                    fireWith: function(context, args) {
                        return locked || (args = args || [], args = [context, args.slice ? args.slice() : args], queue.push(args), firing || fire()), this
                    },
                    fire: function() {
                        return self.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!fired
                    }
                };
            return self
        }, jQuery.extend({
            Deferred: function(func) {
                var tuples = [
                        ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2],
                        ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]
                    ],
                    state = "pending",
                    promise = {
                        state: function() {
                            return state
                        },
                        always: function() {
                            return deferred.done(arguments).fail(arguments), this
                        },
                        catch: function(fn) {
                            return promise.then(null, fn)
                        },
                        pipe: function() {
                            var fns = arguments;
                            return jQuery.Deferred(function(newDefer) {
                                jQuery.each(tuples, function(i, tuple) {
                                    var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                    deferred[tuple[1]](function() {
                                        var returned = fn && fn.apply(this, arguments);
                                        returned && jQuery.isFunction(returned.promise) ? returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject) : newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments)
                                    })
                                }), fns = null
                            }).promise()
                        },
                        then: function(onFulfilled, onRejected, onProgress) {
                            function resolve(depth, deferred, handler, special) {
                                return function() {
                                    var that = this,
                                        args = arguments,
                                        mightThrow = function() {
                                            var returned, then;
                                            if (!(depth < maxDepth)) {
                                                if (returned = handler.apply(that, args), returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                                then = returned && ("object" == typeof returned || "function" == typeof returned) && returned.then, jQuery.isFunction(then) ? special ? then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)) : (maxDepth++, then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith))) : (handler !== Identity && (that = void 0, args = [returned]), (special || deferred.resolveWith)(that, args))
                                            }
                                        },
                                        process = special ? mightThrow : function() {
                                            try {
                                                mightThrow()
                                            } catch (e) {
                                                jQuery.Deferred.exceptionHook && jQuery.Deferred.exceptionHook(e, process.stackTrace), depth + 1 >= maxDepth && (handler !== Thrower && (that = void 0, args = [e]), deferred.rejectWith(that, args))
                                            }
                                        };
                                    depth ? process() : (jQuery.Deferred.getStackHook && (process.stackTrace = jQuery.Deferred.getStackHook()), window.setTimeout(process))
                                }
                            }
                            var maxDepth = 0;
                            return jQuery.Deferred(function(newDefer) {
                                tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)), tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity)), tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower))
                            }).promise()
                        },
                        promise: function(obj) {
                            return null != obj ? jQuery.extend(obj, promise) : promise
                        }
                    },
                    deferred = {};
                return jQuery.each(tuples, function(i, tuple) {
                    var list = tuple[2],
                        stateString = tuple[5];
                    promise[tuple[1]] = list.add, stateString && list.add(function() {
                        state = stateString
                    }, tuples[3 - i][2].disable, tuples[0][2].lock), list.add(tuple[3].fire), deferred[tuple[0]] = function() {
                        return deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments), this
                    }, deferred[tuple[0] + "With"] = list.fireWith
                }), promise.promise(deferred), func && func.call(deferred, deferred), deferred
            },
            when: function(singleValue) {
                var remaining = arguments.length,
                    i = remaining,
                    resolveContexts = Array(i),
                    resolveValues = slice.call(arguments),
                    master = jQuery.Deferred(),
                    updateFunc = function(i) {
                        return function(value) {
                            resolveContexts[i] = this, resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value, --remaining || master.resolveWith(resolveContexts, resolveValues)
                        }
                    };
                if (remaining <= 1 && (adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining), "pending" === master.state() || jQuery.isFunction(resolveValues[i] && resolveValues[i].then))) return master.then();
                for (; i--;) adoptValue(resolveValues[i], updateFunc(i), master.reject);
                return master.promise()
            }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, stack) {
            window.console && window.console.warn && error && rerrorNames.test(error.name) && window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack)
        }, jQuery.readyException = function(error) {
            window.setTimeout(function() {
                throw error
            })
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
            return readyList.then(fn).catch(function(error) {
                jQuery.readyException(error)
            }), this
        }, jQuery.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(wait) {
                (wait === !0 ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0, wait !== !0 && --jQuery.readyWait > 0 || readyList.resolveWith(document, [jQuery]))
            }
        }), jQuery.ready.then = readyList.then, "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed), window.addEventListener("load", completed));
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
                var i = 0,
                    len = elems.length,
                    bulk = null == key;
                if ("object" === jQuery.type(key)) {
                    chainable = !0;
                    for (i in key) access(elems, fn, i, key[i], !0, emptyGet, raw)
                } else if (void 0 !== value && (chainable = !0, jQuery.isFunction(value) || (raw = !0), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, key, value) {
                        return bulk.call(jQuery(elem), value)
                    })), fn))
                    for (; i < len; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet
            },
            acceptData = function(owner) {
                return 1 === owner.nodeType || 9 === owner.nodeType || !+owner.nodeType
            };
        Data.uid = 1, Data.prototype = {
            cache: function(owner) {
                var value = owner[this.expando];
                return value || (value = {}, acceptData(owner) && (owner.nodeType ? owner[this.expando] = value : Object.defineProperty(owner, this.expando, {
                    value: value,
                    configurable: !0
                }))), value
            },
            set: function(owner, data, value) {
                var prop, cache = this.cache(owner);
                if ("string" == typeof data) cache[jQuery.camelCase(data)] = value;
                else
                    for (prop in data) cache[jQuery.camelCase(prop)] = data[prop];
                return cache
            },
            get: function(owner, key) {
                return void 0 === key ? this.cache(owner) : owner[this.expando] && owner[this.expando][jQuery.camelCase(key)]
            },
            access: function(owner, key, value) {
                return void 0 === key || key && "string" == typeof key && void 0 === value ? this.get(owner, key) : (this.set(owner, key, value), void 0 !== value ? value : key)
            },
            remove: function(owner, key) {
                var i, cache = owner[this.expando];
                if (void 0 !== cache) {
                    if (void 0 !== key) {
                        Array.isArray(key) ? key = key.map(jQuery.camelCase) : (key = jQuery.camelCase(key), key = key in cache ? [key] : key.match(rnothtmlwhite) || []), i = key.length;
                        for (; i--;) delete cache[key[i]]
                    }(void 0 === key || jQuery.isEmptyObject(cache)) && (owner.nodeType ? owner[this.expando] = void 0 : delete owner[this.expando])
                }
            },
            hasData: function(owner) {
                var cache = owner[this.expando];
                return void 0 !== cache && !jQuery.isEmptyObject(cache)
            }
        };
        var dataPriv = new Data,
            dataUser = new Data,
            rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            rmultiDash = /[A-Z]/g;
        jQuery.extend({
            hasData: function(elem) {
                return dataUser.hasData(elem) || dataPriv.hasData(elem)
            },
            data: function(elem, name, data) {
                return dataUser.access(elem, name, data)
            },
            removeData: function(elem, name) {
                dataUser.remove(elem, name)
            },
            _data: function(elem, name, data) {
                return dataPriv.access(elem, name, data)
            },
            _removeData: function(elem, name) {
                dataPriv.remove(elem, name)
            }
        }), jQuery.fn.extend({
            data: function(key, value) {
                var i, name, data, elem = this[0],
                    attrs = elem && elem.attributes;
                if (void 0 === key) {
                    if (this.length && (data = dataUser.get(elem), 1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs"))) {
                        for (i = attrs.length; i--;) attrs[i] && (name = attrs[i].name, 0 === name.indexOf("data-") && (name = jQuery.camelCase(name.slice(5)), dataAttr(elem, name, data[name])));
                        dataPriv.set(elem, "hasDataAttrs", !0)
                    }
                    return data
                }
                return "object" == typeof key ? this.each(function() {
                    dataUser.set(this, key)
                }) : access(this, function(value) {
                    var data;
                    if (elem && void 0 === value) {
                        if (data = dataUser.get(elem, key), void 0 !== data) return data;
                        if (data = dataAttr(elem, key), void 0 !== data) return data
                    } else this.each(function() {
                        dataUser.set(this, key, value)
                    })
                }, null, value, arguments.length > 1, null, !0)
            },
            removeData: function(key) {
                return this.each(function() {
                    dataUser.remove(this, key)
                })
            }
        }), jQuery.extend({
            queue: function(elem, type, data) {
                var queue;
                if (elem) return type = (type || "fx") + "queue", queue = dataPriv.get(elem, type), data && (!queue || Array.isArray(data) ? queue = dataPriv.access(elem, type, jQuery.makeArray(data)) : queue.push(data)), queue || []
            },
            dequeue: function(elem, type) {
                type = type || "fx";
                var queue = jQuery.queue(elem, type),
                    startLength = queue.length,
                    fn = queue.shift(),
                    hooks = jQuery._queueHooks(elem, type),
                    next = function() {
                        jQuery.dequeue(elem, type)
                    };
                "inprogress" === fn && (fn = queue.shift(), startLength--), fn && ("fx" === type && queue.unshift("inprogress"), delete hooks.stop, fn.call(elem, next, hooks)), !startLength && hooks && hooks.empty.fire()
            },
            _queueHooks: function(elem, type) {
                var key = type + "queueHooks";
                return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                    empty: jQuery.Callbacks("once memory").add(function() {
                        dataPriv.remove(elem, [type + "queue", key])
                    })
                })
            }
        }), jQuery.fn.extend({
            queue: function(type, data) {
                var setter = 2;
                return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
                    var queue = jQuery.queue(this, type, data);
                    jQuery._queueHooks(this, type), "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type)
                })
            },
            dequeue: function(type) {
                return this.each(function() {
                    jQuery.dequeue(this, type)
                })
            },
            clearQueue: function(type) {
                return this.queue(type || "fx", [])
            },
            promise: function(type, obj) {
                var tmp, count = 1,
                    defer = jQuery.Deferred(),
                    elements = this,
                    i = this.length,
                    resolve = function() {
                        --count || defer.resolveWith(elements, [elements])
                    };
                for ("string" != typeof type && (obj = type, type = void 0), type = type || "fx"; i--;) tmp = dataPriv.get(elements[i], type + "queueHooks"), tmp && tmp.empty && (count++, tmp.empty.add(resolve));
                return resolve(), defer.promise(obj)
            }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
            cssExpand = ["Top", "Right", "Bottom", "Left"],
            isHiddenWithinTree = function(elem, el) {
                return elem = el || elem, "none" === elem.style.display || "" === elem.style.display && jQuery.contains(elem.ownerDocument, elem) && "none" === jQuery.css(elem, "display")
            },
            swap = function(elem, options, callback, args) {
                var ret, name, old = {};
                for (name in options) old[name] = elem.style[name], elem.style[name] = options[name];
                ret = callback.apply(elem, args || []);
                for (name in options) elem.style[name] = old[name];
                return ret
            },
            defaultDisplayMap = {};
        jQuery.fn.extend({
            show: function() {
                return showHide(this, !0)
            },
            hide: function() {
                return showHide(this)
            },
            toggle: function(state) {
                return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
                    isHiddenWithinTree(this) ? jQuery(this).show() : jQuery(this).hide()
                })
            }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i,
            rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            rscriptType = /^$|\/(?:java|ecma)script/i,
            wrapMap = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td;
        var rhtml = /<|&#?\w+;/;
        ! function() {
            var fragment = document.createDocumentFragment(),
                div = fragment.appendChild(document.createElement("div")),
                input = document.createElement("input");
            input.setAttribute("type", "radio"), input.setAttribute("checked", "checked"), input.setAttribute("name", "t"), div.appendChild(input), support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, div.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue
        }();
        var documentElement = document.documentElement,
            rkeyEvent = /^key/,
            rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        jQuery.event = {
            global: {},
            add: function(elem, types, handler, data, selector) {
                var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                if (elemData)
                    for (handler.handler && (handleObjIn = handler, handler = handleObjIn.handler, selector = handleObjIn.selector), selector && jQuery.find.matchesSelector(documentElement, selector), handler.guid || (handler.guid = jQuery.guid++), (events = elemData.events) || (events = elemData.events = {}), (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function(e) {
                            return "undefined" != typeof jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0
                        }), types = (types || "").match(rnothtmlwhite) || [""], t = types.length; t--;) tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type && (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, special = jQuery.event.special[type] || {}, handleObj = jQuery.extend({
                        type: type,
                        origType: origType,
                        data: data,
                        handler: handler,
                        guid: handler.guid,
                        selector: selector,
                        needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                        namespace: namespaces.join(".")
                    }, handleObjIn), (handlers = events[type]) || (handlers = events[type] = [], handlers.delegateCount = 0, special.setup && special.setup.call(elem, data, namespaces, eventHandle) !== !1 || elem.addEventListener && elem.addEventListener(type, eventHandle)), special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)), selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), jQuery.event.global[type] = !0)
            },
            remove: function(elem, types, handler, selector, mappedTypes) {
                var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                if (elemData && (events = elemData.events)) {
                    for (types = (types || "").match(rnothtmlwhite) || [""], t = types.length; t--;)
                        if (tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type) {
                            for (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, handlers = events[type] || [], tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), origCount = j = handlers.length; j--;) handleObj = handlers[j], !mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector) || (handlers.splice(j, 1), handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                            origCount && !handlers.length && (special.teardown && special.teardown.call(elem, namespaces, elemData.handle) !== !1 || jQuery.removeEvent(elem, type, elemData.handle), delete events[type])
                        } else
                            for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                    jQuery.isEmptyObject(events) && dataPriv.remove(elem, "handle events")
                }
            },
            dispatch: function(nativeEvent) {
                var i, j, ret, matched, handleObj, handlerQueue, event = jQuery.event.fix(nativeEvent),
                    args = new Array(arguments.length),
                    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
                    special = jQuery.event.special[event.type] || {};
                for (args[0] = event, i = 1; i < arguments.length; i++) args[i] = arguments[i];
                if (event.delegateTarget = this, !special.preDispatch || special.preDispatch.call(this, event) !== !1) {
                    for (handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0;
                        (matched = handlerQueue[i++]) && !event.isPropagationStopped();)
                        for (event.currentTarget = matched.elem, j = 0;
                            (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) event.rnamespace && !event.rnamespace.test(handleObj.namespace) || (event.handleObj = handleObj, event.data = handleObj.data, ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args), void 0 !== ret && (event.result = ret) === !1 && (event.preventDefault(), event.stopPropagation()));
                    return special.postDispatch && special.postDispatch.call(this, event), event.result
                }
            },
            handlers: function(event, handlers) {
                var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [],
                    delegateCount = handlers.delegateCount,
                    cur = event.target;
                if (delegateCount && cur.nodeType && !("click" === event.type && event.button >= 1))
                    for (; cur !== this; cur = cur.parentNode || this)
                        if (1 === cur.nodeType && ("click" !== event.type || cur.disabled !== !0)) {
                            for (matchedHandlers = [], matchedSelectors = {}, i = 0; i < delegateCount; i++) handleObj = handlers[i], sel = handleObj.selector + " ", void 0 === matchedSelectors[sel] && (matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length), matchedSelectors[sel] && matchedHandlers.push(handleObj);
                            matchedHandlers.length && handlerQueue.push({
                                elem: cur,
                                handlers: matchedHandlers
                            })
                        }
                return cur = this, delegateCount < handlers.length && handlerQueue.push({
                    elem: cur,
                    handlers: handlers.slice(delegateCount)
                }), handlerQueue
            },
            addProp: function(name, hook) {
                Object.defineProperty(jQuery.Event.prototype, name, {
                    enumerable: !0,
                    configurable: !0,
                    get: jQuery.isFunction(hook) ? function() {
                        if (this.originalEvent) return hook(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[name]
                    },
                    set: function(value) {
                        Object.defineProperty(this, name, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: value
                        })
                    }
                })
            },
            fix: function(originalEvent) {
                return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== safeActiveElement() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === safeActiveElement() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (rcheckableType.test(this.type) && this.click && nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(event) {
                        return nodeName(event.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(event) {
                        void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result)
                    }
                }
            }
        }, jQuery.removeEvent = function(elem, type, handle) {
            elem.removeEventListener && elem.removeEventListener(type, handle)
        }, jQuery.Event = function(src, props) {
            return this instanceof jQuery.Event ? (src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && src.returnValue === !1 ? returnTrue : returnFalse, this.target = src.target && 3 === src.target.nodeType ? src.target.parentNode : src.target, this.currentTarget = src.currentTarget, this.relatedTarget = src.relatedTarget) : this.type = src, props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || jQuery.now(), void(this[jQuery.expando] = !0)) : new jQuery.Event(src, props)
        }, jQuery.Event.prototype = {
            constructor: jQuery.Event,
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = returnTrue, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, jQuery.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(event) {
                var button = event.button;
                return null == event.which && rkeyEvent.test(event.type) ? null != event.charCode ? event.charCode : event.keyCode : !event.which && void 0 !== button && rmouseEvent.test(event.type) ? 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0 : event.which
            }
        }, jQuery.event.addProp), jQuery.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(orig, fix) {
            jQuery.event.special[orig] = {
                delegateType: fix,
                bindType: fix,
                handle: function(event) {
                    var ret, target = this,
                        related = event.relatedTarget,
                        handleObj = event.handleObj;
                    return related && (related === target || jQuery.contains(target, related)) || (event.type = handleObj.origType, ret = handleObj.handler.apply(this, arguments), event.type = fix), ret
                }
            }
        }), jQuery.fn.extend({
            on: function(types, selector, data, fn) {
                return on(this, types, selector, data, fn)
            },
            one: function(types, selector, data, fn) {
                return on(this, types, selector, data, fn, 1)
            },
            off: function(types, selector, fn) {
                var handleObj, type;
                if (types && types.preventDefault && types.handleObj) return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
                if ("object" == typeof types) {
                    for (type in types) this.off(type, selector, types[type]);
                    return this
                }
                return selector !== !1 && "function" != typeof selector || (fn = selector, selector = void 0), fn === !1 && (fn = returnFalse), this.each(function() {
                    jQuery.event.remove(this, types, fn, selector)
                })
            }
        });
        var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            rnoInnerhtml = /<script|<style|<link/i,
            rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rscriptTypeMasked = /^true\/(.*)/,
            rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        jQuery.extend({
            htmlPrefilter: function(html) {
                return html.replace(rxhtmlTag, "<$1></$2>")
            },
            clone: function(elem, dataAndEvents, deepDataAndEvents) {
                var i, l, srcElements, destElements, clone = elem.cloneNode(!0),
                    inPage = jQuery.contains(elem.ownerDocument, elem);
                if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem)))
                    for (destElements = getAll(clone), srcElements = getAll(elem), i = 0, l = srcElements.length; i < l; i++) fixInput(srcElements[i], destElements[i]);
                if (dataAndEvents)
                    if (deepDataAndEvents)
                        for (srcElements = srcElements || getAll(elem), destElements = destElements || getAll(clone), i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]);
                    else cloneCopyEvent(elem, clone);
                return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone
            },
            cleanData: function(elems) {
                for (var data, elem, type, special = jQuery.event.special, i = 0; void 0 !== (elem = elems[i]); i++)
                    if (acceptData(elem)) {
                        if (data = elem[dataPriv.expando]) {
                            if (data.events)
                                for (type in data.events) special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                            elem[dataPriv.expando] = void 0
                        }
                        elem[dataUser.expando] && (elem[dataUser.expando] = void 0)
                    }
            }
        }), jQuery.fn.extend({
            detach: function(selector) {
                return remove(this, selector, !0)
            },
            remove: function(selector) {
                return remove(this, selector)
            },
            text: function(value) {
                return access(this, function(value) {
                    return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = value)
                    })
                }, null, value, arguments.length)
            },
            append: function() {
                return domManip(this, arguments, function(elem) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var target = manipulationTarget(this, elem);
                        target.appendChild(elem)
                    }
                })
            },
            prepend: function() {
                return domManip(this, arguments, function(elem) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var target = manipulationTarget(this, elem);
                        target.insertBefore(elem, target.firstChild)
                    }
                })
            },
            before: function() {
                return domManip(this, arguments, function(elem) {
                    this.parentNode && this.parentNode.insertBefore(elem, this)
                })
            },
            after: function() {
                return domManip(this, arguments, function(elem) {
                    this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling)
                })
            },
            empty: function() {
                for (var elem, i = 0; null != (elem = this[i]); i++) 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), elem.textContent = "");
                return this
            },
            clone: function(dataAndEvents, deepDataAndEvents) {
                return dataAndEvents = null != dataAndEvents && dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, this.map(function() {
                    return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
                })
            },
            html: function(value) {
                return access(this, function(value) {
                    var elem = this[0] || {},
                        i = 0,
                        l = this.length;
                    if (void 0 === value && 1 === elem.nodeType) return elem.innerHTML;
                    if ("string" == typeof value && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                        value = jQuery.htmlPrefilter(value);
                        try {
                            for (; i < l; i++) elem = this[i] || {}, 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), elem.innerHTML = value);
                            elem = 0
                        } catch (e) {}
                    }
                    elem && this.empty().append(value)
                }, null, value, arguments.length)
            },
            replaceWith: function() {
                var ignored = [];
                return domManip(this, arguments, function(elem) {
                    var parent = this.parentNode;
                    jQuery.inArray(this, ignored) < 0 && (jQuery.cleanData(getAll(this)), parent && parent.replaceChild(elem, this))
                }, ignored)
            }
        }), jQuery.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(name, original) {
            jQuery.fn[name] = function(selector) {
                for (var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0; i <= last; i++) elems = i === last ? this : this.clone(!0), jQuery(insert[i])[original](elems), push.apply(ret, elems.get());
                return this.pushStack(ret)
            }
        });
        var rmargin = /^margin/,
            rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
            getStyles = function(elem) {
                var view = elem.ownerDocument.defaultView;
                return view && view.opener || (view = window), view.getComputedStyle(elem)
            };
        ! function() {
            function computeStyleTests() {
                if (div) {
                    div.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", div.innerHTML = "", documentElement.appendChild(container);
                    var divStyle = window.getComputedStyle(div);
                    pixelPositionVal = "1%" !== divStyle.top, reliableMarginLeftVal = "2px" === divStyle.marginLeft, boxSizingReliableVal = "4px" === divStyle.width, div.style.marginRight = "50%", pixelMarginRightVal = "4px" === divStyle.marginRight, documentElement.removeChild(container), div = null
                }
            }
            var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"),
                div = document.createElement("div");
            div.style && (div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = "content-box" === div.style.backgroundClip, container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", container.appendChild(div), jQuery.extend(support, {
                pixelPosition: function() {
                    return computeStyleTests(), pixelPositionVal
                },
                boxSizingReliable: function() {
                    return computeStyleTests(), boxSizingReliableVal
                },
                pixelMarginRight: function() {
                    return computeStyleTests(), pixelMarginRightVal
                },
                reliableMarginLeft: function() {
                    return computeStyleTests(), reliableMarginLeftVal
                }
            }))
        }();
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
            rcustomProp = /^--/,
            cssShow = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            cssNormalTransform = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            cssPrefixes = ["Webkit", "Moz", "ms"],
            emptyStyle = document.createElement("div").style;
        jQuery.extend({
            cssHooks: {
                opacity: {
                    get: function(elem, computed) {
                        if (computed) {
                            var ret = curCSS(elem, "opacity");
                            return "" === ret ? "1" : ret
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(elem, name, value, extra) {
                if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
                    var ret, type, hooks, origName = jQuery.camelCase(name),
                        isCustomProp = rcustomProp.test(name),
                        style = elem.style;
                    return isCustomProp || (name = finalPropName(origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === value ? hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name] : (type = typeof value, "string" === type && (ret = rcssNum.exec(value)) && ret[1] && (value = adjustCSS(elem, name, ret), type = "number"), null != value && value === value && ("number" === type && (value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px")), support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"), hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra)) || (isCustomProp ? style.setProperty(name, value) : style[name] = value)), void 0)
                }
            },
            css: function(elem, name, extra, styles) {
                var val, num, hooks, origName = jQuery.camelCase(name),
                    isCustomProp = rcustomProp.test(name);
                return isCustomProp || (name = finalPropName(origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(elem, !0, extra)), void 0 === val && (val = curCSS(elem, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === extra || extra ? (num = parseFloat(val), extra === !0 || isFinite(num) ? num || 0 : val) : val
            }
        }), jQuery.each(["height", "width"], function(i, name) {
            jQuery.cssHooks[name] = {
                get: function(elem, computed, extra) {
                    if (computed) return !rdisplayswap.test(jQuery.css(elem, "display")) || elem.getClientRects().length && elem.getBoundingClientRect().width ? getWidthOrHeight(elem, name, extra) : swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, name, extra)
                    })
                },
                set: function(elem, value, extra) {
                    var matches, styles = extra && getStyles(elem),
                        subtract = extra && augmentWidthOrHeight(elem, name, extra, "border-box" === jQuery.css(elem, "boxSizing", !1, styles), styles);
                    return subtract && (matches = rcssNum.exec(value)) && "px" !== (matches[3] || "px") && (elem.style[name] = value, value = jQuery.css(elem, name)), setPositiveNumber(elem, value, subtract)
                }
            }
        }), jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
            if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                marginLeft: 0
            }, function() {
                return elem.getBoundingClientRect().left
            })) + "px"
        }), jQuery.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(prefix, suffix) {
            jQuery.cssHooks[prefix + suffix] = {
                expand: function(value) {
                    for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [value]; i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                    return expanded
                }
            }, rmargin.test(prefix) || (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber)
        }), jQuery.fn.extend({
            css: function(name, value) {
                return access(this, function(elem, name, value) {
                    var styles, len, map = {},
                        i = 0;
                    if (Array.isArray(name)) {
                        for (styles = getStyles(elem), len = name.length; i < len; i++) map[name[i]] = jQuery.css(elem, name[i], !1, styles);
                        return map
                    }
                    return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
                }, name, value, arguments.length > 1)
            }
        }), jQuery.Tween = Tween, Tween.prototype = {
            constructor: Tween,
            init: function(elem, options, prop, end, easing, unit) {
                this.elem = elem, this.prop = prop, this.easing = easing || jQuery.easing._default, this.options = options, this.start = this.now = this.cur(), this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
            },
            cur: function() {
                var hooks = Tween.propHooks[this.prop];
                return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
            },
            run: function(percent) {
                var eased, hooks = Tween.propHooks[this.prop];
                return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this
            }
        }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
            _default: {
                get: function(tween) {
                    var result;
                    return 1 !== tween.elem.nodeType || null != tween.elem[tween.prop] && null == tween.elem.style[tween.prop] ? tween.elem[tween.prop] : (result = jQuery.css(tween.elem, tween.prop, ""), result && "auto" !== result ? result : 0)
                },
                set: function(tween) {
                    jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : 1 !== tween.elem.nodeType || null == tween.elem.style[jQuery.cssProps[tween.prop]] && !jQuery.cssHooks[tween.prop] ? tween.elem[tween.prop] = tween.now : jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
                }
            }
        }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function(tween) {
                tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now)
            }
        }, jQuery.easing = {
            linear: function(p) {
                return p
            },
            swing: function(p) {
                return .5 - Math.cos(p * Math.PI) / 2
            },
            _default: "swing"
        }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/,
            rrun = /queueHooks$/;
        jQuery.Animation = jQuery.extend(Animation, {
                tweeners: {
                    "*": [function(prop, value) {
                        var tween = this.createTween(prop, value);
                        return adjustCSS(tween.elem, prop, rcssNum.exec(value), tween), tween
                    }]
                },
                tweener: function(props, callback) {
                    jQuery.isFunction(props) ? (callback = props, props = ["*"]) : props = props.match(rnothtmlwhite);
                    for (var prop, index = 0, length = props.length; index < length; index++) prop = props[index], Animation.tweeners[prop] = Animation.tweeners[prop] || [], Animation.tweeners[prop].unshift(callback)
                },
                prefilters: [defaultPrefilter],
                prefilter: function(callback, prepend) {
                    prepend ? Animation.prefilters.unshift(callback) : Animation.prefilters.push(callback)
                }
            }), jQuery.speed = function(speed, easing, fn) {
                var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
                    complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
                    duration: speed,
                    easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
                };
                return jQuery.fx.off ? opt.duration = 0 : "number" != typeof opt.duration && (opt.duration in jQuery.fx.speeds ? opt.duration = jQuery.fx.speeds[opt.duration] : opt.duration = jQuery.fx.speeds._default), null != opt.queue && opt.queue !== !0 || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
                    jQuery.isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue)
                }, opt
            }, jQuery.fn.extend({
                fadeTo: function(speed, to, easing, callback) {
                    return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                        opacity: to
                    }, speed, easing, callback)
                },
                animate: function(prop, speed, easing, callback) {
                    var empty = jQuery.isEmptyObject(prop),
                        optall = jQuery.speed(speed, easing, callback),
                        doAnimation = function() {
                            var anim = Animation(this, jQuery.extend({}, prop), optall);
                            (empty || dataPriv.get(this, "finish")) && anim.stop(!0)
                        };
                    return doAnimation.finish = doAnimation, empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
                },
                stop: function(type, clearQueue, gotoEnd) {
                    var stopQueue = function(hooks) {
                        var stop = hooks.stop;
                        delete hooks.stop, stop(gotoEnd)
                    };
                    return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && type !== !1 && this.queue(type || "fx", []), this.each(function() {
                        var dequeue = !0,
                            index = null != type && type + "queueHooks",
                            timers = jQuery.timers,
                            data = dataPriv.get(this);
                        if (index) data[index] && data[index].stop && stopQueue(data[index]);
                        else
                            for (index in data) data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
                        for (index = timers.length; index--;) timers[index].elem !== this || null != type && timers[index].queue !== type || (timers[index].anim.stop(gotoEnd), dequeue = !1, timers.splice(index, 1));
                        !dequeue && gotoEnd || jQuery.dequeue(this, type)
                    })
                },
                finish: function(type) {
                    return type !== !1 && (type = type || "fx"), this.each(function() {
                        var index, data = dataPriv.get(this),
                            queue = data[type + "queue"],
                            hooks = data[type + "queueHooks"],
                            timers = jQuery.timers,
                            length = queue ? queue.length : 0;
                        for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), index = timers.length; index--;) timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), timers.splice(index, 1));
                        for (index = 0; index < length; index++) queue[index] && queue[index].finish && queue[index].finish.call(this);
                        delete data.finish
                    })
                }
            }), jQuery.each(["toggle", "show", "hide"], function(i, name) {
                var cssFn = jQuery.fn[name];
                jQuery.fn[name] = function(speed, easing, callback) {
                    return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback)
                }
            }), jQuery.each({
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(name, props) {
                jQuery.fn[name] = function(speed, easing, callback) {
                    return this.animate(props, speed, easing, callback)
                }
            }), jQuery.timers = [], jQuery.fx.tick = function() {
                var timer, i = 0,
                    timers = jQuery.timers;
                for (fxNow = jQuery.now(); i < timers.length; i++) timer = timers[i], timer() || timers[i] !== timer || timers.splice(i--, 1);
                timers.length || jQuery.fx.stop(), fxNow = void 0
            }, jQuery.fx.timer = function(timer) {
                jQuery.timers.push(timer), jQuery.fx.start()
            }, jQuery.fx.interval = 13, jQuery.fx.start = function() {
                inProgress || (inProgress = !0, schedule())
            }, jQuery.fx.stop = function() {
                inProgress = null
            }, jQuery.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, jQuery.fn.delay = function(time, type) {
                return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function(next, hooks) {
                    var timeout = window.setTimeout(next, time);
                    hooks.stop = function() {
                        window.clearTimeout(timeout)
                    }
                })
            },
            function() {
                var input = document.createElement("input"),
                    select = document.createElement("select"),
                    opt = select.appendChild(document.createElement("option"));
                input.type = "checkbox", support.checkOn = "" !== input.value, support.optSelected = opt.selected, input = document.createElement("input"), input.value = "t", input.type = "radio", support.radioValue = "t" === input.value
            }();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
            attr: function(name, value) {
                return access(this, jQuery.attr, name, value, arguments.length > 1)
            },
            removeAttr: function(name) {
                return this.each(function() {
                    jQuery.removeAttr(this, name)
                })
            }
        }), jQuery.extend({
            attr: function(elem, name, value) {
                var ret, hooks, nType = elem.nodeType;
                if (3 !== nType && 8 !== nType && 2 !== nType) return "undefined" == typeof elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), value) : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : (ret = jQuery.find.attr(elem, name), null == ret ? void 0 : ret))
            },
            attrHooks: {
                type: {
                    set: function(elem, value) {
                        if (!support.radioValue && "radio" === value && nodeName(elem, "input")) {
                            var val = elem.value;
                            return elem.setAttribute("type", value), val && (elem.value = val), value
                        }
                    }
                }
            },
            removeAttr: function(elem, value) {
                var name, i = 0,
                    attrNames = value && value.match(rnothtmlwhite);
                if (attrNames && 1 === elem.nodeType)
                    for (; name = attrNames[i++];) elem.removeAttribute(name)
            }
        }), boolHook = {
            set: function(elem, value, name) {
                return value === !1 ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), name
            }
        }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
            var getter = attrHandle[name] || jQuery.find.attr;
            attrHandle[name] = function(elem, name, isXML) {
                var ret, handle, lowercaseName = name.toLowerCase();
                return isXML || (handle = attrHandle[lowercaseName], attrHandle[lowercaseName] = ret, ret = null != getter(elem, name, isXML) ? lowercaseName : null, attrHandle[lowercaseName] = handle), ret
            }
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i,
            rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
            prop: function(name, value) {
                return access(this, jQuery.prop, name, value, arguments.length > 1)
            },
            removeProp: function(name) {
                return this.each(function() {
                    delete this[jQuery.propFix[name] || name]
                })
            }
        }), jQuery.extend({
            prop: function(elem, name, value) {
                var ret, hooks, nType = elem.nodeType;
                if (3 !== nType && 8 !== nType && 2 !== nType) return 1 === nType && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name]
            },
            propHooks: {
                tabIndex: {
                    get: function(elem) {
                        var tabindex = jQuery.find.attr(elem, "tabindex");
                        return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), support.optSelected || (jQuery.propHooks.selected = {
            get: function(elem) {
                var parent = elem.parentNode;
                return parent && parent.parentNode && parent.parentNode.selectedIndex, null
            },
            set: function(elem) {
                var parent = elem.parentNode;
                parent && (parent.selectedIndex, parent.parentNode && parent.parentNode.selectedIndex)
            }
        }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            jQuery.propFix[this.toLowerCase()] = this
        }), jQuery.fn.extend({
            addClass: function(value) {
                var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                if (jQuery.isFunction(value)) return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, getClass(this)))
                });
                if ("string" == typeof value && value)
                    for (classes = value.match(rnothtmlwhite) || []; elem = this[i++];)
                        if (curValue = getClass(elem), cur = 1 === elem.nodeType && " " + stripAndCollapse(curValue) + " ") {
                            for (j = 0; clazz = classes[j++];) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
                            finalValue = stripAndCollapse(cur), curValue !== finalValue && elem.setAttribute("class", finalValue)
                        }
                return this
            },
            removeClass: function(value) {
                var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                if (jQuery.isFunction(value)) return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, getClass(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof value && value)
                    for (classes = value.match(rnothtmlwhite) || []; elem = this[i++];)
                        if (curValue = getClass(elem), cur = 1 === elem.nodeType && " " + stripAndCollapse(curValue) + " ") {
                            for (j = 0; clazz = classes[j++];)
                                for (; cur.indexOf(" " + clazz + " ") > -1;) cur = cur.replace(" " + clazz + " ", " ");
                            finalValue = stripAndCollapse(cur), curValue !== finalValue && elem.setAttribute("class", finalValue)
                        }
                return this
            },
            toggleClass: function(value, stateVal) {
                var type = typeof value;
                return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : jQuery.isFunction(value) ? this.each(function(i) {
                    jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal)
                }) : this.each(function() {
                    var className, i, self, classNames;
                    if ("string" === type)
                        for (i = 0, self = jQuery(this), classNames = value.match(rnothtmlwhite) || []; className = classNames[i++];) self.hasClass(className) ? self.removeClass(className) : self.addClass(className);
                    else void 0 !== value && "boolean" !== type || (className = getClass(this), className && dataPriv.set(this, "__className__", className), this.setAttribute && this.setAttribute("class", className || value === !1 ? "" : dataPriv.get(this, "__className__") || ""))
                })
            },
            hasClass: function(selector) {
                var className, elem, i = 0;
                for (className = " " + selector + " "; elem = this[i++];)
                    if (1 === elem.nodeType && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return !0;
                return !1
            }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
            val: function(value) {
                var hooks, ret, isFunction, elem = this[0]; {
                    if (arguments.length) return isFunction = jQuery.isFunction(value), this.each(function(i) {
                        var val;
                        1 === this.nodeType && (val = isFunction ? value.call(this, i, jQuery(this).val()) : value, null == val ? val = "" : "number" == typeof val ? val += "" : Array.isArray(val) && (val = jQuery.map(val, function(value) {
                            return null == value ? "" : value + ""
                        })), hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], hooks && "set" in hooks && void 0 !== hooks.set(this, val, "value") || (this.value = val))
                    });
                    if (elem) return hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value")) ? ret : (ret = elem.value, "string" == typeof ret ? ret.replace(rreturn, "") : null == ret ? "" : ret)
                }
            }
        }), jQuery.extend({
            valHooks: {
                option: {
                    get: function(elem) {
                        var val = jQuery.find.attr(elem, "value");
                        return null != val ? val : stripAndCollapse(jQuery.text(elem))
                    }
                },
                select: {
                    get: function(elem) {
                        var value, option, i, options = elem.options,
                            index = elem.selectedIndex,
                            one = "select-one" === elem.type,
                            values = one ? null : [],
                            max = one ? index + 1 : options.length;
                        for (i = index < 0 ? max : one ? index : 0; i < max; i++)
                            if (option = options[i], (option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                                if (value = jQuery(option).val(), one) return value;
                                values.push(value)
                            }
                        return values
                    },
                    set: function(elem, value) {
                        for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--;) option = options[i], (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) && (optionSet = !0);
                        return optionSet || (elem.selectedIndex = -1), values
                    }
                }
            }
        }), jQuery.each(["radio", "checkbox"], function() {
            jQuery.valHooks[this] = {
                set: function(elem, value) {
                    if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1
                }
            }, support.checkOn || (jQuery.valHooks[this].get = function(elem) {
                return null === elem.getAttribute("value") ? "on" : elem.value
            })
        });
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
        jQuery.extend(jQuery.event, {
            trigger: function(event, data, elem, onlyHandlers) {
                var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [elem || document],
                    type = hasOwn.call(event, "type") ? event.type : event,
                    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                if (cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") > -1 && (namespaces = type.split("."), type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), data = null == data ? [event] : jQuery.makeArray(data, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || special.trigger.apply(elem, data) !== !1)) {
                    if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                        for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) eventPath.push(cur), tmp = cur;
                        tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window)
                    }
                    for (i = 0;
                        (cur = eventPath[i++]) && !event.isPropagationStopped();) event.type = i > 1 ? bubbleType : special.bindType || type, handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle"), handle && handle.apply(cur, data), handle = ontype && cur[ontype], handle && handle.apply && acceptData(cur) && (event.result = handle.apply(cur, data), event.result === !1 && event.preventDefault());
                    return event.type = type, onlyHandlers || event.isDefaultPrevented() || special._default && special._default.apply(eventPath.pop(), data) !== !1 || !acceptData(elem) || ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem) && (tmp = elem[ontype], tmp && (elem[ontype] = null), jQuery.event.triggered = type, elem[type](), jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp)), event.result
                }
            },
            simulate: function(type, elem, event) {
                var e = jQuery.extend(new jQuery.Event, event, {
                    type: type,
                    isSimulated: !0
                });
                jQuery.event.trigger(e, null, elem)
            }
        }), jQuery.fn.extend({
            trigger: function(type, data) {
                return this.each(function() {
                    jQuery.event.trigger(type, data, this)
                })
            },
            triggerHandler: function(type, data) {
                var elem = this[0];
                if (elem) return jQuery.event.trigger(type, data, elem, !0)
            }
        }), jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(i, name) {
            jQuery.fn[name] = function(data, fn) {
                return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
            }
        }), jQuery.fn.extend({
            hover: function(fnOver, fnOut) {
                return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
            }
        }), support.focusin = "onfocusin" in window, support.focusin || jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            var handler = function(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event))
            };
            jQuery.event.special[fix] = {
                setup: function() {
                    var doc = this.ownerDocument || this,
                        attaches = dataPriv.access(doc, fix);
                    attaches || doc.addEventListener(orig, handler, !0), dataPriv.access(doc, fix, (attaches || 0) + 1)
                },
                teardown: function() {
                    var doc = this.ownerDocument || this,
                        attaches = dataPriv.access(doc, fix) - 1;
                    attaches ? dataPriv.access(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), dataPriv.remove(doc, fix))
                }
            }
        });
        var location = window.location,
            nonce = jQuery.now(),
            rquery = /\?/;
        jQuery.parseXML = function(data) {
            var xml;
            if (!data || "string" != typeof data) return null;
            try {
                xml = (new window.DOMParser).parseFromString(data, "text/xml")
            } catch (e) {
                xml = void 0
            }
            return xml && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml
        };
        var rbracket = /\[\]$/,
            rCRLF = /\r?\n/g,
            rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
            rsubmittable = /^(?:input|select|textarea|keygen)/i;
        jQuery.param = function(a, traditional) {
            var prefix, s = [],
                add = function(key, valueOrFunction) {
                    var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(null == value ? "" : value)
                };
            if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function() {
                add(this.name, this.value)
            });
            else
                for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
            return s.join("&")
        }, jQuery.fn.extend({
            serialize: function() {
                return jQuery.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var elements = jQuery.prop(this, "elements");
                    return elements ? jQuery.makeArray(elements) : this
                }).filter(function() {
                    var type = this.type;
                    return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type))
                }).map(function(i, elem) {
                    var val = jQuery(this).val();
                    return null == val ? null : Array.isArray(val) ? jQuery.map(val, function(val) {
                        return {
                            name: elem.name,
                            value: val.replace(rCRLF, "\r\n")
                        }
                    }) : {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    }
                }).get()
            }
        });
        var r20 = /%20/g,
            rhash = /#.*$/,
            rantiCache = /([?&])_=[^&]*/,
            rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            rnoContent = /^(?:GET|HEAD)$/,
            rprotocol = /^\/\//,
            prefilters = {},
            transports = {},
            allTypes = "*/".concat("*"),
            originAnchor = document.createElement("a");
        originAnchor.href = location.href, jQuery.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: location.href,
                type: "GET",
                isLocal: rlocalProtocol.test(location.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": allTypes,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": jQuery.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(target, settings) {
                return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
            },
            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),
            ajax: function(url, options) {
                function done(status, nativeStatusText, responses, headers) {
                    var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                    completed || (completed = !0, timeoutTimer && window.clearTimeout(timeoutTimer), transport = void 0, responseHeadersString = headers || "", jqXHR.readyState = status > 0 ? 4 : 0, isSuccess = status >= 200 && status < 300 || 304 === status, responses && (response = ajaxHandleResponses(s, jqXHR, responses)), response = ajaxConvert(s, response, jqXHR, isSuccess), isSuccess ? (s.ifModified && (modified = jqXHR.getResponseHeader("Last-Modified"), modified && (jQuery.lastModified[cacheURL] = modified), modified = jqXHR.getResponseHeader("etag"), modified && (jQuery.etag[cacheURL] = modified)), 204 === status || "HEAD" === s.type ? statusText = "nocontent" : 304 === status ? statusText = "notmodified" : (statusText = response.state, success = response.data, error = response.error, isSuccess = !error)) : (error = statusText, !status && statusText || (statusText = "error", status < 0 && (status = 0))), jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + "", isSuccess ? deferred.resolveWith(callbackContext, [success, statusText, jqXHR]) : deferred.rejectWith(callbackContext, [jqXHR, statusText, error]), jqXHR.statusCode(statusCode), statusCode = void 0, fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]), completeDeferred.fireWith(callbackContext, [jqXHR, statusText]), fireGlobals && (globalEventContext.trigger("ajaxComplete", [jqXHR, s]), --jQuery.active || jQuery.event.trigger("ajaxStop")))
                }
                "object" == typeof url && (options = url, url = void 0), options = options || {};
                var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options),
                    callbackContext = s.context || s,
                    globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                    deferred = jQuery.Deferred(),
                    completeDeferred = jQuery.Callbacks("once memory"),
                    statusCode = s.statusCode || {},
                    requestHeaders = {},
                    requestHeadersNames = {},
                    strAbort = "canceled",
                    jqXHR = {
                        readyState: 0,
                        getResponseHeader: function(key) {
                            var match;
                            if (completed) {
                                if (!responseHeaders)
                                    for (responseHeaders = {}; match = rheaders.exec(responseHeadersString);) responseHeaders[match[1].toLowerCase()] = match[2];
                                match = responseHeaders[key.toLowerCase()]
                            }
                            return null == match ? null : match
                        },
                        getAllResponseHeaders: function() {
                            return completed ? responseHeadersString : null
                        },
                        setRequestHeader: function(name, value) {
                            return null == completed && (name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name, requestHeaders[name] = value), this
                        },
                        overrideMimeType: function(type) {
                            return null == completed && (s.mimeType = type), this
                        },
                        statusCode: function(map) {
                            var code;
                            if (map)
                                if (completed) jqXHR.always(map[jqXHR.status]);
                                else
                                    for (code in map) statusCode[code] = [statusCode[code], map[code]];
                            return this
                        },
                        abort: function(statusText) {
                            var finalText = statusText || strAbort;
                            return transport && transport.abort(finalText), done(0, finalText), this
                        }
                    };
                if (deferred.promise(jqXHR), s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""], null == s.crossDomain) {
                    urlAnchor = document.createElement("a");
                    try {
                        urlAnchor.href = s.url, urlAnchor.href = urlAnchor.href, s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host
                    } catch (e) {
                        s.crossDomain = !0
                    }
                }
                if (s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), completed) return jqXHR;
                fireGlobals = jQuery.event && s.global, fireGlobals && 0 === jQuery.active++ && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url.replace(rhash, ""), s.hasContent ? s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && (s.data = s.data.replace(r20, "+")) : (uncached = s.url.slice(cacheURL.length), s.data && (cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data, delete s.data), s.cache === !1 && (cacheURL = cacheURL.replace(rantiCache, "$1"), uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached), s.url = cacheURL + uncached), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && s.contentType !== !1 || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
                if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === !1 || completed)) return jqXHR.abort();
                if (strAbort = "abort", completeDeferred.add(s.complete), jqXHR.done(s.success), jqXHR.fail(s.error), transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
                    if (jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [jqXHR, s]), completed) return jqXHR;
                    s.async && s.timeout > 0 && (timeoutTimer = window.setTimeout(function() {
                        jqXHR.abort("timeout")
                    }, s.timeout));
                    try {
                        completed = !1, transport.send(requestHeaders, done)
                    } catch (e) {
                        if (completed) throw e;
                        done(-1, e)
                    }
                } else done(-1, "No Transport");
                return jqXHR
            },
            getJSON: function(url, data, callback) {
                return jQuery.get(url, data, callback, "json")
            },
            getScript: function(url, callback) {
                return jQuery.get(url, void 0, callback, "script")
            }
        }), jQuery.each(["get", "post"], function(i, method) {
            jQuery[method] = function(url, data, callback, type) {
                return jQuery.isFunction(data) && (type = type || callback, callback = data, data = void 0), jQuery.ajax(jQuery.extend({
                    url: url,
                    type: method,
                    dataType: type,
                    data: data,
                    success: callback
                }, jQuery.isPlainObject(url) && url))
            }
        }), jQuery._evalUrl = function(url) {
            return jQuery.ajax({
                url: url,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, jQuery.fn.extend({
            wrapAll: function(html) {
                var wrap;
                return this[0] && (jQuery.isFunction(html) && (html = html.call(this[0])), wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && wrap.insertBefore(this[0]), wrap.map(function() {
                    for (var elem = this; elem.firstElementChild;) elem = elem.firstElementChild;
                    return elem
                }).append(this)), this
            },
            wrapInner: function(html) {
                return jQuery.isFunction(html) ? this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i))
                }) : this.each(function() {
                    var self = jQuery(this),
                        contents = self.contents();
                    contents.length ? contents.wrapAll(html) : self.append(html)
                })
            },
            wrap: function(html) {
                var isFunction = jQuery.isFunction(html);
                return this.each(function(i) {
                    jQuery(this).wrapAll(isFunction ? html.call(this, i) : html)
                })
            },
            unwrap: function(selector) {
                return this.parent(selector).not("body").each(function() {
                    jQuery(this).replaceWith(this.childNodes)
                }), this
            }
        }), jQuery.expr.pseudos.hidden = function(elem) {
            return !jQuery.expr.pseudos.visible(elem)
        }, jQuery.expr.pseudos.visible = function(elem) {
            return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
        }, jQuery.ajaxSettings.xhr = function() {
            try {
                return new window.XMLHttpRequest
            } catch (e) {}
        };
        var xhrSuccessStatus = {
                0: 200,
                1223: 204
            },
            xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported, support.ajax = xhrSupported = !!xhrSupported, jQuery.ajaxTransport(function(options) {
            var callback, errorCallback;
            if (support.cors || xhrSupported && !options.crossDomain) return {
                send: function(headers, complete) {
                    var i, xhr = options.xhr();
                    if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields)
                        for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                    options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest");
                    for (i in headers) xhr.setRequestHeader(i, headers[i]);
                    callback = function(type) {
                        return function() {
                            callback && (callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null, "abort" === type ? xhr.abort() : "error" === type ? "number" != typeof xhr.status ? complete(0, "error") : complete(xhr.status, xhr.statusText) : complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                                binary: xhr.response
                            } : {
                                text: xhr.responseText
                            }, xhr.getAllResponseHeaders()))
                        }
                    }, xhr.onload = callback(), errorCallback = xhr.onerror = callback("error"), void 0 !== xhr.onabort ? xhr.onabort = errorCallback : xhr.onreadystatechange = function() {
                        4 === xhr.readyState && window.setTimeout(function() {
                            callback && errorCallback()
                        })
                    }, callback = callback("abort");
                    try {
                        xhr.send(options.hasContent && options.data || null)
                    } catch (e) {
                        if (callback) throw e
                    }
                },
                abort: function() {
                    callback && callback()
                }
            }
        }), jQuery.ajaxPrefilter(function(s) {
            s.crossDomain && (s.contents.script = !1)
        }), jQuery.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(text) {
                    return jQuery.globalEval(text), text
                }
            }
        }), jQuery.ajaxPrefilter("script", function(s) {
            void 0 === s.cache && (s.cache = !1), s.crossDomain && (s.type = "GET")
        }), jQuery.ajaxTransport("script", function(s) {
            if (s.crossDomain) {
                var script, callback;
                return {
                    send: function(_, complete) {
                        script = jQuery("<script>").prop({
                            charset: s.scriptCharset,
                            src: s.url
                        }).on("load error", callback = function(evt) {
                            script.remove(), callback = null, evt && complete("error" === evt.type ? 404 : 200, evt.type)
                        }), document.head.appendChild(script[0])
                    },
                    abort: function() {
                        callback && callback()
                    }
                }
            }
        });
        var oldCallbacks = [],
            rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
                return this[callback] = !0, callback
            }
        }), jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
            var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
            if (jsonProp || "jsonp" === s.dataTypes[0]) return callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== !1 && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
                return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0]
            }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
                responseContainer = arguments
            }, jqXHR.always(function() {
                void 0 === overwritten ? jQuery(window).removeProp(callbackName) : window[callbackName] = overwritten, s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, oldCallbacks.push(callbackName)), responseContainer && jQuery.isFunction(overwritten) && overwritten(responseContainer[0]), responseContainer = overwritten = void 0
            }), "script"
        }), support.createHTMLDocument = function() {
            var body = document.implementation.createHTMLDocument("").body;
            return body.innerHTML = "<form></form><form></form>", 2 === body.childNodes.length
        }(), jQuery.parseHTML = function(data, context, keepScripts) {
            if ("string" != typeof data) return [];
            "boolean" == typeof context && (keepScripts = context, context = !1);
            var base, parsed, scripts;
            return context || (support.createHTMLDocument ? (context = document.implementation.createHTMLDocument(""), base = context.createElement("base"), base.href = document.location.href, context.head.appendChild(base)) : context = document), parsed = rsingleTag.exec(data), scripts = !keepScripts && [], parsed ? [context.createElement(parsed[1])] : (parsed = buildFragment([data], context, scripts), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes))
        }, jQuery.fn.load = function(url, params, callback) {
            var selector, type, response, self = this,
                off = url.indexOf(" ");
            return off > -1 && (selector = stripAndCollapse(url.slice(off)), url = url.slice(0, off)), jQuery.isFunction(params) ? (callback = params, params = void 0) : params && "object" == typeof params && (type = "POST"), self.length > 0 && jQuery.ajax({
                url: url,
                type: type || "GET",
                dataType: "html",
                data: params
            }).done(function(responseText) {
                response = arguments, self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
            }).always(callback && function(jqXHR, status) {
                self.each(function() {
                    callback.apply(this, response || [jqXHR.responseText, status, jqXHR])
                })
            }), this
        }, jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
            jQuery.fn[type] = function(fn) {
                return this.on(type, fn)
            }
        }), jQuery.expr.pseudos.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
                return elem === fn.elem
            }).length
        }, jQuery.offset = {
            setOffset: function(elem, options, i) {
                var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"),
                    curElem = jQuery(elem),
                    props = {};
                "static" === position && (elem.style.position = "relative"), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = ("absolute" === position || "fixed" === position) && (curCSSTop + curCSSLeft).indexOf("auto") > -1, calculatePosition ? (curPosition = curElem.position(), curTop = curPosition.top, curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, curLeft = parseFloat(curCSSLeft) || 0), jQuery.isFunction(options) && (options = options.call(elem, i, jQuery.extend({}, curOffset))), null != options.top && (props.top = options.top - curOffset.top + curTop), null != options.left && (props.left = options.left - curOffset.left + curLeft), "using" in options ? options.using.call(elem, props) : curElem.css(props)
            }
        }, jQuery.fn.extend({
            offset: function(options) {
                if (arguments.length) return void 0 === options ? this : this.each(function(i) {
                    jQuery.offset.setOffset(this, options, i)
                });
                var doc, docElem, rect, win, elem = this[0];
                if (elem) return elem.getClientRects().length ? (rect = elem.getBoundingClientRect(), doc = elem.ownerDocument, docElem = doc.documentElement, win = doc.defaultView, {
                    top: rect.top + win.pageYOffset - docElem.clientTop,
                    left: rect.left + win.pageXOffset - docElem.clientLeft
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var offsetParent, offset, elem = this[0],
                        parentOffset = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === jQuery.css(elem, "position") ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset = {
                        top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", !0),
                        left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", !0)
                    }), {
                        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var offsetParent = this.offsetParent; offsetParent && "static" === jQuery.css(offsetParent, "position");) offsetParent = offsetParent.offsetParent;
                    return offsetParent || documentElement
                })
            }
        }), jQuery.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(method, prop) {
            var top = "pageYOffset" === prop;
            jQuery.fn[method] = function(val) {
                return access(this, function(elem, method, val) {
                    var win;
                    return jQuery.isWindow(elem) ? win = elem : 9 === elem.nodeType && (win = elem.defaultView), void 0 === val ? win ? win[prop] : elem[method] : void(win ? win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset) : elem[method] = val)
                }, method, val, arguments.length)
            }
        }), jQuery.each(["top", "left"], function(i, prop) {
            jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
                if (computed) return computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed
            })
        }), jQuery.each({
            Height: "height",
            Width: "width"
        }, function(name, type) {
            jQuery.each({
                padding: "inner" + name,
                content: type,
                "": "outer" + name
            }, function(defaultExtra, funcName) {
                jQuery.fn[funcName] = function(margin, value) {
                    var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin),
                        extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");
                    return access(this, function(elem, type, value) {
                        var doc;
                        return jQuery.isWindow(elem) ? 0 === funcName.indexOf("outer") ? elem["inner" + name] : elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
                    }, type, chainable ? margin : void 0, chainable)
                }
            })
        }), jQuery.fn.extend({
            bind: function(types, data, fn) {
                return this.on(types, null, data, fn)
            },
            unbind: function(types, fn) {
                return this.off(types, null, fn)
            },
            delegate: function(selector, types, data, fn) {
                return this.on(types, selector, data, fn)
            },
            undelegate: function(selector, types, fn) {
                return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn)
            },
            holdReady: function(hold) {
                hold ? jQuery.readyWait++ : jQuery.ready(!0)
            }
        }), jQuery.isArray = Array.isArray, jQuery.parseJSON = JSON.parse, jQuery.nodeName = nodeName, __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return jQuery
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        var _jQuery = window.jQuery,
            _$ = window.$;
        return jQuery.noConflict = function(deep) {
            return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery
        }, noGlobal || (window.jQuery = window.$ = jQuery), jQuery
    })
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    ! function(a) {
        "use strict";
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = a, __WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }(function(a) {
        "use strict";
        var b = window.Slick || {};
        b = function() {
            function c(c, d) {
                var f, e = this;
                e.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(c),
                    appendDots: a(c),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(b, c) {
                        return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, e.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
            }
            var b = 0;
            return c
        }(), b.prototype.activateADA = function() {
            var a = this;
            a.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
            var e = this;
            if ("boolean" == typeof c) d = c, c = null;
            else if (0 > c || c >= e.slideCount) return !1;
            e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
                a(c).attr("data-slick-index", b)
            }), e.$slidesCache = e.$slides, e.reinit()
        }, b.prototype.animateHeight = function() {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.animate({
                    height: b
                }, a.options.speed)
            }
        }, b.prototype.animateSlide = function(b, c) {
            var d = {},
                e = this;
            e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
                left: b
            }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
                top: b
            }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
                animStart: e.currentLeft
            }).animate({
                animStart: b
            }, {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function(a) {
                    a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
                },
                complete: function() {
                    c && c.call()
                }
            })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
                e.disableTransition(), c.call()
            }, e.options.speed))
        }, b.prototype.getNavTarget = function() {
            var b = this,
                c = b.options.asNavFor;
            return c && null !== c && (c = a(c).not(b.$slider)), c
        }, b.prototype.asNavFor = function(b) {
            var c = this,
                d = c.getNavTarget();
            null !== d && "object" == typeof d && d.each(function() {
                var c = a(this).slick("getSlick");
                c.unslicked || c.slideHandler(b, !0)
            })
        }, b.prototype.applyTransition = function(a) {
            var b = this,
                c = {};
            b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.autoPlay = function() {
            var a = this;
            a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
        }, b.prototype.autoPlayClear = function() {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer)
        }, b.prototype.autoPlayIterator = function() {
            var a = this,
                b = a.currentSlide + a.options.slidesToScroll;
            a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
        }, b.prototype.buildArrows = function() {
            var b = this;
            b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, b.prototype.buildDots = function() {
            var c, d, b = this;
            if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
                for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
                b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, b.prototype.buildOut = function() {
            var b = this;
            b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
                a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
            }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
        }, b.prototype.buildRows = function() {
            var b, c, d, e, f, g, h, a = this;
            if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
                for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                    var i = document.createElement("div");
                    for (c = 0; c < a.options.rows; c++) {
                        var j = document.createElement("div");
                        for (d = 0; d < a.options.slidesPerRow; d++) {
                            var k = b * h + (c * a.options.slidesPerRow + d);
                            g.get(k) && j.appendChild(g.get(k))
                        }
                        i.appendChild(j)
                    }
                    e.appendChild(i)
                }
                a.$slider.empty().append(e), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, b.prototype.checkResponsive = function(b, c) {
            var e, f, g, d = this,
                h = !1,
                i = d.$slider.width(),
                j = window.innerWidth || a(window).width();
            if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
                f = null;
                for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
                null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
            }
        }, b.prototype.changeSlide = function(b, c) {
            var f, g, h, d = this,
                e = a(b.currentTarget);
            switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
                case "previous":
                    g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                    break;
                case "next":
                    g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                    break;
                case "index":
                    var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                    d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, b.prototype.checkNavigable = function(a) {
            var c, d, b = this;
            if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
            else
                for (var e in c) {
                    if (a < c[e]) {
                        a = d;
                        break
                    }
                    d = c[e]
                }
            return a
        }, b.prototype.cleanUpEvents = function() {
            var b = this;
            b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.cleanUpSlideEvents = function() {
            var b = this;
            b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
        }, b.prototype.cleanUpRows = function() {
            var b, a = this;
            a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
        }, b.prototype.clickHandler = function(a) {
            var b = this;
            b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
        }, b.prototype.destroy = function(b) {
            var c = this;
            c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                a(this).attr("style", a(this).data("originalStyling"))
            }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
        }, b.prototype.disableTransition = function(a) {
            var b = this,
                c = {};
            c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.fadeSlide = function(a, b) {
            var c = this;
            c.cssTransitions === !1 ? (c.$slides.eq(a).css({
                zIndex: c.options.zIndex
            }), c.$slides.eq(a).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
                opacity: 1,
                zIndex: c.options.zIndex
            }), b && setTimeout(function() {
                c.disableTransition(a), b.call()
            }, c.options.speed))
        }, b.prototype.fadeSlideOut = function(a) {
            var b = this;
            b.cssTransitions === !1 ? b.$slides.eq(a).animate({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }))
        }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
            var b = this;
            null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
        }, b.prototype.focusHandler = function() {
            var b = this;
            b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
                c.stopImmediatePropagation();
                var d = a(this);
                setTimeout(function() {
                    b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
                }, 0)
            })
        }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
            var a = this;
            return a.currentSlide
        }, b.prototype.getDotCount = function() {
            var a = this,
                b = 0,
                c = 0,
                d = 0;
            if (a.options.infinite === !0)
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            else if (a.options.centerMode === !0) d = a.slideCount;
            else if (a.options.asNavFor)
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
            return d - 1
        }, b.prototype.getLeft = function(a) {
            var c, d, f, b = this,
                e = 0;
            return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
        }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
            var b = this;
            return b.options[a]
        }, b.prototype.getNavigableIndexes = function() {
            var e, a = this,
                b = 0,
                c = 0,
                d = [];
            for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            return d
        }, b.prototype.getSlick = function() {
            return this
        }, b.prototype.getSlideCount = function() {
            var c, d, e, b = this;
            return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
                return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
            }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
        }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
            var c = this;
            c.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(a)
                }
            }, b)
        }, b.prototype.init = function(b) {
            var c = this;
            a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
        }, b.prototype.initADA = function() {
            var b = this;
            b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
                a(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + b.instanceUid + c
                })
            }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
                a(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + b.instanceUid + c,
                    id: "slick-slide" + b.instanceUid + c
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
        }, b.prototype.initArrowEvents = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, a.changeSlide))
        }, b.prototype.initDotEvents = function() {
            var b = this;
            b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
                message: "index"
            }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
        }, b.prototype.initSlideEvents = function() {
            var b = this;
            b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
        }, b.prototype.initializeEvents = function() {
            var b = this;
            b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.initUI = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
        }, b.prototype.keyHandler = function(a) {
            var b = this;
            a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
                data: {
                    message: b.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
                data: {
                    message: b.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, b.prototype.lazyLoad = function() {
            function g(c) {
                a("img[data-lazy]", c).each(function() {
                    var c = a(this),
                        d = a(this).attr("data-lazy"),
                        e = document.createElement("img");
                    e.onload = function() {
                        c.animate({
                            opacity: 0
                        }, 100, function() {
                            c.attr("src", d).animate({
                                opacity: 1
                            }, 200, function() {
                                c.removeAttr("data-lazy").removeClass("slick-loading")
                            }), b.$slider.trigger("lazyLoaded", [b, c, d])
                        })
                    }, e.onerror = function() {
                        c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
                    }, e.src = d
                })
            }
            var c, d, e, f, b = this;
            b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
        }, b.prototype.loadSlider = function() {
            var a = this;
            a.setPosition(), a.$slideTrack.css({
                opacity: 1
            }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
        }, b.prototype.next = b.prototype.slickNext = function() {
            var a = this;
            a.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, b.prototype.orientationChange = function() {
            var a = this;
            a.checkResponsive(), a.setPosition()
        }, b.prototype.pause = b.prototype.slickPause = function() {
            var a = this;
            a.autoPlayClear(), a.paused = !0
        }, b.prototype.play = b.prototype.slickPlay = function() {
            var a = this;
            a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
        }, b.prototype.postSlide = function(a) {
            var b = this;
            b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
        }, b.prototype.prev = b.prototype.slickPrev = function() {
            var a = this;
            a.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, b.prototype.preventDefault = function(a) {
            a.preventDefault()
        }, b.prototype.progressiveLazyLoad = function(b) {
            b = b || 1;
            var e, f, g, c = this,
                d = a("img[data-lazy]", c.$slider);
            d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function() {
                e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
            }, g.onerror = function() {
                3 > b ? setTimeout(function() {
                    c.progressiveLazyLoad(b + 1)
                }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
            }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
        }, b.prototype.refresh = function(b) {
            var d, e, c = this;
            e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
                currentSlide: d
            }), c.init(), b || c.changeSlide({
                data: {
                    message: "index",
                    index: d
                }
            }, !1)
        }, b.prototype.registerBreakpoints = function() {
            var c, d, e, b = this,
                f = b.options.responsive || null;
            if ("array" === a.type(f) && f.length) {
                b.respondTo = b.options.respondTo || "window";
                for (c in f)
                    if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                        for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                        b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                    }
                b.breakpoints.sort(function(a, c) {
                    return b.options.mobileFirst ? a - c : c - a
                })
            }
        }, b.prototype.reinit = function() {
            var b = this;
            b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
        }, b.prototype.resize = function() {
            var b = this;
            a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
                b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
            }, 50))
        }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
            var d = this;
            return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, !(d.slideCount < 1 || 0 > a || a > d.slideCount - 1) && (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
        }, b.prototype.setCSS = function(a) {
            var d, e, b = this,
                c = {};
            b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
        }, b.prototype.setDimensions = function() {
            var a = this;
            a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
                padding: "0px " + a.options.centerPadding
            }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
                padding: a.options.centerPadding + " 0px"
            })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
            var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
            a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
        }, b.prototype.setFade = function() {
            var c, b = this;
            b.$slides.each(function(d, e) {
                c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                    position: "relative",
                    right: c,
                    top: 0,
                    zIndex: b.options.zIndex - 2,
                    opacity: 0
                }) : a(e).css({
                    position: "relative",
                    left: c,
                    top: 0,
                    zIndex: b.options.zIndex - 2,
                    opacity: 0
                })
            }), b.$slides.eq(b.currentSlide).css({
                zIndex: b.options.zIndex - 1,
                opacity: 1
            })
        }, b.prototype.setHeight = function() {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.css("height", b)
            }
        }, b.prototype.setOption = b.prototype.slickSetOption = function() {
            var c, d, e, f, h, b = this,
                g = !1;
            if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
            else if ("multiple" === h) a.each(e, function(a, c) {
                b.options[a] = c
            });
            else if ("responsive" === h)
                for (d in f)
                    if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                    else {
                        for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                        b.options.responsive.push(f[d])
                    }
            g && (b.unload(), b.reinit())
        }, b.prototype.setPosition = function() {
            var a = this;
            a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
        }, b.prototype.setProps = function() {
            var a = this,
                b = document.body.style;
            a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
        }, b.prototype.setSlideClasses = function(a) {
            var c, d, e, f, b = this;
            d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
        }, b.prototype.setupInfinite = function() {
            var c, d, e, b = this;
            if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
                for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
                for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
                b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    a(this).attr("id", "")
                })
            }
        }, b.prototype.interrupt = function(a) {
            var b = this;
            a || b.autoPlay(), b.interrupted = a
        }, b.prototype.selectHandler = function(b) {
            var c = this,
                d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
                e = parseInt(d.attr("data-slick-index"));
            return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
        }, b.prototype.slideHandler = function(a, b, c) {
            var d, e, f, g, j, h = null,
                i = this;
            return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
                i.postSlide(d)
            }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
                i.postSlide(d)
            }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
                i.postSlide(e)
            })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
                i.postSlide(e)
            }) : i.postSlide(e))))
        }, b.prototype.startLoad = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
        }, b.prototype.swipeDirection = function() {
            var a, b, c, d, e = this;
            return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
        }, b.prototype.swipeEnd = function(a) {
            var c, d, b = this;
            if (b.dragging = !1, b.interrupted = !1, b.shouldClick = !(b.touchObject.swipeLength > 10), void 0 === b.touchObject.curX) return !1;
            if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
                switch (d = b.swipeDirection()) {
                    case "left":
                    case "down":
                        c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
                }
                "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
            } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
        }, b.prototype.swipeHandler = function(a) {
            var b = this;
            if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
                case "start":
                    b.swipeStart(a);
                    break;
                case "move":
                    b.swipeMove(a);
                    break;
                case "end":
                    b.swipeEnd(a)
            }
        }, b.prototype.swipeMove = function(a) {
            var d, e, f, g, h, b = this;
            return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !(!b.dragging || h && 1 !== h.length) && (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade !== !0 && b.options.touchMove !== !1 && (b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft))) : void 0)
        }, b.prototype.swipeStart = function(a) {
            var c, b = this;
            return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
        }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
            var a = this;
            null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
        }, b.prototype.unload = function() {
            var b = this;
            a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, b.prototype.unslick = function(a) {
            var b = this;
            b.$slider.trigger("unslick", [b, a]), b.destroy()
        }, b.prototype.updateArrows = function() {
            var b, a = this;
            b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, b.prototype.updateDots = function() {
            var a = this;
            null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, b.prototype.visibility = function() {
            var a = this;
            a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
        }, a.fn.slick = function() {
            var f, g, a = this,
                c = arguments[0],
                d = Array.prototype.slice.call(arguments, 1),
                e = a.length;
            for (f = 0; e > f; f++)
                if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
            return a
        }
    })
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(global, __webpack_provided_window_dot_jQuery) {
        var $jscomp = {
            scope: {},
            findInternal: function(a, f, c) {
                a instanceof String && (a = String(a));
                for (var l = a.length, g = 0; g < l; g++) {
                    var b = a[g];
                    if (f.call(c, b, g, a)) return {
                        i: g,
                        v: b
                    }
                }
                return {
                    i: -1,
                    v: void 0
                }
            }
        };
        $jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, f, c) {
                if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
                a != Array.prototype && a != Object.prototype && (a[f] = c.value)
            }, $jscomp.getGlobal = function(a) {
                return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
            }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function(a, f, c, l) {
                if (f) {
                    for (c = $jscomp.global, a = a.split("."), l = 0; l < a.length - 1; l++) {
                        var g = a[l];
                        g in c || (c[g] = {}), c = c[g]
                    }
                    a = a[a.length - 1], l = c[a], f = f(l), f != l && null != f && $jscomp.defineProperty(c, a, {
                        configurable: !0,
                        writable: !0,
                        value: f
                    })
                }
            }, $jscomp.polyfill("Array.prototype.find", function(a) {
                return a ? a : function(a, c) {
                    return $jscomp.findInternal(this, a, c).v
                }
            }, "es6-impl", "es3"),
            function(a, f, c) {
                __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = a, __WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            }(function(a) {
                var f = function(b, h, e) {
                    var d = {
                        invalid: [],
                        getCaret: function() {
                            try {
                                var a, n = 0,
                                    h = b.get(0),
                                    e = document.selection,
                                    k = h.selectionStart;
                                return e && -1 === navigator.appVersion.indexOf("MSIE 10") ? (a = e.createRange(), a.moveStart("character", -d.val().length), n = a.text.length) : (k || "0" === k) && (n = k), n
                            } catch (A) {}
                        },
                        setCaret: function(a) {
                            try {
                                if (b.is(":focus")) {
                                    var p, d = b.get(0);
                                    d.setSelectionRange ? d.setSelectionRange(a, a) : (p = d.createTextRange(), p.collapse(!0), p.moveEnd("character", a), p.moveStart("character", a), p.select())
                                }
                            } catch (z) {}
                        },
                        events: function() {
                            b.on("keydown.mask", function(a) {
                                b.data("mask-keycode", a.keyCode || a.which), b.data("mask-previus-value", b.val())
                            }).on(a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", d.behaviour).on("paste.mask drop.mask", function() {
                                setTimeout(function() {
                                    b.keydown().keyup()
                                }, 100)
                            }).on("change.mask", function() {
                                b.data("changed", !0)
                            }).on("blur.mask", function() {
                                c === d.val() || b.data("changed") || b.trigger("change"), b.data("changed", !1)
                            }).on("blur.mask", function() {
                                c = d.val()
                            }).on("focus.mask", function(b) {
                                !0 === e.selectOnFocus && a(b.target).select()
                            }).on("focusout.mask", function() {
                                e.clearIfNotMatch && !g.test(d.val()) && d.val("")
                            })
                        },
                        getRegexMask: function() {
                            for (var b, d, e, k, a = [], c = 0; c < h.length; c++)(b = m.translation[h.charAt(c)]) ? (d = b.pattern.toString().replace(/.{1}$|^.{1}/g, ""), e = b.optional, (b = b.recursive) ? (a.push(h.charAt(c)), k = {
                                digit: h.charAt(c),
                                pattern: d
                            }) : a.push(e || b ? d + "?" : d)) : a.push(h.charAt(c).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                            return a = a.join(""), k && (a = a.replace(new RegExp("(" + k.digit + "(.*" + k.digit + ")?)"), "($1)?").replace(new RegExp(k.digit, "g"), k.pattern)), new RegExp(a)
                        },
                        destroyEvents: function() {
                            b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
                        },
                        val: function(a) {
                            var d = b.is("input") ? "val" : "text";
                            return 0 < arguments.length ? (b[d]() !== a && b[d](a), d = b) : d = b[d](), d
                        },
                        calculateCaretPosition: function(a, d) {
                            var h = d.length,
                                e = b.data("mask-previus-value") || "",
                                k = e.length;
                            return 8 === b.data("mask-keycode") && e !== d ? a -= d.slice(0, a).length - e.slice(0, a).length : e !== d && (a = a >= k ? h : a + (d.slice(0, a).length - e.slice(0, a).length)), a
                        },
                        behaviour: function(e) {
                            e = e || window.event, d.invalid = [];
                            var h = b.data("mask-keycode");
                            if (-1 === a.inArray(h, m.byPassKeys)) {
                                var h = d.getMasked(),
                                    c = d.getCaret();
                                return setTimeout(function(a, b) {
                                    d.setCaret(d.calculateCaretPosition(a, b))
                                }, 10, c, h), d.val(h), d.setCaret(c), d.callbacks(e)
                            }
                        },
                        getMasked: function(a, b) {
                            var r, u, c = [],
                                p = void 0 === b ? d.val() : b + "",
                                k = 0,
                                g = h.length,
                                f = 0,
                                l = p.length,
                                n = 1,
                                v = "push",
                                w = -1;
                            e.reverse ? (v = "unshift", n = -1, r = 0, k = g - 1, f = l - 1, u = function() {
                                return -1 < k && -1 < f
                            }) : (r = g - 1, u = function() {
                                return k < g && f < l
                            });
                            for (var y; u();) {
                                var x = h.charAt(k),
                                    t = p.charAt(f),
                                    q = m.translation[x];
                                q ? (t.match(q.pattern) ? (c[v](t), q.recursive && (-1 === w ? w = k : k === r && (k = w - n), r === w && (k -= n)), k += n) : t === y ? y = void 0 : q.optional ? (k += n, f -= n) : q.fallback ? (c[v](q.fallback), k += n, f -= n) : d.invalid.push({
                                    p: f,
                                    v: t,
                                    e: q.pattern
                                }), f += n) : (a || c[v](x), t === x ? f += n : y = x, k += n)
                            }
                            return p = h.charAt(r), g !== l + 1 || m.translation[p] || c.push(p), c.join("")
                        },
                        callbacks: function(a) {
                            var f = d.val(),
                                p = f !== c,
                                g = [f, a, b, e],
                                k = function(a, b, d) {
                                    "function" == typeof e[a] && b && e[a].apply(this, d)
                                };
                            k("onChange", !0 === p, g), k("onKeyPress", !0 === p, g), k("onComplete", f.length === h.length, g), k("onInvalid", 0 < d.invalid.length, [f, a, b, d.invalid, e])
                        }
                    };
                    b = a(b);
                    var g, m = this,
                        c = d.val();
                    h = "function" == typeof h ? h(d.val(), void 0, b, e) : h, m.mask = h, m.options = e, m.remove = function() {
                        var a = d.getCaret();
                        return d.destroyEvents(), d.val(m.getCleanVal()), d.setCaret(a), b
                    }, m.getCleanVal = function() {
                        return d.getMasked(!0)
                    }, m.getMaskedVal = function(a) {
                        return d.getMasked(!1, a)
                    }, m.init = function(c) {
                        if (c = c || !1, e = e || {}, m.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch, m.byPassKeys = a.jMaskGlobals.byPassKeys, m.translation = a.extend({}, a.jMaskGlobals.translation, e.translation), m = a.extend(!0, {}, m, e), g = d.getRegexMask(), c) d.events(), d.val(d.getMasked());
                        else {
                            e.placeholder && b.attr("placeholder", e.placeholder), b.data("mask") && b.attr("autocomplete", "off"), c = 0;
                            for (var f = !0; c < h.length; c++) {
                                var l = m.translation[h.charAt(c)];
                                if (l && l.recursive) {
                                    f = !1;
                                    break
                                }
                            }
                            f && b.attr("maxlength", h.length), d.destroyEvents(), d.events(), c = d.getCaret(), d.val(d.getMasked()), d.setCaret(c)
                        }
                    }, m.init(!b.is("input"))
                };
                a.maskWatchers = {};
                var c = function() {
                        var b = a(this),
                            c = {},
                            e = b.attr("data-mask");
                        if (b.attr("data-mask-reverse") && (c.reverse = !0), b.attr("data-mask-clearifnotmatch") && (c.clearIfNotMatch = !0), "true" === b.attr("data-mask-selectonfocus") && (c.selectOnFocus = !0), l(b, e, c)) return b.data("mask", new f(this, e, c))
                    },
                    l = function(b, c, e) {
                        e = e || {};
                        var d = a(b).data("mask"),
                            h = JSON.stringify;
                        b = a(b).val() || a(b).text();
                        try {
                            return "function" == typeof c && (c = c(b)), "object" != typeof d || h(d.options) !== h(e) || d.mask !== c
                        } catch (u) {}
                    },
                    g = function(a) {
                        var c, b = document.createElement("div");
                        return a = "on" + a, c = a in b, c || (b.setAttribute(a, "return;"), c = "function" == typeof b[a]), c
                    };
                a.fn.mask = function(b, c) {
                    c = c || {};
                    var e = this.selector,
                        d = a.jMaskGlobals,
                        h = d.watchInterval,
                        d = c.watchInputs || d.watchInputs,
                        g = function() {
                            if (l(this, b, c)) return a(this).data("mask", new f(this, b, c))
                        };
                    return a(this).each(g), e && "" !== e && d && (clearInterval(a.maskWatchers[e]), a.maskWatchers[e] = setInterval(function() {
                        a(document).find(e).each(g)
                    }, h)), this
                }, a.fn.masked = function(a) {
                    return this.data("mask").getMaskedVal(a)
                }, a.fn.unmask = function() {
                    return clearInterval(a.maskWatchers[this.selector]), delete a.maskWatchers[this.selector], this.each(function() {
                        var b = a(this).data("mask");
                        b && b.remove().removeData("mask")
                    })
                }, a.fn.cleanVal = function() {
                    return this.data("mask").getCleanVal()
                }, a.applyDataMask = function(b) {
                    b = b || a.jMaskGlobals.maskElements, (b instanceof a ? b : a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(c)
                }, g = {
                    maskElements: "input,td,span,div",
                    dataMaskAttr: "*[data-mask]",
                    dataMask: !0,
                    watchInterval: 300,
                    watchInputs: !0,
                    useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && g("input"),
                    watchDataMask: !1,
                    byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
                    translation: {
                        0: {
                            pattern: /\d/
                        },
                        9: {
                            pattern: /\d/,
                            optional: !0
                        },
                        "#": {
                            pattern: /\d/,
                            recursive: !0
                        },
                        A: {
                            pattern: /[a-zA-Z0-9]/
                        },
                        S: {
                            pattern: /[a-zA-Z]/
                        }
                    }
                }, a.jMaskGlobals = a.jMaskGlobals || {}, g = a.jMaskGlobals = a.extend(!0, {}, g, a.jMaskGlobals), g.dataMask && a.applyDataMask(), setInterval(function() {
                    a.jMaskGlobals.watchDataMask && a.applyDataMask()
                }, g.watchInterval)
            }, __webpack_provided_window_dot_jQuery, window.Zepto)
    }).call(exports, function() {
        return this
    }(), __webpack_require__(1))
}, function(module, exports, __webpack_require__) {
    (function(__webpack_provided_window_dot_jQuery) {
        ! function(t, e, n, o) {
            "use strict";

            function s(t) {
                var e = t.currentTarget,
                    o = t.data ? t.data.options : {},
                    s = t.data ? t.data.items : [],
                    i = "",
                    a = 0;
                t.preventDefault(), t.stopPropagation(), n(e).attr("data-fancybox") && (i = n(e).data("fancybox")), i ? (s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n("[data-fancybox=" + i + "]"), a = s.index(e)) : s = [e], n.fancybox.open(s, o, a)
            }
            if (!n) return o;
            var i = {
                    speed: 330,
                    loop: !0,
                    opacity: "auto",
                    margin: [44, 0],
                    gutter: 30,
                    infobar: !0,
                    buttons: !0,
                    slideShow: !0,
                    fullScreen: !0,
                    thumbs: !0,
                    closeBtn: !0,
                    smallBtn: "auto",
                    image: {
                        preload: "auto",
                        protect: !1
                    },
                    ajax: {
                        settings: {
                            data: {
                                fancybox: !0
                            }
                        }
                    },
                    iframe: {
                        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                        preload: !0,
                        scrolling: "no",
                        css: {}
                    },
                    baseClass: "",
                    slideClass: "",
                    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',
                    spinnerTpl: '<div class="fancybox-loading"></div>',
                    errorTpl: '<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',
                    closeTpl: '<button data-fancybox-close class="fancybox-close-small"></button>',
                    parentEl: "body",
                    touch: !0,
                    keyboard: !0,
                    focus: !0,
                    closeClickOutside: !0,
                    beforeLoad: n.noop,
                    afterLoad: n.noop,
                    beforeMove: n.noop,
                    afterMove: n.noop,
                    onComplete: n.noop,
                    onInit: n.noop,
                    beforeClose: n.noop,
                    afterClose: n.noop,
                    onActivate: n.noop,
                    onDeactivate: n.noop
                },
                a = n(t),
                r = n(e),
                c = 0,
                l = function(t) {
                    return t && t.hasOwnProperty && t instanceof n
                },
                u = function() {
                    return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(e) {
                        t.setTimeout(e, 1e3 / 60)
                    }
                }(),
                d = function(o) {
                    var s;
                    return "function" == typeof n && o instanceof n && (o = o[0]), s = o.getBoundingClientRect(), s.bottom > 0 && s.right > 0 && s.left < (t.innerWidth || e.documentElement.clientWidth) && s.top < (t.innerHeight || e.documentElement.clientHeight)
                },
                p = function(t, o, s) {
                    var a = this;
                    a.opts = n.extend(!0, {
                        index: s
                    }, i, o || {}), a.id = a.opts.id || ++c, a.group = [], a.currIndex = parseInt(a.opts.index, 10) || 0, a.prevIndex = null, a.prevPos = null, a.currPos = 0, a.firstRun = null, a.createGroup(t), a.group.length && (a.$lastFocus = n(e.activeElement).blur(), a.slides = {}, a.init(t))
                };
            n.extend(p.prototype, {
                init: function() {
                    var t, e, o = this,
                        s = !1;
                    o.scrollTop = r.scrollTop(), o.scrollLeft = r.scrollLeft(), n.fancybox.getInstance() || (t = n("body").width(), n("html").addClass("fancybox-enabled"), n.fancybox.isTouch ? (n.each(o.group, function(t, e) {
                        if ("image" !== e.type && "iframe" !== e.type) return s = !0, !1
                    }), s && n("body").css({
                        position: "fixed",
                        width: t,
                        top: o.scrollTop * -1
                    })) : (t = n("body").width() - t, t > 1 && n('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: " + t + "px; }").appendTo("head"))), e = n(o.opts.baseTpl).attr("id", "fancybox-container-" + o.id).data("FancyBox", o).addClass(o.opts.baseClass).hide().prependTo(o.opts.parentEl), o.$refs = {
                        container: e,
                        bg: e.find(".fancybox-bg"),
                        controls: e.find(".fancybox-controls"),
                        buttons: e.find(".fancybox-buttons"),
                        slider_wrap: e.find(".fancybox-slider-wrap"),
                        slider: e.find(".fancybox-slider"),
                        caption: e.find(".fancybox-caption")
                    }, o.trigger("onInit"), o.activate(), o.current || o.jumpTo(o.currIndex)
                },
                createGroup: function(t) {
                    var e = this,
                        s = n.makeArray(t);
                    n.each(s, function(t, s) {
                        var i, a, r, c, l = {},
                            u = {},
                            d = [];
                        n.isPlainObject(s) ? (l = s, u = s.opts || {}) : "object" === n.type(s) && n(s).length ? (i = n(s), d = i.data(), u = "options" in d ? d.options : {}, u = "object" === n.type(u) ? u : {}, l.type = "type" in d ? d.type : u.type, l.src = "src" in d ? d.src : u.src || i.attr("href"), u.width = "width" in d ? d.width : u.width, u.height = "height" in d ? d.height : u.height, u.thumb = "thumb" in d ? d.thumb : u.thumb, u.selector = "selector" in d ? d.selector : u.selector, "srcset" in d && (u.image = {
                            srcset: d.srcset
                        }), u.$orig = i) : l = {
                            type: "html",
                            content: s + ""
                        }, l.opts = n.extend(!0, {}, e.opts, u), a = l.type, r = l.src || "", a || (l.content ? a = "html" : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? a = "pdf" : "#" === r.charAt(0) && (a = "inline"),
                            l.type = a), l.index = e.group.length, l.opts.$orig && !l.opts.$orig.length && delete l.opts.$orig, !l.opts.$thumb && l.opts.$orig && (l.opts.$thumb = l.opts.$orig.find("img:first")), l.opts.$thumb && !l.opts.$thumb.length && delete l.opts.$thumb, "function" === n.type(l.opts.caption) ? l.opts.caption = l.opts.caption.apply(s, [e, l]) : "caption" in d ? l.opts.caption = d.caption : u.$orig && (l.opts.caption = i.attr("title")), l.opts.caption = l.opts.caption === o ? "" : l.opts.caption + "", "ajax" === a && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), l.opts.selector = c.shift())), "auto" == l.opts.smallBtn && (n.inArray(a, ["html", "inline", "ajax"]) > -1 ? (l.opts.buttons = !1, l.opts.smallBtn = !0) : l.opts.smallBtn = !1), "pdf" === a && (l.type = "iframe", l.opts.closeBtn = !0, l.opts.smallBtn = !1, l.opts.iframe.preload = !1), l.opts.modal && n.extend(!0, l.opts, {
                            infobar: 0,
                            buttons: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            closeClickOutside: 0
                        }), e.group.push(l)
                    })
                },
                addEvents: function() {
                    var e = this;
                    e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                        t.stopPropagation(), t.preventDefault(), e.close(t)
                    }).on("click.fb-previous", "[data-fancybox-previous]", function(t) {
                        t.stopPropagation(), t.preventDefault(), e.previous()
                    }).on("click.fb-next", "[data-fancybox-next]", function(t) {
                        t.stopPropagation(), t.preventDefault(), e.next()
                    }), n(t).on("orientationchange.fb resize.fb", function(t) {
                        u(function() {
                            t && t.originalEvent && "resize" === t.originalEvent.type ? e.update() : (e.$refs.slider_wrap.hide(), u(function() {
                                e.$refs.slider_wrap.show(), e.update()
                            }))
                        })
                    }), r.on("focusin.fb", function(t) {
                        var o = n.fancybox ? n.fancybox.getInstance() : null;
                        !o || n(t.target).hasClass("fancybox-container") || n.contains(o.$refs.container[0], t.target) || (t.stopPropagation(), o.focus(), a.scrollTop(e.scrollTop).scrollLeft(e.scrollLeft))
                    }), r.on("keydown.fb", function(t) {
                        var o = e.current,
                            s = t.keyCode || t.which;
                        if (o && o.opts.keyboard && !n(t.target).is("input") && !n(t.target).is("textarea")) {
                            if (8 === s || 27 === s) return t.preventDefault(), void e.close(t);
                            switch (s) {
                                case 37:
                                case 38:
                                    t.preventDefault(), e.previous();
                                    break;
                                case 39:
                                case 40:
                                    t.preventDefault(), e.next();
                                    break;
                                case 80:
                                case 32:
                                    t.preventDefault(), e.SlideShow && (t.preventDefault(), e.SlideShow.toggle());
                                    break;
                                case 70:
                                    e.FullScreen && (t.preventDefault(), e.FullScreen.toggle());
                                    break;
                                case 71:
                                    e.Thumbs && (t.preventDefault(), e.Thumbs.toggle())
                            }
                        }
                    })
                },
                removeEvents: function() {
                    a.off("scroll.fb resize.fb orientationchange.fb"), r.off("keydown.fb focusin.fb click.fb-close"), this.$refs.container.off("click.fb-close click.fb-previous click.fb-next")
                },
                previous: function(t) {
                    this.jumpTo(this.currIndex - 1, t)
                },
                next: function(t) {
                    this.jumpTo(this.currIndex + 1, t)
                },
                jumpTo: function(t, e) {
                    var n, s, i, a, r = this;
                    if (n = r.firstRun = null === r.firstRun, s = i = t = parseInt(t, 10), a = !!r.current && r.current.opts.loop, !r.isAnimating && (s != r.currIndex || n)) {
                        if (r.group.length > 1 && a) s %= r.group.length, s = s < 0 ? r.group.length + s : s, 2 == r.group.length ? i = t - r.currIndex + r.currPos : (i = s - r.currIndex + r.currPos, Math.abs(r.currPos - (i + r.group.length)) < Math.abs(r.currPos - i) ? i += r.group.length : Math.abs(r.currPos - (i - r.group.length)) < Math.abs(r.currPos - i) && (i -= r.group.length));
                        else if (!r.group[s]) return void r.update(!1, !1, e);
                        r.current && (r.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete"), r.updateSlide(r.current, !0)), r.prevIndex = r.currIndex, r.prevPos = r.currPos, r.currIndex = s, r.currPos = i, r.current = r.createSlide(i), r.group.length > 1 && ((r.opts.loop || i - 1 >= 0) && r.createSlide(i - 1), (r.opts.loop || i + 1 < r.group.length) && r.createSlide(i + 1)), r.current.isMoved = !1, r.current.isComplete = !1, e = parseInt(e === o ? 1.5 * r.current.opts.speed : e, 10), r.trigger("beforeMove"), r.updateControls(), n && (r.current.$slide.addClass("fancybox-slide--current"), r.$refs.container.show(), u(function() {
                            r.$refs.bg.css("transition-duration", r.current.opts.speed + "ms"), r.$refs.container.addClass("fancybox-container--ready")
                        })), r.update(!0, !1, n ? 0 : e, function() {
                            r.afterMove()
                        }), r.loadSlide(r.current), n && r.current.$ghost || r.preload()
                    }
                },
                createSlide: function(t) {
                    var e, o, s, i = this;
                    if (o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o]) {
                        if (i.opts.loop && i.group.length > 2)
                            for (var a in i.slides)
                                if (i.slides[a].index === o) return s = i.slides[a], s.pos = t, i.slides[t] = s, delete i.slides[a], i.updateSlide(s), s;
                        e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.slider), i.slides[t] = n.extend(!0, {}, i.group[o], {
                            pos: t,
                            $slide: e,
                            isMoved: !1,
                            isLoaded: !1
                        })
                    }
                    return i.slides[t]
                },
                zoomInOut: function(t, e, o) {
                    var s, i, a, r = this,
                        c = r.current,
                        l = c.$placeholder,
                        u = c.opts.opacity,
                        p = c.opts.$thumb,
                        h = p ? p.offset() : 0,
                        f = c.$slide.offset();
                    return !(!(l && c.isMoved && h && d(p)) || "In" === t && !r.firstRun || (n.fancybox.stop(l), r.isAnimating = !0, s = {
                        top: h.top - f.top + parseFloat(p.css("border-top-width") || 0),
                        left: h.left - f.left + parseFloat(p.css("border-left-width") || 0),
                        width: p.width(),
                        height: p.height(),
                        scaleX: 1,
                        scaleY: 1
                    }, "auto" == u && (u = Math.abs(c.width / c.height - s.width / s.height) > .1), "In" === t ? (i = s, a = r.getFitPos(c), a.scaleX = a.width / i.width, a.scaleY = a.height / i.height, u && (i.opacity = .1, a.opacity = 1)) : (i = n.fancybox.getTranslate(l), a = s, c.$ghost && (c.$ghost.show(), c.$image && c.$image.remove()), i.scaleX = i.width / a.width, i.scaleY = i.height / a.height, i.width = a.width, i.height = a.height, u && (a.opacity = 0)), r.updateCursor(a.width, a.height), delete a.width, delete a.height, n.fancybox.setTranslate(l, i), l.show(), r.trigger("beforeZoom" + t), l.css("transition", "all " + e + "ms"), n.fancybox.setTranslate(l, a), setTimeout(function() {
                        var e;
                        l.css("transition", "none"), e = n.fancybox.getTranslate(l), e.scaleX = 1, e.scaleY = 1, n.fancybox.setTranslate(l, e), r.trigger("afterZoom" + t), o.apply(r), r.isAnimating = !1
                    }, e), 0))
                },
                canPan: function() {
                    var t = this,
                        e = t.current,
                        n = e.$placeholder,
                        o = !1;
                    return n && (o = t.getFitPos(e), o = Math.abs(n.width() - o.width) > 1 || Math.abs(n.height() - o.height) > 1), o
                },
                isScaledDown: function() {
                    var t = this,
                        e = t.current,
                        o = e.$placeholder,
                        s = !1;
                    return o && (s = n.fancybox.getTranslate(o), s = s.width < e.width || s.height < e.height), s
                },
                scaleToActual: function(t, e, s) {
                    var i, a, r, c, l, u = this,
                        d = u.current,
                        p = d.$placeholder,
                        h = parseInt(d.$slide.width(), 10),
                        f = parseInt(d.$slide.height(), 10),
                        g = d.width,
                        b = d.height;
                    p && (u.isAnimating = !0, t = t === o ? .5 * h : t, e = e === o ? .5 * f : e, i = n.fancybox.getTranslate(p), c = g / i.width, l = b / i.height, a = .5 * h - .5 * g, r = .5 * f - .5 * b, g > h && (a = i.left * c - (t * c - t), a > 0 && (a = 0), a < h - g && (a = h - g)), b > f && (r = i.top * l - (e * l - e), r > 0 && (r = 0), r < f - b && (r = f - b)), u.updateCursor(g, b), n.fancybox.animate(p, null, {
                        top: r,
                        left: a,
                        scaleX: c,
                        scaleY: l
                    }, s || d.opts.speed, function() {
                        u.isAnimating = !1
                    }))
                },
                scaleToFit: function(t) {
                    var e, o = this,
                        s = o.current,
                        i = s.$placeholder;
                    i && (o.isAnimating = !0, e = o.getFitPos(s), o.updateCursor(e.width, e.height), n.fancybox.animate(i, null, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / i.width(),
                        scaleY: e.height / i.height()
                    }, t || s.opts.speed, function() {
                        o.isAnimating = !1
                    }))
                },
                getFitPos: function(t) {
                    var e, o, s, i, r, c, l, u = t.$placeholder || t.$content,
                        d = t.width,
                        p = t.height,
                        h = t.opts.margin;
                    return !(!u || !u.length || !d && !p) && ("number" === n.type(h) && (h = [h, h]), 2 == h.length && (h = [h[0], h[1], h[0], h[1]]), a.width() < 800 && (h = [0, 0, 0, 0]), e = parseInt(t.$slide.width(), 10) - (h[1] + h[3]), o = parseInt(t.$slide.height(), 10) - (h[0] + h[2]), s = Math.min(1, e / d, o / p), c = Math.floor(s * d), l = Math.floor(s * p), i = Math.floor(.5 * (o - l)) + h[0], r = Math.floor(.5 * (e - c)) + h[3], {
                        top: i,
                        left: r,
                        width: c,
                        height: l
                    })
                },
                update: function(t, e, o, s) {
                    var i, a = this;
                    a.isAnimating !== !0 && a.current && (i = a.current.pos * Math.floor(a.current.$slide.width()) * -1 - a.current.pos * a.current.opts.gutter, o = parseInt(o, 10) || 0, n.fancybox.stop(a.$refs.slider), t === !1 ? a.updateSlide(a.current, e) : n.each(a.slides, function(t, n) {
                        a.updateSlide(n, e)
                    }), o ? n.fancybox.animate(a.$refs.slider, null, {
                        top: 0,
                        left: i
                    }, o, function() {
                        a.current.isMoved = !0, "function" === n.type(s) && s.apply(a)
                    }) : (n.fancybox.setTranslate(a.$refs.slider, {
                        top: 0,
                        left: i
                    }), a.current.isMoved = !0, "function" === n.type(s) && s.apply(a)))
                },
                updateSlide: function(t, e) {
                    var o, s = this,
                        i = t.$placeholder;
                    t = t || s.current, t && !s.isClosing && (o = t.pos * Math.floor(t.$slide.width()) + t.pos * t.opts.gutter, o !== t.leftPos && (n.fancybox.setTranslate(t.$slide, {
                        top: 0,
                        left: o
                    }), t.leftPos = o), e !== !1 && i && (n.fancybox.setTranslate(i, s.getFitPos(t)), t.pos === s.currPos && s.updateCursor()), t.$slide.trigger("refresh"), s.trigger("onUpdate", t))
                },
                updateCursor: function(t, e) {
                    var n, s = this,
                        i = s.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab");
                    !s.isClosing && s.opts.touch && (n = t !== o && e !== o ? t < s.current.width && e < s.current.height : s.isScaledDown(), n ? i.addClass("fancybox-controls--canzoomIn") : s.group.length < 2 ? i.addClass("fancybox-controls--canzoomOut") : i.addClass("fancybox-controls--canGrab"))
                },
                loadSlide: function(t) {
                    var e, o, s, i = this;
                    if (t && !t.isLoaded && !t.isLoading) {
                        switch (t.isLoading = !0, i.trigger("beforeLoad", t), e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), e) {
                            case "image":
                                i.setImage(t);
                                break;
                            case "iframe":
                                i.setIframe(t);
                                break;
                            case "html":
                                i.setContent(t, t.content);
                                break;
                            case "inline":
                                n(t.src).length ? i.setContent(t, n(t.src)) : i.setError(t);
                                break;
                            case "ajax":
                                i.showLoading(t), s = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                    url: t.src,
                                    success: function(e, n) {
                                        "success" === n && i.setContent(t, e)
                                    },
                                    error: function(e, n) {
                                        e && "abort" !== n && i.setError(t)
                                    }
                                })), o.one("onReset", function() {
                                    s.abort()
                                });
                                break;
                            default:
                                i.setError(t)
                        }
                        return !0
                    }
                },
                setImage: function(e) {
                    var o, s, i, a, r = this,
                        c = e.opts.image.srcset;
                    if (e.isLoaded && !e.hasError) return void r.afterLoad(e);
                    if (c) {
                        i = t.devicePixelRatio || 1, a = t.innerWidth * i, s = c.split(",").map(function(t) {
                            var e = {};
                            return t.trim().split(/\s+/).forEach(function(t, n) {
                                var o = parseInt(t.substring(0, t.length - 1), 10);
                                return 0 === n ? e.url = t : void(o && (e.value = o, e.postfix = t[t.length - 1]))
                            }), e
                        }), s.sort(function(t, e) {
                            return t.value - e.value
                        });
                        for (var l = 0; l < s.length; l++) {
                            var u = s[l];
                            if ("w" === u.postfix && u.value >= a || "x" === u.postfix && u.value >= i) {
                                o = u;
                                break
                            }
                        }!o && s.length && (o = s[s.length - 1]), o && (e.src = o.url, e.width && e.height && "w" == o.postfix && (e.height = e.width / e.height * o.value, e.width = o.value))
                    }
                    e.$placeholder = n('<div class="fancybox-placeholder"></div>').hide().appendTo(e.$slide), e.opts.preload !== !1 && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("load error", function() {
                        r.isClosing || (n("<img/>")[0].src = e.src, r.revealImage(e, function() {
                            r.setBigImage(e), r.firstRun && e.index === r.currIndex && r.preload()
                        }))
                    }).addClass("fancybox-image").appendTo(e.$placeholder).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : r.setBigImage(e)
                },
                setBigImage: function(t) {
                    var e = this,
                        o = n("<img />");
                    t.$image = o.one("error", function() {
                        e.setError(t)
                    }).one("load", function() {
                        clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && o.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.afterLoad(t), t.$ghost && (t.timouts = setTimeout(function() {
                            t.$ghost.hide()
                        }, 350)))
                    }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$placeholder), o[0].complete ? o.trigger("load") : o[0].error ? o.trigger("error") : t.timouts = setTimeout(function() {
                        o[0].complete || t.hasError || e.showLoading(t)
                    }, 150), t.opts.image.protect && n('<div class="fancybox-spaceball"></div>').appendTo(t.$placeholder).on("contextmenu.fb", function(t) {
                        return 2 == t.button && t.preventDefault(), !0
                    })
                },
                revealImage: function(t, e) {
                    var o = this;
                    return e = e || n.noop, "image" !== t.type || t.hasError || t.isRevealed === !0 ? void e.apply(o) : (t.isRevealed = !0, void(t.pos === o.currPos && o.zoomInOut("In", t.opts.speed, e) || (t.$ghost && !t.isLoaded && o.updateSlide(t, !0), t.pos === o.currPos ? n.fancybox.animate(t.$placeholder, {
                        opacity: 0
                    }, {
                        opacity: 1
                    }, 300, e) : t.$placeholder.show(), e.apply(o))))
                },
                setIframe: function(t) {
                    var e, s = this,
                        i = t.opts.iframe,
                        a = t.$slide;
                    t.$content = n('<div class="fancybox-content"></div>').css(i.css).appendTo(a), e = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", n.fancybox.isTouch ? "auto" : i.scrolling).appendTo(t.$content), i.preload ? (t.$content.addClass("fancybox-tmp"), s.showLoading(t), e.on("load.fb error.fb", function(e) {
                        this.isReady = 1, t.$slide.trigger("refresh"), s.afterLoad(t)
                    }), a.on("refresh.fb", function() {
                        var n, s, a, r, c, l = t.$content;
                        if (1 === e[0].isReady) {
                            try {
                                n = e.contents(), s = n.find("body")
                            } catch (t) {}
                            s && s.length && (i.css.width === o || i.css.height === o) && (a = e[0].contentWindow.document.documentElement.scrollWidth, r = Math.ceil(s.outerWidth(!0) + (l.width() - a)), c = Math.ceil(s.outerHeight(!0)), l.css({
                                width: i.css.width === o ? r + (l.outerWidth() - l.innerWidth()) : i.css.width,
                                height: i.css.height === o ? c + (l.outerHeight() - l.innerHeight()) : i.css.height
                            })), l.removeClass("fancybox-tmp")
                        }
                    })) : this.afterLoad(t), e.attr("src", t.src), t.opts.smallBtn && t.$content.prepend(t.opts.closeTpl), a.one("onReset", function() {
                        try {
                            n(this).find("iframe").hide().attr("src", "//about:blank")
                        } catch (t) {}
                        n(this).empty(), t.isLoaded = !1
                    })
                },
                setContent: function(t, e) {
                    var o = this;
                    o.isClosing || (o.hideLoading(t), t.$slide.empty(), l(e) && e.parent().length ? (e.data("placeholder") && e.parents(".fancybox-slide").trigger("onReset"), e.data({
                        placeholder: n("<div></div>").hide().insertAfter(e)
                    }).css("display", "inline-block")) : ("string" === n.type(e) && (e = n("<div>").append(e).contents(), 3 === e[0].nodeType && (e = n("<div>").html(e))), t.opts.selector && (e = n("<div>").html(e).find(t.opts.selector))), t.$slide.one("onReset", function() {
                        var o = l(e) ? e.data("placeholder") : 0;
                        o && (e.hide().replaceAll(o), e.data("placeholder", null)), t.hasError || (n(this).empty(), t.isLoaded = !1)
                    }), t.$content = n(e).appendTo(t.$slide), t.opts.smallBtn === !0 && t.$content.find(".fancybox-close-small").remove().end().eq(0).append(t.opts.closeTpl), this.afterLoad(t))
                },
                setError: function(t) {
                    t.hasError = !0, this.setContent(t, t.opts.errorTpl)
                },
                showLoading: function(t) {
                    var e = this;
                    t = t || e.current, t && !t.$spinner && (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide))
                },
                hideLoading: function(t) {
                    var e = this;
                    t = t || e.current, t && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
                },
                afterMove: function() {
                    var t = this,
                        e = t.current,
                        o = {};
                    e && (e.$slide.siblings().trigger("onReset"), n.each(t.slides, function(e, n) {
                        n.pos >= t.currPos - 1 && n.pos <= t.currPos + 1 ? o[n.pos] = n : n && n.$slide.remove()
                    }), t.slides = o, t.trigger("afterMove"), e.isLoaded && t.complete())
                },
                afterLoad: function(t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.$ghost || e.updateSlide(t, !0), t.index === e.currIndex && t.isMoved ? e.complete() : t.$ghost || e.revealImage(t))
                },
                complete: function() {
                    var t = this,
                        e = t.current;
                    t.revealImage(e, function() {
                        e.isComplete = !0, e.$slide.addClass("fancybox-slide--complete"), t.updateCursor(), t.trigger("onComplete"), e.opts.focus && "image" !== e.type && "iframe" !== e.type && t.focus()
                    })
                },
                preload: function() {
                    var t, e, n = this;
                    n.group.length < 2 || (t = n.slides[n.currPos + 1], e = n.slides[n.currPos - 1], t && "image" === t.type && n.loadSlide(t), e && "image" === e.type && n.loadSlide(e))
                },
                focus: function() {
                    var t, e = this.current;
                    t = e && e.isComplete ? e.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first") : null, t && t.length || (t = this.$refs.container), t.focus(), this.$refs.slider_wrap.scrollLeft(0), e && e.$slide.scrollTop(0)
                },
                activate: function() {
                    var t = this;
                    n(".fancybox-container").each(function() {
                        var e = n(this).data("FancyBox");
                        e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate")
                    }), t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                },
                close: function(t) {
                    var e = this,
                        o = e.current,
                        s = o.opts.speed,
                        i = n.proxy(function() {
                            e.cleanUp(t)
                        }, this);
                    return !e.isAnimating && !e.isClosing && (e.trigger("beforeClose", t) === !1 ? (n.fancybox.stop(e.$refs.slider), void u(function() {
                        e.update(!0, !0, 150)
                    })) : (e.isClosing = !0, o.timouts && clearTimeout(o.timouts), t !== !0 && n.fancybox.stop(e.$refs.slider), e.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing"), o.$slide.removeClass("fancybox-slide--complete").siblings().remove(), o.isMoved || o.$slide.css("overflow", "visible"), e.removeEvents(), e.hideLoading(o), e.hideControls(), e.updateCursor(), e.$refs.bg.css("transition-duration", s + "ms"), this.$refs.container.removeClass("fancybox-container--ready"), void(t === !0 ? setTimeout(i, s) : e.zoomInOut("Out", s, i) || n.fancybox.animate(e.$refs.container, null, {
                        opacity: 0
                    }, s, "easeInSine", i))))
                },
                cleanUp: function(t) {
                    var e, o = this;
                    o.$refs.slider.children().trigger("onReset"), o.$refs.container.empty().remove(), o.trigger("afterClose", t), o.current = null, e = n.fancybox.getInstance(), e ? e.activate() : (n("html").removeClass("fancybox-enabled"), n("body").removeAttr("style"), a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft), n("#fancybox-noscroll").remove()), o.$lastFocus && o.$lastFocus.focus()
                },
                trigger: function(t, o) {
                    var s, i = Array.prototype.slice.call(arguments, 1),
                        a = this,
                        r = o && o.opts ? o : a.current;
                    return r ? i.unshift(r) : r = a, i.unshift(a), n.isFunction(r.opts[t]) && (s = r.opts[t].apply(r, i)), s === !1 ? s : void("afterClose" === t ? n(e).trigger(t + ".fb", i) : a.$refs.container.trigger(t + ".fb", i))
                },
                toggleControls: function(t) {
                    this.isHiddenControls ? this.updateControls(t) : this.hideControls()
                },
                hideControls: function() {
                    this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-controls"), this.$refs.container.removeClass("fancybox-show-caption")
                },
                updateControls: function(t) {
                    var e = this,
                        o = e.$refs.container,
                        s = e.$refs.caption,
                        i = e.current,
                        a = i.index,
                        r = i.opts,
                        c = r.caption;
                    this.isHiddenControls && t !== !0 || (this.isHiddenControls = !1, o.addClass("fancybox-show-controls").toggleClass("fancybox-show-infobar", !!r.infobar && e.group.length > 1).toggleClass("fancybox-show-buttons", !!r.buttons).toggleClass("fancybox-is-modal", !!r.modal), n(".fancybox-button--left", o).toggleClass("fancybox-button--disabled", !r.loop && a <= 0), n(".fancybox-button--right", o).toggleClass("fancybox-button--disabled", !r.loop && a >= e.group.length - 1), n(".fancybox-button--play", o).toggle(!!(r.slideShow && e.group.length > 1)), n(".fancybox-button--close", o).toggle(!!r.closeBtn), n(".js-fancybox-count", o).html(e.group.length), n(".js-fancybox-index", o).html(a + 1), i.$slide.trigger("refresh"), s && s.empty(), c && c.length ? (s.html(c), this.$refs.container.addClass("fancybox-show-caption "), e.$caption = s) : this.$refs.container.removeClass("fancybox-show-caption"))
                }
            }), n.fancybox = {
                version: "3.0.47",
                defaults: i,
                getInstance: function(t) {
                    var e = n('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox"),
                        o = Array.prototype.slice.call(arguments, 1);
                    return e instanceof p && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
                },
                open: function(t, e, n) {
                    return new p(t, e, n)
                },
                close: function(t) {
                    var e = this.getInstance();
                    e && (e.close(), t === !0 && this.close())
                },
                isTouch: e.createTouch !== o && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
                use3d: function() {
                    var n = e.createElement("div");
                    return t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode <= 11)
                }(),
                getTranslate: function(t) {
                    var e, n;
                    return !(!t || !t.length) && (e = t.get(0).getBoundingClientRect(), n = t.eq(0).css("transform"), n && n.indexOf("matrix") !== -1 ? (n = n.split("(")[1], n = n.split(")")[0], n = n.split(",")) : n = [], n.length ? (n = n.length > 10 ? [n[13], n[12], n[0], n[5]] : [n[5], n[4], n[0], n[3]], n = n.map(parseFloat)) : n = [0, 0, 1, 1], {
                        top: n[0],
                        left: n[1],
                        scaleX: n[2],
                        scaleY: n[3],
                        opacity: parseFloat(t.css("opacity")),
                        width: e.width,
                        height: e.height
                    })
                },
                setTranslate: function(t, e) {
                    var n = "",
                        s = {};
                    if (t && e) return e.left === o && e.top === o || (n = (e.left === o ? t.position().top : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (s.transform = n), e.opacity !== o && (s.opacity = e.opacity), e.width !== o && (s.width = e.width), e.height !== o && (s.height = e.height), t.css(s)
                },
                easing: {
                    easeOutCubic: function(t, e, n, o) {
                        return n * ((t = t / o - 1) * t * t + 1) + e
                    },
                    easeInCubic: function(t, e, n, o) {
                        return n * (t /= o) * t * t + e
                    },
                    easeOutSine: function(t, e, n, o) {
                        return n * Math.sin(t / o * (Math.PI / 2)) + e
                    },
                    easeInSine: function(t, e, n, o) {
                        return -n * Math.cos(t / o * (Math.PI / 2)) + n + e
                    }
                },
                stop: function(t) {
                    t.removeData("animateID")
                },
                animate: function(t, e, s, i, a, r) {
                    var c, l, d, p = this,
                        h = null,
                        f = 0,
                        g = function() {
                            s.scaleX !== o && s.scaleY !== o && e && e.width !== o && e.height !== o && (s.width = e.width * s.scaleX, s.height = e.height * s.scaleY, s.scaleX = 1, s.scaleY = 1), p.setTranslate(t, s), r()
                        },
                        b = function(n) {
                            if (c = [], l = 0, t.length && t.data("animateID") === d) {
                                if (n = n || Date.now(), h && (l = n - h), h = n, f += l, f >= i) return void g();
                                for (var r in s) s.hasOwnProperty(r) && e[r] !== o && (e[r] == s[r] ? c[r] = s[r] : c[r] = p.easing[a](f, e[r], s[r] - e[r], i));
                                p.setTranslate(t, c), u(b)
                            }
                        };
                    p.animateID = d = p.animateID === o ? 1 : p.animateID + 1, t.data("animateID", d), r === o && "function" == n.type(a) && (r = a, a = o), a || (a = "easeOutCubic"), r = r || n.noop, e ? this.setTranslate(t, e) : e = this.getTranslate(t), i ? (t.show(), u(b)) : g()
                }
            }, n.fn.fancybox = function(t) {
                return this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t || {}
                }, s), this
            }, n(e).on("click.fb-start", "[data-fancybox]", s)
        }(window, document, __webpack_provided_window_dot_jQuery),
        function(t) {
            "use strict";
            var e = function(e, n, o) {
                    if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function(t, n) {
                        e = e.replace("$" + t, n || "")
                    }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
                },
                n = {
                    youtube: {
                        matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                        params: {
                            autoplay: 1,
                            autohide: 1,
                            fs: 1,
                            rel: 0,
                            hd: 1,
                            wmode: "transparent",
                            enablejsapi: 1,
                            html5: 1
                        },
                        paramPlace: 8,
                        type: "iframe",
                        url: "//www.youtube.com/embed/$4",
                        thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
                    },
                    vimeo: {
                        matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                        params: {
                            autoplay: 1,
                            hd: 1,
                            show_title: 1,
                            show_byline: 1,
                            show_portrait: 0,
                            fullscreen: 1,
                            api: 1
                        },
                        paramPlace: 3,
                        type: "iframe",
                        url: "//player.vimeo.com/video/$2"
                    },
                    metacafe: {
                        matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
                        type: "iframe",
                        url: "//www.metacafe.com/embed/$1/?ap=1"
                    },
                    dailymotion: {
                        matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                        params: {
                            additionalInfos: 0,
                            autoStart: 1
                        },
                        type: "iframe",
                        url: "//www.dailymotion.com/embed/video/$1"
                    },
                    vine: {
                        matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
                        type: "iframe",
                        url: "//vine.co/v/$1/embed/simple"
                    },
                    instagram: {
                        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                        type: "image",
                        url: "//$1/p/$2/media/?size=l"
                    },
                    google_maps: {
                        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                        type: "iframe",
                        url: function(t) {
                            return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                        }
                    }
                };
            t(document).on("onInit.fb", function(o, s) {
                t.each(s.group, function(o, s) {
                    var i, a, r, c, l, u, d = s.src || "",
                        p = !1;
                    s.type || (t.each(n, function(n, o) {
                        if (a = d.match(o.matcher), l = {}, u = n, a) {
                            if (p = o.type, o.paramPlace && a[o.paramPlace]) {
                                c = a[o.paramPlace], "?" == c[0] && (c = c.substring(1)), c = c.split("&");
                                for (var h = 0; h < c.length; ++h) {
                                    var f = c[h].split("=", 2);
                                    2 == f.length && (l[f[0]] = decodeURIComponent(f[1].replace(/\+/g, " ")))
                                }
                            }
                            return r = t.extend(!0, {}, o.params, s.opts[n], l), d = "function" === t.type(o.url) ? o.url.call(this, a, r, s) : e(o.url, a, r), i = "function" === t.type(o.thumb) ? o.thumb.call(this, a, r, s) : e(o.thumb, a), "vimeo" === u && (d = d.replace("&%23", "#")), !1
                        }
                    }), p ? (s.src = d, s.type = p, s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = i), "iframe" === p && (t.extend(!0, s.opts, {
                        iframe: {
                            preload: !1,
                            scrolling: "no"
                        },
                        smallBtn: !1,
                        closeBtn: !0,
                        fullScreen: !1,
                        slideShow: !1
                    }), s.opts.slideClass += " fancybox-slide--video")) : s.type = "iframe")
                })
            })
        }(__webpack_provided_window_dot_jQuery),
        function(t, e, n) {
            "use strict";
            var o = function() {
                    return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(e) {
                        t.setTimeout(e, 1e3 / 60)
                    }
                }(),
                s = function(e) {
                    var n = [];
                    e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
                    for (var o in e) e[o].pageX ? n.push({
                        x: e[o].pageX,
                        y: e[o].pageY
                    }) : e[o].clientX && n.push({
                        x: e[o].clientX,
                        y: e[o].clientY
                    });
                    return n
                },
                i = function(t, e, n) {
                    return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
                },
                a = function(t) {
                    return t.is("a") || t.is("button") || t.is("input") || t.is("select") || t.is("textarea") || n.isFunction(t.get(0).onclick)
                },
                r = function(e) {
                    var n = t.getComputedStyle(e)["overflow-y"],
                        o = t.getComputedStyle(e)["overflow-x"],
                        s = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
                        i = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
                    return s || i
                },
                c = function(t) {
                    for (var e = !1; !(e = r(t.get(0))) && (t = t.parent(), t.length && !t.hasClass("fancybox-slider") && !t.is("body")););
                    return e
                },
                l = function(t) {
                    var e = this;
                    e.instance = t, e.$wrap = t.$refs.slider_wrap, e.$slider = t.$refs.slider, e.$container = t.$refs.container, e.destroy(), e.$wrap.on("touchstart.fb mousedown.fb", n.proxy(e, "ontouchstart"))
                };
            l.prototype.destroy = function() {
                this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb")
            }, l.prototype.ontouchstart = function(e) {
                var o = this,
                    r = n(e.target),
                    l = o.instance,
                    u = l.current,
                    d = u.$content || u.$placeholder;
                return o.startPoints = s(e), o.$target = r, o.$content = d, o.canvasWidth = Math.round(u.$slide[0].clientWidth), o.canvasHeight = Math.round(u.$slide[0].clientHeight), o.startEvent = e, e.originalEvent.clientX > o.canvasWidth + u.$slide.offset().left || (a(r) || a(r.parent()) || c(r) ? void 0 : u.opts.touch ? void(e.originalEvent && 2 == e.originalEvent.button || (e.stopPropagation(), e.preventDefault(), !u || o.instance.isAnimating || o.instance.isClosing || !o.startPoints || o.startPoints.length > 1 && !u.isMoved || (o.$wrap.off("touchmove.fb mousemove.fb", n.proxy(o, "ontouchmove")), o.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(o, "ontouchend")), o.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(o, "ontouchend")), o.$wrap.on("touchmove.fb mousemove.fb", n.proxy(o, "ontouchmove")), o.startTime = (new Date).getTime(), o.distanceX = o.distanceY = o.distance = 0, o.canTap = !1, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.sliderStartPos = n.fancybox.getTranslate(o.$slider), o.contentStartPos = n.fancybox.getTranslate(o.$content), o.contentLastPos = null, 1 !== o.startPoints.length || o.isZooming || (o.canTap = u.isMoved, "image" === u.type && (o.contentStartPos.width > o.canvasWidth + 1 || o.contentStartPos.height > o.canvasHeight + 1) ? (n.fancybox.stop(o.$content), o.isPanning = !0) : (n.fancybox.stop(o.$slider), o.isSwiping = !0), o.$container.addClass("fancybox-controls--isGrabbing")), 2 === o.startPoints.length && u.isMoved && !u.hasError && "image" === u.type && (u.isLoaded || u.$ghost) && (o.isZooming = !0, o.isSwiping = !1, o.isPanning = !1, n.fancybox.stop(o.$content), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - n(t).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - n(t).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = i(o.startPoints[0], o.startPoints[1]))))) : (o.endPoints = o.startPoints, o.ontap()))
            }, l.prototype.ontouchmove = function(t) {
                var e = this;
                t.preventDefault(), e.newPoints = s(t), e.newPoints && e.newPoints.length && (e.distanceX = i(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = i(e.newPoints[0], e.startPoints[0], "y"), e.distance = i(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))
            }, l.prototype.onSwipe = function() {
                var e, s = this,
                    i = s.isSwiping,
                    a = s.sliderStartPos.left;
                i === !0 ? Math.abs(s.distance) > 10 && (s.instance.group.length < 2 ? s.isSwiping = "y" : !s.instance.current.isMoved || s.instance.opts.touch.vertical === !1 || "auto" === s.instance.opts.touch.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = e > 45 && e < 135 ? "y" : "x"), s.canTap = !1, s.instance.current.isMoved = !1, s.startPoints = s.newPoints) : ("x" == i && (!s.instance.current.opts.loop && 0 === s.instance.current.index && s.distanceX > 0 ? a += Math.pow(s.distanceX, .8) : !s.instance.current.opts.loop && s.instance.current.index === s.instance.group.length - 1 && s.distanceX < 0 ? a -= Math.pow(-s.distanceX, .8) : a += s.distanceX), s.sliderLastPos = {
                    top: "x" == i ? 0 : s.sliderStartPos.top + s.distanceY,
                    left: a
                }, o(function() {
                    n.fancybox.setTranslate(s.$slider, s.sliderLastPos)
                }))
            }, l.prototype.onPan = function() {
                var t, e, s, i = this;
                i.canTap = !1, t = i.contentStartPos.width > i.canvasWidth ? i.contentStartPos.left + i.distanceX : i.contentStartPos.left, e = i.contentStartPos.top + i.distanceY, s = i.limitMovement(t, e, i.contentStartPos.width, i.contentStartPos.height), s.scaleX = i.contentStartPos.scaleX, s.scaleY = i.contentStartPos.scaleY, i.contentLastPos = s, o(function() {
                    n.fancybox.setTranslate(i.$content, i.contentLastPos)
                })
            }, l.prototype.limitMovement = function(t, e, n, o) {
                var s, i, a, r, c = this,
                    l = c.canvasWidth,
                    u = c.canvasHeight,
                    d = c.contentStartPos.left,
                    p = c.contentStartPos.top,
                    h = c.distanceX,
                    f = c.distanceY;
                return s = Math.max(0, .5 * l - .5 * n), i = Math.max(0, .5 * u - .5 * o), a = Math.min(l - n, .5 * l - .5 * n), r = Math.min(u - o, .5 * u - .5 * o), n > l && (h > 0 && t > s && (t = s - 1 + Math.pow(-s + d + h, .8) || 0), h < 0 && t < a && (t = a + 1 - Math.pow(a - d - h, .8) || 0)), o > u && (f > 0 && e > i && (e = i - 1 + Math.pow(-i + p + f, .8) || 0), f < 0 && e < r && (e = r + 1 - Math.pow(r - p - f, .8) || 0)), {
                    top: e,
                    left: t
                }
            }, l.prototype.limitPosition = function(t, e, n, o) {
                var s = this,
                    i = s.canvasWidth,
                    a = s.canvasHeight;
                return n > i ? (t = t > 0 ? 0 : t, t = t < i - n ? i - n : t) : t = Math.max(0, i / 2 - n / 2), o > a ? (e = e > 0 ? 0 : e, e = e < a - o ? a - o : e) : e = Math.max(0, a / 2 - o / 2), {
                    top: e,
                    left: t
                }
            }, l.prototype.onZoom = function() {
                var e = this,
                    s = e.contentStartPos.width,
                    a = e.contentStartPos.height,
                    r = e.contentStartPos.left,
                    c = e.contentStartPos.top,
                    l = i(e.newPoints[0], e.newPoints[1]),
                    u = l / e.startDistanceBetweenFingers,
                    d = Math.floor(s * u),
                    p = Math.floor(a * u),
                    h = (s - d) * e.percentageOfImageAtPinchPointX,
                    f = (a - p) * e.percentageOfImageAtPinchPointY,
                    g = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
                    b = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
                    m = g - e.centerPointStartX,
                    y = b - e.centerPointStartY,
                    v = r + (h + m),
                    x = c + (f + y),
                    w = {
                        top: x,
                        left: v,
                        scaleX: e.contentStartPos.scaleX * u,
                        scaleY: e.contentStartPos.scaleY * u
                    };
                e.canTap = !1, e.newWidth = d, e.newHeight = p, e.contentLastPos = w, o(function() {
                    n.fancybox.setTranslate(e.$content, e.contentLastPos)
                })
            }, l.prototype.ontouchend = function(t) {
                var e = this,
                    o = e.instance.current,
                    i = Math.max((new Date).getTime() - e.startTime, 1),
                    a = e.isSwiping,
                    r = e.isPanning,
                    c = e.isZooming;
                return e.endPoints = s(t), e.$container.removeClass("fancybox-controls--isGrabbing"), e.$wrap.off("touchmove.fb mousemove.fb", n.proxy(this, "ontouchmove")), e.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(this, "ontouchend")), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.canTap ? e.ontap() : (e.velocityX = e.distanceX / i * .5, e.velocityY = e.distanceY / i * .5, e.speed = o.opts.speed || 330, e.speedX = Math.max(.75 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityX) * e.speed)), e.speedY = Math.max(.75 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityY) * e.speed)), void(r ? e.endPanning() : c ? e.endZooming() : e.endSwiping(a)))
            }, l.prototype.endSwiping = function(t) {
                var e = this;
                "y" == t && Math.abs(e.distanceY) > 50 ? (n.fancybox.animate(e.$slider, null, {
                    top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
                    left: e.sliderStartPos.left,
                    opacity: 0
                }, e.speedY), e.instance.close(!0)) : "x" == t && e.distanceX > 50 ? e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 ? e.instance.next(e.speedX) : e.instance.update(!1, !0, 150)
            }, l.prototype.endPanning = function() {
                var t, e, o, s = this;
                s.contentLastPos && (t = s.contentLastPos.left + s.velocityX * s.speed * 2, e = s.contentLastPos.top + s.velocityY * s.speed * 2, o = s.limitPosition(t, e, s.contentStartPos.width, s.contentStartPos.height), o.width = s.contentStartPos.width, o.height = s.contentStartPos.height, n.fancybox.animate(s.$content, null, o, s.speed, "easeOutSine"))
            }, l.prototype.endZooming = function() {
                var t, e, o, s, i = this,
                    a = i.instance.current,
                    r = i.newWidth,
                    c = i.newHeight;
                i.contentLastPos && (t = i.contentLastPos.left, e = i.contentLastPos.top, s = {
                    top: e,
                    left: t,
                    width: r,
                    height: c,
                    scaleX: 1,
                    scaleY: 1
                }, n.fancybox.setTranslate(i.$content, s), r < i.canvasWidth && c < i.canvasHeight ? i.instance.scaleToFit(150) : r > a.width || c > a.height ? i.instance.scaleToActual(i.centerPointStartX, i.centerPointStartY, 150) : (o = i.limitPosition(t, e, r, c), n.fancybox.animate(i.$content, null, o, i.speed, "easeOutSine")))
            }, l.prototype.ontap = function() {
                var t = this,
                    e = t.instance,
                    o = e.current,
                    s = t.endPoints[0].x,
                    i = t.endPoints[0].y;
                if (s -= t.$wrap.offset().left, i -= t.$wrap.offset().top, e.SlideShow && e.SlideShow.isActive && e.SlideShow.stop(), !n.fancybox.isTouch) return o.opts.closeClickOutside && t.$target.is(".fancybox-slide") ? void e.close(t.startEvent) : void("image" == o.type && o.isMoved && (e.canPan() ? e.scaleToFit() : e.isScaledDown() ? e.scaleToActual(s, i) : e.group.length < 2 && e.close(t.startEvent)));
                if (t.tapped) {
                    if (clearTimeout(t.tapped), t.tapped = null, Math.abs(s - t.x) > 50 || Math.abs(i - t.y) > 50 || !o.isMoved) return this;
                    "image" == o.type && (o.isLoaded || o.$ghost) && (e.canPan() ? e.scaleToFit() : e.isScaledDown() && e.scaleToActual(s, i))
                } else t.x = s, t.y = i, t.tapped = setTimeout(function() {
                    t.tapped = null, e.toggleControls(!0)
                }, 300);
                return this
            }, n(e).on("onActivate.fb", function(t, e) {
                e && !e.Guestures && (e.Guestures = new l(e))
            }), n(e).on("beforeClose.fb", function(t, e) {
                e && e.Guestures && e.Guestures.destroy()
            })
        }(window, document, __webpack_provided_window_dot_jQuery),
        function(t, e) {
            "use strict";
            var n = function(t) {
                this.instance = t, this.init()
            };
            e.extend(n.prototype, {
                timer: null,
                isActive: !1,
                $button: null,
                speed: 3e3,
                init: function() {
                    var t = this;
                    t.$button = e('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(t.instance.$refs.buttons), t.instance.$refs.container.on("click", "[data-fancybox-play]", function() {
                        t.toggle()
                    })
                },
                set: function() {
                    var t = this;
                    t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
                        t.instance.next()
                    }, t.instance.current.opts.slideShow.speed || t.speed) : t.stop()
                },
                clear: function() {
                    var t = this;
                    clearTimeout(t.timer), t.timer = null
                },
                start: function() {
                    var t = this;
                    t.stop(), t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) && (t.instance.$refs.container.on({
                        "beforeLoad.fb.player": e.proxy(t, "clear"),
                        "onComplete.fb.player": e.proxy(t, "set")
                    }), t.isActive = !0, t.instance.current.isComplete && t.set(), t.instance.$refs.container.trigger("onPlayStart"), t.$button.addClass("fancybox-button--pause"))
                },
                stop: function() {
                    var t = this;
                    t.clear(), t.instance.$refs.container.trigger("onPlayEnd").off(".player"), t.$button.removeClass("fancybox-button--pause"), t.isActive = !1
                },
                toggle: function() {
                    var t = this;
                    t.isActive ? t.stop() : t.start()
                }
            }), e(t).on("onInit.fb", function(t, e) {
                e && e.group.length > 1 && e.opts.slideShow && !e.SlideShow && (e.SlideShow = new n(e))
            }), e(t).on("beforeClose.fb onDeactivate.fb", function(t, e) {
                e && e.SlideShow && e.SlideShow.stop()
            })
        }(document, __webpack_provided_window_dot_jQuery),
        function(t, e) {
            "use strict";
            var n = function() {
                var e, n, o, s = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                    ],
                    i = {};
                for (n = 0; n < s.length; n++)
                    if (e = s[n], e && e[1] in t) {
                        for (o = 0; o < e.length; o++) i[s[0][o]] = e[o];
                        return i
                    }
                return !1
            }();
            if (n) {
                var o = {
                    request: function(e) {
                        e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
                    },
                    exit: function() {
                        t[n.exitFullscreen]()
                    },
                    toggle: function(t) {
                        this.isFullscreen() ? this.exit() : this.request(t)
                    },
                    isFullscreen: function() {
                        return Boolean(t[n.fullscreenElement])
                    },
                    enabled: function() {
                        return Boolean(t[n.fullscreenEnabled])
                    }
                };
                e(t).on({
                    "onInit.fb": function(t, n) {
                        var s;
                        n && n.opts.fullScreen && !n.FullScreen && (s = n.$refs.container, n.$refs.button_fs = e('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(n.$refs.buttons), s.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                            t.stopPropagation(), t.preventDefault(), o.toggle(s[0])
                        }), n.opts.fullScreen.requestOnStart === !0 && o.request(s[0]))
                    },
                    "beforeMove.fb": function(t, e) {
                        e && e.$refs.button_fs && e.$refs.button_fs.toggle(!!e.current.opts.fullScreen)
                    },
                    "beforeClose.fb": function() {
                        o.exit()
                    }
                }), e(t).on(n.fullscreenchange, function() {
                    var t = e.fancybox.getInstance(),
                        n = t ? t.current.$placeholder : null;
                    n && (n.css("transition", "none"), t.isAnimating = !1, t.update(!0, !0, 0))
                })
            }
        }(document, __webpack_provided_window_dot_jQuery),
        function(t, e) {
            "use strict";
            var n = function(t) {
                this.instance = t, this.init()
            };
            e.extend(n.prototype, {
                $button: null,
                $grid: null,
                $list: null,
                isVisible: !1,
                init: function() {
                    var t = this;
                    t.$button = e('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on("touchend click", function(e) {
                        e.stopPropagation(), e.preventDefault(), t.toggle()
                    })
                },
                create: function() {
                    var t, n, o = this.instance;
                    this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container), t = "<ul>", e.each(o.group, function(e, o) {
                        n = o.opts.thumb || (o.opts.$thumb ? o.opts.$thumb.attr("src") : null), n || "image" !== o.type || (n = o.src), n && n.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
                    }), t += "</ul>", this.$list = e(t).appendTo(this.$grid).on("click touchstart", "li", function() {
                        o.jumpTo(e(this).data("index"))
                    }), this.$list.find("img").hide().one("load", function() {
                        var t, n, o, s, i = e(this).parent().removeClass("fancybox-thumbs-loading"),
                            a = i.outerWidth(),
                            r = i.outerHeight();
                        t = this.naturalWidth || this.width, n = this.naturalHeight || this.height, o = t / a, s = n / r, o >= 1 && s >= 1 && (o > s ? (t /= s, n = r) : (t = a, n /= o)), e(this).css({
                            width: Math.floor(t),
                            height: Math.floor(n),
                            "margin-top": Math.min(0, Math.floor(.3 * r - .3 * n)),
                            "margin-left": Math.min(0, Math.floor(.5 * a - .5 * t))
                        }).show()
                    }).each(function() {
                        this.src = e(this).data("src")
                    })
                },
                focus: function() {
                    this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
                },
                close: function() {
                    this.$grid.hide()
                },
                update: function() {
                    this.instance.$refs.container.toggleClass("fancybox-container--thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.$grid.show(), this.focus()) : this.$grid && this.$grid.hide(), this.instance.update()
                },
                hide: function() {
                    this.isVisible = !1, this.update()
                },
                show: function() {
                    this.isVisible = !0, this.update()
                },
                toggle: function() {
                    this.isVisible ? this.hide() : this.show()
                }
            }), e(t).on("onInit.fb", function(t, e) {
                var o = e.group[0],
                    s = e.group[1];
                e.opts.thumbs && !e.Thumbs && e.group.length > 1 && ("image" == o.type || o.opts.thumb || o.opts.$thumb) && ("image" == s.type || s.opts.thumb || s.opts.$thumb) && (e.Thumbs = new n(e))
            }), e(t).on("beforeMove.fb", function(t, e, n) {
                var o = e && e.Thumbs;
                o && (n.modal ? (o.$button.hide(), o.hide()) : (e.opts.thumbs.showOnStart === !0 && e.firstRun && o.show(), o.$button.show(), o.isVisible && o.focus()))
            }), e(t).on("beforeClose.fb", function(t, e) {
                e && e.Thumbs && (e.Thumbs.isVisible && e.opts.thumbs.hideOnClosing !== !1 && e.Thumbs.close(), e.Thumbs = null)
            })
        }(document, __webpack_provided_window_dot_jQuery),
        function(t, e, n) {
            "use strict";

            function o() {
                var t = e.location.hash.substr(1),
                    n = t.split("-"),
                    o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
                    s = n.join("-");
                return o < 1 && (o = 1), {
                    hash: t,
                    index: o,
                    gallery: s
                }
            }

            function s(t) {
                var e;
                "" !== t.gallery && (e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1), e.length ? e.trigger("click") : n("#" + n.escapeSelector(t.gallery)).trigger("click"))
            }

            function i(t) {
                var e;
                return !!t && (e = t.current ? t.current.opts : t.opts, e.$orig ? e.$orig.data("fancybox") : e.hash || "")
            }
            n.escapeSelector || (n.escapeSelector = function(t) {
                var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                    n = function(t, e) {
                        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    };
                return (t + "").replace(e, n)
            });
            var a = null;
            n(function() {
                setTimeout(function() {
                    n.fancybox.defaults.hash !== !1 && (n(e).on("hashchange.fb", function() {
                        var t = o();
                        n.fancybox.getInstance() ? a && a !== t.gallery + "-" + t.index && (a = null, n.fancybox.close()) : "" !== t.gallery && s(t)
                    }), n(t).on({
                        "onInit.fb": function(t, e) {
                            var n = o(),
                                s = i(e);
                            s && n.gallery && s == n.gallery && (e.currIndex = n.index - 1)
                        },
                        "beforeMove.fb": function(n, o, s) {
                            var r = i(o);
                            r && "" !== r && (e.location.hash.indexOf(r) < 0 && (o.opts.origHash = e.location.hash), a = r + (o.group.length > 1 ? "-" + (s.index + 1) : ""), "pushState" in history ? history.pushState("", t.title, e.location.pathname + e.location.search + "#" + a) : e.location.hash = a)
                        },
                        "beforeClose.fb": function(n, o, s) {
                            var r = i(o),
                                c = o && o.opts.origHash ? o.opts.origHash : "";
                            r && "" !== r && ("pushState" in history ? history.pushState("", t.title, e.location.pathname + e.location.search + c) : e.location.hash = c), a = null
                        }
                    }), s(o()))
                }, 50)
            })
        }(document, window, __webpack_provided_window_dot_jQuery)
    }).call(exports, __webpack_require__(1))
}, function(module, exports, __webpack_require__) {
    /*!
     * Likely 2.2.2 by Ilya Birman (ilyabirman.net)
     * Rewritten sans jQuery by Evgeny Steblinsky (volter9.github.io)
     * Supported by Ivan Akulov (iamakulov.com), Viktor Karpov (vitkarpov.com), and contributors
     * Inspired by Social Likes by Artem Sapegin (sapegin.me)
     */
    ! function(t, e) {
        module.exports = e()
    }(this, function() {
        return function(t) {
            function e(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
            }
            var n = {};
            return e.m = t, e.c = n, e.i = function(t) {
                return t
            }, e.d = function(t, n, i) {
                e.o(t, n) || Object.defineProperty(t, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }, e.n = function(t) {
                var n = t && t.__esModule ? function() {
                    return t.default
                } : function() {
                    return t
                };
                return e.d(n, "a", n), n
            }, e.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, e.p = "", e(e.s = 20)
        }([function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), n.d(e, "each", function() {
                return o
            }), n.d(e, "toArray", function() {
                return u
            }), n.d(e, "merge", function() {
                return c
            }), n.d(e, "extend", function() {
                return a
            }), n.d(e, "getDataset", function() {
                return s
            }), n.d(e, "bools", function() {
                return l
            }), n.d(e, "template", function() {
                return h
            }), n.d(e, "makeUrl", function() {
                return p
            }), n.d(e, "query", function() {
                return f
            }), n.d(e, "set", function() {
                return v
            }), n.d(e, "getDefaultUrl", function() {
                return d
            }), n.d(e, "isBrowserEnv", function() {
                return m
            });
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                r = {
                    yes: !0,
                    no: !1
                },
                o = function(t, e) {
                    for (var n in t) t.hasOwnProperty(n) && e(t[n], n)
                },
                u = function(t) {
                    return Array.prototype.slice.call(t)
                },
                c = function() {
                    for (var t = {}, e = Array.prototype.slice.call(arguments), n = 0; n < e.length; n++) {
                        var i = e[n];
                        if (i)
                            for (var r in i) i.hasOwnProperty(r) && (t[r] = i[r])
                    }
                    return t
                },
                a = function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t
                },
                s = function(t) {
                    if ("object" === i(t.dataset)) return t.dataset;
                    var e = void 0,
                        n = {},
                        r = t.attributes,
                        o = void 0,
                        u = void 0,
                        c = function(t) {
                            return t.charAt(1).toUpperCase()
                        };
                    for (e = r.length - 1; e >= 0; e--) o = r[e], o && o.name && /^data-\w[\w\-]*$/.test(o.name) && (u = o.name.substr(5).replace(/-./g, c), n[u] = o.value);
                    return n
                },
                l = function(t) {
                    var e = {},
                        n = s(t);
                    for (var i in n)
                        if (n.hasOwnProperty(i)) {
                            var o = n[i];
                            e[i] = r[o] || o
                        }
                    return e
                },
                h = function(t, e) {
                    return t ? t.replace(/\{([^\}]+)\}/g, function(t, n) {
                        return n in e ? e[n] : t
                    }) : ""
                },
                p = function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (e[n] = encodeURIComponent(e[n]));
                    return h(t, e)
                },
                f = function t(e) {
                    var n = encodeURIComponent,
                        t = [];
                    for (var r in e) "object" !== i(e[r]) && t.push(n(r) + "=" + n(e[r]));
                    return t.join("&")
                },
                v = function(t, e, n) {
                    var i = e.split("."),
                        r = null;
                    i.forEach(function(e, n) {
                        "undefined" == typeof t[e] && (t[e] = {}), n !== i.length - 1 && (t = t[e]), r = e
                    }), t[r] = n
                },
                d = function() {
                    var t = document.querySelector('link[rel="canonical"]');
                    return t ? t.href : window.location.href.replace(window.location.hash, "")
                },
                m = "undefined" != typeof window && "undefined" != typeof document && document.createElement
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(0);
            n.d(e, "global", function() {
                return o
            }), n.d(e, "wrapSVG", function() {
                return a
            }), n.d(e, "createNode", function() {
                return s
            }), n.d(e, "getScript", function() {
                return l
            }), n.d(e, "getJSON", function() {
                return h
            }), n.d(e, "find", function() {
                return p
            }), n.d(e, "findAll", function() {
                return f
            }), n.d(e, "openPopup", function() {
                return v
            });
            var r = {},
                o = i.isBrowserEnv ? window : r,
                u = i.isBrowserEnv ? document.createElement("div") : {},
                c = 0,
                a = function(t) {
                    return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M' + t + 'z"/></svg>'
                },
                s = function(t) {
                    return u.innerHTML = t, u.children[0]
                },
                l = function(t) {
                    var e = document.createElement("script"),
                        n = document.head;
                    e.type = "text/javascript", e.src = t, n.appendChild(e), n.removeChild(e)
                },
                h = function(t, e) {
                    var n = encodeURIComponent("random_fun_" + ++c),
                        i = t.replace(/callback=(\?)/, "callback=" + n);
                    window[n] = e, l(i)
                },
                p = function(t, e) {
                    return (e || document).querySelector(t)
                },
                f = function(t, e) {
                    return Array.prototype.slice.call((e || document).querySelectorAll(t))
                },
                v = function(t, e, n, i) {
                    var r = Math.round(screen.width / 2 - n / 2),
                        o = 0;
                    screen.height > i && (o = Math.round(screen.height / 3 - i / 2));
                    var u = "left=" + r + ",top=" + o + ",width=" + n + ",height=" + i + ",personalbar=0,toolbar=0,scrollbars=1,resizable=1",
                        c = window.open(t, e, u);
                    return c ? (c.focus(), c) : (location.href = t, null)
                }
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = {
                name: "likely",
                prefix: "likely__"
            }
        }, function(t, e, n) {
            "use strict";
            var i = n(9),
                r = n(0),
                o = n(18),
                u = n(10),
                c = n(11),
                a = n(12),
                s = n(13),
                l = n(14),
                h = n(15),
                p = n(16),
                f = n(17),
                v = {
                    facebook: u.a,
                    gplus: c.a,
                    linkedin: a.a,
                    odnoklassniki: s.a,
                    pinterest: l.a,
                    telegram: h.a,
                    twitter: p.a,
                    vkontakte: f.a
                };
            n.i(r.each)(v, function(t, e) {
                n.i(i.a)(t), t.svgi = o.a[e], t.name = e
            }), e.a = v
        }, function(t, e, n) {
            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e
                    }
                }(),
                o = n(0),
                u = o.bools,
                c = o.getDefaultUrl,
                a = o.merge,
                s = n(19).default,
                l = n(2).default,
                h = n(1),
                p = h.findAll,
                f = n(8).default,
                v = function(t, e) {
                    var n = e || {},
                        i = {
                            counters: !0,
                            timeout: 1e3,
                            zeroes: !1,
                            title: document.title,
                            wait: 500,
                            url: c()
                        },
                        r = t[l.name],
                        o = a({}, i, n, u(t));
                    return r ? r.update(o) : t[l.name] = new s(t, o), r
                },
                d = function() {
                    function t() {
                        return i(this, t), console.warn("likely function is DEPRECATED and will be removed in 3.0. Use likely.initiate instead."), t.initiate.apply(t, arguments)
                    }
                    return r(t, null, [{
                        key: "initate",
                        value: function() {
                            return console.warn("likely.initate function is DEPRECATED and will be removed in 3.0. Use likely.initiate instead."), t.initiate.apply(t, arguments)
                        }
                    }, {
                        key: "initiate",
                        value: function(t, e) {
                            function n() {
                                i.forEach(function(t) {
                                    v(t, r)
                                })
                            }
                            var i = void 0,
                                r = void 0;
                            Array.isArray(t) ? (i = t, r = e) : t instanceof Node ? (i = [t], r = e) : (i = p("." + l.name), r = t), n(), f.onUrlChange(n)
                        }
                    }]), t
                }();
            t.exports = d
        }, function(t, e, n) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var r = n(1),
                o = n(0),
                u = n(2),
                c = n(7),
                a = n(3),
                s = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e
                    }
                }(),
                l = '<span class="{className}">{content}</span>',
                h = function() {
                    function t(e, r, u) {
                        i(this, t), this.widget = e, this.likely = r, this.options = n.i(o.merge)(u), this.init()
                    }
                    return s(t, [{
                        key: "init",
                        value: function() {
                            this.detectService(), this.detectParams(), this.service && (this.initHtml(), setTimeout(this.initCounter.bind(this), 0))
                        }
                    }, {
                        key: "update",
                        value: function(t) {
                            var e = "." + u.default.prefix + "counter",
                                i = n.i(r.findAll)(e, this.widget);
                            n.i(o.extend)(this.options, n.i(o.merge)({
                                forceUpdate: !1
                            }, t)), i.forEach(function(t) {
                                t.parentNode.removeChild(t)
                            }), this.initCounter()
                        }
                    }, {
                        key: "detectService",
                        value: function() {
                            var t = this.widget,
                                e = n.i(o.getDataset)(t).service;
                            e || (e = Object.keys(a.a).filter(function(e) {
                                return t.classList.contains(e)
                            })[0]), e && (this.service = e, n.i(o.extend)(this.options, a.a[e]))
                        }
                    }, {
                        key: "detectParams",
                        value: function() {
                            var t = this.options,
                                e = n.i(o.getDataset)(this.widget);
                            if (e.counter) {
                                var i = parseInt(e.counter, 10);
                                isNaN(i) ? t.counterUrl = e.counter : t.counterNumber = i
                            }
                            t.title = e.title || t.title, t.url = e.url || t.url
                        }
                    }, {
                        key: "initHtml",
                        value: function() {
                            var t = this.options,
                                e = this.widget,
                                i = e.innerHTML;
                            e.addEventListener("click", this.click.bind(this)), e.classList.remove(this.service), e.className += " " + this.className("widget");
                            var u = n.i(o.template)(l, {
                                    className: this.className("button"),
                                    content: i
                                }),
                                c = n.i(o.template)(l, {
                                    className: this.className("icon"),
                                    content: n.i(r.wrapSVG)(t.svgi)
                                });
                            e.innerHTML = c + u
                        }
                    }, {
                        key: "initCounter",
                        value: function() {
                            var t = this.options;
                            t.counters && t.counterNumber ? this.updateCounter(t.counterNumber) : t.counterUrl && n.i(c.a)(this.service, t.url, t)(this.updateCounter.bind(this))
                        }
                    }, {
                        key: "className",
                        value: function(t) {
                            var e = u.default.prefix + t;
                            return e + " " + e + "_" + this.service
                        }
                    }, {
                        key: "updateCounter",
                        value: function(t) {
                            var e = parseInt(t, 10) || 0,
                                i = n.i(r.find)("." + u.default.name + "__counter", this.widget);
                            i && i.parentNode.removeChild(i);
                            var c = {
                                className: this.className("counter"),
                                content: e
                            };
                            e || this.options.zeroes || (c.className += " " + u.default.prefix + "counter_empty", c.content = ""), this.widget.appendChild(n.i(r.createNode)(n.i(o.template)(l, c))), this.likely.updateCounter(this.service, e)
                        }
                    }, {
                        key: "click",
                        value: function() {
                            var t = this.options;
                            if (t.click.call(this)) {
                                var e = n.i(o.makeUrl)(t.popupUrl, {
                                    url: t.url,
                                    title: t.title
                                });
                                n.i(r.openPopup)(this.addAdditionalParamsToUrl(e), u.default.prefix + this.service, t.popupWidth, t.popupHeight)
                            }
                            return !1
                        }
                    }, {
                        key: "addAdditionalParamsToUrl",
                        value: function(t) {
                            var e = n.i(o.query)(n.i(o.merge)(this.widget.dataset, this.options.data)),
                                i = t.indexOf("?") === -1 ? "?" : "&";
                            return "" === e ? t : t + i + e
                        }
                    }]), t
                }();
            e.a = h
        }, function(t, e, n) {
            "use strict";
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
            e.a = function(t) {
                var e = [];
                return function(n) {
                    var r = "undefined" == typeof n ? "undefined" : i(n);
                    return "undefined" === r ? t : void("function" === r ? e.push(n) : (t = n, e.forEach(function(t) {
                        t(n)
                    })))
                }
            }
        }, function(t, e, n) {
            "use strict";
            var i = n(6),
                r = n(0),
                o = n(3),
                u = {};
            e.a = function(t, e, c) {
                u[t] || (u[t] = {});
                var a = u[t],
                    s = a[e];
                if (!c.forceUpdate && s) return s;
                s = n.i(i.a)();
                var l = n.i(r.makeUrl)(c.counterUrl, {
                    url: e
                });
                return o.a[t].counter(l, s, e), a[e] = s, s
            }
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = [],
                r = function() {
                    i.forEach(function(t) {
                        t()
                    })
                },
                o = function() {
                    var t = window.history.pushState;
                    window.history.pushState = function() {
                        return setTimeout(r, 0), t.apply(window.history, arguments)
                    };
                    var e = window.history.replaceState;
                    window.history.replaceState = function() {
                        return setTimeout(r, 0), e.apply(window.history, arguments)
                    }, window.addEventListener("popstate", r)
                },
                u = !1,
                c = {
                    onUrlChange: function(t) {
                        u || (o(), u = !0), i.push(t)
                    }
                };
            e.default = c
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = function(t, e) {
                    var r = this;
                    n.i(i.getJSON)(t, function(t) {
                        try {
                            var n = "function" == typeof r.convertNumber ? r.convertNumber(t) : t;
                            e(n)
                        } catch (t) {}
                    })
                };
            e.a = function(t) {
                t.counter = i.global.__likelyCounterMock || t.counter || r, t.click = t.click || function() {
                    return !0
                }
            }
        }, function(t, e, n) {
            "use strict";
            e.a = {
                counterUrl: "https://graph.facebook.com/?id={url}&callback=?",
                convertNumber: function(t) {
                    return t.share.share_count
                },
                popupUrl: "https://www.facebook.com/sharer/sharer.php?u={url}",
                popupWidth: 600,
                popupHeight: 500
            }
        }, function(t, e, n) {
            "use strict";
            e.a = {
                counterUrl: "https://share.yandex.net/counter/gpp/?url={url}&callback=?",
                gid: 0,
                promises: {},
                popupUrl: "https://plus.google.com/share?url={url}",
                popupWidth: 700,
                popupHeight: 500
            }
        }, function(t, e, n) {
            "use strict";
            e.a = {
                counterUrl: "https://www.linkedin.com/countserv/count/share?url={url}&format=jsonp&callback=?",
                convertNumber: function(t) {
                    return t.count
                },
                popupUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}",
                popupWidth: 600,
                popupHeight: 500
            }
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(0),
                o = {
                    counterUrl: "https://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}",
                    counter: function(t, e) {
                        this.promises.push(e), n.i(i.getScript)(n.i(r.makeUrl)(t, {
                            index: this.promises.length - 1
                        }))
                    },
                    promises: [],
                    popupUrl: "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}",
                    popupWidth: 640,
                    popupHeight: 400
                };
            n.i(r.set)(i.global, "ODKL.updateCount", function(t, e) {
                o.promises[t](e)
            }), e.a = o
        }, function(t, e, n) {
            "use strict";
            e.a = {
                counterUrl: "https://api.pinterest.com/v1/urls/count.json?url={url}&callback=?",
                convertNumber: function(t) {
                    return t.count
                },
                popupUrl: "https://pinterest.com/pin/create/button/?url={url}&description={title}",
                popupWidth: 630,
                popupHeight: 270
            }
        }, function(t, e, n) {
            "use strict";
            e.a = {
                popupUrl: "https://telegram.me/share/url?url={url}",
                popupWidth: 600,
                popupHeight: 500
            }
        }, function(t, e, n) {
            "use strict";
            e.a = {
                popupUrl: "https://twitter.com/intent/tweet?url={url}&text={title}",
                popupWidth: 600,
                popupHeight: 450,
                click: function() {
                    return /[\.\?:\-–—]\s*$/.test(this.options.title) || (this.options.title += ":"), !0
                }
            }
        }, function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(0),
                o = {
                    counterUrl: "https://vk.com/share.php?act=count&url={url}&index={index}",
                    counter: function(t, e) {
                        this.promises.push(e), n.i(i.getScript)(n.i(r.makeUrl)(t, {
                            index: this.promises.length - 1
                        }))
                    },
                    promises: [],
                    popupUrl: "https://vk.com/share.php?url={url}&title={title}",
                    popupWidth: 550,
                    popupHeight: 330
                };
            n.i(r.set)(i.global, "VK.Share.count", function(t, e) {
                o.promises[t](e)
            }), e.a = o
        }, function(t, e, n) {
            "use strict";
            e.a = {
                facebook: "13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h5V9H6V7h2V5c0-2 2-2 2-2h3v2h-3v2h3l-.5 2H10v7h3c2 0 3-1 3-3V3c0-2-1-3-3-3",
                twitter: "15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353",
                vkontakte: "13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zm.452 11.394l-1.603.022s-.345.068-.8-.243c-.598-.41-1.164-1.48-1.604-1.342-.446.144-.432 1.106-.432 1.106s.003.206-.1.315c-.11.12-.326.144-.326.144H7.87s-1.582.095-2.975-1.356c-1.52-1.583-2.862-4.723-2.862-4.723s-.078-.206.006-.305c.094-.112.35-.12.35-.12l1.716-.01s.162.026.277.11c.095.07.15.202.15.202s.276.7.643 1.335c.716 1.238 1.05 1.508 1.293 1.376.353-.193.247-1.75.247-1.75s.006-.565-.178-.817c-.145-.194-.415-.25-.534-.267-.096-.014.062-.238.267-.338.31-.15.853-.16 1.497-.153.502.004.646.035.842.083.59.143.39.694.39 2.016 0 .422-.075 1.018.23 1.215.13.085.453.013 1.256-1.352.38-.647.666-1.407.666-1.407s.062-.136.16-.194c.098-.06.232-.04.232-.04l1.804-.012s.542-.065.63.18c.092.257-.203.857-.94 1.84-1.21 1.612-1.345 1.46-.34 2.394.96.89 1.16 1.325 1.192 1.38.4.66-.44.71-.44.71",
                gplus: "8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8",
                pinterest: "7.99 0c-4.417 0-8 3.582-8 8 0 3.39 2.11 6.284 5.086 7.45-.07-.633-.133-1.604.028-2.295.145-.624.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .686-.437 1.713-.663 2.664-.19.796.398 1.446 1.184 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.255-3.343-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .688.265 1.425.595 1.826.065.08.075.15.055.23-.06.252-.195.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.835-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.74 4.976-4.152 4.976-.81 0-1.573-.42-1.834-.92l-.498 1.903c-.18.695-.668 1.566-.994 2.097.75.232 1.544.357 2.37.357 4.417 0 8-3.582 8-8s-3.583-8-8-8",
                odnoklassniki: "8 6.107c.888 0 1.607-.72 1.607-1.607 0-.888-.72-1.607-1.607-1.607s-1.607.72-1.607 1.607c0 .888.72 1.607 1.607 1.607zM13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zM8 .75c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75S4.25 6.57 4.25 4.5C4.25 2.43 5.93.75 8 .75zm3.826 12.634c.42.42.42 1.097 0 1.515-.21.208-.483.313-.758.313-.274 0-.548-.105-.758-.314L8 12.59 5.69 14.9c-.42.418-1.098.418-1.516 0s-.42-1.098 0-1.516L6.357 11.2c-1.303-.386-2.288-1.073-2.337-1.11-.473-.354-.57-1.025-.214-1.5.354-.47 1.022-.567 1.496-.216.03.022 1.4.946 2.698.946 1.31 0 2.682-.934 2.693-.943.474-.355 1.146-.258 1.5.213.355.474.26 1.146-.214 1.5-.05.036-1.035.723-2.338 1.11l2.184 2.184",
                telegram: "6,11.960784l-1,-3l11,-8l-15.378,5.914c0,0 -0.672,0.23 -0.619,0.655c0.053,0.425 0.602,0.619 0.602,0.619l3.575,1.203l1.62,5.154l2.742,-2.411l-0.007,-0.005l3.607,2.766c0.973,0.425 1.327,-0.46 1.327,-0.46l2.531,-13.435l-10,11z",
                linkedin: "2.4,6h2.4v7.6H2.4V6z M3.6,2.2c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5C2.8,5,2.2,4.3,2.2,3.6C2.2,2.8,2.8,2.2,3.6,2.2C3.6,2.2,3.6,2.2,3.6,2.2 M6.2,6h2.3v1h0C9,6.2,9.9,5.8,10.8,5.8c2.4,0,2.8,1.6,2.8,3.6v4.2h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6z M13,0H3C1,0,0,1,0,3v10c0,2,1,3,3,3h10c2,0,3-1,3-3V3C16,1,15,0,13,0z"
            }
        }, function(t, e, n) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(5),
                o = n(2),
                u = n(0),
                c = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e
                    }
                }(),
                a = function() {
                    function t(e, n) {
                        i(this, t), this.container = e, this.options = n, this.countersLeft = 0, this.buttons = [], this.number = 0, this.init()
                    }
                    return c(t, [{
                        key: "init",
                        value: function() {
                            n.i(u.toArray)(this.container.children).forEach(this.addButton.bind(this)), this.options.counters ? (this.timer = setTimeout(this.appear.bind(this), this.options.wait), this.timeout = setTimeout(this.ready.bind(this), this.options.timeout)) : this.appear()
                        }
                    }, {
                        key: "addButton",
                        value: function(t) {
                            var e = new r.a(t, this, this.options);
                            this.buttons.push(e), e.options.counterUrl && this.countersLeft++
                        }
                    }, {
                        key: "update",
                        value: function(t) {
                            (t.forceUpdate || t.url && t.url !== this.options.url) && (this.countersLeft = this.buttons.length, this.number = 0, this.buttons.forEach(function(e) {
                                e.update(t)
                            }))
                        }
                    }, {
                        key: "updateCounter",
                        value: function(t, e) {
                            e && (this.number += e), this.countersLeft--, 0 === this.countersLeft && (this.appear(), this.ready())
                        }
                    }, {
                        key: "appear",
                        value: function() {
                            this.container.classList.add(o.default.name + "_visible")
                        }
                    }, {
                        key: "ready",
                        value: function() {
                            this.timeout && (clearTimeout(this.timeout), this.container.classList.add(o.default.name + "_ready"))
                        }
                    }]), t
                }();
            e.default = a
        }, function(t, e, n) {
            var i = n(4);
            window.addEventListener("load", function() {
                i.initiate()
            }), t.exports = i
        }])
    })
}, function(module, exports, __webpack_require__) {
    (function($) {
        module.exports = {
            init: function() {
                var navH = $(".black-nav").innerHeight(),
                    navHeaderMain = $(".header__main").innerHeight(),
                    navNext = $(".home-portfolio, .project-slider, .header-bottom"),
                    burger = $(".black-nav__burger");
                $(document).on("scroll", function() {
                    var documentScroll = $(this).scrollTop();
                    documentScroll > navH ? ($(".header__main").addClass("header__main--fixed"), navNext.css({
                        marginTop: navHeaderMain
                    })) : ($(".header__main").removeClass("header__main--fixed"), navNext.removeAttr("style"))
                }), burger.click(function() {
                    return $(this).toggleClass("active").siblings(".main-nav__list").slideToggle(500), !1
                }), $(document).on("click", function(e) {
                    !$(e.target).closest(".main-nav__list").length && burger.hasClass("active") && ($(".main-nav__list").slideUp(500), $(".black-nav__burger").removeClass("active"), e.stopPropagation())
                })
            }
        }
    }).call(exports, __webpack_require__(1))
}, function(module, exports, __webpack_require__) {
    (function($, jQuery) {
        module.exports = {
            init: function() {
                $(".js-btn-hide").on("click", function(e) {
                    e.preventDefault(), $(".how-we-work__btn-top").toggleClass("active"), $(this).siblings(".how-we-work__ol").slideToggle(500), $(this).closest(".how-we-work__ol").slideUp(500)
                }), $(".scrollto").click(function() {
                    var elementClick = $(this).attr("href");
                    if ($(this).hasClass("btn-hide-down")) {
                        var destination = $(elementClick).offset().top - 75;
                        jQuery("html:not(:animated),body:not(:animated)").animate({
                            scrollTop: destination
                        }, 500)
                    } else {
                        $(".how-we-work__ol").slideDown(500), $(".how-we-work__btn-top").addClass("active");
                        var destination = $(elementClick).offset().top - 100;
                        jQuery("html:not(:animated),body:not(:animated)").animate({
                            scrollTop: destination
                        }, 750)
                    }
                    return !1
                }), $(".how-we-work__link-m").on("click", function(e) {
                    e.preventDefault(), $(this).toggleClass("active"), $(this).siblings(".how-we-work__item-m").slideToggle(200)
                })
            }
        }
    }).call(exports, __webpack_require__(1), __webpack_require__(1))
}, function(module, exports, __webpack_require__) {
    (function($) {
        module.exports = {
            init: function() {
                $(".reviews__list").slick({
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: !0,
                    arrows: !1,
                    responsive: [{
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerPadding: "60px"
                        }
                    }]
                })
            }
        }
    }).call(exports, __webpack_require__(1))
}, function(module, exports, __webpack_require__) {
    (function($) {
        module.exports = {
            init: function() {
                var phone_inputs = $(".phone-input");
                phone_inputs.mask("+7(000)000-00-00", {
                    placeholder: "+7(___)___-__-__"
                })
            }
        }
    }).call(exports, __webpack_require__(1))
}, function(module, exports, __webpack_require__) {
    (function($) {
        module.exports = {
            init: function() {
                var myPrArrowPrev = '<a href="javascript:; " class="my-arrow-prev"></a>',
                    myPrArrowNext = '<a href="javascript:;" class="my-arrow-next"><span><svg class="slider-svg-next" width="10px" height="10px"><use xlink:href="#arrow"></use></svg></span></a>',
                    slickk = $(".project-slider__list"),
                    slickkSm = $(".project-slider__list-sm");
                slickk.slick({
                    centerMode: !0,
                    variableWidth: !0,
                    lazyLoad: "progressive",
                    slidesToShow: 1,
                    asNavFor: ".project-slider__list-sm",
                    prevArrow: myPrArrowPrev,
                    nextArrow: myPrArrowNext,
                    responsive: [{
                        breakpoint: 768,
                        settings: {}
                    }]
                }), slickkSm.slick({
                    centerMode: !0,
                    focusOnSelect: !0,
                    asNavFor: ".project-slider__list",
                    arrows: !1,
                    variableWidth: !0,
                    responsive: [{
                        breakpoint: 768,
                        settings: "unslick"
                    }]
                }), $(window).resize(function() {
                    slickkSm.slick("resize"), slickk.slick("resize")
                }), $(window).on("orientationchange", function() {
                    slickkSm.slick("resize"), slickk.slick("resize")
                }), $(".project-slider__number-all").html(slickk.slick("getSlick").slideCount), $(".project-slider__number-where").html(slickk.slick("slickCurrentSlide") + 1), slickk.on("afterChange", function(event, slick, currentSlide, nextSlide) {
                    $(".project-slider__number-where").html(slickk.slick("slickCurrentSlide") + 1)
                }), $(document).on("keydown", function(e) {
                    37 == e.keyCode && slickk.slick("slickPrev"), 39 == e.keyCode && slickk.slick("slickNext")
                })
            }
        }
    }).call(exports, __webpack_require__(1))
}, function(module, exports, __webpack_require__) {
    (function($) {
        module.exports = {
            init: function() {
                var myPrArrowPrev = '<a href="javascript:; " class="my-arrow-prev"><span><svg class="slider-svg-prev" width="10px" height="10px"><use xlink:href="#arrow"></use></svg></span></a>',
                    myPrArrowNext = '<a href="javascript:;" class="my-arrow-next"><span><svg class="slider-svg-next" width="10px" height="10px"><use xlink:href="#arrow"></use></svg></span></a>';
                $(".article__slider").slick({
                        dots: !0,
                        prevArrow: myPrArrowPrev,
                        nextArrow: myPrArrowNext
                    }),
                    function() {
                        "use strict";

                        function loadOffset() {
                            menuOPT = [];
                            var links = jPageMenu.find("a");
                            links && links.length && links.length > 0 && links.each(function(index, node) {
                                var jTitle = $(node.getAttribute("href"));
                                jTitle && jTitle.length && jTitle.length > 0 && (console.log("lsadjfjasldfj"), menuOPT.push(jTitle.offset().top - 250))
                            })
                        }
                        var jDocument = ($(".header"), $(document)),
                            jPageMenu = $(".site-page-menu"),
                            jPageH = $(".site-page-menu").innerHeight() + 30,
                            winH = window.innerHeight,
                            pdintro = $(".project-descr__intro");
                        if (pdintro.offset()) var introH = $(".project-descr__intro").offset().top;
                        $(window).resize(function() {
                            winH = window.innerHeight
                        }), jPageMenu.length && jDocument.on("scroll", function(event) {
                            var jScroll = jDocument.scrollTop(),
                                ctaH = $(".cta-stripe").offset();
                            if (jScroll > introH && jPageMenu.length > 0 ? jPageMenu.addClass("site-page-menu__show") : jPageMenu.length > 0 && jPageMenu.removeClass("site-page-menu__show"), jScroll > ctaH.top - 2 * jPageH && jPageMenu.length > 0 && jPageMenu.removeClass("site-page-menu__show"), menuOPT.length > 0 && jPageMenu.length > 0) {
                                for (var i = 0; jScroll > menuOPT[i];) i++;
                                jPageMenu.find("a").each(function(index, node) {
                                    index == i - 1 ? node.classList.add("active") : node.classList.remove("active")
                                })
                            }
                        });
                        var menuOPT = [];
                        jPageMenu.length > 0 && loadOffset();
                        var body = $("html, body");
                        jDocument.on("click", ".js-scroll-link", function(event) {
                            event.stopPropagation(), event.preventDefault();
                            var hash = this.getAttribute("href"),
                                node = $(hash);
                            body.animate({
                                scrollTop: node.offset().top - 100
                            }, 300, function() {
                                window.location.hash = hash
                            })
                        })
                    }()
            }
        }
    }).call(exports, __webpack_require__(1))
}, function(module, exports, __webpack_require__) {
    (function($, jQuery) {
        module.exports = {
            init: function() {
                $(".scrollto2").click(function() {
                    var elementClick = $(this).attr("href"),
                        destination = $(elementClick).offset().top - 75;
                    jQuery("html:not(:animated),body:not(:animated)").animate({
                        scrollTop: destination
                    }, 500)
                })
            }
        }
    }).call(exports, __webpack_require__(1), __webpack_require__(1))
}, function(module, exports, __webpack_require__) {
    (function($) {
        module.exports = {
            init: function() {
                var opener = $(".popup__opener"),
                    popup = $("#popup"),
                    popup_form = $(".popup__form"),
                    popup_title = popup.find("h2"),
                    popup_text = popup.find(".section__subtitle p"),
                    popup_btn = popup.find(".popup__form .btn"),
                    phone_regex = /\+\d{1,3}\(\d{3}\)\d{3}-\d{2}-\d{2}/gm,
                    popup_hidable = popup.find(".popup__form label,.popup__form .phone-input,.popup__form .btn");
                opener.on("click", function(e) {
                    e.preventDefault();
                    var $this = $(this);
                    popup_title.text($this.data("title")), popup_text.text($this.data("text")), popup_btn.text($this.data("btn")), popup.slideDown(400), $this.closest(".page").addClass("hidden")
                }), $(".popup__close").on("click", function(e) {
                    e.preventDefault(), $(".popup").slideUp(400), $(this).closest(".page").removeClass("hidden")
                }), $(document).keyup(function() {
                    27 == event.keyCode && ($(".popup").slideUp(400), $(".page").removeClass("hidden"))
                }), popup_form.on("submit", function(e) {
                    e.preventDefault();
                    for (var $this = $(this), form_arr = $this.serializeArray(), i = form_arr.length - 1; i >= 0; i--)
                        if ("tel" == form_arr[i].name && null == phone_regex.exec(form_arr[i].value)) return window.alert("Укажите правильный номер телефона"), void $this.find('[name="tel"]').focus().prev().addClass("invalid");
                    var data = {
                        action: "get_callback",
                        n: window.timm.n,
                        f: form_arr
                    };
                    popup_title.text("Отправляем запрос..."), popup_text.text("Это может занять пару секунд."), popup_hidable.hide(), $.post(window.timm.u, data, function(response) {
                        "ok" == response.status ? (popup_title.text("Сообщение отправлено!"), popup_text.text("Вы можете вернуться к просмотру сайта. Это окно свернется автоматически через 2 секунды."), setTimeout(function() {
                            $(".popup__close").click(), popup_hidable.show()
                        }, 2e3)) : (popup_title.text("Ошибка отправки сообщения!"), popup_text.text("При отправке сообщения что-то пошло не так. Позвоните нам +7 (812) 408-57-43 — мы перезвоним!"), setTimeout(function() {
                            $(".popup__close").click(), popup_hidable.show()
                        }, 2e3), console.error(response))
                    })
                })
            }
        }
    }).call(exports, __webpack_require__(1))
}, function(module, exports) {
    module.exports = {
        init: function() {}
    }
}, function(module, exports, __webpack_require__) {
    (function($) {
        module.exports = {
            init: function() {
                var contacts_form = $(".contacts__item-form form"),
                    popup = $("#popup"),
                    popup_title = ($(".popup__form"), popup.find("h2")),
                    popup_text = popup.find(".section__subtitle p"),
                    popup_hidable = (popup.find(".popup__form .btn"), popup.find(".popup__form label,.popup__form .phone-input,.popup__form .btn")),
                    mail_regex = /^([\w-+]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
                    phone_regex = /\+\d{1,3}\(\d{3}\)\d{3}-\d{2}-\d{2}/gm;
                contacts_form.on("submit", function(e) {
                    e.preventDefault();
                    for (var $this = $(this), form_arr = $this.serializeArray(), i = form_arr.length - 1; i >= 0; i--)
                        if ("tel" == form_arr[i].name) {
                            if (null == phone_regex.exec(form_arr[i].value)) return window.alert("Укажите телефон"), void $this.find('[name="tel"]').addClass("invalid").focus()
                        } else if ("mail" == form_arr[i].name && null == mail_regex.exec(form_arr[i].value)) return window.alert("Укажите email"), void $this.find('[name="mail"]').addClass("invalid").focus();
                    var data = {
                        action: "get_callback",
                        n: window.timm.n,
                        f: form_arr
                    };
                    popup_title.text("Отправляем запрос..."), popup_text.text("Это может занять пару секунд."), popup_hidable.hide(), popup.slideDown(400), $this.closest(".page").addClass("hidden"), $.post(window.timm.u, data, function(response) {
                        "ok" == response.status ? (popup_title.text("Сообщение отправлено!"), popup_text.text("Вы можете вернуться к просмотру сайта. Это окно свернется автоматически через 2 секунды."), setTimeout(function() {
                            $(".popup__close").click(), popup_hidable.show()
                        }, 2e3)) : (popup_title.text("Ошибка отправки сообщения!"), popup_text.text("При отправке сообщения что-то пошло не так. Позвоните нам +7 (812) 408-57-43 — мы перезвоним!"), setTimeout(function() {
                            $(".popup__close").click(), popup_hidable.show()
                        }, 2e3), console.error(response))
                    })
                })
            }
        }
    }).call(exports, __webpack_require__(1))
}, function(module, exports, __webpack_require__) {
    (function($) {
        module.exports = {
            init: function() {
                if ($(".all-main__list").length) {
                    var $menu = $(".all-main__list");
                    $line = $(".all-main__line"), $indicator = !0, $active = $menu.find(".active"), default_pos = $active.offset().left - $menu.offset().left, default_width = $active.outerWidth(), $line.css({
                        left: default_pos,
                        width: default_width
                    })
                }
            }
        }
    }).call(exports, __webpack_require__(1))
}]);