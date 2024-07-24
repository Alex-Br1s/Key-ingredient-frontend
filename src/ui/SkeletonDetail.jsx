import React from 'react';
import { View, StyleSheet } from 'react-native';

const SkeletonDetail = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageSkeleton} />
            <View style={styles.containerTitle}>
                <View style={styles.textSkeletonLarge} />
            </View>
            <View style={styles.textSkeletonLarge2} />
            <View style={styles.textSkeletonSmall} />
            <View style={styles.textSkeletonSmall2} />
            <View style={styles.textSkeletonSmall3} />
            <View style={styles.textSkeletonSmall4} />
            <View style={styles.textSkeletonSmall5} />
            <View style={styles.textSkeletonSmall6} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        display: 'flex',
    },
    imageSkeleton: {
        width: 370,
        height: 330,
        backgroundColor: '#e0e0e0', 
        borderRadius: 10,
        marginBottom: 18,
    },
    containerTitle: {
        display: 'flex',
        alignItems: 'center',
    }, 
    textSkeletonLarge: {
        width: '70%',
        height: 30,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginBottom: 10,
        textAlign: 'center',
    },
    textSkeletonLarge2: {
        width: '70%',
        height: 30,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 25
    },
    textSkeletonSmall: {
        width: '95%',
        height: 17,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginBottom: 10,
    },
    textSkeletonSmall2: {
        width: '70%',
        height: 17,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginBottom: 10,
    },
    textSkeletonSmall3: {
        width: '80%',
        height: 17,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginBottom: 10,
    },
    textSkeletonSmall4: {
        width: '80%',
        height: 17,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginBottom: 10,
    },
    textSkeletonSmall5: {
        width: '90%',
        height: 17,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginBottom: 10,
    },
    textSkeletonSmall6: {
        width: '85%',
        height: 17,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginBottom: 10,
    },

});

export default SkeletonDetail;