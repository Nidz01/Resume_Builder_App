import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer, Font } from "@react-pdf/renderer";
import Header from '../pdf/Header';

export default function pdfMaker () {
    
    const styles = StyleSheet.create({
        pdfbody: {
            width: 800,
            height: 720
        },
        page: {
          padding: 30,
        },
        container: {
          flex: 1,
          flexDirection: 'row',
          '@media max-width: 400': {
            flexDirection: 'column',
          },
        },
        image: {
          marginBottom: 10,
        },
        leftColumn: {
          flexDirection: 'column',
          width: 170,
          paddingTop: 30,
          paddingRight: 15,
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

    const Resume = (props) => (
        <Page {...props} style={styles.page}>
        <Header/>
        <View style={styles.container}>
          <View style={styles.leftColumn}>
            {/* <Image
              src="https://react-pdf.org/static/images/luke.jpg"
              style={styles.image}
            /> */}
          </View>
        </View>
        <Text style={styles.footer}>This IS the candidate you are looking for</Text>
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