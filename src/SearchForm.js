import React from "react"

const SearchForm = ({ setText }) => {
  const [term, setTerm] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setText(term)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          onChange={(e) => setTerm(e.target.value)}
          className="text-black"
          placeholder="Search city, name or state"
        />
        <button type="submit">Search</button>
      </form>
    </>
  )
}

export default SearchForm
