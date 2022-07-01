import React from 'react';
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

export default function CommonLink(props) {
  return (
    <Link
        component={RouterLink}
        to={props.to} //遷移先
        style={{color: 'white'}}
        underline="none"
    >
        {props.content}
    </Link> )
}