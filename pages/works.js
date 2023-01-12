import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbEttercap from '../public/images/works/ettercap.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="ettercap" title="Ettercap" thumbnail={thumbEttercap}>
           Ettercap is a man-in-the-middle attack/testing tool and has been around
           since about 2006.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="bahamut"
            title="Bahamut"
          >
           Bahamut is an open-source IRC daemon that powers the <Link as={NextLink} 
           href="https://www.dal.net" passHref scroll={false}>DALnet</Link> IRC network.
          </WorkGridItem>
        </Section>

      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
