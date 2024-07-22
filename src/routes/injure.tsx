import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Stack } from "@mui/material";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import H4 from "#/components/H4";

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
        <H4>ケガをした場所</H4>
        <Box>右ヒザ</Box>
        <H4>日時</H4>
        <Box>7月21日(日) 17:30</Box>
        <H4>痛みの強さ</H4>
        <Box>30</Box>
        <H4>痛みの深さ</H4>
        <Box>30</Box>
        <H4>ケガの情報</H4>
        <Box>切り返しをしたときに、ヒザが痛くなった。</Box>
      </Box>
    );
  },
});
