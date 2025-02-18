import CKEditorPage from '@/components/pages/ckeditor/CKEditorPage'
import { Metadata, NextPage } from 'next'

const metadata:Metadata = {
  title:'Rich Editor',
}
const Page: NextPage = ({}) => {
  return <CKEditorPage/>
}

export default Page