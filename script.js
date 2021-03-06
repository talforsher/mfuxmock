        (function (f) {
            if (typeof exports === "object" && typeof module !== "undefined") {
                module.exports = f()
            } else if (typeof define === "function" && define.amd) {
                define([], f)
            } else {
                var g;
                if (typeof window !== "undefined") {
                    g = window
                } else if (typeof global !== "undefined") {
                    g = global
                } else if (typeof self !== "undefined") {
                    g = self
                } else {
                    g = this
                }
                g.Figma = f()
            }
        })(function () {
            var define, module, exports;
            return (function () {
                function r(e, n, t) {
                    function o(i, f) {
                        if (!n[i]) {
                            if (!e[i]) {
                                var c = "function" == typeof require && require;
                                if (!f && c) return c(i, !0);
                                if (u) return u(i, !0);
                                var a = new Error("Cannot find module '" + i + "'");
                                throw a.code = "MODULE_NOT_FOUND", a
                            }
                            var p = n[i] = {
                                exports: {}
                            };
                            e[i][0].call(p.exports, function (r) {
                                var n = e[i][1][r];
                                return o(n || r)
                            }, p, p.exports, r, e, n, t)
                        }
                        return n[i].exports
                    }
                    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
                    return o
                }
                return r
            })()({
                1: [function (require, module, exports) {
                    "use strict";
                    var __assign = this && this.__assign || function () {
                            return (__assign = Object.assign || function (t) {
                                for (var e, n = 1, i = arguments.length; n < i; n++)
                                    for (var s in e = arguments[n]) Object.prototype
                                        .hasOwnProperty.call(e, s) && (t[s] = e[s]);
                                return t
                            }).apply(this, arguments)
                        },
                        __awaiter = this && this.__awaiter || function (t, e, n, i) {
                            return new(n || (n = Promise))(function (s, r) {
                                function o(t) {
                                    try {
                                        u(i.next(t))
                                    } catch (t) {
                                        r(t)
                                    }
                                }

                                function a(t) {
                                    try {
                                        u(i.throw(t))
                                    } catch (t) {
                                        r(t)
                                    }
                                }

                                function u(t) {
                                    t.done ? s(t.value) : new n(function (e) {
                                        e(t.value)
                                    }).then(o, a)
                                }
                                u((i = i.apply(t, e || [])).next())
                            })
                        },
                        __generator = this && this.__generator || function (t, e) {
                            var n, i, s, r, o = {
                                label: 0,
                                sent: function () {
                                    if (1 & s[0]) throw s[1];
                                    return s[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return r = {
                                next: a(0),
                                throw: a(1),
                                return: a(2)
                            }, "function" == typeof Symbol && (r[Symbol.iterator] =
                                function () {
                                    return this
                                }), r;

                            function a(r) {
                                return function (a) {
                                    return function (r) {
                                        if (n) throw new TypeError(
                                            "Generator is already executing.");
                                        for (; o;) try {
                                            if (n = 1, i && (s = 2 & r[0] ? i.return :
                                                    r[0] ? i.throw || ((s = i.return) &&
                                                        s.call(i), 0) : i.next) && !(s =
                                                    s.call(i, r[1])).done) return s;
                                            switch (i = 0, s && (r = [2 & r[0], s
                                                .value
                                            ]), r[0]) {
                                                case 0:
                                                case 1:
                                                    s = r;
                                                    break;
                                                case 4:
                                                    return o.label++, {
                                                        value: r[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    o.label++, i = r[1], r = [0];
                                                    continue;
                                                case 7:
                                                    r = o.ops.pop(), o.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(s = (s = o.trys).length > 0 &&
                                                            s[s.length - 1]) && (6 ===
                                                            r[0] || 2 === r[0])) {
                                                        o = 0;
                                                        continue
                                                    }
                                                    if (3 === r[0] && (!s || r[1] > s[
                                                            0] && r[1] < s[3])) {
                                                        o.label = r[1];
                                                        break
                                                    }
                                                    if (6 === r[0] && o.label < s[1]) {
                                                        o.label = s[1], s = r;
                                                        break
                                                    }
                                                    if (s && o.label < s[2]) {
                                                        o.label = s[2], o.ops.push(r);
                                                        break
                                                    }
                                                    s[2] && o.ops.pop(), o.trys.pop();
                                                    continue
                                            }
                                            r = e.call(t, o)
                                        } catch (t) {
                                            r = [6, t], i = 0
                                        } finally {
                                            n = s = 0
                                        }
                                        if (5 & r[0]) throw r[1];
                                        return {
                                            value: r[0] ? r[1] : void 0,
                                            done: !0
                                        }
                                    }([r, a])
                                }
                            }
                        },
                        __importDefault = this && this.__importDefault || function (t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(exports, "__esModule", {
                        value: !0
                    });
                    var api_funcs_1 = require("./api-funcs"),
                        axios_1 = __importDefault(require("axios")),
                        utils_1 = require("./utils"),
                        Api = function () {
                            return function (t) {
                                var e = this;
                                this.appendHeaders = function (t) {
                                        e.personalAccessToken && (t["X-Figma-Token"] = e
                                            .personalAccessToken), e.oAuthToken && (t
                                            .Authorization = "Bearer " + e.oAuthToken)
                                    }, this.request = function (t, n) {
                                        return __awaiter(e, void 0, void 0, function () {
                                            var e, i, s;
                                            return __generator(this, function (r) {
                                                switch (r.label) {
                                                    case 0:
                                                        return e = {}, this
                                                            .appendHeaders(e),
                                                            i = __assign({
                                                                url: t
                                                            }, n, {
                                                                headers: e
                                                            }), [4, axios_1
                                                                .default(i)
                                                            ];
                                                    case 1:
                                                        if (s = r.sent(), 2 !==
                                                            Math.floor(s
                                                                .status / 100))
                                                            throw s.statusText;
                                                        return [2, s.data]
                                                }
                                            })
                                        })
                                    }, this.getFile = api_funcs_1.getFileApi, this
                                    .getFileNodes = api_funcs_1.getFileNodesApi, this.getImage =
                                    api_funcs_1.getImageApi, this.getImageFills = api_funcs_1
                                    .getImageFillsApi, this.getComments = api_funcs_1
                                    .getCommentsApi, this.postComment = api_funcs_1
                                    .postCommentsApi, this.getMe = api_funcs_1.getUserMeApi,
                                    this.getVersions = api_funcs_1.getVersionsApi, this
                                    .getTeamProjects = api_funcs_1.getTeamProjectsApi, this
                                    .getProjectFiles = api_funcs_1.getProjectFilesApi, this
                                    .getTeamComponents = api_funcs_1.getTeamComponentsApi, this
                                    .getComponent = api_funcs_1.getComponentApi, this
                                    .getTeamStyles = api_funcs_1.getTeamStylesApi, this
                                    .getStyle = api_funcs_1.getStyleApi,
                                    "personalAccessToken" in t && (this.personalAccessToken = t
                                        .personalAccessToken), "oAuthToken" in t && (this
                                        .oAuthToken = t.oAuthToken)
                            }
                        }();

                    function oAuthLink(t, e, n, i, s) {
                        return "https://www.figma.com/oauth?" + utils_1.toQueryParams({
                            client_id: t,
                            redirect_uri: e,
                            scope: n,
                            state: i,
                            response_type: s
                        })
                    }

                    function oAuthToken(t, e, n, i, s) {
                        return __awaiter(this, void 0, void 0, function () {
                            var r, o, a;
                            return __generator(this, function (u) {
                                switch (u.label) {
                                    case 0:
                                        return r = utils_1.toQueryParams({
                                                client_id: t,
                                                client_secret: e,
                                                redirect_uri: n,
                                                code: i,
                                                grant_type: s
                                            }), o =
                                            "https://www.figma.com/api/oauth/token?" +
                                            r, [4, axios_1.default({
                                                url: o,
                                                method: "POST"
                                            })];
                                    case 1:
                                        if (200 !== (a = u.sent()).status) throw a
                                            .statusText;
                                        return [2, a.data]
                                }
                            })
                        })
                    }
                    exports.Api = Api, exports.oAuthLink = oAuthLink, exports.oAuthToken =
                        oAuthToken;

                }, {
                    "./api-funcs": 2,
                    "./utils": 6,
                    "axios": 7
                }],
                2: [function (require, module, exports) {
                    "use strict";
                    var __assign = this && this.__assign || function () {
                        return (__assign = Object.assign || function (e) {
                            for (var t, i = 1, s = arguments.length; i < s; i++)
                                for (var n in t = arguments[i]) Object.prototype
                                    .hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            return e
                        }).apply(this, arguments)
                    };
                    Object.defineProperty(exports, "__esModule", {
                        value: !0
                    });
                    var config_1 = require("./config"),
                        utils_1 = require("./utils");

                    function getFileApi(e, t) {
                        var i = utils_1.toQueryParams(__assign({}, t, {
                            ids: t && t.ids && t.ids.join(",")
                        }));
                        return this.request(config_1.API_DOMAIN + "/" + config_1.API_VER +
                            "/files/" + e + "?" + i)
                    }

                    function getFileNodesApi(e, t, i) {
                        var s = utils_1.toQueryParams(__assign({}, i, {
                            ids: t.join(",")
                        }));
                        return this.request(config_1.API_DOMAIN + "/" + config_1.API_VER +
                            "/files/" + e + "/nodes?" + s)
                    }

                    function getImageApi(e, t) {
                        var i = utils_1.toQueryParams(t);
                        return this.request(config_1.API_DOMAIN + "/" + config_1.API_VER +
                            "/images/" + e + "?" + i)
                    }

                    function getImageFillsApi(e) {
                        return this.request(config_1.API_DOMAIN + "/" + config_1.API_VER +
                            "/files/" + e + "/images")
                    }

                    function getCommentsApi(e) {
                        return this.request(config_1.API_DOMAIN + "/" + config_1.API_VER +
                            "/files/" + e + "/comments")
                    }

                    function postCommentsApi(e, t, i) {
                        var s = {
                            message: t,
                            client_meta: i
                        };
                        return this.request(config_1.API_DOMAIN + "/" + config_1.API_VER +
                            "/files/" + e + "/comments", {
                                method: "POST",
                                data: JSON.stringify(s)
                            })
                    }

                    function getUserMeApi() {
                        return this.request(config_1.API_DOMAIN + "/" + config_1.API_VER + "/me")
                    }

                    function getVersionsApi(e) {
                        return this.request(config_1.API_DOMAIN + "/" + config_1.API_VER +
                            "/files/" + e + "/versions")
                    }

                    function getTeamProjectsApi(e) {
                        return this.request(config_1.API_DOMAIN + "/" + config_1.API_VER +
                            "/teams/" + e + "/projects")
                    }

                    function getProjectFilesApi(e) {
                        return this.request(config_1.API_DOMAIN + "/" + config_1.API_VER +
                            "/projects/" + e + "/files")
                    }

                    function getTeamComponentsApi(e, t) {
                        void 0 === t && (t = {});
                        var i = utils_1.toQueryParams(t);
                        return this.request(config_1.API_DOMAIN + "/" + config_1.API_VER +
                            "/teams/" + e + "/components?" + i)
                    }

                    function getComponentApi(e) {
                        return this.request(config_1.API_DOMAIN + "/" + config_1.API_VER +
                            "/components/" + e)
                    }

                    function getTeamStylesApi(e, t) {
                        void 0 === t && (t = {});
                        var i = utils_1.toQueryParams(t);
                        return this.request(config_1.API_DOMAIN + "/" + config_1.API_VER +
                            "/teams/" + e + "/styles?" + i)
                    }

                    function getStyleApi(e) {
                        return this.request(config_1.API_DOMAIN + "/" + config_1.API_VER +
                            "/styles/" + e)
                    }
                    exports.getFileApi = getFileApi, exports.getFileNodesApi = getFileNodesApi,
                        exports.getImageApi = getImageApi, exports.getImageFillsApi =
                        getImageFillsApi, exports.getCommentsApi = getCommentsApi, exports
                        .postCommentsApi = postCommentsApi, exports.getUserMeApi = getUserMeApi,
                        exports.getVersionsApi = getVersionsApi, exports.getTeamProjectsApi =
                        getTeamProjectsApi, exports.getProjectFilesApi = getProjectFilesApi, exports
                        .getTeamComponentsApi = getTeamComponentsApi, exports.getComponentApi =
                        getComponentApi, exports.getTeamStylesApi = getTeamStylesApi, exports
                        .getStyleApi = getStyleApi;

                }, {
                    "./config": 4,
                    "./utils": 6
                }],
                3: [function (require, module, exports) {
                    "use strict";
                    var StrokeCap, StrokeAlign, StrokeJoin, ImageType, BooleanOperationType,
                        TextCase, TextDecoration, LineHeightUnit, ConstrainType, BlendMode,
                        EasingType, LayoutConstraintVertical, LayoutConstraintHorizontal,
                        LayoutGridPattern, LayoutGridAligment, EffectType, PaintType,
                        PaintSolidScaleMode, PathWindingRule;

                    function isEffectShadow(t) {
                        return t.type === EffectType.DROP_SHADOW || t.type === EffectType
                            .INNER_SHADOW
                    }

                    function isEffectBlur(t) {
                        return t.type === EffectType.BACKGROUND_BLUR || t.type === EffectType
                            .LAYER_BLUR
                    }

                    function isPaintSolid(t) {
                        return t.type === PaintType.SOLID
                    }

                    function isPaintGradient(t) {
                        return t.type === PaintType.GRADIENT_ANGULAR || t.type === PaintType
                            .GRADIENT_DIAMOND || t.type === PaintType.GRADIENT_LINEAR || t.type ===
                            PaintType.GRADIENT_RADIAL
                    }

                    function isPaintImage(t) {
                        return t.type === PaintType.IMAGE
                    }

                    function isNodeType(t, e) {
                        return t.type === e
                    }
                    Object.defineProperty(exports, "__esModule", {
                            value: !0
                        }),
                        function (t) {
                            t.NONE = "NONE", t.ROUND = "ROUND", t.SQUARE = "SQUARE", t.LINE_ARROW =
                                "LINE_ARROW", t.TRIANGLE_ARROW = "TRIANGLE_ARROW"
                        }(StrokeCap = exports.StrokeCap || (exports.StrokeCap = {})),
                        function (t) {
                            t.INSIDE = "INSIDE", t.OUTSIDE = "OUTSIDE", t.CENTER = "CENTER"
                        }(StrokeAlign = exports.StrokeAlign || (exports.StrokeAlign = {})),
                        function (t) {
                            t.MITER = "MITER", t.BEVEL = "BEVEL", t.ROUND = "ROUND"
                        }(StrokeJoin = exports.StrokeJoin || (exports.StrokeJoin = {})),
                        function (t) {
                            t.JPG = "JPG", t.PNG = "PNG", t.SVG = "SVG"
                        }(ImageType = exports.ImageType || (exports.ImageType = {})),
                        function (t) {
                            t.UNION = "UNION", t.INTERSECT = "INTERSECT", t.SUBTRACT = "SUBTRACT", t
                                .EXCLUDE = "EXCLUDE"
                        }(BooleanOperationType = exports.BooleanOperationType || (exports
                            .BooleanOperationType = {})),
                        function (t) {
                            t.ORIGINAL = "ORIGINAL", t.UPPER = "UPPER", t.LOWER = "LOWER", t.TITLE =
                                "TITLE"
                        }(TextCase = exports.TextCase || (exports.TextCase = {})),
                        function (t) {
                            t.NONE = "NONE", t.STRIKETHROUGH = "STRIKETHROUGH", t.UNDERLINE =
                                "UNDERLINE"
                        }(TextDecoration = exports.TextDecoration || (exports.TextDecoration = {})),
                        function (t) {
                            t.PIXELS = "PIXELS", t["FONT_SIZE_%"] = "FONT_SIZE_%", t[
                                "INTRINSIC_%"] = "INTRINSIC_%"
                        }(LineHeightUnit = exports.LineHeightUnit || (exports.LineHeightUnit = {})),
                        function (t) {
                            t.SCALE = "SCALE", t.WIDTH = "WIDTH", t.HEIGHT = "HEIGHT"
                        }(ConstrainType = exports.ConstrainType || (exports.ConstrainType = {})),
                        function (t) {
                            t.PASS_THROUGH = "PASS_THROUGH", t.NORMAL = "NORMAL", t.DARKEN =
                                "DARKEN", t.MULTIPLY = "MULTIPLY", t.LINEAR_BURN = "LINEAR_BURN", t
                                .COLOR_BURN = "COLOR_BURN", t.LIGHTEN = "LIGHTEN", t.SCREEN =
                                "SCREEN", t.LINEAR_DODGE = "LINEAR_DODGE", t.COLOR_DODGE =
                                "COLOR_DODGE", t.OVERLAY = "OVERLAY", t.SOFT_LIGHT = "SOFT_LIGHT", t
                                .HARD_LIGHT = "HARD_LIGHT", t.DIFFERENCE = "DIFFERENCE", t
                                .EXCLUSION = "EXCLUSION", t.HUE = "HUE", t.SATURATION =
                                "SATURATION", t.COLOR = "COLOR", t.LUMINOSITY = "LUMINOSITY"
                        }(BlendMode = exports.BlendMode || (exports.BlendMode = {})),
                        function (t) {
                            t.EASE_IN = "EASE_IN", t.EASE_OUT = "EASE_OUT", t.EASE_IN_AND_OUT =
                                "EASE_IN_AND_OUT"
                        }(EasingType = exports.EasingType || (exports.EasingType = {})),
                        function (t) {
                            t.TOP = "TOP", t.BOTTOM = "BOTTOM", t.CENTER = "CENTER", t.TOP_BOTTOM =
                                "TOP_BOTTOM", t.SCALE = "SCALE"
                        }(LayoutConstraintVertical = exports.LayoutConstraintVertical || (exports
                            .LayoutConstraintVertical = {})),
                        function (t) {
                            t.LEFT = "LEFT", t.RIGHT = "RIGHT", t.CENTER = "CENTER", t.LEFT_RIGHT =
                                "LEFT_RIGHT", t.SCALE = "SCALE"
                        }(LayoutConstraintHorizontal = exports.LayoutConstraintHorizontal || (
                            exports.LayoutConstraintHorizontal = {})),
                        function (t) {
                            t.COLUMNS = "COLUMNS", t.ROWS = "ROWS", t.GRID = "GRID"
                        }(LayoutGridPattern = exports.LayoutGridPattern || (exports
                            .LayoutGridPattern = {})),
                        function (t) {
                            t.MIN = "MIN", t.MAX = "MAX", t.CENTER = "CENTER"
                        }(LayoutGridAligment = exports.LayoutGridAligment || (exports
                            .LayoutGridAligment = {})),
                        function (t) {
                            t.INNER_SHADOW = "INNER_SHADOW", t.DROP_SHADOW = "DROP_SHADOW", t
                                .LAYER_BLUR = "LAYER_BLUR", t.BACKGROUND_BLUR = "BACKGROUND_BLUR"
                        }(EffectType = exports.EffectType || (exports.EffectType = {})), exports
                        .isEffectShadow = isEffectShadow, exports.isEffectBlur = isEffectBlur,
                        function (t) {
                            t.SOLID = "SOLID", t.GRADIENT_LINEAR = "GRADIENT_LINEAR", t
                                .GRADIENT_RADIAL = "GRADIENT_RADIAL", t.GRADIENT_ANGULAR =
                                "GRADIENT_ANGULAR", t.GRADIENT_DIAMOND = "GRADIENT_DIAMOND", t
                                .IMAGE = "IMAGE", t.EMOJI = "EMOJI"
                        }(PaintType = exports.PaintType || (exports.PaintType = {})),
                        function (t) {
                            t.FILL = "FILL", t.FIT = "FIT", t.TILE = "TILE", t.STRETCH = "STRETCH"
                        }(PaintSolidScaleMode = exports.PaintSolidScaleMode || (exports
                            .PaintSolidScaleMode = {})), exports.isPaintSolid = isPaintSolid,
                        exports.isPaintGradient = isPaintGradient, exports.isPaintImage =
                        isPaintImage,
                        function (t) {
                            t.EVENODD = "EVENODD", t.NONZERO = "NONZERO"
                        }(PathWindingRule = exports.PathWindingRule || (exports
                            .PathWindingRule = {})), exports.isNodeType = isNodeType;

                }, {}],
                4: [function (require, module, exports) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: !0
                    }), exports.API_DOMAIN = "https://api.figma.com", exports.API_VER = "v1";

                }, {}],
                5: [function (require, module, exports) {
                    "use strict";

                    function __export(e) {
                        for (var r in e) exports.hasOwnProperty(r) || (exports[r] = e[r])
                    }
                    Object.defineProperty(exports, "__esModule", {
                            value: !0
                        }), __export(require("./api-class")), __export(require("./config")),
                        __export(require("./ast-types"));

                }, {
                    "./api-class": 1,
                    "./ast-types": 3,
                    "./config": 4
                }],
                6: [function (require, module, exports) {
                    "use strict";
                    var __extends = this && this.__extends || function () {
                        var r = function (t, e) {
                            return (r = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function (r, t) {
                                    r.__proto__ = t
                                } || function (r, t) {
                                    for (var e in t) t.hasOwnProperty(e) && (r[e] = t[
                                        e])
                                })(t, e)
                        };
                        return function (t, e) {
                            function o() {
                                this.constructor = t
                            }
                            r(t, e), t.prototype = null === e ? Object.create(e) : (o
                                .prototype = e.prototype, new o)
                        }
                    }();

                    function toQueryParams(r) {
                        return r ? Object.entries(r).map(function (r) {
                            var t = r[0],
                                e = r[1];
                            return t && e && t + "=" + encodeURIComponent(e)
                        }).filter(Boolean).join("&") : ""
                    }
                    Object.defineProperty(exports, "__esModule", {
                        value: !0
                    }), exports.toQueryParams = toQueryParams;
                    var ApiError = function (r) {
                        function t(t, e) {
                            var o = r.call(this, e) || this;
                            return o.response = t, o
                        }
                        return __extends(t, r), t
                    }(Error);
                    exports.ApiError = ApiError;

                }, {}],
                7: [function (require, module, exports) {
                    module.exports = require("./lib/axios");

                }, {
                    "./lib/axios": 9
                }],
                8: [function (require, module, exports) {
                    "use strict";
                    var utils = require("./../utils"),
                        settle = require("./../core/settle"),
                        buildURL = require("./../helpers/buildURL"),
                        parseHeaders = require("./../helpers/parseHeaders"),
                        isURLSameOrigin = require("./../helpers/isURLSameOrigin"),
                        createError = require("../core/createError");
                    module.exports = function (e) {
                        return new Promise(function (r, t) {
                            var s = e.data,
                                o = e.headers;
                            utils.isFormData(s) && delete o["Content-Type"];
                            var n = new XMLHttpRequest;
                            if (e.auth) {
                                var a = e.auth.username || "",
                                    i = e.auth.password || "";
                                o.Authorization = "Basic " + btoa(a + ":" + i)
                            }
                            if (n.open(e.method.toUpperCase(), buildURL(e.url, e.params,
                                    e.paramsSerializer), !0), n.timeout = e.timeout, n
                                .onreadystatechange = function () {
                                    if (n && 4 === n.readyState && (0 !== n.status || n
                                            .responseURL && 0 === n.responseURL.indexOf(
                                                "file:"))) {
                                        var s = "getAllResponseHeaders" in n ?
                                            parseHeaders(n.getAllResponseHeaders()) :
                                            null,
                                            o = {
                                                data: e.responseType && "text" !== e
                                                    .responseType ? n.response : n
                                                    .responseText,
                                                status: n.status,
                                                statusText: n.statusText,
                                                headers: s,
                                                config: e,
                                                request: n
                                            };
                                        settle(r, t, o), n = null
                                    }
                                }, n.onabort = function () {
                                    n && (t(createError("Request aborted", e,
                                        "ECONNABORTED", n)), n = null)
                                }, n.onerror = function () {
                                    t(createError("Network Error", e, null, n)), n =
                                        null
                                }, n.ontimeout = function () {
                                    t(createError("timeout of " + e.timeout +
                                            "ms exceeded", e, "ECONNABORTED", n)), n =
                                        null
                                }, utils.isStandardBrowserEnv()) {
                                var u = require("./../helpers/cookies"),
                                    l = (e.withCredentials || isURLSameOrigin(e.url)) &&
                                    e.xsrfCookieName ? u.read(e.xsrfCookieName) :
                                    void 0;
                                l && (o[e.xsrfHeaderName] = l)
                            }
                            if ("setRequestHeader" in n && utils.forEach(o, function (e,
                                    r) {
                                    void 0 === s && "content-type" === r
                                        .toLowerCase() ? delete o[r] : n
                                        .setRequestHeader(r, e)
                                }), e.withCredentials && (n.withCredentials = !0), e
                                .responseType) try {
                                n.responseType = e.responseType
                            } catch (r) {
                                if ("json" !== e.responseType) throw r
                            }
                            "function" == typeof e.onDownloadProgress && n
                                .addEventListener("progress", e.onDownloadProgress),
                                "function" == typeof e.onUploadProgress && n.upload && n
                                .upload.addEventListener("progress", e
                                    .onUploadProgress), e.cancelToken && e.cancelToken
                                .promise.then(function (e) {
                                    n && (n.abort(), t(e), n = null)
                                }), void 0 === s && (s = null), n.send(s)
                        })
                    };

                }, {
                    "../core/createError": 15,
                    "./../core/settle": 19,
                    "./../helpers/buildURL": 23,
                    "./../helpers/cookies": 25,
                    "./../helpers/isURLSameOrigin": 27,
                    "./../helpers/parseHeaders": 29,
                    "./../utils": 31
                }],
                9: [function (require, module, exports) {
                    "use strict";
                    var utils = require("./utils"),
                        bind = require("./helpers/bind"),
                        Axios = require("./core/Axios"),
                        mergeConfig = require("./core/mergeConfig"),
                        defaults = require("./defaults");

                    function createInstance(e) {
                        var r = new Axios(e),
                            i = bind(Axios.prototype.request, r);
                        return utils.extend(i, Axios.prototype, r), utils.extend(i, r), i
                    }
                    var axios = createInstance(defaults);
                    axios.Axios = Axios, axios.create = function (e) {
                            return createInstance(mergeConfig(axios.defaults, e))
                        }, axios.Cancel = require("./cancel/Cancel"), axios.CancelToken = require(
                            "./cancel/CancelToken"), axios.isCancel = require("./cancel/isCancel"),
                        axios.all = function (e) {
                            return Promise.all(e)
                        }, axios.spread = require("./helpers/spread"), module.exports = axios,
                        module.exports.default = axios;

                }, {
                    "./cancel/Cancel": 10,
                    "./cancel/CancelToken": 11,
                    "./cancel/isCancel": 12,
                    "./core/Axios": 13,
                    "./core/mergeConfig": 18,
                    "./defaults": 21,
                    "./helpers/bind": 22,
                    "./helpers/spread": 30,
                    "./utils": 31
                }],
                10: [function (require, module, exports) {
                    "use strict";

                    function Cancel(e) {
                        this.message = e
                    }
                    Cancel.prototype.toString = function () {
                        return "Cancel" + (this.message ? ": " + this.message : "")
                    }, Cancel.prototype.__CANCEL__ = !0, module.exports = Cancel;

                }, {}],
                11: [function (require, module, exports) {
                    "use strict";
                    var Cancel = require("./Cancel");

                    function CancelToken(e) {
                        if ("function" != typeof e) throw new TypeError(
                            "executor must be a function.");
                        var n;
                        this.promise = new Promise(function (e) {
                            n = e
                        });
                        var o = this;
                        e(function (e) {
                            o.reason || (o.reason = new Cancel(e), n(o.reason))
                        })
                    }
                    CancelToken.prototype.throwIfRequested = function () {
                        if (this.reason) throw this.reason
                    }, CancelToken.source = function () {
                        var e;
                        return {
                            token: new CancelToken(function (n) {
                                e = n
                            }),
                            cancel: e
                        }
                    }, module.exports = CancelToken;

                }, {
                    "./Cancel": 10
                }],
                12: [function (require, module, exports) {
                    "use strict";
                    module.exports = function (t) {
                        return !(!t || !t.__CANCEL__)
                    };

                }, {}],
                13: [function (require, module, exports) {
                    "use strict";
                    var utils = require("./../utils"),
                        buildURL = require("../helpers/buildURL"),
                        InterceptorManager = require("./InterceptorManager"),
                        dispatchRequest = require("./dispatchRequest"),
                        mergeConfig = require("./mergeConfig");

                    function Axios(e) {
                        this.defaults = e, this.interceptors = {
                            request: new InterceptorManager,
                            response: new InterceptorManager
                        }
                    }
                    Axios.prototype.request = function (e) {
                        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e =
                            e || {}, (e = mergeConfig(this.defaults, e)).method = e.method ? e
                            .method.toLowerCase() : "get";
                        var t = [dispatchRequest, void 0],
                            r = Promise.resolve(e);
                        for (this.interceptors.request.forEach(function (e) {
                                t.unshift(e.fulfilled, e.rejected)
                            }), this.interceptors.response.forEach(function (e) {
                                t.push(e.fulfilled, e.rejected)
                            }); t.length;) r = r.then(t.shift(), t.shift());
                        return r
                    }, Axios.prototype.getUri = function (e) {
                        return e = mergeConfig(this.defaults, e), buildURL(e.url, e.params, e
                            .paramsSerializer).replace(/^\?/, "")
                    }, utils.forEach(["delete", "get", "head", "options"], function (e) {
                        Axios.prototype[e] = function (t, r) {
                            return this.request(utils.merge(r || {}, {
                                method: e,
                                url: t
                            }))
                        }
                    }), utils.forEach(["post", "put", "patch"], function (e) {
                        Axios.prototype[e] = function (t, r, i) {
                            return this.request(utils.merge(i || {}, {
                                method: e,
                                url: t,
                                data: r
                            }))
                        }
                    }), module.exports = Axios;

                }, {
                    "../helpers/buildURL": 23,
                    "./../utils": 31,
                    "./InterceptorManager": 14,
                    "./dispatchRequest": 16,
                    "./mergeConfig": 18
                }],
                14: [function (require, module, exports) {
                    "use strict";
                    var utils = require("./../utils");

                    function InterceptorManager() {
                        this.handlers = []
                    }
                    InterceptorManager.prototype.use = function (e, t) {
                        return this.handlers.push({
                            fulfilled: e,
                            rejected: t
                        }), this.handlers.length - 1
                    }, InterceptorManager.prototype.eject = function (e) {
                        this.handlers[e] && (this.handlers[e] = null)
                    }, InterceptorManager.prototype.forEach = function (e) {
                        utils.forEach(this.handlers, function (t) {
                            null !== t && e(t)
                        })
                    }, module.exports = InterceptorManager;

                }, {
                    "./../utils": 31
                }],
                15: [function (require, module, exports) {
                    "use strict";
                    var enhanceError = require("./enhanceError");
                    module.exports = function (r, e, n, o, a) {
                        var c = new Error(r);
                        return enhanceError(c, e, n, o, a)
                    };

                }, {
                    "./enhanceError": 17
                }],
                16: [function (require, module, exports) {
                    "use strict";
                    var utils = require("./../utils"),
                        transformData = require("./transformData"),
                        isCancel = require("../cancel/isCancel"),
                        defaults = require("../defaults"),
                        isAbsoluteURL = require("./../helpers/isAbsoluteURL"),
                        combineURLs = require("./../helpers/combineURLs");

                    function throwIfCancellationRequested(e) {
                        e.cancelToken && e.cancelToken.throwIfRequested()
                    }
                    module.exports = function (e) {
                        return throwIfCancellationRequested(e), e.baseURL && !isAbsoluteURL(e
                                .url) && (e.url = combineURLs(e.baseURL, e.url)), e.headers = e
                            .headers || {}, e.data = transformData(e.data, e.headers, e
                                .transformRequest), e.headers = utils.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), utils.forEach([
                                "delete", "get", "head", "post", "put", "patch", "common"
                            ], function (a) {
                                delete e.headers[a]
                            }), (e.adapter || defaults.adapter)(e).then(function (a) {
                                return throwIfCancellationRequested(e), a.data =
                                    transformData(a.data, a.headers, e.transformResponse), a
                            }, function (a) {
                                return isCancel(a) || (throwIfCancellationRequested(e), a &&
                                    a.response && (a.response.data = transformData(a
                                        .response.data, a.response.headers, e
                                        .transformResponse))), Promise.reject(a)
                            })
                    };

                }, {
                    "../cancel/isCancel": 12,
                    "../defaults": 21,
                    "./../helpers/combineURLs": 24,
                    "./../helpers/isAbsoluteURL": 26,
                    "./../utils": 31,
                    "./transformData": 20
                }],
                17: [function (require, module, exports) {
                    "use strict";
                    module.exports = function (e, i, s, t, n) {
                        return e.config = i, s && (e.code = s), e.request = t, e.response = n, e
                            .isAxiosError = !0, e.toJSON = function () {
                                return {
                                    message: this.message,
                                    name: this.name,
                                    description: this.description,
                                    number: this.number,
                                    fileName: this.fileName,
                                    lineNumber: this.lineNumber,
                                    columnNumber: this.columnNumber,
                                    stack: this.stack,
                                    config: this.config,
                                    code: this.code
                                }
                            }, e
                    };

                }, {}],
                18: [function (require, module, exports) {
                    "use strict";
                    var utils = require("../utils");
                    module.exports = function (e, t) {
                        t = t || {};
                        var s = {};
                        return utils.forEach(["url", "method", "params", "data"], function (e) {
                            void 0 !== t[e] && (s[e] = t[e])
                        }), utils.forEach(["headers", "auth", "proxy"], function (r) {
                            utils.isObject(t[r]) ? s[r] = utils.deepMerge(e[r], t[r]) :
                                void 0 !== t[r] ? s[r] = t[r] : utils.isObject(e[r]) ?
                                s[r] = utils.deepMerge(e[r]) : void 0 !== e[r] && (s[
                                    r] = e[r])
                        }), utils.forEach(["baseURL", "transformRequest",
                            "transformResponse", "paramsSerializer", "timeout",
                            "withCredentials", "adapter", "responseType",
                            "xsrfCookieName", "xsrfHeaderName", "onUploadProgress",
                            "onDownloadProgress", "maxContentLength", "validateStatus",
                            "maxRedirects", "httpAgent", "httpsAgent", "cancelToken",
                            "socketPath"
                        ], function (r) {
                            void 0 !== t[r] ? s[r] = t[r] : void 0 !== e[r] && (s[r] =
                                e[r])
                        }), s
                    };

                }, {
                    "../utils": 31
                }],
                19: [function (require, module, exports) {
                    "use strict";
                    var createError = require("./createError");
                    module.exports = function (r, t, e) {
                        var a = e.config.validateStatus;
                        !a || a(e.status) ? r(e) : t(createError(
                            "Request failed with status code " + e.status, e.config,
                            null, e.request, e))
                    };

                }, {
                    "./createError": 15
                }],
                20: [function (require, module, exports) {
                    "use strict";
                    var utils = require("./../utils");
                    module.exports = function (t, u, r) {
                        return utils.forEach(r, function (r) {
                            t = r(t, u)
                        }), t
                    };

                }, {
                    "./../utils": 31
                }],
                21: [function (require, module, exports) {
                    (function (process) {
                        "use strict";
                        var utils = require("./utils"),
                            normalizeHeaderName = require("./helpers/normalizeHeaderName"),
                            DEFAULT_CONTENT_TYPE = {
                                "Content-Type": "application/x-www-form-urlencoded"
                            };

                        function setContentTypeIfUnset(e, t) {
                            !utils.isUndefined(e) && utils.isUndefined(e["Content-Type"]) && (e[
                                "Content-Type"] = t)
                        }

                        function getDefaultAdapter() {
                            var e;
                            return "undefined" != typeof process && "[object process]" ===
                                Object.prototype.toString.call(process) ? e = require(
                                    "./adapters/http") : "undefined" != typeof XMLHttpRequest &&
                                (e = require("./adapters/xhr")), e
                        }
                        var defaults = {
                            adapter: getDefaultAdapter(),
                            transformRequest: [function (e, t) {
                                return normalizeHeaderName(t, "Accept"),
                                    normalizeHeaderName(t, "Content-Type"), utils
                                    .isFormData(e) || utils.isArrayBuffer(e) ||
                                    utils.isBuffer(e) || utils.isStream(e) || utils
                                    .isFile(e) || utils.isBlob(e) ? e : utils
                                    .isArrayBufferView(e) ? e.buffer : utils
                                    .isURLSearchParams(e) ? (setContentTypeIfUnset(
                                        t,
                                        "application/x-www-form-urlencoded;charset=utf-8"
                                    ), e.toString()) : utils.isObject(e) ? (
                                        setContentTypeIfUnset(t,
                                            "application/json;charset=utf-8"), JSON
                                        .stringify(e)) : e
                            }],
                            transformResponse: [function (e) {
                                if ("string" == typeof e) try {
                                    e = JSON.parse(e)
                                } catch (e) {}
                                return e
                            }],
                            timeout: 0,
                            xsrfCookieName: "XSRF-TOKEN",
                            xsrfHeaderName: "X-XSRF-TOKEN",
                            maxContentLength: -1,
                            validateStatus: function (e) {
                                return e >= 200 && e < 300
                            },
                            headers: {
                                common: {
                                    Accept: "application/json, text/plain, */*"
                                }
                            }
                        };
                        utils.forEach(["delete", "get", "head"], function (e) {
                            defaults.headers[e] = {}
                        }), utils.forEach(["post", "put", "patch"], function (e) {
                            defaults.headers[e] = utils.merge(DEFAULT_CONTENT_TYPE)
                        }), module.exports = defaults;

                    }).call(this, require('_process'))
                }, {
                    "./adapters/http": 8,
                    "./adapters/xhr": 8,
                    "./helpers/normalizeHeaderName": 28,
                    "./utils": 31,
                    "_process": 33
                }],
                22: [function (require, module, exports) {
                    "use strict";
                    module.exports = function (r, n) {
                        return function () {
                            for (var t = new Array(arguments.length), e = 0; e < t
                                .length; e++) t[e] = arguments[e];
                            return r.apply(n, t)
                        }
                    };

                }, {}],
                23: [function (require, module, exports) {
                    "use strict";
                    var utils = require("./../utils");

                    function encode(e) {
                        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":")
                            .replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
                            .replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                    }
                    module.exports = function (e, i, r) {
                        if (!i) return e;
                        var t;
                        if (r) t = r(i);
                        else if (utils.isURLSearchParams(i)) t = i.toString();
                        else {
                            var n = [];
                            utils.forEach(i, function (e, i) {
                                null != e && (utils.isArray(e) ? i += "[]" : e = [e],
                                    utils.forEach(e, function (e) {
                                        utils.isDate(e) ? e = e.toISOString() :
                                            utils.isObject(e) && (e = JSON
                                                .stringify(e)), n.push(encode(
                                                i) + "=" + encode(e))
                                    }))
                            }), t = n.join("&")
                        }
                        if (t) {
                            var c = e.indexOf("#"); - 1 !== c && (e = e.slice(0, c)), e += (-
                                1 === e.indexOf("?") ? "?" : "&") + t
                        }
                        return e
                    };

                }, {
                    "./../utils": 31
                }],
                24: [function (require, module, exports) {
                    "use strict";
                    module.exports = function (e, r) {
                        return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e
                    };

                }, {}],
                25: [function (require, module, exports) {
                    "use strict";
                    var utils = require("./../utils");
                    module.exports = utils.isStandardBrowserEnv() ? {
                        write: function (e, t, n, i, u, o) {
                            var r = [];
                            r.push(e + "=" + encodeURIComponent(t)), utils.isNumber(n) && r
                                .push("expires=" + new Date(n).toGMTString()), utils
                                .isString(i) && r.push("path=" + i), utils.isString(u) && r
                                .push("domain=" + u), !0 === o && r.push("secure"), document
                                .cookie = r.join("; ")
                        },
                        read: function (e) {
                            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e +
                                ")=([^;]*)"));
                            return t ? decodeURIComponent(t[3]) : null
                        },
                        remove: function (e) {
                            this.write(e, "", Date.now() - 864e5)
                        }
                    } : {
                        write: function () {},
                        read: function () {
                            return null
                        },
                        remove: function () {}
                    };

                }, {
                    "./../utils": 31
                }],
                26: [function (require, module, exports) {
                    "use strict";
                    module.exports = function (t) {
                        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
                    };

                }, {}],
                27: [function (require, module, exports) {
                    "use strict";
                    var utils = require("./../utils");
                    module.exports = utils.isStandardBrowserEnv() ? function () {
                        var t, r = /(msie|trident)/i.test(navigator.userAgent),
                            e = document.createElement("a");

                        function o(t) {
                            var o = t;
                            return r && (e.setAttribute("href", o), o = e.href), e.setAttribute(
                                "href", o), {
                                href: e.href,
                                protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
                                host: e.host,
                                search: e.search ? e.search.replace(/^\?/, "") : "",
                                hash: e.hash ? e.hash.replace(/^#/, "") : "",
                                hostname: e.hostname,
                                port: e.port,
                                pathname: "/" === e.pathname.charAt(0) ? e.pathname : "/" +
                                    e.pathname
                            }
                        }
                        return t = o(window.location.href),
                            function (r) {
                                var e = utils.isString(r) ? o(r) : r;
                                return e.protocol === t.protocol && e.host === t.host
                            }
                    }() : function () {
                        return !0
                    };

                }, {
                    "./../utils": 31
                }],
                28: [function (require, module, exports) {
                    "use strict";
                    var utils = require("../utils");
                    module.exports = function (e, t) {
                        utils.forEach(e, function (r, s) {
                            s !== t && s.toUpperCase() === t.toUpperCase() && (e[t] = r,
                                delete e[s])
                        })
                    };

                }, {
                    "../utils": 31
                }],
                29: [function (require, module, exports) {
                    "use strict";
                    var utils = require("./../utils"),
                        ignoreDuplicateOf = ["age", "authorization", "content-length",
                            "content-type", "etag", "expires", "from", "host", "if-modified-since",
                            "if-unmodified-since", "last-modified", "location", "max-forwards",
                            "proxy-authorization", "referer", "retry-after", "user-agent"
                        ];
                    module.exports = function (t) {
                        var e, i, r, o = {};
                        return t ? (utils.forEach(t.split("\n"), function (t) {
                            if (r = t.indexOf(":"), e = utils.trim(t.substr(0, r))
                                .toLowerCase(), i = utils.trim(t.substr(r + 1)), e
                            ) {
                                if (o[e] && ignoreDuplicateOf.indexOf(e) >= 0)
                                    return;
                                o[e] = "set-cookie" === e ? (o[e] ? o[e] : [])
                                    .concat([i]) : o[e] ? o[e] + ", " + i : i
                            }
                        }), o) : o
                    };

                }, {
                    "./../utils": 31
                }],
                30: [function (require, module, exports) {
                    "use strict";
                    module.exports = function (n) {
                        return function (t) {
                            return n.apply(null, t)
                        }
                    };

                }, {}],
                31: [function (require, module, exports) {
                    "use strict";
                    var bind = require("./helpers/bind"),
                        isBuffer = require("is-buffer"),
                        toString = Object.prototype.toString;

                    function isArray(e) {
                        return "[object Array]" === toString.call(e)
                    }

                    function isArrayBuffer(e) {
                        return "[object ArrayBuffer]" === toString.call(e)
                    }

                    function isFormData(e) {
                        return "undefined" != typeof FormData && e instanceof FormData
                    }

                    function isArrayBufferView(e) {
                        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer
                            .isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                    }

                    function isString(e) {
                        return "string" == typeof e
                    }

                    function isNumber(e) {
                        return "number" == typeof e
                    }

                    function isUndefined(e) {
                        return void 0 === e
                    }

                    function isObject(e) {
                        return null !== e && "object" == typeof e
                    }

                    function isDate(e) {
                        return "[object Date]" === toString.call(e)
                    }

                    function isFile(e) {
                        return "[object File]" === toString.call(e)
                    }

                    function isBlob(e) {
                        return "[object Blob]" === toString.call(e)
                    }

                    function isFunction(e) {
                        return "[object Function]" === toString.call(e)
                    }

                    function isStream(e) {
                        return isObject(e) && isFunction(e.pipe)
                    }

                    function isURLSearchParams(e) {
                        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                    }

                    function trim(e) {
                        return e.replace(/^\s*/, "").replace(/\s*$/, "")
                    }

                    function isStandardBrowserEnv() {
                        return ("undefined" == typeof navigator || "ReactNative" !== navigator
                            .product && "NativeScript" !== navigator.product && "NS" !==
                            navigator.product) && ("undefined" != typeof window &&
                            "undefined" != typeof document)
                    }

                    function forEach(e, r) {
                        if (null != e)
                            if ("object" != typeof e && (e = [e]), isArray(e))
                                for (var t = 0, n = e.length; t < n; t++) r.call(null, e[t], t, e);
                            else
                                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && r
                                    .call(null, e[i], i, e)
                    }

                    function merge() {
                        var e = {};

                        function r(r, t) {
                            "object" == typeof e[t] && "object" == typeof r ? e[t] = merge(e[t],
                                r) : e[t] = r
                        }
                        for (var t = 0, n = arguments.length; t < n; t++) forEach(arguments[t], r);
                        return e
                    }

                    function deepMerge() {
                        var e = {};

                        function r(r, t) {
                            "object" == typeof e[t] && "object" == typeof r ? e[t] = deepMerge(e[t],
                                r) : e[t] = "object" == typeof r ? deepMerge({}, r) : r
                        }
                        for (var t = 0, n = arguments.length; t < n; t++) forEach(arguments[t], r);
                        return e
                    }

                    function extend(e, r, t) {
                        return forEach(r, function (r, n) {
                            e[n] = t && "function" == typeof r ? bind(r, t) : r
                        }), e
                    }
                    module.exports = {
                        isArray: isArray,
                        isArrayBuffer: isArrayBuffer,
                        isBuffer: isBuffer,
                        isFormData: isFormData,
                        isArrayBufferView: isArrayBufferView,
                        isString: isString,
                        isNumber: isNumber,
                        isObject: isObject,
                        isUndefined: isUndefined,
                        isDate: isDate,
                        isFile: isFile,
                        isBlob: isBlob,
                        isFunction: isFunction,
                        isStream: isStream,
                        isURLSearchParams: isURLSearchParams,
                        isStandardBrowserEnv: isStandardBrowserEnv,
                        forEach: forEach,
                        merge: merge,
                        deepMerge: deepMerge,
                        extend: extend,
                        trim: trim
                    };

                }, {
                    "./helpers/bind": 22,
                    "is-buffer": 32
                }],
                32: [function (require, module, exports) {
                    module.exports = function (o) {
                        return null != o && null != o.constructor && "function" == typeof o
                            .constructor.isBuffer && o.constructor.isBuffer(o)
                    };

                }, {}],
                33: [function (require, module, exports) {
                    var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};

                    function defaultSetTimout() {
                        throw new Error("setTimeout has not been defined")
                    }

                    function defaultClearTimeout() {
                        throw new Error("clearTimeout has not been defined")
                    }

                    function runTimeout(e) {
                        if (cachedSetTimeout === setTimeout) return setTimeout(e, 0);
                        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
                            setTimeout) return cachedSetTimeout = setTimeout, setTimeout(e, 0);
                        try {
                            return cachedSetTimeout(e, 0)
                        } catch (t) {
                            try {
                                return cachedSetTimeout.call(null, e, 0)
                            } catch (t) {
                                return cachedSetTimeout.call(this, e, 0)
                            }
                        }
                    }

                    function runClearTimeout(e) {
                        if (cachedClearTimeout === clearTimeout) return clearTimeout(e);
                        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) &&
                            clearTimeout) return cachedClearTimeout = clearTimeout, clearTimeout(e);
                        try {
                            return cachedClearTimeout(e)
                        } catch (t) {
                            try {
                                return cachedClearTimeout.call(null, e)
                            } catch (t) {
                                return cachedClearTimeout.call(this, e)
                            }
                        }
                    }! function () {
                        try {
                            cachedSetTimeout = "function" == typeof setTimeout ? setTimeout :
                                defaultSetTimout
                        } catch (e) {
                            cachedSetTimeout = defaultSetTimout
                        }
                        try {
                            cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout :
                                defaultClearTimeout
                        } catch (e) {
                            cachedClearTimeout = defaultClearTimeout
                        }
                    }();
                    var currentQueue, queue = [],
                        draining = !1,
                        queueIndex = -1;

                    function cleanUpNextTick() {
                        draining && currentQueue && (draining = !1, currentQueue.length ? queue =
                            currentQueue.concat(queue) : queueIndex = -1, queue.length &&
                            drainQueue())
                    }

                    function drainQueue() {
                        if (!draining) {
                            var e = runTimeout(cleanUpNextTick);
                            draining = !0;
                            for (var t = queue.length; t;) {
                                for (currentQueue = queue, queue = []; ++queueIndex < t;)
                                    currentQueue && currentQueue[queueIndex].run();
                                queueIndex = -1, t = queue.length
                            }
                            currentQueue = null, draining = !1, runClearTimeout(e)
                        }
                    }

                    function Item(e, t) {
                        this.fun = e, this.array = t
                    }

                    function noop() {}
                    process.nextTick = function (e) {
                            var t = new Array(arguments.length - 1);
                            if (arguments.length > 1)
                                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                            queue.push(new Item(e, t)), 1 !== queue.length || draining ||
                                runTimeout(drainQueue)
                        }, Item.prototype.run = function () {
                            this.fun.apply(null, this.array)
                        }, process.title = "browser", process.browser = !0, process.env = {},
                        process.argv = [], process.version = "", process.versions = {}, process.on =
                        noop, process.addListener = noop, process.once = noop, process.off = noop,
                        process.removeListener = noop, process.removeAllListeners = noop, process
                        .emit = noop, process.prependListener = noop, process.prependOnceListener =
                        noop, process.listeners = function (e) {
                            return []
                        }, process.binding = function (e) {
                            throw new Error("process.binding is not supported")
                        }, process.cwd = function () {
                            return "/"
                        }, process.chdir = function (e) {
                            throw new Error("process.chdir is not supported")
                        }, process.umask = function () {
                            return 0
                        };

                }, {}]
            }, {}, [5])(5)
        });



        const EL = (name, el) => {
            return customElements.define(name, el)
        }

        EL('main-app',
            class extends HTMLElement {
                api = new Figma.Api({
                    personalAccessToken: '58018-48bd1f1c-142b-42b6-9b8c-29af938a201e'
                });

                connectedCallback() {
                    this.api.getFile('hVKDlMRrCmwWQXUcVjDTJK').then((file) => {
                        var target = file.document.children[0];
                        var prep = `
                        <div class="app">
                        <side-bar class="sidebar"></side-bar>
                        <div class="gap"></div>
                        <div class="main">
                            <div class="topbar">
                            <div>
                                <h1>Components</h1>
                            </div>
                            <div>
                            </div>
                            <div>
                                <h2 class="section">Buttons</h2>
                            </div>
                            <div>
                                <h2 class="version">2020_07</h2>
                            </div>
                            </div>
                            <div class="intro">intro</div>
                            <div class="content">`

                        for (var i in target.children)
                            prep += `<iframe width="500px" height="300px" src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/hVKDlMRrCmwWQXUcVjDTJK/Buttons-DS.2020?node-id=${target.children[i].id}"></iframe>`

                        prep += `
                            </div>
                        </div>
                        </div>
              `
                        document.getElementById("ruleThem").remove()
                        this.innerHTML += prep
                        var dropdown = document.getElementsByClassName("component-section");
                        var i;

                        for (var i = 0; i < dropdown.length; i++) {
                            dropdown[i].addEventListener("click", function () {
                                for (var j = 0; j < dropdown.length; j++) {
                                    if (dropdown[j] != this) {
                                        dropdown[j].classList.remove("active");
                                        var dropdownContent = dropdown[j].nextElementSibling;
                                        dropdownContent.style.display = "none";
                                    }
                                }
                                this.classList.toggle("active");
                                var dropdownContent = this.nextElementSibling;
                                if (dropdownContent.style.display === "block") {
                                    dropdownContent.style.display = "none";
                                } else {
                                    dropdownContent.style.display = "block";
                                }
                            });
                        }

                        var main = document.getElementsByClassName("main")[0]
                        main.onscroll = function () {
                            myFunction()
                        };

                        var navbar = document.getElementsByClassName("topbar")[0];
                        var sticky = navbar.offsetTop;

                        function myFunction() {
                            if (main.scrollTop >= sticky) {
                                navbar.classList.add("sticky")
                            } else {
                                navbar.classList.remove("sticky");
                            }
                        }
                    })
                }
            }
        );

        EL('side-bar',
            class extends HTMLElement {
                subSections = {
                    principles: ["hey", "oh"],
                    components: ["this", "that"],
                    tokens: ["here", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there", "there"],
                    downloads: ["for", "what?"],
                }
                connectedCallback() {
                    const subSections = this.subSections
                    this.innerHTML = `
                    <div class=sidebar-head>
                        <div class="sidebar-head-top">
                            <p>EverythingUX</p>
                            <img src="assets/img/arrow.svg" />
                        </div>
                        <img class="search-icon" src="assets/img/search.svg" />
                        <input type="text" class="search" placeholder="search"></input>
                    </div>
                    <div class=sidebar-main>
                        <components-sections image="assets/img/placeholder.svg" section="Principles" sub-sections=${subSections.principles}></components-sections>
                        <components-sections image="assets/img/placeholder.svg" section="Components" sub-sections=${subSections.components}></components-sections>
                        <components-sections image="assets/img/placeholder.svg" section="Tokens" sub-sections=${subSections.tokens}></components-sections>
                        <components-sections image="assets/img/placeholder.svg" section="Downloads" sub-sections=${subSections.downloads}></components-sections>
                    </div> 
            `;
                }
            }
        );

        EL('components-sections',
            class extends HTMLElement {
                subSections = this.getAttribute("sub-sections")
                connectedCallback() {
                    this.innerHTML = `
                    <div class="component-section">
                        <img src=${this.getAttribute("image")} />
                        <p>${this.getAttribute("section")}</p>
                    </div>
                    <dropdown-container component=${this.getAttribute("sub-sections")} class="dropdown-container"></dropdown-container>
            `;
                }
            }
        );

        EL('dropdown-container',
            class extends HTMLElement {
                connectedCallback() {
                    const sections = this.getAttribute("component").split(",")
                    for (var i = 0; i < sections.length; i++)
                        if (sections[i] != null)
                            this.innerHTML += `
                    <p>${sections[i]}</p>
            `;
                }
            }
        );