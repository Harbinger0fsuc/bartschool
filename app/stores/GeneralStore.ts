import { nav } from "~/constants";
import type { navItemInterface } from "~/types";

export const useGeneralStore = defineStore("generalStore", () => {
  const navItems = ref<navItemInterface[]>(nav);

  return { navItems };
});
