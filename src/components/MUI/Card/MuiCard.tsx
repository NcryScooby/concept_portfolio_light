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
          borderRadius: "8px",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
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
                paddingLeft: "8px",
                fontSize: "1rem",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontWeight: "300",
                fontSize: "0.9rem !important",
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
