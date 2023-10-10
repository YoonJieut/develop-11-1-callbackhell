const _pokemonKorName = require('./pokemon-model');
const makeLiTagPokemonList = require('./makeLi-model');

/**
 * 포켓몬 한글 배열이 정상인지 출력
 * li 태그를 만느는 모듈이 정상적으로 들어왔는지 확인
 */
// console.log(_pokemonKorName);
// console.log(typeof(makeLiTagPokemonList));

const HTMLTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Pokemon List</h1>
  <ul>
    ${makeLiTagPokemonList(_pokemonKorName)}
  </ul>
</body>
</html>
`;

// 정상적으로 조립됐나 확인
// html을 제작하는 것이긴 하나, html로 해석되기 전에는 단순 문자열 조합일 뿐이다.
// server가 html로 해설할 것
// console.log(HTMLTemplate);

module.exports = HTMLTemplate;