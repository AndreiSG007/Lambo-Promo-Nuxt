<template>
  <div class="main-container">
    <div class="main-wrapper">
      <img src="/assets/OMS_logo.svg" alt="" class="main-logo" w="190" h="36" />
      <div class="main-texts">
        <h2>{{ $t("lastManStanding") }}</h2>
        <h1>{{ $t("lamborghiniHuracan") }}</h1>
      </div>
      <div class="counter-container">
        <h3>{{ $t("promotionStartsIn") }}</h3>
        <no-ssr>
          <vue-countdown
            :time="time"
            v-slot="{ days, hours, minutes, seconds }"
          >
            <div class="counter-container_labels">
              <div class="counter-container_labels-container">
                <p class="counter-container_labels-container-number day">
                  {{ days }}
                </p>
                <p class="counter-container_labels-container-text">
                  {{ $t("days") }}
                </p>
              </div>
              <div class="counter-container_labels-container">
                <p class="counter-container_labels-container-number hour">
                  {{ hours }}
                </p>
                <p class="counter-container_labels-container-text">
                  {{ $t("hours") }}
                </p>
              </div>
              <div class="counter-container_labels-container">
                <p class="counter-container_labels-container-number minute">
                  {{ minutes }}
                </p>
                <p class="counter-container_labels-container-text">
                  {{ $t("minutes") }}
                </p>
              </div>
              <div class="counter-container_labels-container">
                <p class="counter-container_labels-container-number seconds">
                  {{ seconds }}
                </p>
                <p class="counter-container_labels-container-text">
                  {{ $t("seconds") }}
                </p>
              </div>
            </div>
          </vue-countdown>
        </no-ssr>
      </div>
      <button class="main-button">{{ $t("playNow") }}</button>
      <div>
        <img src="/assets/Header_group_OMS.png" alt="" class="main-image" />
      </div>

      <div class="steps">
        <h2 class="steps-title">{{ $t("howToWIN") }}</h2>
        <div class="steps-container">
          <div class="step">
            <nuxt-img src="/assets/1.svg" alt="" class="step-image" />
            <h2>{{ $t("placeAtLeast") }}</h2>
          </div>
          <div class="step">
            <nuxt-img src="/assets/2.svg" alt="" class="step-image" />
            <h2>{{ $t("keepDoingThatUntil") }}</h2>
          </div>
          <div class="step">
            <nuxt-img src="/assets/3.svg" alt="" class="step-image" />
            <h2>{{ $t("hopOnThisAmazingLambo") }}</h2>
          </div>
        </div>
      </div>

      <div class="bottom-gallery">
        <h2 class="bottom-gallery-text">{{ $t("thePrizeInAction") }}</h2>
        <iframe
          src="https://www.youtube.com/embed/u8Oqaxf4r94"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <div class="swiper-container">
          <swiper
            :ref="{ swiperRef }"
            :slidesPerView="2"
            :space-between="20"
            class="gallery-swiper"
            navigation
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :breakpoints="breakpoints"
          >
            <swiper-slide
              v-for="(src, index) in imgs"
              :key="index"
              class="pic swiper-container-1"
              @click="() => showImg(index)"
            >
              <nuxt-img :src="src" format="webp" />
            </swiper-slide>
          </swiper>
          <div class="arrows-container">
            <nuxt-img src="/assets/left-arrow.svg" />
            <nuxt-img src="/assets/right-arrow.svg" />
          </div>
        </div>
        <vue-easy-lightbox
          :visible="visibleRef"
          :imgs="imgs"
          :index="indexRef"
          @hide="onHide"
        ></vue-easy-lightbox>

        <div class="modal-overlay" v-show="showModal">
          <div class="modal">
            <h6>Saved!</h6>
            <p>Your Details have been saved Successfully</p>
            <button>Go Home</button>
          </div>
          <div class="close">
            <button @click="showModal = false">X</button>
          </div>
        </div>

        <footer>
          <button @click="showModal = true">
            <u>{{ $t("termsAndConditions") }}</u>
          </button>
          <p>
            OhMySpins.com is operated by Buton Group and operating under Curacao
            license No. 8048/JAZGambling can be addictive. Play responsibly.
            OhMySpins only accepts customers over 18 years of age. 2023©
            OhMySpins.com All rights reserved
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import { useSwiper, Swiper, SwiperSlide } from "swiper/vue";
import VueCountdown from "@chenfengyuan/vue-countdown";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default defineComponent({
  components: {
    VueEasyLightbox,
    Swiper,
    SwiperSlide,
    VueCountdown,
  },
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const swiper = useSwiper();
    const showModal = ref(false);
    const mySwiper = ref();

    const breakpoints = {
      600: {
        slidesPerView: 3,
      },
    };

    const now = new Date("March 22, 2023 15:37:25").getTime();
    const newYear = new Date("April 5, 2023 15:37:25").getTime();

    const onSwiper = (swiper) => {
      mySwiper.value = swiper;
    };

    const imgs = [
      "/assets/poze/a0.jpg",
      "/assets/poze/a1.jpg",
      "/assets/poze/a2.jpg",
      "/assets/poze/a3.jpg",
      "/assets/poze/a4.jpg",
      "/assets/poze/a5.jpg",
      "/assets/poze/a6.jpg",
      "/assets/poze/a7.jpg",
      "/assets/poze/a8.jpg",
      "/assets/poze/a9.jpg",
    ];
    const showImg = (index) => {
      indexRef.value = index;
      visibleRef.value = true;
    };

    console.log(swiper);
    const onHide = () => (visibleRef.value = false);

    return {
      visibleRef,
      indexRef,
      imgs,
      showImg,
      onHide,
      onSwiper,
      showModal,
      breakpoints,
      time: newYear - now,
      mySwiper,
    };
  },
});
</script>
