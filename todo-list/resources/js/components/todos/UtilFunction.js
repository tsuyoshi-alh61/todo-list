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
        console.log(todos);
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