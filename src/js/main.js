/**
 * 常用JS变量:
 * agentEvent = 代理模式下自动点击模块
 * acEvent= 无障碍模式下自动点击模块
 * device = 设备信息模块
 * file = 文件处理模块
 * http = HTTP网络请求模块
 * shell = shell命令模块
 * thread= 多线程模块
 * image = 图色查找模块
 * utils= 工具类模块
 * global = 全局快捷方式模块
 * 常用java变量：
 *  context : Android的Context对象
 *  javaLoader : java的类加载器对象
 * 导入Java类或者包：
 *  importClass(类名) = 导入java类
 *      例如: importClass(java.io.File) 导入java的 File 类
 *  importPackage(包名) =导入java包名下的所有类
 *      例如: importPackage(java.util) 导入java.util下的类
 *
 */

function main() {
    //开始再这里编写代码了！！

    //如果自动化服务正常
    if (!autoServiceStart(3)) {
        logOne("自动化服务启动失败，无法执行脚本")
        exit();
        return;
    }
    logOne("开始执行脚本")
    showLogWindow();

    setFloatDisplayLineNumber(false);
  init()
   // tet()
     // cover()
    //findBag()
  testRun();



}

function finBagImpl() {
    var selector = id("com.ss.android.liveplugin:id/count_down");
    if (waitExistNode(selector,3000)) {

        logOne("检测到福袋");
        var time = getText(selector);
        if (null==time) {
            finBagImpl()
        }
        let timeArray = time.toString().split(":");
        let timebe = parseInt(timeArray[0].substring(1,2))
        var timeaf = parseInt(timeArray[1])
        defalutTime = (timebe*60+parseInt(timeArray[1]))-60;
        logOne("福袋领取时间 "+time)
        toast("福袋领取时间 "+time)

        if (parseInt(timebe)>0) {
            logOne("福袋时间过长->定时"+defalutTime+"秒")
            toast("福袋时间过长->定时"+defalutTime+"秒")
            getUrl()
            //  startJob(i,"10",true)
            待开数+=1;
            关注数++;


            return  false
        }else if (parseInt(timebe)==0) {
            logOne("福袋时长 "+time+" 等待"+timeaf+"秒")
            toast("福袋时长小于一分钟"+" 等待"+timeaf+"秒")
            clickRandom(id("com.ss.android.liveplugin:id/count_down"))
            sleep(1500)
            if (has(text("一键参与获取福袋(支付30钻)"))) {
                toast("需支付，不参与");
                logOne("需支付，不参与");
                back()
                swipe()
                return  false
            }

            let btnSeletor = clz("android.view.View").index(1).depth(18).drawingOrder(0);
            if (waitExistNode(btnSeletor,5200)) {
                if (clickRandom(btnSeletor)) {
                    logOne("方法1参与成功")
                    开包数++;
                }else {
                    logOne("方法1参与失败切换方法2")
                    if (randomClick("一键参与获取福袋")) {
                        logOne("方法2参与成功")
                    }else {
                        logOne("方法2参与失败")
                    }
                }
            }else {
                randomClick("一键参与获取福袋")
                clickRandom(btnSeletor)
            }



            if (waitExistNode(text("查看福袋发放记录"),(timebe*60+timeaf+5)*1000)) {
                //   if (has(clz("android.webkit.WebView").index(0).depth(14).drawingOrder(0))) {
                var numtxt = getText(clz("android.view.View").index(0).depth(16).drawingOrder(0))
                if (numtxt=="恭喜你!") {
                    let num = parseInt(getText(clz("android.view.View").index(1).depth(16).drawingOrder(0)))
                    toast("中了"+num)
                    logOne(("恭喜你这个福袋中了"+num))
                    获得的钻石+=num;
                    中包数++;
                    back()
                }else {
                    toast("没中")
                    logOne("很可惜这个福袋没中")
                    back()
                }
                return true
                swipe()
            }else {
                toast("没中")
                logOne("很可惜这个福袋没中")
                back()
                return true
                swipe()
            }
        }

    }else {
        logOne("未检测到福袋")
        swipe()
    }

}


function getUrl() {
    while (true){
        if (cover()) {
         break
        }
        if (has(id("com.ss.android.liveplugin:id/live_dialog_top_block"))) {
            back()
        }
    }
}


function tet() {

    let i=0;
    while (true){
        sleep(5000)
        openBySchem("://xigua_live?room_id=6860723287736257294&orientation=0")
        sleep(3000)
        i++
        logOne("正在找福袋"+i)
        if ( findBag()) {
            logOne("找到了，等待")
            logOne("滑动")
        }else {
            logOne("找到了超时，开启计时")
/*                       insert(namecc,curl)
                      var t=setTimeout(function() {
                          logOne("开始"+namecc+"的计时")
                          gotoLiveByUrl(namecc)
                      },defalutTime*1000);*/
            logOne("滑动")

        }

        logOne(readConfigString("jobTaskTag"))
        if (readConfigString("jobTaskTag").length!=0) {
            let c = query(readConfigString("jobTaskTag"));
            if (c!=null) {

                openBySchem(c)
                del(readConfigString("jobTaskTag"))
            }else {
                continue
            }
        }


    }
}

function del(xxx) {
    var tableName="tbl_user";
    var sql="delete from "+tableName+" where name ="+"\'"+xxx+"\'"+";"
    var result = sqlite.delete(sql);
    logd("delete result："+ result);
}
function init() {
    let create = sqlite.connectOrCreateDb("chengzzz.db");
    let tableName="tbl_user";
    let columns=["name","url"];
    let createTable = sqlite.createTable(tableName,columns);
    if (create&&createTable) {
        logOne("数据库创建成功")
    }

/*    let win = new FloatUtil(ui.parseView("main2.xml"));



    win.setSize(300,500)
    win.setPosition(device.getScreenWidth(),device.getScreenHeight()/2-300)*/
    initlogfloat()
}
function autoServiceStart(time) {
    for (var i = 0; i < time; i++) {
        if (isServiceOk()) {
            return true;
        }
        var started = startEnv();
        logd("第" + (i + 1) + "次启动服务结果: " + started);
        if (isServiceOk()) {
            return true;
        }
    }
    return isServiceOk();
}

function initlogfloat() {

    var m =  {
        "x":0,
        "y":0,
        "w":700,
        "h":150,
        "textSize":13,
        "backgroundColor":"#000000",
        "title":"",
        "showTitle":false
    }
    setLogViewSizeEx(m);
    showLogWindow();

 sleep(1000)





}
main();
