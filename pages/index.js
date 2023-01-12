import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoMastodon } from 'react-icons/io5'
import thumbTwitter from '../public/images/twitter.png'
import thumbGithub  from '../public/images/icon_github.png'
import thumbLinkedIn from '../public/images/linkedin.png'
import thumbMastodon from '../public/images/mastodon_logo.svg'
import thumbSubstack from '../public/images/substack.png'

import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Howdy! I&apos;m a security enthusiast, angel investor, overall nerd
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Emilio Escobar
          </Heading>
          <p>Security Executive, angel investor, tech enthusiast</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/emilio.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Emilio is a security leader currently acting as CISO of <Link as={NextLink}
          href="https://www.datadoghq.com" passHref scroll={false}>Datadog</Link>, angel
          investor looking to support the next wave of disrupters in the SaaS space,
          general technologist, and thinking about what to disrupt as his own company. He
          also is one of the core developers of <Link as={NextLinkn} href="/works/ettercap" 
          passHref scroll={false}>Ettercap</Link> as well as contributing member and lead 
          coder to <Link as={NextLink} href="/works/bahamut" passHref scroll={false}>
          Bahamut</Link>.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/eaescob" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @eaescob
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/eaescob" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @eaescob
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://techies.social/emilio" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoMastodon />}
              >
                @emilio@techies.social
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://emilioe.substack.com"
            title="Emilio's rants"
            thumbnail={thumbSubstack}
          >
            My blog
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
