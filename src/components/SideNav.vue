<template>
  <div class="card h-100">
    <div class="card-body">
        <slot name="sidenav-menu"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
};
</script>

<style scoped>
.btn-rounded {
  border-radius: 20px;
}
</style>
