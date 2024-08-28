import { useQuery, useQueryClient } from "@tanstack/react-query";

const MENU_STATE_KEY = "menuState";

export function useMenuState() {
  const queryClient = useQueryClient();

  const { data: isOpen = false } = useQuery({
    queryKey: [MENU_STATE_KEY],
    queryFn: () => false,
    staleTime: Infinity,
  });

  const setMenuOpen = (open: boolean) => {
    queryClient.setQueryData([MENU_STATE_KEY], open);
  };

  const toggleMenu = () => {
    setMenuOpen(!isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return { isOpen, toggleMenu, closeMenu };
}
