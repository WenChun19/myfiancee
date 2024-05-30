import { getServerSession } from "next-auth";
import PortfolioTable from "../components/PortfolioTable";
import prisma from "../libs/prismadb";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { unstable_noStore } from "next/cache";

const getPortfolios = async (id: string) => {
  try {
    const portfolios = await prisma.portfolio.findMany({
      where: {
        userId: id,
      },
    });
    return {
      status: "success",
      portfolios,
    };
  } catch (error) {
    return {
      status: "error",
      portfolios: [],
    };
  }
};

const Portfolio = async () => {
  unstable_noStore();
  const session = await getServerSession(authOptions);
  const id = session?.user?.id ?? null;

  const response = await getPortfolios(id);
  const { portfolios = [] } = response;

  return (
    <section className="w-3/4 mt-20 mx-auto">
      <PortfolioTable data={portfolios} />
    </section>
  );
};

export default Portfolio;
