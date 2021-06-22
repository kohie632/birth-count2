console.log(Name);
// const Name = "Chieko"
const bir = {month:Number(birm), day:Number(bird)};
console.log(bir)

function greet(){
  const now = new Date();
  const nowTime = now.getHours()+1;
  let greet = "";　

  if(now.getMonth()+1 === bir.month && now.getDate() === bir.day){
    console.log(now.getMonth()+1,now.getDate())
    greet = "Happy Birthday " + Name + "!"
  }else{
    console.log(now.getMonth()+1,now.getDate())
    console.log(nowTime)
    if (5 <= nowTime && nowTime < 12 ){
      greet = "Good Morning " + Name + ".";
    }
    if (12 <= nowTime && nowTime < 16){
      greet = "Good Afternoon " + Name + ".";
    }
    if (16 <= nowTime && nowTime < 20){
      greet = "Good Evening " + Name + ".";
    }
    if (20 <= nowTime || nowTime < 5){
      greet = "Good Night " + Name + ".";
    }
    console.log("greet",greet)
  }
  console.log("greet",greet)
  document.getElementById("greet").textContent = greet;
  setTimeout(countdown,1000*60);//1分ごとに繰り返す
}

function word(){
  const now = new Date();
  const min = 0;
  const max = Words.length-1;
  const num = Math.floor(Math.random() * (max - min) + min);
  document.getElementById("word").textContent = Words[num];
  document.getElementById("author").textContent = "- "+Authors[num]+" -";
  setTimeout(countdown,1000*60);//10分ごとに繰り返す
}

function countdown(){
  const now = new Date();//今の時間
  const b1 = new Date(now.getFullYear(), bir.month - 1, bir.day);
  const b2 = new Date(now.getFullYear(), bir.month - 1, bir.day + 1);
  const b3 = new Date(now.getFullYear() + 1, bir.month - 1, bir.day);

  if(now < b1){ //誕生日前
    const differ=b1.getTime()-now.getTime();//あと何秒か計算
    const sec=Math.floor(differ/1000)%60;//ミリ秒を秒に直してから
    const min=Math.floor(differ/1000/60)%60;//1時間=60分だからね
    const hour=Math.floor(differ/1000/60/60)%24;
    const days=Math.floor(differ/1000/60/60/24);
    if (days>1){
      document.getElementById("bcounter").textContent = days+"days "+String(hour).padStart(2,"0")+":"+String(min).padStart(2,"0")+":"+String(sec).padStart(2,"0");
    } else {
      document.getElementById("bcounter").textContent = String(hour).padStart(2,"0")+":"+String(min).padStart(2,"0")+":"+String(sec).padStart(2,"0");
    }
    document.getElementById("bctext").textContent = "untill your Birthday."
  }else{
    if (now < b2){  //誕生日当日
      //誕生日終了までの時間を計算
      const differ=b2.getTime()-now.getTime();//あと何秒か計算
      const sec=Math.floor(differ/1000)%60;//ミリ秒を秒に直してから
      const min=Math.floor(differ/1000/60)%60;//1時間=60分だからね
      const hour=Math.floor(differ/1000/60/60);
      document.getElementById("bcounter").textContent = String(hour).padStart(2,"0")+":"+String(min).padStart(2,"0")+":"+String(sec).padStart(2,"0");
      document.getElementById("bctext").textContent = "untill the end of your Birthday."
    }else{  //誕生日後
      // const b3 = new Date(now.getFullYear()+1, 6 - 1, 20);//次の誕生日
      const differ=b3.getTime()-now.getTime();//あと何秒か計算
      const sec=Math.floor(differ/1000)%60;//ミリ秒を秒に直してから
      const min=Math.floor(differ/1000/60)%60;//1時間=60分だからね
      const hour=Math.floor(differ/1000/60/60)%24;
      const days=Math.floor(differ/1000/60/60/24);
      document.getElementById("bcounter").textContent = days+"days "+String(hour).padStart(2,"0")+":"+String(min).padStart(2,"0")+":"+String(sec).padStart(2,"0");
      document.getElementById("bctext").textContent = "untill your Birthday."
    }
  }
  if(Math.floor(now.getTime()/1000)%60 === 0){
    greet();
  }
  setTimeout(countdown,1000);//1秒毎に繰り返す
}

function test(){
  const w = ["h1","h2","h3","h4","h5","h6","h7","h8","h9",]
  for(let i=0; i<100; i++){
    const min = 0;
    const max = w.length;
    const n = Math.floor(Math.random() * (max - min) + min);
    console.log(w[n])
  }
}

greet();
word();
countdown();