export const useHeader = () => {
    const route = useRoute();

    const whiteRouteList = ['services', 'blog', 'contacts', 'about'];

    const isWhite = computed(() => whiteRouteList.some((item) => route.path.includes(item)));

    return {
        isWhite,
    };

}