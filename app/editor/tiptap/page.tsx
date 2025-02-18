import RichEditor from '@/components/pages/dashboard/rich-editor/RichEditor'
import { Metadata, NextPage } from 'next'

export const metadata:Metadata = {
  title:'Tiptap',
}
const Page: NextPage = ({}) => {
  return <RichEditor/>
}

export default Page