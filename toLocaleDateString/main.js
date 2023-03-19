function prettyDate () {

    const date = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return date.toLocaleTimeString('en',options);
}

console.log(prettyDate());
