import Markdown from "markdown-to-jsx";
import TopNav from "./TopNav";

export default function TN(props){

     const md = `# this is a header 1
## this is a header 2

hello world
[click me](https://www.google.com)
    `


    return(
     <section className="tn-container">
<TopNav {...props} />
<article>
<Markdown> 
    {md}
     </Markdown>

</article>
     </section>
    )
}