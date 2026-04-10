export function disposeObject3D(root) {
  if (!root) return;
  try {
    root.traverse((obj) => {
      try {
        obj.geometry?.dispose?.();
      } catch {}
      try {
        const m = obj.material;
        if (Array.isArray(m)) m.forEach((x) => x?.dispose?.());
        else m?.dispose?.();
      } catch {}
    });
  } catch {}
}

