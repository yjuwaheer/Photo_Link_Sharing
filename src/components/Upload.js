import {useRef} from 'react';
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import {db, storage} from "../Firebase";

const Upload = ({ setIsUploading, setUploaded, setImageUrl }) => {
    const refUpload = useRef(null);
    let imageRef;

    const onImageSelected = (e) => {
        const image = e.target.files[0];
        const storageRef = storage.ref();
        imageRef = storageRef.child(image.name + new Date());
        setIsUploading(true);
        imageRef.put(image).then(() => {setIsUploading(false); setUploaded(true); setUrl()});
    };

    const setUrl = () => {
        imageRef.getDownloadURL().then((url) => {setImageUrl(url)});
    };

    return ( 
        <Flex 
            className="upload" 
            direction="column" 
            align="center" 
            background="#FFFFFF"
            width="30vw"
            height="65vh"
            padding="20px"
            borderRadius="20px"
            justifyContent="space-around"
        >
            <Heading size="md">Upload your image</Heading>
            <Text fontSize="sm">File should be Jpeg, Png...</Text>
            <Flex 
                className="drop" 
                direction="column" 
                align="center" 
                border="1px" 
                borderColor="teal.400" 
                borderStyle="dashed" 
                background="#F6F8FB"
                width="25vw"
                height="30vh"
                padding="20px"
                borderRadius="20px"
                justifyContent="space-around"
            >
                <img src="https://img.icons8.com/ios/452/drag-and-drop.png" alt="upload" height="100" width="100"/>
                <Text fontSize="sm">Drag & Drop your image here</Text>
            </Flex>
            <Text fontSize="sm">Or</Text>
            <input type="file" accept="image/*" style={{display: "none"}} ref={refUpload} onChange={onImageSelected}/>
            <Button colorScheme="blue" onClick={() => refUpload.current.click()}>Choose a file</Button>
        </Flex>
     );
}
 
export default Upload;