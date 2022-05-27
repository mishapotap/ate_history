import type { AppProps } from 'next/app'

const ContentModule = ({ data, modules }: AppProps) => {
  const { slug, value } = data;
  const moduleName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const Module = modules.find((module) => module.name === moduleName)
  
  if (!Module) {
    return null;
  }
  
  return (
    <Module.Component data={value} />
  )
}

export default ContentModule;