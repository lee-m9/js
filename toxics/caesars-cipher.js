/**
 * ROT13 Caesars Cipher
 */

function rot13(str) {
  return str.split('').reduce((a, b) => {
    if (/[a-zA-Z]/.test(b)) {
      a += b.charCodeAt() < 78 ? String.fromCharCode(b.charCodeAt() + 13) : String.fromCharCode(b.charCodeAt() - 13);
    }
    else {
      a += b;
    }
    return a;
  }, '');
}

console.log(rot13("SERR PBQR PNZC"));