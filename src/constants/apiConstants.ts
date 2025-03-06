export const API_BASE_URL = "https://fakestoreapi.com";

// Endpoint’ler
export const API_ENDPOINTS = {
  PRODUCTS: "/products",
  // USERS: "/users",
  // COMMENTS: "/comments",
} as const;

// Endpoint tipleri (TypeScript’in literal tiplerle çalışması için)
export type ApiEndpoint = string; // Önceden: (typeof API_ENDPOINTS)[keyof typeof API_ENDPOINTS]
