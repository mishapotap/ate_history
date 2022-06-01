import { GetStaticProps, GetStaticPaths } from 'next'

// Service
import Layout from '@/components/layout/content'

// Components
import { ContentModule } from "@/components/composite";
import modules from '@/components/modules'

// Constants
import { section } from "@/common/constants";

// Data
import projectList from "@/common/data/projectList.json";

const ProjectItem = ({ data }) => {
  if (!data) {
    return null
  }
  
  return (
    <Layout
      title={data.name}
      backUrl={section.project}
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

export default ProjectItem

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectList.map((projectItem) => ({
      params: {
        pid: String(projectItem.id)
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
  const projectItem = projectList.find((data) => data.id === Number(id))
  return { props: { data: projectItem } }
}
