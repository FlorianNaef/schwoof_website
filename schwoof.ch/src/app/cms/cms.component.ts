import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, setDoc, addDoc, getFirestore } from "firebase/firestore"; 

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})
export class CmsComponent {

  async addNews() {
    await addDoc(collection(db, "news"), {
      title: (<HTMLInputElement>document.getElementById('newsTitleInput')).value,
      when: Date.parse((<HTMLInputElement>document.getElementById('newsWhenInput')).value),
      html: (<HTMLInputElement>document.getElementById('newsHTMLInput')).value
    })
  }

  async updatePlan() {
    await setDoc(doc(db, "plan", "planDoc"), {
      planArray: [(<HTMLInputElement>document.getElementById('planInput')).value]
    });
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
