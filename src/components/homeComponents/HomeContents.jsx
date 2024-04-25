import FilterAside from "./filterAside/FilterAside"
import Posts from "./posts/Posts";

const HomeContents = () => {
  return (
    <section className="wrapper">
    <FilterAside/>
     {/* posts container   */}
     <Posts/>
     {/* posts container ends  */}
  </section>
  )
}

export default HomeContents