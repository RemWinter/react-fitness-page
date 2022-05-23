import React from 'react'

const Guide = ({guideList}) => {
  return (
    <>
      {guideList.map((guide) => (
        <div className='guide-content'>
        <div className="guide-content-left">
          <h1>{guide.title}</h1>
          <p>
            Position yourself with your back down on a flat bench placing the hands up on the bar using an underhand grip slightly wider than shoulder width apart.<br/><br/>
            After taking a deep breath in, extend the elbows and lift the bar up off the rack until elbows are extended but not locked. Pause for a brief movement as you fully extend your breath.<br/><br/>
            Lower the weight directly down to the chest as you breath inwards, keeping the movement pattern slow and steady.<br/><br/>
            Once just above the chest, pause, and then press directly up again, exhaling your breath.
            Continue until all reps are completed and then re-rack the barbell.
          </p>
        </div>
        <div className="guide-content-right">
        <div className="vid-div">
            <video src="https://github.com/RemWinter/react-fitness-page/raw/main/public/vid/BenchPress.mp4" autoPlay loop muted></video>
          </div>
        </div>
      </div>
      ))}
    </>
  )
}

export default Guide