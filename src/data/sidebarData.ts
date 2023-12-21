import { MdHome } from 'react-icons/md';
import { FaBox } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GoClock } from 'react-icons/go';
import { LuTicket } from 'react-icons/lu';
import { CiGrid31 } from 'react-icons/ci';
import { TbBrandSnowflake } from 'react-icons/tb';
import { CiWallet, CiGrid41 } from 'react-icons/ci';
import { HiOutlineDocument } from 'react-icons/hi2';
import { RiGraduationCapLine } from 'react-icons/ri';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { IoDocumentText, IoSettingsOutline } from 'react-icons/io5';
import { FaRegCircle, FaRegUser, FaUserPlus, FaBell } from 'react-icons/fa';
import { MdOutlineDateRange, MdOutlineVideocam } from 'react-icons/md';

const sideBarData = [
  {
    title: 'Dashboard',
    icon: MdHome,
    sub: [
      {
        title: 'Overview',
        link: '/',
      },
      {
        title: 'Reports',

        submenu: [
          {
            title: 'Manage-Income',
            link: '/report/income-expense',
          },
          {
            title: 'Manage Monthly Attendance',
            link: '/report/monthly/attendance',
          },
          {
            title: 'Leave',
            link: '/report/leave',
          },
          {
            title: 'Payroll',
            link: '/report/payroll',
          },
          {
            title: 'Timesheet',
            link: '/report/timesheet',
          },
        ],
      },
    ],
  },
  {
    title: 'Staff',
    icon: FiUsers,
    sub: [
      {
        title: 'Users',
        link: '/staff/user',
      },
      {
        title: 'Role',
        link: '/staff/role',
      },
      {
        title: 'Employee Profile',
        link: '/staff/employee-profile',
      },
    ],
  },
  {
    title: 'Employee',
    link: '/employee',
    icon: FaRegUser,
  },
  {
    title: 'Payroll',
    icon: IoDocumentText,
    sub: [
      {
        title: 'Set Salery',
        link: '/setsalary',
      },
      {
        title: 'Payslip',
        link: '/payslip',
      },
    ],
  },
  {
    title: 'Timesheet',
    icon: GoClock,
    sub: [
      {
        title: 'Timesheet',
        link: '/timesheet',
      },
      {
        title: 'Manage Leave',
        link: '/timesheet/leave',
      },
      {
        title: 'Attendance',

        submenu: [
          {
            title: 'Marked Attendance',
            link: '/attendanceemployee',
          },
          {
            title: 'Bulk Attendance',
            link: '/attendanceemployee/bulkattendance',
          },
        ],
      },
    ],
  },
  {
    title: 'Perfomance',
    icon: FaBox,
    sub: [
      {
        title: 'Indicator',
        link: '/perfomance/indicator',
      },
      {
        title: 'Appraisal',
        link: '/perfomance/appraisal',
      },
      {
        title: 'Goal Tracking',
        link: '/perfomance/goaltracking',
      },
    ],
  },
  {
    title: 'Finance',
    icon: CiWallet,
    sub: [
      {
        title: 'Account List',
        link: '/finance/accountlist',
      },
      {
        title: 'Account Balances',
        link: '/finance/accountbalance',
      },
      {
        title: 'Payees',
        link: '/finance/payees',
      },
      {
        title: 'Payers',
        link: '/finance/payers',
      },
      {
        title: 'Deposite',
        link: '/finance/deposit',
      },
      {
        title: 'Expense',
        link: '/finance/expense',
      },
      {
        title: 'Transfer Balance',
        link: '/finance/transfer-balance',
      },
    ],
  },
  {
    title: 'Training',
    icon: RiGraduationCapLine,
    sub: [
      {
        title: 'Training List',
        link: '/training',
      },
      {
        title: 'Trainer',
        link: '/trainer',
      },
    ],
  },
  {
    title: 'HR Admin Setup',
    icon: FaUserPlus,
    sub: [
      {
        title: 'Award',
        link: '/award',
      },
      {
        title: 'Transfer',
        link: '/transfer',
      },
      {
        title: 'Resignation',
        link: '/resignation',
      },
      {
        title: 'Trip',
        link: '/travel',
      },
      {
        title: 'Promotion',
        link: '/promotion',
      },
      {
        title: 'Complaint',
        link: '/complaint',
      },
      {
        title: 'Warning',
        link: '/warning',
      },
    ],
  },
  {
    title: 'Recruitment',
    icon: HiOutlineClipboardDocumentList,
    sub: [
      {
        title: 'Job',
        link: '/recruitment/job',
      },
      {
        title: 'Job Create',
        link: '/recruitment/job/create',
      },
      {
        title: 'Job Application',
        link: '/recruitment/job-application',
      },
      {
        title: 'Job Candidate',
        link: '/recruitment/candidates-job-applications',
      },
      {
        title: 'Job On-Boarding',
        link: '/recruitment/job-onboard',
      },
      {
        title: 'Custom Question',
        link: '/recruitment/custom-question',
      },
      {
        title: 'Interview Schedule',
        link: '/recruitment/interview-schedule',
      },
    ],
  },
  {
    title: 'Contracts',
    icon: HiOutlineClipboardDocumentList,
    link: '/contract',
  },
  {
    title: 'Ticket',
    icon: LuTicket,
    link: '/ticket',
  },
  {
    title: 'Event',
    icon: MdOutlineDateRange,
    link: '/event',
  },
  {
    title: 'Meeting',
    icon: MdOutlineDateRange,
    link: '/meeting',
  },
  {
    title: 'Zoom Meeting',
    icon: MdOutlineVideocam,
    link: '/zoom-meeting',
  },
  {
    title: 'Assets',
    icon: TbBrandSnowflake,
    link: '/assets',
  },
  {
    title: 'Document',
    icon: TbBrandSnowflake,
    link: '/document',
  },
  {
    title: 'Email Templates',
    icon: CiGrid31,
    link: '/email_template_lang',
  },
  {
    title: 'Company Policy',
    icon: CiGrid31,
    link: '/company-policy',
  },
  {
    title: 'Messenger',
    icon: CiGrid31,
    link: '/chats',
  },
  {
    title: 'Notification Templates',
    icon: FaBell,
    link: '/notification-templates',
  },
  {
    title: 'HRM System Setup',
    icon: CiGrid41,
    link: '/branch',
  },
  {
    title: 'Landing Page',
    icon: HiOutlineDocument,
    link: '/landingpage',
  },
  {
    title: 'System Setting',
    icon: IoSettingsOutline,
    link: '/settings',
  },
];

export default sideBarData;
