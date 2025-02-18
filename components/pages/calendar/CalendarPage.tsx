'use client'
import { NextPage } from 'next'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
interface Props {}

const CalendarPage: NextPage<Props> = ({}) => {
  return <div>
     <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />
  </div>
}

export default CalendarPage