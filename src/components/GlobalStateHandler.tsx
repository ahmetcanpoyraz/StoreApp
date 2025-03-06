// src/components/ui/GlobalStateHandler.tsx
import { Loading } from "./Loading";
import { Error } from "./Error";
import { ApiError } from "../api/types/apiTypes";

export const GlobalStateHandler = <T,>({
  data,
  loading,
  error,
  children,
}: {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
  children: React.ReactNode;
}) => {
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data) return null;
  return <>{children}</>;
};
