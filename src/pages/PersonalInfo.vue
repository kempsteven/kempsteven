<template>
    <div class="personal-container gl-flex-vhcenter">
        <div class="info-container gl-flex-vhcenter">

            <div class="left">
                <div class="image-container gl-flex-vhcenter appear">
                    <img id="picture" :src="require('@/assets/img/picture.webp')" alt="profile picture" :class="{ 'appear' :imgHasloaded}" v-show="imgHasloaded">

                    <div class="lottie-container" v-if="!imgHasloaded">
                      <lottie class="lottie" :options="defaultOptions" @animCreated="handleAnimation" />
                    </div>
          
                </div>
            </div>

            <div class="right gl-flex">
                <div class="section appear">Hello, I am </div>

                <div class="section name">Kemp Steven!</div>

                <div class="section has-child gl-flex">
                    <div class="label appear gl-flex-vhcenter">A</div>
                    <div class="label gl-flex-vhcenter job">Front End Developer,</div>
                </div>

                <div class="section has-child gl-flex">
                    <div class="label appear gl-flex-vhcenter">Based on</div>
                    <div class="label gl-flex-vhcenter job">Manila, Philippines</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Lottie from 'vue-lottie';
import * as animationData from '@/assets/animation/loading.json';
export default {
    name: 'PersonalInfo',

    components: {
        'lottie': Lottie
    },

    data () {
        return {
            defaultOptions: {animationData: animationData.default},
            imgHasloaded: false
        }
    },

    activated(){
        this.imageHandler()
    },

    methods:{
        imageHandler(){
            var image = document.getElementById('picture')

            image.onload = () => {
                this.imgHasloaded = true
            }
        },

        handleAnimation(anim) {
            this.anim = anim;
            this.anim.setSpeed(1.7)    
        },
    }
}
</script>

<style lang="scss" scoped>
.personal-container{
    width: 100%;
    height: 100%;
    position: absolute;
}

.info-container{
    width: 80%;
    height: 100%;
    user-select: none;

    .left{
        width: 35%;
        height: 17.5vw;

        .image-container{
            width: 100%;
            height: 100%;
            overflow: hidden;
            border: 1px solid $black;
            border-radius: 50%;
            box-shadow: 2px 2px 10px #888888;
            opacity: 0;
            @include fadein(0.75s, 0.8s); 

            img{
                opacity: 0;
                width: auto;
                height: 100%;
            }
        }
    }

    .right{
        width: 65%;
        padding-left: 4vw;
        flex-direction: column;
    
        .section{
            color: $black;
            font-weight: 600;
            font-size: $header;
            width: 100%;
            text-align: left;
            opacity: 0;
    
            &.name{
                font-size: 3.5vw;
                color: $blue;
                margin-bottom: 1vw;
                @include fadeinfromtop(0.75s, 0.75s)
            }
    
            &.has-child{
                opacity: 1;
            }
    
            .label{
                font-size: 1.5vw;
                opacity: 0;
    
                &.job{
                    margin-left: 0.5vw; 
                    color: $blue;
                    font-size: 2vw;
                    @include fadeinfromtop(0.75s, 0.75s)
                }
            }
        }
    }

    .lottie-container{
        width: 100%;
        height: 100%;
        background: #f2f2f2;
        padding: 3vw;
        opacity: 0;
        @include fadein(0.75s, 0.8s);
    }

    .appear{
        @include fadein(0.75s, 0.8s); 
    }
}


</style>
