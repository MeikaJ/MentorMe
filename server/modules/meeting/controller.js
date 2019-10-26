import meeting from './model';

export const createMeeting = async (req, res) => {
    const { title, description } = req.body;
    const newMeeting = new Meeting({ title, description });



    try {
        return res.status(201).json({ meeting: await newMeeting.save() })
    }
    catch (e) {
        return res.status(e.status).json({ error: true, message: "error with meet" });
    }

}