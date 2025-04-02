import express from "express";
import * as Routes from '@/routes';

const app = express();

app.use(express.json());

// Default Route
app.use("/", Routes.HomeRoutes);

export default app;