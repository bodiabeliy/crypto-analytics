export default function InputFormat(inputValue) {
    var val = inputValue;
    inputValue = "";
    val += '';
    let x = val.split('.');
    let x1 = x?.[0];
    let x2 = x?.length > 1 ? '.' + x?.[1] : '';

    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ' ' + '$2');
    }
    if (x1 !="undefined") {
        inputValue = x1 + x2;
    }
    return inputValue
}