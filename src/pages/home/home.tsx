import { RouteChildrenProps } from "react-router";
import { LayoutProps } from "../../components/views/layout/route-layout";
import "./home.scss"
import Dashboard from "../../components/layout/Dashboard";
import TotalStatistic from "../../components/views/home/statistic/Statistic";


interface Props extends RouteChildrenProps, LayoutProps { }

export default function HomePage(props: Props) {
  return (
    <h1 className="homepage" >
      <TotalStatistic/>
    </h1>
  )
}

