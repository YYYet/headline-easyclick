function insert(name,url) {
    let tableName="tbl_user";
    let map={
        "name":name,
        "url":url
    };
    logOne(url.replace(/[^0-9]/ig,"").substring(0,19))
    let insert = sqlite.insert(tableName,map);
    if (insert) {
        logOne(name+"初始化成功")
    }else {
        logOne(name+"初始化失败")
    }

}
function query(name) {

    var tableName="tbl_user";
    var sql="select url from "+tableName+" where name ="+"\'"+name+"\'"+";"
    var data = sqlite.query(sql);
    logOne(data[0]['url'].replace(/[^0-9]/ig,"").substring(0,19))
    return data[0]['url']
}

function logOne(txt) {
clearLog(-1)
return loge("Cz助手:"+txt+"...")
}

function numToString(num,n){
    return parseInt(num*Math.pow(10,n)+0.5,10)/Math.pow(10,n);
}

function stopapp() {
    home()
    logOne("进入应用详情界面")
    openAppSetting("package:com.ss.android.article.news")
}

function clearapp() {
    home()

    sleep(1000)
    if (!openAppSetting("package:com.ss.android.article.news")) {
return
    }

//testRun()


    if (waitExistNode(text("强行停止"),10000)) {
        clickText("强行停止")
        logOne("强行停止应用")
        if (waitExistNode(id("android:id/button1"),3000)) {
            logOne("强行停止应用成功")
            clickText("确定")
            clickText("强行停止")
            sleep(1000)
            clickText("存储")
            logOne("进入清理缓存阶段")
            if (waitExistNode(text("删除数据"),6000)) {
                clickText("清空缓存")

                if (waitExistNode(id("android:id/button1"),6000)) {
                    clickText("确定")
                    logOne("清理缓存完成")
                    back()
                    sleep(500)
                    back()
                    clickText("强行停止")
                }
            }else {
                clearapp()
            }
        }else {
            sleep(1000)
            clickText("存储")
            logOne("进入清理缓存阶段")
            if (waitExistNode(text("删除数据"),6000)) {
                clickText("清空缓存")
                if (waitExistNode(id("android:id/button1"),6000)) {
                    clickText("确定")
                    logOne("清理缓存完成")
                    back()
                    sleep(500)
                    back()
                    clickText("强行停止")
                }
            }
        }

    }else {
        back()
        clearapp()
/*        clickText("存储")
        logOne("进入清理缓存阶段")
        if (waitExistNode(text("清空缓存"),6000)) {
            clickText("清空缓存")
            if (waitExistNode(id("android:id/button1"),6000)) {

                clickText("确定")
                logOne("清理缓存完成")
                back()
                sleep(500)
                back()
                clickText("强行停止")
            }
        }*/
    }
}