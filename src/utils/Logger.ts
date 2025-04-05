export function createLogger(context: string) {
  return {
    info: (message: string, ...args: any[]) => {
      console.log(
        `[${new Date().toISOString()}] [INFO] [${context}] ${message}`,
        ...args
      );
    },
    error: (message: string, ...args: any[]) => {
      console.error(
        `[${new Date().toISOString()}] [ERROR] [${context}] ${message}`,
        ...args
      );
    },
    warn: (message: string, ...args: any[]) => {
      console.warn(
        `[${new Date().toISOString()}] [WARN] [${context}] ${message}`,
        ...args
      );
    },
  };
}
