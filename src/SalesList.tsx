import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Box,Card,CardActionArea,CardActions,CardMedia,CardContent,Typography,Divider,IconButton,Chip} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import KiaLogo from './assets/images/kia_logo.png';
import HyundaiLogo from './assets/images/hyundai.png';

const useStyles = makeStyles({
	card: {
		background: '#EDEDED',
		boxShadow: 'none'
	},
	seemore: {
		color:'#B09862',
		marginLeft: 'auto'
	},
	chip: {
		background:'#B09862',
		borderRadius: '5px',
		color:'#fff',
		marginLeft:'10px'
	},
	textBrown: {
		color:'#B09862',
	},
	logo: {
		height: '50px',
		objectFit:'contain'
	}
  });

interface SaleItem {
    url       : string,
    name      : string,
    tag       : string,
    code      : string,
    logo      : string,
    date      : string,
    distance  : number,
    createdAt : string,
    dealer    : string
  }

interface Props {
	sale_items: SaleItem[],
	total_pages: number,
	current_page: number,
	handlePaginate: (e: React.ChangeEvent<unknown>, value: number) => void
}


export const SalesList: React.FC<Props> = ({sale_items,total_pages,current_page,handlePaginate}) => {
	const classes = useStyles();
	return (
		<Box my={6}>
			<Grid
				container
			>
				{
					sale_items.length && sale_items.map(item => (
						<Grid xs={12} sm={6} md={4} item>
							<Box m={2}>
								<Card
									className={classes.card}
								>
									<CardActionArea>
										<CardMedia
											component="img"
											alt={item.name}
											height="150"
											image={item.url}
											title={item.name}
										/>
										<CardContent>
											<Box mb={2}>
												<Grid 
													container
													direction="row"
													justify="space-between"
													alignItems="center"
												>
													<Box>
														<Typography variant="subtitle1">
															{item.name}
															<Chip size="small" className={classes.chip} label={item.tag} />
														</Typography>
														<Typography gutterBottom variant="body2" color="textPrimary">
															{item.code}
														</Typography>
													</Box>
													<img 
														className={classes.logo}
														alt={item.name}
														src={item.logo === 'kia' ? KiaLogo : HyundaiLogo}
													>
													</img>
												</Grid>
											</Box>
											<Typography gutterBottom  variant="body2" color="textSecondary" component="p">
												{item.date} | {item.distance} Km
											</Typography>
											<Typography gutterBottom variant="body2" color="textSecondary" component="p">
												Created On: {item.createdAt}
											</Typography>
										</CardContent>
										<Divider light={true}></Divider>
										<CardActions disableSpacing>
											<Grid
												container
												direction="column"
											>
												<Typography gutterBottom variant="body2" component="p" className={classes.textBrown}>
													Bidding Session Details
												</Typography>
												<Typography gutterBottom variant="body2" component="p" color="textSecondary">
													Award Dealer: {item.dealer}
												</Typography>
											</Grid>
											<IconButton
												className={classes.seemore}
											>
												<ArrowForwardIcon />
											</IconButton>
										</CardActions>
									</CardActionArea>
								</Card>
							</Box>	
						</Grid>
					))
				}
			</Grid>
			<Grid 
				container
				direction="row"
				justify="flex-end"
			>
				<Box my={3}>
					<Pagination  
						count={total_pages} 
						page={current_page} 
						onChange={handlePaginate} 
						variant="outlined" 
						shape="rounded"
					/>
				</Box>
			</Grid>
		</Box>
	);
}