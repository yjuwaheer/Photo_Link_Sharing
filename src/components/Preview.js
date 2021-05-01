import { useState } from 'react';
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react"

const Preview = ({ imageUrl, setUploaded }) => {
    const [linkCopied, setLinkCopied] = useState(false);

    return ( 
        <Flex 
            className="preview" 
            direction="column" 
            align="center" 
            background="#FFFFFF"
            width="30vw"
            height="65vh"
            padding="20px"
            borderRadius="20px"
            justifyContent="space-around"
            position="relative"
        >
            <span className="material-icons material-icons-round" style={{color: "#219653", fontSize: 40}}>check_circle</span>
            <Heading size="md">Uploaded Successfully!</Heading>
            <Image src={imageUrl} 
                alt="" 
                width="25vw"
                height="30vh"
                borderRadius="20px"
            />
            <Flex 
                className="copy"
                width="25vw" 
                background="#F6F8FB" 
                borderRadius="20px" 
                align="center"
                border="1px solid #E0E0E0"
            >
                <Text 
                    fontSize="sm" 
                    overflowX="hidden"
                    paddingLeft="10px"
                    width="75%"
                    height="20px"
                >
                    {imageUrl}
                </Text>
                <Button 
                    fontSize="1rem" 
                    colorScheme="blue" 
                    zIndex="10" 
                    borderRadius="20px"
                    width="25%"
                    onClick={() => {navigator.clipboard.writeText(imageUrl); setLinkCopied(true); setTimeout(() => {setLinkCopied(false)}, 2000)}}
                >
                    {!linkCopied && "Copy"}
                    {linkCopied && (<span className="material-icons material-icons-round" style={{color: "#65FF00", fontSize: 40}}>check_circle</span>)}
                </Button>
            </Flex>

            <Button 
                position="absolute"
                left="10px"
                top="10px"
                onClick={() => {setUploaded(false)}}
            >
                <span class="material-icons material-icons-outlined">arrow_back</span>
            </Button>
        </Flex>
     );
}
 
export default Preview;