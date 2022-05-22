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
            <video src="https://rr2---sn-aigzrnse.googlevideo.com/videoplayback?expire=1653272944&ei=EJ2KYuzSL8iJp-oP34-cmAw&ip=82.35.68.184&id=o-ACJzvUUF1RiTUZlx5P9lv_qVMtH9CM-oSzNogouE8jX8&itag=18&source=youtube&requiressl=yes&mh=_M&mm=31%2C29&mn=sn-aigzrnse%2Csn-aigl6nz7&ms=au%2Crdu&mv=m&mvi=2&pl=22&initcwndbps=2335000&spc=4ocVC65DarT9VT6f6IlrUrdqt2OAqUCZ3HsDdyrXcA&vprv=1&mime=video%2Fmp4&ns=QaU3kER4TVcd1n-bleaG8q4G&gir=yes&clen=1736085&ratebypass=yes&dur=38.939&lmt=1494845814977920&mt=1653251090&fvip=5&fexp=24001373%2C24007246&c=WEB&n=2gNc7TQDBy-mj3RX&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANAsAM10J0OGWTsu5TM_GBj3j9FvESNVdJMTs1rY5qtuAiEA4iOYMp3X2YEUf7xCpd6p_qRFNPbyL5v9lRfEDoJsnrQ%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAJNfHKuJSNvCrurilFkVK9iVrh5j_J8Mb6slU09pLsH6AiEAmwQT5A5AHismPYTX6w1a0AdimVeYdQ5IKO_4qtV32Bs%3D" autoPlay loop muted></video>
          </div>
        </div>
      </div>
      ))}
    </>
  )
}

export default Guide