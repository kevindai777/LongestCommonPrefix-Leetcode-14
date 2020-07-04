//Objective is to find the longest common prefix between words in a list.

let strs = ["flower","flow","flight"]


//O(n) solution that continuously modifies the prefix until it's the prefix
//of every word.

if (strs.length == 0) {
    return ''
}

let prefix = strs[0]

for (let string of strs) {
    //As long as it's not the prefix, keep cutting off characters from the prefix.
    while (string.indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1)
    }
    
    if (prefix.length == 0) {
        return ''
    }
}

return prefix