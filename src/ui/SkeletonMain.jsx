import React from 'react';
import { View, StyleSheet } from 'react-native';

const SkeletonMain = () => {
    return (
        <View style={styles.container}>
            {Array.from({ length: 6 }).map((_, index) => (
                <View key={index} style={styles.skeletonCard}>
                    <View style={styles.imageSkeleton} />
                    <View style={styles.textSkeleton} />
                    <View style={styles.subTitle} />
                    <View style={styles.kcal} />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal:5
    },
    skeletonCard: {
        width: '49%',
        height: 250,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        marginBottom: 10,
    },
    imageSkeleton: {
        width: '100%',
        height: '60%',
        backgroundColor: '#d0d0d0',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textSkeleton: {
        height: 20,
        backgroundColor: '#c0c0c0',
        borderRadius: 10,
        marginTop: 12,
        marginLeft: 10,
        marginHorizontal: 10
    },
    subTitle: {
        height: 15,
        backgroundColor: '#c0c0c0',
        borderRadius: 10,
        width: '70%',
        marginLeft: 10,
        marginTop: 10
    },
    kcal: {
       height: 13,
       width: '35%',
       borderRadius: 10,
       backgroundColor: '#c0c0c0',
       marginTop: 5,
       marginLeft: 10, 
    }
});

export default SkeletonMain;
