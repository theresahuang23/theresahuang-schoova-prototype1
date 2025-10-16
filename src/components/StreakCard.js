import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, Grid } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export const StreakCard = ({ current, allTimeBest, nextMilestone }) => {
  const progressToNextMilestone = (current / nextMilestone) * 100;

  return (
    <Card
      sx={{
        background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
        color: 'white',
        height: '100%',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <LocalFireDepartmentIcon sx={{ fontSize: 32 }} />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Your Streak
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={6}>
            <Box>
              <Typography variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                Current Streak
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                {current}
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                days
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                All-Time Best
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                {allTimeBest}
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                days
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Next Milestone
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {current} / {nextMilestone}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progressToNextMilestone}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#10b981',
                borderRadius: 4,
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
