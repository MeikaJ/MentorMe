import Group from './model';
export const createGroup = async (req, res) => {
  const {
    name,
    description,
    category

  } = req.body;

  if (!name) {
    return res.status(400).json({ error: true, message: 'Please provide a name' });
  } else if (typeof name !== 'string') {
    return res.status(400).json({ error: true, message: 'Name must use A-Z character types only' });
  } else if (name.length < 5) {
    return res.status(400).json({ error: true, message: 'Name must have atleast 5 characters' });

  }

  if (!description) {
    return res.status(400).json({ error: true, message: 'Please provide a description' });
  } else if (typeof description !== 'string') {
    return res.status(400).json({ error: true, message: 'Description must use A-Z character types only' });
  } else if (description.length < 10) {
    return res.status(400).json({ error: true, message: 'Description must have atleast 5 characters' });

  }

  const group = new Group
};