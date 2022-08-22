import { ScrollView} from "react-native";
import PhotoCard from "../components/PhotoCard";
import { photoListStyles } from "../assets/styles";

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
      <ScrollView style={photoListStyles.photoList}>
        {bsPhotos.map(photo => (
            <PhotoCard key = {photo.id} photo ={photo} />
        ))}
      </ScrollView>  
    )
}


export default PhotoList