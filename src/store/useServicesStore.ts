import type { ServiceItem } from "~/types/services"

export const useServiceStore = defineStore('service-store', () => {
  const items = ref<ServiceItem[]>([
    {
      icon: 'smile',
      title: 'Smile Design',
      description:
        'A smile design is a cosmetic dental procedure that enhances the appearance of your smile.',
      route: '/',
    },
    {
      icon: 'implant',
      title: 'Dental Implants',
      description:
        'Dental implants are artificial tooth roots that provide a permanent base for fixed replacement teeth.',
      route: '/',
    },
    {
      icon: 'teeth',
      title: 'Teeth Whitening',
      description:
        'Teeth whitening is a cosmetic procedure that lightens the color of your teeth.',
      route: '/',
    },
    {
        icon: 'teeth',
        title: 'Teeth Whitening',
        description: 'It`s never been easier to brighten your smile at home. There are all kinds of products you can try.',
        route: '/'        
    },
    {
        icon: 'smile',
        title: 'Emergency Dentistry',
        description: 'In general, any dental problem that needs immediate treatment to stop bleeding, alleviate severe pain.',
        route: '/'        
    },
    {
        icon: 'implant',
        title: 'Prevention',
        description: 'Preventive dentistry is dental care that helps maintain good oral health. a combination of regular dental.',
        route: '/'        
    }, 
  ])
  
  return {
      items
  }
})