interface LearningBoxProp {
  children: React.ReactNode;
  purpose: string;
  toCall: string;
  explainMore?: string;
  example?: string;
}

function LearningBox({
  children,
  purpose,
  toCall,
  explainMore,
  example,
}: LearningBoxProp) {
  return (
    <div className="container">
      <p>
        <strong>Purpose:</strong>
        <br />
        {purpose}
      </p>
      <div className="border border-2 border-black mb-3">{children}</div>

      <p>
        <strong> How to call:</strong> <br /> {toCall}
      </p>
      <p>{explainMore ? `Value passed: ${explainMore}` : ""}</p>
      <p>{example ? `Example: ${example}` : ""}</p>
    </div>
  );
}
export default LearningBox;
