import ReactSelectPage from '@/components/pages/react-select/ReactSelectPage'
import { Metadata, NextPage } from 'next'

export const metadata:Metadata = {
  title:'React Select',
}
const Page: NextPage = ({}) => {
  return <ReactSelectPage/>
}

export default Page