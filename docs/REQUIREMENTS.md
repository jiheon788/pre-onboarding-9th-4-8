# Requirements

## 1. Fetch
- [ ] 주어진 데이터를 이용하여 주문 목록 페이지를 구현해주세요
  - [ ] 주문 목록 페이지에는 주문에 대한 모든 정보를 표 형태로 확인할 수 있어야 합니다.
  - [ ] 주문 목록은 페이지네이션이 구현되어야 합니다(한 페이지에 50건의 주문이 보여야 합니다)
  - [ ] 데이터 중에서 오늘의 거래건만 보여지도록 해주세요
    - [ ] 여기서 오늘은 “2023-03-08”일을 의미합니다.
- [x] 서버에 들어온 주문을 5초마다 최신화 해주세요
  - [x] 서버 API는 구현되어 있지 않지만, 구현되어 있다는 가정 하에 요구사항을 충족해주세요

## 2. Filter
- [ ] 정렬 기능을 구현해주세요
  - [ ] 기본 정렬은 ID 기준 오름차순으로 구현해주세요
  - [ ] 표에서 주문번호, 거래일 & 거래시간 버튼을 누르면 각각 내림차순 정렬이 되도록 해주세요
- [ ] 주문 처리 상태에 따라 filtering 기능을 구현해주세요
- [ ] 고객이름을 검색할 수 있도록 해주세요

## 3. Test
- [ ] 컴포넌트에 대한 테스트 코드를 구현해주세요