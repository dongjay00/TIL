# < Git 기본 사용법 정리>

> 빨리 익숙해져야지.



## 1. Status & log

```sh
# git 작업폴더 상태 확인
git status

# Log 보기
git log
```



## 2. Working Area: init, clone

> 프로젝트 경로를 workspace/project 로 가정하겠다.

```sh
# 프로젝트를 git repository로 생성하기
cd project
git init # 주로 활용

# 로컬 repo를 클론하여 작업폴더로 만들기
git clone /path/to/repository

# 원격 repo 클론하여 작업폴더로 만들기
git clone https://github.com.....
```



## 3. Stage Area: add

```sh
# 모든 파일 스테이지에 올리기
git add .

# 선택적으로 올리기
git add index.html
```



## 4. Local Repository: commit

```sh
# 변경사항 commit
git commit -m "message"
```



## 5. Remote Repository: push, pull

```sh
# local repo를 origin이라는 이름의 remote repo와 연결
git remote add origin <server>

# remote 저장소 목록 보기
git remote -v

# git push의 기본값을 git push origin master로 지정
git push -u origin master

# origin remote의 변경사항을 local repo에 업데이트
git pull origin master
git pull
```

