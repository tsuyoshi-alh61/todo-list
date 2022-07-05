/**
 * Date型からString型に変換
 * @param   {object} date // 変換対象の値
 * @returns {string}      // 変換結果
 */
export const converDateToString = (date) => {
    if(date) {
        var year_str = date.getFullYear();
        var month_str = 1 + date.getMonth();
        var day_str = date.getDate();
        var hour_str = date.getHours();
        var mins_str = date.getMinutes();

        var format_str = 'YYYY-MM-DD hh:mm';
        format_str = format_str.replace(/YYYY/g, year_str);
        format_str = format_str.replace(/MM/g, month_str);
        format_str = format_str.replace(/DD/g, day_str);
        format_str = format_str.replace(/hh/g, hour_str);
        format_str = format_str.replace(/mm/g, mins_str);
        return format_str;
    }
    return '';
}