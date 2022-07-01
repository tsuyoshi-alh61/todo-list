import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { withCookies } from "react-cookie";
import _ from 'lodash';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EditTodoModal from '../modal/EditTodoModal';
import { callGetTodoByIdApi } from '../../apiCaller/read';
import { callUpdateTodo } from '../../apiCaller/update';
import { callDeleteTodoApi } from '../../apiCaller/delete';

function TodoDetails(props) {
    const params = useParams ();
    const history = useNavigate();
    const { cookies } = props;

    // state定義
    const [ todoData, setTodoData ] = useState([]);
    const [ open, setOpen ] = useState(false);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    useEffect(() => {
        if(cookies['cookies']['name']) {
            getTodo();
        } else {
            history('/signin');
        }
    }, [])

    /**
     * 対象のID情報を保有するデータを取得
     */
    async function getTodo() {
        callGetTodoByIdApi(params['id'])
        .then(res => {
            setTodoData(res.data[0]);
        })
    }

    /**
     * TODO編集処理を実行
     * @param {object} todo 
     */
    function editTodo(todo) {
        // モーダルを閉じる
        handleClose();
        // Todoを登録するAPI呼び出し
        callUpdateTodo(todo);
        // ダッシュボード画面へ繊維
        history('/');
    }

    function deleteTodo() {
        // モーダルを閉じる
        handleClose();
        // Todo を削除するAPI呼び出し
        callDeleteTodoApi(params);
        // ダッシュボード画面へ繊維
        history('/');
    }

    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={() => handleClose()}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box className='TodoDetails modalContents'>
                    <EditTodoModal {...todoData} editTodo={(todo) => editTodo(todo)}/>
                </Box>
            </Modal>
            <Container maxWidth='sm' style={{marginTop: '50px'}} className='TodoDetails'>
                <Card sx={{ minWidth: 275 }}>
                    <CardActions className='buttonArea'>
                        <Button color={'primary'} variant='contained' size='small' onClick={() => handleOpen()}>
                            <Tooltip title='編集'>
                                <EditIcon />
                            </Tooltip>
                        </Button>
                        <Button color={'secondary'} variant='contained' size='small' onClick={() => deleteTodo()}>
                            <Tooltip title='削除'>
                                <DeleteIcon />
                            </Tooltip>
                        </Button>
                    </CardActions>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color='textSecondary' gutterBottom>
                        Word of the Day
                        </Typography>
                        <Typography variant='h5' component='div'>
                            {todoData['title']}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='textSecondary'>
                        adjective
                        </Typography>
                        <Typography variant='body2'>
                        well meaning and kindly.
                        <br />
                        {'a benevolent smile'}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </React.Fragment>
    )
}

export default withCookies(TodoDetails);