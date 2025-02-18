'use client'
import { NextPage } from 'next'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"
import { EventSourceInput } from '@fullcalendar/core/index.js'
import Markdown from 'react-markdown'
import { CalendarMD } from './data'
interface Props { }

const CalendarPage: NextPage<Props> = ({ }) => {
  const today = new Date();

  // 5 days before
  const fiveDaysBefore = new Date(today);
  fiveDaysBefore.setDate(today.getDate() - 5);
  const formattedFiveDaysBefore = fiveDaysBefore.toISOString().split('T')[0];

  // 5 days later
  const fiveDaysLater = new Date(today);
  fiveDaysLater.setDate(today.getDate() + 5);
  const formattedFiveDaysLater = fiveDaysLater.toISOString().split('T')[0];

  const events: EventSourceInput = [
    {
      title: 'Example Event',
      start: formattedFiveDaysBefore,
      end: formattedFiveDaysLater
    }
  ]
  const handleDateClick = (arg: DateClickArg) => {
    alert(arg.dateStr)
  }
  return <>
    <p className='font-bold text-xl'>Example</p>
    <hr />
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
      />
    </div>
    <hr />
    <p className='font-bold text-xl'>Setup</p>
    <div className='prose dark:prose-invert max-w-full'>
      <Markdown >{CalendarMD}</Markdown>
    </div>
  </>
}

export default CalendarPage