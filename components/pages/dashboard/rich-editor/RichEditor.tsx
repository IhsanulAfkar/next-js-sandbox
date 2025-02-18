import Tiptap from '@/components/ui/tiptap/tiptap'
import { NextPage } from 'next'

interface Props {}

const RichEditor: NextPage<Props> = ({}) => {
  return <>
  <p className='font-bold text-xl'>Rich Editor using Tiptap (On Progress)</p>
    <Tiptap/>
  </>
}

export default RichEditor