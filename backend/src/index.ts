import express from 'express';
import { PrismaClient } from '@prisma/client'
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

app.get('/api/hello', async (_req, res) => {
  const users = await prisma.user.findMany();
  res.json({ message: 'Hello from InsightBoard backend!', users });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
