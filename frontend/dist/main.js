/*! For license information please see main.js.LICENSE.txt */
(() => {
	"use strict";
	var e = {
			52: (e) => {
				var t = {};
				e.exports = function (e, n) {
					var r = (function (e) {
						if (void 0 === t[e]) {
							var n = document.querySelector(e);
							if (
								window.HTMLIFrameElement &&
								n instanceof window.HTMLIFrameElement
							)
								try {
									n = n.contentDocument.head;
								} catch (e) {
									n = null;
								}
							t[e] = n;
						}
						return t[e];
					})(e);
					if (!r)
						throw new Error(
							"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
						);
					r.appendChild(n);
				};
			},
			154: (e, t, n) => {
				!(function e() {
					if (
						"undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
						"function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
					)
						try {
							__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
						} catch (e) {
							console.error(e);
						}
				})(),
					(e.exports = n(631));
			},
			161: (e, t) => {
				Object.prototype.toString;
			},
			203: (e, t, n) => {
				e.exports = function (e) {
					var t = n.nc;
					t && e.setAttribute("nonce", t);
				};
			},
			221: (e) => {
				e.exports = function (e) {
					var t = [];
					return (
						(t.toString = function () {
							return this.map(function (t) {
								var n = "",
									r = void 0 !== t[5];
								return (
									t[4] && (n += "@supports (".concat(t[4], ") {")),
									t[2] && (n += "@media ".concat(t[2], " {")),
									r &&
										(n += "@layer".concat(
											t[5].length > 0 ? " ".concat(t[5]) : "",
											" {"
										)),
									(n += e(t)),
									r && (n += "}"),
									t[2] && (n += "}"),
									t[4] && (n += "}"),
									n
								);
							}).join("");
						}),
						(t.i = function (e, n, r, a, l) {
							"string" == typeof e && (e = [[null, e, void 0]]);
							var o = {};
							if (r)
								for (var i = 0; i < this.length; i++) {
									var u = this[i][0];
									null != u && (o[u] = !0);
								}
							for (var s = 0; s < e.length; s++) {
								var c = [].concat(e[s]);
								(r && o[c[0]]) ||
									(void 0 !== l &&
										(void 0 === c[5] ||
											(c[1] = "@layer"
												.concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
												.concat(c[1], "}")),
										(c[5] = l)),
									n &&
										(c[2]
											? ((c[1] = "@media "
													.concat(c[2], " {")
													.concat(c[1], "}")),
											  (c[2] = n))
											: (c[2] = n)),
									a &&
										(c[4]
											? ((c[1] = "@supports ("
													.concat(c[4], ") {")
													.concat(c[1], "}")),
											  (c[4] = a))
											: (c[4] = "".concat(a))),
									t.push(c));
							}
						}),
						t
					);
				};
			},
			247: (e) => {
				e.exports = function (e) {
					var t = e[1],
						n = e[3];
					if (!n) return t;
					if ("function" == typeof btoa) {
						var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
							a =
								"sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
									r
								),
							l = "/*# ".concat(a, " */");
						return [t].concat([l]).join("\n");
					}
					return [t].join("\n");
				};
			},
			269: (e, t, n) => {
				function r(e) {
					return (
						(r =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (e) {
										return typeof e;
								  }
								: function (e) {
										return e &&
											"function" == typeof Symbol &&
											e.constructor === Symbol &&
											e !== Symbol.prototype
											? "symbol"
											: typeof e;
								  }),
						r(e)
					);
				}
				var a = n(485);
				function l(e) {
					var t = "https://react.dev/errors/" + e;
					if (1 < arguments.length) {
						t += "?args[]=" + encodeURIComponent(arguments[1]);
						for (var n = 2; n < arguments.length; n++)
							t += "&args[]=" + encodeURIComponent(arguments[n]);
					}
					return (
						"Minified React error #" +
						e +
						"; visit " +
						t +
						" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
					);
				}
				function o() {}
				var i = {
						d: {
							f: o,
							r: function () {
								throw Error(l(522));
							},
							D: o,
							C: o,
							L: o,
							m: o,
							X: o,
							S: o,
							M: o,
						},
						p: 0,
						findDOMNode: null,
					},
					u = Symbol.for("react.portal"),
					s = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
				function c(e, t) {
					return "font" === e
						? ""
						: "string" == typeof t
						? "use-credentials" === t
							? t
							: ""
						: void 0;
				}
				(t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
					(t.createPortal = function (e, t) {
						var n =
							2 < arguments.length && void 0 !== arguments[2]
								? arguments[2]
								: null;
						if (
							!t ||
							(1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
						)
							throw Error(l(299));
						return (function (e, t, n) {
							var r =
								3 < arguments.length && void 0 !== arguments[3]
									? arguments[3]
									: null;
							return {
								$$typeof: u,
								key: null == r ? null : "" + r,
								children: e,
								containerInfo: t,
								implementation: n,
							};
						})(e, t, null, n);
					}),
					(t.flushSync = function (e) {
						var t = s.T,
							n = i.p;
						try {
							if (((s.T = null), (i.p = 2), e)) return e();
						} finally {
							(s.T = t), (i.p = n), i.d.f();
						}
					}),
					(t.preconnect = function (e, t) {
						"string" == typeof e &&
							((t = t
								? "string" == typeof (t = t.crossOrigin)
									? "use-credentials" === t
										? t
										: ""
									: void 0
								: null),
							i.d.C(e, t));
					}),
					(t.prefetchDNS = function (e) {
						"string" == typeof e && i.d.D(e);
					}),
					(t.preinit = function (e, t) {
						if ("string" == typeof e && t && "string" == typeof t.as) {
							var n = t.as,
								r = c(n, t.crossOrigin),
								a = "string" == typeof t.integrity ? t.integrity : void 0,
								l =
									"string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
							"style" === n
								? i.d.S(
										e,
										"string" == typeof t.precedence ? t.precedence : void 0,
										{ crossOrigin: r, integrity: a, fetchPriority: l }
								  )
								: "script" === n &&
								  i.d.X(e, {
										crossOrigin: r,
										integrity: a,
										fetchPriority: l,
										nonce: "string" == typeof t.nonce ? t.nonce : void 0,
								  });
						}
					}),
					(t.preinitModule = function (e, t) {
						if ("string" == typeof e)
							if ("object" === r(t) && null !== t) {
								if (null == t.as || "script" === t.as) {
									var n = c(t.as, t.crossOrigin);
									i.d.M(e, {
										crossOrigin: n,
										integrity:
											"string" == typeof t.integrity ? t.integrity : void 0,
										nonce: "string" == typeof t.nonce ? t.nonce : void 0,
									});
								}
							} else null == t && i.d.M(e);
					}),
					(t.preload = function (e, t) {
						if (
							"string" == typeof e &&
							"object" === r(t) &&
							null !== t &&
							"string" == typeof t.as
						) {
							var n = t.as,
								a = c(n, t.crossOrigin);
							i.d.L(e, n, {
								crossOrigin: a,
								integrity:
									"string" == typeof t.integrity ? t.integrity : void 0,
								nonce: "string" == typeof t.nonce ? t.nonce : void 0,
								type: "string" == typeof t.type ? t.type : void 0,
								fetchPriority:
									"string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
								referrerPolicy:
									"string" == typeof t.referrerPolicy
										? t.referrerPolicy
										: void 0,
								imageSrcSet:
									"string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
								imageSizes:
									"string" == typeof t.imageSizes ? t.imageSizes : void 0,
								media: "string" == typeof t.media ? t.media : void 0,
							});
						}
					}),
					(t.preloadModule = function (e, t) {
						if ("string" == typeof e)
							if (t) {
								var n = c(t.as, t.crossOrigin);
								i.d.m(e, {
									as:
										"string" == typeof t.as && "script" !== t.as
											? t.as
											: void 0,
									crossOrigin: n,
									integrity:
										"string" == typeof t.integrity ? t.integrity : void 0,
								});
							} else i.d.m(e);
					}),
					(t.requestFormReset = function (e) {
						i.d.r(e);
					}),
					(t.unstable_batchedUpdates = function (e, t) {
						return e(t);
					}),
					(t.useFormState = function (e, t, n) {
						return s.H.useFormState(e, t, n);
					}),
					(t.useFormStatus = function () {
						return s.H.useHostTransitionStatus();
					}),
					(t.version = "19.0.0");
			},
			335: (e, t) => {
				function n(e) {
					return (
						(n =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (e) {
										return typeof e;
								  }
								: function (e) {
										return e &&
											"function" == typeof Symbol &&
											e.constructor === Symbol &&
											e !== Symbol.prototype
											? "symbol"
											: typeof e;
								  }),
						n(e)
					);
				}
				function r(e, t) {
					var n = e.length;
					e.push(t);
					e: for (; 0 < n; ) {
						var r = (n - 1) >>> 1,
							a = e[r];
						if (!(0 < o(a, t))) break e;
						(e[r] = t), (e[n] = a), (n = r);
					}
				}
				function a(e) {
					return 0 === e.length ? null : e[0];
				}
				function l(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
							var i = 2 * (r + 1) - 1,
								u = e[i],
								s = i + 1,
								c = e[s];
							if (0 > o(u, n))
								s < a && 0 > o(c, u)
									? ((e[r] = c), (e[s] = n), (r = s))
									: ((e[r] = u), (e[i] = n), (r = i));
							else {
								if (!(s < a && 0 > o(c, n))) break e;
								(e[r] = c), (e[s] = n), (r = s);
							}
						}
					}
					return t;
				}
				function o(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id;
				}
				if (
					((t.unstable_now = void 0),
					"object" ===
						("undefined" == typeof performance
							? "undefined"
							: n(performance)) && "function" == typeof performance.now)
				) {
					var i = performance;
					t.unstable_now = function () {
						return i.now();
					};
				} else {
					var u = Date,
						s = u.now();
					t.unstable_now = function () {
						return u.now() - s;
					};
				}
				var c = [],
					d = [],
					f = 1,
					m = null,
					p = 3,
					h = !1,
					g = !1,
					y = !1,
					b = "function" == typeof setTimeout ? setTimeout : null,
					v = "function" == typeof clearTimeout ? clearTimeout : null,
					w = "undefined" != typeof setImmediate ? setImmediate : null;
				function E(e) {
					for (var t = a(d); null !== t; ) {
						if (null === t.callback) l(d);
						else {
							if (!(t.startTime <= e)) break;
							l(d), (t.sortIndex = t.expirationTime), r(c, t);
						}
						t = a(d);
					}
				}
				function S(e) {
					if (((y = !1), E(e), !g))
						if (null !== a(c)) (g = !0), z();
						else {
							var t = a(d);
							null !== t && O(S, t.startTime - e);
						}
				}
				var k,
					C = !1,
					N = -1,
					x = 5,
					A = -1;
				function P() {
					return !(t.unstable_now() - A < x);
				}
				function T() {
					if (C) {
						var e = t.unstable_now();
						A = e;
						var n = !0;
						try {
							e: {
								(g = !1), y && ((y = !1), v(N), (N = -1)), (h = !0);
								var r = p;
								try {
									t: {
										for (
											E(e), m = a(c);
											null !== m && !(m.expirationTime > e && P());

										) {
											var o = m.callback;
											if ("function" == typeof o) {
												(m.callback = null), (p = m.priorityLevel);
												var i = o(m.expirationTime <= e);
												if (((e = t.unstable_now()), "function" == typeof i)) {
													(m.callback = i), E(e), (n = !0);
													break t;
												}
												m === a(c) && l(c), E(e);
											} else l(c);
											m = a(c);
										}
										if (null !== m) n = !0;
										else {
											var u = a(d);
											null !== u && O(S, u.startTime - e), (n = !1);
										}
									}
									break e;
								} finally {
									(m = null), (p = r), (h = !1);
								}
								n = void 0;
							}
						} finally {
							n ? k() : (C = !1);
						}
					}
				}
				if ("function" == typeof w)
					k = function () {
						w(T);
					};
				else if ("undefined" != typeof MessageChannel) {
					var _ = new MessageChannel(),
						L = _.port2;
					(_.port1.onmessage = T),
						(k = function () {
							L.postMessage(null);
						});
				} else
					k = function () {
						b(T, 0);
					};
				function z() {
					C || ((C = !0), k());
				}
				function O(e, n) {
					N = b(function () {
						e(t.unstable_now());
					}, n);
				}
				(t.unstable_IdlePriority = 5),
					(t.unstable_ImmediatePriority = 1),
					(t.unstable_LowPriority = 4),
					(t.unstable_NormalPriority = 3),
					(t.unstable_Profiling = null),
					(t.unstable_UserBlockingPriority = 2),
					(t.unstable_cancelCallback = function (e) {
						e.callback = null;
					}),
					(t.unstable_continueExecution = function () {
						g || h || ((g = !0), z());
					}),
					(t.unstable_forceFrameRate = function (e) {
						0 > e || 125 < e
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
							  )
							: (x = 0 < e ? Math.floor(1e3 / e) : 5);
					}),
					(t.unstable_getCurrentPriorityLevel = function () {
						return p;
					}),
					(t.unstable_getFirstCallbackNode = function () {
						return a(c);
					}),
					(t.unstable_next = function (e) {
						switch (p) {
							case 1:
							case 2:
							case 3:
								var t = 3;
								break;
							default:
								t = p;
						}
						var n = p;
						p = t;
						try {
							return e();
						} finally {
							p = n;
						}
					}),
					(t.unstable_pauseExecution = function () {}),
					(t.unstable_requestPaint = function () {}),
					(t.unstable_runWithPriority = function (e, t) {
						switch (e) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								e = 3;
						}
						var n = p;
						p = e;
						try {
							return t();
						} finally {
							p = n;
						}
					}),
					(t.unstable_scheduleCallback = function (e, l, o) {
						var i = t.unstable_now();
						switch (
							((o =
								"object" === n(o) &&
								null !== o &&
								"number" == typeof (o = o.delay) &&
								0 < o
									? i + o
									: i),
							e)
						) {
							case 1:
								var u = -1;
								break;
							case 2:
								u = 250;
								break;
							case 5:
								u = 1073741823;
								break;
							case 4:
								u = 1e4;
								break;
							default:
								u = 5e3;
						}
						return (
							(e = {
								id: f++,
								callback: l,
								priorityLevel: e,
								startTime: o,
								expirationTime: (u = o + u),
								sortIndex: -1,
							}),
							o > i
								? ((e.sortIndex = o),
								  r(d, e),
								  null === a(c) &&
										e === a(d) &&
										(y ? (v(N), (N = -1)) : (y = !0), O(S, o - i)))
								: ((e.sortIndex = u), r(c, e), g || h || ((g = !0), z())),
							e
						);
					}),
					(t.unstable_shouldYield = P),
					(t.unstable_wrapCallback = function (e) {
						var t = p;
						return function () {
							var n = p;
							p = t;
							try {
								return e.apply(this, arguments);
							} finally {
								p = n;
							}
						};
					});
			},
			339: (e) => {
				e.exports = function (e, t) {
					return (
						t || (t = {}),
						e
							? ((e = String(e.__esModule ? e.default : e)),
							  /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
							  t.hash && (e += t.hash),
							  /["'() \t\n]|(%20)/.test(e) || t.needQuotes
									? '"'.concat(
											e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
											'"'
									  )
									: e)
							: e
					);
				};
			},
			434: (e, t) => {
				function n(e) {
					return (
						(n =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (e) {
										return typeof e;
								  }
								: function (e) {
										return e &&
											"function" == typeof Symbol &&
											e.constructor === Symbol &&
											e !== Symbol.prototype
											? "symbol"
											: typeof e;
								  }),
						n(e)
					);
				}
				var r = Symbol.for("react.transitional.element"),
					a = Symbol.for("react.portal"),
					l = Symbol.for("react.fragment"),
					o = Symbol.for("react.strict_mode"),
					i = Symbol.for("react.profiler"),
					u = Symbol.for("react.consumer"),
					s = Symbol.for("react.context"),
					c = Symbol.for("react.forward_ref"),
					d = Symbol.for("react.suspense"),
					f = Symbol.for("react.memo"),
					m = Symbol.for("react.lazy"),
					p = Symbol.iterator,
					h = {
						isMounted: function () {
							return !1;
						},
						enqueueForceUpdate: function () {},
						enqueueReplaceState: function () {},
						enqueueSetState: function () {},
					},
					g = Object.assign,
					y = {};
				function b(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = y),
						(this.updater = n || h);
				}
				function v() {}
				function w(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = y),
						(this.updater = n || h);
				}
				(b.prototype.isReactComponent = {}),
					(b.prototype.setState = function (e, t) {
						if ("object" !== n(e) && "function" != typeof e && null != e)
							throw Error(
								"takes an object of state variables to update or a function which returns an object of state variables."
							);
						this.updater.enqueueSetState(this, e, t, "setState");
					}),
					(b.prototype.forceUpdate = function (e) {
						this.updater.enqueueForceUpdate(this, e, "forceUpdate");
					}),
					(v.prototype = b.prototype);
				var E = (w.prototype = new v());
				(E.constructor = w), g(E, b.prototype), (E.isPureReactComponent = !0);
				var S = Array.isArray,
					k = { H: null, A: null, T: null, S: null },
					C = Object.prototype.hasOwnProperty;
				function N(e, t, n, a, l, o) {
					return (
						(n = o.ref),
						{
							$$typeof: r,
							type: e,
							key: t,
							ref: void 0 !== n ? n : null,
							props: o,
						}
					);
				}
				function x(e) {
					return "object" === n(e) && null !== e && e.$$typeof === r;
				}
				var A = /\/+/g;
				function P(e, t) {
					return "object" === n(e) && null !== e && null != e.key
						? ((r = "" + e.key),
						  (a = { "=": "=0", ":": "=2" }),
						  "$" +
								r.replace(/[=:]/g, function (e) {
									return a[e];
								}))
						: t.toString(36);
					var r, a;
				}
				function T() {}
				function _(e, t, l, o, i) {
					var u = n(e);
					("undefined" !== u && "boolean" !== u) || (e = null);
					var s,
						c,
						d = !1;
					if (null === e) d = !0;
					else
						switch (u) {
							case "bigint":
							case "string":
							case "number":
								d = !0;
								break;
							case "object":
								switch (e.$$typeof) {
									case r:
									case a:
										d = !0;
										break;
									case m:
										return _((d = e._init)(e._payload), t, l, o, i);
								}
						}
					if (d)
						return (
							(i = i(e)),
							(d = "" === o ? "." + P(e, 0) : o),
							S(i)
								? ((l = ""),
								  null != d && (l = d.replace(A, "$&/") + "/"),
								  _(i, t, l, "", function (e) {
										return e;
								  }))
								: null != i &&
								  (x(i) &&
										((s = i),
										(c =
											l +
											(null == i.key || (e && e.key === i.key)
												? ""
												: ("" + i.key).replace(A, "$&/") + "/") +
											d),
										(i = N(s.type, c, void 0, 0, 0, s.props))),
								  t.push(i)),
							1
						);
					d = 0;
					var f,
						h = "" === o ? "." : o + ":";
					if (S(e))
						for (var g = 0; g < e.length; g++)
							d += _((o = e[g]), t, l, (u = h + P(o, g)), i);
					else if (
						"function" ==
						typeof (g =
							null === (f = e) || "object" !== n(f)
								? null
								: "function" == typeof (f = (p && f[p]) || f["@@iterator"])
								? f
								: null)
					)
						for (e = g.call(e), g = 0; !(o = e.next()).done; )
							d += _((o = o.value), t, l, (u = h + P(o, g++)), i);
					else if ("object" === u) {
						if ("function" == typeof e.then)
							return _(
								(function (e) {
									switch (e.status) {
										case "fulfilled":
											return e.value;
										case "rejected":
											throw e.reason;
										default:
											switch (
												("string" == typeof e.status
													? e.then(T, T)
													: ((e.status = "pending"),
													  e.then(
															function (t) {
																"pending" === e.status &&
																	((e.status = "fulfilled"), (e.value = t));
															},
															function (t) {
																"pending" === e.status &&
																	((e.status = "rejected"), (e.reason = t));
															}
													  )),
												e.status)
											) {
												case "fulfilled":
													return e.value;
												case "rejected":
													throw e.reason;
											}
									}
									throw e;
								})(e),
								t,
								l,
								o,
								i
							);
						throw (
							((t = String(e)),
							Error(
								"Objects are not valid as a React child (found: " +
									("[object Object]" === t
										? "object with keys {" + Object.keys(e).join(", ") + "}"
										: t) +
									"). If you meant to render a collection of children, use an array instead."
							))
						);
					}
					return d;
				}
				function L(e, t, n) {
					if (null == e) return e;
					var r = [],
						a = 0;
					return (
						_(e, r, "", "", function (e) {
							return t.call(n, e, a++);
						}),
						r
					);
				}
				function z(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then(
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 1), (e._result = t));
							},
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 2), (e._result = t));
							}
						),
							-1 === e._status && ((e._status = 0), (e._result = t));
					}
					if (1 === e._status) return e._result.default;
					throw e._result;
				}
				var O =
					"function" == typeof reportError
						? reportError
						: function (e) {
								if (
									"object" ===
										("undefined" == typeof window ? "undefined" : n(window)) &&
									"function" == typeof window.ErrorEvent
								) {
									var t = new window.ErrorEvent("error", {
										bubbles: !0,
										cancelable: !0,
										message:
											"object" === n(e) &&
											null !== e &&
											"string" == typeof e.message
												? String(e.message)
												: String(e),
										error: e,
									});
									if (!window.dispatchEvent(t)) return;
								} else if (
									"object" ===
										("undefined" == typeof process
											? "undefined"
											: n(process)) &&
									"function" == typeof process.emit
								)
									return void process.emit("uncaughtException", e);
								console.error(e);
						  };
				function R() {}
				(t.Children = {
					map: L,
					forEach: function (e, t, n) {
						L(
							e,
							function () {
								t.apply(this, arguments);
							},
							n
						);
					},
					count: function (e) {
						var t = 0;
						return (
							L(e, function () {
								t++;
							}),
							t
						);
					},
					toArray: function (e) {
						return (
							L(e, function (e) {
								return e;
							}) || []
						);
					},
					only: function (e) {
						if (!x(e))
							throw Error(
								"React.Children.only expected to receive a single React element child."
							);
						return e;
					},
				}),
					(t.Component = b),
					(t.Fragment = l),
					(t.Profiler = i),
					(t.PureComponent = w),
					(t.StrictMode = o),
					(t.Suspense = d),
					(t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
						k),
					(t.act = function () {
						throw Error(
							"act(...) is not supported in production builds of React."
						);
					}),
					(t.cache = function (e) {
						return function () {
							return e.apply(null, arguments);
						};
					}),
					(t.cloneElement = function (e, t, n) {
						if (null == e)
							throw Error(
								"The argument must be a React element, but you passed " +
									e +
									"."
							);
						var r = g({}, e.props),
							a = e.key;
						if (null != t)
							for (l in (t.ref, void 0 !== t.key && (a = "" + t.key), t))
								!C.call(t, l) ||
									"key" === l ||
									"__self" === l ||
									"__source" === l ||
									("ref" === l && void 0 === t.ref) ||
									(r[l] = t[l]);
						var l = arguments.length - 2;
						if (1 === l) r.children = n;
						else if (1 < l) {
							for (var o = Array(l), i = 0; i < l; i++) o[i] = arguments[i + 2];
							r.children = o;
						}
						return N(e.type, a, void 0, 0, 0, r);
					}),
					(t.createContext = function (e) {
						return (
							((e = {
								$$typeof: s,
								_currentValue: e,
								_currentValue2: e,
								_threadCount: 0,
								Provider: null,
								Consumer: null,
							}).Provider = e),
							(e.Consumer = { $$typeof: u, _context: e }),
							e
						);
					}),
					(t.createElement = function (e, t, n) {
						var r,
							a = {},
							l = null;
						if (null != t)
							for (r in (void 0 !== t.key && (l = "" + t.key), t))
								C.call(t, r) &&
									"key" !== r &&
									"__self" !== r &&
									"__source" !== r &&
									(a[r] = t[r]);
						var o = arguments.length - 2;
						if (1 === o) a.children = n;
						else if (1 < o) {
							for (var i = Array(o), u = 0; u < o; u++) i[u] = arguments[u + 2];
							a.children = i;
						}
						if (e && e.defaultProps)
							for (r in (o = e.defaultProps)) void 0 === a[r] && (a[r] = o[r]);
						return N(e, l, void 0, 0, 0, a);
					}),
					(t.createRef = function () {
						return { current: null };
					}),
					(t.forwardRef = function (e) {
						return { $$typeof: c, render: e };
					}),
					(t.isValidElement = x),
					(t.lazy = function (e) {
						return {
							$$typeof: m,
							_payload: { _status: -1, _result: e },
							_init: z,
						};
					}),
					(t.memo = function (e, t) {
						return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
					}),
					(t.startTransition = function (e) {
						var t = k.T,
							r = {};
						k.T = r;
						try {
							var a = e(),
								l = k.S;
							null !== l && l(r, a),
								"object" === n(a) &&
									null !== a &&
									"function" == typeof a.then &&
									a.then(R, O);
						} catch (e) {
							O(e);
						} finally {
							k.T = t;
						}
					}),
					(t.unstable_useCacheRefresh = function () {
						return k.H.useCacheRefresh();
					}),
					(t.use = function (e) {
						return k.H.use(e);
					}),
					(t.useActionState = function (e, t, n) {
						return k.H.useActionState(e, t, n);
					}),
					(t.useCallback = function (e, t) {
						return k.H.useCallback(e, t);
					}),
					(t.useContext = function (e) {
						return k.H.useContext(e);
					}),
					(t.useDebugValue = function () {}),
					(t.useDeferredValue = function (e, t) {
						return k.H.useDeferredValue(e, t);
					}),
					(t.useEffect = function (e, t) {
						return k.H.useEffect(e, t);
					}),
					(t.useId = function () {
						return k.H.useId();
					}),
					(t.useImperativeHandle = function (e, t, n) {
						return k.H.useImperativeHandle(e, t, n);
					}),
					(t.useInsertionEffect = function (e, t) {
						return k.H.useInsertionEffect(e, t);
					}),
					(t.useLayoutEffect = function (e, t) {
						return k.H.useLayoutEffect(e, t);
					}),
					(t.useMemo = function (e, t) {
						return k.H.useMemo(e, t);
					}),
					(t.useOptimistic = function (e, t) {
						return k.H.useOptimistic(e, t);
					}),
					(t.useReducer = function (e, t, n) {
						return k.H.useReducer(e, t, n);
					}),
					(t.useRef = function (e) {
						return k.H.useRef(e);
					}),
					(t.useState = function (e) {
						return k.H.useState(e);
					}),
					(t.useSyncExternalStore = function (e, t, n) {
						return k.H.useSyncExternalStore(e, t, n);
					}),
					(t.useTransition = function () {
						return k.H.useTransition();
					}),
					(t.version = "19.0.0");
			},
			447: (e) => {
				e.exports = function (e) {
					var t = document.createElement("style");
					return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
				};
			},
			462: (e, t, n) => {
				e.exports = n.p + "5b2c01c11a30de7fe92d.otf";
			},
			485: (e, t, n) => {
				e.exports = n(434);
			},
			612: (e) => {
				e.exports = function (e, t) {
					if (t.styleSheet) t.styleSheet.cssText = e;
					else {
						for (; t.firstChild; ) t.removeChild(t.firstChild);
						t.appendChild(document.createTextNode(e));
					}
				};
			},
			631: (e, t, n) => {
				function r(e) {
					return (
						(r =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (e) {
										return typeof e;
								  }
								: function (e) {
										return e &&
											"function" == typeof Symbol &&
											e.constructor === Symbol &&
											e !== Symbol.prototype
											? "symbol"
											: typeof e;
								  }),
						r(e)
					);
				}
				var a = n(716),
					l = n(485),
					o = n(737);
				function i(e) {
					var t = "https://react.dev/errors/" + e;
					if (1 < arguments.length) {
						t += "?args[]=" + encodeURIComponent(arguments[1]);
						for (var n = 2; n < arguments.length; n++)
							t += "&args[]=" + encodeURIComponent(arguments[n]);
					}
					return (
						"Minified React error #" +
						e +
						"; visit " +
						t +
						" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
					);
				}
				var u = Symbol.for("react.element"),
					s = Symbol.for("react.transitional.element"),
					c = Symbol.for("react.portal"),
					d = Symbol.for("react.fragment"),
					f = Symbol.for("react.strict_mode"),
					m = Symbol.for("react.profiler"),
					p = Symbol.for("react.provider"),
					h = Symbol.for("react.consumer"),
					g = Symbol.for("react.context"),
					y = Symbol.for("react.forward_ref"),
					b = Symbol.for("react.suspense"),
					v = Symbol.for("react.suspense_list"),
					w = Symbol.for("react.memo"),
					E = Symbol.for("react.lazy");
				Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
				var S = Symbol.for("react.offscreen");
				Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
				var k = Symbol.for("react.memo_cache_sentinel"),
					C = Symbol.iterator;
				function N(e) {
					return null === e || "object" !== r(e)
						? null
						: "function" == typeof (e = (C && e[C]) || e["@@iterator"])
						? e
						: null;
				}
				var x = Symbol.for("react.client.reference");
				function A(e) {
					if (null == e) return null;
					if ("function" == typeof e)
						return e.$$typeof === x ? null : e.displayName || e.name || null;
					if ("string" == typeof e) return e;
					switch (e) {
						case d:
							return "Fragment";
						case c:
							return "Portal";
						case m:
							return "Profiler";
						case f:
							return "StrictMode";
						case b:
							return "Suspense";
						case v:
							return "SuspenseList";
					}
					if ("object" === r(e))
						switch (e.$$typeof) {
							case g:
								return (e.displayName || "Context") + ".Provider";
							case h:
								return (e._context.displayName || "Context") + ".Consumer";
							case y:
								var t = e.render;
								return (
									(e = e.displayName) ||
										(e =
											"" !== (e = t.displayName || t.name || "")
												? "ForwardRef(" + e + ")"
												: "ForwardRef"),
									e
								);
							case w:
								return null !== (t = e.displayName || null)
									? t
									: A(e.type) || "Memo";
							case E:
								(t = e._payload), (e = e._init);
								try {
									return A(e(t));
								} catch (e) {}
						}
					return null;
				}
				var P,
					T,
					_ = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
					L = Object.assign;
				function z(e) {
					if (void 0 === P)
						try {
							throw Error();
						} catch (e) {
							var t = e.stack.trim().match(/\n( *(at )?)/);
							(P = (t && t[1]) || ""),
								(T =
									-1 < e.stack.indexOf("\n    at")
										? " (<anonymous>)"
										: -1 < e.stack.indexOf("@")
										? "@unknown:0:0"
										: "");
						}
					return "\n" + P + e + T;
				}
				var O = !1;
				function R(e, t) {
					if (!e || O) return "";
					O = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						var a = {
							DetermineComponentFrameRoot: function () {
								try {
									if (t) {
										var n = function () {
											throw Error();
										};
										if (
											(Object.defineProperty(n.prototype, "props", {
												set: function () {
													throw Error();
												},
											}),
											"object" ===
												("undefined" == typeof Reflect
													? "undefined"
													: r(Reflect)) && Reflect.construct)
										) {
											try {
												Reflect.construct(n, []);
											} catch (e) {
												var a = e;
											}
											Reflect.construct(e, [], n);
										} else {
											try {
												n.call();
											} catch (e) {
												a = e;
											}
											e.call(n.prototype);
										}
									} else {
										try {
											throw Error();
										} catch (e) {
											a = e;
										}
										(n = e()) &&
											"function" == typeof n.catch &&
											n.catch(function () {});
									}
								} catch (e) {
									if (e && a && "string" == typeof e.stack)
										return [e.stack, a.stack];
								}
								return [null, null];
							},
						};
						a.DetermineComponentFrameRoot.displayName =
							"DetermineComponentFrameRoot";
						var l = Object.getOwnPropertyDescriptor(
							a.DetermineComponentFrameRoot,
							"name"
						);
						l &&
							l.configurable &&
							Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
								value: "DetermineComponentFrameRoot",
							});
						var o = a.DetermineComponentFrameRoot(),
							i = o[0],
							u = o[1];
						if (i && u) {
							var s = i.split("\n"),
								c = u.split("\n");
							for (
								l = a = 0;
								a < s.length && !s[a].includes("DetermineComponentFrameRoot");

							)
								a++;
							for (
								;
								l < c.length && !c[l].includes("DetermineComponentFrameRoot");

							)
								l++;
							if (a === s.length || l === c.length)
								for (
									a = s.length - 1, l = c.length - 1;
									1 <= a && 0 <= l && s[a] !== c[l];

								)
									l--;
							for (; 1 <= a && 0 <= l; a--, l--)
								if (s[a] !== c[l]) {
									if (1 !== a || 1 !== l)
										do {
											if ((a--, 0 > --l || s[a] !== c[l])) {
												var d = "\n" + s[a].replace(" at new ", " at ");
												return (
													e.displayName &&
														d.includes("<anonymous>") &&
														(d = d.replace("<anonymous>", e.displayName)),
													d
												);
											}
										} while (1 <= a && 0 <= l);
									break;
								}
						}
					} finally {
						(O = !1), (Error.prepareStackTrace = n);
					}
					return (n = e ? e.displayName || e.name : "") ? z(n) : "";
				}
				function F(e) {
					switch (e.tag) {
						case 26:
						case 27:
						case 5:
							return z(e.type);
						case 16:
							return z("Lazy");
						case 13:
							return z("Suspense");
						case 19:
							return z("SuspenseList");
						case 0:
						case 15:
							return R(e.type, !1);
						case 11:
							return R(e.type.render, !1);
						case 1:
							return R(e.type, !0);
						default:
							return "";
					}
				}
				function M(e) {
					try {
						var t = "";
						do {
							(t += F(e)), (e = e.return);
						} while (e);
						return t;
					} catch (e) {
						return "\nError generating stack: " + e.message + "\n" + e.stack;
					}
				}
				function D(e) {
					var t = e,
						n = e;
					if (e.alternate) for (; t.return; ) t = t.return;
					else {
						e = t;
						do {
							!!(4098 & (t = e).flags) && (n = t.return), (e = t.return);
						} while (e);
					}
					return 3 === t.tag ? n : null;
				}
				function I(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if (
							(null === t &&
								null !== (e = e.alternate) &&
								(t = e.memoizedState),
							null !== t)
						)
							return t.dehydrated;
					}
					return null;
				}
				function $(e) {
					if (D(e) !== e) throw Error(i(188));
				}
				function j(e) {
					var t = e.tag;
					if (5 === t || 26 === t || 27 === t || 6 === t) return e;
					for (e = e.child; null !== e; ) {
						if (null !== (t = j(e))) return t;
						e = e.sibling;
					}
					return null;
				}
				var B = Array.isArray,
					U = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
					H = { pending: !1, data: null, method: null, action: null },
					W = [],
					V = -1;
				function q(e) {
					return { current: e };
				}
				function G(e) {
					0 > V || ((e.current = W[V]), (W[V] = null), V--);
				}
				function Q(e, t) {
					V++, (W[V] = e.current), (e.current = t);
				}
				var K = q(null),
					Y = q(null),
					X = q(null),
					J = q(null);
				function Z(e, t) {
					switch ((Q(X, t), Q(Y, e), Q(K, null), (e = t.nodeType))) {
						case 9:
						case 11:
							t = (t = t.documentElement) && (t = t.namespaceURI) ? Yc(t) : 0;
							break;
						default:
							if (
								((t = (e = 8 === e ? t.parentNode : t).tagName),
								(e = e.namespaceURI))
							)
								t = Xc((e = Yc(e)), t);
							else
								switch (t) {
									case "svg":
										t = 1;
										break;
									case "math":
										t = 2;
										break;
									default:
										t = 0;
								}
					}
					G(K), Q(K, t);
				}
				function ee() {
					G(K), G(Y), G(X);
				}
				function te(e) {
					null !== e.memoizedState && Q(J, e);
					var t = K.current,
						n = Xc(t, e.type);
					t !== n && (Q(Y, e), Q(K, n));
				}
				function ne(e) {
					Y.current === e && (G(K), G(Y)),
						J.current === e && (G(J), (Md._currentValue = H));
				}
				var re = Object.prototype.hasOwnProperty,
					ae = a.unstable_scheduleCallback,
					le = a.unstable_cancelCallback,
					oe = a.unstable_shouldYield,
					ie = a.unstable_requestPaint,
					ue = a.unstable_now,
					se = a.unstable_getCurrentPriorityLevel,
					ce = a.unstable_ImmediatePriority,
					de = a.unstable_UserBlockingPriority,
					fe = a.unstable_NormalPriority,
					me = a.unstable_LowPriority,
					pe = a.unstable_IdlePriority,
					he = a.log,
					ge = a.unstable_setDisableYieldValue,
					ye = null,
					be = null;
				function ve(e) {
					if (
						("function" == typeof he && ge(e),
						be && "function" == typeof be.setStrictMode)
					)
						try {
							be.setStrictMode(ye, e);
						} catch (e) {}
				}
				var we = Math.clz32
						? Math.clz32
						: function (e) {
								return 0 == (e >>>= 0) ? 32 : (31 - ((Ee(e) / Se) | 0)) | 0;
						  },
					Ee = Math.log,
					Se = Math.LN2,
					ke = 128,
					Ce = 4194304;
				function Ne(e) {
					var t = 42 & e;
					if (0 !== t) return t;
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
							return 64;
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194176 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
							return 62914560 & e;
						case 67108864:
							return 67108864;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 0;
						default:
							return e;
					}
				}
				function xe(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var r = 0,
						a = e.suspendedLanes,
						l = e.pingedLanes,
						o = e.warmLanes;
					e = 0 !== e.finishedLanes;
					var i = 134217727 & n;
					return (
						0 !== i
							? 0 != (n = i & ~a)
								? (r = Ne(n))
								: 0 != (l &= i)
								? (r = Ne(l))
								: e || (0 != (o = i & ~o) && (r = Ne(o)))
							: 0 != (i = n & ~a)
							? (r = Ne(i))
							: 0 !== l
							? (r = Ne(l))
							: e || (0 != (o = n & ~o) && (r = Ne(o))),
						0 === r
							? 0
							: 0 === t ||
							  t === r ||
							  t & a ||
							  !((a = r & -r) >= (o = t & -t) || (32 === a && 4194176 & o))
							? r
							: t
					);
				}
				function Ae(e, t) {
					return !(e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
				}
				function Pe(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 4:
						case 8:
							return t + 250;
						case 16:
						case 32:
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return t + 5e3;
						default:
							return -1;
					}
				}
				function Te() {
					var e = ke;
					return !(4194176 & (ke <<= 1)) && (ke = 128), e;
				}
				function _e() {
					var e = Ce;
					return !(62914560 & (Ce <<= 1)) && (Ce = 4194304), e;
				}
				function Le(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t;
				}
				function ze(e, t) {
					(e.pendingLanes |= t),
						268435456 !== t &&
							((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
				}
				function Oe(e, t, n) {
					(e.pendingLanes |= t), (e.suspendedLanes &= ~t);
					var r = 31 - we(t);
					(e.entangledLanes |= t),
						(e.entanglements[r] =
							1073741824 | e.entanglements[r] | (4194218 & n));
				}
				function Re(e, t) {
					var n = (e.entangledLanes |= t);
					for (e = e.entanglements; n; ) {
						var r = 31 - we(n),
							a = 1 << r;
						(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
					}
				}
				function Fe(e) {
					return 2 < (e &= -e)
						? 8 < e
							? 134217727 & e
								? 32
								: 268435456
							: 8
						: 2;
				}
				function Me() {
					var e = U.p;
					return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Kd(e.type);
				}
				var De = Math.random().toString(36).slice(2),
					Ie = "__reactFiber$" + De,
					$e = "__reactProps$" + De,
					je = "__reactContainer$" + De,
					Be = "__reactEvents$" + De,
					Ue = "__reactListeners$" + De,
					He = "__reactHandles$" + De,
					We = "__reactResources$" + De,
					Ve = "__reactMarker$" + De;
				function qe(e) {
					delete e[Ie], delete e[$e], delete e[Be], delete e[Ue], delete e[He];
				}
				function Ge(e) {
					var t = e[Ie];
					if (t) return t;
					for (var n = e.parentNode; n; ) {
						if ((t = n[je] || n[Ie])) {
							if (
								((n = t.alternate),
								null !== t.child || (null !== n && null !== n.child))
							)
								for (e = ud(e); null !== e; ) {
									if ((n = e[Ie])) return n;
									e = ud(e);
								}
							return t;
						}
						n = (e = n).parentNode;
					}
					return null;
				}
				function Qe(e) {
					if ((e = e[Ie] || e[je])) {
						var t = e.tag;
						if (
							5 === t ||
							6 === t ||
							13 === t ||
							26 === t ||
							27 === t ||
							3 === t
						)
							return e;
					}
					return null;
				}
				function Ke(e) {
					var t = e.tag;
					if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
					throw Error(i(33));
				}
				function Ye(e) {
					var t = e[We];
					return (
						t ||
							(t = e[We] =
								{ hoistableStyles: new Map(), hoistableScripts: new Map() }),
						t
					);
				}
				function Xe(e) {
					e[Ve] = !0;
				}
				var Je = new Set(),
					Ze = {};
				function et(e, t) {
					tt(e, t), tt(e + "Capture", t);
				}
				function tt(e, t) {
					for (Ze[e] = t, e = 0; e < t.length; e++) Je.add(t[e]);
				}
				var nt = !(
						"undefined" == typeof window ||
						void 0 === window.document ||
						void 0 === window.document.createElement
					),
					rt = RegExp(
						"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
					),
					at = {},
					lt = {};
				function ot(e, t, n) {
					if (
						((l = t),
						re.call(lt, l) ||
							(!re.call(at, l) &&
								(rt.test(l) ? (lt[l] = !0) : ((at[l] = !0), 0))))
					)
						if (null === n) e.removeAttribute(t);
						else {
							switch (r(n)) {
								case "undefined":
								case "function":
								case "symbol":
									return void e.removeAttribute(t);
								case "boolean":
									var a = t.toLowerCase().slice(0, 5);
									if ("data-" !== a && "aria-" !== a)
										return void e.removeAttribute(t);
							}
							e.setAttribute(t, "" + n);
						}
					var l;
				}
				function it(e, t, n) {
					if (null === n) e.removeAttribute(t);
					else {
						switch (r(n)) {
							case "undefined":
							case "function":
							case "symbol":
							case "boolean":
								return void e.removeAttribute(t);
						}
						e.setAttribute(t, "" + n);
					}
				}
				function ut(e, t, n, a) {
					if (null === a) e.removeAttribute(n);
					else {
						switch (r(a)) {
							case "undefined":
							case "function":
							case "symbol":
							case "boolean":
								return void e.removeAttribute(n);
						}
						e.setAttributeNS(t, n, "" + a);
					}
				}
				function st(e) {
					switch (r(e)) {
						case "bigint":
						case "boolean":
						case "number":
						case "string":
						case "undefined":
						case "object":
							return e;
						default:
							return "";
					}
				}
				function ct(e) {
					var t = e.type;
					return (
						(e = e.nodeName) &&
						"input" === e.toLowerCase() &&
						("checkbox" === t || "radio" === t)
					);
				}
				function dt(e) {
					e._valueTracker ||
						(e._valueTracker = (function (e) {
							var t = ct(e) ? "checked" : "value",
								n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
								r = "" + e[t];
							if (
								!e.hasOwnProperty(t) &&
								void 0 !== n &&
								"function" == typeof n.get &&
								"function" == typeof n.set
							) {
								var a = n.get,
									l = n.set;
								return (
									Object.defineProperty(e, t, {
										configurable: !0,
										get: function () {
											return a.call(this);
										},
										set: function (e) {
											(r = "" + e), l.call(this, e);
										},
									}),
									Object.defineProperty(e, t, { enumerable: n.enumerable }),
									{
										getValue: function () {
											return r;
										},
										setValue: function (e) {
											r = "" + e;
										},
										stopTracking: function () {
											(e._valueTracker = null), delete e[t];
										},
									}
								);
							}
						})(e));
				}
				function ft(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						r = "";
					return (
						e && (r = ct(e) ? (e.checked ? "true" : "false") : e.value),
						(e = r) !== n && (t.setValue(e), !0)
					);
				}
				function mt(e) {
					if (
						void 0 ===
						(e = e || ("undefined" != typeof document ? document : void 0))
					)
						return null;
					try {
						return e.activeElement || e.body;
					} catch (t) {
						return e.body;
					}
				}
				var pt = /[\n"\\]/g;
				function ht(e) {
					return e.replace(pt, function (e) {
						return "\\" + e.charCodeAt(0).toString(16) + " ";
					});
				}
				function gt(e, t, n, a, l, o, i, u) {
					(e.name = ""),
						null != i &&
						"function" != typeof i &&
						"symbol" !== r(i) &&
						"boolean" != typeof i
							? (e.type = i)
							: e.removeAttribute("type"),
						null != t
							? "number" === i
								? ((0 === t && "" === e.value) || e.value != t) &&
								  (e.value = "" + st(t))
								: e.value !== "" + st(t) && (e.value = "" + st(t))
							: ("submit" !== i && "reset" !== i) || e.removeAttribute("value"),
						null != t
							? bt(e, i, st(t))
							: null != n
							? bt(e, i, st(n))
							: null != a && e.removeAttribute("value"),
						null == l && null != o && (e.defaultChecked = !!o),
						null != l &&
							(e.checked = l && "function" != typeof l && "symbol" !== r(l)),
						null != u &&
						"function" != typeof u &&
						"symbol" !== r(u) &&
						"boolean" != typeof u
							? (e.name = "" + st(u))
							: e.removeAttribute("name");
				}
				function yt(e, t, n, a, l, o, i, u) {
					if (
						(null != o &&
							"function" != typeof o &&
							"symbol" !== r(o) &&
							"boolean" != typeof o &&
							(e.type = o),
						null != t || null != n)
					) {
						if (("submit" === o || "reset" === o) && null == t) return;
						(n = null != n ? "" + st(n) : ""),
							(t = null != t ? "" + st(t) : n),
							u || t === e.value || (e.value = t),
							(e.defaultValue = t);
					}
					(a =
						"function" != typeof (a = null != a ? a : l) &&
						"symbol" !== r(a) &&
						!!a),
						(e.checked = u ? e.checked : !!a),
						(e.defaultChecked = !!a),
						null != i &&
							"function" != typeof i &&
							"symbol" !== r(i) &&
							"boolean" != typeof i &&
							(e.name = i);
				}
				function bt(e, t, n) {
					("number" === t && mt(e.ownerDocument) === e) ||
						e.defaultValue === "" + n ||
						(e.defaultValue = "" + n);
				}
				function vt(e, t, n, r) {
					if (((e = e.options), t)) {
						t = {};
						for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
						for (n = 0; n < e.length; n++)
							(a = t.hasOwnProperty("$" + e[n].value)),
								e[n].selected !== a && (e[n].selected = a),
								a && r && (e[n].defaultSelected = !0);
					} else {
						for (n = "" + st(n), t = null, a = 0; a < e.length; a++) {
							if (e[a].value === n)
								return (
									(e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
								);
							null !== t || e[a].disabled || (t = e[a]);
						}
						null !== t && (t.selected = !0);
					}
				}
				function wt(e, t, n) {
					null == t ||
					((t = "" + st(t)) !== e.value && (e.value = t), null != n)
						? (e.defaultValue = null != n ? "" + st(n) : "")
						: e.defaultValue !== t && (e.defaultValue = t);
				}
				function Et(e, t, n, r) {
					if (null == t) {
						if (null != r) {
							if (null != n) throw Error(i(92));
							if (B(r)) {
								if (1 < r.length) throw Error(i(93));
								r = r[0];
							}
							n = r;
						}
						null == n && (n = ""), (t = n);
					}
					(n = st(t)),
						(e.defaultValue = n),
						(r = e.textContent) === n &&
							"" !== r &&
							null !== r &&
							(e.value = r);
				}
				function St(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType)
							return void (n.nodeValue = t);
					}
					e.textContent = t;
				}
				var kt = new Set(
					"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
						" "
					)
				);
				function Ct(e, t, n) {
					var r = 0 === t.indexOf("--");
					null == n || "boolean" == typeof n || "" === n
						? r
							? e.setProperty(t, "")
							: "float" === t
							? (e.cssFloat = "")
							: (e[t] = "")
						: r
						? e.setProperty(t, n)
						: "number" != typeof n || 0 === n || kt.has(t)
						? "float" === t
							? (e.cssFloat = n)
							: (e[t] = ("" + n).trim())
						: (e[t] = n + "px");
				}
				function Nt(e, t, n) {
					if (null != t && "object" !== r(t)) throw Error(i(62));
					if (((e = e.style), null != n)) {
						for (var a in n)
							!n.hasOwnProperty(a) ||
								(null != t && t.hasOwnProperty(a)) ||
								(0 === a.indexOf("--")
									? e.setProperty(a, "")
									: "float" === a
									? (e.cssFloat = "")
									: (e[a] = ""));
						for (var l in t)
							(a = t[l]), t.hasOwnProperty(l) && n[l] !== a && Ct(e, l, a);
					} else for (var o in t) t.hasOwnProperty(o) && Ct(e, o, t[o]);
				}
				function xt(e) {
					if (-1 === e.indexOf("-")) return !1;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0;
					}
				}
				var At = new Map([
						["acceptCharset", "accept-charset"],
						["htmlFor", "for"],
						["httpEquiv", "http-equiv"],
						["crossOrigin", "crossorigin"],
						["accentHeight", "accent-height"],
						["alignmentBaseline", "alignment-baseline"],
						["arabicForm", "arabic-form"],
						["baselineShift", "baseline-shift"],
						["capHeight", "cap-height"],
						["clipPath", "clip-path"],
						["clipRule", "clip-rule"],
						["colorInterpolation", "color-interpolation"],
						["colorInterpolationFilters", "color-interpolation-filters"],
						["colorProfile", "color-profile"],
						["colorRendering", "color-rendering"],
						["dominantBaseline", "dominant-baseline"],
						["enableBackground", "enable-background"],
						["fillOpacity", "fill-opacity"],
						["fillRule", "fill-rule"],
						["floodColor", "flood-color"],
						["floodOpacity", "flood-opacity"],
						["fontFamily", "font-family"],
						["fontSize", "font-size"],
						["fontSizeAdjust", "font-size-adjust"],
						["fontStretch", "font-stretch"],
						["fontStyle", "font-style"],
						["fontVariant", "font-variant"],
						["fontWeight", "font-weight"],
						["glyphName", "glyph-name"],
						["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
						["glyphOrientationVertical", "glyph-orientation-vertical"],
						["horizAdvX", "horiz-adv-x"],
						["horizOriginX", "horiz-origin-x"],
						["imageRendering", "image-rendering"],
						["letterSpacing", "letter-spacing"],
						["lightingColor", "lighting-color"],
						["markerEnd", "marker-end"],
						["markerMid", "marker-mid"],
						["markerStart", "marker-start"],
						["overlinePosition", "overline-position"],
						["overlineThickness", "overline-thickness"],
						["paintOrder", "paint-order"],
						["panose-1", "panose-1"],
						["pointerEvents", "pointer-events"],
						["renderingIntent", "rendering-intent"],
						["shapeRendering", "shape-rendering"],
						["stopColor", "stop-color"],
						["stopOpacity", "stop-opacity"],
						["strikethroughPosition", "strikethrough-position"],
						["strikethroughThickness", "strikethrough-thickness"],
						["strokeDasharray", "stroke-dasharray"],
						["strokeDashoffset", "stroke-dashoffset"],
						["strokeLinecap", "stroke-linecap"],
						["strokeLinejoin", "stroke-linejoin"],
						["strokeMiterlimit", "stroke-miterlimit"],
						["strokeOpacity", "stroke-opacity"],
						["strokeWidth", "stroke-width"],
						["textAnchor", "text-anchor"],
						["textDecoration", "text-decoration"],
						["textRendering", "text-rendering"],
						["transformOrigin", "transform-origin"],
						["underlinePosition", "underline-position"],
						["underlineThickness", "underline-thickness"],
						["unicodeBidi", "unicode-bidi"],
						["unicodeRange", "unicode-range"],
						["unitsPerEm", "units-per-em"],
						["vAlphabetic", "v-alphabetic"],
						["vHanging", "v-hanging"],
						["vIdeographic", "v-ideographic"],
						["vMathematical", "v-mathematical"],
						["vectorEffect", "vector-effect"],
						["vertAdvY", "vert-adv-y"],
						["vertOriginX", "vert-origin-x"],
						["vertOriginY", "vert-origin-y"],
						["wordSpacing", "word-spacing"],
						["writingMode", "writing-mode"],
						["xmlnsXlink", "xmlns:xlink"],
						["xHeight", "x-height"],
					]),
					Pt =
						/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
				function Tt(e) {
					return Pt.test("" + e)
						? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
						: e;
				}
				var _t = null;
				function Lt(e) {
					return (
						(e = e.target || e.srcElement || window).correspondingUseElement &&
							(e = e.correspondingUseElement),
						3 === e.nodeType ? e.parentNode : e
					);
				}
				var zt = null,
					Ot = null;
				function Rt(e) {
					var t = Qe(e);
					if (t && (e = t.stateNode)) {
						var n = e[$e] || null;
						e: switch (((e = t.stateNode), t.type)) {
							case "input":
								if (
									(gt(
										e,
										n.value,
										n.defaultValue,
										n.defaultValue,
										n.checked,
										n.defaultChecked,
										n.type,
										n.name
									),
									(t = n.name),
									"radio" === n.type && null != t)
								) {
									for (n = e; n.parentNode; ) n = n.parentNode;
									for (
										n = n.querySelectorAll(
											'input[name="' + ht("" + t) + '"][type="radio"]'
										),
											t = 0;
										t < n.length;
										t++
									) {
										var r = n[t];
										if (r !== e && r.form === e.form) {
											var a = r[$e] || null;
											if (!a) throw Error(i(90));
											gt(
												r,
												a.value,
												a.defaultValue,
												a.defaultValue,
												a.checked,
												a.defaultChecked,
												a.type,
												a.name
											);
										}
									}
									for (t = 0; t < n.length; t++)
										(r = n[t]).form === e.form && ft(r);
								}
								break e;
							case "textarea":
								wt(e, n.value, n.defaultValue);
								break e;
							case "select":
								null != (t = n.value) && vt(e, !!n.multiple, t, !1);
						}
					}
				}
				var Ft = !1;
				function Mt(e, t, n) {
					if (Ft) return e(t, n);
					Ft = !0;
					try {
						return e(t);
					} finally {
						if (
							((Ft = !1),
							(null !== zt || null !== Ot) &&
								(Is(), zt && ((t = zt), (e = Ot), (Ot = zt = null), Rt(t), e)))
						)
							for (t = 0; t < e.length; t++) Rt(e[t]);
					}
				}
				function Dt(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var a = n[$e] || null;
					if (null === a) return null;
					n = a[t];
					e: switch (t) {
						case "onClick":
						case "onClickCapture":
						case "onDoubleClick":
						case "onDoubleClickCapture":
						case "onMouseDown":
						case "onMouseDownCapture":
						case "onMouseMove":
						case "onMouseMoveCapture":
						case "onMouseUp":
						case "onMouseUpCapture":
						case "onMouseEnter":
							(a = !a.disabled) ||
								(a = !(
									"button" === (e = e.type) ||
									"input" === e ||
									"select" === e ||
									"textarea" === e
								)),
								(e = !a);
							break e;
						default:
							e = !1;
					}
					if (e) return null;
					if (n && "function" != typeof n) throw Error(i(231, t, r(n)));
					return n;
				}
				var It = !1;
				if (nt)
					try {
						var $t = {};
						Object.defineProperty($t, "passive", {
							get: function () {
								It = !0;
							},
						}),
							window.addEventListener("test", $t, $t),
							window.removeEventListener("test", $t, $t);
					} catch (e) {
						It = !1;
					}
				var jt = null,
					Bt = null,
					Ut = null;
				function Ht() {
					if (Ut) return Ut;
					var e,
						t,
						n = Bt,
						r = n.length,
						a = "value" in jt ? jt.value : jt.textContent,
						l = a.length;
					for (e = 0; e < r && n[e] === a[e]; e++);
					var o = r - e;
					for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
					return (Ut = a.slice(e, 1 < t ? 1 - t : void 0));
				}
				function Wt(e) {
					var t = e.keyCode;
					return (
						"charCode" in e
							? 0 === (e = e.charCode) && 13 === t && (e = 13)
							: (e = t),
						10 === e && (e = 13),
						32 <= e || 13 === e ? e : 0
					);
				}
				function Vt() {
					return !0;
				}
				function qt() {
					return !1;
				}
				function Gt(e) {
					function t(t, n, r, a, l) {
						for (var o in ((this._reactName = t),
						(this._targetInst = r),
						(this.type = n),
						(this.nativeEvent = a),
						(this.target = l),
						(this.currentTarget = null),
						e))
							e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
						return (
							(this.isDefaultPrevented = (
								null != a.defaultPrevented
									? a.defaultPrevented
									: !1 === a.returnValue
							)
								? Vt
								: qt),
							(this.isPropagationStopped = qt),
							this
						);
					}
					return (
						L(t.prototype, {
							preventDefault: function () {
								this.defaultPrevented = !0;
								var e = this.nativeEvent;
								e &&
									(e.preventDefault
										? e.preventDefault()
										: "unknown" != typeof e.returnValue && (e.returnValue = !1),
									(this.isDefaultPrevented = Vt));
							},
							stopPropagation: function () {
								var e = this.nativeEvent;
								e &&
									(e.stopPropagation
										? e.stopPropagation()
										: "unknown" != typeof e.cancelBubble &&
										  (e.cancelBubble = !0),
									(this.isPropagationStopped = Vt));
							},
							persist: function () {},
							isPersistent: Vt,
						}),
						t
					);
				}
				var Qt,
					Kt,
					Yt,
					Xt = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function (e) {
							return e.timeStamp || Date.now();
						},
						defaultPrevented: 0,
						isTrusted: 0,
					},
					Jt = Gt(Xt),
					Zt = L({}, Xt, { view: 0, detail: 0 }),
					en = Gt(Zt),
					tn = L({}, Zt, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: mn,
						button: 0,
						buttons: 0,
						relatedTarget: function (e) {
							return void 0 === e.relatedTarget
								? e.fromElement === e.srcElement
									? e.toElement
									: e.fromElement
								: e.relatedTarget;
						},
						movementX: function (e) {
							return "movementX" in e
								? e.movementX
								: (e !== Yt &&
										(Yt && "mousemove" === e.type
											? ((Qt = e.screenX - Yt.screenX),
											  (Kt = e.screenY - Yt.screenY))
											: (Kt = Qt = 0),
										(Yt = e)),
								  Qt);
						},
						movementY: function (e) {
							return "movementY" in e ? e.movementY : Kt;
						},
					}),
					nn = Gt(tn),
					rn = Gt(L({}, tn, { dataTransfer: 0 })),
					an = Gt(L({}, Zt, { relatedTarget: 0 })),
					ln = Gt(
						L({}, Xt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
					),
					on = Gt(
						L({}, Xt, {
							clipboardData: function (e) {
								return "clipboardData" in e
									? e.clipboardData
									: window.clipboardData;
							},
						})
					),
					un = Gt(L({}, Xt, { data: 0 })),
					sn = {
						Esc: "Escape",
						Spacebar: " ",
						Left: "ArrowLeft",
						Up: "ArrowUp",
						Right: "ArrowRight",
						Down: "ArrowDown",
						Del: "Delete",
						Win: "OS",
						Menu: "ContextMenu",
						Apps: "ContextMenu",
						Scroll: "ScrollLock",
						MozPrintableKey: "Unidentified",
					},
					cn = {
						8: "Backspace",
						9: "Tab",
						12: "Clear",
						13: "Enter",
						16: "Shift",
						17: "Control",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Escape",
						32: " ",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "ArrowLeft",
						38: "ArrowUp",
						39: "ArrowRight",
						40: "ArrowDown",
						45: "Insert",
						46: "Delete",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "NumLock",
						145: "ScrollLock",
						224: "Meta",
					},
					dn = {
						Alt: "altKey",
						Control: "ctrlKey",
						Meta: "metaKey",
						Shift: "shiftKey",
					};
				function fn(e) {
					var t = this.nativeEvent;
					return t.getModifierState
						? t.getModifierState(e)
						: !!(e = dn[e]) && !!t[e];
				}
				function mn() {
					return fn;
				}
				var pn = Gt(
						L({}, Zt, {
							key: function (e) {
								if (e.key) {
									var t = sn[e.key] || e.key;
									if ("Unidentified" !== t) return t;
								}
								return "keypress" === e.type
									? 13 === (e = Wt(e))
										? "Enter"
										: String.fromCharCode(e)
									: "keydown" === e.type || "keyup" === e.type
									? cn[e.keyCode] || "Unidentified"
									: "";
							},
							code: 0,
							location: 0,
							ctrlKey: 0,
							shiftKey: 0,
							altKey: 0,
							metaKey: 0,
							repeat: 0,
							locale: 0,
							getModifierState: mn,
							charCode: function (e) {
								return "keypress" === e.type ? Wt(e) : 0;
							},
							keyCode: function (e) {
								return "keydown" === e.type || "keyup" === e.type
									? e.keyCode
									: 0;
							},
							which: function (e) {
								return "keypress" === e.type
									? Wt(e)
									: "keydown" === e.type || "keyup" === e.type
									? e.keyCode
									: 0;
							},
						})
					),
					hn = Gt(
						L({}, tn, {
							pointerId: 0,
							width: 0,
							height: 0,
							pressure: 0,
							tangentialPressure: 0,
							tiltX: 0,
							tiltY: 0,
							twist: 0,
							pointerType: 0,
							isPrimary: 0,
						})
					),
					gn = Gt(
						L({}, Zt, {
							touches: 0,
							targetTouches: 0,
							changedTouches: 0,
							altKey: 0,
							metaKey: 0,
							ctrlKey: 0,
							shiftKey: 0,
							getModifierState: mn,
						})
					),
					yn = Gt(
						L({}, Xt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
					),
					bn = Gt(
						L({}, tn, {
							deltaX: function (e) {
								return "deltaX" in e
									? e.deltaX
									: "wheelDeltaX" in e
									? -e.wheelDeltaX
									: 0;
							},
							deltaY: function (e) {
								return "deltaY" in e
									? e.deltaY
									: "wheelDeltaY" in e
									? -e.wheelDeltaY
									: "wheelDelta" in e
									? -e.wheelDelta
									: 0;
							},
							deltaZ: 0,
							deltaMode: 0,
						})
					),
					vn = Gt(L({}, Xt, { newState: 0, oldState: 0 })),
					wn = [9, 13, 27, 32],
					En = nt && "CompositionEvent" in window,
					Sn = null;
				nt && "documentMode" in document && (Sn = document.documentMode);
				var kn = nt && "TextEvent" in window && !Sn,
					Cn = nt && (!En || (Sn && 8 < Sn && 11 >= Sn)),
					Nn = String.fromCharCode(32),
					xn = !1;
				function An(e, t) {
					switch (e) {
						case "keyup":
							return -1 !== wn.indexOf(t.keyCode);
						case "keydown":
							return 229 !== t.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1;
					}
				}
				function Pn(e) {
					return "object" === r((e = e.detail)) && "data" in e ? e.data : null;
				}
				var Tn = !1,
					_n = {
						color: !0,
						date: !0,
						datetime: !0,
						"datetime-local": !0,
						email: !0,
						month: !0,
						number: !0,
						password: !0,
						range: !0,
						search: !0,
						tel: !0,
						text: !0,
						time: !0,
						url: !0,
						week: !0,
					};
				function Ln(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === t ? !!_n[e.type] : "textarea" === t;
				}
				function zn(e, t, n, r) {
					zt ? (Ot ? Ot.push(r) : (Ot = [r])) : (zt = r),
						0 < (t = Mc(t, "onChange")).length &&
							((n = new Jt("onChange", "change", null, n, r)),
							e.push({ event: n, listeners: t }));
				}
				var On = null,
					Rn = null;
				function Fn(e) {
					Pc(e, 0);
				}
				function Mn(e) {
					if (ft(Ke(e))) return e;
				}
				function Dn(e, t) {
					if ("change" === e) return t;
				}
				var In = !1;
				if (nt) {
					var $n;
					if (nt) {
						var jn = "oninput" in document;
						if (!jn) {
							var Bn = document.createElement("div");
							Bn.setAttribute("oninput", "return;"),
								(jn = "function" == typeof Bn.oninput);
						}
						$n = jn;
					} else $n = !1;
					In = $n && (!document.documentMode || 9 < document.documentMode);
				}
				function Un() {
					On && (On.detachEvent("onpropertychange", Hn), (Rn = On = null));
				}
				function Hn(e) {
					if ("value" === e.propertyName && Mn(Rn)) {
						var t = [];
						zn(t, Rn, e, Lt(e)), Mt(Fn, t);
					}
				}
				function Wn(e, t, n) {
					"focusin" === e
						? (Un(), (Rn = n), (On = t).attachEvent("onpropertychange", Hn))
						: "focusout" === e && Un();
				}
				function Vn(e) {
					if ("selectionchange" === e || "keyup" === e || "keydown" === e)
						return Mn(Rn);
				}
				function qn(e, t) {
					if ("click" === e) return Mn(t);
				}
				function Gn(e, t) {
					if ("input" === e || "change" === e) return Mn(t);
				}
				var Qn =
					"function" == typeof Object.is
						? Object.is
						: function (e, t) {
								return (
									(e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
								);
						  };
				function Kn(e, t) {
					if (Qn(e, t)) return !0;
					if (
						"object" !== r(e) ||
						null === e ||
						"object" !== r(t) ||
						null === t
					)
						return !1;
					var n = Object.keys(e),
						a = Object.keys(t);
					if (n.length !== a.length) return !1;
					for (a = 0; a < n.length; a++) {
						var l = n[a];
						if (!re.call(t, l) || !Qn(e[l], t[l])) return !1;
					}
					return !0;
				}
				function Yn(e) {
					for (; e && e.firstChild; ) e = e.firstChild;
					return e;
				}
				function Xn(e, t) {
					var n,
						r = Yn(e);
					for (e = 0; r; ) {
						if (3 === r.nodeType) {
							if (((n = e + r.textContent.length), e <= t && n >= t))
								return { node: r, offset: t - e };
							e = n;
						}
						e: {
							for (; r; ) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e;
								}
								r = r.parentNode;
							}
							r = void 0;
						}
						r = Yn(r);
					}
				}
				function Jn(e, t) {
					return (
						!(!e || !t) &&
						(e === t ||
							((!e || 3 !== e.nodeType) &&
								(t && 3 === t.nodeType
									? Jn(e, t.parentNode)
									: "contains" in e
									? e.contains(t)
									: !!e.compareDocumentPosition &&
									  !!(16 & e.compareDocumentPosition(t)))))
					);
				}
				function Zn(e) {
					for (
						var t = mt(
							(e =
								null != e &&
								null != e.ownerDocument &&
								null != e.ownerDocument.defaultView
									? e.ownerDocument.defaultView
									: window).document
						);
						t instanceof e.HTMLIFrameElement;

					) {
						try {
							var n = "string" == typeof t.contentWindow.location.href;
						} catch (e) {
							n = !1;
						}
						if (!n) break;
						t = mt((e = t.contentWindow).document);
					}
					return t;
				}
				function er(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return (
						t &&
						(("input" === t &&
							("text" === e.type ||
								"search" === e.type ||
								"tel" === e.type ||
								"url" === e.type ||
								"password" === e.type)) ||
							"textarea" === t ||
							"true" === e.contentEditable)
					);
				}
				function tr(e, t) {
					var n = Zn(t);
					t = e.focusedElem;
					var r = e.selectionRange;
					if (
						n !== t &&
						t &&
						t.ownerDocument &&
						Jn(t.ownerDocument.documentElement, t)
					) {
						if (null !== r && er(t))
							if (
								((e = r.start),
								void 0 === (n = r.end) && (n = e),
								"selectionStart" in t)
							)
								(t.selectionStart = e),
									(t.selectionEnd = Math.min(n, t.value.length));
							else if (
								(n =
									((e = t.ownerDocument || document) && e.defaultView) ||
									window).getSelection
							) {
								n = n.getSelection();
								var a = t.textContent.length,
									l = Math.min(r.start, a);
								(r = void 0 === r.end ? l : Math.min(r.end, a)),
									!n.extend && l > r && ((a = r), (r = l), (l = a)),
									(a = Xn(t, l));
								var o = Xn(t, r);
								a &&
									o &&
									(1 !== n.rangeCount ||
										n.anchorNode !== a.node ||
										n.anchorOffset !== a.offset ||
										n.focusNode !== o.node ||
										n.focusOffset !== o.offset) &&
									((e = e.createRange()).setStart(a.node, a.offset),
									n.removeAllRanges(),
									l > r
										? (n.addRange(e), n.extend(o.node, o.offset))
										: (e.setEnd(o.node, o.offset), n.addRange(e)));
							}
						for (e = [], n = t; (n = n.parentNode); )
							1 === n.nodeType &&
								e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
						for (
							"function" == typeof t.focus && t.focus(), t = 0;
							t < e.length;
							t++
						)
							((n = e[t]).element.scrollLeft = n.left),
								(n.element.scrollTop = n.top);
					}
				}
				var nr =
						nt && "documentMode" in document && 11 >= document.documentMode,
					rr = null,
					ar = null,
					lr = null,
					or = !1;
				function ir(e, t, n) {
					var r =
						n.window === n
							? n.document
							: 9 === n.nodeType
							? n
							: n.ownerDocument;
					or ||
						null == rr ||
						rr !== mt(r) ||
						((r =
							"selectionStart" in (r = rr) && er(r)
								? { start: r.selectionStart, end: r.selectionEnd }
								: {
										anchorNode: (r = (
											(r.ownerDocument && r.ownerDocument.defaultView) ||
											window
										).getSelection()).anchorNode,
										anchorOffset: r.anchorOffset,
										focusNode: r.focusNode,
										focusOffset: r.focusOffset,
								  }),
						(lr && Kn(lr, r)) ||
							((lr = r),
							0 < (r = Mc(ar, "onSelect")).length &&
								((t = new Jt("onSelect", "select", null, t, n)),
								e.push({ event: t, listeners: r }),
								(t.target = rr))));
				}
				function ur(e, t) {
					var n = {};
					return (
						(n[e.toLowerCase()] = t.toLowerCase()),
						(n["Webkit" + e] = "webkit" + t),
						(n["Moz" + e] = "moz" + t),
						n
					);
				}
				var sr = {
						animationend: ur("Animation", "AnimationEnd"),
						animationiteration: ur("Animation", "AnimationIteration"),
						animationstart: ur("Animation", "AnimationStart"),
						transitionrun: ur("Transition", "TransitionRun"),
						transitionstart: ur("Transition", "TransitionStart"),
						transitioncancel: ur("Transition", "TransitionCancel"),
						transitionend: ur("Transition", "TransitionEnd"),
					},
					cr = {},
					dr = {};
				function fr(e) {
					if (cr[e]) return cr[e];
					if (!sr[e]) return e;
					var t,
						n = sr[e];
					for (t in n)
						if (n.hasOwnProperty(t) && t in dr) return (cr[e] = n[t]);
					return e;
				}
				nt &&
					((dr = document.createElement("div").style),
					"AnimationEvent" in window ||
						(delete sr.animationend.animation,
						delete sr.animationiteration.animation,
						delete sr.animationstart.animation),
					"TransitionEvent" in window || delete sr.transitionend.transition);
				var mr = fr("animationend"),
					pr = fr("animationiteration"),
					hr = fr("animationstart"),
					gr = fr("transitionrun"),
					yr = fr("transitionstart"),
					br = fr("transitioncancel"),
					vr = fr("transitionend"),
					wr = new Map(),
					Er =
						"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
							" "
						);
				function Sr(e, t) {
					wr.set(e, t), et(t, [e]);
				}
				var kr = [],
					Cr = 0,
					Nr = 0;
				function xr() {
					for (var e = Cr, t = (Nr = Cr = 0); t < e; ) {
						var n = kr[t];
						kr[t++] = null;
						var r = kr[t];
						kr[t++] = null;
						var a = kr[t];
						kr[t++] = null;
						var l = kr[t];
						if (((kr[t++] = null), null !== r && null !== a)) {
							var o = r.pending;
							null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
								(r.pending = a);
						}
						0 !== l && _r(n, a, l);
					}
				}
				function Ar(e, t, n, r) {
					(kr[Cr++] = e),
						(kr[Cr++] = t),
						(kr[Cr++] = n),
						(kr[Cr++] = r),
						(Nr |= r),
						(e.lanes |= r),
						null !== (e = e.alternate) && (e.lanes |= r);
				}
				function Pr(e, t, n, r) {
					return Ar(e, t, n, r), Lr(e);
				}
				function Tr(e, t) {
					return Ar(e, null, null, t), Lr(e);
				}
				function _r(e, t, n) {
					e.lanes |= n;
					var r = e.alternate;
					null !== r && (r.lanes |= n);
					for (var a = !1, l = e.return; null !== l; )
						(l.childLanes |= n),
							null !== (r = l.alternate) && (r.childLanes |= n),
							22 === l.tag &&
								(null === (e = l.stateNode) || 1 & e._visibility || (a = !0)),
							(e = l),
							(l = l.return);
					a &&
						null !== t &&
						3 === e.tag &&
						((l = e.stateNode),
						(a = 31 - we(n)),
						null === (e = (l = l.hiddenUpdates)[a]) ? (l[a] = [t]) : e.push(t),
						(t.lane = 536870912 | n));
				}
				function Lr(e) {
					if (50 < Ps) throw ((Ps = 0), (Ts = null), Error(i(185)));
					for (var t = e.return; null !== t; ) t = (e = t).return;
					return 3 === e.tag ? e.stateNode : null;
				}
				var zr = {},
					Or = new WeakMap();
				function Rr(e, t) {
					if ("object" === r(e) && null !== e) {
						var n = Or.get(e);
						return void 0 !== n
							? n
							: ((t = { value: e, source: t, stack: M(t) }), Or.set(e, t), t);
					}
					return { value: e, source: t, stack: M(t) };
				}
				var Fr = [],
					Mr = 0,
					Dr = null,
					Ir = 0,
					$r = [],
					jr = 0,
					Br = null,
					Ur = 1,
					Hr = "";
				function Wr(e, t) {
					(Fr[Mr++] = Ir), (Fr[Mr++] = Dr), (Dr = e), (Ir = t);
				}
				function Vr(e, t, n) {
					($r[jr++] = Ur), ($r[jr++] = Hr), ($r[jr++] = Br), (Br = e);
					var r = Ur;
					e = Hr;
					var a = 32 - we(r) - 1;
					(r &= ~(1 << a)), (n += 1);
					var l = 32 - we(t) + a;
					if (30 < l) {
						var o = a - (a % 5);
						(l = (r & ((1 << o) - 1)).toString(32)),
							(r >>= o),
							(a -= o),
							(Ur = (1 << (32 - we(t) + a)) | (n << a) | r),
							(Hr = l + e);
					} else (Ur = (1 << l) | (n << a) | r), (Hr = e);
				}
				function qr(e) {
					null !== e.return && (Wr(e, 1), Vr(e, 1, 0));
				}
				function Gr(e) {
					for (; e === Dr; )
						(Dr = Fr[--Mr]), (Fr[Mr] = null), (Ir = Fr[--Mr]), (Fr[Mr] = null);
					for (; e === Br; )
						(Br = $r[--jr]),
							($r[jr] = null),
							(Hr = $r[--jr]),
							($r[jr] = null),
							(Ur = $r[--jr]),
							($r[jr] = null);
				}
				var Qr = null,
					Kr = null,
					Yr = !1,
					Xr = null,
					Jr = !1,
					Zr = Error(i(519));
				function ea(e) {
					throw (la(Rr(Error(i(418, "")), e)), Zr);
				}
				function ta(e) {
					var t = e.stateNode,
						n = e.type,
						r = e.memoizedProps;
					switch (((t[Ie] = e), (t[$e] = r), n)) {
						case "dialog":
							Tc("cancel", t), Tc("close", t);
							break;
						case "iframe":
						case "object":
						case "embed":
							Tc("load", t);
							break;
						case "video":
						case "audio":
							for (n = 0; n < xc.length; n++) Tc(xc[n], t);
							break;
						case "source":
							Tc("error", t);
							break;
						case "img":
						case "image":
						case "link":
							Tc("error", t), Tc("load", t);
							break;
						case "details":
							Tc("toggle", t);
							break;
						case "input":
							Tc("invalid", t),
								yt(
									t,
									r.value,
									r.defaultValue,
									r.checked,
									r.defaultChecked,
									r.type,
									r.name,
									!0
								),
								dt(t);
							break;
						case "select":
							Tc("invalid", t);
							break;
						case "textarea":
							Tc("invalid", t),
								Et(t, r.value, r.defaultValue, r.children),
								dt(t);
					}
					("string" != typeof (n = r.children) &&
						"number" != typeof n &&
						"bigint" != typeof n) ||
					t.textContent === "" + n ||
					!0 === r.suppressHydrationWarning ||
					Uc(t.textContent, n)
						? (null != r.popover && (Tc("beforetoggle", t), Tc("toggle", t)),
						  null != r.onScroll && Tc("scroll", t),
						  null != r.onScrollEnd && Tc("scrollend", t),
						  null != r.onClick && (t.onclick = Hc),
						  (t = !0))
						: (t = !1),
						t || ea(e);
				}
				function na(e) {
					for (Qr = e.return; Qr; )
						switch (Qr.tag) {
							case 3:
							case 27:
								return void (Jr = !0);
							case 5:
							case 13:
								return void (Jr = !1);
							default:
								Qr = Qr.return;
						}
				}
				function ra(e) {
					if (e !== Qr) return !1;
					if (!Yr) return na(e), (Yr = !0), !1;
					var t,
						n = !1;
					if (
						((t = 3 !== e.tag && 27 !== e.tag) &&
							((t = 5 === e.tag) &&
								(t =
									!("form" !== (t = e.type) && "button" !== t) ||
									Jc(e.type, e.memoizedProps)),
							(t = !t)),
						t && (n = !0),
						n && Kr && ea(e),
						na(e),
						13 === e.tag)
					) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
							throw Error(i(317));
						e: {
							for (e = e.nextSibling, n = 0; e; ) {
								if (8 === e.nodeType)
									if ("/$" === (t = e.data)) {
										if (0 === n) {
											Kr = id(e.nextSibling);
											break e;
										}
										n--;
									} else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
								e = e.nextSibling;
							}
							Kr = null;
						}
					} else Kr = Qr ? id(e.stateNode.nextSibling) : null;
					return !0;
				}
				function aa() {
					(Kr = Qr = null), (Yr = !1);
				}
				function la(e) {
					null === Xr ? (Xr = [e]) : Xr.push(e);
				}
				var oa = Error(i(460)),
					ia = Error(i(474)),
					ua = { then: function () {} };
				function sa(e) {
					return "fulfilled" === (e = e.status) || "rejected" === e;
				}
				function ca() {}
				function da(e, t, n) {
					switch (
						(void 0 === (n = e[n])
							? e.push(t)
							: n !== t && (t.then(ca, ca), (t = n)),
						t.status)
					) {
						case "fulfilled":
							return t.value;
						case "rejected":
							if ((e = t.reason) === oa) throw Error(i(483));
							throw e;
						default:
							if ("string" == typeof t.status) t.then(ca, ca);
							else {
								if (null !== (e = ts) && 100 < e.shellSuspendCounter)
									throw Error(i(482));
								((e = t).status = "pending"),
									e.then(
										function (e) {
											if ("pending" === t.status) {
												var n = t;
												(n.status = "fulfilled"), (n.value = e);
											}
										},
										function (e) {
											if ("pending" === t.status) {
												var n = t;
												(n.status = "rejected"), (n.reason = e);
											}
										}
									);
							}
							switch (t.status) {
								case "fulfilled":
									return t.value;
								case "rejected":
									if ((e = t.reason) === oa) throw Error(i(483));
									throw e;
							}
							throw ((fa = t), oa);
					}
				}
				var fa = null;
				function ma() {
					if (null === fa) throw Error(i(459));
					var e = fa;
					return (fa = null), e;
				}
				var pa = null,
					ha = 0;
				function ga(e) {
					var t = ha;
					return (ha += 1), null === pa && (pa = []), da(pa, e, t);
				}
				function ya(e, t) {
					(t = t.props.ref), (e.ref = void 0 !== t ? t : null);
				}
				function ba(e, t) {
					if (t.$$typeof === u) throw Error(i(525));
					throw (
						((e = Object.prototype.toString.call(t)),
						Error(
							i(
								31,
								"[object Object]" === e
									? "object with keys {" + Object.keys(t).join(", ") + "}"
									: e
							)
						))
					);
				}
				function va(e) {
					return (0, e._init)(e._payload);
				}
				function wa(e) {
					function t(t, n) {
						if (e) {
							var r = t.deletions;
							null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
						}
					}
					function n(n, r) {
						if (!e) return null;
						for (; null !== r; ) t(n, r), (r = r.sibling);
						return null;
					}
					function a(e) {
						for (var t = new Map(); null !== e; )
							null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
								(e = e.sibling);
						return t;
					}
					function l(e, t) {
						return ((e = Du(e, t)).index = 0), (e.sibling = null), e;
					}
					function o(t, n, r) {
						return (
							(t.index = r),
							e
								? null !== (r = t.alternate)
									? (r = r.index) < n
										? ((t.flags |= 33554434), n)
										: r
									: ((t.flags |= 33554434), n)
								: ((t.flags |= 1048576), n)
						);
					}
					function u(t) {
						return e && null === t.alternate && (t.flags |= 33554434), t;
					}
					function f(e, t, n, r) {
						return null === t || 6 !== t.tag
							? (((t = Uu(n, e.mode, r)).return = e), t)
							: (((t = l(t, n)).return = e), t);
					}
					function m(e, t, n, a) {
						var o = n.type;
						return o === d
							? h(e, t, n.props.children, a, n.key)
							: null !== t &&
							  (t.elementType === o ||
									("object" === r(o) &&
										null !== o &&
										o.$$typeof === E &&
										va(o) === t.type))
							? (ya((t = l(t, n.props)), n), (t.return = e), t)
							: (ya((t = $u(n.type, n.key, n.props, null, e.mode, a)), n),
							  (t.return = e),
							  t);
					}
					function p(e, t, n, r) {
						return null === t ||
							4 !== t.tag ||
							t.stateNode.containerInfo !== n.containerInfo ||
							t.stateNode.implementation !== n.implementation
							? (((t = Hu(n, e.mode, r)).return = e), t)
							: (((t = l(t, n.children || [])).return = e), t);
					}
					function h(e, t, n, r, a) {
						return null === t || 7 !== t.tag
							? (((t = ju(n, e.mode, r, a)).return = e), t)
							: (((t = l(t, n)).return = e), t);
					}
					function y(e, t, n) {
						if (
							("string" == typeof t && "" !== t) ||
							"number" == typeof t ||
							"bigint" == typeof t
						)
							return ((t = Uu("" + t, e.mode, n)).return = e), t;
						if ("object" === r(t) && null !== t) {
							switch (t.$$typeof) {
								case s:
									return (
										ya((n = $u(t.type, t.key, t.props, null, e.mode, n)), t),
										(n.return = e),
										n
									);
								case c:
									return ((t = Hu(t, e.mode, n)).return = e), t;
								case E:
									return y(e, (t = (0, t._init)(t._payload)), n);
							}
							if (B(t) || N(t))
								return ((t = ju(t, e.mode, n, null)).return = e), t;
							if ("function" == typeof t.then) return y(e, ga(t), n);
							if (t.$$typeof === g) return y(e, xi(e, t), n);
							ba(e, t);
						}
						return null;
					}
					function b(e, t, n, a) {
						var l = null !== t ? t.key : null;
						if (
							("string" == typeof n && "" !== n) ||
							"number" == typeof n ||
							"bigint" == typeof n
						)
							return null !== l ? null : f(e, t, "" + n, a);
						if ("object" === r(n) && null !== n) {
							switch (n.$$typeof) {
								case s:
									return n.key === l ? m(e, t, n, a) : null;
								case c:
									return n.key === l ? p(e, t, n, a) : null;
								case E:
									return b(e, t, (n = (l = n._init)(n._payload)), a);
							}
							if (B(n) || N(n)) return null !== l ? null : h(e, t, n, a, null);
							if ("function" == typeof n.then) return b(e, t, ga(n), a);
							if (n.$$typeof === g) return b(e, t, xi(e, n), a);
							ba(e, n);
						}
						return null;
					}
					function v(e, t, n, a, l) {
						if (
							("string" == typeof a && "" !== a) ||
							"number" == typeof a ||
							"bigint" == typeof a
						)
							return f(t, (e = e.get(n) || null), "" + a, l);
						if ("object" === r(a) && null !== a) {
							switch (a.$$typeof) {
								case s:
									return m(
										t,
										(e = e.get(null === a.key ? n : a.key) || null),
										a,
										l
									);
								case c:
									return p(
										t,
										(e = e.get(null === a.key ? n : a.key) || null),
										a,
										l
									);
								case E:
									return v(e, t, n, (a = (0, a._init)(a._payload)), l);
							}
							if (B(a) || N(a)) return h(t, (e = e.get(n) || null), a, l, null);
							if ("function" == typeof a.then) return v(e, t, n, ga(a), l);
							if (a.$$typeof === g) return v(e, t, n, xi(t, a), l);
							ba(t, a);
						}
						return null;
					}
					function w(f, m, p, h) {
						if (
							("object" === r(p) &&
								null !== p &&
								p.type === d &&
								null === p.key &&
								(p = p.props.children),
							"object" === r(p) && null !== p)
						) {
							switch (p.$$typeof) {
								case s:
									e: {
										for (var S = p.key; null !== m; ) {
											if (m.key === S) {
												if ((S = p.type) === d) {
													if (7 === m.tag) {
														n(f, m.sibling),
															((h = l(m, p.props.children)).return = f),
															(f = h);
														break e;
													}
												} else if (
													m.elementType === S ||
													("object" === r(S) &&
														null !== S &&
														S.$$typeof === E &&
														va(S) === m.type)
												) {
													n(f, m.sibling),
														ya((h = l(m, p.props)), p),
														(h.return = f),
														(f = h);
													break e;
												}
												n(f, m);
												break;
											}
											t(f, m), (m = m.sibling);
										}
										p.type === d
											? (((h = ju(p.props.children, f.mode, h, p.key)).return =
													f),
											  (f = h))
											: (ya(
													(h = $u(p.type, p.key, p.props, null, f.mode, h)),
													p
											  ),
											  (h.return = f),
											  (f = h));
									}
									return u(f);
								case c:
									e: {
										for (S = p.key; null !== m; ) {
											if (m.key === S) {
												if (
													4 === m.tag &&
													m.stateNode.containerInfo === p.containerInfo &&
													m.stateNode.implementation === p.implementation
												) {
													n(f, m.sibling),
														((h = l(m, p.children || [])).return = f),
														(f = h);
													break e;
												}
												n(f, m);
												break;
											}
											t(f, m), (m = m.sibling);
										}
										((h = Hu(p, f.mode, h)).return = f), (f = h);
									}
									return u(f);
								case E:
									return w(f, m, (p = (S = p._init)(p._payload)), h);
							}
							if (B(p))
								return (function (r, l, i, u) {
									for (
										var s = null, c = null, d = l, f = (l = 0), m = null;
										null !== d && f < i.length;
										f++
									) {
										d.index > f ? ((m = d), (d = null)) : (m = d.sibling);
										var p = b(r, d, i[f], u);
										if (null === p) {
											null === d && (d = m);
											break;
										}
										e && d && null === p.alternate && t(r, d),
											(l = o(p, l, f)),
											null === c ? (s = p) : (c.sibling = p),
											(c = p),
											(d = m);
									}
									if (f === i.length) return n(r, d), Yr && Wr(r, f), s;
									if (null === d) {
										for (; f < i.length; f++)
											null !== (d = y(r, i[f], u)) &&
												((l = o(d, l, f)),
												null === c ? (s = d) : (c.sibling = d),
												(c = d));
										return Yr && Wr(r, f), s;
									}
									for (d = a(d); f < i.length; f++)
										null !== (m = v(d, r, f, i[f], u)) &&
											(e &&
												null !== m.alternate &&
												d.delete(null === m.key ? f : m.key),
											(l = o(m, l, f)),
											null === c ? (s = m) : (c.sibling = m),
											(c = m));
									return (
										e &&
											d.forEach(function (e) {
												return t(r, e);
											}),
										Yr && Wr(r, f),
										s
									);
								})(f, m, p, h);
							if (N(p)) {
								if ("function" != typeof (S = N(p))) throw Error(i(150));
								return (function (r, l, u, s) {
									if (null == u) throw Error(i(151));
									for (
										var c = null,
											d = null,
											f = l,
											m = (l = 0),
											p = null,
											h = u.next();
										null !== f && !h.done;
										m++, h = u.next()
									) {
										f.index > m ? ((p = f), (f = null)) : (p = f.sibling);
										var g = b(r, f, h.value, s);
										if (null === g) {
											null === f && (f = p);
											break;
										}
										e && f && null === g.alternate && t(r, f),
											(l = o(g, l, m)),
											null === d ? (c = g) : (d.sibling = g),
											(d = g),
											(f = p);
									}
									if (h.done) return n(r, f), Yr && Wr(r, m), c;
									if (null === f) {
										for (; !h.done; m++, h = u.next())
											null !== (h = y(r, h.value, s)) &&
												((l = o(h, l, m)),
												null === d ? (c = h) : (d.sibling = h),
												(d = h));
										return Yr && Wr(r, m), c;
									}
									for (f = a(f); !h.done; m++, h = u.next())
										null !== (h = v(f, r, m, h.value, s)) &&
											(e &&
												null !== h.alternate &&
												f.delete(null === h.key ? m : h.key),
											(l = o(h, l, m)),
											null === d ? (c = h) : (d.sibling = h),
											(d = h));
									return (
										e &&
											f.forEach(function (e) {
												return t(r, e);
											}),
										Yr && Wr(r, m),
										c
									);
								})(f, m, (p = S.call(p)), h);
							}
							if ("function" == typeof p.then) return w(f, m, ga(p), h);
							if (p.$$typeof === g) return w(f, m, xi(f, p), h);
							ba(f, p);
						}
						return ("string" == typeof p && "" !== p) ||
							"number" == typeof p ||
							"bigint" == typeof p
							? ((p = "" + p),
							  null !== m && 6 === m.tag
									? (n(f, m.sibling), ((h = l(m, p)).return = f), (f = h))
									: (n(f, m), ((h = Uu(p, f.mode, h)).return = f), (f = h)),
							  u(f))
							: n(f, m);
					}
					return function (e, t, n, r) {
						try {
							ha = 0;
							var a = w(e, t, n, r);
							return (pa = null), a;
						} catch (t) {
							if (t === oa) throw t;
							var l = Fu(29, t, null, e.mode);
							return (l.lanes = r), (l.return = e), l;
						}
					};
				}
				var Ea = wa(!0),
					Sa = wa(!1),
					ka = q(null),
					Ca = q(0);
				function Na(e, t) {
					Q(Ca, (e = ss)), Q(ka, t), (ss = e | t.baseLanes);
				}
				function xa() {
					Q(Ca, ss), Q(ka, ka.current);
				}
				function Aa() {
					(ss = Ca.current), G(ka), G(Ca);
				}
				var Pa = q(null),
					Ta = null;
				function _a(e) {
					var t = e.alternate;
					Q(Ra, 1 & Ra.current),
						Q(Pa, e),
						null === Ta &&
							(null === t || null !== ka.current || null !== t.memoizedState) &&
							(Ta = e);
				}
				function La(e) {
					if (22 === e.tag) {
						if ((Q(Ra, Ra.current), Q(Pa, e), null === Ta)) {
							var t = e.alternate;
							null !== t && null !== t.memoizedState && (Ta = e);
						}
					} else za();
				}
				function za() {
					Q(Ra, Ra.current), Q(Pa, Pa.current);
				}
				function Oa(e) {
					G(Pa), Ta === e && (Ta = null), G(Ra);
				}
				var Ra = q(0);
				function Fa(e) {
					for (var t = e; null !== t; ) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (
								null !== n &&
								(null === (n = n.dehydrated) ||
									"$?" === n.data ||
									"$!" === n.data)
							)
								return t;
						} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
							if (128 & t.flags) return t;
						} else if (null !== t.child) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break;
						for (; null === t.sibling; ) {
							if (null === t.return || t.return === e) return null;
							t = t.return;
						}
						(t.sibling.return = t.return), (t = t.sibling);
					}
					return null;
				}
				var Ma =
						"undefined" != typeof AbortController
							? AbortController
							: function () {
									var e = [],
										t = (this.signal = {
											aborted: !1,
											addEventListener: function (t, n) {
												e.push(n);
											},
										});
									this.abort = function () {
										(t.aborted = !0),
											e.forEach(function (e) {
												return e();
											});
									};
							  },
					Da = a.unstable_scheduleCallback,
					Ia = a.unstable_NormalPriority,
					$a = {
						$$typeof: g,
						Consumer: null,
						Provider: null,
						_currentValue: null,
						_currentValue2: null,
						_threadCount: 0,
					};
				function ja() {
					return { controller: new Ma(), data: new Map(), refCount: 0 };
				}
				function Ba(e) {
					e.refCount--,
						0 === e.refCount &&
							Da(Ia, function () {
								e.controller.abort();
							});
				}
				var Ua = null,
					Ha = 0,
					Wa = 0,
					Va = null;
				function qa() {
					if (0 == --Ha && null !== Ua) {
						null !== Va && (Va.status = "fulfilled");
						var e = Ua;
						(Ua = null), (Wa = 0), (Va = null);
						for (var t = 0; t < e.length; t++) (0, e[t])();
					}
				}
				var Ga = _.S;
				_.S = function (e, t) {
					"object" === r(t) &&
						null !== t &&
						"function" == typeof t.then &&
						(function (e, t) {
							if (null === Ua) {
								var n = (Ua = []);
								(Ha = 0),
									(Wa = Ec()),
									(Va = {
										status: "pending",
										value: void 0,
										then: function (e) {
											n.push(e);
										},
									});
							}
							Ha++, t.then(qa, qa);
						})(0, t),
						null !== Ga && Ga(e, t);
				};
				var Qa = q(null);
				function Ka() {
					var e = Qa.current;
					return null !== e ? e : ts.pooledCache;
				}
				function Ya(e, t) {
					Q(Qa, null === t ? Qa.current : t.pool);
				}
				function Xa() {
					var e = Ka();
					return null === e ? null : { parent: $a._currentValue, pool: e };
				}
				var Ja = 0,
					Za = null,
					el = null,
					tl = null,
					nl = !1,
					rl = !1,
					al = !1,
					ll = 0,
					ol = 0,
					il = null,
					ul = 0;
				function sl() {
					throw Error(i(321));
				}
				function cl(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++)
						if (!Qn(e[n], t[n])) return !1;
					return !0;
				}
				function dl(e, t, n, r, a, l) {
					return (
						(Ja = l),
						(Za = t),
						(t.memoizedState = null),
						(t.updateQueue = null),
						(t.lanes = 0),
						(_.H = null === e || null === e.memoizedState ? xo : Ao),
						(al = !1),
						(l = n(r, a)),
						(al = !1),
						rl && (l = ml(t, n, r, a)),
						fl(e),
						l
					);
				}
				function fl(e) {
					_.H = No;
					var t = null !== el && null !== el.next;
					if (
						((Ja = 0),
						(tl = el = Za = null),
						(nl = !1),
						(ol = 0),
						(il = null),
						t)
					)
						throw Error(i(300));
					null === e ||
						Wo ||
						(null !== (e = e.dependencies) && ki(e) && (Wo = !0));
				}
				function ml(e, t, n, r) {
					Za = e;
					var a = 0;
					do {
						if ((rl && (il = null), (ol = 0), (rl = !1), 25 <= a))
							throw Error(i(301));
						if (((a += 1), (tl = el = null), null != e.updateQueue)) {
							var l = e.updateQueue;
							(l.lastEffect = null),
								(l.events = null),
								(l.stores = null),
								null != l.memoCache && (l.memoCache.index = 0);
						}
						(_.H = Po), (l = t(n, r));
					} while (rl);
					return l;
				}
				function pl() {
					var e = _.H,
						t = e.useState()[0];
					return (
						(t = "function" == typeof t.then ? wl(t) : t),
						(e = e.useState()[0]),
						(null !== el ? el.memoizedState : null) !== e && (Za.flags |= 1024),
						t
					);
				}
				function hl() {
					var e = 0 !== ll;
					return (ll = 0), e;
				}
				function gl(e, t, n) {
					(t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
				}
				function yl(e) {
					if (nl) {
						for (e = e.memoizedState; null !== e; ) {
							var t = e.queue;
							null !== t && (t.pending = null), (e = e.next);
						}
						nl = !1;
					}
					(Ja = 0),
						(tl = el = Za = null),
						(rl = !1),
						(ol = ll = 0),
						(il = null);
				}
				function bl() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null,
					};
					return (
						null === tl ? (Za.memoizedState = tl = e) : (tl = tl.next = e), tl
					);
				}
				function vl() {
					if (null === el) {
						var e = Za.alternate;
						e = null !== e ? e.memoizedState : null;
					} else e = el.next;
					var t = null === tl ? Za.memoizedState : tl.next;
					if (null !== t) (tl = t), (el = e);
					else {
						if (null === e) {
							if (null === Za.alternate) throw Error(i(467));
							throw Error(i(310));
						}
						(e = {
							memoizedState: (el = e).memoizedState,
							baseState: el.baseState,
							baseQueue: el.baseQueue,
							queue: el.queue,
							next: null,
						}),
							null === tl ? (Za.memoizedState = tl = e) : (tl = tl.next = e);
					}
					return tl;
				}
				function wl(e) {
					var t = ol;
					return (
						(ol += 1),
						null === il && (il = []),
						(e = da(il, e, t)),
						(t = Za),
						null === (null === tl ? t.memoizedState : tl.next) &&
							((t = t.alternate),
							(_.H = null === t || null === t.memoizedState ? xo : Ao)),
						e
					);
				}
				function El(e) {
					if (null !== e && "object" === r(e)) {
						if ("function" == typeof e.then) return wl(e);
						if (e.$$typeof === g) return Ni(e);
					}
					throw Error(i(438, String(e)));
				}
				function Sl(e) {
					var t = null,
						n = Za.updateQueue;
					if ((null !== n && (t = n.memoCache), null == t)) {
						var r = Za.alternate;
						null !== r &&
							null !== (r = r.updateQueue) &&
							null != (r = r.memoCache) &&
							(t = {
								data: r.data.map(function (e) {
									return e.slice();
								}),
								index: 0,
							});
					}
					if (
						(null == t && (t = { data: [], index: 0 }),
						null === n &&
							((n = {
								lastEffect: null,
								events: null,
								stores: null,
								memoCache: null,
							}),
							(Za.updateQueue = n)),
						(n.memoCache = t),
						void 0 === (n = t.data[t.index]))
					)
						for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = k;
					return t.index++, n;
				}
				function kl(e, t) {
					return "function" == typeof t ? t(e) : t;
				}
				function Cl(e) {
					return Nl(vl(), el, e);
				}
				function Nl(e, t, n) {
					var r = e.queue;
					if (null === r) throw Error(i(311));
					r.lastRenderedReducer = n;
					var a = e.baseQueue,
						l = r.pending;
					if (null !== l) {
						if (null !== a) {
							var o = a.next;
							(a.next = l.next), (l.next = o);
						}
						(t.baseQueue = a = l), (r.pending = null);
					}
					if (((l = e.baseState), null === a)) e.memoizedState = l;
					else {
						var u = (o = null),
							s = null,
							c = (t = a.next),
							d = !1;
						do {
							var f = -536870913 & c.lane;
							if (f !== c.lane ? (rs & f) === f : (Ja & f) === f) {
								var m = c.revertLane;
								if (0 === m)
									null !== s &&
										(s = s.next =
											{
												lane: 0,
												revertLane: 0,
												action: c.action,
												hasEagerState: c.hasEagerState,
												eagerState: c.eagerState,
												next: null,
											}),
										f === Wa && (d = !0);
								else {
									if ((Ja & m) === m) {
										(c = c.next), m === Wa && (d = !0);
										continue;
									}
									(f = {
										lane: 0,
										revertLane: c.revertLane,
										action: c.action,
										hasEagerState: c.hasEagerState,
										eagerState: c.eagerState,
										next: null,
									}),
										null === s ? ((u = s = f), (o = l)) : (s = s.next = f),
										(Za.lanes |= m),
										(ds |= m);
								}
								(f = c.action),
									al && n(l, f),
									(l = c.hasEagerState ? c.eagerState : n(l, f));
							} else
								(m = {
									lane: f,
									revertLane: c.revertLane,
									action: c.action,
									hasEagerState: c.hasEagerState,
									eagerState: c.eagerState,
									next: null,
								}),
									null === s ? ((u = s = m), (o = l)) : (s = s.next = m),
									(Za.lanes |= f),
									(ds |= f);
							c = c.next;
						} while (null !== c && c !== t);
						if (
							(null === s ? (o = l) : (s.next = u),
							!Qn(l, e.memoizedState) && ((Wo = !0), d && null !== (n = Va)))
						)
							throw n;
						(e.memoizedState = l),
							(e.baseState = o),
							(e.baseQueue = s),
							(r.lastRenderedState = l);
					}
					return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch];
				}
				function xl(e) {
					var t = vl(),
						n = t.queue;
					if (null === n) throw Error(i(311));
					n.lastRenderedReducer = e;
					var r = n.dispatch,
						a = n.pending,
						l = t.memoizedState;
					if (null !== a) {
						n.pending = null;
						var o = (a = a.next);
						do {
							(l = e(l, o.action)), (o = o.next);
						} while (o !== a);
						Qn(l, t.memoizedState) || (Wo = !0),
							(t.memoizedState = l),
							null === t.baseQueue && (t.baseState = l),
							(n.lastRenderedState = l);
					}
					return [l, r];
				}
				function Al(e, t, n) {
					var r = Za,
						a = vl(),
						l = Yr;
					if (l) {
						if (void 0 === n) throw Error(i(407));
						n = n();
					} else n = t();
					var o = !Qn((el || a).memoizedState, n);
					if (
						(o && ((a.memoizedState = n), (Wo = !0)),
						(a = a.queue),
						Jl(_l.bind(null, r, a, e), [e]),
						a.getSnapshot !== t ||
							o ||
							(null !== tl && 1 & tl.memoizedState.tag))
					) {
						if (
							((r.flags |= 2048),
							Gl(9, Tl.bind(null, r, a, n, t), { destroy: void 0 }, null),
							null === ts)
						)
							throw Error(i(349));
						l || 60 & Ja || Pl(r, t, n);
					}
					return n;
				}
				function Pl(e, t, n) {
					(e.flags |= 16384),
						(e = { getSnapshot: t, value: n }),
						null === (t = Za.updateQueue)
							? ((t = {
									lastEffect: null,
									events: null,
									stores: null,
									memoCache: null,
							  }),
							  (Za.updateQueue = t),
							  (t.stores = [e]))
							: null === (n = t.stores)
							? (t.stores = [e])
							: n.push(e);
				}
				function Tl(e, t, n, r) {
					(t.value = n), (t.getSnapshot = r), Ll(t) && zl(e);
				}
				function _l(e, t, n) {
					return n(function () {
						Ll(t) && zl(e);
					});
				}
				function Ll(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !Qn(e, n);
					} catch (e) {
						return !0;
					}
				}
				function zl(e) {
					var t = Tr(e, 2);
					null !== t && zs(t, 0, 2);
				}
				function Ol(e) {
					var t = bl();
					if ("function" == typeof e) {
						var n = e;
						if (((e = n()), al)) {
							ve(!0);
							try {
								n();
							} finally {
								ve(!1);
							}
						}
					}
					return (
						(t.memoizedState = t.baseState = e),
						(t.queue = {
							pending: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: kl,
							lastRenderedState: e,
						}),
						t
					);
				}
				function Rl(e, t, n, r) {
					return (e.baseState = n), Nl(e, el, "function" == typeof r ? r : kl);
				}
				function Fl(e, t, n, r, a) {
					if (So(e)) throw Error(i(485));
					if (null !== (e = t.action)) {
						var l = {
							payload: a,
							action: e,
							next: null,
							isTransition: !0,
							status: "pending",
							value: null,
							reason: null,
							listeners: [],
							then: function (e) {
								l.listeners.push(e);
							},
						};
						null !== _.T ? n(!0) : (l.isTransition = !1),
							r(l),
							null === (n = t.pending)
								? ((l.next = t.pending = l), Ml(t, l))
								: ((l.next = n.next), (t.pending = n.next = l));
					}
				}
				function Ml(e, t) {
					var n = t.action,
						r = t.payload,
						a = e.state;
					if (t.isTransition) {
						var l = _.T,
							o = {};
						_.T = o;
						try {
							var i = n(a, r),
								u = _.S;
							null !== u && u(o, i), Dl(e, t, i);
						} catch (n) {
							$l(e, t, n);
						} finally {
							_.T = l;
						}
					} else
						try {
							Dl(e, t, (l = n(a, r)));
						} catch (n) {
							$l(e, t, n);
						}
				}
				function Dl(e, t, n) {
					null !== n && "object" === r(n) && "function" == typeof n.then
						? n.then(
								function (n) {
									Il(e, t, n);
								},
								function (n) {
									return $l(e, t, n);
								}
						  )
						: Il(e, t, n);
				}
				function Il(e, t, n) {
					(t.status = "fulfilled"),
						(t.value = n),
						jl(t),
						(e.state = n),
						null !== (t = e.pending) &&
							((n = t.next) === t
								? (e.pending = null)
								: ((n = n.next), (t.next = n), Ml(e, n)));
				}
				function $l(e, t, n) {
					var r = e.pending;
					if (((e.pending = null), null !== r)) {
						r = r.next;
						do {
							(t.status = "rejected"), (t.reason = n), jl(t), (t = t.next);
						} while (t !== r);
					}
					e.action = null;
				}
				function jl(e) {
					e = e.listeners;
					for (var t = 0; t < e.length; t++) (0, e[t])();
				}
				function Bl(e, t) {
					return t;
				}
				function Ul(e, t) {
					if (Yr) {
						var n = ts.formState;
						if (null !== n) {
							e: {
								var r = Za;
								if (Yr) {
									if (Kr) {
										t: {
											for (var a = Kr, l = Jr; 8 !== a.nodeType; ) {
												if (!l) {
													a = null;
													break t;
												}
												if (null === (a = id(a.nextSibling))) {
													a = null;
													break t;
												}
											}
											a = "F!" === (l = a.data) || "F" === l ? a : null;
										}
										if (a) {
											(Kr = id(a.nextSibling)), (r = "F!" === a.data);
											break e;
										}
									}
									ea(r);
								}
								r = !1;
							}
							r && (t = n[0]);
						}
					}
					return (
						((n = bl()).memoizedState = n.baseState = t),
						(r = {
							pending: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: Bl,
							lastRenderedState: t,
						}),
						(n.queue = r),
						(n = vo.bind(null, Za, r)),
						(r.dispatch = n),
						(r = Ol(!1)),
						(l = Eo.bind(null, Za, !1, r.queue)),
						(a = { state: t, dispatch: null, action: e, pending: null }),
						((r = bl()).queue = a),
						(n = Fl.bind(null, Za, a, l, n)),
						(a.dispatch = n),
						(r.memoizedState = e),
						[t, n, !1]
					);
				}
				function Hl(e) {
					return Wl(vl(), el, e);
				}
				function Wl(e, t, n) {
					(t = Nl(e, t, Bl)[0]),
						(e = Cl(kl)[0]),
						(t =
							"object" === r(t) && null !== t && "function" == typeof t.then
								? wl(t)
								: t);
					var a = vl(),
						l = a.queue,
						o = l.dispatch;
					return (
						n !== a.memoizedState &&
							((Za.flags |= 2048),
							Gl(9, Vl.bind(null, l, n), { destroy: void 0 }, null)),
						[t, o, e]
					);
				}
				function Vl(e, t) {
					e.action = t;
				}
				function ql(e) {
					var t = vl(),
						n = el;
					if (null !== n) return Wl(t, n, e);
					vl(), (t = t.memoizedState);
					var r = (n = vl()).queue.dispatch;
					return (n.memoizedState = e), [t, r, !1];
				}
				function Gl(e, t, n, r) {
					return (
						(e = { tag: e, create: t, inst: n, deps: r, next: null }),
						null === (t = Za.updateQueue) &&
							((t = {
								lastEffect: null,
								events: null,
								stores: null,
								memoCache: null,
							}),
							(Za.updateQueue = t)),
						null === (n = t.lastEffect)
							? (t.lastEffect = e.next = e)
							: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
						e
					);
				}
				function Ql() {
					return vl().memoizedState;
				}
				function Kl(e, t, n, r) {
					var a = bl();
					(Za.flags |= e),
						(a.memoizedState = Gl(
							1 | t,
							n,
							{ destroy: void 0 },
							void 0 === r ? null : r
						));
				}
				function Yl(e, t, n, r) {
					var a = vl();
					r = void 0 === r ? null : r;
					var l = a.memoizedState.inst;
					null !== el && null !== r && cl(r, el.memoizedState.deps)
						? (a.memoizedState = Gl(t, n, l, r))
						: ((Za.flags |= e), (a.memoizedState = Gl(1 | t, n, l, r)));
				}
				function Xl(e, t) {
					Kl(8390656, 8, e, t);
				}
				function Jl(e, t) {
					Yl(2048, 8, e, t);
				}
				function Zl(e, t) {
					return Yl(4, 2, e, t);
				}
				function eo(e, t) {
					return Yl(4, 4, e, t);
				}
				function to(e, t) {
					if ("function" == typeof t) {
						e = e();
						var n = t(e);
						return function () {
							"function" == typeof n ? n() : t(null);
						};
					}
					if (null != t)
						return (
							(e = e()),
							(t.current = e),
							function () {
								t.current = null;
							}
						);
				}
				function no(e, t, n) {
					(n = null != n ? n.concat([e]) : null),
						Yl(4, 4, to.bind(null, t, e), n);
				}
				function ro() {}
				function ao(e, t) {
					var n = vl();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== t && cl(t, r[1])
						? r[0]
						: ((n.memoizedState = [e, t]), e);
				}
				function lo(e, t) {
					var n = vl();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					if (null !== t && cl(t, r[1])) return r[0];
					if (((r = e()), al)) {
						ve(!0);
						try {
							e();
						} finally {
							ve(!1);
						}
					}
					return (n.memoizedState = [r, t]), r;
				}
				function oo(e, t, n) {
					return void 0 === n || 1073741824 & Ja
						? (e.memoizedState = t)
						: ((e.memoizedState = n),
						  (e = Ls()),
						  (Za.lanes |= e),
						  (ds |= e),
						  n);
				}
				function io(e, t, n, r) {
					return Qn(n, t)
						? n
						: null !== ka.current
						? ((e = oo(e, n, r)), Qn(e, t) || (Wo = !0), e)
						: 42 & Ja
						? ((e = Ls()), (Za.lanes |= e), (ds |= e), t)
						: ((Wo = !0), (e.memoizedState = n));
				}
				function uo(e, t, n, a, l) {
					var o = U.p;
					U.p = 0 !== o && 8 > o ? o : 8;
					var i,
						u,
						s,
						c = _.T,
						d = {};
					(_.T = d), Eo(e, !1, t, n);
					try {
						var f = l(),
							m = _.S;
						null !== m && m(d, f),
							null !== f && "object" === r(f) && "function" == typeof f.then
								? wo(
										e,
										t,
										((i = a),
										(u = []),
										(s = {
											status: "pending",
											value: null,
											reason: null,
											then: function (e) {
												u.push(e);
											},
										}),
										f.then(
											function () {
												(s.status = "fulfilled"), (s.value = i);
												for (var e = 0; e < u.length; e++) (0, u[e])(i);
											},
											function (e) {
												for (
													s.status = "rejected", s.reason = e, e = 0;
													e < u.length;
													e++
												)
													(0, u[e])(void 0);
											}
										),
										s),
										_s()
								  )
								: wo(e, t, a, _s());
					} catch (n) {
						wo(
							e,
							t,
							{ then: function () {}, status: "rejected", reason: n },
							_s()
						);
					} finally {
						(U.p = o), (_.T = c);
					}
				}
				function so() {}
				function co(e, t, n, r) {
					if (5 !== e.tag) throw Error(i(476));
					var a = fo(e).queue;
					uo(
						e,
						a,
						t,
						H,
						null === n
							? so
							: function () {
									return mo(e), n(r);
							  }
					);
				}
				function fo(e) {
					var t = e.memoizedState;
					if (null !== t) return t;
					var n = {};
					return (
						((t = {
							memoizedState: H,
							baseState: H,
							baseQueue: null,
							queue: {
								pending: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: kl,
								lastRenderedState: H,
							},
							next: null,
						}).next = {
							memoizedState: n,
							baseState: n,
							baseQueue: null,
							queue: {
								pending: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: kl,
								lastRenderedState: n,
							},
							next: null,
						}),
						(e.memoizedState = t),
						null !== (e = e.alternate) && (e.memoizedState = t),
						t
					);
				}
				function mo(e) {
					wo(e, fo(e).next.queue, {}, _s());
				}
				function po() {
					return Ni(Md);
				}
				function ho() {
					return vl().memoizedState;
				}
				function go() {
					return vl().memoizedState;
				}
				function yo(e) {
					for (var t = e.return; null !== t; ) {
						switch (t.tag) {
							case 24:
							case 3:
								var n = _s(),
									r = zi(t, (e = Li(n)), n);
								return (
									null !== r && (zs(r, 0, n), Oi(r, t, n)),
									(t = { cache: ja() }),
									void (e.payload = t)
								);
						}
						t = t.return;
					}
				}
				function bo(e, t, n) {
					var r = _s();
					(n = {
						lane: r,
						revertLane: 0,
						action: n,
						hasEagerState: !1,
						eagerState: null,
						next: null,
					}),
						So(e)
							? ko(t, n)
							: null !== (n = Pr(e, t, n, r)) && (zs(n, 0, r), Co(n, t, r));
				}
				function vo(e, t, n) {
					wo(e, t, n, _s());
				}
				function wo(e, t, n, r) {
					var a = {
						lane: r,
						revertLane: 0,
						action: n,
						hasEagerState: !1,
						eagerState: null,
						next: null,
					};
					if (So(e)) ko(t, a);
					else {
						var l = e.alternate;
						if (
							0 === e.lanes &&
							(null === l || 0 === l.lanes) &&
							null !== (l = t.lastRenderedReducer)
						)
							try {
								var o = t.lastRenderedState,
									i = l(o, n);
								if (((a.hasEagerState = !0), (a.eagerState = i), Qn(i, o)))
									return Ar(e, t, a, 0), null === ts && xr(), !1;
							} catch (e) {}
						if (null !== (n = Pr(e, t, a, r)))
							return zs(n, 0, r), Co(n, t, r), !0;
					}
					return !1;
				}
				function Eo(e, t, n, r) {
					if (
						((r = {
							lane: 2,
							revertLane: Ec(),
							action: r,
							hasEagerState: !1,
							eagerState: null,
							next: null,
						}),
						So(e))
					) {
						if (t) throw Error(i(479));
					} else null !== (t = Pr(e, n, r, 2)) && zs(t, 0, 2);
				}
				function So(e) {
					var t = e.alternate;
					return e === Za || (null !== t && t === Za);
				}
				function ko(e, t) {
					rl = nl = !0;
					var n = e.pending;
					null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
						(e.pending = t);
				}
				function Co(e, t, n) {
					if (4194176 & n) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), Re(e, n);
					}
				}
				var No = {
					readContext: Ni,
					use: El,
					useCallback: sl,
					useContext: sl,
					useEffect: sl,
					useImperativeHandle: sl,
					useLayoutEffect: sl,
					useInsertionEffect: sl,
					useMemo: sl,
					useReducer: sl,
					useRef: sl,
					useState: sl,
					useDebugValue: sl,
					useDeferredValue: sl,
					useTransition: sl,
					useSyncExternalStore: sl,
					useId: sl,
				};
				(No.useCacheRefresh = sl),
					(No.useMemoCache = sl),
					(No.useHostTransitionStatus = sl),
					(No.useFormState = sl),
					(No.useActionState = sl),
					(No.useOptimistic = sl);
				var xo = {
					readContext: Ni,
					use: El,
					useCallback: function (e, t) {
						return (bl().memoizedState = [e, void 0 === t ? null : t]), e;
					},
					useContext: Ni,
					useEffect: Xl,
					useImperativeHandle: function (e, t, n) {
						(n = null != n ? n.concat([e]) : null),
							Kl(4194308, 4, to.bind(null, t, e), n);
					},
					useLayoutEffect: function (e, t) {
						return Kl(4194308, 4, e, t);
					},
					useInsertionEffect: function (e, t) {
						Kl(4, 2, e, t);
					},
					useMemo: function (e, t) {
						var n = bl();
						t = void 0 === t ? null : t;
						var r = e();
						if (al) {
							ve(!0);
							try {
								e();
							} finally {
								ve(!1);
							}
						}
						return (n.memoizedState = [r, t]), r;
					},
					useReducer: function (e, t, n) {
						var r = bl();
						if (void 0 !== n) {
							var a = n(t);
							if (al) {
								ve(!0);
								try {
									n(t);
								} finally {
									ve(!1);
								}
							}
						} else a = t;
						return (
							(r.memoizedState = r.baseState = a),
							(e = {
								pending: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: e,
								lastRenderedState: a,
							}),
							(r.queue = e),
							(e = e.dispatch = bo.bind(null, Za, e)),
							[r.memoizedState, e]
						);
					},
					useRef: function (e) {
						return (e = { current: e }), (bl().memoizedState = e);
					},
					useState: function (e) {
						var t = (e = Ol(e)).queue,
							n = vo.bind(null, Za, t);
						return (t.dispatch = n), [e.memoizedState, n];
					},
					useDebugValue: ro,
					useDeferredValue: function (e, t) {
						return oo(bl(), e, t);
					},
					useTransition: function () {
						var e = Ol(!1);
						return (
							(e = uo.bind(null, Za, e.queue, !0, !1)),
							(bl().memoizedState = e),
							[!1, e]
						);
					},
					useSyncExternalStore: function (e, t, n) {
						var r = Za,
							a = bl();
						if (Yr) {
							if (void 0 === n) throw Error(i(407));
							n = n();
						} else {
							if (((n = t()), null === ts)) throw Error(i(349));
							60 & rs || Pl(r, t, n);
						}
						a.memoizedState = n;
						var l = { value: n, getSnapshot: t };
						return (
							(a.queue = l),
							Xl(_l.bind(null, r, l, e), [e]),
							(r.flags |= 2048),
							Gl(9, Tl.bind(null, r, l, n, t), { destroy: void 0 }, null),
							n
						);
					},
					useId: function () {
						var e = bl(),
							t = ts.identifierPrefix;
						if (Yr) {
							var n = Hr;
							(t =
								":" +
								t +
								"R" +
								(n = (Ur & ~(1 << (32 - we(Ur) - 1))).toString(32) + n)),
								0 < (n = ll++) && (t += "H" + n.toString(32)),
								(t += ":");
						} else t = ":" + t + "r" + (n = ul++).toString(32) + ":";
						return (e.memoizedState = t);
					},
					useCacheRefresh: function () {
						return (bl().memoizedState = yo.bind(null, Za));
					},
				};
				(xo.useMemoCache = Sl),
					(xo.useHostTransitionStatus = po),
					(xo.useFormState = Ul),
					(xo.useActionState = Ul),
					(xo.useOptimistic = function (e) {
						var t = bl();
						t.memoizedState = t.baseState = e;
						var n = {
							pending: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: null,
							lastRenderedState: null,
						};
						return (
							(t.queue = n),
							(t = Eo.bind(null, Za, !0, n)),
							(n.dispatch = t),
							[e, t]
						);
					});
				var Ao = {
					readContext: Ni,
					use: El,
					useCallback: ao,
					useContext: Ni,
					useEffect: Jl,
					useImperativeHandle: no,
					useInsertionEffect: Zl,
					useLayoutEffect: eo,
					useMemo: lo,
					useReducer: Cl,
					useRef: Ql,
					useState: function () {
						return Cl(kl);
					},
					useDebugValue: ro,
					useDeferredValue: function (e, t) {
						return io(vl(), el.memoizedState, e, t);
					},
					useTransition: function () {
						var e = Cl(kl)[0],
							t = vl().memoizedState;
						return ["boolean" == typeof e ? e : wl(e), t];
					},
					useSyncExternalStore: Al,
					useId: ho,
				};
				(Ao.useCacheRefresh = go),
					(Ao.useMemoCache = Sl),
					(Ao.useHostTransitionStatus = po),
					(Ao.useFormState = Hl),
					(Ao.useActionState = Hl),
					(Ao.useOptimistic = function (e, t) {
						return Rl(vl(), 0, e, t);
					});
				var Po = {
					readContext: Ni,
					use: El,
					useCallback: ao,
					useContext: Ni,
					useEffect: Jl,
					useImperativeHandle: no,
					useInsertionEffect: Zl,
					useLayoutEffect: eo,
					useMemo: lo,
					useReducer: xl,
					useRef: Ql,
					useState: function () {
						return xl(kl);
					},
					useDebugValue: ro,
					useDeferredValue: function (e, t) {
						var n = vl();
						return null === el ? oo(n, e, t) : io(n, el.memoizedState, e, t);
					},
					useTransition: function () {
						var e = xl(kl)[0],
							t = vl().memoizedState;
						return ["boolean" == typeof e ? e : wl(e), t];
					},
					useSyncExternalStore: Al,
					useId: ho,
				};
				function To(e, t, n, r) {
					(n = null == (n = n(r, (t = e.memoizedState))) ? t : L({}, t, n)),
						(e.memoizedState = n),
						0 === e.lanes && (e.updateQueue.baseState = n);
				}
				(Po.useCacheRefresh = go),
					(Po.useMemoCache = Sl),
					(Po.useHostTransitionStatus = po),
					(Po.useFormState = ql),
					(Po.useActionState = ql),
					(Po.useOptimistic = function (e, t) {
						var n = vl();
						return null !== el
							? Rl(n, 0, e, t)
							: ((n.baseState = e), [e, n.queue.dispatch]);
					});
				var _o = {
					isMounted: function (e) {
						return !!(e = e._reactInternals) && D(e) === e;
					},
					enqueueSetState: function (e, t, n) {
						e = e._reactInternals;
						var r = _s(),
							a = Li(r);
						(a.payload = t),
							null != n && (a.callback = n),
							null !== (t = zi(e, a, r)) && (zs(t, 0, r), Oi(t, e, r));
					},
					enqueueReplaceState: function (e, t, n) {
						e = e._reactInternals;
						var r = _s(),
							a = Li(r);
						(a.tag = 1),
							(a.payload = t),
							null != n && (a.callback = n),
							null !== (t = zi(e, a, r)) && (zs(t, 0, r), Oi(t, e, r));
					},
					enqueueForceUpdate: function (e, t) {
						e = e._reactInternals;
						var n = _s(),
							r = Li(n);
						(r.tag = 2),
							null != t && (r.callback = t),
							null !== (t = zi(e, r, n)) && (zs(t, 0, n), Oi(t, e, n));
					},
				};
				function Lo(e, t, n, r, a, l, o) {
					return "function" == typeof (e = e.stateNode).shouldComponentUpdate
						? e.shouldComponentUpdate(r, l, o)
						: !(
								t.prototype &&
								t.prototype.isPureReactComponent &&
								Kn(n, r) &&
								Kn(a, l)
						  );
				}
				function zo(e, t, n, r) {
					(e = t.state),
						"function" == typeof t.componentWillReceiveProps &&
							t.componentWillReceiveProps(n, r),
						"function" == typeof t.UNSAFE_componentWillReceiveProps &&
							t.UNSAFE_componentWillReceiveProps(n, r),
						t.state !== e && _o.enqueueReplaceState(t, t.state, null);
				}
				function Oo(e, t) {
					var n = t;
					if ("ref" in t)
						for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
					if ((e = e.defaultProps))
						for (var a in (n === t && (n = L({}, n)), e))
							void 0 === n[a] && (n[a] = e[a]);
					return n;
				}
				var Ro =
					"function" == typeof reportError
						? reportError
						: function (e) {
								if (
									"object" ===
										("undefined" == typeof window ? "undefined" : r(window)) &&
									"function" == typeof window.ErrorEvent
								) {
									var t = new window.ErrorEvent("error", {
										bubbles: !0,
										cancelable: !0,
										message:
											"object" === r(e) &&
											null !== e &&
											"string" == typeof e.message
												? String(e.message)
												: String(e),
										error: e,
									});
									if (!window.dispatchEvent(t)) return;
								} else if (
									"object" ===
										("undefined" == typeof process
											? "undefined"
											: r(process)) &&
									"function" == typeof process.emit
								)
									return void process.emit("uncaughtException", e);
								console.error(e);
						  };
				function Fo(e) {
					Ro(e);
				}
				function Mo(e) {
					console.error(e);
				}
				function Do(e) {
					Ro(e);
				}
				function Io(e, t) {
					try {
						(0, e.onUncaughtError)(t.value, { componentStack: t.stack });
					} catch (e) {
						setTimeout(function () {
							throw e;
						});
					}
				}
				function $o(e, t, n) {
					try {
						(0, e.onCaughtError)(n.value, {
							componentStack: n.stack,
							errorBoundary: 1 === t.tag ? t.stateNode : null,
						});
					} catch (e) {
						setTimeout(function () {
							throw e;
						});
					}
				}
				function jo(e, t, n) {
					return (
						((n = Li(n)).tag = 3),
						(n.payload = { element: null }),
						(n.callback = function () {
							Io(e, t);
						}),
						n
					);
				}
				function Bo(e) {
					return ((e = Li(e)).tag = 3), e;
				}
				function Uo(e, t, n, r) {
					var a = n.type.getDerivedStateFromError;
					if ("function" == typeof a) {
						var l = r.value;
						(e.payload = function () {
							return a(l);
						}),
							(e.callback = function () {
								$o(t, n, r);
							});
					}
					var o = n.stateNode;
					null !== o &&
						"function" == typeof o.componentDidCatch &&
						(e.callback = function () {
							$o(t, n, r),
								"function" != typeof a &&
									(null === Ss ? (Ss = new Set([this])) : Ss.add(this));
							var e = r.stack;
							this.componentDidCatch(r.value, {
								componentStack: null !== e ? e : "",
							});
						});
				}
				var Ho = Error(i(461)),
					Wo = !1;
				function Vo(e, t, n, r) {
					t.child = null === e ? Sa(t, null, n, r) : Ea(t, e.child, n, r);
				}
				function qo(e, t, n, r, a) {
					n = n.render;
					var l = t.ref;
					if ("ref" in r) {
						var o = {};
						for (var i in r) "ref" !== i && (o[i] = r[i]);
					} else o = r;
					return (
						Ci(t),
						(r = dl(e, t, n, o, l, a)),
						(i = hl()),
						null === e || Wo
							? (Yr && i && qr(t), (t.flags |= 1), Vo(e, t, r, a), t.child)
							: (gl(e, t, a), fi(e, t, a))
					);
				}
				function Go(e, t, n, r, a) {
					if (null === e) {
						var l = n.type;
						return "function" != typeof l ||
							Mu(l) ||
							void 0 !== l.defaultProps ||
							null !== n.compare
							? (((e = $u(n.type, null, r, t, t.mode, a)).ref = t.ref),
							  (e.return = t),
							  (t.child = e))
							: ((t.tag = 15), (t.type = l), Qo(e, t, l, r, a));
					}
					if (((l = e.child), !mi(e, a))) {
						var o = l.memoizedProps;
						if (
							(n = null !== (n = n.compare) ? n : Kn)(o, r) &&
							e.ref === t.ref
						)
							return fi(e, t, a);
					}
					return (
						(t.flags |= 1),
						((e = Du(l, r)).ref = t.ref),
						(e.return = t),
						(t.child = e)
					);
				}
				function Qo(e, t, n, r, a) {
					if (null !== e) {
						var l = e.memoizedProps;
						if (Kn(l, r) && e.ref === t.ref) {
							if (((Wo = !1), (t.pendingProps = r = l), !mi(e, a)))
								return (t.lanes = e.lanes), fi(e, t, a);
							131072 & e.flags && (Wo = !0);
						}
					}
					return Jo(e, t, n, r, a);
				}
				function Ko(e, t, n) {
					var r = t.pendingProps,
						a = r.children,
						l = !!(2 & t.stateNode._pendingVisibility),
						o = null !== e ? e.memoizedState : null;
					if ((Xo(e, t), "hidden" === r.mode || l)) {
						if (128 & t.flags) {
							if (((r = null !== o ? o.baseLanes | n : n), null !== e)) {
								for (a = t.child = e.child, l = 0; null !== a; )
									(l = l | a.lanes | a.childLanes), (a = a.sibling);
								t.childLanes = l & ~r;
							} else (t.childLanes = 0), (t.child = null);
							return Yo(e, t, r, n);
						}
						if (!(536870912 & n))
							return (
								(t.lanes = t.childLanes = 536870912),
								Yo(e, t, null !== o ? o.baseLanes | n : n, n)
							);
						(t.memoizedState = { baseLanes: 0, cachePool: null }),
							null !== e && Ya(0, null !== o ? o.cachePool : null),
							null !== o ? Na(t, o) : xa(),
							La(t);
					} else
						null !== o
							? (Ya(0, o.cachePool), Na(t, o), za(), (t.memoizedState = null))
							: (null !== e && Ya(0, null), xa(), za());
					return Vo(e, t, a, n), t.child;
				}
				function Yo(e, t, n, r) {
					var a = Ka();
					return (
						(a = null === a ? null : { parent: $a._currentValue, pool: a }),
						(t.memoizedState = { baseLanes: n, cachePool: a }),
						null !== e && Ya(0, null),
						xa(),
						La(t),
						null !== e && Si(e, t, r, !0),
						null
					);
				}
				function Xo(e, t) {
					var n = t.ref;
					if (null === n) null !== e && null !== e.ref && (t.flags |= 2097664);
					else {
						if ("function" != typeof n && "object" !== r(n))
							throw Error(i(284));
						(null !== e && e.ref === n) || (t.flags |= 2097664);
					}
				}
				function Jo(e, t, n, r, a) {
					return (
						Ci(t),
						(n = dl(e, t, n, r, void 0, a)),
						(r = hl()),
						null === e || Wo
							? (Yr && r && qr(t), (t.flags |= 1), Vo(e, t, n, a), t.child)
							: (gl(e, t, a), fi(e, t, a))
					);
				}
				function Zo(e, t, n, r, a, l) {
					return (
						Ci(t),
						(t.updateQueue = null),
						(n = ml(t, r, n, a)),
						fl(e),
						(r = hl()),
						null === e || Wo
							? (Yr && r && qr(t), (t.flags |= 1), Vo(e, t, n, l), t.child)
							: (gl(e, t, l), fi(e, t, l))
					);
				}
				function ei(e, t, n, a, l) {
					if ((Ci(t), null === t.stateNode)) {
						var o = zr,
							i = n.contextType;
						"object" === r(i) && null !== i && (o = Ni(i)),
							(o = new n(a, o)),
							(t.memoizedState =
								null !== o.state && void 0 !== o.state ? o.state : null),
							(o.updater = _o),
							(t.stateNode = o),
							(o._reactInternals = t),
							((o = t.stateNode).props = a),
							(o.state = t.memoizedState),
							(o.refs = {}),
							Ti(t),
							(i = n.contextType),
							(o.context = "object" === r(i) && null !== i ? Ni(i) : zr),
							(o.state = t.memoizedState),
							"function" == typeof (i = n.getDerivedStateFromProps) &&
								(To(t, n, i, a), (o.state = t.memoizedState)),
							"function" == typeof n.getDerivedStateFromProps ||
								"function" == typeof o.getSnapshotBeforeUpdate ||
								("function" != typeof o.UNSAFE_componentWillMount &&
									"function" != typeof o.componentWillMount) ||
								((i = o.state),
								"function" == typeof o.componentWillMount &&
									o.componentWillMount(),
								"function" == typeof o.UNSAFE_componentWillMount &&
									o.UNSAFE_componentWillMount(),
								i !== o.state && _o.enqueueReplaceState(o, o.state, null),
								Di(t, a, o, l),
								Mi(),
								(o.state = t.memoizedState)),
							"function" == typeof o.componentDidMount && (t.flags |= 4194308),
							(a = !0);
					} else if (null === e) {
						o = t.stateNode;
						var u = t.memoizedProps,
							s = Oo(n, u);
						o.props = s;
						var c = o.context,
							d = n.contextType;
						(i = zr), "object" === r(d) && null !== d && (i = Ni(d));
						var f = n.getDerivedStateFromProps;
						(d =
							"function" == typeof f ||
							"function" == typeof o.getSnapshotBeforeUpdate),
							(u = t.pendingProps !== u),
							d ||
								("function" != typeof o.UNSAFE_componentWillReceiveProps &&
									"function" != typeof o.componentWillReceiveProps) ||
								((u || c !== i) && zo(t, o, a, i)),
							(Pi = !1);
						var m = t.memoizedState;
						(o.state = m),
							Di(t, a, o, l),
							Mi(),
							(c = t.memoizedState),
							u || m !== c || Pi
								? ("function" == typeof f &&
										(To(t, n, f, a), (c = t.memoizedState)),
								  (s = Pi || Lo(t, n, s, a, m, c, i))
										? (d ||
												("function" != typeof o.UNSAFE_componentWillMount &&
													"function" != typeof o.componentWillMount) ||
												("function" == typeof o.componentWillMount &&
													o.componentWillMount(),
												"function" == typeof o.UNSAFE_componentWillMount &&
													o.UNSAFE_componentWillMount()),
										  "function" == typeof o.componentDidMount &&
												(t.flags |= 4194308))
										: ("function" == typeof o.componentDidMount &&
												(t.flags |= 4194308),
										  (t.memoizedProps = a),
										  (t.memoizedState = c)),
								  (o.props = a),
								  (o.state = c),
								  (o.context = i),
								  (a = s))
								: ("function" == typeof o.componentDidMount &&
										(t.flags |= 4194308),
								  (a = !1));
					} else {
						(o = t.stateNode),
							_i(e, t),
							(d = Oo(n, (i = t.memoizedProps))),
							(o.props = d),
							(f = t.pendingProps),
							(m = o.context),
							(c = n.contextType),
							(s = zr),
							"object" === r(c) && null !== c && (s = Ni(c)),
							(c =
								"function" == typeof (u = n.getDerivedStateFromProps) ||
								"function" == typeof o.getSnapshotBeforeUpdate) ||
								("function" != typeof o.UNSAFE_componentWillReceiveProps &&
									"function" != typeof o.componentWillReceiveProps) ||
								((i !== f || m !== s) && zo(t, o, a, s)),
							(Pi = !1),
							(m = t.memoizedState),
							(o.state = m),
							Di(t, a, o, l),
							Mi();
						var p = t.memoizedState;
						i !== f ||
						m !== p ||
						Pi ||
						(null !== e && null !== e.dependencies && ki(e.dependencies))
							? ("function" == typeof u &&
									(To(t, n, u, a), (p = t.memoizedState)),
							  (d =
									Pi ||
									Lo(t, n, d, a, m, p, s) ||
									(null !== e && null !== e.dependencies && ki(e.dependencies)))
									? (c ||
											("function" != typeof o.UNSAFE_componentWillUpdate &&
												"function" != typeof o.componentWillUpdate) ||
											("function" == typeof o.componentWillUpdate &&
												o.componentWillUpdate(a, p, s),
											"function" == typeof o.UNSAFE_componentWillUpdate &&
												o.UNSAFE_componentWillUpdate(a, p, s)),
									  "function" == typeof o.componentDidUpdate && (t.flags |= 4),
									  "function" == typeof o.getSnapshotBeforeUpdate &&
											(t.flags |= 1024))
									: ("function" != typeof o.componentDidUpdate ||
											(i === e.memoizedProps && m === e.memoizedState) ||
											(t.flags |= 4),
									  "function" != typeof o.getSnapshotBeforeUpdate ||
											(i === e.memoizedProps && m === e.memoizedState) ||
											(t.flags |= 1024),
									  (t.memoizedProps = a),
									  (t.memoizedState = p)),
							  (o.props = a),
							  (o.state = p),
							  (o.context = s),
							  (a = d))
							: ("function" != typeof o.componentDidUpdate ||
									(i === e.memoizedProps && m === e.memoizedState) ||
									(t.flags |= 4),
							  "function" != typeof o.getSnapshotBeforeUpdate ||
									(i === e.memoizedProps && m === e.memoizedState) ||
									(t.flags |= 1024),
							  (a = !1));
					}
					return (
						(o = a),
						Xo(e, t),
						(a = !!(128 & t.flags)),
						o || a
							? ((o = t.stateNode),
							  (n =
									a && "function" != typeof n.getDerivedStateFromError
										? null
										: o.render()),
							  (t.flags |= 1),
							  null !== e && a
									? ((t.child = Ea(t, e.child, null, l)),
									  (t.child = Ea(t, null, n, l)))
									: Vo(e, t, n, l),
							  (t.memoizedState = o.state),
							  (e = t.child))
							: (e = fi(e, t, l)),
						e
					);
				}
				function ti(e, t, n, r) {
					return aa(), (t.flags |= 256), Vo(e, t, n, r), t.child;
				}
				var ni = { dehydrated: null, treeContext: null, retryLane: 0 };
				function ri(e) {
					return { baseLanes: e, cachePool: Xa() };
				}
				function ai(e, t, n) {
					return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= ps), e;
				}
				function li(e, t, n) {
					var r,
						a = t.pendingProps,
						l = !1,
						o = !!(128 & t.flags);
					if (
						((r = o) ||
							(r =
								(null === e || null !== e.memoizedState) && !!(2 & Ra.current)),
						r && ((l = !0), (t.flags &= -129)),
						(r = !!(32 & t.flags)),
						(t.flags &= -33),
						null === e)
					) {
						if (Yr) {
							if ((l ? _a(t) : za(), Yr)) {
								var u,
									s = Kr;
								if ((u = s)) {
									e: {
										for (u = s, s = Jr; 8 !== u.nodeType; ) {
											if (!s) {
												s = null;
												break e;
											}
											if (null === (u = id(u.nextSibling))) {
												s = null;
												break e;
											}
										}
										s = u;
									}
									null !== s
										? ((t.memoizedState = {
												dehydrated: s,
												treeContext:
													null !== Br ? { id: Ur, overflow: Hr } : null,
												retryLane: 536870912,
										  }),
										  ((u = Fu(18, null, null, 0)).stateNode = s),
										  (u.return = t),
										  (t.child = u),
										  (Qr = t),
										  (Kr = null),
										  (u = !0))
										: (u = !1);
								}
								u || ea(t);
							}
							if (null !== (s = t.memoizedState) && null !== (s = s.dehydrated))
								return (
									"$!" === s.data ? (t.lanes = 16) : (t.lanes = 536870912), null
								);
							Oa(t);
						}
						return (
							(s = a.children),
							(a = a.fallback),
							l
								? (za(),
								  (s = ii({ mode: "hidden", children: s }, (l = t.mode))),
								  (a = ju(a, l, n, null)),
								  (s.return = t),
								  (a.return = t),
								  (s.sibling = a),
								  (t.child = s),
								  ((l = t.child).memoizedState = ri(n)),
								  (l.childLanes = ai(e, r, n)),
								  (t.memoizedState = ni),
								  a)
								: (_a(t), oi(t, s))
						);
					}
					if (null !== (u = e.memoizedState) && null !== (s = u.dehydrated)) {
						if (o)
							256 & t.flags
								? (_a(t), (t.flags &= -257), (t = ui(e, t, n)))
								: null !== t.memoizedState
								? (za(), (t.child = e.child), (t.flags |= 128), (t = null))
								: (za(),
								  (l = a.fallback),
								  (s = t.mode),
								  (a = ii({ mode: "visible", children: a.children }, s)),
								  ((l = ju(l, s, n, null)).flags |= 2),
								  (a.return = t),
								  (l.return = t),
								  (a.sibling = l),
								  (t.child = a),
								  Ea(t, e.child, null, n),
								  ((a = t.child).memoizedState = ri(n)),
								  (a.childLanes = ai(e, r, n)),
								  (t.memoizedState = ni),
								  (t = l));
						else if ((_a(t), "$!" === s.data)) {
							if ((r = s.nextSibling && s.nextSibling.dataset)) var c = r.dgst;
							(r = c),
								((a = Error(i(419))).stack = ""),
								(a.digest = r),
								la({ value: a, source: null, stack: null }),
								(t = ui(e, t, n));
						} else if (
							(Wo || Si(e, t, n, !1), (r = !!(n & e.childLanes)), Wo || r)
						) {
							if (null !== (r = ts)) {
								if (42 & (a = n & -n)) a = 1;
								else
									switch (a) {
										case 2:
											a = 1;
											break;
										case 8:
											a = 4;
											break;
										case 32:
											a = 16;
											break;
										case 128:
										case 256:
										case 512:
										case 1024:
										case 2048:
										case 4096:
										case 8192:
										case 16384:
										case 32768:
										case 65536:
										case 131072:
										case 262144:
										case 524288:
										case 1048576:
										case 2097152:
										case 4194304:
										case 8388608:
										case 16777216:
										case 33554432:
											a = 64;
											break;
										case 268435456:
											a = 134217728;
											break;
										default:
											a = 0;
									}
								if (
									0 !== (a = a & (r.suspendedLanes | n) ? 0 : a) &&
									a !== u.retryLane
								)
									throw ((u.retryLane = a), Tr(e, a), zs(r, 0, a), Ho);
							}
							"$?" === s.data || Ws(), (t = ui(e, t, n));
						} else
							"$?" === s.data
								? ((t.flags |= 128),
								  (t.child = e.child),
								  (t = ic.bind(null, e)),
								  (s._reactRetry = t),
								  (t = null))
								: ((e = u.treeContext),
								  (Kr = id(s.nextSibling)),
								  (Qr = t),
								  (Yr = !0),
								  (Xr = null),
								  (Jr = !1),
								  null !== e &&
										(($r[jr++] = Ur),
										($r[jr++] = Hr),
										($r[jr++] = Br),
										(Ur = e.id),
										(Hr = e.overflow),
										(Br = t)),
								  ((t = oi(t, a.children)).flags |= 4096));
						return t;
					}
					return l
						? (za(),
						  (l = a.fallback),
						  (s = t.mode),
						  (c = (u = e.child).sibling),
						  ((a = Du(u, {
								mode: "hidden",
								children: a.children,
						  })).subtreeFlags = 31457280 & u.subtreeFlags),
						  null !== c
								? (l = Du(c, l))
								: ((l = ju(l, s, n, null)).flags |= 2),
						  (l.return = t),
						  (a.return = t),
						  (a.sibling = l),
						  (t.child = a),
						  (a = l),
						  (l = t.child),
						  null === (s = e.child.memoizedState)
								? (s = ri(n))
								: (null !== (u = s.cachePool)
										? ((c = $a._currentValue),
										  (u = u.parent !== c ? { parent: c, pool: c } : u))
										: (u = Xa()),
								  (s = { baseLanes: s.baseLanes | n, cachePool: u })),
						  (l.memoizedState = s),
						  (l.childLanes = ai(e, r, n)),
						  (t.memoizedState = ni),
						  a)
						: (_a(t),
						  (e = (n = e.child).sibling),
						  ((n = Du(n, { mode: "visible", children: a.children })).return =
								t),
						  (n.sibling = null),
						  null !== e &&
								(null === (r = t.deletions)
									? ((t.deletions = [e]), (t.flags |= 16))
									: r.push(e)),
						  (t.child = n),
						  (t.memoizedState = null),
						  n);
				}
				function oi(e, t) {
					return (
						((t = ii({ mode: "visible", children: t }, e.mode)).return = e),
						(e.child = t)
					);
				}
				function ii(e, t) {
					return Bu(e, t, 0, null);
				}
				function ui(e, t, n) {
					return (
						Ea(t, e.child, null, n),
						((e = oi(t, t.pendingProps.children)).flags |= 2),
						(t.memoizedState = null),
						e
					);
				}
				function si(e, t, n) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), wi(e.return, t, n);
				}
				function ci(e, t, n, r, a) {
					var l = e.memoizedState;
					null === l
						? (e.memoizedState = {
								isBackwards: t,
								rendering: null,
								renderingStartTime: 0,
								last: r,
								tail: n,
								tailMode: a,
						  })
						: ((l.isBackwards = t),
						  (l.rendering = null),
						  (l.renderingStartTime = 0),
						  (l.last = r),
						  (l.tail = n),
						  (l.tailMode = a));
				}
				function di(e, t, n) {
					var r = t.pendingProps,
						a = r.revealOrder,
						l = r.tail;
					if ((Vo(e, t, r.children, n), 2 & (r = Ra.current)))
						(r = (1 & r) | 2), (t.flags |= 128);
					else {
						if (null !== e && 128 & e.flags)
							e: for (e = t.child; null !== e; ) {
								if (13 === e.tag) null !== e.memoizedState && si(e, n, t);
								else if (19 === e.tag) si(e, n, t);
								else if (null !== e.child) {
									(e.child.return = e), (e = e.child);
									continue;
								}
								if (e === t) break e;
								for (; null === e.sibling; ) {
									if (null === e.return || e.return === t) break e;
									e = e.return;
								}
								(e.sibling.return = e.return), (e = e.sibling);
							}
						r &= 1;
					}
					switch ((Q(Ra, r), a)) {
						case "forwards":
							for (n = t.child, a = null; null !== n; )
								null !== (e = n.alternate) && null === Fa(e) && (a = n),
									(n = n.sibling);
							null === (n = a)
								? ((a = t.child), (t.child = null))
								: ((a = n.sibling), (n.sibling = null)),
								ci(t, !1, a, n, l);
							break;
						case "backwards":
							for (n = null, a = t.child, t.child = null; null !== a; ) {
								if (null !== (e = a.alternate) && null === Fa(e)) {
									t.child = a;
									break;
								}
								(e = a.sibling), (a.sibling = n), (n = a), (a = e);
							}
							ci(t, !0, n, null, l);
							break;
						case "together":
							ci(t, !1, null, null, void 0);
							break;
						default:
							t.memoizedState = null;
					}
					return t.child;
				}
				function fi(e, t, n) {
					if (
						(null !== e && (t.dependencies = e.dependencies),
						(ds |= t.lanes),
						!(n & t.childLanes))
					) {
						if (null === e) return null;
						if ((Si(e, t, n, !1), !(n & t.childLanes))) return null;
					}
					if (null !== e && t.child !== e.child) throw Error(i(153));
					if (null !== t.child) {
						for (
							n = Du((e = t.child), e.pendingProps), t.child = n, n.return = t;
							null !== e.sibling;

						)
							(e = e.sibling),
								((n = n.sibling = Du(e, e.pendingProps)).return = t);
						n.sibling = null;
					}
					return t.child;
				}
				function mi(e, t) {
					return !!(e.lanes & t) || !(null === (e = e.dependencies) || !ki(e));
				}
				function pi(e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps) Wo = !0;
						else {
							if (!(mi(e, n) || 128 & t.flags))
								return (
									(Wo = !1),
									(function (e, t, n) {
										switch (t.tag) {
											case 3:
												Z(t, t.stateNode.containerInfo),
													bi(0, $a, e.memoizedState.cache),
													aa();
												break;
											case 27:
											case 5:
												te(t);
												break;
											case 4:
												Z(t, t.stateNode.containerInfo);
												break;
											case 10:
												bi(0, t.type, t.memoizedProps.value);
												break;
											case 13:
												var r = t.memoizedState;
												if (null !== r)
													return null !== r.dehydrated
														? (_a(t), (t.flags |= 128), null)
														: n & t.child.childLanes
														? li(e, t, n)
														: (_a(t),
														  null !== (e = fi(e, t, n)) ? e.sibling : null);
												_a(t);
												break;
											case 19:
												var a = !!(128 & e.flags);
												if (
													((r = !!(n & t.childLanes)) ||
														(Si(e, t, n, !1), (r = !!(n & t.childLanes))),
													a)
												) {
													if (r) return di(e, t, n);
													t.flags |= 128;
												}
												if (
													(null !== (a = t.memoizedState) &&
														((a.rendering = null),
														(a.tail = null),
														(a.lastEffect = null)),
													Q(Ra, Ra.current),
													r)
												)
													break;
												return null;
											case 22:
											case 23:
												return (t.lanes = 0), Ko(e, t, n);
											case 24:
												bi(0, $a, e.memoizedState.cache);
										}
										return fi(e, t, n);
									})(e, t, n)
								);
							Wo = !!(131072 & e.flags);
						}
					else (Wo = !1), Yr && 1048576 & t.flags && Vr(t, Ir, t.index);
					switch (((t.lanes = 0), t.tag)) {
						case 16:
							e: {
								e = t.pendingProps;
								var r = t.elementType,
									a = r._init;
								if (
									((r = a(r._payload)), (t.type = r), "function" != typeof r)
								) {
									if (null != r) {
										if ((a = r.$$typeof) === y) {
											(t.tag = 11), (t = qo(null, t, r, e, n));
											break e;
										}
										if (a === w) {
											(t.tag = 14), (t = Go(null, t, r, e, n));
											break e;
										}
									}
									throw ((t = A(r) || r), Error(i(306, t, "")));
								}
								Mu(r)
									? ((e = Oo(r, e)), (t.tag = 1), (t = ei(null, t, r, e, n)))
									: ((t.tag = 0), (t = Jo(null, t, r, e, n)));
							}
							return t;
						case 0:
							return Jo(e, t, t.type, t.pendingProps, n);
						case 1:
							return ei(e, t, (r = t.type), (a = Oo(r, t.pendingProps)), n);
						case 3:
							e: {
								if ((Z(t, t.stateNode.containerInfo), null === e))
									throw Error(i(387));
								var l = t.pendingProps;
								(r = (a = t.memoizedState).element),
									_i(e, t),
									Di(t, l, null, n);
								var o = t.memoizedState;
								if (
									((l = o.cache),
									bi(0, $a, l),
									l !== a.cache && Ei(t, [$a], n, !0),
									Mi(),
									(l = o.element),
									a.isDehydrated)
								) {
									if (
										((a = { element: l, isDehydrated: !1, cache: o.cache }),
										(t.updateQueue.baseState = a),
										(t.memoizedState = a),
										256 & t.flags)
									) {
										t = ti(e, t, l, n);
										break e;
									}
									if (l !== r) {
										la((r = Rr(Error(i(424)), t))), (t = ti(e, t, l, n));
										break e;
									}
									for (
										Kr = id(t.stateNode.containerInfo.firstChild),
											Qr = t,
											Yr = !0,
											Xr = null,
											Jr = !0,
											n = Sa(t, null, l, n),
											t.child = n;
										n;

									)
										(n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
								} else {
									if ((aa(), l === r)) {
										t = fi(e, t, n);
										break e;
									}
									Vo(e, t, l, n);
								}
								t = t.child;
							}
							return t;
						case 26:
							return (
								Xo(e, t),
								null === e
									? (n = gd(t.type, null, t.pendingProps, null))
										? (t.memoizedState = n)
										: Yr ||
										  ((n = t.type),
										  (e = t.pendingProps),
										  ((r = Kc(X.current).createElement(n))[Ie] = t),
										  (r[$e] = e),
										  qc(r, n, e),
										  Xe(r),
										  (t.stateNode = r))
									: (t.memoizedState = gd(
											t.type,
											e.memoizedProps,
											t.pendingProps,
											e.memoizedState
									  )),
								null
							);
						case 27:
							return (
								te(t),
								null === e &&
									Yr &&
									((r = t.stateNode = sd(t.type, t.pendingProps, X.current)),
									(Qr = t),
									(Jr = !0),
									(Kr = id(r.firstChild))),
								(r = t.pendingProps.children),
								null !== e || Yr
									? Vo(e, t, r, n)
									: (t.child = Ea(t, null, r, n)),
								Xo(e, t),
								t.child
							);
						case 5:
							return (
								null === e &&
									Yr &&
									((a = r = Kr) &&
										(null !==
										(r = (function (e, t, n, r) {
											for (; 1 === e.nodeType; ) {
												var a = n;
												if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
													if (
														!r &&
														("INPUT" !== e.nodeName || "hidden" !== e.type)
													)
														break;
												} else if (r) {
													if (!e[Ve])
														switch (t) {
															case "meta":
																if (!e.hasAttribute("itemprop")) break;
																return e;
															case "link":
																if (
																	"stylesheet" ===
																		(l = e.getAttribute("rel")) &&
																	e.hasAttribute("data-precedence")
																)
																	break;
																if (
																	l !== a.rel ||
																	e.getAttribute("href") !==
																		(null == a.href ? null : a.href) ||
																	e.getAttribute("crossorigin") !==
																		(null == a.crossOrigin
																			? null
																			: a.crossOrigin) ||
																	e.getAttribute("title") !==
																		(null == a.title ? null : a.title)
																)
																	break;
																return e;
															case "style":
																if (e.hasAttribute("data-precedence")) break;
																return e;
															case "script":
																if (
																	((l = e.getAttribute("src")) !==
																		(null == a.src ? null : a.src) ||
																		e.getAttribute("type") !==
																			(null == a.type ? null : a.type) ||
																		e.getAttribute("crossorigin") !==
																			(null == a.crossOrigin
																				? null
																				: a.crossOrigin)) &&
																	l &&
																	e.hasAttribute("async") &&
																	!e.hasAttribute("itemprop")
																)
																	break;
																return e;
															default:
																return e;
														}
												} else {
													if ("input" !== t || "hidden" !== e.type) return e;
													var l = null == a.name ? null : "" + a.name;
													if (
														"hidden" === a.type &&
														e.getAttribute("name") === l
													)
														return e;
												}
												if (null === (e = id(e.nextSibling))) break;
											}
											return null;
										})(r, t.type, t.pendingProps, Jr))
											? ((t.stateNode = r),
											  (Qr = t),
											  (Kr = id(r.firstChild)),
											  (Jr = !1),
											  (a = !0))
											: (a = !1)),
									a || ea(t)),
								te(t),
								(a = t.type),
								(l = t.pendingProps),
								(o = null !== e ? e.memoizedProps : null),
								(r = l.children),
								Jc(a, l)
									? (r = null)
									: null !== o && Jc(a, o) && (t.flags |= 32),
								null !== t.memoizedState &&
									((a = dl(e, t, pl, null, null, n)), (Md._currentValue = a)),
								Xo(e, t),
								Vo(e, t, r, n),
								t.child
							);
						case 6:
							return (
								null === e &&
									Yr &&
									((e = n = Kr) &&
										(null !==
										(n = (function (e, t, n) {
											if ("" === t) return null;
											for (; 3 !== e.nodeType; ) {
												if (
													(1 !== e.nodeType ||
														"INPUT" !== e.nodeName ||
														"hidden" !== e.type) &&
													!n
												)
													return null;
												if (null === (e = id(e.nextSibling))) return null;
											}
											return e;
										})(n, t.pendingProps, Jr))
											? ((t.stateNode = n), (Qr = t), (Kr = null), (e = !0))
											: (e = !1)),
									e || ea(t)),
								null
							);
						case 13:
							return li(e, t, n);
						case 4:
							return (
								Z(t, t.stateNode.containerInfo),
								(r = t.pendingProps),
								null === e ? (t.child = Ea(t, null, r, n)) : Vo(e, t, r, n),
								t.child
							);
						case 11:
							return qo(e, t, t.type, t.pendingProps, n);
						case 7:
							return Vo(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return Vo(e, t, t.pendingProps.children, n), t.child;
						case 10:
							return (
								(r = t.pendingProps),
								bi(0, t.type, r.value),
								Vo(e, t, r.children, n),
								t.child
							);
						case 9:
							return (
								(a = t.type._context),
								(r = t.pendingProps.children),
								Ci(t),
								(r = r((a = Ni(a)))),
								(t.flags |= 1),
								Vo(e, t, r, n),
								t.child
							);
						case 14:
							return Go(e, t, t.type, t.pendingProps, n);
						case 15:
							return Qo(e, t, t.type, t.pendingProps, n);
						case 19:
							return di(e, t, n);
						case 22:
							return Ko(e, t, n);
						case 24:
							return (
								Ci(t),
								(r = Ni($a)),
								null === e
									? (null === (a = Ka()) &&
											((a = ts),
											(l = ja()),
											(a.pooledCache = l),
											l.refCount++,
											null !== l && (a.pooledCacheLanes |= n),
											(a = l)),
									  (t.memoizedState = { parent: r, cache: a }),
									  Ti(t),
									  bi(0, $a, a))
									: (!!(e.lanes & n) && (_i(e, t), Di(t, null, null, n), Mi()),
									  (a = e.memoizedState),
									  (l = t.memoizedState),
									  a.parent !== r
											? ((a = { parent: r, cache: r }),
											  (t.memoizedState = a),
											  0 === t.lanes &&
													(t.memoizedState = t.updateQueue.baseState = a),
											  bi(0, $a, r))
											: ((r = l.cache),
											  bi(0, $a, r),
											  r !== a.cache && Ei(t, [$a], n, !0))),
								Vo(e, t, t.pendingProps.children, n),
								t.child
							);
						case 29:
							throw t.pendingProps;
					}
					throw Error(i(156, t.tag));
				}
				var hi = q(null),
					gi = null,
					yi = null;
				function bi(e, t, n) {
					Q(hi, t._currentValue), (t._currentValue = n);
				}
				function vi(e) {
					(e._currentValue = hi.current), G(hi);
				}
				function wi(e, t, n) {
					for (; null !== e; ) {
						var r = e.alternate;
						if (
							((e.childLanes & t) !== t
								? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
								: null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
							e === n)
						)
							break;
						e = e.return;
					}
				}
				function Ei(e, t, n, r) {
					var a = e.child;
					for (null !== a && (a.return = e); null !== a; ) {
						var l = a.dependencies;
						if (null !== l) {
							var o = a.child;
							l = l.firstContext;
							e: for (; null !== l; ) {
								var u = l;
								l = a;
								for (var s = 0; s < t.length; s++)
									if (u.context === t[s]) {
										(l.lanes |= n),
											null !== (u = l.alternate) && (u.lanes |= n),
											wi(l.return, n, e),
											r || (o = null);
										break e;
									}
								l = u.next;
							}
						} else if (18 === a.tag) {
							if (null === (o = a.return)) throw Error(i(341));
							(o.lanes |= n),
								null !== (l = o.alternate) && (l.lanes |= n),
								wi(o, n, e),
								(o = null);
						} else o = a.child;
						if (null !== o) o.return = a;
						else
							for (o = a; null !== o; ) {
								if (o === e) {
									o = null;
									break;
								}
								if (null !== (a = o.sibling)) {
									(a.return = o.return), (o = a);
									break;
								}
								o = o.return;
							}
						a = o;
					}
				}
				function Si(e, t, n, r) {
					e = null;
					for (var a = t, l = !1; null !== a; ) {
						if (!l)
							if (524288 & a.flags) l = !0;
							else if (262144 & a.flags) break;
						if (10 === a.tag) {
							var o = a.alternate;
							if (null === o) throw Error(i(387));
							if (null !== (o = o.memoizedProps)) {
								var u = a.type;
								Qn(a.pendingProps.value, o.value) ||
									(null !== e ? e.push(u) : (e = [u]));
							}
						} else if (a === J.current) {
							if (null === (o = a.alternate)) throw Error(i(387));
							o.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
								(null !== e ? e.push(Md) : (e = [Md]));
						}
						a = a.return;
					}
					null !== e && Ei(t, e, n, r), (t.flags |= 262144);
				}
				function ki(e) {
					for (e = e.firstContext; null !== e; ) {
						if (!Qn(e.context._currentValue, e.memoizedValue)) return !0;
						e = e.next;
					}
					return !1;
				}
				function Ci(e) {
					(gi = e),
						(yi = null),
						null !== (e = e.dependencies) && (e.firstContext = null);
				}
				function Ni(e) {
					return Ai(gi, e);
				}
				function xi(e, t) {
					return null === gi && Ci(e), Ai(e, t);
				}
				function Ai(e, t) {
					var n = t._currentValue;
					if (
						((t = { context: t, memoizedValue: n, next: null }), null === yi)
					) {
						if (null === e) throw Error(i(308));
						(yi = t),
							(e.dependencies = { lanes: 0, firstContext: t }),
							(e.flags |= 524288);
					} else yi = yi.next = t;
					return n;
				}
				var Pi = !1;
				function Ti(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: { pending: null, lanes: 0, hiddenCallbacks: null },
						callbacks: null,
					};
				}
				function _i(e, t) {
					(e = e.updateQueue),
						t.updateQueue === e &&
							(t.updateQueue = {
								baseState: e.baseState,
								firstBaseUpdate: e.firstBaseUpdate,
								lastBaseUpdate: e.lastBaseUpdate,
								shared: e.shared,
								callbacks: null,
							});
				}
				function Li(e) {
					return { lane: e, tag: 0, payload: null, callback: null, next: null };
				}
				function zi(e, t, n) {
					var r = e.updateQueue;
					if (null === r) return null;
					if (((r = r.shared), 2 & es)) {
						var a = r.pending;
						return (
							null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
							(r.pending = t),
							(t = Lr(e)),
							_r(e, null, n),
							t
						);
					}
					return Ar(e, r, t, n), Lr(e);
				}
				function Oi(e, t, n) {
					if (null !== (t = t.updateQueue) && ((t = t.shared), 4194176 & n)) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), Re(e, n);
					}
				}
				function Ri(e, t) {
					var n = e.updateQueue,
						r = e.alternate;
					if (null !== r && n === (r = r.updateQueue)) {
						var a = null,
							l = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var o = {
									lane: n.lane,
									tag: n.tag,
									payload: n.payload,
									callback: null,
									next: null,
								};
								null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
							} while (null !== n);
							null === l ? (a = l = t) : (l = l.next = t);
						} else a = l = t;
						return (
							(n = {
								baseState: r.baseState,
								firstBaseUpdate: a,
								lastBaseUpdate: l,
								shared: r.shared,
								callbacks: r.callbacks,
							}),
							void (e.updateQueue = n)
						);
					}
					null === (e = n.lastBaseUpdate)
						? (n.firstBaseUpdate = t)
						: (e.next = t),
						(n.lastBaseUpdate = t);
				}
				var Fi = !1;
				function Mi() {
					if (Fi && null !== Va) throw Va;
				}
				function Di(e, t, n, r) {
					Fi = !1;
					var a = e.updateQueue;
					Pi = !1;
					var l = a.firstBaseUpdate,
						o = a.lastBaseUpdate,
						i = a.shared.pending;
					if (null !== i) {
						a.shared.pending = null;
						var u = i,
							s = u.next;
						(u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
						var c = e.alternate;
						null !== c &&
							(i = (c = c.updateQueue).lastBaseUpdate) !== o &&
							(null === i ? (c.firstBaseUpdate = s) : (i.next = s),
							(c.lastBaseUpdate = u));
					}
					if (null !== l) {
						var d = a.baseState;
						for (o = 0, c = s = u = null, i = l; ; ) {
							var f = -536870913 & i.lane,
								m = f !== i.lane;
							if (m ? (rs & f) === f : (r & f) === f) {
								0 !== f && f === Wa && (Fi = !0),
									null !== c &&
										(c = c.next =
											{
												lane: 0,
												tag: i.tag,
												payload: i.payload,
												callback: null,
												next: null,
											});
								e: {
									var p = e,
										h = i;
									f = t;
									var g = n;
									switch (h.tag) {
										case 1:
											if ("function" == typeof (p = h.payload)) {
												d = p.call(g, d, f);
												break e;
											}
											d = p;
											break e;
										case 3:
											p.flags = (-65537 & p.flags) | 128;
										case 0:
											if (
												null ==
												(f =
													"function" == typeof (p = h.payload)
														? p.call(g, d, f)
														: p)
											)
												break e;
											d = L({}, d, f);
											break e;
										case 2:
											Pi = !0;
									}
								}
								null !== (f = i.callback) &&
									((e.flags |= 64),
									m && (e.flags |= 8192),
									null === (m = a.callbacks) ? (a.callbacks = [f]) : m.push(f));
							} else
								(m = {
									lane: f,
									tag: i.tag,
									payload: i.payload,
									callback: i.callback,
									next: null,
								}),
									null === c ? ((s = c = m), (u = d)) : (c = c.next = m),
									(o |= f);
							if (null === (i = i.next)) {
								if (null === (i = a.shared.pending)) break;
								(i = (m = i).next),
									(m.next = null),
									(a.lastBaseUpdate = m),
									(a.shared.pending = null);
							}
						}
						null === c && (u = d),
							(a.baseState = u),
							(a.firstBaseUpdate = s),
							(a.lastBaseUpdate = c),
							null === l && (a.shared.lanes = 0),
							(ds |= o),
							(e.lanes = o),
							(e.memoizedState = d);
					}
				}
				function Ii(e, t) {
					if ("function" != typeof e) throw Error(i(191, e));
					e.call(t);
				}
				function $i(e, t) {
					var n = e.callbacks;
					if (null !== n)
						for (e.callbacks = null, e = 0; e < n.length; e++) Ii(n[e], t);
				}
				function ji(e, t) {
					try {
						var n = t.updateQueue,
							r = null !== n ? n.lastEffect : null;
						if (null !== r) {
							var a = r.next;
							n = a;
							do {
								if ((n.tag & e) === e) {
									r = void 0;
									var l = n.create,
										o = n.inst;
									(r = l()), (o.destroy = r);
								}
								n = n.next;
							} while (n !== a);
						}
					} catch (e) {
						rc(t, t.return, e);
					}
				}
				function Bi(e, t, n) {
					try {
						var r = t.updateQueue,
							a = null !== r ? r.lastEffect : null;
						if (null !== a) {
							var l = a.next;
							r = l;
							do {
								if ((r.tag & e) === e) {
									var o = r.inst,
										i = o.destroy;
									if (void 0 !== i) {
										(o.destroy = void 0), (a = t);
										var u = n;
										try {
											i();
										} catch (e) {
											rc(a, u, e);
										}
									}
								}
								r = r.next;
							} while (r !== l);
						}
					} catch (e) {
						rc(t, t.return, e);
					}
				}
				function Ui(e) {
					var t = e.updateQueue;
					if (null !== t) {
						var n = e.stateNode;
						try {
							$i(t, n);
						} catch (t) {
							rc(e, e.return, t);
						}
					}
				}
				function Hi(e, t, n) {
					(n.props = Oo(e.type, e.memoizedProps)), (n.state = e.memoizedState);
					try {
						n.componentWillUnmount();
					} catch (n) {
						rc(e, t, n);
					}
				}
				function Wi(e, t) {
					try {
						var n = e.ref;
						if (null !== n) {
							var r = e.stateNode;
							switch (e.tag) {
								case 26:
								case 27:
								case 5:
									var a = r;
									break;
								default:
									a = r;
							}
							"function" == typeof n ? (e.refCleanup = n(a)) : (n.current = a);
						}
					} catch (n) {
						rc(e, t, n);
					}
				}
				function Vi(e, t) {
					var n = e.ref,
						r = e.refCleanup;
					if (null !== n)
						if ("function" == typeof r)
							try {
								r();
							} catch (n) {
								rc(e, t, n);
							} finally {
								(e.refCleanup = null),
									null != (e = e.alternate) && (e.refCleanup = null);
							}
						else if ("function" == typeof n)
							try {
								n(null);
							} catch (n) {
								rc(e, t, n);
							}
						else n.current = null;
				}
				function qi(e) {
					var t = e.type,
						n = e.memoizedProps,
						r = e.stateNode;
					try {
						e: switch (t) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								n.autoFocus && r.focus();
								break e;
							case "img":
								n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
						}
					} catch (t) {
						rc(e, e.return, t);
					}
				}
				function Gi(e, t, n) {
					try {
						var a = e.stateNode;
						!(function (e, t, n, a) {
							switch (t) {
								case "div":
								case "span":
								case "svg":
								case "path":
								case "a":
								case "g":
								case "p":
								case "li":
									break;
								case "input":
									var l = null,
										o = null,
										u = null,
										s = null,
										c = null,
										d = null,
										f = null;
									for (h in n) {
										var m = n[h];
										if (n.hasOwnProperty(h) && null != m)
											switch (h) {
												case "checked":
												case "value":
													break;
												case "defaultValue":
													c = m;
												default:
													a.hasOwnProperty(h) || Wc(e, t, h, null, a, m);
											}
									}
									for (var p in a) {
										var h = a[p];
										if (
											((m = n[p]),
											a.hasOwnProperty(p) && (null != h || null != m))
										)
											switch (p) {
												case "type":
													o = h;
													break;
												case "name":
													l = h;
													break;
												case "checked":
													d = h;
													break;
												case "defaultChecked":
													f = h;
													break;
												case "value":
													u = h;
													break;
												case "defaultValue":
													s = h;
													break;
												case "children":
												case "dangerouslySetInnerHTML":
													if (null != h) throw Error(i(137, t));
													break;
												default:
													h !== m && Wc(e, t, p, h, a, m);
											}
									}
									return void gt(e, u, s, c, d, f, o, l);
								case "select":
									for (o in ((h = u = s = p = null), n))
										if (((c = n[o]), n.hasOwnProperty(o) && null != c))
											switch (o) {
												case "value":
													break;
												case "multiple":
													h = c;
												default:
													a.hasOwnProperty(o) || Wc(e, t, o, null, a, c);
											}
									for (l in a)
										if (
											((o = a[l]),
											(c = n[l]),
											a.hasOwnProperty(l) && (null != o || null != c))
										)
											switch (l) {
												case "value":
													p = o;
													break;
												case "defaultValue":
													s = o;
													break;
												case "multiple":
													u = o;
												default:
													o !== c && Wc(e, t, l, o, a, c);
											}
									return (
										(t = s),
										(n = u),
										(a = h),
										void (null != p
											? vt(e, !!n, p, !1)
											: !!a != !!n &&
											  (null != t
													? vt(e, !!n, t, !0)
													: vt(e, !!n, n ? [] : "", !1)))
									);
								case "textarea":
									for (s in ((h = p = null), n))
										if (
											((l = n[s]),
											n.hasOwnProperty(s) && null != l && !a.hasOwnProperty(s))
										)
											switch (s) {
												case "value":
												case "children":
													break;
												default:
													Wc(e, t, s, null, a, l);
											}
									for (u in a)
										if (
											((l = a[u]),
											(o = n[u]),
											a.hasOwnProperty(u) && (null != l || null != o))
										)
											switch (u) {
												case "value":
													p = l;
													break;
												case "defaultValue":
													h = l;
													break;
												case "children":
													break;
												case "dangerouslySetInnerHTML":
													if (null != l) throw Error(i(91));
													break;
												default:
													l !== o && Wc(e, t, u, l, a, o);
											}
									return void wt(e, p, h);
								case "option":
									for (var g in n)
										(p = n[g]),
											n.hasOwnProperty(g) &&
												null != p &&
												!a.hasOwnProperty(g) &&
												("selected" === g
													? (e.selected = !1)
													: Wc(e, t, g, null, a, p));
									for (c in a)
										(p = a[c]),
											(h = n[c]),
											!a.hasOwnProperty(c) ||
												p === h ||
												(null == p && null == h) ||
												("selected" === c
													? (e.selected =
															p && "function" != typeof p && "symbol" !== r(p))
													: Wc(e, t, c, p, a, h));
									return;
								case "img":
								case "link":
								case "area":
								case "base":
								case "br":
								case "col":
								case "embed":
								case "hr":
								case "keygen":
								case "meta":
								case "param":
								case "source":
								case "track":
								case "wbr":
								case "menuitem":
									for (var y in n)
										(p = n[y]),
											n.hasOwnProperty(y) &&
												null != p &&
												!a.hasOwnProperty(y) &&
												Wc(e, t, y, null, a, p);
									for (d in a)
										if (
											((p = a[d]),
											(h = n[d]),
											a.hasOwnProperty(d) &&
												p !== h &&
												(null != p || null != h))
										)
											switch (d) {
												case "children":
												case "dangerouslySetInnerHTML":
													if (null != p) throw Error(i(137, t));
													break;
												default:
													Wc(e, t, d, p, a, h);
											}
									return;
								default:
									if (xt(t)) {
										for (var b in n)
											(p = n[b]),
												n.hasOwnProperty(b) &&
													void 0 !== p &&
													!a.hasOwnProperty(b) &&
													Vc(e, t, b, void 0, a, p);
										for (f in a)
											(p = a[f]),
												(h = n[f]),
												!a.hasOwnProperty(f) ||
													p === h ||
													(void 0 === p && void 0 === h) ||
													Vc(e, t, f, p, a, h);
										return;
									}
							}
							for (var v in n)
								(p = n[v]),
									n.hasOwnProperty(v) &&
										null != p &&
										!a.hasOwnProperty(v) &&
										Wc(e, t, v, null, a, p);
							for (m in a)
								(p = a[m]),
									(h = n[m]),
									!a.hasOwnProperty(m) ||
										p === h ||
										(null == p && null == h) ||
										Wc(e, t, m, p, a, h);
						})(a, e.type, n, t),
							(a[$e] = t);
					} catch (t) {
						rc(e, e.return, t);
					}
				}
				function Qi(e) {
					return (
						5 === e.tag ||
						3 === e.tag ||
						26 === e.tag ||
						27 === e.tag ||
						4 === e.tag
					);
				}
				function Ki(e) {
					e: for (;;) {
						for (; null === e.sibling; ) {
							if (null === e.return || Qi(e.return)) return null;
							e = e.return;
						}
						for (
							e.sibling.return = e.return, e = e.sibling;
							5 !== e.tag && 6 !== e.tag && 27 !== e.tag && 18 !== e.tag;

						) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							(e.child.return = e), (e = e.child);
						}
						if (!(2 & e.flags)) return e.stateNode;
					}
				}
				function Yi(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode),
							t
								? 8 === n.nodeType
									? n.parentNode.insertBefore(e, t)
									: n.insertBefore(e, t)
								: (8 === n.nodeType
										? (t = n.parentNode).insertBefore(e, n)
										: (t = n).appendChild(e),
								  null != (n = n._reactRootContainer) ||
										null !== t.onclick ||
										(t.onclick = Hc));
					else if (4 !== r && 27 !== r && null !== (e = e.child))
						for (Yi(e, t, n), e = e.sibling; null !== e; )
							Yi(e, t, n), (e = e.sibling);
				}
				function Xi(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== r && 27 !== r && null !== (e = e.child))
						for (Xi(e, t, n), e = e.sibling; null !== e; )
							Xi(e, t, n), (e = e.sibling);
				}
				var Ji = !1,
					Zi = !1,
					eu = !1,
					tu = "function" == typeof WeakSet ? WeakSet : Set,
					nu = null,
					ru = !1;
				function au(e, t, n) {
					var r = n.flags;
					switch (n.tag) {
						case 0:
						case 11:
						case 15:
							yu(e, n), 4 & r && ji(5, n);
							break;
						case 1:
							if ((yu(e, n), 4 & r))
								if (((e = n.stateNode), null === t))
									try {
										e.componentDidMount();
									} catch (e) {
										rc(n, n.return, e);
									}
								else {
									var a = Oo(n.type, t.memoizedProps);
									t = t.memoizedState;
									try {
										e.componentDidUpdate(
											a,
											t,
											e.__reactInternalSnapshotBeforeUpdate
										);
									} catch (e) {
										rc(n, n.return, e);
									}
								}
							64 & r && Ui(n), 512 & r && Wi(n, n.return);
							break;
						case 3:
							if ((yu(e, n), 64 & r && null !== (r = n.updateQueue))) {
								if (((e = null), null !== n.child))
									switch (n.child.tag) {
										case 27:
										case 5:
										case 1:
											e = n.child.stateNode;
									}
								try {
									$i(r, e);
								} catch (e) {
									rc(n, n.return, e);
								}
							}
							break;
						case 26:
							yu(e, n), 512 & r && Wi(n, n.return);
							break;
						case 27:
						case 5:
							yu(e, n),
								null === t && 4 & r && qi(n),
								512 & r && Wi(n, n.return);
							break;
						case 12:
						default:
							yu(e, n);
							break;
						case 13:
							yu(e, n), 4 & r && cu(e, n);
							break;
						case 22:
							if (!(a = null !== n.memoizedState || Ji)) {
								t = (null !== t && null !== t.memoizedState) || Zi;
								var l = Ji,
									o = Zi;
								(Ji = a),
									(Zi = t) && !o
										? vu(e, n, !!(8772 & n.subtreeFlags))
										: yu(e, n),
									(Ji = l),
									(Zi = o);
							}
							512 & r &&
								("manual" === n.memoizedProps.mode
									? Wi(n, n.return)
									: Vi(n, n.return));
					}
				}
				function lu(e) {
					var t = e.alternate;
					null !== t && ((e.alternate = null), lu(t)),
						(e.child = null),
						(e.deletions = null),
						(e.sibling = null),
						5 === e.tag && null !== (t = e.stateNode) && qe(t),
						(e.stateNode = null),
						(e.return = null),
						(e.dependencies = null),
						(e.memoizedProps = null),
						(e.memoizedState = null),
						(e.pendingProps = null),
						(e.stateNode = null),
						(e.updateQueue = null);
				}
				var ou = null,
					iu = !1;
				function uu(e, t, n) {
					for (n = n.child; null !== n; ) su(e, t, n), (n = n.sibling);
				}
				function su(e, t, n) {
					if (be && "function" == typeof be.onCommitFiberUnmount)
						try {
							be.onCommitFiberUnmount(ye, n);
						} catch (e) {}
					switch (n.tag) {
						case 26:
							Zi || Vi(n, t),
								uu(e, t, n),
								n.memoizedState
									? n.memoizedState.count--
									: n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
							break;
						case 27:
							Zi || Vi(n, t);
							var r = ou,
								a = iu;
							for (
								ou = n.stateNode, uu(e, t, n), t = (n = n.stateNode).attributes;
								t.length;

							)
								n.removeAttributeNode(t[0]);
							qe(n), (ou = r), (iu = a);
							break;
						case 5:
							Zi || Vi(n, t);
						case 6:
							a = ou;
							var l = iu;
							if (((ou = null), uu(e, t, n), (iu = l), null !== (ou = a)))
								if (iu)
									try {
										(e = ou),
											(r = n.stateNode),
											8 === e.nodeType
												? e.parentNode.removeChild(r)
												: e.removeChild(r);
									} catch (e) {
										rc(n, t, e);
									}
								else
									try {
										ou.removeChild(n.stateNode);
									} catch (e) {
										rc(n, t, e);
									}
							break;
						case 18:
							null !== ou &&
								(iu
									? ((t = ou),
									  (n = n.stateNode),
									  8 === t.nodeType
											? ld(t.parentNode, n)
											: 1 === t.nodeType && ld(t, n),
									  pf(t))
									: ld(ou, n.stateNode));
							break;
						case 4:
							(r = ou),
								(a = iu),
								(ou = n.stateNode.containerInfo),
								(iu = !0),
								uu(e, t, n),
								(ou = r),
								(iu = a);
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							Zi || Bi(2, n, t), Zi || Bi(4, n, t), uu(e, t, n);
							break;
						case 1:
							Zi ||
								(Vi(n, t),
								"function" == typeof (r = n.stateNode).componentWillUnmount &&
									Hi(n, t, r)),
								uu(e, t, n);
							break;
						case 21:
							uu(e, t, n);
							break;
						case 22:
							Zi || Vi(n, t),
								(Zi = (r = Zi) || null !== n.memoizedState),
								uu(e, t, n),
								(Zi = r);
							break;
						default:
							uu(e, t, n);
					}
				}
				function cu(e, t) {
					if (
						null === t.memoizedState &&
						null !== (e = t.alternate) &&
						null !== (e = e.memoizedState) &&
						null !== (e = e.dehydrated)
					)
						try {
							pf(e);
						} catch (e) {
							rc(t, t.return, e);
						}
				}
				function du(e, t) {
					var n = (function (e) {
						switch (e.tag) {
							case 13:
							case 19:
								var t = e.stateNode;
								return null === t && (t = e.stateNode = new tu()), t;
							case 22:
								return (
									null === (t = (e = e.stateNode)._retryCache) &&
										(t = e._retryCache = new tu()),
									t
								);
							default:
								throw Error(i(435, e.tag));
						}
					})(e);
					t.forEach(function (t) {
						var r = uc.bind(null, e, t);
						n.has(t) || (n.add(t), t.then(r, r));
					});
				}
				function fu(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var r = 0; r < n.length; r++) {
							var a = n[r],
								l = e,
								o = t,
								u = o;
							e: for (; null !== u; ) {
								switch (u.tag) {
									case 27:
									case 5:
										(ou = u.stateNode), (iu = !1);
										break e;
									case 3:
									case 4:
										(ou = u.stateNode.containerInfo), (iu = !0);
										break e;
								}
								u = u.return;
							}
							if (null === ou) throw Error(i(160));
							su(l, o, a),
								(ou = null),
								(iu = !1),
								null !== (l = a.alternate) && (l.return = null),
								(a.return = null);
						}
					if (13878 & t.subtreeFlags)
						for (t = t.child; null !== t; ) pu(t, e), (t = t.sibling);
				}
				var mu = null;
				function pu(e, t) {
					var n = e.alternate,
						r = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							fu(t, e),
								hu(e),
								4 & r && (Bi(3, e, e.return), ji(3, e), Bi(5, e, e.return));
							break;
						case 1:
							fu(t, e),
								hu(e),
								512 & r && (Zi || null === n || Vi(n, n.return)),
								64 & r &&
									Ji &&
									null !== (e = e.updateQueue) &&
									null !== (r = e.callbacks) &&
									((n = e.shared.hiddenCallbacks),
									(e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
							break;
						case 26:
							var a = mu;
							if (
								(fu(t, e),
								hu(e),
								512 & r && (Zi || null === n || Vi(n, n.return)),
								4 & r)
							) {
								var l = null !== n ? n.memoizedState : null;
								if (((r = e.memoizedState), null === n))
									if (null === r)
										if (null === e.stateNode) {
											e: {
												(r = e.type),
													(n = e.memoizedProps),
													(a = a.ownerDocument || a);
												t: switch (r) {
													case "title":
														(!(l = a.getElementsByTagName("title")[0]) ||
															l[Ve] ||
															l[Ie] ||
															"http://www.w3.org/2000/svg" === l.namespaceURI ||
															l.hasAttribute("itemprop")) &&
															((l = a.createElement(r)),
															a.head.insertBefore(
																l,
																a.querySelector("head > title")
															)),
															qc(l, r, n),
															(l[Ie] = e),
															Xe(l),
															(r = l);
														break e;
													case "link":
														var o = Ad("link", "href", a).get(
															r + (n.href || "")
														);
														if (o)
															for (var u = 0; u < o.length; u++)
																if (
																	(l = o[u]).getAttribute("href") ===
																		(null == n.href ? null : n.href) &&
																	l.getAttribute("rel") ===
																		(null == n.rel ? null : n.rel) &&
																	l.getAttribute("title") ===
																		(null == n.title ? null : n.title) &&
																	l.getAttribute("crossorigin") ===
																		(null == n.crossOrigin
																			? null
																			: n.crossOrigin)
																) {
																	o.splice(u, 1);
																	break t;
																}
														qc((l = a.createElement(r)), r, n),
															a.head.appendChild(l);
														break;
													case "meta":
														if (
															(o = Ad("meta", "content", a).get(
																r + (n.content || "")
															))
														)
															for (u = 0; u < o.length; u++)
																if (
																	(l = o[u]).getAttribute("content") ===
																		(null == n.content
																			? null
																			: "" + n.content) &&
																	l.getAttribute("name") ===
																		(null == n.name ? null : n.name) &&
																	l.getAttribute("property") ===
																		(null == n.property ? null : n.property) &&
																	l.getAttribute("http-equiv") ===
																		(null == n.httpEquiv
																			? null
																			: n.httpEquiv) &&
																	l.getAttribute("charset") ===
																		(null == n.charSet ? null : n.charSet)
																) {
																	o.splice(u, 1);
																	break t;
																}
														qc((l = a.createElement(r)), r, n),
															a.head.appendChild(l);
														break;
													default:
														throw Error(i(468, r));
												}
												(l[Ie] = e), Xe(l), (r = l);
											}
											e.stateNode = r;
										} else Pd(a, e.type, e.stateNode);
									else e.stateNode = Sd(a, r, e.memoizedProps);
								else
									l !== r
										? (null === l
												? null !== n.stateNode &&
												  (n = n.stateNode).parentNode.removeChild(n)
												: l.count--,
										  null === r
												? Pd(a, e.type, e.stateNode)
												: Sd(a, r, e.memoizedProps))
										: null === r &&
										  null !== e.stateNode &&
										  Gi(e, e.memoizedProps, n.memoizedProps);
							}
							break;
						case 27:
							if (4 & r && null === e.alternate) {
								(a = e.stateNode), (l = e.memoizedProps);
								try {
									for (var s = a.firstChild; s; ) {
										var c = s.nextSibling,
											d = s.nodeName;
										s[Ve] ||
											"HEAD" === d ||
											"BODY" === d ||
											"SCRIPT" === d ||
											"STYLE" === d ||
											("LINK" === d && "stylesheet" === s.rel.toLowerCase()) ||
											a.removeChild(s),
											(s = c);
									}
									for (var f = e.type, m = a.attributes; m.length; )
										a.removeAttributeNode(m[0]);
									qc(a, f, l), (a[Ie] = e), (a[$e] = l);
								} catch (t) {
									rc(e, e.return, t);
								}
							}
						case 5:
							if (
								(fu(t, e),
								hu(e),
								512 & r && (Zi || null === n || Vi(n, n.return)),
								32 & e.flags)
							) {
								a = e.stateNode;
								try {
									St(a, "");
								} catch (t) {
									rc(e, e.return, t);
								}
							}
							4 & r &&
								null != e.stateNode &&
								Gi(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
								1024 & r && (eu = !0);
							break;
						case 6:
							if ((fu(t, e), hu(e), 4 & r)) {
								if (null === e.stateNode) throw Error(i(162));
								(r = e.memoizedProps), (n = e.stateNode);
								try {
									n.nodeValue = r;
								} catch (t) {
									rc(e, e.return, t);
								}
							}
							break;
						case 3:
							if (
								((xd = null),
								(a = mu),
								(mu = fd(t.containerInfo)),
								fu(t, e),
								(mu = a),
								hu(e),
								4 & r && null !== n && n.memoizedState.isDehydrated)
							)
								try {
									pf(t.containerInfo);
								} catch (t) {
									rc(e, e.return, t);
								}
							eu && ((eu = !1), gu(e));
							break;
						case 4:
							(r = mu),
								(mu = fd(e.stateNode.containerInfo)),
								fu(t, e),
								hu(e),
								(mu = r);
							break;
						case 12:
							fu(t, e), hu(e);
							break;
						case 13:
							fu(t, e),
								hu(e),
								8192 & e.child.flags &&
									(null !== e.memoizedState) !=
										(null !== n && null !== n.memoizedState) &&
									(vs = ue()),
								4 & r &&
									null !== (r = e.updateQueue) &&
									((e.updateQueue = null), du(e, r));
							break;
						case 22:
							if (
								(512 & r && (Zi || null === n || Vi(n, n.return)),
								(s = null !== e.memoizedState),
								(c = null !== n && null !== n.memoizedState),
								(Ji = (d = Ji) || s),
								(Zi = (f = Zi) || c),
								fu(t, e),
								(Zi = f),
								(Ji = d),
								hu(e),
								((t = e.stateNode)._current = e),
								(t._visibility &= -3),
								(t._visibility |= 2 & t._pendingVisibility),
								8192 & r &&
									((t._visibility = s ? -2 & t._visibility : 1 | t._visibility),
									s && ((t = Ji || Zi), null === n || c || t || bu(e)),
									null === e.memoizedProps ||
										"manual" !== e.memoizedProps.mode))
							)
								e: for (n = null, t = e; ; ) {
									if (5 === t.tag || 26 === t.tag || 27 === t.tag) {
										if (null === n) {
											c = n = t;
											try {
												if (((a = c.stateNode), s))
													"function" == typeof (l = a.style).setProperty
														? l.setProperty("display", "none", "important")
														: (l.display = "none");
												else {
													o = c.stateNode;
													var p =
														null != (u = c.memoizedProps.style) &&
														u.hasOwnProperty("display")
															? u.display
															: null;
													o.style.display =
														null == p || "boolean" == typeof p
															? ""
															: ("" + p).trim();
												}
											} catch (e) {
												rc(c, c.return, e);
											}
										}
									} else if (6 === t.tag) {
										if (null === n) {
											c = t;
											try {
												c.stateNode.nodeValue = s ? "" : c.memoizedProps;
											} catch (e) {
												rc(c, c.return, e);
											}
										}
									} else if (
										((22 !== t.tag && 23 !== t.tag) ||
											null === t.memoizedState ||
											t === e) &&
										null !== t.child
									) {
										(t.child.return = t), (t = t.child);
										continue;
									}
									if (t === e) break e;
									for (; null === t.sibling; ) {
										if (null === t.return || t.return === e) break e;
										n === t && (n = null), (t = t.return);
									}
									n === t && (n = null),
										(t.sibling.return = t.return),
										(t = t.sibling);
								}
							4 & r &&
								null !== (r = e.updateQueue) &&
								null !== (n = r.retryQueue) &&
								((r.retryQueue = null), du(e, n));
							break;
						case 19:
							fu(t, e),
								hu(e),
								4 & r &&
									null !== (r = e.updateQueue) &&
									((e.updateQueue = null), du(e, r));
							break;
						case 21:
							break;
						default:
							fu(t, e), hu(e);
					}
				}
				function hu(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							if (27 !== e.tag) {
								e: {
									for (var n = e.return; null !== n; ) {
										if (Qi(n)) {
											var r = n;
											break e;
										}
										n = n.return;
									}
									throw Error(i(160));
								}
								switch (r.tag) {
									case 27:
										var a = r.stateNode;
										Xi(e, Ki(e), a);
										break;
									case 5:
										var l = r.stateNode;
										32 & r.flags && (St(l, ""), (r.flags &= -33)),
											Xi(e, Ki(e), l);
										break;
									case 3:
									case 4:
										var o = r.stateNode.containerInfo;
										Yi(e, Ki(e), o);
										break;
									default:
										throw Error(i(161));
								}
							}
						} catch (t) {
							rc(e, e.return, t);
						}
						e.flags &= -3;
					}
					4096 & t && (e.flags &= -4097);
				}
				function gu(e) {
					if (1024 & e.subtreeFlags)
						for (e = e.child; null !== e; ) {
							var t = e;
							gu(t),
								5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
								(e = e.sibling);
						}
				}
				function yu(e, t) {
					if (8772 & t.subtreeFlags)
						for (t = t.child; null !== t; )
							au(e, t.alternate, t), (t = t.sibling);
				}
				function bu(e) {
					for (e = e.child; null !== e; ) {
						var t = e;
						switch (t.tag) {
							case 0:
							case 11:
							case 14:
							case 15:
								Bi(4, t, t.return), bu(t);
								break;
							case 1:
								Vi(t, t.return);
								var n = t.stateNode;
								"function" == typeof n.componentWillUnmount &&
									Hi(t, t.return, n),
									bu(t);
								break;
							case 26:
							case 27:
							case 5:
								Vi(t, t.return), bu(t);
								break;
							case 22:
								Vi(t, t.return), null === t.memoizedState && bu(t);
								break;
							default:
								bu(t);
						}
						e = e.sibling;
					}
				}
				function vu(e, t, n) {
					for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
						var r = t.alternate,
							a = e,
							l = t,
							o = l.flags;
						switch (l.tag) {
							case 0:
							case 11:
							case 15:
								vu(a, l, n), ji(4, l);
								break;
							case 1:
								if (
									(vu(a, l, n),
									"function" ==
										typeof (a = (r = l).stateNode).componentDidMount)
								)
									try {
										a.componentDidMount();
									} catch (e) {
										rc(r, r.return, e);
									}
								if (null !== (a = (r = l).updateQueue)) {
									var i = r.stateNode;
									try {
										var u = a.shared.hiddenCallbacks;
										if (null !== u)
											for (
												a.shared.hiddenCallbacks = null, a = 0;
												a < u.length;
												a++
											)
												Ii(u[a], i);
									} catch (e) {
										rc(r, r.return, e);
									}
								}
								n && 64 & o && Ui(l), Wi(l, l.return);
								break;
							case 26:
							case 27:
							case 5:
								vu(a, l, n), n && null === r && 4 & o && qi(l), Wi(l, l.return);
								break;
							case 12:
							default:
								vu(a, l, n);
								break;
							case 13:
								vu(a, l, n), n && 4 & o && cu(a, l);
								break;
							case 22:
								null === l.memoizedState && vu(a, l, n), Wi(l, l.return);
						}
						t = t.sibling;
					}
				}
				function wu(e, t) {
					var n = null;
					null !== e &&
						null !== e.memoizedState &&
						null !== e.memoizedState.cachePool &&
						(n = e.memoizedState.cachePool.pool),
						(e = null),
						null !== t.memoizedState &&
							null !== t.memoizedState.cachePool &&
							(e = t.memoizedState.cachePool.pool),
						e !== n && (null != e && e.refCount++, null != n && Ba(n));
				}
				function Eu(e, t) {
					(e = null),
						null !== t.alternate && (e = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache) !== e &&
							(t.refCount++, null != e && Ba(e));
				}
				function Su(e, t, n, r) {
					if (10256 & t.subtreeFlags)
						for (t = t.child; null !== t; ) ku(e, t, n, r), (t = t.sibling);
				}
				function ku(e, t, n, r) {
					var a = t.flags;
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							Su(e, t, n, r), 2048 & a && ji(9, t);
							break;
						case 3:
							Su(e, t, n, r),
								2048 & a &&
									((e = null),
									null !== t.alternate && (e = t.alternate.memoizedState.cache),
									(t = t.memoizedState.cache) !== e &&
										(t.refCount++, null != e && Ba(e)));
							break;
						case 12:
							if (2048 & a) {
								Su(e, t, n, r), (e = t.stateNode);
								try {
									var l = t.memoizedProps,
										o = l.id,
										i = l.onPostCommit;
									"function" == typeof i &&
										i(
											o,
											null === t.alternate ? "mount" : "update",
											e.passiveEffectDuration,
											-0
										);
								} catch (e) {
									rc(t, t.return, e);
								}
							} else Su(e, t, n, r);
							break;
						case 23:
							break;
						case 22:
							(l = t.stateNode),
								null !== t.memoizedState
									? 4 & l._visibility
										? Su(e, t, n, r)
										: Nu(e, t)
									: 4 & l._visibility
									? Su(e, t, n, r)
									: ((l._visibility |= 4),
									  Cu(e, t, n, r, !!(10256 & t.subtreeFlags))),
								2048 & a && wu(t.alternate, t);
							break;
						case 24:
							Su(e, t, n, r), 2048 & a && Eu(t.alternate, t);
							break;
						default:
							Su(e, t, n, r);
					}
				}
				function Cu(e, t, n, r, a) {
					for (a = a && !!(10256 & t.subtreeFlags), t = t.child; null !== t; ) {
						var l = e,
							o = t,
							i = n,
							u = r,
							s = o.flags;
						switch (o.tag) {
							case 0:
							case 11:
							case 15:
								Cu(l, o, i, u, a), ji(8, o);
								break;
							case 23:
								break;
							case 22:
								var c = o.stateNode;
								null !== o.memoizedState
									? 4 & c._visibility
										? Cu(l, o, i, u, a)
										: Nu(l, o)
									: ((c._visibility |= 4), Cu(l, o, i, u, a)),
									a && 2048 & s && wu(o.alternate, o);
								break;
							case 24:
								Cu(l, o, i, u, a), a && 2048 & s && Eu(o.alternate, o);
								break;
							default:
								Cu(l, o, i, u, a);
						}
						t = t.sibling;
					}
				}
				function Nu(e, t) {
					if (10256 & t.subtreeFlags)
						for (t = t.child; null !== t; ) {
							var n = e,
								r = t,
								a = r.flags;
							switch (r.tag) {
								case 22:
									Nu(n, r), 2048 & a && wu(r.alternate, r);
									break;
								case 24:
									Nu(n, r), 2048 & a && Eu(r.alternate, r);
									break;
								default:
									Nu(n, r);
							}
							t = t.sibling;
						}
				}
				var xu = 8192;
				function Au(e) {
					if (e.subtreeFlags & xu)
						for (e = e.child; null !== e; ) Pu(e), (e = e.sibling);
				}
				function Pu(e) {
					switch (e.tag) {
						case 26:
							Au(e),
								e.flags & xu &&
									null !== e.memoizedState &&
									(function (e, t, n) {
										if (null === _d) throw Error(i(475));
										var a = _d;
										if (
											!(
												"stylesheet" !== t.type ||
												("string" == typeof n.media &&
													!1 === matchMedia(n.media).matches) ||
												4 & t.state.loading
											)
										) {
											if (null === t.instance) {
												var l = yd(n.href),
													o = e.querySelector(bd(l));
												if (o)
													return (
														null !== (e = o._p) &&
															"object" === r(e) &&
															"function" == typeof e.then &&
															(a.count++, (a = zd.bind(a)), e.then(a, a)),
														(t.state.loading |= 4),
														(t.instance = o),
														void Xe(o)
													);
												(o = e.ownerDocument || e),
													(n = vd(n)),
													(l = cd.get(l)) && Cd(n, l),
													Xe((o = o.createElement("link")));
												var u = o;
												(u._p = new Promise(function (e, t) {
													(u.onload = e), (u.onerror = t);
												})),
													qc(o, "link", n),
													(t.instance = o);
											}
											null === a.stylesheets && (a.stylesheets = new Map()),
												a.stylesheets.set(t, e),
												(e = t.state.preload) &&
													!(3 & t.state.loading) &&
													(a.count++,
													(t = zd.bind(a)),
													e.addEventListener("load", t),
													e.addEventListener("error", t));
										}
									})(mu, e.memoizedState, e.memoizedProps);
							break;
						case 5:
						default:
							Au(e);
							break;
						case 3:
						case 4:
							var t = mu;
							(mu = fd(e.stateNode.containerInfo)), Au(e), (mu = t);
							break;
						case 22:
							null === e.memoizedState &&
								(null !== (t = e.alternate) && null !== t.memoizedState
									? ((t = xu), (xu = 16777216), Au(e), (xu = t))
									: Au(e));
					}
				}
				function Tu(e) {
					var t = e.alternate;
					if (null !== t && null !== (e = t.child)) {
						t.child = null;
						do {
							(t = e.sibling), (e.sibling = null), (e = t);
						} while (null !== e);
					}
				}
				function _u(e) {
					var t = e.deletions;
					if (16 & e.flags) {
						if (null !== t)
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								(nu = r), Ou(r, e);
							}
						Tu(e);
					}
					if (10256 & e.subtreeFlags)
						for (e = e.child; null !== e; ) Lu(e), (e = e.sibling);
				}
				function Lu(e) {
					switch (e.tag) {
						case 0:
						case 11:
						case 15:
							_u(e), 2048 & e.flags && Bi(9, e, e.return);
							break;
						case 3:
						case 12:
						default:
							_u(e);
							break;
						case 22:
							var t = e.stateNode;
							null !== e.memoizedState &&
							4 & t._visibility &&
							(null === e.return || 13 !== e.return.tag)
								? ((t._visibility &= -5), zu(e))
								: _u(e);
					}
				}
				function zu(e) {
					var t = e.deletions;
					if (16 & e.flags) {
						if (null !== t)
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								(nu = r), Ou(r, e);
							}
						Tu(e);
					}
					for (e = e.child; null !== e; ) {
						switch ((t = e).tag) {
							case 0:
							case 11:
							case 15:
								Bi(8, t, t.return), zu(t);
								break;
							case 22:
								4 & (n = t.stateNode)._visibility &&
									((n._visibility &= -5), zu(t));
								break;
							default:
								zu(t);
						}
						e = e.sibling;
					}
				}
				function Ou(e, t) {
					for (; null !== nu; ) {
						var n = nu;
						switch (n.tag) {
							case 0:
							case 11:
							case 15:
								Bi(8, n, t);
								break;
							case 23:
							case 22:
								if (
									null !== n.memoizedState &&
									null !== n.memoizedState.cachePool
								) {
									var r = n.memoizedState.cachePool.pool;
									null != r && r.refCount++;
								}
								break;
							case 24:
								Ba(n.memoizedState.cache);
						}
						if (null !== (r = n.child)) (r.return = n), (nu = r);
						else
							e: for (n = e; null !== nu; ) {
								var a = (r = nu).sibling,
									l = r.return;
								if ((lu(r), r === n)) {
									nu = null;
									break e;
								}
								if (null !== a) {
									(a.return = l), (nu = a);
									break e;
								}
								nu = l;
							}
					}
				}
				function Ru(e, t, n, r) {
					(this.tag = e),
						(this.key = n),
						(this.sibling =
							this.child =
							this.return =
							this.stateNode =
							this.type =
							this.elementType =
								null),
						(this.index = 0),
						(this.refCleanup = this.ref = null),
						(this.pendingProps = t),
						(this.dependencies =
							this.memoizedState =
							this.updateQueue =
							this.memoizedProps =
								null),
						(this.mode = r),
						(this.subtreeFlags = this.flags = 0),
						(this.deletions = null),
						(this.childLanes = this.lanes = 0),
						(this.alternate = null);
				}
				function Fu(e, t, n, r) {
					return new Ru(e, t, n, r);
				}
				function Mu(e) {
					return !(!(e = e.prototype) || !e.isReactComponent);
				}
				function Du(e, t) {
					var n = e.alternate;
					return (
						null === n
							? (((n = Fu(e.tag, t, e.key, e.mode)).elementType =
									e.elementType),
							  (n.type = e.type),
							  (n.stateNode = e.stateNode),
							  (n.alternate = e),
							  (e.alternate = n))
							: ((n.pendingProps = t),
							  (n.type = e.type),
							  (n.flags = 0),
							  (n.subtreeFlags = 0),
							  (n.deletions = null)),
						(n.flags = 31457280 & e.flags),
						(n.childLanes = e.childLanes),
						(n.lanes = e.lanes),
						(n.child = e.child),
						(n.memoizedProps = e.memoizedProps),
						(n.memoizedState = e.memoizedState),
						(n.updateQueue = e.updateQueue),
						(t = e.dependencies),
						(n.dependencies =
							null === t
								? null
								: { lanes: t.lanes, firstContext: t.firstContext }),
						(n.sibling = e.sibling),
						(n.index = e.index),
						(n.ref = e.ref),
						(n.refCleanup = e.refCleanup),
						n
					);
				}
				function Iu(e, t) {
					e.flags &= 31457282;
					var n = e.alternate;
					return (
						null === n
							? ((e.childLanes = 0),
							  (e.lanes = t),
							  (e.child = null),
							  (e.subtreeFlags = 0),
							  (e.memoizedProps = null),
							  (e.memoizedState = null),
							  (e.updateQueue = null),
							  (e.dependencies = null),
							  (e.stateNode = null))
							: ((e.childLanes = n.childLanes),
							  (e.lanes = n.lanes),
							  (e.child = n.child),
							  (e.subtreeFlags = 0),
							  (e.deletions = null),
							  (e.memoizedProps = n.memoizedProps),
							  (e.memoizedState = n.memoizedState),
							  (e.updateQueue = n.updateQueue),
							  (e.type = n.type),
							  (t = n.dependencies),
							  (e.dependencies =
									null === t
										? null
										: { lanes: t.lanes, firstContext: t.firstContext })),
						e
					);
				}
				function $u(e, t, n, a, l, o) {
					var u = 0;
					if (((a = e), "function" == typeof e)) Mu(e) && (u = 1);
					else if ("string" == typeof e)
						u = (function (e, t, n) {
							if (1 === n || null != t.itemProp) return !1;
							switch (e) {
								case "meta":
								case "title":
									return !0;
								case "style":
									if (
										"string" != typeof t.precedence ||
										"string" != typeof t.href ||
										"" === t.href
									)
										break;
									return !0;
								case "link":
									if (
										"string" != typeof t.rel ||
										"string" != typeof t.href ||
										"" === t.href ||
										t.onLoad ||
										t.onError
									)
										break;
									return (
										"stylesheet" !== t.rel ||
										((e = t.disabled),
										"string" == typeof t.precedence && null == e)
									);
								case "script":
									if (
										t.async &&
										"function" != typeof t.async &&
										"symbol" !== r(t.async) &&
										!t.onLoad &&
										!t.onError &&
										t.src &&
										"string" == typeof t.src
									)
										return !0;
							}
							return !1;
						})(e, n, K.current)
							? 26
							: "html" === e || "head" === e || "body" === e
							? 27
							: 5;
					else
						e: switch (e) {
							case d:
								return ju(n.children, l, o, t);
							case f:
								(u = 8), (l |= 24);
								break;
							case m:
								return (
									((e = Fu(12, n, t, 2 | l)).elementType = m), (e.lanes = o), e
								);
							case b:
								return (
									((e = Fu(13, n, t, l)).elementType = b), (e.lanes = o), e
								);
							case v:
								return (
									((e = Fu(19, n, t, l)).elementType = v), (e.lanes = o), e
								);
							case S:
								return Bu(n, l, o, t);
							default:
								if ("object" === r(e) && null !== e)
									switch (e.$$typeof) {
										case p:
										case g:
											u = 10;
											break e;
										case h:
											u = 9;
											break e;
										case y:
											u = 11;
											break e;
										case w:
											u = 14;
											break e;
										case E:
											(u = 16), (a = null);
											break e;
									}
								(u = 29),
									(n = Error(i(130, null === e ? "null" : r(e), ""))),
									(a = null);
						}
					return (
						((t = Fu(u, n, t, l)).elementType = e),
						(t.type = a),
						(t.lanes = o),
						t
					);
				}
				function ju(e, t, n, r) {
					return ((e = Fu(7, e, r, t)).lanes = n), e;
				}
				function Bu(e, t, n, r) {
					((e = Fu(22, e, r, t)).elementType = S), (e.lanes = n);
					var a = {
						_visibility: 1,
						_pendingVisibility: 1,
						_pendingMarkers: null,
						_retryCache: null,
						_transitions: null,
						_current: null,
						detach: function () {
							var e = a._current;
							if (null === e) throw Error(i(456));
							if (!(2 & a._pendingVisibility)) {
								var t = Tr(e, 2);
								null !== t && ((a._pendingVisibility |= 2), zs(t, 0, 2));
							}
						},
						attach: function () {
							var e = a._current;
							if (null === e) throw Error(i(456));
							if (2 & a._pendingVisibility) {
								var t = Tr(e, 2);
								null !== t && ((a._pendingVisibility &= -3), zs(t, 0, 2));
							}
						},
					};
					return (e.stateNode = a), e;
				}
				function Uu(e, t, n) {
					return ((e = Fu(6, e, null, t)).lanes = n), e;
				}
				function Hu(e, t, n) {
					return (
						((t = Fu(
							4,
							null !== e.children ? e.children : [],
							e.key,
							t
						)).lanes = n),
						(t.stateNode = {
							containerInfo: e.containerInfo,
							pendingChildren: null,
							implementation: e.implementation,
						}),
						t
					);
				}
				function Wu(e) {
					e.flags |= 4;
				}
				function Vu(e, t) {
					if ("stylesheet" !== t.type || 4 & t.state.loading)
						e.flags &= -16777217;
					else if (((e.flags |= 16777216), !Td(t))) {
						if (
							null !== (t = Pa.current) &&
							((4194176 & rs) === rs
								? null !== Ta
								: ((62914560 & rs) !== rs && !(536870912 & rs)) || t !== Ta)
						)
							throw ((fa = ua), ia);
						e.flags |= 8192;
					}
				}
				function qu(e, t) {
					null !== t && (e.flags |= 4),
						16384 & e.flags &&
							((t = 22 !== e.tag ? _e() : 536870912),
							(e.lanes |= t),
							(hs |= t));
				}
				function Gu(e, t) {
					if (!Yr)
						switch (e.tailMode) {
							case "hidden":
								t = e.tail;
								for (var n = null; null !== t; )
									null !== t.alternate && (n = t), (t = t.sibling);
								null === n ? (e.tail = null) : (n.sibling = null);
								break;
							case "collapsed":
								n = e.tail;
								for (var r = null; null !== n; )
									null !== n.alternate && (r = n), (n = n.sibling);
								null === r
									? t || null === e.tail
										? (e.tail = null)
										: (e.tail.sibling = null)
									: (r.sibling = null);
						}
				}
				function Qu(e) {
					var t = null !== e.alternate && e.alternate.child === e.child,
						n = 0,
						r = 0;
					if (t)
						for (var a = e.child; null !== a; )
							(n |= a.lanes | a.childLanes),
								(r |= 31457280 & a.subtreeFlags),
								(r |= 31457280 & a.flags),
								(a.return = e),
								(a = a.sibling);
					else
						for (a = e.child; null !== a; )
							(n |= a.lanes | a.childLanes),
								(r |= a.subtreeFlags),
								(r |= a.flags),
								(a.return = e),
								(a = a.sibling);
					return (e.subtreeFlags |= r), (e.childLanes = n), t;
				}
				function Ku(e, t, n) {
					var r = t.pendingProps;
					switch ((Gr(t), t.tag)) {
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
						case 1:
							return Qu(t), null;
						case 3:
							return (
								(n = t.stateNode),
								(r = null),
								null !== e && (r = e.memoizedState.cache),
								t.memoizedState.cache !== r && (t.flags |= 2048),
								vi($a),
								ee(),
								n.pendingContext &&
									((n.context = n.pendingContext), (n.pendingContext = null)),
								(null !== e && null !== e.child) ||
									(ra(t)
										? Wu(t)
										: null === e ||
										  (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
										  ((t.flags |= 1024),
										  null !== Xr && (Rs(Xr), (Xr = null)))),
								Qu(t),
								null
							);
						case 26:
							return (
								(n = t.memoizedState),
								null === e
									? (Wu(t),
									  null !== n
											? (Qu(t), Vu(t, n))
											: (Qu(t), (t.flags &= -16777217)))
									: n
									? n !== e.memoizedState
										? (Wu(t), Qu(t), Vu(t, n))
										: (Qu(t), (t.flags &= -16777217))
									: (e.memoizedProps !== r && Wu(t),
									  Qu(t),
									  (t.flags &= -16777217)),
								null
							);
						case 27:
							ne(t), (n = X.current);
							var a = t.type;
							if (null !== e && null != t.stateNode)
								e.memoizedProps !== r && Wu(t);
							else {
								if (!r) {
									if (null === t.stateNode) throw Error(i(166));
									return Qu(t), null;
								}
								(e = K.current),
									ra(t) ? ta(t) : ((e = sd(a, r, n)), (t.stateNode = e), Wu(t));
							}
							return Qu(t), null;
						case 5:
							if ((ne(t), (n = t.type), null !== e && null != t.stateNode))
								e.memoizedProps !== r && Wu(t);
							else {
								if (!r) {
									if (null === t.stateNode) throw Error(i(166));
									return Qu(t), null;
								}
								if (((e = K.current), ra(t))) ta(t);
								else {
									switch (((a = Kc(X.current)), e)) {
										case 1:
											e = a.createElementNS("http://www.w3.org/2000/svg", n);
											break;
										case 2:
											e = a.createElementNS(
												"http://www.w3.org/1998/Math/MathML",
												n
											);
											break;
										default:
											switch (n) {
												case "svg":
													e = a.createElementNS(
														"http://www.w3.org/2000/svg",
														n
													);
													break;
												case "math":
													e = a.createElementNS(
														"http://www.w3.org/1998/Math/MathML",
														n
													);
													break;
												case "script":
													((e = a.createElement("div")).innerHTML =
														"<script></script>"),
														(e = e.removeChild(e.firstChild));
													break;
												case "select":
													(e =
														"string" == typeof r.is
															? a.createElement("select", { is: r.is })
															: a.createElement("select")),
														r.multiple
															? (e.multiple = !0)
															: r.size && (e.size = r.size);
													break;
												default:
													e =
														"string" == typeof r.is
															? a.createElement(n, { is: r.is })
															: a.createElement(n);
											}
									}
									(e[Ie] = t), (e[$e] = r);
									e: for (a = t.child; null !== a; ) {
										if (5 === a.tag || 6 === a.tag) e.appendChild(a.stateNode);
										else if (4 !== a.tag && 27 !== a.tag && null !== a.child) {
											(a.child.return = a), (a = a.child);
											continue;
										}
										if (a === t) break e;
										for (; null === a.sibling; ) {
											if (null === a.return || a.return === t) break e;
											a = a.return;
										}
										(a.sibling.return = a.return), (a = a.sibling);
									}
									t.stateNode = e;
									e: switch ((qc(e, n, r), n)) {
										case "button":
										case "input":
										case "select":
										case "textarea":
											e = !!r.autoFocus;
											break e;
										case "img":
											e = !0;
											break e;
										default:
											e = !1;
									}
									e && Wu(t);
								}
							}
							return Qu(t), (t.flags &= -16777217), null;
						case 6:
							if (e && null != t.stateNode) e.memoizedProps !== r && Wu(t);
							else {
								if ("string" != typeof r && null === t.stateNode)
									throw Error(i(166));
								if (((e = X.current), ra(t))) {
									if (
										((e = t.stateNode),
										(n = t.memoizedProps),
										(r = null),
										null !== (a = Qr))
									)
										switch (a.tag) {
											case 27:
											case 5:
												r = a.memoizedProps;
										}
									(e[Ie] = t),
										(e = !!(
											e.nodeValue === n ||
											(null !== r && !0 === r.suppressHydrationWarning) ||
											Uc(e.nodeValue, n)
										)) || ea(t);
								} else
									((e = Kc(e).createTextNode(r))[Ie] = t), (t.stateNode = e);
							}
							return Qu(t), null;
						case 13:
							if (
								((r = t.memoizedState),
								null === e ||
									(null !== e.memoizedState &&
										null !== e.memoizedState.dehydrated))
							) {
								if (((a = ra(t)), null !== r && null !== r.dehydrated)) {
									if (null === e) {
										if (!a) throw Error(i(318));
										if (
											!(a =
												null !== (a = t.memoizedState) ? a.dehydrated : null)
										)
											throw Error(i(317));
										a[Ie] = t;
									} else
										aa(),
											!(128 & t.flags) && (t.memoizedState = null),
											(t.flags |= 4);
									Qu(t), (a = !1);
								} else null !== Xr && (Rs(Xr), (Xr = null)), (a = !0);
								if (!a) return 256 & t.flags ? (Oa(t), t) : (Oa(t), null);
							}
							if ((Oa(t), 128 & t.flags)) return (t.lanes = n), t;
							if (
								((n = null !== r),
								(e = null !== e && null !== e.memoizedState),
								n)
							) {
								(a = null),
									null !== (r = t.child).alternate &&
										null !== r.alternate.memoizedState &&
										null !== r.alternate.memoizedState.cachePool &&
										(a = r.alternate.memoizedState.cachePool.pool);
								var l = null;
								null !== r.memoizedState &&
									null !== r.memoizedState.cachePool &&
									(l = r.memoizedState.cachePool.pool),
									l !== a && (r.flags |= 2048);
							}
							return (
								n !== e && n && (t.child.flags |= 8192),
								qu(t, t.updateQueue),
								Qu(t),
								null
							);
						case 4:
							return (
								ee(), null === e && zc(t.stateNode.containerInfo), Qu(t), null
							);
						case 10:
							return vi(t.type), Qu(t), null;
						case 19:
							if ((G(Ra), null === (a = t.memoizedState))) return Qu(t), null;
							if (((r = !!(128 & t.flags)), null === (l = a.rendering)))
								if (r) Gu(a, !1);
								else {
									if (0 !== cs || (null !== e && 128 & e.flags))
										for (e = t.child; null !== e; ) {
											if (null !== (l = Fa(e))) {
												for (
													t.flags |= 128,
														Gu(a, !1),
														e = l.updateQueue,
														t.updateQueue = e,
														qu(t, e),
														t.subtreeFlags = 0,
														e = n,
														n = t.child;
													null !== n;

												)
													Iu(n, e), (n = n.sibling);
												return Q(Ra, (1 & Ra.current) | 2), t.child;
											}
											e = e.sibling;
										}
									null !== a.tail &&
										ue() > ws &&
										((t.flags |= 128),
										(r = !0),
										Gu(a, !1),
										(t.lanes = 4194304));
								}
							else {
								if (!r)
									if (null !== (e = Fa(l))) {
										if (
											((t.flags |= 128),
											(r = !0),
											(e = e.updateQueue),
											(t.updateQueue = e),
											qu(t, e),
											Gu(a, !0),
											null === a.tail &&
												"hidden" === a.tailMode &&
												!l.alternate &&
												!Yr)
										)
											return Qu(t), null;
									} else
										2 * ue() - a.renderingStartTime > ws &&
											536870912 !== n &&
											((t.flags |= 128),
											(r = !0),
											Gu(a, !1),
											(t.lanes = 4194304));
								a.isBackwards
									? ((l.sibling = t.child), (t.child = l))
									: (null !== (e = a.last) ? (e.sibling = l) : (t.child = l),
									  (a.last = l));
							}
							return null !== a.tail
								? ((t = a.tail),
								  (a.rendering = t),
								  (a.tail = t.sibling),
								  (a.renderingStartTime = ue()),
								  (t.sibling = null),
								  (e = Ra.current),
								  Q(Ra, r ? (1 & e) | 2 : 1 & e),
								  t)
								: (Qu(t), null);
						case 22:
						case 23:
							return (
								Oa(t),
								Aa(),
								(r = null !== t.memoizedState),
								null !== e
									? (null !== e.memoizedState) !== r && (t.flags |= 8192)
									: r && (t.flags |= 8192),
								r
									? !!(536870912 & n) &&
									  !(128 & t.flags) &&
									  (Qu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
									: Qu(t),
								null !== (n = t.updateQueue) && qu(t, n.retryQueue),
								(n = null),
								null !== e &&
									null !== e.memoizedState &&
									null !== e.memoizedState.cachePool &&
									(n = e.memoizedState.cachePool.pool),
								(r = null),
								null !== t.memoizedState &&
									null !== t.memoizedState.cachePool &&
									(r = t.memoizedState.cachePool.pool),
								r !== n && (t.flags |= 2048),
								null !== e && G(Qa),
								null
							);
						case 24:
							return (
								(n = null),
								null !== e && (n = e.memoizedState.cache),
								t.memoizedState.cache !== n && (t.flags |= 2048),
								vi($a),
								Qu(t),
								null
							);
						case 25:
							return null;
					}
					throw Error(i(156, t.tag));
				}
				function Yu(e, t) {
					switch ((Gr(t), t.tag)) {
						case 1:
							return 65536 & (e = t.flags)
								? ((t.flags = (-65537 & e) | 128), t)
								: null;
						case 3:
							return (
								vi($a),
								ee(),
								65536 & (e = t.flags) && !(128 & e)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 26:
						case 27:
						case 5:
							return ne(t), null;
						case 13:
							if (
								(Oa(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
							) {
								if (null === t.alternate) throw Error(i(340));
								aa();
							}
							return 65536 & (e = t.flags)
								? ((t.flags = (-65537 & e) | 128), t)
								: null;
						case 19:
							return G(Ra), null;
						case 4:
							return ee(), null;
						case 10:
							return vi(t.type), null;
						case 22:
						case 23:
							return (
								Oa(t),
								Aa(),
								null !== e && G(Qa),
								65536 & (e = t.flags)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 24:
							return vi($a), null;
						default:
							return null;
					}
				}
				function Xu(e, t) {
					switch ((Gr(t), t.tag)) {
						case 3:
							vi($a), ee();
							break;
						case 26:
						case 27:
						case 5:
							ne(t);
							break;
						case 4:
							ee();
							break;
						case 13:
							Oa(t);
							break;
						case 19:
							G(Ra);
							break;
						case 10:
							vi(t.type);
							break;
						case 22:
						case 23:
							Oa(t), Aa(), null !== e && G(Qa);
							break;
						case 24:
							vi($a);
					}
				}
				var Ju = {
						getCacheForType: function (e) {
							var t = Ni($a),
								n = t.data.get(e);
							return void 0 === n && ((n = e()), t.data.set(e, n)), n;
						},
					},
					Zu = "function" == typeof WeakMap ? WeakMap : Map,
					es = 0,
					ts = null,
					ns = null,
					rs = 0,
					as = 0,
					ls = null,
					os = !1,
					is = !1,
					us = !1,
					ss = 0,
					cs = 0,
					ds = 0,
					fs = 0,
					ms = 0,
					ps = 0,
					hs = 0,
					gs = null,
					ys = null,
					bs = !1,
					vs = 0,
					ws = 1 / 0,
					Es = null,
					Ss = null,
					ks = !1,
					Cs = null,
					Ns = 0,
					xs = 0,
					As = null,
					Ps = 0,
					Ts = null;
				function _s() {
					return 2 & es && 0 !== rs
						? rs & -rs
						: null !== _.T
						? 0 !== Wa
							? Wa
							: Ec()
						: Me();
				}
				function Ls() {
					0 === ps && (ps = 536870912 & rs && !Yr ? 536870912 : Te());
					var e = Pa.current;
					return null !== e && (e.flags |= 32), ps;
				}
				function zs(e, t, n) {
					((e === ts && 2 === as) || null !== e.cancelPendingCommit) &&
						(js(e, 0), Ds(e, rs, ps, !1)),
						ze(e, n),
						(2 & es && e === ts) ||
							(e === ts &&
								(!(2 & es) && (fs |= n), 4 === cs && Ds(e, rs, ps, !1)),
							hc(e));
				}
				function Os(e, t, n) {
					if (6 & es) throw Error(i(327));
					for (
						var r = (!n && !(60 & t) && !(t & e.expiredLanes)) || Ae(e, t),
							a = r
								? (function (e, t) {
										var n = es;
										es |= 2;
										var r = Us(),
											a = Hs();
										ts !== e || rs !== t
											? ((Es = null), (ws = ue() + 500), js(e, t))
											: (is = Ae(e, t));
										e: for (;;)
											try {
												if (0 !== as && null !== ns) {
													t = ns;
													var l = ls;
													t: switch (as) {
														case 1:
															(as = 0), (ls = null), Ys(e, t, l, 1);
															break;
														case 2:
															if (sa(l)) {
																(as = 0), (ls = null), Ks(t);
																break;
															}
															(t = function () {
																2 === as && ts === e && (as = 7), hc(e);
															}),
																l.then(t, t);
															break e;
														case 3:
															as = 7;
															break e;
														case 4:
															as = 5;
															break e;
														case 7:
															sa(l)
																? ((as = 0), (ls = null), Ks(t))
																: ((as = 0), (ls = null), Ys(e, t, l, 7));
															break;
														case 5:
															var o = null;
															switch (ns.tag) {
																case 26:
																	o = ns.memoizedState;
																case 5:
																case 27:
																	var u = ns;
																	if (!o || Td(o)) {
																		(as = 0), (ls = null);
																		var s = u.sibling;
																		if (null !== s) ns = s;
																		else {
																			var c = u.return;
																			null !== c
																				? ((ns = c), Xs(c))
																				: (ns = null);
																		}
																		break t;
																	}
															}
															(as = 0), (ls = null), Ys(e, t, l, 5);
															break;
														case 6:
															(as = 0), (ls = null), Ys(e, t, l, 6);
															break;
														case 8:
															$s(), (cs = 6);
															break e;
														default:
															throw Error(i(462));
													}
												}
												Gs();
												break;
											} catch (t) {
												Bs(e, t);
											}
										return (
											(yi = gi = null),
											(_.H = r),
											(_.A = a),
											(es = n),
											null !== ns ? 0 : ((ts = null), (rs = 0), xr(), cs)
										);
								  })(e, t)
								: Vs(e, t, !0),
							l = r;
						;

					) {
						if (0 === a) {
							is && !r && Ds(e, t, 0, !1);
							break;
						}
						if (6 === a) Ds(e, t, 0, !os);
						else {
							if (((n = e.current.alternate), l && !Ms(n))) {
								(a = Vs(e, t, !1)), (l = !1);
								continue;
							}
							if (2 === a) {
								if (((l = t), e.errorRecoveryDisabledLanes & l)) var o = 0;
								else
									o =
										0 != (o = -536870913 & e.pendingLanes)
											? o
											: 536870912 & o
											? 536870912
											: 0;
								if (0 !== o) {
									t = o;
									e: {
										var u = e;
										a = gs;
										var s = u.current.memoizedState.isDehydrated;
										if (
											(s && (js(u, o).flags |= 256), 2 !== (o = Vs(u, o, !1)))
										) {
											if (us && !s) {
												(u.errorRecoveryDisabledLanes |= l), (fs |= l), (a = 4);
												break e;
											}
											(l = ys), (ys = a), null !== l && Rs(l);
										}
										a = o;
									}
									if (((l = !1), 2 !== a)) continue;
								}
							}
							if (1 === a) {
								js(e, 0), Ds(e, t, 0, !0);
								break;
							}
							e: {
								switch (((r = e), a)) {
									case 0:
									case 1:
										throw Error(i(345));
									case 4:
										if ((4194176 & t) === t) {
											Ds(r, t, ps, !os);
											break e;
										}
										break;
									case 2:
										ys = null;
										break;
									case 3:
									case 5:
										break;
									default:
										throw Error(i(329));
								}
								if (
									((r.finishedWork = n),
									(r.finishedLanes = t),
									(62914560 & t) === t && 10 < (l = vs + 300 - ue()))
								) {
									if ((Ds(r, t, ps, !os), 0 !== xe(r, 0))) break e;
									r.timeoutHandle = ed(
										Fs.bind(
											null,
											r,
											n,
											ys,
											Es,
											bs,
											t,
											ps,
											fs,
											hs,
											os,
											2,
											-0,
											0
										),
										l
									);
								} else Fs(r, n, ys, Es, bs, t, ps, fs, hs, os, 0, -0, 0);
							}
						}
						break;
					}
					hc(e);
				}
				function Rs(e) {
					null === ys ? (ys = e) : ys.push.apply(ys, e);
				}
				function Fs(e, t, n, r, a, l, o, u, s, c, d, f, m) {
					var p = t.subtreeFlags;
					if (
						(8192 & p || !(16785408 & ~p)) &&
						((_d = { stylesheets: null, count: 0, unsuspend: Ld }),
						Pu(t),
						null !==
							(t = (function () {
								if (null === _d) throw Error(i(475));
								var e = _d;
								return (
									e.stylesheets && 0 === e.count && Rd(e, e.stylesheets),
									0 < e.count
										? function (t) {
												var n = setTimeout(function () {
													if (
														(e.stylesheets && Rd(e, e.stylesheets), e.unsuspend)
													) {
														var t = e.unsuspend;
														(e.unsuspend = null), t();
													}
												}, 6e4);
												return (
													(e.unsuspend = t),
													function () {
														(e.unsuspend = null), clearTimeout(n);
													}
												);
										  }
										: null
								);
							})()))
					)
						return (
							(e.cancelPendingCommit = t(
								Zs.bind(null, e, n, r, a, o, u, s, 1, f, m)
							)),
							void Ds(e, l, o, !c)
						);
					Zs(e, n, r, a, o, u, s);
				}
				function Ms(e) {
					for (var t = e; ; ) {
						var n = t.tag;
						if (
							(0 === n || 11 === n || 15 === n) &&
							16384 & t.flags &&
							null !== (n = t.updateQueue) &&
							null !== (n = n.stores)
						)
							for (var r = 0; r < n.length; r++) {
								var a = n[r],
									l = a.getSnapshot;
								a = a.value;
								try {
									if (!Qn(l(), a)) return !1;
								} catch (e) {
									return !1;
								}
							}
						if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
							(n.return = t), (t = n);
						else {
							if (t === e) break;
							for (; null === t.sibling; ) {
								if (null === t.return || t.return === e) return !0;
								t = t.return;
							}
							(t.sibling.return = t.return), (t = t.sibling);
						}
					}
					return !0;
				}
				function Ds(e, t, n, r) {
					(t &= ~ms),
						(t &= ~fs),
						(e.suspendedLanes |= t),
						(e.pingedLanes &= ~t),
						r && (e.warmLanes |= t),
						(r = e.expirationTimes);
					for (var a = t; 0 < a; ) {
						var l = 31 - we(a),
							o = 1 << l;
						(r[l] = -1), (a &= ~o);
					}
					0 !== n && Oe(e, n, t);
				}
				function Is() {
					return !!(6 & es) || (gc(0, !1), !1);
				}
				function $s() {
					if (null !== ns) {
						if (0 === as) var e = ns.return;
						else
							(yi = gi = null), yl((e = ns)), (pa = null), (ha = 0), (e = ns);
						for (; null !== e; ) Xu(e.alternate, e), (e = e.return);
						ns = null;
					}
				}
				function js(e, t) {
					(e.finishedWork = null), (e.finishedLanes = 0);
					var n = e.timeoutHandle;
					-1 !== n && ((e.timeoutHandle = -1), td(n)),
						null !== (n = e.cancelPendingCommit) &&
							((e.cancelPendingCommit = null), n()),
						$s(),
						(ts = e),
						(ns = n = Du(e.current, null)),
						(rs = t),
						(as = 0),
						(ls = null),
						(os = !1),
						(is = Ae(e, t)),
						(us = !1),
						(hs = ps = ms = fs = ds = cs = 0),
						(ys = gs = null),
						(bs = !1),
						8 & t && (t |= 32 & t);
					var r = e.entangledLanes;
					if (0 !== r)
						for (e = e.entanglements, r &= t; 0 < r; ) {
							var a = 31 - we(r),
								l = 1 << a;
							(t |= e[a]), (r &= ~l);
						}
					return (ss = t), xr(), n;
				}
				function Bs(e, t) {
					(Za = null),
						(_.H = No),
						t === oa
							? ((t = ma()), (as = 3))
							: t === ia
							? ((t = ma()), (as = 4))
							: (as =
									t === Ho
										? 8
										: null !== t &&
										  "object" === r(t) &&
										  "function" == typeof t.then
										? 6
										: 1),
						(ls = t),
						null === ns && ((cs = 1), Io(e, Rr(t, e.current)));
				}
				function Us() {
					var e = _.H;
					return (_.H = No), null === e ? No : e;
				}
				function Hs() {
					var e = _.A;
					return (_.A = Ju), e;
				}
				function Ws() {
					(cs = 4),
						os || ((4194176 & rs) !== rs && null !== Pa.current) || (is = !0),
						(!(134217727 & ds) && !(134217727 & fs)) ||
							null === ts ||
							Ds(ts, rs, ps, !1);
				}
				function Vs(e, t, n) {
					var r = es;
					es |= 2;
					var a = Us(),
						l = Hs();
					(ts === e && rs === t) || ((Es = null), js(e, t)), (t = !1);
					var o = cs;
					e: for (;;)
						try {
							if (0 !== as && null !== ns) {
								var i = ns,
									u = ls;
								switch (as) {
									case 8:
										$s(), (o = 6);
										break e;
									case 3:
									case 2:
									case 6:
										null === Pa.current && (t = !0);
										var s = as;
										if (((as = 0), (ls = null), Ys(e, i, u, s), n && is)) {
											o = 0;
											break e;
										}
										break;
									default:
										(s = as), (as = 0), (ls = null), Ys(e, i, u, s);
								}
							}
							qs(), (o = cs);
							break;
						} catch (t) {
							Bs(e, t);
						}
					return (
						t && e.shellSuspendCounter++,
						(yi = gi = null),
						(es = r),
						(_.H = a),
						(_.A = l),
						null === ns && ((ts = null), (rs = 0), xr()),
						o
					);
				}
				function qs() {
					for (; null !== ns; ) Qs(ns);
				}
				function Gs() {
					for (; null !== ns && !oe(); ) Qs(ns);
				}
				function Qs(e) {
					var t = pi(e.alternate, e, ss);
					(e.memoizedProps = e.pendingProps), null === t ? Xs(e) : (ns = t);
				}
				function Ks(e) {
					var t = e,
						n = t.alternate;
					switch (t.tag) {
						case 15:
						case 0:
							t = Zo(n, t, t.pendingProps, t.type, void 0, rs);
							break;
						case 11:
							t = Zo(n, t, t.pendingProps, t.type.render, t.ref, rs);
							break;
						case 5:
							yl(t);
						default:
							Xu(n, t), (t = pi(n, (t = ns = Iu(t, ss)), ss));
					}
					(e.memoizedProps = e.pendingProps), null === t ? Xs(e) : (ns = t);
				}
				function Ys(e, t, n, a) {
					(yi = gi = null), yl(t), (pa = null), (ha = 0);
					var l = t.return;
					try {
						if (
							(function (e, t, n, a, l) {
								if (
									((n.flags |= 32768),
									null !== a &&
										"object" === r(a) &&
										"function" == typeof a.then)
								) {
									if (
										(null !== (t = n.alternate) && Si(t, n, l, !0),
										null !== (n = Pa.current))
									) {
										switch (n.tag) {
											case 13:
												return (
													null === Ta
														? Ws()
														: null === n.alternate && 0 === cs && (cs = 3),
													(n.flags &= -257),
													(n.flags |= 65536),
													(n.lanes = l),
													a === ua
														? (n.flags |= 16384)
														: (null === (t = n.updateQueue)
																? (n.updateQueue = new Set([a]))
																: t.add(a),
														  ac(e, a, l)),
													!1
												);
											case 22:
												return (
													(n.flags |= 65536),
													a === ua
														? (n.flags |= 16384)
														: (null === (t = n.updateQueue)
																? ((t = {
																		transitions: null,
																		markerInstances: null,
																		retryQueue: new Set([a]),
																  }),
																  (n.updateQueue = t))
																: null === (n = t.retryQueue)
																? (t.retryQueue = new Set([a]))
																: n.add(a),
														  ac(e, a, l)),
													!1
												);
										}
										throw Error(i(435, n.tag));
									}
									return ac(e, a, l), Ws(), !1;
								}
								if (Yr)
									return (
										null !== (t = Pa.current)
											? (!(65536 & t.flags) && (t.flags |= 256),
											  (t.flags |= 65536),
											  (t.lanes = l),
											  a !== Zr &&
													la(Rr((e = Error(i(422), { cause: a })), n)))
											: (a !== Zr &&
													la(Rr((t = Error(i(423), { cause: a })), n)),
											  ((e = e.current.alternate).flags |= 65536),
											  (l &= -l),
											  (e.lanes |= l),
											  (a = Rr(a, n)),
											  Ri(e, (l = jo(e.stateNode, a, l))),
											  4 !== cs && (cs = 2)),
										!1
									);
								var o = Error(i(520), { cause: a });
								if (
									((o = Rr(o, n)),
									null === gs ? (gs = [o]) : gs.push(o),
									4 !== cs && (cs = 2),
									null === t)
								)
									return !0;
								(a = Rr(a, n)), (n = t);
								do {
									switch (n.tag) {
										case 3:
											return (
												(n.flags |= 65536),
												(e = l & -l),
												(n.lanes |= e),
												Ri(n, (e = jo(n.stateNode, a, e))),
												!1
											);
										case 1:
											if (
												((t = n.type),
												(o = n.stateNode),
												!(
													128 & n.flags ||
													("function" != typeof t.getDerivedStateFromError &&
														(null === o ||
															"function" != typeof o.componentDidCatch ||
															(null !== Ss && Ss.has(o))))
												))
											)
												return (
													(n.flags |= 65536),
													(l &= -l),
													(n.lanes |= l),
													Uo((l = Bo(l)), e, n, a),
													Ri(n, l),
													!1
												);
									}
									n = n.return;
								} while (null !== n);
								return !1;
							})(e, l, t, n, rs)
						)
							return (cs = 1), Io(e, Rr(n, e.current)), void (ns = null);
					} catch (t) {
						if (null !== l) throw ((ns = l), t);
						return (cs = 1), Io(e, Rr(n, e.current)), void (ns = null);
					}
					32768 & t.flags
						? (Yr || 1 === a
								? (e = !0)
								: is || 536870912 & rs
								? (e = !1)
								: ((os = e = !0),
								  (2 === a || 3 === a || 6 === a) &&
										null !== (a = Pa.current) &&
										13 === a.tag &&
										(a.flags |= 16384)),
						  Js(t, e))
						: Xs(t);
				}
				function Xs(e) {
					var t = e;
					do {
						if (32768 & t.flags) return void Js(t, os);
						e = t.return;
						var n = Ku(t.alternate, t, ss);
						if (null !== n) return void (ns = n);
						if (null !== (t = t.sibling)) return void (ns = t);
						ns = t = e;
					} while (null !== t);
					0 === cs && (cs = 5);
				}
				function Js(e, t) {
					do {
						var n = Yu(e.alternate, e);
						if (null !== n) return (n.flags &= 32767), void (ns = n);
						if (
							(null !== (n = e.return) &&
								((n.flags |= 32768),
								(n.subtreeFlags = 0),
								(n.deletions = null)),
							!t && null !== (e = e.sibling))
						)
							return void (ns = e);
						ns = e = n;
					} while (null !== e);
					(cs = 6), (ns = null);
				}
				function Zs(e, t, n, r, a, l, o, u, s, c) {
					var d = _.T,
						f = U.p;
					try {
						(U.p = 2),
							(_.T = null),
							(function (e, t, n, r, a, l, o, u) {
								do {
									tc();
								} while (null !== Cs);
								if (6 & es) throw Error(i(327));
								var s = e.finishedWork;
								if (((r = e.finishedLanes), null === s)) return null;
								if (
									((e.finishedWork = null),
									(e.finishedLanes = 0),
									s === e.current)
								)
									throw Error(i(177));
								(e.callbackNode = null),
									(e.callbackPriority = 0),
									(e.cancelPendingCommit = null);
								var c = s.lanes | s.childLanes;
								if (
									((function (e, t, n, r, a, l) {
										var o = e.pendingLanes;
										(e.pendingLanes = n),
											(e.suspendedLanes = 0),
											(e.pingedLanes = 0),
											(e.warmLanes = 0),
											(e.expiredLanes &= n),
											(e.entangledLanes &= n),
											(e.errorRecoveryDisabledLanes &= n),
											(e.shellSuspendCounter = 0);
										var i = e.entanglements,
											u = e.expirationTimes,
											s = e.hiddenUpdates;
										for (n = o & ~n; 0 < n; ) {
											var c = 31 - we(n),
												d = 1 << c;
											(i[c] = 0), (u[c] = -1);
											var f = s[c];
											if (null !== f)
												for (s[c] = null, c = 0; c < f.length; c++) {
													var m = f[c];
													null !== m && (m.lane &= -536870913);
												}
											n &= ~d;
										}
										0 !== r && Oe(e, r, 0),
											0 !== l &&
												0 === a &&
												0 !== e.tag &&
												(e.suspendedLanes |= l & ~(o & ~t));
									})(e, r, (c |= Nr), l, o, u),
									e === ts && ((ns = ts = null), (rs = 0)),
									(!(10256 & s.subtreeFlags) && !(10256 & s.flags)) ||
										ks ||
										((ks = !0),
										(xs = c),
										(As = n),
										ae(fe, function () {
											return tc(), null;
										})),
									(n = !!(15990 & s.flags)),
									15990 & s.subtreeFlags || n
										? ((n = _.T),
										  (_.T = null),
										  (l = U.p),
										  (U.p = 2),
										  (o = es),
										  (es |= 4),
										  (function (e, t) {
												if (
													((e = e.containerInfo), (Gc = Ud), er((e = Zn(e))))
												) {
													if ("selectionStart" in e)
														var n = {
															start: e.selectionStart,
															end: e.selectionEnd,
														};
													else
														e: {
															var r =
																(n =
																	((n = e.ownerDocument) && n.defaultView) ||
																	window).getSelection && n.getSelection();
															if (r && 0 !== r.rangeCount) {
																n = r.anchorNode;
																var a = r.anchorOffset,
																	l = r.focusNode;
																r = r.focusOffset;
																try {
																	n.nodeType, l.nodeType;
																} catch (e) {
																	n = null;
																	break e;
																}
																var o = 0,
																	u = -1,
																	s = -1,
																	c = 0,
																	d = 0,
																	f = e,
																	m = null;
																t: for (;;) {
																	for (
																		var p;
																		f !== n ||
																			(0 !== a && 3 !== f.nodeType) ||
																			(u = o + a),
																			f !== l ||
																				(0 !== r && 3 !== f.nodeType) ||
																				(s = o + r),
																			3 === f.nodeType &&
																				(o += f.nodeValue.length),
																			null !== (p = f.firstChild);

																	)
																		(m = f), (f = p);
																	for (;;) {
																		if (f === e) break t;
																		if (
																			(m === n && ++c === a && (u = o),
																			m === l && ++d === r && (s = o),
																			null !== (p = f.nextSibling))
																		)
																			break;
																		m = (f = m).parentNode;
																	}
																	f = p;
																}
																n =
																	-1 === u || -1 === s
																		? null
																		: { start: u, end: s };
															} else n = null;
														}
													n = n || { start: 0, end: 0 };
												} else n = null;
												for (
													Qc = { focusedElem: e, selectionRange: n },
														Ud = !1,
														nu = t;
													null !== nu;

												)
													if (
														((e = (t = nu).child),
														1028 & t.subtreeFlags && null !== e)
													)
														(e.return = t), (nu = e);
													else
														for (; null !== nu; ) {
															switch (
																((l = (t = nu).alternate), (e = t.flags), t.tag)
															) {
																case 0:
																case 11:
																case 15:
																case 5:
																case 26:
																case 27:
																case 6:
																case 4:
																case 17:
																	break;
																case 1:
																	if (1024 & e && null !== l) {
																		(e = void 0),
																			(n = t),
																			(a = l.memoizedProps),
																			(l = l.memoizedState),
																			(r = n.stateNode);
																		try {
																			var h = Oo(
																				n.type,
																				a,
																				(n.elementType, n.type)
																			);
																			(e = r.getSnapshotBeforeUpdate(h, l)),
																				(r.__reactInternalSnapshotBeforeUpdate =
																					e);
																		} catch (e) {
																			rc(n, n.return, e);
																		}
																	}
																	break;
																case 3:
																	if (1024 & e)
																		if (
																			9 ===
																			(n = (e = t.stateNode.containerInfo)
																				.nodeType)
																		)
																			od(e);
																		else if (1 === n)
																			switch (e.nodeName) {
																				case "HEAD":
																				case "HTML":
																				case "BODY":
																					od(e);
																					break;
																				default:
																					e.textContent = "";
																			}
																	break;
																default:
																	if (1024 & e) throw Error(i(163));
															}
															if (null !== (e = t.sibling)) {
																(e.return = t.return), (nu = e);
																break;
															}
															nu = t.return;
														}
												(h = ru), (ru = !1);
										  })(e, s),
										  pu(s, e),
										  tr(Qc, e.containerInfo),
										  (Ud = !!Gc),
										  (Qc = Gc = null),
										  (e.current = s),
										  au(e, s.alternate, s),
										  ie(),
										  (es = o),
										  (U.p = l),
										  (_.T = n))
										: (e.current = s),
									ks ? ((ks = !1), (Cs = e), (Ns = r)) : ec(e, c),
									0 === (c = e.pendingLanes) && (Ss = null),
									(function (e) {
										if (be && "function" == typeof be.onCommitFiberRoot)
											try {
												be.onCommitFiberRoot(
													ye,
													e,
													void 0,
													!(128 & ~e.current.flags)
												);
											} catch (e) {}
									})(s.stateNode),
									hc(e),
									null !== t)
								)
									for (a = e.onRecoverableError, s = 0; s < t.length; s++)
										a((c = t[s]).value, { componentStack: c.stack });
								!!(3 & Ns) && tc(),
									(c = e.pendingLanes),
									4194218 & r && 42 & c
										? e === Ts
											? Ps++
											: ((Ps = 0), (Ts = e))
										: (Ps = 0),
									gc(0, !1);
							})(e, t, n, r, f, a, l, o);
					} finally {
						(_.T = d), (U.p = f);
					}
				}
				function ec(e, t) {
					0 == (e.pooledCacheLanes &= t) &&
						null != (t = e.pooledCache) &&
						((e.pooledCache = null), Ba(t));
				}
				function tc() {
					if (null !== Cs) {
						var e = Cs,
							t = xs;
						xs = 0;
						var n = Fe(Ns),
							r = _.T,
							a = U.p;
						try {
							if (((U.p = 32 > n ? 32 : n), (_.T = null), null === Cs))
								var l = !1;
							else {
								(n = As), (As = null);
								var o = Cs,
									u = Ns;
								if (((Cs = null), (Ns = 0), 6 & es)) throw Error(i(331));
								var s = es;
								if (
									((es |= 4),
									Lu(o.current),
									ku(o, o.current, u, n),
									(es = s),
									gc(0, !1),
									be && "function" == typeof be.onPostCommitFiberRoot)
								)
									try {
										be.onPostCommitFiberRoot(ye, o);
									} catch (e) {}
								l = !0;
							}
							return l;
						} finally {
							(U.p = a), (_.T = r), ec(e, t);
						}
					}
					return !1;
				}
				function nc(e, t, n) {
					(t = Rr(n, t)),
						null !== (e = zi(e, (t = jo(e.stateNode, t, 2)), 2)) &&
							(ze(e, 2), hc(e));
				}
				function rc(e, t, n) {
					if (3 === e.tag) nc(e, e, n);
					else
						for (; null !== t; ) {
							if (3 === t.tag) {
								nc(t, e, n);
								break;
							}
							if (1 === t.tag) {
								var r = t.stateNode;
								if (
									"function" == typeof t.type.getDerivedStateFromError ||
									("function" == typeof r.componentDidCatch &&
										(null === Ss || !Ss.has(r)))
								) {
									(e = Rr(n, e)),
										null !== (r = zi(t, (n = Bo(2)), 2)) &&
											(Uo(n, r, t, e), ze(r, 2), hc(r));
									break;
								}
							}
							t = t.return;
						}
				}
				function ac(e, t, n) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new Zu();
						var a = new Set();
						r.set(t, a);
					} else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
					a.has(n) ||
						((us = !0), a.add(n), (e = lc.bind(null, e, t, n)), t.then(e, e));
				}
				function lc(e, t, n) {
					var r = e.pingCache;
					null !== r && r.delete(t),
						(e.pingedLanes |= e.suspendedLanes & n),
						(e.warmLanes &= ~n),
						ts === e &&
							(rs & n) === n &&
							(4 === cs ||
							(3 === cs && (62914560 & rs) === rs && 300 > ue() - vs)
								? !(2 & es) && js(e, 0)
								: (ms |= n),
							hs === rs && (hs = 0)),
						hc(e);
				}
				function oc(e, t) {
					0 === t && (t = _e()), null !== (e = Tr(e, t)) && (ze(e, t), hc(e));
				}
				function ic(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), oc(e, n);
				}
				function uc(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								a = e.memoizedState;
							null !== a && (n = a.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						case 22:
							r = e.stateNode._retryCache;
							break;
						default:
							throw Error(i(314));
					}
					null !== r && r.delete(t), oc(e, n);
				}
				var sc = null,
					cc = null,
					dc = !1,
					fc = !1,
					mc = !1,
					pc = 0;
				function hc(e) {
					var t;
					e !== cc &&
						null === e.next &&
						(null === cc ? (sc = cc = e) : (cc = cc.next = e)),
						(fc = !0),
						dc ||
							((dc = !0),
							(t = yc),
							rd(function () {
								6 & es ? ae(ce, t) : t();
							}));
				}
				function gc(e, t) {
					if (!mc && fc) {
						mc = !0;
						do {
							for (var n = !1, r = sc; null !== r; ) {
								if (!t)
									if (0 !== e) {
										var a = r.pendingLanes;
										if (0 === a) var l = 0;
										else {
											var o = r.suspendedLanes,
												i = r.pingedLanes;
											(l = (1 << (31 - we(42 | e) + 1)) - 1),
												(l =
													201326677 & (l &= a & ~(o & ~i))
														? (201326677 & l) | 1
														: l
														? 2 | l
														: 0);
										}
										0 !== l && ((n = !0), wc(r, l));
									} else
										(l = rs),
											!(3 & (l = xe(r, r === ts ? l : 0))) ||
												Ae(r, l) ||
												((n = !0), wc(r, l));
								r = r.next;
							}
						} while (n);
						mc = !1;
					}
				}
				function yc() {
					fc = dc = !1;
					var e,
						t = 0;
					0 !== pc &&
						(((e = window.event) && "popstate" === e.type
							? e !== Zc && ((Zc = e), !0)
							: ((Zc = null), !1)) && (t = pc),
						(pc = 0));
					for (var n = ue(), r = null, a = sc; null !== a; ) {
						var l = a.next,
							o = bc(a, n);
						0 === o
							? ((a.next = null),
							  null === r ? (sc = l) : (r.next = l),
							  null === l && (cc = r))
							: ((r = a), (0 !== t || 3 & o) && (fc = !0)),
							(a = l);
					}
					gc(t, !1);
				}
				function bc(e, t) {
					for (
						var n = e.suspendedLanes,
							r = e.pingedLanes,
							a = e.expirationTimes,
							l = -62914561 & e.pendingLanes;
						0 < l;

					) {
						var o = 31 - we(l),
							i = 1 << o,
							u = a[o];
						-1 === u
							? (i & n && !(i & r)) || (a[o] = Pe(i, t))
							: u <= t && (e.expiredLanes |= i),
							(l &= ~i);
					}
					if (
						((n = rs),
						(n = xe(e, e === (t = ts) ? n : 0)),
						(r = e.callbackNode),
						0 === n || (e === t && 2 === as) || null !== e.cancelPendingCommit)
					)
						return (
							null !== r && null !== r && le(r),
							(e.callbackNode = null),
							(e.callbackPriority = 0)
						);
					if (!(3 & n) || Ae(e, n)) {
						if ((t = n & -n) === e.callbackPriority) return t;
						switch ((null !== r && le(r), Fe(n))) {
							case 2:
							case 8:
								n = de;
								break;
							case 32:
							default:
								n = fe;
								break;
							case 268435456:
								n = pe;
						}
						return (
							(r = vc.bind(null, e)),
							(n = ae(n, r)),
							(e.callbackPriority = t),
							(e.callbackNode = n),
							t
						);
					}
					return (
						null !== r && null !== r && le(r),
						(e.callbackPriority = 2),
						(e.callbackNode = null),
						2
					);
				}
				function vc(e, t) {
					var n = e.callbackNode;
					if (tc() && e.callbackNode !== n) return null;
					var r = rs;
					return 0 === (r = xe(e, e === ts ? r : 0))
						? null
						: (Os(e, r, t),
						  bc(e, ue()),
						  null != e.callbackNode && e.callbackNode === n
								? vc.bind(null, e)
								: null);
				}
				function wc(e, t) {
					if (tc()) return null;
					Os(e, t, !0);
				}
				function Ec() {
					return 0 === pc && (pc = Te()), pc;
				}
				function Sc(e) {
					return null == e || "symbol" === r(e) || "boolean" == typeof e
						? null
						: "function" == typeof e
						? e
						: Tt("" + e);
				}
				function kc(e, t) {
					var n = t.ownerDocument.createElement("input");
					return (
						(n.name = t.name),
						(n.value = t.value),
						e.id && n.setAttribute("form", e.id),
						t.parentNode.insertBefore(n, t),
						(e = new FormData(e)),
						n.parentNode.removeChild(n),
						e
					);
				}
				for (var Cc = 0; Cc < Er.length; Cc++) {
					var Nc = Er[Cc];
					Sr(Nc.toLowerCase(), "on" + (Nc[0].toUpperCase() + Nc.slice(1)));
				}
				Sr(mr, "onAnimationEnd"),
					Sr(pr, "onAnimationIteration"),
					Sr(hr, "onAnimationStart"),
					Sr("dblclick", "onDoubleClick"),
					Sr("focusin", "onFocus"),
					Sr("focusout", "onBlur"),
					Sr(gr, "onTransitionRun"),
					Sr(yr, "onTransitionStart"),
					Sr(br, "onTransitionCancel"),
					Sr(vr, "onTransitionEnd"),
					tt("onMouseEnter", ["mouseout", "mouseover"]),
					tt("onMouseLeave", ["mouseout", "mouseover"]),
					tt("onPointerEnter", ["pointerout", "pointerover"]),
					tt("onPointerLeave", ["pointerout", "pointerover"]),
					et(
						"onChange",
						"change click focusin focusout input keydown keyup selectionchange".split(
							" "
						)
					),
					et(
						"onSelect",
						"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
							" "
						)
					),
					et("onBeforeInput", [
						"compositionend",
						"keypress",
						"textInput",
						"paste",
					]),
					et(
						"onCompositionEnd",
						"compositionend focusout keydown keypress keyup mousedown".split(
							" "
						)
					),
					et(
						"onCompositionStart",
						"compositionstart focusout keydown keypress keyup mousedown".split(
							" "
						)
					),
					et(
						"onCompositionUpdate",
						"compositionupdate focusout keydown keypress keyup mousedown".split(
							" "
						)
					);
				var xc =
						"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
							" "
						),
					Ac = new Set(
						"beforetoggle cancel close invalid load scroll scrollend toggle"
							.split(" ")
							.concat(xc)
					);
				function Pc(e, t) {
					t = !!(4 & t);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							a = r.event;
						r = r.listeners;
						e: {
							var l = void 0;
							if (t)
								for (var o = r.length - 1; 0 <= o; o--) {
									var i = r[o],
										u = i.instance,
										s = i.currentTarget;
									if (((i = i.listener), u !== l && a.isPropagationStopped()))
										break e;
									(l = i), (a.currentTarget = s);
									try {
										l(a);
									} catch (e) {
										Ro(e);
									}
									(a.currentTarget = null), (l = u);
								}
							else
								for (o = 0; o < r.length; o++) {
									if (
										((u = (i = r[o]).instance),
										(s = i.currentTarget),
										(i = i.listener),
										u !== l && a.isPropagationStopped())
									)
										break e;
									(l = i), (a.currentTarget = s);
									try {
										l(a);
									} catch (e) {
										Ro(e);
									}
									(a.currentTarget = null), (l = u);
								}
						}
					}
				}
				function Tc(e, t) {
					var n = t[Be];
					void 0 === n && (n = t[Be] = new Set());
					var r = e + "__bubble";
					n.has(r) || (Oc(t, e, 2, !1), n.add(r));
				}
				function _c(e, t, n) {
					var r = 0;
					t && (r |= 4), Oc(n, e, r, t);
				}
				var Lc = "_reactListening" + Math.random().toString(36).slice(2);
				function zc(e) {
					if (!e[Lc]) {
						(e[Lc] = !0),
							Je.forEach(function (t) {
								"selectionchange" !== t &&
									(Ac.has(t) || _c(t, !1, e), _c(t, !0, e));
							});
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t || t[Lc] || ((t[Lc] = !0), _c("selectionchange", !1, t));
					}
				}
				function Oc(e, t, n, r) {
					switch (Kd(t)) {
						case 2:
							var a = Hd;
							break;
						case 8:
							a = Wd;
							break;
						default:
							a = Vd;
					}
					(n = a.bind(null, t, n, e)),
						(a = void 0),
						!It ||
							("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
							(a = !0),
						r
							? void 0 !== a
								? e.addEventListener(t, n, { capture: !0, passive: a })
								: e.addEventListener(t, n, !0)
							: void 0 !== a
							? e.addEventListener(t, n, { passive: a })
							: e.addEventListener(t, n, !1);
				}
				function Rc(e, t, n, r, a) {
					var l = r;
					if (!(1 & t || 2 & t || null === r))
						e: for (;;) {
							if (null === r) return;
							var o = r.tag;
							if (3 === o || 4 === o) {
								var i = r.stateNode.containerInfo;
								if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
								if (4 === o)
									for (o = r.return; null !== o; ) {
										var u = o.tag;
										if (
											(3 === u || 4 === u) &&
											((u = o.stateNode.containerInfo) === a ||
												(8 === u.nodeType && u.parentNode === a))
										)
											return;
										o = o.return;
									}
								for (; null !== i; ) {
									if (null === (o = Ge(i))) return;
									if (5 === (u = o.tag) || 6 === u || 26 === u || 27 === u) {
										r = l = o;
										continue e;
									}
									i = i.parentNode;
								}
							}
							r = r.return;
						}
					Mt(function () {
						var r = l,
							a = Lt(n),
							o = [];
						e: {
							var i = wr.get(e);
							if (void 0 !== i) {
								var u = Jt,
									s = e;
								switch (e) {
									case "keypress":
										if (0 === Wt(n)) break e;
									case "keydown":
									case "keyup":
										u = pn;
										break;
									case "focusin":
										(s = "focus"), (u = an);
										break;
									case "focusout":
										(s = "blur"), (u = an);
										break;
									case "beforeblur":
									case "afterblur":
										u = an;
										break;
									case "click":
										if (2 === n.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										u = nn;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										u = rn;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										u = gn;
										break;
									case mr:
									case pr:
									case hr:
										u = ln;
										break;
									case vr:
										u = yn;
										break;
									case "scroll":
									case "scrollend":
										u = en;
										break;
									case "wheel":
										u = bn;
										break;
									case "copy":
									case "cut":
									case "paste":
										u = on;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										u = hn;
										break;
									case "toggle":
									case "beforetoggle":
										u = vn;
								}
								var c = !!(4 & t),
									d = !c && ("scroll" === e || "scrollend" === e),
									f = c ? (null !== i ? i + "Capture" : null) : i;
								c = [];
								for (var m, p = r; null !== p; ) {
									var h = p;
									if (
										((m = h.stateNode),
										(5 !== (h = h.tag) && 26 !== h && 27 !== h) ||
											null === m ||
											null === f ||
											(null != (h = Dt(p, f)) && c.push(Fc(p, h, m))),
										d)
									)
										break;
									p = p.return;
								}
								0 < c.length &&
									((i = new u(i, s, null, n, a)),
									o.push({ event: i, listeners: c }));
							}
						}
						if (!(7 & t)) {
							if (
								((u = "mouseout" === e || "pointerout" === e),
								(!(i = "mouseover" === e || "pointerover" === e) ||
									n === _t ||
									!(s = n.relatedTarget || n.fromElement) ||
									(!Ge(s) && !s[je])) &&
									(u || i) &&
									((i =
										a.window === a
											? a
											: (i = a.ownerDocument)
											? i.defaultView || i.parentWindow
											: window),
									u
										? ((u = r),
										  null !==
												(s = (s = n.relatedTarget || n.toElement)
													? Ge(s)
													: null) &&
												((d = D(s)),
												(c = s.tag),
												s !== d || (5 !== c && 27 !== c && 6 !== c)) &&
												(s = null))
										: ((u = null), (s = r)),
									u !== s))
							) {
								if (
									((c = nn),
									(h = "onMouseLeave"),
									(f = "onMouseEnter"),
									(p = "mouse"),
									("pointerout" !== e && "pointerover" !== e) ||
										((c = hn),
										(h = "onPointerLeave"),
										(f = "onPointerEnter"),
										(p = "pointer")),
									(d = null == u ? i : Ke(u)),
									(m = null == s ? i : Ke(s)),
									((i = new c(h, p + "leave", u, n, a)).target = d),
									(i.relatedTarget = m),
									(h = null),
									Ge(a) === r &&
										(((c = new c(f, p + "enter", s, n, a)).target = m),
										(c.relatedTarget = d),
										(h = c)),
									(d = h),
									u && s)
								)
									e: {
										for (f = s, p = 0, m = c = u; m; m = Dc(m)) p++;
										for (m = 0, h = f; h; h = Dc(h)) m++;
										for (; 0 < p - m; ) (c = Dc(c)), p--;
										for (; 0 < m - p; ) (f = Dc(f)), m--;
										for (; p--; ) {
											if (c === f || (null !== f && c === f.alternate)) break e;
											(c = Dc(c)), (f = Dc(f));
										}
										c = null;
									}
								else c = null;
								null !== u && Ic(o, i, u, c, !1),
									null !== s && null !== d && Ic(o, d, s, c, !0);
							}
							if (
								"select" ===
									(u =
										(i = r ? Ke(r) : window).nodeName &&
										i.nodeName.toLowerCase()) ||
								("input" === u && "file" === i.type)
							)
								var g = Dn;
							else if (Ln(i))
								if (In) g = Gn;
								else {
									g = Vn;
									var y = Wn;
								}
							else
								!(u = i.nodeName) ||
								"input" !== u.toLowerCase() ||
								("checkbox" !== i.type && "radio" !== i.type)
									? r && xt(r.elementType) && (g = Dn)
									: (g = qn);
							switch (
								(g && (g = g(e, r))
									? zn(o, g, n, a)
									: (y && y(e, i, r),
									  "focusout" === e &&
											r &&
											"number" === i.type &&
											null != r.memoizedProps.value &&
											bt(i, "number", i.value)),
								(y = r ? Ke(r) : window),
								e)
							) {
								case "focusin":
									(Ln(y) || "true" === y.contentEditable) &&
										((rr = y), (ar = r), (lr = null));
									break;
								case "focusout":
									lr = ar = rr = null;
									break;
								case "mousedown":
									or = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									(or = !1), ir(o, n, a);
									break;
								case "selectionchange":
									if (nr) break;
								case "keydown":
								case "keyup":
									ir(o, n, a);
							}
							var b;
							if (En)
								e: {
									switch (e) {
										case "compositionstart":
											var v = "onCompositionStart";
											break e;
										case "compositionend":
											v = "onCompositionEnd";
											break e;
										case "compositionupdate":
											v = "onCompositionUpdate";
											break e;
									}
									v = void 0;
								}
							else
								Tn
									? An(e, n) && (v = "onCompositionEnd")
									: "keydown" === e &&
									  229 === n.keyCode &&
									  (v = "onCompositionStart");
							v &&
								(Cn &&
									"ko" !== n.locale &&
									(Tn || "onCompositionStart" !== v
										? "onCompositionEnd" === v && Tn && (b = Ht())
										: ((Bt = "value" in (jt = a) ? jt.value : jt.textContent),
										  (Tn = !0))),
								0 < (y = Mc(r, v)).length &&
									((v = new un(v, e, null, n, a)),
									o.push({ event: v, listeners: y }),
									(b || null !== (b = Pn(n))) && (v.data = b))),
								(b = kn
									? (function (e, t) {
											switch (e) {
												case "compositionend":
													return Pn(t);
												case "keypress":
													return 32 !== t.which ? null : ((xn = !0), Nn);
												case "textInput":
													return (e = t.data) === Nn && xn ? null : e;
												default:
													return null;
											}
									  })(e, n)
									: (function (e, t) {
											if (Tn)
												return "compositionend" === e || (!En && An(e, t))
													? ((e = Ht()), (Ut = Bt = jt = null), (Tn = !1), e)
													: null;
											switch (e) {
												case "paste":
												default:
													return null;
												case "keypress":
													if (
														!(t.ctrlKey || t.altKey || t.metaKey) ||
														(t.ctrlKey && t.altKey)
													) {
														if (t.char && 1 < t.char.length) return t.char;
														if (t.which) return String.fromCharCode(t.which);
													}
													return null;
												case "compositionend":
													return Cn && "ko" !== t.locale ? null : t.data;
											}
									  })(e, n)) &&
									0 < (v = Mc(r, "onBeforeInput")).length &&
									((y = new un("onBeforeInput", "beforeinput", null, n, a)),
									o.push({ event: y, listeners: v }),
									(y.data = b)),
								(function (e, t, n, r, a) {
									if ("submit" === t && n && n.stateNode === a) {
										var l = Sc((a[$e] || null).action),
											o = r.submitter;
										o &&
											null !==
												(t = (t = o[$e] || null)
													? Sc(t.formAction)
													: o.getAttribute("formAction")) &&
											((l = t), (o = null));
										var i = new Jt("action", "action", null, r, a);
										e.push({
											event: i,
											listeners: [
												{
													instance: null,
													listener: function () {
														if (r.defaultPrevented) {
															if (0 !== pc) {
																var e = o ? kc(a, o) : new FormData(a);
																co(
																	n,
																	{
																		pending: !0,
																		data: e,
																		method: a.method,
																		action: l,
																	},
																	null,
																	e
																);
															}
														} else
															"function" == typeof l &&
																(i.preventDefault(),
																(e = o ? kc(a, o) : new FormData(a)),
																co(
																	n,
																	{
																		pending: !0,
																		data: e,
																		method: a.method,
																		action: l,
																	},
																	l,
																	e
																));
													},
													currentTarget: a,
												},
											],
										});
									}
								})(o, e, r, n, a);
						}
						Pc(o, t);
					});
				}
				function Fc(e, t, n) {
					return { instance: e, listener: t, currentTarget: n };
				}
				function Mc(e, t) {
					for (var n = t + "Capture", r = []; null !== e; ) {
						var a = e,
							l = a.stateNode;
						(5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
							null === l ||
							(null != (a = Dt(e, n)) && r.unshift(Fc(e, a, l)),
							null != (a = Dt(e, t)) && r.push(Fc(e, a, l))),
							(e = e.return);
					}
					return r;
				}
				function Dc(e) {
					if (null === e) return null;
					do {
						e = e.return;
					} while (e && 5 !== e.tag && 27 !== e.tag);
					return e || null;
				}
				function Ic(e, t, n, r, a) {
					for (var l = t._reactName, o = []; null !== n && n !== r; ) {
						var i = n,
							u = i.alternate,
							s = i.stateNode;
						if (((i = i.tag), null !== u && u === r)) break;
						(5 !== i && 26 !== i && 27 !== i) ||
							null === s ||
							((u = s),
							a
								? null != (s = Dt(n, l)) && o.unshift(Fc(n, s, u))
								: a || (null != (s = Dt(n, l)) && o.push(Fc(n, s, u)))),
							(n = n.return);
					}
					0 !== o.length && e.push({ event: t, listeners: o });
				}
				var $c = /\r\n?/g,
					jc = /\u0000|\uFFFD/g;
				function Bc(e) {
					return ("string" == typeof e ? e : "" + e)
						.replace($c, "\n")
						.replace(jc, "");
				}
				function Uc(e, t) {
					return (t = Bc(t)), Bc(e) === t;
				}
				function Hc() {}
				function Wc(e, t, n, a, l, o) {
					switch (n) {
						case "children":
							"string" == typeof a
								? "body" === t || ("textarea" === t && "" === a) || St(e, a)
								: ("number" == typeof a || "bigint" == typeof a) &&
								  "body" !== t &&
								  St(e, "" + a);
							break;
						case "className":
							it(e, "class", a);
							break;
						case "tabIndex":
							it(e, "tabindex", a);
							break;
						case "dir":
						case "role":
						case "viewBox":
						case "width":
						case "height":
							it(e, n, a);
							break;
						case "style":
							Nt(e, a, o);
							break;
						case "data":
							if ("object" !== t) {
								it(e, "data", a);
								break;
							}
						case "src":
						case "href":
							if ("" === a && ("a" !== t || "href" !== n)) {
								e.removeAttribute(n);
								break;
							}
							if (
								null == a ||
								"function" == typeof a ||
								"symbol" === r(a) ||
								"boolean" == typeof a
							) {
								e.removeAttribute(n);
								break;
							}
							(a = Tt("" + a)), e.setAttribute(n, a);
							break;
						case "action":
						case "formAction":
							if ("function" == typeof a) {
								e.setAttribute(
									n,
									"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
								);
								break;
							}
							if (
								("function" == typeof o &&
									("formAction" === n
										? ("input" !== t && Wc(e, t, "name", l.name, l, null),
										  Wc(e, t, "formEncType", l.formEncType, l, null),
										  Wc(e, t, "formMethod", l.formMethod, l, null),
										  Wc(e, t, "formTarget", l.formTarget, l, null))
										: (Wc(e, t, "encType", l.encType, l, null),
										  Wc(e, t, "method", l.method, l, null),
										  Wc(e, t, "target", l.target, l, null))),
								null == a || "symbol" === r(a) || "boolean" == typeof a)
							) {
								e.removeAttribute(n);
								break;
							}
							(a = Tt("" + a)), e.setAttribute(n, a);
							break;
						case "onClick":
							null != a && (e.onclick = Hc);
							break;
						case "onScroll":
							null != a && Tc("scroll", e);
							break;
						case "onScrollEnd":
							null != a && Tc("scrollend", e);
							break;
						case "dangerouslySetInnerHTML":
							if (null != a) {
								if ("object" !== r(a) || !("__html" in a)) throw Error(i(61));
								if (null != (n = a.__html)) {
									if (null != l.children) throw Error(i(60));
									e.innerHTML = n;
								}
							}
							break;
						case "multiple":
							e.multiple = a && "function" != typeof a && "symbol" !== r(a);
							break;
						case "muted":
							e.muted = a && "function" != typeof a && "symbol" !== r(a);
							break;
						case "suppressContentEditableWarning":
						case "suppressHydrationWarning":
						case "defaultValue":
						case "defaultChecked":
						case "innerHTML":
						case "ref":
						case "autoFocus":
							break;
						case "xlinkHref":
							if (
								null == a ||
								"function" == typeof a ||
								"boolean" == typeof a ||
								"symbol" === r(a)
							) {
								e.removeAttribute("xlink:href");
								break;
							}
							(n = Tt("" + a)),
								e.setAttributeNS(
									"http://www.w3.org/1999/xlink",
									"xlink:href",
									n
								);
							break;
						case "contentEditable":
						case "spellCheck":
						case "draggable":
						case "value":
						case "autoReverse":
						case "externalResourcesRequired":
						case "focusable":
						case "preserveAlpha":
							null != a && "function" != typeof a && "symbol" !== r(a)
								? e.setAttribute(n, "" + a)
								: e.removeAttribute(n);
							break;
						case "inert":
						case "allowFullScreen":
						case "async":
						case "autoPlay":
						case "controls":
						case "default":
						case "defer":
						case "disabled":
						case "disablePictureInPicture":
						case "disableRemotePlayback":
						case "formNoValidate":
						case "hidden":
						case "loop":
						case "noModule":
						case "noValidate":
						case "open":
						case "playsInline":
						case "readOnly":
						case "required":
						case "reversed":
						case "scoped":
						case "seamless":
						case "itemScope":
							a && "function" != typeof a && "symbol" !== r(a)
								? e.setAttribute(n, "")
								: e.removeAttribute(n);
							break;
						case "capture":
						case "download":
							!0 === a
								? e.setAttribute(n, "")
								: !1 !== a &&
								  null != a &&
								  "function" != typeof a &&
								  "symbol" !== r(a)
								? e.setAttribute(n, a)
								: e.removeAttribute(n);
							break;
						case "cols":
						case "rows":
						case "size":
						case "span":
							null != a &&
							"function" != typeof a &&
							"symbol" !== r(a) &&
							!isNaN(a) &&
							1 <= a
								? e.setAttribute(n, a)
								: e.removeAttribute(n);
							break;
						case "rowSpan":
						case "start":
							null == a ||
							"function" == typeof a ||
							"symbol" === r(a) ||
							isNaN(a)
								? e.removeAttribute(n)
								: e.setAttribute(n, a);
							break;
						case "popover":
							Tc("beforetoggle", e), Tc("toggle", e), ot(e, "popover", a);
							break;
						case "xlinkActuate":
							ut(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
							break;
						case "xlinkArcrole":
							ut(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
							break;
						case "xlinkRole":
							ut(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
							break;
						case "xlinkShow":
							ut(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
							break;
						case "xlinkTitle":
							ut(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
							break;
						case "xlinkType":
							ut(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
							break;
						case "xmlBase":
							ut(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
							break;
						case "xmlLang":
							ut(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
							break;
						case "xmlSpace":
							ut(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
							break;
						case "is":
							ot(e, "is", a);
							break;
						case "innerText":
						case "textContent":
							break;
						default:
							(!(2 < n.length) ||
								("o" !== n[0] && "O" !== n[0]) ||
								("n" !== n[1] && "N" !== n[1])) &&
								ot(e, (n = At.get(n) || n), a);
					}
				}
				function Vc(e, t, n, a, l, o) {
					switch (n) {
						case "style":
							Nt(e, a, o);
							break;
						case "dangerouslySetInnerHTML":
							if (null != a) {
								if ("object" !== r(a) || !("__html" in a)) throw Error(i(61));
								if (null != (n = a.__html)) {
									if (null != l.children) throw Error(i(60));
									e.innerHTML = n;
								}
							}
							break;
						case "children":
							"string" == typeof a
								? St(e, a)
								: ("number" == typeof a || "bigint" == typeof a) &&
								  St(e, "" + a);
							break;
						case "onScroll":
							null != a && Tc("scroll", e);
							break;
						case "onScrollEnd":
							null != a && Tc("scrollend", e);
							break;
						case "onClick":
							null != a && (e.onclick = Hc);
							break;
						case "suppressContentEditableWarning":
						case "suppressHydrationWarning":
						case "innerHTML":
						case "ref":
						case "innerText":
						case "textContent":
							break;
						default:
							Ze.hasOwnProperty(n) ||
								("o" !== n[0] ||
								"n" !== n[1] ||
								((l = n.endsWith("Capture")),
								(t = n.slice(2, l ? n.length - 7 : void 0)),
								"function" ==
									typeof (o = null != (o = e[$e] || null) ? o[n] : null) &&
									e.removeEventListener(t, o, l),
								"function" != typeof a)
									? n in e
										? (e[n] = a)
										: !0 === a
										? e.setAttribute(n, "")
										: ot(e, n, a)
									: ("function" != typeof o &&
											null !== o &&
											(n in e
												? (e[n] = null)
												: e.hasAttribute(n) && e.removeAttribute(n)),
									  e.addEventListener(t, a, l)));
					}
				}
				function qc(e, t, n) {
					switch (t) {
						case "div":
						case "span":
						case "svg":
						case "path":
						case "a":
						case "g":
						case "p":
						case "li":
							break;
						case "img":
							Tc("error", e), Tc("load", e);
							var a,
								l = !1,
								o = !1;
							for (a in n)
								if (n.hasOwnProperty(a)) {
									var u = n[a];
									if (null != u)
										switch (a) {
											case "src":
												l = !0;
												break;
											case "srcSet":
												o = !0;
												break;
											case "children":
											case "dangerouslySetInnerHTML":
												throw Error(i(137, t));
											default:
												Wc(e, t, a, u, n, null);
										}
								}
							return (
								o && Wc(e, t, "srcSet", n.srcSet, n, null),
								void (l && Wc(e, t, "src", n.src, n, null))
							);
						case "input":
							Tc("invalid", e);
							var s = (a = u = o = null),
								c = null,
								d = null;
							for (l in n)
								if (n.hasOwnProperty(l)) {
									var f = n[l];
									if (null != f)
										switch (l) {
											case "name":
												o = f;
												break;
											case "type":
												u = f;
												break;
											case "checked":
												c = f;
												break;
											case "defaultChecked":
												d = f;
												break;
											case "value":
												a = f;
												break;
											case "defaultValue":
												s = f;
												break;
											case "children":
											case "dangerouslySetInnerHTML":
												if (null != f) throw Error(i(137, t));
												break;
											default:
												Wc(e, t, l, f, n, null);
										}
								}
							return yt(e, a, s, c, d, u, o, !1), void dt(e);
						case "select":
							for (o in (Tc("invalid", e), (l = u = a = null), n))
								if (n.hasOwnProperty(o) && null != (s = n[o]))
									switch (o) {
										case "value":
											a = s;
											break;
										case "defaultValue":
											u = s;
											break;
										case "multiple":
											l = s;
										default:
											Wc(e, t, o, s, n, null);
									}
							return (
								(t = a),
								(n = u),
								(e.multiple = !!l),
								void (null != t
									? vt(e, !!l, t, !1)
									: null != n && vt(e, !!l, n, !0))
							);
						case "textarea":
							for (u in (Tc("invalid", e), (a = o = l = null), n))
								if (n.hasOwnProperty(u) && null != (s = n[u]))
									switch (u) {
										case "value":
											l = s;
											break;
										case "defaultValue":
											o = s;
											break;
										case "children":
											a = s;
											break;
										case "dangerouslySetInnerHTML":
											if (null != s) throw Error(i(91));
											break;
										default:
											Wc(e, t, u, s, n, null);
									}
							return Et(e, l, o, a), void dt(e);
						case "option":
							for (c in n)
								n.hasOwnProperty(c) &&
									null != (l = n[c]) &&
									("selected" === c
										? (e.selected =
												l && "function" != typeof l && "symbol" !== r(l))
										: Wc(e, t, c, l, n, null));
							return;
						case "dialog":
							Tc("cancel", e), Tc("close", e);
							break;
						case "iframe":
						case "object":
							Tc("load", e);
							break;
						case "video":
						case "audio":
							for (l = 0; l < xc.length; l++) Tc(xc[l], e);
							break;
						case "image":
							Tc("error", e), Tc("load", e);
							break;
						case "details":
							Tc("toggle", e);
							break;
						case "embed":
						case "source":
						case "link":
							Tc("error", e), Tc("load", e);
						case "area":
						case "base":
						case "br":
						case "col":
						case "hr":
						case "keygen":
						case "meta":
						case "param":
						case "track":
						case "wbr":
						case "menuitem":
							for (d in n)
								if (n.hasOwnProperty(d) && null != (l = n[d]))
									switch (d) {
										case "children":
										case "dangerouslySetInnerHTML":
											throw Error(i(137, t));
										default:
											Wc(e, t, d, l, n, null);
									}
							return;
						default:
							if (xt(t)) {
								for (f in n)
									n.hasOwnProperty(f) &&
										void 0 !== (l = n[f]) &&
										Vc(e, t, f, l, n, void 0);
								return;
							}
					}
					for (s in n)
						n.hasOwnProperty(s) &&
							null != (l = n[s]) &&
							Wc(e, t, s, l, n, null);
				}
				var Gc = null,
					Qc = null;
				function Kc(e) {
					return 9 === e.nodeType ? e : e.ownerDocument;
				}
				function Yc(e) {
					switch (e) {
						case "http://www.w3.org/2000/svg":
							return 1;
						case "http://www.w3.org/1998/Math/MathML":
							return 2;
						default:
							return 0;
					}
				}
				function Xc(e, t) {
					if (0 === e)
						switch (t) {
							case "svg":
								return 1;
							case "math":
								return 2;
							default:
								return 0;
						}
					return 1 === e && "foreignObject" === t ? 0 : e;
				}
				function Jc(e, t) {
					return (
						"textarea" === e ||
						"noscript" === e ||
						"string" == typeof t.children ||
						"number" == typeof t.children ||
						"bigint" == typeof t.children ||
						("object" === r(t.dangerouslySetInnerHTML) &&
							null !== t.dangerouslySetInnerHTML &&
							null != t.dangerouslySetInnerHTML.__html)
					);
				}
				var Zc = null,
					ed = "function" == typeof setTimeout ? setTimeout : void 0,
					td = "function" == typeof clearTimeout ? clearTimeout : void 0,
					nd = "function" == typeof Promise ? Promise : void 0,
					rd =
						"function" == typeof queueMicrotask
							? queueMicrotask
							: void 0 !== nd
							? function (e) {
									return nd.resolve(null).then(e).catch(ad);
							  }
							: ed;
				function ad(e) {
					setTimeout(function () {
						throw e;
					});
				}
				function ld(e, t) {
					var n = t,
						r = 0;
					do {
						var a = n.nextSibling;
						if ((e.removeChild(n), a && 8 === a.nodeType))
							if ("/$" === (n = a.data)) {
								if (0 === r) return e.removeChild(a), void pf(t);
								r--;
							} else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
						n = a;
					} while (n);
					pf(t);
				}
				function od(e) {
					var t = e.firstChild;
					for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
						var n = t;
						switch (((t = t.nextSibling), n.nodeName)) {
							case "HTML":
							case "HEAD":
							case "BODY":
								od(n), qe(n);
								continue;
							case "SCRIPT":
							case "STYLE":
								continue;
							case "LINK":
								if ("stylesheet" === n.rel.toLowerCase()) continue;
						}
						e.removeChild(n);
					}
				}
				function id(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if (
								"$" === (t = e.data) ||
								"$!" === t ||
								"$?" === t ||
								"F!" === t ||
								"F" === t
							)
								break;
							if ("/$" === t) return null;
						}
					}
					return e;
				}
				function ud(e) {
					e = e.previousSibling;
					for (var t = 0; e; ) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ("$" === n || "$!" === n || "$?" === n) {
								if (0 === t) return e;
								t--;
							} else "/$" === n && t++;
						}
						e = e.previousSibling;
					}
					return null;
				}
				function sd(e, t, n) {
					switch (((t = Kc(n)), e)) {
						case "html":
							if (!(e = t.documentElement)) throw Error(i(452));
							return e;
						case "head":
							if (!(e = t.head)) throw Error(i(453));
							return e;
						case "body":
							if (!(e = t.body)) throw Error(i(454));
							return e;
						default:
							throw Error(i(451));
					}
				}
				var cd = new Map(),
					dd = new Set();
				function fd(e) {
					return "function" == typeof e.getRootNode
						? e.getRootNode()
						: e.ownerDocument;
				}
				var md = U.d;
				U.d = {
					f: function () {
						var e = md.f(),
							t = Is();
						return e || t;
					},
					r: function (e) {
						var t = Qe(e);
						null !== t && 5 === t.tag && "form" === t.type ? mo(t) : md.r(e);
					},
					D: function (e) {
						md.D(e), hd("dns-prefetch", e, null);
					},
					C: function (e, t) {
						md.C(e, t), hd("preconnect", e, t);
					},
					L: function (e, t, n) {
						md.L(e, t, n);
						var r = pd;
						if (r && e && t) {
							var a = 'link[rel="preload"][as="' + ht(t) + '"]';
							"image" === t && n && n.imageSrcSet
								? ((a += '[imagesrcset="' + ht(n.imageSrcSet) + '"]'),
								  "string" == typeof n.imageSizes &&
										(a += '[imagesizes="' + ht(n.imageSizes) + '"]'))
								: (a += '[href="' + ht(e) + '"]');
							var l = a;
							switch (t) {
								case "style":
									l = yd(e);
									break;
								case "script":
									l = wd(e);
							}
							cd.has(l) ||
								((e = L(
									{
										rel: "preload",
										href: "image" === t && n && n.imageSrcSet ? void 0 : e,
										as: t,
									},
									n
								)),
								cd.set(l, e),
								null !== r.querySelector(a) ||
									("style" === t && r.querySelector(bd(l))) ||
									("script" === t && r.querySelector(Ed(l))) ||
									(qc((t = r.createElement("link")), "link", e),
									Xe(t),
									r.head.appendChild(t)));
						}
					},
					m: function (e, t) {
						md.m(e, t);
						var n = pd;
						if (n && e) {
							var r = t && "string" == typeof t.as ? t.as : "script",
								a =
									'link[rel="modulepreload"][as="' +
									ht(r) +
									'"][href="' +
									ht(e) +
									'"]',
								l = a;
							switch (r) {
								case "audioworklet":
								case "paintworklet":
								case "serviceworker":
								case "sharedworker":
								case "worker":
								case "script":
									l = wd(e);
							}
							if (
								!cd.has(l) &&
								((e = L({ rel: "modulepreload", href: e }, t)),
								cd.set(l, e),
								null === n.querySelector(a))
							) {
								switch (r) {
									case "audioworklet":
									case "paintworklet":
									case "serviceworker":
									case "sharedworker":
									case "worker":
									case "script":
										if (n.querySelector(Ed(l))) return;
								}
								qc((r = n.createElement("link")), "link", e),
									Xe(r),
									n.head.appendChild(r);
							}
						}
					},
					X: function (e, t) {
						md.X(e, t);
						var n = pd;
						if (n && e) {
							var r = Ye(n).hoistableScripts,
								a = wd(e),
								l = r.get(a);
							l ||
								((l = n.querySelector(Ed(a))) ||
									((e = L({ src: e, async: !0 }, t)),
									(t = cd.get(a)) && Nd(e, t),
									Xe((l = n.createElement("script"))),
									qc(l, "link", e),
									n.head.appendChild(l)),
								(l = { type: "script", instance: l, count: 1, state: null }),
								r.set(a, l));
						}
					},
					S: function (e, t, n) {
						md.S(e, t, n);
						var r = pd;
						if (r && e) {
							var a = Ye(r).hoistableStyles,
								l = yd(e);
							t = t || "default";
							var o = a.get(l);
							if (!o) {
								var i = { loading: 0, preload: null };
								if ((o = r.querySelector(bd(l)))) i.loading = 5;
								else {
									(e = L(
										{ rel: "stylesheet", href: e, "data-precedence": t },
										n
									)),
										(n = cd.get(l)) && Cd(e, n);
									var u = (o = r.createElement("link"));
									Xe(u),
										qc(u, "link", e),
										(u._p = new Promise(function (e, t) {
											(u.onload = e), (u.onerror = t);
										})),
										u.addEventListener("load", function () {
											i.loading |= 1;
										}),
										u.addEventListener("error", function () {
											i.loading |= 2;
										}),
										(i.loading |= 4),
										kd(o, t, r);
								}
								(o = { type: "stylesheet", instance: o, count: 1, state: i }),
									a.set(l, o);
							}
						}
					},
					M: function (e, t) {
						md.M(e, t);
						var n = pd;
						if (n && e) {
							var r = Ye(n).hoistableScripts,
								a = wd(e),
								l = r.get(a);
							l ||
								((l = n.querySelector(Ed(a))) ||
									((e = L({ src: e, async: !0, type: "module" }, t)),
									(t = cd.get(a)) && Nd(e, t),
									Xe((l = n.createElement("script"))),
									qc(l, "link", e),
									n.head.appendChild(l)),
								(l = { type: "script", instance: l, count: 1, state: null }),
								r.set(a, l));
						}
					},
				};
				var pd = "undefined" == typeof document ? null : document;
				function hd(e, t, n) {
					var r = pd;
					if (r && "string" == typeof t && t) {
						var a = ht(t);
						(a = 'link[rel="' + e + '"][href="' + a + '"]'),
							"string" == typeof n && (a += '[crossorigin="' + n + '"]'),
							dd.has(a) ||
								(dd.add(a),
								(e = { rel: e, crossOrigin: n, href: t }),
								null === r.querySelector(a) &&
									(qc((t = r.createElement("link")), "link", e),
									Xe(t),
									r.head.appendChild(t)));
					}
				}
				function gd(e, t, n, a) {
					var l,
						o,
						u,
						s,
						c = (c = X.current) ? fd(c) : null;
					if (!c) throw Error(i(446));
					switch (e) {
						case "meta":
						case "title":
							return null;
						case "style":
							return "string" == typeof n.precedence &&
								"string" == typeof n.href
								? ((t = yd(n.href)),
								  (a = (n = Ye(c).hoistableStyles).get(t)) ||
										((a = {
											type: "style",
											instance: null,
											count: 0,
											state: null,
										}),
										n.set(t, a)),
								  a)
								: { type: "void", instance: null, count: 0, state: null };
						case "link":
							if (
								"stylesheet" === n.rel &&
								"string" == typeof n.href &&
								"string" == typeof n.precedence
							) {
								e = yd(n.href);
								var d = Ye(c).hoistableStyles,
									f = d.get(e);
								if (
									(f ||
										((c = c.ownerDocument || c),
										(f = {
											type: "stylesheet",
											instance: null,
											count: 0,
											state: { loading: 0, preload: null },
										}),
										d.set(e, f),
										(d = c.querySelector(bd(e))) &&
											!d._p &&
											((f.instance = d), (f.state.loading = 5)),
										cd.has(e) ||
											((n = {
												rel: "preload",
												as: "style",
												href: n.href,
												crossOrigin: n.crossOrigin,
												integrity: n.integrity,
												media: n.media,
												hrefLang: n.hrefLang,
												referrerPolicy: n.referrerPolicy,
											}),
											cd.set(e, n),
											d ||
												((l = c),
												(o = e),
												(u = n),
												(s = f.state),
												l.querySelector(
													'link[rel="preload"][as="style"][' + o + "]"
												)
													? (s.loading = 1)
													: ((o = l.createElement("link")),
													  (s.preload = o),
													  o.addEventListener("load", function () {
															return (s.loading |= 1);
													  }),
													  o.addEventListener("error", function () {
															return (s.loading |= 2);
													  }),
													  qc(o, "link", u),
													  Xe(o),
													  l.head.appendChild(o))))),
									t && null === a)
								)
									throw Error(i(528, ""));
								return f;
							}
							if (t && null !== a) throw Error(i(529, ""));
							return null;
						case "script":
							return (
								(t = n.async),
								"string" == typeof (n = n.src) &&
								t &&
								"function" != typeof t &&
								"symbol" !== r(t)
									? ((t = wd(n)),
									  (a = (n = Ye(c).hoistableScripts).get(t)) ||
											((a = {
												type: "script",
												instance: null,
												count: 0,
												state: null,
											}),
											n.set(t, a)),
									  a)
									: { type: "void", instance: null, count: 0, state: null }
							);
						default:
							throw Error(i(444, e));
					}
				}
				function yd(e) {
					return 'href="' + ht(e) + '"';
				}
				function bd(e) {
					return 'link[rel="stylesheet"][' + e + "]";
				}
				function vd(e) {
					return L({}, e, {
						"data-precedence": e.precedence,
						precedence: null,
					});
				}
				function wd(e) {
					return '[src="' + ht(e) + '"]';
				}
				function Ed(e) {
					return "script[async]" + e;
				}
				function Sd(e, t, n) {
					if ((t.count++, null === t.instance))
						switch (t.type) {
							case "style":
								var r = e.querySelector(
									'style[data-href~="' + ht(n.href) + '"]'
								);
								if (r) return (t.instance = r), Xe(r), r;
								var a = L({}, n, {
									"data-href": n.href,
									"data-precedence": n.precedence,
									href: null,
									precedence: null,
								});
								return (
									Xe((r = (e.ownerDocument || e).createElement("style"))),
									qc(r, "style", a),
									kd(r, n.precedence, e),
									(t.instance = r)
								);
							case "stylesheet":
								a = yd(n.href);
								var l = e.querySelector(bd(a));
								if (l)
									return (t.state.loading |= 4), (t.instance = l), Xe(l), l;
								(r = vd(n)),
									(a = cd.get(a)) && Cd(r, a),
									Xe((l = (e.ownerDocument || e).createElement("link")));
								var o = l;
								return (
									(o._p = new Promise(function (e, t) {
										(o.onload = e), (o.onerror = t);
									})),
									qc(l, "link", r),
									(t.state.loading |= 4),
									kd(l, n.precedence, e),
									(t.instance = l)
								);
							case "script":
								return (
									(l = wd(n.src)),
									(a = e.querySelector(Ed(l)))
										? ((t.instance = a), Xe(a), a)
										: ((r = n),
										  (a = cd.get(l)) && Nd((r = L({}, n)), a),
										  Xe(
												(a = (e = e.ownerDocument || e).createElement("script"))
										  ),
										  qc(a, "link", r),
										  e.head.appendChild(a),
										  (t.instance = a))
								);
							case "void":
								return null;
							default:
								throw Error(i(443, t.type));
						}
					else
						"stylesheet" === t.type &&
							!(4 & t.state.loading) &&
							((r = t.instance),
							(t.state.loading |= 4),
							kd(r, n.precedence, e));
					return t.instance;
				}
				function kd(e, t, n) {
					for (
						var r = n.querySelectorAll(
								'link[rel="stylesheet"][data-precedence],style[data-precedence]'
							),
							a = r.length ? r[r.length - 1] : null,
							l = a,
							o = 0;
						o < r.length;
						o++
					) {
						var i = r[o];
						if (i.dataset.precedence === t) l = i;
						else if (l !== a) break;
					}
					l
						? l.parentNode.insertBefore(e, l.nextSibling)
						: (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
				}
				function Cd(e, t) {
					null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
						null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
						null == e.title && (e.title = t.title);
				}
				function Nd(e, t) {
					null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
						null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
						null == e.integrity && (e.integrity = t.integrity);
				}
				var xd = null;
				function Ad(e, t, n) {
					if (null === xd) {
						var r = new Map(),
							a = (xd = new Map());
						a.set(n, r);
					} else (r = (a = xd).get(n)) || ((r = new Map()), a.set(n, r));
					if (r.has(e)) return r;
					for (
						r.set(e, null), n = n.getElementsByTagName(e), a = 0;
						a < n.length;
						a++
					) {
						var l = n[a];
						if (
							!(
								l[Ve] ||
								l[Ie] ||
								("link" === e && "stylesheet" === l.getAttribute("rel"))
							) &&
							"http://www.w3.org/2000/svg" !== l.namespaceURI
						) {
							var o = l.getAttribute(t) || "";
							o = e + o;
							var i = r.get(o);
							i ? i.push(l) : r.set(o, [l]);
						}
					}
					return r;
				}
				function Pd(e, t, n) {
					(e = e.ownerDocument || e).head.insertBefore(
						n,
						"title" === t ? e.querySelector("head > title") : null
					);
				}
				function Td(e) {
					return !!("stylesheet" !== e.type || 3 & e.state.loading);
				}
				var _d = null;
				function Ld() {}
				function zd() {
					if ((this.count--, 0 === this.count))
						if (this.stylesheets) Rd(this, this.stylesheets);
						else if (this.unsuspend) {
							var e = this.unsuspend;
							(this.unsuspend = null), e();
						}
				}
				var Od = null;
				function Rd(e, t) {
					(e.stylesheets = null),
						null !== e.unsuspend &&
							(e.count++,
							(Od = new Map()),
							t.forEach(Fd, e),
							(Od = null),
							zd.call(e));
				}
				function Fd(e, t) {
					if (!(4 & t.state.loading)) {
						var n = Od.get(e);
						if (n) var r = n.get(null);
						else {
							(n = new Map()), Od.set(e, n);
							for (
								var a = e.querySelectorAll(
										"link[data-precedence],style[data-precedence]"
									),
									l = 0;
								l < a.length;
								l++
							) {
								var o = a[l];
								("LINK" !== o.nodeName &&
									"not all" === o.getAttribute("media")) ||
									(n.set(o.dataset.precedence, o), (r = o));
							}
							r && n.set(null, r);
						}
						(o = (a = t.instance).getAttribute("data-precedence")),
							(l = n.get(o) || r) === r && n.set(null, a),
							n.set(o, a),
							this.count++,
							(r = zd.bind(this)),
							a.addEventListener("load", r),
							a.addEventListener("error", r),
							l
								? l.parentNode.insertBefore(a, l.nextSibling)
								: (e = 9 === e.nodeType ? e.head : e).insertBefore(
										a,
										e.firstChild
								  ),
							(t.state.loading |= 4);
					}
				}
				var Md = {
					$$typeof: g,
					Provider: null,
					Consumer: null,
					_currentValue: H,
					_currentValue2: H,
					_threadCount: 0,
				};
				function Dd(e, t, n, r, a, l, o, i) {
					(this.tag = 1),
						(this.containerInfo = e),
						(this.finishedWork =
							this.pingCache =
							this.current =
							this.pendingChildren =
								null),
						(this.timeoutHandle = -1),
						(this.callbackNode =
							this.next =
							this.pendingContext =
							this.context =
							this.cancelPendingCommit =
								null),
						(this.callbackPriority = 0),
						(this.expirationTimes = Le(-1)),
						(this.entangledLanes =
							this.shellSuspendCounter =
							this.errorRecoveryDisabledLanes =
							this.finishedLanes =
							this.expiredLanes =
							this.warmLanes =
							this.pingedLanes =
							this.suspendedLanes =
							this.pendingLanes =
								0),
						(this.entanglements = Le(0)),
						(this.hiddenUpdates = Le(null)),
						(this.identifierPrefix = r),
						(this.onUncaughtError = a),
						(this.onCaughtError = l),
						(this.onRecoverableError = o),
						(this.pooledCache = null),
						(this.pooledCacheLanes = 0),
						(this.formState = i),
						(this.incompleteTransitions = new Map());
				}
				function Id(e, t, n, r, a, l) {
					(a = (function (e) {
						return e ? (e = zr) : zr;
					})(a)),
						null === r.context ? (r.context = a) : (r.pendingContext = a),
						((r = Li(t)).payload = { element: n }),
						null !== (l = void 0 === l ? null : l) && (r.callback = l),
						null !== (n = zi(e, r, t)) && (zs(n, 0, t), Oi(n, e, t));
				}
				function $d(e, t) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t;
					}
				}
				function jd(e, t) {
					$d(e, t), (e = e.alternate) && $d(e, t);
				}
				function Bd(e) {
					if (13 === e.tag) {
						var t = Tr(e, 67108864);
						null !== t && zs(t, 0, 67108864), jd(e, 67108864);
					}
				}
				var Ud = !0;
				function Hd(e, t, n, r) {
					var a = _.T;
					_.T = null;
					var l = U.p;
					try {
						(U.p = 2), Vd(e, t, n, r);
					} finally {
						(U.p = l), (_.T = a);
					}
				}
				function Wd(e, t, n, r) {
					var a = _.T;
					_.T = null;
					var l = U.p;
					try {
						(U.p = 8), Vd(e, t, n, r);
					} finally {
						(U.p = l), (_.T = a);
					}
				}
				function Vd(e, t, n, r) {
					if (Ud) {
						var a = qd(r);
						if (null === a) Rc(e, t, r, Gd, n), af(e, r);
						else if (
							(function (e, t, n, r, a) {
								switch (t) {
									case "focusin":
										return (Xd = lf(Xd, e, t, n, r, a)), !0;
									case "dragenter":
										return (Jd = lf(Jd, e, t, n, r, a)), !0;
									case "mouseover":
										return (Zd = lf(Zd, e, t, n, r, a)), !0;
									case "pointerover":
										var l = a.pointerId;
										return ef.set(l, lf(ef.get(l) || null, e, t, n, r, a)), !0;
									case "gotpointercapture":
										return (
											(l = a.pointerId),
											tf.set(l, lf(tf.get(l) || null, e, t, n, r, a)),
											!0
										);
								}
								return !1;
							})(a, e, t, n, r)
						)
							r.stopPropagation();
						else if ((af(e, r), 4 & t && -1 < rf.indexOf(e))) {
							for (; null !== a; ) {
								var l = Qe(a);
								if (null !== l)
									switch (l.tag) {
										case 3:
											if (
												(l = l.stateNode).current.memoizedState.isDehydrated
											) {
												var o = Ne(l.pendingLanes);
												if (0 !== o) {
													var i = l;
													for (
														i.pendingLanes |= 2, i.entangledLanes |= 2;
														o;

													) {
														var u = 1 << (31 - we(o));
														(i.entanglements[1] |= u), (o &= ~u);
													}
													hc(l), !(6 & es) && ((ws = ue() + 500), gc(0, !1));
												}
											}
											break;
										case 13:
											null !== (i = Tr(l, 2)) && zs(i, 0, 2), Is(), jd(l, 2);
									}
								if ((null === (l = qd(r)) && Rc(e, t, r, Gd, n), l === a))
									break;
								a = l;
							}
							null !== a && r.stopPropagation();
						} else Rc(e, t, r, null, n);
					}
				}
				function qd(e) {
					return Qd((e = Lt(e)));
				}
				var Gd = null;
				function Qd(e) {
					if (((Gd = null), null !== (e = Ge(e)))) {
						var t = D(e);
						if (null === t) e = null;
						else {
							var n = t.tag;
							if (13 === n) {
								if (null !== (e = I(t))) return e;
								e = null;
							} else if (3 === n) {
								if (t.stateNode.current.memoizedState.isDehydrated)
									return 3 === t.tag ? t.stateNode.containerInfo : null;
								e = null;
							} else t !== e && (e = null);
						}
					}
					return (Gd = e), null;
				}
				function Kd(e) {
					switch (e) {
						case "beforetoggle":
						case "cancel":
						case "click":
						case "close":
						case "contextmenu":
						case "copy":
						case "cut":
						case "auxclick":
						case "dblclick":
						case "dragend":
						case "dragstart":
						case "drop":
						case "focusin":
						case "focusout":
						case "input":
						case "invalid":
						case "keydown":
						case "keypress":
						case "keyup":
						case "mousedown":
						case "mouseup":
						case "paste":
						case "pause":
						case "play":
						case "pointercancel":
						case "pointerdown":
						case "pointerup":
						case "ratechange":
						case "reset":
						case "resize":
						case "seeked":
						case "submit":
						case "toggle":
						case "touchcancel":
						case "touchend":
						case "touchstart":
						case "volumechange":
						case "change":
						case "selectionchange":
						case "textInput":
						case "compositionstart":
						case "compositionend":
						case "compositionupdate":
						case "beforeblur":
						case "afterblur":
						case "beforeinput":
						case "blur":
						case "fullscreenchange":
						case "focus":
						case "hashchange":
						case "popstate":
						case "select":
						case "selectstart":
							return 2;
						case "drag":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "mousemove":
						case "mouseout":
						case "mouseover":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "scroll":
						case "touchmove":
						case "wheel":
						case "mouseenter":
						case "mouseleave":
						case "pointerenter":
						case "pointerleave":
							return 8;
						case "message":
							switch (se()) {
								case ce:
									return 2;
								case de:
									return 8;
								case fe:
								case me:
									return 32;
								case pe:
									return 268435456;
								default:
									return 32;
							}
						default:
							return 32;
					}
				}
				var Yd = !1,
					Xd = null,
					Jd = null,
					Zd = null,
					ef = new Map(),
					tf = new Map(),
					nf = [],
					rf =
						"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
							" "
						);
				function af(e, t) {
					switch (e) {
						case "focusin":
						case "focusout":
							Xd = null;
							break;
						case "dragenter":
						case "dragleave":
							Jd = null;
							break;
						case "mouseover":
						case "mouseout":
							Zd = null;
							break;
						case "pointerover":
						case "pointerout":
							ef.delete(t.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							tf.delete(t.pointerId);
					}
				}
				function lf(e, t, n, r, a, l) {
					return null === e || e.nativeEvent !== l
						? ((e = {
								blockedOn: t,
								domEventName: n,
								eventSystemFlags: r,
								nativeEvent: l,
								targetContainers: [a],
						  }),
						  null !== t && null !== (t = Qe(t)) && Bd(t),
						  e)
						: ((e.eventSystemFlags |= r),
						  (t = e.targetContainers),
						  null !== a && -1 === t.indexOf(a) && t.push(a),
						  e);
				}
				function of(e) {
					var t = Ge(e.target);
					if (null !== t) {
						var n = D(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = I(n)))
									return (
										(e.blockedOn = t),
										void (function (e) {
											var t = U.p;
											try {
												return (
													(U.p = e),
													(function () {
														if (13 === n.tag) {
															var e = _s(),
																t = Tr(n, e);
															null !== t && zs(t, 0, e), jd(n, e);
														}
													})()
												);
											} finally {
												U.p = t;
											}
										})(e.priority)
									);
							} else if (
								3 === t &&
								n.stateNode.current.memoizedState.isDehydrated
							)
								return void (e.blockedOn =
									3 === n.tag ? n.stateNode.containerInfo : null);
					}
					e.blockedOn = null;
				}
				function uf(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length; ) {
						var n = qd(e.nativeEvent);
						if (null !== n)
							return null !== (t = Qe(n)) && Bd(t), (e.blockedOn = n), !1;
						var r = new (n = e.nativeEvent).constructor(n.type, n);
						(_t = r), n.target.dispatchEvent(r), (_t = null), t.shift();
					}
					return !0;
				}
				function sf(e, t, n) {
					uf(e) && n.delete(t);
				}
				function cf() {
					(Yd = !1),
						null !== Xd && uf(Xd) && (Xd = null),
						null !== Jd && uf(Jd) && (Jd = null),
						null !== Zd && uf(Zd) && (Zd = null),
						ef.forEach(sf),
						tf.forEach(sf);
				}
				function df(e, t) {
					e.blockedOn === t &&
						((e.blockedOn = null),
						Yd ||
							((Yd = !0),
							a.unstable_scheduleCallback(a.unstable_NormalPriority, cf)));
				}
				var ff = null;
				function mf(e) {
					ff !== e &&
						((ff = e),
						a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
							ff === e && (ff = null);
							for (var t = 0; t < e.length; t += 3) {
								var n = e[t],
									r = e[t + 1],
									a = e[t + 2];
								if ("function" != typeof r) {
									if (null === Qd(r || n)) continue;
									break;
								}
								var l = Qe(n);
								null !== l &&
									(e.splice(t, 3),
									(t -= 3),
									co(
										l,
										{ pending: !0, data: a, method: n.method, action: r },
										r,
										a
									));
							}
						}));
				}
				function pf(e) {
					function t(t) {
						return df(t, e);
					}
					null !== Xd && df(Xd, e),
						null !== Jd && df(Jd, e),
						null !== Zd && df(Zd, e),
						ef.forEach(t),
						tf.forEach(t);
					for (var n = 0; n < nf.length; n++) {
						var r = nf[n];
						r.blockedOn === e && (r.blockedOn = null);
					}
					for (; 0 < nf.length && null === (n = nf[0]).blockedOn; )
						of(n), null === n.blockedOn && nf.shift();
					if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
						for (r = 0; r < n.length; r += 3) {
							var a = n[r],
								l = n[r + 1],
								o = a[$e] || null;
							if ("function" == typeof l) o || mf(n);
							else if (o) {
								var i = null;
								if (l && l.hasAttribute("formAction")) {
									if (((a = l), (o = l[$e] || null))) i = o.formAction;
									else if (null !== Qd(a)) continue;
								} else i = o.action;
								"function" == typeof i
									? (n[r + 1] = i)
									: (n.splice(r, 3), (r -= 3)),
									mf(n);
							}
						}
				}
				function hf(e) {
					this._internalRoot = e;
				}
				function gf(e) {
					this._internalRoot = e;
				}
				(gf.prototype.render = hf.prototype.render =
					function (e) {
						var t = this._internalRoot;
						if (null === t) throw Error(i(409));
						Id(t.current, _s(), e, t, null, null);
					}),
					(gf.prototype.unmount = hf.prototype.unmount =
						function () {
							var e = this._internalRoot;
							if (null !== e) {
								this._internalRoot = null;
								var t = e.containerInfo;
								0 === e.tag && tc(),
									Id(e.current, 2, null, e, null, null),
									Is(),
									(t[je] = null);
							}
						}),
					(gf.prototype.unstable_scheduleHydration = function (e) {
						if (e) {
							var t = Me();
							e = { blockedOn: null, target: e, priority: t };
							for (
								var n = 0;
								n < nf.length && 0 !== t && t < nf[n].priority;
								n++
							);
							nf.splice(n, 0, e), 0 === n && of(e);
						}
					});
				var yf = l.version;
				if ("19.0.0" !== yf) throw Error(i(527, yf, "19.0.0"));
				U.findDOMNode = function (e) {
					var t = e._reactInternals;
					if (void 0 === t) {
						if ("function" == typeof e.render) throw Error(i(188));
						throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
					}
					return (
						(e = (function (e) {
							var t = e.alternate;
							if (!t) {
								if (null === (t = D(e))) throw Error(i(188));
								return t !== e ? null : e;
							}
							for (var n = e, r = t; ; ) {
								var a = n.return;
								if (null === a) break;
								var l = a.alternate;
								if (null === l) {
									if (null !== (r = a.return)) {
										n = r;
										continue;
									}
									break;
								}
								if (a.child === l.child) {
									for (l = a.child; l; ) {
										if (l === n) return $(a), e;
										if (l === r) return $(a), t;
										l = l.sibling;
									}
									throw Error(i(188));
								}
								if (n.return !== r.return) (n = a), (r = l);
								else {
									for (var o = !1, u = a.child; u; ) {
										if (u === n) {
											(o = !0), (n = a), (r = l);
											break;
										}
										if (u === r) {
											(o = !0), (r = a), (n = l);
											break;
										}
										u = u.sibling;
									}
									if (!o) {
										for (u = l.child; u; ) {
											if (u === n) {
												(o = !0), (n = l), (r = a);
												break;
											}
											if (u === r) {
												(o = !0), (r = l), (n = a);
												break;
											}
											u = u.sibling;
										}
										if (!o) throw Error(i(189));
									}
								}
								if (n.alternate !== r) throw Error(i(190));
							}
							if (3 !== n.tag) throw Error(i(188));
							return n.stateNode.current === n ? e : t;
						})(t)),
						null === (e = null !== e ? j(e) : null) ? null : e.stateNode
					);
				};
				var bf = {
					bundleType: 0,
					version: "19.0.0",
					rendererPackageName: "react-dom",
					currentDispatcherRef: _,
					findFiberByHostInstance: Ge,
					reconcilerVersion: "19.0.0",
				};
				if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var vf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!vf.isDisabled && vf.supportsFiber)
						try {
							(ye = vf.inject(bf)), (be = vf);
						} catch (e) {}
				}
				t.createRoot = function (e, t) {
					if (
						!(n = e) ||
						(1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType)
					)
						throw Error(i(299));
					var n,
						r = !1,
						a = "",
						l = Fo,
						o = Mo,
						u = Do;
					return (
						null != t &&
							(!0 === t.unstable_strictMode && (r = !0),
							void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
							void 0 !== t.onUncaughtError && (l = t.onUncaughtError),
							void 0 !== t.onCaughtError && (o = t.onCaughtError),
							void 0 !== t.onRecoverableError && (u = t.onRecoverableError),
							void 0 !== t.unstable_transitionCallbacks &&
								t.unstable_transitionCallbacks),
						(t = (function (e, t, n, r, a, l, o, i, u, s, c, d) {
							return (
								(e = new Dd(e, t, n, o, i, u, s, d)),
								(t = 1),
								!0 === l && (t |= 24),
								(l = Fu(3, null, null, t)),
								(e.current = l),
								(l.stateNode = e),
								(t = ja()).refCount++,
								(e.pooledCache = t),
								t.refCount++,
								(l.memoizedState = { element: r, isDehydrated: n, cache: t }),
								Ti(l),
								e
							);
						})(e, 1, !1, null, 0, r, a, l, o, u, 0, null)),
						(e[je] = t.current),
						zc(8 === e.nodeType ? e.parentNode : e),
						new hf(t)
					);
				};
			},
			716: (e, t, n) => {
				e.exports = n(335);
			},
			737: (e, t, n) => {
				!(function e() {
					if (
						"undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
						"function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
					)
						try {
							__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
						} catch (e) {
							console.error(e);
						}
				})(),
					(e.exports = n(269));
			},
			783: (e, t, n) => {
				n.d(t, { A: () => f });
				var r = n(247),
					a = n.n(r),
					l = n(221),
					o = n.n(l),
					i = n(339),
					u = n.n(i),
					s = new URL(n(462), n.b),
					c = o()(a()),
					d = u()(s);
				c.push([
					e.id,
					`@font-face{font-family:"Aurora";src:url(${d})}#mixin-button{box-shadow:5px 5px gray;text-shadow:0px 0px #f1c40f;transform:scale(1) rotate(0deg);transition:transform 1s}#mixin-button:hover{transform:scale(2) rotate(5deg);transition:transform 2s;color:rgba(101,224,101,.74)}.width{width:10vw}.size{background-size:10vw}.opacity{opacity:.1}html{background-color:#218891}h1,h3{font-family:"Aurora",sans-serif;text-align:center;color:#000069;font-weight:bold}body{background-color:#f1c40f;font-family:serif}p{color:#000069}.baskets{font-style:underline}#email,#message{width:fit-content}.border-dashed{border-style:dashed !important}.border-ridge{border-style:ridge !important}.border-groove{border-style:groove !important}h4{color:#000069;text-align:center;font-weight:bold}h2{color:#000069;font-weight:bold}form{color:#06f;font-weight:bold}`,
					"",
					{
						version: 3,
						sources: ["webpack://./style.scss"],
						names: [],
						mappings:
							"AAiBA,WACC,oBAAA,CACA,2CAAA,CA8BD,cAjBC,uBAAA,CAIA,2BAAA,CAIA,+BAAA,CACA,uBAAA,CAYA,oBARA,+BAAA,CACA,uBAAA,CAlBA,2BAtBS,CA4DV,OACC,UAAA,CAGD,MACC,oBAAA,CAGD,SACC,UAAA,CAGD,KACC,wBA3EQ,CA8ET,MAEC,+BArEa,CAsEb,iBAAA,CACA,aArFU,CAsFV,gBAAA,CAGD,KACC,wBAxFU,CAyFV,iBA5Ee,CA+EhB,EAvEC,aAvBU,CAkGX,SACC,oBAAA,CAGD,gBAEC,iBAAA,CAID,eACC,8BAAA,CAGD,cACC,6BAAA,CAGD,eACC,8BAAA,CAGD,GACC,aAzHU,CA0HV,iBAAA,CACA,gBAAA,CAGD,GACC,aA/HU,CAgIV,gBAAA,CAGD,KACC,UAnIW,CAoIX,gBAAA",
						sourcesContent: [
							'//CUSTOM COLORS\r\n$darkBlue: rgba(0, 0, 105, 1);\r\n$lightBlue: rgba(0, 102, 255, 1);\r\n$myYellow: rgba(241, 196, 15, 1);\r\n$myTeal: rgba(33, 136, 145, 1);\r\n$myGrey: rgba(128, 128, 128, 1);\r\n$myGreen: rgba(101, 224, 101, 0.74);\r\n\r\n//CUSTOM FONT\r\n// $primaryFont: "Aurora";\r\n// $secondaryFont: serif;\r\n// @font-face {\r\n//     font-family: "Aurora";\r\n//     src: url("Aurora.otf");\r\n// }\r\n$primaryFont: "Aurora", sans-serif;\r\n$secondaryFont: serif;\r\n@font-face {\r\n\tfont-family: "Aurora";\r\n\tsrc: url(/assets/Aurora.otf);\r\n}\r\n\r\n//MIXINS\r\n@mixin blueText {\r\n\tcolor: $darkBlue;\r\n}\r\n\r\n@mixin greenText {\r\n\tcolor: $myGreen;\r\n}\r\n\r\n@mixin boxShadow {\r\n\tbox-shadow: 5px 5px $myGrey;\r\n}\r\n\r\n@mixin textShadow {\r\n\ttext-shadow: 0px 0px $myYellow;\r\n}\r\n\r\n@mixin animation1 {\r\n\ttransform: scale(1) rotate(0deg);\r\n\ttransition: transform 1s;\r\n}\r\n\r\n@mixin animation2 {\r\n\ttransform: scale(2) rotate(5deg);\r\n\ttransition: transform 2s;\r\n}\r\n\r\n#mixin-button {\r\n\t@include boxShadow;\r\n\t@include textShadow;\r\n\t@include animation1;\r\n\t&:hover {\r\n\t\t@include animation2;\r\n\t\t@include greenText;\r\n\t}\r\n}\r\n\r\n//BACKGROUND IMAGE\r\n//$sun: url("sun.png");\r\n// $sun: url(../assets/sun.png);\r\n// .bg-image {\r\n// \tbackground-image: $sun;\r\n// }\r\n\r\n.width {\r\n\twidth: 10vw;\r\n}\r\n\r\n.size {\r\n\tbackground-size: 10vw;\r\n}\r\n\r\n.opacity {\r\n\topacity: 0.1;\r\n}\r\n\r\nhtml {\r\n\tbackground-color: $myTeal;\r\n}\r\n\r\nh1,\r\nh3 {\r\n\tfont-family: $primaryFont;\r\n\ttext-align: center;\r\n\tcolor: $darkBlue;\r\n\tfont-weight: bold;\r\n}\r\n\r\nbody {\r\n\tbackground-color: $myYellow;\r\n\tfont-family: $secondaryFont;\r\n}\r\n\r\np {\r\n\t@include blueText;\r\n}\r\n\r\n.baskets {\r\n\tfont-style: underline;\r\n}\r\n\r\n#email,\r\n#message {\r\n\twidth: fit-content;\r\n}\r\n\r\n//\r\n.border-dashed {\r\n\tborder-style: dashed !important;\r\n}\r\n//CONTACT PAGE\r\n.border-ridge {\r\n\tborder-style: ridge !important;\r\n}\r\n//CONTACT PAGE\r\n.border-groove {\r\n\tborder-style: groove !important;\r\n}\r\n\r\nh4 {\r\n\tcolor: $darkBlue;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}\r\n\r\nh2 {\r\n\tcolor: $darkBlue;\r\n\tfont-weight: bold;\r\n}\r\n\r\nform {\r\n\tcolor: $lightBlue;\r\n\tfont-weight: bold;\r\n}\r\n',
						],
						sourceRoot: "",
					},
				]);
				const f = c;
			},
			904: (e) => {
				e.exports = function (e) {
					if ("undefined" == typeof document)
						return { update: function () {}, remove: function () {} };
					var t = e.insertStyleElement(e);
					return {
						update: function (n) {
							!(function (e, t, n) {
								var r = "";
								n.supports && (r += "@supports (".concat(n.supports, ") {")),
									n.media && (r += "@media ".concat(n.media, " {"));
								var a = void 0 !== n.layer;
								a &&
									(r += "@layer".concat(
										n.layer.length > 0 ? " ".concat(n.layer) : "",
										" {"
									)),
									(r += n.css),
									a && (r += "}"),
									n.media && (r += "}"),
									n.supports && (r += "}");
								var l = n.sourceMap;
								l &&
									"undefined" != typeof btoa &&
									(r +=
										"\n/*# sourceMappingURL=data:application/json;base64,".concat(
											btoa(unescape(encodeURIComponent(JSON.stringify(l)))),
											" */"
										)),
									t.styleTagTransform(r, e, t.options);
							})(t, e, n);
						},
						remove: function () {
							!(function (e) {
								if (null === e.parentNode) return !1;
								e.parentNode.removeChild(e);
							})(t);
						},
					};
				};
			},
			923: (e) => {
				var t = [];
				function n(e) {
					for (var n = -1, r = 0; r < t.length; r++)
						if (t[r].identifier === e) {
							n = r;
							break;
						}
					return n;
				}
				function r(e, r) {
					for (var l = {}, o = [], i = 0; i < e.length; i++) {
						var u = e[i],
							s = r.base ? u[0] + r.base : u[0],
							c = l[s] || 0,
							d = "".concat(s, " ").concat(c);
						l[s] = c + 1;
						var f = n(d),
							m = {
								css: u[1],
								media: u[2],
								sourceMap: u[3],
								supports: u[4],
								layer: u[5],
							};
						if (-1 !== f) t[f].references++, t[f].updater(m);
						else {
							var p = a(m, r);
							(r.byIndex = i),
								t.splice(i, 0, { identifier: d, updater: p, references: 1 });
						}
						o.push(d);
					}
					return o;
				}
				function a(e, t) {
					var n = t.domAPI(t);
					return (
						n.update(e),
						function (t) {
							if (t) {
								if (
									t.css === e.css &&
									t.media === e.media &&
									t.sourceMap === e.sourceMap &&
									t.supports === e.supports &&
									t.layer === e.layer
								)
									return;
								n.update((e = t));
							} else n.remove();
						}
					);
				}
				e.exports = function (e, a) {
					var l = r((e = e || []), (a = a || {}));
					return function (e) {
						e = e || [];
						for (var o = 0; o < l.length; o++) {
							var i = n(l[o]);
							t[i].references--;
						}
						for (var u = r(e, a), s = 0; s < l.length; s++) {
							var c = n(l[s]);
							0 === t[c].references && (t[c].updater(), t.splice(c, 1));
						}
						l = u;
					};
				};
			},
		},
		t = {};
	function n(r) {
		var a = t[r];
		if (void 0 !== a) return a.exports;
		var l = (t[r] = { id: r, exports: {} });
		return e[r](l, l.exports, n), l.exports;
	}
	(n.m = e),
		(n.n = (e) => {
			var t = e && e.__esModule ? () => e.default : () => e;
			return n.d(t, { a: t }), t;
		}),
		(n.d = (e, t) => {
			for (var r in t)
				n.o(t, r) &&
					!n.o(e, r) &&
					Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
		}),
		(n.g = (function () {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")();
			} catch (e) {
				if ("object" == typeof window) return window;
			}
		})()),
		(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(() => {
			var e;
			n.g.importScripts && (e = n.g.location + "");
			var t = n.g.document;
			if (
				!e &&
				t &&
				(t.currentScript &&
					"SCRIPT" === t.currentScript.tagName.toUpperCase() &&
					(e = t.currentScript.src),
				!e)
			) {
				var r = t.getElementsByTagName("script");
				if (r.length)
					for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e)); )
						e = r[a--].src;
			}
			if (!e)
				throw new Error(
					"Automatic publicPath is not supported in this browser"
				);
			(e = e
				.replace(/^blob:/, "")
				.replace(/#.*$/, "")
				.replace(/\?.*$/, "")
				.replace(/\/[^\/]+$/, "/")),
				(n.p = e);
		})(),
		(n.b = document.baseURI || self.location.href),
		(n.nc = void 0);
	var r = n(485),
		a = n(154),
		l = (n(161), "popstate");
	function o(e = {}) {
		return (function (e, t, n, r = {}) {
			let { window: a = document.defaultView, v5Compat: o = !1 } = r,
				u = a.history,
				f = "POP",
				m = null,
				p = h();
			function h() {
				return (u.state || { idx: null }).idx;
			}
			function g() {
				f = "POP";
				let e = h(),
					t = null == e ? null : e - p;
				(p = e), m && m({ action: f, location: b.location, delta: t });
			}
			function y(e) {
				let t =
						"null" !== a.location.origin ? a.location.origin : a.location.href,
					n = "string" == typeof e ? e : d(e);
				return (
					(n = n.replace(/ $/, "%20")),
					i(
						t,
						`No window.location.(origin|href) available to create URL for href: ${n}`
					),
					new URL(n, t)
				);
			}
			null == p && ((p = 0), u.replaceState({ ...u.state, idx: p }, ""));
			let b = {
				get action() {
					return f;
				},
				get location() {
					return e(a, u);
				},
				listen(e) {
					if (m) throw new Error("A history only accepts one active listener");
					return (
						a.addEventListener(l, g),
						(m = e),
						() => {
							a.removeEventListener(l, g), (m = null);
						}
					);
				},
				createHref: (e) => t(a, e),
				createURL: y,
				encodeLocation(e) {
					let t = y(e);
					return { pathname: t.pathname, search: t.search, hash: t.hash };
				},
				push: function (e, t) {
					f = "PUSH";
					let r = c(b.location, e, t);
					n && n(r, e), (p = h() + 1);
					let l = s(r, p),
						i = b.createHref(r);
					try {
						u.pushState(l, "", i);
					} catch (e) {
						if (e instanceof DOMException && "DataCloneError" === e.name)
							throw e;
						a.location.assign(i);
					}
					o && m && m({ action: f, location: b.location, delta: 1 });
				},
				replace: function (e, t) {
					f = "REPLACE";
					let r = c(b.location, e, t);
					n && n(r, e), (p = h());
					let a = s(r, p),
						l = b.createHref(r);
					u.replaceState(a, "", l),
						o && m && m({ action: f, location: b.location, delta: 0 });
				},
				go: (e) => u.go(e),
			};
			return b;
		})(
			function (e, t) {
				let { pathname: n, search: r, hash: a } = e.location;
				return c(
					"",
					{ pathname: n, search: r, hash: a },
					(t.state && t.state.usr) || null,
					(t.state && t.state.key) || "default"
				);
			},
			function (e, t) {
				return "string" == typeof t ? t : d(t);
			},
			null,
			e
		);
	}
	function i(e, t) {
		if (!1 === e || null == e) throw new Error(t);
	}
	function u(e, t) {
		if (!e) {
			"undefined" != typeof console && console.warn(t);
			try {
				throw new Error(t);
			} catch (e) {}
		}
	}
	function s(e, t) {
		return { usr: e.state, key: e.key, idx: t };
	}
	function c(e, t, n = null, r) {
		return {
			pathname: "string" == typeof e ? e : e.pathname,
			search: "",
			hash: "",
			...("string" == typeof t ? f(t) : t),
			state: n,
			key: (t && t.key) || r || Math.random().toString(36).substring(2, 10),
		};
	}
	function d({ pathname: e = "/", search: t = "", hash: n = "" }) {
		return (
			t && "?" !== t && (e += "?" === t.charAt(0) ? t : "?" + t),
			n && "#" !== n && (e += "#" === n.charAt(0) ? n : "#" + n),
			e
		);
	}
	function f(e) {
		let t = {};
		if (e) {
			let n = e.indexOf("#");
			n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
			let r = e.indexOf("?");
			r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
				e && (t.pathname = e);
		}
		return t;
	}
	function m(e, t, n = "/") {
		return (function (e, t, n, r) {
			let a = A(("string" == typeof t ? f(t) : t).pathname || "/", n);
			if (null == a) return null;
			let l = p(e);
			!(function (e) {
				e.sort((e, t) =>
					e.score !== t.score
						? t.score - e.score
						: (function (e, t) {
								return e.length === t.length &&
									e.slice(0, -1).every((e, n) => e === t[n])
									? e[e.length - 1] - t[t.length - 1]
									: 0;
						  })(
								e.routesMeta.map((e) => e.childrenIndex),
								t.routesMeta.map((e) => e.childrenIndex)
						  )
				);
			})(l);
			let o = null;
			for (let e = 0; null == o && e < l.length; ++e) {
				let t = x(a);
				o = C(l[e], t, r);
			}
			return o;
		})(e, t, n, !1);
	}
	function p(e, t = [], n = [], r = "") {
		let a = (e, a, l) => {
			let o = {
				relativePath: void 0 === l ? e.path || "" : l,
				caseSensitive: !0 === e.caseSensitive,
				childrenIndex: a,
				route: e,
			};
			o.relativePath.startsWith("/") &&
				(i(
					o.relativePath.startsWith(r),
					`Absolute route path "${o.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
				),
				(o.relativePath = o.relativePath.slice(r.length)));
			let u = L([r, o.relativePath]),
				s = n.concat(o);
			e.children &&
				e.children.length > 0 &&
				(i(
					!0 !== e.index,
					`Index routes must not have child routes. Please remove all child routes from route path "${u}".`
				),
				p(e.children, t, s, u)),
				(null != e.path || e.index) &&
					t.push({ path: u, score: k(u, e.index), routesMeta: s });
		};
		return (
			e.forEach((e, t) => {
				if ("" !== e.path && e.path?.includes("?"))
					for (let n of h(e.path)) a(e, t, n);
				else a(e, t);
			}),
			t
		);
	}
	function h(e) {
		let t = e.split("/");
		if (0 === t.length) return [];
		let [n, ...r] = t,
			a = n.endsWith("?"),
			l = n.replace(/\?$/, "");
		if (0 === r.length) return a ? [l, ""] : [l];
		let o = h(r.join("/")),
			i = [];
		return (
			i.push(...o.map((e) => ("" === e ? l : [l, e].join("/")))),
			a && i.push(...o),
			i.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
		);
	}
	new WeakMap();
	var g = /^:[\w-]+$/,
		y = 3,
		b = 2,
		v = 1,
		w = 10,
		E = -2,
		S = (e) => "*" === e;
	function k(e, t) {
		let n = e.split("/"),
			r = n.length;
		return (
			n.some(S) && (r += E),
			t && (r += b),
			n
				.filter((e) => !S(e))
				.reduce((e, t) => e + (g.test(t) ? y : "" === t ? v : w), r)
		);
	}
	function C(e, t, n = !1) {
		let { routesMeta: r } = e,
			a = {},
			l = "/",
			o = [];
		for (let e = 0; e < r.length; ++e) {
			let i = r[e],
				u = e === r.length - 1,
				s = "/" === l ? t : t.slice(l.length) || "/",
				c = N(
					{ path: i.relativePath, caseSensitive: i.caseSensitive, end: u },
					s
				),
				d = i.route;
			if (
				(!c &&
					u &&
					n &&
					!r[r.length - 1].route.index &&
					(c = N(
						{ path: i.relativePath, caseSensitive: i.caseSensitive, end: !1 },
						s
					)),
				!c)
			)
				return null;
			Object.assign(a, c.params),
				o.push({
					params: a,
					pathname: L([l, c.pathname]),
					pathnameBase: z(L([l, c.pathnameBase])),
					route: d,
				}),
				"/" !== c.pathnameBase && (l = L([l, c.pathnameBase]));
		}
		return o;
	}
	function N(e, t) {
		"string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
		let [n, r] = (function (e, t = !1, n = !0) {
				u(
					"*" === e || !e.endsWith("*") || e.endsWith("/*"),
					`Route path "${e}" will be treated as if it were "${e.replace(
						/\*$/,
						"/*"
					)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
						/\*$/,
						"/*"
					)}".`
				);
				let r = [],
					a =
						"^" +
						e
							.replace(/\/*\*?$/, "")
							.replace(/^\/*/, "/")
							.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
							.replace(
								/\/:([\w-]+)(\?)?/g,
								(e, t, n) => (
									r.push({ paramName: t, isOptional: null != n }),
									n ? "/?([^\\/]+)?" : "/([^\\/]+)"
								)
							);
				return (
					e.endsWith("*")
						? (r.push({ paramName: "*" }),
						  (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
						: n
						? (a += "\\/*$")
						: "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"),
					[new RegExp(a, t ? void 0 : "i"), r]
				);
			})(e.path, e.caseSensitive, e.end),
			a = t.match(n);
		if (!a) return null;
		let l = a[0],
			o = l.replace(/(.)\/+$/, "$1"),
			i = a.slice(1);
		return {
			params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
				if ("*" === t) {
					let e = i[r] || "";
					o = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1");
				}
				const a = i[r];
				return (e[t] = n && !a ? void 0 : (a || "").replace(/%2F/g, "/")), e;
			}, {}),
			pathname: l,
			pathnameBase: o,
			pattern: e,
		};
	}
	function x(e) {
		try {
			return e
				.split("/")
				.map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
				.join("/");
		} catch (t) {
			return (
				u(
					!1,
					`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
				),
				e
			);
		}
	}
	function A(e, t) {
		if ("/" === t) return e;
		if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
		let n = t.endsWith("/") ? t.length - 1 : t.length,
			r = e.charAt(n);
		return r && "/" !== r ? null : e.slice(n) || "/";
	}
	function P(e, t, n, r) {
		return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
			r
		)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
	}
	function T(e) {
		let t = (function (e) {
			return e.filter(
				(e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
			);
		})(e);
		return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
	}
	function _(e, t, n, r = !1) {
		let a;
		"string" == typeof e
			? (a = f(e))
			: ((a = { ...e }),
			  i(
					!a.pathname || !a.pathname.includes("?"),
					P("?", "pathname", "search", a)
			  ),
			  i(
					!a.pathname || !a.pathname.includes("#"),
					P("#", "pathname", "hash", a)
			  ),
			  i(!a.search || !a.search.includes("#"), P("#", "search", "hash", a)));
		let l,
			o = "" === e || "" === a.pathname,
			u = o ? "/" : a.pathname;
		if (null == u) l = n;
		else {
			let e = t.length - 1;
			if (!r && u.startsWith("..")) {
				let t = u.split("/");
				for (; ".." === t[0]; ) t.shift(), (e -= 1);
				a.pathname = t.join("/");
			}
			l = e >= 0 ? t[e] : "/";
		}
		let s = (function (e, t = "/") {
				let {
						pathname: n,
						search: r = "",
						hash: a = "",
					} = "string" == typeof e ? f(e) : e,
					l = n
						? n.startsWith("/")
							? n
							: (function (e, t) {
									let n = t.replace(/\/+$/, "").split("/");
									return (
										e.split("/").forEach((e) => {
											".." === e
												? n.length > 1 && n.pop()
												: "." !== e && n.push(e);
										}),
										n.length > 1 ? n.join("/") : "/"
									);
							  })(n, t)
						: t;
				return { pathname: l, search: O(r), hash: R(a) };
			})(a, l),
			c = u && "/" !== u && u.endsWith("/"),
			d = (o || "." === u) && n.endsWith("/");
		return s.pathname.endsWith("/") || (!c && !d) || (s.pathname += "/"), s;
	}
	var L = (e) => e.join("/").replace(/\/\/+/g, "/"),
		z = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
		O = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
		R = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
	function F(e) {
		return (
			null != e &&
			"number" == typeof e.status &&
			"string" == typeof e.statusText &&
			"boolean" == typeof e.internal &&
			"data" in e
		);
	}
	var M = ["POST", "PUT", "PATCH", "DELETE"],
		D = (new Set(M), ["GET", ...M]);
	new Set(D), Symbol("ResetLoaderData");
	var I = r.createContext(null);
	I.displayName = "DataRouter";
	var $ = r.createContext(null);
	$.displayName = "DataRouterState";
	var j = r.createContext({ isTransitioning: !1 });
	(j.displayName = "ViewTransition"),
		(r.createContext(new Map()).displayName = "Fetchers"),
		(r.createContext(null).displayName = "Await");
	var B = r.createContext(null);
	B.displayName = "Navigation";
	var U = r.createContext(null);
	U.displayName = "Location";
	var H = r.createContext({ outlet: null, matches: [], isDataRoute: !1 });
	H.displayName = "Route";
	var W = r.createContext(null);
	function V() {
		return null != r.useContext(U);
	}
	function q() {
		return (
			i(
				V(),
				"useLocation() may be used only in the context of a <Router> component."
			),
			r.useContext(U).location
		);
	}
	W.displayName = "RouteError";
	var G =
		"You should call navigate() in a React.useEffect(), not when your component is first rendered.";
	function Q(e) {
		r.useContext(B).static || r.useLayoutEffect(e);
	}
	function K() {
		let { isDataRoute: e } = r.useContext(H);
		return e
			? (function () {
					let { router: e } = (function (e) {
							let t = r.useContext(I);
							return i(t, ne(e)), t;
						})("useNavigate"),
						t = re("useNavigate"),
						n = r.useRef(!1);
					Q(() => {
						n.current = !0;
					});
					let a = r.useCallback(
						async (r, a = {}) => {
							u(n.current, G),
								n.current &&
									("number" == typeof r
										? e.navigate(r)
										: await e.navigate(r, { fromRouteId: t, ...a }));
						},
						[e, t]
					);
					return a;
			  })()
			: (function () {
					i(
						V(),
						"useNavigate() may be used only in the context of a <Router> component."
					);
					let e = r.useContext(I),
						{ basename: t, navigator: n } = r.useContext(B),
						{ matches: a } = r.useContext(H),
						{ pathname: l } = q(),
						o = JSON.stringify(T(a)),
						s = r.useRef(!1);
					Q(() => {
						s.current = !0;
					});
					let c = r.useCallback(
						(r, a = {}) => {
							if ((u(s.current, G), !s.current)) return;
							if ("number" == typeof r) return void n.go(r);
							let i = _(r, JSON.parse(o), l, "path" === a.relative);
							null == e &&
								"/" !== t &&
								(i.pathname = "/" === i.pathname ? t : L([t, i.pathname])),
								(a.replace ? n.replace : n.push)(i, a.state, a);
						},
						[t, n, o, l, e]
					);
					return c;
			  })();
	}
	function Y(e, { relative: t } = {}) {
		let { matches: n } = r.useContext(H),
			{ pathname: a } = q(),
			l = JSON.stringify(T(n));
		return r.useMemo(() => _(e, JSON.parse(l), a, "path" === t), [e, l, a, t]);
	}
	function X(e, t, n, a) {
		i(
			V(),
			"useRoutes() may be used only in the context of a <Router> component."
		);
		let { navigator: l, static: o } = r.useContext(B),
			{ matches: s } = r.useContext(H),
			c = s[s.length - 1],
			d = c ? c.params : {},
			p = c ? c.pathname : "/",
			h = c ? c.pathnameBase : "/",
			g = c && c.route;
		{
			let e = (g && g.path) || "";
			le(
				p,
				!g || e.endsWith("*") || e.endsWith("*?"),
				`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${
					"/" === e ? "*" : `${e}/*`
				}">.`
			);
		}
		let y,
			b = q();
		if (t) {
			let e = "string" == typeof t ? f(t) : t;
			i(
				"/" === h || e.pathname?.startsWith(h),
				`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${e.pathname}" was given in the \`location\` prop.`
			),
				(y = e);
		} else y = b;
		let v = y.pathname || "/",
			w = v;
		if ("/" !== h) {
			let e = h.replace(/^\//, "").split("/");
			w = "/" + v.replace(/^\//, "").split("/").slice(e.length).join("/");
		}
		let E =
			!o && n && n.matches && n.matches.length > 0
				? n.matches
				: m(e, { pathname: w });
		u(
			g || null != E,
			`No routes matched location "${y.pathname}${y.search}${y.hash}" `
		),
			u(
				null == E ||
					void 0 !== E[E.length - 1].route.element ||
					void 0 !== E[E.length - 1].route.Component ||
					void 0 !== E[E.length - 1].route.lazy,
				`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
			);
		let S = (function (e, t = [], n = null) {
			if (null == e) {
				if (!n) return null;
				if (n.errors) e = n.matches;
				else {
					if (0 !== t.length || n.initialized || !(n.matches.length > 0))
						return null;
					e = n.matches;
				}
			}
			let a = e,
				l = n?.errors;
			if (null != l) {
				let e = a.findIndex((e) => e.route.id && void 0 !== l?.[e.route.id]);
				i(
					e >= 0,
					`Could not find a matching route for errors on route IDs: ${Object.keys(
						l
					).join(",")}`
				),
					(a = a.slice(0, Math.min(a.length, e + 1)));
			}
			let o = !1,
				u = -1;
			if (n)
				for (let e = 0; e < a.length; e++) {
					let t = a[e];
					if (
						((t.route.HydrateFallback || t.route.hydrateFallbackElement) &&
							(u = e),
						t.route.id)
					) {
						let { loaderData: e, errors: r } = n,
							l =
								t.route.loader &&
								!e.hasOwnProperty(t.route.id) &&
								(!r || void 0 === r[t.route.id]);
						if (t.route.lazy || l) {
							(o = !0), (a = u >= 0 ? a.slice(0, u + 1) : [a[0]]);
							break;
						}
					}
				}
			return a.reduceRight((e, i, s) => {
				let c,
					d = !1,
					f = null,
					m = null;
				n &&
					((c = l && i.route.id ? l[i.route.id] : void 0),
					(f = i.route.errorElement || Z),
					o &&
						(u < 0 && 0 === s
							? (le(
									"route-fallback",
									!1,
									"No `HydrateFallback` element provided to render during initial hydration"
							  ),
							  (d = !0),
							  (m = null))
							: u === s &&
							  ((d = !0), (m = i.route.hydrateFallbackElement || null))));
				let p = t.concat(a.slice(0, s + 1)),
					h = () => {
						let t;
						return (
							(t = c
								? f
								: d
								? m
								: i.route.Component
								? r.createElement(i.route.Component, null)
								: i.route.element
								? i.route.element
								: e),
							r.createElement(te, {
								match: i,
								routeContext: { outlet: e, matches: p, isDataRoute: null != n },
								children: t,
							})
						);
					};
				return n && (i.route.ErrorBoundary || i.route.errorElement || 0 === s)
					? r.createElement(ee, {
							location: n.location,
							revalidation: n.revalidation,
							component: f,
							error: c,
							children: h(),
							routeContext: { outlet: null, matches: p, isDataRoute: !0 },
					  })
					: h();
			}, null);
		})(
			E &&
				E.map((e) =>
					Object.assign({}, e, {
						params: Object.assign({}, d, e.params),
						pathname: L([
							h,
							l.encodeLocation
								? l.encodeLocation(e.pathname).pathname
								: e.pathname,
						]),
						pathnameBase:
							"/" === e.pathnameBase
								? h
								: L([
										h,
										l.encodeLocation
											? l.encodeLocation(e.pathnameBase).pathname
											: e.pathnameBase,
								  ]),
					})
				),
			s,
			n,
			a
		);
		return t && S
			? r.createElement(
					U.Provider,
					{
						value: {
							location: {
								pathname: "/",
								search: "",
								hash: "",
								state: null,
								key: "default",
								...y,
							},
							navigationType: "POP",
						},
					},
					S
			  )
			: S;
	}
	function J() {
		let e = (function () {
				let e = r.useContext(W),
					t = (function (e) {
						let t = r.useContext($);
						return i(t, ne(e)), t;
					})("useRouteError"),
					n = re("useRouteError");
				return void 0 !== e ? e : t.errors?.[n];
			})(),
			t = F(e)
				? `${e.status} ${e.statusText}`
				: e instanceof Error
				? e.message
				: JSON.stringify(e),
			n = e instanceof Error ? e.stack : null,
			a = "rgba(200,200,200, 0.5)",
			l = { padding: "0.5rem", backgroundColor: a },
			o = { padding: "2px 4px", backgroundColor: a },
			u = null;
		return (
			console.error("Error handled by React Router default ErrorBoundary:", e),
			(u = r.createElement(
				r.Fragment,
				null,
				r.createElement("p", null, "💿 Hey developer 👋"),
				r.createElement(
					"p",
					null,
					"You can provide a way better UX than this when your app throws errors by providing your own ",
					r.createElement("code", { style: o }, "ErrorBoundary"),
					" or",
					" ",
					r.createElement("code", { style: o }, "errorElement"),
					" prop on your route."
				)
			)),
			r.createElement(
				r.Fragment,
				null,
				r.createElement("h2", null, "Unexpected Application Error!"),
				r.createElement("h3", { style: { fontStyle: "italic" } }, t),
				n ? r.createElement("pre", { style: l }, n) : null,
				u
			)
		);
	}
	r.createContext(null);
	var Z = r.createElement(J, null),
		ee = class extends r.Component {
			constructor(e) {
				super(e),
					(this.state = {
						location: e.location,
						revalidation: e.revalidation,
						error: e.error,
					});
			}
			static getDerivedStateFromError(e) {
				return { error: e };
			}
			static getDerivedStateFromProps(e, t) {
				return t.location !== e.location ||
					("idle" !== t.revalidation && "idle" === e.revalidation)
					? {
							error: e.error,
							location: e.location,
							revalidation: e.revalidation,
					  }
					: {
							error: void 0 !== e.error ? e.error : t.error,
							location: t.location,
							revalidation: e.revalidation || t.revalidation,
					  };
			}
			componentDidCatch(e, t) {
				console.error(
					"React Router caught the following error during render",
					e,
					t
				);
			}
			render() {
				return void 0 !== this.state.error
					? r.createElement(
							H.Provider,
							{ value: this.props.routeContext },
							r.createElement(W.Provider, {
								value: this.state.error,
								children: this.props.component,
							})
					  )
					: this.props.children;
			}
		};
	function te({ routeContext: e, match: t, children: n }) {
		let a = r.useContext(I);
		return (
			a &&
				a.static &&
				a.staticContext &&
				(t.route.errorElement || t.route.ErrorBoundary) &&
				(a.staticContext._deepestRenderedBoundaryId = t.route.id),
			r.createElement(H.Provider, { value: e }, n)
		);
	}
	function ne(e) {
		return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
	}
	function re(e) {
		let t = (function (e) {
				let t = r.useContext(H);
				return i(t, ne(e)), t;
			})(e),
			n = t.matches[t.matches.length - 1];
		return (
			i(
				n.route.id,
				`${e} can only be used on routes that contain a unique "id"`
			),
			n.route.id
		);
	}
	var ae = {};
	function le(e, t, n) {
		t || ae[e] || ((ae[e] = !0), u(!1, n));
	}
	function oe(e) {
		i(
			!1,
			"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
		);
	}
	function ie({
		basename: e = "/",
		children: t = null,
		location: n,
		navigationType: a = "POP",
		navigator: l,
		static: o = !1,
	}) {
		i(
			!V(),
			"You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
		);
		let s = e.replace(/^\/*/, "/"),
			c = r.useMemo(
				() => ({ basename: s, navigator: l, static: o, future: {} }),
				[s, l, o]
			);
		"string" == typeof n && (n = f(n));
		let {
				pathname: d = "/",
				search: m = "",
				hash: p = "",
				state: h = null,
				key: g = "default",
			} = n,
			y = r.useMemo(() => {
				let e = A(d, s);
				return null == e
					? null
					: {
							location: { pathname: e, search: m, hash: p, state: h, key: g },
							navigationType: a,
					  };
			}, [s, d, m, p, h, g, a]);
		return (
			u(
				null != y,
				`<Router basename="${s}"> is not able to match the URL "${d}${m}${p}" because it does not start with the basename, so the <Router> won't render anything.`
			),
			null == y
				? null
				: r.createElement(
						B.Provider,
						{ value: c },
						r.createElement(U.Provider, { children: t, value: y })
				  )
		);
	}
	function ue({ children: e, location: t }) {
		return X(se(e), t);
	}
	function se(e, t = []) {
		let n = [];
		return (
			r.Children.forEach(e, (e, a) => {
				if (!r.isValidElement(e)) return;
				let l = [...t, a];
				if (e.type === r.Fragment)
					return void n.push.apply(n, se(e.props.children, l));
				i(
					e.type === oe,
					`[${
						"string" == typeof e.type ? e.type : e.type.name
					}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
				),
					i(
						!e.props.index || !e.props.children,
						"An index route cannot have child routes."
					);
				let o = {
					id: e.props.id || l.join("-"),
					caseSensitive: e.props.caseSensitive,
					element: e.props.element,
					Component: e.props.Component,
					index: e.props.index,
					path: e.props.path,
					loader: e.props.loader,
					action: e.props.action,
					hydrateFallbackElement: e.props.hydrateFallbackElement,
					HydrateFallback: e.props.HydrateFallback,
					errorElement: e.props.errorElement,
					ErrorBoundary: e.props.ErrorBoundary,
					hasErrorBoundary:
						!0 === e.props.hasErrorBoundary ||
						null != e.props.ErrorBoundary ||
						null != e.props.errorElement,
					shouldRevalidate: e.props.shouldRevalidate,
					handle: e.props.handle,
					lazy: e.props.lazy,
				};
				e.props.children && (o.children = se(e.props.children, l)), n.push(o);
			}),
			n
		);
	}
	r.memo(function ({ routes: e, future: t, state: n }) {
		return X(e, void 0, n, t);
	}),
		r.Component;
	var ce = "get",
		de = "application/x-www-form-urlencoded";
	function fe(e) {
		return null != e && "string" == typeof e.tagName;
	}
	var me = null,
		pe = new Set([
			"application/x-www-form-urlencoded",
			"multipart/form-data",
			"text/plain",
		]);
	function he(e) {
		return null == e || pe.has(e)
			? e
			: (u(
					!1,
					`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${de}"`
			  ),
			  null);
	}
	function ge(e, t) {
		if (!1 === e || null == e) throw new Error(t);
	}
	function ye(e) {
		return (
			null != e &&
			(null == e.href
				? "preload" === e.rel &&
				  "string" == typeof e.imageSrcSet &&
				  "string" == typeof e.imageSizes
				: "string" == typeof e.rel && "string" == typeof e.href)
		);
	}
	function be(e, t, n, r, a, l) {
		let o = (e, t) => !n[t] || e.route.id !== n[t].route.id,
			i = (e, t) =>
				n[t].pathname !== e.pathname ||
				(n[t].route.path?.endsWith("*") && n[t].params["*"] !== e.params["*"]);
		return "assets" === l
			? t.filter((e, t) => o(e, t) || i(e, t))
			: "data" === l
			? t.filter((t, l) => {
					let u = r.routes[t.route.id];
					if (!u || !u.hasLoader) return !1;
					if (o(t, l) || i(t, l)) return !0;
					if (t.route.shouldRevalidate) {
						let r = t.route.shouldRevalidate({
							currentUrl: new URL(
								a.pathname + a.search + a.hash,
								window.origin
							),
							currentParams: n[0]?.params || {},
							nextUrl: new URL(e, window.origin),
							nextParams: t.params,
							defaultShouldRevalidate: !0,
						});
						if ("boolean" == typeof r) return r;
					}
					return !0;
			  })
			: [];
	}
	function ve(e, t, { includeHydrateFallback: n } = {}) {
		return (
			(r = e
				.map((e) => {
					let r = t.routes[e.route.id];
					if (!r) return [];
					let a = [r.module];
					return (
						r.clientActionModule && (a = a.concat(r.clientActionModule)),
						r.clientLoaderModule && (a = a.concat(r.clientLoaderModule)),
						n &&
							r.hydrateFallbackModule &&
							(a = a.concat(r.hydrateFallbackModule)),
						r.imports && (a = a.concat(r.imports)),
						a
					);
				})
				.flat(1)),
			[...new Set(r)]
		);
		var r;
	}
	function we() {
		let e = r.useContext(I);
		return (
			ge(
				e,
				"You must render this element inside a <DataRouterContext.Provider> element"
			),
			e
		);
	}
	function Ee() {
		let e = r.useContext($);
		return (
			ge(
				e,
				"You must render this element inside a <DataRouterStateContext.Provider> element"
			),
			e
		);
	}
	Symbol("SingleFetchRedirect"), r.Component;
	var Se = r.createContext(void 0);
	function ke() {
		let e = r.useContext(Se);
		return (
			ge(e, "You must render this element inside a <HydratedRouter> element"), e
		);
	}
	function Ce(e, t) {
		return (n) => {
			e && e(n), n.defaultPrevented || t(n);
		};
	}
	function Ne({ page: e, ...t }) {
		let { router: n } = we(),
			a = r.useMemo(
				() => m(n.routes, e, n.basename),
				[n.routes, e, n.basename]
			);
		return a ? r.createElement(Ae, { page: e, matches: a, ...t }) : null;
	}
	function xe(e) {
		let { manifest: t, routeModules: n } = ke(),
			[a, l] = r.useState([]);
		return (
			r.useEffect(() => {
				let r = !1;
				return (
					(async function (e, t, n) {
						return (function (e, t) {
							let n = new Set(),
								r = new Set(t);
							return e.reduce((e, a) => {
								if (
									t &&
									(null == (l = a) || "string" != typeof l.page) &&
									"script" === a.as &&
									a.href &&
									r.has(a.href)
								)
									return e;
								var l;
								let o = JSON.stringify(
									(function (e) {
										let t = {},
											n = Object.keys(e).sort();
										for (let r of n) t[r] = e[r];
										return t;
									})(a)
								);
								return n.has(o) || (n.add(o), e.push({ key: o, link: a })), e;
							}, []);
						})(
							(
								await Promise.all(
									e.map(async (e) => {
										let r = t.routes[e.route.id];
										if (r) {
											let e = await (async function (e, t) {
												if (e.id in t) return t[e.id];
												try {
													let n = await import(e.module);
													return (t[e.id] = n), n;
												} catch (t) {
													return (
														console.error(
															`Error loading route module \`${e.module}\`, reloading page...`
														),
														console.error(t),
														window.__reactRouterContext &&
															window.__reactRouterContext.isSpaMode,
														window.location.reload(),
														new Promise(() => {})
													);
												}
											})(r, n);
											return e.links ? e.links() : [];
										}
										return [];
									})
								)
							)
								.flat(1)
								.filter(ye)
								.filter((e) => "stylesheet" === e.rel || "preload" === e.rel)
								.map((e) =>
									"stylesheet" === e.rel
										? { ...e, rel: "prefetch", as: "style" }
										: { ...e, rel: "prefetch" }
								)
						);
					})(e, t, n).then((e) => {
						r || l(e);
					}),
					() => {
						r = !0;
					}
				);
			}, [e, t, n]),
			a
		);
	}
	function Ae({ page: e, matches: t, ...n }) {
		let a = q(),
			{ manifest: l, routeModules: o } = ke(),
			{ basename: i } = we(),
			{ loaderData: u, matches: s } = Ee(),
			c = r.useMemo(() => be(e, t, s, l, a, "data"), [e, t, s, l, a]),
			d = r.useMemo(() => be(e, t, s, l, a, "assets"), [e, t, s, l, a]),
			f = r.useMemo(() => {
				if (e === a.pathname + a.search + a.hash) return [];
				let n = new Set(),
					r = !1;
				if (
					(t.forEach((e) => {
						let t = l.routes[e.route.id];
						t &&
							t.hasLoader &&
							((!c.some((t) => t.route.id === e.route.id) &&
								e.route.id in u &&
								o[e.route.id]?.shouldRevalidate) ||
							t.hasClientLoader
								? (r = !0)
								: n.add(e.route.id));
					}),
					0 === n.size)
				)
					return [];
				let s = (function (e, t) {
					let n =
						"string" == typeof e
							? new URL(
									e,
									"undefined" == typeof window
										? "server://singlefetch/"
										: window.location.origin
							  )
							: e;
					return (
						"/" === n.pathname
							? (n.pathname = "_root.data")
							: t && "/" === A(n.pathname, t)
							? (n.pathname = `${t.replace(/\/$/, "")}/_root.data`)
							: (n.pathname = `${n.pathname.replace(/\/$/, "")}.data`),
						n
					);
				})(e, i);
				return (
					r &&
						n.size > 0 &&
						s.searchParams.set(
							"_routes",
							t
								.filter((e) => n.has(e.route.id))
								.map((e) => e.route.id)
								.join(",")
						),
					[s.pathname + s.search]
				);
			}, [i, u, a, l, c, t, e, o]),
			m = r.useMemo(() => ve(d, l), [d, l]),
			p = xe(d);
		return r.createElement(
			r.Fragment,
			null,
			f.map((e) =>
				r.createElement("link", {
					key: e,
					rel: "prefetch",
					as: "fetch",
					href: e,
					...n,
				})
			),
			m.map((e) =>
				r.createElement("link", { key: e, rel: "modulepreload", href: e, ...n })
			),
			p.map(({ key: e, link: t }) => r.createElement("link", { key: e, ...t }))
		);
	}
	Se.displayName = "FrameworkContext";
	function Pe(...e) {
		return (t) => {
			e.forEach((e) => {
				"function" == typeof e ? e(t) : null != e && (e.current = t);
			});
		};
	}
	var Te =
		"undefined" != typeof window &&
		void 0 !== window.document &&
		void 0 !== window.document.createElement;
	try {
		Te && (window.__reactRouterVersion = "7.4.0");
	} catch (e) {}
	function _e({ basename: e, children: t, window: n }) {
		let a = r.useRef();
		null == a.current && (a.current = o({ window: n, v5Compat: !0 }));
		let l = a.current,
			[i, u] = r.useState({ action: l.action, location: l.location }),
			s = r.useCallback(
				(e) => {
					r.startTransition(() => u(e));
				},
				[u]
			);
		return (
			r.useLayoutEffect(() => l.listen(s), [l, s]),
			r.createElement(ie, {
				basename: e,
				children: t,
				location: i.location,
				navigationType: i.action,
				navigator: l,
			})
		);
	}
	var Le = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
		ze = r.forwardRef(function (
			{
				onClick: e,
				discover: t = "render",
				prefetch: n = "none",
				relative: a,
				reloadDocument: l,
				replace: o,
				state: s,
				target: c,
				to: f,
				preventScrollReset: m,
				viewTransition: p,
				...h
			},
			g
		) {
			let y,
				{ basename: b } = r.useContext(B),
				v = "string" == typeof f && Le.test(f),
				w = !1;
			if ("string" == typeof f && v && ((y = f), Te))
				try {
					let e = new URL(window.location.href),
						t = f.startsWith("//") ? new URL(e.protocol + f) : new URL(f),
						n = A(t.pathname, b);
					t.origin === e.origin && null != n
						? (f = n + t.search + t.hash)
						: (w = !0);
				} catch (e) {
					u(
						!1,
						`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
					);
				}
			let E = (function (e, { relative: t } = {}) {
					i(
						V(),
						"useHref() may be used only in the context of a <Router> component."
					);
					let { basename: n, navigator: a } = r.useContext(B),
						{ hash: l, pathname: o, search: u } = Y(e, { relative: t }),
						s = o;
					return (
						"/" !== n && (s = "/" === o ? n : L([n, o])),
						a.createHref({ pathname: s, search: u, hash: l })
					);
				})(f, { relative: a }),
				[S, k, C] = (function (e, t) {
					let n = r.useContext(Se),
						[a, l] = r.useState(!1),
						[o, i] = r.useState(!1),
						{
							onFocus: u,
							onBlur: s,
							onMouseEnter: c,
							onMouseLeave: d,
							onTouchStart: f,
						} = t,
						m = r.useRef(null);
					r.useEffect(() => {
						if (("render" === e && i(!0), "viewport" === e)) {
							let e = new IntersectionObserver(
								(e) => {
									e.forEach((e) => {
										i(e.isIntersecting);
									});
								},
								{ threshold: 0.5 }
							);
							return (
								m.current && e.observe(m.current),
								() => {
									e.disconnect();
								}
							);
						}
					}, [e]),
						r.useEffect(() => {
							if (a) {
								let e = setTimeout(() => {
									i(!0);
								}, 100);
								return () => {
									clearTimeout(e);
								};
							}
						}, [a]);
					let p = () => {
							l(!0);
						},
						h = () => {
							l(!1), i(!1);
						};
					return n
						? "intent" !== e
							? [o, m, {}]
							: [
									o,
									m,
									{
										onFocus: Ce(u, p),
										onBlur: Ce(s, h),
										onMouseEnter: Ce(c, p),
										onMouseLeave: Ce(d, h),
										onTouchStart: Ce(f, p),
									},
							  ]
						: [!1, m, {}];
				})(n, h),
				N = (function (
					e,
					{
						target: t,
						replace: n,
						state: a,
						preventScrollReset: l,
						relative: o,
						viewTransition: i,
					} = {}
				) {
					let u = K(),
						s = q(),
						c = Y(e, { relative: o });
					return r.useCallback(
						(r) => {
							if (
								(function (e, t) {
									return !(
										0 !== e.button ||
										(t && "_self" !== t) ||
										(function (e) {
											return !!(
												e.metaKey ||
												e.altKey ||
												e.ctrlKey ||
												e.shiftKey
											);
										})(e)
									);
								})(r, t)
							) {
								r.preventDefault();
								let t = void 0 !== n ? n : d(s) === d(c);
								u(e, {
									replace: t,
									state: a,
									preventScrollReset: l,
									relative: o,
									viewTransition: i,
								});
							}
						},
						[s, u, c, n, a, t, e, l, o, i]
					);
				})(f, {
					replace: o,
					state: s,
					target: c,
					preventScrollReset: m,
					relative: a,
					viewTransition: p,
				}),
				x = r.createElement("a", {
					...h,
					...C,
					href: y || E,
					onClick:
						w || l
							? e
							: function (t) {
									e && e(t), t.defaultPrevented || N(t);
							  },
					ref: Pe(g, k),
					target: c,
					"data-discover": v || "render" !== t ? void 0 : "true",
				});
			return S && !v
				? r.createElement(r.Fragment, null, x, r.createElement(Ne, { page: E }))
				: x;
		});
	ze.displayName = "Link";
	var Oe = r.forwardRef(function (
		{
			"aria-current": e = "page",
			caseSensitive: t = !1,
			className: n = "",
			end: a = !1,
			style: l,
			to: o,
			viewTransition: u,
			children: s,
			...c
		},
		d
	) {
		let f = Y(o, { relative: c.relative }),
			m = q(),
			p = r.useContext($),
			{ navigator: h, basename: g } = r.useContext(B),
			y =
				null != p &&
				(function (e, t = {}) {
					let n = r.useContext(j);
					i(
						null != n,
						"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
					);
					let { basename: a } = Fe("useViewTransitionState"),
						l = Y(e, { relative: t.relative });
					if (!n.isTransitioning) return !1;
					let o =
							A(n.currentLocation.pathname, a) || n.currentLocation.pathname,
						u = A(n.nextLocation.pathname, a) || n.nextLocation.pathname;
					return null != N(l.pathname, u) || null != N(l.pathname, o);
				})(f) &&
				!0 === u,
			b = h.encodeLocation ? h.encodeLocation(f).pathname : f.pathname,
			v = m.pathname,
			w =
				p && p.navigation && p.navigation.location
					? p.navigation.location.pathname
					: null;
		t ||
			((v = v.toLowerCase()),
			(w = w ? w.toLowerCase() : null),
			(b = b.toLowerCase())),
			w && g && (w = A(w, g) || w);
		const E = "/" !== b && b.endsWith("/") ? b.length - 1 : b.length;
		let S,
			k = v === b || (!a && v.startsWith(b) && "/" === v.charAt(E)),
			C =
				null != w &&
				(w === b || (!a && w.startsWith(b) && "/" === w.charAt(b.length))),
			x = { isActive: k, isPending: C, isTransitioning: y },
			P = k ? e : void 0;
		S =
			"function" == typeof n
				? n(x)
				: [
						n,
						k ? "active" : null,
						C ? "pending" : null,
						y ? "transitioning" : null,
				  ]
						.filter(Boolean)
						.join(" ");
		let T = "function" == typeof l ? l(x) : l;
		return r.createElement(
			ze,
			{
				...c,
				"aria-current": P,
				className: S,
				ref: d,
				style: T,
				to: o,
				viewTransition: u,
			},
			"function" == typeof s ? s(x) : s
		);
	});
	Oe.displayName = "NavLink";
	var Re = r.forwardRef(
		(
			{
				discover: e = "render",
				fetcherKey: t,
				navigate: n,
				reloadDocument: a,
				replace: l,
				state: o,
				method: u = ce,
				action: s,
				onSubmit: c,
				relative: f,
				preventScrollReset: m,
				viewTransition: p,
				...h
			},
			g
		) => {
			let y = (function () {
					let { router: e } = Fe("useSubmit"),
						{ basename: t } = r.useContext(B),
						n = re("useRouteId");
					return r.useCallback(
						async (r, a = {}) => {
							let {
								action: l,
								method: o,
								encType: i,
								formData: u,
								body: s,
							} = (function (e, t) {
								let n, r, a, l, o;
								if (fe((i = e)) && "form" === i.tagName.toLowerCase()) {
									let o = e.getAttribute("action");
									(r = o ? A(o, t) : null),
										(n = e.getAttribute("method") || ce),
										(a = he(e.getAttribute("enctype")) || de),
										(l = new FormData(e));
								} else if (
									(function (e) {
										return fe(e) && "button" === e.tagName.toLowerCase();
									})(e) ||
									((function (e) {
										return fe(e) && "input" === e.tagName.toLowerCase();
									})(e) &&
										("submit" === e.type || "image" === e.type))
								) {
									let o = e.form;
									if (null == o)
										throw new Error(
											'Cannot submit a <button> or <input type="submit"> without a <form>'
										);
									let i =
										e.getAttribute("formaction") || o.getAttribute("action");
									if (
										((r = i ? A(i, t) : null),
										(n =
											e.getAttribute("formmethod") ||
											o.getAttribute("method") ||
											ce),
										(a =
											he(e.getAttribute("formenctype")) ||
											he(o.getAttribute("enctype")) ||
											de),
										(l = new FormData(o, e)),
										!(function () {
											if (null === me)
												try {
													new FormData(document.createElement("form"), 0),
														(me = !1);
												} catch (e) {
													me = !0;
												}
											return me;
										})())
									) {
										let { name: t, type: n, value: r } = e;
										if ("image" === n) {
											let e = t ? `${t}.` : "";
											l.append(`${e}x`, "0"), l.append(`${e}y`, "0");
										} else t && l.append(t, r);
									}
								} else {
									if (fe(e))
										throw new Error(
											'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
										);
									(n = ce), (r = null), (a = de), (o = e);
								}
								var i;
								return (
									l && "text/plain" === a && ((o = l), (l = void 0)),
									{
										action: r,
										method: n.toLowerCase(),
										encType: a,
										formData: l,
										body: o,
									}
								);
							})(r, t);
							if (!1 === a.navigate) {
								let t = a.fetcherKey || De();
								await e.fetch(t, n, a.action || l, {
									preventScrollReset: a.preventScrollReset,
									formData: u,
									body: s,
									formMethod: a.method || o,
									formEncType: a.encType || i,
									flushSync: a.flushSync,
								});
							} else
								await e.navigate(a.action || l, {
									preventScrollReset: a.preventScrollReset,
									formData: u,
									body: s,
									formMethod: a.method || o,
									formEncType: a.encType || i,
									replace: a.replace,
									state: a.state,
									fromRouteId: n,
									flushSync: a.flushSync,
									viewTransition: a.viewTransition,
								});
						},
						[e, t, n]
					);
				})(),
				b = (function (e, { relative: t } = {}) {
					let { basename: n } = r.useContext(B),
						a = r.useContext(H);
					i(a, "useFormAction must be used inside a RouteContext");
					let [l] = a.matches.slice(-1),
						o = { ...Y(e || ".", { relative: t }) },
						u = q();
					if (null == e) {
						o.search = u.search;
						let e = new URLSearchParams(o.search),
							t = e.getAll("index");
						if (t.some((e) => "" === e)) {
							e.delete("index"),
								t.filter((e) => e).forEach((t) => e.append("index", t));
							let n = e.toString();
							o.search = n ? `?${n}` : "";
						}
					}
					return (
						(e && "." !== e) ||
							!l.route.index ||
							(o.search = o.search
								? o.search.replace(/^\?/, "?index&")
								: "?index"),
						"/" !== n &&
							(o.pathname = "/" === o.pathname ? n : L([n, o.pathname])),
						d(o)
					);
				})(s, { relative: f }),
				v = "get" === u.toLowerCase() ? "get" : "post",
				w = "string" == typeof s && Le.test(s);
			return r.createElement("form", {
				ref: g,
				method: v,
				action: b,
				onSubmit: a
					? c
					: (e) => {
							if ((c && c(e), e.defaultPrevented)) return;
							e.preventDefault();
							let r = e.nativeEvent.submitter,
								a = r?.getAttribute("formmethod") || u;
							y(r || e.currentTarget, {
								fetcherKey: t,
								method: a,
								navigate: n,
								replace: l,
								state: o,
								relative: f,
								preventScrollReset: m,
								viewTransition: p,
							});
					  },
				...h,
				"data-discover": w || "render" !== e ? void 0 : "true",
			});
		}
	);
	function Fe(e) {
		let t = r.useContext(I);
		return (
			i(
				t,
				(function (e) {
					return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
				})(e)
			),
			t
		);
	}
	Re.displayName = "Form";
	var Me = 0,
		De = () => `__${String(++Me)}__`;
	function Ie() {
		fetch("\thttps://api.adviceslip.com/advice").then(function (e) {
			e.text().then(function (e) {
				!(function (e) {
					var t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: "outputTag";
					document.getElementById(t).innerHTML += e;
				})(JSON.parse(e).slip.advice);
			});
		});
	}
	new TextEncoder();
	const $e = n.p + "5da0086a61c3e65e3712.jpg",
		je = n.p + "5935751be6609d777421.jpg",
		Be = n.p + "2c6486d21ae1ee762ae2.jpg",
		Ue = n.p + "28fe8b010329f22edd07.jpg";
	function He() {
		return r.createElement(
			"div",
			{ id: "myPictures", className: "carousel slide" },
			r.createElement(
				"div",
				{ className: "carousel-indicators" },
				r.createElement("button", {
					type: "button",
					"data-bs-target": "#myPictures",
					"data-bs-slide-to": "0",
					className: "active",
					"aria-current": "true",
					"aria-label": "Slide 1",
				}),
				r.createElement("button", {
					type: "button",
					"data-bs-target": "#myPictures",
					"data-bs-slide-to": "1",
					"aria-label": "Slide 2",
				}),
				r.createElement("button", {
					type: "button",
					"data-bs-target": "#myPictures",
					"data-bs-slide-to": "2",
					"aria-label": "Slide 3",
				})
			),
			r.createElement(
				"div",
				{ className: "carousel-inner" },
				r.createElement(
					"div",
					{ className: "carousel-item active" },
					r.createElement("img", {
						src: je,
						className: "d-block w-100",
						alt: "CheeseBurger",
					})
				),
				r.createElement(
					"div",
					{ className: "carousel-item" },
					r.createElement("img", {
						src: Be,
						className: "d-block w-100",
						alt: "ChefsKissSalad",
					})
				),
				r.createElement(
					"div",
					{ className: "carousel-item" },
					r.createElement("img", {
						src: Ue,
						className: "d-block w-100",
						alt: "FriedFishBasket",
					})
				),
				r.createElement(
					"button",
					{
						className: "carousel-control-prev",
						type: "button",
						"data-bs-target": "#myPictures",
						"data-bs-slide": "prev",
					},
					r.createElement("span", {
						className: "carousel-control-prev-icon",
						"aria-hidden": "true",
					}),
					r.createElement("span", { className: "visually-hidden" }, "Previous")
				),
				r.createElement(
					"button",
					{
						className: "carousel-control-next",
						type: "button",
						"data-bs-target": "#myPictures",
						"data-bs-slide": "next",
					},
					r.createElement("span", {
						className: "carousel-control-next-icon",
						"aria-hidden": "true",
					}),
					r.createElement("span", { className: "visually-hidden" }, "Next")
				)
			)
		);
	}
	function We(e, t) {
		return (
			(function (e) {
				if (Array.isArray(e)) return e;
			})(e) ||
			(function (e, t) {
				var n =
					null == e
						? null
						: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
						  e["@@iterator"];
				if (null != n) {
					var r,
						a,
						l,
						o,
						i = [],
						u = !0,
						s = !1;
					try {
						if (((l = (n = n.call(e)).next), 0 === t)) {
							if (Object(n) !== n) return;
							u = !1;
						} else
							for (
								;
								!(u = (r = l.call(n)).done) &&
								(i.push(r.value), i.length !== t);
								u = !0
							);
					} catch (e) {
						(s = !0), (a = e);
					} finally {
						try {
							if (!u && null != n.return && ((o = n.return()), Object(o) !== o))
								return;
						} finally {
							if (s) throw a;
						}
					}
					return i;
				}
			})(e, t) ||
			(function (e, t) {
				if (e) {
					if ("string" == typeof e) return Ve(e, t);
					var n = {}.toString.call(e).slice(8, -1);
					return (
						"Object" === n && e.constructor && (n = e.constructor.name),
						"Map" === n || "Set" === n
							? Array.from(e)
							: "Arguments" === n ||
							  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
							? Ve(e, t)
							: void 0
					);
				}
			})(e, t) ||
			(function () {
				throw new TypeError(
					"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				);
			})()
		);
	}
	function Ve(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	function qe() {
		var e = We((0, r.useState)(!1), 2),
			t = e[0],
			n = e[1],
			a = We(
				(0, r.useState)(
					"Hello There Mon Chere'! Swing On By and Taste Our Good Food!"
				),
				2
			),
			l = a[0];
		return (
			a[1],
			(0, r.useEffect)(function () {
				n(!0),
					console.log("The Home component has mounted."),
					(document.title = "Home");
			}, []),
			(0, r.useEffect)(
				function () {
					t && console.log("The Home component has updated.");
				},
				[l]
			),
			(0, r.useEffect)(function () {
				return function () {
					console.log("The Home component has unmounted.");
				};
			}, []),
			r.createElement(
				r.Fragment,
				null,
				r.createElement(
					"main",
					{ id: "homeMain" },
					r.createElement(
						"div",
						{ className: "container" },
						r.createElement(
							"div",
							{ className: "row" },
							r.createElement(
								"div",
								{ className: "col-12 col-md-6 col-lg-6" },
								r.createElement("h1", null, "Good Food Hut"),
								r.createElement("h3", null, "Delighting Tastebuds since 1988"),
								r.createElement("br", null),
								r.createElement("h4", null, l),
								r.createElement("br", null),
								r.createElement(He, null),
								r.createElement("br", null),
								r.createElement("hr", null),
								r.createElement(
									"p",
									null,
									"Visit our Sesame Street Location and try all that the Good Food Hut has to offer. We have been sharing our Good Food Philosophy for over 20 years and you haven't seen nor tasted anything yet!"
								),
								r.createElement("hr", null)
							)
						),
						r.createElement(
							"div",
							{ className: "row" },
							r.createElement(
								"div",
								{ className: "col-12 col-md-6 col-lg-6" },
								r.createElement("h2", null, "Our Mission"),
								r.createElement(
									"p",
									null,
									"Our mission is to provide a comfortable, fun, and welcoming environment for our guests to enjoy good food, good music, and good vibes. We are committed to providing the best service and quality food that will keep you coming back for more."
								)
							)
						)
					),
					r.createElement(
						"div",
						{ className: "container" },
						r.createElement(
							"div",
							{ className: "row" },
							r.createElement(
								"div",
								{ className: "col-12 col-md-6 col-lg-6" },
								r.createElement("h2", null, "Our Space"),
								r.createElement("img", {
									src: $e,
									alt: "Good Food Hut Interior",
									className: "img-fluid",
									id: "Interior",
									style: { width: "100%" },
								})
							),
							r.createElement(
								"div",
								{ className: "row" },
								r.createElement(
									"div",
									{ className: "col-12" },
									r.createElement("h2", null, "Our Vibe"),
									r.createElement(
										"p",
										null,
										"So whether it's for some quality time with the family, \"chillaxation\" time with your friends, or decompression time with the colleagues...we have created a space that honors a relaxed and authentic vibe that'll make you feel like you belong here, because you do!😉"
									),
									r.createElement("h4", null, "Welcome home, Suga'!")
								)
							)
						),
						r.createElement("hr", null)
					),
					r.createElement(
						"div",
						{ className: "row" },
						r.createElement("div", { className: "col-12 col-md-6 col-lg-6" }),
						r.createElement(
							"div",
							{ className: "text-center" },
							r.createElement(
								"button",
								{
									onClick: Ie,
									className: "btn btn-sm rounded-3 bg-primary",
									id: "mixin-button",
								},
								"Get Random Advice Here"
							)
						)
					),
					r.createElement("br", null),
					r.createElement("output", { id: "outputTag" })
				)
			)
		);
	}
	const Ge = n.p + "2e2a0f2e762a823d4a24.jpg";
	function Qe(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	function Ke() {
		var e,
			t,
			n =
				((e = (0, r.useState)(!1)),
				(t = 2),
				(function (e) {
					if (Array.isArray(e)) return e;
				})(e) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null != n) {
							var r,
								a,
								l,
								o,
								i = [],
								u = !0,
								s = !1;
							try {
								if (((l = (n = n.call(e)).next), 0 === t)) {
									if (Object(n) !== n) return;
									u = !1;
								} else
									for (
										;
										!(u = (r = l.call(n)).done) &&
										(i.push(r.value), i.length !== t);
										u = !0
									);
							} catch (e) {
								(s = !0), (a = e);
							} finally {
								try {
									if (
										!u &&
										null != n.return &&
										((o = n.return()), Object(o) !== o)
									)
										return;
								} finally {
									if (s) throw a;
								}
							}
							return i;
						}
					})(e, t) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return Qe(e, t);
							var n = {}.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n
									? Array.from(e)
									: "Arguments" === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? Qe(e, t)
									: void 0
							);
						}
					})(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()),
			a = n[0],
			l = n[1];
		return (
			(0, r.useEffect)(function () {
				l(!0), console.log("The ImageMap component mounted."), imageMapResize();
			}, []),
			(0, r.useEffect)(function () {
				!0 === a && console.log("The ImageMap component updated.");
			}),
			(0, r.useEffect)(function () {
				console.log("The ImageMap component unmounted.");
			}, []),
			r.createElement(
				"main",
				null,
				r.createElement("img", {
					width: "100%",
					useMap: "#my-image-map",
					src: Ge,
					alt: "Cajun Seasoning Blends",
				}),
				r.createElement(
					"map",
					{ name: "my-image-map" },
					r.createElement("area", {
						shape: "rect",
						title: "Tony Chachere's Creole Seasoning",
						coords: "46,151, 149,324",
						href: "https://www.tonychachere.com/",
						target: "_blank",
					}),
					r.createElement("area", {
						shape: "rect",
						title: "Zatarain's Creole Seasoning",
						coords: "290,123, 386,290",
						href: "https://www.mccormick.com/zatarains/products/spices-and-seasonings/spices-and-extracts/creole-seasoning",
						target: "_blank",
					})
				)
			)
		);
	}
	const Ye = n.p + "e3e85cf4c8dbf704312e.jpg",
		Xe = n.p + "04eb7f2c6517da9a190f.jpg";
	var Je = n(923),
		Ze = n.n(Je),
		et = n(904),
		tt = n.n(et),
		nt = n(52),
		rt = n.n(nt),
		at = n(203),
		lt = n.n(at),
		ot = n(447),
		it = n.n(ot),
		ut = n(612),
		st = n.n(ut),
		ct = n(783),
		dt = {};
	function ft(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	function mt() {
		var e,
			t,
			n =
				((e = (0, r.useState)(!1)),
				(t = 2),
				(function (e) {
					if (Array.isArray(e)) return e;
				})(e) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null != n) {
							var r,
								a,
								l,
								o,
								i = [],
								u = !0,
								s = !1;
							try {
								if (((l = (n = n.call(e)).next), 0 === t)) {
									if (Object(n) !== n) return;
									u = !1;
								} else
									for (
										;
										!(u = (r = l.call(n)).done) &&
										(i.push(r.value), i.length !== t);
										u = !0
									);
							} catch (e) {
								(s = !0), (a = e);
							} finally {
								try {
									if (
										!u &&
										null != n.return &&
										((o = n.return()), Object(o) !== o)
									)
										return;
								} finally {
									if (s) throw a;
								}
							}
							return i;
						}
					})(e, t) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return ft(e, t);
							var n = {}.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n
									? Array.from(e)
									: "Arguments" === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? ft(e, t)
									: void 0
							);
						}
					})(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()),
			a = n[0],
			l = n[1];
		return (
			(0, r.useEffect)(function () {
				l(!0),
					console.log("The About component has mounted."),
					(document.title = "About");
			}, []),
			(0, r.useEffect)(function () {
				a && console.log("The About component has updated.");
			}),
			(0, r.useEffect)(function () {
				return function () {
					console.log("The About component has unmounted.");
				};
			}, []),
			r.createElement(
				"main",
				null,
				r.createElement(
					"div",
					{ className: "container" },
					r.createElement(
						"div",
						{ className: "row" },
						r.createElement(
							"div",
							{ className: "col-12 col-md-12 " },
							r.createElement(
								"section",
								null,
								r.createElement("h1", null, "About Us"),
								r.createElement("img", {
									alt: "America's Best Food Award logo",
									src: Ye,
									height: "500px",
									width: "100%",
									id: "BestInAmerica",
								}),
								r.createElement("h2", null, "Philosophy: Good Food Matters!"),
								r.createElement(
									"p",
									null,
									"Hey there, mon chere'! We live for and love to eat Good Food! It makes ",
									r.createElement("b", null, "ZERO"),
									" sense to us to plate ",
									r.createElement("i", null, "something"),
									" that tastes anything short of absolutely delicious and looks like meh...What a wasted dish! 🙊🙉🙈 We don't do that 'round these parts!"
								),
								r.createElement("br", null),
								r.createElement("img", {
									alt: "chef trophy winner",
									src: Xe,
									width: "100%",
									id: "chefTrophy",
								})
							)
						),
						r.createElement(
							"div",
							{ className: "col-12 col-md-6" },
							r.createElement(
								"section",
								null,
								r.createElement("h2", null, "Who We Are"),
								r.createElement(
									"p",
									null,
									"We are a multi-award winning restaurant where folks are greeted with the heart of the South...it's simply Good Food. Food so good, you wanna tell the world how darn good it is! Food so good, you'll want a second helping, or a third, or a fourth! No worries, we got you covered there!"
								),
								r.createElement("br", null),
								r.createElement(
									"p",
									null,
									"As you can see, we are proud to have been supported as a local fan favorite for over 20 years. Thank you so much to all the people from around the world that have swung by to see us and share in our Good Food Philosophy."
								),
								r.createElement("br", null),
								r.createElement("br", null),
								r.createElement(Ke, null),
								r.createElement("h4", null, "Come on back now, ya' hear?"),
								r.createElement("br", null)
							),
							r.createElement("hr", null)
						),
						r.createElement(
							"div",
							{ className: "col-12  col-md-6" },
							r.createElement(
								"p",
								null,
								"Site Inspiration:Love of GOOD FOOD! 😍 I believe that potential employers will wish to hire me based on this website because it pretty much is a functional, informational website. Most people who have no idea about software development may even think that this site represents a real business, even though this is my imagination at work. It shows that I can manage projects until completion, adhering to detailed instruction from leadership, but allows my personality, style, and flair to also be showcased in the work."
							),
							r.createElement("br", null),
							r.createElement(
								"p",
								null,
								"Site Features: This website was created using HTML, CSS, Bootstrap, and Javascript. In Level 1, we learned to create and style basic websites, run functions, attach images/videos, create grids and cards. In Level 2 of the course, we have expanded our knowledgebase; we can attach and create image maps, process forms, simulate server responses, extract data from REST APIs, and use SASS styling upgrades, including mixins, transitions and animations --all of which has been integrated into this website."
							)
						)
					)
				)
			)
		);
	}
	(dt.styleTagTransform = st()),
		(dt.setAttributes = lt()),
		(dt.insert = rt().bind(null, "head")),
		(dt.domAPI = tt()),
		(dt.insertStyleElement = it()),
		Ze()(ct.A, dt),
		ct.A && ct.A.locals && ct.A.locals;
	const pt = n.p + "26409df942713808fc14.jpg",
		ht = n.p + "6b505ce079ad40e05da8.jpg",
		gt = n.p + "7d64e7eec2fa93e8c0b9.jpg";
	function yt(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	function bt() {
		var e,
			t,
			n =
				((e = (0, r.useState)(!1)),
				(t = 2),
				(function (e) {
					if (Array.isArray(e)) return e;
				})(e) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null != n) {
							var r,
								a,
								l,
								o,
								i = [],
								u = !0,
								s = !1;
							try {
								if (((l = (n = n.call(e)).next), 0 === t)) {
									if (Object(n) !== n) return;
									u = !1;
								} else
									for (
										;
										!(u = (r = l.call(n)).done) &&
										(i.push(r.value), i.length !== t);
										u = !0
									);
							} catch (e) {
								(s = !0), (a = e);
							} finally {
								try {
									if (
										!u &&
										null != n.return &&
										((o = n.return()), Object(o) !== o)
									)
										return;
								} finally {
									if (s) throw a;
								}
							}
							return i;
						}
					})(e, t) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return yt(e, t);
							var n = {}.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n
									? Array.from(e)
									: "Arguments" === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? yt(e, t)
									: void 0
							);
						}
					})(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()),
			a = n[0],
			l = n[1];
		return (
			(0, r.useEffect)(function () {
				l(!0),
					console.log("The Photos component has mounted."),
					(document.title = "Photos");
			}, []),
			(0, r.useEffect)(function () {
				a && console.log("The Photos component has updated.");
			}),
			(0, r.useEffect)(function () {
				return function () {
					console.log("The Photos component has unmounted.");
				};
			}, []),
			r.createElement(
				"main",
				null,
				r.createElement("h1", null, " Food Hall of Fame"),
				r.createElement(
					"div",
					{ className: "container" },
					r.createElement(
						"div",
						{ className: "row" },
						r.createElement(
							"div",
							{ className: "col-12 col-md-6 col-lg-4" },
							r.createElement(
								"div",
								{ className: "card", id: "card1" },
								r.createElement("img", {
									width: "30%",
									src: Ue,
									className: "card-img-top",
									alt: "Fried Fish Basket",
								}),
								r.createElement(
									"div",
									{ className: "card-body" },
									r.createElement(
										"h5",
										{ className: "card-title" },
										"Fried Fish Basket"
									),
									r.createElement(
										"p",
										{ className: "card-text" },
										"Local, Wild-caught Catfish and Soft-Shelled Crabs fried to perfection."
									),
									r.createElement("br", null)
								)
							)
						),
						r.createElement(
							"div",
							{ className: "col-12 col-md-6 col-lg-4" },
							r.createElement(
								"div",
								{ className: "card", id: "card2" },
								r.createElement("img", {
									width: "30%",
									src: Be,
									className: "card-img-top",
									alt: "Chef's Kiss Salad",
								}),
								r.createElement(
									"div",
									{ className: "card-body" },
									r.createElement(
										"h5",
										{ className: "card-title" },
										"Chef's Kiss Salad"
									),
									r.createElement(
										"p",
										{ className: "card-text" },
										"House-grown greens with spring vegetables and tangy Meyer lemon vinaigrette. Extra Avocado is the chef's kiss!"
									),
									r.createElement("br", null)
								)
							)
						),
						r.createElement(
							"div",
							{ className: "col-12 col-md-6 col-lg-4" },
							r.createElement(
								"div",
								{ className: "card", id: "card3" },
								r.createElement("img", {
									width: "30%",
									src: je,
									className: "card-img-top",
									alt: "CheeseBurger",
								}),
								r.createElement(
									"div",
									{ className: "card-body" },
									r.createElement(
										"h5",
										{ className: "card-title" },
										"CheeseBurger"
									),
									r.createElement(
										"p",
										{ className: "card-text" },
										"Juicy 1/4-lb Joseph Farms cheeseburger with roasted garlic aioli on a brioche bun. Ask for it with 'All The Fixin's' for an extra special treat!"
									),
									r.createElement("br", null)
								)
							)
						),
						r.createElement(
							"div",
							{ className: "col-12 col-md-6 col-lg-4" },
							r.createElement(
								"div",
								{ className: "card", id: "card1" },
								r.createElement("img", {
									width: "30%",
									src: pt,
									className: "card-img-top",
									alt: "Seafood Gumbo",
								}),
								r.createElement(
									"div",
									{ className: "card-body" },
									r.createElement(
										"h5",
										{ className: "card-title" },
										"Seafood Gumbo"
									),
									r.createElement(
										"p",
										{ className: "card-text" },
										"Our Ragin' Cajun rendition of the classic NOLA staple made in-house. Think HUGE Gulf Shrimp, Chicken, and Andouille Sausage Gumbo over seasoned, steamed rice. Even better with a piece of Sweet Potato Corn Bread. Thank us later."
									),
									r.createElement("br", null)
								)
							)
						),
						r.createElement(
							"div",
							{ className: "col-12 col-md-6 col-lg-4" },
							r.createElement(
								"div",
								{ className: "card", id: "card5" },
								r.createElement("img", {
									width: "",
									src: gt,
									className: "card-img-top",
									alt: "Shrimp Poboy",
								}),
								r.createElement(
									"div",
									{ className: "card-body" },
									r.createElement(
										"h5",
										{ className: "card-title" },
										"ShrimpPoboy"
									),
									r.createElement(
										"p",
										{ className: "card-text" },
										"Big, juicy, fresh-caught Gulf shrimp, fried light and crisp on a homemade french bread bun from local world-renown Lejuene's Bakery. Serving sizes large enough for now and some for later."
									),
									r.createElement("br", null)
								)
							)
						),
						r.createElement(
							"div",
							{ className: "col-12 col-md-6 col-lg-4" },
							r.createElement(
								"div",
								{ className: "card", id: "card6" },
								r.createElement("img", {
									width: "30%",
									src: ht,
									className: "card-img-top",
									alt: "Chicken Basket",
								}),
								r.createElement(
									"div",
									{ className: "card-body" },
									r.createElement(
										"h5",
										{ className: "card-title" },
										"Chicken Basket"
									),
									r.createElement(
										"p",
										{ className: "card-text" },
										"Crispy, juicy chicken tenders seasoned to perfection and freshly breaded by our chef daily. Served with hand-cut fries made from Yukon Gold potatoes, because only the best for our family and friends."
									),
									r.createElement("br", null)
								)
							)
						)
					)
				)
			)
		);
	}
	function vt(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	function wt() {
		var e,
			t,
			n =
				((e = (0, r.useState)(!1)),
				(t = 2),
				(function (e) {
					if (Array.isArray(e)) return e;
				})(e) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null != n) {
							var r,
								a,
								l,
								o,
								i = [],
								u = !0,
								s = !1;
							try {
								if (((l = (n = n.call(e)).next), 0 === t)) {
									if (Object(n) !== n) return;
									u = !1;
								} else
									for (
										;
										!(u = (r = l.call(n)).done) &&
										(i.push(r.value), i.length !== t);
										u = !0
									);
							} catch (e) {
								(s = !0), (a = e);
							} finally {
								try {
									if (
										!u &&
										null != n.return &&
										((o = n.return()), Object(o) !== o)
									)
										return;
								} finally {
									if (s) throw a;
								}
							}
							return i;
						}
					})(e, t) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return vt(e, t);
							var n = {}.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n
									? Array.from(e)
									: "Arguments" === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? vt(e, t)
									: void 0
							);
						}
					})(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()),
			a = n[0],
			l = n[1];
		return (
			(0, r.useEffect)(function () {
				l(!0),
					console.log("The Menus component has mounted."),
					(document.title = "Menus");
			}, []),
			(0, r.useEffect)(function () {
				!0 === a && console.log("The Menus component has updated.");
			}),
			(0, r.useEffect)(function () {
				return function () {
					console.log("The Menus component has unmounted.");
				};
			}, []),
			r.createElement(
				r.Fragment,
				null,
				r.createElement(
					"main",
					{ style: { textAlign: "center" } },
					r.createElement(
						"div",
						{ className: "container" },
						r.createElement(
							"div",
							{ className: "row" },
							r.createElement(
								"div",
								{ className: "col-12" },
								r.createElement("h1", null, "Full Menu"),
								r.createElement("p", null, " ASK ABOUT OUR DAILY SPECIALS!"),
								r.createElement("hr", null)
							),
							r.createElement(
								"div",
								{ className: "col-6 col-md-12 col-lg-12 " },
								r.createElement(
									"section",
									null,
									r.createElement("h2", { id: "appetizers" }, "Appetizers"),
									r.createElement(
										"ul",
										{
											className:
												"list-group text-primary border border-5 border-primary",
										},
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Fried Pickles"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Fried Green Tomatoes"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Fried Okra"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Crawfish Pistolette"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Shrimp Pistolette",
											r.createElement(
												"span",
												{ className: "badge bg-success" },
												"Customer Rated 10/10 😍"
											)
										)
									)
								),
								r.createElement("hr", null)
							),
							r.createElement(
								"div",
								{ className: "col-6 col-md-12 col-lg-12" },
								r.createElement(
									"section",
									null,
									r.createElement(
										"h3",
										{ id: "soups" },
										"Soups, Salads, and Gumbos"
									),
									r.createElement(
										"p",
										null,
										"All Soups/Gumbos served with Potato Salad or Side Salad and Crackers"
									),
									r.createElement(
										"ul",
										{
											className:
												"list-group text-primary border border-5 border-primary",
										},
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Shrimp Salad"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Grilled Chicken Salad"
										),
										r.createElement(
											"li",
											{ className: "list-group-item", "aria-current": "true" },
											"Chef's Kiss Salad",
											r.createElement(
												"span",
												{ className: "text-end badge bg-success" },
												"Customer Rated 10/10 😍"
											)
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Creole Shrimp and Tomato Soup"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Seafood Gumbo"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Chicken and Sausage Gumbo"
										)
									)
								),
								r.createElement("hr", null)
							),
							r.createElement(
								"div",
								{ className: "col-6 col-md-12 col-lg-12" },
								r.createElement(
									"section",
									null,
									r.createElement(
										"h3",
										{ id: "poboys" },
										"Overstuffed Po-Boys",
										r.createElement("br", null),
										" (Half or Whole)"
									),
									r.createElement(
										"ul",
										{
											className:
												"list-group text-primary border border-5 border-primary",
										},
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Oyster"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Shrimp"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Crawfish"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Fish"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Seafood Platter Po-Boy: contains shrimp, crawfish, catfish and oysters",
											r.createElement(
												"span",
												{ className: "badge bg-success" },
												" ",
												"Customer Rated 10/10 😍"
											)
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Roast Beef"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Ham and Swiss Cheese"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Grilled Chicken Breast"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Hamburger"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Cheeseburger"
										)
									)
								),
								r.createElement("hr", null)
							),
							r.createElement(
								"div",
								{ className: "col-6 col-md-12 col-lg-12" },
								r.createElement("h3", { id: "baskets" }, "Baskets"),
								r.createElement(
									"ul",
									{
										className:
											"list-group text-primary border border-5 border-primary",
									},
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"Shrimp Basket"
									),
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"Crawfish Basket"
									),
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"Catfish Basket"
									),
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"Oyster Basket"
									),
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"Seafood Combo Basket"
									),
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"Chicken Tender Basket"
									),
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"Kid's Basket (with fries and roll)"
									)
								),
								r.createElement("hr", null)
							),
							r.createElement(
								"div",
								{ className: "col-6 col-md-12 col-lg-12" },
								r.createElement("h3", { id: "burgers" }, "Burgers"),
								r.createElement(
									"p",
									{ className: "text-center fs-6" },
									"Served with choice of Fries, Onion Rings, or Tater tots"
								),
								r.createElement(
									"ul",
									{
										className:
											"list-group text-primary border border-5 border-primary",
									},
									r.createElement(
										"div",
										{ className: " badge bg-primary" },
										"Gluten Free Buns available"
									),
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"Hamburger"
									),
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"Cheeseburger"
									),
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"1/4 lb Hamburger"
									),
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"1/4 lb Cheeseburger",
										r.createElement(
											"span",
											{ className: "badge bg-success" },
											" ",
											"Customer Rated 10/10 😍"
										)
									),
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"Shrimp, Catfish, or Crawfish Burger"
									)
								),
								r.createElement("hr", null)
							),
							r.createElement(
								"div",
								{ className: "col-6 col-md-12 col-lg-12" },
								r.createElement(
									"h3",
									{ id: "snacks", className: "text-center" },
									r.createElement("u", null, "Snack Bites")
								),
								r.createElement(
									"ul",
									{
										className:
											"list-group text-primary border border-5 border-primary",
									},
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"Fries"
									),
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"Chicken Tenders"
									),
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"Tater Tots"
									),
									r.createElement(
										"li",
										{ className: "list-group-item" },
										"Onion Rings"
									)
								),
								r.createElement("hr", null)
							),
							r.createElement(
								"div",
								{ className: "row" },
								r.createElement(
									"div",
									{ className: "col-6 col-md-12 col-lg-12" },
									r.createElement(
										"h3",
										{ id: "drinks", className: "text-center" },
										"Soft Drinks"
									),
									r.createElement(
										"ul",
										{
											className:
												"list-group text-primary border border-5 border-primary",
										},
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Hot Tea"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Sweet Tea"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Unsweet Tea"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											" Strawberry Iced Tea"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Coke"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Diet Coke"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Root Beer"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Sprite"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Mr. Pibb"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Lemonade"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Strawberry Lemonade"
										)
									),
									r.createElement("hr", null)
								),
								r.createElement(
									"div",
									{ className: "col-6 col-md-12 col-lg-12" },
									r.createElement(
										"h3",
										{ id: "alcohol", className: "text-center" },
										"Beer & Wine"
									),
									r.createElement(
										"ul",
										{
											className:
												"list-group text-primary border border-5 border-primary",
										},
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Coors Lite"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Miller Lite"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Bud Lite"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Budweiser"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Heineken"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Corona"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Dos Equis"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Stella Artois"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Modelo"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Chardonnay"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Champagne"
										),
										r.createElement(
											"li",
											{ className: "list-group-item" },
											"Pinot Noir"
										)
									)
								)
							)
						)
					)
				),
				r.createElement("hr", null),
				r.createElement(
					"footer",
					{
						id: "menusFooter",
						style: { textAlign: "center", border: "primary" },
					},
					r.createElement("b", null, "Menu Map"),
					r.createElement("br", null),
					r.createElement(
						"nav",
						null,
						r.createElement("a", { href: "#appetizers" }, "Appetizers"),
						r.createElement("br", null),
						r.createElement("a", { href: "#soups" }, "Soups/Salads/Gumbo"),
						r.createElement("br", null),
						r.createElement("a", { href: "#poboys" }, "Overstuffed Poboys"),
						r.createElement("br", null),
						r.createElement("a", { href: "#baskets" }, "Baskets"),
						r.createElement("br", null),
						r.createElement("a", { href: "#burgers" }, "Burgers"),
						r.createElement("br", null),
						r.createElement("a", { href: "#snacks" }, "Snack Bites"),
						r.createElement("br", null),
						r.createElement("a", { href: "#drinks" }, "Ice Cold Beverages"),
						r.createElement("br", null),
						r.createElement("a", { href: "#alcohol" }, "Beer & Wine")
					)
				)
			)
		);
	}
	function Et(e, t) {
		return (
			(function (e) {
				if (Array.isArray(e)) return e;
			})(e) ||
			(function (e, t) {
				var n =
					null == e
						? null
						: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
						  e["@@iterator"];
				if (null != n) {
					var r,
						a,
						l,
						o,
						i = [],
						u = !0,
						s = !1;
					try {
						if (((l = (n = n.call(e)).next), 0 === t)) {
							if (Object(n) !== n) return;
							u = !1;
						} else
							for (
								;
								!(u = (r = l.call(n)).done) &&
								(i.push(r.value), i.length !== t);
								u = !0
							);
					} catch (e) {
						(s = !0), (a = e);
					} finally {
						try {
							if (!u && null != n.return && ((o = n.return()), Object(o) !== o))
								return;
						} finally {
							if (s) throw a;
						}
					}
					return i;
				}
			})(e, t) ||
			(function (e, t) {
				if (e) {
					if ("string" == typeof e) return St(e, t);
					var n = {}.toString.call(e).slice(8, -1);
					return (
						"Object" === n && e.constructor && (n = e.constructor.name),
						"Map" === n || "Set" === n
							? Array.from(e)
							: "Arguments" === n ||
							  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
							? St(e, t)
							: void 0
					);
				}
			})(e, t) ||
			(function () {
				throw new TypeError(
					"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				);
			})()
		);
	}
	function St(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	function kt() {
		var e = Et((0, r.useState)(!1), 2),
			t = e[0],
			n = e[1],
			a = Et((0, r.useState)(""), 2),
			l = a[0],
			o = a[1],
			i = Et((0, r.useState)(""), 2),
			u = i[0],
			s = i[1],
			c = Et((0, r.useState)(""), 2),
			d = c[0],
			f = c[1];
		return (
			(0, r.useEffect)(function () {
				n(!0),
					console.log("The Contact component has mounted."),
					(document.title = "Contact");
			}, []),
			(0, r.useEffect)(function () {
				t && console.log("The Contact component has updated.");
			}),
			(0, r.useEffect)(function () {
				return function () {
					console.log("The Contact component has unmounted.");
				};
			}, []),
			r.createElement(
				r.Fragment,
				null,
				r.createElement(
					"main",
					{ style: { textAlign: "center" } },
					r.createElement(
						"div",
						{ className: "container" },
						r.createElement(
							"div",
							{ className: "row" },
							r.createElement(
								"div",
								{ className: "col-12 col-md-6 col-lg-3 " },
								r.createElement("h1", null, " Contact Us! "),
								r.createElement("hr", null),
								r.createElement(
									"p",
									null,
									"We love hearing from our customers. Please feel free to leave a rating, comments, suggestions, or ask any inquiries in the form below. Thank you in advance. We look forward to serving you again soon."
								)
							),
							r.createElement(
								"div",
								{ className: "col-12 col-md-6 col-lg-3" },
								r.createElement(
									"section",
									{ id: "ratings" },
									r.createElement(
										"form",
										{
											onSubmit: function (e) {
												e.preventDefault(),
													f("Thanks! We have received your message!");
											},
											id: "ratingsForm",
										},
										r.createElement("p", null, "How was your food experience?"),
										r.createElement(
											"fieldset",
											null,
											r.createElement("legend", null, "Rating:"),
											r.createElement("input", {
												id: "hated it",
												type: "radio",
												name: "rating",
											}),
											r.createElement(
												"label",
												{ htmlFor: "hated it" },
												"🤢Hated it!"
											),
											r.createElement("i", { className: "bi bi-emoji-tear" }),
											r.createElement("br", null),
											r.createElement("input", {
												id: "disliked",
												type: "radio",
												name: "rating",
											}),
											r.createElement(
												"label",
												{ htmlFor: "disliked" },
												"😓Disliked it."
											),
											r.createElement("i", { className: "bi bi-emoji-frown" }),
											r.createElement("br", null),
											r.createElement("input", {
												id: "okay",
												type: "radio",
												name: "rating",
											}),
											r.createElement(
												"label",
												{ htmlFor: "okay" },
												"😔Meh...it was just okay."
											),
											r.createElement("i", {
												className: "bi bi-emoji-neutral",
											}),
											r.createElement("br", null),
											r.createElement("input", {
												id: "liked",
												type: "radio",
												name: "rating",
											}),
											r.createElement(
												"label",
												{ htmlFor: "liked" },
												"😋Liked it."
											),
											r.createElement("i", { className: "bi bi-emoji-smile" }),
											r.createElement("br", null),
											r.createElement("input", {
												id: "loved",
												type: "radio",
												name: "rating",
											}),
											r.createElement(
												"label",
												{ htmlFor: "loved" },
												"😍 Loved it!"
											),
											r.createElement("i", {
												className: "bi bi-emoji-heart-eyes",
											}),
											r.createElement("br", null),
											r.createElement("input", {
												type: "submit",
												className: "btn btn-sm rounded-3 bg-primary",
												id: "mixin-input",
											})
										)
									),
									d
								),
								r.createElement("hr", null)
							),
							r.createElement(
								"div",
								{ className: "col-12 col-md-6 col-lg-3" },
								r.createElement(
									"section",
									{ id: "comments" },
									r.createElement(
										"form",
										{
											onSubmit: function (e) {
												e.preventDefault();
												var t = e.target[0].value;
												s("Thank you for your message, ".concat(t, "!"));
											},
											id: "commentsForm",
										},
										r.createElement("p", null, "Send Us a Message"),
										r.createElement(
											"label",
											{ htmlFor: "name" },
											"First Name:"
										),
										r.createElement("br", null),
										r.createElement("input", {
											id: "name",
											type: "text",
											placeholder: "Enter First Name",
										}),
										r.createElement("br", null),
										r.createElement("i", { className: "bi bi-envelope-at" }),
										r.createElement(
											"label",
											{ htmlFor: "email" },
											"Email Address:"
										),
										r.createElement("br", null),
										r.createElement("input", {
											id: "email",
											type: "email",
											placeholder: "Enter Email Address",
											required: !0,
										}),
										r.createElement("br", null),
										r.createElement(
											"label",
											{ htmlFor: "message" },
											"Message:"
										),
										r.createElement("br", null),
										r.createElement("textarea", { id: "message" }),
										r.createElement("br", null),
										r.createElement("input", {
											id: "mixin-button",
											type: "submit",
											value: "Submit Message",
											className: "btn btn-sm rounded-3 bg-primary",
										})
									),
									u
								),
								r.createElement("hr", null)
							),
							r.createElement(
								"div",
								{ className: "col-12 col-md-6 col-lg-3" },
								r.createElement(
									"section",
									{ id: "catering" },
									r.createElement("h3", null, "Catering"),
									r.createElement(
										"p",
										null,
										"Looking to eat Good Food at your next family, corporate, or festival event? We offer catering services for events of any size!",
										r.createElement("br", null),
										" Schedule a phone appointment with our Good Food Hosts to book today!"
									),
									r.createElement("hr", null),
									r.createElement(
										"form",
										{
											onSubmit: function (e) {
												e.preventDefault();
												var t = e.target,
													n = t[3],
													r = t[0],
													a = t[2],
													l = n.value,
													i = r.value,
													u = a.value;
												o(
													"Thank you, "
														.concat(
															i,
															". Your phone appointment is scheduled for "
														)
														.concat(u, ".You can expect a call at ")
														.concat(l, ". Have a great rest of your day.")
												);
											},
											id: "cateringForm",
										},
										r.createElement(
											"label",
											{ htmlFor: "firstName" },
											" First Name:"
										),
										r.createElement("br", null),
										r.createElement("input", {
											id: "firstName",
											required: !0,
											name: "firstName",
											type: "text",
											placeholder: "Enter First Name",
										}),
										r.createElement("br", null),
										r.createElement(
											"label",
											{ htmlFor: "lastName" },
											" Last Name:"
										),
										r.createElement("br", null),
										r.createElement("input", {
											id: "lastName",
											required: !0,
											name: "lastName",
											type: "text",
											placeholder: "Enter Last Name",
										}),
										r.createElement("br", null),
										r.createElement("i", { className: "bi bi-calendar4-week" }),
										r.createElement(
											"label",
											{ htmlFor: "calendar" },
											"Phone Appointment:"
										),
										r.createElement("br", null),
										r.createElement("input", {
											id: "calendar",
											required: !0,
											name: "calendar",
											type: "datetime-local",
										}),
										r.createElement("br", null),
										r.createElement("i", { className: "bi bi-telephone" }),
										r.createElement(
											"label",
											{ htmlFor: "phoneNumber" },
											"Phone Number:"
										),
										r.createElement("br", null),
										r.createElement("input", {
											id: "phoneNumber",
											required: !0,
											name: "phoneNumber",
											type: "tel",
											placeholder: "###-###-####",
											pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
										}),
										r.createElement("br", null),
										r.createElement("i", { className: "bi bi-envelope-at" }),
										r.createElement("label", { htmlFor: "email" }, "Email:"),
										r.createElement("br", null),
										r.createElement("input", {
											id: "email",
											required: !0,
											name: "email",
											type: "text",
											placeholder: "Enter Email Address",
										}),
										r.createElement("br", null),
										r.createElement(
											"label",
											{ htmlFor: "message" },
											"Optional Message:"
										),
										r.createElement("br", null),
										r.createElement("textarea", {
											name: "message",
											id: "message",
										}),
										r.createElement("br", null),
										r.createElement("input", {
											id: "mixin-button",
											type: "submit",
											value: "Submit",
											className: "btn btn-sm rounded-3 bg-primary",
										}),
										r.createElement("input", {
											id: "mixin-button",
											type: "reset",
											value: "Reset form",
											className: "btn btn-sm rounded-3 bg-primary",
										})
									),
									l
								)
							)
						)
					)
				)
			)
		);
	}
	const Ct = n.p + "5fc655acc8d5d534f993.jpg";
	function Nt(e) {
		var t = e.errorMessage;
		return r.createElement(
			r.Fragment,
			null,
			"Email:",
			r.createElement("input", { type: "email", required: !0, id: "email" }),
			r.createElement("br", null),
			"Password:",
			r.createElement("input", {
				type: "password",
				required: !0,
				id: "password",
			}),
			r.createElement("div", { style: { color: "red" } }, t)
		);
	}
	var xt = [
		{ email: "abc@logins.com", password: "aaa" },
		{ email: "123@logins.com", password: "bbb" },
		{ email: "abc123@logins.com", password: "ccc" },
	];
	function At(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	function Pt(e, t, n) {
		e.preventDefault();
		var r = e.target,
			a = r[1],
			l = r[2],
			o = (function (e, t) {
				var n,
					r = (function (e, t) {
						var n =
							("undefined" != typeof Symbol && e[Symbol.iterator]) ||
							e["@@iterator"];
						if (!n) {
							if (
								Array.isArray(e) ||
								(n = (function (e, t) {
									if (e) {
										if ("string" == typeof e) return At(e, t);
										var n = {}.toString.call(e).slice(8, -1);
										return (
											"Object" === n &&
												e.constructor &&
												(n = e.constructor.name),
											"Map" === n || "Set" === n
												? Array.from(e)
												: "Arguments" === n ||
												  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
												? At(e, t)
												: void 0
										);
									}
								})(e)) ||
								(t && e && "number" == typeof e.length)
							) {
								n && (e = n);
								var r = 0,
									a = function () {};
								return {
									s: a,
									n: function () {
										return r >= e.length
											? { done: !0 }
											: { done: !1, value: e[r++] };
									},
									e: function (e) {
										throw e;
									},
									f: a,
								};
							}
							throw new TypeError(
								"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
							);
						}
						var l,
							o = !0,
							i = !1;
						return {
							s: function () {
								n = n.call(e);
							},
							n: function () {
								var e = n.next();
								return (o = e.done), e;
							},
							e: function (e) {
								(i = !0), (l = e);
							},
							f: function () {
								try {
									o || null == n.return || n.return();
								} finally {
									if (i) throw l;
								}
							},
						};
					})(xt);
				try {
					for (r.s(); !(n = r.n()).done; ) {
						var a = n.value,
							l = a.email,
							o = a.password;
						if (l === e && o === t) return !0;
					}
				} catch (e) {
					r.e(e);
				} finally {
					r.f();
				}
				return !1;
			})(a.value, l.value),
			i = r[0];
		o ? (i.click(), n()) : t("The email and/or password is incorrect!");
	}
	function Tt(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	function _t(e) {
		var t,
			n,
			a = e.onSignIn,
			l =
				((t = (0, r.useState)("")),
				(n = 2),
				(function (e) {
					if (Array.isArray(e)) return e;
				})(t) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null != n) {
							var r,
								a,
								l,
								o,
								i = [],
								u = !0,
								s = !1;
							try {
								if (((l = (n = n.call(e)).next), 0 === t)) {
									if (Object(n) !== n) return;
									u = !1;
								} else
									for (
										;
										!(u = (r = l.call(n)).done) &&
										(i.push(r.value), i.length !== t);
										u = !0
									);
							} catch (e) {
								(s = !0), (a = e);
							} finally {
								try {
									if (
										!u &&
										null != n.return &&
										((o = n.return()), Object(o) !== o)
									)
										return;
								} finally {
									if (s) throw a;
								}
							}
							return i;
						}
					})(t, n) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return Tt(e, t);
							var n = {}.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n
									? Array.from(e)
									: "Arguments" === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? Tt(e, t)
									: void 0
							);
						}
					})(t, n) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()),
			o = l[0],
			i = l[1];
		return r.createElement(
			r.Fragment,
			null,
			r.createElement(
				"button",
				{
					type: "button",
					className: "btn btn-secondary",
					"data-bs-toggle": "modal",
					"data-bs-target": "#signInModal",
				},
				"Sign In"
			),
			r.createElement(
				"form",
				{
					onSubmit: function (e) {
						Pt(e, i, a);
					},
					className: "modal fade",
					id: "signInModal",
					tabIndex: "-1",
					"aria-labelledby": "signInModalLabel",
					"aria-hidden": "true",
				},
				r.createElement(
					"div",
					{ className: "modal-dialog" },
					r.createElement(
						"div",
						{ className: "modal-content" },
						r.createElement(
							"div",
							{ className: "modal-header" },
							r.createElement(
								"h1",
								{ className: "modal-title fs-5", id: "signInModalLabel" },
								"Sign In"
							),
							r.createElement("button", {
								type: "button",
								className: "btn-close",
								"data-bs-dismiss": "modal",
								"aria-label": "Close",
							})
						),
						r.createElement(
							"div",
							{ className: "modal-body" },
							r.createElement(Nt, { errorMessage: o })
						),
						r.createElement(
							"div",
							{ className: "modal-footer" },
							r.createElement(
								"button",
								{
									id: "signInCloseButton",
									type: "button",
									className: "btn btn-secondary",
									"data-bs-dismiss": "modal",
								},
								"Close"
							),
							r.createElement(
								"button",
								{ type: "submit", className: "btn btn-primary" },
								"Sign In"
							)
						)
					)
				)
			)
		);
	}
	function Lt(e) {
		var t = e.onSignOut;
		return r.createElement(
			r.Fragment,
			null,
			r.createElement(
				"button",
				{
					type: "button",
					className: "btn btn-secondary",
					"data-bs-toggle": "modal",
					"data-bs-target": "#signOutModal",
				},
				"Sign Out"
			),
			r.createElement(
				"form",
				{
					onSubmit: function () {
						var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: new Event();
						e.preventDefault(), e.target[1].click(), t();
					},
					className: "modal fade",
					id: "signOutModal",
					tabIndex: "-1",
					"aria-labelledby": "signInModalLabel",
					"aria-hidden": "true",
				},
				r.createElement(
					"div",
					{ className: "modal-dialog" },
					r.createElement(
						"div",
						{ className: "modal-content" },
						r.createElement(
							"div",
							{ className: "modal-header" },
							r.createElement(
								"h1",
								{ className: "modal-title fs-5", id: "signOutModalLabel" },
								"Sign Out"
							),
							r.createElement("button", {
								type: "button",
								className: "btn-close",
								"data-bs-dismiss": "modal",
								"aria-label": "Close",
							})
						),
						r.createElement(
							"div",
							{ className: "modal-body" },
							"Are you sure you want to sign out?"
						),
						r.createElement(
							"div",
							{ className: "modal-footer" },
							r.createElement(
								"button",
								{
									id: "signOutCloseButton",
									type: "button",
									className: "btn btn-secondary",
									"data-bs-dismiss": "modal",
								},
								"Close"
							),
							r.createElement(
								"button",
								{ type: "submit", className: "btn btn-primary" },
								"Sign Out"
							)
						)
					)
				)
			)
		);
	}
	function zt(e, t) {
		return (
			(function (e) {
				if (Array.isArray(e)) return e;
			})(e) ||
			(function (e, t) {
				var n =
					null == e
						? null
						: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
						  e["@@iterator"];
				if (null != n) {
					var r,
						a,
						l,
						o,
						i = [],
						u = !0,
						s = !1;
					try {
						if (((l = (n = n.call(e)).next), 0 === t)) {
							if (Object(n) !== n) return;
							u = !1;
						} else
							for (
								;
								!(u = (r = l.call(n)).done) &&
								(i.push(r.value), i.length !== t);
								u = !0
							);
					} catch (e) {
						(s = !0), (a = e);
					} finally {
						try {
							if (!u && null != n.return && ((o = n.return()), Object(o) !== o))
								return;
						} finally {
							if (s) throw a;
						}
					}
					return i;
				}
			})(e, t) ||
			(function (e, t) {
				if (e) {
					if ("string" == typeof e) return Ot(e, t);
					var n = {}.toString.call(e).slice(8, -1);
					return (
						"Object" === n && e.constructor && (n = e.constructor.name),
						"Map" === n || "Set" === n
							? Array.from(e)
							: "Arguments" === n ||
							  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
							? Ot(e, t)
							: void 0
					);
				}
			})(e, t) ||
			(function () {
				throw new TypeError(
					"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				);
			})()
		);
	}
	function Ot(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	function Rt() {
		var e = zt((0, r.useState)(!1), 2),
			t = e[0],
			n = e[1],
			a = zt((0, r.useState)(r.createElement(r.Fragment, null)), 2),
			l = a[0],
			o = a[1],
			i = zt((0, r.useState)(!1), 2),
			u = i[0],
			s = i[1];
		return (
			(0, r.useEffect)(function () {
				console.log("MOUNT PHASE: SignInArea"),
					o(
						u
							? r.createElement(Lt, { onSignOut: d })
							: r.createElement(_t, { onSignIn: c })
					),
					n(!0);
			}, []),
			(0, r.useEffect)(
				function () {
					t &&
						(console.log("UPDATE PHASE: SignInArea"),
						o(
							u
								? r.createElement(Lt, { onSignOut: d })
								: r.createElement(_t, { onSignIn: c })
						));
				},
				[u]
			),
			r.createElement(r.Fragment, null, l)
		);
		function c() {
			s(!0);
		}
		function d() {
			s(!1);
		}
	}
	function Ft() {
		var e = "";
		return (
			"raylonjmg.github.io" === window.location.hostname &&
				(e = "/Capstone-Level-4"),
			r.createElement(
				"nav",
				{ className: "nav-pills navbar navbar-expand-sm bg-body-tertiary" },
				r.createElement(
					"div",
					{ className: "container-fluid" },
					r.createElement(
						"button",
						{
							className: "navbar-toggler",
							type: "button",
							"data-bs-toggle": "collapse",
							"data-bs-target": "#navbarNavAltMarkup",
							"aria-controls": "navbarNavAltMarkup",
							"aria-expanded": "false",
							"aria-label": "Toggle navigation",
						},
						r.createElement("span", { className: "navbar-toggler-icon" })
					),
					r.createElement(
						"div",
						{ className: "collapse navbar-collapse", id: "navbarNavAltMarkup" },
						r.createElement(
							"div",
							{ className: "navbar-nav" },
							r.createElement(
								Oe,
								{
									end: !0,
									className: "nav-link",
									"aria-current": "page",
									to: "".concat(e, "/"),
								},
								"Home"
							),
							r.createElement(
								Oe,
								{ className: "nav-link", to: "".concat(e, "/about") },
								"About"
							),
							r.createElement(
								Oe,
								{ className: "nav-link", to: "".concat(e, "/photos") },
								"Photos"
							),
							r.createElement(
								Oe,
								{ className: "nav-link", to: "".concat(e, "/menus") },
								"Menus"
							),
							r.createElement(
								Oe,
								{ className: "nav-link", to: "".concat(e, "/contact") },
								"Contact"
							),
							r.createElement(Rt, null)
						)
					)
				)
			)
		);
	}
	function Mt() {
		return r.createElement(
			"header",
			null,
			r.createElement("img", {
				width: "100%",
				alt: "fried seafood platter",
				src: Ct,
			}),
			r.createElement(Ft, null)
		);
	}
	function Dt() {
		return r.createElement(
			"footer",
			{ id: "footer", style: { textAlign: "center", fontSize: 6 } },
			r.createElement("br", null),
			r.createElement("br", null),
			" Good Food Hut ❃12345 Big Bird Ave, Sesame Street, LA 12345 ❃ 337-555-4321❃",
			r.createElement("br", null),
			"Website Created by RaylonJMG 2024"
		);
	}
	function It(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	function $t(e) {
		var t,
			n,
			a = e.children,
			l = K(),
			o =
				((t = (0, r.useState)(!1)),
				(n = 2),
				(function (e) {
					if (Array.isArray(e)) return e;
				})(t) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null != n) {
							var r,
								a,
								l,
								o,
								i = [],
								u = !0,
								s = !1;
							try {
								if (((l = (n = n.call(e)).next), 0 === t)) {
									if (Object(n) !== n) return;
									u = !1;
								} else
									for (
										;
										!(u = (r = l.call(n)).done) &&
										(i.push(r.value), i.length !== t);
										u = !0
									);
							} catch (e) {
								(s = !0), (a = e);
							} finally {
								try {
									if (
										!u &&
										null != n.return &&
										((o = n.return()), Object(o) !== o)
									)
										return;
								} finally {
									if (s) throw a;
								}
							}
							return i;
						}
					})(t, n) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return It(e, t);
							var n = {}.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n
									? Array.from(e)
									: "Arguments" === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? It(e, t)
									: void 0
							);
						}
					})(t, n) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()),
			i = o[0],
			u = o[1];
		return (
			(0, r.useEffect)(function () {
				var e = localStorage.getItem("redirect");
				e
					? (l(e),
					  localStorage.setItem("redirect", ""),
					  setTimeout(function () {
							return u(!0);
					  }, 1e3))
					: u(!0);
			}, []),
			i
				? r.createElement(r.Fragment, null, a)
				: r.createElement(r.Fragment, null)
		);
	}
	var jt = "";
	"raylonjmg.github.io" === window.location.hostname &&
		(jt = "/Capstone-Level-4");
	var Bt = document.getElementById("bodyTag");
	(0, a.createRoot)(Bt).render(
		r.createElement(
			_e,
			null,
			r.createElement(
				$t,
				null,
				r.createElement(Mt, null),
				r.createElement(
					ue,
					null,
					r.createElement(oe, {
						path: "".concat(jt, "/"),
						element: r.createElement(qe, null),
					}),
					r.createElement(oe, {
						path: "".concat(jt, "/index.html"),
						element: r.createElement(qe, null),
					}),
					r.createElement(oe, {
						path: "".concat(jt, "/home"),
						element: r.createElement(qe, null),
					}),
					r.createElement(oe, {
						path: "".concat(jt, "/photos"),
						element: r.createElement(bt, null),
					}),
					r.createElement(oe, {
						path: "".concat(jt, "/about"),
						element: r.createElement(mt, null),
					}),
					r.createElement(oe, {
						path: "".concat(jt, "/contact"),
						element: r.createElement(kt, null),
					}),
					r.createElement(oe, {
						path: "".concat(jt, "/menus"),
						element: r.createElement(wt, null),
					}),
					r.createElement(oe, {
						path: "/imagemap",
						element: r.createElement(Ke, null),
					})
				),
				r.createElement(Dt, null)
			)
		)
	);
})();
//# sourceMappingURL=main.js.map
