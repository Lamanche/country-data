import React from 'react'
import { CircularProgress } from "@material-ui/core";

const Loading = () => {
    return (
        <div style={{display: 'flex', height: '60vh', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress />
        </div>
    )
}

export default Loading
