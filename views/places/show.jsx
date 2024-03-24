const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={ data.place.pic} alt={ data.place.name } />
            <h2>Rating</h2>
                <p>Not Rated</p>
            <h2>Description</h2>
            <p> 
                Located in { data.place.city }, 
            { data.place.city } and the cuisines are 
            { data.place.cuisines }
            </p>
            <h2>Comments</h2>
                <p>No Comments Yet</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit <i className="fa-solid fa-pencil"></i>
            </a> 
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete <i className="fa-solid fa-trash"></i>
                </button>
            </form>
          </main>
        </Def>
    )
}

module.exports = show
