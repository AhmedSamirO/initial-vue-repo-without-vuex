import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#548E2D',
        secondary: '#2D5C29',
        info: '#548E2D29',

        // should be changed while working on the website
        accent: '#82B1FF',
        error: '#FF5252',
        success: '#4CAF50',
        warning: '#FFC107',
        disabled: '#383e43'
      }
    }
  },
  rtl: true,
})
