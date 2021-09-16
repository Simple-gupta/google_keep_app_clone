import React from 'react'
import KeepHeader from './KeepHeader'
import KeepFooter from './KeepFooter'
import CreateNote from './CreateNote'
import Note from './Note'
import './Keep.css'
const Keep = () => {
    return (
        <>
        <KeepHeader/>
        <CreateNote/>
        <Note/>
        <KeepFooter/>
        </>
    )
}

export default Keep
