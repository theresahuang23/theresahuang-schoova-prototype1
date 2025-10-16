import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
  Divider,
  Stack,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const categoryColors = {
  wellness: { bg: '#fef3c7', text: '#f59e0b', label: 'Wellness' },
  schedule: { bg: '#dbeafe', text: '#3b82f6', label: 'Schedule' },
  focus: { bg: '#d1fae5', text: '#10b981', label: 'Focus' },
};

export const RecommendationCard = ({
  recommendation,
  onAccept,
  onModify,
  onDecline,
  isAccepted,
}) => {
  const categoryStyle = categoryColors[recommendation.category] || categoryColors.wellness;

  return (
    <Card
      sx={{
        mb: 2,
        transition: 'all 0.3s ease',
        border: isAccepted ? '2px solid #10b981' : '1px solid #e2e8f0',
        backgroundColor: isAccepted ? '#f0fdf4' : '#ffffff',
        '&:hover': {
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {recommendation.title}
              </Typography>
              {isAccepted && (
                <CheckCircleIcon sx={{ color: 'success.main', fontSize: 24 }} />
              )}
            </Box>
            <Chip
              label={categoryStyle.label}
              size="small"
              sx={{
                backgroundColor: categoryStyle.bg,
                color: categoryStyle.text,
                fontWeight: 600,
              }}
            />
          </Box>
        </Box>

        <Typography variant="body2" color="textSecondary" sx={{ mb: 2, lineHeight: 1.6 }}>
          {recommendation.rationale}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <TrendingUpIcon sx={{ fontSize: 20, color: 'success.main' }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Expected Impact
            </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary">
            {recommendation.expectedImpact}
          </Typography>
        </Box>

        <Typography variant="caption" color="textSecondary" sx={{ display: 'block', mb: 2 }}>
          📅 {recommendation.timeSlot}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            color="success"
            size="small"
            startIcon={<CheckCircleIcon />}
            onClick={() => onAccept(recommendation.id)}
            disabled={isAccepted}
            sx={{ flex: 1 }}
          >
            Accept
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            startIcon={<EditIcon />}
            onClick={() => onModify(recommendation.id)}
            sx={{ flex: 1 }}
          >
            Modify
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<ClearIcon />}
            onClick={() => onDecline(recommendation.id)}
            sx={{ flex: 1 }}
          >
            Decline
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
