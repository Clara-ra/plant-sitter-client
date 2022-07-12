const Header = ( { tagLine }) => {
  return (
    <header className='header'>
        <h1>Plant-Sitter</h1>
        <h6> { tagLine } </h6>
    </header>
  )
}

Header.defaultProps = {
    tagLine: "Hey bud! How's it growing?"
}

// const headingStyle = {
//     color: 'black'
// }

export default Header