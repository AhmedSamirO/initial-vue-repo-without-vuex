<template>
  <div class="footer">
    <v-container class="pb-0">
      <div class="footer__top">
        <div class="row justify-center text-start">
          <div class="col-md-3">
            <div class="logo">
              <img
                class="m-2"
                :src="require(`@/assets/logo/logo-white.png`)"
                alt="data future"
                width="85px"
                height="80px"
              />
            </div>
            
            <p class="underIconText">{{$t('footer.underIconText')}}</p>
          </div>
          
          <div class="col-md-3 p-2 footer__links">
            <h4 class="footer__list_header">{{$t('footer.importantLinks')}}</h4>
            <router-link
              :to="`/${$route.params.lang}`"
              tag="a"
            >
              <p>{{$t('footer.main')}}</p>
            </router-link>
            
            <router-link
              :to="`/about/${$route.params.lang}`"
              tag="a"
            >
              <p>{{$t('footer.about')}}</p>
            </router-link>
            
            <router-link
              :to="`/experimental/${$route.params.lang}`"
              tag="a"
            >
              <p>{{$t('footer.experimental')}}</p>
            </router-link>
            
            <router-link
              :to="`/faq/${$route.params.lang}`"
              tag="a"
            >
              <p>{{$t('footer.faq')}}</p>
            </router-link>
            
            <router-link
              :to="`/contact/${$route.params.lang}`"
              tag="a"
            >
              <p>{{$t('footer.contact')}}</p>
            </router-link>
          </div>
          
          <div class="col-md-3 p-2 footer__contact-info">
            <h4 class="footer__list_header">{{$t('footer.contactInfo')}}</h4>
            
            <div class="footer__companyInfo d-flex">
              <p class="px-3">
                {{$t('footer.AE')}}: 
                <span dir="ltr">+971585958669</span>
              </p>
            </div>
            
            <div class="footer__companyInfo d-flex">
              <p class="px-3">
                {{$t('footer.Qatar')}}: 
                <span dir="ltr">+97455726002</span>
              </p>
            </div>
            
            <div class="footer__companyInfo d-flex">
              <p class="px-3">
                {{$t('footer.Oman')}}: 
                <span dir="ltr">+96898148199</span>
              </p>
            </div>
            
            <div class="footer__companyInfo d-flex">
              <p class="px-3">
                {{$t('footer.Jordan')}}: 
                <span dir="ltr">+962776806706</span>
              </p>
            </div>
            
            <div class="footer__companyInfo d-flex">
              <p class="px-3">
                {{$t('footer.Egypt')}}: 
                <span dir="ltr">+201016988757</span>
              </p>
            </div>
          </div>
          
          <div class="col-md-3 p-2 footer__links">
            <h4 class="footer__list_header">{{$t('footer.contactInfo')}}</h4>
            
            <p class="px-3 footer__companyTitle">
              {{$t('shared.companyLocationTitle')}}
            </p>
            
            <p class="px-3 footer__companyEmail">
              {{$t('shared.companyEmail')}}
            </p>

            <div class="d-flex footer__social">
              <img
                :src="require(`@/assets/img/ico/facebook.svg`)"
                alt="Twitter"
                width="40"
                height="40"
                @click="openTwitter"
              />
              
              <img
                :src="require(`@/assets/img/ico/twitter.svg`)"
                alt="Twitter"
                width="40"
                height="40"
                @click="openTwitter"
              />
              
              <img
                :src="require(`@/assets/img/ico/instgram.svg`)"
                alt="Youtube"
                width="40"
                height="40"
                @click="openYoutube"
              />
              
              <img
                :src="require(`@/assets/img/ico/linkedin.svg`)"
                alt="Linkedin"
                width="40"
                height="40"
                @click="openLinkedin"
              />
              
            </div>
          </div>
        </div>
        
        <hr />
      </div>

      <div class="footer__bottom d-flex justify-space-between my-5">
        <p class="mb-0">
          {{$t('footer.copyRights')}}
        </p>
        <div class="d-flex">
          <router-link
            :to="`/terms/${$route.params.lang}`"
            tag="a"
          >
            <p class="mb-0 mx-5">
              {{$t('footer.termsAndConditions')}}
            </p>
          </router-link>
          <router-link
            :to="`/policy/${$route.params.lang}`"
            tag="a"
          >
            <p class="mb-0">
              {{$t('footer.privacyPolicy')}}
            </p>
          </router-link>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'CustomFooter',
  data: () => ({
  }),
  methods: {
    openTwitter: function() {
      window.open("https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", '_blank');
    },
    openYoutube: function() {
      window.open("https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", '_blank');
    },
    openLinkedin: function() {
      window.open("https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", '_blank');
    },
    openSnapChat: function() {
      window.open("https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", '_blank');
    },
  }
}
</script>

<style scoped lang="scss">
  .footer {
    background: linear-gradient(
      269.6deg, 
      var(--gradient-color-start) 0.3%, 
      var(--gradient-color-end) 99.62%
    );
    color: var(--white);
    padding-top: 80px;
    
    .footer__list_header {
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    
    .underIconText {
      line-height: 32px;
      margin-top: 20px;
      max-width: 300px;
    }
    
    &__links {
      p {
        line-height: 36px;
      }
    }
    
    &__contact-info{
      p {
        line-height: 29px;
      }
    }
    
    &__companyTitle {
      line-height: 36px;
      margin-bottom: 10px;
    }
    
    &__companyEmail {
      margin-bottom: 50px;
    }
    
    &__companyInfo {
      p {
        margin-bottom: 24px;
      }
    }
    
    &__social {
      margin-top: 30px;
      
      img {
        margin-left: 8px;
        margin-right: 8px;
        cursor: pointer;
      }
    }
    
    hr {
      margin-top: 70px;
    }
    
    a {
      text-decoration: none;
      color: var(--white) !important;
    }
  }
  
  
</style>
