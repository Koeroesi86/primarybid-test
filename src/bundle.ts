import App from './components/app';

(() => {
  if (window) {
    new App(document.getElementById('root'));
  }
})();
