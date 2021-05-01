import { useState } from 'react';
import Upload from './components/Upload';
import Uploading from './components/Uploading';
import Preview from './components/Preview';
// Importing ChakraProvider
import { ChakraProvider, Flex } from '@chakra-ui/react';

function App() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  return (
    <ChakraProvider>
      <Flex justify="center" align="center" className="app">
        {(!isUploading && !uploaded) && <Upload setIsUploading={setIsUploading} setUploaded={setUploaded} setImageUrl={setImageUrl} />}
        {isUploading && <Uploading />}
        {uploaded && <Preview imageUrl={imageUrl} setUploaded={setUploaded} />}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
