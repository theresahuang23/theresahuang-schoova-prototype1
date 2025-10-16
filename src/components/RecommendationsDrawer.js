import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Stack,
  Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { RecommendationCard } from './RecommendationCard';

export const RecommendationsDrawer = ({
  open,
  onClose,
  recommendations,
  onAccept,
  onModify,
  onDecline,
  acceptedRecommendations,
}) => {
  const acceptedCount = acceptedRecommendations.length;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 450 },
          maxWidth: '100%',
        },
      }}
    >
      <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightbulbIcon sx={{ color: 'warning.main', fontSize: 28 }} />
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              AI Recommendations
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Stats */}
        <Box sx={{ mb: 3, p: 2, backgroundColor: '#f0f9ff', borderRadius: 2 }}>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
            Personalized for you based on your activity
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Chip
              label={`${acceptedCount} Accepted`}
              color="success"
              variant="outlined"
              size="small"
            />
            <Chip
              label={`${recommendations.length} Total`}
              variant="outlined"
              size="small"
            />
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Recommendations List */}
        <Stack sx={{ flex: 1, overflowY: 'auto' }}>
          {recommendations.map((rec) => (
            <RecommendationCard
              key={rec.id}
              recommendation={rec}
              onAccept={onAccept}
              onModify={onModify}
              onDecline={onDecline}
              isAccepted={acceptedRecommendations.includes(rec.id)}
            />
          ))}
        </Stack>

        {/* Footer */}
        <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #e2e8f0' }}>
          <Typography variant="caption" color="textSecondary">
            💡 Tip: Accept recommendations to add them to your schedule. Your choices help us improve future suggestions.
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};
