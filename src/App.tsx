import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import WorkdayPicker from './workday/WorkdayPicker'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <WorkdayPicker />
      </div>
    </LocalizationProvider>
  )
}

export default App
