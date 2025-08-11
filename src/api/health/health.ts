import { apiRequest } from "../client";
import { endpoints } from "../endpoints";

export const healthCheck = () => apiRequest<string>(endpoints.healthCheck);
