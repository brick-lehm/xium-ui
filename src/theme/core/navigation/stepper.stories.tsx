import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import StepIcon from '@mui/material/StepIcon';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import StepContent from '@mui/material/StepContent';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';

const meta: Meta<typeof Stepper> = {
  title: 'Navigation/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const verticalSteps = [
  {
    label: 'Select campaign settings',
    description: 'For each ad campaign that you create, you can control how much you spend on clicks and conversions.',
  },
  {
    label: 'Create an ad group',
    description: 'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: 'Try out different ad text to see what brings in the most customers.',
  },
];

export const Default: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
      <Box sx={{ width: 600 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 2 }}>
          <Button onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))} disabled={activeStep === 0}>
            Back
          </Button>
          <Button onClick={() => setActiveStep((prev) => Math.min(steps.length, prev + 1))}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Box>
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(1);

    return (
      <Box sx={{ width: 600 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 2 }}>
          <Button onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))} disabled={activeStep === 0}>
            Back
          </Button>
          <Button onClick={() => setActiveStep((prev) => Math.min(steps.length, prev + 1))}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Box>
    );
  },
};

export const AlternativeLabel: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(1);

    return (
      <Box sx={{ width: 600 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 2 }}>
          <Button onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))} disabled={activeStep === 0}>
            Back
          </Button>
          <Button onClick={() => setActiveStep((prev) => Math.min(steps.length, prev + 1))}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Box>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
      <Box sx={{ width: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {verticalSteps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2, mt: 2 }}>
                  <Button
                    variant="contained"
                    onClick={() => setActiveStep(index + 1)}
                    sx={{ mr: 1 }}
                  >
                    {index === verticalSteps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={() => setActiveStep(index - 1)}
                  >
                    Back
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === verticalSteps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={() => setActiveStep(0)} sx={{ mt: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    );
  },
};

export const WithOptionalSteps: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());

    const isStepOptional = (step: number) => step === 1;

    const isStepSkipped = (step: number) => skipped.has(step);

    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        return;
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };

    return (
      <Box sx={{ width: 600 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: { optional?: React.ReactNode } = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Box sx={{ mt: 2 }}>
          <Button onClick={handleBack} disabled={activeStep === 0}>
            Back
          </Button>
          {isStepOptional(activeStep) && (
            <Button onClick={handleSkip} sx={{ mr: 1 }}>
              Skip
            </Button>
          )}
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Box>
    );
  },
};

export const WithCustomIcons: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(1);

    const icons: { [index: string]: React.ReactElement } = {
      1: <SettingsIcon />,
      2: <GroupAddIcon />,
      3: <VideoLabelIcon />,
    };

    const ColorlibStepIcon = (props: { active?: boolean; completed?: boolean; icon: React.ReactNode }) => {
      const { active, completed, icon } = props;
      return (
        <StepIcon
          icon={icons[String(icon)]}
          active={active}
          completed={completed}
        />
      );
    };

    return (
      <Box sx={{ width: 600 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 2 }}>
          <Button onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))} disabled={activeStep === 0}>
            Back
          </Button>
          <Button onClick={() => setActiveStep((prev) => Math.min(steps.length, prev + 1))}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Box>
    );
  },
};

export const NonLinear: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});

    const totalSteps = () => steps.length;

    const completedSteps = () => Object.keys(completed).length;

    const isLastStep = () => activeStep === totalSteps() - 1;

    const allStepsCompleted = () => completedSteps() === totalSteps();

    const handleNext = () => {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
      setActiveStep(step);
    };

    const handleComplete = () => {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();
    };

    return (
      <Box sx={{ width: 600 }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepLabel onClick={handleStep(index)} sx={{ cursor: 'pointer' }}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 2 }}>
          <Button onClick={handleBack} disabled={activeStep === 0}>
            Back
          </Button>
          <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
            Next
          </Button>
          <Button onClick={handleComplete} disabled={completed[activeStep]}>
            {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
          </Button>
        </Box>
      </Box>
    );
  },
};

export const AllOrientations: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(1);

    return (
      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Horizontal
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Horizontal with Alternative Label
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Vertical
            </Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
      </Stack>
    );
  },
};
