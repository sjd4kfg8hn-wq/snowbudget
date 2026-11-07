const STORAGE_KEY = 'snowbudget_v2_data';

export function loadFromStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}

export function saveToStorage(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
