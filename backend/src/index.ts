import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from InsightBoard backend!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});