import './App.css';
import NavBar from './component/NavBar';
import ProfileCard from './component/ProfileCard';
import PostCard from './component/PostCard';
import AddFeedItems from './component/AddFeedItem';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ProfileCard/>
      <PostCard/>
      <AddFeedItems/>
    </div>
  );
}

export default App;
