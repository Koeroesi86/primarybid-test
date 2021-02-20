import Vue from 'vue';
import axios from 'axios';
import './createUrl';
import './urlList';

export default Vue.component('app-view', {
  template: `
    <div class='layout'>
      <h1>Primary Bid test</h1>
      <create-url :onsend='shortUrl'></create-url>
      <url-list :listing='listing'></url-list>
    </div>
  `,
  data: () => ({
    listing: [],
  }),
  async created() {
    await this.refreshList();
  },
  methods: {
    async refreshList() {
      this.listing = await axios('api/').then((res) => res.data);
    },
    async shortUrl(url) {
      await axios({
        url: 'api/',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: { url },
      });
      await this.refreshList();
    },
  },
});
