import { Movie } from '../types/movie';

import { Form } from './Form';
import { LabelInput } from './LabelInput';
import { LabelTextArea } from './LabelTextArea';

import classes from './MovieEditor.module.css';

interface Props {
  movieId: number;
  data?: Movie;
  error?: Error;
  clearSelectedMovie: () => void;
  setData: React.Dispatch<React.SetStateAction<Movie | undefined>>;
}

export function MovieEditor({
  clearSelectedMovie,
  data,
  error,
  setData,
}: Props) {
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Form
      className={classes.MovieEditor}
      onSubmit={(e) => {
        e.preventDefault();
        alert(JSON.stringify(data, null, 2));
        clearSelectedMovie();
      }}
    >
      <LabelInput data={data} name="title" setData={setData}>
        Title
      </LabelInput>

      <LabelTextArea data={data} name="overview" setData={setData} rows={10}>
        Overview
      </LabelTextArea>

      <LabelInput data={data} name="release_date" setData={setData} type="date">
        Release date
      </LabelInput>

      <LabelInput
        data={data}
        name="vote_average"
        setData={setData}
        type="number"
      >
        Vote Average
      </LabelInput>

      <LabelInput data={data} name="vote_count" setData={setData} type="number">
        Vote Count
      </LabelInput>

      <div className={classes.EditorButtons}>
        <button type="submit">Save</button>
        <button type="button" onClick={clearSelectedMovie}>
          Cancel
        </button>
      </div>
    </Form>
  );
}
