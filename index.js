function receivesAFunction(callback){
    return callback()
}

function add(a, b){
    return a + b;
}

function returnsANamedFunction(){
    return add
}

function returnsAnAnonymousFunction(anonymous){
    return function(){
        console.log('anonymous!')
    }
}