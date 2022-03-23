<template class="customHeader">
  <span>
    <v-app-bar
      app
      color="white"
      class="site-app-bar"
      height="120px"
    >
      <v-container class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          :src="require(`@/assets/logo/logo.png`)"
          width="85px"
          height="80px"
        />

        <v-spacer></v-spacer>

        <v-list
          nav
          dense
          v-if="$vuetify.breakpoint.lgAndUp"
        >
          <v-list-item-group
            v-model="group"
            :class="[$vuetify.breakpoint.lgAndUp ? 'd-flex' : '']"
          >
          
            <v-list-item
              :class="[{'site-app-bar--active': $route.name == 'home'}]"
            >
              <router-link
                :to="`/${$route.params.lang}`"
                tag="a"
              >
                <v-list-item-title>{{$t('header.main')}}</v-list-item-title>
              </router-link>
            </v-list-item>
              
            <v-list-item
              :class="[{'site-app-bar--active': $route.name == 'about'}]"
            >
              <router-link
                :to="`/about/${$route.params.lang}`"
                tag="a"
              >
                <v-list-item-title>{{$t('header.about')}}</v-list-item-title>
              </router-link>
            </v-list-item>
              
            <v-list-item
              :class="[{'site-app-bar--active': $route.name == 'experimental'}]"
            >
              <router-link
                :to="`/experimental/${$route.params.lang}`"
                tag="a"
              >
                <v-list-item-title>
                  {{$t('header.experimental')}}
                </v-list-item-title>
              </router-link>
            </v-list-item>
              
            <v-list-item
              :class="[{'site-app-bar--active': $route.name == 'faq'}]"
            >
              <router-link
                :to="`/faq/${$route.params.lang}`"
                tag="a"
              >
                <v-list-item-title>{{$t('header.faq')}}</v-list-item-title>
              </router-link>
            </v-list-item>
            
            <v-list-item
              :class="[{'site-app-bar--active': $route.name == 'contact'}]"
            >
              <router-link
                :to="`/contact/${$route.params.lang}`"
                tag="a"
              >
                <v-list-item-title>{{$t('header.contact')}}</v-list-item-title>
              </router-link>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      
        <v-spacer></v-spacer>

        <v-btn @click="changeLanguage" text>
          {{$i18n.locale == 'ar' ? 'en' : 'ar'}}
        </v-btn>
        
        <v-app-bar-nav-icon 
          v-if="$vuetify.breakpoint.mdAndDown" 
          @click.stop="drawer = !drawer" 
        />
        
      </v-container>
    </v-app-bar>
    
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            :class="[{'site-app-bar--active': $route.name == 'home'}]"
          >
            <router-link
              :to="`/${$route.params.lang}`"
              tag="a"
            >
              <v-list-item-title>{{$t('header.main')}}</v-list-item-title>
            </router-link>
          </v-list-item>
            
          <v-list-item
            :class="[{'site-app-bar--active': $route.name == 'about'}]"
          >
            <router-link
              :to="`/about/${$route.params.lang}`"
              tag="a"
            >
              <v-list-item-title>{{$t('header.about')}}</v-list-item-title>
            </router-link>
          </v-list-item>
            
          <v-list-item
            :class="[{'site-app-bar--active': $route.name == 'experimental'}]"
          >
            <router-link
              :to="`/experimental/${$route.params.lang}`"
              tag="a"
            >
              <v-list-item-title>
                {{$t('header.experimental')}}
              </v-list-item-title>
            </router-link>
          </v-list-item>
            
          <v-list-item
            :class="[{'site-app-bar--active': $route.name == 'faq'}]"
          >
            <router-link
              :to="`/faq/${$route.params.lang}`"
              tag="a"
            >
              <v-list-item-title>{{$t('header.faq')}}</v-list-item-title>
            </router-link>
          </v-list-item>
          
          <v-list-item
            :class="[{'site-app-bar--active': $route.name == 'contact'}]"
          >
            <router-link
              :to="`/contact/${$route.params.lang}`"
              tag="a"
            >
              <v-list-item-title>{{$t('header.contact')}}</v-list-item-title>
            </router-link>
          </v-list-item>
          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </span>
</template>

<script>
import ApiService from "@/services/api.service";

export default {
  name: 'CustomHeader',
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    log: function() {
      console.log("Aaa");
      this.drawer = !this.drawer;
    },
    changeLanguage: function () {
      const currentLang = this.$i18n.locale;
      const lang = currentLang == 'ar' ? 'en' : 'ar';
      
      console.log("current lang", this.$i18n.locale);
      
      this.$i18n.locale = lang;
      this.$vuetify.rtl = lang === 'ar';
      ApiService.setHeaderLang(lang);

      this.$router.replace({
        path: this.getNewPath(lang),
        params: {
          ...this.$route.params,
          lang: lang
        }
      });
    },
    getNewPath: function (lang) {
      const fullPath = this.$route.fullPath;
      const oldLang = fullPath.split('/').pop();
      const route = fullPath.split('/');

      if (oldLang === 'ar' || oldLang === 'en' || fullPath === '/') {
        route.pop();
      }

      route.push(lang);

      return route.join('/');
    }
  }
}
</script>

<style scoped lang="scss">

  .v-sheet.v-app-bar.v-toolbar.site-app-bar {
    box-shadow: 0px 0px 18px #00000014;
  }
  
  .v-list-item-group {
    &.hover {      
      &::before{
        opacity: 0;
      }
    }
    
    .v-list-item {
      justify-content: center;
      height: 40px;
      padding: 18px;
      margin-top: 4px;
      
      .v-list-item__title {
        font-weight: 700 !important;
        font-size: 1rem;
        line-height: 1.5rem;
      }    
    }
    
    .v-list-item--active {     
      &::before{
        content: none;
      }
    }
    
  }
  
  a {
    text-decoration: none;
    color: var(--text-color-01) !important;
    text-align: center;
  }
  
  .site-app-bar--active {
    a{
      color: var(--basic-color-01) !important;
    }
  }
  
  .small-menu {
    width: 100%;
    margin-top: 104px;
    text-align: center;
    transform: 0.3s ease-in-out all;
    animation: slidein 0.4s ease-in-out;
  }
  
  @keyframes slidein {
    from {
      transform: translateY(-200px);
    }

    to {
      transform: translateY(0%);
    }
  }
  
</style>
