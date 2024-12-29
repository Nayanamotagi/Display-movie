const fetch = require('node-fetch');

const apiKey = 'dea2b8ad';
const baseUrl = 'https://www.omdbapi.com/';

test('OMDB API should return valid movie data', async () => {
    const response = await fetch(`${baseUrl}?t=Inception&apikey=${apiKey}`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.Response).toBe("True");
    expect(data.Title).toBe("Inception");
    expect(data.Year).toBe("2010");
});
