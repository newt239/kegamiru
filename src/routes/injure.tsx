import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Stack, Typography } from "@mui/material";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/injure")({
  component: () => {
    const navigate = useNavigate({ from: "/" });
    return (
      <Box px={2}>
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <Button
            onClick={() => navigate({ to: "/list" })}
            startIcon={<ArrowBackIcon />}
            variant="text"
          >
            戻る
          </Button>
          <Button
            onClick={() => navigate({ to: "/add" })}
            startIcon={<EditIcon />}
            variant="text"
          >
            編集する
          </Button>
        </Stack>
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginTop: "1rem",
          }}
        >
          ケガをした場所
        </Typography>
        <Box>右ヒザ</Box>
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginTop: "1rem",
          }}
        >
          日時
        </Typography>
        <Box>7月21日(日) 17:30</Box>
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginTop: "1rem",
          }}
        >
          痛みの強さ
        </Typography>
        <Box>30</Box>
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginTop: "1rem",
          }}
        >
          痛みの深さ
        </Typography>
        <Box>30</Box>
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginTop: "1rem",
          }}
        >
          ケガの情報
        </Typography>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Duo Reges:
          constructio interrete. Quae cum dixisset paulumque institisset, Quid
          est? Quae cum essent dicta, discessimus.
        </Box>
      </Box>
    );
  },
});
