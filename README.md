# React Advanced Lab – Module 5

Đây là project thực hành cho **Lab 5 – React Advanced**, triển khai đầy đủ các bài tập về quản lý state nâng cao, tối ưu hiệu năng, advanced patterns và testing trong React.

## Nội dung chính

Project hiện thực các bài tập từ **Exercise 1.1 đến 4.2**:

- **Complex State Management**
  - `UserProfile` + `userProfileReducer`: Fetch state machine với `useReducer` (idle / loading / resolved / rejected).
  - `Cart` + `cartSlice`: Shopping cart dùng **Redux Toolkit** + `createSelector` để tính thuế.

- **Performance Engineering**
  - `LargeList` + `ListItem`: 
    - Tối ưu list lớn với `useMemo` + `React.memo`.
    - Ổn định callback với `useCallback` để tránh re-render dư thừa.
  - `App` + `AdminPanel`: Route-based **code splitting** bằng `React.lazy` + `Suspense`.

- **Advanced Design Patterns**
  - `Tabs` (file `Tab.jsx`): Compound Components dùng Context API (`Tabs`, `Tabs.List`, `Tabs.Tab`, `Tabs.Panel`).
  - `Modal`: Modal dùng **React Portal** render ra `#modal-root`.

- **Testing Strategies**
  - `LoginForm` + `__tests__/LoginForm.test.jsx`: Integration test với React Testing Library (flow đăng nhập).
  - `AppErrorBoundary`, `Bomb` + `__tests__/ErrorBoundary.test.jsx`: Test Error Boundary hiển thị fallback UI khi component lỗi.

Trang `Home` gom các phần demo lại để dễ chạy và kiểm tra.

## Công nghệ sử dụng

- **React + Vite**
- **React Router** (routing & code splitting)
- **Redux Toolkit** + `react-redux`
- **React Testing Library** (+ Jest style API)
- **react-error-boundary** (Error Boundary)
- React hooks: `useState`, `useReducer`, `useMemo`, `useCallback`, `useContext`, `lazy`, `Suspense`, Portals

## Cách chạy project

```bash
# Cài dependencies
npm install

# Chạy dev server
npm run dev
