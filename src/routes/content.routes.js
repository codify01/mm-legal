const express = require('express');
const router = express.Router();
const Content = require('../model/content.model');

// Save content
router.post('/save', async (req, res) => {
  try {
    const { contentId, htmlContent } = req.body;

    let savedContent;

    if (contentId) {
      // Update existing content
      savedContent = await Content.findOneAndUpdate(
        {_id:contentId},
        { htmlContent },
        { new: true, runValidators: true }
      );

      if (!savedContent) {
         const newContent = new Content({ htmlContent });
      savedContent = await newContent.save();
      res.status(201).json({ message: 'Content saved successfully', content: savedContent });
      }

      res.status(200).json({ message: 'Content updated successfully', content: savedContent });
    } else {
      // Create new content
      const newContent = new Content({ htmlContent });
      savedContent = await newContent.save();
      res.status(201).json({ message: 'Content saved successfully', content: savedContent });
    }
  } catch (error) {
    console.error('Error saving/updating content:', error);
    res.status(500).json({ error: 'Failed to save or update content', message:error.message });
  }
});


// Get all content
router.get('/', async (req, res) => {
  try {
    const contents = await Content.find();
    res.json(contents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch content' });
  }
});

// Get content by name

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const content = await Content.findById(id);
        if(content) {
            return res.status(200).json({ message: 'Content found', data:content });
        }
        if (!content) { return res.status(404).json({ message: 'Content not found' })
        }} catch (error) {
    console.log(error);
            return res.status(500).json({ error: 'Failed to fetch content', message:error.message });
            
        }
})

module.exports = router;
