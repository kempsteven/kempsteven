<template>
  <div class="header-container">
    <ul class="list-container">
      <li class="list-item">
        <router-link to="/home">
          Home          
        </router-link>
      </li>
      
      <li class="list-item">
        <router-link to="/about">
          About Me        
        </router-link>
      </li>

      <li class="list-item">
        <router-link to="/contact">
          Contact Me       
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .header-container{
    width: 100%;
    height: 5vw;
    padding: 4vw 1vw;
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
        a{
          text-decoration: none;
          color: $dark-white;
          display: flex;
          height: 100%;
          width: 100%;
          align-items: center;
          transition: 0.7s;

          &:hover{
            text-shadow: 1px 2px 5px rgb(255, 255, 255);
            color: $white;
          }
        }
      }
    }
  }
</style>
