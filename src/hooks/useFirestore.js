

// file that did all the lifting to get the pictures from firebase

import { useState, useEffect } from "react";
import { projectFirestore } from "../components/firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
   const unsub = projectFirestore.collection(collection)
    
    .orderBy('createdAt', 'desc')
    .onSnapshot((snap) => {
      let documents = [];

      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents)
    });

        // clean up function
    return() => unsub()
  }, [collection]);

  return {docs};
};

export default useFirestore;
