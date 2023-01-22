import UserCard from "./components/UserCard";
import ActivityCard from "./components/ActivityCard";
import imgWork from "./images/icon-work.svg";
import imgPlay from "./images/icon-play.svg";
import imgStudy from "./images/icon-study.svg";
import imgExercise from "./images/icon-exercise.svg";
import imgSocial from "./images/icon-social.svg";
import imgSelfCare from "./images/icon-self-care.svg";

function App() {
  return (
    <main className="App">
      <UserCard />
      <ActivityCard 
        activityName={"Work"} 
        time={"32"} 
        lastTime={"36"} 
        color={"hsl(15, 100%, 70%)"}
        imgUrl={imgWork}
        gridColumn={"3 / 4"}
        gridRow={"2 / 3"}
      />
      <ActivityCard 
        activityName={"Play"} 
        time={"10"} 
        lastTime={"8"} 
        color={"hsl(195, 74%, 62%)"}
        imgUrl={imgPlay}
        gridColumn={"4 / 5"}
        gridRow={"2 / 3"}
      />
      <ActivityCard 
        activityName={"Study"} 
        time={"4"} 
        lastTime={"7"} 
        color={"hsl(348, 100%, 68%)"}
        imgUrl={imgStudy}
        gridColumn={"5 / 6"}
        gridRow={"2 / 3"}
      />
      <ActivityCard 
        activityName={"Exercise"} 
        time={"4"} 
        lastTime={"5"} 
        color={"hsl(145, 58%, 55%)"}
        imgUrl={imgExercise}
        gridColumn={"3 / 4"}
        gridRow={"3 / 4"}
      />
      <ActivityCard 
        activityName={"Social"} 
        time={"5"} 
        lastTime={"10"} 
        color={"hsl(264, 64%, 52%)"}
        imgUrl={imgSocial}
        gridColumn={"4 / 5"}
        gridRow={"3 / 4"}
      />
      <ActivityCard 
        activityName={"Self Care"} 
        time={"2"} 
        lastTime={"2"} 
        color={"hsl(43, 84%, 65%)"}
        imgUrl={imgSelfCare}
        gridColumn={"5 / 6"}
        gridRow={"3 / 4"}
      />
    </main>
  );
}

export default App;
