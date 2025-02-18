export const CalendarMD = `
**Calendar** [(FullCalendar)](https://fullcalendar.io/docs/react) 

installation
\`\`\`
npm install @fullcalendar/core @fullcalendar/react @fullcalendar/daygrid
\`\`\`

usage 
\`\`\`jsx
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />
  )
}
\`\`\`
`