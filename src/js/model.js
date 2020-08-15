
let namea;
let timeall;
let 获得的钻石=0;
let 开包数=0;
let 中包数=0;
let 关注数=0;
let 待开数=0;
let 视频数=0;
let arra = new Set();
let curl;
let defalutTime;

const timeout = 3
const waite = 2
const check = 1
const nobag = 0


function testRun() {
    openBySchem("://xigua_live?room_id=6860723287736257294&orientation=0")

    if (waitExistActivity("com.ss.android.live.host.livehostimpl.LivePlayerTransActivity",100000)) {

        var tid =thread.execAsync(function() {
            logOne("开启弹窗检测线程")
            while (true){
                checkAd()
                if(thread.isCancelled(tid)){
                    break;
                }
            }
        });

        while (true) {
            if (getRunningActivity()=="com.ss.android.live.host.livehostimpl.LivePlayerTransActivity") {
                视频数++
                toast("获得的钻石:"+获得的钻石+"\n" +
                    "中开比:" +中包数+"/"+开包数+"\n"+
                    "关注数:" +关注数+"\n"+
                    "待开数:"+待开数+"\n"+"视频数:"+视频数);
                sleep(2000)
               // logOne( "中开比:" +中包数+"/"+开包数+" 获得的钻石:"+获得的钻石)

                if ( !findBag()) {
                    swipe()
                      continue
                }else {

                    continue

                }
            }else {
                logOne("卡死返回")
                openBySchem("://xigua_live?room_id=6860723287736257294&orientation=0")

                continue
            }


        }
    }
}
function openbykasi() {
    clearapp()
    sleep(1000)
    openBySchem("://xigua_live?room_id=6860723287736257294&orientation=0")
    if (waitExistActivity("com.ss.android.live.host.livehostimpl.LivePlayerTransActivity",3000)) {
        openbykasi()
    }
}
function cover() {
    clearLog(-1)



 sleep(1000)
   // clz("android.widget.LinearLayout").index(0).depth(19).drawingOrder(1)
   // clickRandom( clz("android.widget.LinearLayout").index(0).depth(19).drawingOrder(1))

  //  var s =   clz("android.widget.ImageView").id("").clickable(false).index(0).depth(21).drawingOrder(1).getOneNodeInfo(2000);
    var ss =  id("com.ss.android.liveplugin:id/toolbar_container").index(1).depth(18).drawingOrder(1).getOneNodeInfo(10000)
    var sum = ss.child(0).allChildren().length;
    logOne(sum)
    if (sum==3) {
        logi("检测到底部3按钮")
        clickCenter(ss.child(0).child(1).bounds)
    }
    if (sum==4) {
        logi("检测到底部4按钮")
        clickCenter(ss.child(0).child(2).bounds)
    }
    if (sum==5) {
        logi("检测到底部5按钮")
        clickCenter(ss.child(0).child(3).bounds)
    }
  /*  if (s!=null) {
        logOne(s.bounds)

        if ( !clickRandomRect(s.bounds)) {
          clickRandom(id("com.ss.android.liveplugin:id/toolbar_container").child(1).child(3))
            logOne("方式2click更多")
        }
        logOne("方式1click更多")
    }*/
    // clickRandom(clz("android.widget.ImageView").index(0).depth(21).drawingOrder(1))
 //   if (waitExistNode(id("com.ss.android.liveplugin:id/more_dialog_title"),2000)) {

    if (waitExistNode(id("com.ss.android.liveplugin:id/bg_border"),3000)) {
   // if (waitExistNode(id("com.ss.android.liveplugin:id/bg_border"),2000)) {
        logOne("点击更多按钮成功")
        clickRandom(clz("android.widget.RelativeLayout").index(0).depth(10).drawingOrder(1))
        if (waitExistNode(clz("android.widget.TextView").index(1).depth(5).drawingOrder(2),3000)) {
            logOne("点击分享按钮成功")
            leftswip()

            return true
        }else {
            logOne("检测页面卡在左滑页面")
            getUrl()
            return false
        }
    }else {
        logOne("检测页面卡在更多页面")
        leftswip()
        randomClick("更多")
        getUrl()
        return false
    }


}

function readClip() {
    var r = utils.getClipboardText();
    logOne(r)
    if (r==null) {
        logi("剪贴板异常")
    }else {
        let curl2= unescape(r.split("sslocal")[1]);
        var namec =clz("android.widget.TextView").index(0).depth(23).drawingOrder(1).getOneNodeInfo(2000);
        var namecc
        logOne("==="+namec)
        if (null!=namec) {
            namecc=namec.text;

            if (undefined==namecc||"undefined"==namecc) {
                checktext()
            }
            try {
                logOne(namecc+"初始化")
                insert(namecc,curl2)
                var t=setTimeout(function() {
                    logOne("开始"+namecc+"的计时")
                    gotoLiveByUrl(namecc)
                },defalutTime*1000);
                swipe()
            }catch (e) {
                logw(e)
            }

        }else {
            logi("213123")
        }

    }

}

function leftswip() {
    if (waitExistNode(clz("android.widget.TextView").index(1).depth(5).drawingOrder(2),3000)) {

        var node = clz("androidx.recyclerview.widget.RecyclerView").index(0).depth(6).drawingOrder(3);
        let result2
        result2  =  scrollForward(node);
        if (result2) {
            logOne("左滑成功")
            if (waitExistNode(clz("android.widget.TextView").index(1).depth(8).drawingOrder(2),3000)) {
                if (!randomClick("复制链接")) {
                    logi("复制链接")
                    readClip()

                    if (clickRandom(clz("android.widget.TextView").index(1).depth(8).drawingOrder(2))) {
                        logOne("ID复制成功")
                        readClip()

                    }
                }


            }else {
                logi("0101")
                randomClick("取消")
                leftswip()
            }






        }else{
            logOne("启动v7包左滑方案")
            randomClick("取消")
            getUrl()

        }
    }

}


function openBySchem(url) {
    logOne("跳转至直播间")
   
    var listlink={
        "action":"android.intent.action.VIEW",
        "uri":"snssdk143"+url
    };

    utils.openActivity(listlink);
    sleep(4000)
}










function openApp() {
    if ( utils.openAppByName("今日头条")) {
        return true
    }else {
        openApp()
        return false
    }
}





/*
/!*动态修正计时器*!/
var startTime = new Date().getTime();
var count = 0;
*/

/*// 纠正误差
function fixed(startTime) {
    count++;
    // 延迟毫秒数
    var offset = new Date().getTime() - (startTime + count * 1000);
    // 下一次触发时间
    var nextTime = 1000 - offset;
    if (nextTime < 0) {
        nextTime = 0;
    }
    setTimeout(fixed, nextTime);

    console.log(offset)
}

setTimeout(fixed, 1000);*/


function gotoLiveByUrl(name) {
    sleep(2000)
    toast(name+"的时间到了")
    logOne(name+"的时间到了")
    待开数-=1;
    sleep(1000)
    logi(query(name));
    var listlink={
        "action":"android.intent.action.VIEW",
        "uri":"snssdk143"+query(name)
    };
    if ( utils.openActivity(listlink)) {
        if (waitExistNode(id("com.ss.android.liveplugin:id/follow"),6000)) {
            logOne("定时跳转->检测福袋")
        }else {
            logOne("跳转直播间超时")
            gotoLiveByUrl(name)
        }
    }else {
        logOne("跳转直播间失败")
        gotoLiveByUrl(name)
    }






}
function swipe() {
    var node = id(myInfo.videoViewPage).getOneNodeInfo(1000);
    let result2
    if (node==null) {
        swipe()
    }else {
        result2  = node.scrollForward();
    }
    if (result2) {
        toast("滚动成功");
        logOne("上滑成功")
    }else{
        toast("滚动失败");
        logOne("上滑失败")
    }
}





function randomClick(txt) {
    if (clickRandom(text(txt))) {
        return true
    }else {
        clickRandom(desc(txt))
        return true
    }
    return false
}

function checkAd() {


    if (getRunningActivity()=="com.ss.android.live.host.livehostimpl.LivePlayerTransActivity") {
        if (has(id("com.ss.android.liveplugin:id/follow").index(5).depth(4).drawingOrder(6))) {
            back()
        }
        if (has(text("立即赠送"))) {
            back()
        }
        if (has(id("com.ss.android.liveplugin:id/follow").index(0).depth(13).drawingOrder(3))) {
            back()
        }
        if (has(id("com.ss.android.liveplugin:id/ttlive_tv_end_label"))) {

            swipe()
        }
        if (has(id("com.ss.android.liveplugin:id/input_container"))) {
            back()
        }
/*        if (has(clz("android.widget.TextView").index(1).depth(5).drawingOrder(2))) {
 back()
        }*/
    }else {
        logOne("检测到页面卡死->返回")
        home()
        sleep(2000)
        openbykasi()
    }
}

function findBag() {
    clearLog(-1)

    logOne("正在检测福袋");
sleep(2000)
    let i = 0;
    thread.execSync(function() {
        if (has(id("com.ss.android.liveplugin:id/lottie_animation_view"))) {
            i++
            logw("检测耗时"+i+"秒")
            finBagImpl()
            return true
        }else {
            i++
            logw("检测耗时"+i+"秒")
            randomClick("取消")
            return false
        }
    },3000);


}
/*
    }else {
        toast("未检测到福袋")
        swipe()
        return  nobag
    }
*/





function checktext() {

    var r = utils.getClipboardText();
    logOne(r)
    if (r==null) {
        logi("剪贴板异常")
    }else {
        let curl2= unescape(r.split("sslocal")[1]);
        var namec =clz("android.widget.TextView").index(0).depth(23).drawingOrder(1).getOneNodeInfo(2000);
        var namecc
        logOne("==="+namec)
        if (null!=namec) {
            namecc=namec.text;

            if (undefined==namecc||"undefined"==namecc) {
                checktext()
            }
            try {
                logOne(namecc+"初始化")
                insert(namecc,curl2)
                var t=setTimeout(function() {
                    logOne("开始"+namecc+"的计时")
                    gotoLiveByUrl(namecc)
                },defalutTime*1000);
                swipe()
            }catch (e) {
                logw(e)
            }

        }else {
            logi("213123")
        }
        return true
    }
}
