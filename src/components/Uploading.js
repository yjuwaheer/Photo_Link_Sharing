import { Flex, Heading, Progress } from "@chakra-ui/react"

const Uploading = () => {
    return ( 
        <Flex 
            className="uploading" 
            direction="column"
            background="#FFFFFF"
            width="35vw"
            height="20vh"
            padding="20px"
            borderRadius="20px"
            justifyContent="space-around"
        >
            <Heading>Uploading...</Heading>
            <Progress size="sm" isIndeterminate colorScheme="twitter"></Progress>
        </Flex>
     );
}
 
export default Uploading;