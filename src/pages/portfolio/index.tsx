import React from 'react'

// Service
import Layout from '@/components/layout/general'

// Components
import { Locations } from "@/components/composite"

// Data
import locations from "@/common/data/portfolioLocations.json"

const Branch = () => {
  
  return (
    <Layout
      title='Карта портфеля заказов'
      fullsize
    >
      <Locations
        data={locations}
        name='portfolio'
      />
    </Layout>
  );
}

export default Branch;
