import React from "react";

/**
 * 
 * @param {*} date 
 * @returns 
 */
export const converDateToString = (date) => {
    if(date) {
        var year_str = date.getFullYear();
        var month_str = 1 + date.getMonth();
        var day_str = date.getDate();

        var format_str = 'YYYY-MM-DD';
        format_str = format_str.replace(/YYYY/g, year_str);
        format_str = format_str.replace(/MM/g, month_str);
        format_str = format_str.replace(/DD/g, day_str);
        return format_str;
    }
    return '';
}