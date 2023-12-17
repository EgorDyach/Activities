import Activities from "../components/Activities"
import MyActivities from "../components/MyActivities"

const Home = () => {
  return (
    <div className="formCon">
        <div className="container homeContainer">
            <span className="title">Сириус-активности</span>
            <button>Создать активность</button>
            <MyActivities />
            <Activities />
        </div>
    </div>
  )
}

export default Home