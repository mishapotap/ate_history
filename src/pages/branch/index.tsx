import React from 'react'

// Service
import Layout from '@/components/layout/general'

// Components
import { Locations } from "@/components/composite"

// Data
import locations from "@/common/data/branchLocations.json"

const Branch = () => {
  
  return (
    <Layout
      title='Карта филиалов и представительств'
      fullsize
    >
      <Locations
        data={locations}
        exclusionList={[
          // Список локаций, которые не нужно отображать на карте
          3 // Болгария
        ]}
        name='branch'
      />
    </Layout>
  );
}

export default Branch;
