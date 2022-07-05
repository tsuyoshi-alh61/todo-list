import React, { useState } from 'react';
import DateTimePicker, { registerLocale } from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import ja from 'date-fns/locale/ja';
import _ from 'lodash';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core';
import { compareDate } from './UtilFunction';
import { converDateToString } from '../utility/CommonFunction';
import { CATEGORY_VALUE } from '../../config/categoryValues';

export default function EditTodo(props) {
    const { id, title, dead_line, priority, editTodo } = props;
    // DatePickerの表示を日本語に設定
    registerLocale('ja', ja);

    // 入力項目の初期値
    const initialValues = {
        id: id,
        title: title,
        deadLine: handleDeadLine(dead_line),
        priority: priority
    }

    // state定義
    const [inputValues, setInputValues] = useState(initialValues);

    function handleInputChange(e) {
        setInputValues({ ...inputValues, [e.target.id]: e.target.value})
    }

    function handleDatePicker(deadLine) {
        if(compareDate(deadLine)) {
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

        editTodo(copiedInputValues);
    }

    function handleDeadLine(deadLine) {
        if(_.isString(deadLine)) {
            return new Date(deadLine);
        }
        if(_.isEmpty(deadLine)) {
            return null;
        }
        return inputValues['deadLine'];
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
                    <div>
                        <Select
                            defaultValue={CATEGORY_VALUE['TODO_PRIORITY']['OPTIONS'].find(element => element['value'] == inputValues['priority'])}
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