import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Upper from "./icon/upper";

export default function Recomandedvideobeforestarting() {
    return (
        <>
            <Flex w="100%" alignItems='center' justifyContent='center' h="35rem" p={{ base: 0, lg: 5 }} >
                <Flex w={{ base: '98%', lg: '93%' }} h="27rem" justifyContent='space-between'>
                    <Flex overflow='auto' width={{ base: '98%', lg: '49%' }} h='100%' flexDir='column' p={2} boxShadow="1px 1px 4px black" >
                        <Heading mb={4} fontSize={{ base: '1.5rem', lg: '1.7rem' }}>Latest Videos and Playlists</Heading>
                        <Flex flexDir={{ base: 'column', lg: 'row' }} boxShadow='1px 1px 4px black' >
                            <Flex alignItems='center' justifyContent='center' textAlign='center' w={{ base: '34', lg: '27rem' }}>
                                <Image width={250} height={0} alt="Youtube" src="/uidev.jpg" />
                            </Flex>
                            <Text px={4} py={1}><b>UI Development with Next.js, Chakra UI, and Tailwind CSS</b><br/>In this video we will cover some basics of next.js and chakra ui and tailwind css<a href="https://www.youtube.com/playlist?list=PL0vKVrkG4hWo-l5qebYaDdavelN0WYTcN" style={{ color: 'blueviolet' }}>&nbsp; Watch full Video</a></Text>
                        </Flex>
                        <Flex flexDir={{ base: 'column', lg: 'row' }} mt={4} boxShadow='1px 1px 4px black' >
                            <Flex alignItems='center' justifyContent='center' textAlign='center' w={{ base: '34', lg: '22rem' }}>
                                <Image width={250} height={0} alt="Youtube" src="/serverless.jpg" />
                            </Flex>
                            <Text px={4} py={2}><b>Learn how to Create Serverless Scalable APIs</b><br/>In this video we will learn all about serverless scaleable apis <a href="https://www.youtube.com/playlist?list=PL0vKVrkG4hWqZyjdLjxj6MpXkGfQIIFOa" style={{ color: 'blueviolet' }}>&nbsp; Watch full Video</a></Text>
                        </Flex>
                        <Flex flexDir={{ base: 'column', lg: 'row' }} mt={4} boxShadow='1px 1px 4px black' >
                            <Flex alignItems='center' justifyContent='center' textAlign='center' w={{ base: '34', lg: '26rem' }}>
                                <Image width={300} height={0} alt="Youtube" src="/projectbased.jpg" />
                            </Flex>
                            <Text px={4} py={1}><b>Project-Based Programming By Hira Khan and Adil Altaf</b><br />In this video you will learn all about Javascript and this is part 2 of Javascript <a href="https://www.youtube.com/playlist?list=PL0vKVrkG4hWppb4aVxwVnovf0cbPNPDm1" style={{ color: 'blueviolet' }}>&nbsp; Watch full Video</a></Text>
                        </Flex>
                        <Flex flexDir={{ base: 'column', lg: 'row' }} mt={4} boxShadow='1px 1px 4px black' >
                            <Flex alignItems='center' justifyContent='center' textAlign='center' w={{ base: '34', lg: '17.8rem' }}>
                                <Image width={200} height={0} alt="Youtube" src="/absoluteprogram.jpg" />
                            </Flex>
                            <Text px={4} py={2}><b>Programming for Absolute Beginners By Daniyal Nagori</b><br />In this Playlist you will learn all about Javascript<a href="https://www.youtube.com/playlist?list=PL0vKVrkG4hWpJzo958iUh7TJVZkPNBDXV" style={{ color: 'blueviolet' }}>&nbsp; Watch full Video</a></Text>
                        </Flex>
                    </Flex>

                    <Flex display={{ base: 'none', lg: 'flex' }} overflow='auto' width='49%' h='100%' flexDir='column' p={2} boxShadow="1px 1px 4px black" >
                        <Heading mb={4} fontSize='1.7rem'>Videos you must watch before starting</Heading>
                        <Flex borderRadius={8} boxShadow='1px 1px 4px black' >
                            <Image width={200} height={0} alt="Youtube" src="/javascriptz.jpg" />
                            <Text px={4} py={2}><b>JavaScript</b><br/>You will learn about Why we use computers, how to communicate with computers, Programming languages.<a href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo" style={{ color: 'blueviolet' }}>&nbsp; Watch full Video</a></Text>
                        </Flex>
                        <Flex mt={4} borderRadius={8} boxShadow='1px 1px 4px black' >
                            <Image width={200} height={0} alt="Youtube" src="/htmlh.jpg" />
                            <Text px={4} py={2}><b>HTML</b><br/>You will learn about Introduction to HTML, CSS and JavaScript, Client Side development and Required Tools.<a href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6" style={{ color: 'blueviolet' }}>&nbsp; Watch full Video</a></Text>
                        </Flex>
                        <Flex mt={4} borderRadius={8} boxShadow='1px 1px 4px black' >
                            <Image width={200} height={0} alt="Youtube" src="/cssh.jpg" />
                            <Text px={4} py={0}><b>CSS</b><br/>You will learn about What CSS does, How CSS works, Rules and Properties and Values , CSS Box theory, inline embedded and external css.<a href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob" style={{ color: 'blueviolet' }}>&nbsp; Watch full Video</a></Text>
                        </Flex>
                    </Flex>


                </Flex>

            </Flex>
            <Flex w='100%' justifyContent='center' p={4} mb="4">
                <Flex cursor='pointer' justifyContent='center' alignItems='center' boxShadow='1px 1px 5px #622868' borderRadius='50%' w={14} h={14} bg='#e5cece' >
                    <a href='/'><Upper /></a>

                </Flex>
            </Flex>
        </>
    )
}