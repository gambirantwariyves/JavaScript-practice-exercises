import url from 'url';
const urlString = 'https://www.google.com/search?q=hello+world'
const urlObj = new URL(urlString)
console.log(urlObj)
console.log(url.format(urlObj))
console.log(import.meta.url);
console.log(url.fileURLToPath(import.meta.url))
console.log(urlObj.search)
const params = new URLSearchParams(urlObj.search)
console.log(params.get('q'))

params.append('limit', '5');

console.log(params)