import React from "react";
import ReactDOM, { render } from 'react-dom';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import Button from 'react-bootstrap/Button';

export default function pdfMaker () {
    const styles = StyleSheet.create({
        page: {
            flexDirection: "row"
        },
        section: {
            flexGrow: 1
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
      <div>
        <PDFViewer><MyDocument/></PDFViewer> 
        <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </div>

    );
}