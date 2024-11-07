function Display({ value, history }) {
  return (
    <div className="display-container">
      <div className="display-history">{history}</div>
      <div className="display-value">{value}</div>
    </div>
  );
}

export default Display;
