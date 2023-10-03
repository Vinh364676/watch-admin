import { Card } from "antd";
import order from "../../../../assets/images/home/totalOrder.svg";
import delivery from  "../../../../assets/images/home/totalDelivery.svg";
import totalreturn from  "../../../../assets/images/home/return.svg";
import revenue from  "../../../../assets/images/home/totalRevenue.svg";
import { dispatch, useSelector } from "../../../../redux/store";
import { useEffect } from "react";
import { getBrand } from "../../../../redux/slices/brand";
type Props = {};
const TestComponent = (props: Props) => {
    const {brand} = useSelector(state => state.brand);
    console.log(brand)
    useEffect(() => {
        dispatch(
          getBrand({
            pageIndex: 1,
            pageSize: 100,
          })
        );
      }, []);
  return (
    <>
    {brand.map(b => (
        <div>{b.name}</div>
        
       ))}
    </>
    
  );
};
export default TestComponent;
