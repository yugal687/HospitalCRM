import React, { useState, useEffect } from 'react'

import CTA from '../../components/CTA'
import InfoCard from '../../components/Cards/InfoCard'
import ChartCard from '../../components/Chart/ChartCard'
import { Doughnut, Line, Bar } from 'react-chartjs-2'
import ChartLegend from '../../components/Chart/ChartLegend'
import PageTitle from '../../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../../icons'
import RoundIcon from '../../components/RoundIcon'
import response from '../../utils/demo/tableData'
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
  Card, CardBody,
} from '@windmill/react-ui'

import { Button, Title, CardFooter, FillButton, OutlineButton } from 'tailwind-react-ui'

import {
  // doughnutOptions,
  lineOptions,
  // doughnutLegends,
  lineLegends,
  barOptions,
  barLegends
} from '../../utils/demo/chartsData'

function HospitalRepresentativeDashboard() {
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

  const barOptions = {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Issues Assigned',
          backgroundColor: '#0694a2',
          // borderColor: window.chartColors.red,
          borderWidth: 1,
          data: [-3, 14, 52, 74, 33, 90, 70],
        },
        {
          label: 'Isseues Completed',
          backgroundColor: '#7e3af2',
          // borderColor: window.chartColors.blue,
          borderWidth: 1,
          data: [66, 33, 43, 12, 54, 62, 84],
        },
      ],
    },
    options: {
      responsive: true,
    },
    legend: {
      display: false,
    },
  }

  const barLegends = [
    { title: 'Issues Assigned', color: 'bg-teal-600' },
    { title: 'Isseues Completed', color: 'bg-purple-600' },
  ]
  

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
    
      
          <h4 className="text-center mb-5 p-2 border bg-green-300">Dashboard Portal For Hospital Representative</h4>
      
      
      {/* <CTA /> */}

      {/* <!-- Cards --> */}
      <h4 className="mb-3 text-bold">Issues Details Counts</h4>
      <div className="grid gap-3 mb-8 p-2 md:grid-cols-4 xl:grid-cols-4">
          
      <Card colored className="text-white  bg-teal-500">
          <CardBody>
            <h6 className="mb-3 text-white font-semibold">Total Issues Count</h6>
            <h4 className="text-white">
              33
            </h4>
            
          </CardBody>
          <hr className="text-blue-700" />
          <CardFooter>
          <a href="#" className=" mx-auto"><h6 className="text-white">Get Details</h6></a>
           </CardFooter>
        </Card>
        <Card colored className="text-white  bg-teal-500">
          <CardBody>
            <h6 className="mb-3 text-white font-semibold">Completed Issues Count</h6>
            <h4 className="text-white">
              33
            </h4>
            
          </CardBody>
          <hr className="text-blue-700" />
          <CardFooter className="">
           <a href="#" className=" mx-auto"><h6 className="text-white">Get Details</h6></a>
           </CardFooter>
        </Card>
        <Card colored className="text-white  bg-teal-500">
          <CardBody>
            <h6 className="mb-3 text-white font-semibold">On Progress Issues Count</h6>
            <h4 className="text-white">
              33
            </h4>
            
          </CardBody>
          <hr className="text-blue-700" />
          <CardFooter>
           <h6 className="text-white mx-auto">Get Details</h6>
           </CardFooter>
        </Card>
        <Card colored className="text-white  bg-teal-500">
          <CardBody>
            <h6 className="mb-3 text-white font-semibold">Pending Issues Count</h6>
            <h4 className="text-white">
              33
            </h4>
            
          </CardBody>
          <hr className="text-blue-700" />
          <CardFooter>
           <h6 className="text-white mx-auto">Get Details</h6>
           </CardFooter>
        </Card>
      </div>


      <PageTitle>Progress Charts</PageTitle>
      <div className="grid gap-6 border border-info mb-8 md:grid-cols-2">
        <ChartCard title="Engineer's Progress Chart">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        {/* <ChartCard title="Traffic">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard> */}

        <ChartCard className="text-center" title="Progress Timeline">
          <Bar {...barOptions} />
          <ChartLegend legends={barLegends} />
        </ChartCard>
      </div>
    </>
  )
}

export default HospitalRepresentativeDashboard
