const Header = ({ course }) => <h1>{course}</h1>;
const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

const Content = ({ data }) => {
  return (
    <div>
      <Part part={data[0].name} exercises={data[0].exercises} />
      <Part part={data[1].name} exercises={data[1].exercises} />
      <Part part={data[2].name} exercises={data[2].exercises} />
    </div>
  );
};
const Total = ({ data }) => (
  <p>
    Number of exercises{" "}
    {data.reduce((acc, elt) => {
      acc += elt.exercises;
      return acc;
    }, 0)}
  </p>
);

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content data={parts} />
      <Total data={parts} />
    </div>
  );
};

export default App;
