import { useParams } from "react-router-dom";

interface IProps {}

function ProdcutDetails({}: IProps) {
    const {id}=useParams();
  return (
    <>
      <h1>Product {id}</h1>
    </>
  );
}

export default ProdcutDetails;
