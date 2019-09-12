import Vue from 'vue';
import MessageBoxVue from './index.vue';

const MessageBoxConstructor = Vue.extend(MessageBoxVue);
let currentMsg, instance;

const initInstance = () => {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
}

const MessageBox = function(options) {
  if (!instance) {
    initInstance();
  }
  Object.assign(instance, options);
  instance.isShowMessageBox = true;
  instance.callback = defaultCallback;
  return new Promise((resolvue, reject) => {
    currentMsg = {
      resolvue,
      reject
    }
  });
}

const defaultCallback = (action) => {
  if(action === 'confirm') {
    currentMsg.resolvue()
  }else{
    currentMsg.reject()
  }
}

export default {
  install(Vue) {
    Vue.prototype.$msgbox = MessageBox
  }
}