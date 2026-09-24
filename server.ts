import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Support up to 25MB for high resolution original photos
  app.use(express.json({ limit: '25mb' }));

  // Check portrait status
  app.get('/api/portrait-status', (_req, res) => {
    const customPhoto = path.join(__dirname, 'public', 'jasmine_portrait.jpg');
    const exists = fs.existsSync(customPhoto);
    res.json({ exists, url: exists ? '/jasmine_portrait.jpg' : '/jasmine_photo.jpg' });
  });

  // Permanently save Jasmine original portrait to server public directory
  app.post('/api/upload-portrait', (req, res) => {
    try {
      const { imageBase64 } = req.body;
      if (!imageBase64) {
        return res.status(400).json({ error: 'No image provided' });
      }

      const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');

      const publicDir = path.join(__dirname, 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      fs.writeFileSync(path.join(publicDir, 'jasmine_portrait.jpg'), buffer);
      fs.writeFileSync(path.join(publicDir, 'jasmine_photo.jpg'), buffer);

      // Also sync to dist if already built
      const distDir = path.join(__dirname, 'dist');
      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.join(distDir, 'jasmine_portrait.jpg'), buffer);
        fs.writeFileSync(path.join(distDir, 'jasmine_photo.jpg'), buffer);
      }

      console.log('Successfully saved Jasmine original photo to public/jasmine_portrait.jpg and public/jasmine_photo.jpg');
      return res.json({ success: true, url: '/jasmine_portrait.jpg' });
    } catch (err) {
      console.error('Failed to save portrait:', err);
      return res.status(500).json({ error: 'Server could not save image' });
    }
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
