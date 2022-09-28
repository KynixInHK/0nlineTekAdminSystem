<script setup>

</script>

<template>
    <div id="back">
        <a-scene>
          <a-sky src="/img/back_pixel.png" rotation="0 0 0" animation="property: rotation;from:0 30 0;to:0 50 0;easing:easeInOutBack;dur:10000;dir:alternate;loop:true"></a-sky>
          <a-entity rotation="0 40 0">
            <a-camera zoom="1.2"></a-camera>
          </a-entity>
        </a-scene>
        
        <div class="cover">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
    .cover {
        width: calc(100vw - 2rem);
        height: calc(100vh - 2rem);
        color: white;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.5);
        margin: 1rem;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .a-enter-vr {
        opacity: 0;
    }
</style>