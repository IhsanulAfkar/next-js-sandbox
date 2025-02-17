'use client'
import { useBreadcrumb } from '@/context/BreadcrumbContext';
import { NextPage } from 'next'
import { useEffect } from 'react';

interface Props { }

const Index: NextPage<Props> = ({ }) => {
    const {  setBreadcrumbs } = useBreadcrumb();

    setBreadcrumbs([{ label: "Blog Posts", href: "/blog" }]);

    return <div></div>
}

export default Index