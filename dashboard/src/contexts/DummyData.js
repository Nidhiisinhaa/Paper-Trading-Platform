export const initialUserState = {
  userId: "U12345",
  name: "John Doe",
  username: "@johndoe",
  email: "johndoe@gmail.com",

  funds: {
    availableCash: 7489.44,
    collateral: 0.00,
    currency: "INR",
  },

  // LAST 4 TRANSACTIONS ONLY → for quick preview
  recentTransactions: [
    {
      id: "TXN1001",
      date: "2025-01-12 10:23:45",
      type: "funds_added",
      amount: 5000,
      status: "successful",
      refNo: "DUMMY12987342",
      remarks: "Dummy funds added"
    },
    {
      id: "TXN1002",
      date: "2025-01-15 14:55:12",
      type: "withdrawal",
      amount: 2000,
      status: "pending",
      refNo: "DUMMY5432378",
      remarks: "Withdrawal initiated (paper mode)"
    },
    {
      id: "TXN1003",
      date: "2025-01-17 09:11:32",
      type: "funds_added",
      amount: 10000,
      status: "successful",
      refNo: "DUMMY40981273",
      remarks: "Funds added for paper trading"
    },
    {
      id: "TXN1004",
      date: "2025-01-19 18:02:10",
      type: "withdrawal",
      amount: 5000,
      status: "failed",
      refNo: "DUMMY9081231",
      remarks: "Withdrawal failed (test case)"
    }
  ],
};
