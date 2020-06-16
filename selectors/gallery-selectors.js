export const photosSelector = (store) => {
    return store.gallery.photos;
};
export const currentPageSelector = (store) => {
    return store.gallery.currentPage;
};
export const isLoadingSelector = (store) => {
    return store.gallery.isLoading;
};
