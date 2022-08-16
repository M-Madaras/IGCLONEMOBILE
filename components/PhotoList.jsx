import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import PhotoCard from "./PhotoCard";

const bsPhotos = [
    {id: 1, description: 'Selfie With MOM'},
    {id: 2, description: 'Ducks being Feed'},
    {id: 3, description: 'Concert Photos'},
    {id: 4, description: 'Beach Photos'},
    {id: 5, description: 'Pet Photos'},
    {id: 6, description: 'Selfie'},
    {id: 7, description: 'Selfie with laptop and coding shirt'},
    {id: 8, description: 'FOOD'},
    {id: 9, description: 'MORE FOOD'},
    {id: 10, description: 'EVEN MORE FOOD'},
];

function PhotoList() {
    return(
      <ScrollView style={styles.photoList}>
        {bsPhotos.map(photo => (
            <PhotoCard key ={photo.id} photo ={photo} />
        ))}
      </ScrollView>  
    )
}


const styles = StyleSheet.create({
    photoList: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    }
})
export default PhotoList;