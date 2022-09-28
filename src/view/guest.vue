<script setup>
    import { transform } from 'lodash';
import { ref, reactive, onMounted } from 'vue'
    import login from './../components/login.vue'
    components: {
        login
    }

    // 时间
    const getTime = () => {
        var date = new Date()
        var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        return hour + ': ' + minute + ': ' + seconds
    }
    const currentTime = ref('')

    // 捷径
    const goToShortcuts = (id) => {
        // console.log(id)
        switch(id) {
            case 'official': window.open('https://www.sdu.edu.cn/');break
            case 'stuonline': window.open('https://www.online.sdu.edu.cn/');break
            case 'bksy': window.open('https://www.bkjx.sdu.edu.cn/');break
            case 'youth': window.open('http://www.youth.sdu.edu.cn/');break
            case 'service': window.open('https://service.sdu.edu.cn/');break
            case 'payment': window.open('https://pay.sdu.edu.cn/');break
            case 'mail': window.open('http://mail.sdu.edu.cn/');break
            case 'carsi': window.open('https://idp.sdu.edu.cn/carsi/');break
        }
    }

    // 出现隐藏
    let loginPanel = ref(false)

    // 图标缩放
    const scaleUp = (e) => {
        e.target.style.transform = 'scale(0.8)'
        e.target.style.transition = 'transform 0.2s linear'
    }
    
    const scaleDown = (e) => {
        e.target.style.transform = 'scale(1)'
        e.target.style.transition = 'transform 0.2s linear'
    }

    // 打开窗口
    const openWindow = (id) => {
        if(window.screen.width >= 1175) {
            loginPanel.value = true
        }
    }

    // 窗口三点
    const close = (e) => {
        loginPanel.value = false
    }

    const min = (e) => {
        loginPanel.value = false
    }

    // 生命周期钩子
    onMounted(() => {
        setInterval(function() {
            currentTime.value = getTime()
        }, 1000)
    })
</script>

<template>
    <transition name="jump">
        <login v-if="loginPanel" @close="close" @min="min"></login>
    </transition>
    <div id="guest">
        <div class="left">
            <div class="title">Notifacations</div>
            <div class="contents">
                <ul>
                    <li>Please login with your 0nlineTek ID.</li>
                </ul>
            </div>
        </div>
        <div class="right">
            <div class="top">
                <div class="rightTitle">Workspace</div>
                <div class="workspace">
                    <ul>
                        <li>
                            <img src="/img/app/finder.png" @mouseenter="scaleUp" @mouseleave="scaleDown" @click="openWindow(id='account')">
                            <div class="name">Account</div>
                        </li>
                        <li>
                            <img src="/img/app/setting.png" @mouseenter="scaleUp" @mouseleave="scaleDown" @click="openWindow(id='settings')">
                            <div class="name">Settings</div>
                        </li>
                        <li>
                            <img src="/img/app/mail.png" @mouseenter="scaleUp" @mouseleave="scaleDown" @click="openWindow(id='mail')">
                            <div class="name">Mail</div>
                        </li>
                        <li>
                            <img src="/img/app/notes.png" @mouseenter="scaleUp" @mouseleave="scaleDown" @click="openWindow(id='notes')">
                            <div class="name">Notes</div>
                        </li>
                        <li>
                            <img src="/img/app/pages.png" @mouseenter="scaleUp" @mouseleave="scaleDown" @click="openWindow(id='homework')">
                            <div class="name">Homework</div>
                        </li>
                        <li>
                            <img src="/img/app/todo.png" @mouseenter="scaleUp" @mouseleave="scaleDown" @click="openWindow(id='todo')">
                            <div class="name">To Do</div>
                        </li>
                        <li>
                            <img src="/img/app/feedback.png" @mouseenter="scaleUp" @mouseleave="scaleDown" @click="openWindow(id='feedback')">
                            <div class="name">Feedback</div>
                        </li>
                        <li>
                            <img src="/img/app/terminal.png" @mouseenter="scaleUp" @mouseleave="scaleDown" @click="openWindow(id='webssh')">
                            <div class="name">Web SSH</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bottom">
                <div class="bo_left">
                    <div>{{currentTime}}</div>
                </div>
                <div class="bo_right">
                    <div class="bottomTitle">Shortcuts</div>
                    <div class="shortcuts">
                        <ul>
                            <li class="shortcut">
                                <el-button size="large" class="shortcutEl" data-id="official" @click="goToShortcuts(id='official')">山东大学官方网站</el-button>
                            </li>
                            <li class="shortcut">
                                <el-button size="large" class="shortcutEl" data-id="stuonline" @click="goToShortcuts(id='stuonline')">山东大学学生在线</el-button>
                            </li>
                            <li class="shortcut">
                                <el-button size="large" class="shortcutEl" data-id="bksy" @click="goToShortcuts(id='bksy')">山东大学本科生院</el-button>
                            </li>
                            <li class="shortcut">
                                <el-button size="large" class="shortcutEl" data-id="youth" @click="goToShortcuts(id='youth')">山东大学青春山大</el-button>
                            </li>
                            <li class="shortcut">
                                <el-button size="large" class="shortcutEl" data-id="service" @click="goToShortcuts(id='service')">山东大学服务大厅</el-button>
                            </li>
                            <li class="shortcut">
                                <el-button size="large" class="shortcutEl" data-id="payment" @click="goToShortcuts(id='payment')">山东大学缴费平台</el-button>
                            </li>
                            <li class="shortcut">
                                <el-button size="large" class="shortcutEl" data-id="mail" @click="goToShortcuts(id='mail')">山东大学山大云邮</el-button>
                            </li>
                            <li class="shortcut">
                                <el-button size="large" class="shortcutEl" data-id="carsi" @click="goToShortcuts(id='carsi')">山东大学资源聚合</el-button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #guest {
        width: 100%;
        height: 100%;
        /* background-color: aliceblue; */
        border-radius: 10px;
        display: grid;
        grid-template-columns: 30vw auto;
    }
    .left {
        margin: 1vw;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
    }
    .right {
        display: grid;
        grid-template-rows: 50% auto;
    }
    .top {
        margin: 1vw;
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
        display: grid;
        grid-template-rows: 4em auto;
    }
    .bottom {
        margin: 1vw;
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
        display: grid;
        grid-template-columns: auto auto;
    }
    .title {
        /* position: absolute;
        left: 3vw;
        top: 5vh; */
        text-align: left;
        margin-left: 3vw;
        margin-top: 5vh;
        font-size: 2em;
        line-height: 2em;
        border-left: 10px white solid;
        padding-left: 1vw;
        font-weight: bolder;
    }

    .contents {
        /* position: absolute; */
        /* left: 3vw; */
        /* top: 12vh; */
        width: 27vw;
        text-align: left;
    }
    .contents li {
        list-style: none;
        font-size: 1.5em;
        line-height: 1.5em;
    }
    .rightTitle {
        /* background-color: rgba(0, 0, 0, 0.5); */
        margin: 1vw;
        font-size: 2em;
        font-weight: bolder;
    }
    .workspace ul {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto auto;
        padding-left: 0;
    }
    .workspace ul li {
        list-style: none;
        margin: 1.3em;
    }
    .workspace ul li img {
        width: 5vw;
        border-radius: 1vw;
        cursor: pointer;
    }
    .bo_left {
        font-size: 3vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bo_left div {
        line-height: 4em;
    }
    .bo_right {
        text-align: center;
    }
    .bottomTitle {
        font-size: 1.7em;
        margin: 4vh;
    }
    .shortcuts {
        height: calc(100% - 2vh - 1rem - 1.7em);
    }
    .shortcuts ul {
        padding-left: 0;
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto auto;
        height: 100%;
    }
    .shortcuts ul li {
        list-style: none;
    }
    .shortcut /deep/ .shortcutEl {
        /* width: 10vw; */
        height: 4em;
        border-radius: 15px;
    }
    .jump-enter-active,
    .jump-leave-active {
        transition: all 0.2s ease;
    }

    .jump-enter-from,
    .jump-leave-to {
        transform: scale(0.85);
        opacity: 0;
    }
    @media screen and (max-width: 1175px) {
        #guest {
            width: 100%;
            height: 100%;
            /* background-color: aliceblue; */
            border-radius: 10px;
            display: grid;
            grid-template-rows: auto auto auto;
            grid-template-columns: auto;
            overflow: auto;
        }
        .contents {
            /* position: absolute; */
            /* left: 3vw; */
            /* top: 12vh; */
            width: 80vw;
            text-align: left;
        }

        .workspace {
            overflow: auto;
        }

        .rightTitle {
            /* background-color: rgba(0, 0, 0, 0.5); */
            margin: 2rem;
            font-size: 2em;
            font-weight: bolder;
        }

        .workspace ul {
            display: grid;
            grid-template-columns: auto auto auto auto;
            grid-template-rows: auto auto;
        }
        .workspace ul li {
            list-style: none;
            margin: 1.0em;
        }
        .workspace ul li img {
            width: 95px;
            border-radius: 15px;
        }
    }

    @media screen and (max-width: 785px) {
        .bottom {
            display: grid;
            grid-template-columns: auto;
        }
        .bo_left {
            position: fixed;
            right: 8vw;
            top: 3vw;
        }
        .workspace ul li img {
            width: 100px;
            border-radius: 15px;
        }
    }

    @media screen and (max-width: 700px) {
        .bottom {
            overflow: auto;
        }
        .shortcuts ul {
            padding-left: 0;
            display: grid;
            grid-template-columns: auto auto;
            /* grid-template-rows: auto auto; */
            height: 100%;
        }
        .workspace ul li {
            margin: 0;
            margin-bottom: 30px;
        }
        .workspace ul li img {
            width: 80px;
            border-radius: 15px;
        }
    }
</style>