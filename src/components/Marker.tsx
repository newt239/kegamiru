import { Box } from "@mui/material";

type MarkerProps = {
  top: string;
  left: string;
  onClick?: () => void;
};

const Marker: React.FC<MarkerProps> = ({ top, left, onClick }) => {
  return (
    <Box
      onClick={onClick}
      style={{
        position: "absolute",
        top,
        left,
        width: "30px",
        height: "30px",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        backgroundColor: "red",
      }}
    ></Box>
  );
};

export default Marker;
