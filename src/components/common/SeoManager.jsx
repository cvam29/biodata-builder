import { useEffect } from 'react';

const ensureLink = (rel) => {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  return el;
};

const ensureMeta = (nameOrProperty, isProperty = false) => {
  const selector = isProperty ? `meta[property="${nameOrProperty}"]` : `meta[name="${nameOrProperty}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    if (isProperty) el.setAttribute('property', nameOrProperty);
    else el.setAttribute('name', nameOrProperty);
    document.head.appendChild(el);
  }
  return el;
};

const parseHashPath = (hash) => {
  // Accepts formats like '#/builder', '#/builder?x=1', '#/section/sub#anchor' etc.
  const raw = hash.replace(/^#/, '');
  // split off query string
  const [pathPartRaw, queryAndHash] = raw.split('?');
  const pathPart = pathPartRaw || '/';
  // If there is a query part, keep up to first '#' (hash inside hash is unlikely but safe)
  let query = '';
  if (queryAndHash) {
    const q = queryAndHash.split('#')[0];
    if (q) query = '?' + q;
  }
  // ensure leading slash
  const cleanPath = pathPart.startsWith('/') ? pathPart : '/' + pathPart;
  return { cleanPath, query };
};

const getCanonicalForLocation = () => {
  try {
    const { origin, pathname, hash, search } = window.location;
    if (hash && hash.startsWith('#')) {
      const { cleanPath, query } = parseHashPath(hash);
      return origin + cleanPath + (query || '');
    }
    return origin + pathname + (search || '');
  } catch (e) {
    return '/';
  }
};

const SeoManager = () => {
  useEffect(() => {
    const update = () => {
      const canonical = getCanonicalForLocation();
      const link = ensureLink('canonical');
      link.setAttribute('href', canonical);

      // Keep og:url in sync
      const og = ensureMeta('og:url', true);
      og.setAttribute('content', canonical);
    };

    // Initial set
    update();

    // Listen to history and hash changes (HashRouter uses hash)
    window.addEventListener('hashchange', update);
    window.addEventListener('popstate', update);

    return () => {
      window.removeEventListener('hashchange', update);
      window.removeEventListener('popstate', update);
    };
  }, []);

  return null;
};

export default SeoManager;
