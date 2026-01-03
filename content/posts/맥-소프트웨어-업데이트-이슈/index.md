---
title: "Intel 맥북 소프트웨어 업데이트 이후 Homebrew 날라가는 이슈"
date: 2025-11-07
categories: ["개발"]
tags: ["개발 환경", "이슈"]
---

![업데이트를 완료한 모습](./System-Setting.png)

## 문제점

- macOS Tahoe 26.0 → 26.1으로 업데이트 하였음.
    - 그 이후로 Homebrew로 설치했던 응용 프로그램, 개발 환경 패키지들이 실행이 안 되는 현상을 발견함.
- Sequoia 15 → Tahoe 26.0으로 업데이트 할 때도 날라갔던 적이 있었음.
    - 그 때도 해결 방법은 동일했음...ㅠ

```shell
Last login: Fri Nov  7 19:11:12 on ttys003
/Users/park.hyunsang/.zshrc:15: command not found: pyenv
```

- 기존에 Hombrew를 통해서 pyenv 설치 되었으나, 맥북 소프트웨어 업데이트 이후 날라감.

```shell
➜  /opt ls -a
.  ..
```

- 소프트웨어 업데이트 이후 `/opt/homebrew` 디렉토리가 날라감.
- 변경된 내용도 확인할 수 없음. 응용 프로그램에 설치되어 있는 프로그램들도 날라감.
    - 몇 개는 공식 홈페이지에서 `.dmg` 파일을 통해서 설치하였는데도 날라감.
    - 몇 개는 Homebrew를 통해서 설치한 프로그램들도 날라감.

## 결론

- 해외 맥 커뮤니티 혹은 해외 개발자 커뮤니티에서 확인한 결과,  인텔 CPU를 사용하는 맥북에서만 이러한 증상이 발현되는 것을 발견하였음
    - [Fixing Homebrew Issues After macOS Upgrades: A Comprehensive Guide](https://www.itech4mac.net/2025/10/fixing-homebrew-issues-after-macos-upgrades-a-comprehensive-guide/)
    - [macOS 26.0.0 wiped out Homebrew, relocated a bunch of apps. Then macOS 26.0.1 just DID IT AGAIN!](https://www.reddit.com/r/MacOS/comments/1nva1m1/macos_2600_wiped_out_homebrew_relocated_a_bunch/)
    - [All apps are moved by Tahoe update](https://forums.macrumors.com/threads/all-apps-are-moved-by-tahoe-update.2464530/)
    - [Apps and preferences moved to "moved items" after installing Tahoe on Intel/T2 Mac](https://discussions.apple.com/thread/256182816?sortBy=rank)
- 복구 시키는 방법은 없는 것 같음. 디렉토리 자체가 없어졌고, 디렉토리가 어떻게 되었는지 등은 찾을 수 없었음.
- **맥북 초기화 후 개발 환경을 다시 설정하였음.**