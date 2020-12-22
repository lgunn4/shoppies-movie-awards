export const getNominations = store =>
    store && store.nominations ? store.nominations : [];

export const getSideBarOpen = store =>
    store && store.sideBarOpen ? store.sideBarOpen: false;
