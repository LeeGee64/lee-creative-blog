export async function getSortedLibraryData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('..');
    return res.json();
  }
  