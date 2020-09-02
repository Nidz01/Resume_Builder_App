import React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  detailRow: {
    flexDirection: 'row',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  firstname: {
    fontSize: 24,
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
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
});

export default () => (
  <View style={styles.container}>
    
    <View style={styles.detailColumn}>
        <View style={styles.detailRow}>
            <Text style={styles.firstname}>Adam </Text>
            <Text style={styles.lastname}>Rowell</Text>
        </View>
      <Text style={styles.subtitle}>Jedi Master</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link style={styles.link}>luke@theforce.com</Link>
    </View>
  </View>
);