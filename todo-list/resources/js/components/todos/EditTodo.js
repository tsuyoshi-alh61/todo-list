import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import _ from 'lodash';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { converDateToString } from "../utility/CommonFunction";

export default function EditTodo(props) {
    const { id, title, dead_line, priority } = props;
    const initialValues = {
        id: id,
        title: title,
        deadLine: dead_line ?? new Date(),
        priority: priority
    }
    const [inputValues, setInputValues] = useState(initialValues);
    const { editTodo } = props;

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
        editTodo(inputValues);
    }

    const options = [
        { value: '3', label: '高い' },
        { value: '2', label: '普通' },
        { value: '1', label: '低い' }
    ];

    return (
        <div className='createTodo'>
            <Box
                component='form'
                autoComplete='off'
            >  
                <Typography variant="h5" component="h2">
                    TODO登録画面
                </Typography>
                <FormControl variant="standard" margin="dense">
                    <TextField
                        sx={{ m: 2 }}
                        id='title'
                        label='タイトル'
                        type='text'
                        defaultValue={inputValues['title']}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl variant="standard" margin="dense">
                    <label>期限</label>
                    <DatePicker dateFormat="yyyy/MM/dd" onChange={handleDatePicker} selected={new Date(inputValues['deadLine'])} />
                </FormControl>
                <FormControl fullWidth variant="standard" margin="dense">
                    <label>優先度</label>
                    <div className="input-field">
                        <Select
                            defaultValue={options.find(element => element['value'] == 2)}
                            placeholder="優先度合を選択してください"
                            options={options}
                            onChange={handlePriority}
                            minDate={new Date()}
                        />
                    </div>
                </FormControl>
                <div className='buttonArea'>
                    <FormControl variant="standard" margin="dense">
                        <Button color='primary' variant="contained" onClick={handleSubmit}>登録</Button>
                    </FormControl>
                </div>
            </Box>
        </div>
    )
}