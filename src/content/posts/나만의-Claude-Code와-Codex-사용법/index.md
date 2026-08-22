---
title: "나만의 Claude Code와 Codex 사용법"
subtitle: "제가 어떻게 Claude Code와 Codex를 사용하는지 서술합니다."
date: 2026-07-30
categories: ["AI Agent", "LLM"]
tags: ["LLM Wiki", "AI", "AI Agent", "LLM"]
aiSummary: "저자가 평소 Claude Code와 Codex를 어떻게 설정하고 사용하는지 소개하는 글로, oh-my-claudecode와 ponytail 같은 도구, QMD를 통한 프롬프트 컨텍스트 관리 방식을 다룬다. (작성 중인 글)"
---

안녕하세요. 박현상입니다.  
평소에 제가 Claude Code와 Codex를 사용하고 있는지 서술합니다.  

## Claude Code 설정

- [`oh-my-claudecode`](https://github.com/yeachan-heo/oh-my-claudecode)와 [`ponytail`](https://github.com/DietrichGebert/ponytail)를 사용하고 있습니다.  
- `ponytail`의 경우에는 Codex에서도 함께 사용하고 있습니다.
- 모든 설정과 함께 제가 작성한 Prompt Context에 대해서는 작동적으로 [QMD(Query Markup Documents)](https://github.com/tobi/qmd)를 작성하여 Obsidan에서 확인할 수 있도록 하였습니다.

### 전역 스킬

- 전역 스킬로 등록된 사항은 아래와 같습니다.
    - Claude Code가 작성한 코드는 꼭 