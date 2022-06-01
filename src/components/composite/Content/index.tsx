import { Fragment } from "react"

// Components
import { ContentModule } from "@/components/composite"
import modules from '@/components/modules'

const Content = ({ data }) => {
  if (!data) {
    return null
  }
  
  return (
    <Fragment>
      {data.sections.map((section, index) => (
        <ContentModule
          key={index}
          data={section}
          modules={modules.base}
        />
      ))}
    </Fragment>
  )
}

export default Content
