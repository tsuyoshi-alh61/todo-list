import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function ToDoSummary({todo}) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                {/* <Typography sx={{ fontSize: 14 }} color="textSecondary" gutterBottom>
                Word of the Day
                </Typography> */}
                <Typography variant="h5" component="div">
                    {todo['title']}
                </Typography>
                {/* <Typography sx={{ mb: 1.5 }} color="textSecondary">
                adjective
                </Typography>
                <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography> */}
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    )
}