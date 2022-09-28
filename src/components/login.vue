<script setup>
    import { isMap } from 'lodash';
    import { ref, reactive, onMounted } from 'vue'
    import { inject } from 'vue'
    const axios = inject('axios')

    // 窗口
    const close = ref('')
    const min = ref('')
    const max = ref('')
    
    const showIcon = (e) => {
        switch(e) {
            case 'close': close.value = '×';break
            case 'min': min.value = '~';break
            case 'max': max.value ='+';break
        }
    }

    const hideIcon = () => {
        close.value = ''
        min.value = ''
        max.value = ''
    }
    // 输入框
    const focus = (e) => {
        e.target.style.border = "3.5px rgba(50,108,217,0.5) solid"
    }
    const blur = (e) => {
        e.target.style.border = ""
    }

    // 放大缩小
    let isMax = ref(false)
    const maxWin = () => {
        let test = document.getElementsByClassName('test')[0].style
        let btns = document.getElementsByClassName('buttongroup')[0].style
        if(!isMax.value) {
            test.left='0'
            test.top='0'
            test.width='100vw'
            test.height='100vh'
            btns.width='calc(100vw - 1.5vw)'
            test.transition = 'width 0.3s ease,height 0.3s ease'
            btns.transition = 'width 0.3s ease'
            isMax.value = true
        } else {
            test.left='20vw'
            test.top='20vh'
            test.width='50vw'
            test.height='60vh'
            btns.width='calc(50vw - 1.5vw)'
            test.transition = 'width 0.3s ease,height 0.3s ease'
            btns.transition = 'width 0.3s ease'
            isMax.value = false
        }
    }

    // 登录
    let account = ref('')
    let password = ref('')
        // 变色
    const changeColor = (e) => {
        let element = e.target.style
        element.background = "-webkit-linear-gradient(#1568E5, #155CCC)"
        element.background = "-o-linear-gradient(#1568E5, #155CCC)"
        element.background = "-moz-linear-gradient(#1568E5, #155CCC)"
        element.background = "linear-gradient(#1568E5, #155CCC)"
    }
</script>

<template>
    <div class="test" v-drag>
        <div class="buttongroup">
            <div class="close" @mouseenter="showIcon(e='close')" @mouseleave="hideIcon" @click="$emit('close')">{{close}}</div>
            <div class="min" @mouseenter="showIcon(e='min')" @mouseleave="hideIcon" @click="$emit('min')">{{min}}</div>
            <div class="max" @mouseenter="showIcon(e='max')" @mouseleave="hideIcon" @click="maxWin">{{max}}</div>
            <span class="windowTitle">Login</span>
        </div>
        <img src="/img/app/finder.png" class="icon">
        <div class="boxTitle">Login</div>
        <div class="tip">Please login with your 0nlineTek ID and password.</div>
        <div class="box">
            <input type="text" placeholder="0nlineTek ID" @focus="focus" @blur="blur" v-model="account">
            <input type="password" placeholder="Password" @focus="focus" @blur="blur" v-model="password">
        </div>
        <div class="forget">I forget my password.</div>
        <div class="buttonbox">
            <div class="btn" id="loginBtn" @click="changeColor">Login</div>
            <div class="btn" id="celBtn">Cancel</div>
        </div>
    </div>
</template>

<style scoped>
    .test {
        width: 50vw;
        height: 60vh;
        background:rgba(255, 255, 255, 0.6);
        position: fixed;
        backdrop-filter: blur(10px);
        border-radius: 0.7vw;
        /* text-align: left; */
        z-index: 1000;
        box-shadow: 10px 10px 30px black;
    }
    .buttongroup {
        text-align: left;
        display: flex;
        flex-direction: row;
        padding-left: 1.5vw;
        padding-top: 0.5vw;
        padding-bottom: 0.2vw;
        background-color: white;
        border-top-left-radius: 0.7vw;
        border-top-right-radius: 0.7vw;
        width: calc(50vw - 1.5vw);
        border-bottom: 1.5px rgb(140, 140, 140) solid;
    }
    .buttongroup div {
        width: 1vw;
        height: 1vw;
        margin: 0.5vw;
        margin-right: 0.1vw;
        border-radius: 0.5vw;
        text-align: center;
        font-size: 0.8vw;
        line-height: 1vw;
        cursor: default;
    }
    .close {
        background-color: #EC6A5E;
    }
    .min {
        background-color: #F5BF4F;
    }
    .max {
        background-color: #61C554;
    }
    .windowTitle {
        color: black;
        margin: 0 auto;
        transform: translateX(-3.5vw);
        line-height: 2.4vw;
        height: 2.4vw;
        font-size: 1.3em;
        cursor: default;
    }
    .icon {
        width: 5vw;
        border-radius: 1vw;
        margin-top: 3vh;
    }
    .boxTitle {
        color: black;
        font-size: 2em;
        margin: 1vw;
    }
    .tip {
        color: rgb(99, 99, 99);
    }
    input {
        margin: 2vw;
        outline: none;
        border-radius: 6px;
        border: 3.5px rgba(99, 99, 99, 0) solid;
        height: 20px;
        padding-left: 0.3vw;
    }
    .buttonbox {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 30%;
        margin-right: 30%;
    }
    .btn {
        width: 84px;
        height: 25px;
        border-radius: 6px;
        cursor: pointer;
        border: rgba(0, 0, 0, 0.12) 0.5px solid;
    }
    #loginBtn {
        background: -webkit-linear-gradient(#4B91F7, #367AF6);
        background: -o-linear-gradient(#4B91F7, #367AF6);
        background: -moz-linear-gradient(#4B91F7, #367AF6);
        background: linear-gradient(#4B91F7, #367AF6);
    }
    #celBtn {
        background-color: #fff;
        color: black;
    }
    .forget {
        color: #0800ff;
        text-decoration: underline;
        margin-bottom: 2vw;
        cursor: pointer;
    }
</style>