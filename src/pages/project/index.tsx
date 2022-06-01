import React from 'react'

// Service
import Layout from '@/components/layout/general'

// Components
import { Locations } from "@/components/composite"

// Data
import locations from "@/common/data/projectLocations.json"

const Branch = () => {
  
  return (
    <Layout
      title='Выполненные проекты в России и зарубежом'
      fullsize
    >
      <Locations
        data={locations}
        exclusionList={[
          // Список локаций, которые не нужно отображать на карте
          4 // Турция
        ]}
        name='project'
      />
    </Layout>
  );
}

export default Branch;
