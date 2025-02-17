import TinyMCE from '@/components/pages/tinymce/Tinymce'
import { Metadata, NextPage } from 'next'

const metadata:Metadata = {
    title:'Rich Editor',
  }
const Page: NextPage = ({}) => {
  return <TinyMCE/>
}

export default Page