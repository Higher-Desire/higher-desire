import { Dialog, DialogContent, DialogTitle, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import React, { useEffect, useState } from 'react';


export default function CardForm(props) {
  const { title, children, openPopup, setOpenPopup,
    addCard, selectedDate, setSelectedDate, form, setForm } = props;

  const dateChange = (date) => {
    console.log(date)
    setSelectedDate(date)
  }
  const onChange = (event) => {
    let newForm = {}
    console.log(event.target.value)
    for (let obj in form) {
      if (obj === event.target.id) newForm[obj] = event.target.value;
      else newForm[obj] = form[obj]
    }
    console.log(newForm)
    setForm(newForm)
  }
  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <div>
          New Application
        </div>
      </DialogTitle>
      <form>
        <DialogContent>
          <FormControl>
            <InputLabel htmlFor="companyName">Company</InputLabel>
            <Input id="companyName" onChange={onChange} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="email">Point of Contact</InputLabel>
            <Input id="email" onChange={onChange} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="jobTitle">JobTitle</InputLabel>
            <Input id="jobTitle" onChange={onChange} />
          </FormControl>
          <FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                id='date'
                label="Date Applied/ Going to Apply"
                onChange={dateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
          <Button color="primary" type='button' variant="contained" onClick={() => {
            setOpenPopup(false)
            addCard();
          }} >Submit</Button>
        </DialogContent>
      </form>
    </Dialog>
  )
}