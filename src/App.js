import './App.css';
import FullName from './Profile/Component/FullName';
import ProfilePhoto from './Profile/Component/ProfilePhoto';
import Bio from './Profile/Component/Bio';
import profession from './Profile/Component/Proffesion';

function App() {
  return (
    <div className="App">
      <h1>Good morning</h1>
      <FullName Name ='I am ahmed sallami' />
      <ProfilePhoto ProfilePhoto={ProfilePhoto}/>
      <profession profession ='farming'/>
    </div>
  );
}

export default App;
