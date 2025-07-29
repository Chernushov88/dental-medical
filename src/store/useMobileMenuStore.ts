export const useMobileMenuStore = defineStore('mobile-menu-store', () => {
    const activeMobileMenu = ref(false);

    const openMobileMenu = () => {
        activeMobileMenu.value = true;
    };

    const closeMobileMenu = () => {
        activeMobileMenu.value = false;
    };

    const toggleMobileMenu = () => {
        activeMobileMenu.value = !activeMobileMenu.value;
    };

    return {
        activeMobileMenu,
        openMobileMenu,
        closeMobileMenu,
        toggleMobileMenu,
    };

})