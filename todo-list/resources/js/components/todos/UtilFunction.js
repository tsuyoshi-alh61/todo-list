import React from "react";
import _ from 'lodash';

/**
 * TODOリストをID順に昇順ソート
 */
export function sortTodosByAsc(todos) {
    if(!_.isEmpty(todos)) {
        todos.sort((next, current) => { return next.id - current.id });
        return todos;
    }

    return todos;
}

/**
 * TODOリストをID順に降順ソート
 */
export function sortTodosByDesc(todos) {
    if(!_.isEmpty(todos)) {
        todos.sort((next, current) => { return current.id - next.id });
        return todos;
    }

    return todos;
}

/**
 * TODOリストを優先度高い順にソート
 */
export function sortTodoByPriority(todos) {
    if(!_.isEmpty(todos)) {
        todos.sort((next, current) => { return current.priority - next.priority });
        return todos;
    }

    return todos;
}

/**
 * TODOリストを未完了順にソート
 */
export function sortTodoByIsDone(todos) {
    if(!_.isEmpty(todos)) {
        todos.sort((next, current) => {
            return (next['is_done'] === current['is_done'])? 0 : next['is_done']? 1 : -1;
        });
    }

    return todos;
}

/**
 * ダッシュボード画面に出力するTODOリストをソート
 */
export function defaultSortTodo(todos) {
    if(!_.isEmpty(todos)) {
        // 降順ソート
        let sortedByDesc = sortTodosByDesc(todos);
        // 優先度高い順ソート
        let sortedByPriority = sortTodoByPriority(sortedByDesc);
        // 未完了
        let sortedByIsDone = sortTodoByIsDone(sortedByPriority);
        return sortedByIsDone;
    }

    return todos;
}

/**
 * 入力した日付と現在の日付を比較
 * ※現在の日付と同じまたは、未来の日付の場合、TRUEを返す
 * ※現在の日付より過去の日付の場合、FALSEを返す
 */
export function compareDate(targetDate) {
    // 入力した日付から、年、月、日を抽出
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