const fetchPlayers = async () => {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et--web-pt/players');
    if (!response.ok) {
    throw new Error('Failed to fetch data from the API');
    }

    const data = await response.json();
    return data;
  };

export default fetchPlayers;