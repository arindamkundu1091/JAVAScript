function getfullName(fn, ln, callback) {
    setTimeout(() => {
        let name = fn + ln;
        callback(name);
    }, 3000);
}

function getHobby(x, callback) {
    setTimeout(() => {
        let hobby;
        if(x == 'devpal') {
            console.log('Coding');
            hobby = 'Coding'
        } else if(x == 'arunroy') {
            console.log('Gaming');
            hobby = 'Gaming'
        } else {
            console.log('Playing');
            hobby = 'Playing'
        }
        callback();
    }, 2000);
}

function getfullHobbyDetails(x, callback) {
    let details;
    setTimeout(() => {
        if(x == 'Coding') {
            details = 'coding is god';
            console.log('coding is god');
        } else if(x == 'Gaming') {
            details = 'Gaming is fun';
            console.log('Gaming is fun');
        } else {
            details = 'Playing is bes';
            console.log('Playing is best');
        }
    }, 3000);
}


let nm = getfullName('dev', 'pal' ,(nm) => {
    console.log('name: ', nm);
    getHobby(nm ,(hobby) => {
        console.log('Hobby: ', hobby);
        getfullHobbyDetails(hobby ,(details) => {
            console.log('Details: ', details);
        });
    });
});


