import { useCallback } from 'react';

const CHECKLISTS_KEY = 'homebuyer:checklists';
const PROPERTIES_KEY = 'homebuyer:properties';

const readJSON = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const writeJSON = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const useFirestore = () => {
  // ── Checklist progress ──────────────────────────────────────────
  const saveChecklistProgress = useCallback(async (checkedItems) => {
    writeJSON(CHECKLISTS_KEY, checkedItems);
  }, []);

  const loadChecklistProgress = useCallback(async () => {
    return readJSON(CHECKLISTS_KEY, {});
  }, []);

  // ── Saved properties ────────────────────────────────────────────
  const saveProperty = useCallback(async ({ zillowUrl, notes = '', strategy = '' }) => {
    const properties = readJSON(PROPERTIES_KEY, []);
    const id = crypto.randomUUID();
    properties.push({
      id,
      zillowUrl,
      notes,
      strategy,
      savedAt: { seconds: Math.floor(Date.now() / 1000) },
    });
    writeJSON(PROPERTIES_KEY, properties);
    return id;
  }, []);

  const loadProperties = useCallback(async () => {
    return readJSON(PROPERTIES_KEY, []);
  }, []);

  const updateProperty = useCallback(async (propertyId, updates) => {
    const properties = readJSON(PROPERTIES_KEY, []);
    const next = properties.map(p => p.id === propertyId ? { ...p, ...updates } : p);
    writeJSON(PROPERTIES_KEY, next);
  }, []);

  const deleteProperty = useCallback(async (propertyId) => {
    const properties = readJSON(PROPERTIES_KEY, []);
    writeJSON(PROPERTIES_KEY, properties.filter(p => p.id !== propertyId));
  }, []);

  return {
    saveChecklistProgress,
    loadChecklistProgress,
    saveProperty,
    loadProperties,
    updateProperty,
    deleteProperty,
  };
};
