import TopNav from "./TopNav"


export default function Editor(props) {

    return(
        <section className="notes-container">
       <TopNav {...props} />

<textarea placeholder="mitochondria is the power house of the cell" />

      </section>
    )
}