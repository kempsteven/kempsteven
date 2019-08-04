<template>
    <div class="loading-container">
        <Lottie
            class="lottie"
            :options="defaultOptions"
            @animCreated="handleAnimation"
        />
    </div>
</template>

<script>
import * as animationData from '@/assets/animation/loading.json'
import Lottie from 'vue-lottie'

export default {
    data() {
        return {
            defaultOptions: {animationData: animationData.default},
        }
    },

    methods: {
        handleAnimation (anim) {
			this.anim = anim;
			this.anim.setSpeed(1.7)    
		}
    },

    components: {
        Lottie,
    },
}
</script>

<style lang="scss" scoped>
.loading-container{
    width: 20%;
    height: 100%;
    background: #f2f2f2;
    padding: 1vw;
    opacity: 0;
    margin: 5vw auto 0 auto;
    @include fadein(0.75s, 0.8s);
    border: 1px solid $black;
    border-radius: 50%;
    overflow: hidden;

    .lottie {
        height: 100%;
    }

    @include mobile {
        width: 60%;
        margin: 0 auto;
    }
}
</style>