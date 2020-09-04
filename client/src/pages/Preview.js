import React from "react";
import "./style.css";

export default function Preview (props) {
    //const { userId, resumeState, setResumeState, isResumeCompleted } = props;
  
    const styles = {
      page: {
        display: "flex", 
        textAlign: 'left',
        flexDirection: 'column',
        padding: "20px"
      },

    //Profile
      headercontainer: {
        borderWidth: "5",
        borderColor: '#ffccb3',
        borderStyle: 'solid',
      },
      headercontainer_address: {
        display: "flex",
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ffccb3',
        borderBottomStyle: 'solid',
        padding: "20px 20px 0px"
      },
      headerdetailColumn: {
        display: "flex",
        flexDirection: 'column',
        textTransform: 'uppercase',
        justifyContent: "flex-end"
      },
    
      headerdetailRow: {
        display: "flex",
        flexDirection: 'row',
      },
      headertitle_row: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        padding: "1px",
        textTransform: 'uppercase'
      },
      headerlinkColumn: {
        display: "flex",
        flexDirection: 'column',
        flexGrow: 2,
        alignItems: 'flex-end'
      },
      headerfirstname: {
        fontSize: 30,
      },
    
      headertitle: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: 'center',
        color: "red",
      },
    
      headertitle_black: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: "bold",
        color: "black",
        marginLeft: "5px"
      },
    
      headerlastname: {
        fontSize: 30,
        color: "red",
        marginLeft: "5px"
      },
      headersubtitle: {
        fontSize: 10,
        justifySelf: 'flex-end',
      },
      headerlink: {
        fontSize: 12,
        color: 'black',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
    
      },
      headeraddress: {
        fontSize: 12,
        color: 'red',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
      },
      //End of Profile

      subheadercontainer: {
        display: "flex",
        flexDirection: "row",
        borderWidth: "5",
        borderColor: '#ffccb3',
        borderStyle: 'solid',
        borderTop: "none"
      },

      //Summary of Qualification
      summarysubcontainer: {
        display: "flex",
        flexDirection: 'column',
        padding: "5px",
        width: "60%",
        borderRightWidth: "5",
        borderRightColor: '#ffccb3',
        borderRightStyle: 'solid',
      },  

      titleRow: {
        display: "flex",
        flexDirection: "row",
        fontSize: 12,
        marginBottom: "3px",
        fontWeight: "bold",
        textTransform: 'uppercase'
      },
      text: {
        fontSize: 8,
        //marginBottom: "5px",
      },
      titleRed: {
        color:"red",
        fontWeight: "bold",
        marginLeft: "5px"
      },

      //Core Competencies
      competenciessubcontainer: {
        display: "flex",
        flexDirection: 'column',
        padding: "5px",
        width: "40%"
      },  
      sectioncontainer: {
        display: "flex",
        flexDirection: 'column',
        padding: "5px"
      },  
      //Experience
      experiencetitleRow: {
        display: "flex",
        flexDirection: "row",
        fontWeight: "bold",
        fontSize: 9,
        textTransform: 'capitalize'
      },
      titledetails: {
        textTransform: "capitalize", 
        fontWeight: "normal", 
        marginLeft: "3px",
        content: "\\2022" 
      }
    };
    
  const MyDocument = (resumeState) => (
  <div size="A4" style={styles.page}>
    <div style={styles.headercontainer}>
      <div style={styles.headercontainer_address}>    
        <div style={styles.headerdetailColumn}>
          <div style={styles.headerdetailRow}>
            <div style={styles.headerfirstname}>Adam </div>
            <div style={styles.headerlastname}>Rowell</div>
          </div>
        </div>
  
        <div style={styles.headerlinkColumn}>
          <div style={styles.headerdetailRow}>
            <div style={styles.headeraddress}>123 Main Str, </div>
            <div style={styles.headerlink}>Toronto, </div>
            <div style={styles.headerlink}>Ontario, </div>
            <div style={styles.headerlink}>M9R F0C</div>
          </div>
          <div style={styles.headerdetailRow}>
            <div style={styles.headerlink}>(204) - 345-5678, </div>
            <div style={styles.headeraddress}>luke@theforce.com</div>
          </div>
        </div>
      </div>
      <div style={styles.headertitle_row}>
        <div style={styles.headertitle}>Technical</div>   
        <div style={styles.headertitle_black}>Buyer</div>  
      </div>
    </div>
    <div style={styles.subheadercontainer}> 
        <div style={styles.summarysubcontainer}>
          <div style={styles.titleRow}>
            <div>Summary of </div>
            <div style={styles.titleRed}>Qualification</div>
          </div>
          <div style={styles.text}>
                Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire.
                Defeated the Rancor and rescued Princess Leia from Jabba the Hutt.
                Competent fighter pilot as well as an excelent shot with nearly any weapon.
          </div>
        </div>
        <div style={styles.competenciessubcontainer}>
          <div style={styles.titleRow}>
            <div>Core </div>
            <div style={styles.titleRed}>Competencies</div>
          </div>
          <div style={styles.text}>
                Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire.
                Defeated the Rancor and rescued Princess Leia from Jabba the Hutt.
          </div>
        </div>
    </div>
    <div style={styles.subheadercontainer}>
      <div style={styles.sectioncontainer}>
        <div style={styles.titleRow}>
          <div style={{color:"red"}}>Achievements</div>
        </div>
        <div style={styles.text}>
            Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire.
            Defeated the Rancor and rescued Princess Leia from Jabba the Hutt.
            Competent fighter pilot as well as an excelent shot with nearly any weapon.
        </div> 
      </div>
    </div>
    <div style={styles.subheadercontainer}>
      <div style={styles.sectioncontainer}>
        <div style={styles.titleRow}>
        <div>Professional </div>
            <div style={styles.titleRed}>Experience</div>
        </div>
        <div style={styles.experiencetitleRow}>
          <div>senior technical buyer</div>
          <div style={styles.titledetails}>YYZ inc</div>
          <div style={styles.titledetails}>houston,texas</div>
          <div style={styles.titledetails}>April 2018 - April 2018</div>
        </div>
        <div style={styles.text}>
            Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire.
            Defeated the Rancor and rescued Princess Leia from Jabba the Hutt.
            Competent fighter pilot as well as an excelent shot with nearly any weapon.
        </div> 
        <div style={{fontWeight: "bold", marginRight: "3px", fontSize: 9, fontStyle: "italic"}}>Responsibilities:</div>
        <div style={styles.text}>
            Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire.
            Defeated the Rancor and rescued Princess Leia from Jabba the Hutt.
            Competent fighter pilot as well as an excelent shot with nearly any weapon.
        </div> 
      </div>
    </div>
    <div style={styles.subheadercontainer}>
      <div style={styles.sectioncontainer}>
        <div style={styles.titleRow}>
        <div>Education And </div>
            <div style={styles.titleRed}>Qualifications</div>
        </div>
        <ul style={styles.experiencetitleRow}>
          <li>senior technical buyer</li>
          <li style={styles.titledetails}>YYZ Inc.</li>
          <li style={styles.titledetails}>Houston,texas</li>
          <li style={styles.titledetails}>April 2018 - April 2018</li>
        </ul>
      </div>
    </div>
  </div>
)
      return(
        <form>
            <div>
            <MyDocument/>
            </div>
        </form>
    );
}