import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { DatePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'

export default function WorkdayPicker() {
  const [value, setValue] = useState<Dayjs | null>(null)

  const onChange = (newValue: Dayjs | null) => {
    setValue(newValue)
  }

  return (
    <DatePicker
      label="workday"
      value={value}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} />}
    />
  )
}
