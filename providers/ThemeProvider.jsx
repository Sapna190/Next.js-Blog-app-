"use client"
import React, { useContext } from 'react'
import { ThemeContext } from '@/context/themeContext'

const ThemeProvider = ({children}) => {

    const {theme} = useContext(ThemeContext)
  
    return (
    <div className={theme}>
      {children}
    </div>
  )
}

export default ThemeProvider
