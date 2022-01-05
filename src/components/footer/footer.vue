<template>
  <div class="footer">
    <v-container>
      <div class="footer--top">
        <div class="row justify-center text-start">
          <div class="col-md-3">
            <div class="logo">
              <img
                class="m-2"
                :src="require(`@/assets/logo/logo-white.png`)"
                alt="data future"
                width="69.41px"
                height="89.61px"
              />
            </div>
            
            <p class="underIconText">{{$t('footer.underIconText')}}</p>
          </div>
          
          <div class="col-md-3 p-2 footer__links">
            <h5 class="footer__list_header">{{$t('footer.fastLinks')}}</h5>
            
            <p>{{$t('footer.about')}}</p>
              
            <p>{{$t('footer.services')}}</p>
          
            <p>{{$t('footer.customers')}}</p>
          
            <p>{{$t('footer.contact')}}</p>
          </div>
          
          <div class="col-md-3 p-2 footer__links">
            <h5 class="footer__list_header">{{$t('footer.fastLinks')}}</h5>
            
            <p>{{$t('footer.privacyPolicy')}}</p>
              
            <p>{{$t('footer.termsAndConditions')}}</p>
          </div>
          
          <div class="col-md-3 p-2 footer__links">
            <h5 class="footer__list_header">{{$t('footer.contactInfo')}}</h5>
            
            <div class="footer__companyInfo d-flex">
              <img
                :src="require(`@/assets/img/ico/location.svg`)"
                alt="icon"
                width="16"
                height="23"
              />
              <p class="px-3">{{$t('shared.companyLocationTitle')}}</p>
            </div>
            
            <div class="footer__companyInfo d-flex">
              <img
                :src="require(`@/assets/img/ico/email.svg`)"
                alt="icon"
                width="22"
                height="22"
              />
              <p class="px-3">{{$t('shared.companyEmail')}}</p>
            </div>
            
            <div class="footer__companyInfo d-flex">
              <img
                :src="require(`@/assets/img/ico/phone.svg`)"
                alt="icon"
                width="22"
                height="22"
              />
              <p class="px-3">{{$t('shared.companyPhone')}}</p>
            </div>
            
            <div class="d-flex footer__social">
              <img
                :src="require(`@/assets/img/ico/twitter.svg`)"
                alt="Twitter"
                width="32"
                height="32"
                @click="openTwitter"
              />
              
              <img
                :src="require(`@/assets/img/ico/youtube.svg`)"
                alt="Youtube"
                width="32"
                height="32"
                @click="openYoutube"
              />
              
              <img
                :src="require(`@/assets/img/ico/linkedin.svg`)"
                alt="Linkedin"
                width="32"
                height="32"
                @click="openLinkedin"
              />
              
              <img
                :src="require(`@/assets/img/ico/snapChat.svg`)"
                alt="SnapChat"
                width="32"
                height="32"
                @click="openSnapChat"
              />
            </div>
          </div>
        </div>
        
        <hr />
      </div>

      <div class="footer__bottom d-flex justify-center mb-3 mt-5">
        <p class="mb-0 text-center">
          <span class="companyName">
          {{$t('shared.companyName')}}
          </span>
          {{$t('footer.copyRights')}}
        </p>
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
    background-color: var(--footer-background-color);
    color: var(--white);
    padding-top: 72px;
    
    .footer__list_header {
      font-weight: 400;
      margin-bottom: 25px;
    }
    
    .underIconText {
      line-height: 30px;
      margin-top: 24px;
    }
    
    .footer__companyInfo {
      p {
        margin-bottom: 24px;
      }
    }
    
    .footer__social {
      margin-top: 18px;
      
      img {
        margin-left: 8px;
        margin-right: 8px;
      }
    }
    
    .footer__bottom {
      p {
        font-size: 0.75rem;
        
        .companyName {
          font-size: 1rem;
        }
      }
    }
  }
  
  
</style>
