import RichEditor from '@/components/pages/dashboard/rich-editor/RichEditor'
import { Metadata, NextPage } from 'next'

const metadata:Metadata = {
  title:'Rich Editor',
}
const Page: NextPage = ({}) => {
  return <RichEditor/>
}

export default Page