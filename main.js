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

function len(text3){
    return text3.length;
}


/* Custom Protype Objects */

String.prototype.lower = function(){
    return this.trim().toLowerCase();
}

String.prototype.upper = function(){
    return this.trim().toUpperCase();
}

String.prototype.isdigit = function(){
    if (parseInt(this.trim() % 1 === 0 )){
        return true;
    }
    else{
        return false;
    }
}