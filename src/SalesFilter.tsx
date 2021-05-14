import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Box,TextField,InputAdornment,FormControl,Button,Select,MenuItem} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
	button: {
		background: '#B09862',
		border: '1px solid #B09862',
		height: '40px',
		borderRadius: '5px',
		textTransform: 'none',
		justifyContent: 'start',
		boxShadow: 'none',
		transition: 'all 0.8s easeInOut',
		'&:hover':{
			background:'#fff',
			color:'#B09862',
			transition: 'all 0.8s easeInOut',
		}
	},
	searchIcon: {
		color:'grey',
	},
	buttonIcon:{
		fontSize: '14px',
		marginRight: '8px'
	},
	borderBrown: {
		borderColor: '#B09862!important'
	},
	input: {
		height:'20px!important',
		padding: '10px 15px',
		borderRadius: '5px',
		fontSize: '0.875rem'
	},
	select: {
		height:'20px!important',
		padding: '10px 15px',
		background: '#B09862!important',
		borderRadius: '5px!important',
		color: '#fff!important',
		fontSize: '0.875rem'
	},
	multiSelectIcon: {
		color:'#fff'
	}
  });

interface Props {
	filter				: string | unknown,
	keyword				: string,
	handleKeywordChange	: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
	handleFilterChange	: (e: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => void,
	handleExcelClick	: () => void,
	handlePdfClick		: () => void,
	handleCreate		: () => void,
}

export const SalesFilter: React.FC<Props> = ({filter,keyword,handleKeywordChange,handleFilterChange,handleExcelClick,handlePdfClick,handleCreate}) => {
	const classes = useStyles();
	return (
		<Box my={6}>
			<Grid
				container
				direction="row"
				justify="space-between"
				alignItems="center"
			>
				<Grid sm={12} md={'auto'} item>
					<Box my={1} color="text.secondary">All Sales Transactions</Box>
				</Grid>
				<Grid sm={12} md={'auto'} item>
					<Grid container>
						<Grid xs={12} sm={6} md={'auto'} item>
							<Box px={1} my={1} height="100%">
								<TextField
									variant="outlined"
									value={keyword}
									placeholder="Search"
									fullWidth={true}
									InputProps={{
										classes: {
											notchedOutline: classes.borderBrown
										},
										startAdornment: (
											<InputAdornment position="start">
												<SearchIcon className={classes.searchIcon}/>
											</InputAdornment>
										),
									}}
									inputProps={{
										className: classes.input
									}}
									onChange={e => handleKeywordChange(e)}
								/>
							</Box>
						</Grid>
						<Grid xs={12} sm={6} md={'auto'} item>
							<Box px={1} my={1} height="100%">
								<FormControl
									fullWidth={true}
								>
									<Select
									disableUnderline
									value={filter}
									variant="filled"
									onChange={e => handleFilterChange(e)}
									inputProps={{ 
										classes: {
											root: classes.select,
											icon: classes.multiSelectIcon,
										},
										'aria-label': 'Without label',
										underline: {
											"&&&:before": {
												borderBottom: "none!important"
											},
											"&&:after": {
												borderBottom: "none!important"
											}
										}
									}}
									>
										<MenuItem value="-">
											Filter By:
										</MenuItem>
										<MenuItem value='brand'>Brand</MenuItem>
										<MenuItem value='type'>Type </MenuItem>
									</Select>
								</FormControl>
							</Box>
						</Grid>
						<Grid xs={12} sm={6} md={'auto'} item>
							<Box px={1} my={1} height="100%">
								<Button 
									variant="contained" 
									fullWidth={true}
									color="primary"
									className={classes.button}
									onClick={handleExcelClick}
								>
									<GetAppIcon className={classes.buttonIcon} />
									Export in Excel
								</Button>
							</Box>
						</Grid>
						<Grid xs={12} sm={6} md={'auto'} item>
							<Box px={1} my={1} height="100%">
								<Button 
									variant="contained" 
									fullWidth={true}
									color="primary"
									className={classes.button}
									onClick={handlePdfClick}
								>
									<GetAppIcon className={classes.buttonIcon} />
									Export in Pdf
								</Button>
							</Box>
						</Grid>
						<Grid xs={12} sm={6} md={'auto'} item>
							<Box px={1} my={1} height="100%">
								<Button 
									variant="contained" 
									fullWidth={true}
									color="primary"
									className={classes.button}
									onClick={handleCreate}
								>
									<AddIcon className={classes.buttonIcon} />
									Create
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}