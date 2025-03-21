import Header from "../Header/header";
import NavigationBar from "../navbar/NavigationBar";
import "./about.css"

export default function About(){
    return(
<div>
        <NavigationBar/>
    <section class="about-intro">
      <h1>How the category system works</h1>
      <p>Each player is designated a category based on their perceived skill level and current performance. Category 1 indicates a player of the highest level and typically will include professional or veteran players. On the end, category 8 typically indicates that the player is a beginner.</p>
    </section>

    <section class="about-details">
      <h2>How categories are decided</h2>
      <p>At Rack Cafe, our mission is to provide a platform for players, enthusiasts, and supporters to come together and share their passion. We strive to create an inclusive and accessible space for everyone to thrive.</p>
      <h2>What categories are used for</h2>
      <p>When organising competitions and tournaments, categories can give a good indication of a player's skill level to the tournament's organisers allowing them to give appropriate handicaps. This allows for a more level playing field where an event is open to players of all skill levels.</p>
    </section>

  <footer>
    <p>&copy; 2025 Rack Cafe. All rights reserved.</p>
  </footer>
  </div>
    );
}