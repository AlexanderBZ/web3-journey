import Banner from "../components/HomeComponents/Banner/Banner";
import SalariesContainer from "../components/HomeComponents/Salaries/SalariesContainer";
import Newsletter from "../components/HomeComponents/Newsletter/Newsletter";
import { getSalaries } from "./api/airtable";

export default function Home({ data }) {
  return (
    <div>
      {/* banner  */}
      <Banner />
      {/* SalariesContainer */}
      <SalariesContainer data={data} />
      {/* newsletter  */}
      <Newsletter />
    </div>
  );
}

export async function getStaticProps() {
  // Get user id
  const salaries = await getSalaries();

  return {
    props: {
      data: salaries,
      revalidate: 900,
    },
  };
}
