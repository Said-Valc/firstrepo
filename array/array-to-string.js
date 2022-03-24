let letters = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p'];

// добавь в конец массива letters символ 't' (не напрямую, а с помощью метода).
// затем выведи в консоль этот массив в виде целого слова.
letters.push('t');
let letters_arr = letters.join('');
console.log(letters.join(''));
// выведи тот же массив в консоль, но между каждым символом должен стоять тире.
// т.е. в консоле будет вот так: j-a-v-a-s-c-r-i-p-t

console.log(letters.join('-'));

const words = ['html', 'css'];

// выведи в браузер строку 'html & css' <- (точно в точь как в примере)

console.log(words.join(' '));

// добавь в массив words еще один элемент "git" 
words.push('git');
// и выведи в консоль строку "html-css-git".
console.log(words.join('-'));