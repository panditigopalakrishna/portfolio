import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    const resumePath = path.join(process.cwd(), 'assets', 'Gopalakrishna_Panditi_Resume.pdf');
    
    if (fs.existsSync(resumePath)) {
      res.download(resumePath, 'Gopalakrishna_Panditi_Resume.pdf');
    } else {
      res.status(404).json({ 
        message: 'Resume not found. Please place the resume PDF at assets/Gopalakrishna_Panditi_Resume.pdf' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}