function RatingSash({ score }) {
  let rating =
    score >= 70
      ? "green"
      : score >= 65
      ? "orange"
      : score >= 50
      ? "yellow"
      : score === 0
      ? "gray"
      : "red";

  return (
    <div className={`${rating}-rating-sash rating-sash`}>
      <span>{score}</span>
    </div>
  );
}

export default RatingSash;
