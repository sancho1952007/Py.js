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


window.onload=function (){
    console.log('Py.js Will Be Shutdown For A While Due To An Awesome Upgrade...')
}
