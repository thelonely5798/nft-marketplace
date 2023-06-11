// https://nuxt.com/docs/api/configuration/nuxt-config
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineNuxtConfig({
    css: [
        "assets/css/bootstrap.min.scss",
        "assets/css/animate.min.scss",
        "assets/css/magnific-popup.scss",
        "assets/css/fontawesome-all.min.scss",
        "assets/css/uicons-solid-rounded.scss",
        "assets/css/jquery.mCustomScrollbar.min.scss",
        "assets/css/flaticon.scss",
        "assets/css/slick.scss",
        "assets/css/default.scss",
        "assets/css/style.scss",
        "assets/css/responsive.scss"
    ],
    app: {
        head: {
            script: [
                {src: "/js/vendor/jquery-3.6.0.min.js"},
                {src: "/js/bootstrap.min.js", },
                {src: "/js/isotope.pkgd.min.js" },
                {src: "/js/imagesloaded.pkgd.min.js" },
                {src: "/js/jquery.magnific-popup.min.js" },
                {src: "/js/jquery.mCustomScrollbar.concat.min.js" },
                {src: "/js/slick.min.js" },
                {src: "/js/wow.min.js" },
                {src: "/js/plugins.js" },
            ],
        }
    },
    ssr: false,
    modules: [
        "@pinia/nuxt"
    ],
    vite: {
        plugins: [
          nodePolyfills(),
        ],
      },
})
