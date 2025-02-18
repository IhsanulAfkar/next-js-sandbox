import { NextPage } from 'next'
import { ReactNode } from 'react'
import SessionProvider from './SessionProvider'
import ThemeProvider from './ThemeProvider'

interface Props {
    children: ReactNode
}

const Providers: NextPage<Props> = ({ children }) => {
    return <SessionProvider>
        <ThemeProvider>
            {children}
        </ThemeProvider>
    </SessionProvider>
}

export default Providers