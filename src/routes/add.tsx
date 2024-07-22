import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button, Chip, Slider, Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import dayjs from "dayjs";

import bodyImage2 from "#/assets/body2.png";
import H5 from "#/components/H5";
import Marker from "#/components/Marker";

export const Route = createFileRoute("/add")({
  component: () => {
    const navigate = useNavigate({ from: "/" });
    return (
      <>
        <Box px={2}>
          <H5>ケガをした場所</H5>
          <Stack sx={{ position: "relative" }}>
            <img src={bodyImage2} />
            <Marker left="78%" top="47%" />
          </Stack>
          <TextField
            defaultValue="右ヒザ"
            fullWidth
            id="outlined-basic"
            sx={{ mb: 2 }}
            variant="outlined"
          />
          <H5>ケガの情報</H5>
          <TextField
            fullWidth
            id="outlined-multiline-flexible"
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <H5>日時</H5>
          <Stack direction="row" gap={2} mb={2}>
            <DatePicker
              defaultValue={dayjs("2024/07/22")}
              views={["year", "month", "day"]}
            />
            <TimePicker
              defaultValue={dayjs("2022-04-17T15:30")}
              format="HH:mm"
            />
          </Stack>
          <H5>痛みの強さ</H5>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            marks
            max={110}
            min={10}
            shiftStep={30}
            step={10}
            valueLabelDisplay="auto"
          />
          <H5>痛みの深さ</H5>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            marks
            max={110}
            min={10}
            shiftStep={30}
            step={10}
            valueLabelDisplay="auto"
          />
          <H5>痛み方</H5>
          <Stack direction="row" gap={1} my={2}>
            <Chip color="primary" label="断続的" />
            <Chip label="持続的" />
            <Chip color="primary" label="ずきずき" />
            <Chip label="じんじん" />
          </Stack>
          <Button
            fullWidth
            onClick={() => navigate({ to: "/list" })}
            startIcon={<AddCircleOutlineIcon />}
            sx={{ mt: 2 }}
            variant="contained"
          >
            登録する
          </Button>
        </Box>
      </>
    );
  },
});
