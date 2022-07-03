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

        var format_str = 'YYYY-MM-DD';
        format_str = format_str.replace(/YYYY/g, year_str);
        format_str = format_str.replace(/MM/g, month_str);
        format_str = format_str.replace(/DD/g, day_str);
        return format_str;
    }
    return '';
}