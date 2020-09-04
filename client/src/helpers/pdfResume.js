const title = "Elena Valeryas rrrr"
let space = false
let firstWord = '';
let secondWord = '';
for (let i = 0; i < title.lenght; i ++) {
  if (title[i] !== ' ' && space !== true) {
    if (title[i] !== ' ') {
      firstWord += title[i]
    } else { i++; soace = true}
  } else {
    secondWord += title[i]
  }
}