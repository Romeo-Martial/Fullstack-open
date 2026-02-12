const Header = ({ course }) => <h1>{course}</h1>;
const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

const Content = ({ data1, data2, data3 }) => {
  return (
    <div>
      <Part part={data1.part} exercises={data1.exercises} />
      <Part part={data2.part} exercises={data2.exercises} />
      <Part part={data3.part} exercises={data3.exercises} />
    </div>
  );
};
const Total = ({ exercises }) => (
  <p>
    Number of exercises{" "}
    {exercises.reduce((acc, elt) => {
      acc += elt;
      return acc;
    }, 0)}
  </p>
);

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        data1={{ part: part1, exercises: exercises1 }}
        data2={{ part: part2, exercises: exercises2 }}
        data3={{ part: part3, exercises: exercises3 }}
      />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
