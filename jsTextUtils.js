use 'strict';

function first(s) {
  return s.substring(0, 1);
}

function last(s) {
  return s.substring(s.length - 1, s.length);
}

function middle(s) {
  return s.substring(s.length - 1, 1);
}

s = prompt("enter a word");
console.log(first(s));
console.log(last(s));
console.log(middle(s));