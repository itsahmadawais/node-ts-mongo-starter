import express from "express";
import * as Routes from '@/routes';
import initializeDatabase from "@/configs/dbConfig";

const app = express();

app.use(express.json());

// Initialize Mongo DB Database
initializeDatabase();

// Default Route
app.use("/", Routes.HomeRoutes);

// Authentication Routes
app.use("/api/auth", Routes.AuthRoutes);

export default app;