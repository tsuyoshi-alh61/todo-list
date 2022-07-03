import React, { useState } from 'react';
import Select from 'react-select';
import DateTimePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ja from 'date-fns/locale/ja';
import _ from 'lodash';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core';
import { converDateToString } from '../utility/CommonFunction';
import { CATEGORY_VALUE } from '../../config/categoryValues';

export default function CreateTodo(props) {
    // DatePickerの表示を日本語に設定
    registerLocale('ja', ja);

    // 入力項目の初期値
    const initialValues = {
        title: '',
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
                <Typography variant='h4' component='h2'>
                    TODO登録画面
                </Typography>
                <MoldTitleElement title={inputValues['title']} event={handleInputChange} />
                <div className='pickerLayout'>
                    <label>期限</label>
                    <DateTimePicker 
                        className='dateTimePicker'
                        showTimeSelect
                        locale='ja'
                        dateFormat='yyyy/MM/dd hh:mm'
                        onChange={handleDatePicker}
                        selected={inputValues['deadLine']}
                        minDate={new Date()}
                    />
                </div>
                <FormControl fullWidth variant='standard' margin='dense'>
                    <label>優先度</label>
                    <div className='input-field'>
                        <Select
                            defaultValue={CATEGORY_VALUE['TODO_PRIORITY']['NORMAL']}
                            placeholder='優先度合を選択してください'
                            options={CATEGORY_VALUE['TODO_PRIORITY']['OPTIONS']}
                            onChange={handlePriority}
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

function MoldTitleElement({title, event}) {
    const Title = styled('div')(({ theme }) => ({
        marginTop: '16px'
      }));

    return (
        <React.Fragment>
            <Title>タイトル</Title>
            <FormControl variant='standard' margin='dense' fullWidth>
                <TextField
                    id='title'
                    type='text'
                    size='small'
                    variant='outlined'
                    defaultValue={title}
                    onChange={event}
                />
            </FormControl>
        </React.Fragment>
    )
}