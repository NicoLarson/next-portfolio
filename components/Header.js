import Nav from "./Nav"

export default function Header({ title }) {
  return (
    <header>
      <h1 className="title">{title}</h1>
      <Nav />
    </header>
  )
}
