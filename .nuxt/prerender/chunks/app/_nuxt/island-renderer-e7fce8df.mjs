import { defineComponent, createBlock, Teleport, h } from 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/vue/index.mjs';
import { c as createError } from '../server.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/hookable/dist/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/unctx/dist/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/ufo/dist/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/h3/dist/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/defu/dist/defu.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/@intlify/vue-devtools/dist/vue-devtools.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/is-https/dist/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/vue-easy-lightbox/dist/vue-easy-lightbox.esm.min.js';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/swiper/vue/swiper-vue.js';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/@chenfengyuan/vue-countdown/dist/vue-countdown.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/destr/dist/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/scule/dist/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/ohash/dist/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/radix3/dist/index.mjs';
import 'node:url';
import 'file:///Users/andreisoftgenius/Documents/lambo-promo-landingpage/node_modules/ipx/dist/index.mjs';

const components_islands = {};
const islandComponents = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: components_islands
});
const islandRenderer = /* @__PURE__ */ defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  async setup(props) {
    var _a;
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${JSON.stringify(component)}`
      });
    }
    if (typeof component === "object") {
      await ((_a = component.__asyncLoader) == null ? void 0 : _a.call(component));
    }
    return () => [
      createBlock(Teleport, { to: "nuxt-island" }, [h(component || "span", props.context.props)])
    ];
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-e7fce8df.mjs.map
