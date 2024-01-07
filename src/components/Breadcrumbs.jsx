import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../App.css'

const Breadcrumbs = () => {
    const { pathname } = useLocation()
    const pathnames = pathname.split('/').filter((x) => x)
    let breadcrumbPath = ''
    return (
        <div className='breadcrumbs'>
            {/* <Link to='/'>Home</Link> */}
            {pathnames.length > 0 && <Link to='/'>Home</Link>}
            {
                pathnames.map((name, index) => {
                    breadcrumbPath += `/${name}`;
                    const isLast = index === pathnames.length
                    return isLast ? <span>/ {name}</span> : (
                        <span>/ <Link key={breadcrumbPath} to={breadcrumbPath}>{name}</Link> </span>
                    )
                })
            }
        </div>
    )
}

export default Breadcrumbs