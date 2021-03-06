<template>
    <div class="profile-container gl-flex-vhcenter" :class="{ 'contact-us' : $route.name === 'contact-us'}">

        <vue-particles
            :key="activeParticle"
            :color="particleOption[activeParticle].color"
            :particleOpacity="particleOption[activeParticle].particleOpacity"
            :particlesNumber="particleOption[activeParticle].particlesNumber"
            shapeType="circle"
            :particleSize="particleOption[activeParticle].particleSize"
            :linesColor="particleOption[activeParticle].linesColor"
            :linesWidth="0.5"
            :lineLinked="particleOption[activeParticle].lineLinked"
            :lineOpacity="0.4"
            :linesDistance="particleOption[activeParticle].linesDistance"
            :moveSpeed="particleOption[activeParticle].moveSpeed"
            :hoverEffect="particleOption[activeParticle].hoverEffect"
            hoverMode="bubble"
            :clickEffect="true"
            clickMode="repulse"
            :class="{ 'set-pointer' : isInteracting}"
            ref="particle"
        />

        <ProfileNavigation/>

        <div class="profile-wrapper" :class="isInteracting ? 'disappear' : 'appear'">
            <transition :name="routerAnim">
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </transition>
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Profile',

    data () {
        return {
            particleOption: {
                profile: {
                    color: '#282828',
                    particleOpacity: 0.7,
                    particlesNumber: 47,
                    particleSize: 0,
                    linesColor: '#282828',
                    lineLinked: true,
                    linesDistance: 300,
                    moveSpeed: 3,
                    hoverEffect: false
                },

                contact: {
                    color: '#ffffff',
                    particleOpacity: 1,
                    particlesNumber: 90,
                    particleSize: 4,
                    linesColor: '#ffffff',
                    lineLinked: false,
                    linesDistance: 100,
                    moveSpeed: 0.5,
                    hoverEffect: true
                }
            },
        }
    },

    components: {
        ProfileNavigation: () => import('@/components/profile/ProfileNavigation')
    },

    watch: {
        '$route.name' (val) {
            if (val !== 'contact-us' && this.activeParticle !== 'profile') {
                this.$store.commit('toggleParticle', 'profile')
            }
        }
    },

    beforeCreate () {
        this.$store.commit('toggleParticle', 'profile')
    },

    computed: {
        ...mapGetters({
            routerAnim: 'getRouteAnim',
            isInteracting: 'getIsInteracting',
            activeParticle: 'getActiveParticle'
        })
    },
}
</script>

<style lang="scss" scoped>
    .profile-container {
        background: $background;
        width: 100%;
        min-height: 100vh;
        position: fixed;
        overflow: hidden;
        flex-direction: column;
        transition: 0.3s;

        &.contact-us {
            background: #232741;
        }

        @include mobile {
            overflow: auto;
        }
    }

    .video-filter {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        pointer-events: none;
    }

    #particles-js {
        width: 100%;
        height: 100%;
        pointer-events: none;

        &.set-pointer {
            pointer-events: all;
        }
    }

    .profile-wrapper {
        width: 65%;
        height: 100%;
        position: absolute;
        z-index: 2;

        @include mobile {
            width: 100%;
        }
    }

    .appear {
        animation: appear 0.5s ease-in-out;
        animation-fill-mode: forwards; 
        pointer-events: none;
    }

    .disappear {
        opacity: 1;
        pointer-events: none;
        animation: disappear 0.5s ease-in-out;
        animation-fill-mode: forwards;
    }


</style>
