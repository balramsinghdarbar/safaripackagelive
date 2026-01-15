const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/postman-data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.get("/public/species", async (req, res) => {
  try {
    console.log("Species API called");

    const response = await axios.get(
      `${process.env.API_BASE_URL}/public/species`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch species data",
    });
  }
});

app.get("/public/species/bengal-tiger", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/public/species/bengal-tiger`
    );
    res.json(response.data);
  } catch {
    res.status(500).json({ message: "Failed to fetch species data" });
  }
});
app.get("/public/get-filters", async (req, res) => {
  try{
    const response  = await axios.get(
      `${process.env.API_BASE_URL}/public/get-filters`
    );
  
    res.json(response.data)
  } catch {
    res.status(500).json({ message: "Failed to fetch species data"})
  }

});
app.get("/public/species/tabs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const response = await axios.get(
      `${process.env.API_BASE_URL}/public/species/tabs/${id}`,

      {
      params: { 
        species_characterstics,  
        species_details_characterstics_id,
    },
  }
    );

    res.json(response.data);

  } catch (error) {
    console.error("Species tabs API error:", error.message);
    res.status(500).json({
      success: false,
      data: [],
      message: "Failed to fetch species tabs"
    });
  }
});
app.get("/public/shared-safari", async (req, res) => {
  try {
    const { page, state_id } = req.query;

    const response = await axios.get(
      `${process.env.API_BASE_URL}/public/shared-safari`
    );

    res.json(response.data);
  } catch {
    res.status(500).json({ message: "Failed to fetch species data" });
  }

});

app.get("/public/get-besttime-to-visit", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/public/get-besttime-to-visit`
    );
    res.json(response.data);
  } catch {
    res.status(500).json({ message: "Failed to fetch species data" });
  }
});

app.get("/public/get-inclusions", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/public/get-inclusions`
    );
    res.json(response.data);
  } catch {
    res.status(500).json({ message: "Failed to fetch species data" });
  }
});
app.get("/public/get-themes", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/public/get-themes`
    );
    res.json(response.data);
  } catch {
    res.status(500).json({ message: "Failed to fetch species data" });
  }
});
app.get("/public/get-safari-budget", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/public/get-safari-budget`
    );
    res.json(response.data);
  } catch {
    res.status(500).json({ message: "Failed to fetch species data" });
  }
});
app.get("/public/stay-category", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/public/stay-category`
    );
    res.json(response.data);
  } catch {
    res.status(500).json({ message: "Failed to fetch species data" });
  }
});
app.get("/public/state", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/public/state`
    );
    res.json(response.data);
  } catch {
    res.status(500).json({ message: "Failed to fetch species data" });
  }
});
app.get("/public/park/species", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/park/species`
    );
    res.json(response.data);
  } catch {
    res.status(500).json({ message: "Failed to fetch species data" });
  }
});
app.get("/public/get-national-parks", async (req, res) => {
  try {

    const response = await axios.get(
      `${process.env.API_BASE_URL}/public/get-national-parks`
      
    );
    res.json(response.data);
  } catch {
    res.status(500).json({ message: "Failed to fetch species data" });
  }
});
app.get("/public/park", async (req, res) => {
  try {
    const { species_id, page } = req.query;

    const response = await axios.get(
      `${process.env.API_BASE_URL}/public/park`,
      { params: { species_id, page } }
    );

    const parks = response.data?.data || [];

    const fixedData = parks.map((park) => {
      let wildlife = [];

      if (typeof park.famous_for === "string" && park.famous_for.trim()) {
        // split by " And " OR comma OR period
        wildlife = park.famous_for
          .split(/\s+And\s+|,\s*|\.\s*/)
          .filter(Boolean)
          .map((name, index) => ({
            id: index + 1,
            name: name.trim(),
          }));
      }

      return {
        ...park,
        wildlife, // ✅ ALWAYS ARRAY
      };
    });

    res.json({
      ...response.data,
      data: fixedData,
    });

  } catch (error) {
    console.error("PARK API ERROR:", error.message);
    res.status(500).json({ message: "Failed to fetch park data" });
  }
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
