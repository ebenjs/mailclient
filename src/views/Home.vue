<template>
  <div class="container" id="content">
    <!-- Modal -->
    <div
      class="modal fade"
      id="composeMailModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Compose new mail</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <span class="fas fa-envelope"></span>
                    </span>
                  </div>
                  <input type="email" placeholder="Recipient" class="form-control" />
                </div>
                <small id="emailHelp" class="form-text text-muted"
                  >The recipient's email address.</small
                >
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <span class="fas fa-users"></span>
                    </span>
                  </div>
                  <input type="email" placeholder="Cc" class="form-control" />
                </div>
                <small id="emailHelp" class="form-text text-muted"
                  >The addresses you want to follow the email.</small
                >
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <span class="fas fa-bullseye"></span>
                    </span>
                  </div>
                  <input type="text" placeholder="Object" class="form-control" />
                </div>
                <small id="emailHelp" class="form-text text-muted"
                  >Mail object or title.</small
                >
              </div>

              <div class="form-group">
                <textarea class="form-control" rows="3" placeholder="Mail content"></textarea>
                <small id="emailHelp" class="form-text text-muted"
                  >Your mail content goes here.</small
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">
              <span class="fas fa-paper-plane"></span>
              Send email
            </button>
          </div>
        </div>
      </div>
    </div>

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
          :class="active(index)"
          @inmail-preview-click="setCurrentImail(inmail, index)"
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
  <button type="button" data-toggle="modal" data-target="#composeMailModal" class="newMailButton">
    <span class="fas fa-plus"></span>
  </button>
</template>

<script>
import axios from 'axios';
import MailPreview from '../components/MailPreview.vue';
import MailView from '../components/MailView.vue';
import SideNav from '../components/SideNav.vue';

export default {
  components: {
    SideNav,
    MailPreview,
    MailView,
  },
  methods: {
    setCurrentImail(el, index) {
      this.currentSelectedInMail = el;
      this.$refs.mailViewComponent.update(true);
      this.selectedIndex = index;
    },
    active(index) {
      return this.selectedIndex === index ? 'mailActive' : '';
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
      showModal: false,
      inmails: null,
      currentSelectedInMail: null,
      selectedIndex: null,
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
.newMailButton {
  border: solid 1px rgba(0, 0, 0, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d9230f;
  color: #fff;
  position: absolute;
  right: 10%;
  bottom: 50px;
}
.mailActive {
  background-color: #ffbcaf;
  color: #333;
}
</style>
