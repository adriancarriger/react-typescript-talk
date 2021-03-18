// import { useAllFilmsQuery } from 'generated/graphql';

// const notEmpty = <T extends unknown>(film: T | undefined | null): film is T => Boolean(film);

const Example1 = () => {
  // const { data } = useAllFilmsQuery();

  return (
    <div>
      <h1>Remote data</h1>

      <div>
        {/* {data?.allFilms?.films?.filter(notEmpty).map((film) => (
          <div key={film.id} style={{ paddingBottom: '1em' }}>
            <div>Title: {film.title}</div>
            <div>Director: {film.director}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Example1;
