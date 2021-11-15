<template>
  <div v-if="mail">
    <div class="px-4 pt-3 roboto">
      <div class="media">
        <div class="mr-3 avatar border d-flex align-items-center justify-content-center">
          AB
        </div>
        <div class="media-body">
          <div class="title-3">
            <slot name="sender-name" class="title-4"></slot>
          </div>
          <div class="title-1">
            <slot name="sender-email" class="light"></slot>
          </div>
        </div>
      </div>
      <p class="title-4 mt-4">
        <slot name="mail-object"></slot>
      </p>
      <p class="title-3 light">
        <slot name="mail-content"></slot>
      </p>
    </div>
  </div>
  <div v-else class="h-100 bg-inf">
    <div class="row h-100">
      <div class="col d-flex flex-column align-items-center justify-content-center h-100">
        <img src="img/empty.png" alt="empty illustration" width="200" />
        <p class="lead">No email selected</p>
        <p class="px-5 text-center">
          Select a mail in the preview left pane and it's content will show up here.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MailView',
  data() {
    return {
      mail: false,
    };
  },
  methods: {
    update(value) {
      this.mail = value;
    },
  },
};
</script>

<style scoped>
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
