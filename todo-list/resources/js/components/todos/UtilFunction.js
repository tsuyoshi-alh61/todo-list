import React from "react";
import _, { cloneDeep } from 'lodash';

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
        return new Promise((resolve, reject) => {
            todos.sort((next, current) => { return current.priority - next.priority });
            resolve(todos);
        })
    }

    return todos;
}

/**
 * TODOリストを未完了順にソート
 */
export function sortTodoByIsDone(todos) {
    if(!_.isEmpty(todos)) {
        return new Promise((resolve, reject) => {
            todos.sort((next, current) => {
                return (next['is_done'] === current['is_done'])? 0 : next['is_done']? 1 : -1;
            });
            resolve(todos);
        })
    }
    return todos;
}

/**
 * TODOリストを日付が古い順にソート
 */
export function sortTodoByDeadline(todos) {
    if(!_.isEmpty(todos)) {
        return new Promise((resolve, reject) => {
            // JavaScrioptがサポートしている最大日時を設定
            const distantFuture = new Date(8640000000000000);
            todos.sort(function(next, current){
                let dateNext = next['dead_line'] ? new Date(next['dead_line']) : distantFuture
                let dateCurrent = current['dead_line'] ? new Date(current['dead_line']) : distantFuture
                return (
                    dateNext.getTime() - dateCurrent.getTime()
                );
            });
            resolve(todos);
        });
    }
    return todos;
}

/**
 * ダッシュボード画面に出力するTODOリストをソート
 */
export async function defaultSortTodo(todos) {
    if(_.isEmpty(todos)) {
        return todos;
    }

    let copiedTodos = _.cloneDeep(todos);
    // 優先度の高い順ソート
    let sortedByPriority = await sortTodoByPriority(copiedTodos)
    .then((result) => {
        return result;
    });
    // 日付の古い順ソート
    let sortedByDeadline = await sortTodoByDeadline(sortedByPriority)
    .then((result) => {
        return result;
    });
    // 未完了昇順ソート
    let sortedByIsDone = await sortTodoByIsDone(sortedByDeadline)
    .then((result) => {
        return result;
    });

    return sortedByIsDone;
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