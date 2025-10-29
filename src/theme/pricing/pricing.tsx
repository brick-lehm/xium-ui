import type { BoxProps } from '@mui/material/Box';
import type { Plan, PlanCatalogs} from './pricing.type';

import { useTabs } from 'minimal-shared/hooks';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { PlanCard } from 'src/theme/pricing/plan-card';

import { fPricing } from './f-pricing';
import { FloatLine } from '../../sections/home/components/svg-elements';

// ----------------------------------------------------------------------

export type PricingProps = BoxProps & {
  planCatalogs: PlanCatalogs;
  selectPlan?: (plan: Plan) => void;
};

export function Pricing({ planCatalogs, selectPlan, sx, ...other }: PricingProps) {

  const tabs = useTabs('Standard');
  const plans: Plan[] = fPricing(planCatalogs);

  const renderContentDesktop = () => (
    <Box gridTemplateColumns="repeat(3, 1fr)" sx={{ display: { xs: 'none', md: 'grid' } }}>
      {(plans).map((plan, index) => (
        <PlanCard
          key={index}
          plan={plan}
          onClickUsePlan={(usePlan) => {
            selectPlan?.(usePlan);
          }}
          sx={(theme) => ({
            ...(plan.planTitle === 'Plus' && {
              [theme.breakpoints.down(1440)]: {
                borderLeft: `dashed 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
                borderRight: `dashed 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
              },
            }),
          })}
        />
      ))}
    </Box>
  );

  const renderContentMobile = () => (
    <Stack spacing={5} alignItems="center" sx={{ display: { md: 'none' } }}>
      <Tabs
        value={tabs.value}
        onChange={tabs.onChange}
        sx={[
          (theme) => ({
            boxShadow: `0px -2px 0px 0px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)} inset`,
          }),
        ]}
      >
        {(planCatalogs.plans).map((tab) => (
          <Tab key={tab.planTitle} value={tab.planTitle} label={tab.planTitle} />
        ))}
      </Tabs>

      <Box
        sx={[
          (theme) => ({
            width: 1,
            borderRadius: 2,
            border: `dashed 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
          }),
        ]}
      >
        {/* プランカードの表示 */}
        {(plans).map(
          (tab) => tab.planTitle === tabs.value
            && (
              <PlanCard key={tab.planTitle}
                        plan={tab}
                        onClickUsePlan={(usePlan) => selectPlan?.(usePlan)}
              />
            )
        )}
      </Box>
    </Stack>
  );

  return (
    <Box
      component="section"
      sx={[{ py: 10, position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >

      <Box
        sx={(theme) => ({
          position: 'relative',
          '&::before, &::after': {
            width: 64,
            height: 64,
            content: "''",
            [theme.breakpoints.up(1440)]: { display: 'block' },
          },
        })}
      >
        <Container>{renderContentDesktop()}</Container>

        <FloatLine sx={{ top: 64, left: 0 }} />
        <FloatLine sx={{ bottom: 64, left: 0 }} />
      </Box>

      <Container>{renderContentMobile()}</Container>
    </Box>
  );
}
