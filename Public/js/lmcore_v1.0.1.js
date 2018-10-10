/**
 * 事件监听框架
 * Created by caijun on 2018/2/28.
 */

/**
 * 通过该类，注册事件监听
 * @type {{eventHandler, eventLooper, onEvent, onVirtualEvent}}
 */
LMEPG.Framework = (function () {
    return {
        looper: function () {
            LMEPG.Framework.eventLooper();   // 启动事件监听
        },

        //事件处理
        eventHandler: function (event) {
            event = event || window.event;
            var keyCode = event.which || event.keyCode;
            if (keyCode === KEY_VIRTUAL_EVENT) {
                LMEPG.call(LMEPG.Framework.onVirtualEvent, [keyCode]);
            } else {
                LMEPG.call(LMEPG.Framework.onEvent, [keyCode]);
            }
        },

        onEvent: function (keyCode) {
            //两次响应的间隔，不能小于100毫秒，排除掉虚拟按键
            if (!LMEPG.Func.checkClickValid()) {
                return;
            }
            
            //阻止浏览器的默认按键功能
            if (keyCode === KEY_BACK){
                event.preventDefault();
            }
            //特殊按键
            if (keyCode === KEY_BACK_640){
                keyCode = KEY_BACK;
                event.preventDefault();
            }
            if (keyCode === KEY_LEFT_65){
                keyCode = KEY_LEFT;
            }
            if (keyCode === KEY_RIGHT_68){
                keyCode = KEY_RIGHT;
            }
            if (keyCode === KEY_UP_87){
                keyCode = KEY_UP;
            }
            if (keyCode === KEY_DOWN_83){
                keyCode = KEY_DOWN;
            }
            if (keyCode === KEY_VOL_UP_61){
                keyCode = KEY_VOL_UP;
            }
            if (keyCode === KEY_VOL_DOWN_45){
                keyCode = KEY_VOL_DOWN;
            }

            if (typeof LMEPG.onEvent !== "undefined")
                LMEPG.onEvent(keyCode);
        },

        onVirtualEvent: function () {
            //虚拟按键事件
            eval("oEvent = " + Utility.getEvent());
            if (typeof LMEPG.onEvent !== "undefined")
                LMEPG.onEvent(oEvent.type, true)
        },

        /**
         * 启动事件循环
         */
        eventLooper: function () {
            if (debug) {
                document.onkeydown = LMEPG.Framework.eventHandler;
            } else {
                document.onkeypress = LMEPG.Framework.eventHandler;
            }
        },

    }
})();

LMEPG.Framework.looper();
