/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/region', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Region', // name that appear in Sidebar
  },
  {
    path: '/app/hospital', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'HospitalSetup', // name that appear in Sidebar
  },
  

  //for staff dropdown
  {
    icon: 'PagesIcon',
    name: 'Staff',
    routes: [
      // submenu
      {
        path: '/app/staff/hospitalrep',
        name: 'HospitalRep',
      },
      {
        path: '/app/staff/staffs',
        name: 'Staffs',
      },
      
      
    ],
  },

  //for machine dropdown
  {
    icon: 'PagesIcon',
    name: 'Machine',
    routes: [
      // submenu
      {
        path: '/app/machine/category',
        name: 'Category',
      },
      {
        path: '/app/machine/sub-category',
        name: 'SubCategory',
      },
      {
        path: '/app/machine/machinesetup',
        name: 'MachineSetup',
      },
      
      
    ],
  },
  {
    path: '/app/hospitalandmachine', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'HospitalAndMachine', // name that appear in Sidebar
  },
  {
    path: '/app/problemreporting', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'ProblemReporting', // name that appear in Sidebar
  },
  {
    path: '/app/reportedproblem', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'ReportedProblem', // name that appear in Sidebar
  },
  {
    path: '/app/solvedproblem', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'SolvedProblem', // name that appear in Sidebar
  },
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/forms',
    icon: 'FormsIcon',
    name: 'Forms',
  },
  {
    path: '/app/cards',
    icon: 'CardsIcon',
    name: 'Cards',
  },
  {
    path: '/app/charts',
    icon: 'ChartsIcon',
    name: 'Charts',
  },
  {
    path: '/app/buttons',
    icon: 'ButtonsIcon',
    name: 'Buttons',
  },
  {
    path: '/app/modals',
    icon: 'ModalsIcon',
    name: 'Modals',
  },
  {
    path: '/app/tables',
    icon: 'TablesIcon',
    name: 'Tables',
  },
  {
    icon: 'PagesIcon',
    name: 'Pages',
    routes: [
      // submenu
      {
        path: '/login',
        name: 'Login',
      },
      {
        path: '/create-account',
        name: 'Create account',
      },
      {
        path: '/forgot-password',
        name: 'Forgot password',
      },
      {
        path: '/app/404',
        name: '404',
      },
      {
        path: '/app/blank',
        name: 'Blank',
      },
    ],
  },
]

export default routes
