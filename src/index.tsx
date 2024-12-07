import { Provider } from "@/components/ui/provider"
import { QueryClient, QueryClientProvider } from "react-query";
import { createRoot } from "react-dom/client";
import  App  from "./App"

// Crear una instancia de QueryClient para React Query
const queryClient = new QueryClient();


createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <Provider>
            <App></App>
        </Provider>
    </QueryClientProvider>
);
