import { NextPage } from 'next'
import { ReactNode } from 'react'
import { SessionProvider as AuthSessionProvider } from "next-auth/react"

interface Props {
    children: ReactNode
}

const SessionProvider: NextPage<Props> = ({ children }) => {
    return <AuthSessionProvider>
        {children}
    </AuthSessionProvider>
}

export default SessionProvider