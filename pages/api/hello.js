// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function getAllBooks() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..'); // include endpoint for MongoDB
  const books = await res.json();
  return console.log(books); //return list of books 
}

//copy over fetch functions from POSTman

