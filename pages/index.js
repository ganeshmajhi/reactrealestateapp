import Link from 'next/link';
import Image from 'next/image';
import {Flex, Box, Button, Text, StylesProvider } from '@chakra-ui/react';

const Banner =({ purpose, imageUrl, title1, title2, desc1, desc2, urlName, buttonText })=>(
<Flex flexWrap="wrap" justifyContent="center" alignitems="center" m="10">
  <Image src={imageUrl} width={500} height={300} alt="banner"/>
  <Box p="5">
    <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text> 
    <Text  fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
    <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3" fontWeight="medium">{desc1}<br/>{desc2}</Text>
    <Button fontSize="xl" padding="5">
      <Link href={urlName} >{buttonText}</Link>

    </Button>

  </Box>

</Flex>
)
export default function Home() {
  return (
    <Box>
     
    <Banner 
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartment, Villa, Homes"
        desc2="and More"
        buttonText="Explore Renting"
        urlName="/search?purpose-for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"

    />
    <Flex flexWrap="wrap">
      {/* fetch the property and map over them.. */}

      

    </Flex>
    <Banner 
        purpose="BUY A HOME"
        title1="Buy Homes for"
        title2="Everyone"
        desc1="Explore Apartment, Villa, Homes"
        desc2="and More"
        buttonText="Explore Buying"
        urlName="/search?purpose-for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
    />
    </Box>
  )
}
