[Memorious 바로가기](https://naver.com/)

<div align="center">

# Memorious - 우리 가족만을 위한 플랫폼
  <img src="https://github.com/KoreaIt-J-23-2-5/Memorious-Front/assets/133538833/0b8a28b9-7d2f-4732-90d8-ebcd9e0de5da" width="40%">

  #### 코리아IT아카데미(부산) 
  #### 'AWS 기반 공공ㆍ빅데이터 활용 웹서비스 개발자 양성과정(2회차)'
  #### 최종 프로젝트 : 4조
</div>


## 목차
- [프로젝트 소개](프로젝트-소개)
- [팀 소개](팀-소개)
- [개발환경](개발-환경)
- [협업 방식](협업-방식)
- [컨벤션](컨벤션)
- [주요기능 설명](주요-기능-설명)
- [각종 문서](문서)
- [화면 구현 및 코드리뷰](화면-구현-및-코드리뷰)
- [문제 해결](문제-해결)
- [회고](느낀-점)

  
## 프로젝트 소개
#### 프로젝트 개요
- Memorious는 '왜 가족만을 위한 플랫폼은 없을까?' 라는 물음과 함께 시작된 프로젝트입니다.
- 카카오/네이버 소셜 로그인을 통한 회원가입 및 로그인할 수 있습니다.
- 로그인 후 가족을 생성하고 이메일을 통해 가족을 초대할 수 있습니다.
- 캘린더, 메모, 게시판, 건강차트 기능을 지원하며 생성한 내용은 같은 가족끼리 공유됩니다. //주요기능 설명에 링크필
#### 개발 기간
  - 2023.11.03 ~ 2023.11.29 (27일)

#### [요구사항 명세서 바로가기](https://platinum-infinity-b08.notion.site/1-77e4fdb543504afd90accdc80f808117?pvs=4)




## 개발 환경
### Front-End
  <!-- 
  <img src="https://img.shields.io/badge/{내용}-{배경 색깔}?style={스타일}&logo={로고이름}&logoColor={로고 색깔}"/>
  <img src="https://img.shields.io/badge/-?logo= &logoColor=white">
  -->
<p>
    <img src="https://img.shields.io/badge/React-136276?style=flat&logo=react&logoColor=white">
    <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white">
    <img src="https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white">
</p>
<p>
  <img src="https://img.shields.io/badge/NPM-842d2a?logo=npm&logoColor=white">
  <img src="https://img.shields.io/badge/AntDesign-0170FE?style=flat&logo=antdesign&logoColor=white">
  <img src="https://img.shields.io/badge/Eslint-38297c?logo=eslint&logoColor=white">
  <img src="https://img.shields.io/badge/Prettier-8c6414?logo=prettier&logoColor=white">
  <img src="https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=white">
</p>

### Back-End
<p>
  <img src="https://img.shields.io/badge/Java-007396?logo=OpenJDK&logoColor=white">
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?logo=springboot&logoColor=white">
  <img src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/Amazon_RDS-527FFF?logo=amazonrds&logoColor=white">
  <img src="https://img.shields.io/badge/IntelliJ-000000?logo=intellijidea&logoColor=white">
</p>

### Deployment
<p>
  <img src="https://img.shields.io/badge/Docker-1b5e90?logo=docker&logoColor=white">
  <img src="https://img.shields.io/badge/Amazon_S3-446a29?logo=amazons3&logoColor=white">
  <img src="https://img.shields.io/badge/Amazon_EC2-ab6d10?logo=amazonec2&logoColor=white">
</p>

### Etc
<p>
  <img src="https://img.shields.io/badge/Github-181717?logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Git-8b2813?logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/Axios-391b89?logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/Notion-000000?logo=notion&logoColor=white">
  <img src="https://img.shields.io/badge/Slack-341533?logo=slack&logoColor=white">
</p>

## 주요 기능 설명
- 



## ERD 명세서
  <img src="https://github.com/KoreaIt-J-23-2-5/Memorious-Front/assets/133538833/1c987947-9b74-4f37-b50b-ba5da37b2444">

## 기능 설명 및 코드리뷰
### 회원가입 및 로그인
<div>
  <img src="https://github.com/KoreaIt-J-23-2-5/Memorious-Front/assets/133538833/a1d7d556-e790-4439-954e-64ff997bcc59" width=60%>
</div>
- 네이버, 카카오를 통한 회원가입을 지원합니다 ... 
<details>
  <summary>Code</summary> 
  
  ```java
  public class BootSpringBootApplication {
    public static void main(String[] args) {
      System.out.println("Hello, Honeymon");
    }
  }
  ```
  
  {코드 설명...}
</details>


### 가족 초대
- 가족의 이메일을 입력해 가족을 초대할 수 있으며 초대 메일이 전송됩니다.
- 초대를 받은 회원은 입력한 이메일을 입력해 로그인 시 초대가 완료됩니다.

### 캘린더
- 한 달 단위로 가족이 추가한 일정을 조회할 수 있으며 각각의 일정은 정해진 우선순위에 따라 배치됩니다.(구글캘린더와 동일)
- '오늘' '다음 월' '이전 월' 버튼과 연도 dropdown을 통해 원하는 월로 간편하게 이동할 수 있습니다.
-  일정이 많아 모든 일정을 보여주지 못할 경우, 'n개 더보기'를 클릭해 모달창에서 모든 일정을 확인 할 수 있습니다.
- '일정 추가' 버튼 또는 일정 셀을 클릭해 일정을 추가할 수 있습니다.
- 반복 주기(5가지)와 종료일 또는 횟수를 직접 정하여 반복되는 일정을 추가할 수 있습니다.
- 조회된 일정을 클릭하면 나오는 모달창을 통해 세부 내용을 조회하고, 수정 또는 삭제할 수 있습니다.
  
<details>
  <summary>Code Review</summary> 
  
  ```javascript
    const fetchData = async () => {
        try {
            const response = await instance.get(`/api/calendar/schedule/${dayjs(scheduleInput.startDate).format("YYYY-MM")}`);
            const processedData = response.data.sort(sortCalendarData).map(preprocessData).flat();
            setScheduleData(processedData);
        } catch (error) {
            console.log(error);
        }
    };
  ```
  
  {코드 설명...}
</details>

### 메모
- 포스트잇과 비슷한 모양의 메모를 추가하고 최신일정순으로 조회할 수 있습니다.
- 본인이 작성한 메모만 수정,삭제 할 수 있습니다.
- 내용에 포함된 키워드로 검색할 수 있으며 새로고침 버튼을 통해 새로 조회할 수 있습니다.
- 무한 스크롤을 지원합니다.

  
### 게시판
- 
- 
### 건강 차트
- 
- 
### 가족페이지
- 
- 

## 느낀 점

