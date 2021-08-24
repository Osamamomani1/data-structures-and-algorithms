let validateBrackets = (string) => {
    let array = [];

    let open = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closed = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < string.length; i++) {

        let char = string[i];

        if (open[char]) {
            array.push(char);
        } else if (closed[char]) {
            if (open[array.pop()] !== char) return false;
        }
    }
    return array.length === 0;
}


let tester = validateBrackets('')
console.log(tester);

module.exports=validateBrackets