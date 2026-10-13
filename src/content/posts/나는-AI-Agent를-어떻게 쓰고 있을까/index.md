---
title: "나는 AI Agent를 어떻게 쓰고 있을까?"
subtitle: "Claude Code, Codex를 사용하면서 내가 어떻게 사용하고 있는지 공유합니다."
date: 2026-09-14
draft: false
categories: ["AI Agent", "소프트웨어 엔지니어링"]
tags: ["AI Agent", "Software Engineering"]
aiSummary: "Claude Code와 Codex를 함께 쓰면서 정리한 AI Agent 활용법. 사이드 프로젝트에서 겪은 문제점(방향성 파악의 어려움, 세부 지시의 필요, 토큰 낭비)을 짚고, 이를 보완하려고 직접 만든 `/worklog`, `/troubleshoot`, `/resume` 커맨드를 소개한다."
---

안녕하세요. 박현상입니다.  

AI Agent가 "소프트웨어 엔지니어링" 분야에서 대중화되면서 Claude Code를 결제하여 사용하게 되었습니다.  
최근에는 OpenAI의 Codex도 함께 사용하고 있습니다. 우연한 계기로 Codex workflow 관련된 행사에 참여하면서 Codex로 다양하게 사용하는 것을 보고 난 이후 Codex도 유용하게 Claude Code와 함께 사용하고 있습니다.  

## 80%는 Claude Code로만

Claude Code는 예전부터 사용했었고, 제가 필요한 스킬들을 기술하여, 사용하고 있습니다.  
AI Agent를 이용해서 사이드 프로젝트를 진행하다보면 생기는 문제점들이 있었습니다.  
제가 생각한 AI Agent를 이용한 사이드 프로젝트의 문제점들을 아래와 같습니다.  

1. 내가 작성한 코드가 어디까지 기능 개발이 되었고, 어떠한 방향성을 향해 작성하고 있는지 모른다.

2. 생각보다 세부항목을 자세히 알려줘야 해당 기술에 대한 내용을 개발해 준다.

3. 생각보다 불필요한 내용으로 인해서 토큰을 많이 먹는다.

위 내용들이 제가 생각했을 때의 AI Agent의 문제점들입니다.

### 직접 만든 커맨드와 Hooks

- `/worklog`: 세션에서 한 일을 회고 노트로 정리하고, 미리 보여준 뒤 확인을 받고 Obsidian 저장소에 저장합니다.
- `/troubleshoot`: 에러를 어떻게 진단하고 고쳤는지 기록한 뒤 QMD로 색인합니다.
    - QMD(Query Markup Documents)와 관련되어서는 [QMD(Query Markup Documents): 로컬 환경을 위한 의미 기반의 작고 가벼운 지식 검색 엔진](https://discuss.pytorch.kr/t/qmd-query-markup-documents/9158)를 읽어보시는 것을 추천합니다.
- `/resume`: Claude Code 자체에도 `/resume` 명령어가 있지만 직접 만든 커맨드는 Obsidian 저장소에 저장된 노트를 읽고 닫힌 세션의 맥락을 복원한 후 작업을 지속할 수 있도록 도와줍니다.
    - 기존 Claude Code의 `/resume`명령어는 세션이 종료되어야지만 도와주는 느낌이 강했고, 종료 이후 다시 진행하고 싶은 경우에는 진행이 번거럽다라는 느낌이 들었습니다.

### Claude Code를 이용해서 만든 것들

Claude Code는 제가 만들고 싶었던 것들을 더 효율적으로 만들 수 있도록 도와줬습니다.  
몇 달 혹은 며칠 동안 만들어야 하는 것들을 효율적으로 빠르게 만들 수 있도록 도와주었습니다.  

- 

## ChatGPT는 어떻게 써야할까...?

기존에 Claude Code만 주로 사용하다 보니 ChatGPT를 어떻게 사용해야할지에 대해서 만든 고민이 생기게 되었습니다.
