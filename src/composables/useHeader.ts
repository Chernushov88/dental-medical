export const useHeader = () => {
    const route = useRoute();

    const whiteRouteList = ['services', 'about', 'contacts'];

    const isWhite = computed(() => whiteRouteList.some((item) => route.path.includes(item)));

    return {
        isWhite,
    };

}