export const fetchMeetings = () =>
    fetch('http://localhost:8080/api/meetings')
        .then(res => res.json());