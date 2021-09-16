import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';

const CreateNote = () => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })
    const InputEvent=(event)=>{
        const [name, value] = event.target

        setNote((preData)=>{
            return{
                ...preData,
                [name]:value,
            }
        })
    }
    const addEvent=()=>{
        
    }
    return (
        <>
            <div className="main_note">
                <form>
                    <input
                        type="text"
                        name="title"
                        value={note.title}
                        onChange={InputEvent}
                        placeholder="Title"
                        autoComplete="off" />
                    <textarea
                        rows=''
                        column=""
                        name="content"
                        value={note.content}
                        onChange={InputEvent}
                        placeholder="Write A Note" />
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button>
                </form>
            </div>
        </>
    )
}

export default CreateNote
