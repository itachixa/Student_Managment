import Student_Marks from "../../components/Marks";
import BackButton from "../../components/BackButton";

function MarksP(){
    return(
        <>
        <div>
             <BackButton to="/home/proffesor" label="Back" iconSize={18} />
            <h1>T2 Section</h1>
            <h2><strong>marks</strong></h2>
            <center>
            <Student_Marks name={"Christian"}/>
            <Student_Marks name={"Christian"}/>
            <Student_Marks name={"Christian"}/>
            <Student_Marks name={"Christian"}/>
            <Student_Marks name={"Christian"}/>
            <Student_Marks name={"Christian"}/>
            <Student_Marks name={"Christian"}/>
            <Student_Marks name={"Christian"}/>
            <Student_Marks name={"Christian"}/>
            <Student_Marks name={"Christian"}/>
            <Student_Marks name={"Christian"}/>
            <Student_Marks name={"Christian"}/>
            <Student_Marks name={"Christian"}/>
            <Student_Marks name={"Christian"}/>  
            </center>


        </div>
        
        </>
    ); 
}

export  default MarksP;