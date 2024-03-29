import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, getDoc, getFirestore } from "firebase/firestore"; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.getPlan();
  }

  async getPlan() {
    const jahresplan = await getDoc(doc(db, "plan", "planDoc"));
    console.log(jahresplan);
    document.getElementById("planP")!.innerHTML = jahresplan.data()!['planArray'];
  }

}

const firebaseConfig = {   
  apiKey: (["U","b","6","c","W","x","2","l","H","w","n","A","F","Z","d","c","R","t","o","9","X","R","2","E","B","K","I","H","y","q","A","I","C","y","S","a","z","I","A"].reverse()).join(""),
  authDomain: "schwoof-79c1a.firebaseapp.com",
  projectId: "schwoof-79c1a",
  storageBucket: "schwoof-79c1a.appspot.com",
  messagingSenderId: "415440164535",
  appId: "1:415440164535:web:7b9ef6141f4c6d34e25f32",
  measurementId: "G-C7QJFYMY3M"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore();
