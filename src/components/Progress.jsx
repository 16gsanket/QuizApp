export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer
}) {
  return (
    <header
  
    >

      <progress max = {numQuestions} value={index + Number(answer !== null)} />

      <div     style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "20px",
      }}>

      <p style={{ fontSize: "16px" }}>
        Question
        <strong>
          {index + 1}/{numQuestions}
        </strong>
      </p>

      <p style={{ fontSize: "16px" }}>
        {points}/{maxPossiblePoints} Points
      </p>
      </div>
    </header>
  );
}
