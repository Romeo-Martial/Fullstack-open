const Header = ({ course }) => <h1>{course}</h1>;
const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

const Content = ({ data1, data2, data3 }) => {
  return (
    <div>
      <Part part={data1.name} exercises={data1.exercises} />
      <Part part={data2.name} exercises={data2.exercises} />
      <Part part={data3.name} exercises={data3.exercises} />
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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content data1={part1} data2={part2} data3={part3} />
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]} />
    </div>
  );
};

export default App;
