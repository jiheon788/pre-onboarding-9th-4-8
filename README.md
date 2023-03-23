# 원티드 프리온보딩 인턴쉽 4주차 과제

비대면 온라인 환테크 플랫폼을 운영하는 핀테크 스타트업 [스위치원](http://www.switchwon.com/ko/index.html) 기업 과제 입니다.

## 🔗 결과 링크

- [최종 결과물 바로가기](https://pre-onboarding-9th-4-8.netlify.app)

<br/>

## 📝 과제 목적

- 주어진 데이터를 기반으로 주문 내역 관리 어드민 페이지 구현
- Best Practice 만들어 제출하기

<br/>

## ✅ 과제 진행 방법

[기능 구현 목록](./docs//REQUIREMENTS.md)을 작성 후 아래와 같이 분류하였습니다.

1. [주문 목록 페이지 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/issues/1)
2. [필터링, 검색 기능 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/issues/2)
3. [테스트 코드 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/issues/3)

분류에 따라 팀원 개개인이 과제를 수행했습니다. 리뷰 시간을 정하여 해당 시간에 PR에서 코드리뷰를 했습니다. 투표를 통해 Best Practice를 선정한 후, 다른 과제 중 좋았던 구현들을 의논하여 추가하였습니다. [이슈](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/issues)와 [PR메시지](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/pulls)를 활용하여 문서화하였습니다.

<br/>

## 🌟 Best Practice 선정 및 이유

- **Mar 23, 2023** 　|　[테스트 코드 구현 PR](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/pull/22)
    
    Test Code 작성 후 케이스 비교 후 통합하여 Merge
    
    - Brower 환경과 Node 환경에서 돌아가는 Mock Server를 예외 처리하여 각각 실행되도록 함
    - 테스트 목적을 구체적으로 작성하여 어떤 테스트가 실행되는지 명확하게 나타낸 점
- **Mar 22, 2023** 　|　[필터링, 검색 기능 구현 PR](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/pull/14)
    - useQueryString의 적절한 추상화로 재사용성 높임
    - 새로운 Mock API를 생성하여 유저 이름 목록을 받고, 유저 이름을 쿼리 스트링에 반영하여 필터링한 점
    - Typescript Interface를 십분 활용한 쿼리스트링 커스텀 훅의 추상화가 내부를 들여다보지 않아도 쓸 수 있을 정도로 잘 된 점
    - 과제의 모호할 수 있는 부분에 근거 있는 가정을 하고, 그에 걸맞은 답을 제시한 점
    - 필터링 함수를 분리해 가독성을 높인 점
    - 유저 이름을 받아오는 API 생성
- **Mar 20, 2023**  　|　[주문 목록 페이지 구현 PR](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/pull/9)
    - React-Query를 활용한 간편한 Refetch 구현
    - FrontEnd, BackEnd 각각의 페이지네이션 처리 방식에 대한 분석과 선정 이유
    - MSW를 이용하여 백엔드(Mock API)에 필요한 데이터만 요청하여 order list 페이지 구현
    - Date Picker를 사용한 날짜별로 필터링기능으로 UX 향상시킨 점
    - 관심사분리 및 적절한 변수명 활용으로 가독성이 높은 점
    - Error Boundary를 통한 에러를 처리한 점
    - 코드 스플리팅을 통한 페이지의 로딩 속도를 개선한 점
    - Axios interceptors를 이용한 API를 처리한 점
    - 데이터의 기초 통계 정보들을 시각화해서 표현한 점
    - 실제 서비스라 가정하고 직접 조사하여 근거를 제시한 점


<br/>

## 🐞 이슈 및 버그

- **Mar 23, 2023**  　|　[Trouble Shooting 모음](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/issues/26)

<br/>

## 👨‍💻 팀원 소개

<table border>
  <tbody>
    <tr>
       <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/67201870?v=4"  alt="김상연님"/><br />
        <br/>
        <a href="https://github.com/greyHairChooseLife">
          <img src="https://img.shields.io/badge/김상연-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src='https://avatars.githubusercontent.com/u/90181028?v=4'  alt="박지헌님"/><br />
        <br/>
        <a href="https://github.com/jiheon788">
          <img src="https://img.shields.io/badge/박지헌-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/106523012?v=4"  alt="복준우님"/><br />
       <br/>
        <a href="https://github.com/bokjunwoo">
          <img src="https://img.shields.io/badge/복준우-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/48446896?v=4"  alt="양소연님"/><br/>
                <br/>
        <a href="https://github.com/Noeyso">
          <img src="https://img.shields.io/badge/양소연-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
         <tr>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/62588402?v=4"  alt="정찬욱님"/><br />
       <br/>
        <a href="https://github.com/raw20">
          <img src="https://img.shields.io/badge/정찬욱-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/103406196?v=4"  alt="조효림님"/><br/>
       <br/>
        <a href="https://github.com/hyorimcho">
          <img src="https://img.shields.io/badge/팀장 : 조효림-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/82688516?v=4"  alt="최정훈님"/><br/>
                <br/>
        <a href="https://github.com/jhoon9494">
          <img src="https://img.shields.io/badge/최정훈-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/17325845?v=4"  alt="한호수님"/><br/>
       <br/>
        <a href="https://github.com/tnghgks">
          <img src="https://img.shields.io/badge/한호수-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>

<br/>

## 🚀 기능

- 주문 목록 테이블 페이지 (5초 주기로 refetch)
- 페이지네이션 (한 페이지 당 50건의 주문 출력)
- 오늘의 거래 건에 대한 필터링 구현 (Date Picker)
- 주문 처리상태에 따른 필터링 구현
- `주문번호` 와 `거래일 & 거래시간` 버튼을 누르면 내림차순 & 오름차순 정렬 토글
- 고객 이름 검색 구현

<br/>

## 📷 Demo

#### 날짜 & 상태 필터링
![date-filter (1)](https://user-images.githubusercontent.com/90181028/226713730-f4a9a486-c2ce-4413-b075-9ea1a278dee7.gif)


#### 검색 & 정렬 & 초기화
![뉴검색](https://user-images.githubusercontent.com/90181028/227155292-7ff9c43d-4520-46c1-8f36-9b10f9f37575.gif)


## ✨ 기술 스택

- React
- Typescript
- Axios
- Craco
- MSW: backend API를 모킹(mocking)하기 위함
- React-router-dom: 쿼리스트링으로 필터 관리하기 위함
- React-Query: 서버 데이터 Fetching 라이브러리
- Chakra UI
- Jest / React-Testing-Library

<br/>

## 🤝 협업 툴

- Discord
- Notion
- Github

<br/>

## 🗂️ 디렉토리 구조

```bash
src
 ┣ api
 ┣ components
 ┣ constants
 ┣ interface
 ┣ lib
 ┃ ┣ hooks
 ┃ ┣ styles
 ┃ ┗ utils
 ┣ mocks
 ┃ ┣ handlers
 ┃ ┗ storage
 ┣ pages
 ┗  __test__
   ┗  __snapshots__

```

<br/>

## ⚙️ 설치 및 실행 가이드

#### Install

```bash
npm i
```

#### Build

```bash
npm run build
```

#### Start

```bash
npm start
```

#### Test

```bash
npm test
```