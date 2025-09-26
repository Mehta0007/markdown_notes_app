export default function SideNav(props) {
  const notes = ['BLYAAT', 'SUKKAAA'];
  const showNav = false

  return (
    <section className={"nav " + (showNav? '' : 'hidden-nav') }>
      <h1 className="text-gradient">T NOTES</h1>
      <h6>Easy Notes</h6>
      <div className="full-line"></div>
      <button>
        <h6>New Note</h6>
        <i className="fa-solid fa-plus"></i>
      </button>
      <div className="notes-list">
        {notes.length == 0 ? (
          <p> Create Some Notes Man</p>
        ) : (
          notes.map((note, idx) => {
            return (
              <button key={idx} className="card-button-secondary list-btn">
                <p>{note}</p>
                <small>DATETIME</small>
                <div className="delete-btn">
                <i className="fa-solid fa-trash-can"></i>
                </div>

                DELETE BUTTON ICON
              </button>
            );
          })
        )}
      </div>


      <div className="full-line">
            <button>
                <h6>Logout</h6>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
      </div>
    </section>
  );
}
