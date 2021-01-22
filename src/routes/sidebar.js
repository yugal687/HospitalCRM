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

//service Head
  {
    icon: 'PagesIcon',
    name: 'serviceHead',
    routes: [
      // submenu
      {
        path: '/app/serviceHead/service-head-portal',
        name: 'ServiceHeadPortal',
      },
      {
        path: '/app/serviceHead/assigned-issues',
        name: 'AssignedIssues',
      },
      
      
      
    ],
  },

  //Branch manager Portal
  {
    icon: 'PagesIcon',
    name: 'branchManager',
    routes: [
      // submenu
      {
        path: '/app/branchManager/branch-manager-portal',
        name: 'BranchManagerPortal',
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
  // Hospital Representative Portal
  {
    icon: 'PagesIcon',
    name: 'HospitalRepresentativePortal',
    routes: [
      // submenu
      {
        path: '/app/hospitalRepresentativePortal/problem-reporting',
        name: 'ProblemReporting',
      },
      {
        path: '/app/hospitalRepresentativePortal/reported-problem',
        name: 'ReportedProblem',
      },
      {
        path: '/app/hospitalRepresentativePortal/solved-problem',
        name: 'SolvedProblem',
      },
    ],
  },
  // On Field Staff Portal
  {
    icon: 'PagesIcon',
    name: 'OnFieldStaffPortal',
    routes: [
      // submenu
      {
        path: '/app/onFieldStaff/issues-reported',
        name: 'IssuesReported',
      },
      {
        path: '/app/onFieldStaff/review-problem',
        name: 'ReviewProblem',
      },
      {
        path: '/app/onFieldStaff/completed-issues',
        name: 'CompletedIssues',
      },
    ],
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
