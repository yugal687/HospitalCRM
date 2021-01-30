import React, { useState, useEffect } from 'react'

import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line, Bar } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/tableData'
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from '@windmill/react-ui'

import { Card, CardBody, Container, Title, CardFooter, FillButton, OutlineButton } from 'tailwind-react-ui'

import {
  // doughnutOptions,
  lineOptions,
  // doughnutLegends,
  lineLegends,
  barOptions,
  barLegends
} from '../utils/demo/chartsData'

function Dashboard() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length


  const doughnutLegends = [
    { title: 'IssuesCompleted', color: 'bg-blue-500' },
    { title: 'IssuesOnProgress', color: 'bg-teal-600' },
    { title: 'IssuesHaulted', color: 'bg-purple-600' },
  ]

  const doughnutOptions = {
    data: {
      datasets: [
        {
          data: [33, 33, 33],
          /**
           * These colors come from Tailwind CSS palette
           * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
           */
          backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
          label: 'Dataset 1',
        },
      ],
      labels: ['IssuesOnProgress', 'IssuesCompleted', 'IssuesHaulted'],
    },
    options: {
      responsive: true,
      cutoutPercentage: 80,
    },
    legend: {
      display: false,
    },
  }

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  return (
    <>
    
      <PageTitle>Ground Field Engineer Dashboard Portal</PageTitle>

      {/* <CTA /> */}

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-3 xl:grid-cols-3">
        
  <Card className="bg-blue-200" border shadow>
    <CardBody>
      <Title size={6} text="blue">
        {/* Hello World */}
        Issues Completed:
      </Title>
      <OutlineButton brand="primary" w="full" w-sm="1/5">
        <h2>43</h2>
      </OutlineButton>
    </CardBody>
    <CardFooter wrap>
      <FillButton  brand="primary" w="full" w-sm="1/5">
        <h2>hello</h2>
      </FillButton>
      
    </CardFooter>
  </Card>
  <Card className="bg-blue-200" border shadow>
    <CardBody>
      <Title size={6} text="blue">
        {/* Hello World */}
        Issues Haulted:
      </Title>
      <OutlineButton brand="primary" w="full" w-sm="1/5">
        <h2>43</h2>
      </OutlineButton>
    </CardBody>
    <CardFooter wrap>
      <FillButton brand="primary" w="full" w-sm="1/5">
       <h2> hello</h2>
      </FillButton>
    </CardFooter>
  </Card>
  <Card className="bg-blue-200" border shadow>
    <CardBody>
      <Title size={6} text="blue">
        {/* Hello World */}
        Pending:
      </Title>
      <OutlineButton brand="primary" w="full" w-sm="1/5">
        <h2>43</h2>
      </OutlineButton>
    </CardBody>
    <CardFooter wrap>
      <FillButton brand="primary" w="full" w-sm="1/5">
        <h2>hello</h2>
      </FillButton>
      
    </CardFooter>
  </Card>
      </div>


      <PageTitle>Charts</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Revenue">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Traffic">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>

        <ChartCard title="Bars">
          <Bar {...barOptions} />
          <ChartLegend legends={barLegends} />
        </ChartCard>
      </div>
    </>
  )
}

export default Dashboard
