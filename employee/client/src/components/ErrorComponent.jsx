import './ErrorComponentcss.css'
const ErrorComponent= ({ onClose ,message}) => {

return(
    <>
<div id="cardREG" className="animated fadeIn">
  <div id="upper-sideREG">
    {/*?xml version="1.0" encoding="utf-8"?*/}
    {/* Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
    <div className="screenAlert-icon screenAlert-error animate">
  <span className="screenAlert-x-mark">
    <span className="screenAlert-line screenAlert-left animateXLeft" />
    <span className="screenAlert-line screenAlert-right animateXRight" />
  </span>
  <div className="screenAlert-placeholder" />
  <div className="screenAlert-fix" />
</div>

  </div>
  <div id="lower-side">
    <p id="message">
      {/* Something went wrong! */}
      {message}
    </p>
    <button id="contBtnREG" style={{border:0}} onClick={onClose} >
    Continue
    </button>
  </div>
</div>
</>
)
};
export default ErrorComponent