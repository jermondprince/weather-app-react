import Button from "react-bootstrap/Button";
import axios from "axios";

function SubmitButton({ url, setData, setLocation }) {
  const search = (e) => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setLocation("");
  };

  return (
    <>
      <Button as="input" type="submit" value="Submit" onClick={search} />
    </>
  );
}

export default SubmitButton;
