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

1. constants 폴더
현재 이해:

sample.jsx의 스크립트를 sample.js 파일로 만들어 관리.
올바른 이해:

constants 폴더는 **변하지 않는 값들(상수)**을 관리하는 곳입니다. 예를 들어, API 엔드포인트, 색상 코드, 상태 코드 등 애플리케이션 전반에서 재사용되는 상수를 정의합니다.
**스크립트 파일(component scripts)**을 이 폴더에 넣는 것은 적절하지 않습니다. 대신, 컴포넌트 파일은 components 폴더와 같은 별도의 폴더에 보관하는 것이 좋습니다.
올바른 사용 예:

예시 코드: constants/colors.js
javascript
코드 복사
// colors.js
// 애플리케이션에서 사용하는 색상 코드 상수
export const PRIMARY_COLOR = "#3498db";  // 주 색상 (파란색 계열)
export const SECONDARY_COLOR = "#2ecc71"; // 부 색상 (녹색 계열)
export const ERROR_COLOR = "#e74c3c"; // 에러 메시지 등에 사용되는 색상 (빨간색 계열)
예시 코드: constants/api.js
javascript
코드 복사
// api.js
// API 엔드포인트 상수
export const BASE_URL = "https://api.example.com";  // API의 기본 URL
export const LOGIN_ENDPOINT = "/auth/login";  // 로그인 API 엔드포인트
export const REGISTER_ENDPOINT = "/auth/register";  // 회원가입 API 엔드포인트
요약:

constants 폴더에는 컴포넌트나 페이지 로직을 포함한 스크립트가 아니라, 변하지 않는 상수값을 정의하는 파일을 보관합니다.
예를 들어, 컬러 코드, API URL, 상태 코드 등을 이곳에 정의하여 여러 곳에서 재사용할 수 있습니다.
2. context 폴더
현재 이해:

사용자의 로그인 여부 등에 따른 조건식 스크립트를 관리.
올바른 이해:

context 폴더는 React Context API를 사용하여 애플리케이션의 전역 상태를 관리하는 곳입니다. 이는 단순히 조건식 스크립트보다는 상태와 그 상태를 업데이트하는 로직을 포함합니다.
올바른 사용 예:

예시 코드: context/AuthContext.js
javascript
코드 복사
// AuthContext.js
// 사용자 인증 상태를 관리하기 위한 Context

import React, { createContext, useState } from 'react';

// AuthContext: 애플리케이션의 인증 상태를 공유하기 위한 Context
export const AuthContext = createContext();

// AuthProvider: 자식 컴포넌트에 인증 상태를 제공하는 Provider 컴포넌트
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 인증 상태 (로그인 여부)

  const login = () => setIsAuthenticated(true); // 로그인 함수
  const logout = () => setIsAuthenticated(false); // 로그아웃 함수

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
예시 코드: context/ThemeContext.js
javascript
코드 복사
// ThemeContext.js
// 애플리케이션의 테마(라이트/다크 모드)를 관리하기 위한 Context

import React, { createContext, useState } from 'react';

// ThemeContext: 테마 설정을 공유하기 위한 Context
export const ThemeContext = createContext();

// ThemeProvider: 자식 컴포넌트에 테마 설정을 제공하는 Provider 컴포넌트
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 기본 테마는 라이트 모드

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // 테마 토글 함수
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
요약:

context 폴더에는 애플리케이션 전반에서 공유할 전역 상태와 해당 상태를 관리하는 로직을 포함한 파일들을 보관합니다.
예를 들어, 사용자 인증 상태, 테마 설정, 언어 설정 등을 관리합니다.
조건식 스크립트보다는 상태 관리와 관련된 코드가 주를 이룹니다.
3. data 폴더
현재 이해:

JSON처럼 수정되거나 변경되는 정보들을 객체로 저장해놓는 역할.
올바른 이해:

data 폴더는 정적 데이터 또는 **모의 데이터(mock data)**를 관리하는 곳입니다. 이는 애플리케이션의 특정 기능을 테스트하거나 초기 데이터를 제공하는 데 사용됩니다.
실제로 수정되거나 변경될 데이터는 일반적으로 데이터베이스나 API를 통해 관리되지만, data 폴더는 개발 단계에서 이를 모방하는 용도로 사용됩니다.
올바른 사용 예:

예시 코드: data/menuItems.js
javascript
코드 복사
// menuItems.js
// 애플리케이션 내에서 사용되는 메뉴 항목 데이터

export const menuItems = [
  { id: 1, label: "Home", link: "/" },  // 홈 페이지로 이동하는 메뉴 항목
  { id: 2, label: "About", link: "/about" },  // About 페이지로 이동하는 메뉴 항목
  { id: 3, label: "Contact", link: "/contact" },  // Contact 페이지로 이동하는 메뉴 항목
];
예시 코드: data/mockUsers.js
javascript
코드 복사
// mockUsers.js
// 테스트를 위한 모의 사용자 데이터

export const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com" },  // 사용자 1
  { id: 2, name: "Jane Smith", email: "jane@example.com" },  // 사용자 2
];
요약:

data 폴더에는 정적 데이터, 더미 데이터, 모의 데이터를 저장합니다.
이 데이터들은 개발 중에 테스트용으로 사용되며, 실제 데이터는 API나 데이터베이스에서 가져옵니다.
JSON 형식이나 JavaScript 객체 형식으로 데이터를 정의할 수 있습니다.
4. utils 폴더
현재 이해:

다른 JSX 파일에서도 공용적으로 사용되거나 재활용 가능한 코드 파일을 넣어두는 것.
올바른 이해:

맞습니다! utils 폴더는 재사용 가능한 유틸리티 함수나 헬퍼 함수를 보관하는 곳으로, 여러 컴포넌트에서 공통적으로 사용될 수 있는 로직을 포함합니다.
올바른 사용 예:

예시 코드: utils/formatDate.js
javascript
코드 복사
// formatDate.js
// 날짜를 특정 형식으로 변환하는 유틸리티 함수

export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }; // 날짜 형식 옵션
  return new Date(date).toLocaleDateString(undefined, options); // 형식에 맞춘 날짜 반환
};
예시 코드: utils/calculateSum.js
javascript
코드 복사
// calculateSum.js
// 숫자 배열의 합계를 계산하는 유틸리티 함수

export const calculateSum = (numbers) => {
  return numbers.reduce((total, num) => total + num, 0);  // 배열의 모든 숫자를 더하여 합계 반환
};
요약:

utils 폴더에는 재사용 가능한 함수나 헬퍼 함수를 저장합니다.
예를 들어, 날짜 포맷팅, 숫자 계산, 문자열 처리 등 다양한 유틸리티 함수가 여기에 포함될 수 있습니다.
코드의 중복을 줄이고, 유지보수를 용이하게 합니다.
전체 요약 및 추가 설명
1. constants
역할: 변하지 않는 상수 값을 정의하고 관리합니다.
포함: 색상 코드, API URL, 상태 코드 등.
예시: colors.js, api.js.
2. context
역할: React Context API를 사용해 전역 상태를 관리하고 공유합니다.
포함: Context 생성, Provider 컴포넌트, Custom Hooks.
예시: AuthContext.js, ThemeContext.js.
3. data
역할: 정적 데이터, 모의 데이터, 더미 데이터를 관리합니다.
포함: 메뉴 항목, 모의 사용자 데이터 등.
예시: menuItems.js, mockUsers.js.
4. utils
역할: 재사용 가능한 유틸리티 함수나 헬퍼 함수를 관리합니다.
포함: 날짜 포맷팅, 숫자 계산 등.
예시: formatDate.js, calculateSum.js.
추가 팁
폴더 네이밍 일관성 유지:

파일 이름은 기능에 맞게 직관적으로 명명하세요. 예를 들어, 상수 파일은 colors.js, api.js처럼 명명합니다.
폴더 구조 확장성 고려:

프로젝트가 커짐에 따라 폴더 구조를 확장할 필요가 있습니다. 예를 들어, constants 폴더 내에 api.js, colors.js처럼 세부 파일을 나누는 것이 좋습니다.
모듈화와 코드 분리:

관련된 기능이나 데이터를 그룹화하여 관리하면 유지보수가 용이해집니다. 예를 들어, 인증 관련 상수는 constants/auth.js에, 테마 관련 상수는 constants/theme.js에 저장할 수 있습니다.
문서화:

각 파일의 역할과 사용법을 주석이나 별도의 문서로 정리하면 팀원들과의 협업에 도움이 됩니다.
추가적으로 고려할 폴더들
프로젝트의 규모와 필요에 따라 추가적으로 유용한 폴더들이 있습니다:

components: 재사용 가능한 UI 컴포넌트를 저장합니다.
pages: 각 페이지 컴포넌트를 저장합니다.
hooks: 커스텀 훅을 저장합니다.
services: API 호출 로직이나 비즈니스 로직을 저장합니다.
styles: 전역 스타일이나 CSS 관련 파일을 저장합니다.