import { Router } from "express";
import { readMessage, setMessage } from "./utils/ethereum";

const router = Router();

router.get("/api/message", async (req, res) => {
  try {
    const message = await readMessage();
    res.json({ message });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/api/message", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }
  try {
    const receipt = await setMessage(message);
    res.json({ receipt });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
