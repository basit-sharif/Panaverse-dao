"use client"
import { MoonIcon, ArrowForwardIcon, SunIcon, HamburgerIcon, CloseIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Button, ChakraProvider, Flex, List, ListItem, Popover, PopoverContent, PopoverTrigger, Text, useColorMode, useColorModeValue, Icon } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Facebook from "./icon/facebook"
import Github from "./icon/github"
import Linkedin from "./icon/linkedin"
import Youtube from "./icon/youtube"

export default function Navigation() {
  const { toggleColorMode } = useColorMode();

  let bgcolor = useColorModeValue("#fffffffa", "#1a202cfa")
  let navcolor = useColorModeValue("#1414142e", "whiteAlpha.100")



  const [displayofmoon, setdisplayofmoon] = useState("flex");
  const [displayofsun, setdisplayofsun] = useState("none");
  const [displayabout, setdisplayabout] = useState("none")
  let [sicon, ChangeStraitIcon] = useState("flex");
  let [cicon, ChangeCloseIcon] = useState("none");
  let [display, ChangeDisplay] = useState("none");
  const changeTosun = (data: any) => {
    if (data) {
      setdisplayofmoon("flex");
      setdisplayofsun("none")
    } else {
      setdisplayofmoon("none");
      setdisplayofsun("flex")
    }
  }


  return (

    <ChakraProvider>
      <Flex w="100%" zIndex={20} bg={bgcolor} position="sticky" top={0} justifyContent='center' alignItems='center' h={{ base: '8rem', md: '8rem', lg: '20vh' }}>

        <Flex p={{ base: '0', md: '0', lg: "1" }} alignItems='center' bg="transparent" justifyContent={{ base: 'center', md: 'center', lg: 'space-between' }} w={{ base: '99%', md: '90', lg: '90%' }} h='100%'>
          <Flex alignItems='center' justifyContent='space-between' bg={navcolor} borderRadius='4rem' w={{ base: '95%', md: '80%', lg: '86.6%' }} h="60%">
            <Flex alignItems='center' justifyContent='center' w={'72%'} >
              {/* <Box ml={{ base: "-3rem", md: "-18rem", lg: "-13rem" }} mr={{ base: 0, md: 0, lg: 10 }}>
                <Link href="/"><Image style={{ zIndex: '1' }} width={135} height={135} alt="Panaverse" src={"/logotransparent.png"} /></Link>
              </Box> */}

              <List>
                <Flex gap={14} alignItems="center">
                  <Box ml={{ base: "0", md: "-6rem", lg: "-13rem" }}>
                    <Link href="/"><Image style={{ zIndex: '1' }} width={135} height={135} alt="Panaverse" src={"/logotransparent.png"} /></Link>
                  </Box>
                  <ListItem display={{ base: 'none', md: 'none', lg: 'flex' }} >
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                      <PopoverTrigger>
                        <Button fontSize={19} fontFamily="sans-serif" fontWeight={650} color="#bc152c" _hover={{ color: '#fe004c', textDecor: 'underline' }} variant={'link'}>About</Button>
                      </PopoverTrigger>
                      <PopoverContent
                        boxShadow={'xl'}
                        p={4}
                        rounded={'xl'}
                        minW={'sm'}>
                        <Link href="/about">The Presedent</Link>
                        <Link href="/panaverse">Panaverse</Link>
                      </PopoverContent>
                    </Popover>
                    <Flex mb="-3rem" mr="-3.6rem" bg='blackAlpha.300' w='7rem' display={displayabout} boxShadow='1px 1px 4px black' flexDir='column'>

                    </Flex>
                  </ListItem>
                  <ListItem display={{ base: 'none', md: 'none', lg: 'flex' }}>
                    <Button fontSize={19} fontFamily="sans-serif" fontWeight={650} color='#bc152c' _hover={{ color: '#fe004c', textDecor: 'underline' }} variant={'link'}><Link href="/courses">Courses</Link></Button>
                  </ListItem>
                  <ListItem display={{ base: 'none', md: 'none', lg: 'flex' }}>
                    <Button fontSize={19} fontFamily="sans-serif" fontWeight={650} color='#bc152c' _hover={{ color: '#fe004c', textDecor: 'underline' }} variant={'link'}><a target="_blank" href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit">Syllabus</a></Button>
                  </ListItem>
                </Flex>
              </List>

            </Flex>
            <Flex display={{ base: 'none', md: 'none', lg: 'flex' }} justifyContent='center' alignItems='center'>
              <Button mr={4} h={9} bgGradient='linear(to-r, #d3102e, pink.500)' color="white" _hover={{ bgGradient: 'linear(to-r, #d3104e, pink.400)' }} borderRadius="2rem" rightIcon={<ArrowForwardIcon />}><a target="_blank" href="https://portal.piaic.org/signup" >Apply Now </a></Button>
              <Button mr={5} h={9} bg="transparent" ><a href="tel:+18475555555'">Help?</a></Button>
            </Flex>

            <Flex alignItems='center' mr='5' display={{ base: 'flex', md: 'flex', lg: 'none' }}>
              <a target='_blank' href="https://pk.linkedin.com/company/piaicofficial?trk=public_profile_topcard-current-company"><Linkedin /></a>
              <Box ml={4} mr={4}>
                <a target='_blank' href="https://web.facebook.com/groups/798034500288384?_rdc=1&_rdr"><Facebook /></a>
              </Box>
              <a target='_blank' href="https://github.com/panaverse/"><Github /></a>
              <Box ml={3} >
                <a target='_blank' href="https://www.youtube.com/@panaverse"><Youtube /></a>
              </Box>
              <MoonIcon display={displayofmoon} onClick={() => { toggleColorMode(); changeTosun(null) }} cursor="pointer" mt={1} ml={4} />
              <SunIcon display={displayofsun} onClick={() => { toggleColorMode(); changeTosun("moon") }} cursor='pointer' mt={1} ml={4} />
            </Flex>
            <HamburgerIcon cursor='pointer' display={{ base: sicon, md: sicon, lg: 'none' }} onClick={() => { ChangeDisplay('flex'); ChangeCloseIcon('flex'); ChangeStraitIcon('none') }} mr={5} />
            <CloseIcon cursor='pointer' display={cicon} onClick={() => { ChangeDisplay('none'); ChangeCloseIcon('none'); ChangeStraitIcon('flex') }} mr={5} />
          </Flex>

          <Flex display={{ base: 'none', md: 'none', lg: 'flex' }}>
            <Box cursor='pointer' >
              <a target='_blank' href='https://pk.linkedin.com/company/piaicofficial?trk=public_profile_topcard-current-company'><Linkedin /></a>
            </Box>
            <Box cursor='pointer' ml={2} mr={2}>
              <a target='_blank' href="https://web.facebook.com/groups/798034500288384?_rdc=1&_rdr"><Facebook /></a>
            </Box>
            <Box cursor='pointer' mr={2}>
              <a target='_blank' href="https://www.youtube.com/@panaverse"><Youtube /></a>
            </Box>
            <Box cursor='pointer'>
              <a target="_blank" href="https://github.com/panaverse/"><Github /></a>
            </Box>
            <SunIcon display={displayofsun} onClick={() => { toggleColorMode(); changeTosun("moon") }} cursor="pointer" mt={1} ml={4} />
            <MoonIcon display={displayofmoon} onClick={() => { toggleColorMode(); changeTosun(null) }} cursor='pointer' mt={1} ml={4} />
          </Flex>

        </Flex>
      </Flex >

      <Flex display={display} onMouseUp={() => { ChangeDisplay("none"); ChangeCloseIcon('none'); ChangeStraitIcon('flex') }} zIndex={10} borderRadius='1rem' w={{ base: '100%', md: '100%' }} margin='auto' marginTop="-3" p='2rem' flexDir='column' justifyContent='center' align='center' bg='#e9d8df' >
        <Button color='#d3102e' colorScheme='4a9f66' mt='2'><Link href="/about">About Dr.Arif Alvi</Link></Button>
        <Button color='#d3102e' colorScheme='4a9f66' mt='2'><Link href="/panaverse">About Panaverse DAO</Link></Button>
        <Button color='#d3102e' colorScheme='4a9f66' mt='2'><Link href="courses">Courses</Link></Button>
        <Button color='#d3102e' colorScheme='4a9f66' mt='2'><a target="_blank" href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit">Syllabus</a></Button>
        <Button color='#d3102e' colorScheme='4a9f66' mt='2'><a href="tel:+18475555555'">Help?</a></Button>
        <Button color='4a9f66' h={9} _hover={{ bgGradient: 'linear(to-r, #d3104e, pink.400)' }} borderRadius="2rem" mt='1.4rem' bgGradient='linear(to-r, #d3102e, pink.500)' rightIcon={<ArrowForwardIcon />}>Apply Now</Button>
      </Flex>
    </ChakraProvider >

  )

}