const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// ⚡ Directly put your RapidAPI key here
const RAPIDAPI_KEY = "a587568823msh5624ff7fb927de6p1e06afjsnb003caf5b194";

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

  try {
    const response = await axios.post(
      "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php",
      { prompt, style_id, size },
      {
        headers: {
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-rapidapi-host": "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer", // direct image binary
      }
    );

    res.set("Content-Type", "image/png");
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2️⃣ /ghibli
app.get("/ghibli", async (req, res) => {
  if (!requirePrompt(req, res)) return;
  const { prompt, size, refImage, refWeight } = req.query;

  if (!refImage) return res.status(400).json({ error: "refImage is required" });

  try {
    const response = await axios.post(
      "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/ghibli/generateghibhliimage.php",
      { prompt, size, refImage, refWeight },
      {
        headers: {
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-rapidapi-host": "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4️⃣ /flux (direct image)
app.get("/flux", async (req, res) => {
  if (!requirePrompt(req, res)) return;

  const encodedParams = new URLSearchParams(req.query);

  try {
    const response = await axios.post(
      "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/fluximagegenerate/generateimage.php",
      encodedParams,
      {
        headers: {
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-rapidapi-host": "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        responseType: "arraybuffer", // direct image binary
      }
    );

    res.set("Content-Type", "image/png");
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3️⃣ /quick2 updated
app.get("/quick2", async (req, res) => {
  if (!requirePrompt(req, res)) return;
  const { prompt, style_id, size } = req.query;

  try {
    const response = await axios.post(
      "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php",
      { prompt, style_id, size },
      {
        headers: {
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-rapidapi-host": "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;

    if (data?.result?.data?.[0]?.results?.length > 0) {
      const imageUrl = data.result.data[0].results[0].origin; // first image
      res.redirect(imageUrl); // browser directly image দেখাবে
    } else {
      res.status(500).json({ error: "No image found in response" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5️⃣ /quick3 updated
app.get("/quick3", async (req, res) => {
  if (!requirePrompt(req, res)) return;
  const { prompt, style_id, size } = req.query;

  try {
    const response = await axios.post(
      "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php",
      { prompt, style_id, size },
      {
        headers: {
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-rapidapi-host": "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;

    if (data?.result?.data?.[0]?.results?.length > 0) {
      const imageUrl = data.result.data[0].results[0].origin; // first image
      res.redirect(imageUrl); // browser directly image দেখাবে
    } else {
      res.status(500).json({ error: "No image found in response" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
