<template>
  <div id="landing-container" class="landing-container gl-flex-vhcenter">
        <div class="video-container gl-col-1">
            <div class="video-filter"></div>

            <div class="video-fallback" v-show="!isVideoLoaded">
                <div class="img-container">
                    <img :src="require('@/assets/img/coding.webp')" alt="Coding Image">
                </div>
            </div>

            <video
                loop
                muted
                playsinline
                oncontextmenu="return false;"
                @canplaythrough="videoHasBuffered()"
                class='video'
                ref="video"
                v-show="isVideoLoaded"
            >
                <source :src="require('@/assets/video/coding.mp4')" type="video/mp4" />
                <source :src="require('@/assets/video/coding.webm')" type="video/webm" />
            </video>
        </div>

        <div class="intro-text-container gl-flex-vhcenter">
            <div class="lottie-container">
                <lottie :options="defaultOptions" @animCreated="handleAnimation"/>
            </div>

            <div class="section gl-flex-vhcenter">Hello, Internet!</div>

            <div class="section gl-flex-vhcenter">My name is Kemp.</div>

            <div class="hr"></div>

            <div class="section desc gl-flex-vhcenter">
                An awesome Front end Web Developer that will surely get things done! 
            </div>

            <div class="section desc gl-flex-vhcenter">
                <button class="section-btn" @click="goToContactUs()">Hit me up</button> if you want to start a project!
            </div>

            <button id="btn" class="btn gl-button full-width" @click="start()">
                Get to know me!
            </button>
        </div>
  </div>
</template>

<script>
import Lottie from 'vue-lottie';
import * as animationData from '@/assets/animation/profile.json';
export default {
    name: 'LandingPage',

    components: {
        'lottie': Lottie
    },

    data () {
        return {
            defaultOptions: {animationData: animationData.default},
            isVideoLoaded: false
        }
    },

    activated () {
        this.playVideo()
    },

    methods:{
        playVideo () {
            this.$refs.video.play()
        },

        start () {
            this.$store.commit('changeRouteAnim', 'next')
            this.$router.push({name: 'personal-info'})
        },

        videoHasBuffered () {
            this.isVideoLoaded = true
            this.$refs.video.play()
        },

        handleAnimation (anim) {
            this.anim = anim;
            this.anim.setSpeed(1.2)    
        },

        goToContactUs () {
            this.$store.commit('changeRouteAnim', 'default')
            this.$router.push({name: 'contact-us'})
        }
    }
}
</script>

<style lang="scss" scoped>
.landing-container{
    width: 100%;
    min-height: 100vh;
    position: fixed;
    overflow: hidden;
    flex-direction: column;

    @include mobile {
        justify-content: flex-start;
    }
    
    .video-filter{
        background: rgba(0,0,0,0.1);
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    .lottie-container{
        z-index: 1;
        overflow: hidden;
        border-radius: 50%;
        height: 17vw;
        width: 17vw;
        padding-right: 0.45vw;
        position: absolute;
        top: -130%;

        @include mobile {
            height: 250px;
            width: 250px;
            padding: 0;
            top: -200px;
            padding-right: 25px;
        }
    }

    .video-container{
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        z-index: 1;
        opacity: 0;
        @include fadein(0.3s, 0);

        .video{
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            min-height: 50%;
            min-width: 50%;

            @include mobile {
                top: -9999px;
                bottom: -9999px;
                left: -9999px;
                right: -9850px;
            }
        }

        .video-fallback {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            // left: -700px; for mobile pref
            margin: auto;
            height: 50%;
            width: 50%;

            .img-container {
                position: relative;
                width: 100%;
                height: 100%;

                img {
                    position: absolute;
                    top: -9999px;
                    bottom: -9999px;
                    left: -9999px;
                    right: -9999px;
                    margin: auto;
                    height: 100%;
                    width: 100%;
                    min-width: 1920px;
                }
            }
        }
    }

    .intro-text-container{
        width: 50%;
        z-index: 3;
        color: $white;
        font-size: $header;
        font-weight: 600;
        text-align: center;
        position: relative;
        opacity: 0;
        @include fadeinfromtop(1s, 0);

        @include mobile {
           font-size: 32px;
           width: 90%;
           margin-top: 240px;
        }

        .hr{
            width: 80%;
            height: 0.1vw;
            background: $white;
            margin: 0.75vw;

            @include mobile {
                height: 1px;
                margin: 10px 5px;
            }
        }

        .section{
            height: 17%;
            width: 100%;

            @include mobile {
                height: auto;
            }

            &.desc{
                font-size: $big;

                @include mobile {
                    font-size: 15px;
                    text-transform: capitalize;
                    display: flex;
                    flex-direction: column;
                }
            }

            .section-btn {
                padding: 0.2vw 0.5vw;
                border-radius: 2px;
                border: 1px solid $white;
                color: $white;
                margin-right: 0.5vw;
                background: none;
                transition: 0.3s;
                cursor: pointer;
                outline: none;
                font-size: $big;

                @include mobile {
                    font-size: 15px;
                    padding: 5px;
                    width: 80%;
                    max-width: 215px;
                    margin: 7px 0;
                }

                &:hover {
                    border: 1px solid $blue;
                    background: $blue;
                }
            }
        }

        .btn{
            animation-duration: 1s;
            bottom: -40%;
            position: absolute;
            font-weight: 600;
            font-size: $big;
            user-select: none;

            @include mobile {
                font-size: 18px;
                font-weight: 400;
                padding: 10px 15px;
                bottom: -80px;
            }
        }
  
    }
  }
</style>
