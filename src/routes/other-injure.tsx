import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Stack } from "@mui/material";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import H4 from "#/components/H4";

export const Route = createFileRoute("/other-injure")({
  component: () => {
    const navigate = useNavigate({ from: "/" });
    return (
      <Box px={2}>
        <Stack direction="row" justifyContent="flex-start" mb={2}>
          <Button
            onClick={() => navigate({ to: "/search" })}
            startIcon={<ArrowBackIcon />}
            variant="text"
          >
            検索結果に戻る
          </Button>
        </Stack>
        <H4>ケガをした場所</H4>
        <Box>右ヒザ</Box>
        <H4>日時</H4>
        <Box>7月21日(日) 17:30</Box>
        <H4>痛みの強さ</H4>
        <Box>30</Box>
        <H4>痛みの深さ</H4>
        <Box>30</Box>
        <H4>ケガの情報</H4>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Duo Reges:
          constructio interrete. Quae cum dixisset paulumque institisset, Quid
          est? Quae cum essent dicta, discessimus.
        </Box>
        <H4>コメント</H4>
        <Box>コメントはありません</Box>
      </Box>
    );
  },
});
