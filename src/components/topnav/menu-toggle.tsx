type MenuToggleProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const MenuToggle = ({ isOpen, onClick }: MenuToggleProps) => (
  <svg
    role="button"
    aria-label={isOpen ? "Close menu" : "Open menu"}
    className="h-8 w-8 cursor-pointer"
    onClick={onClick}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {isOpen ? (
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M3 8.5H21M3 15.5H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);
