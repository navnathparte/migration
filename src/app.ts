import express from "express";
import { AppDataSource } from "./config/database";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.initializeDatabase();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private async initializeDatabase(): Promise<void> {
    try {
      await AppDataSource.initialize();
      console.log("Data Source has been initialized!");
    } catch (err) {
      console.error("Error during Data Source initialization:", err);
    }
  }
}

export default new App().app;
