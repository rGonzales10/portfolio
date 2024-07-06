import Menu from './Menu';
import "../../assets/css/header.css";

function header(){
    
    const toggleTheme = (e) => {
        const element = document.body;
        element.classList.toggle('dark-mode')
        console.log(element.classList)
    }
    return(
        <>
            <div className="header">
                <div className="section">
                    <h2>Hi Im Richard</h2>
                </div>
                <div className="section">
                    <Menu></Menu>
                </div>
                <div className="section switch-btn">
                    <label className="switch" >
                        <input type="checkbox" onClick={(e) => toggleTheme(e)} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </>
    )
}

export default header;