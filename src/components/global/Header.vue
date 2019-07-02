<template>
    <div class="header-container">
        <div class="btn-container" v-if="!isInteracting">
            <div 
                class="btn gl-flex-vhcenter" 
                :class="{ 'black' : this.$route.name !== 'landing-page' && this.$route.name !== 'contact-us'}" 
                @click="changeRoute()"
            >
                {{ this.$route.name === 'contact-us' ? 'Home' : 'Contact Me!'  }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'header-nav',

    computed: {
        ...mapGetters({
            isInteracting: 'getIsInteracting'
        })
    },

    methods: {
        changeRoute () {
            this.$store.commit('changeRouteAnim', 'default')

            if (this.$route.name !== 'contact-us') {
                this.$router.push({name: 'contact-us'})
            } else {
                this.$router.push({name: 'personal-info'})
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header-container {
    width: 100%;
    height: 4.5vw;
    position: fixed;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1vw;
    z-index: 1;

    @include mobile {
        height: 60px;
        padding-right: 10px;
    }
    
    .btn-container {
        display: flex;
        align-items: center;

        .btn {
            cursor: pointer;
            width: 100%;
            padding: 0.75vw 1vw;
            transition: 0.3s;
            border-radius: 2px;
            border: 2px solid white;
            box-shadow: none;
            background: none;
            color: $white;
            opacity: 0;
            pointer-events: all;
            @include smalltobig(0.75s, 0.3s);

            @include mobile {
                padding: 10px 10px;
            }

            &:hover {
                border: 2px solid $blue;
                background: $blue;
                box-shadow: none;
            }
        }

        .black {
            color: $black;
            border: 1px solid $black;
            box-shadow: 2px 2px 10px #888888;
            transition: 0.3s;
            color: $black;

            &:hover {
                color: white;
            }
        }
    }
}
</style>
