<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="img/logo.png" />
        <span class="ml-3">
        EbenMail
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">Compose mail</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">Refresh</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/settings" class="nav-link">Settings</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">Help</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a target="_blank" rel="noopener" class="nav-link" href="https://github.com/ebenjs"
              ><i class="fa fa-github"></i> GitHub</a
            >
          </li>
          <li class="nav-item">
            <a target="_blank" rel="noopener" class="nav-link" href="https://twitter.com/eben_js"
              ><i class="fa fa-twitter"></i> Twitter</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.navbar-brand img{
  height: 30px;
  transform: scale(2);
}
</style>
