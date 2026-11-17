---
title: "내부망 2.5Gbps 구성해보기"
subtitle: "Mac mini와 Macbook Pro를 내부망으로 2.5Gbps로 구성해보기"
date: 2026-11-17
categories: ["LLM", "Local LLM"]
tags: ["Mac mini", "Local"]
aiSummary: ""
---

안녕하세요. 박현상입니다.  
맥 미니(M6)를 최근에 구매하게 되면서, 맥북 프로(M5)와 함께 2.5Gbps를 사용하면 좋을 것 같아서 집에 내부 네트워크를 구성하게 되었습니다.  

맥 미니(M6)에서 기본적으로 이더넷 포트에 2.5Gbps를 지원하게 되면서 맥북 프로(M5)를 함께 사용하면 좋을 것 같아서 본격적으로 구성하게 되었습니다.

![Mac mini Ethernet Port](./mac-mini-ethernet-port.png)

## 필요한 준비물

- **2.5Gbps를 지원하는 하드웨어가 필요합니다.**
- LAN 케이블 - CAT.7 이상 2.5Gbps를 지원하는 LAN 케이블 필요합니다.
    - 저는 CAT.8 LAN 케이블을 사용하였습니다.
- USB-C Hub 혹은 USB-C LAN 케이블 어뎁터가 필요합니다.
    - 저는 USB-C Hub에서 2.5Gbps를 지원하는 [belkin INC009bt](https://www.belkin.com/kr/p/usb-c-7-in-1-%EB%A9%80%ED%8B%B0%ED%8F%AC%ED%8A%B8-%EC%96%B4%EB%8C%91%ED%84%B0/INC009btSGY.html)를 사용했습니다.
- 스위치 혹은 Wi-Fi 공유기가 필요합니다.
    - 저는 스위치를 사용했습니다. [티피링크 TL-SG105S-M2](https://www.tp-link.com/kr/business-networking/unmanaged-switch/tl-sg105s-m2/)를 사용했습니다.

## 전반적인 네트워크 구성도

![Home Network Diagram](./home-network-diagram.png)

1. ISP(LG U+ / KT 등) - 1Gbps
2. Wi-Fi 공유기 - 1Gbps
3. 스위치 - 2.5Gbps
4. 맥 미니 / 맥북 프로(USB-C Hub) - 2.5Gbps

## 외부망 · 내부망 속도 테스트

### 외부망

![외부망 속도 테스트](./external-network-speed.png)

### 내부망

## Ref

- [[PC] 2.5G 내부 네트워크 구성 | 2.5G 스위치, 2.5G USB 랜카드 구매](https://blog.naver.com/an2gen3/223738880271)