import { useCallback } from 'react';
import {
  doc, getDoc, setDoc, updateDoc,
  collection, addDoc, getDocs, deleteDoc, serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';

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
  const { user } = useAuth();

  // ── Checklist progress ──────────────────────────────────────────
  const saveChecklistProgress = useCallback(async (checkedItems) => {
    if (!user) {
      writeJSON(CHECKLISTS_KEY, checkedItems);
      return;
    }
    const ref = doc(db, 'users', user.uid, 'data', 'checklists');
    await setDoc(ref, { checkedItems, updatedAt: serverTimestamp() }, { merge: true });
  }, [user]);

  const loadChecklistProgress = useCallback(async () => {
    if (!user) return readJSON(CHECKLISTS_KEY, {});
    const ref = doc(db, 'users', user.uid, 'data', 'checklists');
    const snap = await getDoc(ref);
    return snap.exists() ? (snap.data().checkedItems || {}) : {};
  }, [user]);

  // ── Saved properties ────────────────────────────────────────────
  const saveProperty = useCallback(async ({ zillowUrl, notes = '', strategy = '' }) => {
    if (!user) {
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
    }
    const ref = collection(db, 'users', user.uid, 'properties');
    const docRef = await addDoc(ref, {
      zillowUrl,
      notes,
      strategy,
      savedAt: serverTimestamp(),
    });
    return docRef.id;
  }, [user]);

  const loadProperties = useCallback(async () => {
    if (!user) return readJSON(PROPERTIES_KEY, []);
    const ref = collection(db, 'users', user.uid, 'properties');
    const snap = await getDocs(ref);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }, [user]);

  const updateProperty = useCallback(async (propertyId, updates) => {
    if (!user) {
      const properties = readJSON(PROPERTIES_KEY, []);
      const next = properties.map(p => p.id === propertyId ? { ...p, ...updates } : p);
      writeJSON(PROPERTIES_KEY, next);
      return;
    }
    const ref = doc(db, 'users', user.uid, 'properties', propertyId);
    await updateDoc(ref, { ...updates, updatedAt: serverTimestamp() });
  }, [user]);

  const deleteProperty = useCallback(async (propertyId) => {
    if (!user) {
      const properties = readJSON(PROPERTIES_KEY, []);
      writeJSON(PROPERTIES_KEY, properties.filter(p => p.id !== propertyId));
      return;
    }
    const ref = doc(db, 'users', user.uid, 'properties', propertyId);
    await deleteDoc(ref);
  }, [user]);

  return {
    saveChecklistProgress,
    loadChecklistProgress,
    saveProperty,
    loadProperties,
    updateProperty,
    deleteProperty,
  };
};
