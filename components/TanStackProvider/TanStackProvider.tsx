"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface TanStackProviderProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

function TanStackProvider({ children }: TanStackProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanStackProvider;
