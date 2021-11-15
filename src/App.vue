<template>
  <nav-bar></nav-bar>
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>

<style>
body {
  overflow: hidden;
}
#app {
  overflow: hidden;
}
.andara {
  font-family: 'Andada Pro', serif !important;
}
.roboto {
  font-family: 'Roboto', sans-serif !important;
}
.bold {
  font-weight: bold;
}
.bolder {
  font-weight: bolder;
}
.light {
  font-weight: 300;
}
.sticky {
  position: sticky;
  top: 0px;
  z-index: 1;
}
.list-group-item{
  cursor: pointer;
}
.title-1 {
  font-size: 12px;
}
.title-2 {
  font-size: 14px;
}
.title-3 {
  font-size: 17px;
}
.title-4 {
  font-size: 21px;
}
.title-5 {
  font-size: 25px;
}
.title-6 {
  font-size: 30px;
}

</style>
