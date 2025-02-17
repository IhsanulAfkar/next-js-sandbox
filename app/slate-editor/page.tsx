import SlatePage from '@/components/pages/slate/SlatePage'
import { Metadata, NextPage } from 'next'
export const metadata:Metadata = {
    title:'Slate JS'
}
const Page: NextPage = ({}) => {
  return <SlatePage/>
}

export default Page