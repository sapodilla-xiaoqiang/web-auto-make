/**
 * 通用框架处理，共用框架
 * Created by caijun on 2018/2/28.
 */

/****************************************************************
 * 全局变量判断和设置，比如是否是调试模式，是否是android盒子等等。
 *****************************************************************/
if (typeof debug === 'undefined')
    window.debug = true;//调试模式，上线后必须把此参数改为false！

/****************************************************************
 * 事件定义：
 * KEY_ 开头的是系统按键事件
 * EVENT_ 开头的是虚拟按键
 ***************************************************************/
var KEY_BACK = 0x0008; 	            // 返回/删除
var KEY_BACK_640 = 0x0280; 	        // 返回按键（值为640）
var KEY_ENTER = 0x000D; 	        // 确定
var KEY_PAGE_UP = 0x0021;	        // 上页
var KEY_PAGE_DOWN = 0x0022;         // 下页
var KEY_LEFT = 0x0025;              // 左
var KEY_LEFT_65 = 0x0041;              // 左
var KEY_UP = 0x0026;                // 上
var KEY_UP_87 = 0x0057;                // 上
var KEY_RIGHT = 0x0027;	            // 右
var KEY_RIGHT_68 = 0x0044;	            // 右
var KEY_DOWN = 0x0028;	            // 下
var KEY_DOWN_83 = 0x0053;	            // 下
var KEY_0 = 0x0030;                 // 0
var KEY_1 = 0x0031;                 // 1
var KEY_2 = 0x0032;                 // 2
var KEY_3 = 0x0033;                 // 3
var KEY_4 = 0x0034;                 // 4
var KEY_5 = 0x0035;                 // 5
var KEY_6 = 0x0036;                 // 6
var KEY_7 = 0x0037;                 // 7
var KEY_8 = 0x0038;                 // 8
var KEY_9 = 0x0039;                 // 9
var KEY_VOL_UP = 0x0103; 	        // Vol+，音量加
var KEY_VOL_UP_61 = 0x003D; 	        // Vol+，音量加
var KEY_VOL_DOWN = 0x0104;	        // Vol-，音量减
var KEY_VOL_DOWN_45 = 0x002D;	        // Vol-，音量减
var KEY_MUTE = 0x0105;	            // Mute，静音
var KEY_TRACK = 0x0106;	            // Audio Track，切换音轨
var KEY_PLAY_PAUSE = 0x0107;	    // >||，播放，暂停
var KEY_FAST_FORWARD = 0x0108;	    // >> ，快进
var KEY_FAST_REWIND = 0x0109;	    // << ，快退
var KEY_RED = 0x0113;               // 红色键
var KEY_GREEN = 0x0114;	            // 绿色键
var KEY_YELLOW = 0x0115;            // 黄色键
var KEY_BLUE = 0x0116;              // 蓝色键
var KEY_DELETE = 0x0118;            // 删除键中兴盒子
var KEY_VIRTUAL_EVENT = 0x0300;	    // 虚拟事件按键
var KEY_EXIT = 0x001B;	            // 退出按键（非home键）
var KEY_399 = 0x018F;                // 广西广电返回键
var KEY_514 = 0x0202;                // 广西广电退出键
var KEY_5002 = 5002;                  //广西广电--加载成功，开始播放
var KEY_5004 = 5004;                  //广西广电播--加上失败
var KEY_5006 = 5006;                  //广西广电播--正常播放结束
var KEY_5007 = 5007;                  //广西广电--播放结束，用户按退出或其他快捷键结束播放
var KEY_5008 = 5008;                  //广西广电--播放异常
var KEY_5008 = 5010;                  //广西广电--恢复播放

var BUTTON_TYPE_DIV = "div";                        //焦点按钮类型---- div
var BUTTON_TYPE_INPUTTEXT = "input-test";         //焦点按钮类型---- 输入框

var EVENT_MEDIA_END = 'EVENT_MEDIA_END';            // 视频播放结束
var EVENT_MEDIA_ERROR = 'EVENT_MEDIA_ERROR';        // 视频播放错误

var indexaa = 1;

/****************************************************************
 * 通用快捷函数定义：
 ***************************************************************/
/**
 * 根据控件ID返回控件的引用
 * @param id  控件（元素）id
 * @returns {Element} 返回对象引用
 * @constructor
 */
function G(id) {
    return document.getElementById(id);
}

/**
 * 显示控件
 * @param id 控件id
 * @constructor
 */
function S(id) {
    var temp = G(id);
    if (temp)
        temp.style.visibility = 'visible';
}

/**
 * 隐藏控件
 * @param id 控件id
 * @constructor
 */
function H(id) {
    var temp = G(id);
    if (temp)
        temp.style.visibility = 'hidden';
}

/**
 * 显示一个元素，与S不同的是，修改的是display属性<br>
 * add by lxa 20140922
 * 修改visibility的最大缺点是：如果子元素是显示的话，即使父元素隐藏了子元素也不会隐藏
 * @param id
 */
function Show(id) {
    var temp = G(id);
    if (temp)
        temp.style.display = 'block';
}

/**
 * 隐藏一个元素，与H不同的是，修改的是display属性<br>
 * add by lxa 20140922
 * 修改visibility的最大缺点是：如果子元素是显示的话，即使父元素隐藏了子元素也不会隐藏
 * @param id
 */
function Hide(id) {
    var temp = G(id);
    if (temp)
        temp.style.display = 'none';
}

/**
 * 判断src字符串中是否包含的des字符串
 * @param src
 * @param des
 */
function strContain(src, des) {
    if (src == null || src == "" || des == null || des == "") {
        return false;
    }
    for (var i = 0; i < (src.length - des.length + 1); i++) {
        for (var j = 0; j < des.length; j++) {
            if (src[i + j] == des[j]) {
                if (j == (des.length - 1)) {
                    return true;
                }
                continue;
            } else {
                break;
            }
        }
    }
    return false;
}

/**
 * 获取随机数整数
 * @param minValue 最小值
 * @param maxValue  最大值
 * @returns {number}
 */
function getRandom(minValue, maxValue) {
    var choices = maxValue - minValue + 1;
    var num = Math.floor(Math.random() * choices + minValue);
    return num;
}

/**
 * 定义EPG命名空间。所有相关的操作都封装在该对象中
 * @type {{call: LMEPG.call}}
 */
var LMEPG = {
    /**
     * 函数调用（供调用回调函数使用）
     * @param fn  需要调用的函数
     * @param args 需要传递的参数数组
     * @returns {*} 返回调用返回的结果
     */
    call: function (fn, args) {
        if (typeof fn == "string" && fn !== '') {
            return eval("(" + fn + ")");
        } else if (typeof fn == "function") {
            if (!this.Func.isArray(args)) {
                var temp = [];
                for (var i = 1; i < arguments.length; i++)
                    temp.push(arguments[i]);
                args = temp;
            }
            return fn.apply(window, args);
        }
    },

    /**
     * 空方法，需要清除操作时使用，
     * @private
     */
    emptyFunc: function () {
        //空方法
    },

    onEvent: null  //事件回调, 如果页面需要自己定义事件处理器，可以在页面单独配置使用
};

LMEPG.Cookie = (function () {
    return {
        /**
         * 设置cookie
         * @param name
         * @param value
         */
        setCookie: function (name, value) {
            day = 30;
            // path = '/' + location.href.split('/')[3];
            path = '/';
            var str = name + '=' + value + '; ';
            if (day) {
                var date = new Date();
                date.setTime(date.getTime() + day * 24 * 3600 * 1000);
                str += 'expires=' + date.toGMTString() + '; ';
            }
            if (path) {
                str += 'path=' + path;
            }
            document.cookie = str;//注意，cookie这样设置并不会覆盖之前所有的cookie！除非同名同path
        },

        /**
         * 得到cookie
         * @param name
         * @returns {string}
         */
        getCookie: function (name) {
            var temp = new RegExp('(^|;| )' + name + '=([^;]*)(;|$)', 'g').exec(document.cookie);
            var defaultValue = "";
            if (temp != null) {
                var value = temp[2];
                if (value === '""')
                    return defaultValue;
                return value;
            }
            return defaultValue;
        }
    }
})();

/**
 * 通用函数库
 * @type {{isArray, formatTimeInfo, removeDefaultFocusbolder}}
 */
LMEPG.Func = LMEPG.func = (function () {
    return {
        /**
         * 判断对象是否是数组
         * @param obj  对象
         * @returns {boolean}
         */
        isArray: function (obj) {
            return (obj instanceof Array);
        },

        /**
         * 将时间进行格式化返回
         * @type：1、格式化为MM:SS
         */
        formatTimeInfo: function (type, second) {
            if (type == 1) {
                // 格式化为MM:SS
                var m = Math.floor(second / 60);
                m = m < 10 ? ('0' + m) : m;
                var s = second % 60;
                s = s < 10 ? ('0' + s) : s;
                return m + ':' + s;
            }
            return second;  //不支持的类型原样输出
        },

        /** 移除iPanel自带的焦点框*/
        removeDefaultFocusbolder: function () {
            if (typeof(iPanel) != "undefined") {
                iPanel.focusWidth = "0";
            }
        },
        /**
         * 清除字符串中的空格
         * @param str
         * @returns {string | void}
         */
        trim: function (str) {
            if (str) return str.replace(/^\s*(.*?)\s*$/g, '$1');
        },

        /**
         * 将http协议头转化为rtsp。
         * <pre>例如：
         *   videoUrlSrc: "http://202.99.114.93/88888891/16/20171215/269767418/269767418.mp4";
         *   videoUrlDst: "rtsp://202.99.114.93/88888891/16/20171215/269767418/269767418.mp4";
         *  </pre>
         * @param videoUrlSrc 未转换过协议头的原始视频地址
         * @returns {*}
         */
        httpTortsp: function (videoUrlSrc) {
            var dst = videoUrlSrc;
            var protocol = videoUrlSrc.substring(0, 4);
            if (protocol == "http") {
                dst = videoUrlSrc.replace(/http/, 'rtsp');
            }
            return dst;
        },

        /** 判断手机号码是否有效
         * @param number 手机号码
         * @returns {boolean} true--有效, false--无效
         */
        checkTelPhoneNumberValid: function (number) {
            // 如果number为空，则是无效的手机号码
            if (typeof number == "undefined" || number == null || number == "") {
                return false;
            }

            //手机号正则
            var phoneReg = /^1[34578]\d{9}$/;
            if (!phoneReg.test(number)) {
                return false;
            }

            return true;
        },

        /**
         * 判断元素是否定义
         * @param obj
         * @returns {boolean}
         */
        isExist: function (obj) {
            if (typeof(obj) === "undefined" || obj === null) {
                return false;
            }
            return true;
        },

        /**
         * 判断元素是否为空
         * @param element
         * @returns {boolean}
         */
        isEmpty: function (element) {
            if (typeof(element) === "undefined"
                || element === null
                || element === "") {
                return true;
            }
            return false;
        },

        /**
         * 当时间间隔小于100毫秒时，就认为是操作有效
         * @returns {boolean}
         */
        checkClickValid: function () {
            var stbModel = LMEPG.Cookie.getCookie('stbModel');
            var lastTime = LMEPG.Cookie.getCookie('lastTime');

            if (stbModel == "" || lastTime == "") {
                return true;
            }

            // 中国联通基地--展厅的盒子，按键一次会响应两次
            if (stbModel != "EC6108V9U_pub_tjjlt") {
                return true;
            }

            var currentTime = new Date();    //当前时间
            var dt = currentTime.getTime();
            var diffTime = dt - lastTime; //时间差的毫秒数
            if (diffTime > 100) {
                LMEPG.Cookie.setCookie('lastTime', dt);
                return true;
            }
            return false;
        },
    }
})();

/**
 * 事件管理
 * @type {{_keys, addEvent, delEvent}}
 */
LMEPG.KeyEventManager = (function () {
    return {
        // 存储注册的按键事件
        _keys: {},
        _isAllow: true,
        _keyCodes: new Array(100),

        /**
         * 初始化按键事件管理器
         */
        init: function () {
            //判断事件处理器是否定义，避免重复定义处理
            if (!LMEPG.onEvent) {
                LMEPG.onEvent = LMEPG.KeyEventManager._defaultKeyEvent;
            }
        },

        /**
         * 增加事件处理，支持单个事件和批量添加事件
         * @param code  事件id  可以是字符串和对象数据。不能是number
         * @param action 单个事件添加时的事件响应动作
         */
        addKeyEvent: function (code, action) {
            if (typeof code === 'string' && action !== undefined) {
                //单个添加事件，将单个事件转换成多个事件的对象，在统一添加处理
                var _code = code;
                code = {};
                code[_code] = action;
            }
            if (typeof code === 'object') {
                //批量添加按键事件
                var obj = code;
                for (var i in obj) {
                    if (i.indexOf('KEY_') === 0 || i.indexOf('EVENT_') === 0) {
                        //如果是“KEY_”或者“EVENT_”开头，视作按键
                        this._keys[i] = obj[i];
                    } else {
                        alert('错误：添加按键映射时code为不支持的类型！');
                    }
                }
            } else if (typeof code === 'number') {
                //根本不允许出现这种错误！
                alert('错误：添加按键映射时code不能为number类型！');
            }
            return this;
        },

        delKeyEvent: function (code) {
            if (!(code instanceof Array)) {
                //单个事件删除，转换成数组和多个事件删除统一处理
                code = [code];
            }
            for (var i = 0; i < code.length; i++) {
                if (this._keys[code[i]]) {
                    this._keys[code[i]] = 'LMEPG.emptyFunc()';
                }
            }
            return this;
        },

        /**
         * 得到按键序列
         */
        getKeyCodes: function () {
            return this._keyCodes;
        },

        /**
         * 是否允许响应按键事件, 如果该标志设置未假。将不响应按键事件到应用层。
         *
         * @param isAllow
         */
        setAllowFlag: function (isAllow) {
            if (isAllow === 'undefined') return;
            this._isAllow = isAllow;
        },

        /**
         * 默认按键处理器，如果外部没有重新定义，采用该按键处理器
         * @param code 按键值
         * @private
         */
        _defaultKeyEvent: function (code) {
            LMEPG.KeyEventManager._keyCodes.push(code);
            for (var i in LMEPG.KeyEventManager._keys) {
                if (code === window[i] && LMEPG.KeyEventManager._isAllow) {
                    if (code == KEY_BACK) {
                        var currentBtn = LMEPG.ButtonManager.getCurrentButton();
                        if (typeof(currentBtn) !== "undefined" && currentBtn &&
                            (typeof (currentBtn.type) !== "undefined") && currentBtn.type == BUTTON_TYPE_INPUTTEXT) {
                            return;
                        }
                    }
                    LMEPG.call(LMEPG.KeyEventManager._keys[i], code);
                }
            }
        },
    }
})();

/**
 * 自定义按钮控件管理器
 *
 * @type {{_buttons, _config, _previous, _current, _direction, init, requestFocus, getCurrentButton,
 * getPreviousButton, getButtonById, getNextFocusUpId, getNextFocusDownId, getNextFocusLeftId,
 * getNextFocusRightId, getNextFocusDownId, _onClick, _onMoveChange, _onBeforeMoveChange, _initDefaultKeyEvents,
 * _initButtons, _initDefaultFocusButton, _update, _getNextFocusId}}
 */
LMEPG.ButtonManager = LMEPG.bm = (function () {
    return {
        _buttons: {},               // 自定义按钮数组
        _config: {},                // 初始化配置属性
        _previous: null,            // 上一个焦点按钮
        _current: null,             // 当前焦点按钮
        _direction: null,           // 上一次按键的方向
        _isKeyEventPause: false,   //按键事件是否暂停的标志

        /**
         * 初始化话按键管理器
         * @param focusId  默认按钮，字符串或者是数组，如果是数组，循环便利第一个存在的按钮
         * @param buttons  定义好的按钮数组
         * @param resPath  资源文件根路径。 如果资源文件采用相对路径时，使用该目录下面的资源路径。
         * @param isInitKeys 是否使用默认的按键处理器。
         */
        init: function (defaultFocusId, buttons, imagePath, defaultKeyEvents) {
            this.clearFocus();
            var config = defaultFocusId;
            if (arguments.length >= 2) {
                config = {
                    defaultFocusId: defaultFocusId,
                    buttons: buttons,
                    imagePath: imagePath,
                    defaultKeyEvents: defaultKeyEvents
                };
            }
            this._config = config;          // 保存配置参数
            this._initDefaultKeyEvents();
            this._initButtons();
            this._initDefaultFocusButton();
            this._update();
        },

        /**
         * 设置按键事件是否暂停（可恢复）
         * isPause true:暂停按键事件；false:按键事件正常使用
         */
        setKeyEventPause: function (isPause) {
            this._isKeyEventPause = isPause;
        },

        /**
         * 创建button按钮对象
         * @param id  按钮ID
         * @param name 按钮名称
         * @param nextFocusLeft  向左按键焦点ID
         * @param nextFocusRight 向右按键焦点ID
         * @param nextFocusUp 向上按键焦点ID
         * @param nextFocusDown 向下按键焦点ID
         * @param backgroundImage 按钮背景图片
         * @param focusImage 获得焦点时背景图片
         * @param click  点击回调函数
         * @param focusChange  焦点改变回调函数
         * @param beforeMoveChange 焦点移动前回调函数
         * @param moveChange 焦点移动完成后回调函数
         * @returns {{id: *, name: *, nextFocusLeft: *, nextFocusRight: *, nextFocusUp: *, nextFocusDown: *, backgroundImage: *, focusImage: *, click: *, focusChange: *, beforeMoveChange: *, moveChange: *}}
         */
        createButton: function (id, name, nextFocusLeft, nextFocusRight, nextFocusUp, nextFocusDown, backgroundImage, focusImage, click, focusChange, beforeMoveChange, moveChange) {
            return {
                id: id,
                name: name,
                nextFocusLeft: nextFocusLeft,
                nextFocusRight: nextFocusRight,
                nextFocusUp: nextFocusUp,
                nextFocusDown: nextFocusDown,
                backgroundImage: backgroundImage,
                focusImage: focusImage,
                click: click,
                focusChange: focusChange,
                beforeMoveChange: beforeMoveChange,
                moveChange: moveChange
            }
        },

        /**
         * 请求获得焦点
         * @param buttonId 按钮Id
         */
        requestFocus: function (buttonId) {
            var btn = this.getButtonById(buttonId);
            if (!btn || btn.focusable === false) {
                //按钮不存在，不做任何处理
                return;
            }
            this._previous = this._current;
            this._current = btn;
            this._update();
        },

        /**
         * 清除焦点
         */
        clearFocus: function () {
            var current = this._current;
            if (current) {
                var _current = G(current.id);
                if (_current != null) {
                    if (current.backgroundImage) {
                        if (current.type == BUTTON_TYPE_DIV) {
                            _current.style.backgroundImage = current.backgroundImage;
                        } else {
                            _current.src = current.backgroundImage;
                        }
                    } else if (current.type == BUTTON_TYPE_INPUTTEXT) {
                        _current.disabled = true;
                        _current.blur();
                    }
                }
            }
        },

        /**
         * 设置按钮选中状态
         * @param btnId
         * @param selected
         */
        setSelected: function (btnId, selected) {
            var button = this.getButtonById(btnId);
            if (typeof(button) !== "undefined" && button) {
                if (typeof button.selected !== "undefined" && button.selected === selected) {
                    return;
                }

                // 设置按钮状态
                button.selected = selected;
                LMEPG.ButtonManager._buttons[button.id] = button;

                // 更新同一组的其他按钮的选中状态视图
                if (selected) {
                    if (typeof(button.groupId) !== "undefined"
                        && button.groupId != null
                        && button.groupId != "") {
                        var buttons = LMEPG.ButtonManager._buttons;
                        for (var btn in buttons) {
                            if (typeof(buttons[btn].groupId) !== "undefined"
                                && buttons[btn].groupId != null
                                && buttons[btn].groupId === button.groupId
                                && buttons[btn].id !== button.id) {
                                buttons[btn].selected = false;
                                LMEPG.ButtonManager._updateSelectStatus(buttons[btn]);
                            }
                        }
                    }
                }

                if (this._current != null && this._current.id === button.id) {
                    // 当前焦点ID被设置选中状态时，保持为焦点状态
                    return;
                }
                // 更新当前设置按钮的视图
                LMEPG.ButtonManager._updateSelectStatus(button);
            }
        },

        _updateSelectStatus: function (button) {
            if (typeof(button) === "undefined"
                || button === null
                || typeof(button.selected) === "undefined"
                || button.selected == null) {
                return;
            }

            var _button = G(button.id);
            if (button.selected && button.selectedImage) {
                if (button.type == BUTTON_TYPE_DIV) {
                    _button.style.backgroundImage = button.selectedImage;
                } else {
                    _button.src = button.selectedImage;
                }
            } else if (button.backgroundImage) {
                if (button.type == BUTTON_TYPE_DIV) {
                    _button.style.backgroundImage = button.backgroundImage;
                } else {
                    _button.src = button.backgroundImage;
                }
            }
        },

        /**
         * 获取当前按钮对象
         */
        getCurrentButton: function () {
            if (!this._current) {
                //按钮不存在，不做任何处理
                return;
            }
            var id = this._current.id;
            return this.getButtonById(id);
        },

        /**
         * 获取上一个焦点按钮对象
         */
        getPreviousButton: function () {
            if (!this._previous) {
                //按钮不存在，不做任何处理
                return;
            }
            var id = this._previous.id;
            return this.getButtonById(id);
        },

        /**
         * 获取指定按钮“上/下/左/右”4个方向相邻的按钮对象
         * @param direction 方向值只能为：left / up / right / down
         * @param buttonId  指定按钮的id。如果不存在，则使用当前按钮作为基准按钮寻找。
         */
        getNearbyFocusButton: function (direction, buttonId) {
            var targetBtnId = buttonId;
            if (!targetBtnId) {
                targetBtnId = this._current.id;
            }
            var nextButtonId = this._getNextFocusId(targetBtnId, direction);
            if (nextButtonId) {
                return this.getButtonById(nextButtonId);
            }
        },

        /**
         * 通过按钮Id获得按钮对象
         * @param id
         */
        getButtonById: function (id) {
            if (id !== undefined) {
                var _button = G(id);
                if (_button) {
                    var btn = this._buttons[id];
                    //如果按钮配置了disable:true，那么视作这个按钮不存在
                    if (btn && btn.disabled !== true)
                        return this._buttons[id];
                }
            }
        },

        /**
         * 通过按钮Id获取向上按键的焦点Id
         * @param id
         */
        getNextFocusUpId: function (id) {
            var button = this.getButtonById(id);
            if (!button) {
                //按钮不存在，不做任何处理
                return;
            }
            return button.nextFocusUp;
        },

        /**
         * 通过按钮Id获取向下按键的焦点Id
         * @param id
         */
        getNextFocusDownId: function (id) {
            var button = this.getButtonById(id);
            if (!button) {
                //按钮不存在，不做任何处理
                return;
            }
            return button.nextFocusDown;
        },

        /**
         * 通过按钮Id获取向左按键的焦点Id
         * @param id
         */
        getNextFocusLeftId: function (id) {
            var button = this.getButtonById(id);
            if (!button) {
                //按钮不存在，不做任何处理
                return;
            }
            return button.nextFocusLeft;
        },

        /**
         * 通过按钮Id获取向右按键的焦点Id
         * @param id
         */
        getNextFocusRightId: function (id) {
            var button = this.getButtonById(id);
            if (!button) {
                //按钮不存在，不做任何处理
                return;
            }
            return button.nextFocusRight;
        },

        /**
         * 返回设置的有效按钮集合
         */
        getButtons: function () {
            return this._buttons;
        },

        /**
         * 默认确认按键处理回调
         * @private
         */
        _onClick: function () {
            if (this._isKeyEventPause == true) {
                return;
            }
            LMEPG.call(this._current.click, [this._current]);
        }
        ,

        /**
         * 默认方向按键回调
         * @param dir 移动方向
         * @private
         */
        _onMoveChange: function (direction) {
            if (this._isKeyEventPause == true) {
                return;
            }
            if (!this._current) {
                return;
            }
            this._direction = direction;

            if (this._onBeforeMoveChange(direction) === false) {
                return;
            }

            var button;
            var nextButtonId = this._getNextFocusId(this._current.id, direction);
            if (typeof nextButtonId == "string")
                nextButtonId = [nextButtonId];
            if (LMEPG.Func.isArray(nextButtonId)) {
                for (var i = 0; i < nextButtonId.length; i++) {
                    button = this.getButtonById(nextButtonId[i]);
                    if (button)
                        break;
                }
                if (button && (button.focusable === true || button.focusable === "true")) {
                    this._previous = this._current;
                    this._current = button;
                    this._update();
                }
            }
            LMEPG.call(this._current.moveChange, [this._previous, this._current, direction]);
        }
        ,

        /**
         * 执行改变前的回调
         * @param direction
         * @private
         */
        _onBeforeMoveChange: function (direction) {
            if (!this._current) {
                return;
            }
            if (this._current.beforeMoveChange) {
                return LMEPG.call(this._current.beforeMoveChange, [direction, this._current])
            }
        }
        ,

        /**
         * 初始化默认的按键事件
         * @private
         */
        _initDefaultKeyEvents: function () {
            if (this._config.defaultKeyEvents) {
                LMEPG.KeyEventManager.init();
                LMEPG.KeyEventManager.addKeyEvent(
                    {
                        KEY_ENTER: 'LMEPG.ButtonManager._onClick()',			                    // 确定键
                        KEY_LEFT: 'LMEPG.ButtonManager._onMoveChange("left")',		                // 左键
                        KEY_RIGHT: 'LMEPG.ButtonManager._onMoveChange("right")',		                // 右键
                        KEY_UP: 'LMEPG.ButtonManager._onMoveChange("up")',			                // 上键
                        KEY_DOWN: 'LMEPG.ButtonManager._onMoveChange("down")',		                // 下键
                        KEY_BACK: 'onBack()'							                                        // 返回键，onBack 由页面自行定义回调
                    });
            }
        }
        ,

        /**
         * 初始化按钮集合，修正部分参数
         * @private
         */
        _initButtons: function () {
            //初始化所有的按钮属性
            for (var i = 0; i < this._config.buttons.length; i++) {
                var button = this._config.buttons[i];
                var _button = G(button.id);
                if (!button) {
                    continue;
                }
                if (!button.backgroundImage && _button) {
                    // 如果按钮没有设置backgroundImage图片，把src作为对应的图片按钮。要求必须写在window.onload里面，否则部分盒子获取不到src
                    button.backgroundImage = _button.src;
                }
                if (this._config.imagePath && button.focusImage && button.focusImage.indexOf('http') < 0) {
                    //如果(配置了imagePath && 当前按钮配置了焦点图片 && 焦点图片不是http开头)
                    button.focusImage = this._config.imagePath + button.focusImage;
                }
                if (this._config.imagePath && button.backgroundImage && button.backgroundImage.indexOf('http') < 0) {
                    button.backgroundImage = this._config.imagePath + button.backgroundImage;
                }
                if (typeof button.focusable === "undefined") button.focusable = true;
                this._buttons[button.id] = button;
            }
        }
        ,

        /**
         * 初始化默认焦点
         * @private
         */
        _initDefaultFocusButton: function () {
            // 设置默认获得焦点的按钮
            if (typeof this._config.defaultFocusId === 'string') {
                this._current = this.getButtonById(this._config.defaultFocusId);
            } else if (LMEPG.Func.isArray(this._config.defaultFocusId)) {
                for (var i = 0; i < this._config.defaultFocusId.length; i++) {
                    var button = this.getButtonById(this._config.defaultFocusId[i]);
                    if (button) {
                        this._current = button;
                        break;
                    }
                }
            }
        }
        ,

        /**
         * 更新按钮状态
         * @private
         */
        _update: function () {
            var prev = this._previous;
            var current = this._current;

            //更新上一个按钮状态
            if (prev && G(prev.id)) {
                var _prev = G(prev.id);
                if (typeof prev.selected !== "undefined"
                    && prev.selected
                    && typeof prev.selectedImage !== "undefined"
                    && prev.selectedImage) {
                    //按钮为选中状态
                    if (prev.type == BUTTON_TYPE_DIV) {
                        _prev.style.backgroundImage = "url(" + prev.selectedImage + ")";
                    } else {
                        _prev.src = prev.selectedImage;
                    }
                } else if (prev.backgroundImage) {
                    if (prev.type == BUTTON_TYPE_DIV) {
                        _prev.style.backgroundImage = "url(" + prev.backgroundImage + ")";
                    } else {
                        _prev.src = prev.backgroundImage;
                    }
                } else if (prev.type == BUTTON_TYPE_INPUTTEXT) {
                    _prev.disabled = true;
                    _prev.blur();
                }
                LMEPG.call(prev.focusChange, [prev, false]);
            }
            //更新当前按钮的状态
            if (current) {
                var _current = G(current.id);
                if (current.focusImage) {
                    if (current.type == BUTTON_TYPE_DIV) {
                        _current.style.backgroundImage = "url(" + current.focusImage + ")";
                    } else {
                        _current.src = current.focusImage;
                    }
                } else if (current.type == BUTTON_TYPE_INPUTTEXT) {
                    _current.disabled = false;
                    _current.focus();
                }

                LMEPG.call(current.focusChange, [current, true]);
            }
        }
        ,

        /**
         * 获取按钮的下一个焦点Id
         * @param id
         * @param direction
         * @private
         */
        _getNextFocusId: function (id, direction) {
            if (direction == "up") {
                return this.getNextFocusUpId(id)
            } else if (direction == "down") {
                return this.getNextFocusDownId(id)
            } else if (direction == "left") {
                return this.getNextFocusLeftId(id)
            } else if (direction == "right") {
                return this.getNextFocusRightId(id)
            }
        },
    }
})();

LMEPG.CssManager = (function () {
    return {
        /**
         * 判断样式是否存在，
         * 注意，标清盒子不一定支持，谨慎使用
         * @param obj 元素id或者元素对象
         * @param cls 样式名称
         * @returns {Array|{index: number, input: string}}
         */
        hasClass: function (obj, cls) {
            if (!obj) return;
            if (typeof  obj === 'string') {
                //如果obj是字符串，id的话，先得到对象。
                obj = G(obj);
                if (!obj) return;
            }
            //判断是否有该样式
            if (strContain(obj.className, cls)) {
                return true;
            } else {
                return false;
            }
        },
        /**
         * 增加样式
         * 注意，标清盒子不一定支持，谨慎使用
         * @param obj
         * @param cls
         */
        addClass: function (obj, cls) {
            if (!obj) return;
            if (typeof  obj === 'string') {
                //如果obj是字符串，id的话，先得到对象。
                obj = G(obj);
                if (!obj) return;
            }
            if (!this.hasClass(obj, cls)) obj.className += " " + cls;
        },
        /**
         * 删除样式
         * @param obj
         * @param cls
         */
        removeClass: function (obj, cls) {
            if (!obj) return;
            if (typeof  obj === 'string') {
                //如果obj是字符串，id的话，先得到对象。
                obj = G(obj);
                if (!obj) return;
            }
            if (this.hasClass(obj, cls)) {
                obj.className = obj.className.replace(eval("/" + cls + "/g"), ' ');
            }
        }
    }
})();

/**
 * 统计管理器，
 * @type {{ajax: LMEPG.StatManager.ajax}}
 */
LMEPG.StatManager = (function () {
    return {
        /**
         * 异步上报数据接口
         * @param url
         * @param async
         */
        ajax: function (url, async) {
            var xmlHttp = null;
            if (window.XMLHttpRequest) {
                xmlHttp = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            if (xmlHttp) {
                xmlHttp.open("GET", url, async);
                xmlHttp.send(null);
                xmlHttp = null;
            } else {
                var img = document.createElement('img');
                img.src = url;
                img.style.visibility = 'hidden';//图片必须隐藏
                document.body.appendChild(img);
            }
        },

    }
})();

//附件到window对象上
window.lmepg = LMEPG;

/**
 * 判断字符串是否以指定内容开头
 * @param str
 * @returns {boolean} 匹配指定开头内容，返回为真。否则为假。
 */
String.prototype.startWith = function (str) {
    var reg = new RegExp("^" + str);
    return reg.test(this);
};

/**
 * 判断字符串是否以指定内容结尾
 * @param str
 * @returns {boolean} 匹配指定结尾内容，返回为真。否则为假。
 */
String.prototype.endWith = function (str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
};

/**
 * 格式化时间
 * @param fmt
 * @returns {*}
 */
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}