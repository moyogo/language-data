if (process.argv.length < 3) {
  console.log(`Insufficient arguments. Example usage:
  node sortAlphabet.js "A B C D a b c d" "de-Latn"
  `);
  return;
}

let locale = "en-Latn";
if (process.argv.length >= 4)
locale = process.argv[3];

let alphabet = process.argv[2];

function sortAlphabet(alphabet, locale) {
  alphabet = alphabet.toLowerCase() + ' ' + alphabet.toUpperCase();
  alphabet = alphabet.replace(/i̇/g, 'i'); // replace i followed by combining dot above
  let array = alphabet.split(" ").filter(c => c);
  array = Array.from(new Set(array));
  console.log(locale);
  array.sort((a, b) => a.localeCompare(b, locale, { caseFirst: 'upper' }));
  return array.join(' ');
}

//console.log(sortAlphabet(alphabet, locale));

ss = "I i İ ı";

aa = ss.split(" ").sort((a,b) => a.localeCompare(b, "tr-Latn", { caseFirst: "upper"}));

console.log(ss);
console.log(aa);