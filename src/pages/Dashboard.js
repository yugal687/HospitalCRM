import React, { useState, useEffect } from 'react'

import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
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
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from '../utils/demo/chartsData'

function Dashboard() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

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
    
      <PageTitle><u>Ground Field Engineer Dashboard Portal</u></PageTitle>

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

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Client</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User image" />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ {user.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>

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
      </div>
    </>
  )
}

export default Dashboard
