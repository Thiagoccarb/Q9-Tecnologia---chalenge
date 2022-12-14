const { REACT_APP_API } = process.env;

const token = localStorage.getItem('token') || '';

export const fetchBreedList = async (breed?: string ) => {
  try {
    const URL = `${REACT_APP_API}/list/?breed=${breed}`;

    const request = await fetch(
      URL,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      }
    );
    const response = await request.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}