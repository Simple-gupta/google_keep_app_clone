import React from 'react'
import './Keep.css'
import NoteIcon from '@material-ui/icons/Note';
const KeepHeader = () => {
    return (
        <>
       <div className="header">
       <NoteIcon className="noteicon"/>
           <h1>Keep Notes</h1>
       </div>
        </>
    )
}

export default KeepHeader
