function getfullName(fn, ln) {
    setTimeout(() => {
        return fn + ln;
    }, 3000);
    // return fn + ln;
}

function getHobby(x) {
    if(x == 'devpal') {
        console.log('Coding');
        return 'Coding'
    } else if(x == 'arunroy') {
        console.log('Gaming');
        return 'Gaming'
    } else {
        console.log('Playing');
        return 'Playing'
    }
}

function getfullHobbyDetails(x) {
    if(x == 'Coding') {
        console.log('coding is god');
    } else if(x == 'Gaming') {
        console.log('Gaming is fun');
    } else {
        console.log('Playing is best');
    }
}

getfullHobbyDetails(getHobby(getfullName('dev','pal')));
getfullHobbyDetails(getHobby(getfullName('arun','roy')));


let nm = getfullName('dev', 'pal');

