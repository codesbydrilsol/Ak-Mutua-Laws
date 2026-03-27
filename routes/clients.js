const express = require('express');
const router = express.Router();
const Client = require('../models/Client');
const auth = require('../middleware/auth');

// Get all clients
router.get('/', auth, async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new client
router.post('/', auth, async (req, res) => {
  const { name, caseNumber, caseDescription, phone, email, status } = req.body;
  // Default status to 'pending' if not provided
  const newClient = new Client({ 
    name, 
    caseNumber, 
    caseDescription, 
    phone, 
    email,
    status: status || 'pending'
  });

  try {
    const savedClient = await newClient.save();
    res.json({ message: 'Client added', client: savedClient });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Search clients by name or case number
router.get('/search', auth, async (req, res) => {
  const { query } = req.query;
  try {
    const clients = await Client.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { caseNumber: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a client by ID
router.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedClient = await Client.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );
    if (!updatedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.json(updatedClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a client by ID
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const deletedClient = await Client.findByIdAndDelete(id);
    if (!deletedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.json({ message: 'Client deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;