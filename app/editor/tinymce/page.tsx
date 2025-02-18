import TinyMCE from '@/components/pages/tinymce/Tinymce'
import { Metadata, NextPage } from 'next'

export const metadata:Metadata = {
    title:'TinyMCE',
  }
const Page: NextPage = ({}) => {
  return <TinyMCE/>
}

export default Page