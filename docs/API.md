# Mock API Specification

## 주문 목록 불러오기

### Request

#### URL

- GET /mock/order

#### Parameter

| Name     | type    | Description                                   |
| -------- | ------- | --------------------------------------------- |
| `offset` | integer | 주문 목록의 오프셋/건너뛰기 (페이지 번호 - 1) |
| `limit`  | integer | 반환된 주문 목록 수 제한                      |
| `date`   | string  | 날짜 (yyyy-mm-dd), 빈값 or null이면 전체 날짜             |
| `customer`| string  | 고객 이름             |
| `filter` | string   | `complete` or `incomplete`           |
| `sort`   | string  | `id-descending` or `time-descending`          |


### Response

| Name         | type    | Description  |
| ------------ | ------- | ------------ |
| `order`      | order[] | 주문 목록    |
| `orderInfo` | integer | 총 주문 수량, 총 주문 금액, 시작 날짜, 끝 날짜  |

### Sample

```
# Request
GET http://localhost:3000/mock/order
params: {
    offset: 0,
    limit: 50,
    date: '2023-03-08'
}

# Response 200 OK
{
    "order": [
        {
            "id": 2,
            "transaction_time": "2023-03-08 06:59:37",
            "status": true,
            "customer_id": 16,
            "customer_name": "Cynthia Terrell",
            "currency": "$10.99"
        },
        ...
        {
            "id": 107,
            "transaction_time": "2023-03-08 13:59:12",
            "status": false,
            "customer_id": 121,
            "customer_name": "Ralph Dennis",
            "currency": "$50.25"
        }
    ],
    "orderCount": {
        endDate: "2023-3-8",
        startDate: "2023-3-8",
        totalCount: 267,
        totalCurrency: 13153.619999999992,
    }
}
```

## 고객 명단 가져오기

### Request

#### URL

- GET /mock/customers


### Response

| Name         | type    | Description  |
| ------------ | ------- | ------------ |
| `customers`  | string[] | 고객 명단    |

### Sample

```
# Request
GET http://localhost:3000/mock/customers


# Response 200 OK
{
    "customers": [
        'customers1', 'customers2', ..., 'customersN'
    ],
}
```
