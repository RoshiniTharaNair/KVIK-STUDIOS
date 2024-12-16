// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import '../Contact.css';



const SecondPage = () => {
  return (
    <div style={{ fontFamily: "Times New Roman,serif", backgroundColor: "#FFF", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Background and Warranty Info */}
    <div className="flex flex-col items-center text-center pt-12 pb-12 main-div-contact" style={{ display: 'flex'}}>
      <div className="responsive-flex" >
        {/* Contact Information Section */}
        <div style={{ flex: '1', padding: '20px' }}>
        <h1 style={{ fontFamily: "AvenirNextCyr-Regular",color:"#7F3F98", fontWeight: 600, fontSize:"16px", textTransform:"uppercase",letterSpacing:"0.1em"}}>
        {/* <FontAwesomeIcon icon={faMapMarkerAlt} color="#7F3F98" className="mr-2" style={{fontSize:"15px"}}/> */}
        TamilNadu, INDIA
        </h1>
       
        <h1 style={{ fontFamily: "AvenirNextCyr-Regular",color:"black", fontWeight: 500, fontSize:"16px", letterSpacing:"0.01em"}}>
        2247, Trichy Road,
        </h1>
        <h1 style={{ fontFamily: "AvenirNextCyr-Regular",color:"black", fontWeight: 500, fontSize:"16px", letterSpacing:"0.01em"}}>
        Coimbatore - 641005
</h1>
<h1 style={{ fontFamily: "Times New Roman,serif",color:"#7F3F98", fontWeight: 500, fontSize:"16px", fontStyle:"italic", textDecoration:"underline"}}>
vikram@rflabs.in
</h1>
<h1 style={{ fontFamily: "AvenirNextCyr-Regular",color:"black", fontWeight: 500, fontSize:"16px", letterSpacing:"0.01em"}}>
Tel: (+91) 7259533331
</h1>
   </div>    
   <div style={{ flex: '1', padding: '7.5px' }}>
          <h1 style={{ margin:"17px", fontFamily: "AvenirNextCyr-Regular", color: "#7F3F98", fontWeight:  600, fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Operating Hours
          </h1>
          <h1 style={{ margin:"10px", fontFamily: "AvenirNextCyr-Regular", color: "black", fontWeight:  500, fontSize: "16px", letterSpacing: "0.05em" }}>
            Mon - Fri:  9am -  5pm
          </h1>
          <h1 style={{ margin:"10px", fontFamily: "AvenirNextCyr-Regular", color: "black", fontWeight:  500, fontSize: "16px", letterSpacing: "0.05em" }}>
            Saturday:  9am -  1pm
          </h1>
          <h1 style={{ margin:"10px", fontFamily: "AvenirNextCyr-Regular", color: "black", fontWeight:  500, fontSize: "16px", letterSpacing: "0.05em" }}>
            Sunday:  9am -  11 am
          </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;