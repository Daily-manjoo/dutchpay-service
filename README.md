# 먹어도 먹어도 또 먹고 싶은 먹방 집합소 🍚
![image](https://github.com/user-attachments/assets/e4154e00-483b-4c43-b5c5-5503e6868573)



<br/>

## 프로젝트 소개
* Dutchpay-serivece는 정산하기 번거로워하는 사람들을 위해 더치페이를 간편하게 관리하고 공유할 수 있는 서비스입니다.
* 사용자가 그룹을 만들고, 각 멤버가 부담한 비용을 기록하여 손쉽게 총 정산 금액과 각자의 부담 금액을 확인할 수 있습니다.
* 각 그룹의 비용 내역을 테이 형태로 시각화하여 사용자들이 확인할 수 있으며, 그룹 멤버 간 정산 결과를 직관적으로 전달합니다.
* 사용자가 그룹을 만들고, 각 멤버가 부담한 비용을 기록하여 손쉽게 총 정산 금액과 각자의 부담 금액을 확인할 수 있습니다.

<br/>

## 🖥️ Tech Stack

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <!-- React -->
<img src="https://img.shields.io/badge/AWS Amplify-FF9900?style=flat-square&logo=aws-amplify&logoColor=white"/> <!-- AWS Amplify -->
<img src="https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=Jest&logoColor=white"/> <!-- Jest -->
<img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=white"/> <!-- Recoil -->
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <!-- Styled Components -->

<br/>

## Trouble Shooting

<details>
  <summary> Aws amplify 배포 시 babel-preset-react-app 에러 </summary>

  - 필요한 종속성(@babel/plugin-proposal-private-property-in-object)을 devDepedencies에 직접 추가하여 경고와 빌드 실패 해결. 이후 package.json 업데이트 후 npm install 실행
  
</details>

<details>
  <summary> Recoil 적용 이후 Jest 테스트 실패 </summary>

  - RecoilRoot를 Jest에 포함하고 Recoil을 사용하는 컴포넌트의 초기값 설정 후 테스트가 독립적을 실행되도록 수정
  
</details>

<br/>

## 프로젝트 구조
```
📦 
├─ .github
│  └─ pull_request_template.md
├─ .gitignore
├─ README.md
├─ amplify.yml
├─ amplify
│  ├─ auth
│  │  └─ resource.ts
│  ├─ backend.ts
│  ├─ data
│  │  └─ resource.ts
│  ├─ package.json
│  └─ tsconfig.json
├─ babel.config.json
├─ jest.config.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ dutchpay.jpg
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
└─ src
   ├─ App.css
   ├─ App.js
   ├─ App.test.js
   ├─ Route.js
   ├─ components
   │  ├─ AddExpenseForm.jsx
   │  ├─ AddMembers.jsx
   │  ├─ Addmemebers.spec.jsx
   │  ├─ CreateGroup.jsx
   │  ├─ CreateGroup.spec.jsx
   │  ├─ ExpenseMain.jsx
   │  ├─ ExpenseMain.spec.jsx
   │  ├─ ExpenseTable.jsx
   │  ├─ OverlayForm.jsx
   │  ├─ SettlementSummary.jsx
   │  └─ shared
   │     └─ OverlayWrapper.jsx
   ├─ index.css
   ├─ index.js
   ├─ logo.svg
   ├─ reportWebVitals.js
   ├─ setupTests.js
   └─ state
      ├─ Expenses.js
      ├─ GroupMembers.js
      └─ GroupName.js
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)
