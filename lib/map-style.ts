const mapLayerColors: Record<string, string> = {
  RECIPIENT: '#984f2a',
  WRITING_CONTEXT: '#3e6d83',
  EVENT: '#984f2a',
  JOURNEY: '#3e6d83',
  UNCERTAIN: '#765e9c',
  CHURCH: '#984f2a',
  MISSION: '#3e6d83',
  ROME: '#765e9c',
  CROSSING: '#3e6d83',
  CONQUEST: '#984f2a',
  INHERITANCE: '#765e9c',
};

export function getMapLayerColor(layer: string) {
  return mapLayerColors[layer] ?? '#765e9c';
}

export function getMapPlaceLabel(title: string) {
  return title.split(' — ')[0];
}
