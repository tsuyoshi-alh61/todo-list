import React from "react";
import _ from 'lodash';

/**
 * TODO-ID順に昇順ソート
 */
export function sortTodosByAsc(todos) {
    if(!_.isEmpty(todos)) {
        todos.sort((next, current) => { return next.id - current.id });
        return todos;
    }

    return todos;
}

/**
 * TODO-ID順に降順ソート
 */
export function sortTodosByDesc(todos) {
    if(!_.isEmpty(todos)) {
        todos.sort((next, current) => { return current.id - next.id });
        return todos;
    }

    return todos;
}

/**
 * TODOを優先度高い順にソート
 */
export function sortTodoByPriority(todos) {
    if(!_.isEmpty(todos)) {
        todos.sort((next, current) => { return current.priority - next.priority });
        return todos;
    }

    return todos;
}

export function defaultSortTodo(todos) {
    if(!_.isEmpty(todos)) {
        let sortedByDesc = sortTodosByDesc(todos);
        let sortedByPriority = sortTodoByPriority(sortedByDesc);
        return sortedByPriority;
    }

    return todos;
}

export function compareDate(targetDate) {
    // 選択した日付から、年、月、日を抽出
    let targetDateYear = targetDate.getFullYear();
    let targetDateMonth = targetDate.getMonth();
    let targetDateDay = targetDate.getDate();

    // 現在の日付から、年、月、日を抽出
    const date = new Date();
    let dateYear = date.getFullYear();
    let dateMonth = date.getMonth();
    let dateDay = date.getDate();

    if(targetDateYear < dateYear) {
        return false;
    }

    if(targetDateMonth < dateMonth) {
        return false;
    }

    if(targetDateDay < dateDay) {
        return false;
    }

    return true;
}