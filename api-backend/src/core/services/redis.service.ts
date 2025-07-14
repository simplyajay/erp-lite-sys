import { RedisKey } from "ioredis";
import redisConfig from "../../config/redis.config.js";

interface ISetOptions {
  key: RedisKey;
  value: any;
  ttlSeconds?: number;
  keepTTL?: boolean;
}

class RedisService {
  //access with this.client

  get client() {
    return redisConfig.isConnected() ? redisConfig.getClient() : null;
  }

  isConnected() {
    return redisConfig.isConnected();
  }

  async get(key: RedisKey): Promise<string | void | null> {
    const client = this.client;
    const connected = this.isConnected();

    if (!client || !connected) return;

    try {
      return await client.get(key);
    } catch (error) {
      console.warn("Redis error getting key: ", error);
      return;
    }
  }

  async set({ key, value, ttlSeconds, keepTTL = true }: ISetOptions): Promise<void> {
    const client = this.client;
    const connected = redisConfig.isConnected();

    if (!client || !connected) {
      console.warn("Redis error setting key: Client unkown or Redis is not connected");
      return;
    }

    try {
      if (keepTTL) {
        await client.set(key, value, "KEEPTTL");
      } else if (ttlSeconds && ttlSeconds > 0) {
        await client.set(key, value, "EX", ttlSeconds);
      } else {
        await client.set(key, value);
      }
    } catch (error) {
      console.warn("Redis error setting key: ", error);
      return;
    }
  }

  async delete(key: RedisKey): Promise<void> {
    const client = this.client;
    const connected = redisConfig.isConnected();
    if (!client || !connected) {
      console.warn("Redis error setting key: Client unkown or Redis is not connected");
      return;
    }

    try {
      await client.del(key);
    } catch (error) {
      console.warn("Redis error setting key: ", error);
      return;
    }
  }

  async setJSON<T>({ key, value, ttlSeconds = 60, keepTTL = false }: ISetOptions): Promise<T> {
    this.set({ key, value: JSON.stringify(value), ttlSeconds, keepTTL });
    return value;
  }

  async getJSON<T>(key: RedisKey): Promise<T | null> {
    const raw = await this.get(key);

    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (error) {
      console.warn("Redis error parsing key: ", error);
      return null;
    }
  }
}

export default new RedisService();
