import NavigationBar from "../navbar/NavigationBar";
import "./login.css"
export default function Login(){return (<div>
    <NavigationBar/>
        <div class="login-container">
        <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required/>
            
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required/>
            
            <button type="submit">Login</button>
        </form>
    </div>
    
</div>)

}