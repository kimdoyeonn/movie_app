# Movie App

React JS Fundamentals Course (2019 Upate!)

## Route

### #6.0 Getting Ready for the Router

페이지를 이동할 때, 예를 들어 메인 페이지에서 about 페이지로 이동하려고 한다면, 우리는 그에 맞는 HTML파일과 데이터들을 다시 fetch 해야 했다. 하지만 `react-router-dom`을 사용하면 페이지의 이동이 아닌 각각의 페이지에 필요한 컴포넌트들을 불러와 보여주게 되어 빠른 페이지 이동을 구현할 수 있다.

**사용법**

- `npm install react-router-dom` 을 터미널에 입력하여 react-router-dom 다운로드

**React Router Dom이란?**
페이지의 로딩 없이, 페이지에 필요한 컴포넌트들을 불러와 렌더링 하여 보여주도록 도와준다. 즉, 하나의 index HTML을 두고 컴포넌트들만 변경시켜 각각 개별적으로 사용하고 업데이트 하는 것이 가능해진다. 또한, 여러 HTML 파일이 필요하지 않기 때문에 코드도 짧아지고 서버도 많은 HTML 파일을 다루지 않게 된다.

참고 - [독일개발자초록이](https://ko-de-dev-green.tistory.com/39)

---

### #6.1 Building the Router

router를 사용하기 위해 기본으로 불러지는 `App.js` 외에 `About.js`와 `Home.js`를 만들어 주었다.

그다음 리엑트를 위한 기본적인 코드를 작성한 후, `App.js`에 아래의 코드를 작성하여 `About.js`와 `Home.js`를 연결해주었다.

```javascript
function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
```

- `path`: 컴포넌트를 사용할 경로
- `exact`: path와 완벽히 똑같을 경우에만 렌더링(작성하지 않을 경우 완벽히 똑같지 않더라도 path로 시작하면 모두 렌더링 해버림)
- `component`: 렌더링할 컴포넌트

---

### #6.2 Building the Navigation

만든 페이지들을 이동할 때 사용할 `Navigation.js`를 생성함

- `a` 태그를 사용하여 이동할 경우 리엑트를 죽이고 html파일을 새로 불러오기 때문에 깜박임이 발생하고, 로딩 시간이 걸린다. 그래서 사용하는 것이 `react-router-dom`의 `Link`이다.

```javascript
// Navigation.js
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
```

- a 태그와 Link 태그의 역할은 동일하다. Link 태그를 사용해도 HTML에서는 a 태그로 표시된다.
- Link로 작성할 경우 클릭시 virtual dom이 작동하며, 리랜더링 없이 깔끔하게 동작한다.

```javascript
// App.js
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>

```

- 모든 걸 Router(위 코드에서는 HashRouter) 안에서 처리할 필요는 없다. 하지만 Link를 사용한 컴포넌트는 Router 밖에서 사용할 수 없다.
- HashRouter 말고도 BrowserRouter가 있다. BrowserRouter는 url에 `/#/` 가 붙지 않아 깔끔하지만, github pages에 정확히 설정하기 번거롭기 때문에 github pages에 업로드하고 싶을 경우엔 HashRouter를 사용하는 것이 좋다.

### #6.3 Sharing Props Between Routes
