# 필요한 라이브러리 설치

## Clicent

- `npm install @stud` : Smooth scrolling을 위한 패키지      

- `npm install @testing-library/jest-dom` : Jest와 함께 사용하는 DOM 테스트 확장 기능   

- `npm install @testing-library/react` : React 컴포넌트의 테스트 유틸리티   

- `npm install @testing-library/user-event` : 사용자 이벤트를 시뮬레이션하기 위한 유틸리티   

- `npm install axios` : HTTP 클라이언트 라이브러리   

- `npm install gsap` : 애니메이션 라이브러리 (GreenSock Animation Platform)   

- `npm install react` : React 라이브러리   

- `npm install react-dom` : React DOM 관련 라이브러리   

- `npm install react-helmet-async` : React에서 동적으로 `<head>` 내용을 변경할 수 있게 해주는 라이브러리   

- `npm install react-icons` : React에서 아이콘을 사용할 수 있는 라이브러리   

- `npm install react-player` : React에서 동영상 플레이어를 구현할 수 있는 라이브러리   

- `npm install react-router-dom` : React용 라우팅 라이브러리   

- `npm install react-scripts` : Create React App의 설정과 스크립트   

- `npm install sass` : Sass(CSS 전처리기) 라이브러리   

- `npm install split-type` : 텍스트를 개별 문자로 분리하기 위한 라이브러리   

- `npm install swiper` : 슬라이드 쇼를 만들기 위한 라이브러리   

- `npm install type-hangul` : 한글 애니메이션을 위한 라이브러리   

- `npm install web-vitals` : 웹의 중요한 성능 지표를 측정하기 위한 라이브러리   

- `npm install dayjs` : 날짜와 시간을 쉽게 처리하기 위한 라이브러리 (운세 데이터 처리에 유용)   

- `npm install styled-components` : CSS-in-JS로 컴포넌트 스타일링을 쉽게 관리하기 위한 라이브러리   

- `npm install redux react-redux` : 상태 관리를 위한 Redux와 React-Redux   

- `npm install @reduxjs/toolkit` : Redux 툴킷, 간단하고 강력한 상태 관리 기능 제공  


### Client 설치 요약

```
npm install @stud @testing-library/jest-dom @testing-library/react @testing-library/user-event axios gsap react react-dom react-helmet-async react-icons react-player react-router-dom react-scripts sass split-type swiper type-hangul web-vitals
```

## API

- `npm install express` : Node.js에서 웹 서버를 구축하고 라우팅을 관리하기 위한 프레임워크

- `npm install mongoose` : MongoDB와의 상호작용을 위한 ODM(Object Data Modeling) 라이브러리, 스키마 정의 및 데이터베이스 작업을 쉽게 처리

- `npm install bcrypt` : 비밀번호 보안을 위해 해싱을 수행하는 라이브러리, 해싱된 비밀번호를 데이터베이스에 안전하게 저장

- `npm install jsonwebtoken` : JWT(JSON Web Token)를 생성하고 검증하여 사용자 인증과 권한 부여를 처리하기 위한 라이브러리

- `npm install dotenv` : 환경 변수를 관리하기 위한 라이브러리, 민감한 설정 정보를 .env 파일에 저장하고 코드에서 쉽게 불러올 수 있게 함

- `npm install cors` : 클라이언트와 서버 간의 크로스 도메인 요청을 허용하기 위한 미들웨어 라이브러리

- `npm install express-validator` : 요청된 데이터의 유효성을 검증하기 위한 미들웨어 라이브러리, 입력값 검증을 통해 서버의 안정성을 높임

- `npm install body-parser` : HTTP 요청의 본문을 파싱하여 JSON이나 URL-encoded 데이터를 처리할 수 있게 해주는 미들웨어 라이브러리 (Express에 기본 포함되어 있음)

- `npm install cookie-parser` : HTTP 쿠키를 파싱하고 관리하는 미들웨어 라이브러리, 클라이언트의 쿠키를 읽어들여 인증이나 세션 관리를 가능하게 함

- `npm install express-session` : 서버에서 세션 데이터를 관리하기 위한 미들웨어 라이브러리, 사용자의 로그인 상태를 쿠키를 통해 유지하고 관리할 수 있음

- `npm install nodemon` : 코드 변경 시 서버를 자동으로 재시작해 주는 개발 도구, 개발 편의성 향상

### API 설치 요약

```
npm install express mongoose bcrypt jsonwebtoken dotenv cors express-validator body-parser nodemon bcrypt cookie-parser express-session
```

## 페이지 빌드, 리액트 설치

- `npx create-react-app 파일이름` : 폴더를 생략하고 싶으면 .으로 표시

- `npm init -y` : 새로운 npm 프로젝트를 초기화하여 package.json 파일을 생성

- `npm run build`

## React의 코드 설명
- `npm start`: 개발 중 서버를 실행하고 애플리케이션을 테스트하는 용도로 사용됩니다.

- `npm audit`: 설치된 라이브러리의 보안 상태를 점검하고, 취약점이 있는지 모니터링하는 데 사용됩니다.





## 블로그에 정리해야하는 정보

1. React와 Node.js의 차이점
- React:

- 종류: 라이브러리 (또는 프레임워크로 간주되기도 함)
- 용도: 프론트엔드 개발
- 기능: 사용자 인터페이스(UI) 구축, 컴포넌트 기반 구조, 클라이언트 사이드 렌더링
- 특징: Virtual DOM을 사용하여 성능 최적화, 컴포넌트 재사용 가능

- Node.js:

- 종류: 런타임 환경
- 용도: 백엔드 개발
- 기능: 서버 구축, 데이터베이스 연동, API 제공
- 특징: 비동기 I/O 처리, 싱글 스레드 기반으로 높은 성능과 확장성 제공

2. Axios와 Fetch API의 차이점
- Axios:

- 장점: 자동 JSON 변환, 요청 인터셉터 지원, Node.js와 브라우저 모두에서 사용 가능, 응답 데이터 처리 간편
- 단점: 외부 라이브러리 설치 필요, 패키지 크기가 Fetch보다 큼
- Fetch API:

- 장점: 네이티브 브라우저 지원, 가볍고 간단한 API, 스트림 처리 가능
- 단점: 구형 브라우저 지원 부족, 자동 오류 처리 없음, POST 요청에서의 복잡성

3. npm start와 npm run dev의 차이점
- npm start:
- 역할: package.json에 정의된 start 스크립트를 실행하여 서버나 애플리케이션을 시작.
- 사용 시점: 보통 기본 실행 명령어로 설정되며, 프로덕션 또는 기본 개발 환경에서 사용.
- npm run dev:
- 역할: package.json에 정의된 dev 스크립트를 실행하며, 개발자 도구와 추가 기능(예: 핫 리로딩)을 활성화하는 경우가 많음.
- 사용 시점: 개발 환경에서 더 많은 개발 도구와 설정을 포함하는 경우에 사용.

4. npm audit fix와 npm audit fix --force의 차이점
- npm audit fix:

- 역할: 패키지의 보안 취약점을 현재 버전 범위 내에서 가능한 업데이트로 수정.
- 특징: 호환성을 유지하면서 취약점을 해결하려고 함.
- npm audit fix --force:

- 역할: 패키지의 보안 취약점을 해결하기 위해 주요 버전(major version)까지 강제 업데이트.
- 특징: 호환성을 무시하고 최신 버전으로 업데이트할 수 있어 예상치 못한 문제가 발생할 수 있음.

5. npm start, npm audit, npm audit fix, npm audit fix --force의 차이점
npm start:

- 역할: 서버 또는 애플리케이션을 실행.
- 용도: 개발 또는 프로덕션 환경에서 서버 실행.
- 설정: 보통 package.json의 scripts 섹션에 정의된 start 명령어를 실행. 예를 들어, react-scripts start로 React 개발 서버를 실행하거나, nodemon을 통해 API 서버를 실행할 수 있음.

- npm audit:

역할: 프로젝트의 보안 상태를 모니터링하고, 설치된 패키지에서 보안 취약점을 분석.
용도: 설치된 모든 패키지를 스캔하여 보안 취약점을 찾아보고, 보고서를 생성.
npm audit fix:

- 역할: 보안 취약점을 현재 설치된 패키지의 버전 범위 내에서 수정.
- 특징: 주로 호환성을 유지하면서 가능한 범위 내에서 업데이트를 수행. 주 버전(major version)을 변경하지 않음으로써 기존 코드와의 호환성을 유지.

- npm audit fix --force:

- 역할: 보안 취약점을 해결하기 위해 강제로 주요 버전(major version)을 포함한 패키지 업데이트를 수행.

- 특징: 호환성을 무시하고 취약점을 해결하기 위해 강제로 최신 버전으로 업데이트. 이로 인해 예상치 못한 문제가 발생할 수 있으며, 업데이트 후 철저한 테스트가 필요.

- 사용 시점: 보안 문제가 매우 심각하거나, 기존 버전과의 호환성을 덜 중요하게 여길 때 사용. 신중하게 사용해야 하며, 모든 기능이 정상적으로 작동하는지 확인하는 것이 중요.

- 요약
- npm start: 서버나 애플리케이션을 실행하는 기본 명령어.   

- npm audit: 보안 취약점을 스캔하고 보고서를 생성.   

- npm audit fix: 호환성을 유지하면서 보안 취약점을 수정.   

- npm audit fix --force: 호환성을 무시하고 강제로 패키지를 업데이트하여 보안 취약점을 수정.   

6. API와 클라이언트에서 사용할 명령어들
API (서버 실행):

```bash
cd api
npm start
클라이언트 (React 앱 실행):
```

```bash
cd client
npm start
```
