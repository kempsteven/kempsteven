<template>
    <div class="header-container">
        <ul class="list-container" v-if="!isInteracting">
            <li class="list-item">
                <div 
                    class="btn gl-flex-vhcenter" 
                    :class="{ 'black' : this.$route.name !== 'landing-page' && this.$route.name !== 'contact-us'}" 
                    @click="changeRoute()"
                >
                    {{ this.$route.name === 'contact-us' ? 'Home' : 'Contact Me!'  }}
                </div>
            </li>
        </ul>
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
    height: 6vw;
    z-index: 10;
    position: fixed;
    pointer-events: none;

    @include mobile {
        height: auto;
    }

    .list-container {
        display: flex;
        justify-content: flex-end;
        list-style: none;
        font-weight: 500;
        margin: 0;
        height: 100%;
        pointer-events: none;

        .list-item {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 2vw;
            font-size: 1.2vw;
            pointer-events: all;

            @include mobile {
                font-size: 14px;
                margin-right: 7px;
                margin-top: 7px;
            }

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
}
</style>
