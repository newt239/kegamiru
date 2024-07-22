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
          2024年7月21日、東京スタジアムでのアメフトの練習中に、午後3時ごろ右膝を負傷しました。チームのオフェンス練習中、ランニングバックとしてボールを持って走行している際にタックルを受け、その際に右膝に激しい衝撃を受けました。着地の際に膝が不自然に曲がり、鋭い痛みが走りました。痛みの程度は10段階で8に相当し、膝が腫れて動かすのが困難で、歩行も困難な状態でした。
        </Box>
        <Box>
          負傷直後、プレーを中断し、膝を動かさないように注意しました。すぐに氷を用意し、20分間冷却を行い、腫れを抑えるために適度な圧力でアイスパックを膝に当てました。さらに、弾性包帯で膝を包み、腫れと痛みを抑えました。この際、包帯はきつすぎず、循環が妨げられないように巻きました。また、膝を心臓より高い位置に保ち、腫れを抑えるよう努めました。
        </Box>
        <Box>
          翌日、整形外科を受診し、X線検査とMRI検査を受けた結果、内側側副靱帯（MCL）の部分断裂が判明しました。医師の指示に従い、安静を保ちながら、理学療法士の指導のもとでリハビリを開始しました。痛みが和らぐまでの期間、軽いストレッチと筋力トレーニングを行い、痛みと炎症を抑えるために処方されたNSAIDs（非ステロイド性抗炎症薬）を服用しました。膝の安定を保つために、ブレースを装着しました。
        </Box>
        <Box>
          リハビリ計画として、最初の週は軽いストレッチと膝周りの筋肉強化トレーニングを行い、次の2〜4週間で徐々に運動量を増やし、膝の可動域と筋力を回復させました。1か月後には再評価と進捗確認を行い、医師と理学療法士の指導のもとでさらなるリハビリプランを調整しました。
        </Box>
        <Box>
          再発防止のため、リハビリ後も継続的に筋力トレーニングを行い、膝に負担をかけないように、適切なウォーミングアップとクールダウンを徹底しました。このようにして、怪我からの回復を図り、再びアメフトをプレーできるよう努めました。
        </Box>
        <H4>コメント</H4>
        <Box>コメントはありません</Box>
        <h4>関連するケガ</h4>
        <Box>関連するケガはありません</Box>
      </Box>
    );
  },
});
