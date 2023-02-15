// // npm i react-elastic-carousel --force
// import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
// import Image from "next/image";
// import { Fragment } from "react";
// import Carousel from 'react-elastic-carousel'
// const breakPoints = [
//   { width: 1, itemToShow: 1 },
//   { width: 550, itemToShow: 2 },
//   { width: 786, itemToShow: 3 },
//   { width: 1200, itemToShow: 4 },
// ]


// export default function PanaverseComunity() {
//   return (
//     <Flex w='100%' h='50rem' flexDir='column' py={10} textAlign="center" justifyContent='center' alignItems='center'>

//       <Heading mb={4}>Panaverse Leader & Instructors</Heading>
//       <Flex w='100%' h='30rem' boxShadow='1px 1px 4px black' py={5} bg="#f1e7e8eb" >
//         <Carousel breakPoints={breakPoints}>
//           <Box h='25rem'>
//             <Flex w='18rem' h='23rem' flexDir='column' boxShadow='1px 1px 4px black' borderRadius={20}>
//               <Flex w='100%' h='55%' borderRadius={20} bg="#4071ED" justifyContent='center' alignItems="center" >
//                 <Box border='2px solid #DDC2C7' borderRadius='50%' p='3px'>
//                   <Image style={{ borderRadius: '50%' }} width={140} height={0} alt="Sir-Zia" src='/sir-zia.jpg' />
//                 </Box>
//               </Flex>
//               <Flex flexDir='column' p={3} w="100%" h="40%" alignItems='center' justifyContent='center'>
//                 <Heading fontSize='1.4rem'>Sir-Zia Khan</Heading>
//                 <Text>COO & CEO at Panaclound and lead faculty of PIAIC.As a leader he tech us as well</Text>
//                 <Button colorScheme='blue'>view More</Button>
//               </Flex>
//             </Flex>
//           </Box>
//           <Box h='25rem'>
//             <Flex w='18rem' h='23rem' flexDir='column' boxShadow='1px 1px 4px black' borderRadius={20}>
//               <Flex w='100%' h='55%' borderRadius={20} bg="#4071ED" justifyContent='center' alignItems="center" >
//                 <Box border='2px solid #DDC2C7' borderRadius='50%' p='3px'>
//                   <Image style={{ borderRadius: '50%' }} width={140} height={0} alt="Sir-Danial" src='/sir-danial.jpg' />
//                 </Box>
//               </Flex>
//               <Flex flexDir='column' p={3} w="100%" h="40%" alignItems='center' justifyContent='center'>
//                 <Heading fontSize='1.4rem'>Sir-Danial Nagori</Heading>
//                 <Text>Full-stack Developer of Panaverse and Instructor of PIAIC students</Text>
//                 <Button colorScheme='blue' mt={3}>view More</Button>
//               </Flex>
//             </Flex>
//           </Box>
//           <Box h='25rem'>
//             <Flex w='18rem' h='23rem' flexDir='column' boxShadow='1px 1px 4px black' borderRadius={20}>
//               <Flex w='100%' h='55%' borderRadius={20} bg="#4071ED" justifyContent='center' alignItems="center" >
//                 <Box border='2px solid #DDC2C7' borderRadius='50%' p='3px'>
//                   <Image style={{ borderRadius: '50%' }} width={140} height={0} alt="Sir-Qasim" src='/sir-qasim.jpg' />
//                 </Box>
//               </Flex>
//               <Flex flexDir='column' p={3} w="100%" h="40%" alignItems='center' justifyContent='center'>
//                 <Heading fontSize='1.4rem'>Sir-Qasim Ferozpurwala</Heading>
//                 <Text>Dapps & Blockchain Developer of Panaverse and Tutor at PIAIC</Text>
//                 <Button colorScheme='blue' mt={3}>view More</Button>
//               </Flex>
//             </Flex>
//           </Box>
//           <Box h='25rem'>
//             <Flex w='18rem' h='23rem' flexDir='column' boxShadow='1px 1px 4px black' borderRadius={20}>
//               <Flex w='100%' h='55%' borderRadius={20} bg="#4071ED" justifyContent='center' alignItems="center" >
//                 <Box border='2px solid #DDC2C7' borderRadius='50%' p='3px'>
//                   <Image style={{ borderRadius: '50%' }} width={140} height={0} alt="Sir-Umair" src='/sir-umair.jpg' />
//                 </Box>
//               </Flex>
//               <Flex flexDir='column' p={3} w="100%" h="40%" alignItems='center' justifyContent='center'>
//                 <Heading fontSize='1.4rem'>Sir-Umair Moon </Heading>
//                 <Text>Dapps & Blockchain Developer of Panaverse and Tutor at PIAIC</Text>
//                 <Button colorScheme='blue' mt={3}>view More</Button>
//               </Flex>
//             </Flex>
//           </Box>
//           <Box h='25rem'>
//             <Flex w='18rem' h='23rem' flexDir='column' boxShadow='1px 1px 4px black' borderRadius={20}>
//               <Flex w='100%' h='55%' borderRadius={20} bg="#4071ED" justifyContent='center' alignItems="center" >
//                 <Box border='2px solid #DDC2C7' borderRadius='50%' p='3px'>
//                   <Image style={{ borderRadius: '50%' }} width={140} height={0} alt="Sir-Zeshaan" src='/sir-zeshaan.jpg' />
//                 </Box>
//               </Flex>
//               <Flex flexDir='column' p={3} w="100%" h="40%" alignItems='center' justifyContent='center'>
//                 <Heading fontSize='1.4rem'>Sir-Zeshaan Hanif</Heading>
//                 <Text>Dapps & Blockchain Developer of Panaverse and Tutor at PIAIC</Text>
//                 <Button colorScheme='blue' mt={3}>view More</Button>
//               </Flex>
//             </Flex>
//           </Box>
//           <Box h='25rem'>
//             <Flex w='18rem' h='23rem' flexDir='column' boxShadow='1px 1px 4px black' borderRadius={20}>
//               <Flex w='100%' h='55%' borderRadius={20} bg="#4071ED" justifyContent='center' alignItems="center" >
//                 <Box border='2px solid #DDC2C7' borderRadius='50%' p='3px'>
//                   <Image style={{ borderRadius: '50%' }} width={140} height={0} alt="Sir-Adil Altaf" src='/sir-adil.jpg' />
//                 </Box>
//               </Flex>
//               <Flex flexDir='column' p={3} w="100%" h="40%" alignItems='center' justifyContent='center'>
//                 <Heading fontSize='1.4rem'>Sir-Adil Altaf</Heading>
//                 <Text>Full Stack web-Developer of Panaverse and Tutor at PIAIC</Text>
//                 <Button colorScheme='blue' mt={3}>view More</Button>
//               </Flex>
//             </Flex>
//           </Box>
//           <Box h='25rem'>
//             <Flex w='18rem' h='23rem' flexDir='column' boxShadow='1px 1px 4px black' borderRadius={20}>
//               <Flex w='100%' h='55%' borderRadius={20} bg="#4071ED" justifyContent='center' alignItems="center" >
//                 <Box border='2px solid #DDC2C7' borderRadius='50%' p='3px'>
//                   <Image style={{ borderRadius: '50%' }} width={140} height={0} alt="Sir-Hira" src='/mam-hira.jpg' />
//                 </Box>
//               </Flex>
//               <Flex flexDir='column' p={3} w="100%" h="40%" alignItems='center' justifyContent='center'>
//                 <Heading fontSize='1.4rem'>Mam-Hira Khan</Heading>
//                 <Text>Full Stack web-Developers of Panaverse dao and Tutor at PIAIC</Text>
//                 <Button colorScheme='blue' mt={3}>view More</Button>
//               </Flex>
//             </Flex>
//           </Box>
//         </Carousel>

//       </Flex>
//     </Flex>
//   )
// }


import React from 'react'

function PanaverseComunity() {
  return (
    <div>PanaverseComunity</div>
  )
}

export default PanaverseComunity