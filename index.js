import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

// Helper to validate prompt
function requirePrompt(req, res) {
  if (!req.query.prompt) {
    res.status(400).json({ error: "prompt is required" });
    return false;
  }
  return true;
}

// 1️⃣ /quick
app.get("/quick", async (req, res) => {
  if (!requirePrompt(req, res)) return;
  const { prompt, style_id, size } = req.query;

  const options = {
    method: "POST",
    url: "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php",
    headers: {
      "x-rapidapi-key": RAPIDAPI_KEY,
      "x-rapidapi-host": "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: { prompt, style_id, size },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2️⃣ /ghibli
app.get("/ghibli", async (req, res) => {
  if (!requirePrompt(req, res)) return;
  const { prompt, size, refImage, refWeight } = req.query;

  if (!refImage) return res.status(400).json({ error: "refImage is required" });

  const options = {
    method: "POST",
    url: "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/ghibli/generateghibhliimage.php",
    headers: {
      "x-rapidapi-key": RAPIDAPI_KEY,
      "x-rapidapi-host": "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: { prompt, size, refImage, refWeight },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3️⃣ /quick2
app.get("/quick2", async (req, res) => {
  if (!requirePrompt(req, res)) return;
  const { prompt, style_id, size } = req.query;

  const options = {
    method: "POST",
    url: "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php",
    headers: {
      "x-rapidapi-key": RAPIDAPI_KEY,
      "x-rapidapi-host": "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: { prompt, style_id, size },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4️⃣ /flux
app.get("/flux", async (req, res) => {
  if (!requirePrompt(req, res)) return;

  const encodedParams = new URLSearchParams(req.query);

  const options = {
    method: "POST",
    url: "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/fluximagegenerate/generateimage.php",
    headers: {
      "x-rapidapi-key": RAPIDAPI_KEY,
      "x-rapidapi-host": "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5️⃣ /quick3
app.get("/quick3", async (req, res) => {
  if (!requirePrompt(req, res)) return;
  const { prompt, style_id, size } = req.query;

  const options = {
    method: "POST",
    url: "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php",
    headers: {
      "x-rapidapi-key": RAPIDAPI_KEY,
      "x-rapidapi-host": "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: { prompt, style_id, size },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
