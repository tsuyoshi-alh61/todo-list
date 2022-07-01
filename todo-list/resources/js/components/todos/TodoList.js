import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import ToDoSummary from "./TodoSummary";
import CreateTodoModal from "../modal/CreateTodoModal";
import CommonLink from "../layout/common/CommonLink";

const useStyles = makeStyles({
    button: {
        '&:hover': {
            backgroundColor: '#6666ff'
        }
    }
});

export default function TodoList({toDos = [], ...props}) {
    const classes = useStyles();

    const displayTodos = toDos['length'] ? (
        <Box padding="1rem" textAlign="left">
            <Grid container spacing={3}>
                { toDos && toDos.map(todo => {
                    return (
                        <Grid item xs={12} key={todo['id']}>
                            <CommonLink to={'/todo/' + todo['id']} content={<ToDoSummary todo={todo} />} />
                        </Grid>
                    )
                }) }
            </Grid>
        </Box>
    ) : (
        <Box padding="2rem" textAlign="center">
            <Typography variant="subtitle1" gutterBottom>
                まだ登録されたToDoはありません。
            </Typography>
        </Box>
    )

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <React.Fragment>
            <Box padding="2rem" textAlign="center">
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={props['handleOpen']}
                >
                    TODOを登録する
                </Button>
            </Box>
            {displayTodos}
            <Modal
                open={props['open']}
                onClose={props['handleClose']}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CreateTodoModal addTodo={props['addTodo']}/>
                </Box>
            </Modal>
        </React.Fragment>
    )
}