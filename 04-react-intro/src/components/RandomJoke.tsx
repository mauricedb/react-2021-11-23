import { useState, useEffect } from 'react';

const url = 'https://api.chucknorris.io/jokes/random?category=dev';

interface Joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export function RandomJoke() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rsp = await fetch('https://api.chucknorris.io/jokes/categories');
      const data = await rsp.json();
      setCategories(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    fetch(url)
      .then((rsp) => rsp.json())
      .then((data) => {
        setJoke(data);
      });
  }, []);

  useEffect(() => console.log(joke), [joke]);
  console.log('Joke Render');

  return (
    <div>
      {joke?.value}

      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}
