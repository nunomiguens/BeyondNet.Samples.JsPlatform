import { useEffect, useState } from "react";
import { ButtonGroup, Button, Container, TextField } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { getAppInsights } from "../services/telemetry-service";
import TelemetryProvider from "../services/telemetry-provider";
import { APP_INSIGHT_KEY } from "../models/constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    log: {
      width: "100em",
      padding: "5px",
      margin: "5px",
    },
    root: {
      display: "flex",
      flexDirection: "row",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    events: {
      display: "flex",
      flexDirection: "column",
    },
  })
);

const Funnels = (): JSX.Element => {
  const [Log, setLog] = useState("");

  const classes = useStyles();

  let appInsights: ApplicationInsights;

  const handleEvent = (name: string, properties: any): void => {
    setLog(`${Log}
        ${new Date().toString()} - Event: ${name} Properties: ${JSON.stringify(
      properties
    )} `);

    appInsights.trackEvent({
      name,
      properties,
    });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    appInsights = getAppInsights();
  }, [Log]);

  return (
    <Container className={classes.root}>
      <TelemetryProvider
        instrumentationKey={APP_INSIGHT_KEY}
        after={() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          appInsights = getAppInsights();
        }}
      >
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
        >
          <Button
            onClick={() =>
              handleEvent("SELECT FILE", {
                properties: { date: new Date() },
              })
            }
          >
            SELECT FILE
          </Button>
          <Button
            onClick={() =>
              handleEvent("PARSE FILE", { properties: { date: new Date() } })
            }
          >
            PARSE FILE
          </Button>
          <Button
            onClick={() =>
              handleEvent("PROCESS FILE", {
                properties: { date: new Date() },
              })
            }
          >
            PROCESS FILE
          </Button>
          <Button
            onClick={() =>
              handleEvent("SEND EMAIL", { properties: { date: new Date() } })
            }
          >
            SEND EMAIL
          </Button>
        </ButtonGroup>
      </TelemetryProvider>
      <div>
        <TextField
          id="outlined-log-static"
          label="Log"
          multiline
          defaultValue={Log}
          variant="outlined"
          className={classes.log}
        />
      </div>
    </Container>
  );
};

export default Funnels;
