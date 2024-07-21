import { Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const H5: React.FC<Props> = ({ children }) => {
  return (
    <Typography
      sx={{
        fontSize: "1.2rem",
        marginTop: "0.5rem",
      }}
      variant="h5"
    >
      {children}
    </Typography>
  );
};

export default H5;
