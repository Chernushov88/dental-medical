import type { ReviewsItem } from '~/types/reviews';

export const useReviewsStore = defineStore('reviews-store', () => { 
const items = ref<ReviewsItem[]>([
    {
    name: 'Thomas daniel',
    photo: './pages/home/clients/client1.png',
    stars: 3,
    message:
      'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
  },
  {
    name: 'Alena Alex',
    photo: './pages/home/clients/client2.png',
    stars: 5,
    message:
      'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
  },
  {
    name: 'Thomas Edison',
    photo: './pages/home/clients/client3.png',
    stars: 4,
    message:
      'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
  },
  {
    name: 'Thomas daniel',
    photo: './pages/home/clients/client1.png',
    stars: 5,
    message:
      'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
  },
  {
    name: 'Alena Alex',
    photo: './pages/home/clients/client2.png',
    stars: 2,
    message:
      'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
  },
  {
    name: 'Thomas Edison',
    photo: './pages/home/clients/client3.png',
    stars: 4,
    message:
      'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
  },
  ])
return {
    items 
}
})