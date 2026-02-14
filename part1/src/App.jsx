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
      <Content data1={parts[0]} data2={parts[1]} data3={parts[2]} />
      <Total
        exercises={[parts[0].exercises, parts[1].exercises, parts[2].exercises]}
      />
    </div>
  );
};

export default App;
