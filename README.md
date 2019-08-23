# The Project

Linguistic data especially useful for font designers: pangrams, sample sentences, character sets and metadata for the languages of the world. Extent and completeness of the data is limited, contributions are welcome!

Data structure: [`/dist/entryFormat.md`](https://github.com/hyvyys/language-data/blob/master/dist/entryFormat.md)

# Usage

## ES6 module

Install from NPM `npm i language-data`, or from GitHub `npm i hyvyys/language-data`. Example of usage:

```javascript
import LanguageData from 'language-data';

const polish = LanguageData.find(l => l.language == 'Polish');

console.log(JSON.stringify(polish, null, 2));
// ​{
//   "language": "Polish",
//   "region": "European",
//   "speakers": 40000000,
//   "pangrams": [
//     "Koń i żółw grali w kości z piękną ćmą u źródła."
//   ],
//   "letterings": [
//     "Aerofłot Bóbr Część Ćmić Dyndasz Ernest Farfocel Gringo Hochsztapler Irbis Jajko Krokus Lalka Łękotka Mąkami Nanizać Obrok Ósemka Poprzestań Quiz Rzeżączka Schniesz Świąt Tarty Uzurpator Victoria Warszawa Xero Yeti Złorzeczyć Źrebak Żółtko"
//   ],
//   "gotchas": [
//     {
//       "topic": "łł",
//       "tags": [
//         "metrics"
//       ],
//       "tests": [
//         "Kołłątaj Piłka Ełk Półkole Półton PÓŁTON Radziwiłłów"
//       ]
//     }
//   ],
//   "specialCharacters": "Ą ą Ć ć Ę ę Ł ł Ń ń Ó ó Ś ś Ź ź Ż ż",
//   "htmlTag": "pl",
//   "opentypeTag": "PLK",
//   "script": "Latn",
//   "scriptName": "Latin",
//   "sentences": [],
//   "paragraphs": [],
//   "smallcaps": [],
//   "alphabet": "A a Ą ą B b C c Ć ć D d E e Ę ę F f G g H h I i J j K k L l Ł ł M m N n Ń ń O o Ó ó P p Q q R r S s Ś ś T t U u V v W w X x Y y Z z Ź ź Ż ż"
// }
```

## JSON
Full data is exported as a JSON file in [`/dist/language-data.json`](https://github.com/hyvyys/language-data/blob/master/dist/language-data.json).

If you want a file limited to the data you're interested in, you can build it yourself. You'll need Node.js (>= v10.15.3). Clone the project, install dependencies `npm i`, and build it `npm run build -- [fields]` where `[fields]` is a space-delimited list of fields you want to include, e.g.:

```
npm run build -- script speakers pangrams
```

The list of available fields with their descriptions is in [`/dist/entryFormat.md`](https://github.com/hyvyys/language-data/blob/master/dist/entryFormat.md).

# Roadmap

  * Add missing fields `pangram` — for example choose from [http://clagnut.com/blog/2380/], but not all languages are present there.
  * Add missing fields `lettering` — for example using [Lettering](https://hyvyys.github.io/Lettering/).
  * Add missing fields `alphabet` and `specialCharacters`: develop functions to generate them, for example `specialCharacters` can be generated by removing `/[A-Za-z]/` from `alphabet` if `script == 'Latn'`.

# Contributing

In development, you can test your changes by running:

```
npm run test
```

To build data, run:

```
npm run build
```

Both scripts internally turn debugging messages on.
You can also do this when using the module like this:

```javascript
import { LanguageDataParser } from 'language-data';
new LanguageDataParser({ debug: true }).getData();
```