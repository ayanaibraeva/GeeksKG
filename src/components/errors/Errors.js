// import React, { Component } from 'react';
//
// class ErrorBoundary extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }
//
//     static getDerivedStateFromError(error) {
//         return { hasError: true };
//     }
//
//     componentDidCatch(error, errorInfo) {
//         //логирование ошибок в сервисы мониторинга ошибок
//         console.error('Error caught by error boundary:', error, errorInfo);
//     }
//
//     render() {
//         if (this.state.hasError) {
//             //отрисовка fallback UI
//             return <h1>Something went wrong.</h1>;
//         }
//
//         return this.props.children;
//     }
// }
//
// class App extends Component {
//     render() {
//         return (
//             <ErrorBoundary>
//
//             </ErrorBoundary>
//         );
//     }
// }
//
// export default App;
