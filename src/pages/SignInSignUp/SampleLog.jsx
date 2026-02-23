import { useLocation } from "react-router-dom";

const SampleLog = () => {
  const location = useLocation();

  console.log(location)
  console.log("Path:", location.pathname)

  return(
    <>
      <p>Path: {location.pathname} </p>
    </>
  )
}

export default SampleLog;