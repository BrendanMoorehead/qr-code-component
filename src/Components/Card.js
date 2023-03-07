import QR from './Images/image-qr-code.png';

const Card = () => {
  return (
    <div className="Card">
        <img src={QR} alt="A QR code" className="Card--QR"></img>
        <div className="Card--Content__Wrapper">
            <h1 className="Card--Content__Wrapper__Header">
            Improve your front-end skills by building projects
            </h1>
            <p className="para">
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
        </div>
    </div>
  )
}

export default Card