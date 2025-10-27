export type Plan = {
 planTitle: string;
 price: number;
 icons: string[];
 allowOptions: string[];
};

export type Plans = {
  plans: Plan[],
  common: string[],
  options: string[],
};
