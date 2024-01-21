import { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, get, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDVHQ5FrCJQCFG4_tl1ZwzkG7gGFEtgl-k",
  authDomain: "portfolio-db-e878f.firebaseapp.com",
  databaseURL: "https://portfolio-db-e878f-default-rtdb.firebaseio.com",
  projectId: "portfolio-db-e878f",
  storageBucket: "portfolio-db-e878f.appspot.com",
  messagingSenderId: "436652887465",
  appId: "1:436652887465:web:f55cfcfaa15235ee1ec8b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FirebaseContext = createContext(null);

const db = getDatabase(app);

export const FirebaseProvider = ({ children }) => {
  const [database, setDatabase] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get(ref(db)).then((snapshot) => {
      if (snapshot.exists()) {
        setDatabase(snapshot.val());
        setLoading(false);
      } else {
        console.log("No data available");
      }
    });
  }, []);

  return (
    <FirebaseContext.Provider value={database}>
      {!loading && children}
    </FirebaseContext.Provider>
  );
};
