import dotenv from "dotenv";

class EnvConfigService {
  constructor() {
    this.loadEnvironment();
  }

  loadEnvironment(): void {
    const envFile = this.getEnvFile();
    dotenv.config({ path: envFile });
  }

  getEnvFile(): string {
    const env = process.env.NODE_ENV || "development";
    return `.env.${env}`;
  }

  get(key: string): string | undefined {
    return process.env[key];
  }
}

const envConfig = new EnvConfigService();
export default envConfig;
