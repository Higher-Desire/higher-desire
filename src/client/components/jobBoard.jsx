import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Popup from './cardForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}))

const jobBoardItems = [
  { name: 'Potential Applications', cards: [] },
  { name: 'Recently Applied', cards: [] },
  { name: 'In Progress', cards: [] },
  { name: 'Interview Stage', cards: [] },
  { name: 'Finished application', cards: [] }
];

const formData = {
  companyName: '',
  email: '',
  jobTitle: '',
};


const JobBoard = () => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false)
  const [jobs, setJobs] = useState([...jobBoardItems] || jobBoardItems)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [form, setForm] = useState(formData)

  const addCard = () => {
    const arr = []
    jobs.forEach((item, i) => {
      if (i === 0) {
        arr.push(item)
        arr[i].cards.push({ ...form, ...selectedDate })
      }
      else arr.push(item)
    })
    console.log('arr', arr)
    console.log('jobs', jobs)
    setJobs(arr)
    setForm(formData)
  }

  return (
    <Box minWidth="1300px">
      <Popup openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        addCard={addCard}
        form={form}
        setForm={setForm}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <Grid container justifyContent="space-between"
        wrap="nowrap"
        alignItems="flex-start"
        spacing={1}>
        {jobs.map((item, index) => {
          return (
            <Grid item key={index}>
              <Container>
                <Typography align="center">{item.name}</Typography>
                {item.cards.map((card, i) => (
                  <div>
                    <Card>
                      <h3>
                        {card.companyName}
                      </h3>
                      <div>
                        <a href={card.email} />
                        <Typography>{card.jobTitle}</Typography>
                      </div>
                    </Card>
                  </div>

                ))}
                <Button variant="contained" color="primary" key={`button${index}`} onClick={() => setOpenPopup(true)}>
                  <Typography>Create Application</Typography>
                </Button>
              </Container>
            </Grid>

          )
        })}
      </Grid>
    </Box>
  )
}

export default JobBoard;