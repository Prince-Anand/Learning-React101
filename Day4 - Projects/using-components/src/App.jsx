const hi = () => {
  return (
    <div>
      <h1>This is H1</h1>
      <h2>This is h2</h2>
      <p style={{fontSize:"80px", textAlign:"center", marginTop:"250px"}}>Hello World</p>
      {/* This styling follows camelCase not kebab-case -and to move in to js we use {} and to move into styling another {} bcz React will give an error because it expects a JS object inside style.*/}
    </div>
  )
}
export default hi;