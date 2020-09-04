import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer, Font } from "@react-pdf/renderer";

export default function PdfMaker (props) {
const resumeObj =props.resumeState
    const styles = StyleSheet.create({
      //List
      item: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      bulletPoint: {
        width: 10,
        fontSize: 10,
      },
      itemContent: {
        flex: 1,
        fontSize: 10,
        //fontFamily: 'Lato',
      },
      //End of List
      //Profile
      headercontainer_address: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ffccb3',
        borderBottomStyle: 'solid',
        alignItems: 'stretch',
      },
      headercontainer: {
        flexDirection: 'column',
        alignItems: 'stretch',
      },
    
      headertitle_row: {
        flexDirection: 'row',
        textAlign: 'center',
      },
    
      headerdetailColumn: {
        flexDirection: 'column',
        flexGrow: 9,
        textTransform: 'uppercase',
      },
    
      headerdetailRow: {
        flexDirection: 'row',
        flexGrow: 9,
      },
      headerlinkColumn: {
        flexDirection: 'column',
        flexGrow: 2,
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
      },
      headerfirstname: {
        fontSize: 24,
        //fontFamily: 'Lato Bold',
      },
    
      headertitle: {
        fontSize: 14,
        textAlign: 'center',
        color: "red",
        //fontFamily: 'Lato Bold',
      },
    
      headertitle_black: {
        fontSize: 14,
        textAlign: 'center',
        color: "black",
        //fontFamily: 'Lato Bold',
      },
    
      headerlastname: {
        fontSize: 24,
        color: "red"
        //fontFamily: 'Lato Bold',
      },
      headersubtitle: {
        fontSize: 10,
        justifySelf: 'flex-end',
        //fontFamily: 'Lato',
      },
      headerlink: {
        //fontFamily: 'Lato',
        fontSize: 8,
        color: 'black',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
    
      },
      headeraddress: {
        //fontFamily: 'Lato',
        fontSize: 8,
        color: 'red',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
      },
      //End of Profile
      //exp
      exptitle: {
        fontSize: 11,
        fontStyle: 'bold',
      },
      expRow: {
        //fontFamily: 'Lato Bold',
        flexDirection: 'row',
        fontSize: 11,
      },
      //exp end
      //Skills and Qualification
      skillsmaincontainer: {
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderColor: '#ffccb3',
        padding: 0,
        width: 531
      },
      skillsrightcontainer: {
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 10,
        width: 231
      },
      skillsleftcontainer: {
        flexDirection: 'column',
        borderRightWidth: 3,
        borderRightColor: '#ffccb3',
        alignItems: 'stretch',
        padding: 10,
        width: 300
      },
      skillstext: {
        //fontFamily: 'Lato Bold',
        fontSize: 11,
        marginBottom: 10,
      },
      
      skillstitleRow: {
        //fontFamily: 'Lato Bold',
        flexDirection: 'row',
        fontSize: 12,
        marginBottom: 10,
      },
      skillstitleRed: {
        color:"red"
      },
     
      //END of Skills and Qualification
      //Achievements
      rowcontainer: {
        flexDirection: 'column',
        borderRightWidth: 3,
        borderRightColor: '#ffccb3',
        alignItems: 'stretch',
        padding: 10,
        width: 532
      },
      //End of Achievents
        pdfbody: {
            width: 800,
            height: 720
        },
        page: {
          padding: 30,
        },
        container: {
          flex: 1,
          flexDirection: 'column',
          '@media max-width: 400': {
            flexDirection: 'column',
          },
          borderWidth: 3,
          borderColor: '#ffccb3',
        },
        image: {
          marginBottom: 10,
        },
        leftColumn: {
          flexDirection: 'column',
          //width: 300,
          paddingTop: 0,
          paddingRight: 0,
          '@media max-width: 400': {
            width: '100%',
            paddingRight: 0,
          },
          '@media orientation: landscape': {
            width: 200,
          }
        },
        rightColumn: {
          flexDirection: 'column',
          width: 230,
          paddingTop: 0,
          paddingRight: 0,
          '@media max-width: 400': {
            width: '100%',
            paddingRight: 0,
          },
          '@media orientation: landscape': {
            width: 200,
          },
        },
        footer: {
          fontSize: 12,
          //fontFamily: 'Lato Bold',
          textAlign: 'center',
          marginTop: 25,
          paddingTop: 10,
          borderWidth: 3,
          borderColor: 'gray',
          borderStyle: 'dashed',
          '@media orientation: landscape': {
            marginTop: 10,
          },
        },
      });
      
      Font.register( {
        family: 'Open Sans',
        src: `${__dirname}/fonts/fonts/Open_Sans/OpenSans-Regular.ttf`,
      });
      Font.register( {
        family: 'Lato',
        src: `${__dirname}/fonts/fonts/Lato/Lato-Regular.ttf`,
      });
      Font.register( {
        family: 'Lato Italic',
        src: `${__dirname}/fonts/fonts/Lato/Lato-Italic.ttf`,
      });
      Font.register( {
        family: 'Lato Bold',
        src: `${__dirname}/fonts/fonts/Lato/Lato-Bold.ttf`,
      });
      const List = ({ children }) => children;
      const Item = ({ children }) => (
        <View style={styles.item}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.itemContent}>{children}</Text>
        </View>
      );
     
      const Profile = () => (
        <View style={styles.headercontainer}>
          <View style={styles.headercontainer_address}>
          
            <View style={styles.headerdetailColumn}>
              <View style={styles.headerdetailRow}>
                <Text style={styles.headerfirstname}>{resumeObj.profile.first_name} </Text>
                <Text style={styles.headerlastname}>{resumeObj.profile.last_name}</Text>
              </View>
            </View>
            <View style={styles.headerlinkColumn}>
              <View style={styles.headerdetailRow}>
                <Text style={styles.headeraddress}>{resumeObj.profile.address}, </Text>
                <Text style={styles.headerlink}>{resumeObj.profile.city}, </Text>
                <Text style={styles.headerlink}>{resumeObj.profile.province}, </Text>
                <Text style={styles.headerlink}>{resumeObj.profile.postal_code}</Text>
              </View>
              <View style={styles.headerdetailRow}>
                <Text style={styles.headerlink}>(204) - 345-5678, </Text>
                <Text style={styles.headeraddress}>{resumeObj.profile.email}</Text>
              </View>
            </View>
          </View>
          <View style={styles.headertitle_row}>
            <Text style={styles.headertitle}>Technical</Text>   
            <Text style={styles.headertitle_black}>Buyer</Text>  
          </View>
        </View>
      );
           
      ////Skills and Qalification
      const Skills = () => (
        <View style={styles.skillsmaincontainer}>  
          <View style={styles.skillsleftcontainer}>
            <View style={styles.skillstitleRow}>
              <Text>Summary of </Text>
              <Text style={styles.skillstitleRed}>Qualification</Text>
            </View>
              <Text style={styles.skillstext}>{resumeObj.summary.body}</Text>
            </View>
          <CoreCompetents/>
        </View>
      );
        
        
        const SkillEntry = ({ name, competents }) => (
          <View>
            <Text style={styles.skillstext}>{name}</Text>
            <List>
              {competents.map((skill, i) => (
                <Item key={i}>{skill}</Item>))}
            </List>
          </View>
        );
          
        const CoreCompetents = () => (
          <View style={styles.skillsrightcontainer}>
            <View style={styles.skillstitleRow}>
              <Text>Core  </Text>
              <Text style={styles.skillstitleRed}>Competents</Text>
            </View>
            <SkillEntry
              name="Combat Abilities"
              competents={[
                'Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire',
                'Defeated the Rancor and rescued Princess Leia from Jabba the Hutt',
                'Competent fighter pilot as well as an excelent shot with nearly any weapon',
              ]}
            />
          </View>
        );
  /// END of Skills and Qualification
 ///Achievements
    const Achievments = () => (
      <View style={styles.skillsmaincontainer}>  
        <View style={styles.rowcontainer}>
          <View style={styles.skillstitleRow}>
              <Text style={styles.skillstitleRed}>Achievements</Text>
          </View>
          <Text style={styles.skillstext}>ffff</Text>
        </View>
      </View>
    );
 ///And of Achievments
 const Experience = () => (
  <View style={styles.skillsmaincontainer}>  
    <View style={styles.rowcontainer}>
      <View style={styles.skillstitleRow}>
        <Text >Professional </Text>
        <Text style={styles.skillstitleRed}>Experience</Text>
      </View>
      <View style={styles.expRow}>
        <Text style={styles.exptitle}>Job Title •</Text>
        <Text>name company •</Text>
        <Text>city •</Text>
        <Text>start date -</Text>
        <Text>end date</Text>
      </View>
      <Text style={styles.exptitle}>Description of company</Text>
      <Text style={styles.exptitle}>Responsibilities:</Text>
      <Text style={styles.skillstext}>
          Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire.
          Defeated the Rancor and rescued Princess Leia from Jabba the Hutt.
          Competent fighter pilot as well as an excelent shot with nearly any weapon.
          Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire.
          Defeated the Rancor and rescued Princess Leia from Jabba the Hutt.
          Competent fighter pilot as well as an excelent shot with nearly any weapon.
          Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire.
          Defeated the Rancor and rescued Princess Leia from Jabba the Hutt.
          Competent fighter pilot as well as an excelent shot with nearly any weapon.
          Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire.
          Defeated the Rancor and rescued Princess Leia from Jabba the Hutt.
          Competent fighter pilot as well as an excelent shot with nearly any weapon.
          Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire.
          Defeated the Rancor and rescued Princess Leia from Jabba the Hutt.
          Competent fighter pilot as well as an excelent shot with nearly any weapon.
          Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire.
          Defeated the Rancor and rescued Princess Leia from Jabba the Hutt.
          Competent fighter pilot as well as an excelent shot with nearly any weapon.
      </Text>
    </View>
  </View>
  );
///And of Experience
const Education = () => (
  <View style={styles.rowcontainer}>
    <View style={styles.skillstitleRow}>
      <Text>Education & </Text>
        <Text style={styles.skillstitleRed}>Qalification</Text>
    </View>
    <Text style={styles.skillstext}>
      Completed Jedi Master training and built a lightsaber from scratch in order to do battle against the Empire.
      Defeated the Rancor and rescued Princess Leia from Jabba the Hutt.
      Competent fighter pilot as well as an excelent shot with nearly any weapon.
    </Text>
  </View>
);
  const Resume = (props) => (
    <Page {...props} style={styles.page}>
      <Profile/>
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Skills/>
        </View>  
        <Achievments/>
        <Experience/>
        <Education/>
      </View>
    </Page>
  )
  const Output = () => (
    <Document
      author="Luke Skywalker"
      keywords="awesome, resume, start wars"
      subject="The resume of Luke Skywalker"
      title="Resume"
    >
    <Resume size="A4" />
    </Document>
  );
    
    return(
      <header>
        <main className="container flex flex-column items-center justify-center signup">
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
            <PDFViewer style={styles.pdfbody}><Output /></PDFViewer>
          </div>
        </main>
    </header>
    );
}



