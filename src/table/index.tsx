import React from "react"

import "./index.css"

const Table: React.FC = () => {
  const table = [
    {
      id: 1,
      title: "Emp Name",
      body: ["This is Text1", "This is Text2", "This is Text3"]
    },
    {
      id: 2,
      title: "Join Date",
      body: ["This is Text1", "This is Text2", "This is Text3"]
    },
    {
      id: 3,
      title: "Salary",
      body: ["This is Text1", "This is Text2", "This is Text3"]
    },
    {
      id: 4,
      title: "Daata",
      body: ["This is Text1", "This is Text2", "This is Text3"]
    }
  ]

  const rows = [{name: "navani"}, {name: "kumar"}, {name: "arun"}, {name: "jothi"}]
  const colums = [
    {name: "navani", desc: "hello"},
    {name: "kumar", desc: "hello"},
    {name: "arun", desc: "hello"},
    {name: "jothi", desc: "hello"},
    {name: "praveen", desc: "hello"},
    {name: "kums", desc: "hello"}
  ]

  const TableHeader: React.FC<any> = ({name}) => {
    return <span>{name}</span>
  }

  return (
    <div className="table-layout">
      {/* Row */}
      <div className="table">
        {rows.map(({name}, rowIndex: number) => {
          return (
            <div key={rowIndex} className="row">
              {colums.map(({name}, colIndex: number) => {
                return (
                  <div className="column">
                    {rowIndex === 0 && colIndex > -1 && <TableHeader name={name} />} {rowIndex > 0 && colIndex > -1 && <h1>col</h1>}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Table
