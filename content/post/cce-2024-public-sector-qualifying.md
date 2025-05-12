---
title: "2024 사이버방어공격대회(CCE) 공공부문으로 참여하며."
date: 2024-08-04
categorys: "CTF"
tags: ["군 복무", "CTF"]
author: "HyunSang Eval Park"
showToc: true
TocOpen: true
draft: false
hidemeta: false
comments: true
disableHLJS: false # to disable highlightjs
disableShare: true
hideSummary: false
searchHidden: true
ShowReadingTime: false
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: false
ShowRssButtonInSectionTermList: true
UseHugoToc: false
---

오랜만에 해킹 대회에 참가할 수 있는 기회가 되어서 공공부분 군소속으로 참가하게 되었습니다.  
정보보호 특기를 가지고 있고, 군에서 사이버 직책을 가지고 임수수행 하고 있기에 좋은 경험이라 생각이 들어 참가하게 되었습니다.  
소속은 다르지만 동일한 특기(직책)을 가지고 있는 간부님 2명과 정보보호병 동기 1명 그리고 제가 참가하게 되었습니다.  

공공 휴가를 받을 수 없어서 사이버 지식 정보방에서 힘들게 웹 문제를 주로 풀었습니다...ㅠ  
풀던 도중 특정한 패키지의 취약점을 찾을 수 있었습니다. 
해당 취약점과 관련된 GitHub에 공개되어 있는 PoC 코드를 찾을 수 있었고 해당 PoC 코드를 사용해서 서버 내부에 접근까진 하였지만 그 이후 서버가 이상한지 개인 컴퓨터가 이상한지 접속이 이상하여 플래그를 찾지 못하고 종료하게 되었지만 제게 깨달음을 주었던 대회였기에 어떻게 취약점을 찾았고 무엇을 깨달았는지 작성해 보겠습니다.  

## 무슨 취약점을 통해서 풀어가고자 했는가
일단 코드를 살펴보던 도중 Apache Struts 패키지가 있다는 점을 알게 되었습니다.  
해당 패키지의 취약 버전은 RCE(Remote Code Execution) 취약점이 있기에 웹셀로 접근하면 서버 내부에 침투할 수 있다는 점을 알게 되었습니다.  
Struts 패키지의 특정 버전에 취약점([CVE-2023-50164](https://nvd.nist.gov/vuln/detail/CVE-2023-50164))이 존재한다는 사실을 알고 되었고 해당하는 취약점의 PoC RCE 코드를 사용해서 문제에 있는 업로드 기능으로 웹셀을 업로드하여 웹쉘로 해당 서버 내부에 접근할 수 있었습니다.

사용했던 PoC RCE 코드는 [CVE-2023-50164: Apache Struts path traversal to RCE vulnerability](https://github.com/jakabakos/CVE-2023-50164-Apache-Struts-RCE)를 사용했습니다.  
웹셀에 업로드할 때 주의 해야하는 부분은 요청 시 매개변수인 `Name`을 `upload`가 아닌 `Upload`으로 변경하고 요청을 해야지만 정상적으로 웹셀을 업로드 되게 됩니다.  
웹셀을 정상적으로 업로드하여 서버 내부에 접근할 수 있었습니다. 하지만 그 이후 서버 문제인지 컴퓨터 문제인지 모르겠지만 플래그를 찾던 도중 지속적으로 접속이 종료되어 완벽하게 찾지 못하여 문제를 풀진 못 했지만 그래도 CVE를 통해서 PoC RCE 코드를 통해서 서버 내부에 접근할 수 있다는 좋은 공부가 되었습니다.  

## 본 대회를 통해서
CTF를 풀어보면서 CVE 취약점에는 생각을 많이 못하고 있었는데, 이번 대회를 통해서 CVE 취약점에 대해서도 공부가 필요하다라고 느끼게 되었습니다.  
내년에도 기회가 된다면 공공부분 군소속으로 참여하여 꼭 본선에 진출할 수 있으면 좋겠습니다...!!  
좋은 경험이었으며, 바쁜 시간을 내어서 함께 참가한 간부님들과 동기에 감사함을 전합니다.

## 풀이에 도움을 준 좋은 글들
- [Apache Struts 2 취약점 (CVE-2023-50164) 분석 및 대응](https://logpresso.com/ko/blog/2023-12-16-struts-CVE-2023-50164)
- [Apache struts 2 취약점(CVE-2023-50164)](https://mokpo.tistory.com/804)
- [CVE-2023-50164: Apache Struts path traversal to RCE vulnerability](https://github.com/jakabakos/CVE-2023-50164-Apache-Struts-RCE)