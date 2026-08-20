# dev-hyunsang.github.io

Astro 기반 정적 블로그 (GitHub Pages 배포, 서버/어댑터 없음).

## 새 포스트 작성 시

`src/content/posts/**/index.md`에 새 글을 쓰거나 기존 글의 본문을 크게 수정하면,
frontmatter에 `aiSummary` 필드를 2~3문장으로 채워 넣는다. 글 상단에 자동으로 렌더링된다
(`src/components/AISummary.astro`, `src/layouts/SingleLayout.astro`).

- 정적 사이트라 빌드/배포 시점에 실시간 API 호출이 불가능하므로, 글 작성 시점에 직접 생성해 저장하는 방식이다.
- 예시:
  ```yaml
  aiSummary: "PyCon Korea 2026 미디어팀 리드로 활동한 경험을 돌아보며, 커뮤니케이션과 팀워크에 대한 고민을 정리한 회고."
  ```
- 필드가 비어 있으면 요약 박스는 표시되지 않는다(optional).
