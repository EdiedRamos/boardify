export const LocalStorageService = {
  getItem<T>(key: string): T | string | null {
    const data = localStorage.getItem(key);
    try {
      const toObj = JSON.parse(data ?? "");
      return toObj;
    } catch (error) {
      if (error instanceof Error) {
        console.error("localStorageService.getItem: ", error.message);
      }
      return data;
    }
  },
  setItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      if (error instanceof Error) {
        console.error("localStorageService.getItem: ", error.message);
      }
    }
  },
};
