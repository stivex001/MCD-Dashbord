import {
  AccountBalanceWalletOutlined,
  EventAvailableOutlined,
  GroupOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowRightOutlined,
  ReceiptOutlined,
  Report,
  Settings,
  TakeoutDining,
  Tv,
} from "@mui/icons-material";

export const sidebarData = [
  {
    id: 1,
    title: "Dashboard",
    to: "/",
    icon: (
      <Tv
        style={{
          fontSize: "20px",
          color: "#bcc7cd",
        }}
      />
    ),
  },
  {
    id: 2,
    title: "Transactions",
    icon: (
      <ReceiptOutlined
        style={{
          fontSize: "20px",
          color: "#bcc7cd",
        }}
      />
    ),
    iconClosed: <KeyboardArrowRightOutlined />,
    iconOpen: <KeyboardArrowDownOutlined />,
    subNav: [
      {
        id: 1,
        title: "Transaction History",
        to: "/history",
      },
      {
        id: 2,
        title: "Pending Transactions",
        to: "/transactions-pending",
      },
      {
        id: 3,
        title: "General Market",
        to: "/market",
      },
      {
        id: 4,
        title: "Find Transaction",
        to: "/findtransaction",
      },
      {
        id: 5,
        title: "Add Airtime Transaction",
        to: "/airtime",
      },
      {
        id: 6,
        title: "Add Data Transaction",
        to: "/add-data",
      },
      {
        id: 7,
        title: "Airtime Converter",
        to: "/airtime-converter",
      },
      {
        id: 8,
        title: "Reverse Transaction",
        to: "/reverse-transaction",
      },
      {
        id: 9,
        title: "P Charges",
        to: "/charges",
      },
    ],
  },
  {
    id: 3,
    title: "Wallet",
    icon: (
      <AccountBalanceWalletOutlined
        style={{
          fontSize: "20px",
          color: "#bcc7cd",
        }}
      />
    ),
    iconClosed: <KeyboardArrowRightOutlined />,
    iconOpen: <KeyboardArrowDownOutlined />,
    subNav: [
      {
        id: 1,
        title: "Credit User",
        to: "/addfund",
      },
      {
        id: 2,
        title: "Wallet",
        to: "/wallet",
      },
      {
        id: 3,
        title: "Withdrawal",
        to: "/withdrawal",
      },
    ],
  },
  {
    id: 4,
    title: "Users",
    icon: (
      <GroupOutlined
        style={{
          fontSize: "20px",
          color: "#bcc7cd",
        }}
      />
    ),
    iconClosed: <KeyboardArrowRightOutlined />,
    iconOpen: <KeyboardArrowDownOutlined />,
    subNav: [
      {
        id: 1,
        title: "Users",
        to: "/users",
      },
      {
        id: 2,
        title: "Search User(s)",
        to: "/find-users",
      },
      {
        id: 3,
        title: "Agent Payment",
        to: "/agent-payment",
      },
      {
        id: 4,
        title: "Login Attempts",
        to: "/",
      },
      {
        id: 5,
        title: "Agents",
        to: "/agents",
      },
      {
        id: 6,
        title: "Resellers",
        to: "/resellers",
      },
      {
        id: 7,
        title: "Pending Request",
        to: "/pending_request",
      },
      {
        id: 8,
        title: "GM Blocked",
        to: "/gm-block",
      },
      {
        id: 9,
        title: "Dormant Users",
        to: "/dormant-users",
      },
      {
        id: 10,
        title: "Referral Upgrade",
        to: "/referral-upgrade",
      },
    ],
  },
  {
    id: 5,
    title: "Verification",
    icon: (
      <EventAvailableOutlined
        style={{
          fontSize: "20px",
          color: "#bcc7cd",
        }}
      />
    ),
    iconClosed: <KeyboardArrowRightOutlined />,
    iconOpen: <KeyboardArrowDownOutlined />,
    subNav: [
      {
        id: 1,
        title: "Server 1 Airtime",
        to: "/server1",
      },
      {
        id: 2,
        title: "Server 1b Airtime",
        to: "/server1b",
      },
      {
        id: 3,
        title: "Server 1 Data",
        to: "/serverdt",
      },
      {
        id: 4,
        title: "Server 2",
        to: "/server2",
      },
      {
        id: 5,
        title: "Server 3",
        to: "/server3",
      },
      {
        id: 6,
        title: "Server 4",
        to: "/server 4",
      },
      {
        id: 7,
        title: "Server 5",
        to: "/server 5",
      },
      {
        id: 8,
        title: "Server 6",
        to: "/server6",
      },
      {
        id: 9,
        title: "Server 8 Transactions",
        to: "/server8",
      },
      {
        id: 10,
        title: "Server 10",
        to: "/server10",
      },
      {
        id: 11,
        title: "Server 11",
        to: "/server11",
      },
    ],
  },
  {
    id: 6,
    title: "Virtual Accounts",
    to: "/",
    icon: (
      <TakeoutDining
        style={{
          fontSize: "20px",
          color: "#bcc7cd",
        }}
      />
    ),
    iconClosed: <KeyboardArrowRightOutlined />,
    iconOpen: <KeyboardArrowDownOutlined />,
  },
  {
    id: 7,
    title: "Payment Links",
    to: "/payment",
    icon: (
      <TakeoutDining
        style={{
          fontSize: "20px",
          color: "#bcc7cd",
        }}
      />
    ),
    iconClosed: <KeyboardArrowRightOutlined />,
    iconOpen: <KeyboardArrowDownOutlined />,
  },
  {
    id: 8,
    title: "Service Control",
    icon: (
      <Settings
        style={{
          fontSize: "20px",
          color: "#bcc7cd",
        }}
      />
    ),
    iconClosed: <KeyboardArrowRightOutlined />,
    iconOpen: <KeyboardArrowDownOutlined />,
    subNav: [
      {
        id: 1,
        title: "MTN Data Plans",
        to: "/datalist/MTN",
      },
      {
        id: 2,
        title: "AIRTEL Data Plans",
        to: "/datalist/AIRTEL",
      },
      {
        id: 3,
        title: "GLO Data Plans",
        to: "/datalist/GLO",
      },
      {
        id: 4,
        title: "9MOBILE Data Plans",
        to: "/datalist/9MOBILE",
      },
      {
        id: 5,
        title: "TV Plans",
        to: "/tvcontrol",
      },
      {
        id: 6,
        title: "Electricity Control",
        to: "/electricitycontrol",
      },
    ],
  },
  {
    id: 9,
    title: "Reseller Control",
    icon: (
      <Settings
        style={{
          fontSize: "20px",
          color: "#bcc7cd",
        }}
      />
    ),
    iconClosed: <KeyboardArrowRightOutlined />,
    iconOpen: <KeyboardArrowDownOutlined />,
    subNav: [
      {
        id: 1,
        title: "Airtime Control",
        to: "/airtime-control",
      },
      {
        id: 2,
        title: "Data Plans",
        to: "/data-control",
      },
      {
        id: 3,
        title: "TV Plans",
        to: "/tvcontrol",
      },
    ],
  },
  {
    id: 10,
    title: "Reports",
    icon: (
      <Report
        style={{
          fontSize: "20px",
          color: "#bcc7cd",
        }}
      />
    ),
    iconClosed: <KeyboardArrowRightOutlined />,
    iconOpen: <KeyboardArrowDownOutlined />,
    subNav: [
      {
        id: 1,
        title: "Yearly Report",
        to: "/",
      },
      {
        id: 2,
        title: "Montly Report",
        to: "/",
      },
      {
        id: 3,
        title: "Daily Report",
        to: "/",
      },
    ],
  },
];

