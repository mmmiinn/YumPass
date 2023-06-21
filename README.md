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

### 4. 서버

- Api연계 : Node-express

### 5. 백엔드 서버

- 라우터,db

## 디렉토리 구조(2023.07)

```
client
│── src
│    ├── assets
│    │   └── images
│    ├── components
│    │   ├── @Common
│    │   └── main
│    ├── lib
│    │   ├── api
│    │   ├── hooks
│    │   ├── style
│    │   └── validators
│    ├── mocks
│    │   ├── api
│    │   └── response
│    └── pages
server
    └── Router

```

- `assets` : 정적 파일
- `components` : 컴포넌트(도메인 기준)
- `contexts` : 전역 설정을 위한 ContextAPI 관련 코드
- `lib` : api, hooks, style, validators, utils
- `mocks` : storybook mock api
- `pages` : 페이지 모음
