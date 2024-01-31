const React = require('react')
const Default = require('./layouts/default')

function Show ({bread, index}) {
  console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
            and it
            {
                bread.hasGluten
                ? <span> does </span>
                : <span> does NOT </span>
            }
            have gluten.
        </p>
        <img src={bread.image} alt={bread.name}></img>
        <a href={`/breads/${index}/edit`}><button>Edit</button></a>
        <form action={`/breads/${index}?_method=DELETE`} method ='POST'>
          <input type='submit' value='DELETE' />
        </form>
      </Default>
    )
}

module.exports = Show
