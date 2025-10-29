import type { Plan } from './pricing.type';

import { m } from 'framer-motion';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box, { type BoxProps } from '@mui/material/Box';

import { paths } from '../../routes/paths';
import { Iconify } from '../../components/iconify';
import { varFade, varScale } from '../../components/animate';
import { FloatLine, FloatXIcon } from '../../sections/home/components/svg-elements';

const renderLines = () => (
  <>
    <FloatLine vertical sx={{ top: -64, left: 0, height: 'calc(100% + (64px * 2))' }} />
    <FloatLine vertical sx={{ top: -64, right: 0, height: 'calc(100% + (64px * 2))' }} />
    <FloatXIcon sx={{ top: -8, left: -8 }} />
    <FloatXIcon sx={{ top: -8, right: -8 }} />
    <FloatXIcon sx={{ bottom: -8, left: -8 }} />
    <FloatXIcon sx={{ bottom: -8, right: -8 }} />
  </>
);

export type PlanCardProps = BoxProps & {
  plan: Plan // プラン情報
};

export function PlanCard({ plan, sx, ...other }: PlanCardProps) {
  const standardLicense = plan.planTitle;
  const {features, options} = plan;

  return (
    <Box
        sx={[
          () => ({
            px: 6,
            py: 8,
            gap: 5,
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        {/*{plusLicense && renderLines()}*/}

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flex: '1 1 auto' }}>
            <m.div variants={varFade('inLeft', { distance: 24 })}>
              <Typography variant="h4" component="h6">
                {plan.planTitle}
              </Typography>
            </m.div>

            <m.div variants={varScale('inX')}>
              <Box
                sx={{
                  width: 32,
                  height: 6,
                  opacity: 0.24,
                  borderRadius: 1,
                  bgcolor: 'error.main',
                  ...(standardLicense && { bgcolor: 'primary.main' }),
                  // ...(plusLicense && { bgcolor: 'secondary.main' }),
                }}
              />
            </m.div>
          </Box>

          <m.div variants={varFade('inLeft', { distance: 24 })}>
            <Box component="span" sx={{ typography: 'h3' }}>
              ${plan.price}
            </Box>
          </m.div>
        </Box>

        <Box sx={{ gap: 2, display: 'flex' }}>
          {plan.icons.map((icon, index) => (
            <Box
              component={m.img}
              variants={varFade('in')}
              key={icon}
              alt={icon}
              src={icon}
              sx={{
                width: 24,
                height: 24,
                ...(
                  (plan.icons.length < 1) && [1, 2].includes(index) && { display: 'none' }
                ),
              }}
            />
          ))}
          {(plan.icons.length < 2) && (
            <Box component={m.span} variants={varFade('in')} sx={{ ml: -1 }}>
              (only)
            </Box>
          )}
        </Box>

        <Stack spacing={2.5}>
          {features.map((feature) => (
            <Box
              key={feature}
              component={m.div}
              variants={varFade('in')}
              sx={{
                gap: 1.5,
                display: 'flex',
                typography: 'body2',
                alignItems: 'center',
              }}
            >
              <Iconify width={16} icon="eva:checkmark-fill" />
              {feature}
            </Box>
          ))}

          <m.div variants={varFade('inLeft', { distance: 24 })}>
            <Divider sx={{ borderStyle: 'dashed' }} />
          </m.div>

          {options.map((option, index) => (
              <Box
                key={index}
                component={m.div}
                variants={varFade('in')}
                sx={{
                  gap: 1.5,
                  display: 'flex',
                  typography: 'body2',
                  alignItems: 'center',
                  ...(!option.available && { color: 'text.disabled', textDecoration: 'line-through' }),
                }}
              >
                <Iconify
                  width={18}
                  icon={!option.available ? 'mingcute:close-line' : 'eva:checkmark-fill'}
                />
                {option.optionName}
              </Box>
            ))}
        </Stack>

        <m.div variants={varFade('inUp', { distance: 24 })}>
          <Button
            fullWidth
            // variant={plusLicense ? 'contained' : 'outlined'}
            variant='outlined'
            color="inherit"
            size="large"
            target="_blank"
            rel="noopener noreferrer"
            href={paths.minimalStore}
          >
            Get started
          </Button>
        </m.div>
      </Box>
  );
}
