import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const url =
  'https://the-problem-solver-sample-data.azurewebsites.net/jon-skeet';

interface Joke {
  id: number;
  joke: string;
}

export async function getServerSideProps() {
  const rsp = await fetch(url);
  const jokes = await rsp.json();

  return {
    props: {
      jokes,
    },
  };
}

interface Props {
  jokes: Joke[];
}

const Home: NextPage<Props> = ({ jokes }) => {
  return (
    <div>
      Hello Next.js
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>{joke.joke}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
