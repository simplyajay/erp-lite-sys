import Redis, { Redis as RedisClient } from "ioredis";
import envConfig from "./env.config.js";

class RedisConfig {
  private redis: RedisClient | null;
  private connected: boolean;
  private connecting: boolean;

  constructor() {
    this.redis = null;
    this.connected = false;
    this.connecting = false;
  }

  async connect(): Promise<void> {
    if (this.connected || this.connecting) return;

    this.connecting = true;

    this.redis = new Redis({
      host: envConfig.get("REDIS_HOST"),
      port: Number(envConfig.get("REDIS_PORT")),
      connectTimeout: 1500,
      retryStrategy: () => null, //im controlling retry
    });

    this.redis.on("end", () => {
      this.connected = false;
      console.warn("Redis Connection Closed");
    });

    this.redis.on("error", (error) => {
      console.error("Redis error: ", error);
    });

    return new Promise((resolve, reject) => {
      const cleanup = () => {
        if (this.redis) {
          this.redis.off("ready", onReady);
          this.redis.off("error", onError);
        }
      };

      const onReady = () => {
        this.connected = true;
        this.connecting = false;
        console.log("Redis Connected Successfully");
        resolve();
        cleanup();
      };

      const onError = (error: Error) => {
        this.connected = false;
        this.connecting = false;
        console.log("Redis Connection Failed");
        reject(error);
        cleanup();
      };

      if (this.redis) {
        this.redis.once("ready", onReady);
        this.redis.once("error", onError);
      }
    });
  }

  isConnected(): boolean {
    return this.connected;
  }

  getClient(): RedisClient | null {
    return this.redis;
  }
}

const redisConfig = new RedisConfig();

export default redisConfig;
