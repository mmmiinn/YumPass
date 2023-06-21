## 윰패스

## 시작하기

```bash
$ git clone https://github.com/mmmiinn/YumPass.git
$ cd YumPass
$ yarn
$ yarn start
```

<br/><br/><br/>

## 기술스택

### 1. `React`

### 2. 스타일

- Styled-component

### 3. 상태관리

- 서버상태 : React-Query

## 디렉토리 구조(2023.07)

```
src
├── @types
├── __mocks__
├── assets
│   └── images
├── components
│   ├── @Common
│   └── main
├── lib
│   ├── api
│   ├── hooks
│   ├── style
│   └── validators
├── mocks
│   ├── api
│   └── response
└── pages
    ├── CarListPage
    ├── CenterPage
    ├── ReviewListPage
    └── stories

```

- `@types` : 타입이 없는 라이브러리나 이미지의 타입 지정
- `__mocks__` : jest 테스트 설정 파일
- `assets` : 정적 파일
- `components` : 컴포넌트(도메인 기준)
- `contexts` : 전역 설정을 위한 ContextAPI 관련 코드
- `lib` : api, hooks, style, validators, utils
- `mocks` : storybook mock api
- `pages` : 페이지 모음
