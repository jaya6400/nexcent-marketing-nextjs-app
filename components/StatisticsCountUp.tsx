'use client'

import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { BsPerson } from 'react-icons/bs'
import { FiServer } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'

interface StatsCardProps {
  title: string
  stat: string
  icon: ReactNode
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  )
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 0, sm: 1, md: 2 }}>
      <chakra.h1 textAlign={'left'} fontSize={'4xl'} color={'black'} py={0} fontWeight={'bold'}>
        Helping a local 
      </chakra.h1>
      <chakra.h1 textAlign={'left'} fontSize={'4xl'} color={'green'} py={1} fontWeight={'bold'}>
      business reinvent itself
      </chakra.h1>
      <chakra.h6 textAlign={'left'} fontSize={'1xl'} color={'black'} py={3} fontWeight={'medium'}>
        We reached here with our hardwork and dedication
      </chakra.h6>
      <SimpleGrid columns={{ base: 4, md: 2}} spacing={{ base: 1, lg: 8 }}>
        <StatsCard title={'Members'} stat={'2,245,341'} icon={<BsPerson size={'3em'} />} />
        <StatsCard title={'Clubs'} stat={'46,328'} icon={<FiServer size={'3em'} />} />
        <StatsCard title={'Event Bookings'} stat={'828,867'} icon={<GoLocation size={'3em'} />} />
        <StatsCard title={'Payments'} stat={'1,926,436'} icon={<img width="50" height="50" src="https://img.icons8.com/ios/50/card-security.png" alt="card-security"/>}/> 
      </SimpleGrid>
    </Box>
  )
}