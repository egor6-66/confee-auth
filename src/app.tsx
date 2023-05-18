import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import MainPage from 'pages/main';

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MainPage />
        </QueryClientProvider>
    );
}

export default App;
