import { Box } from "@chakra-ui/react"

export const Footer  = () => {
  return(
    <Box height={100} backgroundColor={'white'} display={'flex'} alignItems={'center'}
     justifyContent={'center'}  marginTop={150} borderBottomRadius={5} fontSize={"small"} 
     borderWidth={1} borderStyle={"outset"} borderColor={"orangered"}>
      All rights reserved.
    </Box>
  )
}
