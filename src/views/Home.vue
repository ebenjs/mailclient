<template>
  <div class="container" id="content">
    <div class="row no-gutters">
      <div class="col-lg-3">
        <side-nav>
          <template v-slot:sidenav-menu>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex align-items-center">
                <span class="material-icons mr-3">
                  inbox
                </span>
                Inbox
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="material-icons mr-3">
                  star
                </span>
                Starred
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="material-icons mr-3">
                  send
                </span>
                Sent
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="material-icons mr-3">
                  description
                </span>
                Draft
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="material-icons mr-3">
                  archive
                </span>
                Archived
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="material-icons mr-3">
                  delete
                </span>
                Trash
              </li>
            </ul>
          </template>
        </side-nav>
      </div>
      <div class="col-lg-4" id="preview-zone">
        <mail-preview
          v-for="(inmail, index) in inmails"
          :key="index"
          :pdata="inmail"
          @inmail-preview-click="setCurrentImail"
        ></mail-preview>
      </div>
      <div class="col-lg-5 card-border">
        <mail-view ref="mailViewComponent">
          <template v-slot:sender-email>
            {{ currentSelectedInMail.from }}
          </template>
          <template v-slot:sender-name>
            {{ currentSelectedInMail.from }}
          </template>
          <template v-slot:mail-object>
            <p>{{ currentSelectedInMail.subject }}</p>
          </template>
          <template v-slot:mail-content>
            <p>{{ currentSelectedInMail.content }}</p>
          </template>
        </mail-view>
      </div>
    </div>
  </div>
</template>
<script>
import MailPreview from '../components/MailPreview.vue';
import MailView from '../components/MailView.vue';
import SideNav from '../components/SideNav.vue';

const axios = require('axios');

export default {
  components: { SideNav, MailPreview, MailView },
  methods: {
    setCurrentImail(el) {
      this.currentSelectedInMail = el;
      this.$refs.mailViewComponent.update(true);
    },
    updateView(el) {
      console.log('Called2', el);
      // this.$refs.mailViewComponent.update(true);
    },
    setMargin(index) {
      return index > 2 ? 'mt-4' : '';
    },
    setHeight() {
      const screenSize = window.screen.availHeight;
      console.log(screenSize);
      const mainPercent = 89;
      const subPercent = 80;
      document.getElementById('app').style.height = `${(screenSize * mainPercent) / 100}px`;
      document.getElementById('content').style.height = `${(screenSize * subPercent) / 100}px`;
      document.getElementById('preview-zone').style.height = `${(screenSize * subPercent) / 100}px`;
    },
  },
  data() {
    return {
      inmails: null,
      currentSelectedInMail: null,
    };
  },
  mounted() {
    this.setHeight();
    axios
      .post('http://127.0.0.1:8080/api/inmails', {
        host: 'imap.gmail.com',
        port: 993,
        username: 'nikaboue10@gmail.com',
        password: 'ismyknzuqobanapq',
        limit: 5,
      })
      .then((response) => {
        console.log('test');
        console.log('response', response.data);
        this.inmails = response.data;
        [this.currentSelectedInMail] = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>
#content {
  overflow: hidden;
}
#preview-zone {
  overflow: auto;
}
.card-border {
  border: 1px solid #eeeeee;
}
</style>
