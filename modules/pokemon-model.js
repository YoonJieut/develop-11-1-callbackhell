const _pokemon = require('pokemon');
// 라이브러리가 지원하는 메서드 usage 참고
// console.log(_pokemon.all('ko'));

/**
 * 코드 자체에 큰 의미는 없으나
 * 분리해서 관리한다는 것이 매우 중요하다.
 * 
 * '한 번에 한 가지 일만 하라'는 원칙을 지키기 위해서
 * 코드를 분리해서 관리하고 있다.
 * 처음에는 불편하지만, 애플리 케이션의 규모가 커질수록
 * 
 * ! 분류관리가 매우 중요하다
 */

module.exports = _pokemon.all('ko');
