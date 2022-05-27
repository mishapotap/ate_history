import { GetStaticProps, GetStaticPaths } from 'next'

// Service
import Layout from '@/components/layout/content'

// Components
import { ContentModule } from "@/components/composite";
import modules from '@/components/modules'

// Constants
import { section } from "@/common/constants";

// Data
import portfolioList from "@/common/data/portfolioList.json";

const PortfolioItem = ({ data }) => {
  if (!data || !data.section) {
    return null
  }
  
  return (
    <Layout
      title={data.name}
      backUrl={section.portfolio}
    >
      {data.sections.map((section, index) => (
        <ContentModule
          key={index}
          data={section}
          modules={modules.base}
        />
      ))}
    </Layout>
  )
}

export default PortfolioItem

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = portfolioList.map((portfolioItem) => ({
      params: {
        pid: String(portfolioItem.id)
      }
    })
  )
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.pid
  const portfolioItem = portfolioList.find((data) => data.id === Number(id))
  return { props: { data: portfolioItem } }
}
