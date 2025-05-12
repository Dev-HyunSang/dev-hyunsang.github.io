# dev-hyunsang.github.io

## ETC

## Why not basic command Update?
- `sudo apt update` & `sudo apt upgrade`로 Hugo Version 업데이트가 안 되는 현상이 있음.
- [GitHub - Hugo](https://github.com/gohugoio/hugo)를 보면 관련된 내용이 있음.

```shell
go install github.com/gohugoio/hugo@latest
CGO_ENABLED=1 go install -tags extended github.com/gohugoio/hugo@latest
hugo version
```