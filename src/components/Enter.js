function Enter() {
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
