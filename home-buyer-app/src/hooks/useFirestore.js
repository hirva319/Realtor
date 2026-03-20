import { useCallback } from 'react';
import {
  doc, getDoc, setDoc, updateDoc,
  collection, addDoc, getDocs, deleteDoc, serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';

export const useFirestore = () => {
  const { user } = useAuth();

  // ── Checklist progress ──────────────────────────────────────────
  const saveChecklistProgress = useCallback(async (checkedItems) => {
    if (!user) return;
    const ref = doc(db, 'users', user.uid, 'data', 'checklists');
    await setDoc(ref, { checkedItems, updatedAt: serverTimestamp() }, { merge: true });
  }, [user]);

  const loadChecklistProgress = useCallback(async () => {
    if (!user) return {};
    const ref = doc(db, 'users', user.uid, 'data', 'checklists');
    const snap = await getDoc(ref);
    return snap.exists() ? (snap.data().checkedItems || {}) : {};
  }, [user]);

  // ── Saved properties ────────────────────────────────────────────
  const saveProperty = useCallback(async ({ zillowUrl, notes = '', strategy = '' }) => {
    if (!user) return;
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
    if (!user) return [];
    const ref = collection(db, 'users', user.uid, 'properties');
    const snap = await getDocs(ref);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }, [user]);

  const updateProperty = useCallback(async (propertyId, updates) => {
    if (!user) return;
    const ref = doc(db, 'users', user.uid, 'properties', propertyId);
    await updateDoc(ref, { ...updates, updatedAt: serverTimestamp() });
  }, [user]);

  const deleteProperty = useCallback(async (propertyId) => {
    if (!user) return;
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
