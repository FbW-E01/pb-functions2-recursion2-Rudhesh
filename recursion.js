const string="hello world"

const reverseString = (str) => {
    return str ? reverseString(str.substr(1)) + str[0] : str ;

}

console.log(reverseString(string));


