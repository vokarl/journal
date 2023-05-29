const EnterList = (props) => {
  const journals = props.journals;
  const date = props.date;
  return (
    <div className="enter-list">
      {journals.map((journal) => (
        <div className="journals-preview" key={journal.id}>
          <h2>{journal.date}</h2>
          <h2>{journal.title}</h2>
          <p>{journal.entry}</p>
        </div>
      ))}
    </div>
  );
};

export default EnterList;

/*function Enter() {
  const clickAction = (state) => {
    console.log("worxx" + state);
  };

  return (
    <>
      <div className="form"></div>
      <button
        onClick={() => {
          clickAction(" cool!");
        }}
      >
        create
      </button>
    </>
  );
}

export default Enter;
*/
