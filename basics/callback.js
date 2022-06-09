const isEven = (number, callback) => {
    setTimeout(() => {
        if (typeof number === 'number') {
            if (number % 2 === 0) {
                callback(null, true)
            } else {
                callback(null, false)
            }
        } else {
            callback('Invalid Number Format', null)
        }
    }, 3000);
}

isEven(21, (err, data) => {
    if (err) {
        console.log('Error Occurred:', err)
        return
    }

    if (data) {
        console.log('Yay! Its Even')
    } else {
        console.log('Meh! Its Odd')
    }
})