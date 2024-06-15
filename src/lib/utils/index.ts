export const filterEntries = (entries: any[], key: string): any[] => {
  return entries.reduce((filtered, entry) => {
    if (entry.href && entry.href.startsWith(key)) {
      filtered.push(entry);
    } else if (entry.entries) {
      const filteredSubEntries = filterEntries(entry.entries, key);
      if (filteredSubEntries.length > 0) {
        filtered.push({
          ...entry,
          entries: filteredSubEntries,
        });
      }
    }
    return filtered;
  }, []);
};

export const getRootPath = (path: string): string => {
  // Remove leading and trailing slashes, then split the path into parts
  const parts = path.replace(/^\/|\/$/g, "").split("/");
  // Return the first part with a leading slash
  return `/${parts[0]}`;
};
