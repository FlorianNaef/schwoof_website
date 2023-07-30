import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore"; 

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  newsList: any = [];

  ngOnInit(): void {
    this.getPlan();
  }

  async getPlan() {
    const querySnapshot = await getDocs(collection(db, "news"));

    if(querySnapshot.size > 0){
      querySnapshot.forEach((doc) => {
        let news = {id:`${doc.id}`, title: doc.data()['title'], when: doc.data()['when'], html: doc.data()['html']}
        if(news != null){
          this.newsList.push(news);
        }
        console.log(this.newsList);
      });
    }else{
      console.log("%ccollection empty :(","color: red");
    }

    this.newsList.sort((a: { when: { seconds: number; }; }, b: { when: { seconds: number; }; }) => {
      return a.when.seconds - b.when.seconds;
    })

    for (let i = 0; i < this.newsList.length; i++){

      let div = document.createElement("div");
      div.setAttribute("class", "newsDivs")

      let title = document.createElement("h1");
      title.setAttribute("class", "newsTitles");
      title.innerText = this.newsList[i].title;
      div.appendChild(title);

      let when = document.createElement("p");
      when.setAttribute("class", "newsWhens");
      when.innerText = new Date(this.newsList[i].when).toLocaleString();
      div.appendChild(when);

      let html = document.createElement("div");
      html.setAttribute("class", "newsHTML");
      html.innerHTML = this.newsList[i].html;
      div.appendChild(html);

      document.getElementById("newsContainer")?.appendChild(div);

    }
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
