import { Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const H4: React.FC<Props> = ({ children }) => {
  return (
    <Typography
      sx={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginTop: "1rem",
      }}
      variant="h4"
    >
      {children}
    </Typography>
  );
};

export default H4;
