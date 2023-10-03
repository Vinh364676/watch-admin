import { RouteChildrenProps } from "react-router";
import { LayoutProps } from "../../components/views/layout/route-layout";
import "./home.scss"
import Dashboard from "../../components/layout/Dashboard";
import TotalStatistic from "../../components/views/home/statistic/Statistic";
import BestSale from "../../components/views/home/bestSale/BestSale";
import TestComponent from "../../components/views/home/chart/test";
// import MyChart from "../../components/views/home/chart/ChartLayout";
// import LineChart from "../../components/views/home/chart/ChartLayout";


interface Props extends RouteChildrenProps, LayoutProps { }

export default function HomePage(props: Props) {
  return (
    <div className="homepage" >
      <TotalStatistic/>
      <BestSale/>
      <TestComponent/>
      {/* <LineChart/> */}
    </div>
  )
}

