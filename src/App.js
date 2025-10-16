import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  AppBar,
  Toolbar,
  Avatar,
  Stack,
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SchoolIcon from '@mui/icons-material/School';

import { theme } from './theme';
import { Toast } from './components/Toast';
import { KPITile } from './components/KPITile';
import { StreakCard } from './components/StreakCard';
import { DailyStudyChart, TasksByCategoryChart, WorkBreakRatioChart } from './components/Charts';
import { RecommendationsDrawer } from './components/RecommendationsDrawer';
import {
  mockDailyStudyData,
  mockTasksByCategory,
  mockWorkBreakRatio,
  mockStreakData,
  mockKPIs,
  mockRecommendations,
} from './mockData';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [acceptedRecommendations, setAcceptedRecommendations] = useState([]);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState('success');
  const [plannedBlocks, setPlannedBlocks] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedAccepted = localStorage.getItem('acceptedRecommendations');
    const savedBlocks = localStorage.getItem('plannedBlocks');

    if (savedAccepted) {
      setAcceptedRecommendations(JSON.parse(savedAccepted));
    }
    if (savedBlocks) {
      setPlannedBlocks(JSON.parse(savedBlocks));
    }
  }, []);

  const handleAcceptRecommendation = (recId) => {
    const recommendation = mockRecommendations.find((r) => r.id === recId);

    if (!acceptedRecommendations.includes(recId)) {
      const updatedAccepted = [...acceptedRecommendations, recId];
      setAcceptedRecommendations(updatedAccepted);
      localStorage.setItem('acceptedRecommendations', JSON.stringify(updatedAccepted));

      // Add to planned blocks
      const newBlock = {
        id: `block-${Date.now()}`,
        title: recommendation.title,
        timeSlot: recommendation.timeSlot,
        category: recommendation.category,
        status: 'scheduled',
      };
      const updatedBlocks = [...plannedBlocks, newBlock];
      setPlannedBlocks(updatedBlocks);
      localStorage.setItem('plannedBlocks', JSON.stringify(updatedBlocks));

      setToastMessage(`✅ "${recommendation.title}" added to your schedule!`);
      setToastSeverity('success');
      setToastOpen(true);
    }
  };

  const handleModifyRecommendation = (recId) => {
    const recommendation = mockRecommendations.find((r) => r.id === recId);
    setToastMessage(`📝 You can modify "${recommendation.title}" in the full scheduler`);
    setToastSeverity('info');
    setToastOpen(true);
  };

  const handleDeclineRecommendation = (recId) => {
    const recommendation = mockRecommendations.find((r) => r.id === recId);
    setToastMessage(`👋 You declined "${recommendation.title}". We'll learn from this!`);
    setToastSeverity('info');
    setToastOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* App Bar */}
      <AppBar position="sticky" sx={{ backgroundColor: '#ffffff', color: '#1e293b', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700,
              }}
            >
              S
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b' }}>
              Schoova
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<LightbulbIcon />}
              onClick={() => setDrawerOpen(true)}
              sx={{ textTransform: 'none' }}
            >
              View Recommendations
            </Button>
            <Avatar sx={{ width: 40, height: 40, backgroundColor: 'primary.main' }}>
              J
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">
          {/* Welcome Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
              Welcome back, Jasper! 👋
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Here's your productivity snapshot for today and beyond.
            </Typography>
          </Box>

          {/* KPI Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Metrics
            </Typography>

            {/* Today */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'textSecondary', mb: 1 }}>
                TODAY
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <KPITile
                    label="Study Minutes"
                    value={mockKPIs.today.studyMinutes}
                    unit="min"
                    trend={8}
                    icon={SchoolIcon}
                    color="primary"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <KPITile
                    label="Tasks Completed"
                    value={mockKPIs.today.tasksCompleted}
                    unit="tasks"
                    trend={12}
                    icon={AssignmentIcon}
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <KPITile
                    label="Breaks Taken"
                    value={mockKPIs.today.breaksTaken}
                    unit="breaks"
                    trend={-5}
                    icon={FitnessCenterIcon}
                    color="success"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <KPITile
                    label="Focus Score"
                    value={mockKPIs.today.focusScore}
                    unit="/100"
                    trend={3}
                    icon={TrendingUpIcon}
                    color="warning"
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Last 7 Days */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'textSecondary', mb: 1 }}>
                LAST 7 DAYS
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <KPITile
                    label="Study Minutes"
                    value={mockKPIs.sevenDays.studyMinutes}
                    unit="min"
                    trend={5}
                    icon={SchoolIcon}
                    color="primary"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <KPITile
                    label="Tasks Completed"
                    value={mockKPIs.sevenDays.tasksCompleted}
                    unit="tasks"
                    trend={8}
                    icon={AssignmentIcon}
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <KPITile
                    label="Breaks Taken"
                    value={mockKPIs.sevenDays.breaksTaken}
                    unit="breaks"
                    trend={-2}
                    icon={FitnessCenterIcon}
                    color="success"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <KPITile
                    label="Focus Score"
                    value={mockKPIs.sevenDays.focusScore}
                    unit="/100"
                    trend={2}
                    icon={TrendingUpIcon}
                    color="warning"
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Last 30 Days */}
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'textSecondary', mb: 1 }}>
                LAST 30 DAYS
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <KPITile
                    label="Study Minutes"
                    value={mockKPIs.thirtyDays.studyMinutes}
                    unit="min"
                    trend={3}
                    icon={SchoolIcon}
                    color="primary"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <KPITile
                    label="Tasks Completed"
                    value={mockKPIs.thirtyDays.tasksCompleted}
                    unit="tasks"
                    trend={5}
                    icon={AssignmentIcon}
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <KPITile
                    label="Breaks Taken"
                    value={mockKPIs.thirtyDays.breaksTaken}
                    unit="breaks"
                    trend={1}
                    icon={FitnessCenterIcon}
                    color="success"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <KPITile
                    label="Focus Score"
                    value={mockKPIs.thirtyDays.focusScore}
                    unit="/100"
                    trend={-1}
                    icon={TrendingUpIcon}
                    color="warning"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Streak Card */}
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <StreakCard
                  current={mockStreakData.current}
                  allTimeBest={mockStreakData.allTimeBest}
                  nextMilestone={mockStreakData.nextMilestone}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: 2, border: '1px solid #e2e8f0' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    📊 What Changed
                  </Typography>
                  <Stack spacing={1}>
                    {plannedBlocks.length > 0 ? (
                      plannedBlocks.map((block) => (
                        <Box key={block.id} sx={{ p: 1.5, backgroundColor: '#f0fdf4', borderRadius: 1, borderLeft: '4px solid #10b981' }}>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            ✅ {block.title}
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            {block.timeSlot}
                          </Typography>
                        </Box>
                      ))
                    ) : (
                      <Typography variant="body2" color="textSecondary">
                        Accept a recommendation to see your planned blocks here.
                      </Typography>
                    )}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Charts Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Analytics
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <DailyStudyChart data={mockDailyStudyData} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TasksByCategoryChart data={mockTasksByCategory} />
              </Grid>
              <Grid item xs={12} md={4}>
                <WorkBreakRatioChart data={mockWorkBreakRatio} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Recommendations Drawer */}
      <RecommendationsDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        recommendations={mockRecommendations}
        onAccept={handleAcceptRecommendation}
        onModify={handleModifyRecommendation}
        onDecline={handleDeclineRecommendation}
        acceptedRecommendations={acceptedRecommendations}
      />

      {/* Toast Notification */}
      <Toast
        open={toastOpen}
        message={toastMessage}
        onClose={() => setToastOpen(false)}
        severity={toastSeverity}
      />
    </ThemeProvider>
  );
}

export default App;
