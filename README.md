# 원티드 프리온보딩 인턴쉽 4주차 과제

| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-83.33%25-yellow.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-50%25-red.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-75%25-red.svg?style=flat) |

### [최종 결과물 바로가기](https://pre-onboarding-9th-4-8.netlify.app)

비대면 온라인 환테크 플랫폼을 운영하는 핀테크 스타트업 [스위치원](http://www.switchwon.com/ko/index.html) 기업 과제 입니다.

#### 과제 목적

- 주어진 데이터를 기반으로 주문 내역 관리 어드민 페이지 구현
- Best Practice 만들어 제출하기

#### 과제 진행 방법

[기능 구현 목록](./docs//REQUIREMENTS.md)을 작성 후 아래와 같이 분류하였습니다.

1. [주문 목록 페이지 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/issues/1)
2. [필터링, 검색 기능 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/issues/2)
3. [테스트 코드 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/issues/3)

분류에 따라 팀원 개개인이 과제를 수행 후 PR에서 코드리뷰를 했습니다. 투표를 통해 Best Practice를 선정하였습니다. [이슈](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/issues)와 [PR메시지](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/pulls)를 활용하여 문서화하였습니다.

<br/>

# What Did I Do

## Features

#### [테스트 코드 구현 PR](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/pull/20)

- jest, msw 테스팅 환경 셋업
- 컴포넌트 테스트와 유틸리티 함수 유닛테스트 케이스 작성하여 Best Practice에 채택

#### [필터링, 검색 기능 구현 PR](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/pull/14) 

- 🏆 Best Practice 선정
- 검색, 필터링, 정렬을 쿼리스트링을 사용해 구현
- 기존 커스텀 훅의 개편을 통하여 추상화 업그레이드 및 재사용성 증대
- 사용성을 고려한 UI-UX 스타일링

#### [주문 목록 페이지 구현 PR](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/pull/9) 

- 🏆 Best Practice 선정
- 실제 서비스에서 데이터 처리 방식에 대한 조사와 과제에 적합한 데이터 처리 방식 제시
- React-Query를 활용한 데이터 fetching 관리
- MSW를 이용하여 Mock Backend API 구현 및 API 명세서 작성
- Error Boundary를 통한 에러 처리와 lazy, suspense를 사용한 코드 스플리팅
- 관리자 페이지의 목적성을 고려하여 기초 통계 정보 및 Date Picker의 추가 기능 구현

## Trouble Shooting

#### [테스팅 환경에서의 MSW 문제 해결](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/issues/26#issuecomment-1480684131)

- 테스팅 환경에서 msw 라이브러리의 문제가 있었고 이를 해결함

<br/>

# Team

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

# Team History

## Features Best Practice

- Mar 23, 2023 | [테스트 코드 구현 통합](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/pull/22)
- Mar 22, 2023 | [필터링, 검색 기능 구현 Best Practice](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/pull/14)  
- Mar 20, 2023 | [주문 목록 페이지 구현 Best Practice](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/pull/9)

## Issue

- Mar 23, 2023 | [Trouble Shooting 모음](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-4-8/issues/26)

<br/>

# Getting Started

#### Install

```
npm i
```

#### Build

```
npm run build
```

#### Start

```
npm start
```

#### Test

```
npm test
npm run make-badges
```

<br/>

# Features

- PLP
- Pagination
- Filter by status, date (Date Picker)
- Sort by Order ID, Date & Time
- Seach customer name

<br/>

# Tech Stack

`React`, `Typescript`, `MSW`, `React-Query`, `Chakra UI`, `Jest`, `React-Testing-Library`, `Axios`, `Craco`, `React-router-dom`

Collaboration Tool: `Discord`, `Notion`, `Github`


<br/>

# Demo

#### 날짜 & 상태 필터링
![date-filter (1)](https://user-images.githubusercontent.com/90181028/226713730-f4a9a486-c2ce-4413-b075-9ea1a278dee7.gif)


#### 검색 & 정렬 & 초기화
![뉴검색](https://user-images.githubusercontent.com/90181028/227155292-7ff9c43d-4520-46c1-8f36-9b10f9f37575.gif)

<br/>

# Directory

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
