import { NextPage } from 'next'
import { ReactNode } from 'react'
import { BreadcrumbProvider } from './BreadcrumbContext'

interface Props {
    children: ReactNode
}

const ContextProvider: NextPage<Props> = ({ children }) => {
    return <BreadcrumbProvider>
        {children}</BreadcrumbProvider>
}

export default ContextProvider