import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function ToDoSummary(props) {
    const { todo } = props;
    return (
        <Box sx={{minWidth: 200, maxWidth: 640, margin: 'auto'}}>
            <Card >
                <CardContent style={{paddingBottom: 16}}>
                    <Typography variant="h5" component="div">
                        {todo['title']}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}