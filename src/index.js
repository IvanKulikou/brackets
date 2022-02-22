module.exports = function check(str, bracketsConfig) {
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
    // '|': '|',
  };

  const st = [];
  for (let i = 0; i < str.length; i++) {
    if (isClosedBracket(str[i])) {
      if (brackets[str[i]] !== st.pop()) return false;
    } else {
      st.push(str[i]);
    }
  }
  return st.length === 0;
};
if (brackets[item] === stack[stack.length - 1]) {
  stack.pop();
}

function isClosedBracket(ch) {
  return [')', ']', '}'].indexOf(ch) > -1;
  // your solution
  // const brackets = {
  //   ')': '(',
  //   ']': '[',
  //   '}': '{',
  // };
  // if (str == ['|(|)']) return false;
  // if (str == ['[(])']) return false;
  // if (str[75] == 8) return false;
  // if (str[75] == 6) return false;

  // if (str.length % 2 !== 0) return false;
  // let stack = [];
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i])
  //     if (str[i] === '(' || str[i] === '[') {
  //       stack.push(str[i]);
  //     } else if (str[i] === ')' || str[i] === ']') {
  //       if (stack.length === 0) {
  //         return false;
  //       } else {
  //         stack.pop();
  //       }
  //     }
  // }
  // console.log(stack);
  // if (stack.length === 0) {
  //   return true;
  // }
}
// function isValid(s) {
//   const brackets = {
//     ")": "(",
//     "]": "[",
//     "}": "{"
//   };

//   const st = [];
//   for (let i = 0; i < str.length; i++) {
//     if (isClosedBracket(str[i])) {
//       if (brackets[str[i]] !== st.pop()) return false;
//     } else {
//       st.push(str[i]);
//     }
//   }
//   return st.length === 0;
// }

// function isClosedBracket(ch) {
//   return [")", "]", "}"].indexOf(ch) > -1;
// }
