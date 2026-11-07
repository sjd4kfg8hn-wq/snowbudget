export function calculateWaypoints(progressPercent) {
  const waypoints = [
    { label: 'Base del valle', percent: 0 },
    { label: 'Primer refugio', percent: 25 },
    { label: 'Zona glaciar', percent: 50 },
    { label: 'Cumbre cercana', percent: 75 },
    { label: 'Cima alcanzada', percent: 100 }
  ];

  let currentStage = waypoints[0];
  for (let wp of waypoints) {
    if (progressPercent >= wp.percent) {
      currentStage = wp;
    }
  }

  return {
    waypoints,
    currentStage,
    progressPercent: Math.min(100, Math.max(0, progressPercent))
  };
}
