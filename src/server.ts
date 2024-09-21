import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Define a simple route for the landing page
app.get('/', (req: Request, res: Response) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
