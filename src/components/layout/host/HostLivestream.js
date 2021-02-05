import React from 'react'

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "90%",
    }
}))

function HostLivestream() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            This is HostLivestream
        </div>
    )
}

export default HostLivestream
