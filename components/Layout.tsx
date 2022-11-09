import React from 'react'
import Header from './Header'


interface LayoutI{
    children: JSX.Element[] | JSX.Element;
}
const Layout = ({children}:LayoutI) => {
  return (
    <>
    <Header/>
    {children}
    </>
  )
}

export default Layout