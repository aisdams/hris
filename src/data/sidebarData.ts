import { MdHome } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { LuTicket } from "react-icons/lu";
import { CiGrid31 } from "react-icons/ci";
import { TbBrandSnowflake } from "react-icons/tb";
import { CiWallet, CiGrid41 } from "react-icons/ci";
import { HiOutlineDocument } from "react-icons/hi2";
import { RiGraduationCapLine } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoDocumentText, IoSettingsOutline } from "react-icons/io5";
import { FaRegCircle, FaRegUser, FaUserPlus, FaBell } from "react-icons/fa";
import { MdOutlineDateRange, MdOutlineVideocam  } from "react-icons/md";

const sideBarData = [
    {
        title: "Dashboard",
        icon: MdHome,
        sub: [
            {
                title: "Overview",
                link: '/',
                icon: FaRegCircle
            },
            {
                title: "Reports",
                icon: FaRegCircle,
                submenu: [
                    {
                        title: "Manage-Income",
                        link: "/report/income-expense",
                        icon: FaRegCircle,
                    },
                    {
                        title: "Manage Monthly Attendance",
                        link: "/report/monthly/attendance",
                        icon: FaRegCircle,
                    }
                ]
            }
        ]
    },
    {
        title: "Staff",
        icon: FiUsers,
        sub: [
            {
                title: "Users",
                link: '/user',
                icon: FaRegCircle
            },
            {
                title: "Role",
                link: '/roles',
                icon: FaRegCircle,
            },
            {
                title: "Employee Profile",
                link: '/employee-profile',
                icon: FaRegCircle,
            }
        ]
    },
    {
        title: "Employee",
        link: '/employee',
        icon: FaRegUser,
    },
    {
        title: "Payroll",
        icon: IoDocumentText,
        sub: [
            {
                title: "Set Salery",
                link: '/setsalary',
                icon: FaRegCircle
            },
            {
                title: "Payslip",
                link: '/payslip',
                icon: FaRegCircle,
            },
        ]
    },
    {
        title: "Timesheet",
        icon: GoClock,
        sub: [
            {
                title: "Timesheet",
                link: '/timesheet',
                icon: FaRegCircle
            },
            {
                title: "Manage Leave",
                link: '/timesheet/leave',
                icon: FaRegCircle
            },
            {
                title: "Attendance",
                icon: FaRegCircle,
                submenu: [
                    {
                        title: "Marked Attendance",
                        link: "/attendanceemployee",
                        icon: FaRegCircle,
                    },
                    {
                        title: "Bulk Attendance",
                        link: "/attendanceemployee/bulkattendance",
                        icon: FaRegCircle,
                    }
                ]
            }
        ]
    },
    {
        title: "Perfomance",
        icon: FaBox,
        sub: [
            {
                title: "Indicator",
                link: '/perfomance/indicator',
                icon: FaRegCircle
            },
            {
                title: "Appraisal",
                link: '/perfomance/appraisal',
                icon: FaRegCircle,
            },
            {
                title: "Goal Tracking",
                link: '/perfomance/goaltracking',
                icon: FaRegCircle,
            }
        ]
    },
    {
        title: "Finance",
        icon: CiWallet,
        sub: [
            {
                title: "Account List",
                link: '/finance/accountlist',
                icon: FaRegCircle,
            },
            {
                title: "Account Balances",
                link: '/finance/accountbalance',
                icon: FaRegCircle,
            },
            {
                title: "Payees",
                link: '/finance/payees',
                icon: FaRegCircle,
            },
            {
                title: "Payers",
                link: '/finance/payers',
                icon: FaRegCircle,
            },
            {
                title: "Deposite",
                link: '/finance/deposit',
                icon: FaRegCircle,
            },
            {
                title: "Expense",
                link: '/finance/expense',
                icon: FaRegCircle,
            },
            {
                title: "Transfer Balance",
                link: '/finance/transfer-balance',
                icon: FaRegCircle,
            },
        ]
    },
    {
        title: "Training",
        icon: RiGraduationCapLine,
        sub: [
            {
                title: "Training List",
                link: '/training',
                icon: FaRegCircle,
            },
            {
                title: "Trainer",
                link: '/trainer',
                icon: FaRegCircle,
            }
        ]
    },
    {
        title: "HR Admin Setup",
        icon: FaUserPlus,
        sub: [
            {
                title: "Award",
                link: '/award',
                icon: FaRegCircle,
            },
            {
                title: "Transfer",
                link: '/transfer',
                icon: FaRegCircle,
            },
            {
                title: "Resignation",
                link: '/resignation',
                icon: FaRegCircle,
            },
            {
                title: "Trip",
                link: '/travel',
                icon: FaRegCircle,
            },
            {
                title: "Promotion",
                link: '/promotion',
                icon: FaRegCircle,
            },
            {
                title: "Complaint",
                link: '/complaint',
                icon: FaRegCircle,
            },
            {
                title: "Warning",
                link: '/warning',
                icon: FaRegCircle,
            },
        ]
    },
    {
        title: "Recruitment",
        icon: HiOutlineClipboardDocumentList,
        sub: [
            {
                title: "Job",
                link: '/recruitment/job',
                icon: FaRegCircle,
            },
            {
                title: "Job Create",
                link: '/recruitment/job/create',
                icon: FaRegCircle,
            },
            {
                title: "Job Application",
                link: '/recruitment/job-application',
                icon: FaRegCircle,
            },
            {
                title: "Job Candidate",
                link: '/recruitment/candidates-job-applications',
                icon: FaRegCircle,
            },
            {
                title: "Job On-Boarding",
                link: '/recruitment/job-onboard',
                icon: FaRegCircle,
            },
            {
                title: "Custom Question",
                link: '/recruitment/custom-question',
                icon: FaRegCircle,
            },
            {
                title: "Interview Schedule",
                link: '/recruitment/interview-schedule',
                icon: FaRegCircle,
            },
        ]
    },
    {
        title: "Contracts",
        icon: HiOutlineClipboardDocumentList,
        link: '/contract'
    },
    {
        title: "Ticket",
        icon: LuTicket,
        link: '/ticket'
    },
    {
        title: "Event",
        icon: MdOutlineDateRange,
        link: '/event'
    },
    {
        title: "Meeting",
        icon: MdOutlineDateRange,
        link: '/meeting'
    },
    {
        title: "Zoom Meeting",
        icon: MdOutlineVideocam,
        link: '/zoom-meeting'
    },
    {
        title: "Assets",
        icon: TbBrandSnowflake,
        link: '/assets'
    },
    {
        title: "Document",
        icon: TbBrandSnowflake,
        link: '/document'
    },
    {
        title: "Email Templates",
        icon: CiGrid31,
        link: '/email_template_lang'
    },
    {
        title: "Company Policy",
        icon: CiGrid31,
        link: '/company-policy'
    },
    {
        title: "Messenger",
        icon: CiGrid31,
        link: '/chats'
    },
    {
        title: "Notification Templates",
        icon: FaBell ,
        link: '/notification-templates'
    },
    {
        title: "HRM System Setup",
        icon: CiGrid41 ,
        link: '/branch'
    },
    {
        title: "Landing Page",
        icon: HiOutlineDocument ,
        link: '/landingpage'
    },
    {
        title: "System Setting",
        icon: IoSettingsOutline ,
        link: '/settings'
    },
]


export default sideBarData;