import { lazy } from 'react'
// use lazy for better code splitting, a.k.a. load faster
const Region = lazy(() => import('../Hospital/Setup/Region'))
const HospitalSetup = lazy(() => import('../Hospital/Setup/HospitalSetup'))
const MachineSetup = lazy(() => import('../Hospital/Setup/Machine/MachineSetup'))
const Category = lazy(() => import('../Hospital/Setup/Machine/Category'))
const SubCategory = lazy(() => import('../Hospital/Setup/Machine/SubCategory'))
const HospitalRep = lazy(() => import('../Hospital/Setup/Staff/HospitalRep'))
const Staffs = lazy(() => import('../Hospital/Setup/Staff/Staffs'))
const HospitalAndMachines = lazy(() => import('../Hospital/Setup/HospitalAndMachines'))
const ServiceHeadPortal = lazy(() => import('../Hospital/serviceHead/ServiceHeadPortal'))
const BranchManagerPortal = lazy(() => import('../Hospital/BranchManager/BranchManagerPortal'))
const ProblemReporting = lazy(() => import('../Hospital/HospitalRepresentativePortal/ProblemReporting'))
const ReportedProblem = lazy(() => import('../Hospital/HospitalRepresentativePortal/ReportedProblem'))
const SolvedProblem = lazy(() => import('../Hospital/HospitalRepresentativePortal/SolvedProblem'))
const IssuesReported = lazy(() => import('../Hospital/OnFieldStaffPortal/IssuesReported'))
const ReviewProblem = lazy(() => import('../Hospital/OnFieldStaffPortal/ReviewProblem'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/machine/category', // the url
    component: Category, // view rendered
  },
  {
    path: '/machine/sub-category', // the url
    component: SubCategory, // view rendered
  },
  {
    path: '/machine/machinesetup', // the url
    component: MachineSetup, // view rendered
  },
  {
    path: '/hospital', // the url
    component: HospitalSetup, // view rendered
  },
  {
    path: '/region', // the url
    component: Region, // view rendered
  },
  {
    path: '/staff/hospitalrep', // the url
    component: HospitalRep, // view rendered
  },
  {
    path: '/staff/staffs', // the url
    component: Staffs, // view rendered
  },
  {
    path: '/hospitalandmachine', // the url
    component: HospitalAndMachines, // view rendered
  },
  {
    path: '/serviceHead/service-head-portal', // the url
    component: ServiceHeadPortal, // view rendered
  },
  {
    path: '/branchManager/branch-manager-portal',
    component: BranchManagerPortal,
  },

  {
    path: '/hospitalRepresentativePortal/problem-reporting', // the url
    component: ProblemReporting, // view rendered
  },
  {
    path: '/hospitalRepresentativePortal/reported-problem', // the url
    component: ReportedProblem, // view rendered
  },
  {
    path: '/hospitalRepresentativePortal/solved-problem', // the url
    component: SolvedProblem, // view rendered
  },
  {
    path: '/onFieldStaff/issues-reported', // the url
    component: IssuesReported, // view rendered
  },
  {
    path: '/onFieldStaff/review-problem', // the url
    component: ReviewProblem, // view rendered
  },
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/forms',
    component: Forms,
  },
  {
    path: '/cards',
    component: Cards,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/modals',
    component: Modals,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
