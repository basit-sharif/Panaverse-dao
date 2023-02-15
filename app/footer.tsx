"use client"
import { BellIcon, EmailIcon, LinkIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Facebook from "./icon/facebook";
import Github from "./icon/github";
import Linkedin from "./icon/linkedin";
import Submit from "./icon/submit";
import Teacher from "./icon/teacher";
import Twitter from "./icon/twitter";
import Youtube from "./icon/youtube";

export default function Footer() {
    return (
        <Flex color='#d7dbe2' display='flex' flexDir={{base:'column' , lg:'row'}} w='100%' boxShadow='0 0px 4px black' bg="#3E4450" justifyContent='space-around' px={10} pb={5}>
                <Flex flexDir="column" alignItems="center" justifyContent='center' py={5}  >
                    <Image width={130} height={130} alt="logo" src='/logotransparent.png' />
                    <Heading fontSize="1.5rem">Panaverse DAO</Heading>
                </Flex>
                <Flex flexDir='column' p={5} >
                    <Stack textAlign='center' justifyContent='center' alignItems='center'>
                        <Heading fontSize="1.1rem"><LinkIcon /> GetInTouch</Heading>
                        <HStack py={2} gap="1">
                            <a target='_blank' href="https://web.facebook.com/groups/798034500288384?_rdc=1&_rdr"><Facebook /></a>
                            <a target='_blank' href="https://github.com/panaverse/"><Github /></a>
                            <a target='_blank' href="https://pk.linkedin.com/company/piaicofficial?trk=public_profile_topcard-current-company"><Linkedin /></a>
                            <a target='_blank' href="https://twitter.com/Panaverse_edu"><Twitter /></a>
                            <a target='_blank' href="https://web.facebook.com/groups/798034500288384?_rdc=1&_rdr"><Facebook /></a>
                            <a target='_blank' href="https://www.youtube.com/@panaverse"><Youtube /></a>
                        </HStack>
                    </Stack>
                    <Stack mt={4} width="100%">
                        <VStack textAlign='start'>
                            <Heading fontSize="1.1rem">What do you want to do</Heading>
                            <Box>
                                <Text><a href="#" style={{ color: 'blueviolet' }}><Submit /> &nbsp;Submit your Projects here</a></Text>
                                <Text><a href="#" style={{ color: 'blueviolet' }}><Teacher /> &nbsp;Become a Teacher at PIAIC</a></Text>
                            </Box>
                        </VStack>
                    </Stack>
                </Flex>
                <Flex flexDir='column' p={5} >
                    <Stack textAlign='center'>
                        <Heading fontSize="1.1rem">Our Courses</Heading>
                        <VStack textAlign="left">
                            <Box>
                                <Text>Web 3.0 and Metaverse (WMD) </Text>
                                <Text>Blockchain </Text>
                                <Text>Artificial Intelligence (AI) </Text>
                                <Text>Internet Of Things (IOT)</Text>
                                <Text>Clound Native Computing (CNC) </Text>
                            </Box>
                        </VStack>
                    </Stack>
                </Flex>
                <Stack mt={4}>
                    <VStack>
                        <Heading fontSize="1.1rem">Any Query</Heading>
                        <Box>
                            <HStack py={2} gap="1">
                                <a href="tel:+18475555555'"><PhoneIcon /></a>
                                <a href="mailto:education@piaic.org"><EmailIcon /></a>
                            </HStack>
                        </Box>
                        <Flex>
                            <BellIcon />
                            <a target='_blank' href="https://web.facebook.com/groups/798034500288384?_rdc=1&_rdr"><Flex mt={-1}> Notifications</Flex></a>
                        </Flex>
                    </VStack>
                </Stack>
        </Flex>
    )
}