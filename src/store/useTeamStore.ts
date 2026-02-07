import type { TeamItem } from '~/types/team';

export const useTeamStore = defineStore('team-store', () => { 
const items = ref<TeamItem[]>([
    {
        name: 'Jim Carry',
        position: 'Orthodontist',
        photo: './pages/home/team/doctor1.png',
        profileLink: 'https://www.linkedin.com/'
    },
    {
        name: 'Wade Warren',
        position: 'Endodontist',
        photo: './pages/home/team/doctor2.png',
        profileLink: 'https://www.linkedin.com/'
    },
    {
        name: 'Jenny Wilson',
        position: 'Periodontist',
        photo: './pages/home/team/doctor3.png',
        profileLink: 'https://www.linkedin.com/'
    },
    {
        name: 'Jacob Jones',
        position: 'Pediatric Dentist',
        photo: './pages/home/team/doctor4.png',
        profileLink: 'https://www.linkedin.com/'
    },
    {
        name: 'Jim Carry',
        position: 'Orthodontist',
        photo: './pages/home/team/doctor1.png',
        profileLink: 'https://www.linkedin.com/'
    },
    {
        name: 'Wade Warren',
        position: 'Endodontist',
        photo: './pages/home/team/doctor2.png',
        profileLink: 'https://www.linkedin.com/'
    },
    {
        name: 'Jenny Wilson',
        position: 'Periodontist',
        photo: './pages/home/team/doctor3.png',
        profileLink: 'https://www.linkedin.com/'
    },
    {
        name: 'Jacob Jones',
        position: 'Pediatric Dentist',
        photo: './pages/home/team/doctor4.png',
        profileLink: 'https://www.linkedin.com/'
    },
  ])
  return {
      items 
  }
})