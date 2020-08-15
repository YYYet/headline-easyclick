function UtilsWrapper() {

}

var utils = new UtilsWrapper();

/**
 * 请求展示浮窗的权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param timeout 请求权限超时时间 单位是秒
 * @return true 代表请求权限成功，false代表失败
 */
UtilsWrapper.prototype.requestFloatViewPermission = function (timeout) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.requestFloatViewPermission(timeout);
};

/**
 * 展示浮窗
 * @param params js的map对象，包含的
 * var map = {"path":"main.html","tag":"test"};  类似这样的参数
 * <br/>
 * 参数解析:
 * tag:字符串 悬浮窗唯一定位的标示
 * path:字符串 IEC 中的布局文件
 * title:字符串 悬浮窗标题
 * titleBg:字符串 悬浮窗背景，16进制，例如#888888，或者#88000000
 * x:整型 悬浮窗起始X坐标
 * y:整型 悬浮窗起始Y坐标
 * w:整型 悬浮窗起始宽度
 * h:整型 悬浮窗起始高度
 * @return true 代表请求权限成功，false代表失败
 */
UtilsWrapper.prototype.showFloatView = function (params) {
    if (utilsWrapper == null || params == null) {
        return false;
    }
    if (String == (typeof params)) {
        return utilsWrapper.showFloatView(params);
    } else {
        return utilsWrapper.showFloatView(JSON.stringify(params));
    }

};

/**
 * 关闭浮窗
 * @param tag showFloatView 使用的tag参数，对悬浮窗唯一定位的
 * @return true 成功，false代表失败
 */
UtilsWrapper.prototype.closeFloatView = function (tag) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.closeFloatView(tag);
};


/**
 * 关闭所有悬浮窗，但不包含日志悬浮窗
 * @return true 成功，false代表失败
 */
UtilsWrapper.prototype.closeAllFloatView = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.closeAllFloatView();
};


/**
 * 检查是否含有浮窗权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @return true 有权限,false 代表无权限
 */
UtilsWrapper.prototype.hasFloatViewPermission = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.hasFloatViewPermission();
};

/**
 * 设置日志窗口大小
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param w 宽度
 * @param h 高度
 * @param textSize 日志的字体大小
 * @param backgroundColor 背景颜色，例如#336699
 */
UtilsWrapper.prototype.setLogViewSize = function (w, h, textSize, backgroundColor) {
    if (utilsWrapper == null) {
        return null;
    }
    utilsWrapper.setLogViewSize(w, h, textSize, backgroundColor);
};
UtilsWrapper.prototype.setLogViewSizeEx = function (p) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.setLogViewSizeEx(p);
};


/**
 * 展示日志浮窗
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 */
UtilsWrapper.prototype.showLogWindow = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.showLogWindow();
};
UtilsWrapper.prototype.showCtrlWindow = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.showCtrlWindow();
};

UtilsWrapper.prototype.hideCtrlWindow = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.hideCtrlWindow();
};


/**
 * 展示日志到浮窗中
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param log 日志
 */
UtilsWrapper.prototype.setLogText = function (log) {
    if (utilsWrapper == null) {
        return null;
    }
    utilsWrapper.setLogText(log);
};


/**
 * 隐藏日志浮窗
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 */
UtilsWrapper.prototype.hideLogWindow = function () {
    if (utilsWrapper == null) {
        return null;
    }
    utilsWrapper.hideLogWindow();
};

/**
 * 显示消息
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param msg 消息内容
 */
UtilsWrapper.prototype.toast = function (msg) {
    if (utilsWrapper == null) {
        return null;
    }
    utilsWrapper.toast(msg);
};
/**
 * 打开APP
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param packageName 程序的包名
 * @return 布尔型 true 代表成功，false 代表失败
 */

UtilsWrapper.prototype.openApp = function (packageName) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.openApp(packageName);
};

/**
 * 打开一个activity，通过map参数
 * @param map 例如{"action":""},key的固定只有
 * action,
 * uri,pkg,className,flag,其他的都是参数了
 * @return 布尔型 true 代表成功，false 代表失败
 */
UtilsWrapper.prototype.openActivity = function (map) {
    if (utilsWrapper == null) {
        return null;
    }
    map = JSON.stringify(map);
    return utilsWrapper.openActivity(map);
};

/**
 * 打开APP，通过应用名称
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param appName 程序名称，比如今日头条
 * @return 布尔型 true 代表成功，false 代表失败
 */
UtilsWrapper.prototype.openAppByName = function (appName) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.openAppByName(appName);
};
/**
 * App是否已经安装
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param packageName 应用程序的包名
 * @return 布尔型 true 代表已经安装，false代表未安装
 */
UtilsWrapper.prototype.isAppExist = function (packageName) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.isAppExist(packageName);
};


/**
 * 取得已安装的程序的版本整型标示
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param packageName 应用程序的包名
 * @return 整型 返回版本代码
 */
UtilsWrapper.prototype.getAppVersionCode = function (packageName) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.getAppVersionCode(packageName);
};

/**
 * 取得已安装的程序的版本字符串标示
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param packageName 应用程序的包名
 * @return string 例如 1.0.0
 */
UtilsWrapper.prototype.getAppVersionName = function (packageName) {
    if (utilsWrapper == null) {
        return null;
    }
    var x = utilsWrapper.getAppVersionName(packageName);
    return javaString2string(x);
};
/**
 * 取得App文件的包名
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param filePath 文件路径
 * @return string 例如com.tencent.mm
 */
UtilsWrapper.prototype.getApkPkgName = function (filePath) {
    if (utilsWrapper == null) {
        return null;
    }
    var x = utilsWrapper.getApkPkgName(filePath);
    return javaString2string(x);
};


/**
 * 将图片插入到相册中，此方法会立刻更新相册数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param path 图片路径
 */
UtilsWrapper.prototype.insertImageToAlbum = function (path) {
    if (utilsWrapper == null) {
        return null;
    }
    utilsWrapper.insertImageToAlbum(path);
};

/**
 * 将视频插入到相册中，此方法会立刻更新相册数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param path 视频路径
 */
UtilsWrapper.prototype.insertVideoToAlbum = function (path) {
    if (utilsWrapper == null) {
        return null;
    }
    utilsWrapper.insertVideoToAlbum(path);
};


/**
 * 文件的MD5
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param filePath 文件路径
 * @return string 文件MD5字符串或者null
 */
UtilsWrapper.prototype.fileMd5 = function (filePath) {
    if (utilsWrapper == null) {
        return null;
    }
    var x = utilsWrapper.fileMd5(filePath);
    return javaString2string(x);
};
/**
 * 数据计算出来的MD5
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param data 数据
 * @return string 数据MD5字符串或者null
 */
UtilsWrapper.prototype.dataMd5 = function (data) {
    if (utilsWrapper == null) {
        return null;
    }
    var x = utilsWrapper.dataMd5(data);
    return javaString2string(x);
};


/**
 * 读取JSON中的整型数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param jsonObject JSON对象
 * @param key        配置项目
 * @return 整型 JSON中key对应的整型数据
 */
UtilsWrapper.prototype.readJSONInt = function (jsonObject, key) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.readJSONInt(jsonObject, key);
};

/**
 * 读取JSON中的字符串数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param jsonObject JSON对象
 * @param key        配置项目
 * @return string JSON中key对应的字符串数据
 */
UtilsWrapper.prototype.readJSONString = function (jsonObject, key) {
    if (utilsWrapper == null) {
        return null;
    }
    var x = utilsWrapper.readJSONString(jsonObject, key);
    return javaString2string(x);
};

/**
 * 判断一个对象为空
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param obj 对象
 * @return 布尔型 true或者false
 */
UtilsWrapper.prototype.isObjectNull = function (obj) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.isObjectNull(obj);
};

/**
 * 判断一个对象不为空
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param obj 对象
 * @return 布尔型 true或者false
 */
UtilsWrapper.prototype.isObjectNotNull = function (obj) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.isObjectNotNull(obj);
};
/**
 * 判断布尔型对象是否为真
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param r 布尔型对象
 * @return 布尔型 true 或者 false
 */
UtilsWrapper.prototype.isTrue = function (r) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.isTrue(r);
};

/**
 * 取得比例，例如10参数，就是返回10%的比例，如果是true，说明随机比例正确，否则不正确
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param ratio 浮点型 1-100
 * @return 布尔型 true或者false
 */
UtilsWrapper.prototype.getRatio = function (ratio) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.getRatio(ratio);
};
/**
 * 随机整型数据，参数是整型长度
 *
 * @param length 位数，要随机产生多少位的整型数据
 * @return 整型 返回指定长度的整型数据
 */
UtilsWrapper.prototype.randomInt = function (length) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.randomInt(length);
};


/**
 * 取得随机的数字和字母，参数是长度
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param length 长度
 * @return string 字符串数字混合
 */
UtilsWrapper.prototype.randomCharNumber = function (length) {
    if (utilsWrapper == null) {
        return null;
    }
    var x = utilsWrapper.randomCharNumber(length);
    return javaString2string(x);
};

/**
 * 取得某个范围的随机值
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param min 最小值
 * @param max 最大值
 * @return 整型 在min和max中间的值, 包含最大和最小值
 */
UtilsWrapper.prototype.getRangeInt = function (min, max) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.getRangeInt(min, max);
};
/**
 * 设置剪贴板文本
 * @param text 文本
 * @return boolean
 */
UtilsWrapper.prototype.setClipboardText = function (text) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.setClipboardText(text);
};


/**
 * 读取剪贴板文本
 * @return string
 */
UtilsWrapper.prototype.getClipboardText = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return javaString2string(utilsWrapper.getClipboardText());
};
