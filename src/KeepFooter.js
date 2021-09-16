import React from 'react'

const KeepFooter = () => {

    const year= new Date().getFullYear();

    return (
            <footer>
                <p>copyright © {year}</p>
            </footer>
     
    )
}

export default KeepFooter
