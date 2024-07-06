import '../assets/css/contact.css';
function Contacts(){
    return (
        <>
            <div id="contact" className="footer">
                <div className="footer-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className='icon fa-regular fa-paper-plane'  style={{fontSize: '24px'}}></i>
                            <a href="mailto:richardgonzales9797@gmail.com">richardgonzales9797@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <i className='icon fa-brands fa-facebook' style={{fontSize: '24px'}}></i>
                            <a href="https://www.facebook.com/richard.gonzales.94695" target="_blank">Richard Gonzales</a>
                        </div>
                        <div className="contact-item">
                            <i className="fa-solid fa-mobile-screen-button" style={{fontSize: '24px'}}></i>
                            <span>09981594574</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts;