import { useState } from 'react'
import { ButtonGroup, Button, Container, TextField } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import * as FullStory from '@fullstory/browser'
import { fs_org } from '../models/constants'

FullStory.init({ orgId: fs_org })

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    log: {
      width: '100em',
      padding: '5px',
      margin: '5px'
    },
    root: {
      display: 'flex',
      flexDirection: 'row',
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    events: {
      display: 'flex',
      flexDirection: 'column'
    }
  })
)

const CustomEvents = (): JSX.Element => {
  const [Log, setLog] = useState('')

  const classes = useStyles()

  const handleEvent = (name: string, properties: any) => {
    setLog(`${Log}
        ${new Date().toString()} - Event: ${name} Properties: ${JSON.stringify(
      properties
    )} `)

    FullStory.event(name, properties)
  }

  return (
    <Container className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button
          onClick={() => handleEvent('INGEST', { project: { PID: 2046 } })}
        >
          Ingest
        </Button>
        <Button
          onClick={() =>
            handleEvent('DISTRIBUTION', { source: { target: 'demo' } })
          }
        >
          Distribution
        </Button>
        <Button
          onClick={() =>
            handleEvent('JOB', { source: { from: 'HMA', to: 'MOS' } })
          }
        >
          Job
        </Button>
      </ButtonGroup>
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
  )
}

export default CustomEvents
