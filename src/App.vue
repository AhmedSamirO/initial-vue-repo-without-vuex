<template>
  <v-app id="app" :key="$i18n.locale">
    <CustomHeader />
    
    <v-main>
      <router-view />
    </v-main>
    
    <CustomFooter />
  </v-app>
</template>

<script>
import CustomHeader from './components/header/header.vue';
import CustomFooter from './components/footer/footer.vue';
import ApiService from "@/services/api.service";

export default {
  name: 'App',

  components: {
    CustomHeader,
    CustomFooter
  },
  created() {
    this.setInitLang();
  },
  data: () => ({
    //
  }),
  methods: {
    setInitLang: function() {
      
      console.log("$route", this.$route?.params?.lang)
      
      const lang = this.$route?.params?.lang || 'ar';
      this.$vuetify.rtl = lang !== 'en'
      this.$i18n.locale = lang;

      ApiService.setHeaderLang(lang);

      const newPath = this.getNewPath(lang);

      if (this.$route.fullPath !== newPath) {
        this.$router.replace(this.getNewPath(lang));
      }
    },
    getNewPath: function(lang) {
      const fullPath = this.$route.fullPath;
      const route = fullPath.split('/');

      if (route[route.length - 1] === '') {
        route.pop();
      }

      const oldLang = route[route.length - 1];

      if (oldLang === 'ar' || oldLang === 'en') {
        return fullPath
      }

      route.push(lang);

      return route.join('/');
    }
  }
};
</script>

<style lang="scss">

@font-face {
  font-family: Montserrat-Arabic;
  src: url('./assets/fonts/Montserrat-Arabic-Light.ttf');
  font-weight: 300;
}
@font-face {
  font-family: Montserrat-Arabic;
  src: url('./assets/fonts/Montserrat-Arabic-Medium.ttf');
  font-weight: 400;
}
@font-face {
  font-family: Montserrat-Arabic;
  src: url('./assets/fonts/Montserrat-Arabic-SemiBold.ttf');
  font-weight: 600;
}
@font-face {
  font-family: Montserrat-Arabic;
  src: url('./assets/fonts/Montserrat-Arabic-Regular.ttf');
}
@font-face {
  font-family: Montserrat-Arabic;
  src: url('./assets/fonts/Montserrat-Arabic-Bold.ttf');
  font-weight: bold;
}
@font-face {
  font-family: Montserrat-Arabic;
  src: url('./assets/fonts/Montserrat-Arabic-ExtraBold.ttf');
  font-weight: 800;
}

#app {
  position: relative;
}

/* *** RESET CODE *** */

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --basic-color-01: #548e2d;
  --primary: #548E2D;
  --secondary: #2D5C29;
  --white: #ffffff;

  --input-field-border: #dedede;
  --input-field-color: #f1f1f1;

  --text-color-01: #0e100e;
  --text-color-02: #5d5a5a;
  --text-color-03: #548e2d29;

  --border-color-01: #dfe7df;

  --shadow-color-01: #0000001a;

  --gradient-color-start: #244821;
  --gradient-color-end: #56912e;

  --error-font: #e83a3a;
  --error-border: #e83a3a;
  --error-background: #e83a3a26;

  --font-ar: 'Montserrat-Arabic', sans-serif;
}

.v-application,
body,
html {
  // BASE FONT SIZE
  font-size: 16px !important;
  font-family: var(--font-ar) !important;
  font-weight: 300 !important;
  letter-spacing: 0px !important;
  text-align: start;
  @media only screen and (max-width: 992px) {
    font-size: 14px !important;
  }
  @media only screen and (max-width: 768px) {
    font-size: 13px !important;
  }
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
  color: var(----text-color-01);
}

h1 {
  font-size: 4.28rem;
}
h2 {
  font-size: 2.85rem;
}
h3 {
  font-size: 1.5rem;
}
h4 {
  font-size: 1.25rem;
}
h5 {
  font-size: 1.125rem;
}
h6 {
  font-size: 1rem;
}

p {
  font-size: 1rem;
}

</style>