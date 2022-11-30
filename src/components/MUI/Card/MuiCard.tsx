import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type Props = {
  image: string;
  title: string;
  description: string;
  url: string;
};

const MuiCard = ({ image, title, description, url }: Props) => {
  const goToUrl = () => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: "#263138",
        }}
      >
        <CardActionArea onClick={goToUrl}>
          <CardMedia component="img" height="140" image={image} alt={title} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                color: "#f5f5f5",
                paddingLeft: "8px",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: "#eeeeee",
                fontWeight: "300",
                opacity: "0.5",
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default MuiCard;
