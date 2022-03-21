import Layout from '../components/layout/layout'
import PersonList from '../components/person_list'

function HomePage() {
  return (
    <Layout>
      <div className="container my-5">
        <PersonList />
      </div>
    </Layout>
  )
}

export default HomePage
