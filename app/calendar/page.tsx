import CalendarPage from '@/components/pages/calendar/CalendarPage'
import { Metadata, NextPage } from 'next'

const metadata:Metadata = {
  title:'Calendar',
}
const Page: NextPage = ({}) => {
  return <CalendarPage/>
}

export default Page
