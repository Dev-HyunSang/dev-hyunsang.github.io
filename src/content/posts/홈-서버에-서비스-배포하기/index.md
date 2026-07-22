---
title: "홈 서버에 서비스 배포하기"
subtitle: "Jenkins vs GitHub Action"
date: 2026-07-01
draft: true
categories: ["홈 서버"]
tags: ["GitHub Action", "Tailscale", "Docker"]
---

안녕하세요. 박현상입니다.  
홈 서버를 구축하고 난 이후 제 서비스를 어떻게 배포해야할지에 대한 고민이 생기게 되었습니다.  

## Docker + CI/CD - GitHub Action을 통한 배포

이 과정에서 제게 있어서 가장 큰 과제는 "어떻게 외부에 노출되지 않은 서버에 접근하는지"였습니다.  
다행히도 Tailscale에서 제가 고민했던 문제에 대해서 해결할 수 있는 방법이 있었습니다.

### Tailscale ACL + OAuth 설정

