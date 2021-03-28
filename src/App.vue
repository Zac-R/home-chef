<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  components: { NavBar }
}
</script>


<style lang="scss">
@import './assets/styles/custom.scss';


</style>
