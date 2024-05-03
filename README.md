Music App - приложение для прослушивания музыки

## Доп инструменты:

API - Deezer

Для верстки используется material UI

## 1 уровень (необходимый минимум)

### React

- Функциональные компоненты c хуками в приоритете над классовыми: [component](https://github.com/MaxFun4k/aston_react/tree/main/src/components), [pages](https://github.com/MaxFun4k/aston_react/tree/main/src/components/pages)
- Есть разделение на умные и глупые компоненты

  Умные: [search](https://github.com/MaxFun4k/aston_react/blob/main/src/components/search/Search.js), [TrackItem](https://github.com/MaxFun4k/aston_react/blob/main/src/components/trackItem/TrackItem.js) и т.д.

  Глупые: [searchItem](https://github.com/MaxFun4k/aston_react/blob/main/src/components/searchItem/SearchItem.js), [FavoriteBtn](https://github.com/MaxFun4k/aston_react/blob/main/src/components/favoriteBtn/FavoriteBtn.js) и т.д.

- Есть рендеринг списков: [Favorite](https://github.com/MaxFun4k/aston_react/blob/main/src/components/pages/favorite/Favorite.js), [History](https://github.com/MaxFun4k/aston_react/blob/main/src/components/pages/history/History.js) и т.д.
- Реализована хотя бы одна форма: [Form](https://github.com/MaxFun4k/aston_react/blob/main/src/components/Form/Form.js), [Search](https://github.com/MaxFun4k/aston_react/blob/main/src/components/search/Search.js) и т.д.
- Есть применение Контекст API: [ThemeContext](https://github.com/MaxFun4k/aston_react/blob/main/src/components/ThemeButton/ThemeButton.js) в [App](https://github.com/MaxFun4k/aston_react/blob/main/src/components/app/App.js)
- Есть применение предохранителя: [ErrorBoundary](https://github.com/MaxFun4k/aston_react/blob/main/src/components/errorBounary/ErrorBoundary.tsx) в [App](https://github.com/MaxFun4k/aston_react/blob/main/src/components/app/App.js)
- Есть хотя бы один кастомный хук: [useAuth](https://github.com/MaxFun4k/aston_react/blob/main/src/hooks/useAuth.js) и [useDebounce](https://github.com/MaxFun4k/aston_react/blob/main/src/hooks/useDebounce.js)
- Хотя бы несколько компонентов используют PropTypes: [FavoriteBtn](https://github.com/MaxFun4k/aston_react/blob/main/src/components/favoriteBtn/FavoriteBtn.js) и [Form](https://github.com/MaxFun4k/aston_react/blob/main/src/components/Form/Form.js)
- Поиск не должен триггерить много запросов к серверу: [useDebounce](https://github.com/MaxFun4k/aston_react/blob/main/src/hooks/useDebounce.js) в [Search](https://github.com/MaxFun4k/aston_react/blob/main/src/components/search/Search.js)
- Есть применение lazy + Suspense: [Routes](https://github.com/MaxFun4k/aston_react/blob/main/src/routes/Routes.js)

### Redux

- Используем Modern Redux with Redux Toolkit: [Store](https://github.com/MaxFun4k/aston_react/blob/main/src/redux/index.js)
- Используем слайсы: [playerSlice](https://github.com/MaxFun4k/aston_react/blob/main/src/redux/slices/playerSlice.js), [searchSlice](https://github.com/MaxFun4k/aston_react/blob/main/src/redux/slices/searchSlice.js) и [userSlice](https://github.com/MaxFun4k/aston_react/blob/main/src/redux/slices/userSlice.js)
- Есть хотя бы одна кастомная мидлвара: [Store](https://github.com/MaxFun4k/aston_react/blob/main/src/redux/index.js)
- Используется RTK Query: [tracksQuery](https://github.com/MaxFun4k/aston_react/blob/main/src/api/tracksApi.js), [historyApi](https://github.com/MaxFun4k/aston_react/blob/main/src/api/historyApi.js) и [favoriteApi](https://github.com/MaxFun4k/aston_react/blob/main/src/api/favoriteApi.js)
- Используется Transforming Responses: [tracksQuery](https://github.com/MaxFun4k/aston_react/blob/main/src/api/tracksApi.js)

## 2 уровень

- Частично использован Typescript
- Использован Firerbase для регистрации, избранного и истории: [authAction](https://github.com/MaxFun4k/aston_react/blob/main/src/redux/action/authActions.js), [confige](https://github.com/MaxFun4k/aston_react/blob/main/src/firebase.js), [historyApi](https://github.com/MaxFun4k/aston_react/blob/main/src/api/historyApi.js) и [favoriteApi](https://github.com/MaxFun4k/aston_react/blob/main/src/api/favoriteApi.js)
