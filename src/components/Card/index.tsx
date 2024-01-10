import { Box, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type Props = {
    image: string;
    title: string;
    description: string;
    price: number;
}
export default function ActionAreaCard({ image, title, description, price }: Props) {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="h6" component="div">
                            ${price}
                        </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}