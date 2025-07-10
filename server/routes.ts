import type { Express } from "express";

export function registerRoutes(app: Express): void {
  // API routes for Vercel
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Add more API routes here
  // app.get('/api/projects', async (req, res) => {
  //   // Your project data logic
  //   res.json({ projects: [] });
  // });
}
