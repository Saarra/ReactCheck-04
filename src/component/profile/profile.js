import PropTypes from 'prop-types';

function MyProfile(props) {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        margin:'5px',
        fontFamily: "Arial"
      };

    const handleName = (x) => {
        alert(`Hello ${x}`)

    }
    return (
        <div className='container text-center'>  
            <img src={props.src} alt="img" />
            <h3 style={mystyle} className='text-center'>My name : {props.fullname}</h3>
            <h3 style={{color: "darkblue"}}>About me : {props.about}</h3>
            <h4>My profession :{props.prof}</h4>
            <button className="btn btn-primary" onClick={() => handleName(props.fullname)}>Say Hello</button>
            <br />
                
        </ div>
    )
}

MyProfile.defaultProps = {
    fullname: 'sarra'
}

MyProfile.propTypes = {
    fullname: PropTypes.string,
    about: PropTypes.string,
    prof: PropTypes.string
};

export default MyProfile