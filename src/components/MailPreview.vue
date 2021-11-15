<template>
  <div class="list-group">
    <div
      @click="this.$emit('inmailPreviewClick', inmail)"
      class="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1 bold">{{ inmail.subject }}</h5>
        <small>3 days ago</small>
      </div>
      <p class="mb-1">
        {{ truncate(inmail.content, 100, '...') }}
      </p>
      <small>Donec id elit non mi porta.</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MailPreview',
  data() {
    return {
      inmail: this.pdata,
    };
  },
  methods: {
    truncate(text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      }
      return text;
    },
  },
  props: ['pdata'],
};
</script>
