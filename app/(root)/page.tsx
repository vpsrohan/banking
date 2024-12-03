import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalance from "@/components/TotalBalance";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "rohan",
    lastName: "vps",
    email: "vpsr@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "guest"}
            subtext="access and manage your transaction"
          />

          <TotalBalance
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12500}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.3 }, { currentBalance: 100 }]}
      />
    </section>
  );
};

export default Home;
