# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🌤️ Open Weather
## 📌 프로젝트 소개
React 기반 프론트엔드 웹 애플리케이션으로, 사용자가 **도시 이름을 입력하면 OpenWeather API를 통해 해당 지역의 날씨 정보를 조회**하고 **날씨 아이콘 및 상세 정보**를 확인할 수 있는 서비스입니다.

## ✨ 주요 기능
- 도시 이름 입력 → 좌표 조회 → 날씨 데이터 표시
- 날씨 아이콘 및 배경 이미지 반영 (날씨 ID 기반)
- 로딩 상태 및 에러 메시지 처리
- 직관적인 카드형 UI (WeatherCard 컴포넌트)

## 🖼️ 구현 화면
- 검색창 UI (도시 입력 및 검색 버튼)
- WeatherCard 컴포넌트 (도시명, 날씨 설명, 온도, 습도, 아이콘 표시)
- 배경 이미지 변경 (날씨 상태에 따라 동적 반영)

## 🛠️ 사용 기술
- **Frontend**: React, JavaScript, JSX, Vite  
- **State Management**: useState, useEffect, useMemo  
- **API 통신**: Axios, OpenWeather API  
- **Styling**: CSS  
- **Deployment**: GitHub Pages / Vercel  

## 🔗 실행 링크
[Open Weather 실행하기](https://open-weather-eosin.vercel.app/)
