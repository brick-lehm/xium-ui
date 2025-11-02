export type Plan = {
  planId: string;
  planTitle: string;
  price: number;
  icons: string[];
  features: string[];
  options: PlanOption[];
};

export type PlanOption = {
  optionName: string;
  available: boolean;
};

export type Plans = {
  plans: Plan[];
};

// ----------------------------------------------------------------------

export type PlanCatalogs = {
  plans: PlanCatalog[];
};

export type PlanCatalog = {
  planId: string;
  planTitle: string;
  price: number;
  icons: string[];
  features: string[];
  options: string[];
};
