+++
title = 'Hugo 블로그 시작하기'
subtitle = '정적 사이트 생성기로 나만의 블로그 만들기'
date = 2026-01-01T20:00:00+09:00
draft = false
categories = ['개발', '블로그']
tags = ['Hugo', 'Static Site', 'Go', '웹개발']
+++

## 개요

Hugo는 Go 언어로 작성된 빠른 정적 사이트 생성기입니다. 이 글에서는 Hugo를 사용하여 블로그를 만드는 방법을 소개합니다.

## Hugo의 장점

Hugo를 선택하는 이유는 다음과 같습니다:

1. **빠른 빌드 속도** - Go 언어로 작성되어 매우 빠릅니다
2. **간단한 설정** - 복잡한 설정 없이 바로 시작할 수 있습니다
3. **다양한 테마** - 커뮤니티에서 제공하는 많은 테마가 있습니다
4. **마크다운 지원** - 글 작성이 편리합니다

## 설치 방법

Hugo를 설치하는 방법은 운영체제마다 다릅니다.

### macOS

```bash
brew install hugo
```

### Linux

```bash
sudo apt-get install hugo
```

### Windows

```powershell
choco install hugo -confirm
```

## 새 사이트 만들기

다음 명령어로 새로운 Hugo 사이트를 생성할 수 있습니다:

```bash
hugo new site my-blog
cd my-blog
```

## 글 작성하기

새 글을 작성하려면 다음 명령어를 사용합니다:

```bash
hugo new posts/my-first-post.md
```

작성된 마크다운 파일은 다음과 같은 형식을 가집니다:

```markdown
+++
title = '글 제목'
subtitle = '부제목'
date = 2026-01-01
categories = ['카테고리']
tags = ['태그1', '태그2']
+++

여기에 내용을 작성합니다.
```

## 로컬 서버 실행

작성한 글을 미리 보려면 로컬 서버를 실행합니다:

```bash
hugo server -D
```

브라우저에서 `http://localhost:1313`을 열어 확인할 수 있습니다.

## 빌드 및 배포

사이트를 빌드하려면:

```bash
hugo
```

빌드된 파일은 `public/` 디렉토리에 생성됩니다. 이 파일들을 GitHub Pages, Netlify, Vercel 등의 서비스에 배포할 수 있습니다.

## 결론

Hugo는 빠르고 간편한 정적 사이트 생성기입니다. 마크다운으로 글을 작성하고, 태그와 카테고리로 분류할 수 있어 블로그 운영에 최적화되어 있습니다.

다음 글에서는 Hugo 테마 커스터마이징에 대해 알아보겠습니다.
