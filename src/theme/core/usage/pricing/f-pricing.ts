import type { Plan, PlanOption, PlanCatalogs } from './pricing.type';

export const fPricing = (planCatalogs: PlanCatalogs): Plan[] => {

  const options = fullOptions(planCatalogs);

  return planCatalogs.plans.map(
    (plan) => ({
        planId: plan.planId,
        planTitle: plan.planTitle,
        price: plan.price,
        icons: plan.icons,
        features: plan.features,
        options: exportPlanOptions(plan.options, options),
      } as Plan)
  );
};

/**
 * 利用可能なオプションは、利用可能なオプションとしてプランオプションオブジェクトを生成する
 *
 * @param availableOptions
 * @param allOptions
 */
const exportPlanOptions = (availableOptions: string[], allOptions: string[]): PlanOption[] =>
  allOptions.map((option) => ({
      optionName: option,
      available: availableOptions.includes(option),
    } as PlanOption));

/**
 * 全てのプランに含まれるオプションの一覧を取得
 *
 * @param planCatalogs
 */
const fullOptions = (planCatalogs: PlanCatalogs) =>
  planCatalogs.plans
    .map((plan) => plan.options)
    .flat()
    .reduce((pv, cv) => {
      const options: string[] = (pv as string[]);

      if (!(options as string[]).includes(cv)) {
        options.push(cv);
      }

      return options;
    }, [] as string[]);
