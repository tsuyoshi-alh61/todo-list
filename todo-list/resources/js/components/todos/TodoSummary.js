import React from 'react';
import _ from 'lodash';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function ToDoSummary(props) {
    const { todo } = props;

    return (
        <Box sx={{minWidth: 200, maxWidth: 640, margin: 'auto'}}>
            <Card >
                <CardContent style={{paddingBottom: 0}}>
                    <Typography variant="h5" component="div">
                        {todo['is_done'] ? (<strike>{todo['title']}</strike>) : (todo['title'])}
                    </Typography>
                </CardContent>
                <CardActions>
                    <DeadlineAlert todo={todo}/>
                </CardActions>
            </Card>
        </Box>
    )
}

function DeadlineAlert({todo}) {
    let dateNow = new Date();
    let dateTodo = new Date(todo['dead_line']);
    
    if(_.isEmpty(todo['dead_line'])) {
        return null;
    }
    
    let dateToDisplay = todo['dead_line'].slice( 0, -3 );
    if(dateNow.getDate() == dateTodo.getDate()) {
        return <Button color='primary'>{`${dateToDisplay} : 期限が近いです`}</Button>;
    }

    if(dateTodo < dateNow) {
        return <Button color='secondary'>{`${dateToDisplay} : 期限が過ぎています`}</Button>;
    }

    return (
        <Button>{dateToDisplay}</Button>
    )
};