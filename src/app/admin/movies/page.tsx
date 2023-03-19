"use client"

import DataTable from "@components/DataTable"
import "gridjs/dist/theme/mermaid.css"

function Movies() {
  return (
    <div className="relative p-4">
      {/* <!-- Table Section --> */}
      <div className="absolute top-7 right-5 space-x-2">
        <button type="button" className="btn btn-info btn-md">
          Add Movie
        </button>
        <button type="button" className="btn btn-info btn-md">
          Import Movie
        </button>
      </div>
      <DataTable />
      {/* <!-- End Table Section --> */}
    </div>
  )
}

export default Movies
