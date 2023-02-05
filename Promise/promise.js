const Posts = [
    {
        title: 'Title One',
        body: 'This is Post One'
    },
    {
        title: 'Title Two',
        body: 'This is Post Two'
    },
    {
        title: 'Title Three',
        body: 'This is Post Three'
    },
    {
        title: 'Title Four',
        body: 'This is Post Four'
    },
    {
        title: 'Title Five',
        body: 'This is Post Five'
    },
    {
        title: 'Title Six',
        body: 'This is Post Six'
    }
]

const getPosts = () => {

    //After page load will be 1sec delay to get all the posts
    setTimeout(() => {
        
        let output = '';
        //Prepair single object into html list element
        Posts.forEach((post) => {
            output += `<li>${post.title} ${post.body}</li>`;
        });
        //Add to html page
        document.body.innerHTML = output;
        
    }, 2000);
}
getPosts();


const createPost = (singlePost,callback) => {

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(singlePost.title.length > 0 && singlePost.body.length > 0) {
                Posts.push(singlePost);
                resolve();
            } else {
                reject('Title or Body is not present');
            }
    
        }, 5000);
    });
}

createPost({title: 'Title Seven', body: 'This is Seven'})
    .then(getPosts)
    .catch((err) => {console.error(err)});
createPost({title: '', body: 'This is Eight'})
    .then(getPosts)
    .catch((err) => {console.error(err)});
createPost({title: 'Title Nine', body: 'This is Nine'})
    .then(getPosts)
    .catch((err) => {console.error(err)});

    
// createPost({title: 'Title Seven', body: 'This is Seven'}, getPosts);
// createPost({title: 'Title Eight', body: 'This is Eight'}, getPosts);
// createPost({title: 'Title Nine', body: 'This is Nine'}, getPosts);
// createPost({title: '', body: 'This is Ten'}, getPosts);

