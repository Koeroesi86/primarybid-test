import Vue from 'vue';
import './components/app';

(() => {
  if (window) {
    new Vue({ el: '#root' });
  }
})();
