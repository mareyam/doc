import { useRouter } from "next/router";
import { create } from "zustand";

export const useStateManagementStore = create((set) => ({
  // selectedMenu: "",
  // setSelectedMenu: (menu) => set(() => ({ selectedMenu: menu })),
  selectedMenu: null,
  setSelectedMenu: (menu) => set(() => ({ selectedMenu: menu })),
  currentSection: null,
  setCurrentSection: (menu) => set(() => ({ currentSection: menu })),
  currentRoute: "",
  setCurrentRoute: (route) => set(() => ({ currentRoute: route })),
  showMenu: false,
  setShowMenu: (menu) => set(() => ({ showMenu: menu })),
  sidebarTitles: [],
  setSidebarTitles: (titles) =>
    set({ sidebarTitles: Array.isArray(titles) ? titles : [] }),
  isOpenSearchModal: false,
  onOpenSearchModal: () => set({ isOpenSearchModal: true }),
  onCloseSearchModal: () => set({ isOpenSearchModal: false }),
  onToggleSearchModal: () => set({ isOpenSearchModal: !isOpenSearchModal }),
}));
