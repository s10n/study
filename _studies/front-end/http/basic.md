---
category: HTTP
title: HTTP Basic
---

## CORS (Cross-Origin Resource Sharing)
* [developer.mozilla.org/ko/docs/Web/HTTP/Access_control_CORS](https://developer.mozilla.org/ko/docs/Web/HTTP/Access_control_CORS)

### 개요
* 사용자 데이터 상에서 부수 효과를 일으킬 수 있는 HTTP 요청 메서드에 대해 브라우저가 요청을 사전 전달(preflight)하도록 강제하는데,
  - 이는 HTTP `OPTION` 요청 메서드를 이용해 서버로부터 지원 중인 메서드들을 내려 받은 뒤,
  - 서버에서 승인(approval) 시에 실제 HTTP 요청 메서드를 이용해 실제 요청을 전송하는 것을 말합니다.

### 간단한 요청
* Content-Type 헤더에 대해 허용되는 유일한 값은 다음과 같습니다:
  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

### 사전 요청
* 간단한 요청과 다르게, 사전 전달(preflighted) 요청은 먼저, 실제 요청이 전송하기에 안전한지 아닌지를 결정하기 위해, 다른 도메인에 있는 리소스에 `OPTION` 메서드로 HTTP 요청을 전송합니다.
* 특히, 다음과 같은 경우에 요청이 사전 전달됩니다:
  - GET, HEAD 혹은 POST 외의 메서드를 사용하는 경우.
  - 또한 POST 메서드를 사용한 요청이 `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain` 이외의 다른 값을 가진 Content-Type과 함께 요청 데이터를 전송하는데 사용된 경우
  - 예를 들자면, `POST` 요청이 서버에 `application/xml` 혹은 `text/xml`을 사용하여 XML 페이로드를 전송하게 되면, 요청은 사전 전달됩니다.


## HTTP GET Query string Limitation
* `GET`: To retrieve an already existing resource
* `POST`: To create a new resource
* 검색 쿼리를 서버에 보내고 그 결과를 가져오는 것은, `POST`에 해당한다. 검색 결과를 저장하지 않더라도, 서버에 오브젝트를 생성해서 가져왔다.
* HTTP specification은 실제로 계산을 위한 리소스를 보낼때 `POST`를 사용하도록 조언한다.
