import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

// ⚡ Replace this with your actual RapidAPI key
const RAPIDAPI_KEY = "a587568823msh5624ff7fb927de6p1e06afjsnb003caf5b194";

// 1️⃣ Quick generate
app.get("/quick", async (req, res) => {
  const { prompt, style_id, size } = req.query;

  if (!prompt) return res.status(400).json({ error: "prompt is required" });

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

// 2️⃣ Ghibli generate
app.get("/ghibli", async (req, res) => {
  const { prompt, size, refImage, refWeight } = req.query;

  if (!prompt) return res.status(400).json({ error: "prompt is required" });

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

// 3️⃣ Quick duplicate
app.get("/quick2", async (req, res) => {
  const { prompt, style_id, size } = req.query;

  if (!prompt) return res.status(400).json({ error: "prompt is required" });

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

// 4️⃣ Flux generate
app.get("/flux", async (req, res) => {
  if (!req.query.prompt) return res.status(400).json({ error: "prompt is required" });

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

// 5️⃣ Quick third
app.get("/quick3", async (req, res) => {
  const { prompt, style_id, size } = req.query;

  if (!prompt) return res.status(400).json({ error: "prompt is required" });

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
