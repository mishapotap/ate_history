import { GetStaticProps, GetStaticPaths } from 'next'

// Service
import Layout from '@/components/layout/content'

// Components
import { ContentModule } from "@/components/composite";
import modules from '@/components/modules'

// Constants
import { section } from "@/common/constants";

// Data
import branchList from "@/common/data/branchList.json";

const BranchItem = ({ data }) => {
  if (!data) {
    return null
  }

  return (
    <Layout
      title={data.name}
      backUrl={section.branch}
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

export default BranchItem

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = branchList.map((branchItem) => ({
      params: {
        pid: String(branchItem.id)
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
  const branchItem = branchList.find((data) => data.id === Number(id))
  return { props: { data: branchItem } }
}
