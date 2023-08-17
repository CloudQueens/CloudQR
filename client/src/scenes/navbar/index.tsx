import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from '../../components/FlexBetween';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

type Props = {};

const NavBar = (props: Props) => {
	const { palette } = useTheme();
	const [selected, setSelected] = useState('dashboard');
	return (
		<FlexBetween mb='.25rem' p='.5rem 0rem' color={palette.grey[300]}>
			{/* Left Side */}
			<FlexBetween gap='.75rem'>
				<CurrencyExchangeIcon sx={{ fontSize: '28px' }} />
				<Typography variant='h4' fontSize='16px'>
					{' '}
					Cloud Accountant
				</Typography>
			</FlexBetween>
			{/* Rigth Side */}
			<FlexBetween gap='2rem'>
				<Box sx={{ '&:hover': { color: palette.primary[100] } }}>
					<Link
						to='/'
						onClick={() => setSelected('dashboard')}
						style={{
							color: selected === 'dashboard' ? 'inherit' : palette.grey[700],
							textDecoration: 'inherit',
						}}
					>
						dashboard
					</Link>
				</Box>
				<Box sx={{ '&:hover': { color: palette.primary[100] } }}>
					<Link
						to='/predictions'
						onClick={() => setSelected('predictions')}
						style={{
							color: selected === 'predictions' ? 'inherit' : palette.grey[700],
							textDecoration: 'inherit',
						}}
					>
						predictions
					</Link>
				</Box>
			</FlexBetween>
		</FlexBetween>
	);
};

export default NavBar;
