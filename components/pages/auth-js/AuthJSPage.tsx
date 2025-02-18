
'use client'
import { signIn, useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { NextPage } from 'next'
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'
import 'react18-json-view/src/dark.css'
import { Card, CardContent } from '@/components/ui/card'
import Markdown from 'react-markdown'
import { AuthJSMD } from './data'
const AuthJSPage: NextPage = ({ }) => {
  const { data: session } = useSession()
  return <>
    <p className='font-bold text-xl'>Example</p>
    <hr />
    <Button variant={'default'} onClick={() => signIn('google')}>Log in With Google</Button>
    <hr />
    <p className='font-bold text-xl'>Session Data</p>
    <hr />
    {session && (
      <Card>
        <CardContent>
          <JsonView src={session} />
        </CardContent>
      </Card>
    )}
    <hr />
    <p className='font-bold text-xl'>Setup</p>
    <div className='prose dark:prose-invert prose-quoteless  max-w-none'>
      <Markdown remarkPlugins={[]}>{AuthJSMD}</Markdown>
    </div>
  </>
}

export default AuthJSPage