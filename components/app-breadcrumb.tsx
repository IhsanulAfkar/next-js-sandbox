'use client'
import { NextPage } from 'next'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb'
import { useBreadcrumb } from '@/context/BreadcrumbContext'
import Link from 'next/link';
import React from 'react';

interface Props { }

const AppBreadcrumb: NextPage<Props> = () => {
    const { breadcrumbs } = useBreadcrumb();
    return <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={breadcrumb.href + '-' + index}>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem key={breadcrumb.label}>
                        <BreadcrumbLink asChild>
                            <Link href={breadcrumb.href}>{breadcrumb.label}</Link></BreadcrumbLink>

                    </BreadcrumbItem>
                </React.Fragment>
            ))}
        </BreadcrumbList>
    </Breadcrumb>
}

export default AppBreadcrumb