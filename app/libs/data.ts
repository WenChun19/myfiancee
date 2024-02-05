export const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Profile",
    href: "/profile",
  },
];

export const listing_menus = [
  {
    title: "Transaction",
    href: "/listing/transaction",
  },
  {
    title: "Investment",
    href: "/listing/investment",
  },
] as const;

export const transaction_data = [
  {
    id: 1,
    name: "touchngo",
    debit: "-",
    credit: "20",
    created_at: "2023-1-21",
  },
  {
    id: 2,
    name: "wallet",
    debit: "30",
    credit: "-",
    created_at: "2023-1-21",
  },
  {
    id: 3,
    name: "ambank",
    debit: "-",
    credit: "40",
    created_at: "2023-1-21",
  },
];
