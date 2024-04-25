import Filter from "./Filter"
import Sort from "./Sort"

const FilterAside = () => {
  return (
    <aside>
      <div className="sidebar-items">
        <Sort/>
        <Filter/>
      </div>
    </aside>
  )
}

export default FilterAside