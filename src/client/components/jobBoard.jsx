import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}))

const jobBoardItems = [
  'Potential Applications',
  'Recently Applied',
  'In Progress',
  'Interview Stage',
  'Finished application'
]

const JobBoard = () => {
  const classes = useStyles();

  return (
    <Box minWidth="1300px">
      <Grid container justifyContent="space-between"
        wrap="nowrap"
        alignItems="flex-start"
        spacing={1}>
        {jobBoardItems.map(item => (
          <Grid item alignContent="center">
            <Container>
              <Typography align="center">{item}</Typography>
              <Button variant="contained" color="primary">
                <Typography>Create Application</Typography>
              </Button>
            </Container>
          </Grid>

        ))}
      </Grid>
    </Box>
  )
}

export default JobBoard;