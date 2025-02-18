import AuthJSPage from '@/components/pages/auth-js/AuthJSPage'
import { Metadata, NextPage } from 'next'

export const metadata:Metadata = {
  title:'Auth JS',
}
const Page: NextPage = ({}) => {
  return <AuthJSPage/>
}

export default Page