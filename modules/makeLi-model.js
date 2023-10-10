// 포켓몬스터 한글 배열을 HTML Li 태그로 만들어주는 함수
function makeLiTagPokemonList(pokemonKorName) {
  if(Array.isArray(pokemonKorName)===true){
    let nowArr = [];
    for (let i=0; i <pokemonKorName.length; i++){
      nowArr.push(`<li>${pokemonKorName[i]}</li>`);
    }
    return nowArr.join(" ");
  } else {
    // ? 새로보는 콤보, new 생산자와 Error 메소드
    return new Error('배열이 아닙니다.')
  }
}

module.exports = makeLiTagPokemonList;

/**
 * 직관성을 위해 li태그를 함수로 만들어
 * 기능적인 부분에서는 안티패턴. (좀 더 포괄적이면 좋음)
 * 
 * 오로지 '한 가지 일'만을 수행하는 함수를 만들어야 한다.
 * 
 * 위의 함수는 '배열'이여야만 작동하게끔 조정했고,
 * 문자열 <li>포켓몬명</li> 에서 li의 태그 노드는 리터럴이기 때문에 좋지는 않음
 * 매개변수 약간 더 조정하면, 조금 더 유연하게 만들어 볼 수 있다.
 * 
 * 모듈이므로, 거의 모든 경우 리턴이 필요
 * ! 리턴이 필요없는 모듈은 별도로 관리한다.
 */