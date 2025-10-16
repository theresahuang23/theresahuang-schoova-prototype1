import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export const KPITile = ({ label, value, unit, trend, icon: Icon, color = 'primary' }) => {
  const isTrendingUp = trend > 0;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 2,
              backgroundColor: `${color}.light`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon sx={{ color: `${color}.main`, fontSize: 28 }} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              color: isTrendingUp ? 'success.main' : 'error.main',
              fontWeight: 600,
              fontSize: '0.875rem',
            }}
          >
            {isTrendingUp ? <TrendingUpIcon fontSize="small" /> : <TrendingDownIcon fontSize="small" />}
            {Math.abs(trend)}%
          </Box>
        </Box>

        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          {label}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {value}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {unit}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
