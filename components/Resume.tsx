"use client";

import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Define styles for the PDF
const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 10,
        fontFamily: 'Helvetica',
        backgroundColor: '#ffffff',
    },
    header: {
        marginBottom: 20,
        borderBottom: '2 solid #FF204E',
        paddingBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 11,
        color: '#666666',
        marginBottom: 3,
    },
    contactInfo: {
        fontSize: 9,
        color: '#444444',
        marginTop: 5,
    },
    section: {
        marginTop: 15,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FF204E',
        marginBottom: 8,
        textTransform: 'uppercase',
        borderBottom: '1 solid #CCCCCC',
        paddingBottom: 3,
    },
    text: {
        fontSize: 10,
        lineHeight: 1.5,
        color: '#333333',
        textAlign: 'justify',
    },
    educationItem: {
        marginBottom: 8,
    },
    educationTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000000',
    },
    educationDetails: {
        fontSize: 9,
        color: '#666666',
        marginTop: 2,
    },
    skillsContainer: {
        marginTop: 5,
    },
    skillItem: {
        marginBottom: 6,
    },
    skillCategory: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 2,
    },
    skillList: {
        fontSize: 9,
        color: '#444444',
        lineHeight: 1.4,
    },
    projectItem: {
        marginBottom: 10,
    },
    projectTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 3,
    },
    projectDescription: {
        fontSize: 9,
        color: '#444444',
        lineHeight: 1.5,
    },
    workItem: {
        marginBottom: 10,
    },
    workTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000000',
    },
    workDuration: {
        fontSize: 9,
        color: '#666666',
        fontStyle: 'italic',
        marginBottom: 3,
    },
    certList: {
        fontSize: 9,
        color: '#444444',
        lineHeight: 1.4,
    },
});

// Resume Document Component
export const ResumeDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.name}>KUMAR HARSH</Text>
                <Text style={styles.subtitle}>CSE Student · Cloud Computing · ML · Full Stack Development</Text>
                <Text style={styles.subtitle}>KIIT University · Bihar, India</Text>
                <Text style={styles.contactInfo}>
                    📧 kumarharsh4325@gmail.com  |  📱 +91-7488124325
                </Text>
            </View>

            {/* Profile */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Profile</Text>
                <Text style={styles.text}>
                    Computer Science Engineering student specializing in Cloud Computing, Machine Learning, and Full Stack Development.
                    Completed 2 internships at AWS Academy and Google Developer programs. Delivered serverless solutions saving 40% costs,
                    built AI systems with 98% accuracy, and launched apps serving 10,000+ users.
                </Text>
            </View>

            {/* Education */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Education</Text>
                <View style={styles.educationItem}>
                    <Text style={styles.educationTitle}>KIIT University, Bhubaneswar, Odisha</Text>
                    <Text style={styles.educationDetails}>B.Tech Computer Science Engineering, 2022 - 2026</Text>
                    <Text style={styles.educationDetails}>Coursework: Data Structures, Algorithms, ML, Cloud Computing, DBMS, OOP</Text>
                </View>
                <View style={styles.educationItem}>
                    <Text style={styles.educationTitle}>PPM School, Jehanabad, Bihar</Text>
                    <Text style={styles.educationDetails}>Senior Secondary (12th CBSE), 2020 - 2021</Text>
                </View>
                <View style={styles.educationItem}>
                    <Text style={styles.educationDetails}>Secondary (10th CBSE), 2019 - 2020</Text>
                </View>
            </View>

            {/* Technical Skills */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Technical Skills</Text>
                <View style={styles.skillsContainer}>
                    <View style={styles.skillItem}>
                        <Text style={styles.skillCategory}>Languages:</Text>
                        <Text style={styles.skillList}>
                            Python, Java, C++, JavaScript, Kotlin, SQL, TypeScript
                        </Text>
                    </View>
                    <View style={styles.skillItem}>
                        <Text style={styles.skillCategory}>Cloud & DevOps:</Text>
                        <Text style={styles.skillList}>
                            AWS (Lambda, EC2, S3, IAM), Docker, Kubernetes, Terraform, Linux, Git
                        </Text>
                    </View>
                    <View style={styles.skillItem}>
                        <Text style={styles.skillCategory}>ML/AI:</Text>
                        <Text style={styles.skillList}>
                            TensorFlow, PyTorch, Keras, OpenCV, NumPy, Pandas
                        </Text>
                    </View>
                    <View style={styles.skillItem}>
                        <Text style={styles.skillCategory}>Web/Mobile:</Text>
                        <Text style={styles.skillList}>
                            React.js, Node.js, Flask, Django, REST APIs, Android Studio, Firebase
                        </Text>
                    </View>
                    <View style={styles.skillItem}>
                        <Text style={styles.skillCategory}>Databases:</Text>
                        <Text style={styles.skillList}>
                            MySQL, PostgreSQL, MongoDB, SQLite, Redis
                        </Text>
                    </View>
                </View>
            </View>

            {/* Professional Experience */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Professional Experience</Text>
                <View style={styles.workItem}>
                    <Text style={styles.workTitle}>Cloud Computing Intern - AWS Academy Program</Text>
                    <Text style={styles.workDuration}>January 2024 - April 2024 | Remote</Text>
                    <Text style={styles.projectDescription}>
                        • Engineered serverless solutions using AWS Lambda, API Gateway, S3, cutting costs by 40%{'\n'}
                        • Automated CI/CD pipelines, reducing deployment time from 2 hours to 15 minutes{'\n'}
                        • Managed 10,000+ daily API requests with 99.9% uptime{'\n'}
                        • Earned AWS Cloud Foundations and Cloud Architecting certifications (95% scores)
                    </Text>
                </View>
                <View style={styles.workItem}>
                    <Text style={styles.workTitle}>Android Developer Intern - Google for Developers</Text>
                    <Text style={styles.workDuration}>May 2024 - August 2024 | Remote</Text>
                    <Text style={styles.projectDescription}>
                        • Published 3 Android apps on Google Play using Kotlin and Jetpack Compose (4.5-star rating){'\n'}
                        • Decreased crash rate by 60% through exception handling and Firebase Crashlytics{'\n'}
                        • Built scalable Firebase backend supporting 500+ daily active users
                    </Text>
                </View>
            </View>

            {/* Projects */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Projects</Text>
                <View style={styles.projectItem}>
                    <Text style={styles.projectTitle}>AQUA Face Lite - AI-Powered Face Verification System</Text>
                    <Text style={styles.projectDescription}>
                        Engineered real-time face verification system achieving 98% accuracy using InsightFace ArcFace model.
                        Developed responsive Streamlit web interface processing 50+ image comparisons per minute.
                        Tech: Python, Deep Learning, TensorFlow, Streamlit, OpenCV, InsightFace
                    </Text>
                </View>
                <View style={styles.projectItem}>
                    <Text style={styles.projectTitle}>Multiplayer Gaming Server - Custom GTA V Roleplay</Text>
                    <Text style={styles.projectDescription}>
                        Architected custom gaming server with 100+ concurrent active players daily. Developed 20+ custom scripts
                        in Lua and JavaScript. Managed AWS VPS with 10,000+ registered users.
                        Tech: Lua, JavaScript, Node.js, MySQL, AWS, Docker
                    </Text>
                </View>
                <View style={styles.projectItem}>
                    <Text style={styles.projectTitle}>Alzheimer Disease Prediction - ML Healthcare Application</Text>
                    <Text style={styles.projectDescription}>
                        Developed CNN-based ML model achieving 92% accuracy in Alzheimer disease prediction.
                        Processed 5000+ medical images, built Flask REST API for real-time predictions.
                        Tech: Python, TensorFlow, CNN, OpenCV, Flask, Scikit-learn
                    </Text>
                </View>
                <View style={styles.projectItem}>
                    <Text style={styles.projectTitle}>Game Engine Development - Advanced Software Engineering</Text>
                    <Text style={styles.projectDescription}>
                        Designed modular game engine architecture using OOP principles. Implemented efficient data structures
                        and algorithms optimizing performance by 35%, with 90% code coverage using TDD.
                        Tech: C++, Data Structures, Algorithms, DBMS, OOP
                    </Text>
                </View>
            </View>

            {/* Certifications */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Certifications</Text>
                <Text style={styles.certList}>
                    • AWS Academy Graduate - Cloud Architecting (Amazon Web Services){'\n'}
                    • AWS Academy Graduate - Cloud Foundations (Amazon Web Services){'\n'}
                    • IBM Cloud Essentials V3 (IBM){'\n'}
                    • Cybersecurity Analyst Job Simulation (TCS){'\n'}
                    • Software Engineering Job Simulation (Wells Fargo)
                </Text>
            </View>

            {/* Contact Footer */}
            <View style={{ marginTop: 20, borderTop: '1 solid #CCCCCC', paddingTop: 10 }}>
                <Text style={styles.contactInfo}>
                    📧 kumarharsh4325@gmail.com  |  📱 +91-7488124325  |  LinkedIn: linkedin.com/in/kumar-harsh-99b4982b1
                </Text>
            </View>
        </Page>
    </Document>
);
