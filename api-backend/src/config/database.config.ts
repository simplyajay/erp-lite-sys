import { PrismaClient } from "@prisma/client/extension";
import prisma from "./prisma.config";

class DatabaseConfig {
  private client: PrismaClient;
  private connected: boolean;
  private connecting: boolean;
  private reconnecting: boolean;
  private retryDelay: number;
  private currentRetries: number;
  private maxRetries: number;

  constructor() {
    this.connected = false;
    this.connecting = false;
    this.reconnecting = false;
    this.retryDelay = 2000;
    this.currentRetries = 0;
    this.maxRetries = 3;
    this.client = prisma;
  }

  public async connect(): Promise<boolean> {
    if (this.connected || this.connecting) return true;

    this.connecting = true;

    try {
      await this.client.$connect();
      this.currentRetries = 0; // reset on successful connection
      this.connected = true;
      this.connecting = false;
      console.log("Database Connection Successful");
      return true;
    } catch (error) {
      console.error("Database error: Initialization failed ", (error as Error).message);
      this.connecting = false;
      this.connected = false;
      await this.reconnect();
      return false;
    }
  }

  public async reconnect(): Promise<void> {
    if (this.reconnecting) return;

    this.reconnecting = true;

    if (this.currentRetries >= this.maxRetries) {
      console.error("Database error: Maximum number of retries reached");
      process.exit(1);
    }

    this.currentRetries++;

    await new Promise((resolve) => setTimeout(resolve, this.retryDelay)); // delay the retry

    try {
      await this.connect();
    } finally {
      this.reconnecting = false;
    }
  }

  isConnected() {
    return this.connected;
  }
}

const dbConfig = new DatabaseConfig();
export default dbConfig;
