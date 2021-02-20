import Vue from 'vue';

const isValid = (url: string): boolean => {
  if (url.length === 0) return false;

  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

export default Vue.component('create-url', {
  template: `
    <div class='createUrl'>
      <input
        type='url'
        placeholder='Shorten some urls'
      />
      <button type='button' v-on:click='send'>
        Shorten
      </button>
    </div>
  `,
  props: {
    onsend: Function,
  },
  mounted() {
    const input = this.$el.querySelector('input[type="url"]');
    input.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.send();
      }
    });
  },
  methods: {
    send() {
      const input = this.$el.querySelector('input[type="url"]');
      const url = input.value;
      if (!isValid(url)) return;

      this.onsend(url);
      input.value = '';
    },
  },
});
