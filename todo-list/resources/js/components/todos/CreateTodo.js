import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import _ from 'lodash';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { converDateToString } from '../utility/CommonFunction';
import { CATEGORY_VALUE } from '../../config/categoryValues';

export default function CreateTodo(props) {
    const initialValues = {
        title: '',
        content: '',
        deadLine: '',
        priority: 2
    }
    const [inputValues, setInputValues] = useState(initialValues);
    const { addTodo } = props;

    function handleInputChange(e) {
        setInputValues({ ...inputValues, [e.target.id]: e.target.value})
    }

    function handleDatePicker(deadLine) {
        var dateNow = new Date();
        if(deadLine >= dateNow) {
            setInputValues({ ...inputValues, deadLine});
        } else {
            console.log('過去日付は入力できません。');
        }
    }

    function handlePriority(priority) {
        setInputValues({
            ...inputValues,
            priority: priority.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        let copiedInputValues = _.cloneDeep(inputValues);
        if(typeof(inputValues['deadLine']) === 'object') {
            copiedInputValues['deadLine'] = converDateToString(inputValues['deadLine']);
        }

        // TODOの登録処理実行
        addTodo(copiedInputValues);

        // stateのリセット
        setInputValues(initialValues);
    }

    return (
        <div className='createTodo'>
            <Box
                component='form'
                autoComplete='off'
            >  
                <Typography variant='h5' component='h2'>
                    TODO登録画面
                </Typography>
                <FormControl variant='standard' margin='dense'>
                    <TextField
                        sx={{ m: 2 }}
                        id='title'
                        label='タイトル'
                        type='text'
                        defaultValue={inputValues.title}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl variant='standard' margin='dense'>
                    <label>期限</label>
                    <DatePicker dateFormat='yyyy/MM/dd' onChange={handleDatePicker} selected={inputValues['deadLine']} />
                </FormControl>
                <FormControl fullWidth variant='standard' margin='dense'>
                    <label>優先度</label>
                    <div className='input-field'>
                        <Select
                            defaultValue={CATEGORY_VALUE['TODO_PRIORITY']['NORMAL']}
                            placeholder='優先度合を選択してください'
                            options={CATEGORY_VALUE['TODO_PRIORITY']['OPTIONS']}
                            onChange={handlePriority}
                            minDate={new Date()}
                        />
                    </div>
                </FormControl>
                <div className='buttonArea'>
                    <FormControl variant='standard' margin='dense'>
                        <Button color='primary' variant='contained' onClick={handleSubmit}>登録</Button>
                    </FormControl>
                </div>
            </Box>
        </div>
    )
}