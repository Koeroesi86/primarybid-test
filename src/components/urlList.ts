import Vue from 'vue';

export default Vue.component('url-list', {
  template: `
    <div class='urlList'>
      <a
          target='_blank'
          v-if='listing && listing.length > 0'
          v-for='shortUrl in listing'
          :key='shortUrl.url'
          :href='shortUrl.url'
          :title='encodeURI(shortUrl.original)'
      >
        {{ shortUrl.url }}
      </a>
      <span v-if='!listing || listing.length === 0'>
        No urls yet. Why not create one?
      </span>
    </div>
  `,
  props: {
    listing: Array,
  },
});
