import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from "@material-ui/core/Backdrop";

export default function Loading(props) {
    const { showBackdrop } = props;
    return (
        <Backdrop open={showBackdrop}>
            <CircularProgress />
        </Backdrop>
    )
}