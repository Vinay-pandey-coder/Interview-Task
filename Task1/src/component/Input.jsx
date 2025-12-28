import React from 'react'

const Input = ({ search, setSearch }) => {

  return (
    <div>
      <input
      type="text"
      placeholder="Search here..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "10px",
        width: "100%",
        marginBottom: "20px"
      }}
    />
    </div>
  )
}

export default Input