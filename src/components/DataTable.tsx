"use client"

import { Grid, _ } from "gridjs-react"
import "gridjs/dist/theme/mermaid.css"
import { FaRegEdit } from "react-icons/fa"
import { MdDeleteOutline } from "react-icons/md"

function DataTable() {
  return (
    <Grid
      data={[
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eo3n@yahoo.com", "(05) 10 878 5554"],
        ["Nisen", "nis900@gmail.com", "313 333 1923"],
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eo3n@yahoo.com", "(05) 10 878 5554"],
        ["Nisen", "nis900@gmail.com", "313 333 1923"],
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eo3n@yahoo.com", "(05) 10 878 5554"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eo3n@yahoo.com", "(05) 10 878 5554"],
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eo3n@yahoo.com", "(05) 10 878 5554"],
        ["Nisen", "nis900@gmail.com", "313 333 1923"],
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eo3n@yahoo.com", "(05) 10 878 5554"],
        ["Nisen", "nis900@gmail.com", "313 333 1923"],
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eo3n@yahoo.com", "(05) 10 878 5554"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eo3n@yahoo.com", "(05) 10 878 5554"],
      ]}
      sort
      search
      resizable
      autoWidth
      columns={[
        "Name",
        "Email",
        {
          name: "Phone Number",
          sort: false,
        },
        {
          name: "Actions",
          sort: false,
          width: "150px",
          formatter: (cell: any, row: any) =>
            _(
              <>
                <button
                  className="btn btn-md btn-ghost mr-1 hover:!bg-info-50"
                  onClick={() => alert("clicked!")}
                  type="button"
                >
                  <FaRegEdit className="h-4 w-4" />
                </button>
                <button
                  className="btn btn-md btn-ghost ml-1 hover:!bg-error-50"
                  onClick={() => alert("clicked!")}
                  type="button"
                >
                  <MdDeleteOutline className="h-5 w-5" />
                </button>
              </>,
            ),
        },
      ]}
      language={{
        search: {
          placeholder: "Search movie by anything",
        },
        pagination: {
          previous: "⏮",
          next: "⏭",
          showing: "👀 Displaying",
          results: () => "Records",
        },
      }}
      pagination={{
        limit: 20,
        buttonsCount: 2,
      }}
    />
  )
}

export default DataTable
