function print(text1){
    return text1
}

function input(text2){
    var inputtext=prompt(text2)
    if (inputtext!="" && inputtext!=null){
        return inputtext;
    }
    else{
        return 'None';
    }
}