<script setup>
    import { useRoute, useRouter } from 'vue-router';
    const route = useRoute()
    const router = useRouter()
    const start = () => {
        router.push('/guest')
    }
</script>

<template>
    <div id="main">
        <div id="welcome">Welcome to Web Development Department!</div>
        <div id="elementuis_main">
            <el-button size="large" type="primary" @click="start">Getting Started</el-button>
        </div>
    </div>
</template>

<style scoped>
    #welcome {
        color: white;
        font-size: 3em;
        line-height: 1.5em;
    }
    #elementuis_main {
        font-size: 2em;
        margin-top: 2em;
    }
</style>