import Banner from "../components/HomeComponents/Banner/Banner";
import SalariesContainer from "../components/HomeComponents/Salaries/SalariesContainer";
import Newsletter from "../components/HomeComponents/Newsletter/Newsletter";

export default function Home() {
  return (
    <div>
      {/* banner  */}
      <Banner />
      {/* SalariesContainer */}
      <SalariesContainer />
      {/* newsletter  */}
      <Newsletter />
    </div>
  );
}
