// import React from "react";
// import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

// export default function PDF (props) {


//     const styles = StyleSheet.create({
//             page: {
//                 flexDirection: "row"
//             },
//             section: {
//                 flexGrow: 1
//             }
//     });

//     const MyDocument = () => (
//         <Document>
//                 <Page size="A4" style={styles.page}>
//                 <View style={styles.section}>
//                     <Text>Hello World!</Text>
//                 </View>
//                 <View style={styles.section}>
//                     <Text>We're inside a PDF!</Text>
//                 </View>
//                 </Page>
//             </Document>
//         )
       
        
//         return(
//           <div style={styles.container}>
//             <PDFViewer>
//                 <MyDocument/>
//             </PDFViewer> 
//             {/* {
// //             isResumeCompleted(props.ResumeState) && 
// //             <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
// //               {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
// //             </PDFDownloadLink>
// // } */}
//           </div>
    
//         );
// }

import React from "react";
import ReactDOM, { render } from 'react-dom';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import Button from 'react-bootstrap/Button';

export default function PDF (props) {

    const { userId, resumeState, setResumeState, isResumeCompleted } = props;
  
    const styles = StyleSheet.create({
        page: {
            flexDirection: "row",
            section: { color: 'white', textAlign: 'left', margin: 30 }
        },
        section: {
            flexGrow: 1
        },
        pdfbody: {
            width: 800,
            height: 720
        }
    });
    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Hello World!</Text>
            </View>
            <View style={styles.section}>
                <Text>We're inside a PDF!</Text>
            </View>
            </Page>
        </Document>
    )
    return(
    <header>
    <main className="container flex flex-column items-center justify-center signup">
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
        <PDFViewer style={styles.pdfbody}><MyDocument/></PDFViewer>
      </div>
    </main>
    </header>
    );
}