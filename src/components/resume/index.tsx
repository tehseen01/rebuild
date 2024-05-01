"use client";

import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const Resume = () => {
  return (
    <div className="w-full h-screen">
      <Document>
        <Page size={"A4"} style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </div>
  );
};

export default Resume;

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    color: "#000",
    width: "100%",
    height: "100%",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
