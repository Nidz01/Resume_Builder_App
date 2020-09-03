import React from "react";
import ReactDOM, { render } from 'react-dom';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import "./style.css";

export default function PdfDownload (props) {
    const { userId, resumeState, setResumeState, isResumeCompleted } = props;

    console.log('showing download pdf')
  
    const styles = StyleSheet.create({
        page: {
            display: "flex",
            background: 'white', 
            textAlign: 'left',
            flexDirection: 'column',
            padding: "20px"
        },
        section: {
            flexGrow: 1
        },
          container: {
            display: "flex",
            width: '100%',
            flexDirection: 'row',
            borderWidth: 4,
            borderColor: '#FFCCB3',
            borderStyle: 'solid',
            padding: "10px"
            //alignItems: 'stretch',
          },
          container_address: {
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderBottomColor: '#FFCCB3',
            borderBottomStyle: 'solid',
            alignItems: 'stretch',
          },
          title_row: {
            display: "flex",
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#FFCCB3',
            borderBottomStyle: 'solid',
            //width: '15',
           // alignItems: 'center',
            textAlign: 'center',
          },
          detailColumn: {
            flexDirection: 'column',
            flexGrow: 9,
            textTransform: 'uppercase',
          },
          detailRow: {
            flexDirection: 'row',
            flexGrow: 9,
          },
          linkColumn: {
            display: "flex",
            flexDirection: 'column',
            flexGrow: 2,
            alignSelf: 'flex-end',
            justifySelf: 'flex-end',
          },
          firstname: {
            fontSize: 24,
            //fontFamily: 'Lato Bold',
          },
          title: {
            fontSize: 14,
            textAlign: 'center',
            color: "red",
            //fontFamily: 'Lato Bold',
          },
          title_black: {
            fontSize: 14,
            textAlign: 'center',
            color: "black",
            //fontFamily: 'Lato Bold',
          },
          lastname: {
            fontSize: 24,
            color: "red"
            //fontFamily: 'Lato Bold',
          },
          subtitle: {
            fontSize: 10,
            justifySelf: 'flex-end',
            //fontFamily: 'Lato',
          },
          link: {
            //fontFamily: 'Lato',
            fontSize: 8,
            color: 'black',
            textDecoration: 'none',
            alignSelf: 'flex-end',
            justifySelf: 'flex-end',
          },
          address: {
            //fontFamily: 'Lato',
            fontSize: 8,
            color: 'red',
            textDecoration: 'none',
            alignSelf: 'flex-end',
            justifySelf: 'flex-end',
          }
    });

    const MyDocument = (resumeState) => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    <View style={styles.detailRow}>
                        <Text style={styles.firstname}>Adam </Text>
                        <Text style={styles.lastname}>Rowell</Text>
                    </View>
                    <View style={styles.linkColumn}>
                        <View style={styles.detailRow}>
                            <Text style={styles.address}>123 Main Str, </Text>
                            <Text style={styles.link}>Toronto, </Text>
                            <Text style={styles.link}>Ontario, </Text>
                            <Text style={styles.link}>M9R F0C</Text>
                        </View>
                        <View style={styles.detailRow}>
                            <Text style={styles.link}>(204) - 345-5678, </Text>
                            <Text style={styles.address}>luke@theforce.com</Text>
                        </View>
                    </View>
                    <View style={styles.title_row}>
                        <Text style={styles.title}>Technical</Text>
                        <Text style={styles.title_black}>Buyer</Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
    return(
        <form>
            <div>
           <MyDocument/>
            </div>
        </form>
    );
}
