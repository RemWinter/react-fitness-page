import Guide from "./Guide"


const Guides = ({guideList}) => {
  return (
    <section className="guides-section">
      <div className="sidebar sticky-left">
        <h1>Workout Guides</h1>
        <ul>
          {guideList.map((guide) => (
            <li key={guide.id}><a href="#">{guide.title}</a></li>
          ))}
        </ul>
        <div className="muscle-group-content">
          <div className="img-div">
            <img className="chest-group" src="https://raw.githubusercontent.com/RemWinter/react-fitness-page/main/public/img/chestmusclegroup.png" alt="" />
          </div>
          <p>Primary muscle group(s):</p>
          <p><span>Pectorials</span></p>
          <p>Secondard muscle group(s): </p>
          <p><span>Triceps % Deltoids</span></p>
        </div>
      </div>
      <Guide guideList={guideList}/>
    </section>
  )
}

export default Guides