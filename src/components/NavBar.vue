<template>
  <header class="py-3">
      <div class="container-xl d-flex align-items-center">
        <div class="col-2">
            <img id="logo" src="../assets/hc-logo.png" alt="Home Chef">
        </div>
        <nav class="col">
            <router-link class="nav-item me-2" :to="{name: 'Home'}">Home</router-link>
            <router-link class="nav-item" :to="{name: 'Home'}">About</router-link>
        </nav>
        <div>
            <p class="nav-item">sign in</p>
        </div>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#logo{
    width: 100%;
    max-width: 100px;
}

.nav-item{
    color: #fff;
}
</style>