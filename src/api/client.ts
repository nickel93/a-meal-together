// src/api/client.ts
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://juntong.dkyou7.synology.me";

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(errorBody || `API request failed: ${res.status}`);
  }

  return res.json() as Promise<T>;
}
