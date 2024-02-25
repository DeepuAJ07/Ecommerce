import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sucess() {
  const [count, setcount] = useState(15);
  const Navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      setcount((count) => count - 1);
    }, 1000);
    setTimeout(() => Navigate("/"), 15000);
  }, [Navigate]);
  return <div>
    <h4>Order Placed</h4>
    You will be redirect with in {count} secs</div>;
}
