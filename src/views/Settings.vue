<template>
  <div class="container" id="content">
    <div class="row no-gutters">
      <div class="col-lg-3">
        <side-nav>
          <template v-slot:sidenav-menu>
            <ul class="list-group list-group-flush">
              <li
                @click="setActive('account')"
                :class="'list-group-item d-flex align-items-center ' + isActive('account')"
              >
                <span class="material-icons mr-3">
                  account_circle
                </span>
                Account settings
              </li>
              <li
                @click="setActive('appearence')"
                :class="'list-group-item d-flex align-items-center ' + isActive('appearence')"
              >
                <span class="material-icons mr-3">
                  dark_mode
                </span>
                Appearence
              </li>
            </ul>
          </template>
        </side-nav>
      </div>
      <div class="col-lg-9 card-border bg-white">
        <div :class="'p-4 ' + show('account')">
          <p class="title-4">
            Account settings
            {{ accountSettings }}
          </p>
          <hr />
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                v-model="account.email"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                v-model="account.password"
              />
            </div>
            <div class="form-group">
              <label for="host">IMAP Host</label>
              <input
                type="text"
                class="form-control"
                id="host"
                placeholder="imap.gmail.com"
                v-model="account.host"
              />
            </div>
            <div class="form-group">
              <label for="port">IMAP Port</label>
              <input
                type="text"
                class="form-control"
                id="port"
                placeholder="993"
                v-model="account.port"
              />
            </div>

            <div class="form-group">
              <div class="form-check d-flex align-items-center">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="ssl"
                  v-model="account.ssl"
                />
                <label class="form-check-label mt-1" for="ssl">
                  Use SSL
                </label>
              </div>
            </div>

            <button type="button" class="btn btn-primary" @click="saveSettings">
              Save settings
            </button>
          </form>
        </div>
        <div :class="show('appearence')">
          appearence
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideNav from '../components/SideNav.vue';

export default {
  components: { SideNav },
  data() {
    return {
      activeItem: 'account',
      account: {
        email: '',
        password: '',
        host: '',
        port: '',
        ssl: '',
      },
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    show(menuItem) {
      return menuItem === this.activeItem ? 'show' : 'hide';
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    saveSettings() {
      this.$store.commit('changeAccountSettings', this.account);
      console.log('Saving', this.account);
    },
  },
  computed: {
    accountSettings() {
      return this.$store.state.account_settings;
    },
  },
};
</script>

<style scoped>
.show {
  display: block;
}
.hide {
  display: none;
}
</style>
