import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Grid, Container } from "@mui/material";

const flowchartSteps = [
  {
    label: "Step 1: Student Registration",
    description: "Students register for the placement session.",
  },
  {
    label: "Step 2: Inviting Companies",
    description: "P&T cell invites companies for internships and placements.",
  },
  {
    label: "Step 3: Company Registration",
    description: "Interested companies contact P&T cell and submit profiles.",
  },
  {
    label: "Step 4: Job Profile Announcement",
    description:
      "Announcement of available job offer(s) as per JNF/INF by P&T cell",
  },
  {
    label: "Step 5: Student Application",
    description: "Company registration by the interested students",
  },
  {
    label: "Step 6: Eligibilty Check",
    description: "Eligibility check by T&P cell as per JNF requirements",
  },
  {
    label: "Step 7: Notifying Eligible Students",
    description: "Notification of eligible student list",
  },
  {
    label: "Step 8: Allotment of Slots",
    description: "Slot allotment to the company as per availability",
  },
  {
    label: "Step 9: Company Visit",
    description: "Selection process by the company",
  },
  {
    label: "Step 10: Results Announcement",
    description: "Announcement of the selection results",
  },
  // Add more steps as needed
];

export default function FlowchartStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleFinish = () => {
    handleReset();
  };

  return (
    <Container maxWidth="lg">
      <Grid item xs={12}>
        <Paper elevation={2} sx={{ p: 1 }}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              color="primary"
              sx={{ pt: 3, pl: 5, pb: 1, textAlign: "left" }}
            >
              Recruitment Process
            </Typography>
          </Grid>
          <Box
            sx={{
              borderRadius: 1,
              display: "flex",
              justifyContent: "center",
              mt: 1,
              mb: 2,
            }}
          >
            <Paper elevation={3} sx={{ width: "35em", p: 2 }}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {flowchartSteps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel>
                      <Typography variant="h6">{step.label}</Typography>
                    </StepLabel>
                    <StepContent>
                      <Paper sx={{ width: "30rem", p: 1, mb: 1 }}>
                        <Typography variant="h6">{step.description}</Typography>
                      </Paper>
                      <Box sx={{ mb: 1 }}>
                        <div>
                          <Button
                            variant="contained"
                            onClick={
                              index === flowchartSteps.length - 1
                                ? handleFinish
                                : handleNext
                            }
                            sx={{ mt: 1, mr: 1 }}
                          >
                            {index === flowchartSteps.length - 1
                              ? "Finish"
                              : "Continue"}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Back
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Paper>
          </Box>
        </Paper>
      </Grid>
    </Container>
  );
}
