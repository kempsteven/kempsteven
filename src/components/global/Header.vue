<template>
  <div class="header-container">
    <ul class="list-container">
      <li class="list-item">
        <div class="btn">
          <router-link to="/contact" :class="{ 'black' : this.$route.name != 'landingpage'}">
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

    .list-container{
      display: flex;
      justify-content: flex-end;
      list-style: none;
      cursor: pointer;
      font-size: 1.4vw;
      font-weight: 500;
      margin: 0;
      height: 100%;

      .list-item{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 2vw;
        font-size: 1vw;
        .btn{
          animation: shake 2s ease-in-out;
          height: 55%;
          width: 100%;
          padding: 0 1vw;
          transition: 0.7s;
          border-radius: 2px;
          &:hover{
            background: #517cc1;
          }
        }

        .black{
          color: $black;
          &:hover{
            color: white;
          }
        }

        a{
          text-decoration: none;
          color: $white;
          display: flex;
          height: 100%;
          width: 100%;
          align-items: center;
          transition: 0.7s;
          font-weight: 600;
        }
      }
    }
  }
</style>
