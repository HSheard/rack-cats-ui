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
      <h2>What categories are used for</h2>
      <p>When organising competitions and tournaments, categories can give a good indication of a player's skill level to the tournament's organisers allowing them to give appropriate handicaps. This allows for a more level playing field where an event is open to players of all skill levels.</p>
      <h2>Who decides the categories?</h2>
      <p>Categories are decided by a committee from the local area who will assess your performance in recent tournaments/flyers and designate a category. A category is not permanent and is subject to change if a player is performing consistently at a standard below or above their current category.</p>
      <h2>About this website</h2>
      <p>This website is currently still under development. There are a few very apparent visual issues particularly with mobile. There are more features yet to come over the coming weeks. For any technical issues/queries please get in touch. Any feedback on the UI/UX of the site is greatly appreciated as it is not my area of expertise!</p>
    </section>

  <footer>
    <p>&copy; 2025 Rack Cafe. All rights reserved.</p>
  </footer>
  </div>
    );
}