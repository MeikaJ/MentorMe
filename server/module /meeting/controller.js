import meeting from './model';

export const createMeeting = async (req, res) => {
    const { title, description } = req.body;
    const newMeeting = new Meeting({ title, description });





}