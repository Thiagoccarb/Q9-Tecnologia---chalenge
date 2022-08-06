const { REACT_APP_API } = process.env;

type Data = {
  email: string;
}

export const registerUser = async (data: Data) => {
  try {
    const URL = `${REACT_APP_API}/register`;
    const request = await fetch(
      URL,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      }
    );
    const response = await request.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}