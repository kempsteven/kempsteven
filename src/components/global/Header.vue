<template>
  <div class="header-container">
    <ul class="list-container">
      <li class="list-item">
        <div class="btn gl-flex-vhcenter" :class="{ 'black' : this.$route.name != 'landingpage'}">
          <router-link to="/contact">
            Contact Me !       
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header-nav'
}
</script>

<style lang="scss" scoped>
  .header-container{
    width: 100%;
    height: 6vw;
    z-index: 10;
    position: fixed;
    pointer-events: none;
    .list-container{
      display: flex;
      justify-content: flex-end;
      list-style: none;
      font-size: 1.4vw;
      font-weight: 500;
      margin: 0;
      height: 100%;
      pointer-events: none;

      .list-item{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 2vw;
        font-size: 1vw;
        pointer-events: all;
        .btn{
          cursor: pointer;
          animation: shake 2s ease-in-out;
          width: 100%;
          padding: 0.75vw 1vw;
          transition: 0.3s;
          border-radius: 2px;
          border: 1px solid white;
          box-shadow: none;
          a{
            display: block;
            height: auto;
          }
          &:hover{
            background: $blue;
            box-shadow: none;
          }
        }

        .black{
          color: $black;
          border: 1px solid $black;
          box-shadow: 2px 2px 10px #888888;
          transition: 0.3s;
          a{
            color: $black;
          }
          &:hover{
            a{
              color: white;
            }
          }
        }

        a{
          text-decoration: none;
          color: $white;
          display: flex;
          height: 100%;
          width: 100%;
          align-items: center;
          transition: 0.3s;
        }
      }
    }
  }
</style>
