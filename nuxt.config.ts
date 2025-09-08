// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
		head: {
			title: 'Chernyshov | Dental Clinic',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'msapplication-TileColor', content: '#011632' },
				{ name: 'theme-color', content: '#1376f8' },
				{ name: 'title', content: 'Chernyshov | Dental Clinic' },
				{ name: 'description', content: 'We value the time and needs of our clients, the right to be guaranteed and the confidence that they are using the best dentistry solutions for their treatment. Just an hour - and you can get 3D diagnostics, a digital design of the future smile, oral hygiene. Changing the color, shape of your teeth, the appearance of your smile (whitening, inlays, onlays, veneers) in just a few hours is possible becouse of the full spectrum of digital CAD/CAM and 3D dentistry. At the RIKOTA clinic, you can have a one-stage implant in one visit or change the bite imperceptibly for others with the help of lingual braces and eliners. We respect our customers and do not use outdated techniques such as a metal ceramic crown or the treatment without anesthesia.' },
				{ property: 'og:title', content: 'Chernyshov | Dental Clinic' },
				{ property: 'og:description', content: 'We value the time and needs of our clients, the right to be guaranteed and the confidence that they are using the best dentistry solutions for their treatment. Just an hour - and you can get 3D diagnostics, a digital design of the future smile, oral hygiene. Changing the color, shape of your teeth, the appearance of your smile (whitening, inlays, onlays, veneers) in just a few hours is possible becouse of the full spectrum of digital CAD/CAM and 3D dentistry. At the RIKOTA clinic, you can have a one-stage implant in one visit or change the bite imperceptibly for others with the help of lingual braces and eliners. We respect our customers and do not use outdated techniques such as a metal ceramic crown or the treatment without anesthesia.' },
				{ property: 'og:image', content: '/logos/logo.svg' },
				{ property: 'og:url', content: 'https://dental-medical.vercel.app/' }
			],
			link: [
				{ rel: 'icon', href: '/favicon.ico' },
			]
		}
	},
  css: [
    '@/assets/css/main.css',
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-swiper'],
  srcDir: 'src/.',
  components: {
    dirs: [
      {
        path: '~/components/general',
        global: true,
      },
      {
        path: '~/components/universal',
        global: true,
      }
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})