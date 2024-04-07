import { type JwtPayload, jwtDecode } from "jwt-decode";

export const DecodeService = {
  getDecoded(encoded: string): JwtPayload | null {
    try {
      const decoded = jwtDecode(encoded);
      return decoded;
    } catch {
      return null;
    }
  },
  getSub(encoded: string): string {
    const decoded = this.getDecoded(encoded);
    return decoded?.sub ?? "";
  },
};
