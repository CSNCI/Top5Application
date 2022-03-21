import persons from '../data'
import Person from './person'
function PersonList() {
  return (
    <div className="d-flex flex-row justify-content-center">
      {persons.map((person) => (
        <div className="col-2 m-3" key={person.id}>
          <Person person={person} />
        </div>
      ))}
    </div>
  )
}

export default PersonList
